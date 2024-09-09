import {React,useState} from "react";
import './MDBContentCompStyle.css';
import axios from 'axios';
export default function UploadButton(props){
    const [file, setFile] = useState(null);

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };
    return(
        <>
                 <div className="UploadbtnContainer" style={{cursor:'pointer'}}>
                    <input
                        type="file"
                        id="file-input"
                        className="d-none"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="file-input" className="file-upload-label d-flex flex-row gap-2">
                        <span className="Icon">
                            <svg className="SvgIcon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.1579 6.48661H4.3804C2.68457 6.48661 1.30957 7.86161 1.30957 9.55744L1.30957 13.6199C1.30957 15.3149 2.68457 16.6899 4.3804 16.6899H13.6554C15.3512 16.6899 16.7262 15.3149 16.7262 13.6199V9.54911C16.7262 7.85827 15.3554 6.48661 13.6646 6.48661H12.8787" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.01783 0.825452V10.8596" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.58856 3.26562L9.01773 0.825625L11.4477 3.26563" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <span className="upload-text">Upload File or Report</span>
                    </label>
                </div>
        </>
    );
}