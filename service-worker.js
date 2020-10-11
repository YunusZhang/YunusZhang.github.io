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
    "revision": "01e0bdf1abbb6202bf8543ab94303a03"
  },
  {
    "url": "about/index.html",
    "revision": "218a2cf986d1d32f2d7368a0c33db270"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d2c4a3f6.js",
    "revision": "0e777e04f156f8d89412eb68c0f694a5"
  },
  {
    "url": "assets/js/11.39785d4e.js",
    "revision": "f7cf81e5017914a0da406c8c394d0082"
  },
  {
    "url": "assets/js/12.32b534e3.js",
    "revision": "d5902edb514f2e786db699f8e5780399"
  },
  {
    "url": "assets/js/13.e9df8f0e.js",
    "revision": "b2b18d9cc38b8f2fb03e67b73537fc18"
  },
  {
    "url": "assets/js/14.8cb800b2.js",
    "revision": "2251174413612724dc01473c4bf8f49b"
  },
  {
    "url": "assets/js/15.186a83b8.js",
    "revision": "6fc99ae6c987d7aff00a3464a43c2e37"
  },
  {
    "url": "assets/js/16.80c446e8.js",
    "revision": "a3b7525963dfdf53672a10d8b21d001f"
  },
  {
    "url": "assets/js/17.5622d44f.js",
    "revision": "7b214624c66fa874fbb2a205207e5781"
  },
  {
    "url": "assets/js/18.437486c5.js",
    "revision": "03cb60517751b46927d4fc4d36b699df"
  },
  {
    "url": "assets/js/19.d5715439.js",
    "revision": "8eedebbdf8503546e49252ceee202dc9"
  },
  {
    "url": "assets/js/2.70041b67.js",
    "revision": "9c01b2e5d9698856c8c32e4f0d6fc9ab"
  },
  {
    "url": "assets/js/20.32b2040f.js",
    "revision": "6b6f4b4e3c6fa1f2ac32257ac8d3952a"
  },
  {
    "url": "assets/js/21.e2d5d84b.js",
    "revision": "d9e8ad6dae6a400ca98a5d40f72e5b9e"
  },
  {
    "url": "assets/js/22.a2fd119e.js",
    "revision": "87d529ab7f06cb3a9b224c664108191a"
  },
  {
    "url": "assets/js/23.9db5aab3.js",
    "revision": "d14d6befbc56807b0946cf11a90b4330"
  },
  {
    "url": "assets/js/24.00f3e17a.js",
    "revision": "24f5822cf5caf261e88be1ae29d71ac0"
  },
  {
    "url": "assets/js/3.4dc27ab8.js",
    "revision": "a314184e3f4684c8b644d7e76d3f5706"
  },
  {
    "url": "assets/js/4.49d72dc7.js",
    "revision": "158756fbc25fe896b3fbc8903975b98e"
  },
  {
    "url": "assets/js/5.8a178915.js",
    "revision": "5ab9e864cd9d8361e4db80e14094411e"
  },
  {
    "url": "assets/js/6.55158f99.js",
    "revision": "2574383f77dc597bb927cfc1afd99e28"
  },
  {
    "url": "assets/js/7.6dbbff34.js",
    "revision": "9b4075b20df3585375f42a488386700e"
  },
  {
    "url": "assets/js/8.7054cdfc.js",
    "revision": "6a539408965bd9180359fa5dc724e5df"
  },
  {
    "url": "assets/js/9.3835219f.js",
    "revision": "3eba9422fb5d301d20928e45d86194ea"
  },
  {
    "url": "assets/js/app.8256b78b.js",
    "revision": "4611398171eb0ac981700a09da2acea7"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "8245ea0a0cf8deb2016533890af3a736"
  },
  {
    "url": "index.html",
    "revision": "2b9883a2684eeccdc16aab8bf7eb40c7"
  },
  {
    "url": "life/2019-05-26.html",
    "revision": "21494954dfa5e7bbff2b20375a2e5571"
  },
  {
    "url": "life/index.html",
    "revision": "3e716d7987216dcd1e8a8520d9662cc6"
  },
  {
    "url": "ponder/index.html",
    "revision": "31e3f67ea0d4aa11fc1b9dfa9f4393e0"
  },
  {
    "url": "tags/index.html",
    "revision": "d0fc92112a737e09e9cc57b694b23280"
  },
  {
    "url": "technology/algor/pageAlgor.html",
    "revision": "eb5eda38eccf207b154341e0315b6647"
  },
  {
    "url": "technology/hardware/addMemory.html",
    "revision": "6169aee08bbf5925188a361c371a2505"
  },
  {
    "url": "technology/hardware/cache.html",
    "revision": "4bbe958c70f108a4d125f3744dea9a84"
  },
  {
    "url": "technology/hardware/ssdRepaire.html",
    "revision": "c293178fc7d36b1bc22bd02787cacae2"
  },
  {
    "url": "technology/index.html",
    "revision": "303ae590f057634dae528edab3a100ec"
  },
  {
    "url": "technology/systemTools/fileShare.html",
    "revision": "c532ee2dc0b57cd14ae29e3c12284b46"
  },
  {
    "url": "technology/systemTools/namesiloDNS.html",
    "revision": "7c39fd2ff67174a4ab62cde345eb5294"
  },
  {
    "url": "technology/systemTools/ss.html",
    "revision": "2a2501d1923b9f83d1dd72adc3f66390"
  },
  {
    "url": "technology/vue/20180601_myblog.html",
    "revision": "a7406ec7cb69c89eb339b3e195977a50"
  },
  {
    "url": "technology/web/wordpress.html",
    "revision": "cffa2b452806ea3c5a073b7123d47cfb"
  },
  {
    "url": "timeLine/index.html",
    "revision": "67a2e88fc157b521dac38582bd3dd635"
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
