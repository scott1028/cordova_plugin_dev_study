cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.book/www/book.js",
        "id": "com.book.book",
        "clobbers": [
            "scotts_tool"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.book": "0.0.1"
}
// BOTTOM OF METADATA
});