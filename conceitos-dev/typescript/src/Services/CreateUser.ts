/**
 * Para criar: name, email, password
 */

interface TechObject {
  title: string,
  experience: number
} 

interface CreateUserData {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | TechObject> //esse é o tipo variável, quando apenas um tipo pode ser o tipo e [], ex: techs: string[],
}

export default function createUser(
  {name,
  email,
  password}: CreateUserData
  ) {
  const user = {
    name,
    email,
    password,
  }

  return user
}