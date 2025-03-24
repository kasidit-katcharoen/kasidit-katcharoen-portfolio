'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [files, setFiles] = useState([]);
  const [moduleName, setModuleName] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    if (!files.length || !moduleName) {
      alert('กรุณาเลือกไฟล์และระบุโมดูล!');
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));
    formData.append('module', moduleName); // ✅ ส่งค่า module ไปกับ FormData

    const res = await fetch('/api/uploadfile', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      setMessage(`✅ อัปโหลดสำเร็จ:\n${data.files.join('\n')}`);
    } else {
      setMessage(`❌ เกิดข้อผิดพลาด: ${data.message}`);
    }
  };

  return (
    <div>
      <h1>อัปโหลดไฟล์</h1>
      <input type="text" placeholder="Enter module name" value={moduleName} onChange={(e) => setModuleName(e.target.value)} />
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <pre>{message}</pre>}
    </div>
  );
}
