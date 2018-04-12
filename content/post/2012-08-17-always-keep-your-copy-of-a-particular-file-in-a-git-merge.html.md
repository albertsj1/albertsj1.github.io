---
author: alberts
tags:
  - git
  - configuration management
comments: true
date: 2012-08-17 
slug: always-keep-your-copy-of-a-particular-file-in-a-git-merge
title: Always keep your copy of a particular file in a git merge
categories:
- configuration management
- git
---

I found [this little gem](http://stackoverflow.com/questions/5465122/gitattributes-individual-merge-strategy-for-a-file) about how to always keep a particular file untouched during merges.  I can think of multiple reasons that you might want to have the same named file in multiple branches of the same repo, while each branch has it's own unique copy of that file.  For me, I have a README.md file in a couple branches that I need to have unique information in it that doesn't apply to the other branches.  This feature allows me to have a unique README.md in each branch.

```
    git config merge.ours.name '"always keep ours" merge driver'
    git config merge.ours.driver 'touch %A'
    echo "README.md merge=ours" >> .gitattributes
    git add .gitattributes
    git commit -m "keep my copy of the README.md file"
```



Now, when I do a 'git merge', I don't have to worry about my README.md file getting clobbered.
