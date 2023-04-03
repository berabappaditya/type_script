// TODO: content script
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   if (message.action === "clickButton") {
//     console.log("triggered contentscr",message);
//     var button = document.getElementById("apply_leave");
//     // if (button) {
//     //   button.click();
//     //   sendResponse({ result: "success" });
//     // } else {
//     //   sendResponse({ result: "error", message: "Button not found" });
//     // }
//   }
// });



// document.addEventListener('DOMContentLoaded',  ()=> {

//     console.log("i am at zohoooooooooooooooooooooooo");
//     const breakBttn: any = document.querySelector("#breakListPopup > div > div.rgt-brkcont > button");
//     console.log(breakBttn)
//     document.querySelector("#breakListPopup > div > div.rgt-brkcont > button").addEventListener("click", function () {
//         console.log("sending breakkkkkkkk");
//         chrome.runtime.sendMessage({ action: "breakTimeStart" });

//     });
// })

// var actualCode = 'console.log("laeklfhjkadhfjklhafjlhkljh");'
//     + 'var button = document.querySelector("#breakListPopup > div > div.rgt-brkcont > button");'
//     + 'console.log("mmmmmmbmbmbmbmbmbmbmb",button);'
//     + 'if(button) {'
//     + '  button.addEventListener("click", function() {'
//     + '    console.log("Button clicked!");'
//     + '    chrome.runtime.sendMessage({message: "breakTimeStart"});'
//     + '  });'
//     + '}'

// var script = document.createElement('script');
// script.textContent = actualCode;
// (document.head || document.documentElement).appendChild(script);
// script.parentNode.removeChild(script);




//document.addEventListener('DOMContentLoaded', function() {
// const btnInterval = setInterval(() => {
//     button = document.querySelector("#breakListPopup > div > div.rgt-brkcont > button");
//     console.log("*********************");

//     console.log("button ::: ", button)
//     if (button) {
//         clearInterval(btnInterval)
//         button.addEventListener("click", function () {
//             console.log("Button clicked!");
//             chrome.runtime.sendMessage({ message: "Button clicked!" });
//         });
//     }
// }, 500)

//});
document.body.addEventListener('click', function(event: Event) {
    const target = event.target;
    if (target instanceof Element) {
      const startBrkBtn = target.closest('#breakListPopup > div > div.rgt-brkcont > button');
      if (startBrkBtn) {
        console.log('Break start clicked!');
        chrome.runtime.sendMessage({ message: 'BreakStart' });
      }else{
        const resumeBtn=target.closest("#ResWrk")
        if(resumeBtn){
            console.log('Break resume clicked!');
        chrome.runtime.sendMessage({ message: 'BreakResume' });
        }
      }
    }
  });
  
  


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request, sender, sendResponse);
    //       chrome.scripting.executeScript({
    //     target: {tabId: tab.id},
    //     files: ['injectScript.js']
    //   });

    let resume = document.querySelector("#breakRunningDiv")
    if (resume) {
        console.log("resome div", resume);
        (resume as HTMLElement).click();
    }

    var button = document.querySelector("#breakListPopup > div > div.rgt-brkcont > button");
    if (button) {
        console.log("fre btn", button);
        button.addEventListener("click", function () {
            console.log("Button clicked!");
            chrome.runtime.sendMessage({ message: "Button clicked!" });
        });
    }
    sendResponse({ request: JSON.stringify(request), status: "done" });




});
