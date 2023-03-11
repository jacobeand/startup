let form=document.getElementById("ratingStarter");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    submit();
})

const submit=()=>{
    let foodType= document.getElementById("foodType").value;
    let restaurantName = document.getElementById("restaurantName").value;
    localStorage.setItem("restaurantName", restaurantName);
    localStorage.setItem("foodType", foodType);
    window.location.href = "ratings.html"
}