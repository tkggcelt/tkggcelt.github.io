var imageList = [
    "/static/postimg/default/default-1.png",
    "/static/postimg/default/default-2.jpg",
    "/static/postimg/default/default-3.jpg",
    "/static/postimg/default/default-4.jpg",
    "/static/postimg/default/default-5.jpg",
    "/static/postimg/default/default-6.jpg",
    "/static/postimg/default/default-7.jpg",
    "/static/postimg/default/default-8.jpg",
    "/static/postimg/default/default-9.jpg",
    "/static/postimg/default/default-10.jpg",
    "/static/postimg/default/default-11.jpg",
    "/static/postimg/default/default-12.jpg",
    "/static/postimg/default/default-13.jpg",
    "/static/postimg/default/default-14.jpg",
    "/static/postimg/default/default-15.jpg"
];

function set_random_image_for_index_page() {
    $(".set-random-image").each(function() {
        var rand = Math.random();
        var num = Math.round(rand * imageList.length);
        $(this).attr("src", imageList[num]);
    });
    set_text_height_as_image();
}

function set_text_height_as_image() {
    $(".video-content-text").each(function() {
        var height = $(this).parent().parent().find(".video-area-content-detail").height();
        $(this).css("height", height);
        var dh = height - parseFloat($(this).css("padding-top"));
        dh = dh - parseFloat($(this).children("a").eq(0).height());
        dh = dh - parseFloat($(this).children("h4").eq(0).height());
        dh = dh - parseFloat($(this).children("h4").eq(0).css("margin-top"));
        dh = dh - parseFloat($(this).children("h4").eq(0).css("margin-bottom"));
        dh = dh - parseFloat($(this).children("span").eq(0).height());
        dh = dh - 60; //50 是下面readmore按钮高度
        dh = dh - parseFloat($(this).children("p").eq(0).css("margin-top"));
        dh = dh - parseFloat($(this).children("p").eq(0).css("margin-bottom"));
        $(this).children('p').eq(0).css("height", dh);
    });
}

function keep_height_the_same() {
    set_text_height_as_image();

    $(window).resize(function() {
        $(".video-content-text").each(function() {
            set_text_height_as_image();
        });
    });
}

function set_post_page_video_height() {
    var width = $("#post-page-video").width();
    var height = width * 9 / 16;
    $("#post-page-video").css("height", height);
}

jQuery(document).ready(function($) {

    $(".menu-area").sticky({
        topSpacing: 0
    });

    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 95,
    });

    //keep_height_the_same();
    //set_random_image_for_index_page();
    set_post_page_video_height();

});