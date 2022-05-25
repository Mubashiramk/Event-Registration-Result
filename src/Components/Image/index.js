import "./image.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Draw } from "../Draw";

export const Image = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState("");
  const [image, setImage] = useState(null);

  const sendRequest = async () => {
    const res = await axios
      .get("http://ec2-3-73-79-235.eu-central-1.compute.amazonaws.com/s3url")
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data.url);
    setData(data.url);
    return data;
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const fileSelectorHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const FileUploadHandler = async () => {
    const file = selectedFile;
    console.log(file);

    if (data !== "") {
      console.log(data, "jiji");
      const upload = async () => {
        const res = await axios.put(data, {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: file,
        });
        alert("Photo uploaded to S3");
      };
      upload();
      const imageUrl = data.split("?")[0];
      console.log(imageUrl);
    }
  };

  return (
    <div className="image-div">
      <div className="selection-div">
        <div>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={fileSelectorHandler}
          />
        </div>
        <div className="right-div">
          <button onClick={FileUploadHandler}>Upload</button>
          <a href={image} download={image}>
            <button>Download</button>
          </a>
        </div>
      </div>

      <div className="image-display">{image && <Draw data={image} />}</div>
    </div>
  );
};
