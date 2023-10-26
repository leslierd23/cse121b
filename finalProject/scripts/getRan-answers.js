export async function getRanAnsw(randomOpt){
    let answerRandom = await fetch ('https://api.adviceslip.com/advice/search/love',
    {cache:"default"})
    .then(function(response){
        let raData = await.response.json()
    })
}
