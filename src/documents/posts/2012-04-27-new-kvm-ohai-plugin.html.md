---
author: alberts
tags: ['post']
comments: true
date: 2012-04-27 08:23:49
layout: post
slug: new-kvm-ohai-plugin
title: New KVM Ohai Plugin
wordpress_id: 211
categories:
- Chef
- Ohai
---

I wrote a [new KVM plugin for Ohai](https://github.com/albertsj1/ohai-plugins) which gives a ton of important information about KVM guests, which is stored in the node attributes for the host.  This makes it easy to find out which guests are currently on a host and other information about the guest, such as: cpu allocation, memory usage, persistence, autostart, etc.

One of the things you can do once you have this plugin installed and running on the host is have the guest perform a search to find it's host and then save that information somewhere on the guest.  This is very convenient if you're on a kvm guest and you want to know right away what it's host is.

In you Chef code, just use something like this to find the current guest's host:

    
    parent_host = search(:node, "virtualization_kvm_guests:#{node[:hostname]}").first



This plugin uses the same naming scheme for listing guests as my Linux VServer Ohai plugin, so it's easy to search for the host of a guest, regardless of virtualization type.  I often find myself using knife to search for the host of a guest using this:


    
    knife search node "virtualization_*_guests:<myguestname>"



I think of this as a poor man's KVM management system. ;)


