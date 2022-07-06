import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign({user}, 'DallApp98000', { expiresIn: '30d' });
}

export const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
}

export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
} 
