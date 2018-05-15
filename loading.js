$(document).ready(function(){
    $(".loading").html(
        "<div class='loading-flex'>" +
            "<div class='loading-content'>" +
                "<span class='load-infos'></span>" +
                "<span class='load-img'></span>" +
            "</div>" +
        "</div>"
    );


    $(".loading-redirect").click(function(e){
        $(".load-infos").html('Redirection en cours');
        setTimeout(function(){ $(".loading").show("fade"); }, 300);
    });
    

    $(".loading-insert-data").submit(function(e){
        $(".load-infos").html('Envoie des données');
        $(".loading").show("fade");
    });
    $(".loading-insert-data").click(function(e){
        $(".load-infos").html('Envoie des données');
        $(".loading").show("fade");
    });
});