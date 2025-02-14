import { useState } from "react";
import "./ImageUploader.css";

const CLOUDINARY_UPLOAD_PRESET = "task2_preset";
const CLOUDINARY_CLOUD_NAME = "ddvva4jsu";

const ImageUploader = (props) => {
  const [imageUrl, setImageUrl] = useState(localStorage.getItem("avatar-url") || "");
  const [error, setError] = useState(props.error);
  const [loading, setLoading] = useState(false);

  const isValidImageFile = (file) => {
    return file && ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(file.type);
  };


  const uploadToCloudinary = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.secure_url) {
        setImageUrl(data.secure_url);
        localStorage.setItem("avatar-url", data.secure_url);
      } else {
        setError("Upload failed. Please try again.");
      }
    } catch (error) {
      setError("Error uploading image.");
    } finally {
      setLoading(false);
    }
  };


    const handleFileUpload = (file) => {
    if (!isValidImageFile(file)) {
      setError("Only JPG, PNG, GIF, and WebP files are allowed.");
      return;
    }

    setError("");
    uploadToCloudinary(file)
  }


  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) handleFileUpload(file);
  };




  const preventDefaults = (event) => {
    event.preventDefault();
  };

  return (
    <div className="image-container">
      <p className="label">Upload Profile Photo</p>
      <div className="image-backdrop">
        <div
          style={{
            background:`${imageUrl ? 'url(' + imageUrl + ')':'#0E464F' } no-repeat center/cover`,
          }}
          className="image-uploader"
          onDragOver={preventDefaults}
          onDragEnter={preventDefaults}
          onDrop={handleDrop}
          onClick={() => document.getElementById("fileInput").click()}
          tabIndex={0}
        >
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
           {/* <div className="errorOverlay"><Error msg={"Invalid image format"}></Error></div> */}
           {loading && <img title="loader" tabIndex={0} src="/Rolling.gif" className="loader"/>}
  
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M25.2639 14.8161C24.6812 10.2268 20.7505 6.66681 16.0052 6.66681C12.3305 6.66681 9.13854 8.81481 7.68121 12.2001C4.81721 13.0561 2.67188 15.7601 2.67188 18.6668C2.67188 22.3428 5.66254 25.3335 9.33854 25.3335H10.6719V22.6668H9.33854C7.13321 22.6668 5.33854 20.8721 5.33854 18.6668C5.33854 16.7948 6.93721 14.9908 8.90254 14.6455L9.67721 14.5095L9.93321 13.7655C10.8705 11.0308 13.1972 9.33348 16.0052 9.33348C19.6812 9.33348 22.6719 12.3241 22.6719 16.0001V17.3335H24.0052C25.4759 17.3335 26.6719 18.5295 26.6719 20.0001C26.6719 21.4708 25.4759 22.6668 24.0052 22.6668H21.3385V25.3335H24.0052C26.9465 25.3335 29.3385 22.9415 29.3385 20.0001C29.337 18.8048 28.9347 17.6446 28.196 16.7048C27.4574 15.765 26.425 15.1001 25.2639 14.8161Z" fill="#FAFAFA"/>
<path d="M17.3385 18.6668V13.3335H14.6719V18.6668H10.6719L16.0052 25.3335L21.3385 18.6668H17.3385Z" fill="#FAFAFA"/>
</svg>
 <p className="guide">Drag & drop or click to upload</p>
  {(imageUrl.length === 0) ?  <p className="error">{error}</p> : <span></span>}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
