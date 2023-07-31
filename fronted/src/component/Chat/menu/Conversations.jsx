import {useEffect, useState,useContext} from "react";
import {Box,styled,Divider} from '@mui/material';
import { getUser } from '../../../Service/api';
import { AccountContext } from '../../../context/Accountprovider';
import Conversation from './Conversation';

// padding: 13px 0;
//cursor: pointer;
const Component = styled(Box)`  
    height: 81vh;
    overflow:overlay;
`;
const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;
const Conversations =({text}) =>{

    const [users, setUsers] = useState([]);
    const { account, socket,setActiveUsers}= useContext(AccountContext);
    
    useEffect( () =>{
        const fetchData = async() =>{
         let response  = await getUser();
         const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
        //  console.log(`i am in resa ${response}`);
         
         setUsers(filteredData);
        //  console.log(`i am in user ${users}`);
        }
        fetchData();
    },[text]);

    useEffect(() =>{
  socket.current.emit('addUsers', account);
  socket.current.on("getUsers", users =>{
    setActiveUsers(users);
    })
    },[account])
    return (
        <Component>
        {
          //map is use for the lopping the data
             users.map(user => (
                
                user.sub !== account.sub && 
                <>
                <Conversation user={user} />
                 <StyledDivider/>      
                 </>   
            ))
           
     }
        </Component>
    
    )

}

export default Conversations;