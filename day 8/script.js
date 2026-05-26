<<<<<<< HEAD
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item){

  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(item + " added to cart!");
}

function displayCart(){

  let cartItems = document.getElementById("cart-items");

  if(cartItems){

    cartItems.innerHTML = "";

    cart.forEach((item,index)=>{

      let li = document.createElement("li");

      li.innerHTML = `${index + 1}. ${item}`;

      cartItems.appendChild(li);

    });
  }
}

displayCart();

function submitForm(event){

  event.preventDefault();

  alert("Message Sent Successfully!");
=======
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item){

  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(item + " added to cart!");
}

function displayCart(){

  let cartItems = document.getElementById("cart-items");

  if(cartItems){

    cartItems.innerHTML = "";

    cart.forEach((item,index)=>{

      let li = document.createElement("li");

      li.innerHTML = `${index + 1}. ${item}`;

      cartItems.appendChild(li);

    });
  }
}

displayCart();

function submitForm(event){

  event.preventDefault();

  alert("Message Sent Successfully!");
>>>>>>> f5325fb0cd1ed53323c6de7857d5eccec0422736
}