import data from './data.js';

const start = document.querySelector('.start');
const progressBar = document.querySelector('.progress-bar');
const title = document.querySelector('#title');
const type = document.querySelector('#type');
const A = document.querySelector('#A');
const B = document.querySelector('#B');

const question = document.querySelector('.question');
const result = document.querySelector('.result');

let num = 1;

function next(data) {
  let index = num - 1;
  if (num == 13) {
    question.style.display = 'none';
    result.style.display = 'block';
  } else {
    progressBar.style.width = `calc(100/12*${num}%)`;
    title.innerHTML = data[index].title;
    type.value = data[index].type;
    A.innerHTML = data[index].A;
    B.innerHTML = data[index].B;
    num++;
  }
}

function showQuestion(e) {
  const button = start.querySelector('button');
  if (e.target == button) {
    question.style.display = 'block';
    start.style.display = 'none';
  }
}

function clickA() {
  let typeValue = type.value;
  let preValue = document.querySelector(`#${typeValue}`).value;
  document.querySelector(`#${typeValue}`).value = parseInt(preValue) + 1;
  next(data);
}

function clickB() {
  next(data);
}

start.addEventListener('click', showQuestion);
A.addEventListener('click', clickA);
B.addEventListener('click', clickB);

next(data);
