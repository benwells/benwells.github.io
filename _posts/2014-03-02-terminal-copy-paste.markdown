---
layout: post
title:  "Copying and Pasting in the Mac OSX Terminal"
date:   2014-03-02
categories: blog
excerpt: How to copy and paste content using the Mac OS X Terminal
tags: [OSX, Terminal, Tutorial]
---

### _A Quick Tip_

<br>
This is something I do fairly often, but apparently not frequently enough for it to stick into my long-term memory. I'm hoping that by sharing this little bit of knowledge, I will remember it myself for next time I need it.  Copying and pasting in the Max OSX Terminal can be very useful, and here is how I approach it.


{% highlight bash %}

  # to copy contents of a file to your clipboard
  $ cat file.txt | pbcopy

  # or, you can specify the text to copy with the echo command
  $ echo "I want to copy this text." | pbcopy

  # alternatively, to paste the clipboad contents into a file
  $ pbpaste > text.txt

{% endhighlight %}
<br>
Cheers,<br>
Ben
