// var audio = document.getElementById(".audio1");
// audio.play();



let line1=document.querySelector(".line1");

line1.addEventListener("mouseenter",function(){
    line1.style.transform="translatex(10%)"
    line1.style.transition="0.5s"
});

line1.addEventListener("mouseleave",function(){
    line1.style.transform="translatex(0%)"
    line1.style.transition="0.5s"
    audio.off();
});

// 
let line2=document.querySelector(".line2");

line2.addEventListener("mouseenter",function(){
    line2.style.transform="translatex(10%)"
    line2.style.transition="0.5s"
});

line2.addEventListener("mouseleave",function(){
    line2.style.transform="translatex(0%)"
    line2.style.transition="0.5s"
});
// 

let line3=document.querySelector(".line3");

line3.addEventListener("mouseenter",function(){
    line3.style.transform="translatex(10%)"
    line3.style.transition="0.5s"
});

line3.addEventListener("mouseleave",function(){
    line3.style.transform="translatex(0%)"
    line3.style.transition="0.5s"
});
// 
let line4=document.querySelector(".line4");

line4.addEventListener("mouseenter",function(){
    line4.style.transform="translatex(10%)"
    line4.style.transition="0.5s"
});

line4.addEventListener("mouseleave",function(){
    line4.style.transform="translatex(0%)"
    line4.style.transition="0.5s"
});

// 
let line5=document.querySelector(".line5");

line5.addEventListener("mouseenter",function(){
    line5.style.transform="translatex(10%)"
    line5.style.transition="0.5s"
});

line5.addEventListener("mouseleave",function(){
    line5.style.transform="translatex(0%)"
    line5.style.transition="0.5s"
});


// page2

let one11 =document.querySelector(".one11");
let line11=document.querySelector(".line11");

one11.addEventListener("mouseenter",function(){
    one11.style.transform="translatex(10%)"
    line11.style.backgroundColor="#91C3CE"
    line11.style.transition="0.5s"
    one11.style.transition="0.5s"
});

one11.addEventListener("mouseleave",function(){
    one11.style.transform="translatex(0%)"
    line11.style.backgroundColor="transparent"
    line11.style.transition="0.5s"
    one11.style.transition="0.5s"
});

// 
let one12 =document.querySelector(".one12");
let line12=document.querySelector(".line12");

one12.addEventListener("mouseenter",function(){
    one12.style.transform="translatex(10%)"
    line12.style.backgroundColor="#91C3CE"
    line12.style.transition="0.5s"
    one12.style.transition="0.5s"
});

one12.addEventListener("mouseleave",function(){
    one12.style.transform="translatex(0%)"
    line12.style.backgroundColor="transparent"
    line12.style.transition="0.5s"
    one12.style.transition="0.5s"
});
// 
let one13 =document.querySelector(".one13");
let line13=document.querySelector(".line13");

one13.addEventListener("mouseenter",function(){
    one13.style.transform="translatex(10%)"
    line13.style.backgroundColor="#91C3CE"
    line13.style.transition="0.5s"
    one13.style.transition="0.5s"
});

one13.addEventListener("mouseleave",function(){
    one13.style.transform="translatex(0%)"
    line13.style.backgroundColor="transparent"
    line13.style.transition="0.5s"
    one13.style.transition="0.5s"
});

// 
let one14 =document.querySelector(".one14");
let line14=document.querySelector(".line14");

one14.addEventListener("mouseenter",function(){
    one14.style.transform="translatex(10%)"
    line14.style.backgroundColor="#91C3CE"
    line14.style.transition="0.5s"
    one14.style.transition="0.5s"
});

one14.addEventListener("mouseleave",function(){
    one14.style.transform="translatex(0%)"
    line14.style.backgroundColor="transparent"
    line14.style.transition="0.5s"
    one14.style.transition="0.5s"
});

// 
let one15 =document.querySelector(".one15");
let line15=document.querySelector(".line15");

one15.addEventListener("mouseenter",function(){
    one15.style.transform="translatex(10%)"
    line15.style.backgroundColor="#91C3CE"
    line15.style.transition="0.5s"
    one15.style.transition="0.5s"
});

one15.addEventListener("mouseleave",function(){
    one15.style.transform="translatex(0%)"
    line15.style.backgroundColor="transparent"
    line15.style.transition="0.5s"
    one15.style.transition="0.5s"
});

// 
let one16 =document.querySelector(".one16");
let line16=document.querySelector(".line16");

one16.addEventListener("mouseenter",function(){
    one16.style.transform="translatex(10%)"
    line16.style.backgroundColor="#91C3CE"
    line16.style.transition="0.5s"
    one16.style.transition="0.5s"
});

one16.addEventListener("mouseleave",function(){
    one16.style.transform="translatex(0%)"
    line16.style.backgroundColor="transparent"
    line16.style.transition="0.5s"
    one16.style.transition="0.5s"
});

let one17 =document.querySelector(".one17");
let line17=document.querySelector(".line17");

one17.addEventListener("mouseenter",function(){
    one17.style.transform="translatex(10%)"
    line17.style.backgroundColor="#91C3CE"
    line17.style.transition="0.5s"
    one17.style.transition="0.5s"
});

one17.addEventListener("mouseleave",function(){
    one17.style.transform="translatex(0%)"
    line17.style.backgroundColor="transparent"
    line17.style.transition="0.5s"
    one17.style.transition="0.5s"
});


// ----------------
/*---------------page1_bottom_left-------------*/

let page1_bottom_left = document.querySelector("#page1_bottom_left");
let shape_cercle = document.querySelector("#shape_cercle");
let shape_square = document.querySelector("#shape_square");
let shape_triangle = document.querySelector("#shape_triangle");

