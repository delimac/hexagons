$('.show-filters').on('click', function() {
	if ($('.filters-list').is(':visible')) {
    $('.filters-list').slideUp()
    $('.show-filters').text('Show filters')
  } else {
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide filters')
  }
  
  // blocks the default behavior of the # href jumping to the top of page
  return false
  
})

$('.filters-list a').on('click', function() {
  var filter = $(this).attr('data-filter')
  console.log(filter)
  
  $('.product').hide()
  $(filter).show()
  
  // This adds class name of selected to current filter
  $('.filters-list a').removeClass('selected')
  $(this).addClass('selected')
  
  return false
})