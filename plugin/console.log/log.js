var showAsideAsLog = {
			show: function(el){
				var text = showAsideAsLog._get(el);
				if ( text ){
					console.log(text);
				}
			},
			_get: function(el){
				if(el.getElementsByClassName('notes')[0]){
					return el.getElementsByClassName('notes')[0].innerHTML;
				}
				return '';
			}
};

(function(){
	showAsideAsLog.show(Reveal.getCurrentSlide());
	Reveal.addEventListener( 'slidechanged', function( event ) {
    	showAsideAsLog.show(Reveal.getCurrentSlide());
	} );
})();