// -------mouseenter--color-----
page1_bottom_left.addEventListener("mouseenter", function () {
  shape_cercle.style.backgroundColor = "#FFAEDC";
});
page1_bottom_left.addEventListener("mouseleave", function () {
  shape_cercle.style.backgroundColor = "#A5A1FF";
});

// -------mouseenter--color-----
page1_bottom_left.addEventListener("mouseenter", function () {
  shape_square.style.backgroundColor = "#FFFFFF";
});
page1_bottom_left.addEventListener("mouseleave", function () {
  shape_square.style.backgroundColor = "#A5A1FF";
});

// -------mouseenter--color-----
page1_bottom_left.addEventListener("mouseenter", function () {
  shape_triangle.style.borderBottomColor = "#FFF480";
});
page1_bottom_left.addEventListener("mouseleave", function () {
  shape_triangle.style.Color = "#FFFFFF";
  shape_triangle.style.borderBottomColor = "#A5A1FF";
});

// ---box--scale----
// -------mouseenter--scale-----
let page1_bottom_left_shape = document.querySelector(
  "#page1_bottom_left_shape"
);
let show_text_infinite = document.querySelector("#show_text_infinite");

page1_bottom_left.addEventListener("mouseenter", function () {
  page1_bottom_left.style.scale = "0.98";
  page1_bottom_left.style.transition = "0.5s";

  show_text_infinite.style.opacity = "0";
  show_text_infinite.style.transition = "0.3s";

  page1_bottom_left_shape.style.scale = "0.7";
  page1_bottom_left_shape.style.transition = "0.5s";
});
page1_bottom_left.addEventListener("mouseleave", function () {
  page1_bottom_left.style.scale = "1";
  page1_bottom_left.style.transition = "0.5s";
  show_text_infinite.style.opacity = "1";

  page1_bottom_left_shape.style.scale = "1";
  page1_bottom_left_shape.style.transition = "0.5s";
});


// --------------------------page6-------------------------------------------

let box40 = document.querySelector(".box40");
let box40_h1 = document.querySelector(".box40>h1");

box40.addEventListener("mouseenter", function () {
    box40.style.backgroundColor="#0D0D0D"
    box40.style.transition="0.3s"
    box40_h1.style.color="rgb(162, 0, 255)"
    box40_h1.style.transition="0.2s"

});
box40.addEventListener("mouseleave", function () {
    box40.style.backgroundColor="#EEEBF2"
    box40.style.transition="0.3s"
    box40_h1.style.color="#494836"
    box40_h1.style.transition="0.2s"

});


let box41 = document.querySelector(".box41");
let box41_h1 = document.querySelector(".box41>h1");

box41.addEventListener("mouseenter", function () {
    box41.style.backgroundColor="#0D0D0D"
    box41.style.transition="0.3s"
    box41_h1.style.color="rgb(162, 0, 255)"
    box41_h1.style.transition="0.2s"

});
box41.addEventListener("mouseleave", function () {
    box41.style.backgroundColor="#EEEBF2"
    box41.style.transition="0.3s"
    box41_h1.style.color="#494836"
    box41_h1.style.transition="0.2s"

});


let box42 = document.querySelector(".box42");
let box42_h1 = document.querySelector(".box42>h1");

box42.addEventListener("mouseenter", function () {
    box42.style.backgroundColor="#0D0D0D"
    box42.style.transition="0.3s"
    box42_h1.style.color="rgb(162, 0, 255)"
    box42_h1.style.transition="0.2s"

});
box42.addEventListener("mouseleave", function () {
    box42.style.backgroundColor="#EEEBF2"
    box42.style.transition="0.3s"
    box42_h1.style.color="#494836"
    box42_h1.style.transition="0.2s"

});


let box43 = document.querySelector(".box43");
let box43_h1 = document.querySelector(".box43>h1");

box43.addEventListener("mouseenter", function () {
    box43.style.backgroundColor="#0D0D0D"
    box43.style.transition="0.3s"
    box43_h1.style.color="rgb(162, 0, 255)"
    box43_h1.style.transition="0.2s"

});
box43.addEventListener("mouseleave", function () {
    box43.style.backgroundColor="#EEEBF2"
    box43.style.transition="0.3s"
    box43_h1.style.color="#494836"
    box43_h1.style.transition="0.2s"

});


let box44 = document.querySelector(".box44");
let box44_h1 = document.querySelector(".box44>h1");

box44.addEventListener("mouseenter", function () {
    box44.style.backgroundColor="#0D0D0D"
    box44.style.transition="0.3s"
    box44_h1.style.color="rgb(162, 0, 255)"
    box44_h1.style.transition="0.2s"

});
box44.addEventListener("mouseleave", function () {
    box44.style.backgroundColor="#EEEBF2"
    box44.style.transition="0.3s"
    box44_h1.style.color="#494836"
    box44_h1.style.transition="0.2s"

});


// ----------------------------
let t1=gsap.timeline();

t1.from(".line1",{
    x:700,
    duration:1.2,
    delay:-0.1,
    ease: Expo.liner
})
t1.from(".line2",{
    x:700,
    duration:1,
    delay:-0.2,
    ease: Expo.liner
})
t1.from(".line3",{
    x:700,
    duration:1,
    delay:-0.4,
    ease: Expo.liner
})
t1.from(".line4",{
    x:700,
    duration:1,
    delay:-0.6,
    ease: Expo.liner
})
t1.from(".line5",{
    x:700,
    duration:1,
    delay:-0.8,
    ease: Expo.liner
})

gsap.from("#page1_text2",{
    scrollTrigger:{
        trigger:"#page1_text2",
        scroller:"#main",
        duration:2,
        // markers:true,
        start:"top 95%",
    },
    onStart:function(){
        $('#page1_text2').textillate({ in: { effect: 'fadeInUp' } });
    } ,
    
  })

