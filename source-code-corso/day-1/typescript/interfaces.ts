(function() {
    interface Message {
        email: string;
        subject?: string;
        message: string;
    }

    function sendMessage(messageInfo: Message) {
        console.log(`I'm sending ${messageInfo.subject} to ${messageInfo.email} with the following content: ${messageInfo.message}`);
    }
})();