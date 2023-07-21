
import { Box, Typography, styled } from '@mui/material';
import home from '../Assets/Images/home.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const homepage = () => {
    
    return (
        <Header>
            <Typography variant="h4">Homepage</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={home}  />                
            </Box>
        </Header>
    )
}

export default homepage;