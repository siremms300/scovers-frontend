
// import { Box, styled } from "@mui/material";
// import React from "react";
// // import backgroundImage from "../public/images/background/background.png" 
// // import SearchInput from "./searchInput";
// import Search from "./layouts/Search";

// const Header = ()=>{

//     const StyleHeader = styled(Box)((theme)=>(
//         {
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             minHeight:" 270px", 
//             // backgroundImage: `url(${backgroundImage})`,
//             backgroundImage: `url(/images/background/background.gif)`,
//             backgroundSize: "100% 100%",
//             backgroundPosition: "center", 
//         } 
//     )) 

    
//     return( 
//         <>  

//             <StyleHeader /> 

//             <Search />  

//             {/* <StyleHeader > 
               
//             <Search /> 
//             </StyleHeader>
//              */}
//         </>
//     )
// }
 
// export default Header  






import React from 'react'
import Title from './title/Title'
import Link from 'next/link'



const Header = ()=> {

    return(
        <>
            <section className='hero'>
                <div className='container'>
                    <div className='row'> 
                    <Title 
                        subtitle="WELCOME TO SCOVERS"
                        title="Your gateway to global education"
                    /> 
                        {/* <p className='p-class'> Welcome to Scovers Education </p>  */}
                        <div className='button'>
                            <button className='primary-btn'>
                            {/* EXPLORE COURSES <i className='fa fa-long-arrow-alt-right'></i> */}
                                <Link href='/coursepage' style={{ textDecoration: 'none', color: 'white' }}>EXPLORE COURSES</Link> 
                            </button> 

                            <button>
                                {/* ABOUT US <i className='fa fa-long-arrow-alt-right'></i> */}
                                <Link href='/about' style={{ textDecoration: 'none' }}>ABOUT US</Link>
                            </button>
                        </div>
                    </div>
                </div>
                
            </section> 

            <div className='margin'>

            </div>
        </>
    )
} 

export default Header