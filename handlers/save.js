function saveHandler() {
  debugger;
  // write me!
  const newInput = document.getElementById('input').value.trim();

  if (newInput === ''){ alert('Please type something');}
  if (strings.NaNy.filter(function (i) { return i === newInput; }).length > 0) {
    alert('This Nany character already exists!'); return false}
  if (strings.evens.filter(function (i) { return i === newInput; }).length > 0){
    alert('This evens character already exists!'); return false}
  if (strings.odds.filter(function (i) { return i === newInput; }).length > 0){
    alert('This odds character already exists!'); return false}
  

  if (isNaN(newInput)) {
    strings.NaNy.push(newInput);
  } else if (Number(newInput % 2 == 0)) {
    strings.evens.push(newInput);
  } else {
    strings.odds.push(newInput);
  }

  //log user interaction: handler name, user input, new state

  log.push({
    handler: 'save',
    newInput,
    strings: JSON.parse(JSON.stringify(strings))
  })
}
