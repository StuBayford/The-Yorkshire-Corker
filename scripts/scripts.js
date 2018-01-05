$('#countdown').countdown('2018/06/03 07:00:00', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<span class="display-1 countdown-number">%w</span> weeks '
    + '<span class="display-1 countdown-number">%d</span> days '
    + '<span class="display-1 countdown-number">%H</span> hr '
    + '<span class="display-1 countdown-number">%M</span> min '
    + '<span class="display-1 countdown-number">%S</span> sec'));
});