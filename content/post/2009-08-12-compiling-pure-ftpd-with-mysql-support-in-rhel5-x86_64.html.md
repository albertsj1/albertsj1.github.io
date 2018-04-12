---
author: alberts
comments: true
date: 2009-08-12 
slug: compiling-pure-ftpd-with-mysql-support-in-rhel5-x86_64
title: Compiling Pure-FTPD with MySQL Support in RHEL5 x86_64
categories:
- Linux
---

I really had a hard time getting pure-ftpd 1.0.22 to compile properly witih mysql support on a RHEL5 x86_64 server.  It turns out that the mysql libraries path in the configure script is incorrect.  I'm not sure if this is just a problem with my particular configuration or with the way pure-ftpd tries to figure out where the mysql libraries are.  In any case, I modified the configure script to use mysql_config with appropriate options to set the mysql include paths and lib paths as appropriate.  Assuming mysql_config is in your path, I wouldn't expect this to ever fail.

If anyone else has this problem, just apply the following patch to the configure script:

    
    *** configure.orig      Tue Nov 10 09:35:19 2009
    --- configure   Tue Nov 10 10:11:59 2009
    ***************
    *** 11670,11685 ****
      
      
      # Check whether --with-mysql was given.
    ! if test "${with_mysql+set}" = set; then :
        withval=$with_mysql;  if test "x$withval" != "xno" ; then
          if test "x$withval" != "x" && test "x$withval" != "xyes" ; then
            LD_RUN_PATH="${withval}/lib${LD_RUN_PATH:+:}${LD_RUN_PATH}"
            LDFLAGS="$LDFLAGS -L${withval}/lib -L${withval}/lib/mysql -L${withval}/mysql/lib"
            CPPFLAGS="$CPPFLAGS -I${withval}/include -I${withval}/include/mysql -I${withval}/mysql/include"
          else
    !       LD_RUN_PATH="/usr/local/mysql/lib:/usr/local/mysql/lib/mysql:/usr/lib/mysql:/usr/mysql/lib:/usr/mysql/lib/mysql:/usr/local/lib/mysql:${LD_RUN_PATH:+:}${LD_RUN_PATH}"
    !       LDFLAGS="$LDFLAGS -L/usr/local/mysql/lib -L/usr/lib/mysql -L/usr/mysql/lib -L/usr/local/lib/mysql -L/usr/local/mysql/lib/mysql -L/usr/mysql/lib/mysql"
    !       CPPFLAGS="$CPPFLAGS -I/usr/local/mysql/include -I/usr/include/mysql -I/usr/mysql/include -I/usr/local/include/mysql -I/usr/local/mysql/include/mysql -I/usr/mysql/include/mysql"
          fi
          { $as_echo "$as_me:${as_lineno-$LINENO}: checking for floor in -lm" >&5
      $as_echo_n "checking for floor in -lm... " >&6; }
    --- 11670,11685 ----
      
      
      # Check whether --with-mysql was given.
    ! if test "${with_mysql+set}" = set; then
        withval=$with_mysql;  if test "x$withval" != "xno" ; then
          if test "x$withval" != "x" && test "x$withval" != "xyes" ; then
            LD_RUN_PATH="${withval}/lib${LD_RUN_PATH:+:}${LD_RUN_PATH}"
            LDFLAGS="$LDFLAGS -L${withval}/lib -L${withval}/lib/mysql -L${withval}/mysql/lib"
            CPPFLAGS="$CPPFLAGS -I${withval}/include -I${withval}/include/mysql -I${withval}/mysql/include"
          else
    !       LD_RUN_PATH="`mysql_config --libs | egrep -o '\/[[:alnum:]\/]* ' | xargs | tr ' ' ':'`:${LD_RUN_PATH}"
    !       LDFLAGS="$LDFLAGS `mysql_config --libs | egrep -o '\-L\/[[:alnum:]\/]* ' | xargs`"
    !       CPPFLAGS="$CPPFLAGS `mysql_config --include`"
          fi
          { $as_echo "$as_me:${as_lineno-$LINENO}: checking for floor in -lm" >&5
      $as_echo_n "checking for floor in -lm... " >&6; }
