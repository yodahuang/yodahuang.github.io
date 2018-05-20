---
title: Build OpenCV with virtualenv and CUDA
date: 2018-04-16 14:08:00
category: Programming
tags:
    - OpenCV
---

Sometimes you just don't want to install `OpenCV` from `pip` or `conda` because you want some extra flexibility, i.e. add in GTK support. However, as a typical open source project, you need to dig in a lot of Stack Overflow and Github issue to finally figuring out how to do that.

(Before you're frustrated by ...)

> Duplicated question, closed
> nvm I solved that

So, here is the complete script for compiling with custom virtualenv and CUDA. You may need to change the Python path prefix, and I believe if you can find this blog  you know what I'm referring to.

```bash
# build/myBuild.sh
PREFIX_MAIN=`pyenv virtualenv-prefix`
PREFIX=`pyenv prefix`

cmake -D CMAKE_BUILD_TYPE=RELEASE \
  -D CMAKE_INSTALL_PREFIX="$PREFIX" \
  -D PYTHON3_LIBRARY="$PREFIX_MAIN"/lib/libpython3.6m.so \
  -D PYTHON3_INCLUDE_DIRS="$PREFIX_MAIN"/include/python3.6m \
  -D PYTHON3_EXECUTABLE="$PREFIX"/bin/python3.6 \
  -D PYTHON3_PACKAGES_PATH="$PREFIX"/lib/python3.6/site-packages/ \
  -D PYTHON3_NUMPY_INCLUDE_DIRS="$PREFIX"/lib/python3.6/site-packages/numpy/core/include \
  -D INSTALL_C_EXAMPLES=ON \
  -D INSTALL_PYTHON_EXAMPLES=ON \
  -D BUILD_DOCS=ON \
  -D BUILD_EXAMPLES=ON \
  -D BUILD_opencv_python3=ON \
  -D WITH_QT=ON -D WITH_GTK=ON -D WITH_OPENGL=ON \
  -D OPENCV_EXTRA_MODULES_PATH=../opencv_contrib/modules \
  -D PYTHON_DEFAULT_EXECUTABLE="$PREFIX"/bin/python3.6 \
  -D CUDA_NVCC_FLAGS:STRING="--expt-relaxed-constexpr" \
  -D CMAKE_CXX_FLAGS:STRING="-std=c++11 -Wno-deprecated-declarations" \
  -D CUDA_PROPAGATE_HOST_FLAGS=OFF ..
```

