const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const links = document.querySelectorAll('a');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const h4 = document.getElementsByClassName('footer-heading');
const icons = document.getElementsByClassName('fa-brands');
const copy = document.querySelector('p.copyright');
const username = document.getElementById('userName');
const useremail = document.getElementById('userEmail');
const button = document.getElementsByClassName('button');
const left = document.getElementById('left');
const right = document.getElementById('right');

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
        for(const j of h4) {
            j.style.color = "#171717";
        }
        for (const i of icons) {
            i.style.color = "#171717";
        }
        copy.style.color = "#171717";
        username.style.color = "#171717";
        useremail.style.color = "#171717";
        for (const b of button) {
            b.style.backgroundColor = "rgb(230, 230, 230)";
        }
        left.style.backgroundColor = "#FAF9F6";
        right.style.backgroundColor = "#FAF9F6";
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
        for (const j of h4) {
            j.style.color = "#FAF9F6";
        }
        for (const i of icons) {
            i.style.color = "#FAF9F6";
        }
        copy.style.color = "#FAF9F6";
        username.style.color = "#FAF9F6";
        useremail.style.color = "#FAF9F6";
        for (const b of button) {
            b.style.backgroundColor = "rgb(23, 23, 23)";
        }
        left.style.backgroundColor = "#171717";
        right.style.backgroundColor = "#171717";
    }
});
