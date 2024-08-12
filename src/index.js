import './css/style.css';

import womanWithLaptop from './images/woman_with_laptop.jpeg';
import openInNewLogo from './images/open-in-new.svg';
import githubLogo from './images/github.svg';
import phoneLogo from './images/phone.svg';
import emailLogo from './images/email-edit.svg';
import womanWithPhone from './images/woman_with_phone.jpeg';


const headerImg = document.querySelector('.woman_with_laptop');
const githubLinkLogo = [...document.querySelectorAll('.github')];
const externalLinkLogo = [...document.querySelectorAll('.external-link')];
const phoneLinkLogo = document.querySelector('.phone > img');
const emailLinkLogo = document.querySelector('.email > img');
const candidatePicture = document.querySelector('.candidate-picture img');

headerImg.src = womanWithLaptop;

githubLinkLogo.forEach(el => {
  const element = el;
  element.src = githubLogo;
});
externalLinkLogo.forEach(el => {
  const element = el;
  element.src = openInNewLogo;
});

phoneLinkLogo.src = phoneLogo;
emailLinkLogo.src = emailLogo;
candidatePicture.src = womanWithPhone;