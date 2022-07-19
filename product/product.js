async function getProductData() {
  const response = await axios.get(
    "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products"
  );
  const productData = response.data;
  let count = productData.length;
  for (let product of productData) {
    const {
      id,
      expiryDate,
      medicineBrand,
      prescriptionRequired,
      stock,
      unitPrice,
      medicineName,
    } = product;
    // console.log(
    //   id,
    //   expiryDate,
    //   medicineBrand,
    //   prescriptionRequired,
    //   stock,
    //   unitPrice,
    //   medicineName
    // );
    $("p").html(`Count: ${productData.length}`);

    $("tbody").append(`<tr class='table-row ptr${id}'></tr>`);
    const tr = $(`.ptr${id}`);
    $(tr).append(`<td class='pcolumn1 prdTd'>${id}</td>`);
    $(tr).append(`<td class='pcolumn2 prdTd'>${medicineName}</td>`);
    $(tr).append(`<td class='pcolumn3 prdTd'>${medicineBrand}</td>`);
    $(tr).append(`<td class='pcolumn4 prd${id}'>${expiryDate}</td>`);
    $(tr).append(`<td class='pcolumn5 prdTd'>$${unitPrice}</td>`);
    $(tr).append(`<td class='pcolumn6 prd${stock}'>${stock}</td>`);
    $("p").html(`Count : ${count} `);

    function showHide(x, y) {
      $("tbody tr").each(() => {
        let ndate = new Date($(`.prd${id}`).html());
        if ($(x).is(":checked") == false && ndate < y) {
          $(`.prd${id}`).parent().hide();
        } else if ($(x).is(":checked") == true && ndate < y) {
          $(`.prd${id}`).parent().show();
        }
      });
      let z = $("tbody tr:hidden").length;

      $("p").html(`Count : ${count - z} `);
    }
    function showHides(x, y) {
      $("tbody tr").each(() => {
        if ($(x).is(":checked") == false && $(`.prd${stock}`).html() < y) {
          $(`.prd${stock}`).parent().hide();
        } else if (
          $(x).is(":checked") == true &&
          $(`.prd${stock}`).html() < y
        ) {
          $(`.prd${stock}`).parent().show();
        }
      });
      let z = $("tbody tr:hidden").length;

      $("p").html(`Count : ${count - z} `);
    }

    $("#chek1").click(() => {
      let date = new Date();
      showHide("#chek1", date);
    });
    $("#chek2").click(() => {
      showHides("#chek2", 100);
    });
  }
}
getProductData();

$(document).ready($(".menuitem2").addClass("activeMenu"));
function logOut() {
  localStorage.setItem("uName", "");
  localStorage.setItem("pWord", "");
}
