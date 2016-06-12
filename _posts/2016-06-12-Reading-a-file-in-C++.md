---
layout: post
title: C++ 
categories: [general]
tags: [C++, file]
fullview: true
comments: true
---

Read a file line by line in C++

{% highlight yaml %}

#include <fstream>
#include <string>


int main() 
{ 
    std::ifstream file("Read.txt");
    std::string str; 
    while (std::getline(file, str))
    {
        // Process str
    }
}

{% endhighlight %}
