/** @format */

function scrollAppear() {
	var section = document.querySelectorAll("[data-section-with-animation]");
	for (var i = 0; i < section.length; i++) {
		var sectionpos = section[i].getBoundingClientRect().top;
		var screenpos = window.innerHeight;

		if (sectionpos + 200 < screenpos) {
			section[i].classList.add("animate");
		}
	}
}

window.addEventListener("DOMContentLoaded", (event) => {
	scrollAppear();
});

window.addEventListener("scroll", scrollAppear);
