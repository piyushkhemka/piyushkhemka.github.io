---
layout: post
title: System/OS Questions
categories: [sytem]
tags: [sytem, questions]
fullview: true
comments: true
---

## Locks vs Mutex vs Semaphore

A lock allows only one thread to enter the part that's locked and the lock is not shared with any other processes.

A mutex is the same as a lock but it can be system wide (shared by multiple processes).

A semaphore does the same as a mutex but allows x number of threads to enter, this can be used for example to limit the number of cpu, io or ram intensive tasks running at the same time.


## Concurrency vs Parallelism

Concurrent = Two queues and one coffee machine.

Parallel = Two queues and two coffee machines.

![alt Concurrency vs Parallelism](./assets/img/posts/con_and_par.jpg "Concurrency vs Parallelism")