import Phone from './img/phone.png';
import Email from './img/email.png';
import Twitter from './img/twitter.png';
import Instagram from './img/instagram.png';


function createContact() {
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('body');
    const callDiv = document.createElement('div');
    callDiv.classList.add('call');
    const callImg = new Image();
    callImg.src = Phone;
    callImg.alt = 'Phone';
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '(123) 456-7890';
    callDiv.append(callImg, phoneNumber);
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('email');
    const emailImg = new Image();
    emailImg.src = Email;
    emailImg.alt = 'Email';
    const emailText = document.createElement('p');
    emailText.textContent = 'americafinest@gmail.com';
    emailDiv.append(emailImg, emailText);
    const socialDiv = document.createElement('div');
    socialDiv.classList.add('social-media');
    const twitterImg = new Image();
    const instaImg = new Image();
    twitterImg.src = Twitter;
    twitterImg.alt = 'Twitter';
    const twitterText = document.createElement('p');
    twitterText.textContent = '@AmericaFinest';
    instaImg.src = Instagram;
    instaImg.alt = 'Instagram';
    const instaText = document.createElement('p');
    instaText.textContent = '@AmericaFinest';
    socialDiv.append(twitterImg, twitterText, instaImg, instaText);
    bodyDiv.append(callDiv, emailDiv, socialDiv);
    return bodyDiv;
}

export {createContact};