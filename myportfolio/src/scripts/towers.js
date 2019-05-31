'use strict';

$(document).ready(function() {
  let = null;
  
  $('[disks]').click(function() {
    if ($block) {
      $(this).append($block);
      $block = null;
    } else {
      $block = $(this).children().last().detach();
    }
  })
})