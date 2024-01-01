const loader1 = document.getElementById("p1");
const loader2 = document.getElementById("p2");
const loader3 = document.getElementById("p3");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const breaker = document.getElementsByClassName("breaker");

function hideElement(element, delay) {
    gsap.to(element, {
        display: 'none',
        delay,
    });
}

function loader() {
    hideElement(loader1, 0.3);
    
    gsap.to(loader2, {
        display: 'block',
        delay: 0.7,
    });

    hideElement(loader2, 1.3);

    gsap.to(loader3, {
        display: 'block',
        delay: 1.9, 
    });

    hideElement(loader3, 2.4);

    gsap.to("body", {
        backgroundColor: '#EFEAE3',
        delay: 2.5,
    });

    gsap.to("#loader", {
        display: 'none',
        delay: 2.5,
    });
}

loader();
