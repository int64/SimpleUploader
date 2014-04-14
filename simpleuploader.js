/**
 * Simple HTML5 Uploader
 * https://github.com/int64/SimpleUploader
 * @author Anton Minakov
 * @ver 0.4
 */
/*
Usage
=====

new Uploader({
	target: "#upload",	// jQuery search string (required)
	url: '/upload',		// url to upload (required)
	event: 'click',		// jQuery event to target for start upload (not required, by default 'click')
	params: { id: 1 },	// POST params to send (not required)
	multiple: true,		// multiple file choose (not required, by default 'false')
	load: function(response){},	// function to call after load (not required)
	progress: function(response){},	// function to call on load progress (not required)
	
});

*/
var Uploader = (function(){
	
	function uploader(settings){
		var _uploader_ = this;
		$(settings.target).on(settings.event || 'click',function(){
			var input = $('<input type="file" id="uploader" style="display:none" />');
			if (settings.multiple) {
				input.attr('multiple','multiple');
			}
			input.change(function(){
				if (this.value != '') {
					var fd = new FormData();
					for (var i = 0; i < this.files.length; i++) {
						fd.append('upload_' + i,this.files[i]);
					}
					for (var i in settings.params) {
						fd.append(i,settings.params[i]);
					}
					var xhr = new XMLHttpRequest();
					if (settings.progress) {
						xhr.upload.addEventListener("progress",settings.progress,false);
					}
					if (settings.load) {
						xhr.addEventListener('load',settings.load,false);
					}
					xhr.open('POST',settings.url);
					xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
					xhr.send(fd);
				}
			}).appendTo('body').click();
			return false;
		})
	}
	
	return uploader;
})()