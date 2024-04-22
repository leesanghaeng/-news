document.getElementById('clickableDiv1').addEventListener('click', function() {
    document.getElementById('openT1').style.display = "none";  // Input 필드 비활성화
    document.getElementById('open1n').value = "";  // Input 필드 비활성화
    document.getElementById('open1').value = "";  // Input 필드 비활성화
    document.getElementById('open1_url').value = "";  // Input 필드 비활성화
    document.getElementById('open1_dr').value = "";  // Input 필드 비활성화


});
document.getElementById('clickableDiv2').addEventListener('click', function() {
    document.getElementById('openT2').style.display = "none";  // Input 필드 비활성화
    document.getElementById('open2n').value = "";  // Input 필드 비활성화
    document.getElementById('open2').value = "";  // Input 필드 비활성화
    document.getElementById('open2_url').value = "";  // Input 필드 비활성화
    document.getElementById('open2_dr').value = "";  // Input 필드 비활성화

});
document.getElementById('clickableDiv3').addEventListener('click', function() {
    document.getElementById('openT3').style.display = "none";  // Input 필드 비활성화
    document.getElementById('open3n').value = "";  // Input 필드 비활성화
    document.getElementById('open3').value = "";  // Input 필드 비활성화
    document.getElementById('open3_url').value = "";  // Input 필드 비활성화
    document.getElementById('open3_dr').value = "";  // Input 필드 비활성화

});


	document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var year = today.getFullYear(); // 년도
    var month = today.getMonth() + 1; // 월 (0부터 시작하므로 1을 더함)
    var day = today.getDate(); // 일
    var formattedDate = year + '년 ' + month + '월 ' + day + '일'; // '년-월-일' 형식
    document.getElementById('ekasb_date').value = formattedDate;
});


let xhttp = new XMLHttpRequest();
let xhttp2 = new XMLHttpRequest();
let xhttp3 = new XMLHttpRequest();
let xhttp4 = new XMLHttpRequest();
let xhttp5 = new XMLHttpRequest();
let cw_url = "http://211.42.155.100:8085"

xhttp.onreadystatechange = function () {
	if(xhttp.readyState == 4 && xhttp.status == 200){
		jsonfunc(this.responseText); //this = xhttp
	}
}
xhttp.open("GET",cw_url + "/news", true);

xhttp.send();


xhttp2.onreadystatechange = function () {
	if(xhttp2.readyState == 4 && xhttp2.status == 200){
		jsonfunc2(this.responseText); //this = xhttp
	}
}
xhttp2.open("GET",cw_url +"/news2", true);

xhttp2.send();

xhttp3.onreadystatechange = function () {
	if(xhttp3.readyState == 4 && xhttp3.status == 200){
		jsonfunc3(this.responseText); //this = xhttp
	}
}
xhttp3.open("GET",cw_url +"/notice", true);

xhttp3.send();

xhttp4.onreadystatechange = function () {
	if(xhttp4.readyState == 4 && xhttp4.status == 200){
		jsonfunc4(this.responseText); //this = xhttp
	}
}
xhttp4.open("GET",cw_url +"/ekasb", true);

xhttp4.send();

xhttp5.onreadystatechange = function () {
	if(xhttp5.readyState == 4 && xhttp5.status == 200){
		jsonfunc5(this.responseText); //this = xhttp
	}
}
xhttp5.open("GET",cw_url +"/opinion", true);

xhttp5.send()


function jsonfunc4( jsonText4 ) {

	let json4 = JSON.parse(jsonText4); // String -> json으로 변환
	

	let ekasb_num = json4[0]['num'];
		document.getElementById('ho1').value = ekasb_num
	
	}


