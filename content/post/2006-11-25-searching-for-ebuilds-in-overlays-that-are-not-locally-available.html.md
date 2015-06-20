---
author: alberts
comments: true
date: 2006-11-25 
layout: post
slug: searching-for-ebuilds-in-overlays-that-are-not-locally-available
title: Searching For Ebuilds In Overlays That Are Not Locally Available
categories:
- Tips and Tricks
---

With the diverse array of overlays now available to the community, one of the issues a person might have is finding that overlay that is just right for the package they are looking to install. Unfortunately, the default search capabilities of portage are only able to search though overlays that have already been installed on your system. Stefan Schweizer has written an excellent article at his Planet Gentoo blog this week detailing the workings of a tool that makes searching through remote overlays a much easier task than ever before.

The package for this task is app-portage/eix. You will need to unmask it to get all the latest and greatest features:

**Code Listing 4.1: Installing app-portage/eix**



> # echo app-portage/eix >> /etc/portage/package.keywords
# emerge eix



Then, to make sure that eix has all the information it needs about all the available overlays, you can issue the following commands to update it:

**Code Listing 4.2: Updating eix's global overlay list
**


> # update-eix
# update-eix-remote update



eix is now able to search for packages in all of the available overlays in the global layman list as well the official portage tree.

**Code Listing 4.3: Searching for packages
**


> # eix -e xmms

[D] media-sound/xmms
Available versions:  [M]1.2.8-r5[2] [M]1.2.10-r6[2] [M]1.2.10-r8[2]
[M]1.2.10-r14 [M]1.2.10-r14[3] [M]1.2.10-r15 [M]1.2.10-r15[3]
[M]1.2.10-r16 [M]1.2.10-r16[3] [M]20101010[1]
Installed:           1.2.10-r15[01:54:46 08/29/06][nls esd mmx
vorbis 3dnow mikmod -directfb alsa oss arts -jack -sndfile -lirc
-flac mad mp3]
Homepage:            http://xmms.org
Description:         X Multimedia System

[1] (layman/fluidportage)
[2] (layman/gentoojp)
[3] (layman/zugaina)



For more information, refer to the eix man page and the original blog post linked below.

    * http://planet.gentoo.org/developers/genstef/2006/11/03/searching_for_ebuilds_in_overlays_that_a
