
fetch('http://api.disneyapi.dev/characters/2500')
.then(response => {
  console.log(response)
  if (!response.ok){
    throw new Error("ERROR");
  }
  return response.json();
})
.then(data => console.log(data))
.catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });
  const useFetchedData = function(endpoint, dataHandler){
    fetch(endpoint)
    .then(function(response){
      // JSON that is returned from the server must be converted to a JS object asynchronously.
      console.log(response);
      if (!response.ok) {
        throw new Error('Not 200 OK');
      }
      return response.json();
    })
    .then(function(data){
      // Any code that depends on the `data` must go in this block
      dataHandler(data);
    })
    .catch(function(err){
      // An error or `reject` from any of the above `.then()` blocks will end up here.
      console.log(err);
    });
  }
  
  useFetchedData('http://api.disneyapi.dev/characters/2500', function(character){
    const container = document.querySelector('.container');
      
    container.innerHTML = `
      <h1>${character.name}</h1>
      <h2>Updated on ${character.updatedAt}</h2>
      <h3>Featured in ${character.tvShows}</h3>
      <img src=${character.imageUrl} alt="Queen Ariana"</img>
      <a href=${character.sourceUrl}>Wiki Page</a>
    
    `;
  });