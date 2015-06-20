---
title: New knife-convert Knife Plugin
layout: post
tags:
  - chef
  - knife
  - plugins
date: 2013-10-27
---

At my last job, I saw the light a while ago and switched from a monolithic Chef repo to individual repositories per cookbook.  In addition, I also stopped using roles and started using [role cookbooks][1].  Converting my roles to cookbooks wasn't a huge deal because I mostly used roles as a way of identifying server types and setting a runlist.  Most of my roles also didn't have any attributes specified and I didn't have a whole lot of roles.  A manual conversion only took an hour or so.  This is vastly different from my current job.  We have quite a few roles and those roles often have attributes specified and also have enviromental runlists specified.  In addition, our environment definitions contain hundreds of default attribute settings.

Manually converting these roles and environments to cookbooks was not an option.  So began my search for something to automate the conversion.  I happened to come accross a very nice knife plugin called [knife-role-convert][2].  It did a great job of converting roles to a recipe; however, it did not support converting environments.  There were also some features missing that I needed for creating the new role and environment cookbooks that I needed in the format I wanted to use.  Hence, [knife-convert][3] was born.  It borrows very heavily from the knife-role-convert codebase, but adds a few additional features for converting roles and also adds the ability to convert environments.  The plugin doesn't create any files.  It instead prints the recipe to stdout.  I considered having the plugin directly create a cookbook based on the role or environment file specified; however, I felt this would severely limit the flexability of the plugin and the use cases.  Since the output goes to stdout, you can easily redirect the output to any place of your choice and easiliy manipulate the output before writing it to a file.  For my use case, I plan to write a wrapper script that will automatically parse my role and environment files, and call the knife plugin to produce the output I need and then redirect that to the appropriate cookbook and recipe structure for my organization.  I haven't written the wrapper script yet, hopefully I'll get that done today. :)

# USAGE:

## knife convert role

knife convert take a single role and spits an equivalent recipe to stdout.

    knife convert role ROLE (options)
        -r, --recipe RECIPE              Recipe name you want the role to be ceonverted to
        -C, --comment_enabled            Enable a comment at the top of the generated recipe
        -c, --cookbook COOKBOOK          Cookbook name you want the role to be added to
        -d, --no_default                 Don't output default attributes
        -o, --no_override                Don't output override attributes
        -R, --no_runlist                 Don't output runlist lines



## knife convert environment

knife convert takes a single environment and spits an equivalent recipe to stdout.

    knife convert environment ENVIRONMENT (options)
        -a, --author Author name         Author name to use in the comment of the generated recipe
        -C, --comment_enabled            Enable a comment at the top of the generated recipe
        -c, --cookbook COOKBOOK          Cookbook name you want the environment to be added to
        -E, --environment ENVIRONMENT    Set the Chef environment
        -d, --no_default                 Don't output default attributes
        -o, --no_override                Don't output override attributes
        -r, --recipe RECIPE              Recipe name you want the environment to be converted to


[1]: http://realityforge.org/code/2012/11/19/role-cookbooks-and-wrapper-cookbooks.html
[2]: https://github.com/kisoku/knife-role-convert
[3]: https://github.com/albertsj1/knife-convert
