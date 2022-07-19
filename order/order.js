async function getTableData() {
  const response = await axios.get(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders"
  );
  const tableData = response.data;
  let count = tableData.length;
  console.log(tableData);
  for (let tableRow of tableData) {
    const { id, customerName, orderDate, amount, orderStatus, orderTime } =
      tableRow;
    $("tbody").append(`<tr class='table-row otr${id}'></tr>`);
    const tr = $(`.otr${id}`);

    $(tr).append(`<td class='column1 ordTd'>${id}</td>`);
    $(tr).append(`<td class='column2 ordTd'>${customerName}</td>`);
    $(tr).append(
      `<td class='column3 ordTd'>${orderDate}<br><span class='ordtime'> ${orderTime}</span></td>`
    );
    $(tr).append(`<td class='column4 ordTd'>$${amount}</td>`);
    $(tr).append(`<td class='column5 ord${id}'>${orderStatus}</td>`);
    $("p").html(`Count : ${count} `);
    function showHide(x, y) {
      $("tbody tr").each(() => {
        if ($(x).is(":checked") == false && $(`.ord${id}`).html() == y) {
          $(`.ord${id}`).parent().hide();
        } else if ($(x).is(":checked") == true && $(`.ord${id}`).html() == y) {
          $(`.ord${id}`).parent().show();
        }
      });
      let z = $("tbody tr:hidden").length;

      $("p").html(`Count : ${count - z} `);
    }
    $("#chek1").click(() => {
      showHide("#chek1", "New");
    });
    $("#chek2").click(() => {
      showHide("#chek2", "Packed");
    });
    $("#chek3").click(() => {
      showHide("#chek3", "InTransit");
    });
    $("#chek4").click(() => {
      showHide("#chek4", "Delivered");
    });
  }
}

getTableData();

$(document).ready($(".menuitem1").addClass("activeMenu"));
function logOut() {
  localStorage.setItem("uName", "");
  localStorage.setItem("pWord", "");
}
