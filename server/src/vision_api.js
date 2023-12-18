import { ImageAnnotatorClient } from '@google-cloud/vision';
// Function to perform label detection using Google Cloud Vision API
async function detectLabels() {
    const client = new ImageAnnotatorClient({
        keyFilename: './src/APIKey.json'
    });

    try {
        const [result] = await client.labelDetection('./src/google.jpg');
        const labels = result.labelAnnotations;
        console.log('Labels:');
        labels?.forEach((label) => console.log(label.description));
    } catch (err) {
        console.error('ERROR:', err);
    }
}

detectLabels();




// const vision = require('@google-cloud/vision');
// // Creates a client
// const client = new vision.ImageAnnotatorClient({
//     keyFilename: 'APIKey.json'
// });

// // Performs label detection on the image file
// client
// .labelDetection('./google.jpg')
// .then((results) => {
//     const labels = results[0].labelAnnotations;

//     console.log('Labels:');
//     labels.forEach((label) => console.log(label));
//     //console.log(results);
// })
// .catch((err) => {
//     console.error('ERROR:', err);
// });