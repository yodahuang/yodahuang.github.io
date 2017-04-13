## Yanda's Blog
[![Build Status](https://travis-ci.org/yodahuang/yodahuang.github.io.svg?branch=src)](https://travis-ci.org/yodahuang/yodahuang.github.io)

### Blog Framework

Currently it's built using [Hexo](https://hexo.io/) in favor of its rich theme support and Node.js underlying hackable code.

An old version of blog using [Jekyll](https://jekyllrb.com/) can be found under the [jekyll-backup branch](https://github.com/yodahuang/yodahuang.github.io/tree/jekyll-backup)

### Theme

Using my forked version of  [Hexo](https://github.com/yodahuang/fexo) theme. The theme is tweaked to add better multi-language support and the changed has already [merged](https://github.com/forsigner/fexo/pull/49) into upstream.

### Automated publishing workflow

Since Github only support Jekyll natively, it's not very convenient to use other blog system. So [Travis CI](https://travis-ci.org/) is used to build the blog from the `src` branch, and dump the resulting files to `master` branch. The details can be seen in [.travis.yml](https://github.com/yodahuang/yodahuang.github.io/blob/src/.travis.yml).
