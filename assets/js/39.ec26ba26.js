(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{346:function(e,t,s){"use strict";s.r(t);var a=s(1),p=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("wordpress是什么东西？")]),e._v(" "),s("p",[e._v("WordPress是使用PHP语言开发的博客平台，用户可以在支持PHP和MySQL数据库的服务器\n上架设属于自己的网站。也可以把 WordPress当作一个内容管理系统（CMS）来使用。\nWordPress是一款个人博客系统，并逐步演化成一款内容管理系统软件，它是使用PHP语言和\nMySQL数据库开发的。用户可以在支持 PHP 和 MySQL数据库的服务器上使用自己的博客。\nWordPress有许多第三方开发的免费模板，安装方式简单易用。不过要做一个自己的模板，则\n需要你有一定的专业知识。比如你至少要懂的标准通用标记语言下的一个应用HTML代\n码、CSS、PHP等相关知识。")]),e._v(" "),s("p",[e._v("WordPress官方支持中文版，同时有爱好者开发的第三方中文语言包，如wopus中文语言\n包。WordPress拥有成千上万个各式插件和不计其数的主题模板样式。")]),e._v(" "),s("p",[e._v("来自 "),s("a",{attrs:{href:"https://baike.baidu.com/item/WordPress/450615?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://baike.baidu.com/item/WordPress/450615?fr=aladdin"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("我为什么要安装wordpress?")]),e._v(" "),s("p",[e._v("首先是自己学习过程当中会有遇到的知识多且杂，所以这些知识需要整理，而wordpress\n便于管理自己的文章，并且可以更好的分享。")]),e._v(" "),s("p",[e._v("其次我自己也是特别喜欢diy的，强迫症患者晚期，什么东西如果不自己动手搞搞就浑身\n难受。。。")]),e._v(" "),s("p",[e._v("前一段时间刚好又买了一台服务器，这下东西就配差不多了。")]),e._v(" "),s("p",[e._v("如何建设个人博客？")]),e._v(" "),s("p",[e._v("目前建设个人博客主要有三个办法：\n第一个：国内直接DDNS，用一个笔记本当主机\n第二个：国外vps\n第三个：githubPage, 直接Hexo\n其他两个办法之后可能会尝试")]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("需要了解的知识：")]),e._v(" "),s("p",[e._v("1，网络通信的相关知识")]),e._v(" "),s("p",[e._v("2，Linux操作系统的相关知识")]),e._v(" "),s("p",[e._v("3，软件安装相关知识")]),e._v(" "),s("p",[e._v("4，安装web服务器（这里是Apache）")]),e._v(" "),s("p",[e._v("5，安装php")]),e._v(" "),s("p",[e._v("6，安装MySQL数据库")]),e._v(" "),s("p",[e._v("本文主要是介绍使用国外vps搭建，所以大致有以下的步骤：")]),e._v(" "),s("p",[e._v("首先你得购买一台vps服务器，关于如何购买以及搭建可以参考我的上一篇博客；")]),e._v(" "),s("p",[e._v("其次是购买自己的域名，并把它解析到服务器；（这个可以单独出一篇）")]),e._v(" "),s("p",[e._v("然后大体上就是需要先安装一个LAMP环境，也有LNMP（使用nginx）；")]),e._v(" "),s("p",[e._v("再然后就是安装wordpress；")]),e._v(" "),s("p",[e._v("鉴于这个系列的知识连续性，延展性较强，本文分为以下几个部分：")]),e._v(" "),s("p",[e._v("一 域名购买和相关设置\n二 配置LAMP环境\n三 安装wordpress\n四 后续维护")]),e._v(" "),s("p",[e._v("那么我们就从域名的购买讲起吧！")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("注册域名有很多种选择，国内的话阿里云，万网，新网都可以，国外的话godaddy,\nnamesilo等等。")]),e._v(" "),s("p",[e._v("最好注册国际通用的 .com/.net 域名，这样世界各地都能访问，其他的域名就不清楚了，\n国内的话.com/.net域名需要 备案 ，不然连解析都不能解析，更别说使用了。其他域名虽\n然不备案也能解析，但最后要用还是得备案，而 备案 又是一大波的个人资料的录入。\n如果不想备案，那可以使用国外的，但这样做毕竟不合法，所以虽然麻烦点，但还是希望\n大家能够备案。")]),e._v(" "),s("p",[e._v("在各种方案比较之后，我选择了namesilo上购买域名。具体原因:")]),e._v(" "),s("p",[e._v("Namesilo 简介")]),e._v(" "),s("p",[e._v("Namesilo 是 ICANN 认证的域名域名注册商之一，注册和转入都很人性化，安全保护到\n位而且性价比很高。")]),e._v(" "),s("p",[e._v("优势")]),e._v(" "),s("p",[e._v("价格便宜稳定")]),e._v(" "),s("p",[e._v("Namesilo 域名本身价格就比较便宜，COM 域名 $8.99/年，除了一个一美元优惠码（优\n惠码 okoff 或者 go2think），基本没有其他大幅度促销活动，域名续费和首年购买价格\n一致。")]),e._v(" "),s("p",[e._v("套路指那些首年极其便宜，但次年续费很贵的。如 Godaddy，首年 $0.99，次年续费要\n102 元人民币，而且隐私保护还需要额外再加 60 元。")]),e._v(" "),s("p",[e._v("永久免费的隐私保护")]),e._v(" "),s("p",[e._v("Namesilo 提供永久免费的域名隐私保护，防止别人通过 WHOIS 查询获取域名所有者的\n个人注册信息。作为对比，Godaddy 的隐私保护是 60 元/年，Namecheap 是免费提供\n第一年。")]),e._v(" "),s("p",[e._v("安全性高")]),e._v(" "),s("p",[e._v("支持账户登陆二次验证和 Domain Defender，保护账户和域名安全。登陆、解锁域名\n等，都可以设置邮件或短信提醒。")]),e._v(" "),s("p",[e._v("支付方便")]),e._v(" "),s("p",[e._v("支持支付宝、Paypal、信用卡等多种方式付款。")]),e._v(" "),s("p",[e._v("不足")]),e._v(" "),s("p",[e._v("网站风格比较 “传统”，英文页面，功能强大的同时也带来了很多的选项，对于不熟悉的\n新手可能不太好找。")]),e._v(" "),s("p",[e._v("总结：个人体验和服务上，我觉得除了第一次使用时面板选项不太好找外，其它方面真的\n没啥黑点和问题，网上评价也很高，以后除了续费也不需要管太多。")]),e._v(" "),s("p",[e._v("然后就是账户注册")]),e._v(" "),s("p",[e._v("（* 为必填内容，建议如实填写；勾选 “Keep my information private” 默认使用隐私\n保护，保护我们的注册信息）\n，域名购买，支付方式，域名解析/设置DNS服务器。这些网上都有具体的教程，我就不\n赘述了。这里简单说一下域名解析的问题。")]),e._v(" "),s("p",[e._v("域名解析")]),e._v(" "),s("p",[e._v("域名注册购买成功后，我们就可以把域名解析到服务器了。")]),e._v(" "),s("p",[e._v("这里我们可以直接使用 Namesilo 解析域名；也可以使用其它解析服务，然后更改\nDNS 服务器地址。")]),e._v(" "),s("p",[e._v("方法一：使用 Namesilo 解析域名")]),e._v(" "),s("p",[e._v("点击 蓝色小球，编辑 DNS，可以自己设置，也可以使用下面提供的模版。一般设\n置 example.com 和 www.example.com 指向自己的服务器 IP 地址就够用了。")]),e._v(" "),s("p",[e._v("方法二：更改 DNS 服务器地址")]),e._v(" "),s("p",[e._v("现在你要考虑的是：解析工作是由 Namesilo 来做呢，还是让空间商 Vultr 来做。换句话\n来说就是，域名服务器（NS）是用 Namesilo 默认的还是指派 Vultr 的 NS。\n我强烈建议把解析权交给 vultr，也就是说，把 namesilo 的NS地址改成 Vultr 的 NS 地\n址。这样交接域名解析任务之后，空间和域名解析都在 Vultr 进行，可以省去很多麻烦。\n按照这个思路，废话不多说，我们接着 更改 NS 地址。当你登录了 Namesilo 之后，会\n自动转到管理页面：")]),e._v(" "),s("p",[e._v("点击 Account Domains 的 1。")]),e._v(" "),s("p",[e._v("之后来到域名管理面板页面。此时勾选你的域名，然后点击上面的 Change\nNameservers 图标。如果勾选后仍然为灰色，则此时要先点击右边的小锁进行解锁\n（Unlock）。")]),e._v(" "),s("p",[e._v("解锁（Unlock）页面会列出你的域名，以及一些解锁的提示。不用管，直接点击\nSUBMIT")]),e._v(" "),s("p",[e._v("此时把原先的 Namesilo 的 NS1 和 NS2 地址改成 Vultr 的 NS 地址。分别为\nns1.vultr.com 和 ns2.vultr.com。")]),e._v(" "),s("p",[e._v("然后记得把 NameServer 3: 框里的 ns3.dnsowl.com 这条记录删除。")]),e._v(" "),s("p",[e._v("切记要把这个第3条的 NameSilo 默认的 DNS 记录删掉。")]),e._v(" "),s("p",[e._v("最后，显示成功。Name Servers 处已显示 ns1.vultr.com, ns2.vultr.com")]),e._v(" "),s("p",[e._v("NS 的修改需要较长时间，一般最长在48小时内生效。通常隔天即可。OK，到这一步代\n表已经把域名解析权交给了 Vultr，工作交接完毕！自此你再也不用管 Namesilo 了，你\n只要在下次域名到期前来续费就行了。")]),e._v(" "),s("p",[e._v("好了域名我们已经准备好了，来看下一步吧！")]),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("终于到了我们的重头戏，配置环境了。")]),e._v(" "),s("p",[e._v("vultr有很多环境，它官方有提供的LAMP镜像，一键搭好LAMP环境。但是我安装系统的\n时候没有选择。要是怕麻烦的用户可以选择一键搭好LAMP环境，能节约不少时间。但是\n对于我这么爱折腾的用户，不虐下自己都不开心的，哈哈。")]),e._v(" "),s("p",[e._v("首先linux系统有了，我们接下来就是要安装web服务器了。")]),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("web服务器\n总的来说，web服务器就是运行在计算机上的一个向整个网络或者是web客户端、浏览器\n提供文档的一个程序，我们通过http请求便可以获取到存储到web服务器中的信息。\nweb服务器与网络服务器的区别\n网络服务器是网络环境下为客户提供某种服务的专用计算机。换言之，我们的web服务器\n服务（程序）便是跑在这种计算机下面的。\n常见的web服务器\n常见的web服务器有Apache、ngnix、IIS\nApache\nApache音译为阿帕奇, 是全世界最受欢迎的web服务器，因其快速、可靠并且可通过简单的\nAPI扩充，能将Python\\Perl等解释器部署在其上面等优势，受到广泛的关注与使用。\nNgnix\nApache的致命缺陷就是在同时处理大量的（一万个以上）请求时，显得有些吃力，所以\n“战斗民族”的人设计的一款轻量级的web服务器——Ngnix, 在高并发下nginx 能保持比\nApache低资源低消耗高性能 ，\nIIS\niis是Internet Information Services的缩写，意为互联网信息服务，是由微软公司提供的基于\n运行Microsoft Windows的互联网基本服务")]),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("相信看了鸟哥的书，再加上自己的Linux版本是Ubuntu 18.04的朋友会疑惑自己的Linux系统\n上没有httpd这个服务，其实这一点我们不必惊慌，我们也不必单独装一个httpd服务，此\n时直接装一个Apache便搞定，因为httpd是Apache超文本传输协议(HTTP)服务器的主程序。\n被设计为一个独立运行的后台进程，它会建立一个处理请求的子进程或线程的池。\n下面我们来看看新版的Apache2 web服务器的安装：")]),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("sudo apt install apache2 -y")]),e._v(" "),e._m(9),e._v(" "),s("p",[e._v("systemctl status apache2")]),e._v(" "),e._m(10),e._v(" "),s("p",[e._v("重启 sudo service apache2 restart")]),e._v(" "),s("p",[e._v("开启、关闭和重启服务器")]),e._v(" "),e._m(11),e._m(12),e._v(" "),s("p",[e._v("编辑apache主配置文件 /etc/apache2/apache2.conf ，修改 KeepAlive 设置")]),e._v(" "),s("p",[e._v("KeepAlive Off")]),e._v(" "),s("p",[e._v("Apache默认的 multi-processing 模块( MPM ) 是一个event 模块, 但是 php默认是使用")]),e._v(" "),s("p",[e._v("prefork 模块")]),e._v(" "),s("p",[e._v("禁用event 模块，启用 prefork 模块")]),e._v(" "),s("p",[e._v("sudo a2dismod mpm_event")]),e._v(" "),s("p",[e._v("sudo a2enmod mpm_prefork")]),e._v(" "),s("p",[e._v("重启Apache")]),e._v(" "),s("p",[e._v("sudo service apache2 restart")]),e._v(" "),s("p",[e._v("如果在重启Apache时，看见关于ServerName的报错，可以做如下修改")]),e._v(" "),s("p",[e._v("编辑apache主配置文件 /etc/apache2/apache2.conf")]),e._v(" "),e._m(13),s("hr"),e._v(" "),e._m(14),e._v(" "),s("p",[e._v("apache配置文件默认的是index.php index.html index.htm等，可以找到这些文件打开看一下。\n找到apache的配置文件httpd.conf后找到")]),e._v(" "),e._m(15),s("p",[e._v("排除各种问题后一般就能加载出来了。")]),e._v(" "),e._m(16),e._v(" "),s("p",[e._v("sudo apt-get install php php-fpm libapache2-mod-php php-mcrypt php-mysql")]),e._v(" "),s("p",[e._v("libapache2-mod-php：与apache2服务器配套干活的")]),e._v(" "),s("p",[e._v("php-mcrypt：php内的加密支持扩展库，说实话我不知道这个是不是安装wordpress必须的")]),e._v(" "),s("p",[e._v("php-mysql：与mysql连接")]),e._v(" "),s("hr"),e._v(" "),e._m(17),e._v(" "),s("p",[e._v("安装 MySQL 过程中，控制台会提示您输入 MySQL 的密码，您需要输入两次密码，并记住您输入的密码，后续步骤需要用到：")]),e._v(" "),e._m(18),s("p",[e._v("注意：这里会遇到一个问题，安装过程当中可能没有提示输入密码。这是怎么回事呢？查\n了各种资料之后终于明白了。以下是解决方案。")]),e._v(" "),s("p",[e._v("方案一：\n我在Ubuntu16.04版本中使用终端安装MySQL5.7时，按照度娘的教程，搜索如何安装，\n大多是如下代码：")]),e._v(" "),e._m(19),s("p",[e._v("方案二：\n目前默认的源是找不到5.7版本的。如果想通过apt来安装mysql5.7，则需要添加源。\n目前网上给出的大部分答案是这样的")]),e._v(" "),e._m(20),s("hr"),e._v(" "),e._m(21),e._v(" "),s("p",[e._v("使用 apt-get 安装 phpmyadmin，安装过程中，您需要根据提示选择 apache2 ，再输\n入root密码 和数据库密码：")]),e._v(" "),s("p",[e._v("sudo apt-get install phpmyadmin -y")]),e._v(" "),s("p",[e._v("建立 /var/www/html 下的软连接：")]),e._v(" "),s("p",[e._v("sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin")]),e._v(" "),s("p",[e._v("重启 MySQL 服务")]),e._v(" "),s("p",[e._v("sudo service mysql restart")]),e._v(" "),s("p",[e._v("重启 Apache 服务：")]),e._v(" "),s("p",[e._v("sudo systemctl restart apache2.service")]),e._v(" "),s("p",[e._v("简介：\nphpMyAdmin 是一个以PHP为基础，以Web-Base方式架构在网站主机上的MySQL的数据库\n管理工具，让管理者可用Web接口管理MySQL数据库。借由此Web接口可以成为一个简易\n方式输入繁杂SQL语法的较佳途径，尤其要处理大量数据的导入及导出更为方便。其中一\n个更大的优势在于由于phpMyAdmin跟其他PHP程序一样在网页服务器上运行，但是您可以\n在任何地方使用这些程序产生的HTML页面，也就是于远程管理MySQL数据库，方便的创\n建、修改、删除数据库及数据表。也可借由phpMyAdmin创建常用的php语法，方便编写网\n页时所需要的sql语法正确性。\n2.11.0是phpMyAdmin最后一系列支持PHP4的版本，并增加了创建与查看View的功能，能够\n从查询的结果中建立，并能够管理procedures。这个版本开始，也支持MySQL数据库 5.0.37\n版本之后的查询文件化功能，并因应上面有数千个数据库与数据表的服务器，提供更好的\n管理接口")]),e._v(" "),e._m(22),e._v(" "),s("p",[e._v("整合php和mysql")]),e._v(" "),s("p",[e._v("sudo apt-get install php7.2-mysql")]),e._v(" "),s("p",[e._v("整合php和Apache")]),e._v(" "),s("p",[e._v("sudo apt-get install libapache2-mod-php7.2")]),e._v(" "),e._m(23),e._v(" "),s("p",[e._v("其实这个上面已经安装过了。。。")]),e._v(" "),s("p",[e._v("sudo service apache2 restart")]),e._v(" "),e._m(24),e._v(" "),s("p",[e._v("Apache默认的网站根目录位于 /var/www/html/ ,进入这个目录，并创建 info.php\n<?php\nphpinfo();\n?>")]),e._v(" "),s("p",[e._v("在浏览器中输入 http://localhost/info.php")]),e._v(" "),s("p",[e._v("排错")]),e._v(" "),s("p",[e._v("如果 http://localhost/info.php 页面空白，请尝试 Ctrl+F5 强制刷新页面。")]),e._v(" "),s("p",[e._v("如果依然空白，说明php和apache之间还需要一些配置")]),e._v(" "),s("p",[e._v("编辑 /etc/apache2/apache2.conf")]),e._v(" "),e._m(25),s("p",[e._v("重启Apache")]),e._v(" "),s("p",[e._v("sudo service apache2 restart")]),e._v(" "),s("p",[e._v("刷新 http://localhost/info.php 。此时应该可以看见phpinfo中的内容了。")]),e._v(" "),s("p",[e._v("注意：这里有可能又会i遇到一个问题，那就是php无法解析的问题。这个问题其实很简\n单，就是apache2配置文件没有配置好。apache本身是不具备执行php代码能力的，需要把\nphp当作apache的一个模块加载来解析php文件。")]),e._v(" "),s("p",[e._v("方案一：")]),e._v(" "),s("p",[e._v("ubuntu 16.04下，通过在/etc/apache2/apache2.conf中\n加入")]),e._v(" "),e._m(26),s("p",[e._v("然后sudo systemctl reload apache2搞定。")]),e._v(" "),s("p",[e._v("方案二：")]),e._v(" "),s("p",[e._v("问题描述:ubuntu16.04下安装php7.1,之后访问index.php显示无法访问此网站。")]),e._v(" "),e._m(27),s("p",[e._v("一般来说只要添加2-3-4-6-7就可以了")]),e._v(" "),s("p",[e._v("以上是Ubuntu下php无法访问此网站的内容，更多 无法 Ubuntu 访问 网站 php 的内\n容，请您使用搜索功能获取相关信息。")]),e._v(" "),e._m(28),e._v(" "),s("p",[e._v("我们需要下载一个 Wordpress 压缩包：")]),e._v(" "),s("p",[e._v("wget https://cn.wordpress.org/wordpress-4.7.4-zh_CN.zip")]),e._v(" "),s("p",[e._v("下载完成后，解压这个压缩包")]),e._v(" "),s("p",[e._v("sudo unzip wordpress-4.7.4-zh_CN.zip")]),e._v(" "),s("p",[e._v("解压完后，就能在 Wordpress 文件夹里看到 Wordpress 的源码了")]),e._v(" "),s("p",[e._v("到 Wordpress 官网找一个安装包并复制安装包下载路径。")]),e._v(" "),e._m(29),e._v(" "),s("p",[e._v("进入 mysql，输入以下代码后，按提示输入您MySQL密码:")]),e._v(" "),s("p",[e._v("mysql -u root -p")]),e._v(" "),s("p",[e._v("为 wordpress 创建一个叫 wordpress 的数据库：")]),e._v(" "),s("p",[e._v("CREATE DATABASE wordpress;")]),e._v(" "),s("p",[e._v("为 这个数据库设置一个用户为 wordpressuser：")]),e._v(" "),s("p",[e._v("CREATE USER wordpressuser;")]),e._v(" "),s("p",[e._v("为这个用户配置一个密码为 password123：")]),e._v(" "),s("p",[e._v('SET PASSWORD FOR wordpressuser= PASSWORD("password123");')]),e._v(" "),s("p",[e._v("为这个用户配置数据库的访问权限：")]),e._v(" "),s("p",[e._v('GRANT ALL PRIVILEGES ON wordpress.* TO wordpressuser IDENTIFIED BY"password123";')]),e._v(" "),s("p",[e._v("生效这些配置")]),e._v(" "),s("p",[e._v("FLUSH PRIVILEGES;")]),e._v(" "),s("p",[e._v("然后退出 mysql")]),e._v(" "),s("p",[e._v("exit;")]),e._v(" "),s("p",[e._v("数据库这块要注意下")]),e._v(" "),e._m(30),e._v(" "),s("p",[e._v("由于PHP默认访问 /var/www/html/ 文件夹，所以我们需要把 wordpress 文件夹里的文")]),e._v(" "),s("p",[e._v("件都复制到 /var/www/html/ 文件夹")]),e._v(" "),s("p",[e._v("sudo mv wordpress/* /var/www/html/")]),e._v(" "),s("p",[e._v("修改一下 /var/www/html/ 目录权限：")]),e._v(" "),s("p",[e._v("sudo chmod -R 777 /var/www/html/")]),e._v(" "),s("p",[e._v("将apache指定到index.html")]),e._v(" "),s("p",[e._v("sudo mv /var/www/html/index.html /var/www/html/index~.html")]),e._v(" "),s("p",[e._v("重启 Apache 服务：")]),e._v(" "),s("p",[e._v("sudo systemctl restart apache2.service")]),e._v(" "),s("p",[e._v("测试访问")]),e._v(" "),s("p",[e._v("距离大功告成还有一步：编辑/var/www/html/wp-config")]),e._v(" "),s("p",[e._v("在这个文件的末尾添加这样一行代码即可：")]),e._v(" "),s("p",[e._v("define('FS_METHOD', 'direct');")]),e._v(" "),s("p",[e._v("这个代码意思是：定义文件操作方式为direct，direct代表直接操作，也就是通过php本\n地操作文件I/O。当安装、更新插件时php脚本会去网络下载主题、插件，然后写入本地\n磁盘。如果不这样设置，默认会使用FTP方式操作服务器上的文件。我一开始就不知道这\n个设置，在配置ftp服务器上浪费了巨多时间。FS_METHOD参数的详细信息在如下页面\n可以找到（虽然这个页面内说direct是默认方式，但是我亲身体验发现并不是啊）：\nhttps://codex.wordpress.org/Editing_wp-config.php")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("注意：查看刚才自己解压的安装包，重新配置wp-config文件，填写自己相对应的数据库相关的信息。")]),e._v(" "),s("p",[e._v("wordpress客户端的安装界面弹出来后，填上相对应的信息，就可以咯。")]),e._v(" "),s("p",[e._v("现在输入你的域名或者服务器地址应该就能跳转到wordpress客户端安装界面了。搞了这么一通，总结一下就是，还是选择一键安装包吧。。。")]),e._v(" "),e._m(31),e._v(" "),s("p",[e._v("经过上面的安装已经大功告成，现在所有操作都没有问题了。下面我会不定时更新wordpress使用的小问题。")]),e._v(" "),s("p",[e._v("1)今天安装了JetPack插件，发现他提示如下：")]),e._v(" "),s("p",[e._v("安装php-xml即可：sudo apt-get install php-xml，然后重启apache服务器")]),e._v(" "),s("p",[e._v("2)关于wordpress的“固定链接”，如果没有开启apache的mod_rewrite功能，那么会找不到已经写好的文章。安装方法：编辑/etc/apache2/apache2.conf文件，更改如下位置为“All”")]),e._v(" "),s("p",[e._v("注意更改的是/var/www这个Directory。然后运行命令：sudo a2enmod rewrite，最后重启apache服务器")]),e._v(" "),s("p",[e._v("3)有可能会影响到你服务器上之前的软件")]),e._v(" "),s("p",[e._v("重启相关的服务就好了")]),e._v(" "),s("p",[e._v("4)由于系统版本不同，相关的操作可能会有一些区别")]),e._v(" "),s("p",[e._v("5)后续服务器以及博客的优化我会慢慢更新的")]),e._v(" "),s("p",[e._v("6)声明：部分的解决方案是参考网上一些文章，例如域名购买，配置LAMP等等。我把这部分的知识整合并且加入了一些自己遇到的坑。但是每个人实际的配置环境都不一定相同，仅作参考。本文未经作者许可不得转载。")])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"搭建wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建wordpress"}},[this._v("#")]),this._v(" 搭建WordPress")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_1-背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[this._v("#")]),this._v(" 1 背景")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_2-准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-准备工作"}},[this._v("#")]),this._v(" 2 准备工作")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_3-具体步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-具体步骤"}},[this._v("#")]),this._v(" 3 具体步骤")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_3-1-一-域名购买和相关设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-一-域名购买和相关设置"}},[this._v("#")]),this._v(" 3.1 一 域名购买和相关设置")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_3-2-二-配置lamp环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-二-配置lamp环境"}},[this._v("#")]),this._v(" 3.2 二 配置LAMP环境")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_3-2-1-几个必要的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-几个必要的概念"}},[this._v("#")]),this._v(" 3.2.1 几个必要的概念")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_3-2-2-apache2-web-服务器的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-apache2-web-服务器的安装"}},[this._v("#")]),this._v(" 3.2.2 Apache2 web 服务器的安装")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("安装命令搞定")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("安装完毕后，我们检查是否启动了Apache服务")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("我们再来看看一些操作Apache的常用命令")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("1、/etc/init.d/apache2 start //启动Apache服务\n2、/etc/init.d/apache2 stop //停止Apache服务\n3、/etc/init.d/apache2 restart //重启Apache服务\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"4"}},[t("li",[t("p",[this._v("下面我们就可以开始访问我们刚刚配置的Apache服务器了。打开浏览器，输入http://127.0.0.1/ （这是主机默认的IP地址）或者如果是云主机就输入云主机的IP地址。\n当我们看到下面的页面时变说明Apache2 服务已经成功在我们的服务器上工作了。")])]),this._v(" "),t("li",[t("p",[this._v("附加")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("添加一行 ServerName localhost\n然后执行 sudo service apache2 restart\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"6"}},[t("li",[this._v("注意：这里有的同学可能会遇到一些问题，无法加载到apache2信息页面。这里就要判断到底是哪里出了问题了，")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<IfModule dir_module>\nDirectoryIndex index.php index.html index.htm\n</IfModule>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_3-2-3-安装php组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-安装php组件"}},[this._v("#")]),this._v(" 3.2.3 安装php组件")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_3-2-4-安装-mysql-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-安装-mysql-服务"}},[this._v("#")]),this._v(" 3.2.4 安装 MySQL 服务")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("sudo apt-get install mysql-server -y\n安装 php MySQL相关组件：\nsudo apt-get install php7.2-mysql\nsudo apt install mysql-server php-mysql\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("sudo apt-get install mysql-server\nsudo apt-get install mysql-client\n1\n2\n检查MySQL是否运行：\nsudo netstat -tap | grep mysql\n1\n2\n如果成功安装，我的会显示如下内容：\ntcp 0 0 localhost:mysql *:* LISTEN 18475/mysqld\nPS：重启/打开/关闭MySQL的方法是：sudo service mysql restart/start/stop\n就这两个命令就安装好了，可是我在安装过程中并没有出现要我写用户名和密码的地方，\n我一脸懵逼，\n完成后在终端输入mysql -u root -p之后，要求我输入密码，可是我并不知道密码，随便\n输入之后，\nERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password:\nYES)\n百度了三五个小时，解决方案五花八门，我最后使用有效的方法是：\n打开一个文件\nsudo vim /etc/mysql/debian.cnf\n在这个文件里面有着MySQL默认的用户名和用户密码，\n最最重要的是：用户名默认的不是root，而是debian-sys-maint，如下所示\n# Automatically generated for Debian scripts. DO NOT TOUCH!\n[client]\nhost = localhost\n***user = debian-sys-maint\npassword = Z1fVrmTiZNxxw29o***\nsocket = /var/run/mysqld/mysqld.sock\n[mysql_upgrade]\nhost = localhost\nuser = debian-sys-maint\npassword = Z1fVrmTiZNxxw29o\nsocket = /var/run/mysqld/mysqld.sock\n密码会随即给一个很复杂的，这个时候，要进入MySQL的话，就是需要在终端把root更\n改为debian-sys-maint，如下代码\nmysql -u debian-sys-maint -p\n然后终端会提示你输入密码\nEnter password:\n这是输入文件中的密码即可成功登陆。\n当然了，这之后就要修改密码了，毕竟密码太难记。\n经过度娘的指导，我所安装的版本是5.7，所以password字段已经被删除，取而代之的是\nauthentication_string字段，所以要更改密码：\nmysql> update mysql.user set authentication_string=password('password') where\nuser='root'and Host = 'localhost';\n如果显示：\nQuery OK, 1 row affected, 1 warning (0.00 sec)\nRows matched: 1 Changed: 1 Warnings: 1\n则代表成功修改，之后需要*重启**MySQL，方可登录成功。\n顺便说一下删除MySQL的方法，省的之后再找度娘。\n代码如下：\nsudo apt-get autoremove --purge mysql-server-5.7\nsudo apt-get remove mysql-server\nsudo apt-get autoremove mysql-server\nsudo apt-get remove mysql-common\n上面的可能会有些是多余的，之后需要清理残余数据\ndpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P\n哈哈，到此结束。\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ sudo apt-get install software-properties-common\n$ sudo add-apt-repository -y ppa:ondrej/mysql-5.7\n$ sudo apt-get update\n$ sudo apt-get install mysql-server\n# 这样apt是找不到5.7版本的。\n通过Google，找到了正确的安装步骤\nwget http://dev.mysql.com/get/mysql-apt-config_0.6.0-1_all.deb\nsudo dpkg -i mysql-apt-config_0.6.0-1_all.deb\nsudo apt-get update\nsudo apt-get install mysql-server-5.7\n# 这样才能通过apt来安装mysql5.7\n# 在安装过程中，会要求输入root的密码。\n安装完成后，执行 mysql_secure_installation ，根据提示完成安全设置\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_3-2-5-安装-phpmyadmin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-5-安装-phpmyadmin"}},[this._v("#")]),this._v(" 3.2.5 安装 phpmyadmin")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_3-2-6-整合lamp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-6-整合lamp"}},[this._v("#")]),this._v(" 3.2.6 整合LAMP")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"…"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#…"}},[this._v("#")]),this._v(" …")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_3-2-7-验证环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-7-验证环境"}},[this._v("#")]),this._v(" 3.2.7 验证环境")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<FilesMatch \\.php$>\nSetHandler application/x-httpd-php\n</FilesMatch>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("LoadModule php7_module modules/libphp7.so\nAddType application/x-httpd-php .php\nDirectoryIndex index.php index.htm index.html\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("ServerName localhost\nLoadModule php7_module /usr/lib/apache2/modules/libphp7.1.so\nDirectoryIndex index.html index.htm index.php\nAddType application/x-httpd-php .php\nAddType application/x-httpd-php-source .phps\nInclude /etc/apache2/mods-available/php7.1.load\nInclude /etc/apache2/mods-available/php7.1.conf\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_3-2-7-安装-wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-7-安装-wordpress"}},[this._v("#")]),this._v(" 3.2.7 安装 Wordpress")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_3-2-8-为-wordpress-配置一个数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-8-为-wordpress-配置一个数据库"}},[this._v("#")]),this._v(" 3.2.8 为 wordpress 配置一个数据库")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"_3-2-9-配置-wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-9-配置-wordpress"}},[this._v("#")]),this._v(" 3.2.9 配置 wordpress")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"_3-4-后续维护"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-后续维护"}},[this._v("#")]),this._v(" 3.4 后续维护")])}],!1,null,null,null);t.default=p.exports}}]);