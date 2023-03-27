// alert('Hello, world!');
// console.log("i am at zoho");



    // console.log("laeklfhjkadhfjklhafjlhkljh");
    // var button = document.querySelector("#breakListPopup > div > div.rgt-brkcont > button");
    // console.log("mmmmmmbmbmbmbmbmbmbmb",button);
    // if(button) {
    //   button.addEventListener("click", function() {
    //     console.log("Button clicked!");
    //     chrome.runtime.sendMessage({message: "breakTimeStart"});
    //   });
    // }
let breakBtn=document.getElementById("breakSelDiv");

if(breakBtn){
    breakBtn.click();
    let breakStrt:any=document.querySelectorAll("#breakListPopup > div > div.rgt-brkcont > button");
    if(breakStrt){
        // console.log("///",breakStrt)
        breakStrt.forEach(element => {
            console.log(element);
            (element as HTMLElement).click();
            
          });

         

    }
}
