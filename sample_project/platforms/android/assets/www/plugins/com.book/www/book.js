cordova.define("com.book.book", function(require, exports, module) { var exec = require('cordova/exec');

// 會塞到 plugin.xml <clobbers target="CDVbook" /> 的 CDVbook
exports.book123 = function(arg0, success, error) {
    exec(success, error, "book", "coolMethod", [arg0]);
};

// 不能這樣寫, 抓不到
// window.book123 = function(arg0, success, error) {
//     exec(success, error, "book", "coolMethod", [arg0]);
// };

});
