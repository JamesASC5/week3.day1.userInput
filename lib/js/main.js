const button = document.getElementById("submit_button");
button.addEventListener("click", clickListener);

// if(inputElement.value != "" || inputElement1 != "" || inputElement2 != ""){
//     clickListener(event);
// }
// else{
//     alert("please fill in all fields.")
// }

function clickListener(event){
    event.preventDefault();
    const title = document.getElementById("title_input")
    const titleInput = title.value;
    title.value = "";  
    const main = document.getElementById("main_title")
    main.innerText = titleInput
    
    const inputElement = document.getElementById("noun");
    const userInput = inputElement.value;
    const inputElement1 = document.getElementById("verb");
    const userInput1 = inputElement1.value;
    const inputElement2 = document.getElementById("adjective");
    const userInput2 = inputElement2.value;
    const t = document.getElementById("story_result");
    inputElement.value= "";
    inputElement1.value = "";
    inputElement2.value = "";
    t.innerText ="Last night I ate a " + userInput + " and today I just had to " + userInput1 + " What a " + userInput2 + " day! ";
}

// alert(userInput + userInput1 + userInput2)