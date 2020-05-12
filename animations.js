document.querySelector('.main_section_content_button').animate([
        
        {   transform: 'translateX(-200px)',
            opacity: '0'  },
        {    transform: 'translateX(0px)',
            opacity: '1'  }
    
    ], 

        {
            delay: 500,
            duration: 1000,
            endDelay: 400,
            easing: 'ease-out'
        }
)

setTimeout(() => {
    document.querySelector('.main_section_content_button').style.opacity = 1;
}, 1300)