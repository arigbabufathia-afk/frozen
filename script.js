// Cart array
let cart = [];

// Update cart badge
function updateCartIcon() {
    let count = 0;

    // count total quantities in cart
    cart.forEach(item => {
        count += item.quantity;
    });

    document.getElementById("cartCount").textContent = count;
}

// Add to Cart Function
function addToCart(productName, productPrice, productImage) {
    let item = {
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    // Check if product already exists
    let existing = cart.find(product => product.name === productName);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push(item);
    }

    // Update cart count on icon
    updateCartIcon();
// prompt("did you want to add to cart")
    alert(productName + " added to cart!");
    console.log(cart);
}




