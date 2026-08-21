
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Author = "ai" | "human";

type Channel = "web"; // | "mobile" | "desktop" | "other";

type Type = "image" | "text";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Content
	{
	readonly type:Type|undefined;
	readonly text:string|undefined;
	readonly url:string|undefined;
	readonly thumbnailUrl:string|undefined;
	readonly prompt:string|undefined;
	readonly partId:number|undefined;
	readonly reaction:string|undefined;

	public isImage():boolean
		{
		return this.type === "image";
		}

	public isText():boolean
		{
		return this.type === "text";
		}

	public static sortByPartID(left:Content, right:Content):number
		{
		if (left.partId! < right.partId!) return -1;
		if (left.partId! > right.partId!) return 1;
		return 0;
		}
	}

class Message
	{
	readonly id:string|undefined;
	readonly author:Author|undefined;
	readonly channel:Channel|undefined;
	readonly createdAt:string|undefined;
	readonly reaction:string|undefined;
	readonly content:Array<Content>|undefined;

	public getCreatedAt():Date
		{
		return new Date(this.createdAt!);
		}

	public getContent():Array<Content>
		{
		return this.content!.sort(Content.sortByPartID);
		}

	public static sortByCreatedAt(left:Message, right:Message):number
		{
		if (left.getCreatedAt() < right.getCreatedAt()) return -1;
		if (left.getCreatedAt() > right.getCreatedAt()) return 1;
		return 0;
		}
	}

class Conversation
	{
	conversationTitle:string|undefined;
	messages:Array<Message>|undefined;

	public getMessages():Array<Message>
		{
		return this.messages!.sort(Message.sortByCreatedAt);
		}
	}

class CopilotAPI
	{
	private static readonly CONVERSATIONS:string = "https://copilot.microsoft.com/c/api/conversations/shares/";

	public constructor()
		{
		}

	public async getConversation(id:string):Promise<Conversation>
		{
		const response:Response = await fetch(CopilotAPI.CONVERSATIONS + id, {method: "GET"});

		if (!response.ok)
			{
			//throw new Error(`Failed to fetch conversation: ${response.statusText}`);
			}

		return await response.json() as Conversation;

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

export
	{
	type Author,
	type Channel,
	type Type,

	Content,
	Message,
	Conversation,
	CopilotAPI
	};
