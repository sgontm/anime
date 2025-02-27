const hero = document.querySelector(".hero");
const sr = document.querySelector(".sr");
const logo = document.querySelector("#logo");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");

const tl = gsap.timeline();

tl.fromTo(hero, 1, { height: "0%" }, { height: "70%", ease: Power2.easeInOut })
.fromTo(hero , 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
// .fromTo(slider, 1.2, { y: "-100%" }, { y:"0%", ease: Power2.easeInOut},"-=1.2" )
.fromTo(logo, 0.5, { opacity: 0, x: 30}, { opacity: 1, x: 0}, "-=0.5")
.fromTo(menu, 0.5, { opacity: 0, x: 30}, { opacity: 1, x: 0}, "-=0.5")
.fromTo(headline, 0.5, { opacity: 0, x: 0}, { opacity: 1, x: 30}, "-=0.5")


// お気に入りのサイズ
//  tl.fromTo(hero, 1, { height: "0%" }, { height: "50%", ease: Power2.easeInOut })
// tl.fromTo(hero, 1, { height: "0%" }, { height: "70%", ease: Power2.easeInOut })

// tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
// .fromTo(hero , 1.2, { width: "100%" }, { width: "90%", ease: Power2.easeInOut })

// .fromTo(hero , 1.2, { width: "80%" }, { width: "100%", ease: Power2.easeInOut })
