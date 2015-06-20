---
author: alberts
comments: true
date: 2008-12-31 
layout: post
slug: quick-and-dirty-linux-load-testing
title: Quick and Dirty Linux Load Testing
categories:
- Gentoo
- Linux
- Tips and Tricks
tags:
- Linux tips
- load testing
---

Today I had a need to keep the load on a server at 20 for an extended period of time.  I was doing this to test notification escalations in Nagios.  So, I found a nice little program call [cpuburn-i](http://users.bigpond.net.au/CPUburn/)n that will load a processor at 100%.  It's just a tarball with an executable and a single README file included.  To run the program, call the executable and supply the number of minutes you want it to run.  So, to run it for 60 minutes, just use:

    
    ./cpuburn-in 60


Since I wanted to generate a 20 load on the server for 60 minutes, I just put this in a loop and spawned 20 processes.

    
    i=1; while [ $i -le 20 ];do ./cpuburn-in 60 & i=$(( $i + 1 ));done


This worked nicely for keeping the load right around 20 for me.  If you want to kill things off early, just do the following:

    
    ps a | grep cpuburn-in | awk '{print $1}' | xargs kill



