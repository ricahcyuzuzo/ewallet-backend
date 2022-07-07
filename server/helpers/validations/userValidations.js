import Hapi from '@hapi/joi';

export const validateUserSignup = (user) => {
  const schema = Hapi.object().keys({
    names: Hapi.string().min(2).required(),
    phone: Hapi.string().min(10).max(15).required(),
    password: Hapi.string().required(),
    type: Hapi.string().required()
  });

  return schema.validate(user);
}

export const validateUserSignin = (user) => {
  const schema = Hapi.object().keys({
    phone: Hapi.string().min(10).max(15).required(),
    password: Hapi.string().required(),
  });

  return schema.validate(user);
}
