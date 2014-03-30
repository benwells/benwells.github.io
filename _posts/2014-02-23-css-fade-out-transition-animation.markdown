---
layout: post
title:  "Adding a Custom CSS Exit Transition Animation"
date:   2014-02-23 16:20:31
categories: blog
excerpt: I wanted my nav links to fade out before traveling to the next page, here is how I did it.
---

### _First things first. Giving credit where credit is due_.

My starting point for the CSS transitions scattered around this site is a library created by Justin Aguilar, and can be found on his site [here][ja].

Justin has created a very nice collection CSS animations that are perfect for entrances, hover effects, and constant animations. I used his "fadeIn" class animation as my starting point for my exit animation class, "fadeOut".

####My resulting code looks something like this:

{% highlight css %}
/* fadeOut animation css */
.fadeOut {
  animation-name: fadeOut;
  -webkit-animation-name: fadeOut;

  animation-duration: 0.4s;
  -webkit-animation-duration: 0.4s;

  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;

  visibility: visible !important;
}
@keyframes fadeOut {
  0% {
    transform: scale(1);
    opacity: 1.0;
  }
  100% {
    transform: scale(0);
    opacity: 0.0;
  }
}
@-webkit-keyframes fadeOut {
  0% {
    -webkit-transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
    opacity: 0.0;
  }
}
{% endhighlight %}
<br>
>###__My next puzzle__

_How do I apply this fadeOut class to a link when clicked such that the animation happens before the user is directed to the next page?_

####What I came up with involves attaching a click event handler to the collection of links that did the following:

1. prevent the default link action
2. apply the fadeOut class to the desired parent element
3. set a timer with the intent of waiting for the animation to finish
4. when the timer is complete, send the user to the page specified in the href attribute of the clicked link

<br>
####The JavaScript event handler looks like:
{% highlight js %}
$('#navPills').find('a').click(function (e) {
  var t    = this,

      //store the href for the clicked element
      href = t.href;

  //prevent the default behavior
  e.preventDefault();

  //apply the fade out transition class to the parent ul element
  $(t).parent().parent().addClass('fadeOut');

  //setTimeout to wait for fade out animation to complete before changing pages
  setTimeout(function (){
    window.location = href;
  }, 200); //the length of time should vary depending on the length of the animation.
});
{% endhighlight %}

<br>
That's it!

On my machine, this solution works beautifully in the latest versions of Chrome, Firefox, and Safari. Please click around yourself and feel free to [check out and edit the full gist on github.][gist]

Cheers,<br>
Ben


[ja]: http://www.justinaguilar.com/animations/
[gist]:https://gist.github.com/benwells/9177293
