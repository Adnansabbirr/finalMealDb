const searchFood=()=>{
    const searcField=document.getElementById('search-field');
    const fieldValue=searcField.value;
   

    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${fieldValue}`
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayResult(data.meals))
}
const displayResult=(meals)=>{
    const searchResult=document.getElementById('search-result')
    searchResult.textContent='';
   meals.forEach( meal=> {
    //    console.log(meal)
       const div=document.createElement('div')
       div.classList.add('col');
       div.innerHTML=` 
       <div onclick="loadMeal(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
      </div>`
      searchResult.appendChild(div);
   });

}
const loadMeal=(mealId)=>{
    
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
   
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeal(data.meals[0]))
}
const displayMeal=meadDetail=>{
    console.log(meadDetail);
   const displayFullMeal= document.getElementById('display-full-detail');
   const div2=document.createElement('div');
   div2.classList.add('col')
   div2.innerHTML=`<div class="card h-100">
   <img src="${meadDetail.strMealThumb}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${meadDetail.strCategory}</h5>
     <p class="card-text">${meadDetail.strInstructions.slice(0,300)}.</p>
   </div>
   <div class="card-footer mx-auto">
     <small class=" fs-4"><a class="text-decoration-none" href="${meadDetail.strYoutube}">See a demo Video</a></small>
   </div>
 </div>`
 displayFullMeal.appendChild(div2);
}


