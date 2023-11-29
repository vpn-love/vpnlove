const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const {Storage} = require('@google-cloud/storage');

const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

const bucketName = 'vpnlove';
const directoryPath = './build';

const storage = new Storage({
    keyFilename: '.google.json',
});

async function* getFiles(directory = '.') {
    for (const file of await readdir(directory)) {
        const fullPath = path.join(directory, file);
        const stats = await stat(fullPath);

        // Recursively dive deeper into subdirectories
        if (stats.isDirectory()) {
            yield* getFiles(fullPath);
        }

        // Only yield paths to files
        if (stats.isFile()) {
            yield fullPath;
        }
    }
}

async function uploadDirectory() {
    const bucket = storage.bucket(bucketName);
    let successfulUploads = 0;

    for await (const filePath of getFiles(directoryPath)) {
        try {
            const dirname = path.dirname(directoryPath);
            const destination = path.relative(dirname, filePath);

            await bucket.upload(filePath, {
                destination: destination.replace('build/', '')
            });

            console.log(`Successfully uploaded: ${filePath}`);
            successfulUploads++;
        } catch (e) {
            console.error(`Error uploading ${filePath}:`, e);
        }
    }

    console.log(
        `${successfulUploads} files uploaded to ${bucketName} successfully.`
    );
}

uploadDirectory().catch(console.error);
