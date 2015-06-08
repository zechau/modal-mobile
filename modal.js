;(function(global){
	"use strict";
	
	var $backdrop, 
		type, 
		btnListener,
		resizeListener,
		show = function(options, t){
			options = options || {};
			type = options.type = t;


			//默认显示背景
			if(options.backdrop !== false){
				$backdrop = document.createElement('div');
				$backdrop.className = "modal-backdrop";
				document.body.appendChild($backdrop);
			}

			if(type){
				var $modal = document.querySelector(".modal-" + type);

				if($modal){
					$modal.style.display = "block";//要先显示，否则offsetWidth 为0

					if(type === "dialog"){
						//垂直居中
						document.querySelector('.modal-footer').addEventListener('click', btnListener = function(e){

							if(e.target.getAttribute("data-btn") === "ok" ){
								options.okCb && options.okCb();
							} else {
								options.cancelCb && options.cancelCb();
							}

							hide();
							
						}, false);
					}

					//窗口改变时重新定位窗口
					window.onresize = function() {
						$modal.style.left = (window.innerWidth - $modal.offsetWidth) / 2 + "px";
						if(type === "dialog"){
							$modal.style.top = (window.innerHeight - $modal.offsetHeight) / 2 + "px";
						}
					};

					//立即触发以定位窗口位置
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
				document.querySelector('.modal-footer').removeEventListener('click', btnListener, false);
			}

			window.onresize = null;
		};

	window.modal =  {
		/**
		* options = {
		*backdrop: true|false 是否显示蒙层
		*okCb: function 确认按钮回调
		*cancelCb: function 取消按钮回调
		*
		*}
		**/
		"showDialog": function(options){
			show(options, 'dialog');
		},

		/**
		* options = {
		*backdrop: true|false 是否显示蒙层
		*}
		**/
		"showLoading": function(options){
			show(options, 'loading');
		},

		"hide": hide
	}
	
})(window);