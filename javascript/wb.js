$(function () {
  function get() {
    $.get('https://api.vvhan.com/api/hotlist?type=wbHot', function (res) {
      var htmlStr = template('tpl-weibo', res)
      $('#container').html(htmlStr)
    })
  }
  get()
})
