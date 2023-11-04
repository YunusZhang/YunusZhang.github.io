/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2fea1b28ad1295e2ad0ea9c7b801b7c1"
  },
  {
    "url": "about/index.html",
    "revision": "dbbea3291a11e8f7e5fceb5c9f936394"
  },
  {
    "url": "assets/css/0.styles.77d639ce.css",
    "revision": "d6bd2a697f5a830af3f92b8dab270554"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/abTest1.fb9ead71.jpg",
    "revision": "fb9ead715066990b14be7924a9c85b71"
  },
  {
    "url": "assets/img/abTest2.ee0e0b8f.jpg",
    "revision": "ee0e0b8f23c28a28e035dab553d790be"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0524636a.js",
    "revision": "6b2edb84cfde8dea783fa3096db45376"
  },
  {
    "url": "assets/js/11.947c16a3.js",
    "revision": "d185347aecd1429cb89e047c49397eb6"
  },
  {
    "url": "assets/js/12.51c4984b.js",
    "revision": "13d73fd87249409ee1ab08c06d6f89d4"
  },
  {
    "url": "assets/js/13.ec23b4a0.js",
    "revision": "4a890bb5ea4348a106eea137397d00a1"
  },
  {
    "url": "assets/js/14.0d704076.js",
    "revision": "7c3780daa62b7963c273ef08121feaab"
  },
  {
    "url": "assets/js/15.114d913b.js",
    "revision": "fad3907a6338f5633919e14de629d0c5"
  },
  {
    "url": "assets/js/16.94731e60.js",
    "revision": "bdc058a91f038a32030a0491091aadfb"
  },
  {
    "url": "assets/js/17.de3739c5.js",
    "revision": "22a812e6a99d9d55d71da09ef9dae0cb"
  },
  {
    "url": "assets/js/18.718702c6.js",
    "revision": "35827b9e63b87c12e792d3faa43802b5"
  },
  {
    "url": "assets/js/19.44ce7a3e.js",
    "revision": "12831fe896760af3ab74eb907e470e67"
  },
  {
    "url": "assets/js/2.38932ee6.js",
    "revision": "4b53305a8f22b76389fd3dbb3c1fc599"
  },
  {
    "url": "assets/js/20.95f77a6e.js",
    "revision": "092202e2269b83c319f575386c9d4286"
  },
  {
    "url": "assets/js/21.adc9ee61.js",
    "revision": "6d9a84bb97ca57dd1f30526bd69e9971"
  },
  {
    "url": "assets/js/22.1a4d3107.js",
    "revision": "2f93586d862cf0f3c053262e74ff8715"
  },
  {
    "url": "assets/js/23.ab28b9fb.js",
    "revision": "c64248486a00dc05fcb6f40b81778f2f"
  },
  {
    "url": "assets/js/24.f0491f8c.js",
    "revision": "f139da0f95e4376ace52be0e53353bad"
  },
  {
    "url": "assets/js/25.ebff061e.js",
    "revision": "4f73c8e9eff417479802ad0b990e9259"
  },
  {
    "url": "assets/js/26.fd399e9e.js",
    "revision": "4fdf767ea21875fffb22a6a367a37605"
  },
  {
    "url": "assets/js/27.4634fdc1.js",
    "revision": "dce35fde8aa60300fe1f3425b024f292"
  },
  {
    "url": "assets/js/28.0d72eb05.js",
    "revision": "986051520ae76f8cd90c2918db375d5c"
  },
  {
    "url": "assets/js/29.e20e7f51.js",
    "revision": "5f49b087d02265ee73c58d487cefb139"
  },
  {
    "url": "assets/js/3.a3a27c44.js",
    "revision": "98f7d403d5d20040058644f9ca115398"
  },
  {
    "url": "assets/js/30.4ef1be23.js",
    "revision": "3c4e22fc9692c0b9ec4f8b07162f9c22"
  },
  {
    "url": "assets/js/31.af729026.js",
    "revision": "c4f46c7087469a43045287f71ad69f93"
  },
  {
    "url": "assets/js/32.b74e43bc.js",
    "revision": "26b109c0631f7467062ad0382b42edd6"
  },
  {
    "url": "assets/js/33.1fc9bd38.js",
    "revision": "734266378c68588ab421fc4cbc6609de"
  },
  {
    "url": "assets/js/34.4c884e92.js",
    "revision": "787e24c3146f0760c2225563e53efe5f"
  },
  {
    "url": "assets/js/35.69ef4130.js",
    "revision": "fa902fe0ca8d71b0ca6d09fa92fb7884"
  },
  {
    "url": "assets/js/36.f9a6fa95.js",
    "revision": "5979bd490c1f0d4b3ee65c73beb5fdf4"
  },
  {
    "url": "assets/js/37.d3f2b3c3.js",
    "revision": "9667bf03a5433fea9d3725b5447a68d5"
  },
  {
    "url": "assets/js/38.adb7b35e.js",
    "revision": "15363f0aa1970653ff76983ddcd0f89f"
  },
  {
    "url": "assets/js/39.ec26ba26.js",
    "revision": "dc24de3ee514af0b50b11d39fdf6cd53"
  },
  {
    "url": "assets/js/4.dd247e61.js",
    "revision": "38fb325ee234d12da56fcc0b043f4b5a"
  },
  {
    "url": "assets/js/40.3f22cde7.js",
    "revision": "b51454ef64f4edc96c477c48489dc1e4"
  },
  {
    "url": "assets/js/41.a85c18e6.js",
    "revision": "331e8ede36f737bd7f76fc27b29514fa"
  },
  {
    "url": "assets/js/5.b42ba372.js",
    "revision": "10317c44c5ab08cb8bd98535632534de"
  },
  {
    "url": "assets/js/6.1a1baeca.js",
    "revision": "6450cd3599c992cd95eb6255b8433a04"
  },
  {
    "url": "assets/js/7.7c056201.js",
    "revision": "5e1142cc381d74ae53d7bddd0dfc933f"
  },
  {
    "url": "assets/js/8.43850db6.js",
    "revision": "9cc85bc20c0888d04dfeb249de2c14ea"
  },
  {
    "url": "assets/js/9.cb094fa1.js",
    "revision": "0ba2d228e36ec7c68e6011014e5f9ba7"
  },
  {
    "url": "assets/js/app.76659ae3.js",
    "revision": "48c73d20c89636380bfa41b77e930a73"
  },
  {
    "url": "img/屏幕快照 2023-09-20 下午11.14.20.jpg",
    "revision": "7f5d1f2387bddc22a6d09b1ca9a49a10"
  },
  {
    "url": "img/abTest1.jpg",
    "revision": "fb9ead715066990b14be7924a9c85b71"
  },
  {
    "url": "img/abTest2.jpg",
    "revision": "ee0e0b8f23c28a28e035dab553d790be"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "8245ea0a0cf8deb2016533890af3a736"
  },
  {
    "url": "index.html",
    "revision": "d26a5cac373677d36acfd7b77d9a0b7c"
  },
  {
    "url": "life/2016_02_22life.html",
    "revision": "d97ece8329c2b5736952f929a9bb46e8"
  },
  {
    "url": "life/2019-05-26.html",
    "revision": "0ddea26188f75aac2ef89af48ef44cfd"
  },
  {
    "url": "life/index.html",
    "revision": "4d79045607534300e830f76f44e9faf0"
  },
  {
    "url": "ponder/index.html",
    "revision": "8d67d0f1c459cc0547b00325f9bef367"
  },
  {
    "url": "tags/index.html",
    "revision": "eb73672ea4ff3566d2d6d466ddd88d35"
  },
  {
    "url": "technology/abTest/abForWebsites.html",
    "revision": "a7e96e387ee84cf43e312524875a5473"
  },
  {
    "url": "technology/abTest/BESTmodel.html",
    "revision": "ee7a0dd0645a2fcbf2451dd4117479bc"
  },
  {
    "url": "technology/abTest/revenue.html",
    "revision": "aa8f662eeff665aebab6e0d27cdc11d9"
  },
  {
    "url": "technology/algor/pageAlgor.html",
    "revision": "09b4d6e1c47253a0984954570ed377a9"
  },
  {
    "url": "technology/bayesian/19_1.html",
    "revision": "0540bdf5bce5b9528c2a9e4396560124"
  },
  {
    "url": "technology/bayesian/贝叶斯和全概率.html",
    "revision": "23fe43ab09004e7f74e0eb7e4ee43d9b"
  },
  {
    "url": "technology/bayesian/度量的不确定性.html",
    "revision": "266bc00778593d97c6c38db7af1c71a6"
  },
  {
    "url": "technology/bayesian/朴素贝叶斯.html",
    "revision": "afc2de631bbbc8593ba9ed42e084800b"
  },
  {
    "url": "technology/bayesian/条件概率.html",
    "revision": "7f8b6bc3f368420f4956568f95266de5"
  },
  {
    "url": "technology/bayesian/ABtest.html",
    "revision": "9619a32d1124b12e3588f76912cb6066"
  },
  {
    "url": "technology/bayesian/andOr.html",
    "revision": "9b617839c3d33866f69c92b55323980d"
  },
  {
    "url": "technology/bayesian/beta_1.html",
    "revision": "0a8f8a354e89bbd4bc56247435140ec6"
  },
  {
    "url": "technology/bayesian/binoDistri.html",
    "revision": "2bb4a305c016fec26afdd95b2d427977"
  },
  {
    "url": "technology/bayesian/lego.html",
    "revision": "272dd51518e3e3df0b7f29a8bbaff80e"
  },
  {
    "url": "technology/bayesian/likelihood.html",
    "revision": "436ab090ebd171522bbebe0b0218baeb"
  },
  {
    "url": "technology/hardware/addMemory.html",
    "revision": "43c5d54f5b8a7cf5b2bd436675f4bbe6"
  },
  {
    "url": "technology/hardware/cache.html",
    "revision": "00d5ed11075a6478ef8d715d0f51daff"
  },
  {
    "url": "technology/hardware/ssdRepaire.html",
    "revision": "acc71eef6de635454ce25146d2fba64a"
  },
  {
    "url": "technology/index.html",
    "revision": "c79ba09bae7ad24e176ce11bd03ab187"
  },
  {
    "url": "technology/systemTools/fileShare.html",
    "revision": "b4fe2d11b48bf9088205f57f29fc9c0b"
  },
  {
    "url": "technology/systemTools/namesiloDNS.html",
    "revision": "9d54a83c163b832ca35d61560a6c3ee0"
  },
  {
    "url": "technology/systemTools/ss.html",
    "revision": "1bc9078e56c04e212ac08defec94eb54"
  },
  {
    "url": "technology/vue/20180601_myblog.html",
    "revision": "7711219ca87eb1074f2eff865d3f0ad3"
  },
  {
    "url": "technology/vue/20191020_myblog.html",
    "revision": "e52cbbd9614761c63500e9ef48aab858"
  },
  {
    "url": "technology/web/wordpress.html",
    "revision": "4408b16ec5686d3b0a9f875ea990022c"
  },
  {
    "url": "timeLine/index.html",
    "revision": "a0782c29191e62c0630d4887c7d3b959"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
