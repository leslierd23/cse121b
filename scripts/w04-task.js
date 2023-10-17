/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name :'Leslie Labastida ',
    photo : `images/profilePicture.jpg`,
    favoriteFoods : ['Tacos', 'spaghetti', 'cake'],
    hobbies : ['Gym', 'doing my nails', 'Make Up'],
    placesLived : []

};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    place: 'McAllen, Tx ',
    lenght: '23 years',
    }
)
/* DOM Manipulation - Output */
document.querySelector('#name').textContent=myProfile.name;
photo.setAttribute(`src`, myProfile.photo);
photo.setAttribute(`alt`, myProfile.name);
 
myProfile.favoriteFoods.forEach(food =>{
   let li = document.createElement('li');
   li.textContent=food;
   document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent=hobby;
    document.querySelector('#hobbies').appendChild(li);
});

myProfile.placesLived.forEach(placesLived=>{
    let dt=document.createElement('dt');
    dt.textContent=placesLived.place;
    document.querySelector('#places-lived').appendChild(dt);
});

myProfile.placesLived.forEach(placesLived=>{
    let dd= document.createElement('lenght');
    dd.textContent=placesLived.lenght;
    document.querySelector('#places-lived').appendChild(dd);
});


    //let dt=document.createElement('place');
    //let dd=document.createElement('lenght');
//document.querySelector('#places-lived').textContent=myprofile.placesLived;



/* Name */
/* Photo with attributes */
/* Favorite Foods List*/
/* Hobbies List */
/* Places Lived DataList */
