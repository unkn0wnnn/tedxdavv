// window.onload = function() {
//         var svg = document.getElementById('my-svg');
        
//         if (window.innerWidth < 1000) {
//                 svg.setAttribute('viewBox', '0 0 280 700');
//         } else {
//                 svg.setAttribute('viewBox', '0 0 1200 800');
//         }
// };


const mqs = [
        window.matchMedia("(min-width: 1024px)"),
        window.matchMedia("(min-width: 768px)"),
        window.matchMedia("(max-width: 1000px)"),
];
      

if(!mqs.some((mq, i) => {
        if(mq.matches) {
          if(i === 0) {
            

                gsap.set('.main', {position:'fixed', background:'#fff', width:'100%',height: '7000px', top:0, left:'50%', x:'-50%'})
                gsap.set('.scrollDist', {width:'100%', height:'200%'})
                gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
                .fromTo('.sky', {y:0},{y:-200}, 0)
                .fromTo('.ted-draw', {y:-200},{y:-200}, 0)
                .fromTo('.davv-draw', {x:150,y:-200},{y:-200}, 0)
                .fromTo('.cloud1', {y:100},{y:-800}, 0)
                .fromTo('.cloud2', {y:-150},{y:-500}, 0)
                .fromTo('.cloud3', {y:-150},{y:-650}, 0)
                .fromTo('.ballon', {y:-150},{y:-650}, 0)
                .fromTo('.plane', {y:50,x:600},{y:650}, 0)
                .fromTo('.planet', {y:-450,x:150},{y:650}, 0)
                // .fromTo('.mountBg', {y:-10},{y:-100}, 0)
                // .fromTo('.mountMg', {y:-30},{y:-250}, 0)
                // .fromTo('.mountFg', {y:-50},{y:-600}, 0)
                .fromTo('.admin-building',{y:150,x:150},{y:-400}, 0)
                .fromTo('.alumnus',{x:-300,y:120,scale:2},{y:-400}, 0)
                .fromTo('.a-block',{x:320,y:0},{y:-750}, 0)
                .fromTo('.rnth-building',{x:-100,y:300},{y:-250}, 0)
                .fromTo('.com-building',{y:250,x:350},{y:-400}, 0)
                .fromTo('.rocket', {x:900,y:100},{y:-500}, 0)
                
                
                .fromTo('.night-left',{x:-1500,y:-70},{x:-400,delay:0.2},0)
                .fromTo('.day-right',{x:0,y:-70},{x:-670,delay:0.2},0)
                .fromTo('.sun',{x:1000,y:-450},{x:450,delay:0.5},0)
                .fromTo('.moon',{x:-1000,y:-680},{x:-485,delay:0.5},0) 
                .fromTo('.chimp',{x:-1000,y:500},{x:320,y:280,delay:0.5},0) 
                .fromTo('.choices',{x:1500,y:0},{x:-100,delay:0.5},0) 
                .fromTo('.voices',{x:-500,y:0},{x:1000,delay:0.5},0) 
                .fromTo('.hands',{x:1000,y:1000},{x:720,y:290,delay:0.5},0)

                .fromTo('.guy',{x:1000,y:1000},{x:480,y:380,delay:0.5},0)

                .fromTo('.rainbow',{x:360,y:450,scale:0},     {scale:1.5,x:-10,y:260,delay:1},0)

                .fromTo('.laser',{x:100,y:300,scale:0},
                        {scale:5,x:-230,y:-370,delay:1},0)
                
                .fromTo('.people',{x:-1000,y:500},           {x:0,y:310,delay:0.5},0)

                .fromTo('.butterfly-night',{x:1000,y:-450},
                        {x:200,y:230,delay:0.5},0)

                .fromTo('.butterfly-day',{x:-1000,y:-680},
                        {x:800,y:60,delay:0.5},0)
                
                .fromTo('.evolve',{x:0,y:1000},
                        {x:-200,y:-480,delay:0.5},0)


          } else if(i === 1) {
            console.log("768");
          } else if(i === 2) {
            console.log("mobile version");
                
            // Mobile Version
                gsap.set('.main', {position:'fixed', background:'#fff', width:'100%',height: '7000px', top:0, left:'50%', x:'-50%'})
                gsap.set('.scrollDist', {width:'100%', height:'200%'})
                gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
                
                .fromTo('.E', {x:-345,y:50},{x:-345,y:50}, 0)
                .fromTo('.V', {x:-360,y:50},{x:-360,y:50}, 0)
                .fromTo('.O', {x:-382,y:80,scale:0.7},{x:-382,y:80}, 0)
                .fromTo('.L', {x:-405,y:95,scale:0.7},{x:-405,y:95}, 0)
                .fromTo('.V2', {x:-415,y:112,scale:0.7},{x:-415,y:112}, 0)        
                .fromTo('.E2', {x:-460,y:127,scale:0.7},{x:-460,y:127}, 0)

                .fromTo('.sky', {y:0},{y:-200}, 0)
                .fromTo('.ted-draw', {x:-40,y:-330,scale:1.5},{x:-40,y:-330}, 0)
                .fromTo('.davv-draw', {x:50,y:-200},{y:-200}, 0)
                .fromTo('.cloud1', {y:100},{y:-800}, 0)
                .fromTo('.cloud2', {y:-150},{y:-500}, 0)
                .fromTo('.cloud3', {y:-150},{y:-650}, 0)
                .fromTo('.ballon', {y:-100},{y:-650}, 0)
                .fromTo('.plane', {y:100,x:100},{y:650}, 0)
                .fromTo('.planet', {y:-450,x:150},{y:650}, 0)
                // .fromTo('.mountBg', {y:-10},{y:-100}, 0)
                // .fromTo('.mountMg', {y:-30},{y:-250}, 0)
                // .fromTo('.mountFg', {y:-50},{y:-600}, 0)
                .fromTo('.admin-building',{y:400,x:-100,scale:0.5},{y:-400}, 0)
                .fromTo('.alumnus',{x:-420,y:325,scale:1.5},{y:-400}, 0)
                .fromTo('.a-block',{x:-40,y:350,scale:0.5},{y:-750}, 0)
                .fromTo('.rnth-building',{x:-300,y:350},{y:-250}, 0)
                .fromTo('.com-building',{y:250,x:350},{y:-400}, 0)
                .fromTo('.rocket', {x:900,y:100},{y:-500}, 0)

                

                .fromTo('.night-left',{x:-1500,y:-70},{x:-1050,delay:0.2},0)
                .fromTo('.day-right',{x:0,y:-70},{x:-1050,delay:0.2},0)
                .fromTo('.sun',{x:1000,y:-450},{x:450,delay:0.5},0)
                .fromTo('.moon',{x:-1000,y:-680},{x:-150,delay:0.5},0) 
                .fromTo('.chimp',{x:-1000,y:500},{x:100,y:270,delay:0.5},0) 
                .fromTo('.choices',{x:1500,y:0},{x:-140,delay:0.5},0) 
                .fromTo('.voices',{x:-500,y:0},{x:1000,delay:0.5},0) 
                .fromTo('.hands',{x:1000,y:1000},{x:720,y:290,delay:0.5},0)

                .fromTo('.guy',{x:1000,y:1000},{x:230,y:320,delay:0.5},0)

                .fromTo('.rainbow',{x:160,y:450,scale:0},     {scale:0.5,x:-10,y:400,delay:1},0)

                .fromTo('.laser',{x:100,y:300,scale:0},
                        {scale:5,x:-230,y:-370,delay:1},0)
                
                .fromTo('.people',{x:-1000,y:500},           {x:0,y:310,delay:0.5},0)

                .fromTo('.butterfly-night',{x:1000,y:-450},
                        {x:-100,y:230,delay:0.5},0)

                .fromTo('.butterfly-day',{x:-1000,y:-680},
                        {x:800,y:60,delay:0.5},0)
                
                .fromTo('.evolve',{x:0,y:400},
                        {x:00,y:0,delay:0.2},0)
          }
        }
}))


$('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
$('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
$('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)