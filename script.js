const questions = [
  {
    question: "1. Quelle vitamine la laitue contient-elle en grande quantité ?",
    options: ["Vitamine D", "Vitamine C", "Vitamine K", "Vitamine B12"],
    answer: 2
  },
  {
    question: "2. La salade est principalement composée de :",
    options: ["Sucres", "Fibres", "Protéines", "Graisses saturées"],
    answer: 1
  },
  {
    question: "3. Quel effet positif la salade a-t-elle sur la digestion ?",
    options: ["Elle ralentit la digestion", "Elle favorise la constipation", "Elle facilite le transit intestinal", "Aucun effet"],
    answer: 2
  },
  {
    question: "4. Quelle salade est particulièrement riche en antioxydants ?",
    options: ["Iceberg", "Romaine", "Scarole", "Frisée"],
    answer: 1
  },
  {
    question: "5. Pourquoi la salade est-elle souvent recommandée dans les régimes ?",
    options: ["Elle donne soif", "Elle est très calorique", "Elle est rassasiante et faible en calories", "Elle contient du sucre rapide"],
    answer: 2
  }
];

function loadQuiz() {
  const quizDiv = document.getElementById("quiz");
  quizDiv.innerHTML = "";
  questions.forEach((q, i) => {
    const qBlock = document.createElement("div");
    qBlock.classList.add("question");
    qBlock.innerHTML = `<p>${q.question}</p>`;
    q.options.forEach((opt, j) => {
      qBlock.innerHTML += `
        <label>
          <input type="radio" name="q${i}" value="${j}"> ${opt}
        </label><br>
      `;
    });
    quizDiv.appendChild(qBlock);
  });
}

function submitQuiz() {
  let score = 0;
  const resultDiv = document.getElementById("result");
  const answersDiv = document.getElementById("answers");
  let userAnswers = [];

  questions.forEach((q, i) => {
    const radios = document.getElementsByName("q" + i);
    for (let r of radios) {
      if (r.checked) {
        userAnswers.push(parseInt(r.value));
        if (parseInt(r.value) === q.answer) score++;
        break;
      }
    }
  });

  resultDiv.innerHTML = `🌿 Votre score : <strong>${score}/5</strong>`;

  let correction = "<h3>Réponses correctes :</h3><ul>";
  questions.forEach((q, i) => {
    correction += `<li><strong>${q.question}</strong><br>✅ Réponse : ${q.options[q.answer]}</li>`;
  });
  correction += "</ul>";
  answersDiv.innerHTML = correction;
}

window.onload = loadQuiz;
