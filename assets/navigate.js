let btnTop = document.getElementById("goTop");
window.onscroll = function () { scrollFn() };
function scrollFn() { if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) { btnTop.style.display = "block"; } else { btnTop.style.display = "none"; }}
