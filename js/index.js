///////////////////////////////////
//Function Definitions
///////////////////////////////////
var TRAILER_SOURCE =  $(".trailer-iframe")[0].src;
//This is a function to hide the dialog
hideDialog = function(){


    $(".dialog-box").animate({opacity: "0"}, 500, function() {
        $(".dialog-box").hide();
        $('.trailer-iframe').each(function(){
            var el_src = $(this).attr("src");
            $(this).attr("src",el_src);
        });
        $(".dialog").animate({opacity: "0"}, 500, function() {
            $(".dialog").hide();
            $(".trailer-iframe")[0].src = TRAILER_SOURCE + "&autoplay=0";
        })
    });
}

//This is a function to show the dialog
showDialog = function(message, header){
    $(".trailer-iframe")[0].src = TRAILER_SOURCE + "&autoplay=1";
    //Show the black background
    $(".dialog").css("opacity", "0");
    $(".dialog").show();
    //Animate the black background in
    $(".dialog").animate({opacity: "1"}, 500, function(){
        //Then do the same for the box
        $(".dialog-box").css("opacity", "0");
        $(".dialog-box").show();
        $(".dialog-box").animate({opacity: "1"}, 500)
    })

  //Set the header text of the dialog
  $(".dialog-header-text").text(header);
  //Set the content of the dialog
  $(".dialog-text").text(message);

  
}

////////////////////////////////////////////
//Event Handlers
////////////////////////////////////////////

//When someone clicks the show-dialog-button it shows the dialog 
$("#play-button").click(function() {
     showDialog();
 });

//What happens when someone hits the something button???
$(".something-button").click(function() {
    //$('.top-section').css( "background-color", "pink");  //Make the top section pink?
    //$('.dialog-text').text("Woop Woop I changed it!");   //Change the dialog text?
});

//When someone clicks the confirm-button it hide the dialog
$(".close-button").click(function() {
    hideDialog();
});

////////////////////////////////////////////
//This code executes when the page loads
///////////////////////////////////////////
$( document ).ready(function() {
  
    $(".dialog").hide();
    $("#logo").css("opacity", "1");

    setTimeout(function(){
        $("#play-button").css("opacity", ".5");
    }, "1000")

    YOUTUBE_VIDEO_MARGIN=0;
    if(typeof YOUTUBE_VIDEO_MARGIN == 'undefined') {
        YOUTUBE_VIDEO_MARGIN=0;
    }
    $('iframe').each(function(index,item) {
        if($(item).attr('src').match(/(https?:)?\/\/www\.youtube\.com/)) {
            var w=$(item).attr('width');
            var h=$(item).attr('height');
            var ar = h/w*100;
            ar=ar.toFixed(2);
            //Style iframe
            $(item).css('position','absolute');
            $(item).css('top','0');
            $(item).css('left','0');
            $(item).css('width','100%');
            $(item).css('height','100%');
            $(item).css('max-width',w+'px');
            $(item).css('max-height', h+'px');
            $(item).wrap('<div style="max-width:'+w+'px;margin:0 auto; padding:'+YOUTUBE_VIDEO_MARGIN+'px;" />');
            $(item).wrap('<div style="position: relative;padding-bottom: '+ar+'%; height: 0; overflow: hidden;" />');
        }
    });

});