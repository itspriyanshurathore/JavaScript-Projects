const changeColor = document.querySelector('.colors');
changeColor.addEventListener("click", function(e){
     let color = e.target.id
    // if(color === 'red'){
    //     document.body.style.backgroundColor = "red";
    // } 
    // if(color === 'green'){
    //     document.body.style.backgroundColor = "green";
    // } 
    // if(color === 'blue'){
    //     document.body.style.backgroundColor = "blue";
    // } 
    // if(color === 'yellow'){
    //     document.body.style.backgroundColor = "yellow";
    // } 

    ///////////////////////////////////////////////////////////////////////////////////////////////////////
    ///Using Switch Case

switch (color) {
    case "red":
        document.body.style.backgroundColor = "red";
        break;
    case "green":
        document.body.style.backgroundColor = "green";
        break;
    case "blue":
        document.body.style.backgroundColor = "blue";
        break;
    case "yellow":
        document.body.style.backgroundColor = "yellow";
        break;
    default:
        document.body.style.backgroundColor = "white";
        break;
}
})

