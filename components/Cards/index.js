// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardMaker(obj) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author1 = document.createElement('div');
    const img1 = document.createElement('div');
    const img2 = document.createElement('img');
    const author = document.createElement('span');

    headline.textContent = obj.headline;
    img2.src = obj.authorPhoto;
    author.textContent = `By ${obj.authorName}`;

    card.append(headline);
    card.append(author1);
    author1.append(img1);
    img1.append(img2);
    author1.append(author);

    card.classList.add('card');
    headline.classList.add('headline');
    author1.classList.add('author');
    img1.classList.add('img-container');

    return card;

}
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(item => {
        //console.log(item);
        Object.values(item.data.articles).forEach(element => {
            element.forEach(card => {
                console.log(card);
                const enter = document.querySelector('.cards-container')
                enter.append(cardMaker(card));
            })


        })


    })
    .catch(err => {
        console.error(err);
    })