import React from "react";  
import './Resume.css';

function Resume() {

    return(
        <section>
            <h2>Resume</h2>
            <div className="divSize">
                <embed className='display' 
                    src={require("../../assests/images/resumeSD5.pdf")} 
                    type="application/pdf">
                    </embed>
            </div>
                </section>
    );
};

export default Resume;