window.addEventListener('DOMContentLoaded', function() {
    const product = document.querySelectorAll('.product'),
          buttons = document.querySelectorAll('button'),
          openBtn = document.querySelector('.open');

    function createCart() {
        let cart = document.createElement('div'),
            field = document.createComment('div'),
            heading = document.createComment('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        heading.textContent = 'В нашей корзине:';
        closeBtn.textContent = 'Закрыть';

        document.body.appendChild(cart);
    }      
});


