const photo = document.querySelectorAll(".item-wrap");

$("#mainNav a").bind('mouseover', function(){
    $("#mainNav a").removeClass("active");
    $(this).addClass("active");
});

$("#mainNav a").bind('mouseout', function(){
    $("#mainNav a").removeClass("active");
    if (window.location.href.includes("photos")){
        $(".phoBtn").addClass("active");
    }else if (window.location.href.includes("contact")){
        $(".conBtn").addClass("active");
    }else if (window.location.href.includes("index")){
        $(".homBtn").addClass("active");
    }
});

$(".item-wrap").bind('click', ()=>{
    console.log($(this).attr('class'));
    console.log('a');
});

$("#submit").bind('click',()=>{
    show_canvas();
    const name = $("input[name='name']").val();
    const email = $("input[name='email']").val();
    const subject = $("input[name='subject']").val();
    const message = $("input[name='message']").val();
    if (name!='' && email!='' && subject!=''&& message!=''){
        $("#alertbox > a").text("Your message is sent.")
    }else{
        $("#alertbox > a").text("Please provide extra info.")
    }
});

$("#backtocon").bind('click',()=>{
    hide_canvas();
});

AOS.init({
    duration: 1200,
  });

function show_canvas() {  
    const canvas = document.getElementById("canvas-wrap");
    canvas.style.display = "block";
}

function hide_canvas(){
    const canvas = document.getElementById("canvas-wrap");
    canvas.style.display = "none";
}