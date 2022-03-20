function createContact() {
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('body');
    const callDiv = document.createElement('div');
    callDiv.classList.add('call');
    const callImg = document.createElement('img');
    callImg.src = './img/phone.png';
    callImg.alt = 'Phone';
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '(123) 456-7890';
    callDiv.append(callImg, phoneNumber);
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('email');
    const emailImg = document.createElement('img');
    emailImg.src = './img/email.png';
    emailImg.alt = 'Email';
    const emailText = document.createElement('p');
    emailText.textContent = 'americafinest@gmail.com';
    emailDiv.append(emailImg, emailText);
    const socialDiv = document.createElement('div');
    socialDiv.classList.add('social-media');
    const twitterImg = document.createElement('img');
    const instaImg = document.createElement('img');
    twitterImg.src = './img/twitter.png';
    twitterImg.alt = 'Twitter';
    const twitterText = document.createElement('p');
    twitterText.textContent = '@AmericaFinest';
    instaImg.src = './img/instagram.png';
    instaImg.alt = 'Instagram';
    const instaText = document.createElement('p');
    instaText.textContent = '@AmericaFinest';
    socialDiv.append(twitterImg, twitterText, instaImg, instaText);
    bodyDiv.append(callDiv, emailDiv, socialDiv);
    return bodyDiv;
}

export {createContact};