$(function () {
  $('[data-toggle="popover"]').popover()
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(window).on('load, resize', function navUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
        $(".view").removeClass("view view-portfolio").addClass("gallery-mobile");
    }
});

function add_hp(n)
{
    var currHP = parseInt(document.getElementById("hp_display").innerHTML);
    var newHP = currHP + n;
    document.getElementById("hp_display").innerHTML = newHP;
}

function add_mp(n)
{
    var currMP = parseInt(document.getElementById("mp_display").innerHTML);
    var newMP = currMP + n;
    document.getElementById("mp_display").innerHTML = newMP;
}