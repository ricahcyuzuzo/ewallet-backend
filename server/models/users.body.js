export const createUser = req => {
  const user = {
    names: req.body.names,
    phone: req.body.phone,
    password: req.body.password,
    type: req.body.type
  }

  return user;
}

export const loginUser = req => {
  const user = {
    phone: req.body.phone,
    password: req.body.password,
  };

  return user;
}
