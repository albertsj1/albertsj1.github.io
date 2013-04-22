---
author: alberts
tags: ['post']
comments: true
date: 2009-01-12 22:46:34
layout: post
slug: conky-now-supports-moc-player
title: Conky now supports MOC player
wordpress_id: 117
categories:
- Gentoo
- Linux
- Tips and Tricks
tags:
- conky
- Gentoo
- Linux
- moc
- music player
---

So, I found myself tweaking my Conky rc file today.  I've been using [mocp](http://www.google.com/url?sa=t&source=web&ct=res&cd=1&url=http%3A%2F%2Fmoc.daper.net%2F&ei=JBtsSZeABojINLuHpfUM&usg=AFQjCNEXfItHPaL2OA8gKWYwzeMelTPutg&sig2=XMGnh1GeJS8fjDR4r2_baQ) for playing music becuase it's a really lightweight, versatile and can run detached from the console.  I really wanted to see my currently playing music info on my desktop in [Conky](http://conky.sourceforge.net/), but Conky's documentation shows no mention of any support for moc and thier are no mention of variables to use for the config.

So, in doing some googling, I found a website that has [a patch for moc support](http://henux.nor.fi/coding/contrib/14-foss/8-conky-moc) and also mentions that it's been in Conky since September 28th!  I guess they haven't updated the documentation yet.

Here's a list of the new variables you can use in your conkyrc file to add moc support.



	
  * **$moc_state**: Current state of MOC; playing, stopped etc.

	
  * **$moc_file**: File name of the current MOC song.

	
  * **$moc_title**: Title of the current MOC song.

	
  * **$moc_artist**: Artist of the current MOC song.

	
  * **$moc_song**: The current song name being played in MOC.

	
  * **$moc_album**: Album of the current MOC song.

	
  * **$moc_totaltime**: Total length of the current MOC song.

	
  * **$moc_timeleft**: Time left in the current MOC song

	
  * **$moc_curtime**: Current time of the current MOC song.

	
  * **$moc_bitrate:** Bitrate in the current MOC song.

	
  * **$moc_rate**: Rate of the current MOC song.


