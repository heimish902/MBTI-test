'use-strict';

import {
  start,
  question,
  progressBar,
  title,
  type,
  A,
  B,
  result,
  name,
  desc,
  mbtiDesc,
  image,
  goodName,
  goodImg,
  badName,
  badImg,
} from './tags.js';

import { data } from './data.js';
import { explains } from './result.js';

let num = 1;

function results() {
  let mbti = '';
  const EI = document.querySelector('#EI');
  const SN = document.querySelector('#SN');
  const TF = document.querySelector('#TF');
  const JP = document.querySelector('#JP');

  EI.value < 2 ? (mbti += 'I') : (mbti += 'E');
  SN.value < 2 ? (mbti += 'N') : (mbti += 'S');
  TF.value < 2 ? (mbti += 'F') : (mbti += 'T');
  JP.value < 2 ? (mbti += 'P') : (mbti += 'J');

  resultsDesc(mbti);
}

function resultsDesc(mbti) {
  explains.forEach((el, index) => {
    if (mbti == el.title) {
      name.innerHTML = el.name;
      desc.innerHTML = el.desc;
      mbtiDesc.innerHTML = el.explain;
      image.src = el.img;
      image.alt = el.name;

      goodImg.src = el.goodimg;
      goodName.innerHTML = el.good;
      badImg.src = el.badimg;
      badName.innerHTML = el.bad;
    }
  });
}

function next(data) {
  let index = num - 1;
  if (num == 13) {
    question.style.display = 'none';
    result.style.display = 'block';
    results();
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
  next(data);
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
