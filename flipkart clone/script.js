document.addEventListener('DOMContentLoaded', function () {
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = button.closest('.product');
            const productName = product.getAttribute('data-name');
            const productPrice = product.getAttribute('data-price');

            cartCount++;
            cartCountElement.textContent = cartCount;

            alert(${productName} added to cart for $${productPrice});
        });
    });
});