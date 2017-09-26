---
layout: post
title: Tokenizing Strings in C++
categories: [code]
tags: [C++, file]
fullview: true
comments: true
---

Read a string word by word

{% highlight yaml %}
#include <fstream>
#include <string>

int main()
{
    string t = "First Second Third";
    istringstream iss(t);
    string word;
    while(iss >> word) {
        /* do stuff with word */
        cout << word << endl;
    }
}
{% endhighlight %}

Output:
{% highlight yaml %}
First
Second
Third
{% endhighlight %}


Splitting a string with a delimiter & storing all words in a vector

{% highlight yaml %}
void split(const string& s, char delim,vector<string>& v) {
    auto i = 0;
    auto pos = s.find(delim);
    while (pos != string::npos) {
      v.push_back(s.substr(i, pos-i));
      i = ++pos;
      pos = s.find(delim, pos);

      if (pos == string::npos)
         v.push_back(s.substr(i, s.length()));
    }
}
{% endhighlight %}
