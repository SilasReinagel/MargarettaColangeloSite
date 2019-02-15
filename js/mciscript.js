var top_menu_height = 140;

jQuery(function($) {
    $(document).ready( function() {
        bindScrollButtonScrolling($);
        bindOnClickHideToSeeMoreLinks($);
    });
});

function bindOnClickHideToSeeMoreLinks($)
{
    $('.see-more-link').click(function () {
        console.log("On See More Link click.");
        $(this).hide();
    });
}
