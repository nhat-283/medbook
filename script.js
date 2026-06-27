/*==================================================
                MEDBOOK APP.JS
==================================================*/

/*================ MOBILE MENU =================*/

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-toggle");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        menu.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}

document.querySelectorAll(".menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

    });

});

/*================ HEADER SCROLL =================*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.08)";

        header.style.background="#ffffff";

    }

    else{

        header.style.boxShadow="none";

        header.style.background="#fff";

    }

});

/*================ COUNTER =================*/

const counters=document.querySelectorAll(".counter");

let counterStarted=false;

function startCounter(){

    counters.forEach(counter=>{

        const target=+counter.innerText;

        let count=0;

        const speed=target/150;

        function update(){

            count+=speed;

            if(count<target){

                counter.innerText=Math.ceil(count);

                requestAnimationFrame(update);

            }

            else{

                counter.innerText=target;

            }

        }

        update();

    });

}

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero-counter");

    if(hero){

        const top=hero.getBoundingClientRect().top;

        if(top<window.innerHeight && !counterStarted){

            counterStarted=true;

            startCounter();

        }

    }

});

/*================ FAQ =================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const p=item.querySelector("p");

    p.style.display="none";

    item.addEventListener("click",()=>{

        if(p.style.display==="block"){

            p.style.display="none";

        }

        else{

            faqItems.forEach(f=>{

                f.querySelector("p").style.display="none";

            });

            p.style.display="block";

        }

    });

});

/*================ BACK TO TOP =================*/

const backTop=document.createElement("div");

backTop.className="back-to-top";

backTop.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(backTop);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backTop.classList.add("show");

    }

    else{

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*================ ACTIVE MENU =================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(sec=>{

        const top=window.scrollY;

        const offset=sec.offsetTop-150;

        const height=sec.offsetHeight;

        if(top>=offset && top<offset+height){

            current=sec.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});

/*================ SEARCH =================*/

const searchBtn=document.querySelector(".search-box button");

if(searchBtn){

searchBtn.addEventListener("click",()=>{

const doctor=document.querySelectorAll(".search-item input")[0].value;

const hospital=document.querySelectorAll(".search-item input")[1].value;

if(doctor==="" && hospital===""){

alert("Vui lòng nhập thông tin tìm kiếm.");

}

else{

alert(

"Tìm kiếm:\n\nBác sĩ: "+doctor+

"\nBệnh viện: "+hospital

);

}

});

}

/*================ BUTTON RIPPLE =================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(btn.clientWidth,btn.clientHeight);

circle.style.width=circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

const ripple=btn.querySelector(".ripple");

if(ripple){

ripple.remove();

}

btn.appendChild(circle);

});

});

/*================ SCROLL REVEAL =================*/

const reveal=document.querySelectorAll(

".feature-card,.doctor-card,.specialty-card,.hospital-card,.blog-card,.testimonial-card,.process-item"

);

function revealOnScroll(){

reveal.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.classList.add("show");

}

});

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/*================ LOADER =================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});

/*================ TYPE EFFECT =================*/

const title=document.querySelector(".hero h1 span");

if(title){

const words=["thông minh","nhanh chóng","tiện lợi","an toàn"];

let i=0;

setInterval(()=>{

i++;

if(i>=words.length){

i=0;

}

title.innerHTML=words[i];

},2500);

}

/*================ CURRENT YEAR =================*/

const year=document.querySelector(".copyright");

if(year){

const now=new Date().getFullYear();

year.innerHTML="© "+now+" MedBook. All Rights Reserved.";

}

/*================ END =================*/
/*================ ACTIVE MENU =================*/

.menu a.active{

    color:var(--primary);

}

/*================ RIPPLE =================*/

.btn{

    overflow:hidden;

    position:relative;

}

.ripple{

    position:absolute;

    border-radius:50%;

    background:rgba(255,255,255,.45);

    transform:scale(0);

    animation:ripple .6s linear;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

/*================ SCROLL REVEAL =================*/

.feature-card,
.specialty-card,
.doctor-card,
.blog-card,
.hospital-card,
.process-item,
.testimonial-card{

opacity:0;

transform:translateY(40px);

transition:.8s;

}

.show{

opacity:1;

transform:translateY(0);

}
// ============================================================
//  VALIDATION FUNCTIONS
// ============================================================

function validateName(name) {
    // Tên chỉ được chứa chữ cái (có dấu), khoảng trắng và dấu gạch ngang
    const regex = /^[A-Za-zÀ-Ỹà-ỹĂăÂâĐđÊêÔôƠơƯư\s\-\.]+$/;
    if (!name.trim()) return { valid: false, message: '⚠️ Vui lòng nhập họ và tên' };
    if (!regex.test(name.trim())) return { valid: false, message: '⚠️ Tên không được chứa số hoặc ký tự đặc biệt' };
    if (name.trim().split(/\s+/).length < 2) return { valid: false, message: '⚠️ Vui lòng nhập đầy đủ họ và tên (ít nhất 2 từ)' };
    return { valid: true, message: '' };
}

function validateAge(dob) {
    if (!dob) return { valid: true, message: '' }; // Không bắt buộc
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 0) return { valid: false, message: '⚠️ Ngày sinh không hợp lệ' };
    if (age > 200) return { valid: false, message: '⚠️ Tuổi không được vượt quá 200' };
    return { valid: true, message: '' };
}

function validatePhone(phone) {
    const phoneStr = phone.trim();
    if (!phoneStr) return { valid: false, message: '⚠️ Vui lòng nhập số điện thoại' };
    // Chỉ cho phép số, khoảng trắng, dấu +, dấu -
    if (!/^[\d\s\+\-\(\)]+$/.test(phoneStr)) {
        return { valid: false, message: '⚠️ Số điện thoại không được chứa ký tự đặc biệt (chỉ số, khoảng trắng, +, -)' };
    }
    // Loại bỏ khoảng trắng, dấu +, dấu -, dấu (, ) để kiểm tra số
    const cleanPhone = phoneStr.replace(/[\s\+\-\(\)]/g, '');
    if (!/^\d+$/.test(cleanPhone)) {
        return { valid: false, message: '⚠️ Số điện thoại chỉ được chứa số' };
    }
    if (cleanPhone.length < 9 || cleanPhone.length > 12) {
        return { valid: false, message: '⚠️ Số điện thoại phải có từ 9-12 chữ số' };
    }
    return { valid: true, message: '' };
}

function validateEmail(email) {
    const emailStr = email.trim();
    if (!emailStr) return { valid: false, message: '⚠️ Vui lòng nhập email' };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(emailStr)) return { valid: false, message: '⚠️ Email không đúng định dạng (ví dụ: ten@email.com)' };
    return { valid: true, message: '' };
}

