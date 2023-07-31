
import Conversation from "../modal/Conversation.js";


export const newConversation = async(request,response) =>{

    try{
      const senderid = request.body.senderid;
      const receiverid= request.body.receiverid;

      const exist = await Conversation.findOne({members:{ $all: [receiverid ,senderid]}});

      if(exist){
        return response.status(200).json('conversation already exit');
      }
      const newConversation = new Conversation({
        members:[senderid,receiverid]
      })
      await newConversation.save();
      return response.status(200).json('conversation saved successfully');
    }catch(error){
      return response.status(500).json(error.message);
    }
}

export const getConversation = async (request, response) => {
    try {
    const senderid = request.body.senderid;
    const receiverid= request.body.receiverid;
     let conversation = await Conversation.findOne({ members: { $all: [ senderid,receiverid ] }});
      return response.status(200).json(conversation);
    } catch (error) {
      return response.status(500).json(error.message);
    }

}