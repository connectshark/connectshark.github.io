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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2992bcc25e9af7c8e470fd07cfecda34"
  },
  {
    "url": "aboutme.html",
    "revision": "84238599aa5f06fb30c9ce384af4fd6b"
  },
  {
    "url": "assets/css/0.styles.0eb9994b.css",
    "revision": "6627bee31a1ee6c3ea689c7a7c60a5af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0a83f7d3.js",
    "revision": "a3ec4827ada0275ada09892e79f6155b"
  },
  {
    "url": "assets/js/11.419b4404.js",
    "revision": "2fd8c0568641ce5c30d9ef67fff37528"
  },
  {
    "url": "assets/js/12.22c5789a.js",
    "revision": "2280a297c37a2315c726e241a88297f9"
  },
  {
    "url": "assets/js/13.5514b4a7.js",
    "revision": "06a5e481e19e81d281fb7de153b96acc"
  },
  {
    "url": "assets/js/14.95474aa8.js",
    "revision": "e903a6be3c1cb2e2a90218d81e8173b8"
  },
  {
    "url": "assets/js/15.45cbe00d.js",
    "revision": "05f58672bbd1143d7c0789a0be32bf85"
  },
  {
    "url": "assets/js/16.dcc28fbb.js",
    "revision": "15a6cf5e752fb673fd7dc9bcc18df139"
  },
  {
    "url": "assets/js/17.01115f12.js",
    "revision": "5b93012c1d430ebe25b4905d27c8c218"
  },
  {
    "url": "assets/js/18.cbfe6519.js",
    "revision": "1889d2142e682e11629dd3a4ecd69b70"
  },
  {
    "url": "assets/js/19.64b90dcd.js",
    "revision": "03a1410a69c32f20533c01923571d588"
  },
  {
    "url": "assets/js/20.323d872b.js",
    "revision": "6a9ae7586eeea0ecfd6d7c9499013833"
  },
  {
    "url": "assets/js/21.cadb527e.js",
    "revision": "cf9baf02d25f4bc1b41318b11d15d3fa"
  },
  {
    "url": "assets/js/22.309e637a.js",
    "revision": "0575e1d81fb502a1538a868527c3309b"
  },
  {
    "url": "assets/js/23.bf540c6d.js",
    "revision": "d29431353b329fcfa0b7828a0be14a4d"
  },
  {
    "url": "assets/js/24.5d7371a7.js",
    "revision": "971f7c8e15d43c56e01772f3ed3b4405"
  },
  {
    "url": "assets/js/25.5ac363c7.js",
    "revision": "4bd3bc0d5af35c5ecc9adcf8c880c9e1"
  },
  {
    "url": "assets/js/26.ea92ef8d.js",
    "revision": "ecf7cc39dab93a798f56c76f027041ad"
  },
  {
    "url": "assets/js/27.028d0753.js",
    "revision": "ac25948f3a249fff27785b8410b4aa28"
  },
  {
    "url": "assets/js/28.4a3e5900.js",
    "revision": "293910084d0c4d418b9c89be3cfd9c29"
  },
  {
    "url": "assets/js/29.fe56f89d.js",
    "revision": "096e35d3d570e2c1ec4e591539a40170"
  },
  {
    "url": "assets/js/3.7d67b20a.js",
    "revision": "7229ceeebe11634bb818ac16f7cf737d"
  },
  {
    "url": "assets/js/30.c61d6d16.js",
    "revision": "06ad419f657c851e0c4cda0b6df17b45"
  },
  {
    "url": "assets/js/31.cb6d590d.js",
    "revision": "8871f87675b904369c0bb05454e8e4cf"
  },
  {
    "url": "assets/js/32.735792ce.js",
    "revision": "6e2db101a046a0a45252ea510390661c"
  },
  {
    "url": "assets/js/33.512597fe.js",
    "revision": "fe6400fc16d6bd2ef5ffaec6340ae0a1"
  },
  {
    "url": "assets/js/34.98e48ee8.js",
    "revision": "ad15f88db6272d382d0c2bd1e082ce63"
  },
  {
    "url": "assets/js/35.a167aaf0.js",
    "revision": "d09c0021d668d53e52fb76b5a9b9dcfb"
  },
  {
    "url": "assets/js/36.e9c242c7.js",
    "revision": "4a577b726be0421648d0ab82619c0da3"
  },
  {
    "url": "assets/js/37.64ccbe8f.js",
    "revision": "fe776b627ca0315183508bd3090e66ec"
  },
  {
    "url": "assets/js/38.508d9978.js",
    "revision": "164d27f4828a1952ae85999260a6ed14"
  },
  {
    "url": "assets/js/39.4a71f799.js",
    "revision": "563680c139ba6c9be043b2d275f009de"
  },
  {
    "url": "assets/js/4.cf1720d0.js",
    "revision": "0703f25abd5f8d7b0522828522cb7f41"
  },
  {
    "url": "assets/js/40.fb7d89e1.js",
    "revision": "1d69f500e0ec6ce4f0aade5d1861fbc0"
  },
  {
    "url": "assets/js/41.c620ada8.js",
    "revision": "ad6bbf139964dc6a0bb5fffa3d59958e"
  },
  {
    "url": "assets/js/42.b1c6a9bc.js",
    "revision": "08c313748f4b6ef314fd91fa52dd8c48"
  },
  {
    "url": "assets/js/43.bb8b68bb.js",
    "revision": "eb4db2e34f8706f1952905398d0caf7c"
  },
  {
    "url": "assets/js/44.ad9fcfeb.js",
    "revision": "4a17166b82873e3bd347d1ee4f87784b"
  },
  {
    "url": "assets/js/45.8e576641.js",
    "revision": "4d009903b706578cf6164c82d824d590"
  },
  {
    "url": "assets/js/46.b722b8ee.js",
    "revision": "7253ae65af2d757bb59485b8376883ee"
  },
  {
    "url": "assets/js/47.7cab99d9.js",
    "revision": "2cc2a71c450c8076c842e98d82283a19"
  },
  {
    "url": "assets/js/48.763a0e46.js",
    "revision": "d21bcd9708f92f049aa3d56f0427f0f0"
  },
  {
    "url": "assets/js/49.df24e359.js",
    "revision": "7efba4b3e576e93681c71280d6cc1567"
  },
  {
    "url": "assets/js/5.eef5cd70.js",
    "revision": "fe456285a274443f8db8858fd02b6b6f"
  },
  {
    "url": "assets/js/50.4b7c7055.js",
    "revision": "eafe6bec077d4307572b2ba709608bc1"
  },
  {
    "url": "assets/js/51.1cfea6f7.js",
    "revision": "6524923420a8ab7768329ec9d412f5dd"
  },
  {
    "url": "assets/js/52.7a0c34b9.js",
    "revision": "fcb8f2a94bf067bb744af89bd0242f6f"
  },
  {
    "url": "assets/js/53.677758a5.js",
    "revision": "e2f3007faedd1ac8b03c0c7807a42eb3"
  },
  {
    "url": "assets/js/54.f2608551.js",
    "revision": "0f4715f23c081601a9c8d04e0cf14f2b"
  },
  {
    "url": "assets/js/55.ad234090.js",
    "revision": "800e031c9723c6d3db1a6237b4e727c9"
  },
  {
    "url": "assets/js/6.0d6a1da3.js",
    "revision": "53e4431794d34aaa5c6f2c3b427bc69e"
  },
  {
    "url": "assets/js/7.994cbad1.js",
    "revision": "a1702196524fe4ecacfaf11569905312"
  },
  {
    "url": "assets/js/8.79b117a0.js",
    "revision": "06088e3224faf18cb2b380369448f7e8"
  },
  {
    "url": "assets/js/9.5057fbf3.js",
    "revision": "cdd8bb29c65ab76def5b75123a0ad551"
  },
  {
    "url": "assets/js/app.076bd214.js",
    "revision": "735e143cd9e4e25ac7c7fb43eeecfb94"
  },
  {
    "url": "assets/js/vendors~flowchart.55a609d1.js",
    "revision": "35d0c20a6a305269a7146e0349bb853b"
  },
  {
    "url": "collection/gitpage.html",
    "revision": "4f25f71a1a21f249e6d28fa7e1c8b701"
  },
  {
    "url": "collection/playerList.html",
    "revision": "8308155b3bfb79bb805cb0de3e4d21ec"
  },
  {
    "url": "collection/todolist.html",
    "revision": "26105a62c4c8b16d69688474d589b8d7"
  },
  {
    "url": "download/phaser.html",
    "revision": "7a7819b4114e064f5f0d4d6023c218d8"
  },
  {
    "url": "images/logo.jpg",
    "revision": "5d743d997e5c0598fa4233c06622a756"
  },
  {
    "url": "images/sample-logo144x.png",
    "revision": "f0c46ba18aabd1597cf3073d71626c2b"
  },
  {
    "url": "images/sample-logo192x.png",
    "revision": "4de2a183a307c65018866ed35cd28fc2"
  },
  {
    "url": "images/sample-logo48x.png",
    "revision": "ab2b5fe14dd0df3d436a7c80b915f1fb"
  },
  {
    "url": "index.html",
    "revision": "c9548b7501dfa3076c2ac099bc47b417"
  },
  {
    "url": "Javascript30/ArrayCardio1.html",
    "revision": "9dceedbc6d2e77e13f5e4bfaba5b0fe0"
  },
  {
    "url": "Javascript30/ArrayCardio2.html",
    "revision": "cccf9c386291b9d8c6320b7b1c947740"
  },
  {
    "url": "Javascript30/CSSVariables.html",
    "revision": "c54e586908548be4bef29016438a0612"
  },
  {
    "url": "Javascript30/customVideoPlayer.html",
    "revision": "ec4941a4130016fe2f557480b0c7db60"
  },
  {
    "url": "Javascript30/devTools.html",
    "revision": "f98fe605bfe4b80a6162e9e5867295b7"
  },
  {
    "url": "Javascript30/DrumKit.html",
    "revision": "1d1f7b4ad26cc0456329f3c5a5c12a6e"
  },
  {
    "url": "Javascript30/flexPanelGallery.html",
    "revision": "e1c958691d9b3b11381208732e281dee"
  },
  {
    "url": "Javascript30/funCanvas.html",
    "revision": "69746f0d7f3ec2dfb75af6ae60913010"
  },
  {
    "url": "Javascript30/index.html",
    "revision": "7bbf5440c760c1efb8ce87e8f67e823a"
  },
  {
    "url": "Javascript30/JsClock.html",
    "revision": "fc388a33921d35d37d8059742bfc7074"
  },
  {
    "url": "Javascript30/leftShift.html",
    "revision": "dc2957203c27be387e940fe7c0ad73a2"
  },
  {
    "url": "Javascript30/typeAhead.html",
    "revision": "592b4dd40fa52f55fc9bfdc9b1405005"
  },
  {
    "url": "Phaser3/addScene.html",
    "revision": "64a80e920b7c25c877eb1178a5bdeacf"
  },
  {
    "url": "Phaser3/btnObject.html",
    "revision": "95080e52ee3854b7fa473bc2a6b661c9"
  },
  {
    "url": "Phaser3/collectStar.html",
    "revision": "12bd77e2d747c2d6b783ee40000feeb1"
  },
  {
    "url": "Phaser3/index.html",
    "revision": "e4435629411bf140529f630898f0dd92"
  },
  {
    "url": "Phaser3/introduce.html",
    "revision": "3ca48ffbe990db90de9613fce597729d"
  },
  {
    "url": "Phaser3/loadfile.html",
    "revision": "324981ec0a5701825c7fdc574124c5e0"
  },
  {
    "url": "Phaser3/phaserInVue.html",
    "revision": "7753f7e0fd6a80814722ac8e4cf5d9a5"
  },
  {
    "url": "Phaser3/phaserInWebpack.html",
    "revision": "7f020191011445fd80bb0b063f5a6159"
  },
  {
    "url": "Phaser3/progressBar.html",
    "revision": "78951b8d18a72284840f544d50195205"
  },
  {
    "url": "Phaser3/score.html",
    "revision": "f9fe5a506fb48d23ebd8faa73356b44f"
  },
  {
    "url": "Phaser3/setGameArcade.html",
    "revision": "7e06e5353b2e6c4ecbee9cdc9f1d67e8"
  },
  {
    "url": "Phaser3/setPlayer.html",
    "revision": "1acd77208b3f3620da8c030beb512d59"
  },
  {
    "url": "teach/arrayfind.html",
    "revision": "eba5ac2898f475fafab9748a320be11f"
  },
  {
    "url": "teach/arrayfindIndex.html",
    "revision": "d7ee8a3d5565cf89e50262dc96ef5eca"
  },
  {
    "url": "teach/arrayReduce.html",
    "revision": "98920b876426690a638dbd64ee0c5dba"
  },
  {
    "url": "teach/env.html",
    "revision": "4cc4939070ba8c8c3222b663350c71a1"
  },
  {
    "url": "teach/howImportVant.html",
    "revision": "979147dd642fa9bd75675a7addc4fa97"
  },
  {
    "url": "teach/polacode.html",
    "revision": "8456b5dd593eab44a08938ae603e2f43"
  },
  {
    "url": "teach/searchHighlight.html",
    "revision": "c5f176b2c7d9140c60b8dcc5b3d29d1e"
  },
  {
    "url": "teach/searchHighlight2.html",
    "revision": "f1c64133db9642503b532f9d0b867fe1"
  },
  {
    "url": "teach/uploadImg.html",
    "revision": "595fdacc54ac8b8fd13f356585f58576"
  },
  {
    "url": "teach/vfor.html",
    "revision": "1ecde9516053a040327a3bc02913cead"
  },
  {
    "url": "teach/vscodesnippet.html",
    "revision": "bb14556845b90353838e17e3e0d206c5"
  },
  {
    "url": "update.html",
    "revision": "dc94135a182066296a2beb3eac03e963"
  }
].concat(self.__precacheManifest || []);
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
