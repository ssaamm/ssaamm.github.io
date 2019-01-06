function onGetLinkClicked(event) {
    var direct = document.getElementById('direct');
    var feedly = document.getElementById('feedly');
    var sub = document.getElementById('sub').value;
    var rss_link = 'http://reddit.project.samueltaylor.org/sub/' + sub;

    direct.href = rss_link;
    feedly.href = 'https://feedly.com/i/subscription/feed' + encodeURIComponent('/' + rss_link);
}
