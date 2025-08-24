// Divs and sections here
var market = document.getElementById("market");
var chair = document.getElementById("chair");

const originalMarket = market.innerHTML;
const originalChair = chair.style.display;

// Chair interface
function chairOptions(){
    // Clearing chair screen (ADD CLEAR ALL SECTIONS)
    chair.style.display = "none";
    market.style.display = "grid";
    market.innerHTML = "";

    // Create back button
    const backButton = document.createElement("button");
    backButton.textContent = "< Back";
    backButton.addEventListener("click", () => {
        market.innerHTML = originalMarket;
        chair.style.display = originalChair;
        backButton.remove();
    });
    backButton.style.height = "50px";
    backButton.style.width = "75px";
    backButton.style.gridColumn = "1";
    backButton.style.gridColumn = "1";
    market.appendChild(backButton);
    market.appendChild(document.createElement("br"));
    market.appendChild(document.createElement("br"));

    // Display chair options as checkboxes
    const oakParagraph = document.createElement("p");
    const oakChair = document.createElement("img");
    oakChair.src = "woodshoppics/oakchair.jpg";
    oakParagraph.appendChild(oakChair);
    oakParagraph.appendChild(document.createElement("br"));
    const oakBox = document.createElement("input");
    oakBox.type = "checkbox";
    oakBox.name = "chairs";
    oakBox.value = "oak-chair";
    const oakLabel = document.createElement("span");
    oakLabel.textContent = " Oak"
    oakParagraph.appendChild(oakBox);
    oakParagraph.appendChild(oakLabel);
    const oakPrice = document.createElement("p");
    oakPrice.textContent = "25.00$";
    oakParagraph.appendChild(oakPrice);
    oakParagraph.style.gridColumn = "2";
    oakParagraph.style.gridRow = "1";
    market.appendChild(oakParagraph);

    const spruceParagraph = document.createElement("p");
    const spruceChair = document.createElement("img");
    spruceChair.src = "woodshoppics/sprucechair.jpg";
    spruceParagraph.appendChild(spruceChair);
    spruceParagraph.appendChild(document.createElement("br"));
    const spruceBox = document.createElement("input");
    spruceBox.type = "checkbox";
    spruceBox.name = "chairs";
    spruceBox.value = "spruce-chair";
    const spruceLabel = document.createElement("span");
    spruceLabel.textContent = " Spruce";
    spruceParagraph.appendChild(spruceBox);
    spruceParagraph.appendChild(spruceLabel);
    const sprucePrice = document.createElement("p");
    sprucePrice.textContent = "30.00$";
    spruceParagraph.appendChild(sprucePrice);
    spruceParagraph.style.gridColumn = "3";
    spruceParagraph.style.gridRow = "1";
    market.appendChild(spruceParagraph);

    const birchParagraph = document.createElement("p");
    const birchChair = document.createElement("img");
    birchChair.src = "woodshoppics/birchchair.jpg";
    birchParagraph.appendChild(birchChair);
    birchParagraph.appendChild(document.createElement("br"));
    const birchBox = document.createElement("input");
    birchBox.type = "checkbox";
    birchBox.name = "chairs";
    birchBox.value = "birch-chair";
    const birchLabel = document.createElement("span");
    birchLabel.textContent = " Birch";
    birchParagraph.appendChild(birchBox);
    birchParagraph.appendChild(birchLabel);
    const birchPrice = document.createElement("p");
    birchPrice.textContent = "35.00$";
    birchParagraph.appendChild(birchPrice);
    birchParagraph.style.gridColumn = "4";
    birchParagraph.style.gridRow = "1";
    market.appendChild(birchParagraph);

    const bambooParagraph = document.createElement("p");
    const bambooChair = document.createElement("img");
    bambooChair.src = "woodshoppics/bamboochair.jpg";
    bambooParagraph.appendChild(bambooChair);
    bambooParagraph.appendChild(document.createElement("br"));
    const bambooBox = document.createElement("input");
    bambooBox.type = "checkbox";
    bambooBox.name = "chairs";
    bambooBox.value = "bamboo-chair";
    const bambooLabel = document.createElement("span");
    bambooLabel.textContent = " Bamboo";
    bambooParagraph.appendChild(bambooBox);
    bambooParagraph.appendChild(bambooLabel);
    const bambooPrice = document.createElement("p");
    bambooPrice.textContent = "40.00$";
    bambooParagraph.appendChild(bambooPrice);
    bambooParagraph.style.gridColumn = "2";
    bambooParagraph.style.gridRow = "2";
    market.appendChild(bambooParagraph);

    const cherryParagraph = document.createElement("p");
    const cherryChair = document.createElement("img");
    cherryChair.src = "woodshoppics/cherrywood.jpg";
    cherryParagraph.appendChild(cherryChair);
    cherryParagraph.appendChild(document.createElement("br"));
    const cherryBox = document.createElement("input");
    cherryBox.type = "checkbox";
    cherryBox.name = "chairs";
    cherryBox.value = "cherry-chair";
    const cherryLabel = document.createElement("span");
    cherryLabel.textContent = " Cherry Wood"; 
    cherryParagraph.appendChild(cherryBox);
    cherryParagraph.appendChild(cherryLabel);
    const cherryPrice = document.createElement("p");
    cherryPrice.textContent = "45.00$";
    cherryParagraph.appendChild(cherryPrice);
    cherryParagraph.style.gridColumn = "3";
    cherryParagraph.style.gridRow = "2";
    market.appendChild(cherryParagraph);

    // Create add to cart button
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Shopping Cart";
    addButton.style.alignItems = "center";
    addButton.style.height = "75px";
    addButton.style.width = "125px";
    addButton.addEventListener("click", () => {
        // Look at checkboxed items and add to shopping cart
    });
    addButton.style.gridColumn = "4";
    addButton.style.gridRow = "2";
    market.appendChild(addButton);
}

// Table interface
// Drawer interface
// Shelves interface



// Clear cart functionality (add individual deletes)
// Checkout functionality