function jsonfunc3( jsonText3 ) {

	let json3 = JSON.parse(jsonText3); // String -> json으로 변환
	

	let notice1_title = json3[0]['title'];
	let notice1_url = json3[0]['url'];
	
	document.getElementById('notice1_title').value = notice1_title;
	document.getElementById('notice1_url').value = notice1_url;

	let notice2_title = json3[1]['title'];
	let notice2_url = json3[1]['url'];
	
	document.getElementById('notice2_title').value = notice2_title;
	document.getElementById('notice2_url').value = notice2_url;
	
	let notice3_title = json3[2]['title'];
	let notice3_url = json3[2]['url'];
	
	document.getElementById('notice3_title').value = notice3_title;
	document.getElementById('notice3_url').value = notice3_url;
	
	let notice4_title = json3[3]['title'];
	let notice4_url = json3[3]['url'];
	
	document.getElementById('notice4_title').value = notice4_title;
	document.getElementById('notice4_url').value = notice4_url;
	
	
	
	
	
	
	}


function jsonfunc2( jsonText2 ) {

	let json2 = JSON.parse(jsonText2); // String -> json으로 변환
	

	let enews1_title = json2[0]['title'];
	let enews1_date = json2[0]['date'];
	let enews1_source = json2[0]['source'];
	let enews1_url = json2[0]['url'];
	let enews1_dateSource = "("+enews1_source +"\u00a0\"+ enews1_date+")";
	
	document.getElementById('enews1_title').value = enews1_title;
	document.getElementById('enews1_dateSource').value = enews1_dateSource;
	document.getElementById('enews1_url').value = enews1_url;
	
	let enews2_title = json2[1]['title'];
	let enews2_date = json2[1]['date'];
	let enews2_source = json2[1]['source'];
	let enews2_url = json2[1]['url'];
	let enews2_dateSource = "("+enews2_source +"\u00a0\"+ enews2_date+")";
	
	document.getElementById('enews2_title').value = enews2_title;
	document.getElementById('enews2_dateSource').value = enews2_dateSource;
	document.getElementById('enews2_url').value = enews2_url;

	let enews3_title = json2[2]['title'];
	let enews3_date = json2[2]['date'];
	let enews3_source = json2[2]['source'];
	let enews3_url = json2[2]['url'];
	let enews3_dateSource = "("+enews3_source +"\u00a0\"+ enews3_date+")";
	
	document.getElementById('enews3_title').value = enews3_title;
	document.getElementById('enews3_dateSource').value = enews3_dateSource;
	document.getElementById('enews3_url').value = enews3_url;

	let enews4_title = json2[3]['title'];
	let enews4_date = json2[3]['date'];
	let enews4_source = json2[3]['source'];
	let enews4_url = json2[3]['url'];
	let enews4_dateSource = "("+enews4_source +"\u00a0\"+ enews4_date+")";
	
	document.getElementById('enews4_title').value = enews4_title;
	document.getElementById('enews4_dateSource').value = enews4_dateSource;
	document.getElementById('enews4_url').value = enews4_url;

	let enews5_title = json2[4]['title'];
	let enews5_date = json2[4]['date'];
	let enews5_source = json2[4]['source'];
	let enews5_url = json2[4]['url'];
	let enews5_dateSource = "("+enews5_source +"\u00a0\"+ enews5_date+")";
	
	document.getElementById('enews5_title').value = enews5_title;
	document.getElementById('enews5_dateSource').value = enews5_dateSource;
	document.getElementById('enews5_url').value = enews5_url;

	let enews6_title = json2[5]['title'];
	let enews6_date = json2[5]['date'];
	let enews6_source = json2[5]['source'];
	let enews6_url = json2[5]['url'];
	let enews6_dateSource = "("+enews6_source +"\u00a0\"+ enews6_date+")";
	
	document.getElementById('enews6_title').value = enews6_title;
	document.getElementById('enews6_dateSource').value = enews6_dateSource;
	document.getElementById('enews6_url').value = enews6_url;

	let enews7_title = json2[6]['title'];
	let enews7_date = json2[6]['date'];
	let enews7_source = json2[6]['source'];
	let enews7_url = json2[6]['url'];
	let enews7_dateSource = "("+enews7_source +"\u00a0\"+ enews7_date+")";
	
	document.getElementById('enews7_title').value = enews7_title;
	document.getElementById('enews7_dateSource').value = enews7_dateSource;
	document.getElementById('enews7_url').value = enews7_url;

	let enews8_title = json2[7]['title'];
	let enews8_date = json2[7]['date'];
	let enews8_source = json2[7]['source'];
	let enews8_url = json2[7]['url'];
	let enews8_dateSource = "("+enews8_source +"\u00a0\"+ enews8_date+")";
	
	document.getElementById('enews8_title').value = enews8_title;
	document.getElementById('enews8_dateSource').value = enews8_dateSource;
	document.getElementById('enews8_url').value = enews8_url;

	let enews9_title = json2[8]['title'];
	let enews9_date = json2[8]['date'];
	let enews9_source = json2[8]['source'];
	let enews9_url = json2[8]['url'];
	let enews9_dateSource = "("+enews9_source +"\u00a0\"+ enews9_date+")";
	
	document.getElementById('enews9_title').value = enews9_title;
	document.getElementById('enews9_dateSource').value = enews9_dateSource;
	document.getElementById('enews9_url').value = enews9_url;

	let enews10_title = json2[9]['title'];
	let enews10_date = json2[9]['date'];
	let enews10_source = json2[9]['source'];
	let enews10_url = json2[9]['url'];
	let enews10_dateSource = "("+enews10_source +"\u00a0\"+ enews10_date+")";
	
	document.getElementById('enews10_title').value = enews10_title;
	document.getElementById('enews10_dateSource').value = enews10_dateSource;
	document.getElementById('enews10_url').value = enews10_url;
	}

