---
author: alberts
tags: ['post']
comments: true
date: 2008-12-23 12:30:37
layout: post
slug: quickly-get-up-to-5-more-disk-space-from-your-ext3-volumes
title: Quickly get up to 5% more disk space from your ext3 volumes
wordpress_id: 97
categories:
- Gentoo
- Linux
- Tips and Tricks
tags:
- ext3
- Linux
- tips
---

I've seen many websites that have pretty much the same ext3 performance tips, but I just came across [this one](http://wiki.archlinux.org/index.php/Ext3_Filesystem_Tips) today that had something very useful on it.

It turns out that the ext3 filesystem by default reserves 5% of the disk space of the volume just in case the volume fills up.  This would allow the system to continue running and allow the root user to still log in and clean things up.  The problem is, 5% of a 300G drive is 15G, which is pretty excessive.  Like most things, this setting can be changed uisng the tune2fs program.  I changed my percentage of reserved blocks to 1% instead of 5% which freed up 10G on my drive.

This was very easy to do with the following:

    
    # tune2fs -m 1 /dev/sda1
