import React from "react";

const Footer = () =>{
    return(
        <footer id="contact" className="bg-n-4 py-4 text-sm flex justify-center ">
            <div className="container flex sm:justify-between pr-5 justify-center items-center gap-10 max-sm:flex-col">
            <p className="caption text-n-1 lg:block px-10">
                © {new Date().getFullYear()}. All rights reserved
            </p>
            </div>
        </footer>
        
    )
}

export default Footer;