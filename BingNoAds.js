// ==UserScript==
// @name         RuEnSwitchForWikipedia
// @version      0.3
// @description  Fixated Russian/English buttons to change /bw langs
// @author       arnak-soft
// @match        *.wikipedia.org/wiki/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // PREPARE

    var elmClass = "interlanguage-link-target";
    var parClassRu = "interwiki-ru";
    var parClassEn = "interwiki-en";
    // var parClassRu = "interlanguage-link interwiki-ru";
    // var parClassEn = "interlanguage-link interwiki-en";
    // var parClassRu = "interlanguage-link interwiki-ru mw-list-item";
    // var parClassEn = "interlanguage-link interwiki-en mw-list-item";
    var ElmRu;
    var ElmEn;
    var langRU = "RUSSIAN";
    var langEN = "ENGLISH";
    var windOpenPlace = "_self";
    var bZIndex = "500";

    var elms = document.getElementsByClassName(elmClass);
    function findLangLink(parClass) {
        for (var i = 0; i < elms.length; i++) {
            // if (elms.item(i).parentElement.className == parClass) {
            if (elms.item(i).parentElement.classList.contains(parClass)) {
                //Elm = elms.item(i);
                return elms.item(i);
            }
        }
    }
    function addB(parClass, val, left_, href_, parent_) {
            var b = document.createElement("input");
            b.setAttribute("type", "button");
            b.setAttribute("value", val);
            b.style.position = "fixed";
            b.style.top = "10px";
            b.style.left = left_;
            b.style.zIndex = bZIndex;
            b.onclick = function() { window.open(href_, windOpenPlace) };
            parent_.appendChild(b);
    }
    // ACTION
    ElmRu = findLangLink(parClassRu);
    ElmEn = findLangLink(parClassEn);
    if( typeof ElmRu !== 'undefined' ) addB(parClassRu, langRU, "10px", ElmRu.href, document.body);
    findLangLink(parClassEn);
    if( typeof ElmEn !== 'undefined' ) addB(parClassEn, langEN, "100px", ElmEn.href, document.body);
})();