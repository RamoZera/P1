document.addEventListener("DOMContentLoaded", function () {
    const dessertName = window.location.pathname.split("/").pop().split(".")[0];  // Extract dessert name from URL

    fetch("../assets/menu.json")
        .then(response => response.json())
        .then(data => {
            const dessertData = data.desserts.find(dessert => dessert.id === dessertName); // Find the matching dessert by id

            if (dessertData) {
                document.getElementById("dessert-name").textContent = dessertData.name;
                document.getElementById("dessert-image").src = dessertData.image;
                document.getElementById("dessert-description").textContent = dessertData.description;
                document.getElementById("dessert-price").textContent = dessertData.price;
                document.querySelector(".order-button span#dessert-price").textContent = "$" + dessertData.price;
            } else {
                document.getElementById("dessert-name").textContent = "Dessert not found";
                document.getElementById("dessert-description").textContent = "Sorry, we couldn't find this dessert.";
                document.getElementById("dessert-price").textContent = "N/A";
                document.querySelector(".order-button span#dessert-price").textContent = "N/A";
            }
        })
        .catch(error => {
            console.error("Error loading the menu data:", error);
        });
});
