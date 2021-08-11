const dripLocations =[13.85, 19.7, 22.1, 25.8, 28.5, 31.4, 34.2, 37.8,
                      44.6, 50.9, 56.35, 62.33, 68.53, 72.82, 79.17,
                      81.9, 84.85];

                      
function randomDropLocation(){
   return Math.floor(Math.random()*dripLocations.length);
}

function addNewDrop(){
   const newDrop = document.createElement("div");
   newDrop.classList.add("drop");
   newDrop.style.left = (dripLocations[randomDropLocation()] -0.5) + "vw";
   console.log(newDrop);
   console.log(dripLocations[randomDropLocation()] + "vw");
   document.body.appendChild(newDrop);
   setTimeout(() =>  {
      newDrop.remove();
      addNewDrop()}, Math.floor(Math.random()*6000 + 4000));
      // 4000 is the duration of the animation
}



window.onload = function() {
   addNewDrop();
   
 };