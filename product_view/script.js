document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.querySelector(".quantity-input");
    const increaseBtn = document.querySelector(".arrow-keys:nth-of-type(1)"); // First arrow (increase)
    const decreaseBtn = document.querySelector(".arrow-keys:nth-of-type(2)"); // Second arrow (decrease)
    const totalAmountInput = document.querySelector(".total-amount input");
    
    const pricePerItem = 2000; // Base price of the product

    // Function to update total price
    function updateTotal() {
        let quantity = parseInt(quantityInput.value);
        if (isNaN(quantity) || quantity < 1) {
            quantity = 1; // Prevent invalid or negative quantity
        }
        quantityInput.value = quantity;
        totalAmountInput.value = `₱ ${quantity * pricePerItem}`;
    }

    // Increase quantity
    increaseBtn.addEventListener("click", function () {
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateTotal();
    });

    // Decrease quantity (but not below 1)
    decreaseBtn.addEventListener("click", function () {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
            updateTotal();
        }
    });

    // Listen for manual input change
    quantityInput.addEventListener("input", updateTotal);
    
    // Initialize total on page load
    updateTotal();
});
