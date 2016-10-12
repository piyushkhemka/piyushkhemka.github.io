---
layout: post
title: C++
categories: [code]
tags: [C++, priority_queue]
fullview: true
comments: true
---


<a>http://www.cplusplus.com/reference/functional/less/</a>


In priority_queue, the native pop function is implemented as pop_back().
So to implement a min_heap, your comparator function is greater<int> &
for max_heap it is less<int>
<br>
Syntax of priority_queue
<br>
{%highlight yaml}
priority_queue<int, vector<int>, less<int> > max_heap;
priority_queue<int, vector<int>, greater<int> > min_heap;

{%endhighlight}


Example of a  priority_queue with custom comparator function
{%highlight yaml}
priority_queue<ListNode*, vector<ListNode*>, CompareNode> min_heap;
{%endhighlight}

{%highlight yaml}
struct CompareNode {
    bool operator()(ListNode* const &p1, ListNode* const &p2) {
        return p1->val > p2->val;
    }
};
{%endhighlight}
