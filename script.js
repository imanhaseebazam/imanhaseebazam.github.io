// function toggleDescription() {
//     var description = document.querySelector('.product-description');
//     if (description.style.display === 'none' || description.style.display === '') {
//         description.style.display = 'block';
//     } else {
//         description.style.display = 'none';
//     }
// }
document.addEventListener('DOMContentLoaded', function () {
    
    var questions = document.querySelectorAll('.question');
    
    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            
            this.classList.toggle('active');
            var answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});







document.getElementById('payment-form').addEventListener('submit', function(event){
    event.preventDefault();
    alert('congratulation! your payment details are confirmed!!');

});

