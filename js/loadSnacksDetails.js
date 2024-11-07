document.addEventListener("DOMContentLoaded", function () {
    const snackName = window.location.pathname.split("/").pop().split(".")[0];  // Extract snack name from URL

    fetch("../assets/menu.json")
        .then(response => response.json())
        .then(data => {
            const snackData = data.snacks.find(snack => snack.id === snackName); // Find the matching snack by id

            if (snackData) {
                document.getElementById("snack-name").textContent = snackData.name;
                document.getElementById("snack-image").src = snackData.image;
                document.getElementById("snack-description").textContent = snackData.description;
                document.getElementById("snack-price").textContent = snackData.price;
                document.querySelector(".order-button span#snack-price").textContent = "$" + snackData.price;
            } else {
                document.getElementById("snack-name").textContent = "Snack not found";
                document.getElementById("snack-description").textContent = "Sorry, we couldn't find this snack.";
                document.getElementById("snack-price").textContent = "N/A";
                document.querySelector(".order-button span#snack-price").textContent = "N/A";
            }
        })
        .catch(error => {
            console.error("Error loading the menu data:", error);
        });
});
