$(document).ready(function () {
  let baseurl = "http://localhost:3000";
  let id = document.querySelector(".id");
  let title = document.querySelector(".title");
  let views = document.querySelector(".views");
  let nese = document.querySelector(".nese");

  $("#send").click(function () {
    const payload = {
      ad: $("#ad").val(),
      soyad: $("#soyad").val(),
    };
    $.ajax({
      url: baseurl + "/jokes",
      type: "POST",
      data: JSON.stringify(payload),
    });
  });

  $.ajax({
    url: baseurl + "/jokes",
    method: "GET",
    success: function (data) {
      data.forEach((element) => {
        let li = document.createElement("p");
        li.textContent = element.ad;
        ul.append(li);
        let soyads = document.createElement("p");
        soyads.textContent = element.soyad;
        sir.append(soyads);
      });
    },
  });
});
