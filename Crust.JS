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

