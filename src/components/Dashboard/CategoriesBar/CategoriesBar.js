import { Box, Chip } from "@mui/material";

function CategoriesBar() {
    return (  
        <Box width={"100%"} sx={{display:'flex',justifyContent:'center',columnGap:'.5em',flexWrap:'wrap'}}>
            <Chip sx={{minWidth:'80px'}} label="Java"  variant='outlined' component="a" href="#basic-chip" clickable />
            <Chip sx={{minWidth:'80px'}} label="Java"  variant='outlined' component="a" href="#basic-chip" clickable />
            <Chip sx={{minWidth:'80px'}} label="Java"  variant='outlined' component="a" href="#basic-chip" clickable />
            <Chip sx={{minWidth:'80px'}} label="Java"  variant='outlined' component="a" href="#basic-chip" clickable />
            <Chip sx={{minWidth:'80px'}} label="Java"  variant='outlined' component="a" href="#basic-chip" clickable />
            <Chip sx={{minWidth:'80px'}} label="Java"  variant='outlined' component="a" href="#basic-chip" clickable />
        </Box>
    );
}

export default CategoriesBar;