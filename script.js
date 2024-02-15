function uploadImage() {
    const input = document.getElementById('imageInput');
    const output = document.getElementById('output');

    const file = input.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('image', file);

        fetch('https://api.imgbb.com/1/upload?key=YOUR_API_KEY', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.data.url;
            output.innerHTML = `<p>Image uploaded successfully!</p><img src="${imageUrl}" alt="Uploaded Image">`;
        })
        .catch(error => {
            console.error('Error uploading image:', error);
            output.innerHTML = '<p>Error uploading image. Please try again.</p>';
        });
    } else {
        output.innerHTML = '<p>Please select an image to upload.</p>';
    }
}
