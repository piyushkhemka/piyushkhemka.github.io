---
layout: post
title: Reading a file line by line in C++
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

{% highlight yaml %}

ifstream file("/Users/piyushkhemka/Downloads/MCC/fmn.txt", ios::in);

   while(getline(file, line)) {
       stringstream lines(line);
       vector<int> v;
       string b;
       getline(lines, b, '\n');
       string temp;
       for(int i = 0;i<b.length();i++) {
           if(b[i]!=' ') {
               temp = temp+b[i];
           }
           else {
               v.push_back(stoi(temp));
               temp.clear();
           }
       }
       v.push_back(stoi(temp));
       int sum = 0; // Process each line here
       for(auto it = v.begin();it!=v.end();it++) {
           sum+= *it;
       }
       cout << sum;
       cout << endl << endl<< endl << endl<< endl << endl;
   }

{% endhighlight %}
