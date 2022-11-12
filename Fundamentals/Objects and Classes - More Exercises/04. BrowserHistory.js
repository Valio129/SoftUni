function browser(browserObj, cmdArr) {
    let browser = browserObj
    cmdArr.forEach(token => {
        let [cmd, site] = token.split(' ')
        if (token === "Clear History and Cache") {
            browser["Open Tabs"] = []
            browser["Recently Closed"] = []
            browser["Browser Logs"] = []
        } else {
            switch (cmd) {
                case 'Close':
                    if (browser["Open Tabs"].includes(site)) {
                        browser["Open Tabs"] = browser["Open Tabs"].filter(a => a !== site)
                        browser["Recently Closed"].push(site)
                        browser["Browser Logs"].push(token)
                    }
                    break;
                case 'Open':
                    browser["Open Tabs"].push(site)
                    browser["Browser Logs"].push(token)
                    break;

                default:
                    break;
            }
        }
    });
    for (const key in browser) {
        if (key == "Browser Name") {
            console.log(browser[key]);
        } else  { //if (browser[key].length > 0)
            console.log(`${key}: ${browser[key].join(', ')}`);
        } 
    }
}

// browser({
//     "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// )
browser({"Browser Name":"Mozilla Firefox", "Open Tabs":["YouTube"], "Recently Closed":["Gmail", "Dropbox"], "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)

