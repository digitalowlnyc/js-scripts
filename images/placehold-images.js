if(typeof $ !== "undefined") {
    $(document).ready(function() {
        $("img").each(function() {
            var src = $(this).attr("src");
            $.ajax({
                url: src,
                type:'HEAD',
                error: function() {
                    var domImage = $(this).get(0);
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