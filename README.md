SimpleUploader
==============

Simple HTML5 uploader

##Usage

```javascript
new Uploader({
	target: "#upload",	// jQuery search string (required)
	url: '/upload',		// url to upload (required)
	event: 'click',		// jQuery event to target for start upload (not required, by default 'click')
	params: { id: 1 },	// POST params to send (not required)
	multiple: true,		// multiple file choose (not required, by default 'false')
						// function to call after load (not required)
	load: function(response){
		var src = $.parseJSON(response.target.responseText).src;
		_c(src);
		//var image = response.src;
		$("#upload").css({
			'background': 'url("' + src + '") center',
			'height': '186px',
			'background-size': 'cover',
		});
	}
});
```
