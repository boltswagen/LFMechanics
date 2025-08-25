// Divs and sections here
const market = document.getElementById("market");
const chair = document.getElementById("chair");
const table = document.getElementById("table");
const dresser = document.getElementById("dresser");
const bookshelf = document.getElementById("bookshelf");

const originalChair = chair.style.display;
const originalTable = table.style.display;
const originalDresser = dresser.style.display;
const originalBookshelf = bookshelf.style.display;

// Listener for whole market
market.addEventListener("click", (e) => {
    const target = e.target.closest(".item");
    if (!target) return;

    openItem(target.id);
});

function openItem(itemId){
    // Clearing sections
    const existingUI = document.getElementById("item-ui");
    if (existingUI)
        existingUI.remove();
    chair.style.display = "none", table.style.display = "none", dresser.style.display = "none", bookshelf.style.display = "none";

    // Wrapper for item interface
    const uiWrapper = document.createElement("div");
    uiWrapper.id = "item-ui";
    uiWrapper.style.display = "grid";
    uiWrapper.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // Create back button
    const backButton = document.createElement("button");
    backButton.textContent = "< Back";
    backButton.addEventListener("click", (ev) => {
        ev.stopPropagation();
        [...market.children].forEach(el => el.style.display = "");
        chair.style.display = originalChair;
        table.style.display = originalTable;
        dresser.style.display = originalDresser;
        bookshelf.style.display = originalBookshelf;
        uiWrapper.remove();
    });
    backButton.style.height = "50px";
    backButton.style.width = "75px";
    backButton.style.gridColumn = "1";
    backButton.style.gridRow = "1";
    uiWrapper.appendChild(backButton);

    // Create add to cart button
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Shopping Cart";
    addButton.style.alignItems = "center";
    addButton.style.height = "75px";
    addButton.style.width = "125px";
    addButton.addEventListener("click", (ev) => {
        ev.stopPropagation();
        const selectedItems = document.querySelectorAll(`#item-ui input[name="${itemId}s"]:checked`);
        const newItems = [...selectedItems].map(cb => cb.value);
        if (newItems.length === 0){
            alert("Please select items first!");
            return;
        }
        // Empty cart and insert items
        const cart = document.getElementById("cart-items");
        cart.innerHTML = '';

        // add newItems to shopping cart
        newItems.forEach(item => {
            const p = document.createElement("p");
            p.textContent = item;
            cart.appendChild(p);
        })
    });
    addButton.style.gridColumn = "3";
    addButton.style.gridRow = "2";
    uiWrapper.appendChild(addButton);

    // Switch to open different item interface
    switch (itemId) {
        case "chair":
            uiWrapper.appendChild(chairOptions());
            break;
        case "table":
            uiWrapper.appendChild(tableOptions());
            break;
        case "dresser":
            uiWrapper.appendChild(dresserOptions());
            break;
        case "bookshelf":
            uiWrapper.appendChild(bookshelfOptions());
            break;
    }

    market.appendChild(uiWrapper);
}


