export const createFollow = follow => (
  $.ajax({
    method: 'POST',
    url: `api/follows`,
    data: { follow }
  })
)
