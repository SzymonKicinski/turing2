import { State } from '../Interfaces/State';

export class ClassState implements State {
  constructor (
    public nextState?,
    public valueState?,
    public moveState?
  ) {

  }
}
