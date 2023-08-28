import BaseHttpService from "../baseHttpService";
import User from "./IUser";

class UserService extends BaseHttpService<User> {
  constructor(endpoint: string) {
    super(endpoint);
  }
}

const createUserService = (endpoint: string) => new UserService(endpoint);

export default createUserService("/user");

export { createUserService };
