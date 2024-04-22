const myModule = require('mainSc.js');
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
      <title>Club News HTML생성기(2024.4.12)</title>
      <meta charset="utf-8">
      <style>
        .inline-div {
            display: inline; /* div를 인라인 요소로 변경 */
            cursor: pointer;  /* 클릭 가능한 요소임을 나타내기 위해 커서 변경 */
            background-color: lightblue; /* 배경색 설정 */
            width: 50px; /* 너비 설정 */
            text-align: center; /* 텍스트 중앙 정렬 */
        }
        .content-div {
            margin-bottom: 10px; /* 하단 마진 설정 */
        }
</style>
    </head>
    <body>

    <h1>Club News HTML간편 생성기</h1>
        <p>2024.4.21 : 공개초안 칸 삭제 기능 추가</p>
        <p>2024.4.14 : 서버이관(라즈베리파이에서 카페24클라우드)</p>
	<p>2024.4.10 : 젠킨스 연동</p>
	<p>2024.3.28 : 공개 초안 및 의견조회 추가</p>
    	<p>2024.2.24 : 자동호수 계산, 날짜 기능 추가</p>
    <hr>

      <form action="/post_test" method="post">
        <p>호수<input type="text" name="ho" id="ho1" placeholder="1100"></p>
        <p>날짜<input type="text" name="date" id="ekasb_date" placeholder="2023년 9월 16일"></p>
        <p>공지1 제목<input type="text" name="notice1" placeholder="title" id = "notice1_title" value =""> URL <input type="text" name="notice1_url" placeholder="title" id = "notice1_url" value =""></p>
        <p>공지2 제목<input type="text" name="notice2" placeholder="title" id = "notice2_title" value =""> URL <input type="text" name="notice2_url" placeholder="title" id = "notice2_url" value =""></p>
        <p>공지3 제목<input type="text" name="notice3" placeholder="title" id = "notice3_title" value =""> URL <input type="text" name="notice3_url" placeholder="title" id = "notice3_url" value =""></p>
        <p>공지4 제목<input type="text" name="notice4" placeholder="title" id = "notice4_title" value =""> URL <input type="text" name="notice4_url" placeholder="title" id = "notice4_url" value =""></p>
        
        <hr>
        <div class="content-div" id = "openT1"><input type="text" name="open1n" id="open1n"  value ="1." style="width: 10px;">공개 초안 및 의견조회 1<input type="text" name="open1" id="open1" placeholder="title" value =""> URL <input type="text" name="open1_url"  id="open1_url" placeholder="title" value =""> 기한 <input type="text" name="open1_dr" id="open1_dr" placeholder="(기한: 2023.09.15.)" value ="">
	<div id="clickableDiv1"  class="inline-div" style="cursor: pointer;  background-color: lightblue; width: 50px; text-align: center;"> 삭제</div></div>
        <div class="content-div" id = "openT2"><input type="text" name="open2n" id="open2n"  value ="2." style="width: 10px;">공개 초안 및 의견조회 2<input type="text" name="open2" id="open2" placeholder="title" value =""> URL <input type="text" name="open2_url"  id="open2_url"placeholder="title"> 기한 <input type="text" name="open2_dr" id="open2_dr" placeholder="(기한: 2023.09.15.)">
	<div id="clickableDiv2"  class="inline-div" style="cursor: pointer;  background-color: lightblue; width: 50px; text-align: center;"> 삭제</div></div>
        <div class="content-div" id = "openT3"><input type="text" name="open3n" id="open3n"  value ="3." style="width: 10px;">공개 초안 및 의견조회 3<input type="text" name="open3" id="open3"placeholder="title" value =""> URL <input type="text" name="open3_url"  id="open3_url"placeholder="title"> 기한 <input type="text" name="open3_dr"  id="open3_dr" placeholder="(기한: 2023.09.15.)">
	   <div id="clickableDiv3"  class="inline-div" style="cursor: pointer;  background-color: lightblue; width: 50px; text-align: center;"> 삭제</div> </div>
     
	
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


