const observer = new IntersectionObserver((entries) => {
    for(const entry of entries){
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show')
        }
    }
});

const hiddenElements = document.querySelectorAll('.hidden');
for (const hiddenElement of hiddenElements){
    observer.observe(hiddenElement);
}

const observerAlt = new IntersectionObserver((entries) => {
    for(const entry of entries){
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show-alt');
        }else {
            entry.target.classList.remove('show-alt')
        }
    }
});

const hiddenAltElements = document.querySelectorAll('.hidden-alt');
for (const hiddenAltElement of hiddenAltElements){
    observerAlt.observe(hiddenAltElement);
}