$(document).ready(function() {
    // Add a click event handler to the button
    	
$.ajax({
url: "http://165.22.210.84/node/v1/api/testimony/getTestimonyList", // Replace with your server-side script
method: "GET",
dataType: "json",
headers: {
    'apptoken': 'eyJhbGciOiJIUzM4NCJ9.eyJJc3N1ZXIiOiJQU1NTIiwiQXBwbGljYXRpb24iOiJJUEwtTUFSS0VULVBMQUNFIiwiaWF0IjoxNjQ4NTU2MzY0fQ.sglGgNFW6XwLJ71Bz8MpDcxgX62p2eYjGJ_0vonaoQK06_SDWy92fsonk5tG2XAz',
    'Content-Type': 'application/json'
  },
success: function(response) {
if(response?.data?.result?.length > 0){
	response.data?.result?.map((ele)=>{
$('#testimonialContainer').append(`<li class="splide__slide me-3 d-flex justify-content-center">
	<div class="testimonial-card">
    <img src="http://165.22.210.84/node/uploads/${ele?.image != null ? ele?.image :"avatar.jpg" }" alt="Testimonial Author" class="testimonial-image">
    <p class="testimonial-text">${ele?.review}</p>
    <p class="testimonial-author">${ele?.name}</p>
  </div>
	</li>`)
})
var splide = new Splide( '#second-slider', {
  type   : 'loop',
  perPage: 3,
  perMove: 1,
  autoplay: true,
  breakpoints: {
		756: {
			perPage: 1
		}
  }
} );
splide.mount();
}else{
	$('#testimonialContainer').append(`<p>No testimony</p>`)
}
},
error: function(xhr, status, error) {
console.error("Errors:", error);
}
});

		
});
