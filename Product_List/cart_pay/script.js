document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.querySelector(".cart-box");
    const itemsTotal = document.querySelector(".summary p:nth-child(1) span");
    const shippingFee = document.querySelector(".summary p:nth-child(2) span");
    const grandTotal = document.querySelector(".summary p.total span");
    const shippingCost = 150; // Set fixed shipping fee

    function loadCart() {
        cartContainer.innerHTML = ""; // Clear cart display
        let itemCount = localStorage.getItem("cartCount") || 0;
        let subtotal = 0;

        if (itemCount == 0) {
            cartContainer.innerHTML = "<p>Your cart is empty.</p>";
            updateSummary(0);
            return;
        }

        for (let i = 0; i < itemCount; i++) {
            let item = localStorage.getItem(`cartItem${i}`);
            if (item) {
                let [name, image, price, quantity] = item.split("|");
                let total = parseFloat(price) * parseInt(quantity);
                subtotal += total;

                let cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");

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
        updateSummary(subtotal);
    }

    function updateSummary(subtotal) {
        itemsTotal.textContent = `₱${subtotal.toFixed(2)}`;
        let totalAmount = subtotal > 0 ? subtotal + shippingCost : 0;
        shippingFee.textContent = subtotal > 0 ? `₱${shippingCost}` : `₱0`;
        grandTotal.textContent = `₱${totalAmount.toFixed(2)}`;
    }

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
            localStorage.clear();
            for (let i = 0; i < newItems.length; i++) {
                localStorage.setItem(`cartItem${i}`, newItems[i]);
            }
            localStorage.setItem("cartCount", newItems.length);
            loadCart();
        }
    });

    loadCart();
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

const checkout_product_modal = document.querySelector(".checkout-btn1");

checkout_product_modal.addEventListener("click", function () {
    const form_container = document.querySelector(".form-container");
    const checkout_done = document.createElement("div");
    checkout_done.innerText = "Checkout Done";
    checkout_done.style.textAlign = "center";
    checkout_done.style.marginTop = "20px";
    checkout_done.style.backgroundColor = "green";
    checkout_done.style.fontSize = "20px";
    checkout_done.style.borderRadius = "5px";

    form_container.appendChild(checkout_done);

    setTimeout(() => {
        form_container.removeChild(checkout_done);
    }, 1000);
    
    // Clear the cart in localStorage and update the cart display immediately
    localStorage.clear();  // Remove all cart items from localStorage
    
    // Directly call loadCart to update the cart display
    loadCart(); // This will update the page with the empty cart

    // Update the cart summary to reflect the empty cart
    updateSummary(0);
});
