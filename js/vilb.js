document.addEventListener("DOMContentLoaded", function () {

	// Basic variables to operate with:
	var vilb_imgs = document.getElementsByTagName('img');
	var vilb_body = document.querySelector('body');
	var vilb_src_imgs = [];
	var vilb_last_slash = '';
	var vilb_link_temp = '';

	// Images detection
	var vilb_detection = document.createElement('div');
	vilb_detection.setAttribute('id', 'vilb_styles_purgatory');
	vilb_detection.style.display = 'flex';
	vilb_detection.style.flexDirection = 'column';
	vilb_detection.style.justifyContent = 'center';
	vilb_detection.style.alignItems = 'center';
	vilb_detection.style.position = 'fixed';
	vilb_detection.style.top = '0';
	vilb_detection.style.border = '2px dashed black';
	vilb_detection.style.width = '100%';
	vilb_detection.style.height = '100px';
	vilb_detection.style.zIndex = '1';
	vilb_detection.style.background = 'rgba(255,255,255,0.8)';

	var vilb_detect_info = document.createElement('p');
	vilb_detect_info.setAttribute('id', 'vilb_styles_purgatory');
	vilb_detect_info.style.fontSize = '22px';
	vilb_detect_info.style.fontWeight = 'bold';
	vilb_detect_info.innerText = 'VILB.js has detected ' + vilb_imgs.length + ' <img /> tags on this page !';

	var vilb_detect_close = document.createElement('p');
	vilb_detect_close.setAttribute('id', 'vilb_styles_purgatory');
	vilb_detect_close.style.fontSize = '18px';
	vilb_detect_close.style.fontWeight = 'bold';
	vilb_detect_close.innerHTML = '( Hover to hide this info )';

	vilb_detection.appendChild(vilb_detect_info);
	vilb_detection.appendChild(vilb_detect_close);

	vilb_body.appendChild(vilb_detection);

	vilb_detection.addEventListener("mouseenter", function () {
		//vilb_body.removeChild(vilb_detection);
		vilb_detection.style.display = 'none';
	})

	// Main image events

	for (var i = 0; i < vilb_imgs.length; i++) {

		vilb_src_imgs.push(vilb_imgs[i].src);
		vilb_imgs[i].style.cursor = "pointer";

		vilb_imgs[i].addEventListener("mouseenter", function () {
			this.setAttribute('title', 'Click to open image in VILB!');
		});

		vilb_imgs[i].addEventListener("click", function () {

			vilb_detection.style.display = 'none';

			var vilb_locking = vilb_src_imgs.indexOf(this.src);
			var vilb_rotation = 0;
			var vilb_rotation_string = 'rotate(0deg)';
			var vilb_scaling = 1;
			var vilb_scaling_string = 'scale(1)';

			// Main DIV
			var vilb_full_screen = document.createElement('div');
			vilb_full_screen.classList.add('allForOne');
			vilb_full_screen.setAttribute('id', 'vilb_styles_purgatory');
			vilb_full_screen.style.display = 'flex';
			vilb_full_screen.style.flexDirection = 'column';
			vilb_full_screen.style.position = 'fixed';
			vilb_full_screen.style.width = '100%';
			vilb_full_screen.style.height = '100%';
			vilb_full_screen.style.left = '0';
			vilb_full_screen.style.top = '0';
			vilb_full_screen.style.zIndex = '2';
			vilb_full_screen.style.background = 'rgba(255,255,255,0.7)'

			// Main IMAGE
			var vilb_image = document.createElement('img');
			vilb_image.setAttribute('id', 'vilb_styles_purgatory');
			vilb_image.style.display = 'flex';
			vilb_image.style.width = this.offsetWidth + 'px';
			vilb_image.style.height = this.offsetHeight + 'px';
			vilb_image.style.transition = 'all 1s ease';
			vilb_image.src = this.src;

			// 0th Row
			var vilb_0th_row = document.createElement('div');
			vilb_0th_row.setAttribute('id', 'vilb_styles_purgatory');
			vilb_0th_row.style.display = 'flex';
			vilb_0th_row.style.justifyContent = 'flex-end';

			// CLOSE Button
			var vilb_close_button = document.createElement('button');
			vilb_close_button.setAttribute('id', 'vilb_styles_purgatory');
			vilb_close_button.innerHTML = "Close [Esc]";
			vilb_close_button.style.width = '100px';
			vilb_close_button.style.height = '30px';

			// 1st Row
			var vilb_1st_row = document.createElement('div');
			vilb_1st_row.setAttribute('id', 'vilb_styles_purgatory');
			vilb_1st_row.style.display = 'flex';
			vilb_1st_row.style.justifyContent = 'center';

			// Header with VILB title
			var vilb_header_title = document.createElement('h1');
			vilb_header_title.setAttribute('id', 'vilb_styles_purgatory');
			vilb_header_title.style.fontSize = '26px';
			vilb_header_title.style.fontWeight = 'bold';
			vilb_header_title.innerHTML = 'VILB : Vanilla Image LightBox';

			// 2nd Row
			var vilb_2nd_row = document.createElement('div');
			vilb_2nd_row.setAttribute('id', 'vilb_styles_purgatory');
			vilb_2nd_row.style.display = 'flex';
			vilb_2nd_row.style.justifyContent = 'center';

			// --- tools buttons
			var vilb_rotate_left = document.createElement('button');
			vilb_rotate_left.setAttribute('id', 'vilb_styles_purgatory');
			vilb_rotate_left.innerHTML = 'Rotate Left [L]';
			vilb_rotate_left.style.width = '120px';
			vilb_rotate_left.style.height = '30px';
			vilb_rotate_left.style.margin = '0px 10px';

			var vilb_rotate_right = document.createElement('button');
			vilb_rotate_right.setAttribute('id', 'vilb_styles_purgatory');
			vilb_rotate_right.innerHTML = 'Rotate Right [R]';
			vilb_rotate_right.style.width = '120px';
			vilb_rotate_right.style.height = '30px';
			vilb_rotate_right.style.margin = '0px 10px';

			var vilb_scale_down = document.createElement('button');
			vilb_scale_down.setAttribute('id', 'vilb_styles_purgatory');
			vilb_scale_down.innerHTML = 'Scale Down [-]';
			vilb_scale_down.style.width = '120px';
			vilb_scale_down.style.height = '30px';
			vilb_scale_down.style.margin = '0px 10px';

			var vilb_scale_up = document.createElement('button');
			vilb_scale_up.setAttribute('id', 'vilb_styles_purgatory');
			vilb_scale_up.innerHTML = 'Scale Up [+]';
			vilb_scale_up.style.width = '120px';
			vilb_scale_up.style.height = '30px';
			vilb_scale_up.style.margin = '0px 10px';

			// 3rd Row
			var vilb_3rd_row = document.createElement('div');
			vilb_3rd_row.setAttribute('id', 'vilb_styles_purgatory');
			vilb_3rd_row.style.display = 'flex';
			vilb_3rd_row.style.justifyContent = 'center';

			// Image source path
			var vilb_src_path = document.createElement('p');
			vilb_src_path.setAttribute('id', 'vilb_styles_purgatory');
			vilb_src_path.style.fontWeight = 'bold';
			//vilb_src_path.style.alignSelf = 'center';
			vilb_src_path.innerHTML = 'Donwload oryginal image file:  ';

			// Image link
			var vilb_src_link = document.createElement('a');
			vilb_src_link.setAttribute('id', 'vilb_styles_purgatory');
			vilb_src_link.style.fontWeight = 'bold';
			vilb_src_link.style.color = 'darkblue';
			vilb_src_link.style.textDecoration = 'underline';
			vilb_src_link.style.display = 'flex';
			vilb_src_link.style.justifyContent = 'center';
			vilb_last_slash = vilb_image.src.lastIndexOf('/');
			vilb_link_temp = vilb_image.src.substring(vilb_last_slash + 1, vilb_image.src.length);
			vilb_src_link.innerHTML = vilb_link_temp;
			vilb_src_link.setAttribute('download', vilb_link_temp);
			vilb_src_link.setAttribute('href', vilb_image.src);

			// Center Row
			var vilb_center_row = document.createElement('div');
			vilb_center_row.setAttribute('id', 'vilb_styles_purgatory');
			vilb_center_row.style.display = 'flex';
			vilb_center_row.style.justifyContent = 'center';
			vilb_center_row.style.alignItems = 'center';
			vilb_center_row.style.border = '3px solid black';
			vilb_center_row.style.overflow = 'scroll';
			vilb_center_row.style.height = '80%';

			// 4th Row
			var vilb_4th_row = document.createElement('div');
			vilb_4th_row.setAttribute('id', 'vilb_styles_purgatory');
			vilb_4th_row.style.display = 'flex';
			vilb_4th_row.style.justifyContent = 'center';
			vilb_4th_row.style.alignItems = 'center';

			//Home Button
			var vilb_home_button = document.createElement('button');
			vilb_home_button.setAttribute('id', 'vilb_styles_purgatory');
			vilb_home_button.innerHTML = "[Home] Image";
			vilb_home_button.style.width = "120px";
			vilb_home_button.style.height = "30px";

			// PREVIOUS Button
			var vilb_previous_button = document.createElement('button');
			vilb_previous_button.setAttribute('id', 'vilb_styles_purgatory');
			vilb_previous_button.innerHTML = "[&larr;] Previous";
			vilb_previous_button.style.width = "100px";
			vilb_previous_button.style.height = "40px";
			vilb_previous_button.style.marginLeft = '10px';

			// Steps viewer
			var vilb_steps_viewer = document.createElement('p');
			vilb_steps_viewer.setAttribute('id', 'vilb_styles_purgatory');
			vilb_steps_viewer.style.margin = '0px 20px';
			vilb_steps_viewer.style.fontWeight = 'bold';
			vilb_steps_viewer.innerText = 'Image ' + (vilb_locking + 1) + ' from ' + vilb_imgs.length;

			// First image Button
			var vilb_next_button = document.createElement('button');
			vilb_next_button.setAttribute('id', 'vilb_styles_purgatory');
			vilb_next_button.innerHTML = "Next [&rarr;]";
			vilb_next_button.style.width = "100px";
			vilb_next_button.style.height = "40px";
			vilb_next_button.style.marginRight = '10px';

			// Last image Button
			var vilb_end_button = document.createElement('button');
			vilb_end_button.setAttribute('id', 'vilb_styles_purgatory');
			vilb_end_button.innerHTML = "[End] Image";
			vilb_end_button.style.width = "120px";
			vilb_end_button.style.height = "30px";


			// Appending created elements
			vilb_0th_row.appendChild(vilb_close_button);
			vilb_full_screen.appendChild(vilb_0th_row);

			vilb_1st_row.appendChild(vilb_header_title);
			vilb_full_screen.appendChild(vilb_1st_row);

			vilb_2nd_row.append(vilb_rotate_left);
			vilb_2nd_row.append(vilb_rotate_right);
			vilb_2nd_row.append(vilb_scale_down);
			vilb_2nd_row.append(vilb_scale_up);
			vilb_full_screen.appendChild(vilb_2nd_row);

			vilb_3rd_row.appendChild(vilb_src_path);
			vilb_3rd_row.appendChild(vilb_src_link);
			vilb_full_screen.appendChild(vilb_3rd_row);

			vilb_center_row.appendChild(vilb_image);
			vilb_full_screen.appendChild(vilb_center_row);

			vilb_4th_row.appendChild(vilb_home_button);
			vilb_4th_row.appendChild(vilb_previous_button);
			vilb_4th_row.appendChild(vilb_steps_viewer);
			vilb_4th_row.appendChild(vilb_next_button);
			vilb_4th_row.appendChild(vilb_end_button);

			vilb_full_screen.appendChild(vilb_4th_row);

			// Final appendition
			vilb_body.appendChild(vilb_full_screen);

			if (vilb_image.getBoundingClientRect().height > vilb_center_row.offsetHeight) {
				vilb_center_row.style.alignItems = 'flex-start';
				vilb_image.style.transformOrigin = 'top';
			} else {
				vilb_center_row.style.alignItems = 'center';
				vilb_image.style.transformOrigin = 'center';
			}

			// Click events
			vilb_close_button.addEventListener("click", vilb_closing);

			vilb_rotate_left.addEventListener("click", vilb_rotating_left);

			vilb_rotate_right.addEventListener("click", vilb_rotating_right);

			vilb_scale_down.addEventListener("click", vilb_scaling_down);

			vilb_scale_up.addEventListener("click", vilb_scaling_up);

			vilb_previous_button.addEventListener("click", vilb_sliding_left);

			vilb_next_button.addEventListener("click", vilb_sliding_right);

			vilb_home_button.addEventListener("click", vilb_first_sliding);

			vilb_end_button.addEventListener("click", vilb_last_sliding);

			// Closing VILB
			function vilb_closing() {
				vilb_body.removeChild(vilb_full_screen);
			}

			// Rotating image over LEFT 
			function vilb_rotating_left() {
				vilb_center_row.style.alignItems = 'center';
				vilb_image.style.transformOrigin = 'center';
				vilb_rotation -= 90;
				vilb_rotation_string = 'rotate(' + vilb_rotation + 'deg)';
				vilb_image.style.transform = vilb_rotation_string + ' ' + vilb_scaling_string;
				return vilb_rotation, vilb_scaling, vilb_rotation_string, vilb_scaling_string;
			}

			// Rotating image over RIGHT 
			function vilb_rotating_right() {
				vilb_center_row.style.alignItems = 'center';
				vilb_image.style.transformOrigin = 'center';
				vilb_rotation += 90;
				vilb_rotation_string = 'rotate(' + vilb_rotation + 'deg)';
				vilb_image.style.transform = vilb_rotation_string + ' ' + vilb_scaling_string;
				return vilb_rotation, vilb_scaling, vilb_rotation_string, vilb_scaling_string;
			}

			// Scaling down
			function vilb_scaling_down() {
				if (vilb_scaling >= 0.2) {
					vilb_scaling -= 0.1;
					if (vilb_image.getBoundingClientRect().height > vilb_center_row.offsetHeight) {
						vilb_center_row.style.alignItems = 'flex-start';
						vilb_image.style.transformOrigin = 'top';
					} else {
						vilb_center_row.style.alignItems = 'center';
						vilb_image.style.transformOrigin = 'center';
					}
					vilb_scaling_string = 'scale(' + vilb_scaling + ')';
					vilb_image.style.transform = vilb_rotation_string + ' ' + vilb_scaling_string;
					return vilb_scaling, vilb_rotation, vilb_rotation_string, vilb_scaling_string;
				}
			}

			// Scaling up
			function vilb_scaling_up() {
				vilb_scaling += 0.1;
				if (vilb_image.getBoundingClientRect().height > vilb_center_row.offsetHeight) {
					vilb_center_row.style.alignItems = 'flex-start';
					vilb_image.style.transformOrigin = 'top';
				} else {
					vilb_center_row.style.alignItems = 'center';
					vilb_image.style.transformOrigin = 'center';
				}
				vilb_scaling_string = 'scale(' + vilb_scaling + ')';
				vilb_image.style.transform = vilb_rotation_string + ' ' + vilb_scaling_string;
				return vilb_scaling, vilb_rotation, vilb_rotation_string, vilb_scaling_string;
			}

			// Sliding images to the LEFT <---
			function vilb_sliding_left() {
				if (vilb_locking > 0 && vilb_locking <= vilb_imgs.length - 2) {
					vilb_rotation = 0;
					vilb_rotation_string = 'rotate(' + vilb_rotation + 'deg)';
					vilb_scaling = 1;
					vilb_scaling_string = 'scale(' + vilb_scaling + ')';
					vilb_image.style.transform = vilb_rotation_string + ' ' + vilb_scaling_string;
					vilb_locking -= 1;
					vilb_image.src = vilb_imgs[vilb_locking].src;
					vilb_last_slash = vilb_image.src.lastIndexOf('/');
					vilb_link_temp = vilb_image.src.substring(vilb_last_slash + 1, vilb_image.src.length);
					vilb_src_link.innerHTML = vilb_link_temp;
					vilb_src_link.setAttribute('download', vilb_link_temp);
					vilb_src_link.setAttribute('href', vilb_image.src);
					vilb_image.style.width = vilb_imgs[vilb_locking].offsetWidth + 'px';
					vilb_image.style.height = vilb_imgs[vilb_locking].offsetHeight + 'px';
					vilb_steps_viewer.innerText = 'Image ' + (vilb_locking + 1) + ' from ' + (vilb_imgs.length - 1);
					if (vilb_imgs[vilb_locking].getBoundingClientRect().height > vilb_center_row.offsetHeight) {
						vilb_center_row.style.alignItems = 'flex-start';
						vilb_image.style.transformOrigin = 'top';
					} else {
						vilb_center_row.style.alignItems = 'center';
						vilb_image.style.transformOrigin = 'center';
					}
					return vilb_locking, vilb_rotation, vilb_scaling, vilb_rotation_string, vilb_scaling_string;
				}
			}

			// Sliding images to the RIGHT --->
			function vilb_sliding_right() {
				if (vilb_locking >= 0 && vilb_locking < vilb_imgs.length - 2) {
					vilb_rotation = 0;
					vilb_rotation_string = 'rotate(' + vilb_rotation + 'deg)';
					vilb_scaling = 1;
					vilb_scaling_string = 'scale(' + vilb_scaling + ')';
					vilb_image.style.transform = vilb_rotation_string + ' ' + vilb_scaling_string;
					vilb_locking += 1;
					vilb_src_path.innerHTML = 'Donwload oryginal image file:  ';
					vilb_image.src = vilb_imgs[vilb_locking].src;
					vilb_last_slash = vilb_image.src.lastIndexOf('/');
					vilb_link_temp = vilb_image.src.substring(vilb_last_slash + 1, vilb_image.src.length);
					vilb_src_link.innerHTML = vilb_link_temp;
					vilb_src_link.setAttribute('download', vilb_link_temp);
					vilb_src_link.setAttribute('href', vilb_image.src);
					vilb_image.style.width = vilb_imgs[vilb_locking].offsetWidth + 'px';
					vilb_image.style.height = vilb_imgs[vilb_locking].offsetHeight + 'px';
					vilb_steps_viewer.innerText = 'Image ' + (vilb_locking + 1) + ' from ' + (vilb_imgs.length - 1);
					if (vilb_imgs[vilb_locking].getBoundingClientRect().height > vilb_center_row.offsetHeight) {
						vilb_center_row.style.alignItems = 'flex-start';
						vilb_image.style.transformOrigin = 'top';
					} else {
						vilb_center_row.style.alignItems = 'center';
						vilb_image.style.transformOrigin = 'center';
					}
					return vilb_locking, vilb_rotation, vilb_scaling, vilb_rotation_string, vilb_scaling_string;
				}
			}

			// Sliding to the FIRST image
			function vilb_first_sliding() {
				if (vilb_locking >= 0 && vilb_locking < vilb_imgs.length - 2) {
					vilb_rotation = 0;
					vilb_rotation_string = 'rotate(' + vilb_rotation + 'deg)';
					vilb_scaling = 1;
					vilb_scaling_string = 'scale(' + vilb_scaling + ')';
					vilb_image.style.transform = vilb_rotation_string + ' ' + vilb_scaling_string;
					vilb_locking = 0;
					vilb_src_path.innerHTML = 'Donwload oryginal image file:  ';
					vilb_image.src = vilb_imgs[vilb_locking].src;
					vilb_last_slash = vilb_image.src.lastIndexOf('/');
					vilb_link_temp = vilb_image.src.substring(vilb_last_slash + 1, vilb_image.src.length);
					vilb_src_link.innerHTML = vilb_link_temp;
					vilb_src_link.setAttribute('download', vilb_link_temp);
					vilb_src_link.setAttribute('href', vilb_image.src);
					vilb_image.style.width = vilb_imgs[vilb_locking].offsetWidth + 'px';
					vilb_image.style.height = vilb_imgs[vilb_locking].offsetHeight + 'px';
					vilb_steps_viewer.innerText = 'Image ' + (vilb_locking + 1) + ' from ' + (vilb_imgs.length - 1);
					if (vilb_imgs[vilb_locking].getBoundingClientRect().height > vilb_center_row.offsetHeight) {
						vilb_center_row.style.alignItems = 'flex-start';
						vilb_image.style.transformOrigin = 'top';
					} else {
						vilb_center_row.style.alignItems = 'center';
						vilb_image.style.transformOrigin = 'center';
					}
					return vilb_locking, vilb_rotation, vilb_scaling, vilb_rotation_string, vilb_scaling_string;
				}
			}

			// Sliding to the LAST image
			function vilb_last_sliding() {
				if (vilb_locking >= 0 && vilb_locking < vilb_imgs.length - 2) {
					vilb_rotation = 0;
					vilb_rotation_string = 'rotate(' + vilb_rotation + 'deg)';
					vilb_scaling = 1;
					vilb_scaling_string = 'scale(' + vilb_scaling + ')';
					vilb_image.style.transform = vilb_rotation_string + ' ' + vilb_scaling_string;
					vilb_locking = vilb_imgs.length - 2;
					vilb_src_path.innerHTML = 'Donwload oryginal image file:  ';
					vilb_image.src = vilb_imgs[vilb_locking].src;
					vilb_last_slash = vilb_image.src.lastIndexOf('/');
					vilb_link_temp = vilb_image.src.substring(vilb_last_slash + 1, vilb_image.src.length);
					vilb_src_link.innerHTML = vilb_link_temp;
					vilb_src_link.setAttribute('download', vilb_link_temp);
					vilb_src_link.setAttribute('href', vilb_image.src);
					vilb_image.style.width = vilb_imgs[vilb_locking].offsetWidth + 'px';
					vilb_image.style.height = vilb_imgs[vilb_locking].offsetHeight + 'px';
					vilb_steps_viewer.innerText = 'Image ' + (vilb_locking + 1) + ' from ' + (vilb_imgs.length - 1);
					if (vilb_imgs[vilb_locking].getBoundingClientRect().height > vilb_center_row.offsetHeight) {
						vilb_center_row.style.alignItems = 'flex-start';
						vilb_image.style.transformOrigin = 'top';
					} else {
						vilb_center_row.style.alignItems = 'center';
						vilb_image.style.transformOrigin = 'center';
					}
					return vilb_locking, vilb_rotation, vilb_scaling, vilb_rotation_string, vilb_scaling_string;
				}
			}

			var vilb_buttons = document.querySelectorAll('.allForOne button');

			for (var i = 0; i < vilb_buttons.length; i++) {
				vilb_buttons[i].style.display = 'flex';
				vilb_buttons[i].style.flexDirection = 'column';
				vilb_buttons[i].style.justifyContent = 'center';
				vilb_buttons[i].style.alignItems = 'center';
				vilb_buttons[i].style.fontWeight = 'bold';
				vilb_buttons[i].style.borderRadius = '5%';
				vilb_buttons[i].style.cursor = 'pointer';
				vilb_buttons[i].style.border = '1px solid black';
				vilb_buttons[i].style.backgroundColor = 'darkgrey';
			}

			document.querySelector('body').onkeyup = function (pressing) {
				if (pressing.keyCode === 27) {
					vilb_closing();
				} else if (pressing.keyCode === 76) {
					vilb_rotating_left();
				} else if (pressing.keyCode === 82) {
					vilb_rotating_right();
				} else if (pressing.keyCode === 107) {
					vilb_scaling_up();
				} else if (pressing.keyCode === 109) {
					vilb_scaling_down();
				} else if (pressing.keyCode === 37) {
					vilb_sliding_left();
				} else if (pressing.keyCode === 39) {
					vilb_sliding_right();
				} else if (pressing.keyCode === 36) {
					vilb_first_sliding();
				} else if (pressing.keyCode === 35) {
					vilb_last_sliding();
				}
			}
		})
	}

});

var sheet = (function () {

	var style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);

	return style.sheet;
})();

sheet.insertRule("#vilb_styles_purgatory { all: unset; }", 0);
