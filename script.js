const getCategoryBtn=document.getElementById("category-btn");

// -----card container----------
const cardContainer = document.getElementById("card-cont")

// ---------get category btn-----------//
const getCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      const categories=data.categories
      showCategoryBtn(categories);
    })

    .catch((err) => {
      console.log(err);
    });
};
//----------- show category btn-------------//
const showCategoryBtn=(categories)=>{
console.log(categories);
categories.forEach(category => {
  getCategoryBtn.innerHTML +=`
   
   <button class=" hover:bg-[#15803D] hover:text-white text-left md:w-full p-3 rounded-lg
    border-[#15803D] border-1 md:border-none text-[14px] md:text-base font-semibold">${category.category_name}</button>
  `

});

}
// get plants card//
const getCardCategory =(id)=>{
  fetch("https://openapi.programming-hero.com/api/category/${id}")
  .then(res => res.json())
  .then((data)=>{
    console.log(data.category_name);
    
  })
  .catch((err) => {
      console.log(err);
    });
}

getCardCategory()
getCategory()