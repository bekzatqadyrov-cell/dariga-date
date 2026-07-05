const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");
const page4=document.getElementById("page4");
const page5=document.getElementById("page5");
const finish=document.getElementById("finish");

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");

const taxi=document.getElementById("taxi");
const mePay=document.getElementById("mePay");

const slider=document.getElementById("slider");
const percent=document.getElementById("percent");

function show(next){

document.querySelectorAll(".card").forEach(card=>{

card.classList.remove("active");

});

next.classList.add("active");

window.scrollTo(0,0);

}

yesBtn.onclick=()=>{

show(page2);

};

document.querySelector(".correct").onclick=()=>{

show(page3);

};

document.querySelectorAll(".food").forEach(btn=>{

btn.onclick=()=>{

show(page4);

};

});

document.querySelectorAll(".correct")[1].onclick=()=>{

show(page5);

};

slider.oninput=()=>{

percent.innerHTML=slider.value+"%";

if(slider.value==100){

setTimeout(()=>{

show(finish);

},500);

}

};function moveButton(btn){

const maxX=window.innerWidth-180;
const maxY=window.innerHeight-90;

const x=Math.random()*maxX;
const y=Math.random()*maxY;

btn.style.position="fixed";
btn.style.left=x+"px";
btn.style.top=y+"px";
btn.style.zIndex="9999";

if(navigator.vibrate){
navigator.vibrate(30);
}

}

["mouseenter","touchstart","click"].forEach(event=>{

noBtn.addEventListener(event,()=>{

moveButton(noBtn);

});

});

["mouseenter","touchstart","click"].forEach(event=>{

taxi.addEventListener(event,()=>{

moveButton(taxi);

});

});

["mouseenter","touchstart","click"].forEach(event=>{

mePay.addEventListener(event,()=>{

moveButton(mePay);

});

});

document.addEventListener("mousemove",(e)=>{

const btns=[noBtn,taxi,mePay];

btns.forEach(btn=>{

if(btn.offsetParent===null) return;

const rect=btn.getBoundingClientRect();

const dx=e.clientX-(rect.left+rect.width/2);
const dy=e.clientY-(rect.top+rect.height/2);

const distance=Math.sqrt(dx*dx+dy*dy);

if(distance<120){

moveButton(btn);

}

});

});
