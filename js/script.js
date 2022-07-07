window.addEventListener('DOMContentLoaded', function() {
    const product = document.querySelectorAll('.product'),
          buttons = document.querySelectorAll('button'),
          openBtn = document.querySelector('.open');

    createCart();      

    function createCart() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart');
        field.classList.add('cart-field');
        closeBtn.classList.add('close');

        heading.textContent = 'В нашей корзине:';
        closeBtn.textContent = 'Закрыть';

        document.body.appendChild(cart);
        cart.appendChild(heading);
        cart.appendChild(field);
        cart.appendChild(closeBtn);
    }      

        const field = document.querySelector('.cart-field'),
              cart = document.querySelector('.cart'),
              close = document.querySelector('.close');

    function openCart() {
        cart.style.display = 'block';
    }

    function closeCart() {
        cart.style.display = 'none';
    }

    openBtn.addEventListener('click', openCart);

    close.addEventListener('click', closeCart);

    buttons.forEach((item, i) => {
        item.addEventListener('click', () => {
            const item = product[i].cloneNode(true),
                  btn = item.querySelector('button');

            btn.remove();
            field.appendChild(item);
            product[i].remove();
        });
    });
});




