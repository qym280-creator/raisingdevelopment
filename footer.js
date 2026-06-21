/* Shared footer — injected into every page; edited in ONE place. */
(function () {
  var LOGO = '<svg class="logo" viewBox="0 0 10240 10240" aria-hidden="true"><g transform="translate(0,10240) scale(1,-1)" fill="currentColor"><path d="M2743 7405 c-10 -11 -13 -493 -13 -2335 0 -1999 2 -2323 14 -2336 12 -11 58 -14 239 -14 196 0 226 2 231 16 3 9 6 958 6 2110 l0 2094 1208 0 c1146 0 1402 -5 1457 -29 11 -5 49 -15 85 -22 36 -7 76 -19 90 -26 14 -7 40 -16 58 -19 17 -3 32 -10 32 -14 0 -4 18 -13 40 -20 22 -7 40 -16 40 -20 0 -3 16 -12 35 -20 19 -7 36 -19 39 -27 3 -7 11 -13 17 -13 16 0 26 -9 131 -114 99 -101 118 -122 118 -136 0 -6 7 -13 15 -16 8 -4 13 -10 10 -14 -3 -4 2 -13 10 -20 8 -7 15 -19 15 -26 0 -8 5 -14 11 -14 5 0 7 -4 4 -10 -3 -5 -2 -10 4 -10 6 0 13 -16 17 -35 3 -19 10 -35 14 -35 5 0 14 -26 20 -57 7 -32 17 -61 23 -65 15 -9 15 -291 0 -310 -5 -7 -16 -41 -23 -75 -7 -35 -16 -63 -21 -63 -4 0 -11 -15 -15 -34 -3 -19 -12 -37 -19 -39 -7 -3 -16 -18 -19 -33 -4 -16 -16 -34 -27 -42 -10 -7 -19 -18 -19 -23 0 -6 -16 -25 -35 -43 -19 -19 -35 -38 -35 -43 0 -12 -40 -48 -62 -56 -10 -4 -18 -10 -18 -15 0 -5 -24 -24 -52 -42 -29 -19 -55 -36 -58 -39 -6 -7 -53 -34 -90 -53 -14 -7 -28 -16 -31 -21 -3 -5 -8 -8 -10 -7 -7 2 -42 -10 -72 -26 -16 -8 -33 -12 -38 -8 -5 3 -9 1 -9 -4 0 -5 -21 -12 -46 -16 -26 -3 -53 -11 -59 -16 -7 -6 -53 -16 -101 -22 -49 -7 -92 -17 -96 -22 -5 -8 -204 -13 -620 -16 l-612 -5 226 -226 c125 -125 234 -229 242 -232 9 -4 16 -11 16 -16 0 -11 88 -101 98 -101 4 0 162 -155 352 -345 190 -190 348 -345 352 -345 4 0 162 -154 350 -343 189 -189 351 -346 361 -350 9 -3 17 -12 17 -18 0 -13 45 -59 74 -74 10 -5 18 -13 17 -17 -2 -11 32 -43 52 -51 9 -3 17 -13 17 -22 0 -8 6 -15 13 -15 7 0 64 -52 127 -115 l113 -115 429 0 c279 0 428 3 428 10 0 6 -7 10 -15 10 -7 0 -18 6 -22 13 -4 6 -21 19 -38 27 -16 8 -34 21 -38 27 -4 7 -15 13 -22 13 -8 0 -15 3 -15 8 0 8 -57 42 -66 39 -3 -1 -10 6 -15 16 -6 9 -15 17 -21 17 -6 0 -24 14 -40 30 -15 17 -31 30 -34 30 -8 0 -88 64 -97 78 -4 6 -13 12 -19 12 -6 0 -18 6 -27 14 -87 79 -119 106 -127 106 -5 0 -25 18 -44 40 -19 22 -39 40 -44 40 -15 0 -390 352 -836 787 -462 449 -630 615 -630 622 0 4 61 13 136 19 75 6 142 16 148 21 6 5 48 15 94 22 45 7 82 16 82 19 0 3 19 12 43 19 66 21 254 116 269 137 4 6 8 6 8 2 0 -8 80 48 111 78 9 8 20 15 25 15 12 0 254 242 254 254 0 5 11 24 25 42 14 18 25 37 25 42 0 6 6 12 13 15 7 3 19 23 27 46 7 23 16 41 20 41 4 0 13 18 20 40 7 22 17 40 21 40 5 0 11 16 15 35 3 19 10 35 15 35 5 0 6 6 3 14 -3 8 -1 17 5 20 6 4 13 29 17 57 4 27 10 52 14 54 5 3 6 14 3 25 -3 11 1 27 8 36 19 23 19 375 0 398 -7 9 -11 27 -9 41 3 14 2 25 -3 25 -4 0 -10 19 -14 43 -4 23 -11 47 -16 53 -6 7 -9 16 -8 20 1 5 -3 22 -9 37 -7 16 -12 33 -12 38 0 5 -4 9 -9 9 -5 0 -12 15 -16 33 -4 17 -13 42 -21 55 -8 12 -11 22 -7 22 5 0 0 5 -9 11 -10 5 -18 17 -18 24 0 8 -4 15 -8 15 -5 0 -14 16 -22 35 -8 19 -17 35 -22 35 -4 0 -8 5 -8 11 0 6 -14 28 -31 48 -17 20 -45 53 -62 74 -59 71 -124 137 -135 137 -6 0 -17 8 -24 18 -17 22 -84 72 -97 72 -5 0 -14 7 -19 16 -10 17 -24 26 -129 79 -40 20 -73 40 -73 45 0 5 -15 12 -32 15 -18 4 -46 15 -63 25 -16 10 -47 21 -67 25 -21 4 -38 11 -38 15 0 4 -28 13 -62 20 -35 6 -67 15 -73 20 -5 4 -50 13 -100 20 -49 7 -95 16 -100 21 -6 4 -75 11 -153 15 -78 4 -142 11 -142 15 0 5 -633 9 -1407 9 -1203 -1 -1410 -3 -1420 -15z"/></g></svg>';
  var html =
'<footer class="site-footer"><div class="wrap">' +
  '<div class="footer-top">' +
    '<div class="footer-brand">' +
      '<a class="brand" href="index.html">' + LOGO +
        '<span data-lang="en">Raising Development</span><span data-lang="zh-Hant">潤信發展</span><span data-lang="zh-Hans">润信发展</span></a>' +
      '<p><span data-lang="en">Empowering the Future of Infrastructure.</span><span data-lang="zh-Hant">賦能未來基建。</span><span data-lang="zh-Hans">赋能未来基建。</span></p>' +
    '</div>' +
    '<div class="fcol">' +
      '<h4><span data-lang="en">Navigation</span><span data-lang="zh-Hant">導航</span><span data-lang="zh-Hans">导航</span></h4>' +
      '<ul>' +
        '<li><a href="index.html"><span data-lang="en">Home</span><span data-lang="zh-Hant">首頁</span><span data-lang="zh-Hans">首页</span></a></li>' +
        '<li><a href="about.html"><span data-lang="en">About</span><span data-lang="zh-Hant">關於我們</span><span data-lang="zh-Hans">关于我们</span></a></li>' +
        '<li><a href="platform.html"><span data-lang="en">Platform</span><span data-lang="zh-Hant">平台</span><span data-lang="zh-Hans">平台</span></a></li>' +
        '<li><a href="contact.html"><span data-lang="en">Contact</span><span data-lang="zh-Hant">聯絡我們</span><span data-lang="zh-Hans">联系我们</span></a></li>' +
      '</ul>' +
    '</div>' +
    '<div class="fcol">' +
      '<h4><span data-lang="en">Contact</span><span data-lang="zh-Hant">聯絡</span><span data-lang="zh-Hans">联系</span></h4>' +
      '<ul>' +
        '<li><span data-lang="en">Email</span><span data-lang="zh-Hant">電郵</span><span data-lang="zh-Hans">邮箱</span><br><a href="mailto:contact@raisingdevelopment.com">contact@raisingdevelopment.com</a></li>' +
        '<li class="addr"><span data-lang="en">Unit 1603, 16/F The L.Plaza<br>367–375 Queen\'s Road Central<br>Sheung Wan, Hong Kong</span>' +
          '<span data-lang="zh-Hant">香港上環皇后大道中 367–375 號<br>萬利商業大廈 16 樓 1603 室</span>' +
          '<span data-lang="zh-Hans">香港上环皇后大道中 367–375 号<br>万利商业大厦 16 楼 1603 室</span></li>' +
      '</ul>' +
    '</div>' +
    '<div class="fcol">' +
      '<h4><span data-lang="en">Legal</span><span data-lang="zh-Hant">法律</span><span data-lang="zh-Hans">法律</span></h4>' +
      '<ul>' +
        '<li><span data-lang="en">Legal &amp; Compliance</span><span data-lang="zh-Hant">法律合規</span><span data-lang="zh-Hans">法律合规</span></li>' +
        '<li><span data-lang="en">Privacy Policy</span><span data-lang="zh-Hant">私隱政策</span><span data-lang="zh-Hans">隐私政策</span></li>' +
        '<li><span data-lang="en">Terms of Use</span><span data-lang="zh-Hant">使用條款</span><span data-lang="zh-Hans">使用条款</span></li>' +
        '<li><span data-lang="en">Risk Disclosure</span><span data-lang="zh-Hant">風險披露</span><span data-lang="zh-Hans">风险披露</span></li>' +
      '</ul>' +
    '</div>' +
  '</div>' +
  '<div class="footer-legal">' +
    '<p class="disc">' +
      '<span data-lang="en">Raising Development Limited is incorporated in Hong Kong SAR, China. The Company is pursuing an SFC licensing pathway (Type 4 and Type 9). This website is for informational purposes only and is not an offer, invitation, or solicitation to buy or sell any financial product in any jurisdiction. Products and services described are intended solely for qualified investors as defined under applicable law.</span>' +
      '<span data-lang="zh-Hant">潤信發展有限公司於中國香港特別行政區註冊成立，正積極推進香港證券及期貨事務監察委員會第 4 類及第 9 類受規管活動牌照申請。本網站僅作一般資訊參考，不構成任何要約、邀請或招募。所述產品及服務僅供適用法律所界定的合格投資者參考。</span>' +
      '<span data-lang="zh-Hans">润信发展有限公司于中国香港特别行政区注册成立，正积极推进香港证券及期货事务监察委员会第 4 类及第 9 类受监管活动牌照申请。本网站仅作一般信息参考，不构成任何要约、邀请或招揽。所述产品及服务仅供适用法律所界定的合格投资者参考。</span>' +
    '</p>' +
    '<div class="footer-bottom">' +
      '<span data-lang="en">© 2026 Raising Development Limited. All rights reserved.</span><span data-lang="zh-Hant">© 2026 潤信發展有限公司。保留所有權利。</span><span data-lang="zh-Hans">© 2026 润信发展有限公司。保留所有权利。</span>' +
      '<span><span data-lang="en">Hong Kong SAR, China</span><span data-lang="zh-Hant">中國香港特別行政區</span><span data-lang="zh-Hans">中国香港特别行政区</span></span>' +
    '</div>' +
  '</div>' +
'</div></footer>';
  var mount = document.querySelector("[data-footer]");
  if (mount) mount.outerHTML = html;
})();
