// This script checks all project directories in public/projects
// and reports the actual number of images and their extensions

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectsDir = path.join(__dirname, '..', 'public', 'projects');

try {
    // Get all project directories
    const projects = fs.readdirSync(projectsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    console.log('Project image info:');
    console.log('==================');

    // Check each project
    projects.forEach(project => {
        const imagesDir = path.join(projectsDir, project, 'images');
        const videosDir = path.join(projectsDir, project, 'videos');
        
        let imageCount = 0;
        let extension = '';
        let hasImages = false;
        let hasVideos = false;
        let videoCount = 0;

        // Check if images directory exists
        if (fs.existsSync(imagesDir)) {
            hasImages = true;
            const imageFiles = fs.readdirSync(imagesDir, { withFileTypes: true })
                .filter(dirent => dirent.isFile())
                .map(dirent => dirent.name);
            
            imageCount = imageFiles.length;
            
            if (imageCount > 0) {
                // Get extension from first image
                extension = path.extname(imageFiles[0]).replace('.', '');
            }
        }

        // Check if videos directory exists
        if (fs.existsSync(videosDir)) {
            hasVideos = true;
            const videoFiles = fs.readdirSync(videosDir, { withFileTypes: true })
                .filter(dirent => dirent.isFile())
                .map(dirent => dirent.name);
            
            videoCount = videoFiles.length;
        }

        console.log(`\n${project}:`);
        console.log(`- Images: ${hasImages ? 'Yes' : 'No'}`);
        console.log(`- Image count: ${imageCount}`);
        console.log(`- Extension: ${extension}`);
        console.log(`- Videos: ${hasVideos ? 'Yes' : 'No'}`);
        console.log(`- Video count: ${videoCount}`);
    });

} catch (error) {
    console.error('Error:', error);
} 