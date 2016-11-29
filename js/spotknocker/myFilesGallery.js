(function() {
    function previewImage(file) {
        var galleryId = "gallery";
        var gallery = document.getElementById(galleryId);
        var imageType = /image.*/;
        if (!file.type.match(imageType)) {
            throw "File Type must be an image";
        }
        var thumb = document.createElement("figure");
        thumb.classList.add('thumbnail');
        var file_overlay = document.createElement("div");
        file_overlay.classList.add('file-overlay');
        var delete_file = document.createElement("img");
        delete_file.classList.add('delete-file');
        delete_file.src='../images/deleteIcon.png';
        delete_file.alt = 'Delete File';
        file_overlay.appendChild(delete_file);
        thumb.appendChild(file_overlay);
        var img = document.createElement("img");
        img.classList.add('added-image');
        img.file = file;
        thumb.appendChild(img);
        gallery.appendChild(thumb);
        var reader = new FileReader();
        reader.onload = (function(aImg) {
            return function(e) {
                aImg.src = e.target.result;
            };
        })(img);
        reader.readAsDataURL(file);
    }
    var uploadfiles = document.querySelector('#my_file_input');
    uploadfiles.addEventListener('change', function() {
        var files = this.files;
        for (var i = 0; i < files.length; i++) {
            previewImage(this.files[i]);
        }
    }, false);
})();