<script src="/mainSc.js"></script>

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
      var open1n = post.open1n
      var open2n = post.open2n
      var open3n = post.open3n
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
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>한국회계기준원 KAI - EMS</title>
</head>
<body>
	<table width="860" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
		<tbody>
			<tr>
				<td height="50" valign="top" background="https://mail.kasb.or.kr/webzine/ekasbclub_img003.gif">&nbsp;</td>
			</tr>
			<tr>
				<td valign="top" background="https://mail.kasb.or.kr/webzine/ekasbclub_img001.gif">
					<table cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
						<tbody>
							<tr>
								<td width="55"></td>
								<td width="750">
									<table width="750" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
										<tbody>
											<tr>
												<td height="269" valign="middle" background="https://mail.kasb.or.kr/webzine/ekasbclub_img002.jpg">
													<!-- 호수 및 일자 시작 -->
													<table width="655" cellspacing="0" cellpadding="0">
														<tbody>
															<tr>
																<td width="50">&nbsp;</td>
																<td height="50" valign="top" style="color:#FFFFFF; font-weight:bold; font-size:16px;">
																	<span style="font-family: '나눔고딕',NanumGothic,Sans-serif;">제 ${ho}호 - ${ho_date}</span>
																</td>
															</tr>
														</tbody>
													</table>
													<!-- 호수 및 일자 끝 -->
												</td>
											</tr>
				
											<tr>
												<td height="51" valign="middle" background="https://mail.kasb.or.kr/webzine/ekasbclub_img004.gif" style="font-size:14px; font-weight:600;">
													<table width="750" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
														<tr>
															<td width="50">&nbsp;</td>
															<td width="650">
																<table width="650" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
																	<tr>
																		<!-- 상단메뉴영역 시작 -->
																		<td style="text-align:center;"><a href="http://www.kasb.or.kr/fe/accstd/NR_list.do?sortCd=K-IFRS&divCd=01" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:'나눔고딕',NanumGothic,Sans-serif;">회계기준</a></td>
																		<td style="text-align:center;"><a href="http://www.kasb.or.kr/fe/prep/NR_list.do?prepSortCd=01" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:'나눔고딕',NanumGothic,Sans-serif;">제정개정과제</a></td>
																		<td style="text-align:center;"><a href="http://www.kasb.or.kr/fe/cms/contents/NR_replyMain/NR_index.do" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:'나눔고딕',NanumGothic,Sans-serif;">회계질의</a></td>
																		<td style="text-align:center;"><a href="http://www.kasb.or.kr/fe/cms/research/NR_reguid/NR_index.do" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:'나눔고딕',NanumGothic,Sans-serif;">연구</a></td>
																		<td style="text-align:center;"><a href="http://www.kasb.or.kr/fe/accstdhsty/NR_list.do?bbsCd=1065" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:'나눔고딕',NanumGothic,Sans-serif;">자료실</a></td>
																		<td style="text-align:center;"><a href="http://www.kasb.or.kr/fe/bbs/NR_list.do?bbsCd=1002" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:'나눔고딕',NanumGothic,Sans-serif;">소통광장</a></td>
																		<td style="text-align:center;"><a href="http://www.kasb.or.kr/fe/cms/contents/NR_intro/NR_index.do" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:'나눔고딕',NanumGothic,Sans-serif;">회계기준원안내</a></td>
																		<td style="text-align:center;"><a href="http://www.kasb.or.kr/fe/cms/contents/NR_guide/NR_index.do" target="_blank" style="text-decoration:none; color:#FFFFFF; font-family:'나눔고딕',NanumGothic,Sans-serif;">이용안내</a></td>
																		<!-- 상단메뉴영역 끝 -->
																	</tr>
																</table>
															</td>
															<td width="50">&nbsp;</td>
														</tr>
													</table>
												</td>
											</tr>
											<tr>
												<td background="https://mail.kasb.or.kr/webzine/ekasbclub_img005.gif">
													<table width="750" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
														<tbody>
															<tr>
																<td width="50">&nbsp;</td>
																<td width="650">
																	<table width="650" cellspacing="0" cellpadding="0">
																		<tbody>
																			<tr>
																				<td width="335" height="74"><img src="https://mail.kasb.or.kr/webzine/ekasbclub_img006.gif" alt="공지사항" width="325" height="74"></td>
																				<td width="30" height="74">&nbsp;</td>
																				<td width="285" height="74"><img src="https://mail.kasb.or.kr/webzine/ekasbclub_img0099.gif" alt="공개초안의견조회" width="285" height="74"></td>
																			</tr>
																			<tr>
																				<td valign="top">
																					<table width="325" cellspacing="0" cellpadding="0">
																						<tbody>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">1.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${notice1_url}" style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${notice1}</span>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									2.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${notice2_url}" style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${notice2}</span>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									3.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${notice3_url}" style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${notice3}</span>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									4.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${notice4_url}" style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">
																											${notice4}
																										</span>
																									</a>
																								</td>
																							</tr>
																							
																						</tbody>
																					</table>
																				</td>
																				<td>&nbsp;</td>
																				<td valign="top">
																					<table width="285" cellspacing="0" cellpadding="0" height="191">
																						<tbody>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;" height="44">${open1n}</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;" height="44"><a href="${open1_url}" style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${open1}<br>${open1_dr}</span>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;" height="44">${open2n}</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;" height="44"><a href="${open2_url}" style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${open2}<br>${open2_dr}</span>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;" height="44">${open3n}</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;" height="44"><a href="${open3_url}" style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${open3}<br>${open3_dr}
																										</span>
																									</a>
																								</td>
																							</tr>
																						</tbody>
																					</table>
				
																				</td>
																			</tr>
																			<tr>
																				<td height="25">&nbsp;</td>
																				<td height="25">&nbsp;</td>
																				<td height="25">&nbsp;</td>
																			</tr>
																		</tbody>
																	</table>
																</td>
																<td width="50">&nbsp;</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
											<tr>
												<td valing="top">
													<table width="750" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
														<tbody>
															<tr>
																<td width="50"></td>
																<td width="650">
																	<table width="650" cellspacing="0" cellpadding="0">
																		<!-- 회계기준위원회, 지속가능성기준위원회 상단영역 시작 -->
																		<tbody>
																			<tr>
																				<td width="285" height="65"><img src="https://mail.kasb.or.kr/webzine/ekasbclub_img0077.gif" alt="회계기준위원회" width="295" height="74"></td>
																				<td width="30" height="65">&nbsp;</td>
																				<td width="285" height="65"><img src="https://mail.kasb.or.kr/webzine/ekasbclub_img020.gif" alt="지속가능성기준위원회" width="285" height="74"></td>
																			</tr>
																			<tr>
																				<td valign="top">
																					<table width="340" cellspacing="0" cellpadding="0">
																						<tbody>
																							<tr>
																								<td valign="top">
																									<div style="line-height:19px; font-size:12px; color:#555; line-height:18px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																										<a href="${kasb_url}" style="text-decoration:none; font-size:14px; font-weight:bold; font-family:'나눔고딕',NanumGothic,Sans-serif;" target="_blank">
																											<span style="color:#555;">${kasb_title}</span>
																										</a><br>
																										- <strong>일시</strong>: ${ksab_title_date}
																										<br>
																										<div style="letter-spacing: -0.23px;"><br>
																											<strong>의결안건</strong><br>
																										    ${ksab_title_context}
																											<div style="letter-spacing: -0.23px;"><br>
																												<strong>보고안건</strong><br>
																											 ${ksab_title2_context}
																											</div>
																										</div>
																									</div>
																								</td>
																							</tr>
								
																						</tbody>
																					</table>
																				</td>
																				<td>&nbsp;</td>
																				<td valign="top">
																					<table width="285" cellspacing="0" cellpadding="0">
																						<tbody>
																							<tr>
																								<td colspan="2" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 3px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${kssb_url}" style="text-decoration:none; font-size:12px; font-weight:bold;" target="_blank">
																										<span style="color:#555;font-size:14px;">${kssb_title}</span>
																									</a>
																									<br>
																									- <strong>일시</strong>: ${kssb_title_date}
																									<br>
																									<div style="letter-spacing: -0.23px;">
																										<strong>의결안건</strong><br>
																										${kssb_title_context}
																										<div style="letter-spacing: -0.23px;">
																											<strong>보고안건</strong><br>
																										${kssb_title2_context}
																										</div>
																								</div></td>
																							</tr>
																							<tr>
																								<td valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 3px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;"></td>
																							</tr>
																							<tr>
																								<td valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 3px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;"></td>
																								<td valign="top" style="line-height:18px; padding:2px 0px 3px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="http://edu.kasb.or.kr/fe/eduPlan/NR_view.do?eduSeq=128&currentPage=1&rowPerPage=10&searchYear=2019&startDd=&endDd=&searchKey=1000&searchVal=&sort_all=Y&sortCds=1&sortCds=2&sortCds=3&sortCds=4&sortCds=5&CSRFToken=623820c9-a6b6-4ebd-a235-094c68a3a6e0" style="font-size:12px; text-decoration:none;" target="_blank"></a>
																								</td>
																							</tr>
								
								
																						</tbody>
																					</table>
																				</td>
																			</tr>
																			<!-- 회계기준위원회, 지속가능성기준위원회 콘텐츠 끝 -->
																			<tr>
																				<td height="25">&nbsp;</td>
																				<td height="25">&nbsp;</td>
																				<td height="25">&nbsp;</td>
																			</tr>
																		</tbody>
																	</table>
																</td>
																<td width="50"></td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
											<tr>
												<td background="https://mail.kasb.or.kr/webzine/ekasbclub_img005.gif">
													<table width="750" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
														<tbody>
															<tr>
																<td width="50">&nbsp;</td>
																<td width="650">
																	<table width="650" cellspacing="0" cellpadding="0">
																		<!-- 회계뉴스 상단영역 -->
																		<tbody>
																			<tr>
																				<td width="335" height="74"><img src="https://mail.kasb.or.kr/webzine/ekasbclub_img011.gif" alt="회계뉴스" width="335" height="72"></td>
																				<td width="30" height="74">&nbsp;</td>
																				<td width="285" height="74">&nbsp;</td>
																			</tr>
																			<!-- 회계뉴스 끝 -->
																			<!-- 회계뉴스 콘텐츠 시작 -->
																			<tr>
																				<td height="44"><img src="https://mail.kasb.or.kr/webzine/ekasbclub_img012.gif" alt="국내뉴스" width="335" height="44"></td>
																				<td height="44">&nbsp;</td>
																				<td height="44"><img src="https://mail.kasb.or.kr/webzine/ekasbclub_img013.gif" alt="국외뉴스" width="285" height="44"></td>
																			</tr>
																			<tr>
																				<td valign="top">
																					<table width="325" cellspacing="0" cellpadding="0">
																						<tbody>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									1.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${knews1_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${knews1}<br>${knews1_date}</span>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									2.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${knews2_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${knews2}<br>${knews2_date}</span>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									3.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${knews3_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${knews3}<br>${knews3_date}</span>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									4.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${knews4_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${knews4}<br>${knews4_date}
																										</span>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									5.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${knews5_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${knews5}<br>${knews5_date}</span>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									6.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${knews6_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${knews6}<br>${knews6_date}</span>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									7.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${knews7_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${knews7} <br> ${knews7_date} </span>
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									8.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${knews8_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${knews8} <br> ${knews8_date}</span>
																									</a>
																								</td>
																							</tr>
				<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									9.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${knews9_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${knews9} <br> ${knews9_date}</span>
																									</a>
																								</td>
																							</tr>

																											<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									10.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${knews10_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${knews10} <br> ${knews10_date}</span>
																									</a>
																								</td>
																							</tr>
	
																						</tbody>
																					</table>
																				</td>
																				<td>&nbsp;</td>
																				<td valign="top">
																					<table width="285" cellspacing="0" cellpadding="0">
																						<tbody>
																							<tr>
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									1.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${enews1_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${enews1}
																											<br>${enews1_date}
																										</span>
																									</a>
																								</td>
																							</tr>
																	
																							<tr>
																	
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									2.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${enews2_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${enews2}
																											<br>${enews2_date}
																										</span>
																									</a>
																								</td>
																							</tr>
																	
																							<tr>
																	
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									3.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${enews3_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${enews3}
																											<br>${enews3_date}
																										</span>
																									</a>
																								</td>
																							</tr>
																	
																							<tr>
																	
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									4.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${enews4_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${enews4}
																											<br>${enews4_date}
																										</span>
																									</a>
																								</td>
																							</tr>

																									<tr>
																	
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									5.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${enews5_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${enews5}
																											<br>${enews5_date}
																										</span>
																									</a>
																								</td>
																							</tr>

																									<tr>
																	
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									6.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${enews6_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${enews6}
																											<br>${enews6_date}
																										</span>
																									</a>
																								</td>
																							</tr>

																									<tr>
																	
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									7.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${enews7_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${enews7}
																											<br>${enews7_date}
																										</span>
																									</a>
																								</td>
																							</tr>

																											<tr>
																	
																								<td width="15" valign="top" style="font-size:12px; color:#555; line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									8.</td>
																								<td width="270" valign="top" style="line-height:18px; padding:2px 0px 15px 0px; font-family:'나눔고딕',NanumGothic,Sans-serif;">
																									<a href="${enews7_url}"
																										style="font-size:12px; text-decoration:none;" target="_blank">
																										<span style="color:#555;">${enews8}
																											<br>${enews8_date}
																										</span>
																									</a>
																								</td>
																							</tr>

																						
																	
																							<tr>
																	
																	
																	
																	
																	
																	
																	
																							</tr>
																						</tbody>
																					</table>
																				</td>
																			</tr>
																			<!--회계뉴스 콘텐츠 끝 -->
																			<tr>
																				<td height="25">&nbsp;</td>
																				<td height="25">&nbsp;</td>
																				<td height="25">&nbsp;</td>
																			</tr>
																		</tbody>
																	</table>
																</td>
																<td width="50">&nbsp;</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
											<tr>
												<td valign="top" background="https://mail.kasb.or.kr/webzine/ekasbclub_img015.gif">
													<table width="750" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
														<tbody>
															<tr>
																<td colspan="3" valign="top" height="40"></td>
															</tr>
															<tr>
																<td width="50"></td>
																<td valign="top">
																	<table width="650" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
																		<tbody>
																			<tr>
																				<td valign="top" height="39">
																					<table width="650" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
																						<tr>
																							<td valign="top" style="text-align:center;"><a href="http://www.kasb.or.kr/" target="_blank"><img src="https://mail.kasb.or.kr/webzine/ekasbclub_img016.gif" alt="한국회계기준원 홈페이지" style="border:0"></a></td>
																							<td valign="top" style="text-align:center;"><a href="http://edu.kasb.or.kr/" target="_blank"><img src="https://mail.kasb.or.kr/webzine/ekasbclub_img017.gif" alt="회계교육포털" style="border:0"></a></td>
																							<td valign="top" style="text-align:center;"><a href="https://www.youtube.com/channel/UCySa4nG05sklQSmTbK3U8Zw" target="_blank"><img src="https://mail.kasb.or.kr/webzine/ekasbclub_img018.gif" alt="한국회계기준원 유튜브" style="border:0"></a></td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																			<tr>
																				<td valign="middle" height="90" style="font-size:11px; color:#777; font-family:'나눔고딕',NanumGothic,Sans-serif;text-align:center;">
																					e-KASB Club New의 수신을 원치 않으실 경우, 회원정보관리(<a href="http://www.kasb.or.kr/fe/memInfo/login/NR_login.do" target="_blank" style="color:#0066ff;">바로가기</a>)에서 뉴스레터 수신거부를
																					체크해주시기 바랍니다.<br> 
																					본 메일 수신을 원하시는 경우 한국회계기준원 홈페이지에서 <a href="http://www.kasb.or.kr/fe/memInfo/join/NR_join.do" target="_blank" style="color:#0066ff;">회원가입</a>을 
																					하신 후 뉴스레터 수신에 체크해주시기 바랍니다.<br>
																					서울시 중구 세종대로 39 대한상공회의소빌딩 3층 한국회계기준원<br>
																					Tel) 02-6050-0150 / Mail) <a href="mailto:webmaster@kasb.or.kr" target="_blank" style="color:#0066ff;">webmaster@kasb.or.kr</a>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</td>
																<td width="50"></td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
								<td width="55"></td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td valign="top" background="https://mail.kasb.or.kr/webzine/ekasbclub_img001.gif" style="padding-left:50px;"> <img src="https://mail.kasb.or.kr/webzine/ekasbclub_img014.gif" width="760" height="35" alt=""></td>
			</tr>
			<tr>
				<td height="50" valign="top" background="https://mail.kasb.or.kr/webzine/ekasbclub_img003.gif">&nbsp;</td>
			</tr>
		</tbody>
	</table>
</body>
</html>
`

  response.end(resulthtml);

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
app.listen(80);
