const photo = document.querySelectorAll(".item-wrap");

let slider = 1;

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


$("#backtocon").bind('click',()=>{
    hide_canvas();
});

$("#slide1").bind('click',()=>{
    if (slider == 2){
        $("#slide2").removeClass("active");
        $("#slide1").addClass("active");
        $("#homepage-2").css("position","absolute");
        $("#homepage-2").css("left","100%");
        $("#homepage-1").css("position","relative");
        $("#homepage-1").css("left","0%");
        $("#homepage-3").css("left","200%");
    }else if(slider == 3){
        $("#slide3").removeClass("active");
        $("#slide1").addClass("active");
        $("#homepage-3").css("position","absolute");
        $("#homepage-3").css("left","200%");
        $("#homepage-1").css("position","relative");
        $("#homepage-1").css("left","0%");
        $("#homepage-2").css("left","100%");
    }
    slider = 1;
});

$("#slide2").bind('click',()=>{
    if (slider == 1){
        $("#slide1").removeClass("active");
        $("#slide2").addClass("active");
        $("#homepage-1").css("position","absolute");
        $("#homepage-1").css("left","-100%");
        $("#homepage-2").css("position","relative");
        $("#homepage-2").css("left","0%");
        $("#homepage-3").css("left","100%");
    }else if(slider == 3){
        $("#slide3").removeClass("active");
        $("#slide2").addClass("active");
        $("#homepage-3").css("position","absolute");
        $("#homepage-3").css("left","100%");
        $("#homepage-2").css("position","relative");
        $("#homepage-2").css("left","0%");
        $("#homepage-1").css("left","-100%");
    }
    slider = 2;
});

$("#slide3").bind('click',()=>{
    if (slider == 1){
        $("#slide1").removeClass("active");
        $("#slide3").addClass("active");
        $("#homepage-1").css("position","absolute");
        $("#homepage-1").css("left","-200%");
        $("#homepage-3").css("position","relative");
        $("#homepage-3").css("left","0%");
        $("#homepage-2").css("left","-100%");
    }else if(slider == 2){
        $("#slide2").removeClass("active");
        $("#slide3").addClass("active");
        $("#homepage-2").css("position","absolute");
        $("#homepage-2").css("left","-100%");
        $("#homepage-3").css("position","relative");
        $("#homepage-3").css("left","0%");
        $("#homepage-1").css("left","-200%");
    }
    slider = 3;
});

$("#submit").bind('click',()=>{
    show_canvas();
    const name = $("input[name='name']").val();
    const email = $("input[name='email']").val();
    const subject = $("input[name='subject']").val();
    const message = $("textarea[name='message']").val();
    if (name=='' || email=='' || subject=='' || message==''){
        $("#alertbox > a").text("Please provide extra info.");
    }else{
        sendEmail(name,email,subject,message);
        $("#alertbox > a").text("Message Sent!");
        $("input[name='name']").val('');
        $("input[name='email']").val('');
        $("input[name='subject']").val('');
        $("textarea[name='message']").val('');
    }
});

$("#photo-1").click(function() {
    var value = $(this).data("value");
    // do other stuff.
});

$("#tosignin").bind('click',()=>{
    window.location.href = "login.html";
});

$("#login-btn").bind('click',()=>{
    login();
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

function sendEmail(name,email,subject,message){
    $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/ajax/patrickxunuo@hotmail.com',
        dataType: 'json',
        data: {
            subject: subject,
            name: name,
            email: email,
            message: message
        },
        success: (data) => console.log(data),
        error: (err) => console.log(err)
    });
}

function login(){
    let username = $("#input-username").val();
    let password = $("#input-password").val();
    window.location.href = "index.html";
}