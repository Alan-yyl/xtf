//该文件相当于插件的后台，时刻在运行
//下面的代码做了两个功能： 1.当用户在页面上选择了文字并鼠标右键后，会有该插件的一个菜单选项；
// 2.点击该菜单选项，跳转到一个新标签页，内容是百度翻译刚才选中的文本

// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { type } = request;
    console.log(request)
    if (type === "open_set_page") {
        // 打开设置页
        chrome.runtime.openOptionsPage();
    }
})