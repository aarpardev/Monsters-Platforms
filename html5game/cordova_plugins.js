cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cocoon-plugin-common.Cocoon",
        "file": "plugins/cocoon-plugin-common/www/cocoon.js",
        "pluginId": "cocoon-plugin-common",
        "runs": true
    },
    {
        "id": "cocoon-plugin-canvasplus-common.CanvasPlus",
        "file": "plugins/cocoon-plugin-canvasplus-common/www/cocoon_canvasplus.js",
        "pluginId": "cocoon-plugin-canvasplus-common",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ludei.installlocation.android": "1.0.0",
    "com.ludei.usericon.android": "1.0.0",
    "com.ludei.defaultres.android": "1.0.1",
    "com.ludei.splash.android": "1.1.0",
    "cocoon-plugin-common": "1.0.2",
    "cocoon-plugin-canvasplus-common": "1.0.3",
    "com.ludei.canvasplus.android": "2.3.8",
    "com.ludei.canvasplus.ios": "2.3.8"
};
// BOTTOM OF METADATA
});