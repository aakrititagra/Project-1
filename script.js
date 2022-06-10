const hamburger = document.querySelector(".hamburger");
const navdata = document.querySelector(".navdata");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); 
    navdata.classList.toggle("active");
})

let btnInfo = document.querySelector('#info');
btnInfo.addEventListener('click', () => btnInfo.style.background = 'green')

const currloc = location.href;
        const menuItem = document.querySelectorAll('a');
        const menuLength = menuItem.length;
        for (let i = 0; i < menuLength; i++) {
            if (menuItem[i].href === currloc) {
                menuItem[i].className = "active";
            }
        }