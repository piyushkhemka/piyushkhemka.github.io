---
layout: post
title: Reading & Writing to a file line by line in C++
categories: [code]
tags: [C++, file]
fullview: true
comments: true
---

Read a file line by line in C++ & then write to it.

{% highlight yaml %}

#include <iostream>
#include <string>
#include <fstream>
using namespace std;

int main(int argc, const char * argv[]) {

    // Reading a file
    ifstream file("/Users/piyushkhemka/Desktop/test.txt");
    string str;
    while (getline(file, str)) {
        cout << str << endl;
    }


    // Writing to a file
    ofstream myfile;
    myfile.open ("/Users/piyushkhemka/Desktop/example.txt",
                 ios::out | ios::app);
    myfile << "Writing this to a file.\n";
    myfile.close();
    return 0;

}

{% endhighlight %}



Flag     | Value
-------- | ---
ios::in  | Open for input operations.
ios::out   | Open for output operations.
ios::binary  | Open in binary mode.
ios::ate   | Set the initial position at the end of the file.
ios::app   | All output operations are performed at the end of the file, appending the content to the current content of the file.
ios::trunc   | If the file is opened for output operations and it already existed, its previous content is deleted and replaced by the new one.

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
