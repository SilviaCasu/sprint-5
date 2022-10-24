
document.querySelector(".score").style.visibility = "hidden";

//showing the joke
const SHOW_JOKE = (DATOS) => {
  
    document.querySelector(".joke").innerHTML = DATOS.joke;
    document.querySelector(".score").style = "null";
    document.querySelector("#result").style.visibility = "hidden";
}

let reportJokes = [];

const SCORE = (joke, score) => {
   
    let data = TIME();
    const score_obj = {joke: joke, score:score, data:data};
    reportJokes.push(score_obj);
    document.querySelector(".score").style.visibility = "hidden";
    console.log(reportJokes);
    document.querySelector("#result").innerHTML = `You chose ${reportJokes[reportJokes.length -1].score} at the time  ${reportJokes[reportJokes.length -1].data}`;
    document.querySelector("#result").style = "null";
    
    }

const TIME = () => {
    const DATA = new Date();
    let text = DATA.toISOString();
    return text;
    
}
