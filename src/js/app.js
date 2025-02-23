/* import * as flsFunctions from "./modules/functions.js" */
window.addEventListener('load', function () {
	const mobMenuButton = document.querySelector('.menu-button');
	const mobMenu = document.querySelector('.mob-menu');
	const mobMenuContent = mobMenu.querySelector('.mob-menu__content');
	const mobMenuCloseButton = document.querySelector('.mob-menu__close');
	if (mobMenuButton) {
		mobMenuButton.addEventListener('click', function () {

			document.body.classList.add('fixed');
			mobMenu.classList.add('mob-menu_active');

			let animeMenuContentControl = mobMenuContent.animate(
				[
					{ transform: "translateX(-100%)" },
					{ transform: "translateX(0%)" },
				],
				{
					duration: 500,
					timingFunction: 'ease-out',
				}
			);

			animeMenuContentControl.addEventListener('finish', function () {
				mobMenuContent.classList.add('mob-menu__content_active');
			});

		});
	}
	if (mobMenuCloseButton) {
		mobMenuCloseButton.addEventListener('click', function () {
			let animeMenuContentControl = mobMenuContent.animate(
				[
					{ transform: "translateX(0%)" },
					{ transform: "translateX(-100%)" },
				],
				{
					duration: 300,
					timingFunction: 'ease-out',
				}
			);
			animeMenuContentControl.addEventListener('finish', function () {
				mobMenuContent.classList.remove('mob-menu__content_active');
				mobMenu.classList.remove('mob-menu_active');
				document.body.classList.remove('fixed');

			});
		});
	}

	const swiper = new Swiper('.home-slider', {

		direction: 'horizontal',
		loop: true,
		speed: 1000,

		pagination: {
			el: '.swiper-pagination',
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 3000,
			pauseOnMouseEnter: true,

		},
	});


	var mediaBlockControl = new Swiper(".media-block__control", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});
	var mediaBLockView = new Swiper(".media-block__view", {
		loop: true,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: mediaBlockControl,
		},
	});

	const reviewsButton = document.querySelector('.reviews__button');
	const reviewsAdd = document.querySelector('.reviews__add');
	if (reviewsButton && reviewsAdd) {
		reviewsButton.addEventListener('click', function () {
			reviewsAdd.classList.toggle('visually-hidden');
		});
	}
});

