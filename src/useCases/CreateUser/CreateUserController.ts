import { CreateUserUseCase } from './CreateUserUseCase';
import { Request, Response } from "express";

export class CreteUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.createUserUseCase.execute({ 
        name,
        email,
        password
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unesxpected error.'
      });
    }
  }
}