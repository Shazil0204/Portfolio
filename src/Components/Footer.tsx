import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer: React.FC = () => {
  const isOnOffersPage = location.pathname === "/offers";

  const [swalShown, setSwalShown] = useState(false);

  const showSwal = () => {
    Swal.fire({
      didOpen: () => setSwalShown(true),
      didClose: () => setSwalShown(false),
    });
  };

  return (
    <>
      {!isOnOffersPage && (
        <button
          className="fixed z-10 bg-black/25 p-2 rounded-full bottom-2 right-2 hover:animate-none"
          onClick={showSwal}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </button>
      )}
      {swalShown &&
        createPortal(
          <Link className="p-1 bg-gray-200 text-blue-500 font-bold rounded-xl " to="/offers" onClick={() => Swal.close()}>
            Click to Go to About
          </Link>,
          Swal.getHtmlContainer()!
        )}
    </>
  );
};
export default Footer;
