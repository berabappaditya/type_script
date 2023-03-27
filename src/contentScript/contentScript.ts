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
console.log("i am at zohoooooooooooooooooooooooo");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log(request, sender, sendResponse);
//       chrome.scripting.executeScript({
//     target: {tabId: tab.id},
//     files: ['injectScript.js']
//   });
    sendResponse('我收到你的消息了：'+JSON.stringify("request"));
});
