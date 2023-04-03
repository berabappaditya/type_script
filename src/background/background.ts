// TODO: background script
chrome.runtime.onInstalled.addListener(() => {
  // TODO: on installed function
});

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let tab = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.action.onClicked.addListener((tab) => {
  // console.log("activeInfo on clicked ::::: ", activeInfo)
  setPopup();

  // chrome.scripting.executeScript({
  //   target: {tabId: tab.id},
  //   files: ['injectScript.js']
  // });
});
const setPopup = async () => {
  chrome.action.setPopup({ popup: "popup.html" });
};
// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   let tb = getCurrentTab();
//   tb.then((res) => {
//     if (message.action === "clickButton") {
//       console.log("triggered bacjjs", res[0].id);

//       chrome.scripting.executeScript({
//         target: { tabId: res[0].id },
//         files: ["injectScript.js"],
//       });
//       chrome.tabs.sendMessage(
//         res[0].id,
//         { action: message.action },
//         function (response) {
//           sendResponse(response);
//         }
//       );
//       chrome.action.setBadgeBackgroundColor({ color: '#FF2D00' });
//       chrome.action.setBadgeText({ text:'out!!' });

//       // });
//       return true; // Keep the message channel open for sendResponse
//     } else if (message.action === "stopBreak") {
//       console.log("stoppp breakkkkk:", message);
//       chrome.tabs.sendMessage(
//         res[0].id,
//         { action: message.action,tbId:res[0].id},
//         function (response) {
//           sendResponse(response);
//         }
//       );
//       chrome.action.setBadgeBackgroundColor({ color: '#00FF8B' });
//       chrome.action.setBadgeText({ text:'In!!' });
//     }
//   }).catch((err) => {
//     console.log("bck script error", err);
//   });


// });


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "BreakStart") {
    // chrome.extension.getViews({type: "popup"}).forEach(function(popup) {
    //   popup.postMessage({message: "BreakStart"}, "*");
    // });
    chrome.action.setBadgeBackgroundColor({ color: '#FF2D00' });
      chrome.action.setBadgeText({ text:'out!!' });
      console.log("BreakStart bjs");
  }else if(request.message === "BreakResume"){
    // chrome.extension.getViews({type: "popup"}).forEach(function(popup) {
    //   popup.postMessage({message: "BreakResume"}, "*");
    // });
    chrome.action.setBadgeBackgroundColor({ color: '#00FF8B' });
    chrome.action.setBadgeText({ text:'In!!' });
    console.log("BreakResume bjs");
  }
});


// Set up an interval to show the notification every 5 minutes
const intervalId = setInterval(() => {
  // Check if the current tab is active
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (activeTab) {
      // Show a notification in the active tab
      chrome.notifications.create('', {
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Reminder',
        message: 'Hello! This is a reminder.',
      });
    }
  });
}, 1 * 60 * 1000);

// Clear the interval when the extension is unloaded
chrome.runtime.onSuspend.addListener(() => {
  clearInterval(intervalId);
});
