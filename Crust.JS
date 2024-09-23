function openModal() {
    console.log("Modal is opening"); // For debugging
    document.getElementById("giftCardModal").style.display = "block";
}

function closeModal() {
    document.getElementById("giftCardModal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("giftCardModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


document.querySelector('.purchase-button').addEventListener('click', function() {
    const selectedCard = document.getElementById('gift-card-type').value;
    if (selectedCard) {
        alert(`You have selected a ${selectedCard} USD gift card!`);
        // Here you can add your purchase logic, such as sending the selection to the server or processing it further
    } else {
        alert('Please select a gift card type.');
    }
});

// Event listener for the Go to Shopping Cart button
document.getElementById("go-to-cart").addEventListener("click", function() {
    window.location.href = "Shoppingcart.html"; // Navigate to the shopping cart page
});



document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));

        const item = {
            name: name,
            price: price
        };

        // Retrieve existing cart items from localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Add the new item to the cart
        cart.push(item);

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${name} has been added to the cart!`);
    });
});
