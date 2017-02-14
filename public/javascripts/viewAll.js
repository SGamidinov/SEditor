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

function opener (elements) {
  elements.forEach( function(element, index) {
    element[index].addEventListener('click', function (e) {
      /* body... */
      window.location.replace(window.location.host + '/view?shortlink=' + '58a32b5e86d6bd219d94a08e');
    })
  });
}
