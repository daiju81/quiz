var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var question = document.getElementById('question');
var choices = document.getElementById('choices');
var btn = document.getElementById('btn');
var result = document.getElementById('result');
var scoreLabel = document.querySelector('#result > p');
var questionArray = [
    { q: '世界で一番大きな湖は？', c: ['カスピ海', 'カリブ海', '琵琶湖'] },
    { q: '2の8乗は？', c: ['256', '64', '1024'] },
    {
        q: '次のうち、最初にリリースされた言語は？',
        c: ['Python', 'JavaScript', 'HTML']
    },
];
var quizSet = shuffle(questionArray);
var currentNum = 0;
var isAnswered;
var score = 0;
function shuffle(arr) {
    var _a;
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
    }
    return arr;
}
function checkAnswer(li) {
    if (isAnswered) {
        return;
    }
    isAnswered = true;
    if (li.textContent === quizSet[currentNum].c[0]) {
        li.classList.add('correct');
        score++;
    }
    else {
        li.classList.add('wrong');
    }
    btn === null || btn === void 0 ? void 0 : btn.classList.remove('disabled');
}
function setQuiz() {
    isAnswered = false;
    if (question)
        question.textContent = quizSet[currentNum].q;
    while (choices === null || choices === void 0 ? void 0 : choices.firstChild) {
        choices.removeChild(choices.firstChild);
    }
    var shuffledChoices = shuffle(__spreadArrays(quizSet[currentNum].c));
    shuffledChoices.forEach(function (choice) {
        var li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', function () {
            checkAnswer(li);
        });
        choices === null || choices === void 0 ? void 0 : choices.appendChild(li);
    });
    if (currentNum === quizSet.length - 1) {
        if (btn)
            btn.textContent = 'Show Score';
    }
}
setQuiz();
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    if (btn.classList.contains('disabled')) {
        return;
    }
    btn.classList.add('disabled');
    if (currentNum === quizSet.length - 1) {
        if (scoreLabel)
            scoreLabel.textContent = "Score: " + score + " / " + quizSet.length;
        result === null || result === void 0 ? void 0 : result.classList.remove('hidden');
    }
    else {
        currentNum++;
        setQuiz();
    }
});
