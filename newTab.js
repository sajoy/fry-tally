chrome.tabs.onCreated.addListener(()=> {
    localStorage['tabCount'] = ++localStorage['tabCount'];
});