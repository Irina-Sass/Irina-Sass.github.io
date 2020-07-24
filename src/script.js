import './style.css';
import { Scroll } from './js/Scroll.js';

// функция возвращает текущий год
function returnsYear() {
  const now = new Date();
  return now.getFullYear();
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
const scroll = new Scroll(smoothLinks);

document.querySelector('#year').textContent = returnsYear();
