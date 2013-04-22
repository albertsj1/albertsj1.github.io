---
author: alberts
tags: ['post']
comments: true
date: 2012-03-01 21:16:32
layout: post
slug: using-pagerdutys-nagios-integration-without-the-extra-load
title: Using Pagerduty's Nagios integration without the extra load
wordpress_id: 202
categories:
- monitoring
- Nagios
tags:
- nagios
- pagerduty
---

PagerDuty is awesome.  We have a pretty complicated follow the sun rotation split into 3 time periods per day and 2 teams on opposite sides of the world.  It would be a real PITA to manage this without PagerDuty.  It's super easy to integrate Nagios with PagerDuty.  If you haven't done it already, you can find the instructions [here](http://www.pagerduty.com/docs/guides/nagios-integration-guide).  The problem with PagerDuty's Nagios integration is that their guide says it requires the [enable_environment_macros](http://nagios.sourceforge.net/docs/3_0/configmain.html) variable to be enabled.  The problem is this is a HUGE performance killer for Nagios.

It turns out it's super easy to use the Nagios integration without enable_environment_macros being enabled.  Simply change your notify-service-by-pagerduty and notify-host-by-pagerduty notification commands to the following:

    
    define command {
           command_name     notify-service-by-pagerduty
           command_line     /usr/local/bin/pagerduty_nagios.pl enqueue -f pd_nagios_object=service -f NOTIFICATIONTYPE="$NOTIFICATIONTYPE$" -f HOSTNAME="$HOSTNAME$" -f SERVICEDESC="$SERVICEDESC$" -f SERVICESTATE="$SERVICESTATE$" -f CONTACTPAGER="$CONTACTPAGER$"
    }
    
    define command {
           command_name     notify-host-by-pagerduty
           command_line     /usr/local/bin/pagerduty_nagios.pl enqueue -f pd_nagios_object=host -f NOTIFICATIONTYPE="$NOTIFICATIONTYPE$" -f HOSTNAME="$HOSTNAME$" -f HOSTSTATE="$HOSTSTATE$" -f CONTACTPAGER="$CONTACTPAGER$"
    }


Once you change you notification commands, set enable_environment_macros = 0 and restart Nagios.  Making this one change lowered my overall server load by at least 30%!




