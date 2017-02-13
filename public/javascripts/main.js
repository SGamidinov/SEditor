document.getElementById('go').addEventListener('click', function (e) {
  e.preventDefault();
  var data = document.getElementById('short-link');
  console.log(data.value);
  if (data.value.length < 1) {
    return false;
  };
  $.ajax({
    method: "GET",
    url: "/shortlink",
    data: { shortlink: $('[name="shortlink"]').val() }
  }).done(function (msg) {
    console.log(msg);
    $('#code-area').val('');
    $('#code-area').val(msg);
  });
});

document.getElementById('save').addEventListener('click', function (e) {
  e.preventDefault();
  var source = document.getElementById('code-area').value;
  console.log(source + 'ex');
  var name = prompt('Enter name for example');
  $.ajax({
    method: "POST",
    url: "/save",
    data: { source: $('#code-area').val(), name: name }
  }).done(function (msg) {
    console.log(msg);
    console.log(name)
    $('.title').html(name);
  });
});

document.getElementById('run').addEventListener('click', function (e) {
  console.log(this.innerHTML);
  this.innerHTML = 'Runing.....>';
  var that = this;
  setTimeout(function () {
    that.innerHTML = 'Run >';
  }, 3000);
  runner($('#code-area').val())
})

// check
function ee() {
  console.log('all things ')
}
// function runner

function runner (source) {
  var rzone = document.createElement('script');
  rzone.text = "try {" + source + "} catch (e) { document.getElementById('log').innerHTML += e }";
  var runn = document.getElementById('runner')
  try {
    // eval(source);
    runn.appendChild(rzone)
    document.getElementById('log').innerHTML += '\n';
  } catch (e) {
    alert(e)
  }
}
