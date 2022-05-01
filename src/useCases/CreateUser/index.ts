import { CreteUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgresUsersRepository } from './../../repositories/implementations/PostgresUserRepository';
import { MailtrapMailProvider } from './../../providers/implementations/MailtrapMailProvider';

const mailtrapProvider = new MailtrapMailProvider();
const postegresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postegresUsersRepository,
  mailtrapProvider
);

const createUserController = new CreteUserController(
  createUserUseCase
);

export { createUserUseCase, createUserController};