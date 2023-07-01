/*!
=========================================================
* Vaibhav Landing page
=========================================================

* Copyright: 2023 Vaibhav garg (https://vaibhavgarg.netlify.app)
* Coded by Vaibhav garg

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
	$('.navbar .nav-link').on('click', function (event) {
		if (this.hash !== '') {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top,
				},
				700,
				function () {
					window.location.hash = hash;
				}
			);
		}
	});
});

// navbar toggle
$('#nav-toggle').click(function () {
	$(this).toggleClass('is-active');
	$('ul.nav').toggleClass('show');
});
