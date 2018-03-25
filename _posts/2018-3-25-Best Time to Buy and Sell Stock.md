---
layout:     post
title:      Best Time to Buy and Sell Stock
subtitle:   
date:       2018-3-25
author:     WICKII
header-img: post-bg-programming-min
catalog: true
tags:
    - LeetCode 
    
---
# Best Time to Buy and Sell Stock I

## Description 
Say you have an array for which the i<sup>th</sup> element is the price of a given stock on day *i*.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

## Example 1
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price) 
## Example 2 
Input: [7, 6, 4, 3, 1]
Output: 0

In this case, no transaction is done, i.e. max profit = 0.


## 思路
分析题目，仅仅交易一次，求得最优交易的策略。大家都知道最简单的交易策略就是低进高出，且数组顺序按照时间顺序排列。最自然的想法就是找到数组中的最大值和最小值（且要求最大值出现在最小值之后），然后做个差就好了。<br>
算法题嘛，一般来讲最直观的想法往往**Time Limit Exceeded**。这种想当然的O(n<sup>2</sup>)时间复杂度的算法一定会超时，所以我们尝试其他的可以不嵌套循环的做法。  
进一步分析，画出折线图如下  

![ava](https://leetcode.com/media/original_images/121_profit_graph.png)  

可见我们需要用到两个变量，一个是valley，一个是maxprofit，一次循环遍历就可以搞定。
## Solution

```python
class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        n=len(prices)
        if n==0:
            return 0
        valley=prices[0]
        profit=0
        
        for i in range(n):
            if prices[i]<valley:
                valley=prices[i]
            elif prices[i]-valley>profit:
                profit=prices[i]-valley
        return profit
```
这样，循环一次，每次循环干两件事，就OK了。

# Best Time to Buy and Sell Stock II
## Description 
Say you have an array for which the i<sup>th</sup> element is the price of a given stock on day *i*.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
## 思路
这次和上次的不同在于买入卖出不加次数限制了，可以自行选择，乍一看，这道题蛮复杂的，已经不是简单的低买高卖原则了。<br>
基本想法就是在每一段单调的区间中，选择低买高卖为策略。而写出简洁的代码的关键就在于怎样理解每一段单调的区间，你可以将最低点为起始点，最高点为终止点列为单调区间，中间缓缓上升；也可以将上述区间进一步划分为更小的区间。那无疑，用于计算的最小的离散的区间就是相邻的两个，所以我们就遵循：单调增区间内进行连续的操作就可以了。
## Solution

```python
class Solution:
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        n=len(prices)
        if n==0:
            return 0
        
        total=0
        
        for i in range(n-1):
            if prices[i+1]>prices[i]:
                total+=(prices[i+1]-prices[i])
        return profit
```



# Best Time to Buy and Sell Stock with Cooldown 
## Description 
Say you have an array for which the i<sup>th</sup> element is the price of a given stock on day *i*.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

- You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
- After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
## Example
    prices = [1, 2, 3, 0, 2]
    maxProfit = 3
    transactions = [buy, sell, cooldown, buy, sell]








