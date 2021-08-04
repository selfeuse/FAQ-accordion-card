const questionsArrows = document.querySelectorAll('.question img')

questionsArrows.forEach((value) => {
    value.addEventListener('click', () => {
      value.parentNode.childNodes[3].classList.toggle('turnArrow');
      value.parentNode.parentNode.childNodes[3].classList.toggle('open');
    });
  });

const questionsTitle = document.querySelectorAll('.question h2')

questionsTitle.forEach((value) => {
    value.addEventListener('click', () => {
      value.parentNode.childNodes[3].classList.toggle('turnArrow');
      value.parentNode.parentNode.childNodes[3].classList.toggle('open');
    });
  });

const questionsAreas = document.querySelectorAll('.question h2')

questionsAreas.forEach(x => {
    x.addEventListener("mouseover", function() {
        x.style.color = "hsl(14, 88%, 65%)";
    });
        
    x.addEventListener("mouseout", function() {
        x.style.color = "hsl(240, 6%, 50%)";
    });

    x.addEventListener("click", function() {
        
    });
})
