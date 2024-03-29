// ==UserScript==
// @name         BingNoAds
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Get rid of ads in Bing search
// @author       You
// @match        https://www.bing.com/search*
// @icon         https://www.google.com/s2/favicons?domain=bing.com
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    setTimeout(() => { }, 500);
    var adsTop = document.getElementsByClassName("b_ad b_adTop");
    for (let i = adsTop.length - 1; i > -1; i--) {
        setTimeout(() => { delEach(adsTop[i]); }, 500);
    }
    var adsBtm = document.getElementsByClassName("b_ad b_adBottom");
    for (let i = adsBtm.length - 1; i > -1; i--) {
        setTimeout(() => { delEach(adsBtm[i]); }, 500);
    }
    //for (let i = 0; i < ads.length; i++) {
     //   alert(ads[i].innerHTML);
      //  setTimeout(() => { delEach(ads[i]); }, 500);
    //}

    function delEach(tag_) {
        var adPar = tag_.parentElement;
        adPar.removeChild(tag_);
        //alert(1);
    }
})();