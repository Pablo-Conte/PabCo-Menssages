import { container, delay } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/infra/IUsersRepository";

import { UsersRepository } from "../../modules/accounts/infra/repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  delay(() => UsersRepository)
);
