const questionsArrows = document.querySelectorAll('.question img')

questionsArrows.forEach(x => {
    x.addEventListener('click', function () {
        const currentChoice = this.parentNode.parentNode.childNodes[3];
        const currentChoiceHeight = this.parentNode.parentNode.childNodes[3].scrollHeight;

        if (this.src.includes('down')) {
            this.src = './images/icon-arrow-up.png';
            this.parentNode.childNodes[1].style.color = 'black'
            gsap.to(currentChoice, {
                duration: 0.2, height: currentChoiceHeight + 40, opacity: 1,
                padding: '20px 15px'
            })
        } else if (this.src.includes('up')) {
            this.src = './images/icon-arrow-down.svg';
            this.parentNode.childNodes[1].style.color = 'hsl(240, 6%, 50%)'
            gsap.to(currentChoice, {
                duration: 0.2, height: 0, opacity: 0,
                padding: '0px 15px'
            })
        }

    })
})

const questionsAreas = document.querySelectorAll('.question h2')

questionsAreas.forEach(x => {
    x.addEventListener("mouseover", function() {
        x.style.color = "hsl(14, 88%, 65%)";
    });
        
    x.addEventListener("mouseout", function() {
        x.style.color = "hsl(240, 6%, 50%)";
    });
})
