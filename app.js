let usrInput = document.querySelector(`input`)
let search = document.querySelector('#search');

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
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzQwMDg4Y2U2YTJiYzVkODAzZGU1ZTIzZGVhYmZhNCIsInN1YiI6IjY1MzI4MTNkNmY4ZDk1MDEyY2QxMDFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GKXXSCmrHAEi0qnltwHnBhFdTBXuLuQVctipXiw0P3M'
  }
};

fetch(`https://api.themoviedb.org/3/search/movie?query=${usrInput}&include_adult=false&language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));