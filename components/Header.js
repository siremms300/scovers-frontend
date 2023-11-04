
import { Box, styled } from "@mui/material";
import React from "react";
// import backgroundImage from "../public/images/background/background.png" 
// import SearchInput from "./searchInput";
import Search from "./layouts/Search";

const Header = ()=>{

    const StyleHeader = styled(Box)((theme)=>(
        {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight:" 270px", 
            // backgroundImage: `url(${backgroundImage})`,
            backgroundImage: `url(/images/background/background.gif)`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center", 
        } 
    )) 

    
    return( 
        <>  

            <StyleHeader /> 

            <Search />  

            {/* <StyleHeader > 
               
            <Search /> 
            </StyleHeader>
             */}
        </>
    )
}
 
export default Header  