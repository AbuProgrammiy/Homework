var count = 1

function Create() {
    var newCard = document.createElement("div");
    newCard.id = `card-${count}`;
    newCard.classList.add("card");
    newCard.style.width = "18rem";

    var img = document.createElement("img");
    img.src = "images/tree.png";
    img.classList.add("card-img-top");
    img.alt = "rasmni LINKIni joylang!";
    newCard.appendChild(img);

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    var cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "FullName";
    cardBody.appendChild(cardTitle);

    var cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = "Password";
    cardBody.appendChild(cardText);

    var deleteButton = document.createElement("button");
    deleteButton.onclick = function () {
        DeleteElement(this.parentNode.parentNode.id);
    }
    deleteButton.setAttribute("type", "button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.style = "margin-right: 5px"
    deleteButton.textContent = "Delete";
    cardBody.appendChild(deleteButton);

    var updateButton = document.createElement("button");
    updateButton.setAttribute("type", "button");
    updateButton.classList.add("btn", "btn-warning");
    updateButton.textContent = "Update";
    updateButton.setAttribute("data-bs-toggle", "modal");
    updateButton.setAttribute("data-bs-target", "#exampleModal");
    updateButton.setAttribute("data-bs-whatever", "@mdo");
    updateButton.setAttribute("data-id", newCard.id); // Set the data-id attribute to the card's id
    cardBody.appendChild(updateButton);

    updateButton.addEventListener("click", function () {
        var id = this.getAttribute("data-id");
        OpenModal(id);
    });

    newCard.appendChild(cardBody);

    document.getElementById("main-content").appendChild(newCard);

    count++;
}

var isEventListenerAdded = false;

var nextId = 1; // Initialize the nextId variable

function CreateCard() {
    // Create a new card element with a unique id
    var newCard = document.createElement("div");
    newCard.id = "card-" + nextId;
    newCard.innerHTML = "<h2>Card " + nextId + "</h2><button onclick='OpenModal(" + nextId + ")'>Open Modal</button>";

    // Append the new card element to the container
    var container = document.querySelector("#card-container");
    container.appendChild(newCard);

    nextId++; // Increment the nextId value for the next card
}


function OpenModal(id) {
    var saveButton = document.querySelector("#exampleModal .modal-footer #save-button");

    saveButton.addEventListener("click", function () {
        var imagePath = document.querySelector("#image-path").value;
        var fullName = document.querySelector("#recipient-name").value;
        var password = document.querySelector("#message-text").value;
        Update(id, imagePath, fullName, password);
        // Close the modal after updating
        var modal = document.getElementById("exampleModal");
        var modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
    });
}

function openImageDirectory(id) {
    // This function will be called when "Choose Image" button is clicked
    // You can implement your logic here to open the directory and choose an image
    // Once the image is chosen, you can update the image source in the modal
    // and store the image path for later use
    var imageSrc = ""; // Set the chosen image path here
    document.querySelector("#exampleModal .modal-body img").src = imageSrc;
}

function DeleteElement(id) {
    document.getElementById(id).remove()
}

/*
data-bs-toggle="modal" data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
*/


function Update(id, imagePath, fullName, password) {
    var parentDiv = document.getElementById(id);
    var header = parentDiv.querySelector("h5");
    var paraghr = parentDiv.querySelector("p");
    var image = parentDiv.querySelector("img");
    header.textContent = fullName;
    paraghr.textContent = password;
    image.src = imagePath;
}