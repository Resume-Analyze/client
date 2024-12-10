import React, { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { uploadResume } from "../../redux/reducers/resumeReducer";
import { toast, ToastContainer } from "react-toastify";

const ResumeUpload = () => {
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(uploadResume({ resume: file }));
    };
    return (
        <div className="w-full flex justify-center">
            <div className="grid w-full max-w-sm items-center justify-center gap-1.5 container p-10">
                <Label htmlFor="resume">Upload Resume</Label>
                <Input id="resume" type="file" onChange={handleFileChange} />
                <Button
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                >
                    Upload
                </Button>
            </div>
        </div>
    );
};

export default ResumeUpload;
