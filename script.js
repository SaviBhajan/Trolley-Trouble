$(function () {

    $("#button").on("click", function () {
        window.location.href = "scene.html"
    })

    $("#button").on("fusing", function () {
        document.querySelector('a-scene').querySelector('#cursor').emit("Fuse");
    })
})
