function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const outputDiv = document.getElementById('output');

    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('image', file);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.imageUrl;
            outputDiv.innerHTML = `<p>Image uploaded successfully!</p><img src="${imageUrl}" alt="Uploaded Image">`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        outputDiv.innerHTML = '<p>Please choose a file before uploading.</p>';
    }
}
