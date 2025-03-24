import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // ปิด bodyParser เพื่อใช้ FormData
  },
};

export async function POST(req) {
  try {
    const data = await req.formData();
    const files = data.getAll('files'); // ✅ รับหลายไฟล์
    const _module = data.get('module'); // ✅ รับค่า module ที่ส่งมา

    if (!files.length) {
      return NextResponse.json({ message: 'No files uploaded' }, { status: 400 });
    }

    if (!_module) {
      return NextResponse.json({ message: 'Module name is required' }, { status: 400 });
    }

    // ✅ กำหนดโฟลเดอร์ตาม module
    const uploadDir = path.join(process.cwd(), 'public/stocks', _module);
    await fs.mkdir(uploadDir, { recursive: true }); // ✅ สร้างโฟลเดอร์ถ้ายังไม่มี

    let uploadedFiles = [];

    for (const file of files) {
      const filePath = path.join(uploadDir, file.name);
      const buffer = Buffer.from(await file.arrayBuffer());
      await fs.writeFile(filePath, buffer);

      uploadedFiles.push(`/stocks/${_module}/${file.name}`);
    }

    return NextResponse.json({ message: 'Upload successful', files: uploadedFiles });
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ message: 'Upload failed', error: error.message }, { status: 500 });
  }
}
