$(document).ready(function() { // Ждём загрузки страницы
	$(".gallery_content_element").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$(".gallery_section").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'><img src='"+src+"' class='popup_img' /></div>"+ // Блок, который будет служить фоном затемненным
						 + 
						 "</div>"); 
		$(".popup").fadeIn(400); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(400);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 400);
		});
	});
	
});


function closeMenu() {
    document.querySelector('header').style.opacity = '0';
    setTimeout(()=> document.querySelector('header').style.display = 'none', 200)
    document.removeEventListener('click', closeMenu)
}

function showMenu() {
    document.querySelector('header').style.display = 'flex';
    setTimeout(()=>document.querySelector('header').style.opacity = '1', 200)
    
   setTimeout(()=>document.addEventListener('click', closeMenu), 300);
    
}


function closePopup(event) {
    if (event.target.className == 'popupMain') {
        document.querySelector('.popupMain').style.opacity = '0';
        setTimeout(()=> document.querySelector('.popupMain').style.display = 'none', 300);
        document.querySelector('.popupMain').removeEventListener('click', closePopup);
    }
}

function showPopup() {
    document.querySelector('.popupMain').style.display = 'flex';
    setTimeout(()=>document.querySelector('.popupMain').style.opacity = '1', 200)
    setTimeout(()=>document.querySelector('.popupMain').addEventListener('click',event => closePopup(event)), 200);
}