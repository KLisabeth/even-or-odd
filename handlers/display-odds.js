function oddsHandler() {
  debugger;
  // write me!
 const listContainer = document.getElementById('selected');
 listContainer.innerHTML = '';
 for (let i = 0; i < strings.odds.length; i++) {
   const currentListComponent= document.createElement('li');
   currentListComponent.innerText = strings.odds[i];
   listContainer.appendChild(currentListComponent);
 }
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'odds',
    strings: JSON.parse(JSON.stringify(strings))
  })
}
