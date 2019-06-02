export class TapeField {

    constructor(
        public value?: string,
        public next?: TapeField,
        public prev?: TapeField
    ) {
        this.value = null;
        this.next = null;
        this.prev = null;
    }
    // value: String;
    // next: TapeField;
    // prev: TapeField;
}

