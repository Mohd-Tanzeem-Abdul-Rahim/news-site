const searchInput = document.getElementById('input');
const searchButton = document.getElementById('searchButton'); 
const item= document.querySelectorAll('.nav-item');
const card = document.querySelector('#card-Main');
const carousel = document.querySelector('#carousel-main');

// API call 
 async function getNews(newsKeyWord) {
    console.log(newsKeyWord);
    const API_key = "9e1766897d624de8b78c33788f6676d5";
     const newsData = await fetch(`https://newsapi.org/v2/everything?q=${newsKeyWord}&apiKey=${API_key}`).then(data => data.json()).then(data =>data);
   
     let array = newsData.articles;
     return array;
    }

// eventlistener for nav item
for (let index = 0; index < item.length; index++) {
    item[index].addEventListener('click', () =>{
        newsDisply( item[index].innerText);
    });
    ;
}
// eventlistener for nav search bar
searchButton.addEventListener('click', ()=>{
    newsDisply(searchInput.value);
});
// function for display data 
function newsDisply(news) {
    
    if (news){
             data = getNews(news);
             if (data){
                console.log(data)
                cardRender(data);
                carouselRender(data);
             }
             
    }else{
        data = getNews("all");
        cardRender(data);
        carouselRender(data);

    } 
}
// function for render news card  
function cardRender(arrData) {
    arrData.then(res => {
        console.log(res)
        let cardList = '';
    for (let i = 0; i < res.length ; i++) {
        if(res[i].urlToImage){
        cardList += ` <div class="col">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <img src="${res[i].urlToImage}" class="card-img-top" alt="news-image">
                                <h6>${res[i].title}</h6>
                                <p class="card-text">${res[i].description}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary"><a href="${res[i].url}">View More</a></button>
                                    </div>
                                    <small class="text-body-secondary">${res[i].publishedAt}</small>
                                </div>
                            </div>
                        </div>
                    </div>`;
        
    }
    }
    // console.log(card.innerHTML)
    card.innerHTML = cardList;
    })
}
// function for render news carousel
function carouselRender(arrData) {
    arrData.then(res => {
        console.log(res)
        let carouselList = '';
       
    for (let i = 0; i <= 3 ; i++) {
        if(res[i].urlToImage){
            if(i==0){
                carouselList += `<div class="carousel-item active">
                    <img src="${res[i].urlToImage}" class="d-block w-100" alt="news-image">
                    <div class="carousel-caption d-none d-md-block">
                        <h2>${res[i].title}</h2>
                        <h4>${res[i].description.slice(0 , 80)}</h4>
                    </div>
                </div>`
            }else if (i==1) {
                carouselList += `<div class="carousel-item active">
                    <img id="carouselImg" src="${res[i].urlToImage}" class="d-block w-100" alt="news-image">
                    <div class="carousel-caption d-none d-md-block">
                        <h3>${res[i].title}</h3>
                        <p>${res[i].description.slice(0 , 80)}</p>
                    </div>
                </div>`
            } else {
                carouselList += `<div class="carousel-item">
                    <img id="carouselImg" src="${res[i].urlToImage}" class="d-block w-100" alt="news-image">
                     <div class="carousel-caption d-none d-md-block">
                         <h3>${res[i].title}</h3>
                         <p>${res[i].description.slice(0 , 80)}</p>
                    </div>
                 </div>`
            }
// console.log(carouselList)
// carousel.innerHTML = carouselList;
}
// console.log(carouselList)
// carousel.innerHTML = carouselList;
}
console.log(carouselList)
carousel.innerHTML = carouselList;
});    
}

newsDisply('');


// switch (res[i]) {
//     case res[i]===0||res[i]===1:
//         carouselList +=`<div class="carousel-item active">
//                     <img src="${res[i].urlToImage}" class="d-block w-100" alt="news-image">
//                     <div class="carousel-caption d-none d-md-block">
//                         <h5${res[i].url}>${res[i].title}</h5>
//                         <p>${res[i].description.slice(0 , 80)}</p>
//                     </div>
//                 </div>`
//         break;
//     case i===2:
//         carouselList +=`<div class="carousel-item">
//                     <img src="${res[i].urlToImage}" class="d-block w-100" alt="news-image">
//                     <div class="carousel-caption d-none d-md-block">
//                         <h5${res[i].url}>${res[i].title}</h5>
//                         <p>${res[i].description.slice(0 , 80)}</p>
//                     </div>
//                 </div>`
//         break;
//     case i===3:
//         carouselList +=`<div class="carousel-item">
//                     <img src="${res[i].urlToImage}" class="d-block w-100" alt="news-image">
//                     <div class="carousel-caption d-none d-md-block">
//                         <h5${res[i].url}>${res[i].title}</h5>
//                         <p>${res[i].description.slice(0 , 80)}</p>
//                     </div>
//                 </div>`
//         break;
// case i===4:
//         carouselList +=`<div class="carousel-item ">
//                     <img src="${res[i].urlToImage}" class="d-block w-100" alt="news-image">
//                     <div class="carousel-caption d-none d-md-block">
//                         <h5${res[i].url}>${res[i].title}</h5>
//                         <p>${res[i].description.slice(0 , 80)}</p>
//                     </div>
//                 </div>`
//         break;


//     default:
//         carouselList += `<div class="carousel-item" data-bs-interval="10000">
//     <img src="${res[i].urlToImage}" class="d-block w-100" alt="news-image">
//     <div class="carousel-caption d-none d-md-block">
//         <h5>${res[i].title}</h5>
//         <p>${res[i].description.slice(0 , 80)}</p>
//     </div>
// </div>`;
//         break;






