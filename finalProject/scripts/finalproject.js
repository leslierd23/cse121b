// Add click event to button "rbutton"
document.querySelector('#rbutton').addEventListener('click', randomAnswer)
document.querySelector('#rbutton').textContent = "Random Answer: "

//main function with fetch
async function randomAnswer(){
    console.log("Hola")
    const randomOpt = Math.floor(Math.random()* 5)
    const answer =await getRanAnsw(randomOpt)
    document.querySelector('#ranswer').value= answer

}
 

async function getRanAnsw(randomOpt){

    let apiResponse = await fetch('https://api.adviceslip.com/advice/search/love')
    let apData = await apiResponse.json()
    console.log("Random Answers", apData) 
    return apData.slips[randomOpt].advice
}

