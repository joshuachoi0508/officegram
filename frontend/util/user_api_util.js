export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}`,
  })
);

export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    dataType: 'json',
    contentType: false,
    processData: false,
    data: user,
  })
);

export const fetchAllUsers = username => (
  $.ajax({
    method: 'GET',
    url: 'api/users',
    data: { username }
  })
);
