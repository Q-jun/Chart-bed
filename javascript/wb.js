 $(function () {
      function get() {
        $.get('https://api.vvhan.com/api/wbhot', function (res) {
          var htmlStr = template('tpl-weibo', res)
          $('#container').html(htmlStr)
        })  
      }
      get()
    })
