import  express  from 'express';

import { addUser , getUser } from '../controller/user-controller.js';
import { newConversation } from '../controller/Conversation-controller.js';
import {getConversation} from  '../controller/Conversation-controller.js';

import { newMessage ,getMessages} from '../controller/Message-controller.js';
import { uploadFile, getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';
const route = express.Router();




route.post('/add',addUser); 
route.get('/users',getUser );
route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);
route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessages);
route.post('/file/upload',upload.single("file"), uploadFile);
route.get('/file/:filename', getImage);
export default route;

