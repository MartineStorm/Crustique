document.getElementById("go-to-cart").addEventListener("click", function() {
    window.location.href = "Shoppingcart.html"; // Navigate to the shopping cart page
});


window.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsUl = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartItemsUl.innerHTML = '<li>Your cart is empty.</li>';
    } else {
        cart.forEach(item => {
            const itemLi = document.createElement('li');
            itemLi.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsUl.appendChild(itemLi);
        });
    }
});
