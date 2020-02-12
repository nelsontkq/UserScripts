// ==UserScript==
// @name         Angular google search
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add -angularjs flag to google searches containing 'angular' keyword
// @author       nelson
// @match        https://*.google.com/search*
// @grant        none
// ==/UserScript==

(function() {
  "use strict";
  let form = document.querySelector("#tsf");
  var query = form.elements.q;
  let value = query.value.toLowerCase().split(" ");

  if (value.includes("angular") && !value.includes("-angularjs")) {
    console.log("added to query. resubmitting.");
    query.value = query.value + " -angularjs";
    form.submit();
  }
})();
