---
layout: post
title: Multisets, Advance and some handy STL operations
categories: [code]
tags: [C++, STL]
fullview: true
comments: true
---

Set - sorts elements and doesn't allow duplicates
<br>
Multiset - like sets but allows duplicates.
<br>

{% highlight yaml %}

 multiset<int> windows;

{% endhighlight %}


Example of a insertion in a multiset, deleting an element in it and advancing to mid element in the multiset.
{% highlight yaml %}

  for(int i = 0;i <nums.size(); ++i) {

      windows.insert(nums[i]);

      if (windows.size() > k) {
          windows.erase(windows.find(nums[i-k]));
      }

      if(windows.size() == k) {

          auto it = windows.begin();
          advance(it, k/2); // Advance is a STL operation. it is an iterator.
          cout << "Mid element in multiset is" << \*it) << endl;
        }
    }

{% endhighlight %}
