---
author: alberts
comments: true
date: 2009-09-10 
layout: post
slug: changing-the-from-field-when-sending-email
title: Changing the from field when sending email
categories:
- Gentoo
- Linux
- Tips and Tricks
---

This is simple, but I always forget how to do it when I need it and it's hard to find on google for some reason.

    
    echo "hi" | mail -s "My Subject" to@someone.com -- -f from@someone.com






