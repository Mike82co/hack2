var movieTitle
var movieYear
var movieActor
var movieGenera
var movieDirector
var canvas = document.querySelector("main")

function getMovie(){
  fetch('http://www.omdbapi.com/?i='+randomMovie()+'&apikey=acace6ec')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    setData(data);
    console.log(data)  
  })
  .catch(function(error){'error: ', console.log(error.message)
  });

  function setData(passedData){
    movieTitle = passedData.Title 
    movieActor = passedData.Actors
    movieDirector = passedData.Director
    movieYear = passedData.Year

    console.log(movieTitle)
    updateHTML()

  }
}
function randomMovie(){
  var movieArr = ["tt0120338","tt0076759","tt0096895","tt0110912","tt0054215","tt0077651","tt0110357","tt0114709","tt0088247","tt0093779","tt0126029"]
  var x = Math.floor((Math.random() * 10) + 1);
  
  return movieArr[x]
  }
  function updateHTML(){
    canvas.innerHTML += questionBox
  }
getMovie()
