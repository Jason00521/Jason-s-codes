import { IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

export const MuiButton = () =>{
    return (
        <div>
            <IconButton 
                rel="noreferrer"
                href="https://twitter.com/new_eig" 
                variant="contained"
                target='_blank' 
                size="medium"
                style= "cursor:pointer">
                <TwitterIcon fontSize="inherit" />
            </IconButton>
        </div>
    )
}


