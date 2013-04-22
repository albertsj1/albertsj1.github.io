---
author: alberts
tags: ['post']
comments: true
date: 2009-10-27 12:37:47
layout: post
slug: installing-rubygems-on-centos-5
title: Installing RubyGems on Centos 5
wordpress_id: 159
categories:
- Gentoo
- Linux
- ruby
- Tips and Tricks
tags:
- gems
- ruby
- script
---

This should apply to RHEL5 as well, but I haven't verified yet.

The easiest solution I've found is to simply install Ruby and it's dependencies and then install RubyGems from source.

I've written a small script which installs Ruby and it's dependencies.  It then grabs the RubyGems source tarball and installs Gems from source.  As I wrote this to get a working [Chef](http://github.com/albertsj1/Misc-Scripts/raw/master/install_gems.sh) install, it also adds an opscode gems source.

You can get the script [here](http://github.com/albertsj1/Misc-Scripts/raw/master/install_gems.sh).
