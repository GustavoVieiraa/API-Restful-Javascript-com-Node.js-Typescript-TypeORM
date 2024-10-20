import { Request, response, Response } from 'express'
import ResetPasswordService from '../services/ResetPassowrdService';


export default class ResetPasswordController {
  
  public async create(request: Request, response: Response): Promise<Response> {

    const { password, token } = request.body;

    const resetPassword = new ResetPasswordService();

    await resetPassword.execute({
      token,
      password
    })

    return response.status(204).json();

  }

}