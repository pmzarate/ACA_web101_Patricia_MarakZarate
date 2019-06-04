'use strict';

$(document).ready(function() {
  let $block = null;
  
  $('[data-row]').click(function() {
    if ($block) {
      $(this).prepend($block);
      $block = null;
    } else {
      $block = $(this).children().first().detach();
    }
  })
})