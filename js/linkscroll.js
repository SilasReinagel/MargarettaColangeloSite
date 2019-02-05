var top_menu_height = 140;

jQuery(function($) {
    $(document).ready( function() {
        bindScrollButtonScrolling($);
    });
});

function bindScrollButtonScrolling($)
{
    $('.link-scroll').click(function (e) {
        e.preventDefault();
        var linkId = $(this).attr('href');
        scrollTo(linkId);
        if ($('.navbar-toggle').is(":visible") == true) {
            $('.navbar-collapse').collapse('toggle');
        }
        $(this).blur();
        return false;
    });
}

function scrollTo(selectors)
{
    if(!$(selectors).size())
        return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');
    $(this).blur();
}
