document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 1; 

    function changeContent(direction) {
        const totalContentItems = 3; 

       
        document.getElementById(`content${currentIndex}`).style.display = 'none';

      
        currentIndex += direction;

       
        if (currentIndex < 1) {
            currentIndex = totalContentItems;
        } else if (currentIndex > totalContentItems) {
            currentIndex = 1;
        }

        
        document.getElementById(`content${currentIndex}`).style.display = 'block';
    }

    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', function () {
        changeContent(-1);
    });

    rightArrow.addEventListener('click', function () {
        changeContent(1);
    });

   
    setInterval(function () {
        changeContent(1);
    }, 5000);
});


function countNumbers(target, elementId) {
    const element = document.getElementById(elementId);
    let count = 0;
    const interval = setInterval(() => {
        count++;
        element.textContent = count;
        if (count >= target) {
            clearInterval(interval);
            element.textContent = target;
        }
    }, 10); 
}

countNumbers(150, 'projectCompleted');
countNumbers(100, 'clientSatisfaction');
countNumbers(20, 'expertMembers');











