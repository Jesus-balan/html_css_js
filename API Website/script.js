const accessKey = "3uw0x9USjyTmopUpPwV8qHs10KQKeTXohCYmbMT8uPg";

const formEl = document.querySelector('form');
const inputEl = document.getElementById('search-input');
const searchResult = document.querySelector('.search-results');
const showMore = document.getElementById('show-more-button');

let inputData = "";
let page = 1;

// Async function to search for images
async function searchImage() {
  inputData = inputEl.value;
  const url = `https://api.unsplash.com/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  try {
    const response = await fetch(url);  // Await the fetch call
    const data = await response.json(); // Await parsing JSON from response

    const results = data.results;

    if (page === 1) {
      searchResult.innerHTML = ""; // Clear previous results
    }

    // Iterate over results and create HTML elements to display each image
    results.forEach(result => {
      const img = document.createElement('img');
      img.src = result.urls.small; // Assuming 'urls.small' contains the image URL
      img.alt = result.alt_description; // Example: 'alt_description' from Unsplash API
      searchResult.appendChild(img); // Append each image to the search results container
    });

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Event listener for form submission
formEl.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  page = 1; // Reset page number when submitting new search
  searchImage(); // Call searchImage function to initiate search
});

// Event listener for 'Show More' button click
showMore.addEventListener('click', function() {
  page++; // Increment page number to fetch next page of results
  searchImage(); // Call searchImage function to fetch more results
});
