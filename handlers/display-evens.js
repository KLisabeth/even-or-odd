function evensHandler() {
  debugger;
  // write me!
 const listContainer = document.getElementById('selected');
 listContainer.innerHTML = '';
 for (let i = 0; i < strings.evens.length; i++){
   const currentListComponent =document.createElement('li');
   currentListComponent.innerText = strings.evens[i];
   listContainer.appendChild(currentListComponent);
 }
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'evens',
    strings: JSON.parse(JSON.stringify(strings))
  })
}
