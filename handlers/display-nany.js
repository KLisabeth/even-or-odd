function nanyHandler() {
  debugger;
  // write me!
  const listContainer = document.getElementById('selected');
  listContainer.innerHTML = '';
  for( let i = 0; i < strings.NaNy.length; i++) {
    const currentListComponent = document.createElement('li');
    currentListComponent.innerText = strings.NaNy[i];
    listContainer.appendChild(currentListComponent);
  }
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'NaNy',
    strings: JSON.parse(JSON.stringify(strings))
  })
}
