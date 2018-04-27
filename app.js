var movieTitle
var moviePoster

var canvas = document.querySelector("main")
var submitButton = document.querySelector("#submitButton")

submitButton.addEventListener('submit', checkAnswer)


function checkAnswer(){

event.preventDefault()
console.log("clicked")

  var userAnswer = document.querySelector("#answer").value
  if (userAnswer == movieTitle)
  {
    canvas.innerHTML = `
  <img src=${moviePoster}
  `
  }
  else{
    canvas.innerHTML = `
  <img src= ./img/looser.jpg
  `
  }
}


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
    movieGenre = passedData.Genre
    moviePoster = passedData.Poster

    var questionBox =`
    <div id="popUp"> 
    <span class="category" id="year"><em>YEAR:</em>   ${movieYear}</span>
    <span class="category" id="director"><em>DIRECTOR:</em>  ${movieDirector}</span>
    <span class="category" id="actors"><em>ACTORS:</em>  ${movieActor}</span>
    <span class="category" id="genre"><em>GENRE:</em>  ${movieGenre}</span>
    </div>`

    canvas.innerHTML += questionBox
    
    

    }
}
function randomMovie(){
  var movieArr = ["tt0120338","tt0076759","tt0096895","tt0110912","tt0054215","tt0077651","tt0110357","tt0114709","tt0088247","tt0093779","tt0126029"]
  var x = Math.floor((Math.random() * 10) + 1);
  
  return movieArr[x]
  }
 
getMovie()
