function silmpleSlide() {


	const slider = document.querySelector(".js-slider");
	const slide = document.getElementsByClassName("js-slide");
	
	const arrowLeft = document.querySelector(".arrow-left");
	const arrowRight = document.querySelector(".arrow-right");




	let slideWidth = parseInt(getComputedStyle(slider).width);
	let CurrentSlide = 0;


	let nextSlide;
	let prevSlide;






	arrowRight.addEventListener("click", moveSlideNext);

	arrowLeft.addEventListener("click", moveSlideBAck);
    
    for (const slideItem of slide) {
        slideItem.addEventListener('click', moveSlideNext)
    };
    
    setInterval(moveSlideNext, 2000);

    function moveSlideNext () {

		if (CurrentSlide >= slide.length - 1) {
			CurrentSlide = 0;
		} else if (CurrentSlide < 0) {
			CurrentSlide = 0;
		} else {
			CurrentSlide += 1;
		}
		nextSlide = -(slideWidth * CurrentSlide);


		for (let i = 0; i < slide.length; i++) {

			slide[i].style.transform = `translateX(${nextSlide}px)`;

			slide[i].classList.remove("active-slide");
			slide[CurrentSlide].classList.add("active-slide");



			console.log("CurrentSlide " + CurrentSlide);

		}



	}
    
    function moveSlideBAck() {



		if (CurrentSlide <= 0) {
			CurrentSlide = slide.length - 1;
		} else {

			CurrentSlide -= 1;
		}
		prevSlide = -(slideWidth * CurrentSlide);


		for (let i = 0; i < slide.length; i++) {

			slide[i].style.transform = `translateX(${prevSlide}px)`;
			slide[i].classList.remove("active-slide");
			slide[CurrentSlide].classList.add("active-slide");



			console.log("CurrentSlide " + CurrentSlide);
		}


	}

}
silmpleSlide();
