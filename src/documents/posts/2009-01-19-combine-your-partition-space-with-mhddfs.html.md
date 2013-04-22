---
author: alberts
tags: ['post']
comments: true
date: 2009-01-19 17:55:10
layout: post
slug: combine-your-partition-space-with-mhddfs
title: Combine your partition space with mhddfs.
wordpress_id: 120
categories:
- Gentoo
- Linux
- Tips and Tricks
tags:
- filesystems
- fuse
- Gentoo
- Linux
- mhddfs
- tips
---

As I was browsing the [Gentoo forums](http://forums.gentoo.org) today, I came across a [very interesting post](http://forums.gentoo.org/viewtopic-t-728753.html).

A user had 2 partitions on different hard drives that he wanted to combine the space on.  Ok, well the interesting part was [one persons reply](http://forums.gentoo.org/viewtopic-p-5402993.html#5402993) about a new fuse filesystem called [mhddfs](http://svn.uvw.ru/mhddfs/trunk/README).  He pointed out [an article](http://debaday.debian.net/2008/05/25/mhddfs-join-several-real-filesystems-together-to-form-a-single-larger-one/) on debian.net that explained a bit about this new filesystem and how to use it.

Sure, there's multiple ways to combine the two drives, but this one is pretty intesting.  You can use mhddfs to combine 2 partitions into one virtual partition.  Mhddfs will automatically merge (overlay) the contents of both partitions so it looks like one big partition.

The advantages are:



	
  1. No need to move and backup existing data on the partitions.

	
  2. Easily implemented in fuse.

	
  3. Allows a regular user to mount and unmount the filesystem.


According to the forum thread poster, his tests show there is virtually no speed difference when using mhddfs, which is very surprising.  My experience with using fuse in the past with NTFS, was that it was painfully slow.  I'm sure things have matured greatly since I tried it a few years ago.
