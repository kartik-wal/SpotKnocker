! function() {
    function e(e) {
        var t = "gallery",
            a = document.getElementById(t),
            n = /image.*/;
        if (!e.type.match(n)) throw "File Type must be an image";
        var i = document.createElement("figure");
        i.classList.add("thumbnail");
        var d = document.createElement("div");
        d.classList.add("file-overlay");
        var l = document.createElement("img");
        l.classList.add("delete-file"), l.src = "../images/deleteIcon.png", l.alt = "Delete File", d.appendChild(l), i.appendChild(d);
        var r = document.createElement("img");
        r.classList.add("added-image"), r.file = e, i.appendChild(r), a.appendChild(i);
        var c = new FileReader;
        c.onload = function(e) {
            return function(t) {
                e.src = t.target.result
            }
        }(r), c.readAsDataURL(e)
    }
    var t = document.querySelector("#my_file_input");
    t.addEventListener("change", function() {
        for (var t = this.files, a = 0; a < t.length; a++) e(this.files[a])
    }, !1)
}();