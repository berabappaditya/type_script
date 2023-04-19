// TODO: content script
console.log("hi chattyyyyyyyyy");

document.body.addEventListener('click', function (event: Event) {
    const target = event.target;
    if (target instanceof Element) {
        const startBrkBtn = target.closest('#breakListPopup > div > div.rgt-brkcont > button');
        if (startBrkBtn) {
            console.log('Break start clicked!');
            chrome.runtime.sendMessage({ message: 'BreakStart' });
        } else {
            const resumeBtn = target.closest("#ResWrk")
            if (resumeBtn) {
                console.log('Break resume clicked!');
                chrome.runtime.sendMessage({ message: 'BreakResume' });
            }
        }
    }
});




chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {


    switch (request.action) {
        case "clickBrkBtn":
            console.log("breakk started");
            let breakBtn = document.getElementById("breakSelDiv");
            if (breakBtn) {
                breakBtn.click();
                let breakStrt: any = document.querySelectorAll("#breakListPopup > div > div.rgt-brkcont > button");
                if (breakStrt) {
                    breakStrt.forEach(element => {
                        console.log(element);
                        (element as HTMLElement).click();

                    });



                }
            }

            break;
        case "stopBrKBtn":
            let resume = document.querySelector("#breakRunningDiv")
            if (resume) {
                console.log("resome div", resume);
                (resume as HTMLElement).click();
            }
            break;



    }



    sendResponse({ request: JSON.stringify(request), status: "done" });




});
