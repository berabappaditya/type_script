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
  // const fr_token = await helper.getDatafromStorage("fr_token")
  // // console.log("fr_token ::: ", fr_token)
  // if(!helper.isEmptyObj(fr_token)){
    chrome.action.setPopup({ popup: "popup.html" });
  // }
  // else{
  //   chrome.tabs.create({ url: process.env.REACT_APP_APP_URL });
  // }
};
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "clickButton") {
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let tb = getCurrentTab();
    tb.then((res) => {
      console.log("triggered bacjjs", res[0].id);


            chrome.scripting.executeScript({
    target: {tabId: res[0].id},
    files: ['injectScript.js']
  });
      chrome.tabs.sendMessage(
        res[0].id,
        { action: "clickButton" },
        function (response) {
          sendResponse(response);
        }
      );
    }).catch((err) => {
      console.log("bck script error", err);
    });

    // });
    return true; // Keep the message channel open for sendResponse
  }
});
