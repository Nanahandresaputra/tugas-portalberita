// variables
// let home = document.getElementById('home');
let sainsBtn = document.getElementById('sains');
let umumBtn = document.getElementById('umum')
let bisnisBtn = document.getElementById('bisnis');
let teknologiBtn = document.getElementById('teknologi');
let olahragaBtn = document.getElementById('olahraga');
let searchBtn = document.getElementById('searchBtn');

let newsQuery = document.getElementById('newsQuery') ;
let newsType = document.getElementById('newsType') ;
let newsDetails = document.getElementById('newsDetails') ;

// Api
let apiKey = '1f71842a98454c0aaf10e2a0cdb9c093';
let headlineNews = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=1f71842a98454c0aaf10e2a0cdb9c093';
let umumNews = 'https://newsapi.org/v2/top-headlines?country=id&category=general&apiKey=1f71842a98454c0aaf10e2a0cdb9c093';
let bisnisNews = 'https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=1f71842a98454c0aaf10e2a0cdb9c093';
let sainsNews = 'https://newsapi.org/v2/top-headlines?country=id&category=science&apiKey=1f71842a98454c0aaf10e2a0cdb9c093';
let teknologiNews = 'https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=1f71842a98454c0aaf10e2a0cdb9c093';
let olahragaNews = 'https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=1f71842a98454c0aaf10e2a0cdb9c093';
let searchNews = 'https://newsapi.org/v2/everything?q=';



// arr
var newsDatArr = [];


// window.OnLoad=function(){
//     newsType.innerHTML= '<h4>Headline</h4>';
//     fetchHeadline()
// };
// if (window.attachEvent) {window.attachEvent('onload', windowOnLoad);}
// else if (window.addEventListener) {window.addEventListener('load', windowOnLoad, false);}
// else {document.addEventListener('load', windowOnLoad, false);}
// function windowOnLoad(){
//     fetchHeadline()
// }

newsDetails.innerHTML = loading();

window.addEventListener('load', function(){
    newsType.innerHTML= '<h4><b>Headline</b></h4>';
    fetchHeadline()
})


umumBtn.addEventListener('click', function(){
    newsType.innerHTML= '<h4><b>Umum</b></h4>';
    fetchUmum();

});
sainsBtn.addEventListener('click', function(){
    newsType.innerHTML= '<h4><b>Sains</b></h4>';
    fetchSains();
});
bisnisBtn.addEventListener('click', function(){
    newsType.innerHTML= '<h4><b>Bisnis</b></h4>';
    fetchBisnis();
});
teknologiBtn.addEventListener('click', function(){
    newsType.innerHTML= '<h4><b>Teknologi</b></h4>';
    fetchTeknologi();
});
olahragaBtn.addEventListener('click', function(){
    newsType.innerHTML= '<h4><b>Olahraga</b></h4>';
    fetchOlahraga();
});
searchBtn.addEventListener('click', function(){
    newsType.innerHTML = `<h4><b>pencarian"${newsQuery.value}"</b></h4>`
    fetchnewsQuery();
});



let fetchHeadline = async () => {
    let response = await fetch (headlineNews);
    newsDatArr = [];
    if (response.status >= 200 && response.status <300 ) {
        let myJson = await response.json();
        console.log(myJson);
        newsDatArr  = myJson.articles;
    } else { console.log(response.status, response.statusText);}
    displayNews();
}

let fetchUmum = async () => {
    let response = await fetch (umumNews);
    newsDatArr = [];
    if (response.status >= 200 && response.status <300 ) {
        let myJson = await response.json();
        console.log(myJson);
        newsDatArr  = myJson.articles;
    } else { console.log(response.status, response.statusText);}
    displayNews();
}
let fetchSains = async () => {
    let response = await fetch (sainsNews);
    newsDatArr=[];
    if (response.status >= 200 && response.status <300 ) {
        let myJson = await response.json();
        console.log(myJson);
        newsDatArr  = myJson.articles;
    } else { console.log(response.status, response.statusText);}
    displayNews();
}
let fetchBisnis = async () => {
    let response = await fetch (bisnisNews);
    newsDatArr=[];
    if (response.status >= 200 && response.status <300 ) {
        let myJson = await response.json();
        console.log(myJson);
        newsDatArr  = myJson.articles;
    } else { console.log(response.status,  response.statusText);}
    displayNews();
}
let fetchOlahraga = async () => {
    let response = await fetch (olahragaNews);
    newsDatArr=[];
    if (response.status >= 200 && response.status <300 ) {
        let myJson = await response.json();
        console.log(myJson);
        newsDatArr  = myJson.articles;
    } else { console.log(response.status,  response.status.Text);}
    displayNews();
}
let fetchTeknologi = async () => {
    let response = await fetch (teknologiNews);
    newsDatArr=[];
    if (response.status >= 200 && response.status <300 ) {
        let myJson = await response.json();
        console.log(myJson);
        newsDatArr  = myJson.articles;
    } else { console.log(response.status,  response.statusText);}
    displayNews();
}
let fetchnewsQuery = async () => {
    if (newsQuery.value == null)
    return;

    let response = await fetch (searchNews+encodeURIComponent(newsQuery.value)+'&apiKey='+apiKey);
    newsDatArr=[];
    if (response.status >= 200 && response.status <300 ) {
        let myJson = await response.json();
        console.log(myJson);
        newsDatArr  = myJson.articles;
    } else { console.log(response.status,  response.statusText);}
    displayNews();
}

function displayNews() {
    newsDetails.innerHTML = '';
    if(newsDatArr == 0 ) {
        newsDetails.innerHTML = '<h4 class="alert alert-danger" role="alert">pencarian tidak ditemukan</h4>'
        return;} 
    newsDatArr.forEach(n =>{
        // let classRow = document.createElement('div');
        //     classRow.className = 'row row-cols-3 row-cols-md-4 justify-content-around g-5 mt-5';
        // let col = document.createElement('div');
        //     col.className = 'col'
        let card = document.createElement('div');
            card.className = 'card';
            card.style = 'width: 15rem;';
        let img = document.createElement('img');
            img.src = n.urlToImage;
            img.className = 'card-img-top mt-1';
            img.alt = '...';
        let cardBody = document.createElement('div');
            cardBody.className ='card-body';
        let cardTittle = document.createElement('h5');
            cardTittle.className = 'card-title';
            cardTittle.innerHTML = n.title;
        let date = document.createElement('p');
            date.className= 'card-text';
            date.innerHTML = n.publishedAt;
        // let description  = document.createElement('p');
        //     description.className = 'card-text'
        //     description.innerHTML = n.description;
        let link = document.createElement('a');
            link.href = n.url;
            link.className = 'btn btn-primary';
            link.innerHTML = 'Baca Selengkapnya';
        
       
        cardBody.appendChild(cardTittle)
        cardBody.appendChild(date)
        // cardBody.appendChild(description)
        cardBody.appendChild(link)
        card.appendChild(img)
        card.appendChild(cardBody)
        // col.appendChild(card)
        // classRow.appendChild(col)
        newsDetails.appendChild(card)

     });
}

function loading() {
    return '<div class="text-center fs-3 ">Loading...</div>'
}