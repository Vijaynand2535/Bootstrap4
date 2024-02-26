const cl = console.log;


const toggleBtn1 = document.getElementById("toggleBtn");


const ontoggleBtn = (eve) => {
    // cl(eve.target)
    eve.target.classList.toggle("fa-xmark");
    eve.target.classList.toggle("fa-bars");
}






toggleBtn1.addEventListener("click",ontoggleBtn)

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})