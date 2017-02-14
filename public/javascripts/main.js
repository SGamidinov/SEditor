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
    $('#code-area').val(msg.code);
  });
});

document.getElementById('save').addEventListener('click', function (e) {
  e.preventDefault();
  var source = document.getElementById('code-area').value;
  console.log(source + 'ex');
  var name = prompt('Enter name for example');
  if (name == null) return false;
  var owner = $('#usr').innerText;
  $.ajax({
    method: "POST",
    url: "/save",
    data: { source: $('#code-area').val(), name: name, owner: 'said' }
  }).done(function (msg) {
    console.log(msg);
    console.log(name)
    $('.name').html(name);
    $('#linkto').val(msg.link)
  });
});

document.getElementById('run').addEventListener('click', function (e) {
  console.log(this.innerHTML);
  this.innerHTML = 'Runing.....>';
  var that = this;
  setTimeout(function () {
    that.innerHTML = 'Run >';
  }, 1000);
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
    runn.appendChild(rzone)
    document.getElementById('log').innerHTML += '\n';
  } catch (e) {
    alert(e);
  }
}

var l = document.getElementById('usr');
var f = document.getElementById('login');

l.addEventListener('click', function () {
  this.style.display = 'none';
  var inp = document.getElementById('login');
  inp.style.display = 'block';
});

document.getElementById('let').addEventListener('click', function (e) {
  e.preventDefault();
  $.ajax({
    method: "POST",
    url: "/login",
    data: { cren: $('[name="cren"]').val() }
  }).done(function (msg) {
    console.log(msg);
    l.style.display = '';
    f.style.display = 'none'
    l.innerHTML = msg.name;
  })
});
