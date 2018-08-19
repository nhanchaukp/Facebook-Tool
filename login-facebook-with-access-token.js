javascript:!function(){
	var token=prompt("Nhập Access Token");
	get('https://graph.facebook.com/app?access_token='+token, getID);
	function get(url, callback){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
		xhr.onreadystatechange = function() {
			if(this.readyState == XMLHttpRequest.DONE) 
				callback(this.response);
		};
		xhr.send();
	}
	function getID(data){
		data=JSON.parse(data);
		if(data.error!=undefined){
			alert(data.error.message);
			return false;
		}
		get('https://api.facebook.com/method/auth.getSessionforApp?access_token='+token+'&format=json&generate_session_cookies=1&new_app_id='+data.id, getCookie);
	}
	function getCookie(data){
		data=JSON.parse(data);
		var cookie = data.session_cookies;
		if(data.error_msg!=undefined){
			alert(data.error_msg);
			return false;
		}
		cookie.forEach(function(elm, idx, arr){
			var cook = "";
			Object.keys(elm).forEach(function (key) {
				if(key=="xs")elm[key]=encodeURIComponent(elm[key]);
			   cook += key+"="+elm[key]+";";
			});
			cook = cook.replace('name=', '').replace(';value=', '=').replace('httponly=true;','');
			document.cookie=cook;
		});
		location.href="https://fb.com";
	}
}();
