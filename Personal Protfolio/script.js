let animat = new Typed(".typing-2",{

    strings: ["Web Developer", "Frontend Developer","Java Developer"],
    
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
    })
    
    
    //GSAP START
    
    
    
    // var tl = gsap.timeline()
    
    // function time(){
    //     var a = 0
    //     setInterval(function(){
    //         a += Math.floor(Math.random()*20)
    //         if(a<100){
    //             document.querySelector("#loader h1").innerHTML = a+"%"
    //         }else{
    //             a = 100
    //             document.querySelector("#loader h1").innerHTML = a+"%"
    //         }
    //     },150)
    // }
    
    // tl.to("#loader h1",{
    //     delay:0.5,
    //     duration:1,
    //     onStart:time()
    // })
    // tl.to("#loader",{
    //     top:"-100vh",
    //     delay:0.4,
    //     duration:1.5
    // })
    
    // gsap.to("#page1 h1",{
    //     transform:"translateX(-100%)",
    //     fontWeight:"100",
    //     scrollTrigger:{
    //         trigger:"#page1",
    //         scroller:"body",
    //         // markers:true,
    //         start:"top 0",
    //         end:"top -200%",
    //         scrub:3,
    //         pin:true
    //     }
    // })



init = () => {
    gsap.set([body, footer], {y:'100%'});
};

home = () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[body]'),
        smooth: true, 
        lerp: 0.05,
    });
}
 
// window.onload = () => {
//     init();
//     home();
// }