$(function(){
    $("a").click(function(){
        $("body")
        .append('<div id="bg">')
        .append('<div id="photo">');

        $("#bg,#photo").hide();

        $("#photo").html("<img>");

        $("#photo img")
        .attr("src",$(this).attr("href"))
        .attr("alt","Photo");

        $("#bg,#photo").fadeIn();

        $("#bg").click(function(){
            $(this).fadeOut(function(){
                $(this).remove();
            });
        });

        $("#photo").fadeOut(function(){
                $(this).remove();
        });

        return false;
    });
});