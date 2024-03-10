//监听鼠标的释放事件
window.onmouseup = function (e) {
    // 向background.js传入消息
    chrome.runtime.sendMessage({
        type: "open_set_page",
    });
}