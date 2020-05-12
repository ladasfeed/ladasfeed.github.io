let currentSlide = 0;
let currentTranslate = 0;

let sliderWidth = document.querySelector('.gallery_content').offsetWidth;



function slideNext() {
    let slides = Array.from(document.querySelectorAll('.gallery_content'));


    if (currentSlide == slides.length-1) {
        currentSlide=0;
        currentTranslate=0;
    } else {
        currentSlide++;
        currentTranslate-=sliderWidth+50;
    }
    
    

    
    slides.map(item => {
        item.style.transform = 'translateX(' + currentTranslate + 'px)';
    })


}




function slidePrev() {
    let slides = Array.from(document.querySelectorAll('.gallery_content'));
    

    if (currentSlide == 0) {
        currentSlide=slides.length-1;
        currentTranslate=-1*(slides.length-1)*(sliderWidth+50);
    } else {
        currentSlide--;
        currentTranslate+=sliderWidth+50;
    }
    
    
    slides.map(item => {
        item.style.transform = 'translateX(' + currentTranslate + 'px)';
    })


}