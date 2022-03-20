function createHome() {
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('body');
    const firstText = document.createElement('p');
    firstText.textContent = 'Welcome to the Best Italian Restaurant in America';
    bodyDiv.appendChild(firstText);
    const chefDiv = document.createElement('div');
    chefDiv.classList.add('chef-image');
    const img = document.createElement('img');
    img.src = 'img/chef.jpg';
    img.alt = 'Chef';
    chefDiv.appendChild(img);
    const attestation = document.createElement('p');
    attestation.textContent = "Photo by ";
    const attestLink = document.createElement('a');
    attestLink.href = "https://unsplash.com/@johnathanmphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    attestLink.textContent = "Johnathan Macedo";
    const attestationTwo = document.createElement('p');
    attestationTwo.textContent = " on ";
    attestationTwo.classList.add('special-p');
    const unsplashLink = document.createElement('a');
    unsplashLink.href = "https://unsplash.com/s/photos/chef?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    unsplashLink.textContent = "Unspash";
    attestation.append(attestLink, attestationTwo, unsplashLink);
    chefDiv.appendChild(attestation);
    const lastText = document.createElement('p');
    lastText.textContent = "Visit one of our three locations or order online!";
    bodyDiv.append(chefDiv, lastText);
    return bodyDiv;
}

export {createHome};