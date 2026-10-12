```javascript
/* =====================================
   PRODUCT DATA
===================================== */

const products = {

    "Velvet Lipstick": {
        price: "$18.00",
        message:
            "Smooth creamy lipstick with a long-lasting finish."
    },

    "Glow Foundation": {
        price: "$29.00",
        message:
            "Lightweight foundation for a smooth glowing complexion."
    },

    "Rose Blush": {
        price: "$20.00",
        message:
            "Soft rosy color for a natural fresh finish."
    },

    "Diamond Highlighter": {
        price: "$24.00",
        message:
            "Add a beautiful luminous glow to your favorite features."
    }

};



/* =====================================
   PRODUCT BUTTONS
===================================== */

const productButtons =
    document.querySelectorAll(".product-btn");


productButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const productName =
                button.dataset.product;


            const product =
                products[productName];


            /*
               PRODUCT ALERT
            */

            alert(
                "✨ " +
                productName +
                "\n\n" +
                product.message +
                "\n\n" +
                "Price: " +
                product.price +
                "\n\n" +
                "Welcome to Glow Beauty 💗"
            );

        }
    );

});



/* =====================================
   CONTACT FORM
===================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value;


        const email =
            document.getElementById(
                "email"
            ).value;


        const message =
            document.getElementById(
                "message"
            ).value;


        /*
           CONTACT ALERT
        */

        alert(
            "💗 Thank you, " +
            name +
            "!\n\n" +
            "Your message has been received.\n\n" +
            "We will contact you at:\n" +
            email
        );


        /*
           CLEAR FORM
        */

        contactForm.reset();

    }
);



/* =====================================
   NAVBAR ANIMATION
===================================== */

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


navLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            navLinks.forEach(
                function(item) {

                    item.style.color = "";

                }
            );


            link.style.color =
                "#d65b8c";

        }
    );

});
```
