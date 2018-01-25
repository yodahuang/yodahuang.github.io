---
title: How-to-Build-OpenRave-0.9-Yourself
date: 2018-01-24 22:34:32
tags: tech
---

## Overview

This blog covers instruction of how to build [OpenRave 0.9 from Personal Robotics Lab](https://github.com/personalrobotics/openrave) yourself on a Ubuntu Xenial (16.04) machine since the binary is not provided. The instruction is made by guessing and trying, so there might be some little bugs. I'm too lazy to write a shell script to do all of the things, so just get your hands dirty and follow it step by step.

## Before you start

Make sure your Python is the one that comes with the syste, which should be the case for most of the people. If you are a person like me who uses the fantastic [pyenv](https://github.com/pyenv/pyenv), just run `pyenv shell system`.

## Get dependencies

1. Get [Coin3D](https://bitbucket.org/Coin3D/coin/downloads/Coin-3.1.3.tar.gz). Unzip it.
2. Go inside the folder, run `./configure`, then run `make`, then `sudo make install`
3. Get [SoXt](https://bitbucket.org/Coin3D/coin/downloads/SoXt-1.3.0.tar.gz). Unzip it.
4. Go inside the folder, run `./configure`, then run `make`, then `sudo make install`
5. Install ODE:
```bash
# ode - Will need to install ODE from sources (do not use the one in the package manager)
wget https://downloads.sourceforge.net/project/opende/ODE/0.11.1/ode-0.11.1.tar.bz2
tar xjf ode-0.11.1.tar.bz2
cd ode-0.11.1
./configure --with-libccd=cyl-cyl --with-trimesh=opcode --enable-new-trimesh --disable-demos --enable-shared --with-arch=nocona --enable-release --enable-malloc --enable-ou --disable-asserts --with-pic --enable-double-precision
make -j4
sudo make install
```
6. Install Python dependencies: `sudo apt-get install libboost-python-dev python python-dev python-numpy ipython python-scipy`

## Build `openrave`

```bash
git clone git@github.com:personalrobotics/openrave.git
cd openrave
make
make install
```

Then add the `OPENRAVE_DATA` variable to your `bashrc`, note here the directory includes a `/local` part.

```
echo "export OPENRAVE_DATA=/usr/local/share/openrave-0.9/data/" >> ~/.bashrc
```

If you're using other shells such as `zsh` or `fish`, I think you know what to do.

---

Happy OpenRaving!