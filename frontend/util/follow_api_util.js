export const createFollow = follow => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { follow }
  })
);

export const deleteFollow = followshipId => (
  $.ajax({
    method: 'DELETE',
    url: `api/follows/${followshipId}`
  })
);
