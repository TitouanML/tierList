const divSuggestion = document.getElementById('suggestions');
divSuggestion.style.display = "none"
let cpt = 0;

const sample = [
    {title:'dune deux'},
    {title:'avengers 1'},
    {title:'avengers 2'},
    {title:'tier list movie'}
];

const searchInput = document.getElementById("search");

searchInput.addEventListener("keyup",function(){
    const input = searchInput.value;
    const result = sample.filter(item => item.title.toLowerCase().includes(input.toLowerCase()));
    let suggestion;

    if(input.length >= 2 && result.length > 0){
        suggestion = '';
        divSuggestion.style.display = "flex"
        result.forEach(resultItem =>{
            cpt ++;
            
            suggestion += `
            <div class="suggestion" id = "${cpt}"><button onclick="insertCard(this)">${resultItem.title}</button></div>
            `
            document.getElementById('suggestions').innerHTML = suggestion;
    })

    }else{
        divSuggestion.innerHTML = '';
        divSuggestion.style.display = "none"
    }
})

function insertCard(button){
    var divParent = button.parentNode.id;
    var contenuDiv = document.getElementById(divParent).innerText.trim();
    var banqueImage = document.getElementById('cardsSection');
    banqueImage.innerHTML += '<div class = "card" id = '+divParent+' draggable = "true">'+contenuDiv+'</div>';
    var divSuggestion = document.getElementById('suggestions');
    var removeElt = divSuggestion.removeChild(button.parentNode);
    console.log(divParent);
}