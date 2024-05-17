// Image search engine script file

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-moreBtn');

// const apiURL = "https://api.unsplash.com/search/photos?page=1&query=office&client_id=XIMFBMXG998GaLObP7ns7K4vHSkvh08zKWbO5JprbA4";
let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const apiURL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=XIMFBMXG998GaLObP7ns7K4vHSkvh08zKWbO5JprbA4&per_page=12`;
  console.log(apiURL);
  const response = await fetch(apiURL)
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }
  const result = data.results;  // Mapping result object to the variable
  // console.log(result);
  result.map((result) => {   //Creating array my map method
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    // console.log(imageLink);

    // Attch image into image link
    imageLink.appendChild(image);

    // Appending it into the result div
    searchResult.appendChild(imageLink);
  });
  // display show more button
  showMoreBtn.style.display = "block";
}

showMoreBtn.addEventListener('click',() => {
  page++;
  searchImages();
})

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
})





  /* XML HTTP request method for get data
  let xHR = new XMLHttpRequest();
  xHR.open('GET', apiURL, true);
  xHR.onload = function() {
    if (xHR.status == 200) {
      console.log(xHR.responseText);
    }
    else {
      console.log('Something wrong, ' + xHR.status);
    }
  }
xHR.send();
}
  */


