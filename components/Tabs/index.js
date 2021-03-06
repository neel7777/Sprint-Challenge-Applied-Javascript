// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(tabs => {
        //console.log(tabs);
        tabs.data.topics.forEach(item => {
            const newTab = document.createElement('div');
            newTab.textContent = item;
            newTab.classList.add('tab');
            const entry = document.querySelector('.topics')
            entry.append(newTab);
        })

    })
    .catch(err => {
        console.error(err);
    })