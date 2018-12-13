export const fetchImages = () => ({
  $.ajax({
    method: 'GET',
    url: 'api/images'
  })
})
