const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const lost = require('lost');
const pxtorem = require('postcss-pxtorem');
const slash = require('slash');
const slugify = require('slugify');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/post-template.jsx');
    const pageTemplate = path.resolve('./src/templates/page-template.jsx');
    const tagTemplate = path.resolve('./src/templates/tag-template.jsx');
    const categoryTemplate = path.resolve('./src/templates/category-template.jsx');

    graphql(`
    {
      allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { draft: { ne: true } } },
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              layout
              category
            }
          }
        }
      }
    }
  `).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      _.each(result.data.allMarkdownRemark.edges, (edge) => {
        if (_.get(edge, 'node.frontmatter.layout') === 'page') {
          createPage({
            path: edge.node.fields.slug,
            component: slash(pageTemplate),
            context: { slug: edge.node.fields.slug }
          });
        } else if (_.get(edge, 'node.frontmatter.layout') === 'project') {
          // Let's just use page template for now and make a special project template later
          createPage({
            path: edge.node.fields.slug,
            component: slash(pageTemplate),
            context: { slug: edge.node.fields.slug }
          });
        } else if (_.get(edge, 'node.frontmatter.layout') === 'post') {
          createPage({
            path: edge.node.fields.slug,
            component: slash(postTemplate),
            context: { slug: edge.node.fields.slug }
          });

          let tags = [];
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags);
          }

          tags = _.uniq(tags);
          _.each(tags, (tag) => {
            const tagPath = `/tags/${_.kebabCase(tag)}/`;
            createPage({
              path: tagPath,
              component: tagTemplate,
              context: { tag }
            });
          });

          let categories = [];
          if (_.get(edge, 'node.frontmatter.category')) {
            categories = categories.concat(edge.node.frontmatter.category);
          }

          categories = _.uniq(categories);
          _.each(categories, (category) => {
            const categoryPath = `/categories/${_.kebabCase(category)}/`;
            createPage({
              path: categoryPath,
              component: categoryTemplate,
              context: { category }
            });
          });
        }
      });

      resolve();
    });
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'File') {
    const relativeDir = node.relativeDirectory;
    // There can also be time info in the path
    const folders = relativeDir.split(path.sep);
    const lastFolder = folders[folders.length - 1];
    const nameElements = lastFolder.split('---');
    console.assert(nameElements.length <= 2);
    if (nameElements.length === 2) {
      folders[folders.length - 1] = nameElements[1];
    }
    const slug = `/${folders.join(path.sep)}/`;
    createNodeField({ node, name: 'slug', value: slug });
  } else if (
    node.internal.type === 'MarkdownRemark' &&
    typeof node.slug === 'undefined'
  ) {
    const fileNode = getNode(node.parent);
    let slug = fileNode.fields.slug;
    if (typeof node.frontmatter.path !== 'undefined') {
      slug = node.frontmatter.path;
    }
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(tag => `/tags/${_.kebabCase(tag)}/`);
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (typeof node.frontmatter.category !== 'undefined') {
      const categorySlug = `/categories/${_.kebabCase(node.frontmatter.category)}/`;
      createNodeField({ node, name: 'categorySlug', value: categorySlug });
    }
  }

  if (node.internal.type === 'MarkdownRemark') {
    /**
     * Automatically infer date based on modified time
     */
    let date;
    if (typeof node.frontmatter.date !== 'undefined') {
      date = node.frontmatter.date;
    } else {
      date = getNode(node.parent).modifiedTime;
    }
    createNodeField({
      node,
      name: 'date',
      value: date
    });
    /**
     * Check whether the slug matches title
     */
    if (node.frontmatter.layout === 'post') {
      const slug = node.fields.slug;
      const parsedSlug = slug.split('/');
      const slugTitle = slug[slug.length - 1] === '/' ? parsedSlug[parsedSlug.length - 2] : parsedSlug[parsedSlug.length - 1];
      const realTitle = slugify(node.frontmatter.title);
      if (slugTitle !== realTitle) {
        console.warn(`The title of post : ${realTitle} does not match with folder name ${slugTitle}`);
      }
    }
  }
};

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    postcss: [
      lost(),
      pxtorem({
        rootValue: 16,
        unitPrecision: 5,
        propList: [
          'font',
          'font-size',
          'line-height',
          'letter-spacing',
          'margin',
          'margin-top',
          'margin-left',
          'margin-bottom',
          'margin-right',
          'padding',
          'padding-top',
          'padding-left',
          'padding-bottom',
          'padding-right',
          'border-radius',
          'width',
          'max-width'
        ],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
      })
    ]
  });
};
