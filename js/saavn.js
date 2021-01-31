function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  (function getSaavn(d, t) {
    // Enter Playlist Numbers Here
    var playlist = ['https://www.jiosaavn.com/embed/playlist/49', 
                    'https://www.jiosaavn.com/embed/playlist/173255392', 
                    'https://www.jiosaavn.com/embed/playlist/85481065'];
    var index = getRandomInt(playlist.length);

    var s = d.createElement(t); var s1 = d.createElement(t);
    if (d.getElementById('jsw-init')) return; s.setAttribute('id', 'jsw-init'); s.setAttribute('src', 'https://www.jiosaavn.com/embed/_s/embed.js?ver=' + Date.now()); s.onload = function () { s1.appendChild(d.createTextNode('JioSaavnEmbedWidget.init({a:1,q:1,embed_src:"' + playlist[index] + '", partner_id: "neilblaze"});')); d.body.appendChild(s1); };
    if (document.readyState === 'complete') { d.body.appendChild(s); } else if (document.readyState === 'loading') { var interval = setInterval(function () { if (document.readyState === 'complete') { d.body.appendChild(s); clearInterval(interval); } }, 100); } else { window.onload = function () { d.body.appendChild(s); }; }
  })(document, 'script');
