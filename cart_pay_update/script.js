document.addEventListener("DOMContentLoaded", function () {
    const checkoutBtn = document.getElementById("checkout-btn");
    const checkoutForm = document.getElementById("checkout-form");
    const removeButtons = document.querySelectorAll(".remove-item");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("close-btn");
    const confirmCheckoutBtn = document.getElementById("confirm-checkout");
    const successMessage = document.getElementById("success-message");

    checkoutBtn.addEventListener("click", function () {
        checkoutForm.style.display = "flex";
        overlay.style.display = "block";
    });

    function closeCheckout() {
        checkoutForm.style.display = "none";
        overlay.style.display = "none";
    }

    closeBtn.addEventListener("click", closeCheckout);
    overlay.addEventListener("click", closeCheckout);
    
    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const cartItem = this.closest(".cart-item");
            if (cartItem) {
                cartItem.remove();
            }
        });
    });

    confirmCheckoutBtn.addEventListener("click", function (event) {
        event.preventDefault();

        closeCheckout();
        successMessage.style.display = "block";

        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    });
});