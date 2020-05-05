$(document).ready( function() {
	$(window).scroll(function() {
	
		var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = ((s / (d - c))*100).toFixed(2);
		
    // opacity value 0% to 100%
    $('.clear-img').css('opacity', scrollPercent);  
	});
});

$(function () {
    sticky();
    scrollS();
});

function sticky() {
    $(".header").sticky();
}


function scrollS() {
 $('.scroll-to, #navigation a').click(function (event) {
        event.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        $('body').scrollTo($('#' + trgt), 800, {offset: -49});
    });

}