if(typeof jQuery !== "undefined") {
    jQuery(document).ready(function() {
        jQuery("img").each(function() {
            var src = $(this).attr("src");
            jQuery.ajax({
                url: src,
                type:'HEAD',
                error: function() {
                    var domImage = jQuery(this).get(0);
                    console.log("Loading placeholder for ", src);
                    var placeHolder =  "http://placehold.it/";
                    placeHolder += domImage.clientWidth + "x" + domImage.clientHeight;
                    $(this).attr("src", placeHolder);
                }.bind(this)
            })
        });
    });
} else {
    throw "This script requires jQuery";
}