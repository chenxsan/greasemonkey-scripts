// ==UserScript==
// @name        No likes on twitter mobile
// @author      chenxsan
// @namespace   com.zfanw.blog
// @include     https://mobile.twitter.com/home
// @version     1
// @grant       none
// ==/UserScript==
(function () {
  var root = document.getElementById('react-root')
  var observer = new window.MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === 'childList') {
        let likes = document.querySelectorAll('[role="article"] > div:first-of-type [style="display: inline-block; fill: currentcolor; height: 1.25em; max-width: 100%; position: relative; vertical-align: text-bottom;"] [d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"]')
        for (let i = 0; i < likes.length; ++i) {
          let article = likes[i].parentNode.parentNode.parentNode.parentNode.parentNode
          article.parentNode.removeChild(article)
        }
      }
    })
  })
  var config = { childList: true, subtree: true }
  observer.observe(root, config)
})()
