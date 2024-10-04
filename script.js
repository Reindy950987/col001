document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSubmit = document.getElementById('chat-submit');

    function addMessage(content, isUser = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isUser ? 'user-message' : 'ai-message');
        messageElement.textContent = content;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleSubmit() {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, true);
            chatInput.value = '';
            
            // 这里可以添加发送消息到后端的逻辑
            // 现在我们只是模拟一个简单的回复
            setTimeout(() => {
                addMessage("感谢您的消息！我是一个简单的演示AI，无法进行真正的对话。");
            }, 1000);
        }
    }

    chatSubmit.addEventListener('click', handleSubmit);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });

    // 添加欢迎消息
    addMessage("欢迎来到我的个人主页！有什么我可以帮助您的吗？");
});