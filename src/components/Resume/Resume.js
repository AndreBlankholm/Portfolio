import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section>
      <div className="divSize">
        <embed
          className="display"
          src={require("../../assests/images/thank-you-for-looking.pdf")}
          type="application/pdf"
        ></embed>
      </div>
    </section>
  );
}

export default Resume;
