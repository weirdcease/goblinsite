function cycleBackground(doIncrement) {
    var imageIndex = localStorage.getItem("imageIndex");
    if (imageIndex == null) imageIndex = 1;

    if (doIncrement) imageIndex ++;
    if (imageIndex > 3) imageIndex = 1;

    rs = document.querySelector(":root").style;
    rs.setProperty("--background", "url('assets/background/bg" + imageIndex + ".png')");
    localStorage.setItem("imageIndex", imageIndex);
}