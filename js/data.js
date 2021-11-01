"use strict";
  const useFetchedData = function(){
    fetch('http://api.disneyapi.dev/characters/2500')
    .then(function(response){
      // JSON that is returned from the server must be converted to a JS object asynchronously.
      console.log(response);
      if (!response.ok) {
        throw new Error('Not 200 OK');
      }
      return response.json();
    })
    .then(function(character){
      // Any code that depends on the `data` must go in this block
      const container = document.querySelector('.container');
      
      container.innerHTML = `
        <h1>${character.name}</h1>
        <h2>Updated on ${character.updatedAt}</h2>
        <h3>Featured in ${character.tvShows}</h3>
        <img src=${character.imageUrl} alt="Captain Frost"</img>
        <a href=${character.sourceUrl}>Wiki Page</a>
      
      `;
      dataHandler(character);
    })
    .catch(function(err){
      // An error or `reject` from any of the above `.then()` blocks will end up here.
      console.log(err);
    });
  }
  
useFetchedData(function(character){
  const container = document.querySelector('.container');
      
  container.innerHTML = `
    <h1>${character.name}</h1>
    <h2>Updated on ${character.updatedAt}</h2>
    <h3>Featured in ${character.tvShows}</h3>
    <img src=${character.imageUrl} alt="Captain Frost"</img>
    <a href=${character.sourceUrl}>Wiki Page</a>
  
  `;



})