---
layout: post
title: Ascii conversion from char to int & back in C++
categories: [code]
tags: [C++, ascii]
fullview: true
comments: true
---

Ascii values

{% highlight yaml %}

a = 97, z = 122
A = 65, Z = 90
0 = 48
{% endhighlight %}



{% highlight yaml %}
char ch = 'z';
int num = (int)ch-'a'; // 122-97 =25
char y = char(num)+'a'; // 25+97 = 122
cout << y;

{% endhighlight %}


{% highlight yaml %}

char one = '1'
int ans = int(one) - '0' // 49-48 = 1
cout << ans; //get one


{% endhighlight %}
