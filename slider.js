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

function call() {
    var msg   = $('#forms').serialize();
    console.log(msg)
      $.ajax({
        type: 'POST',
        url: 'mail.php', // Если обработчик лежит не рядом с формой, то здесь следует указать полный путь до него. Например http://example.com/mail.php
        data: msg,
        success: function(data) {
          $('#results').html(data);
        },
        error:  function(xhr, str){
              alert('Возникла ошибка: ' + xhr.responseCode);
          }
      });

  }