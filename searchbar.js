const divSuggestion = document.getElementById("suggestions");
divSuggestion.style.display = "none";
let cpt = 0;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmIzNjNmMTgwYzc5MmNmYzVjZGMxOTBlMWQzZjExMyIsInN1YiI6IjY1ZTk4ZmE3N2Y0ZjIxMDE3YmRiNDE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xMtoMnxlQ6p_LAgw9lWAqrBAACteMxoIDT9VA-TCcQk",
  },
};

var jsonData;

async function fetchData() {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-EU&page=1&sort_by=popularity.desc",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmIzNjNmMTgwYzc5MmNmYzVjZGMxOTBlMWQzZjExMyIsInN1YiI6IjY1ZTk4ZmE3N2Y0ZjIxMDE3YmRiNDE3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xMtoMnxlQ6p_LAgw9lWAqrBAACteMxoIDT9VA-TCcQk",
      },
    }
  );
  const ret = await res.json();
  jsonData = await ret.results.map(({ title, poster_path }) => {
    return {
      title: title,
      image: poster_path,
    };
  });
}

const sample = [
  { title: "dune deux" },
  { title: "avengers 1" },
  { title: "avengers 2" },
  { title: "tier list movie" },
];

const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup", async function () {
  await fetchData();
  console.log(jsonData);

  const input = searchInput.value;
  const result = jsonData.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );
  let suggestion;

  if (input.length >= 2 && result.length > 0) {
    suggestion = "";
    divSuggestion.style.display = "flex";
    result.forEach((resultItem) => {
        var image = "https://image.tmdb.org/t/p/w500/" + resultItem.image;
      cpt++;

      suggestion += `
            <div class="suggestion" id = "${cpt}"><img src = "${image}" alt ="logo film" title="movie logo"><button onclick="insertCard(this)">${resultItem.title}</button></div>
            `;
      document.getElementById("suggestions").innerHTML = suggestion;
    });
  } else {
    divSuggestion.innerHTML = "";
    divSuggestion.style.display = "none";
  }
});

function insertCard(button) {
  var divParent = button.parentNode.id;
  var contenuDiv = document.getElementById(divParent).innerText.trim();
  var banqueImage = document.getElementById("cardsSection");
  banqueImage.innerHTML +=
    '<div class = "card" id = ' +
    divParent +
    ' draggable = "true" ondragstart="onDragStart(event)">' +
    contenuDiv +
    "</div>";
  var divSuggestion = document.getElementById("suggestions");
  var removeElt = divSuggestion.removeChild(button.parentNode);
  console.log(divParent);
}


function empty(){
    var searchBar = document.getElementById('search');
    searchBar.value = '';
    divSuggestion.innerHTML = "";
    divSuggestion.style.display = "none";
}