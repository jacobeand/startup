$(document).ready( function () {
    $('#sortTable').DataTable();
} );
function loadRatings() {


    let allRatings = JSON.parse(localStorage.getItem("allRatings")) || [];

    const tableBodyEl = document.querySelector('#database');

    if (allRatings.length) {
        for (const rating of allRatings) {
            const nameTdEl = document.createElement('td');
            const foodNameTdEl = document.createElement('td');
            const foodTypeTdEl = document.createElement('td');
            const ratingValTdEl = document.createElement('td');
            const restaurantNameTdEl = document.createElement('td');

            let fName = rating.firstName;
            let lName = rating.lastName.charAt(0);
            nameTdEl.textContent = `${fName} ${lName}.`;
            foodNameTdEl.textContent = rating.foodName;
            foodTypeTdEl.textContent = rating.foodType;
            ratingValTdEl.textContent = rating.ratingVal;
            restaurantNameTdEl.textContent = rating.restaurantName;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(foodTypeTdEl);
            rowEl.appendChild(foodNameTdEl);
            rowEl.appendChild(ratingValTdEl);
            rowEl.appendChild(restaurantNameTdEl);
            rowEl.appendChild(nameTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    } else {
        tableBodyEl.innerHTML = '<tr><td colSpan=5> Be the first to Leave a rating!</td></tr>'
    }
}
loadRatings();