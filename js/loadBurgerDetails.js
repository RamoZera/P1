document.addEventListener("DOMContentLoaded", function () {
    const burgerName = window.location.pathname.split("/").pop().split(".")[0];  // Extract burger name from URL

    fetch("../assets/menu.json")
        .then(response => response.json())
        .then(data => {
            const burgerData = data.burgers.find(burger => burger.id === burgerName); // Find the matching burger by id

            if (burgerData) {
                document.getElementById("burger-name").textContent = burgerData.name;
                document.getElementById("burger-image").src = burgerData.image;
                document.getElementById("burger-description").textContent = burgerData.description;
                document.getElementById("burger-price").textContent = burgerData.price;
                document.querySelector(".order-button span#burger-price").textContent = "$" + burgerData.price;
            } else {
                document.getElementById("burger-name").textContent = "Burger not found";
                document.getElementById("burger-description").textContent = "Sorry, we couldn't find this burger.";
                document.getElementById("burger-price").textContent = "N/A";
                document.querySelector(".order-button span#burger-price").textContent = "N/A";
            }
        })
        .catch(error => {
            console.error("Error loading the menu data:", error);
        });
});
