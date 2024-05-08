import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Swal from "sweetalert2";

const Footer: React.FC = () => {
  const ShowOfferInfo = () => {
    Swal.fire("The Internet");
  };
  return (
    <button className="fixed z-10 bg-black/25 p-2 rounded-full bottom-2 right-2 animate-ping hover:animate-none" onClick={ShowOfferInfo}>
      <FontAwesomeIcon icon={faInfoCircle}/>
    </button>
  );
};

export default Footer;
