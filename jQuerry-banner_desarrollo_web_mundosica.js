(function($){
		$.bannerDevWebSica = function(el){
				var base = this;
				base.$el = $(el);
				base.el = el;
				base.$el.data("bannerDevWebSica", base);
				base.init = function(){
						base.$el.click(function() {
							window.location = 'http://www.mundosica.com/';
						});
				};
				// Run initializer
				base.init();
		};
		
		$.fn.bannerDevWebSica = function(){
				return this.each(function(){
						(new $.bannerDevWebSica(this));
				});
		};
		
})(jQuery);
