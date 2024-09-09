import {React,useState} from "react";
import axios from "axios";
import './MDBContentCompStyle.css';
export default function UploadDownloadBtn(){
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
  const handleDownload = () => {
    const fileUrl = 'https://example.com/path/to/your/file.pdf'; // Replace with your file URL
    const fileName = 'filename.pdf'; // Replace with the desired file name

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    return(
        <>
        <div className="d-flex flex-row gap-2">
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
                        <span className="upload-text">Upload Report</span>
                    </label>
                </div>
            <button className="UploadbtnContainer downloaditm d-flex flex-row gap-2" onClick={handleDownload}>
                <div className="Icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.1019 12.8635L10.1019 2.82935" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5322 10.4238L10.1022 12.8638L7.67223 10.4238" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.9626 6.77344H14.7401C16.4359 6.77344 17.8101 8.1476 17.8101 9.84427V13.9143C17.8101 15.6059 16.4392 16.9768 14.7476 16.9768H5.46423C3.76839 16.9768 2.39339 15.6018 2.39339 13.9059L2.39339 9.8351C2.39339 8.14427 3.76506 6.77344 5.45589 6.77344L6.24089 6.77344" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
                <h1 className="TextHolder">Download Report</h1>
            </button>
        </div>
        </>
    )
}