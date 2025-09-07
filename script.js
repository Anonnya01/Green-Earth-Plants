const getCategoryBtn=document.getElementById("category-btn");

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

const showCategoryBtn=(categories)=>{
console.log(categories);
categories.forEach(category => {
  getCategoryBtn.innerHTML +=`
   
   <button class=" hover:bg-[#15803D] hover:text-white text-left md:w-full p-3 rounded-lg border-[#15803D] border-1 md:border-none ">${category.category_name}</button>
  `
});

}
getCategory()