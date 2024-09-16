var tl = gsap.timeline();
tl.from(".mysec1", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.5
})
tl.from(".section1SM", {
    x: 100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger: ".section1SM",
        scroller: "body",
       
        start: "top 60%",
    }
})
tl.from(".section1LG", {
    x: -100,
    opacity: 0,
    duration: 0.6,
    scrollTrigger:{
        trigger: ".section1SM",
        scroller: "body",
       
        start: "top 60%",
    }
})
tl.from(".image1", {
    y: 200,
    opacity: 0,
    duration: 0.5,
    scale: 2
})
tl.from(".section2SM", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger: ".section1SM",
        scroller: "body",
       
        start: "top 60%",
    }
})
tl.from(".section2LG", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    scrollTrigger:{
        trigger: ".section1SM",
        scroller: "body",
       
        start: "top 60%",
    }
})
tl.from(".fields .row1 input", {
    x: 100,
    opacity: 0,
    duration: 0.4,
    stagger: 0.15,
})
tl.from(".fields .row2 input", {
    x: 100,
    opacity: 0,
    duration: 0.4,
    stagger: 0.15,
})
tl.from(".fields .row3 input", {
    x: 100,
    opacity: 0,
    duration: 0.4,
    stagger: 0.15,
})
tl.from("#sideburger", {
    scale: 3,
    duration: 0.6,
    opacity: 0
})
tl.from("#sidebottle", {
    scale: 3,
    duration: 0.6,
    opacity: 0
})
tl.from("#side", {
    x: -400,
    scale: 1.2,
    duration: 0.8,
    rotate: 360,
    opacity: 0
})
tl.from("footer", {
    opacity: 0,
    y: 100,
    duration: 0.5,
    stagger: 0.15,
    scrollTrigger:{
        trigger: "footer",
        scroller: "body",
        start: "top 50%",
    }
})
tl.from(".icons", {
    x: -100,
    duration: 0.5,
    stagger: 0.15,
    opacity: 0,
    scale: 1.5
})