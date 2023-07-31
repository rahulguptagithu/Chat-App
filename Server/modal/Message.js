import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    conversationid:{
        type: String
    },
    senderid:{
        type:String
    },
    receiverid:{
        type:String
    },
    text:{
        type:String
    },
    type:{
        type:String
    }

},
{
   timestamps: true
});

const message = mongoose.model('Message', MessageSchema);

export default message;