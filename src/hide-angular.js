// ==UserScript==
// @name         Angular google search
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add -angularjs flag to google searches containing 'angular' keyword
// @author       nelson
// @match        https://*.google.*/search*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
  "use strict";
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  const value = q.toLowerCase().split(" ");

  if (value.includes("angular") && !value.includes("-angularjs")) {
    params.set("q", q + " -angularjs");
    window.location.search = "?" + params.toString();
  }
})();
