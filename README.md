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
	load: function(response){},	// function to call after load (not required)
	progress: function(response){},	// function to call on load progress (not required)
});
```
