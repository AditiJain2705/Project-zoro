gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var tl = gsap.timeline();
tl
.from(".grammer",{
    y:50,
    opacity:0,
    duration:1,
    delay:0.5,
    
})
.from("#btn",{
  y:20,
  opacity:0,
  duration:0.5,
  delay:0.1,
  
})





gsap.to(".slides",{
    x:-1550,
    // delay:2,
    duration:10,
    ease:"linear",
    repeat:-1
}) 
gsap.to(".logo1",{
  x:-100,
  delay:2,
  duration:10,
  ease:"linear",
  repeat:-1
}) 
gsap.to(".logo2",{
  x:100,
  delay:2,
  duration:10,
  ease:"linear",
  repeat:-1
}) 
gsap.to(".logo3",{
  x:-100,
  delay:2,
  duration:10,
  ease:"linear",
  repeat:-1
}) 
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".skip", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
 
  gsap.from(".page-title",{
    y:-500,
    opacity:0,
    scrollTrigger:{
        scroller:".main",
        trigger:".page3",
        // markers:true,
        start:"top 60%"
       
    }
  })
  
  gsap.from(".div1",{
    x:500,
    opacity:0,
    
    scrollTrigger:{
      scroller:".main",
      trigger:".page3",
      // markers:true,
      start:"top 60%"
      // end:"top 10%"
  }
  })
  gsap.from(".div2",{
    x:-500,
    opacity:0,
    
    scrollTrigger:{
      scroller:".main",
      trigger:".div1",
      // markers:true,
      start:"top 60%"
      // end:"top 10%"
  }
  })
  
  
  gsap.from(".service",{
    x:-1000,
    opacity:0,
    
    scrollTrigger:{
      scroller:".main",
      trigger:".page4",
      // markers:true,
      start:"top 50%"
      // end:"top 10%"
  }
  }) 
  gsap.from(".pagevi>h1",{
    x:-50,
    opacity:0,
    scrollTrigger:{
      scroller:".main",
      trigger:".pagevi",
      start:"top 60%",
      // markers:true,
    }
  })   
  gsap.from(".pagevi>button",{
    x:50,
    opacity:0,
    scrollTrigger:{
      scroller:".main",
      trigger:".pagevi",
      start:"top 60%",
      // markers:true,
    }
  })
  gsap.from(".btn1",{
    y:-1000,
    opacity:0,
    scrollTrigger:{
      scroller:".main",
      trigger:".sticky",
      start:"top 60%",
      
    }
  })
  gsap.from(".btn2",{
    y:-1000,
    opacity:0,
    scrollTrigger:{
      scroller:".main",
      trigger:".sticky2",
      start:"top 60%",
      // markers:true
    }
  })
  gsap.from(".btn3",{
    y:-1000,
    opacity:0,
    scrollTrigger:{
      scroller:".main",
      trigger:".stickythird",
      start:"top 60%",
      
    }
  })
  gsap.from(".btn4",{
    y:-1000,
    opacity:0,
    scrollTrigger:{
      scroller:".main",
      trigger:".stickyfourth",
      start:"top 60%",
      
    }
  })
  gsap.from(".five1>h1",{
    x:50,
    opacity:0,
    scrollTrigger:{
      scroller:".main",
      trigger:".page5",
      start:"top 60%",
      
    }
  })
  gsap.from(".webdesign>h1",{
    x:50,
    opacity:0,
    scrollTrigger:{
      scroller:".main",
      trigger:".five1",
      start:"top 60%",
      
    }
  })
  gsap.from(".five2>h1",{
    x:50,
    opacity:0,
    scrollTrigger:{
      scroller:".main",
      trigger:".page5",
      start:"top 60%",
      
    }
  })
  gsap.from(".webdevelopment>h1",{
    x:50,
    opacity:0,
    scrollTrigger:{
      scroller:".main",
      trigger:".five2",
      start:"top 60%",
      
    }
  })
  gsap.from(".five3>h1",{
    x:50,
    opacity:0,
    scrollTrigger:{
      scroller:".main",
      trigger:".page5",
      start:"top 60%",
      
    }
  })
  gsap.from(".seo>h1",{
    x:50,
    opacity:0,
    scrollTrigger:{
      scroller:".main",
      trigger:".five3",
      start:"top 60%",
      
    }
  })
  gsap.from(".rectangle",{
    x:50,
    opacity:0,
    
    scrollTrigger:{
      scroller:".main",
      trigger:".rectangle",
      start:"top 60%",
      
    },
    
  })

  gsap.to(".five1", {
    scrollTrigger: {
      trigger: ".page5",
      toggleActions: "restart pause reverse pause"
    }, 
    duration: 1, 
    backgroundColor: "#fffff", 
    ease: "none",
    markers:true
  });
  gsap.to(".five1>h1", {
    scrollTrigger: {
      trigger: ".page5",
      toggleActions: "restart pause reverse pause"
    }, 
    duration: 1, 
    color:"black",
    // backgroundColor: "white", 
    ease: "none"
  });