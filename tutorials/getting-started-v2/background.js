chrome.runtime.onInstalled.addListener(() => {
  chrome.windows.create(
    {
     url: chrome.runtime.getURL("popup.html"),
      type: 'popup',
      left: 0,
      top: 0,
      height: 625,
      width: 375,
    },
    (win) => {
      console.log("Window open");
    },
  );
});
