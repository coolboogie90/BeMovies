
// STEP 1:
let search = document.querySelector('#search');
let searchForm = document.querySelector('#search-form');
let usrInput = searchForm.querySelector(`input`).value;


// INITIALIZE SEARCH BTN
let btnSearch = search.querySelector(`button`);
btnSearch.classList.add(`btn-search`);

btnSearch.addEventListener('keydown', async (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // to prevent form submission
        let usrInput = event.target.value;
        await options(usrInput);
        result.innerHTML = `Results for ${usrInput}`;
    }
})


// SEARCH RESULTS
let searchResults = document.querySelector(`#search-results`);
let result = searchResults.querySelector(`h3`);



// SWIPER RESULTS
let swiperResults = document.querySelector(`#swiper-results-search`);






// SEARCH BAR INPUT
searchForm.addEventListener('keydown', async (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // to prevent form submission
        let usrInput = event.target.value;
        await options(usrInput);
        result.innerHTML = `Results for ${usrInput}`;
    }
})




// FETCH SEARCH
const options = async (usrInput) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzE2NjIxYmNlMDhlYjEyYjNmMzdkNzU0MmJmYWRhYSIsInN1YiI6IjY1MzI4MTNkNmY4ZDk1MDEyY2QxMDFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CC7Xb5BjDRTiHWxh2gt-'
        }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?query=${usrInput}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


