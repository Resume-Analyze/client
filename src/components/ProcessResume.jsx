import React from "react";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";

const ProcessResume = () => {
    return (
        <div className="grid grid-cols-2 gap-2 container justify-self-center">
            <ResumeForm />
            {/* add resume preview here */}
            <ResumePreview />
        </div>
    );
};

export default ProcessResume;
