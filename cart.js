// Sample cart functionality for managing cart items

// Initialize cart from localStorage or an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a product to the cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    updateCartCount();
    displayCartItems();
}

// Update the displayed cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length; // Display the number of items in the cart
}

// Calculate and update the total price of the items in the cart
function updateCartTotal() {
    const totalElement = document.getElementById('checkout-total');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalElement.innerText = total.toFixed(2); // Display the total with two decimal places
}

// Display the cart items on the cart page
function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous cart items

    // Iterate over each item in the cart and display them
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>RM${item.price}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    updateCartTotal(); // Update the total price
}

// Remove an item from the cart by index
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    displayCartItems(); // Re-display the updated cart
    updateCartCount(); // Update the cart count
}

// On page load, display the cart items and update the count
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    updateCartCount();
});
