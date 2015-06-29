# modal-mobile
A simple &amp; lightweight &amp; high performance method of displaying modal window for mobile only

# why modal-mobile
The modal-mobile doesn't relies on any javascirt library and takes advantages of the new featues of browser like 'queryseletor' and so on. So it's really light-weight with high performance. that's amazing! Because of its light it's also easy to be customized!

## Installation
```html
<link rel="stylesheet" type="text/css" href="/path/to/modal-mobile.css">
<script src="/path/to/modal-mobile.js"></script>
```
## Usage
add html with styles
```html
<!--dialog html-->
<div class="modal-dialog">
			<div class="modal-header">
				<h4>Modal title</h4>
			</div>
			<div class="modal-body">one fine body...</div>
			<div class="modal-footer">
				<a>Cancel</a>
				<a data-btn="ok">OK</a>
				<i></i>
			</div>
 </div>
 
 <!--loding tip html-->
<div class="modal-loading">loading...</div>
```
call functions
```javascript
//show dialog
modal.showDialog();

//show loading
modal.showLoading();
```

## License
GPL 2.0
