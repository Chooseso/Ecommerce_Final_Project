document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.querySelector(".cart-box");

    function loadCart() {
        cartContainer.innerHTML = ""; // Clear cart display
        let itemCount = localStorage.getItem("cartCount") || 0;

        if (itemCount == 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            return;
        }

        for (let i = 0; i < itemCount; i++) {
            let item = localStorage.getItem(`cartItem${i}`);
            if (item) {
                let [name, image, price, quantity] = item.split("|");

                let cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                let total = parseFloat(price) * parseInt(quantity);

                cartItem.innerHTML = `
                    <img src="${image}" alt="${name}">
                    <div class="cart-details">
                        <h3>${name}</h3>
                        <p class="price">₱${price}</p>
                    </div>
                    <div class="quantity-box">
                        <label>Quantity</label>
                        <input type="number" value="${quantity}" min="1" data-index="${i}" class="cart-quantity">
                    </div>
                    <div class="total-box">
                        <label>Total</label>
                        <p class="total">₱${total.toFixed(2)}</p>
                    </div>
                    <button class="remove-item" data-index="${i}">Remove</button>
                `;

                cartContainer.appendChild(cartItem);
            }
        }
    }

    // Add to Cart functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let itemName = this.getAttribute("data-name");
            let itemImage = this.getAttribute("data-image");
            let itemPrice = this.getAttribute("data-price");
            let itemQuantity = 1; // Default quantity is 1

            let itemCount = localStorage.getItem("cartCount") || 0;
            localStorage.setItem(`cartItem${itemCount}`, `${itemName}|${itemImage}|${itemPrice}|${itemQuantity}`);
            localStorage.setItem("cartCount", parseInt(itemCount) + 1);

            loadCart(); // Refresh the cart
        });
    });

    // Remove item from cart
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-item")) {
            let index = event.target.getAttribute("data-index");

            let itemCount = localStorage.getItem("cartCount") || 0;
            let newItems = [];

            for (let i = 0; i < itemCount; i++) {
                if (i != index) {
                    let item = localStorage.getItem(`cartItem${i}`);
                    if (item) {
                        newItems.push(item);
                    }
                }
            }

            localStorage.clear(); // Clear old cart
            for (let i = 0; i < newItems.length; i++) {
                localStorage.setItem(`cartItem${i}`, newItems[i]); // Re-save items sequentially
            }
            localStorage.setItem("cartCount", newItems.length);
            loadCart(); // Refresh the cart
        }
    });

    loadCart(); // Load cart when page loads
});

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

document.querySelector(".cart-btn").addEventListener("click", function(){
    window.location.href = "index.html"
})