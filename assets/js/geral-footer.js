var buscaCX = document.getElementById("main-searchbox");
buscaCX.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        var termo = document.getElementById("main-searchbox").value;
        //console.log(termo)
        window.location.href = "/?s=" + termo;
    }
});

/* Olha esse site depois: https://stackoverflow.com/questions/49131980/how-do-i-disable-or-hide-the-unwanted-disqus-ads-on-my-website */
jQuery(document).ready(function ($) {

    const disqus = $('#disqus_thread');

    disqus.ready(function () {
        setTimeout(function () {
            if (disqus.children().length >= 3) {
                const comments = disqus.find('iframe:nth-child(2)').detach();
                disqus.empty().append(comments);
            }
        }, 2000);
    });

});