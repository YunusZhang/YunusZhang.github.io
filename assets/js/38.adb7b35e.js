(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{345:function(t,s,e){"use strict";e.r(s);var n=e(1),o=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"解决无法部署的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决无法部署的问题"}},[t._v("#")]),t._v(" 解决无法部署的问题")]),t._v(" "),e("h2",{attrs:{id:"_1-问题出现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题出现"}},[t._v("#")]),t._v(" 1 问题出现")]),t._v(" "),e("p",[t._v("某次在更新完内容的,要部署的时候,突然出现了提示 WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! 而失败的解决方法")]),t._v(" "),e("p",[t._v("报错提示如下\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\nIt is also possible that a host key has just been changed.\nThe fingerprint for the RSA key sent by the remote host is\nSHA256:uNiVztksCsDhcc0u9e8BujQXVUpKZIDTMczCvj3tD2s.\nPlease contact your system administrator.\nAdd correct host key in /c/Users/xxxxx/.ssh/known_hosts to get rid of this message.\nOffending RSA key in /c/Users/xxxxx/.ssh/known_hosts:2\nHost key for github.com has changed and you have requested strict checking.\nHost key verification failed.\nfatal: Could not read from remote repository.")]),t._v(" "),e("p",[t._v("Please make sure you have the correct access rights\nand the repository exists.")]),t._v(" "),e("h2",{attrs:{id:"_2-分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-分析"}},[t._v("#")]),t._v(" 2 分析")]),t._v(" "),e("p",[t._v("可能是官方更改了认证方式, 现在不能用用户名密法的方式, 要用生成密钥的方式, 或者直接删除known_hosts文件")]),t._v(" "),e("h2",{attrs:{id:"_3-解决方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-解决方法"}},[t._v("#")]),t._v(" 3 解决方法")]),t._v(" "),e("p",[t._v("最简单的方式就是删除上面提到的 known_hosts 文件，例如我的文件是 /c/Users/xxxxx/.ssh/known_hosts 路径，直接使用 rm 命令删除，代码如下")]),t._v(" "),e("p",[t._v("rm /c/Users/xxxxx/.ssh/known_hosts")]),t._v(" "),e("p",[t._v("复制\n还请在你电脑上执行以上命令的时候，替换为你自己的电脑上的路径")]),t._v(" "),e("p",[t._v("执行完成之后，重新推拉代码，可以看到以下提示信息，只需要输入 yes 回车即可")]),t._v(" "),e("p",[t._v("The authenticity of host 'github.com (20.205.243.166)' can't be established.\nED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.\nThis key is not known by any other names\nAre you sure you want to continue connecting (yes/no/[fingerprint])?")]),t._v(" "),e("p",[t._v("复制\n以上步骤就是在将 github 添加到 known_hosts 文件里")]),t._v(" "),e("p",[t._v("也就是下一次推拉代码就不需要再次执行以上步骤")])])}],!1,null,null,null);s.default=o.exports}}]);