type Author = "ai" | "human";
type Channel = "web";
type Type = "image" | "text";
declare class Content {
    readonly type: Type | undefined;
    readonly text: string | undefined;
    readonly url: string | undefined;
    readonly thumbnailUrl: string | undefined;
    readonly prompt: string | undefined;
    readonly partId: number | undefined;
    readonly reaction: string | undefined;
    isImage(): boolean;
    isText(): boolean;
    static sortByPartID(left: Content, right: Content): number;
}
declare class Message {
    readonly id: string | undefined;
    readonly author: Author | undefined;
    readonly channel: Channel | undefined;
    readonly createdAt: string | undefined;
    readonly reaction: string | undefined;
    readonly content: Array<Content> | undefined;
    getCreatedAt(): Date;
    getContent(): Array<Content>;
    static sortByCreatedAt(left: Message, right: Message): number;
}
declare class Conversation {
    conversationTitle: string | undefined;
    messages: Array<Message> | undefined;
    getMessages(): Array<Message>;
}
declare class CopilotAPI {
    private static readonly CONVERSATIONS;
    constructor();
    getConversation(id: string): Promise<Conversation>;
}
export { type Author, type Channel, type Type, Content, Message, Conversation, CopilotAPI };
