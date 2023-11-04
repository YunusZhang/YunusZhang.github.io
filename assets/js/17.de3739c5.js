(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{323:function(n,t,s){"use strict";s.r(t);var _=s(1),a=Object(_.a)({},(function(){var n=this.$createElement;this._self._c;return this._m(0)}),[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"_1-best模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-best模型"}},[this._v("#")]),this._v(" 1 BEST模型")]),this._v(" "),t("h1",{attrs:{id:"_2-代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-代码"}},[this._v("#")]),this._v(" 2 代码")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('import numpy as np\nimport pymc as pm\n\nN=250\nmu_A, std_A= 30, 4\nmu_B, std_B= 26, 7\n\ndurations_A=np.random.normal(mu_A,std_A,size=N)\ndurations_B=np.random.normal(mu_B,std_B,size=N)\n\nprint(durations_A[:8])\nprint(durations_B[:8])\n\n\npooled_mean=np.r_[durations_A,durations_B].mean()\npooled_std=np.r_[durations_A,durations_B].std() #标准差\n\ntau=1./np.sqrt(1000.*pooled_std) #\n\n\nmu_A=pm.Normal("mu_A",pooled_mean,tau)\n\nmu_B=pm.Normal("mu_B",pooled_mean,tau)\n\n\nstd_A=pm.Uniform("std_A",pooled_std/1000,1000.*pooled_std)\nstd_B=pm.Uniform("std_B",pooled_std/1000,1000.*pooled_std)\n\n\n\nnu_minus_1=pm.Exponential("nu-1",1./29)\n\n\n\nobs_A=pm.NoncentralT("obs_A",mu_A,1.0/std_A**2,nu_minus_1+1,observed=True,value=durations_A)\n\nobs_B=pm.NoncentralT("obs_B",mu_B,1.0/std_B**2,nu_minus_1+1,observed=True,value=durations_B)\n\n\nmcmc=pm.MCMC([obs_A,obs_B,mu_A,mu_B,std_A,std_B,nu_minus_1])\n\nmcmc.sample(25000,10000)\n\n\n\n\n')])])])])}],!1,null,null,null);t.default=a.exports}}]);