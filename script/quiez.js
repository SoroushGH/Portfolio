/* Quiz Script */
const correctAnswers = ['C', 'B', 'A', 'A'];
const form = document.querySelector('.quiez-form');
let result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];


    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });
    scrollTo(0, 0);
    result.classList.remove('d-none');


    let count = 0;
    const timer = setInterval(() => {

        result.querySelector('span').textContent = `${count}%`;

        if (count === score) {
            clearInterval(timer);
        }

        else {
            count++;
        }
    }, 10);


    let red = document.querySelector('.red')
    if (score === 0) {
        red.querySelector('span').textContent = "You Don't Know Nothing John Snow!";
    };
    if (score === 25) {
        red.querySelector('span').textContent = "You Know More Than Nothing John Snow!";
    };
    if (score === 50) {
        red.querySelector('span').textContent = "You Know a Little John Snow!";
    };
    if (score === 75) {
        red.querySelector('span').textContent = "You Know Something John Snow!";
    };
    if (score === 100) {
        red.querySelector('span').textContent = "Finally, You Know John Snow!";
    };
});
/* End Quiz Script */


