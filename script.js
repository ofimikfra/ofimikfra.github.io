const navIcons = document.querySelectorAll(".navIcon");
const contactIcons = document.querySelectorAll(".contactIcon");
const navShadow = document.getElementById("navShadow");
const sideBar = document.querySelector(".sideBar");
const svgs = sideBar.querySelectorAll("svg");

const icons = [...navIcons, ...contactIcons]


function hoverOnEach(elements) {
    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.classList.add("hover");
        });
        element.addEventListener('mouseleave', () => {
            element.classList.remove("hover");
        });
    });
}

hoverOnEach(svgs);

icons.forEach(element => {
    element.addEventListener('mouseenter', () => {
        const label = element.querySelector(".label")
        label.classList.add("hover");
        element.classList.add("hover");
    });
    element.addEventListener('mouseleave', () => {
        const label = element.querySelector(".label")
        label.classList.remove("hover");
        element.classList.remove("hover");
    });
});

sideBar.addEventListener('mouseenter', () => {
    navShadow.classList.add("hover");
});

sideBar.addEventListener('mouseleave', () => {
    navShadow.classList.remove("hover");
});

/* ---------------------------- typing animation ---------------------------- */

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1500;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 150 - Math.random() * 40;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 300;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap::after { content: ':'; display: inline-block; margin-left: 0.1em; color: #fff; }";
    document.body.appendChild(css);
};