var closeWaterMarkC = setTimeout(function () {
    closeWaterMark();
},2000);

function setWaterMark(){
	document.write("<div id='WaterMark'><div class='bg'></div><div class='logo'><a href='/index.html'><img src='/source/amaze-2.7.2/img/logo.png'/></a><div id='waterMark_main'><br><div class='loadText'>绛夊緟鍔犺浇....</div><br><br></div></div></div>");
    var start = setInterval(function(){
        $('#WaterMark').height($('#WaterMark').height() + 10);
        if($('#WaterMark').height()>200){
        	clearInterval(start);
		}
    },10);
}

function closeWaterMark(){
    var end = setInterval(function(){
        $('#WaterMark').width($('#WaterMark').width() - 6);
        $('#WaterMark').height($('#WaterMark').height() - 6);

        if($('#WaterMark').height()<=0){
            clearInterval(end);
            document.getElementById("WaterMark").remove();
            console.log("end");
        }
    },9);
}

function checkNum(){
    if($('.switch-anim').prop('checked')){
        console.log("��敤鎻掍欢");
    }else{
        console.log("鍏抽棴");
    }
}

var bp = document.createElement('script');
var curProtocol = window.location.protocol.split(':')[0];
if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
}
else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
}
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(bp, s);�
