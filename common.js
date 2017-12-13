
var navigatorMessageMap = {
	'mac': 'macos',
  'iphone': 'macos',
  'win': 'windows'
};

var platform = navigator.platform.toLowerCase();
console.log(platform);
for (var key in navigatorMessageMap) {
	key = key.toLowerCase();
	var version = navigatorMessageMap[key];
  
  if (platform.indexOf(key) >= 0){
		//
	}
}