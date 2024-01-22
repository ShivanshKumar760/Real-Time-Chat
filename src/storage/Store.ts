type UserId=string;

export interface Chat{
    userId:UserId;
    name:String;
    message:string;
    // upvote:number;
    upvote:UserId[];//to store who has upvoted what cause people can downvote
}


export abstract class Store{
    constructor()
    {

    }
    initRoom(roomId:String)
    {

    }

    getChats(room:string,limit:number,offset:number)
    {

    }

    addChat(room:string,limit:number,offset:number)
    {

    }

    upvote(room:string,chatId:string)
    {

    }
}