function createMenu() {
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('body');

    const firstMenu = document.createElement('div');
    // const firstDiv = document.createElement('div');
    // const firstImage = document.createElement('img');

    const secondMenu = document.createElement('div');
    const thirdMenu = document.createElement('div');
    const fourthMenu = document.createElement('div');
    const fifthMenu = document.createElement('div');
    const menus = [firstMenu, secondMenu, thirdMenu, fourthMenu, fifthMenu];
    for(let i = 0; i < menus.length; i++) {
        menus[i].classList.add('menu-item');
        const menuItem = document.createElement('p');
        const menuDescription = document.createElement('p');
        const newDiv = document.createElement('div');
        const price = document.createElement('p');
        const newImage = document.createElement('img');
        if(i == 0) {
            newImage.src = './img/ravioli.jpg';
            newImage.alt = 'Ravioli';
            menuItem.textContent = 'Ravioli';
            menuDescription.textContent = "Ravioli is an Italian dumpling that's typically stuffed with ricotta, meat, cheese, vegetables, and more.";
            price.textContent = '$19.99';
        } else if(i == 1) {
            newImage.src = './img/lasagna.jpg';
            newImage.alt = 'Lasagna';
            menuItem.textContent = 'Lasagna';
            menuDescription.textContent = "The lasagna is made with ricotta or mozzarella cheese, tomato sauce, meats (e.g. ground beef, pork or chicken), and vegetables (e.g. spinach, zucchini, olives, mushrooms), and the dish is typically flavoured with wine, garlic, onion, and oregano.";
            price.textContent = '$29.99';
        } else if(i == 2) {
            newImage.src = './img/calzone.jpg';
            newImage.alt = 'Calzone';
            menuItem.textContent = 'Calzone';
            menuDescription.textContent = "Fried versions of the calzone are typically filled with tomato and mozzarella. Pork, goat meat, eggs and cheese are main ingredients for the filling.";
            price.textContent = '$14.99';
        } else if(i == 3) {
            newImage.src = './img/chicken-parmesan.jpg';
            newImage.alt = 'Chicken Parmesan';
            menuItem.textContent = 'Chicken Parmesan';
            menuDescription.textContent = "A dish that consists of breaded chicken breast covered in tomato sauce and mozzarella, parmesan, or provolone cheese. A quantity of ham or bacon is added at extra cost";
            price.textContent = '$12.99';
        } else {
            newImage.src = './img/spaghetti-and-meatballs.jpg';
            newImage.alt = 'Spaghetti and Meatballs';
            menuItem.textContent = 'Spaghetti and Meatballs';
            menuDescription.textContent = "Some good old Spaghetti and Meatballs. Chef's masterpiece. Choice of meat is: chicken, beef, pork, lamb. Prices vary depending on meat selection, with beef being the default.";
            price.textContent = '$20.99';
        }
        newDiv.appendChild(newImage);
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
        infoDiv.append(menuItem, menuDescription);
        menus[i].append(newDiv, infoDiv, price);
    }
    bodyDiv.append(firstMenu, secondMenu, thirdMenu, fourthMenu, fifthMenu);
    return bodyDiv;
}

export {createMenu};