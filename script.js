// List of food items and their image URLs
const foodItems = [

    { name: "Aloo Parantha", image: "https://www.bitesbee.com/wp-content/uploads/2021/09/Aloo-Parantha.jpg" },
    { name: "Biryani", image: "https://www.bitesbee.com/wp-content/uploads/2021/09/Biryani.jpg" },
    { name: " Chole Bhature", image: "https://cdn.tasteatlas.com//Images/Dishes/a111291d959e40789af1280bba00f5c8.jpg?w=905&h=510" },
    { name: "Dhokla", image: "https://www.bitesbee.com/wp-content/uploads/2021/09/Dhokla.jpg" },
    { name: "Egg Curry ", image: "https://www.bitesbee.com/wp-content/uploads/2021/09/Egg-Curry.jpg" },
    { name: " Falooda", image: "https://cdn.tasteatlas.com//images/dishes/e4772eaf58004e048fdade5bde99b09c.jpg?w=905&h=510" },
    { name: "Pani puri", image: "https://www.bitesbee.com/wp-content/uploads/2021/09/Gol-Gappe.jpg" },
    { name: "Idli", image: "https://www.bitesbee.com/wp-content/uploads/2021/09/Idli-Sambhar.jpg" },
    { name: " Jalebi", image: "https://cdn.tasteatlas.com//images/dishes/85dca6a42c8948f6a861fba0a5442c8f.jpg?w=905&h=510" },
    { name: "Kachori", image: "https://www.bitesbee.com/wp-content/uploads/2021/09/Kachori.jpg" },
    { name: "Rajma ", image: "https://www.bitesbee.com/wp-content/uploads/2021/09/Rajma.jpg" },
    { name: "Gobi machurian", image: "https://cdn.tasteatlas.com//images/dishes/cba6279ae21445539df7e5f35b063bcb.jpg?w=905&h=510" },
    { name: "Muthia", image: "https://cdn.tasteatlas.com//images/dishes/f5fd3ee98c9d42688f2333d5a4a87944.jpg?w=905&h=510" },
    { name: "Sandesh", image: "https://cdn.tasteatlas.com//images/dishes/2e24738e7ac843adbe7a1fa253449af7.jpg?w=905&h=510" },
    { name: "Uttapam", image: "https://cdn.tasteatlas.com//Images/Dishes/12683c948693463ca33f9ae6e047261f.jpg?w=905&h=510" },
    { name: "Shrikhand", image: "https://cdn.tasteatlas.com//Images/Dishes/b40366bbc02a4ad583c12a036f44e69a.jpg?w=905&h=510" },
    { name: "Punjabi curry", image: "https://cdn.tasteatlas.com//Images/Dishes/b40366bbc02a4ad583c12a036f44e69a.jpg?w=905&h=510" }, 
    { name: "Jeera-rice", image: "https://cdn.tasteatlas.com//images/dishes/560b70e2b97d4a7dabaeabf83866302e.jpg?w=905&h=510" },
    { name: "Khamand Dhokla", image: "https://cdn.tasteatlas.com//Images/Dishes/148d38515fc64278a65b71df7bb00725.jpg?w=905&h=510" },
    { name: "Bhakri", image: "https://cdn.tasteatlas.com//images/dishes/9dbd66882cea4e3789a71ffbb77ef2bd.jpg?w=905&h=510" },
    { name: "Muthia", image: "https://cdn.tasteatlas.com//images/dishes/f0a30d373ee6437f8068dc9997be8701.jpg?w=905&h=510" },
    { name: "Medu Wada", image: "https://cdn.tasteatlas.com//Images/Dishes/d69c2f9b128a49299056a0bb9eca8a45.jpg?w=905&h=510" },
    { name: "Gajar ka Halwa", image: "https://cdn.tasteatlas.com//Images/Dishes/fdda72f960004dbb99b3fd4cb54d4b7c.jpg?w=905&h=510" },
    { name: "Kaju Katli", image: "https://cdn.tasteatlas.com//Images/Dishes/7be1f4cc4c6747868181dc95398df458.jpg?w=905&h=510" },
    { name: "Matter Paneer", image: "https://cdn.tasteatlas.com//Images/Dishes/ef2e189156f642d989e433c2af47a584.jpg?w=905&h=510" },
    { name: "Phirni", image: "https://cdn.tasteatlas.com//Images/Dishes/b40366bbc02a4ad583c12a036f44e69a.jpg?w=905&h=510" },
    { name: "Mysore Pak", image: "https://cdn.tasteatlas.com//Images/Dishes/a16024033f59415ea574750ac003b15c.jpg?w=905&h=510" },
    { name: "Misal pav", image: "https://cdn.tasteatlas.com//images/dishes/31581c6651644769875834e8dc60bec0.jpg?w=905&h=510" },
    { name: "Malai Kofta", image: "https://cdn.tasteatlas.com//images/dishes/7cd03979f70949c08f779a686919d7e3.jpg?w=905&h=510" },
    { name: "Mango Chutney", image: "https://cdn.tasteatlas.com//images/dishes/59c1cbff09d8459e899901d216619575.jpg?w=905&h=510" },
    { name: "Modak", image: "https://cdn.tasteatlas.com//Images/Dishes/a46f5298ed7141b0a8763c3ca2333b8f.jpg?w=905&h=510" },
    { name: "Rasam", image: "https://cdn.tasteatlas.com//Images/Dishes/4ff368c7e0794e12a9e06a8589f8c408.jpg?w=905&h=510" },
    { name: "Bhelpuri", image: "https://cdn.tasteatlas.com//Images/Dishes/e5e261d8a0004f2097dca3fefad53c59.jpg?w=905&h=510" },
    { name: "Aloo Gobi", image: "https://cdn.tasteatlas.com//Images/Dishes/d5e9d11a668640eb9cfd790b4c21436a.jpg?w=905&h=510" },
    { name: "Kulcha", image: "https://cdn.tasteatlas.com//Images/Dishes/1bac151589d64b298ae673624e080866.jpg?w=905&h=510" },
    { name: "Pongal", image: "https://cdn.tasteatlas.com//images/dishes/a4a2780dee054e0c9e764bb7ad1ae820.jpg?w=905&h=510" },
    { name: "Barfi", image: "https://cdn.tasteatlas.com//Images/Dishes/fde987b6024d4c5ab3c2bc4caf860e31.jpg?w=905&h=510" },
    { name: "Mughalai Biryani", image: "https://cdn.tasteatlas.com//images/dishes/550488d5b9c749bcb3994925c4b354d5.jpg?w=905&h=510" },
    { name: "Bombay Biryani", image: "https://cdn.tasteatlas.com//images/dishes/bfa5558ba02f4ff490bb73d2e7a45932.jpg?w=905&h=510" },
    { name: "Rajma Chawal", image: "https://cdn.tasteatlas.com//images/dishes/c0aaa86400104d74874390cb9a37fdba.jpg?w=905&h=510" },
    { name: "Aloo tikki", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Aloo_Tikki_served_with_chutneys.jpg/180px-Aloo_Tikki_served_with_chutneys.jpg" }, 
    { name: "Aloo Methi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Aloo_Methi_%28Aaloo_Methi%29.JPG/180px-Aloo_Methi_%28Aaloo_Methi%29.JPG" },
    { name: "Aloo shimla mirch", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Spicy_alloo_with_tadka_mirchi.jpg/180px-Spicy_alloo_with_tadka_mirchi.jpg" },
    { name: "Baati", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Baati.jpg/180px-Baati.jpg" },
    { name: "Channa Masala", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Choleindia.jpg/180px-Choleindia.jpg" },
    { name: "Poha", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Poha%2C_a_snack_made_of_flattened_rice.jpg/180px-Poha%2C_a_snack_made_of_flattened_rice.jpg" },
    { name: "Imarti", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/JalebiIndia.jpg/180px-JalebiIndia.jpg" },
    { name: "Kheer", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Kheer.jpg/180px-Kheer.jpg" },
    { name: "Khichdi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Khichuri-edit.jpg/180px-Khichuri-edit.jpg" },
    { name: "Kofta", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Paneer_Kofta_Curry_-_Kolkata_2011-09-20_5426.JPG/180px-Paneer_Kofta_Curry_-_Kolkata_2011-09-20_5426.JPG" },
    { name: "Moong Daal Sheera", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Moong_dal_ka_halwa.jpg/180px-Moong_dal_ka_halwa.jpg" },
    { name: "Pani-puri", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Indian_cuisine-Panipuri-03.jpg/180px-Indian_cuisine-Panipuri-03.jpg" },
    { name: "Naan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Annapurna_Naan.jpg/180px-Annapurna_Naan.jpg" },
];


const foodNameElement = document.getElementById("food-name");
const foodImageElement = document.getElementById("food-image");
const generateButton = document.getElementById("generate-button");

// Function 
function generateRandomFoodItem() {
    const randomIndex = Math.floor(Math.random() * foodItems.length);
    const randomFood = foodItems[randomIndex];
    foodNameElement.textContent = randomFood.name;
    foodImageElement.src = randomFood.image;
    foodImageElement.alt = `${randomFood.name} Image`;

    const colors = ["#F9B9A5", "#FFB5C3", "#D99AA5", "#B37F88","#95A686","#D4F2B8","#65A695","#BFBD97","#8369B3","#DCC9FF"]
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomColorIndex];
}


generateButton.addEventListener("click", () => {
    // Simulate an error message sometimes for humor
    if (Math.random() < 0.1) {
        errorMessage.textContent = "Oops! The food machine is broken!";
        errorMessage.classList.remove("hidden");
        setTimeout(() => {
            errorMessage.classList.add("hidden");
        }, 3000);
    } else {
        errorMessage.classList.add("hidden");
        generateRandomFoodItem();
    }

});



// Event listener for the Generate button
generateButton.addEventListener("click", generateRandomFoodItem);

// Initial generation on page load
generateRandomFoodItem();
