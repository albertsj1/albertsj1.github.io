---
author: alberts
comments: true
date: 2012-08-07 
layout: post
slug: checking-file-permissions-with-ruby
title: Checking file permissions with Ruby
categories:
- ruby
---

I just noticed today you can easily check file permissions by selecting the appropriate bits using an array format with a range.  For example, if I want to make sure that the permissions of /etc/sudoers is 440, I could do the following:


    
    File.stat("/etc/sudoers").mode.to_s(8)[3..5] == "440"



So, you're converting the mode to octal format and then selecting characters 3 thur 5.  Characters start at 0 from the **left** side of the string.


