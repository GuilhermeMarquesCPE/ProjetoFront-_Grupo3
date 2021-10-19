import React from "react";
import { BsInstagram } from "react-icons/bs"; 
import { IoLogoWhatsapp } from "react-icons/io"; 
import { BsLinkedin } from "react-icons/bs"; 
//import { IconContext } from "react-icons/lib"; 
import { FaFacebookSquare } from "react-icons/fa"; 
import { AiOutlineMail } from "react-icons/ai";
import "./Footer.css";

function Footer(){

    return(
        <div className="rodape">
            <div className="text1">
                <p className="text3">Entrem em contato!</p>
                <FaFacebookSquare className="iconFooter"/>
                <BsInstagram className="iconFooter"/>
                <IoLogoWhatsapp className="iconFooter"/>
                <BsLinkedin className="iconFooter"/>
            </div>
            <div className="Ficouduvida">
                <p className="text3">Ficou alguma dúvida?</p>
                <div className="emailF">
                <p className="text2"><AiOutlineMail className="iconEmail"/>  juliaempreendedora@gmail.com</p></div>  
            </div>
        </div>
    )
}

export default Footer;