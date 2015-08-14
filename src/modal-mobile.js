;(function(global){
	"use strict";
	
	var $backdrop, 
		type, 
		btnListener,
		resizeListener,
		show = function(options, t){
			options = options || {};
			type = options.type = t;


			//show backdrop by default
			if(options.backdrop !== false){
				$backdrop = document.createElement('div');
				$backdrop.className = "modal-backdrop";
				document.body.appendChild($backdrop);
			}

			if(type){
				var $modal = document.querySelector(".modal-" + type);

				if($modal){
					$modal.style.display = "block";//must be seted to show，or the offsetWidth will be 0

					if(type === "dialog"){
						var $footer = document.querySelector('.modal-footer');
						$footer.addEventListener('click', btnListener = function(e){
							e.preventDefault();

							if(e.target.getAttribute("data-btn") === "ok" ){
								options.okCb && options.okCb();
							} else {
								options.cancelCb && options.cancelCb();
							}

							hide();
							
						}, false);

						$footer.addEventListener('touchstart', btnListener);
					}

					window.onresize = function() {
						$modal.style.left = (window.innerWidth - $modal.offsetWidth) / 2 + "px";
						if(type === "dialog"){
							$modal.style.top = (window.innerHeight - $modal.offsetHeight) / 2 + "px";
						}
					};

					//trigger to locate the stuff to center 
					window.onresize();
				}
			}


		},

		hide = function(){
			var $modal;

			if($backdrop){
				document.body.removeChild($backdrop);
				$backdrop = null;
			}

			$modal = document.querySelector(".modal-" + type);
			$modal && ($modal.style.display = "none");

			if(type === "dialog"){
				var $footer = document.querySelector('.modal-footer');
				$footer.removeEventListener('click', btnListener, false);
				$footer.removeEventListener('touchstart', btnListener, false);
			}

			window.onresize = null;
		};

	window.modal =  {
		/**
		* options = {
		*backdrop: true|false (show backdrop or not)
		*okCb: function (ok callback)
		*cancelCb: function (cancel callback)
		*
		*}
		**/

		"showDialog": function(options){
			show(options, 'dialog');
		},

		/**
		* options = {
		*backdrop: true|false  (show backdrop or not)
		*}
		**/
		"showLoading": function(options){
			show(options, 'loading');
		},

		"hide": hide
	}
	
})(window);