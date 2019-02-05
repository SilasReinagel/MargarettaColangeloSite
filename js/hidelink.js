
$(document).ready(function() {
    bindOnClickHideToSeeMoreLinks($);
});


function bindOnClickHideToSeeMoreLinks($)
{
    $('.see-more-link').click(function () {
        console.log("On See More Link click.");
        $(this).hide();
    });
}
