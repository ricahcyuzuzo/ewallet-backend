import Hapi from '@hapi/joi';

export const validateCreateProduct = (user) => {
  const schema = Hapi.object().keys({
    name: Hapi.string().required(),
    price: Hapi.number().required(),
  });

  return schema.validate(user);
}
