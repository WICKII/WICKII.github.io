---
layout: "about"
title: "About"
date: 2018-03-23 10:18:33
description: "Hey, this is WICKII."
header-img: "img/post-bg-rwd.jpg"
comments: true
---


>坐而论道
>不如起而行之

Hey，我是**维奇(WICKII)**，一头RF 攻城狮，现在帝都上学。<br>

工作、学习之余，我还是一个健身爱好者，同时也正在艰苦入门吉他...<br>

这是我的利用[GitHub Pages](https://pages.github.com/)与 
[Jekyll](http://jekyll.com.cn/)
搭建的个人博客。同时，感谢Hux大神提供的模~~~<br>
希望接下来的日子里可以坚持写作的习惯，在这里分享RF Design和硬件电路设计中的一些经验，也是成长啦 emmm...先就酱^^<br>



<p style="text-align:right;">
    —— <a href="http://www.zhihu.com/question/19687065">李书航 － 什么是「共产中文腔调」？ </a>
</p>







<!-- Gitalk 评论 start  -->
{% if site.gitalk.enable %}
<!-- Gitalk link  -->
<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
<script src="https://unpkg.com/gitalk@latest/dist/gitalk.min.js"></script>

<div id="gitalk-container"></div>
    <script type="text/javascript">
    var gitalk = new Gitalk({
    clientID: '{{site.gitalk.clientID}}',
    clientSecret: '{{site.gitalk.clientSecret}}',
    repo: '{{site.gitalk.repo}}',
    owner: '{{site.gitalk.owner}}',
    admin: ['{{site.gitalk.admin}}'],
    distractionFreeMode: {{site.gitalk.distractionFreeMode}},
    id: 'about',
    });
    gitalk.render('gitalk-container');
</script>
{% endif %}
<!-- Gitalk end -->