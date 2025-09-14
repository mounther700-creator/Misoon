document.addEventListener("DOMContentLoaded", function() {
    const shows = [
        { name: "Spring Expo", date: "2024-04-15", location: "New York" },
        { name: "Summer Sale Fest", date: "2024-06-20", location: "Los Angeles" }
    ];

    const products = [
        { name: "Smartphone X", description: "Latest model with advanced features." },
        { name: "Laptop Pro", description: "High performance laptop for professionals." }
    ];

    const showList = document.getElementById("show-list");
    shows.forEach(show => {
        const div = document.createElement("div");
        div.textContent = `${show.name} - ${show.date} - ${show.location}`;
        showList.appendChild(div);
    });

    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${product.name}</strong>: ${product.description}`;
        productList.appendChild(div);
    });

    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your message!");
    });
});
