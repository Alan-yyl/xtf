//该文件的作用：用户在浏览器的菜单上点击插件按钮后会弹出一个小框，小框里就是执行的该文件的代码

// 获取翻译按钮
const translateButton = document.getElementById('translateButton');
const clearButton = document.getElementById('clearButton');
// 获取复制按钮
const copyButton = document.getElementById('copyButton');

// 添加点击事件监听器
translateButton.onclick = function () {
    // 获取每个输入框的内容
    const selectedLanguage = document.getElementById('selectedLanguage').value;
    const chineseInput = document.getElementById('chineseInput').value;
    const spanishInput = document.getElementById('spanishInput').value;

    // 构建请求数据
    const requestData = {
        selectedLanguage: selectedLanguage,
        chineseInput: chineseInput,
        spanishInput: spanishInput
    };

    // 使用 Fetch API 发起 POST 请求
    fetch('your-java-api-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // 在这里处理从后端返回的数据
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
};
clearButton.onclick=function () {
    // 获取所有输入框
    const textareas = document.querySelectorAll('textarea');
    // 将所有输入框的值设置为空
    textareas.forEach(textarea => {
        textarea.value = '';
    });
}

// 添加点击事件监听器
copyButton.onclick=function () {
    // 获取西班牙语输入框的内容
    const spanishInput = document.getElementById('spanishInput').value;
    // 先让文档获得焦点
    document.body.focus();
    // 复制到剪贴板
    navigator.clipboard.writeText(spanishInput)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Unable to copy text: ', err);
        });
};



// 监听来自 background script 的消息
// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     console.log("监听来自 background script 的消息");
//     // 检查消息是否包含选中的文本
//     if (message.selectedText) {
//         console.log("message.selectedText",message.selectedText);
//         // 将接收到的选中文本放入选中的语言文本框中
//         document.getElementById('selectedLanguage').value = message.selectedText;
//     }
// });