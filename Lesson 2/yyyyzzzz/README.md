#Dom学习笔记#

#DOM的前世
>###DHTML(Dynamic HTML)
>它是一种HTML/CSS/JS的结合产物，意为动态的HTML，是一种概念。（有时也被称为0级DOM）
>###BOM(Browser Object Model)
>提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。其中一切对象的根节点都为window，为**全局对象** 。其几个重要孩子节点为：

>-    **Document** : 全部HTML内容及其构成页面显示的资源
>-    **Location** : URL的全部信息 
>-    **History** : 以前访问的页面地址，只有一个属性值length
>-    **Navigator** : 浏览器类型、版本、兼容的信息


<br><br>
#DOM的今生
>###DOM(Document Object Model)
>它是：

>-    文档抽象模型
>-    标准编程API

>节点分类：

>-    文档节点
>-    元素节点
>-    属性节点
>-    文本节点：文本节点是单独的叶子节点，不包含其他子节点

>访问节点方法有：

>-    ID
>-    TAGNAME
>-    CLASSNAME

>    遍历DOM的方式有：

>-    parentNode
>-    previousSibling
>-    nextSibling
>-    firstChild
>-    lastChild