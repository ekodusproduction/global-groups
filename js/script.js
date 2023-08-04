




let rev = 0;
	carouselslider(rev);
	
	function previousReview() {
		rev = rev - 1;
		carouselslider(rev);
		
	}
	
	function nextReview() {
		rev = rev + 1;
		carouselslider(rev);
	}
	
	function carouselslider(review) {
		let reviews = document.getElementsByClassName("whychooseus-item");
	
		if (review >= reviews.length) {
			review = 0;
			rev = 0;
		}
		if (review < 0) {
			review = reviews.length - 1;
			rev = reviews.length - 1;
		}
		for (let i = 0; i < reviews.length; i++) {
			reviews[i].style.display = "none";
		}
		reviews[review].style.display = "flex";
}

function openSubMenu(){
	// console.log('Submenu console')
	// const propertiesSubmenu = document.querySelector('.properties-sub-dropdown');
	// propertiesSubmenu.classList.toggle('hidden')
}



