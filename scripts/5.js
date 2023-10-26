* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('div');
let templeList= [];

/* async displayTemples Function */
const displayTemples = (temples)=> {
    temples.forEach(temple =>{
    let article = document.createElement(`article`);
    let h3 = document.createElement('h3');
    h3.innerHTML = `${temple.templeNames}`;
    let img =document.createElement('img');
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.append(article)
    img.setAttribute(`src`, template.imageUrl);
    img.setAttribute(`alt`,temple.location);
    templesElement.appendChild(article);
    });
};



/* async getTemples Function using fetch()*/
const getTemples = async ()=>{
   const response= await fetch( "https://byui-cse.github.io/cse121b-ww-course/resources/temple.json");
   templeList= await response.json();
   displayTemples(templeList);
}
 

/* reset Function */
function reset(){
    

} 

/* sortBy Function */



getTemples();

/* Event Listener */
