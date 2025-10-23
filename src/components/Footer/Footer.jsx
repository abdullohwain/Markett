import React from "react";

function Footer() {
  return (
    <footer>
      <div className="bg-black py-10 mx-auto flex items-center justify-center">
        <div className="text-white text-sm">
          <span>
            Copyright © {new Date().getFullYear()} - All right reserved by Market Industries 
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
