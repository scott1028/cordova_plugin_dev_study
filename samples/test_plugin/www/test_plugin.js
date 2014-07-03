/**
 * cordova Web Intent plugin
 * Copyright (c) Boris Smus 2010
 *
 */
 (function(cordova){
    window.plugins = window.plugins || {};
    window.plugins.echo = window.echo = function(data){
    	alert(123);
    };
})(window.PhoneGap || window.Cordova || window.cordova);