var http = require('http');
var url = require('url');
var qs = require('querystring');
var ho ;
var ho_date;
var  resulthtml; 
var app = http.createServer(function (request, response) {
  var _url = request.url;
  var pathname = url.parse(_url, true).pathname;
  if (pathname === '/') {
    response.writeHead(200);
    response.end(`
    <!doctype html>
    <html>
    <head>
      <title>Club News HTML생성기(2023.9.20)</title>
      <meta charset="utf-8">
    </head>
    <body>

    <h1>Club News HTML간편 생성기</h1>

    <hr>

      <form action="/post_test" method="post">
        <p>호수<input type="text" name="ho" id="ho1" placeholder="1100"></p>
        <p>날짜<input type="text" name="date" placeholder="2023년 9월 16일"></p>
        <p>공지1 제목<input type="text" name="notice1" placeholder="title" id = "notice1_title" value =""> URL <input type="text" name="notice1_url" placeholder="title" id = "notice1_url" value =""></p>
        <p>공지2 제목<input type="text" name="notice2" placeholder="title" id = "notice2_title" value =""> URL <input type="text" name="notice2_url" placeholder="title" id = "notice2_url" value =""></p>
        <p>공지3 제목<input type="text" name="notice3" placeholder="title" id = "notice3_title" value =""> URL <input type="text" name="notice3_url" placeholder="title" id = "notice3_url" value =""></p>
        <p>공지4 제목<input type="text" name="notice4" placeholder="title" id = "notice4_title" value =""> URL <input type="text" name="notice4_url" placeholder="title" id = "notice4_url" value =""></p>
        
        <hr>
        <p>공개 초안 및 의견조회 1<input type="text" name="open1" placeholder="title" > URL <input type="text" name="open1_url" placeholder="title"> 기한 <input type="text" name="open1_dr" placeholder="(기한: 2023.09.15.)"></p>
        <p>공개 초안 및 의견조회 2<input type="text" name="open2" placeholder="title" > URL <input type="text" name="open2_url" placeholder="title"> 기한 <input type="text" name="open2_dr" placeholder="(기한: 2023.09.15.)"></p>
        <p>공개 초안 및 의견조회 3<input type="text" name="open3" placeholder="title" > URL <input type="text" name="open3_url" placeholder="title"> 기한 <input type="text" name="open3_dr" placeholder="(기한: 2023.09.15.)"></p>

        <hr>     

        <p>회계기준위원회 <br> 일정제목<input type="text" name="kasb_title" placeholder="2023년 제14회 회계기준위원회" > URL <input type="text" name="kasb_title_url" placeholder="title"> 일시 <input type="text" name="ksab_title_date" placeholder="2023년 9월 15일(금)"></p>
        <p>의결안건</p> 
        <p><textarea name="ksab_title_context" rows="5" cols="33" placeholder="띄어쓰기시 <br>을 사용해주세요"></textarea> 
        <p> 보고안건</p>
      <textarea name="ksab_title2_context" rows="5" cols="33" placeholder="띄어쓰기시 <br>을 사용해주세요"></textarea>

        <hr>
        <p>지속가능성기준위원회 <br> 일정제목<input type="text" name="kssb_title" placeholder="title" > URL <input type="text" name="kssb_title_url" placeholder="title"> 일시 <input type="text" name="kssb_title_date" placeholder="2023년 9월 15일(금)"></p>
        
        <p>의결안건</p> 
        <p><textarea name="kssb_title_context" rows="5" cols="33" placeholder="title"> </textarea>
        <p> 보고안건</p>
        <textarea name="kssb_title2_context" rows="5" cols="33" placeholder="title">  </textarea>

        <hr>
        <p>K뉴스1 제목<input type="text" name="knews1" placeholder="title" id = "knews1_title" value =""> 신문사 및 일자 <input type="text" name="knews1_date" placeholder="(대한경제 2023-09-15)" id = "knews1_dateSource" value =""> URL <input type="text" name="knews1_url" placeholder="title" id = "knews1_url" value =""></p>
        <p>K뉴스2 제목<input type="text" name="knews2" placeholder="title" id = "knews2_title" value =""> 신문사 및 일자 <input type="text" name="knews2_date" placeholder="(대한경제 2023-09-15)" id = "knews2_dateSource" value =""> URL <input type="text" name="knews2_url" placeholder="title"  id = "knews2_url" value =""></p>
        <p>K뉴스3 제목<input type="text" name="knews3" placeholder="title" id = "knews3_title" value =""> 신문사 및 일자 <input type="text" name="knews3_date" placeholder="(대한경제 2023-09-15)" id = "knews3_dateSource" value =""> URL <input type="text" name="knews3_url" placeholder="title" id = "knews3_url" value =""></p>
        <p>K뉴스4 제목<input type="text" name="knews4" placeholder="title" id = "knews4_title" value =""> 신문사 및 일자 <input type="text" name="knews4_date" placeholder="(대한경제 2023-09-15)" id = "knews4_dateSource" value =""> URL <input type="text" name="knews4_url" placeholder="title" id = "knews4_url" value =""></p>
        <p>K뉴스5 제목<input type="text" name="knews5" placeholder="title" id = "knews5_title" value =""> 신문사 및 일자 <input type="text" name="knews5_date" placeholder="(대한경제 2023-09-15)" id = "knews5_dateSource" value =""> URL <input type="text" name="knews5_url" placeholder="title" id = "knews5_url" value =""></p>
        <p>K뉴스6 제목<input type="text" name="knews6" placeholder="title" id = "knews6_title" value =""> 신문사 및 일자 <input type="text" name="knews6_date" placeholder="(대한경제 2023-09-15)" id = "knews6_dateSource" value =""> URL <input type="text" name="knews6_url" placeholder="title" id = "knews6_url" value =""></p>
        <p>K뉴스7 제목<input type="text" name="knews7" placeholder="title" id = "knews7_title" value =""> 신문사 및 일자 <input type="text" name="knews7_date" placeholder="(대한경제 2023-09-15)" id = "knews7_dateSource" value =""> URL <input type="text" name="knews7_url" placeholder="title" id = "knews7_url" value =""></p>
        <p>K뉴스8 제목<input type="text" name="knews8" placeholder="title" id = "knews8_title" value =""> 신문사 및 일자 <input type="text" name="knews8_date" placeholder="(대한경제 2023-09-15)" id = "knews8_dateSource" value =""> URL <input type="text" name="knews8_url" placeholder="title" id = "knews8_url" value =""></p>
        <p>K뉴스9 제목<input type="text" name="knews9" placeholder="title" id = "knews9_title" value =""> 신문사 및 일자 <input type="text" name="knews9_date" placeholder="(대한경제 2023-09-15)" id = "knews9_dateSource" value =""> URL <input type="text" name="knews9_url" placeholder="title" id = "knews9_url" value =""></p>
        <p>K뉴스10 제목<input type="text" name="knews10" placeholder="title" id = "knews10_title" value =""> 신문사 및 일자 <input type="text" name="knews10_date" placeholder="(대한경제 2023-09-15)" id = "knews10_dateSource" value =""> URL <input type="text" name="knews10_url" placeholder="title" id = "knews10_url" value =""></p>

        <hr>
        <p>E뉴스1 제목<input type="text" name="enews1" placeholder="title" id = "enews1_title" value =""> 신문사 및 일자 <input type="text" name="enews1_date" placeholder="(IAS Plus 2023-09-14)" id = "enews1_dateSource" value =""> URL <input type="text" name="enews1_url" placeholder="title" id = "enews1_url" value =""></p>
        <p>E뉴스2 제목<input type="text" name="enews2" placeholder="title" id = "enews2_title" value =""> 신문사 및 일자 <input type="text" name="enews2_date" placeholder="(IAS Plus 2023-09-14)" id = "enews2_dateSource" value =""> URL <input type="text" name="enews2_url" placeholder="title" id = "enews2_url" value =""></p>
        <p>E뉴스3 제목<input type="text" name="enews3" placeholder="title" id = "enews3_title" value =""> 신문사 및 일자 <input type="text" name="enews3_date" placeholder="(IAS Plus 2023-09-14)" id = "enews3_dateSource" value =""> URL <input type="text" name="enews3_url" placeholder="title" id = "enews3_url" value =""></p>
        <p>E뉴스4 제목<input type="text" name="enews4" placeholder="title" id = "enews4_title" value =""> 신문사 및 일자 <input type="text" name="enews4_date" placeholder="(IAS Plus 2023-09-14)" id = "enews4_dateSource" value =""> URL <input type="text" name="enews4_url" placeholder="title" id = "enews4_url" value =""></p>
        <p>E뉴스5 제목<input type="text" name="enews5" placeholder="title" id = "enews5_title" value =""> 신문사 및 일자 <input type="text" name="enews5_date" placeholder="(IAS Plus 2023-09-14)" id = "enews5_dateSource" value =""> URL <input type="text" name="enews5_url" placeholder="title" id = "enews5_url" value =""></p>
        <p>E뉴스6 제목<input type="text" name="enews6" placeholder="title" id = "enews6_title" value =""> 신문사 및 일자 <input type="text" name="enews6_date" placeholder="(IAS Plus 2023-09-14)" id = "enews6_dateSource" value =""> URL <input type="text" name="enews6_url" placeholder="title" id = "enews6_url" value =""></p>
        <p>E뉴스7 제목<input type="text" name="enews7" placeholder="title" id = "enews7_title" value =""> 신문사 및 일자 <input type="text" name="enews7_date" placeholder="(IAS Plus 2023-09-14)" id = "enews7_dateSource" value =""> URL <input type="text" name="enews7_url" placeholder="title" id = "enews7_url" value =""></p>
        <p>E뉴스8 제목<input type="text" name="enews8" placeholder="title" id = "enews8_title" value =""> 신문사 및 일자 <input type="text" name="enews8_date" placeholder="(IAS Plus 2023-09-14)" id = "enews8_dateSource" value =""> URL <input type="text" name="enews8_url" placeholder="title" id = "enews8_url" value =""></p>
        <p>E뉴스9 제목<input type="text" name="enews9" placeholder="title" id = "enews9_title" value =""> 신문사 및 일자 <input type="text" name="enews9_date" placeholder="(IAS Plus 2023-09-14)" id = "enews9_dateSource" value =""> URL <input type="text" name="enews9_url" placeholder="title" id = "enews9_url" value =""></p>
        <p>E뉴스10 제목<input type="text" name="enews10" placeholder="title" id = "enews10_title" value =""> 신문사 및 일자 <input type="text" name="enews10_date" placeholder="(IAS Plus 2023-09-14)" id = "enews10_dateSource" value =""> URL <input type="text" name="enews10_url" placeholder="title" id = "enews10_url" value =""></p>

 


        <p><input type="submit" value = "HTML 생성" style="width:80pt;height:30pt;"

></p>
      </form>


<script type="text/javascript">

let xhttp = new XMLHttpRequest();
let xhttp2 = new XMLHttpRequest();
let xhttp3 = new XMLHttpRequest();


xhttp.onreadystatechange = function () {
	if(xhttp.readyState == 4 && xhttp.status == 200){
		jsonfunc(this.responseText); //this = xhttp
	}
}
xhttp.open("GET","http://news.kasb.store:8085/news", true);

xhttp.send();


xhttp2.onreadystatechange = function () {
	if(xhttp2.readyState == 4 && xhttp2.status == 200){
		jsonfunc2(this.responseText); //this = xhttp
	}
}
xhttp2.open("GET","http://news.kasb.store:8085/news2", true);

xhttp2.send();

xhttp3.onreadystatechange = function () {
	if(xhttp3.readyState == 4 && xhttp3.status == 200){
		jsonfunc3(this.responseText); //this = xhttp
	}
}
xhttp3.open("GET","http://news.kasb.store:8085/notice", true);

xhttp3.send();



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
</script>

    </body>
    </html>
      `);
  } else if (pathname === '/post_test') {
    var body = '';
    request.on('data', function (data) {
      body = body + data;
    });
    request.on('end', function () {
      var post = qs.parse(body);
      console.log(post);
     ho = post.ho;
      ho_date = post.date;
      var notice1 = post.notice1
      var notice1_url = post.notice1_url
      var notice2 = post.notice2
      var notice2_url = post.notice2_url
      var notice3 = post.notice3
      var notice3_url = post.notice3_url
      var notice4 = post.notice4
      var notice4_url = post.notice4_url
      var open1 = post.open1
      var open2 = post.open2
      var open3 = post.open3
      var open1_url = post.open1_url
      var open2_url = post.open2_url
      var open3_url = post.open3_url
      var open1_dr = post.open1_dr
      var open2_dr = post.open2_dr
      var open3_dr = post.open3_dr
      var kasb_title = post.kasb_title
      var kasb_url = post.kasb_title_url
      var ksab_title_context = post.ksab_title_context
      var ksab_title_date = post.ksab_title_date
      var ksab_title2_context = post.ksab_title2_context
      var kssb_title = post.kssb_title
      var kssb_url = post.kssb_title_url
      var kssb_title_date = post.kssb_title_date
      var kssb_title_context = post.kssb_title_context
      var kssb_title2_context = post.kssb_title2_context
      var knews1 = post.knews1
      var knews2 = post.knews2
      var knews3 = post.knews3
      var knews4 = post.knews4
      var knews5 = post.knews5
      var knews6 = post.knews6
      var knews7 = post.knews7
      var knews8 = post.knews8
      var knews9 = post.knews9
      var knews10 = post.knews10
      var knews1_date = post.knews1_date
      var knews2_date = post.knews2_date
      var knews3_date = post.knews3_date
      var knews4_date = post.knews4_date
      var knews5_date = post.knews5_date
      var knews6_date = post.knews6_date
      var knews7_date = post.knews7_date
      var knews8_date = post.knews8_date
      var knews9_date = post.knews9_date
      var knews10_date = post.knews10_date
      var knews1_url = post.knews1_url
      var knews2_url = post.knews2_url
      var knews3_url = post.knews3_url
      var knews4_url = post.knews4_url
      var knews5_url = post.knews5_url
      var knews6_url = post.knews6_url
      var knews7_url = post.knews7_url
      var knews8_url = post.knews8_url
      var knews9_url = post.knews9_url
      var knews10_url = post.knews10_url
      var enews1 = post.enews1
      var enews2 = post.enews2
      var enews3 = post.enews3
      var enews4 = post.enews4
      var enews5 = post.enews5
      var enews6 = post.enews6
      var enews7 = post.enews7
      var enews8 = post.enews8
      var enews9 = post.enews9
      var enews10 = post.enews10
      var enews1_date = post.enews1_date
      var enews2_date = post.enews2_date
      var enews3_date = post.enews3_date
      var enews4_date = post.enews4_date
      var enews5_date = post.enews5_date
      var enews6_date = post.enews6_date
      var enews7_date = post.enews7_date
      var enews8_date = post.enews8_date
      var enews9_date = post.enews9_date
      var enews10_date = post.enews10_date
      var enews1_url = post.enews1_url
      var enews2_url = post.enews2_url
      var enews3_url = post.enews3_url
      var enews4_url = post.enews4_url
      var enews5_url = post.enews5_url
      var enews6_url = post.enews6_url
      var enews7_url = post.enews7_url
      var enews8_url = post.enews8_url
      var enews9_url = post.enews9_url
      var enews10_url = post.enews10_url

     resulthtml = `
      <html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><link href="http://www.kasb.or.kr/images/css" rel="stylesheet" type="text/css">
      </head><body><table width="860" border="0" align="center" cellpadding="0" cellspacing="0">
        
        <tbody><tr>
          <td height="50" align="center" valign="top" background="http://www.kasb.or.kr/images/ekasbclub_img003.gif">&nbsp;</td>
        </tr>
        <tr>
          <td align="center" valign="top" background="http://www.kasb.or.kr/images/ekasbclub_img001.gif">
                <table width="750" border="0" cellspacing="0" cellpadding="0">
              <tbody><tr>
                <td width="750" height="269" align="center" valign="middle" background="http://www.kasb.or.kr/images/ekasbclub_img002.jpg">
                            <!-- 호수 및 일자 시작 -->
                            <table width="655" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                      <td height="50" valign="top" style="color:#FFFFFF; font-weight:bold; font-size:16px;">
                      <span style="font-family: &quot;나눔고딕&quot;,NanumGothic,Sans-serif;">제 ${ho}호 - ${ho_date}</span></td>
                    </tr>
                  </tbody></table>
                              <!-- 호수 및 일자 끝 -->					</td>
              </tr>
      
              <tr>
					<!-- 상단메뉴영역 시작 -->
					<td width="750" height="51" align="center" valign="middle" background="http://www.kasb.or.kr/images/ekasbclub_img004.gif" style="font-size:14px; font-weight:600;">
						<a href="http://www.kasb.or.kr/fe/accstd/NR_list.do?sortCd=K-IFRS&amp;divCd=01" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">회계기준</a>&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="http://www.kasb.or.kr/fe/prep/NR_list.do?prepSortCd=01" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">제정개정과제</a>&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="http://www.kasb.or.kr/fe/cms/contents/NR_replyMain/NR_index.do" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">회계질의</a>&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="http://www.kasb.or.kr/fe/cms/research/NR_reguid/NR_index.do" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">연구</a>&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="http://www.kasb.or.kr/fe/accstdhsty/NR_list.do?bbsCd=1065" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">자료실</a>&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="http://www.kasb.or.kr/fe/bbs/NR_list.do?bbsCd=1002" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">소통광장</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="http://www.kasb.or.kr/fe/cms/contents/NR_intro/NR_index.do" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">회계기준원안내</a>&nbsp;&nbsp;&nbsp;&nbsp;
						<a href="http://www.kasb.or.kr/fe/cms/contents/NR_guide/NR_index.do" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">이용안내</a></td>
                  <!-- 상단메뉴영역 끝 -->
				</tr>

        <tr>
					<td align="center" valign="top" background="http://www.kasb.or.kr/images/ekasbclub_img005.gif">
						<table width="748" border="0" cellspacing="0" cellpadding="0">
							<!-- 공지사항, 공개초안 상단영역 -->
                            <tbody><tr>
                                <td width="748" height="74">
                                    <table width="650" border="0" cellspacing="0" cellpadding="0" align="center">
                                        <tbody><tr>
                                            <td width="335" height="74"><img src="http://www.kasb.or.kr/images/ekasbclub_img006.gif" alt="공지사항" width="325" height="74"></td>
                                            <td width="30" height="74">&nbsp;</td>
                                            <td width="285" height="74"><img src="http://www.kasb.or.kr/images/ekasbclub_img0099.gif" alt="공개초안의견조회" width="285" height="74"></td>
                                        </tr>
                                        <tr>
                                            <td valign="top">
                                                <table width="325" border="0" cellspacing="0" cellpadding="0">

                                                    <tbody>

													<tr>
                                                        <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">1.</td>
                                                        <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${notice1_url}" style="font-size:12px; text-decoration:none; target=" _blank"=""><font color="#555">${notice1}</font></a></td>
                                                    </tr>


													<tr>
                                                        <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">2.</td>
                                                        <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${notice2_url}" style="font-size:12px; text-decoration:none; target=" _blank"=""><font color="#555">${notice2}</font></a></td>
                                                    </tr>

	<tr>
                                                        <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">3.</td>
                                                        <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${notice3_url}" style="font-size:12px; text-decoration:none; target=" _blank"=""><font color="#555">${notice3}</font></a></td>
                                                    </tr>

                                      <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">4.</td>
                                                        <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${notice4_url}" style="font-size:12px; text-decoration:none; target=" _blank"=""><font color="#555">${notice4}</font></a></td>
                                                    </tr>

                                                    
													
                                                </tbody></table>
                                                </td>
                                                <td>&nbsp;</td>
                                                <td valign="top">
                                                    <table width="285" border="0" cellspacing="0" cellpadding="0" height="191">
                                                        
    
    
                                                        <tbody>		


                                                        <tr>
                                                        <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;" height="44">1.</td>
                                                        <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;" height="44"><a href="${open1_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${open1}<BR>${open1_dr}</font></a>
                                                    </td></tr>

													
                                                    <tr>
                                                    <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;" height="44">2.</td>
                                                    <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;" height="44"><a href="${open2_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${open2}<BR>${open2_dr}</font></a>
                                                </td></tr>
                                                        

                                                <tr>
                                                <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;" height="44">3.</td>
                                                <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;" height="44"><a href="${open3_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${open3}<BR>${open3_dr}</font></a>
                                            </td></tr>
  
                                                </tbody></table>

                                                </td>
                                                </tr>
                                                <tr>
                                                    <td height="25">&nbsp;</td>
                                                    <td height="25">&nbsp;</td>
                                                    <td height="25">&nbsp;</td>
                                                </tr>
                                            </tbody></table>
                                        </td>
                                    </tr>
                                    <!-- 공지사항, 공개초안 의견조회 끝 -->
                                    <!-- 회계기준위원회, 지속가능성기준위원회 콘텐츠 시작 -->
                    </tbody></table>					</td>
                </tr>
                <tr>
                  <td height="1" align="center" valign="top" background="http://www.kasb.or.kr/images/ekasbclub_img0077.gif"></td>
                </tr>
                <tr>
                  <td align="center" valign="top">
                    <table width="650" border="0" cellspacing="0" cellpadding="0">
                      <!-- 회계기준위원회, 지속가능성기준위원회 상단영역 시작 -->
                      <tbody><tr>
                                        <td width="285" height="65"><img src="http://www.kasb.or.kr/images/ekasbclub_img0077.gif" alt="회계기준위원회" width="295" height="74"></td>
                                        <td width="30" height="65">&nbsp;</td>
                                         <td width="285" height="65"> 
        
                      
                         <img src="http://www.kasb.or.kr/images/ekasbclub_img020.gif" alt="지속가능성기준위원회" width="285" height="74">
                       
                         <!--
                         <img src="http://www.kasb.or.kr/images/ekasbclub_img010.gif" alt="회계교육" width="285" height="65" />
                       -->
                         </td>
                      </tr>
                      <!-- 회계기준위원회, 지속가능성기준위원회 상단영역 끝 
                      <!-- 회계기준위원회, 지속가능성기준위원회 콘텐츠 시작 -->
                      <tr>
                        <td valign="top"><table width="340" border="0" cellspacing="0" cellpadding="0">
        
        
                         
        <tbody><tr>
                                            <td valign="top"><span style="line-height:19px; font-size:12px; color:#555; line-height:18px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"> <a href="${kasb_url}" style="text-decoration:none; font-size:14px; font-weight:bold; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;" target="_blank"><font color="#555">${kasb_title}</font></a><br>
        - <strong>일시</strong>: ${ksab_title_date}
        
        <br>
        <div style="letter-spacing: -0.23px;"><br>
        <strong>의결안건</strong><br>
        ${ksab_title_context}
        
        <div style="letter-spacing: -0.23px;"><br>
        <strong>보고안건</strong><br>
        ${ksab_title2_context}
        
        
        <br>
        
         </div></span></td>           
         
         </tr>
						 		
         </tbody></table></td>
         <td>&nbsp;</td>
         <td valign="top"><!-- 공백영역 시작 -->
           <!-- 공백영역 끝 -->
                 
                           <table width="285" border="0" cellspacing="0" cellpadding="0">
                      
           <tbody><tr>
             <td colspan="2" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 3px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">

<a href="${kssb_url}" style="text-decoration:none; font-size:12px; font-weight:bold;" target="_blank"><font color="#555" style="font-size:14px;">${kssb_title}</font></a>
           
          <br>
- <strong>일시</strong>: ${kssb_title_date}


<br>
<div style="letter-spacing: -0.23px;"><br>
<strong>의결안건</strong><br>
${kssb_title_context}

<div style="letter-spacing: -0.23px;"><br>
<strong>보고안건</strong><br>
${kssb_title2_context}


<br>

 </div></span></td></tr>
                           
         <tr>
             <td align="center" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 3px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">
           <!--
           ㆍ
            </td>
             <td valign="top" style='line-height:18px; padding:2px 0px 3px 0px; font-family:"나눔고딕",NanumGothic,Sans-serif;'><a href="http://edu.kasb.or.kr/fe/eduPlan/NR_view.do?eduSeq=129&currentPage=1&rowPerPage=10&searchYear=2020&startDd=&endDd=&searchKey=1000&searchVal=&sort_all=Y&sortCds=1&sortCds=2&sortCds=3&sortCds=4&sortCds=5&CSRFToken=63f6ea4d-6912-442d-9a7a-160e31db446a" style="font-size:12px; text-decoration:none;" target="_blank">
           
           
           <font color="#555">[12월 17일(목) 14:00∼15:30] <br>K-IFRS 질의회신 온라인 교육 (접수중)</font></font></a>
           <!-- 
           <a href="http://edu.kasb.or.kr/fe/eduPlan/NR_list.do?sortCds=01,02,03,04,05" style='text-decoration:none; font-size:12px; font-weight:bold;' target="_blank"><font color="#555">[2020년 교육]</font></a>
           
           </td>
             </tr>
                     

         <tr>
             <td align="center" valign="top" style='font-size:12px; color:#555; line-height:18px; padding:2px 0px 3px 0px; font-family:"나눔고딕",NanumGothic,Sans-serif;'>
           <!--
           ㆍ
            </td>
             <td valign="top" style='line-height:18px; padding:2px 0px 3px 0px; font-family:"나눔고딕",NanumGothic,Sans-serif;'><a href="http://edu.kasb.or.kr/fe/eduPlan/NR_view.do?eduSeq=129&currentPage=1&rowPerPage=10&searchYear=2020&startDd=&endDd=&searchKey=1000&searchVal=&sort_all=Y&sortCds=1&sortCds=2&sortCds=3&sortCds=4&sortCds=5&CSRFToken=63f6ea4d-6912-442d-9a7a-160e31db446a" style="font-size:12px; text-decoration:none;" target="_blank">
           
           
           <font color="#555">[12월 17일(목) 14:00∼15:30] <br>K-IFRS 질의회신 온라인 교육 (접수중)</font></font></a>
           -->
           </td>
             </tr>
         <tr>
             <td align="center" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 3px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">
           <!--ㆍ
           -->
           </td>
             <td valign="top" style="line-height:18px; padding:2px 0px 3px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="http://edu.kasb.or.kr/fe/eduPlan/NR_view.do?eduSeq=128&amp;currentPage=1&amp;rowPerPage=10&amp;searchYear=2019&amp;startDd=&amp;endDd=&amp;searchKey=1000&amp;searchVal=&amp;sort_all=Y&amp;sortCds=1&amp;sortCds=2&amp;sortCds=3&amp;sortCds=4&amp;sortCds=5&amp;CSRFToken=623820c9-a6b6-4ebd-a235-094c68a3a6e0" style="font-size:12px; text-decoration:none;" target="_blank">
           <!--
           <font color="#555">[12월 11일(수) 14:00∼17:00] <br>K-IFRS 제1116호 ‘리스’ 실무이슈<br>(접수마감)</font></font></a>
           --></a></td>
             </tr>

            <!--<tr>
             <td colspan="2" valign="top" style='font-size:12px; color:#555; line-height:18px; padding:2px 0px 3px 0px; font-family:"나눔고딕",NanumGothic,Sans-serif;'><a href="http://edu.kasb.or.kr/fe/eduPlan/NR_list.do?eduSeq=&currentPage=1&rowPerPage=10&searchYear=2017&startDd=&endDd=&searchKey=1000&searchVal=&sortCds=1&CSRFToken=f9d81e76-2727-4e87-8feb-3e1ae2aae7c9" style='text-decoration:none; font-size:12px; font-weight:bold;' target="_blank"><font color="#555">[K-IFRS 제·개정 교육]</font></a></td>
             </tr>
         
           
             
            <tr>
             <td colspan="2" valign="top" style='font-size:12px; color:#555; line-height:18px; padding:2px 0px 3px 0px; font-family:"나눔고딕",NanumGothic,Sans-serif;'><a href="http://edu.kasb.or.kr/fe/eduPlan/NR_list.do?eduSeq=&currentPage=1&rowPerPage=10&searchYear=2017&startDd=&endDd=&searchKey=1000&searchVal=&sortCds=2&CSRFToken=f9d81e76-2727-4e87-8feb-3e1ae2aae7c9" style='text-decoration:none; font-size:12px; font-weight:bold;' target="_blank"><font color="#555">[원칙중심 K-IFRS 교육]</font></a></td>
             </tr>
         <tr>
             <td align="center" valign="top" style='font-size:12px; color:#555; line-height:18px; padding:2px 0px 3px 0px; font-family:"나눔고딕",NanumGothic,Sans-serif;'><b>ㆍ</b></td>
             <td valign="top" style='line-height:18px; padding:2px 0px 3px 0px; font-family:"나눔고딕",NanumGothic,Sans-serif;'><a href="http://edu.kasb.or.kr/fe/eduPlan/NR_view.do?eduSeq=109&currentPage=1&rowPerPage=10&searchYear=2017&startDd=&endDd=&searchKey=1000&searchVal=&sort_all=Y&sortCds=1&sortCds=2&sortCds=3&sortCds=4&sortCds=5&CSRFToken=ca6ef9cd-99ce-4b4b-b520-c5ab9da0e247" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">12월 14일(목) 2시-5시 <br>원칙중심
K-IFRS 교육: 개념체계 기반 접근법(FBT) - 자산(접수중)
                             </tr>
-->


                           </tbody></table>
                           </td>
       </tr>
       <!-- 회계기준위원회, 지속가능성기준위원회 콘텐츠 끝 -->
       <tr>
                         <td height="25">&nbsp;</td>
                         <td height="25">&nbsp;</td>
                         <td height="25">&nbsp;</td>
       </tr>
     </tbody></table>					</td>
 </tr>
 <tr>
 <td align="center" valign="top" background="http://www.kasb.or.kr/images/ekasbclub_img005.gif"><table width="650" border="0" cellspacing="0" cellpadding="0">
             <!-- 회계뉴스 상단영역 -->
             <tbody><tr>
               <td width="335" height="74"><img src="http://www.kasb.or.kr/images/ekasbclub_img011.gif" alt="회계뉴스" width="335" height="72"></td>
               <td width="30" height="74">&nbsp;</td>
               <td width="285" height="74">&nbsp;</td>
             </tr>
             <!-- 회계뉴스 끝 -->
             <!-- 회계뉴스 콘텐츠 시작 -->
             <tr>
               <td height="44"><img src="http://www.kasb.or.kr/images/ekasbclub_img012.gif" alt="국내뉴스" width="335" height="44"></td>
               <td height="44">&nbsp;</td>
               <td height="44"><img src="http://www.kasb.or.kr/images/ekasbclub_img013.gif" alt="국외뉴스" width="285" height="44"></td>
             </tr>
             <tr>
               <td valign="top"><table width="325" border="0" cellspacing="0" cellpadding="0">





<tbody>




<tr>	  						  						 
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">1.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${knews1_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${knews1}<BR>${knews1_date}</font></a></td>
</tr>

<tr>	  						  						 
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">2.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${knews2_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${knews2}<br> ${knews2_date}</font></a></td>
                   
</tr>

<tr>	  						  						 
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">3.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${knews3_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${knews3}<br> ${knews3_date}</font></a></td>
                   
</tr>



<tr>	  						  						 
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">4.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${knews4_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${knews4}<br> ${knews4_date}</font></a></td>
</tr>

<tr>	  						  						 
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">5.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${knews5_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${knews5}<br> ${knews5_date}</font></a></td>
</tr>

<tr>	  						  						 
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">6.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${knews6_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${knews6}<br> ${knews6_date}</font></a></td>
</tr>

<tr>	  						  						 
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">7.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${knews7_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${knews7}<br> ${knews7_date}</font></a></td>
</tr>


<tr>	  						  						 
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">8.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${knews8_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${knews8}<br> ${knews8_date}</font></a></td>
</tr>

<tr>	  						  						 
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">9.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${knews9_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${knews9}<br> ${knews9_date}</font></a></td>
</tr>


<tr>	  						  						 
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">10.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${knews10_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${knews10}<br> ${knews10_date}</font></a></td>
</tr>
















     </tbody></table></td>
               <td>&nbsp;</td>
               
   <td valign="top"><table width="285" border="0" cellspacing="0" cellpadding="0">



<tbody>


<tr>
                      
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">1.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${enews1_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${enews1}
                   <BR>${enews1_date}</font></a></td></tr> 



                   <tr>
                      
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">2.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${enews2_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${enews2}
                   <BR>${enews2_date}</font></a></td></tr> 

                   <tr>
                      
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">3.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${enews3_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${enews3}
                   <BR>${enews3_date}</font></a></td></tr>                    

                   <tr>
                      
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">4.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${enews4_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${enews4}
                   <BR>${enews4_date}</font></a></td></tr> 

                   <tr>
                      
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">5.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${enews5_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${enews5}
                   <BR>${enews5_date}</font></a></td></tr> 



                   <tr>
                      
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">6.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${enews6_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${enews6}
                   <BR>${enews6_date}</font></a></td></tr> 

                   <tr>
                      
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">7.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${enews7_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${enews7}
                   <BR>${enews7_date}</font></a></td></tr>            
                   
                   <td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">8.</td>
                   <td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;"><a href="${enews8_url}" style="font-size:12px; text-decoration:none;" target="_blank"><font color="#555">${enews8}
                   <BR>${enews8_date}</font></a></td></tr>    

<tr>

           




                          
      </tbody></table></td>
             </tr>
             <!--회계뉴스 콘텐츠 끝 -->
             <tr>
               <td height="25">&nbsp;</td>
               <td height="25">&nbsp;</td>
               <td height="25">&nbsp;</td>
             </tr>
           </tbody></table></td>
</tr>
<tr>
 <td align="center" valign="top" background="http://www.kasb.or.kr/images/ekasbclub_img015.gif">
   <table width="650" border="0" cellspacing="0" cellpadding="0">
     <tbody><tr>
       <td width="650" align="center" valign="middle" height="40">
       </td>
     </tr>
     <tr>
       <td width="650" align="center" valign="middle" height="39">
         <a href="http://www.kasb.or.kr/" target="_blank"><img src="http://www.kasb.or.kr/images/ekasbclub_img016.gif" alt="한국회계기준원 홈페이지" style="border:0"></a>&nbsp;&nbsp;&nbsp;
         <a href="http://edu.kasb.or.kr/" target="_blank"><img src="http://www.kasb.or.kr/images/ekasbclub_img017.gif" alt="회계교육포털" style="border:0"></a>&nbsp;&nbsp;&nbsp;
         <a href="https://www.youtube.com/channel/UCySa4nG05sklQSmTbK3U8Zw" target="_blank"><img src="http://www.kasb.or.kr/images/ekasbclub_img018.gif" alt="한국회계기준원 유튜브" style="border:0"></a>								</td>
     </tr>
     <tr>
       <td width="650" align="center" valign="middle" height="90" style="font-size:11px; color:#777; font-family:&quot;나눔고딕&quot;,NanumGothic,Sans-serif;">
                           e-KASB Club New의 수신을 원치 않으실 경우, 회원정보관리(<a href="http://www.kasb.or.kr/fe/memInfo/login/NR_login.do" target="_blank" style="color:#0066ff;">바로가기</a>)에서 뉴스레터 수신거부를 체크해주시기 바랍니다.<br>
                           본 메일 수신을 원하시는 경우 한국회계기준원 홈페이지에서 <a href="http://www.kasb.or.kr/fe/memInfo/join/NR_join.do" target="_blank" style="color:#0066ff;">회원가입</a>을 하신 후 뉴스레터 수신에 체크해주시기 바랍니다.<br>
                           서울시 중구 세종대로 39 대한상공회의소빌딩 3층 한국회계기준원<br>
                       Tel) 02-6050-0150  /  Mail) <a href="mailto:webmaster@kasb.or.kr" target="_blank" style="color:#0066ff;">webmaster@kasb.or.kr</a>								</td>
     </tr>
   </tbody></table>
 </td>
</tr>
</tbody></table>
</td>
</tr>
<tr>
<td align="center" valign="top" background="http://www.kasb.or.kr/images/ekasbclub_img001.gif">
<img src="http://www.kasb.or.kr/images/ekasbclub_img014.gif" width="760" height="35" alt="">
</td>
</tr>
<tr>
<td height="50" align="center" valign="top" background="http://www.kasb.or.kr/images/ekasbclub_img003.gif">&nbsp;</td>
</tr>
</tbody></table>


<br>
            </body>
            </html>
            

`

  response.end(`<a href="http://news.kasb.store:3000/download" download="${ho_date}">${ho_date} ${ho}호 뉴스레터 HTML 다운로드</a>`+resulthtml);

    });
  } 
  
  else if (pathname === '/download') {
	  console.log(resulthtml);
	    response.end(`${resulthtml}
	
`);

  }
  
  else {
    response.writeHead(404);
    response.end('Not found');
  }
});
app.listen(3000);