const toggle = document.getElementById('toggleDark');
const header = document.querySelector('header');
const body = document.querySelector('body');
const links = document.querySelectorAll('a');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const button1 = document.querySelector('.button1');
const bg_img1 = document.querySelector('.bg-img1');
const spotlight = document.getElementsByClassName('card');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const button6 = document.querySelector('.button6');
const button7 = document.querySelector('.button7');
const bg_img2 = document.querySelector('.bg-img2');
const h4 = document.getElementsByClassName('footer-heading');
const icons = document.getElementsByClassName('fa-brands');
const copy = document.querySelector('p.copyright');
const username = document.getElementById('userName');
const useremail = document.getElementById('userEmail');
const title = document.getElementsByClassName('title');
const mail_icon = document.querySelector('.fa-regular');


toggle.addEventListener('click', function() {
    this.classList.toggle('bi-moon');
    const header = document.querySelector('header');
    if (this.classList.toggle("bi-brightness-high-fill")) { // light mode
        
        body.style.background = "#FAF9F6";
        body.style.color = "#171717";
        body.style.transition = ".5s";
        links.forEach(link => {
            link.style.color = "#171717";
        });
        
        line1.style.backgroundColor = "#171717";
        line2.style.backgroundColor = "#171717";
        line3.style.backgroundColor = "#171717";
        button1.style.color = "#171717";
        button1.style.backgroundColor = "#FAF9F6";
        bg_img1.style.backgroundImage = "url('../Media/Light-1120px.png')";
        for (const e of spotlight) {
            e.style.color = "#171717";
            e.style.backgroundColor = "#FAF9F6";
        }
        header.style.backgroundColor = "transparent";
        button2.style.backgroundColor = "#FAF9F6";
        button3.style.backgroundColor = "#FAF9F6";
        button4.style.backgroundColor = "#FAF9F6";
        button5.style.backgroundColor = "#FAF9F6";
        button6.style.backgroundColor = "#FAF9F6";
        button7.style.backgroundColor = "#FAF9F6";
        bg_img2.style.backgroundImage = "url('../Media/education-light.png')";
        for(const j of h4) {
            j.style.color = "#171717";
        }
        for (const i of icons) {
            i.style.color = "#171717";
        }
        copy.style.color = "#171717";
        username.style.color = "#171717";
        useremail.style.color = "#171717";
        for (const t of title) {
            t.style.color = "#171717";
        }
        mail_icon.style.color = "#171717";
    } else { // dark mode
        body.style.background = "#171717";
        body.style.color = "#FAF9F6";
        body.style.transition = ".5s";
        links.forEach(link => {
            link.style.color = "#FAF9F6";
        });
        line1.style.backgroundColor = "#FAF9F6";
        line2.style.backgroundColor = "#FAF9F6";
        line3.style.backgroundColor = "#FAF9F6";
        button1.style.color = "#FAF9F6";
        button1.style.backgroundColor = "#171717";
        bg_img1.style.backgroundImage = "url('../Media/Dark-1120px.png')";    
        for (const e of spotlight) {
            e.style.color = "#FAF9F6";
            e.style.backgroundColor = "#171717";
        }
        header.style.backgroundColor = "transparent";

        button2.style.backgroundColor = "rgba(128, 128, 128, 0.329)";
        button3.style.backgroundColor = "rgba(128, 128, 128, 0.329)";
        button4.style.backgroundColor = "rgba(128, 128, 128, 0.329)";
        button5.style.backgroundColor = "rgba(128, 128, 128, 0.329)";
        button6.style.backgroundColor = "rgba(128, 128, 128, 0.329)";
        button7.style.backgroundColor = "rgba(128, 128, 128, 0.329)";
        bg_img2.style.backgroundImage = "url('../Media/education-dark.png')";
        for (const j of h4) {
            j.style.color = "#FAF9F6";
        }
        for (const i of icons) {
            i.style.color = "#FAF9F6";
        }
        copy.style.color = "#FAF9F6";
        username.style.color = "#FAF9F6";
        useremail.style.color = "#FAF9F6";
        for (const t of title) {
            t.style.color = "#FAF9F6";
        }
        mail_icon.style.color = "#FAF9F6";
    }
});
