// Location logistics
document.getElementById("canada-select").onclick = function(){
    // Clear from any previous actions
    const addingElements = document.getElementById("followup-location");
    addingElements.innerHTML = '';

    // Creating new label and dropbox for provinces
    const provinceLabel = document.createElement("label");
    provinceLabel.textContent = "Province of Residence: ";
    const newSelect = document.createElement("select");
    newSelect.className = "selectbox";
    newSelect.required = true;

    // Adding options to select
    const option1 = document.createElement("option");
    option1.value = "AB";
    option1.textContent = "Alberta";
    newSelect.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = "BC";
    option2.textContent = "British Columbia";
    newSelect.appendChild(option2);

    const option3 = document.createElement("option");
    option3.value = "MB";
    option3.textContent = "Manitoba";
    newSelect.appendChild(option3);

    const option4 = document.createElement("option");
    option4.value = "NB";
    option4.textContent = "New Brunswick";
    newSelect.appendChild(option4);

    const option5 = document.createElement("option");
    option5.value = "NL";
    option5.textContent = "Newfoundland & Labrador";
    newSelect.appendChild(option5);

    const option6 = document.createElement("option");
    option6.value = "NT";
    option6.textContent = "Northwest Territories";
    newSelect.appendChild(option6);

    const option7 = document.createElement("option");
    option7.value = "NS";
    option7.textContent = "Nova Scotia";
    newSelect.appendChild(option7);

    const option8 = document.createElement("option");
    option8.value = "NU";
    option8.textContent = "Nunavut";
    newSelect.appendChild(option8);

    const option9 = document.createElement("option");
    option9.value = "ON";
    option9.textContent = "Ontario";
    newSelect.appendChild(option9);

    const option10 = document.createElement("option");
    option10.value = "PE";
    option10.textContent = "Prince Edward Island";
    newSelect.appendChild(option10);

    const option11 = document.createElement("option");
    option11.value = "QC";
    option11.textContent = "Quebec";
    newSelect.appendChild(option11);

    const option12 = document.createElement("option");
    option12.value = "SK";
    option12.textContent = "Saskatchewan";
    newSelect.appendChild(option12);

    const option13 = document.createElement("option");
    option13.value = "YT";
    option13.textContent = "Yukon";
    newSelect.appendChild(option13);

    // Entering home address
    const addressLabel = document.createElement("label");
    addressLabel.textContent = "Home address: ";
    const addressBox = document.createElement("input");
    addressBox.className = "textbox";
    addressBox.placeholder = "Enter your full address";
    addressBox.required = true;

    // Adding select and home address box to div
    addingElements.appendChild(document.createElement("p"));
    addingElements.appendChild(provinceLabel);
    addingElements.appendChild(newSelect);  
    addingElements.appendChild(document.createElement("p"));  
    addingElements.appendChild(addressLabel);
    addingElements.appendChild(addressBox);
}

let otherCountries = Array.from(document.getElementsByClassName("other-select"));
otherCountries.forEach(element => {
    element.addEventListener("click", () => {
        // Clear from any previous actions
        const addingElements = document.getElementById("followup-location");
        addingElements.innerHTML = '';

        confirm("In-person repairs cannot be performed worldwide. Please confirm that your repair is shippable/consultable before proceeding.");

        // Entering country name and home address
        const countryLabel = document.createElement("label");
        countryLabel.textContent = "Country Name: ";
        const countryBox = document.createElement("input");
        countryBox.className = "textbox";
        countryBox.placeholder = "Enter full country name";
        countryBox.required = true;

        const addressLabel = document.createElement("label");
        addressLabel.textContent = "Home address: ";
        const addressBox = document.createElement("input");
        addressBox.className = "textbox";
        addressBox.placeholder = "Enter your full address";
        addressBox.required = true;

        // Adding country and address to div
        addingElements.appendChild(document.createElement("p"));
        addingElements.appendChild(countryLabel);
        addingElements.appendChild(countryBox);
        addingElements.appendChild(document.createElement("p"));
        addingElements.appendChild(addressLabel);
        addingElements.appendChild(addressBox);
    });
});

// Deal with email validation/form validation
function validateForm(){
    const emailAddress = document.getElementById("email-input").value;
    const atSymbol = emailAddress.indexOf("@");
    const dotSymbol = emailAddress.lastIndexOf(".");
    if (atSymbol == -1 || atSymbol != emailAddress.lastIndexOf("@") || atSymbol == emailAddress.length-1 || dotSymbol == -1 || dotSymbol == emailAddress.length-1 || dotSymbol == atSymbol+1){
        alert ("Email must follow a valid format; example@domain.com");
        return false;
    }

    // if email valid, clear page and redirect to home
    const name = document.getElementById("name-input").value;
    const pageDiv = document.getElementById("form-style");
    pageDiv.innerHTML = '';

    const thankMessage = document.createElement("h3");
    thankMessage.textContent = "Thank you, " + name + "!";
    pageDiv.appendChild(thankMessage);

    const successMessage = document.createElement("p");
    successMessage.textContent = "Form was successfully submitted!\nExpect an email response within the next 7 working days.";
    pageDiv.appendChild(successMessage);

    const homeButton = document.createElement("button");
    homeButton.textContent = "Return to Home";
    homeButton.addEventListener("click", function(){
        location = "homepage.html";
    });
    pageDiv.appendChild(homeButton);

    return true;
}

// On submit action
document.getElementById("repair-form").onsubmit = validateForm;
