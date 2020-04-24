import { Request, Response } from 'express'
import createUser from './Services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'raul.oliveiraferreira@gmail.com',
    password: '123456',
    techs: [
      'Node.Js',
      'ReactJS',
      'React Native',
      { title: 'Node.JS', experience: 100 },
    ],
  })
  return response.json({ message: 'Hello World' })
}