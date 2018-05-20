---
title: How to let ROS play happily with fish
layout: post
date: 2017-11-20 01:42:21
tags:
    - fish
    - ROS
category: Programming
description: Make ROS and fish shell great again.
---

`ROS` is a common platform for robot development. Normally it has some descent document, but not for [rosbash](http://wiki.ros.org/rosbash). It is stated in the document that

> The `rosbash` package includes limited support for `zsh` and `tcsh` by way of sourcing the `roszsh` or `rostcsh` files respectively. We currently do not provide documentation on these shells, though much of the functionality is similar to the bash shell extensions.

What if I want to use [fish shell](https://fishshell.com) instead of `bash`?  There is a file called `rosfish` [in Github](https://github.com/ros/ros/blob/lunar-devel/tools/rosbash/rosfish) but how to use that?

## Getting functionalities such as `roscd` and `rosed`

Instead of sourcing `source /opt/ros/lunar/setup.bash` as is told in the official document, go to your `~/.config/fish/config.fish ` file (which is essentially `.bashrc` for bash), add the following line:

```bash
source /opt/ros/kinetic/share/rosbash/rosfish
```

## Sourcing catkin workspace

To source your workspace, you can't just source the file in `devel/setup.bash` since it's written in shell script that fish do not understand. Instead, install [bass](https://github.com/edc/bass) as a bridge between fish and shell script. I recommend using [fisherman](https://github.com/fisherman/fisherman) for installing bass. 

Now every time you need to source your workspace, run this:

```bash
bass source devel/setup.bash
```

### I'm lazy. Is there a easier way?

I got you. Why sourcing scripts manually when everything can be automated? Let's use fish's excellent hook functionality to source the files for us.

Place the following file in `~/.config/fish/conf.d`, you can name it `catkin.autosource.fish` or whatever

```bash
function catkinSource --on-variable PWD
    status --is-command-substitution; and return
    if test -e ".catkin_workspace"
        bass source devel/setup.bash
        echo "Configured the folder as a workspace"
    end
end
```

The script monitor the variable `PWD`, which is the location you're at, if it changes, search for the `.catkin_workspace` file (which in the workspace when you create it). If it finds the file, the source it for you.

Happy fishing!