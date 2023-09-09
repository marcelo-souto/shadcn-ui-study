import { verify } from "jsonwebtoken";

export default function verifyToken<T>(token: string) {

  try {
    const tokenPayload  = verify(token, process.env.SECRET_KEY as string);
    return { payload: tokenPayload as T, isValid: true };
  } catch (error) {
    return { payload: null, isValid: false };
  }
  
}
