var e=new Promise(function(e,n){var t=setTimeout(function(){n(Error("First promise was rejected"))},3e3);document.addEventListener("mousedown",function(n){0===n.button&&(clearTimeout(t),e("First promise was resolved"))})}),n=new Promise(function(e){document.addEventListener("mousedown",function(n){(0===n.button||2===n.button)&&e("Second promise was resolved")})}),t=new Promise(function(e){var n=!1,t=!1;document.addEventListener("mousedown",function(o){0===o.button&&(n=!0),2===o.button&&(t=!0),n&&t&&e("Third promise was resolved")})});function o(e,n){var t=document.createElement("div");t.setAttribute("data-qa","notification"),n?t.classList.add("error"):t.classList.add("success"),t.innerText=e,document.body.append(t)}e.then(function(e){o(e)}).catch(function(e){o(e,!0)}),n.then(function(e){o(e)}),t.then(function(e){o(e)});
//# sourceMappingURL=index.8a7fd583.js.map
