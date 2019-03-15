$(document).ready(function () {
    $('#inputImage').change(function (event) {
        $('#previewImage').attr({
            "src": URL.createObjectURL((event.target.files[0])),
            "width": "100px",
            "height": "100px"
        });
    })
});