// Chair interface
function chairOptions(){
    const wrapper = document.createElement("div");
    wrapper.style.display = "grid";
    wrapper.style.gap = "40px";

    // Display chair options as checkboxes
    const oakParagraph = document.createElement("p");
    const oakChair = document.createElement("img");
    oakChair.src = "woodshoppics/oakchair.jpg";
    oakParagraph.appendChild(oakChair);
    oakParagraph.appendChild(document.createElement("br"));
    const oakBox = document.createElement("input");
    oakBox.type = "checkbox";
    oakBox.name = "chairs";
    oakBox.value = "Oak Chair";
    const oakLabel = document.createElement("span");
    oakLabel.textContent = " Oak"
    oakParagraph.appendChild(oakBox);
    oakParagraph.appendChild(oakLabel);
    const oakPrice = document.createElement("p");
    oakPrice.textContent = "25.00$";
    oakParagraph.appendChild(oakPrice);
    oakParagraph.style.gridColumn = "2";
    oakParagraph.style.gridRow = "1";
    wrapper.appendChild(oakParagraph);

    const spruceParagraph = document.createElement("p");
    const spruceChair = document.createElement("img");
    spruceChair.src = "woodshoppics/sprucechair.jpg";
    spruceParagraph.appendChild(spruceChair);
    spruceParagraph.appendChild(document.createElement("br"));
    const spruceBox = document.createElement("input");
    spruceBox.type = "checkbox";
    spruceBox.name = "chairs";
    spruceBox.value = "Spruce Chair";
    const spruceLabel = document.createElement("span");
    spruceLabel.textContent = " Spruce";
    spruceParagraph.appendChild(spruceBox);
    spruceParagraph.appendChild(spruceLabel);
    const sprucePrice = document.createElement("p");
    sprucePrice.textContent = "30.00$";
    spruceParagraph.appendChild(sprucePrice);
    spruceParagraph.style.gridColumn = "3";
    spruceParagraph.style.gridRow = "1";
    wrapper.appendChild(spruceParagraph);

    const birchParagraph = document.createElement("p");
    const birchChair = document.createElement("img");
    birchChair.src = "woodshoppics/birchchair.jpg";
    birchParagraph.appendChild(birchChair);
    birchParagraph.appendChild(document.createElement("br"));
    const birchBox = document.createElement("input");
    birchBox.type = "checkbox";
    birchBox.name = "chairs";
    birchBox.value = "Birch Chair";
    const birchLabel = document.createElement("span");
    birchLabel.textContent = " Birch";
    birchParagraph.appendChild(birchBox);
    birchParagraph.appendChild(birchLabel);
    const birchPrice = document.createElement("p");
    birchPrice.textContent = "35.00$";
    birchParagraph.appendChild(birchPrice);
    birchParagraph.style.gridColumn = "4";
    birchParagraph.style.gridRow = "1";
    wrapper.appendChild(birchParagraph);

    const bambooParagraph = document.createElement("p");
    const bambooChair = document.createElement("img");
    bambooChair.src = "woodshoppics/bamboochair.jpg";
    bambooParagraph.appendChild(bambooChair);
    bambooParagraph.appendChild(document.createElement("br"));
    const bambooBox = document.createElement("input");
    bambooBox.type = "checkbox";
    bambooBox.name = "chairs";
    bambooBox.value = "Bamboo Chair";
    const bambooLabel = document.createElement("span");
    bambooLabel.textContent = " Bamboo";
    bambooParagraph.appendChild(bambooBox);
    bambooParagraph.appendChild(bambooLabel);
    const bambooPrice = document.createElement("p");
    bambooPrice.textContent = "40.00$";
    bambooParagraph.appendChild(bambooPrice);
    bambooParagraph.style.gridColumn = "2";
    bambooParagraph.style.gridRow = "2";
    wrapper.appendChild(bambooParagraph);

    const cherryParagraph = document.createElement("p");
    const cherryChair = document.createElement("img");
    cherryChair.src = "woodshoppics/cherrywood.jpg";
    cherryParagraph.appendChild(cherryChair);
    cherryParagraph.appendChild(document.createElement("br"));
    const cherryBox = document.createElement("input");
    cherryBox.type = "checkbox";
    cherryBox.name = "chairs";
    cherryBox.value = "Cherry Chair";
    const cherryLabel = document.createElement("span");
    cherryLabel.textContent = " Cherry Wood"; 
    cherryParagraph.appendChild(cherryBox);
    cherryParagraph.appendChild(cherryLabel);
    const cherryPrice = document.createElement("p");
    cherryPrice.textContent = "45.00$";
    cherryParagraph.appendChild(cherryPrice);
    cherryParagraph.style.gridColumn = "3";
    cherryParagraph.style.gridRow = "2";
    wrapper.appendChild(cherryParagraph);

    return wrapper;
}

// Table interface
// Drawer interface
// Shelves interface


// Clear cart functionality
function clearCart(){
    const cart = document.getElementById("cart-items");
    cart.innerHTML = '';
    cart.textContent = "Your shopping cart is empty."
}

// Checkout functionality
function checkoutCart(){
    const checkout = document.getElementById("checkout-text");
    checkout.textContent = "Feature coming soon!";
}