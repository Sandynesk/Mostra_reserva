import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Forumcont from "./Forumcont";

function Forum() {
  return (
    <div>
      <Navbar />
      <Forumcont />
      <Footer />  {/* Renderize o componente Footer */}
    </div>
  );
}

export default Forum;
