var how_it_works_video_overlay = document.getElementsByClassName('how-it-works-video-overlay');//video overlay div
var how_it_works_video = document.getElementsByClassName('how-it-works-video');//html5 video
var open_popup_link =  document.getElementsByClassName('open-popup-link');
var popup_overlay = document.getElementsByClassName('popup-overlay');
var links = document.getElementsByTagName('A');
var popup_body = document.querySelectorAll('.popup');
var choose_file_index;
var upload_file_generated_text;
var popup_close = document.getElementsByClassName('popup-close');
var open_banner_video = document.getElementsByClassName('html5lightbox');
const html5box_html5_lightbox =  document.getElementById('html5box-html5-lightbox');
const lightbox_image =  document.getElementById('html5-image');

function hideBody(e) {
	body_tag.classList.remove('nonscrollable-body');
	html_tag.classList.remove('nonscrollable-body');
	container_tag.classList.remove('nonscrollable-body');
	lightbox_image.addEventListener('click', function(){
	e.stopPropagation();
	});
}
if(html5box_html5_lightbox !== null){
html5box_html5_lightbox.addEventListener('click', function(){
	body_tag.classList.add('nonscrollable-body');
	html_tag.classList.add('nonscrollable-body');
	container_tag.classList.add('nonscrollable-body');
	});
}
//function to open lightbox video
Array.from(open_banner_video).forEach(function(element) {
	element.addEventListener('click', hideBody);
});
function playVideo() {
	//playing video and hiding overlay div
	this.parentNode.querySelector('.how-it-works-video').play();
	this.classList.add('hide-play-button');

	//checking if video ended to show overlay div
	this.parentNode.querySelector('.how-it-works-video').onended = function() {
		this.parentNode.querySelector('.how-it-works-video-overlay').classList.remove('hide-play-button');
	};
}

function pauseVideo() {
	this.pause();
	this.parentNode.querySelector('.how-it-works-video-overlay').classList.remove('hide-play-button');
}

//function to pause video
Array.from(how_it_works_video_overlay).forEach(function(element) {
	element.addEventListener('click', playVideo);
});

//function to pause video
Array.from(how_it_works_video).forEach(function(element) {
	element.addEventListener('click', pauseVideo);
});

Array.from(popup_body).forEach(function(element) {
	element.addEventListener('click', function(event){
		event.stopPropagation();
	});
});

Array.from(open_popup_link).forEach(function(element) {
	element.addEventListener('click', function(event){
		Array.from(popup_overlay).forEach(function(popup_element) {
			popup_element.classList.remove('open-popup-overlay');
			if(element.classList.contains(popup_element.id)){
				popup_element.classList.add('open-popup-overlay');
				body_tag.classList.add('nonscrollable-body');
				html_tag.classList.add('nonscrollable-body');
				container_tag.classList.add('nonscrollable-body');
			}
		});
	});
});

Array.from(popup_close).forEach(function(element) {
	element.addEventListener('click', function(event){
		Array.from(popup_overlay).forEach(function(popup_element) {
			if(popup_element.classList.contains('open-popup-overlay')){
				popup_element.classList.remove('open-popup-overlay');
				body_tag.classList.remove('nonscrollable-body');
				html_tag.classList.remove('nonscrollable-body');
				container_tag.classList.remove('nonscrollable-body');
			}
		});
		return false;

	});
});

Array.from(popup_overlay).forEach(function(element) {
	element.addEventListener('click', function(){
		if(element.classList.contains('open-popup-overlay')){
			element.classList.remove('open-popup-overlay');
			body_tag.classList.remove('nonscrollable-body');
			html_tag.classList.remove('nonscrollable-body');
			container_tag.classList.remove('nonscrollable-body');
		}

	});

});

if (typeof jQuery !== 'undefined') {
	$(document).ready(function() {

		$('.upload_files_section').each(function () {
			$(this).click(function(){
				choose_file_index = $(this).parent('.file-input-wrapper').attr('id');
			});
		});

		$('.image-delete').click(function(){
			$(this).parents('.image-file-container').removeClass('show-image-file-container');
		});
		function bindClickToLink() {	
			$('.upload_files_section').click(function(){
				choose_file_index = $(this).parent('.file-input-wrapper').attr('id');
				var class_list_item = $(this).attr('class');
				$('.popup-overlay').each(function(){
					if(~class_list_item.indexOf($(this).attr('id'))){
						$('.popup-overlay').removeClass('open-popup-overlay');
						$(this).addClass('open-popup-overlay');
						body_tag.classList.add('nonscrollable-body');
						html_tag.classList.add('nonscrollable-body');
						container_tag.classList.add('nonscrollable-body');
					}

				});

			});
			$('.image-delete').click(function(){
				$(this).parents('.image-file-container').removeClass('show-image-file-container');
			});

		}

		var file_counter=1;
		$(document).on('click', '.add-file-button', function () {
			var clone = $('#file_input_wrapper_0').clone();
			clone.attr('id', 'file_input_wrapper_'+file_counter);
			clone.find('.file-upload-label').text('Choose File...');
			clone.find('span.upload_files_section').removeClass('hide-choose-file');
			clone.find('.image-file-container').removeClass('show-image-file-container');
			clone.find('.generated-file-container').removeClass('show-generated-file-container');
			clone.find('.generated-added-text').html('');
			file_counter++;
			clone.appendTo('.file-input-block').each(function () {
				bindClickToLink();
			});
		});

		$('#add_text_section').find('.login-button').click(function(){
			upload_file_generated_text = $('#file_add_text_block').html();
			$('#file_add_text_block').html('');
			$('#add_text_section').removeClass('open-popup-overlay');
			body_tag.classList.remove('nonscrollable-body');
			html_tag.classList.remove('nonscrollable-body');
			container_tag.classList.remove('nonscrollable-body');
			$('.file-input-wrapper').each(function () {
				if($(this).attr('id') == choose_file_index){
					$(this).find('.image-file-container').addClass('show-image-file-container');
					$(this).find('.upload_files_section').addClass('hide-choose-file');
					$(this).find('.generated-file-container').addClass('show-generated-file-container');
					$(this).find('.generated-added-text').html(upload_file_generated_text);
				}

			});

		});

	});

}


