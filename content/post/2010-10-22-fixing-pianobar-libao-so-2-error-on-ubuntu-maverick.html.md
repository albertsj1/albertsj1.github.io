---
author: alberts
comments: true
date: 2010-10-22 
layout: post
slug: fixing-pianobar-libao-so-2-error-on-ubuntu-maverick
title: Fixing pianobar libao.so.2 error on Ubuntu Maverick
categories:
- Linux
tags:
- pianobar
---

For anyone using [Pianobar](http://github.com/PromyLOPh/pianobar) and upgrading to Ubuntu Maverick, [Pianobar ](http://github.com/PromyLOPh/pianobar)would no longer run and would give the error:

    
    pianobar: error while loading shared libraries:
    libao.so.2: cannot open shared object file: No such file or directory


The solution I've found is to make sure you have libao-dev installed and then run:

    
    sudo ln -s /usr/lib/libao.so{.4.0.0,.2}
