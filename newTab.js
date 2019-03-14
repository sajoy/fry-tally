chrome.tabs.onCreated.addListener(()=> {
    if (!localStorage.getItem('tabCount')) localStorage.setItem('tabCount', 0);
    localStorage['tabCount']++;
});