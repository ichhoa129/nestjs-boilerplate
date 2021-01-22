import Faker from 'faker';
import { User } from 'src/app/User/index.entity';
import { define } from 'typeorm-seeding';

define(User, (faker: typeof Faker) : User => {
  const user = new User();
  user.username = faker.name.findName();
  user.password = faker.internet.password();
  user.gender = faker.random.boolean();
  return user;
});
