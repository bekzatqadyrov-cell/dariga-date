
const cards = document.querySelectorAll(".card");

const welcome = document.getElementById("welcome");
const start = document.getElementById("start");

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const wrongBtns = document.querySelectorAll(".wrong");
const nextBtns = document.querySelectorAll(".next");

const foods = document.querySelectorAll(".food");

const slider = document.getElementById("slider");
const percent = document.getElementById("percent");

const hearts = document.querySelector(".hearts");

let current = 0;

function show(index){

cards.forEach(card=>{

card.classList.remove("active");

});

cards[index].classList.add("active");

current=index;

window.scrollTo({

top:0,

behavior:"smooth"

});

}

start.onclick=()=>{

welcome.style.opacity="0";

setTimeout(()=>{

welcome.style.display="none";

},600);

};

yes.onclick=()=>{

show(1);

};

nextBtns[0].onclick=()=>{

show(2);

};

foods.forEach(food=>{

food.onclick=()=>{

show(3);

};

});

nextBtns[1].onclick=()=>{

show(4);

};

slider.oninput=()=>{

percent.innerHTML=slider.value+"%";

if(Number(slider.value)===100){

setTimeout(()=>{

show(5);

},400);

}

};

function move(btn){

const x=Math.random()*(window.innerWidth-170);

const y=Math.random()*(window.innerHeight-90);

btn.style.position="fixed";

btn.style.left=x+"px";

btn.style.top=y+"px";

btn.style.zIndex="99999";

}

["mouseenter","touchstart","click"].forEach(event=>{

no.addEventListener(event,()=>{

move(no);

});

});

wrongBtns.forEach(btn=>{

["mouseenter","touchstart","click"].forEach(event=>{

btn.addEventListener(event,()=>{

move(btn);

});

});

});
// ❤️ Ұшатын жүректер

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*30)+"px";

heart.style.animationDuration=(4+Math.random()*3)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,300);

// 🎉 Финалда көп жүрек

const observer=new MutationObserver(()=>{

if(current===5){

for(let i=0;i<80;i++){

setTimeout(createHeart,i*70);

}

}

});

observer.observe(document.body,{

subtree:true,

childList:true

});

// 📳 Вибрация

function vibrate(){

if(navigator.vibrate){

navigator.vibrate(25);

}

}

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

vibrate();

});

});

// ✨ Батырма анимациясы

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.animate([

{

transform:"scale(1)"

},

{

transform:"scale(.92)"

},

{

transform:"scale(1)"

}

],{

duration:180,

fill:"forwards"

});

});

});

// 📱 Қате батырмалар жақындағанда қашады

document.addEventListener("mousemove",(e)=>{

[no,...wrongBtns].forEach(btn=>{

const rect=btn.getBoundingClientRect();

const dx=e.clientX-(rect.left+rect.width/2);

const dy=e.clientY-(rect.top+rect.height/2);

const distance=Math.sqrt(dx*dx+dy*dy);

if(distance<120){

move(btn);

}

});

});

// 📱 Телефонға арналған

document.addEventListener("touchmove",()=>{

[no,...wrongBtns].forEach(btn=>{

move(btn);

});

});
// =========================
// 🌍 Қазақша / Орысша
// =========================

const texts = {
    kz: {
        q1: "Дариға,<br><br>менімен<br>кездесуге шығасың ба?",
        yes: "Иә 💖",
        no: "Жоқ",

        q2: "Қалай барамыз?",
        q3: "Не жейміз?",
        q4: "Кім төлейді?",
        q5: "Кездесуді қаншалықты күтесің?",

        finishTitle: "Рақмет ❤️",
        finish1: "📅 Демалыс күні",
        finish2: "🚗 Өзім алып кетемін",
        finish3: "🍽️ Қалағаныңды таңдайсың",
        finish4: "❤️ Сені күтемін",
        finish5: "Бекзат"
    },

    ru: {
        q1: "Дариға,<br><br>пойдёшь со мной<br>на свидание?",
        yes: "Да 💖",
        no: "Нет",

        q2: "Как поедем?",
        q3: "Что будем кушать?",
        q4: "Кто платит?",
        q5: "Насколько ждёшь встречу?",

        finishTitle: "Спасибо ❤️",
        finish1: "📅 В выходной",
        finish2: "🚗 Я заеду за тобой",
        finish3: "🍽️ Выбирай любое блюдо",
        finish4: "❤️ Буду ждать",
        finish5: "Бекзат"
    }
};

let lang = "kz";

function setLang(){

const t = texts[lang];

document.querySelector("#q1 h1").innerHTML = t.q1;

yes.innerHTML = t.yes;

no.innerHTML = t.no;

document.querySelector("#q2 h1").innerHTML = t.q2;

document.querySelector("#q3 h1").innerHTML = t.q3;

document.querySelector("#q4 h1").innerHTML = t.q4;

document.querySelector("#q5 h1").innerHTML = t.q5;

const finish = document.querySelector("#finish");

finish.querySelector("h2").innerHTML = t.finishTitle;

const p = finish.querySelectorAll("p");

p[0].innerHTML = t.finish1;
p[1].innerHTML = t.finish2;
p[2].innerHTML = t.finish3;
p[3].innerHTML = t.finish4;

finish.querySelector("h3").innerHTML = t.finish5;

}

document.addEventListener("keydown",(e)=>{

if(e.key==="l"){

lang = lang==="kz" ? "ru":"kz";

setLang();

}

});

// =========================
// 🎉 Конфетти
// =========================

function confetti(){

for(let i=0;i<150;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.width="8px";

c.style.height="8px";

c.style.borderRadius="50%";

c.style.background=`hsl(${Math.random()*360},100%,60%)`;

c.style.zIndex="999999";

c.style.pointerEvents="none";

document.body.appendChild(c);

const x=(Math.random()-0.5)*500;

const y=window.innerHeight+200;

c.animate([

{
transform:"translate(0,0)"
},
{
transform:`translate(${x}px,${y}px)`
}

],{

duration:2500+Math.random()*1500,

easing:"linear"

});

setTimeout(()=>{

c.remove();

},4000);

}

}

slider.addEventListener("change",()=>{

if(Number(slider.value)===100){

confetti();

}

});
