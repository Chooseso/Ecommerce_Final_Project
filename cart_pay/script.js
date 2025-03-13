document.addEventListener("DOMContentLoaded", function () {
    // Elements for checkout modal functionality
    const checkoutBtn = document.getElementById("checkout-btn");
    const checkoutForm = document.getElementById("checkout-form");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("close-btn");

    // Show checkout form and overlay
    checkoutBtn.addEventListener("click", function () {
        checkoutForm.style.display = "flex";
        overlay.style.display = "block";
    });

    // Close checkout form
    closeBtn.addEventListener("click", function () {
        checkoutForm.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", function () {
        checkoutForm.style.display = "none";
        overlay.style.display = "none";
    });

    // Remove item from cart
    const removeButtons = document.querySelectorAll(".remove-item");

    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const cartItem = this.closest(".cart-item");
            if (cartItem) {
                cartItem.remove();
            }
        });
    });
});
