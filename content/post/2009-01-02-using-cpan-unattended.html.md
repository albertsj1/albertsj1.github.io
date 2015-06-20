---
author: alberts
comments: true
date: 2009-01-02 
layout: post
slug: using-cpan-unattended
title: Using CPAN Unattended
categories:
- Gentoo
- Linux
- Tips and Tricks
tags:
- cpan
- Linux tips
- unattended
---

CPAN is great for easily installing and updating Perl modules.  I use it all of the time on my servers.  It's a lot easier than managing Perl modules through the systems package manager.  The problem is, when you want to install or update a Perl module, it asks you if you want to follow and install all of the dependencies and the dependencies for that... and so on.  Sometimes you want to be anal and make sure it doesn't install any extra crap, but quite often, it would be nice to just have it install what it needs automatically, so you can walk away and do other things while it's installing.
I found [this nice little blog post](http://rackerhacker.com/2009/01/01/cpan-automatically-install-dependencies-without-confirmation/) that shows you how to have CPAN automatically install all of the dependencies without prompting you.

