import { createHeader, createFooter } from './essentials';
import { createHome } from './home';
import { createContact } from './contact';
import { createMenu } from './menu';

const header = createHeader();
const home = createHome();
const footer = createFooter();
const contact = createContact();
const menu = createMenu();

let currPage = "Home";

const content = document.querySelector('#content');
content.append(header, home, footer);
const buttons = document.querySelectorAll('button');
// console.log(buttons);
buttons.forEach((element) => {
    element.addEventListener('click', () => {
        if(element.textContent != currPage) {
            content.removeChild(content.lastChild);
            content.removeChild(content.lastChild);
            if(element.textContent == "Home") {
                content.appendChild(home);
            } else if(element.textContent == "Contact") {
                content.appendChild(contact);
            } else {
                content.appendChild(menu);
            }
            currPage = element.textContent;
            content.appendChild(footer);
        }
    })
})

console.log("Testing");