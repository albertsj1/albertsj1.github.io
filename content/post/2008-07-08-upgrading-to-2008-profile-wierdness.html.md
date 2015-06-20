---
author: alberts
comments: true
date: 2008-07-08 
layout: post
slug: upgrading-to-2008-profile-wierdness
title: Upgrading to 2008 profile wierdness
categories:
- Gentoo
---

At long last, Gentoo 2008.0 is out.  Yeah, I know.  If you already have Gentoo installed, who cares about a new release?  Releases are good for the distribution as a whole.  It stirs interest from people who haven't tried Gentoo and also inspires articles on websites and magazines.

Anyway... I decided to switch to the 2008.0 profile.  Usually, I just delete the /etc/make.profile symlink and create a new one to the latest and greatest profile.  This time I figured I would give eselect a try.  It changed the symlink fine, but I got the following error when trying to use emerge:

`!!! Unable to parse profile: '/etc/make.profile'`

`!!! ParseError: Parent '/usr/portage/profiles/releases/2008.0' not found: '/usr/portage/profiles/default/linux/amd64/2008.0/parent'.`

So, I deleted the symlink it created and did it manually.  Got the same error.  It turns out, some rsync servers either don't have or aren't propagating the new /usr/portage/profiles/releases directory.  After doing another emerge --sync, it created the releases directory for me and I was good to go. :)
