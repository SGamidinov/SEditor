document.getElementById('view').addEventListener('click', function (e) {
  e.preventDefault();
  var data = $('#search').val();
  console.log(data);
  $.ajax({
    method: "GET",
    url: '/allget',
    data: { keyword: data }
  }).done(function (result) {
    console.log(result);
  });
})
