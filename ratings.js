document.getElementById("foodType").value = localStorage.getItem("foodType")
document.getElementById("restaurantName").value = localStorage.getItem("restaurantName")
localStorage.removeItem("foodType");
localStorage.removeItem("restaurantName");
let form=document.getElementById("newRating");
form.addEventListener("submit", (e) => {
    // on form submission, prevent default
    e.preventDefault();
  
    // construct a FormData object, which fires the formdata event
    let thisRating = Object.fromEntries(new FormData(form));

    let allRatings= JSON.parse(localStorage.getItem("allRatings")) || [];
    allRatings.push(thisRating);
    localStorage.setItem("allRatings",JSON.stringify(allRatings));

    form.reset();
  });
  