import Entity from "../IEntity";

export default interface User extends Entity {
  name: string;
  email?: string;
}
