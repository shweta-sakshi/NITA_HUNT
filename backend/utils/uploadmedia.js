// enables file uploads to MongoDB using GridFS, 
// storing files in a bucket named "photos" 
// if they are PNG or JPG images.Other file types are 
// simply stored by filename without being placed in GridFS.

import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';
dotenv.config();


const storage = new GridFsStorage({
    url: process.env.DB,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({ storage }); 