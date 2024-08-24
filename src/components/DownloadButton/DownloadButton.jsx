import axios from "axios";
import { useState } from "react";

const DownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadResume = () => {
    setIsDownloading(true);
    axios
      .get("/doc/Marh-Farroukh.pdf", {
        responseType: "blob",
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Marh-Farroukh.pdf");
        document.body.appendChild(link);
        link.click();
      });
    setIsDownloading(false);
  };

  return (
    <button onClick={downloadResume} disabled={isDownloading} className="z-[190]">
      Download CV
    </button>
  );
};

export default DownloadButton;
