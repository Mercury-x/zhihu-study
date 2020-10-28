// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const AdblockBanner = document.getElementsByClassName('AdblockBanner')[0]
    AdblockBanner.style.display = 'none'
    const sideBar = document.getElementsByClassName('SearchSideBar')
    console.log(sideBar)
    if (sideBar.length) {
        sideBar[0].remove()
        const searchMain = document.getElementsByClassName('SearchMain')[0]
        searchMain.style.width = '1000px'
    } else {
        const GlobalSideBar = document.getElementsByClassName('GlobalSideBar')
        if (GlobalSideBar.length) {
            GlobalSideBar[0].style.display = 'none'
            document.getElementsByClassName('Topstory-mainColumn')[0].style.width = '100%'
        }
    }
    // Your code here...
})();