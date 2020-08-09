$(document).ready(function () {
  $(".apartments-dropdown").select2();
  $(".bills-dropdown").select2();

  var paymentsTable = $("#paymentsTable").DataTable({
    dom: "lfrtBp",
    buttons: ["excel", "pdf", "print"],
    order: [[4, "desc"]],
  });

  try {
    var total = paymentsTable.column(3, { filter: "applied" }).data().sum();
    totalPayment = Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(total);
    $("#value").append(totalPayment);
  } catch (e) {}

  $("#open-menu").on("click", function (e) {
    // $(".side-bar").toggle("display");
    $(".side-bar").show();
  });
  $("#close-menu").on("click", function (e) {
    // $(".side-bar").toggle("display");
    $(".side-bar").hide();
  });

  $("#paymentsTable_filter input").on("keyup", function () {
    var total = paymentsTable.column(3, { search: "applied" }).data().sum();
    totalPayment = Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(total);
    $("#value").html(totalPayment);
  });
});
