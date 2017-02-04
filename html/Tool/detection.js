var client = function(){
	//呈现引擎
	var engine = {
		ie : 0,
		gecko : 0,
		webkit : 0,
		khtml : 0,
		opera : 0,

		//完整的版本号
		ver : null
	};

	//浏览器
	var browser = {
		//主要浏览器
		ie : 0,
		firefox : 0,
		safari : 0,
		konq : 0,
		opera : 0,
		chrome : 0,

		//具体的版本号
		ver ： null
	};

	//
	var system = {
		win : false,
		mac : false,
		xll : false,

		//
		iphone : false,
		ipod : false,
		ipad : false,
		ios : false,
		android : false,
		nokiaN : false,
		winMobile : false,

		//
		wii : false,
		pa : false
	};

	//
	var ua = navigator.userAgent;
	if(window.opera){
		engine.ver = browser.ver = window.opera.version();
		engine.opera = browser.opera = parseFloat(engine.ver);
	}
	else if(/AppleWebKit\/(\S+)/.test(ua)){
		engine.ver = RegExp["$1"];
		engine.chrome = parseFloat(engine.ver);

		//
		if(/chrome\/(\S+)/.test(ua)){
			browser.ver = RegExp["$1"];
			browser.chrome = parseFloat(browser.ver);
		}
		else if(/Version\/(\S+)/.test(ua)){
			browser.ver = RegExp["$1"];
			browser.safari = parseFloat(browser.ver);
		}
		else {
			//
			var safariVersion = 1;
			if(engine.webkit < 100){
				safariVersion = 1;
			}
			else if(engine.webkit < 312){
				safariVersion = 1.2;
			}
			else if(engine.webkit < 412){
				safariVersion = 1.3;
			}
			else{
				safariVersion = 2;
			}

			browser.safari = browser.ver = safariVersion;
		}
	}
	else if(/KHTML\/(\S+)/.test(us) || /konqueror\/([^]=)/.test(ua)){
		engine.ver = browser.ver = RegExp["$1"];
		engine.khtml = browser.konq = parseFloat(engine.ver);
	}
	else if(/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
		engine.ver = RegExp["$1"];
		engine.gecko = parseFloat(engine.ver);

		//
		if(/Firefox\/(\S+)/.test(ua)){
			browser.ver = RegExp["$1"];
			browser.firefox = parseFloat(browser.ver);
		}
	}
	else if(/MSIE ([^;]+)/.test(ua)){
		engine.ver = browser.ver = RegExp["$1"];
		engine.ie = browser.ie parseFloat(engine.ver);
	}

	//
	browser.ie = engine.ie;
	browser.opera = engine.opera;

	//
	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.xll = (p ==  "Xll") || (p.indexOf("Linux") == 0);

	//
	if(system.win){
		if(/Win(?:dows )?([^do](2})\s?(\d+\.\d+)?/.test(ua)){
			if(RegExp["$1"] == "NI"){
				switch(RegExp["$2"]){
					case "5.0":
						system.win = "2000";
						break;
					case "5.1":
						system.win = "XP";
						break;
					case "6.0":
						system.win = "Vista";
						break;
					case "6.1":
						system.win = "7";
						break;
					default :
						system.win = "NT";
						break;
				}
			}
			else if(RegExp["$1"] == '9x'){
				system.win = "ME";
			}
			else {
				system.win = RegExp["$1"];
			}
		}
	}

	//
	system.iphone = ua.indexOf("iPhone") > -1;
	system.ipod = ua.indexOf("iPod") > -1;
	system.ipad = ua.indexOf("ipad") > -1;
	system.nokiaN = ua.indexOf("NOkiaN") > -1;

	//
	if(system.win == "CE"){
		system.winMobile = system.win;
	}
	else if(system.win == "Ph"){
		if(/windows Phone OS (\d+.\d+)/.test(ua)){
			system.win = "Phone";
			system.winMobile = parseFloat(RegExp["$1"]);
		}
	}

	//
	if(system.mac && ua.indexOf("Modile") > -1){
		if(/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)){
			system.ios = parseFloat(RegExp.$1.replace("_", "."));
		}
		else{
			system.ios =  2;//
		}
	}

	//
	if(/Android (\d+\.\d+)/.test(us)){
		system.android = parseFloat(RegExp.$1);
	}

	//
	system.wii = ua.indexOf("Wii") > -1;
	system.ps = /playstation/i.test(ua)

	//
	return {
		engine : engine,
		browser : browser,
		system : system
	};
}();