"use strict";

{
  const question = document.getElementById("question");
  const choices = document.getElementById("choices");
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");
  const scoreLabel = document.querySelector("#result > p");

  const quizSet = shuffle([
    { q: "世界で一番大きな湖は？", c: ["カスピ海", "カリブ海", "琵琶湖"] },
    { q: "2の8乗は？", c: ["256", "64", "1024"] },
    {
      q: "次のうち、最初にリリースされた言語は？",
      c: ["Python", "JavaScript", "HTML"],
    },
  ]);
  let currentNum = 0;
  question.textContent = quizSet[currentNum].q;

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  quizSet[currentNum].c.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    choices.appendChild(li);
  });


}
