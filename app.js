var movieTitle
var movieYear
var movieActor
var movieGenera
var movieDirector




fetch('http://www.omdbapi.com/?i=tt0120338&apikey=acace6ec')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    setData(data);
  
  
  })
  .catch(function(error){'error: ', console.log(error.message)
  });

  function setData(passedData){
    movieTitle = passedData.Title 
    movieActor = passedData.Actors
    movieDirector = passedData.Director
    movieYear = passedData.Year

    console.log(movieActor+movieTitle+movieYear+movieDirector)
  }

 