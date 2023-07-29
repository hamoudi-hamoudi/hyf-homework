import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright By Hamoudi © {currentYear}</p>
    </footer>
  );
}

export default Footer;
