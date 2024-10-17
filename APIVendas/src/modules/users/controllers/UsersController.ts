import { Request, response, Response } from 'express'
import ListUserService from '../services/ListUserService'
import CreateUserService from '../services/CreateUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {

    const listUser = new ListUserService();

    console.log(request.user.id);

    const users = await listUser.execute()

    return response.json(users).status(200);

  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password
    })

    return response.json(user).status(201);

  }

}