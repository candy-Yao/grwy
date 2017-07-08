var marq=document.getElementById("marq");
var bd=document.getElementById("bd");
var shadow=document.getElementById("shadow");
shadow.innerHTML=bd.innerHTML;
function mq(){
	if(bd.clientWidth-marq.scrollLeft==0)
		marq.scrollLeft=0
	else
		marq.scrollLeft++;
setTimeout("mq()",10);
}
mq();