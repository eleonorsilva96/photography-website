// let tl = gsap.timeline(); //create the timeline
// tl.to(".top", {rotation: 180}) //start sequencing
// .to(".bottom", {rotation: 180});

gsap.to(".top", {rotation: 45 });
gsap.to(".bottom", { y: -10.5, rotation: -45 });

// TweenMax.set(".top", {
//     scale:0,
//     rotation: 0,
//     transformOrigin:"50% 50%"         // make transform origin be center for x and y axis
//   });

// TweenMax.set(".bottom", {
//     scale:0,
//     rotation: 0,
//     transformOrigin:"50% 50%"         // make transform origin be center for x and y axis
//   });
  
//   gsap.to(".top", 1, { scale: 1, rotation:"+=30"})           // scale element to 100%
//   gsap.to(".bottom", 1, { scale:1, y: -10, rotation:"+=150"})  // rotate element by a relative value of 360deg

