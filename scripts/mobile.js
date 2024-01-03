const mobileMenuBtnElement = document.getElementById('mobile-menu-bar');
const mobileMenuPage = document.getElementById('mobile-menu');
const menuPageListElements = document.querySelectorAll('#mobile-menu .nav-items li');

function toggleMobileMenu () {
    mobileMenuPage.classList.toggle('active')

    for(const menuPageListElement of menuPageListElements){
        menuPageListElement.classList.remove('hidden')
        menuPageListElement.classList.remove('stager')
        menuPageListElement.classList.toggle('active')
    }
}

mobileMenuBtnElement.addEventListener('click',toggleMobileMenu)