function jsonfunc( jsonText ) {

	let json = JSON.parse(jsonText); // String -> json으로 변환
	
	let knews1_title = json[0]['title'];
	let knews1_date = json[0]['date'];
	let knews1_source = json[0]['source'];
	let knews1_url = json[0]['url'];
	let knews1_dateSource = "("+knews1_source +"\u00a0\"+ knews1_date+")";
	
	document.getElementById('knews1_title').value = knews1_title;
	document.getElementById('knews1_dateSource').value = knews1_dateSource;
	document.getElementById('knews1_url').value = knews1_url;

	let knews2_title = json[1]['title'];
	let knews2_date = json[1]['date'];
	let knews2_source = json[1]['source'];
	let knews2_url = json[1]['url'];
	let knews2_dateSource = "("+knews2_source +"\u00a0\"+ knews2_date+")";
	
	document.getElementById('knews2_title').value = knews2_title;
	document.getElementById('knews2_dateSource').value = knews2_dateSource;
	document.getElementById('knews2_url').value = knews2_url;

	let knews3_title = json[2]['title'];
	let knews3_date = json[2]['date'];
	let knews3_source = json[2]['source'];
	let knews3_url = json[2]['url'];
	let knews3_dateSource = "("+knews3_source +"\u00a0\"+ knews3_date+")";
	
	document.getElementById('knews3_title').value = knews3_title;
	document.getElementById('knews3_dateSource').value = knews3_dateSource;
	document.getElementById('knews3_url').value = knews3_url;

	let knews4_title = json[3]['title'];
	let knews4_date = json[3]['date'];
	let knews4_source = json[3]['source'];
	let knews4_url = json[3]['url'];
	let knews4_dateSource = "("+knews4_source +"\u00a0\"+ knews4_date+")";
	
	document.getElementById('knews4_title').value = knews4_title;
	document.getElementById('knews4_dateSource').value = knews4_dateSource;
	document.getElementById('knews4_url').value = knews4_url;

	let knews5_title = json[4]['title'];
	let knews5_date = json[4]['date'];
	let knews5_source = json[4]['source'];
	let knews5_url = json[4]['url'];
	let knews5_dateSource = "("+knews5_source +"\u00a0\"+ knews5_date+")";
	
	document.getElementById('knews5_title').value = knews5_title;
	document.getElementById('knews5_dateSource').value = knews5_dateSource;
	document.getElementById('knews5_url').value = knews5_url;

	let knews6_title = json[5]['title'];
	let knews6_date = json[5]['date'];
	let knews6_source = json[5]['source'];
	let knews6_url = json[5]['url'];
	let knews6_dateSource = "("+knews6_source +"\u00a0\"+ knews6_date+")";
	
	document.getElementById('knews6_title').value = knews6_title;
	document.getElementById('knews6_dateSource').value = knews6_dateSource;
	document.getElementById('knews6_url').value = knews6_url;

	let knews7_title = json[6]['title'];
	let knews7_date = json[6]['date'];
	let knews7_source = json[6]['source'];
	let knews7_url = json[6]['url'];
	let knews7_dateSource = "("+knews7_source +"\u00a0\"+ knews7_date+")";
	
	document.getElementById('knews7_title').value = knews7_title;
	document.getElementById('knews7_dateSource').value = knews7_dateSource;
	document.getElementById('knews7_url').value = knews7_url;

	let knews8_title = json[7]['title'];
	let knews8_date = json[7]['date'];
	let knews8_source = json[7]['source'];
	let knews8_url = json[7]['url'];
	let knews8_dateSource = "("+knews8_source +"\u00a0\"+ knews8_date+")";
	
	document.getElementById('knews8_title').value = knews8_title;
	document.getElementById('knews8_dateSource').value = knews8_dateSource;
	document.getElementById('knews8_url').value = knews8_url;

	let knews9_title = json[8]['title'];
	let knews9_date = json[8]['date'];
	let knews9_source = json[8]['source'];
	let knews9_url = json[8]['url'];
	let knews9_dateSource = "("+knews9_source +"\u00a0\"+ knews9_date+")";
	
	document.getElementById('knews9_title').value = knews9_title;
	document.getElementById('knews9_dateSource').value = knews9_dateSource;
	document.getElementById('knews9_url').value = knews9_url;

	let knews10_title = json[9]['title'];
	let knews10_date = json[9]['date'];
	let knews10_source = json[9]['source'];
	let knews10_url = json[9]['url'];
	let knews10_dateSource = "("+knews10_source +"\u00a0\"+ knews10_date+")";
	
	document.getElementById('knews10_title').value = knews10_title;
	document.getElementById('knews10_dateSource').value = knews10_dateSource;
	document.getElementById('knews10_url').value = knews10_url;


}

