webpackJsonp([0x95631000b069],{447:function(a,e){a.exports={data:{site:{siteMetadata:{title:"Yanda's Lab",subtitle:"The existence of this blog fills you with determination.",copyright:"© All rights reserved.",menu:[{label:"Articles",path:"/"},{label:"Projects",path:"/projects/"},{label:"About me",path:"/about/"}],author:{name:"Yanda Huang",email:"yanda@cmu.edu",github:"yodahuang",rss:"#"}}},markdownRemark:{id:"/home/yanda/Development/yodahuang.github.io/src/pages/projects/ande/index.md absPath of file >>> MarkdownRemark",html:'<p>ANDE stands for Autonomous Navigation in Dynamic Environment. It’s a whole system that do SLAM and dynamic obstacle avoidance. The solution can be applied to a great number of robots in complex environments. The key difficulty is to recognize moving objects and predict their trajectory as well as accurate action control on a large four-wheel robot. We aim to solve the problem using model optimal control, and test our solutions on MagicBot. </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ande-784f7eebe8a5590a2c587f0dc34e7123-e106f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50.12658227848101%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAACKElEQVQoz3WRyW8ScRTH+XeMJy96NDExxhj17KEHCTWtNWBDq2CxxXQqlMoiMCzDOjDDMMzQBRgojYmJ8V5PnKAJisDAQKfALAgM/prUeDB+8w7v8D5v+T5VIYtn0OARmcimEkGP/ZDC8/uZL2Xma7lAooHiATYW+flMUmaSKAitVms0Gs3/SJWO+/Gw12PbMa6uoCFYt6ReXrj3uYAc0zAWMKcQSOJrM+nnVG4Lo0G7zQqC8BfOZVDL5uuXS+oIbI/7nSb9i1e6xWTIRaLeiM/p2LXKkgzqlKkoS+JIEIbDgSzLV7DZoNcuLsT9DizkDrttVvOGZw8CB6BBd9Tn/Gjd6LcrivR9Jjb6vU6tdtZsNkVRvIIh0zoRgYkonIp4XdatTaPB/GYt4Ngiw9tEwIQHty/O25eTFWX+j1QMjWWTIQpF8IifiEcTvvcrTx8g9nUadWHBPSrhEYfdmcwqUoNtN09Pv1Wr1Xq93mg0LuEijRUo9AP0Vres8dotDOHRqh+uPnuUje2AYNJukT+bT4FJM47rVioVYDjAJpMJ2EV1cpgu0UkHZIJMhndG/epz9e1b1x7fv3NEhMh4IEdTsjye/0eqT7kMQ8ZL4NcOyKjV3LxxXfPk7jFuLeK2fMJykvVJg5Yy4ZXpkOfPWZbt9/vdbpfjOJ7nAUyWKJRJx3KpMJOOwrtmAnGBJJ8KH2BIeT8mXfxQxh3lV6/f48CpnU4HtACegxa/AfgBvogOP56oAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="look"\n        title=""\n        src="/static/ande-784f7eebe8a5590a2c587f0dc34e7123-c83f1.png"\n        srcset="/static/ande-784f7eebe8a5590a2c587f0dc34e7123-569e3.png 240w,\n/static/ande-784f7eebe8a5590a2c587f0dc34e7123-93400.png 480w,\n/static/ande-784f7eebe8a5590a2c587f0dc34e7123-c83f1.png 960w,\n/static/ande-784f7eebe8a5590a2c587f0dc34e7123-e106f.png 1185w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2>What do I do and why is this hard?</h2>\n<p>This project does not use ROS or any preexisting framework / library, that means we made our own AMCL, rviz and ros-serial equivalent. By the time of the project, the idea of micro-service isn’t that popular either.</p>\n<p>I made the SLAM code and the whole software architecture of the robot. The backend is written surprising in… Node.js! It runs much faster than Python, while still having lots of libraries and is easier to integrate with frontend. However, due to some performance limitation, it can only spawn 50 particles at max… but that’s enough. As I mentioned, we need a rviz equivalent, so I spent huge amount of time making a web GUI by manipulating SVG. The GUI can show 2d map and lidar readings surprisingly well.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/lidar-aec459ea087ba11d94b52700976e6c9c-a12c2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 692px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 128.90173410404623%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAABYlAAAWJQFJUiTwAAADU0lEQVRIx51Ve0gTcRwfVNY/UUR/lIKg/VVREKSVGVhgau/HH73ICjG0xKzsAQ17UP/4AG2xmVZrpWFTM/CxaloKmo9MN8w5Z42mY06nNWdzurvbp91tt6bbbPrljvvd/T73uc/3eRw4zWazTbvSRpIkeg29MFqMrj329GUc9xuKcgC7FRS0AxRNCYnqHfqN/Y59G+X8Ov5PSH/VRaj6jao6klk3a5oh/VGLEfPIP5Ww+UfIuGI/1JN9+PT8G0j5b8iNXRB1iBjXWZV+ucwodLrUY+qDqqEe6B2DwqTC8w4hlAbl3AjdE/LLPIpWQwezVo+qUdjxBF1DXXNXyALpl5p+NoIgCAybDRB8EUA2KJufQtbtTr0Mg6ZBTJFT4LXx0DzQPI3QF6kHIQvUjPVDppcza347HxXKtx4Yb6ScmQ9Y0PjUOKTqWmYtlAsZUithhaMQ5qHQQlgg7hbbr5Mo6ylDRv1tFHTmY2hiwIml/q/QnVDyXYKrH65BZ9Lh3ff3SKtNQXI5Fy+lna6u8stlVy2OKHGu5hQaNPVo0rch8f0ZHH92HcWVGmef2/yPIQu8IHyMB3VZ9t7+jFNVR7Gn4DyqG4aZPYKk/C9sgnT0cW6FBofyD6P22C3sLd2DKP5JVEjUNMLuMryWj/cY2sFm2LNcLMPJ3P1ITkhH5NOdiM/cjapULuTjiunTx58Yqik9BBnxEF6MQkzqCay7sxOXc7biauYulGtqHHGkyNkVsmT99qK++fEmwl5HQpC2AacTIhB0ZTsucUOx4+FG5HzN89mGXglVv/oQVxKLTa+2ISwzGFlHlmNfymJE31iB4EdBSJNe9kjgrEkxW804XRmP9YVrsaRgJWKTA5B8LAChGYsQWBiCa9J0WKwWr6Q+Czu7NRsRLyKwSrAaC7MXIPwsB4vvc7DpxWYk1SThp1HjNTEehHSgaXujrEDs6zisKVgDTiYH9xrvIrxoC5bmLcOB0oOu6UPaSN8KWQBt7YPtiC6JRiA/CLyvPOaZ7o8OYUXhCMkPgUgu8poYn/NQa9Jid0kMxAoxc0/PRdoMEwbE2Ys8sTrRjxi6jSXjpBEt2pZpKgiKcJFyG7jQj+s95iLHWz+6A2a6xMZ46M8wtGNat1+rw/4CWtNnUm1xmRcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="lidar"\n        title=""\n        src="/static/lidar-aec459ea087ba11d94b52700976e6c9c-a12c2.png"\n        srcset="/static/lidar-aec459ea087ba11d94b52700976e6c9c-0f387.png 240w,\n/static/lidar-aec459ea087ba11d94b52700976e6c9c-ba3b9.png 480w,\n/static/lidar-aec459ea087ba11d94b52700976e6c9c-a12c2.png 692w"\n        sizes="(max-width: 692px) 100vw, 692px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>For the controller part, we definitely need a faster language, so that part is written in C++, and I glue them together using <a href="https://github.com/charto/nbind">nbind</a></p>\n<p>All the things are finished in 2 months.</p>\n<h2>More technical details</h2>\n<p>ANDE includes the following components:</p>\n<ul>\n<li>\n<p>SLAM (Simultaneous Localization and Mapping): </p>\n<ul>\n<li>Particle filter localization and occupancy grid mapping</li>\n<li>Integrate IMU for angle measurement</li>\n<li>Add side-slip to the action model</li>\n<li>Require very high accuracy map</li>\n</ul>\n</li>\n<li>\n<p>Obstacles detection and tracking:</p>\n<ul>\n<li>Filter out front-ground with proper size as obstacle candidates. </li>\n<li>Use particle filter to match the existing obstacles with new data frame. </li>\n<li>Destroy and create tracker automatically.</li>\n</ul>\n</li>\n<li>\n<p>Model predictive equilibrium point control (Path planner):</p>\n<ul>\n<li>Generate potential field based on Manhattan distance to the final destination as navigation guide. </li>\n<li>Design a cost function incorporating the penalty for the speed, angular velocity, possible collision with static &#x26; dynamic obstacles, and negative progress.. </li>\n<li>Pre-sample 200 trajectories as initial guess.</li>\n<li>Compute optimal short term goal based on the cost function using gradient descent.</li>\n</ul>\n</li>\n<li>\n<p>Low-level controller: </p>\n<ul>\n<li>Generate speed-independent curve to a given global position with direction. </li>\n<li>Compute velocity profile and angular velocity along the designed curve.</li>\n</ul>\n</li>\n<li>\n<p>PID velocity controller:</p>\n<ul>\n<li>Run at a high frequency on micro-controller</li>\n<li>Compute motor command according to the velocity and angular velocity commands.</li>\n</ul>\n</li>\n</ul>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/controller-69b527d9a1a3e6971137f1f66bedeb6f-1f278.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 36.01928374655647%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAABoElEQVQY0x2PXU/acBTG/wQS7lYMJJBU9CO0tVTGS5BAaa0kcyFrFetApL5xAQpe6ichShUdxJSX9CvwPUjjsoRoMkAsW7ILdmpO8uR5zsmT/A4qnZ5QFJlKscHgOs9zR0qRpimOg8hsbW0eK8V1JgAmFAp+3f6iFA9hLwibGxuxcPgzikajCCEXtgTqdrsZhrGiywXq8/noQOAjWlccx0mKAoN9whwOBxh0fXWV+75PkmQ6nd7LZi9rtX1ZJgmS53lZli/OzyFSa8DC5fP5SqWS3d0lKUIQhEwmg44UJR6PSztSMpmMxWKFQgFe+CaKLMtahVwO9pIkJRIJKBzkDzg2JYoinCKRCAqHQjab7axU8vv9GIYBtt1uL5fL+DLu8XgCNA2E1WoVmL1eL0EQTqezVq2trK5Y2IPBQG009HZbVdVms9nr9W5vbzpap93oPqg/tI5Wr9f1vq521cfuo/ak3d3f9fv9Vqul6zpaLBavLy+/DOPn87NhGMPh8PfYmj/Tf+ZsPh6Pp9Pp7G02+TuZmJP32btpmqPRaD6fQ/E/oOSjfuGfXCwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="controller"\n        title=""\n        src="/static/controller-69b527d9a1a3e6971137f1f66bedeb6f-c83f1.png"\n        srcset="/static/controller-69b527d9a1a3e6971137f1f66bedeb6f-569e3.png 240w,\n/static/controller-69b527d9a1a3e6971137f1f66bedeb6f-93400.png 480w,\n/static/controller-69b527d9a1a3e6971137f1f66bedeb6f-c83f1.png 960w,\n/static/controller-69b527d9a1a3e6971137f1f66bedeb6f-23e13.png 1440w,\n/static/controller-69b527d9a1a3e6971137f1f66bedeb6f-1f278.png 1452w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/map-013151730e338adc7f02a86d31e80c72-be3aa.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 538px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 93.3085501858736%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAABYlAAAWJQFJUiTwAAADIklEQVQ4y4VU21IaQRAlIvDFvviSKisv4uUhr/ELYiJCCgFRNFpEAZdld2dZWG7KguIVF4hcFE96hpASb5mqUzs7PXO6p/v0OBwOB9xuNzwezyTcHjg/TIn5q/Y34JiensbKygpisRhCoRDC4TDCkTCi4QhCgR/YCG0gwtf+g83NTQQCAThcLheCwSBKpRJ0XYdhGMhms8jlcri+uUG5XEbBLIj1tzDeL8vyiHB9fV0Y+EImk4GiKJCUDE5qFjkqQs0yZFRV2N6CSvZEIjEi9Pv9woMgI4MiZ2CGYjiVTZTzJ8gF98ESSSiaBpWcqaoiCMbgAWhkSyaTrxDyA4Ru08ZDb4DqiYW+3cExpYTfYEwgyP7ufZeQb+QHzy8vwUej0UBv0EfxKaEgo69G0Bn9v0eojCLIJFJ4HA7RbDbRarVE4p9GpjAN7GccLLQNhc69f2XyfLC1IyLsdDoCpmlO3CBfMPFIKaklGeQjCYyxtyLk3hl0Xwjtxjl69wPYt7cvCtDv93F9dQ1FYiIFmvpehEUTbDUIaSMstNhut4VGRSpoj23buLy+QlohmWmjovCUpFIpIqRO8ZPCOaHwTkhHtlH5vokCdUu3ZaPTakOV0pDoqrxIzZsWlOgB2O4vGEcydCLjOh4RetzwrX5DjumQeLU2tnG5k0CvcYWLeh1lyhXuh7Ai+6geSLglB82LJvoWOTq/QSlrTMpmih6HyOcvogBWvoDCfgLNUhV4fBRrOlWd54sP/uUS6rbuUKtYMExK03MdOolw++saBsMHdO/uMOj20LMauO/cCZIaVbdEReKjXWvAYjlohv6vTV92Cj1NvoAfOh2SSS5mdA/D312MR6tto2LVYEtZqPFD6mmKKKNMVH2ScNoF39oaslTFo3QabI8SvRuHXa4KwrPTMxiFAqrROORIDDIjHdI+HuEYafrn0R4eHo5ks7W1hToVoFQsolK3kE9I6GlFdIf3KNLTxduunDNRKdK3UhFP2nMcHx8L6TicTidmZmawvLyM+fl5eBcXMD/3CUsf52i+CC9f83rhXVggeEfzZ+DnlpaWMDs7iz8LxcK7wbgcTwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="map"\n        title=""\n        src="/static/map-013151730e338adc7f02a86d31e80c72-be3aa.png"\n        srcset="/static/map-013151730e338adc7f02a86d31e80c72-da24f.png 240w,\n/static/map-013151730e338adc7f02a86d31e80c72-f6647.png 480w,\n/static/map-013151730e338adc7f02a86d31e80c72-be3aa.png 538w"\n        sizes="(max-width: 538px) 100vw, 538px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',frontmatter:{title:"ANDE",date:null,description:"ANDE stands for Autonomous Navigation in Dynamic Environment. It's a whole system that do SLAM and dynamic obstacle avoidance using model predictive control."}}},pathContext:{slug:"/projects/ande/"}}}});
//# sourceMappingURL=path---projects-ande-a4ec1df336e1184570ed.js.map