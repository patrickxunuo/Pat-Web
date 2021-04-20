const showroomIndex = parseInt(window.location.href.substr(36));
const docHeight = $(document).height();
const winHeight = window.innerHeight;
console.log(showroomIndex);
$("#image-on").attr('src',`/images/image${showroomIndex}.jpg`);

$("#operation-btn-back").bind("click",()=>{
    window.location.href = "photos.html";
});

$("#operation-btn-prev").bind("click",()=>{
    if (showroomIndex == 1){
        window.location.href = `showroom.html#${9}`;
    }else{
        window.location.href = `showroom.html#${showroomIndex-1}`;
    }
    location.reload();
});

$("#operation-btn-next").bind("click",()=>{
    if (showroomIndex == 9){
        window.location.href = `showroom.html#${1}`;
    }else{
        window.location.href = `showroom.html#${showroomIndex+1}`;
    }
    location.reload();
});


