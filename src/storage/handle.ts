
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