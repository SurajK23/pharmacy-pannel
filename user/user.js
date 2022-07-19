async function getUserData() {
  const response = await axios.get(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users"
  );
  const userData = response.data;

  console.log(userData);
  for (let user of userData) {
    const {
      id,
      currentCity,
      currentCountry,
      dob,
      fullName,
      gender,
      profilePic,
    } = user;

    $("tbody").append(`<tr class='table-row utr${id}'></tr>`);
    const tr = $(`.utr${id}`);
    $(tr).append(`<td class='ucolumn1 prdTd'>${id}</td>`);
    $(tr).append(`<td class='ucolumn2 prdTd'><img src='${profilePic}'></td>`);
    $(tr).append(`<td class='ucolumn3 user${id}'>${fullName}</td>`);
    $(tr).append(`<td class='ucolumn4 prdTd'>${dob}</td>`);
    $(tr).append(`<td class='ucolumn5 prdTd'>${gender}</td>`);
    $(tr).append(
      `<td class='ucolumn6 prdTd'>${currentCity}, ${currentCountry}</td>`
    );
    $(".user-button").click(() => {
      let temp = $(".user-button").val();
      let searchValue = $(".user-input").val().toLowerCase();
      if (searchValue.length == 0) {
        $(`.user${id}`).parent().show();
        $(".user-button").val("Search");
      } else if (searchValue.length > 1) {
        $("tbody tr").each(() => {
          let str = $(`.user${id}`).text().toLowerCase();
          if (str.indexOf(searchValue) != -1) {
            $(`.user${id}`).parent().show();
          } else {
            $(`.user${id}`).parent().hide();
          }
          $(".user-button").val("Reset");
        });
      }
    });
  }
  $(".user-button").click(() => {
    let searchValue = $(".user-input").val().toLowerCase();
    let temp = $(".user-button").val();

    if (searchValue.length == 1) {
      alert("Please Enter At Least 2 Character");
      console.log(searchValue);
    }
  });
}
getUserData();

$(document).ready($(".menuitem3").addClass("activeMenu"));
function logOut() {
  localStorage.setItem("uName", "");
  localStorage.setItem("pWord", "");
}
