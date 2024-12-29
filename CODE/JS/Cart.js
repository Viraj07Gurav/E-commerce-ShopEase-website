let cartCnt = document.getElementById("cartData");
let cartData = JSON.parse(localStorage.getItem("addTocart")) || [];
console.log(cartData);

function displayCartData() {
  let input = "";
  if (cartData.length === 0) {
    cartCnt.innerHTML = `
        <img src="https://tse1.mm.bing.net/th?id=OIP.Y4AJxhLsIdjwvUCUpfw6DQHaHa&pid=Api&P=0&h=180">
        <h2>Cart is empty</h2>`;
        totalPrice.innerHTML =`Total price: $0.00`  //resets total price when cart is empty
  } else {
    let price = 0;
    cartData.map((val) => {
      console.log(val.price);
      price += val.price;
      input += `
            <div class="cartcnt">
                <img src="${val.images[0]}" height="120" id="productid">
                <div id="title-brand">
                  <h2 id="title">${val.title}</h2>
                  <p>By ${val.brand}</p>
                </div>
                <p>Price:$${val.price}</p>
                <button onclick="deleteProduct(${val.id})" id="removeBtn">Remove</button>
            </div>`;
    });

    cartCnt.innerHTML = input;
    if (cartData.length !== 0) {
      totalPrice.innerHTML = `Total Price : ${price.toFixed(2)} `; // Display total price
    
      console.log(price);
    }
  }
}

function deleteProduct(id) {
  let data = JSON.parse(localStorage.getItem("addTocart"));
  let a = data.find((val) => {
    return val.id == id;
  });
  console.log(data); //array
  console.log(a); //object
  let index_num = data.indexOf(a);
  console.log(index_num);
  data.splice(index_num, 1);
  console.log("updated value", data);
  localStorage.setItem("addTocart", JSON.stringify(data));
  cartData = data;
  displayCartData();
  alert("product removed");
}

displayCartData();

//get data from local storage - using addToCart key
//get an array of object
//iterate the array using map method and display data like home page
//display data in cartData container