function checkAnswers() {
    var correctAnswers = {
        q1: 'Paris',
        q2: '4',
        q3: 'JavaScript'
    };

    var userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value
    };

    var score = 0;
    for (var question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }

    var result = document.getElementById('result');
    result.innerHTML = `You scored ${score} out of 3!`;
}
