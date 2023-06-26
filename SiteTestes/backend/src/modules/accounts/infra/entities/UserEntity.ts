import { User } from "@prisma/client";

class UserEntity implements User {
  readonly id: number;
  email: string;
  name: string;
  password: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export { UserEntity };
