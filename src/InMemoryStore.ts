import { Chat, Store } from "./storage/Store";
export interface Room{
    roomId:string;
    chats:Chat[];

}
export class InMemoryStore implements Store{
    private store:Map<string,Room>;
    constructor()
    {
        this.store = new Map<string,Room>()
    }
    initRoom(roomId:string)
    {
        this.store.set(roomId,{
            roomId,
            chats:[]
        });
    }

    getChats(roomId:string,limit:number,offset:number)
    {
        const room = this.store.get(roomId);
        if(!room)
        {
            return []
        }
        return room.chats;
        return roomId;
    }

    addChat(room:string,limit:number,offset:number)
    {

    }

    upvote(room:string,chatId:string)
    {

    }
}