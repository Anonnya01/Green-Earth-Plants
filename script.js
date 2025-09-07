const getCategoryBtn = document.getElementById("category-btn");

// -----card container----------
const cardContainer = document.getElementById("card-cont");

// ---------get category btn-----------//
const getCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      const categories = data.categories;

      showCategoryBtn(categories);
    })

    .catch((err) => {
      console.log(err);
    });
};
//----------- show category btn-------------//
const showCategoryBtn = (categories) => {
  console.log(categories);
  categories.forEach((category) => {
    getCategoryBtn.innerHTML += `
   
   <button id="${category.id}" class=" hover:bg-[#15803D] hover:text-white text-left md:w-full p-3 rounded-lg
    border-[#15803D] border-1 md:border-none text-[14px] md:text-base font-semibold">${category.category_name}</button>
  `;
  });

  getCategoryBtn.addEventListener("click", (e) => {
    const buttonCard = document.querySelectorAll("button");

    buttonCard.forEach((button) => {
      button.classList.remove("bg-[#15803D]");
    });

    if (e.target.localName === "button") {
      // console.log(e.target.id);
      e.target.classList.add("bg-[#15803D]");
      loadCardCategory(e.target.id);
    }
  });
};

// ---------------Load card----cat id------//

const loadCardCategory = (id) => {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      showCard(data.plants);
    })
    .catch((err) => {
      console.log(err);
    });
};


// -----show news-----------//
const showCard =(plants)=>{
// console.log(plants);
cardContainer.innerHTML=''
plants.forEach(plant =>{
  cardContainer.innerHTML+=`
   <div class="p-2 space-y-2 bg-white rounded-lg shadow-sm">
              <div>
                <img
                  class="p-1 rounded-lg"
                  src="${plant.image}"
                  alt=""
                />
              </div>
              <div>
                <h3 class="text-sm font-semibold">${plant.name}</h3>
                <p class="text-[#1F2937] text-xs">
                  ${plant.description}
                </p>
              </div>
              <div class="flex items-center justify-between">
                <p class="bg-[#DCFCE7] p-2 text-[#15803D] text-xs rounded-full">
                  ${plant.category}
                </p>
                <h5 class="text-sm font-semibold">৳<span>${plant.price}</span></h5>
              </div>
              <div>
                <button
                  class="bg-[#15803D] text-white text-center w-full p-3 rounded-full font-semibold"
                >
                  Add to cart
                </button>
              </div>
            </div>
  
  `
  
})
}
getCategory();
