import { apiUpload } from "./urls";

export const uploadFile = async (file) => {

  const formData = new FormData();
  formData.append("upload_preset", "Cali-Front-3");
  formData.append("file", file);

  const resp = await fetch(apiUpload, {
    method: "POST",
    body: formData,
  });
  const data = await resp.json();

  return data.secure_url;
};
