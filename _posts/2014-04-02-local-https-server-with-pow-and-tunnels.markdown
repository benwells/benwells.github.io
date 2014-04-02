---
layout: post
title:  "Configuring a Local HTTPS Static File Server with Pow.cx and Tunnels"
date:   2014-04-02
categories: blog
excerpt: 
---
##Project Setup

1.   Create a project folder on your local machine.
2.   Create a folder named "public" inside project folder (_pow requires that static files be served from a "public" folder.  your git repo and or static files will live here_).

##Create a Pow "App"

1. In the terminal, run the command  `cd ~/.pow` to change into your pow directory.
2. Run the command `ln -s /path/to/project/folder <appname>`, replacing the path with full path to your project folder and replacing <appname>  with the desired domain for your pow app.  (_after this, you can access your project at_ http://<appname>.dev)

## Install and enable tunnels

1.  if tunnels is not installed, run `gem install tunnels` to install the tunnels gem
2.  To start the tunnels server, run `sudo tunnels` (or `rvmsudo tunnels` if you are using rvm).
3.  With the tunnels server running, you should now be able to access your files at https://<appname>.dev.  

4.  To reference files on portal,  simply copy the full https path to your file in a \<script> or \<link> tag in a portal header/footer

--
##Resources

* Pow website:  http://pow.cx
* Tunnels:  https://github.com/jugyo/tunnels
