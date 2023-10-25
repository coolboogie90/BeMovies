let search = document.querySelector('#search');
let searchForm = document.querySelector('#search-form');
let usrInput = searchForm.querySelector(`input`).value;


// INITIALIZE SEARCH BTN
let btnSearch = search.querySelector(`button`);
btnSearch.classList.add(`btn-search`);



// SEARCH BAR INPUT
search.addEventListener('keydown', async (event) => {
    if (event.key === "Enter") {
        await options(usrInput.value);
    }
})



const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer TMDB_TOKEN'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/search/movie?query=${usrInput}&include_adult=false&language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));