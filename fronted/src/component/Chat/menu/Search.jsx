
// import { styled } from '@mui/material';
import { Search as SearchIcon} from '@mui/icons-material';
// import SearchIcon from '@mui/icons-material/Search';
// import { InputBase,  } from '@mui/icons-material'
import { InputBase , Box, styled } from '@mui/material';


const Component = styled(Box)`
    background: #fff;
    height: 45px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
`;

const Wrapper = styled(Box)`
    position: relative;
    border-radius: 5px;
    background-color: #f0f2f5;
    margin: 0 13px;
    width: 100%;
`;

const Icon = styled(Box)`
    color: #919191;
    padding: 8px;
    height: 100%;
    position: absolute;
`;

const Inputfield = styled(InputBase) `
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    font-size: 14px;
    height: 15px;
    width: 100%;
`;

const Search =({setText})=>{
    return(
     <Component>
        <Wrapper>
            <Icon>
                <SearchIcon
                fontSize ="small"        //passed as a props to change the font of the placeholder text;
                />
                
            </Icon>
            <Inputfield
            placeholder="Search and Start new chat" 
            onChange={(e) => setText(e.target.value) }
            />
            
        </Wrapper>
       
     </Component>
    )
}
export default Search;