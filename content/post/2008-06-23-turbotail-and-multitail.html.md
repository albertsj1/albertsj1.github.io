---
author: alberts
comments: true
date: 2008-06-23 
slug: turbotail-and-multitail
title: Turbotail and multitail
categories:
- Gentoo
- Linux
---

I just found a couple cool programs called [turbotail](http://www.vanheusden.com/turbotail/) and [multitail](http://www.vanheusden.com/multitail/) while searching for rbot using eix.

Turbotail is just like tail, but it uses dnotify instead of auto refreshing a defined number of seconds.  I always thought it was kind of silly to keep refreshing the screen searching for new content with tail.  Turbotail just sits there until the kernel notifies of a change in the file that you are tail'ing and then it updates what you see.

Multitail looks like a VERY robust way of viewing multiple files.  It can tail any number of files and supports text filtering and even syntax highlighting.

Turbotail works great, but unfortunately multitail crashes when I try to run it from my Yakuake console.  I get this:

    
    --*- multitail 5.2.0 (C) 2003-2007 by folkert@vanheusden.com -*--
    
    A problem occured at line 511 in function mynewwin (from file term.c):
    
    Failed to create window with dimensions 55x9 at offset -27,-4 (terminal size: 167,19)


Seems to work just fine from a regular console though.  It will take me a while to actually learn all of the features of multitail.
