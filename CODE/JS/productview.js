// document.addEventListener("DOMContentLoaded", () => {
//     let jsData = JSON.parse(localStorage.getItem("products"));
//     let productId = JSON.parse(localStorage.getItem("productId"));
//     console.log(jsData.products);
//     console.log(productId)

//     // if (jsData.products.length) {
//     //     jsData.products.map((products) => {
//     //         // return products.id===productId;
//     //         console.log(products)
//     //     })
//     // }
//     // else {
//     //     console.log("product is not av")
//     // }
//     // //  find((product)=>{
//     // //    return product.id===productId}
//     // //  )
//     let productView = jsData.products.find((product) => {
//         return product.id === productId;
//     })


//     let productCnt = document.getElementById("productCtn");
//     console.log(productCnt)

//     productCnt.innerHTML = `
// <div id="cnt">
// <div id="mainCnt">
// <div id="left">
// <img src="${productView.images}" alt="" id="productImg"/>

// </div>
// <div id="right">
// <h2 id="title">${productView.title}</h2>s
// <p id="description">${productView.description}</p>
// <p id="brand">Brand- ${productView.brand}</p>
// <p id="productPrice">${productView.price}</p>
// <div id="reviewRating">
//     <p id="description">Rating:</p>
//     <div class="btn  rating">  ${productView.reviews[0].rating}&nbsp;&nbsp<i class="fa-solid fa-star"></i></div>
//    </div>
// <p id="description">Review: ${productView.reviews[0].comment}</p>
// <p id="description">By-: ${productView.reviews[0].reviewerName}</p>
// <button id="reviewBtn">See more review </button>
// </div>
// </div>
// <div id="review">
// <button id="addToCart">Add to cart </button>
// </div>
// </div>
// `;

//     // add product into cart logic
//     document.getElementById("addToCart").addEventListener("click", () => {
//         storageLocal(productView)
//     })
//     function storageLocal(p) {
//         let cartProduct = JSON.parse(localStorage.getItem("addTocart")) || []  // it return the addtocart json object and parse convert it in js object 
//         console.log(cartProduct)      // if the addtocard not have anything then it will return empty array [].
//         cartProduct.push(p);          //push the product in cartproduct 
//         localStorage.setItem("addTocart", JSON.stringify(cartProduct)) //process of converting js oject in JSON objet then store it local storage
//         alert("product added");
//     }
//     //review button logic onclick we see more more 
//     let hasExecuted = false;
//     let SeeMoreReview = document.getElementById("reviewBtn")
//     let reviewContainer = document.getElementById("review");
//     SeeMoreReview.addEventListener("click", () => {
//         // view more review button logic
//         if (!hasExecuted) {
//             reviewFun();
//             hasExecuted = true;
//             SeeMoreReview.innerText = "See less"
//         }
//         else {
//             hasExecuted = false;
//             reviewContainer.innerHTML = "";
//             SeeMoreReview.innerText = "See More"
//         }

//     })
//     //function call here for review button
//     let review = document.getElementById("review");
//     function reviewFun() {
//         productView.reviews.map((value) => {
//             review.innerHTML += `
//     <div id="reviewRating">
//     <p id="description">Rating:</p>
//     <div class="btn btn-success rating">  ${value.rating}&nbsp;&nbsp<i class="fa-solid fa-star"></i></div>
//    </div>
//     <div id="reviwerName">
//     <p id="description">Comment:<b>${value.comment}</b></p>
//     <p id="description">Review By-: ${value.reviewerName}</p>
//     </div>
//     `;
//         });
//     }

// })

// let addToCartItem = document.getElementById("addToCart");
// console.log(addToCartItem)

// // addToCartItem.addEventListener("click",()=>{
// //     storageLocal(productView);
// // });
// // function storageLocal(p){
// // let cartProduct=JSON.parse(localStorage.getItem("addTocart"))||[]
// // console.log(cartProduct)
// // cartProduct.push(p);
// // localStorage.setItem("addTocart",JSON.stringify(cartProduct))
// // alert("product added");
// // }
// //   let productView = jsData.products.find((product) => {
// //         return product.id === productId;
// //     })
// // let review=document.getElementById("review");
// // productView.review.map((value)=>{
// //     review.innerHTML= `<p id="description">${productView.reviews}</p>`
// // })

// new logic here******************************
let jsData = JSON.parse(localStorage.getItem("products"));
let productId = JSON.parse(localStorage.getItem("productId"));

// to display one single product at a time after view more button click
single_product = jsData.products.find((product) => {
  // find() is a higher order function it will take callback funtion as an argument and will return the items which will macth to the provided criteria
  return product.id === productId; // return the product whoes id matches from array and targeted product after clicking on view more button
});

// console.log(single_product);

let productDetail = document.getElementById("productDetail");
let productReview = document.getElementById("productReview");

productDetail.innerHTML = `
    <div id = "imgContainer">
        <img src = ${single_product.images[0]} alt = "product image">
    </div>
    <div id = "detailsContainer">
        <h3 id = "title">${single_product.title}</h3>
        <p id = "description">${single_product.description}</p>
        <p id = "price"><strong>Price: </strong>${single_product.price}</p>
        <p id = "ratings"><strong>Ratings: </strong>${single_product.rating}</p>
        <p id = "brand"><strong>Brand: </strong>${single_product.brand}</p>
        <p id = "category"><strong>Category: </strong>${single_product.category}</p>
        <button id = "cart">Add to Cart</button>
    </div>
`;

let productReviewArray = single_product.reviews; // Array of reviews

// Map through the reviews and generate HTML for each review
let reviewItems = productReviewArray
  .map((review) => {
    return `
        <div class="review-item">
        
            <p id="title"><strong>Reviewer:</strong> ${review.reviewerName}</p>
            <p id="rating"><strong>Rating:</strong> ${review.rating}★</p>
            <p id="comment"><strong>Comment:</strong> ${review.comment}</p>
            <p><small><strong>Date:</strong> ${new Date(
              review.date
            ).toLocaleDateString()}</small></p>
            <hr>
        </div>
        
    `;
  })
  .join(""); //.join() to ignore the , separator

// Insert the reviews into the productReview container
// Dynamically set the inner HTML of the productReview element with the reviewItems data
productReview.innerHTML = reviewItems;

//cart logic
document.getElementById("cart").addEventListener("click", () => {
  storageLocal(single_product); // Call the function to store the current product in localStorage
});

// Function to store product details in localStorage
function storageLocal(p) {
  // Retrieve the current cart products from localStorage (or initialize as an empty array if none exist)
  let cartProduct = JSON.parse(localStorage.getItem("addTocart")) || []; //If no data is present, it initializes an empty array. //JSON.parse(...) converts the JSON string into a JavaScript object or array
  console.log(cartProduct); // Log the current state of the cart for debugging
  // cartProduct.push(p);     // Add the selected product to the cart array
  // localStorage.setItem("addTocart", JSON.stringify(cartProduct)); //addTocart->key// Save the updated cart back to localStorage
  // alert("product added");

  let a = cartProduct.find((val) => {
    return val.id == p.id;
  });

  if (a) {
    alert("product already in Cart");
  } else {
    cartProduct.push(p); // Add the selected product to the cart array
    localStorage.setItem("addTocart", JSON.stringify(cartProduct)); //addTocart->key// Save the updated cart back to localStorage
    alert("product added");
  }
}


