import Github from './img/github.png';

function createHeader() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    const title = document.createElement('h1');
    title.textContent = "America's Finest";
    titleDiv.appendChild(title);
    headerDiv.appendChild(titleDiv);
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    homeBtn.classList.add('home');
    homeBtn.textContent = "Home";
    menuBtn.classList.add('menu');
    menuBtn.textContent = "Menu";
    contactBtn.classList.add('contact');
    contactBtn.textContent = "Contact";
    navbar.appendChild(homeBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(contactBtn);
    headerDiv.appendChild(navbar);
    return headerDiv;
}

function createFooter() {
    const footerDiv = document.createElement('div');
    const copyrightText = document.createElement('p');
    copyrightText.textContent = 'Copyright © 2022 Robert Bangiyev';
    footerDiv.appendChild(copyrightText);
    footerDiv.classList.add('footer');
    const img = new Image();
    img.src = Github;
    img.alt = "github logo";
    const link = document.createElement('div');
    const githubLink = document.createElement('a');
    githubLink.href = "https://github.com/RobertBangiyev";
    githubLink.target = "_blank";
    githubLink.appendChild(img);
    link.appendChild(githubLink);
    footerDiv.appendChild(link);
    return footerDiv;
}

export {createHeader, createFooter};