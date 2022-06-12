const imageInput = document.getElementById('image-input');

imageInput.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploadedImage = reader.result;
        document.getElementById('display-image').style.backgroundImage = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0])
})