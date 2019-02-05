
$( document ).ready(function() {
    scaleVideoContainer();
});

function scaleVideoContainer() {
    var height = $(window).height() - 150;
    var unitHeight = parseInt(height) + 'px';
    var videoContainer = $('.hero-video');

    videoContainer.attr('style', 'min-height:' + unitHeight +  ' !important; ' +
        'height:' + unitHeight + '!important ' +
        'max-height:' + unitHeight + ' !important;');
}
