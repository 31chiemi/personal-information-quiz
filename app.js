const quiz = [
  {
    question: '個人関連情報とは、生存する個人に関する情報であって、個人情報、仮名加工情報及び匿名加工情報のいずれかに該当するものをいう。',
    answers: [ 'はい', 'いいえ'],
    correct: 'いいえ'
  }, {
    question: '個人関連情報の例に当たるものを次から選びなさい',
    answers: [ 'AさんのECサイトでの商品購買履歴', 'Aさんの行動履歴'],
    correct: 'AさんのECサイトでの商品購買履歴'
  }, {
    question: '改正個人情報保護法では個人関連情報が個人情報と紐付けて利用される場合には事前の同意が求められるようになった。',
    answers: [ 'はい', 'いいえ'],
    correct: 'はい'
  }, {
  question: '個人情報保護に関する国際的な動きとして正しいものをえらびなさい。Apple社が提供するSafariブラウザでは3rd Party Cookieが完全にブロックされる仕様になった。',
  answers: [ 'はい', 'いいえ'],
  correct: 'はい'
}, {
  question: 'Google社が提供するChromeブラウザにおいて3rd Party Cookieの廃止を順次行う時期は次のうちどれか。',
  answers: [ '2023年', '2024年'],
  correct: '2023年'
}
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = 'あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
