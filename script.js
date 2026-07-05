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

});function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","💗","🌸"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

setInterval(createHeart,350);

const oldShow=show;

show=function(next){

document.querySelectorAll(".card").forEach(card=>{

card.classList.remove("active");

});

next.classList.add("active");

if(next===finish){

for(let i=0;i<60;i++){

setTimeout(createHeart,i*80);

}

}

window.scrollTo({

top:0,

behavior:"smooth"

});

};// ---------------- LANGUAGE ----------------

const texts = {

ru: {

title: "Дариға,<br><br>ты пойдёшь со мной<br>на свидание?",

yes: "Да! 💖",

no: "Нет(",

hint: '(кнопку "Нет" лучше не нажимать 😼)',

q2: "Как поедем?",

a21: "Закажу Комфорт+",

a22: "Сам заеду за тобой 🚗",

a23: "Пойдём пешком 🤝",

q3: "Что будем кушать?",

q4: "Кто платит?",

pay1: "Ну я...",

pay2: "Конечно, ты ❤️",

q5: "Насколько сильно ждёшь нашу встречу?",

finish: "Спасибо, Дариға 🥹",

meet: "Тогда встречаемся в Демалыс күні",

love: "С любовью,<br>Бекзат ❤️"

},

kz: {

title: "Дариға,<br><br>менімен<br>кездесуге шығасың ба?",

yes: "Иә ❤️",

no: "Жоқ",

hint: "(«Жоқ» батырмасын ұстай алмайсың 😼)",

q2: "Қалай барамыз?",

a21: "Такси шақырамын",

a22: "Өзім алып кетемін 🚗",

a23: "Жаяу барайық",

q3: "Не жейміз?",

q4: "Кім төлейді?",

pay1: "Мен...",

pay2: "Сен төлейсің ❤️",

q5: "Кездесуді қаншалықты күтесің?",

finish: "Рақмет, Дариға 🥹",

meet: "Онда Демалыс күні кездесеміз",

love: "Ізгі тілекпен,<br>Бекзат ❤️"

}

};

const langBtns=document.querySelectorAll(".lang");

langBtns.forEach((btn,index)=>{

btn.onclick=()=>{

langBtns.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

const t=index===0?texts.ru:texts.kz;

document.querySelector("#page1 h1").innerHTML=t.title;
yesBtn.innerHTML=t.yes;
noBtn.innerHTML=t.no;
document.querySelector(".hint").innerHTML=t.hint;

document.querySelector("#page2 h1").innerHTML=t.q2;

const opts=document.querySelectorAll("#page2 .option");
opts[0].innerHTML=t.a21;
opts[1].innerHTML=t.a22;
opts[2].innerHTML=t.a23;

document.querySelector("#page3 h1").innerHTML=t.q3;

document.querySelector("#page4 h1").innerHTML=t.q4;
mePay.innerHTML=t.pay1;
document.querySelectorAll(".correct")[1].innerHTML=t.pay2;

document.querySelector("#page5 h1").innerHTML=t.q5;

document.querySelector("#finish h2").innerHTML=t.finish;
document.querySelector("#finish p").innerHTML=t.meet;
document.querySelector("#finish h3").innerHTML=t.love;

};

});const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

if(!playing){

music.play();

musicBtn.innerHTML="🔊";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="🎵";

playing=false;

}

};

const oldFinishShow=show;

show=function(next){

document.querySelectorAll(".card").forEach(card=>{

card.classList.remove("active");

});

next.classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

if(next===finish){

for(let i=0;i<80;i++){

setTimeout(createHeart,i*70);

}

finish.innerHTML=`

<div class="finalHeart">❤️</div>

<h1>Дариға</h1>

<h2>Кездесеміз ❤️</h2>

<p style="font-size:22px;margin-top:20px;">
📅 Демалыс күні
</p>

<p style="font-size:20px;margin-top:10px;">
🚗 Өзім алып кетемін
</p>

<p style="font-size:20px;margin-top:10px;">
🍽️ Кез келген тамақты таңдай аласың
</p>

<p style="font-size:20px;margin-top:10px;">
💳 Әрине, мен төлеймін 😄
</p>

<h2 style="margin-top:30px;">
Сені күтемін ❤️
</h2>

<h3 style="margin-top:20px;">
Бекзат
</h3>

`;

}

};const welcome=document.getElementById("welcome");

const startSite=document.getElementById("startSite");

startSite.onclick=()=>{

welcome.style.opacity="0";

setTimeout(()=>{

welcome.style.display="none";

},700);

if(music){

music.play().catch(()=>{});

playing=true;

musicBtn.innerHTML="🔊";

}};
