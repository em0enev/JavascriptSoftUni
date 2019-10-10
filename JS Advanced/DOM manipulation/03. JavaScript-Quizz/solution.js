function solve() {
  let correctAnswer = 0;
  let index = 0;

  const answers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents"
  ]

  let questions = document.getElementsByTagName('section');

  Array.from(document.querySelectorAll(".answer-text"))
    .map(x => x.addEventListener("click", nextQuestion))

  function nextQuestion(e) {
    let answer = e.target.innerHTML

    if (answers.indexOf(answer) !== -1) {
      correctAnswer++
    }

    questions[index].style.display = 'none';
    index++;

    index !== 3
      ? questions[index].style.display = 'block'
      : printResult(correctAnswer);

    function printResult(correctAnswer) {
      document.querySelector("#results").style.display = 'block';
      let text = '';
      correctAnswer === 3
        ? text = 'You are recognized as top JavaScript fan!'
        : text = `You have ${correctAnswer} right answers`;

      document.querySelector("#results > li > h1").textContent = text;
    }
  }
}