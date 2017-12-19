
var platform=navigator.platform.toLowerCase();
if(/^mac/.test(platform)){
	hello('Mac OS','http://www.gifmania.ca/Animated-Gifs-Technology/Animated-Images-Computing/Animations-Apple/Mac-Os/Mas-Os-X-Particles-89694.gif');
}
	else if(/^iphone/.test(platform)){
		hello('IOS','https://research.shu.ac.uk/mmvl/viewfinder/macos.gif')
	}
	else if(/^win/.test(platform)){
			hello('Windows','http://file.mobilmusic.ru/b6/b7/50/811527.gif')
		 }
	else if(/^linux/.test(platform)){
		hello('linux','http://blee.ajpeterslearningsystems.com/Images/linux.gif');
	}
	else if(/^android/){
		hello('Android','https://cdn-images-1.medium.com/max/1600/1*3x1QE3VzG5MWi5Qk6C-HLQ.gif');
	}

function hello(OS,url)
{
	var $h1=document.createElement('h1');
		$h1.innerText="Hello from "+OS;
	var $img=document.createElement('img');
		$img.setAttribute('src',url);
		 document.body.append($h1);
		 document.body.append($img);
}