function readURL(input) {
  // show image preview on pick and upload
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      document
        .querySelector(".uploader > .mdl-card__title")
        .setAttribute(
          "style",
          'background-image: url("' + e.target.result + '"); height: 180px;'
        );
    };
    reader.readAsDataURL(input.files[0]);
  }
}

document.getElementById("upload").addEventListener("change", function(e) {
  readURL(this);
});

function showReport(){
  document
    .querySelector(".uploader .mdl-spinner")
    .setAttribute("style", "visibility: hidden");
  document.getElementById('report').classList.add('visible');
}

document.getElementById("run").addEventListener("click", function(e) {
  var uploadBtn = document.getElementById("upload");
  if (!uploadBtn.value) return false;
  document.querySelector('.upload').disabled = true;
  document
    .querySelector(".uploader .mdl-spinner")
    .setAttribute("style", "visibility: visible");
  setTimeout(showReport, Math.floor(500 + Math.random()*1000));
});