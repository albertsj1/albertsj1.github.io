---
author: alberts
tags: ['post']
comments: true
date: 2006-11-25 02:28:15
layout: post
slug: using-a-32-bit-mplayer-with-64-bit-kmplayer
title: Using a 32-bit mplayer with 64-bit kmplayer
wordpress_id: 70
categories:
- Tips and Tricks
---

On amd64 systems, you can use media-video/mplayer-bin to play multimedia files that require 32-bit only codecs (win32codecs), but mplayer doesn't look as good as the 64-bit native version and it doesn't integrate very well with the system. KDE users can emerge kmplayer - a KDE based "front end". If you use konqueror, kmplayer adds a plugin to the browser. For this tip to work, you will need to unmerge your native mplayer, if you have it. When you install kmplayer it will not work as there is no /usr/bin/mplayer.

**Code Listing 4.4: Creating the mplayer link
**


> ln -sf /usr/bin/mplayer-bin /usr/local/bin/mplayer



Now, the native kmplayer will play wmv files and you can "preview" them in konqueror.
