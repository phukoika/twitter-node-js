import { NextFunction, Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { ObjectId } from 'mongodb'
import { RegisterReqBody } from '~/models/requests/User.requests'
import usersService from '~/services/users.services'

export const loginController = async (req: Request, res: Response) => {
  // const user = req.user as User
  const user_id = req.body._id as ObjectId
  const result = await usersService.login(user_id.toString())
  return res.json({
    message: 'Login successful',
    result
  })
}
export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response,
  next: NextFunction
) => {
  const result = await usersService.register(req.body)
  return res.status(200).json({
    message: 'Register successfully',
    result
  })
}
