// required variables
let elPizzaForm = document.querySelector(".pizza-form");
let elBreadSelect = elPizzaForm.querySelector(".bread-select");
let elSizePizza = elPizzaForm.querySelector(".size-radio");
let elToppingCheckboxWrapper = elPizzaForm.querySelector(".topping-checkbox");
let elExtraProduct = elPizzaForm.querySelector(".extra-product");

let elOrderPlace = document.querySelector(".order-place");
let elOrderBread = elOrderPlace.querySelector(".order-bread");
let elOrderSize = elOrderPlace.querySelector(".order-size");
let elOrderToppings = elOrderPlace.querySelector(".order-toppings");
let elOrderExtra = elOrderPlace.querySelector(".order-extra");
let orderBtn = elOrderPlace.querySelector(".order-btn");

// Arrays

let breadThickness = ["Yupqa", "O'rtacha", "Qalin"];
let sizes = [25, 30, 35];
let toppings = [
    "Pomidor",
    "Tuzlangan bodring",
    "Kurka go'shti",
    "Qo'ziqorin",
    "Zaytun",
    "Qazi",
];
let extra = ["Achchiq", "Sosiskali"];

let orderToppings = [];
let orderExtra = [];

// bread Thickness selection

for (let i = 0; i < breadThickness.length; i++) {
    let elNewBreadOption = document.createElement("option");
    elNewBreadOption.textContent = breadThickness[i];
    elBreadSelect.appendChild(elNewBreadOption);
}

let updateBreadThickness = function () {
    elOrderBread.textContent = elBreadSelect.value;
};

updateBreadThickness();
elBreadSelect.addEventListener("change", updateBreadThickness);

// bread size selection

for (let i = 0; i < sizes.length; i++) {
    let elSizeLabel = document.createElement("label");
    let elSizeInput = document.createElement("input");
    let elSizeSpan = document.createElement("span");
    
    elSizeInput.type = "radio";
    elSizeInput.name = "size";
    elSizeInput.className = "input-style";
    elSizeInput.value = sizes[i];
    
    elSizeSpan.textContent = ` ${sizes[i]}sm`;
    elSizeSpan.className = "me-2";
    
    elSizeInput.addEventListener("change", function () {
        elOrderSize.textContent = sizes[i];
    });
    elSizeLabel.append(elSizeInput, elSizeSpan);
    elSizePizza.appendChild(elSizeLabel);
}

// extra product selection

for (let i = 0; i < extra.length; i++) {
    let elAddLabel = document.createElement("label");
    let elAddInput = document.createElement("input");
    let elAddSpan = document.createElement("span");

    elAddInput.type = "checkbox";
    elAddInput.name = "size";
    elAddInput.value = extra[i];
    elAddSpan.textContent = extra[i];
    elAddInput.className = "input-style me-1";
    elAddSpan.className = "me-2"

    elAddLabel.append(elAddInput, elAddSpan);
    elExtraProduct.appendChild(elAddLabel);

    elAddInput.addEventListener("change", function () {
        if (orderExtra.indexOf( extra[i]) > -1) {
            let addlIndex = orderExtra.indexOf( extra[i]);
            orderExtra.splice(addlIndex, 1);
        } else {
            orderExtra.push( extra[i]);
        }
        showOrderExtra();
    });
}

let showOrderExtra = function () {
    elOrderExtra.innerHTML = "";
    
    for (let i = 0; i < orderExtra.length; i++) {
        let elNewExralLi = document.createElement("li");
        elNewExralLi.textContent = orderExtra[i];
        elOrderExtra.appendChild(elNewExralLi);
    }
};

// selection of basic products

for (let i = 0; i < toppings.length; i++) {
    let elAddTopLabel = document.createElement("label");
    let elAddTopInput = document.createElement("input");
    let elToppingSpan = document.createElement("span");

    elAddTopInput.type = "checkbox";
    elAddTopInput.name = "size";
    elAddTopInput.className = "input-style me-2";
    elAddTopInput.value = toppings[i];

    elToppingSpan.textContent = toppings[i];

    elAddTopLabel.append(elAddTopInput, elToppingSpan);
    elToppingCheckboxWrapper.appendChild(elAddTopLabel);

    elAddTopInput.addEventListener("change", function () {
        if (orderToppings.indexOf(toppings[i]) > -1) {
            let toppingIndex = orderToppings.indexOf(toppings[i]);
            orderToppings.splice(toppingIndex, 1);
        } else {
            orderToppings.push(toppings[i]);
        }
        showOrderToppings();
    });
}

let showOrderToppings = function () {
    elOrderToppings.innerHTML = "";

    for (let i = 0; i < orderToppings.length; i++) {
        let elOrderToppingLi = document.createElement("li");
        elOrderToppingLi.textContent = orderToppings[i];
        elOrderToppings.appendChild(elOrderToppingLi);
    }
};



// orderBtn.addEventListener("click", function(event){
//     alert("Sizning buyurtmangiz qabul qilindi! 👍🎉");
//     window.location.reload();
//     event.preventDefault();
// });