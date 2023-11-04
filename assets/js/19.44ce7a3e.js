(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{326:function(a,n,e){"use strict";e.r(n);var v=e(1),_=Object(v.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"佩奇算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#佩奇算法"}},[a._v("#")]),a._v(" 佩奇算法")]),a._v(" "),e("h2",{attrs:{id:"_1-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[a._v("#")]),a._v(" 1 简介")]),a._v(" "),e("p",[a._v("在信息检索的学术界有两个衡量搜索质量好坏的客观标准，即查全率recall，和查准率\nprecision。Alta vista 相比早期的搜索引擎，解决了覆盖率（查全率）的问题，但是在查准\n率上还没有什么突破。")]),a._v(" "),e("p",[a._v("整个互联网就像一张大的图（graph），每个网站就像一个节点，而每个网页的链接就像\n一个弧。互联网可以用一个图或者矩阵描述。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".jpg\n")])])]),e("p",[a._v("PageRank的卡通概念图，图中笑脸的大小与指向该笑脸的其他笑脸的数目成正比.")]),a._v(" "),e("p",[a._v("PageRank算法通过输出概率分布来体现某人随机地点击某个链接的概率。PageRank值\n（PR）可以在任何规模的文件（document）集合中计算得出，而每个链接都指向该集合\n中的某个特定文件。相关研究论文指出，在初次计算前，总概率将被均分到每个文件上，\n使得集合中的每个文件被访问的概率都是相同的。接下来在重复多次的计算（又称为“迭\n代”）中，算法将根据集合的实际情况不断调整PR值，使得其越来越接近最真实的理论\n值。")]),a._v(" "),e("p",[a._v("最终的概率将通过一个在0与1之间的数值体现。概率为0.5通常意味着该事件有50%的可\n能性发生。因此，“PR=0.5”代表“有50%的可能性，某人点击了一个随机的链接并访\n问了该链接指向的文件”。")]),a._v(" "),e("p",[a._v("谷歌将融合title标识，keywords关键字标识等因素的pagerank结果来调整搜索结果，使得\n更加重要，等级更高的网站呈现在搜索结果中，从而提高搜索结果的相关度和质\n量。pagerank的结果从0-10，10级为满分。PR值越高说明网页越重要，越受欢迎。例如\nPR值为1，说明网站不太重要；而PR为7-10的网站可以说是非常重要了。一般为4的网站\n可以说不错了。谷歌自身定为10。")]),a._v(" "),e("h2",{attrs:{id:"_2-基本思想"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-基本思想"}},[a._v("#")]),a._v(" 2 基本思想")]),a._v(" "),e("p",[a._v("即对于某个网页A而言，该网页PageRank值的计算基于以下两个假设：")]),a._v(" "),e("p",[a._v("1：数量假设，如果越多的网页指向A，即A的入链数量越多，则该网页越重要；")]),a._v(" "),e("p",[a._v("2：质量假设，如果指向A的网页质量越高，则A越重要，即权重因素不同。")]),a._v(" "),e("p",[a._v("现实中一个具体的假设案例是：一篇论文被诺贝尔奖得主所引用， 显然要比被普通研究者\n所引用更说明其价值；一篇论文被100位学者引用，显然要比只有一位普通学者引用之更\n有价值。")]),a._v(" "),e("p",[a._v("初始阶段，网页通过链接关系构建起Web图，每个页面设置相同的PageRank值(原因在稍\n后阐述)，通过若干轮的计算，会得到每个页面所获得的最终PageRank值。随着每一轮的\n计算进行，网页当前的PageRank值会不断得到更新。")]),a._v(" "),e("p",[a._v("在每一轮更新页面PageRank得分的计算中，每个页面将其当前的PageRank值平均分配\n到本页面包含的出链上，这样每个链接即获得了相应的权值。而每个页面将所有指向本页\n面的入链所传入的权值求和，即可得到新的PageRank得分。当每个页面都获得了更新后\n的PageRank值，就完成了一轮PageRank计算。")]),a._v(" "),e("p",[a._v("用公式来表示，若网页T存在一个指向网页A的链接，则表明T的所有者认为A是重要的，\n从而把T的一部分重要性得分赋予A。")]),a._v(" "),e("p",[a._v("这个重要性得分值为：PR（T）/C(T) ，其中PR（T）为T的PageRank值，C(T)为T的出\n链数。")]),a._v(" "),e("p",[a._v("对于A而言，A的PageRank值为一系列类似于T的页面重要性得分总和。一个页面的\nPageRank是由所有链向它的页面（链入页面）的重要性经过递归算法得到的。")]),a._v(" "),e("h2",{attrs:{id:"_3-pagerank的简单计算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-pagerank的简单计算"}},[a._v("#")]),a._v(" 3 PageRank的简单计算")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".jpg\n")])])]),e("h2",{attrs:{id:"_4-简易版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-简易版本"}},[a._v("#")]),a._v(" 4 简易版本")]),a._v(" "),e("p",[a._v("假设一个由4个网页组成的集合： A ， B ， C 和 D 。如果所有页面都只链接至 A ，那么\nA 的 PR （PageRank）值将是 B ， C 及 D 的PR值之和，即：")]),a._v(" "),e("p",[a._v("$$PR(A)=PR(B)+PR(C)+PR(D)$$")]),a._v(" "),e("p",[a._v("重新假设 B 链接到 AC ， C 链接到 A ，并且 D 链接到 A B C 。最初一个页面总共只有\n一票。所以 B 给 AC 每个页面半票。以此类推， D 投出的票只有三分之一加到了 A 的PR\n值上：\n$$PR(A)={PR(B)\\over 2}+{PR(C)\\over 1}+{PR(D)\\over 3}$$")]),a._v(" "),e("p",[a._v("换句话说，算法将根据每个页面连出总数平分该页面的 PR 值，并将其加到其所指向的页\n面：")]),a._v(" "),e("p",[a._v("$$PR(A)={PR(B)\\over L(B)}+{PR(C)\\over L(C)}+{PR(D)\\over L(D)}$$")]),a._v(" "),e("p",[a._v("最后，所有这些PR值被换算成一个百分比再乘上一个修正系数 d\n。由于“没有向外链接的网页”传递出去的PR值会是0，而这会递归地导致指向它的页面\n的PR值的计算结果同样为零，所以赋给了每个页面一个最小值（1-d）/N：")]),a._v(" "),e("p",[a._v("$$PR(A)=({PR(B)\\over L(B)}+{PR(C)\\over L(C)}+{PR(D)\\over L(D)}+{···})d+{(1-d)\\over N}$$")]),a._v(" "),e("p",[a._v("需要注意的是，在Sergey Brin和Lawrence Page的1998年原版论文中给每一个页面设定\n的最小值是1-d，而不是（1-d）/N")]),a._v(" "),e("p",[a._v("所以一个页面的PR值直接取决于指向它的的页面。如果在最初给每个网页一个随机且非零\n的PR值，经过重复计算，这些页面的PR值会趋向于某个定值，也就是处于收敛的状态，\n即最终结果。这就是搜索引擎使用该算法的原因。")]),a._v(" "),e("h2",{attrs:{id:"_5-pagerank的修正公式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-pagerank的修正公式"}},[a._v("#")]),a._v(" 5 PageRank的修正公式")]),a._v(" "),e("p",[a._v("现实网络中，由于存在出链度数为0，即不链接到任何网页的页面，但是很多网页可以访\n问它。鉴于这类情况，PageRank公式需要进行修正，修正的方法是，在简单公式的基础\n上增加阻尼系数d(damping factor):")]),a._v(" "),e("p",[a._v("$$PR(A)={(1-d)}+d*{\\sum_{i=1}^m}{PR(Ti)\\over C(Ti)}$$")]),a._v(" "),e("p",[a._v("该公式是计算网页A的PR值公式。Ti是存在到A的链接的网页。C(Ti)是网页Ti中存在的链\n接的数量。d是阻尼系数，一般定义为用户随机点击链接的概率，根据工程经验一般取\n0.85。而(1-d)代表着不考虑入站链接的情况下随机进入一个页面的概率。\n还有一种修正方式与第一种相似，公式如下：")]),a._v(" "),e("p",[a._v("$$PageRank(pi)={(1-q)\\over N}+q{\\sum_{pj}}{PageRank(pi)\\over L(pj)}$$")]),a._v(" "),e("p",[a._v("其中p(i)是第i个页面，N是页面总数，q是阻尼系数，(1-q)代表着不考虑入站链接的情况\n下随机进入一个页面的概率，L(pi)是Pi链出页面的数量。所有页面的PageRank值可以组\n成一个特征向f量，这个特征向量矩阵为：")]),a._v(" "),e("p",[a._v("$$R=\\begin{bmatrix}PageRank(p1) \\ PageRank(p2)\\ ··· \\ PageRank(pN) \\end{bmatrix}$$")]),a._v(" "),e("p",[a._v("R是如下矩阵方程式的一个解：")]),a._v(" "),e("p",[a._v("$$R=\\begin{bmatrix}(1-q)\\over N \\ (1-q)\\over N\\ ··· \\ (1-q)\\over N \\end{bmatrix}+q{\\begin{bmatrix} l(p1,p1) & l(p1,p2) & ··· & l(p1,pn)\\ l(p2,p1) & ··· &  & l(p2,pn) \\ ··· &  & l(pi,pj)&  \\  l(pN,p1) &  &  & l(pN,pN) \\end{bmatrix}}R$$")]),a._v(" "),e("p",[a._v("其中 L(Pi,Pj) 表示网页 j 指向网页 i 的链路权重，并且若网页i存在指向网页j的一个链接，\n则")]),a._v(" "),e("p",[a._v("$${\\sum_{j=1}^N}l(pi,pj)=1$$")]),a._v(" "),e("p",[a._v("在此处键入公式。")]),a._v(" "),e("p",[a._v("否则，L(Pi,Pj) = 0.")]),a._v(" "),e("p",[a._v("关于R矩阵方程式的含义，按照矩阵相乘规则，实际上是所有网页节点的方程式聚合组：\n以第一行为例，分拆开来实际上是：")]),a._v(" "),e("p",[a._v("PR(P1) = (1-q)/N + a*(L(p1,p1)*PR(P1) + L(p1,p2)*PR(P2) + ... + L(p1,pn)*PR(Pn) )\n其余行数以此类推。遂构成上述矩阵方程式。")]),a._v(" "),e("p",[a._v("到现在为止，我们把PageRank的计算方式和原理都阐述了，但是仍然有一个问题：先有\n鸡还是先有蛋？我们要知道一个网页 Wi的排序， 不仅要知道有多少网页链接了它， 而且\n还得知道那些网页各自的排序——因为来自排序靠前网页的链接更有分量。 而但作为互\n联网大家庭的一员， Wi本身对其它网页的排序也是有贡献的， 而且基于来自排序靠前网\n页的链接更有分量的原则， 这种贡献与 Wi本身的排序也有关。简而言之，链接到Wi的网\n页们影响了Wi的重要性排名，而Wi也有可能反向影响其余网页的排名，想要知道其余网\n页的排名，那么首先又要知道Wi的排名。这就是先有鸡还是先有蛋的意思。\n为了打破这个死循环，佩奇和布林采用了一个奇妙的思路，分析一个虚拟用户在互联网的\n漫游过程。他们做了这样的假定：该虚拟用户访问了一个网页后，下一步将有相同的几率\n访问被该网页链接的任何一个其他网页。初看之下这一假设不合情理，用户都会存在自己\n的偏好，不可能以相同几率访问一个网页所有链接。但是在PageRank中，考虑到我们这\n一虚拟用户实际上是对所有互联网漫游者所做的平均意义上的代表，这样一来这条假设就\n不像初看之下那么不合理了。实际上就也是PR（T）/C(T) 的来源。最终的网页排序，则\n由用户在网络上漫游了很长时间---理论上是无限时间后---访问各网页的几率分布来决\n定，访问几率越大的网页排序则越靠前。(细心的读者可以发现，在该核心思想下，网页\n排序与搜索关键词并无关系！这意味着排序计算可以单独进行，而无需在用户输入\nkeywords后再临时进行，这是Google搜索速度迅即的重要原因！)")]),a._v(" "),e("p",[a._v("所以综上，一个页面的PageRank值是由其他页面的PR值计算得到的。Google不断的重\n复计算每个页面的PR值。给每个页面一个初始的非零随机PR值，那么经过不断地迭代计\n算，最终每个页面的PR值将趋于稳定。这是PageRank的奇妙所在以及为何搜索引擎使用它的原因。")])])}],!1,null,null,null);n.default=_.exports}}]);