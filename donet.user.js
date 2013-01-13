// ==UserScript==
// @name        Doshisha's Network Authentication AutoComplete
// @author      Jeffrey Sadeli
// @namespace   https://github.com/jsadeli/Doshisha-NetAuth-Script
// @description Enabled Auto fills for Doshisha's network authentication form
// @include     https://do-net.doshisha.ac.jp:10443/
// @include     https://do-netmac.doshisha.ac.jp:10443/auth.html
// @version     2.0-20130113
// ==/UserScript==

function initialize() {
    document.forms[0].setAttribute('target', '_parent');
    document.forms[0].setAttribute('autocomplete', 'on');
}

initialize();
