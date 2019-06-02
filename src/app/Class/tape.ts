import { TapeField } from './TapeField';
export class Tape {

    constructor() {
    }
    public currentElement: TapeField;

    MoveNext() {
        if (this.currentElement.next === null) {
            this.currentElement.next = new TapeField();
            this.currentElement.next.prev = this.currentElement;
        } else {
            this.currentElement = this.currentElement.next;
        }
    }

    MovePrev() {
        if (this.currentElement.prev === null) {
            this.currentElement.prev = new TapeField();
            this.currentElement.prev.next = this.currentElement;
        } else {
            this.currentElement = this.currentElement.prev;
        }
    }
}

