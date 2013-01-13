Doshisha University Network Authentication
==========================================

Every few hours or so at Doshisha University (同志社大学), one has to retype their UserID/Password combination and login to the Doshisha network before being able to browse the internet. I got very tired typing those in, so I made a small userscript that enables the browser (e.g. Google Chrome) to do the autofill for me; simple but effective.

## Features ##

- Enables autocomplete for the login form.
- Redirects login result popup window to the current page.

## Installation Steps ##
Make sure that you have userscripts enabled in your browser.

1. Enable/install browser specific extensions:
    - For **Firefox**, install [GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).
    - For **IE**, install [Trixie](http://www.bhelpuri.net/Trixie/).
    - For **Opera**, follow instructions located on Opera's [User JavaScript](http://www.opera.com/docs/userjs/) site.
    - For **Safari**, install [NinjaKit](http://d.hatena.ne.jp/os0x/20100612/1276330696).
    - For **Chrome**:
        - Download the [`donet.user.js`](https://github.com/jsadeli/Doshisha-NetAuth-Script/raw/master/donet.user.js) userscript.
        - Open **chrome://extensions**.
        - Drag-and-drop the `donet.user.js` file on the **chrome://extensions** page.
        - That's all it takes, skip `STEP 2`.
2. Install this "Doshisha NetAuth" userscript by clicking here: [donet.user.js](https://github.com/jsadeli/Doshisha-NetAuth-Script/raw/master/donet.user.js).
