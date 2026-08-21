//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Content {
    type;
    text;
    url;
    thumbnailUrl;
    prompt;
    partId;
    reaction;
    isImage() {
        return this.type === "image";
    }
    isText() {
        return this.type === "text";
    }
    static sortByPartID(left, right) {
        if (left.partId < right.partId)
            return -1;
        if (left.partId > right.partId)
            return 1;
        return 0;
    }
}
class Message {
    id;
    author;
    channel;
    createdAt;
    reaction;
    content;
    getCreatedAt() {
        return new Date(this.createdAt);
    }
    getContent() {
        return this.content.sort(Content.sortByPartID);
    }
    static sortByCreatedAt(left, right) {
        if (left.getCreatedAt() < right.getCreatedAt())
            return -1;
        if (left.getCreatedAt() > right.getCreatedAt())
            return 1;
        return 0;
    }
}
class Conversation {
    conversationTitle;
    messages;
    getMessages() {
        return this.messages.sort(Message.sortByCreatedAt);
    }
}
class CopilotAPI {
    static CONVERSATIONS = "https://copilot.microsoft.com/c/api/conversations/shares/";
    constructor() {
    }
    async getConversation(id) {
        const response = await fetch(CopilotAPI.CONVERSATIONS + id, { method: "GET" });
        if (!response.ok) {
            //throw new Error(`Failed to fetch conversation: ${response.statusText}`);
        }
        return await response.json();
        /*
        const json:any = await response.json();

        const conversation:Conversation = new Conversation();

        conversation.conversationTitle = json.conversationTitle;
        conversation.messages = json.messages;

        //return json as Conversation;
        return conversation;
        */
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { Content, Message, Conversation, CopilotAPI };
