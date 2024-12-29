// Variable to hold API data
let ApiData = "";

// Fetch product data from the API
fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json(); // Parse the response as JSON
  })
  .then((data) => {
    console.log(data); // Log the fetched data for debugging

    // Store fetched data in localStorage for future use
    let fetchData = JSON.stringify(data);
    localStorage.setItem("products", fetchData);

    // Assign products to ApiData and call FetchData to render products
    ApiData = data.products;
    FetchData(ApiData);
  });

// Function to render product cards on the page
function FetchData(p) {
  let input = ""; // Initialize input to hold HTML content
  p.map((value) => {
    // Dynamically generate product card HTML
    input += `
      <div class="col-12 col-md-6 col-lg-3 mb-3 productBox">
        <div class="card" id="cards">
          <img src=${value.images[0]} alt=${value.title} id="cardImg"/>
          <h4>${value.title}</h4>
          <div class="priceContainer">
            <p id="productPrice">${value.price}</p>
            <p id="productRating">${value.rating}</p>
          </div>
          <div>
            <button id="seeMoreBtn" onclick="handleBtn(${value.id})">See more</button>
          </div>
        </div>
      </div>`;
  });
  cardContainer.innerHTML = input; // Update the DOM with generated HTML
}

// Function to handle 'See more' button click
function handleBtn(id) {
  localStorage.setItem("productId", id); // Save product ID to localStorage
  window.location.href = "../HTML/productview.html"; // Redirect to product view page
}

// Variables for category menu and submenus
let groceries = document.getElementById("groceries");
let mobile = document.getElementById("mobile");
let fashion = document.getElementById("fashion");
let electronics = document.getElementById("electronics");
let furniture = document.getElementById("furniture");
let groceriesproducts = document.getElementById("groceriesproducts");
let mobileproducts = document.getElementById("mobileproducts");
let fashionproducts = document.getElementById("fashionproducts");
let electronicsproducts = document.getElementById("electronicsproducts");
let furnitureproducts = document.getElementById("furnitureproducts");

// Event listeners for hover functionality of category menus
groceries.addEventListener("mouseover", () => {
  groceriesproducts.style.display = "block"; // Show submenu
});
groceries.addEventListener("mouseout", () => {
  groceriesproducts.style.display = "none"; // Hide submenu
});
groceriesproducts.addEventListener("mouseover", () => {
  groceriesproducts.style.display = "block"; // Prevent submenu from hiding
});
groceriesproducts.addEventListener("mouseout", () => {
  groceriesproducts.style.display = "none"; // Hide submenu on mouse out
});

// Repeat hover logic for other categories
mobile.addEventListener("mouseover", () => {
  mobileproducts.style.display = "block";
});
mobile.addEventListener("mouseout", () => {
  mobileproducts.style.display = "none";
});
mobileproducts.addEventListener("mouseover", () => {
  mobileproducts.style.display = "block";
});
mobileproducts.addEventListener("mouseout", () => {
  mobileproducts.style.display = "none";
});

fashion.addEventListener("mouseover", () => {
  fashionproducts.style.display = "block";
});
fashion.addEventListener("mouseout", () => {
  fashionproducts.style.display = "none";
});
fashionproducts.addEventListener("mouseover", () => {
  fashionproducts.style.display = "block";
});
fashionproducts.addEventListener("mouseout", () => {
  fashionproducts.style.display = "none";
});

electronics.addEventListener("mouseover", () => {
  electronicsproducts.style.display = "block";
});
electronics.addEventListener("mouseout", () => {
  electronicsproducts.style.display = "none";
});
electronicsproducts.addEventListener("mouseover", () => {
  electronicsproducts.style.display = "block";
});
electronicsproducts.addEventListener("mouseout", () => {
  electronicsproducts.style.display = "none";
});

furniture.addEventListener("mouseover", () => {
  furnitureproducts.style.display = "block";
});
furniture.addEventListener("mouseout", () => {
  furnitureproducts.style.display = "none";
});
furnitureproducts.addEventListener("mouseover", () => {
  furnitureproducts.style.display = "block";
});
furnitureproducts.addEventListener("mouseout", () => {
  furnitureproducts.style.display = "none";
});

// Chatbox toggle functionality
let chatbot_div = document.getElementById("chatbot_div");
let chatMessageBox = document.getElementById("chatMessageBox");
let displayNone = document.getElementsByClassName("right")[1];
console.log(displayNone);

chatbot_div.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default action
  chatMessageBox.style.display = "block"; // Show chat message box
});
displayNone.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default action
  chatMessageBox.style.display = "none"; // Hide chat message box
});

// Chatbot logic
let messageBox = document.getElementById("msgBox");
let send = document.getElementById("send");
let userInput = document.getElementById("userInput");

let botMessage = ["Enter name", "How! may I help you?", "Enter your problem", "Thank you"];
let s = 0;

send.addEventListener("click", () => {
  let userValue = userInput.value; // Get user input
  displayData(userValue, s); // Display user and bot messages
  s++; // Increment step index
});

// Function to display user and bot messages in chatbox
function displayData(val, index) {
  let pTag = document.createElement("p"); // Create paragraph for user message
  let spanTag = document.createElement("span"); // Create span for bot message
  pTag.textContent = val; // Set user message content
  spanTag.textContent = botMessage[index]; // Set bot message content
  messageBox.appendChild(pTag); // Append user message
  messageBox.appendChild(spanTag); // Append bot message
}

// Redirect to cart page on cart icon click
let cart = document.getElementById("cart");
cart.addEventListener("click", () => {
  window.location.href = "Cart.html";
});

// Search filter logic
let searchProduct = document.getElementById("searchProduct");
searchProduct.addEventListener("input", (e) => {
  let userVal = e.target.value.toLowerCase(); // Convert input to lowercase
  let filterData = ApiData.filter((val) => {
    // Filter products based on title or category
    return (
      val.title.toLowerCase().includes(userVal) || 
      val.category.toLowerCase().includes(userVal)
    );
  });
  console.log(filterData); // Log filtered data for debugging
  FetchData(filterData); // Re-render filtered products
});
//profile logic
let loginBtn=document.getElementById("loginBtn")

let display=document.getElementById("right-Cnt1")
let loginBox=document.getElementById("login-popup");

loginBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  chatMessageBox.style.display="block";
})
displayNone.addEventListener("click",(e)=>{
  e.preventDefault();
  chatMessageBox.style.display="none";
})