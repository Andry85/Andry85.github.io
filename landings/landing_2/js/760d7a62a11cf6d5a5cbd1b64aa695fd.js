(function() {
	var _id = "760d7a62a11cf6d5a5cbd1b64aa695fd";
	while (document.getElementById("timer" + _id)) _id = _id + "0";
	document.write("<div id='timer" + _id + "' style='min-width:301px;height:74px;'></div>");
	var _t = document.createElement("script");
	_t.src = "js/timer.js";
	var _f = function(_k) {
		var l = new MegaTimer(_id, {
			"view": [0, 1, 1, 1],
			"type": {
				"currentType": "3",
				"params": {
					"weekdays": [1, 1, 1, 1, 1, 1, 1],
					"usertime": true,
					"time": "00:00",
					"tz": -180,
					"hours": "24",
					"minutes": "00"
				}
			},
			"design": {
				"type": "plate",
				"params": {
					"round": "6",
					"background": "gradient",
					"background-color": ["#000000", "#ababab"],
					"effect": "flipchart",
					"space": "0",
					"separator-margin": "4",
					"number-font-family": {
						"family": "Comfortaa",
						"link": "<link href='https://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
					},
					"number-font-size": "32",
					"number-font-color": "#ffffff",
					"padding": "14",
					"separator-on": false,
					"separator-text": ":",
					"text-on": true,
					"text-font-family": {
						"family": "Comfortaa",
						"link": "<link href='https://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
					},
					"text-font-size": "12",
					"text-font-color": "#000000"
				}
			},
			"designId": 3,
			"theme": "white",
			"width": 301,
			"height": 74
		});
		if (_k != null) l.run();
	};
	_t.onload = _f;
	_t.onreadystatechange = function() {
		if (_t.readyState == "loaded") _f(1);
	};
	var _h = document.head || document.getElementsByTagName("head")[0];
	_h.appendChild(_t);
}).call(this);