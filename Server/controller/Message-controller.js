
import Message from '../modal/Message.js';
import Conversation from '../modal/Conversation.js';

export const newMessage = async(request,response) =>{
  try{
    const newMessage = new Message(request.body);
    await newMessage.save();
    await Conversation.findByIdAndUpdate(request.body.conversationid,{message: request.body.text});
    return response.status(200).json('Message has been send Successfully');
  }catch(error){
    return response.status(500).json(error.message);
  }

}

export const getMessages = async(request,response) =>{
    try{
        const messages = await Message.find({conversationid: request.params.id});
        return response.status(200).json(messages);

    }catch(error){
   return response.status(500).json(error.message);
    }
}