function jsonfunc5( jsonText5 ) {

	let json5 = JSON.parse(jsonText5); // String -> json으로 변환
	

	let open1_title = json5[0]['title'];
	let open1_date = json5[0]['date'];
	let open1_url= json5[0]['ref'];

		document.getElementById('open1').value = open1_title
		document.getElementById('open1_dr').value = "("+open1_date+")"
		document.getElementById('open1_url').value = open1_url


	let open2_title = json5[1]['title'];
	let open2_date = json5[1]['date'];
	let open2_url= json5[1]['ref'];

		document.getElementById('open2').value = open2_title
		document.getElementById('open2_dr').value = "("+open2_date+")"
		document.getElementById('open2_url').value = open2_url


	let open3_title = json5[2]['title'];
	let open3_date = json5[2]['date'];
	let open3_url= json5[2]['ref'];

		document.getElementById('open3').value = open3_title
		document.getElementById('open3_dr').value = "("+open3_date+")"
		document.getElementById('open3_url').value = open3_url

	//        <p>공개 초안 및 의견조회 1<input type="text" name="open1" id="open1" placeholder="title" > URL <input type="text" name="open1_url"  id="open1_url" placeholder="title"> 기한 <input type="text" name="open1_dr" id="open1_dr" placeholder="(기한: 2023.09.15.)"></p>

	}
