import { TapeField } from './Class/TapeField';
import { Tape } from './Class/Tape';
import { SelectItem } from 'primeng/components/common/selectitem';
import { DropDownMe } from './Interfaces/DropDown';
import { State } from './Interfaces/State';
import { ClassAlphabet } from './Class/ClassAlphabet';
import { Alphabet } from './Interfaces/Alphabet';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
  blogPostSearchResults = [{}];
  initTestTabelMT = [];
  didWasDone: boolean;

  // Word
  copyOfWord = '';
  wordToCheck = '';
  // Tape ##################################
  tape: any;

  // First State
  firstState = true;
  // Current obecjt
  currentObject: {
    celka: any;
    object: number;
    state: any;
  };

  constructor() {
    this.tape = new Tape();
    this.displayAlphabet.letter = this.alfabet.split('');
  }
  title = 'Turing';
  // stateList: Array<any> = [];
  list = new Array();
  // stateList: any = [];
  stateList = [
    { state: 'q0', stateValue: 'q1/#/-' },
    { state: 'q0', stateValue: 'q6/a/L' },
    { state: 'q0', stateValue: 'q3/b/P' },
    { state: 'q1', stateValue: 'q3/b/-' },
    { state: 'q1', stateValue: 'q4/#/L' },
    { state: 'q1', stateValue: 'q3/a/P' },
    { state: 'q2', stateValue: 'q1/b/-' },
    { state: 'q2', stateValue: 'q2/#/L' },
    { state: 'q2', stateValue: 'q3/b/P' },
    { state: 'q3', stateValue: 'q7/a/-' },
    { state: 'q3', stateValue: 'q4/#/L' },
    { state: 'q3', stateValue: 'q5/a/P' },
  ];


  initStateListJSON = [
  ];

  stateListJSON = [];
  json = null;
  stateColumn: string[] = [];

  MoveState: SelectItem[];
  // Value state - alphabte
  ValueState: ClassDropdownMe[] = [];

  tableState = [];

  // Number of State
  numberOfState = new Array();
  valueNumberOfState = 6;
  // Counters
  counterForOneMove = 0;
  counterForAllMoves = 0;

  // Empty sign
  emptySign = '#';
  // setBackgroundColor
  setBackgroundColorValue = '';

  // alfabet: String = ['a','b','c','d','e'];
  alfabet: String = '#ab ';
  displayAlphabet: Alphabet = new ClassAlphabet(
    null
  );

  // Example
  palindromTabelExample = [
    {
      0: {
        activeState: false,
        nextState: 7,
        moveState: 'P',
        valueState: '#',
        activeNow: false
      },
      1: {
        activeState: false,
        nextState: 2,
        moveState: 'L',
        valueState: '#',
        activeNow: false
      },
      2: {
        activeState: false,
        nextState: 7,
        moveState: '-',
        valueState: '#',
        activeNow: false
      },
      3: {
        activeState: false,
        nextState: 0,
        moveState: 'P',
        valueState: '#',
        activeNow: false
      },
      4: {
        activeState: false,
        nextState: 5,
        moveState: 'L',
        valueState: '#',
        activeNow: false
      },
      5: {
        activeState: false,
        nextState: 7,
        moveState: '-',
        valueState: '#',
        activeNow: false
      },
      6: {
        activeState: false,
        nextState: 6,
        moveState: '-',
        valueState: 'N',
        activeNow: false
      },
      7: {
        activeState: false,
        nextState: 7,
        moveState: '-',
        valueState: 'A',
        activeNow: false
      }
    },
    {
      0: {
        activeState: false,
        nextState: 1,
        moveState: 'P',
        valueState: '#',
        activeNow: false
      },
      1: {
        activeState: false,
        nextState: 1,
        moveState: 'P',
        valueState: 'a',
        activeNow: false
      },
      2: {
        activeState: false,
        nextState: 3,
        moveState: 'L',
        valueState: '#',
        activeNow: false
      },
      3: {
        activeState: false,
        nextState: 3,
        moveState: 'L',
        valueState: 'a',
        activeNow: false
      },
      4: {
        activeState: false,
        nextState: 4,
        moveState: 'P',
        valueState: 'a',
        activeNow: false
      },
      5: {
        activeState: false,
        nextState: 6,
        moveState: '-',
        valueState: 'a',
        activeNow: false
      },
      6: {
        activeState: false,
        nextState: 6,
        moveState: '-',
        valueState: 'N',
        activeNow: false
      },
      7: {
        activeState: false,
        nextState: 7,
        moveState: '-',
        valueState: 'A',
        activeNow: false
      }
    },
    {
      0: {
        activeState: false,
        nextState: 4,
        moveState: 'P',
        valueState: '#',
        activeNow: false
      },
      1: {
        activeState: false,
        nextState: 1,
        moveState: 'P',
        valueState: 'b',
        activeNow: false
      },
      2: {
        activeState: false,
        nextState: 6,
        moveState: '-',
        valueState: 'b',
        activeNow: false
      },
      3: {
        activeState: false,
        nextState: 3,
        moveState: 'L',
        valueState: 'b',
        activeNow: false
      },
      4: {
        activeState: false,
        nextState: 4,
        moveState: 'P',
        valueState: 'b',
        activeNow: false
      },
      5: {
        activeState: false,
        nextState: 3,
        moveState: 'L',
        valueState: '#',
        activeNow: false
      },
      6: {
        activeState: false,
        nextState: 6,
        moveState: '-',
        valueState: 'N',
        activeNow: false
      },
      7: {
        activeState: false,
        nextState: 7,
        moveState: '-',
        valueState: 'A',
        activeNow: false
      }
    }
  ];

  ngAfterViewInit(): void {
    // console.log(this.tref.nativeElement.textContent);
  }

  ngOnInit(): void {
    this.didWasDone = true;
    this.MoveState = [
      { label: 'P', value: 'P' },
      { label: 'L', value: 'L' },
      { label: '#', value: '#' },
    ];
    this.initializerOfTableState();
    this.createDisplayAlphabet();
    this.didWasDone = false;
  }


  ngAfterContentInit(): void {

  }

  isPalindrom() {
    this.copyOfWord = this.wordToCheck;
    this.counterForAllMoves++;
  }

  oneMove() {
    let acceptationState = false;
    let noAcceptationState = false;
    let stop = false;
    while (stop === false) {
      debugger;
      // Sprawdź symbol na taśmie
      let currentSignFromTape = this.checkSignOnTheTape();

      // Sprawdź czy znak pierwszy i pobierz dane
      if (this.firstState === true) {
        this.currentObject = this.findSignInStateQn(
          0,
          this.palindromTabelExample,
          currentSignFromTape.value
        );
        this.firstState = false;
      } else if (currentSignFromTape.value !== null) {
        this.currentObject = this.findSignInStateQn(
          this.currentObject.celka.nextState,
          this.palindromTabelExample,
          currentSignFromTape.value
        );
      } else if (currentSignFromTape.value === null) {
        this.currentObject = this.findSignInStateQn(
          this.currentObject.celka.nextState,
          this.palindromTabelExample,
          '#'
        );
      }

      // Zerowanie podświetleń
      this.setFalseOnAllActiveNow();
      this.setFalseOnAllActiveState();

      // Podświetlenie aktualnego stanu
      this.setTrueOnOneActiveState(this.currentObject.state);
      // Podświetlenie aktualnej celki
      this.setTrueOnOneActiveNow(this.currentObject.object, this.currentObject.state);
      // Praca na danych z celki.

      // Wpisanie znaku z celki na taśmę
      let s = 0;
      debugger;
      for (s = 0; s < this.wordToCheck.length; s++) {
        // Znalezeinie znaku w wordToCheck
        if (this.currentObject.celka.valueState === currentSignFromTape.value) {
          console.log(`this.currentObject.celka.valueState === currentSignFromTape.value`);
        } else if (this.wordToCheck[s] === currentSignFromTape.value) {
          let newStr = '';
          let i = 0;
          for (i; i < s; i++) {
            newStr += this.wordToCheck[i];
          }
          newStr += this.currentObject.celka.valueState;
          if (i === 0) {
            i++;
          }
          if (newStr.length !== this.wordToCheck.length) {
            for (let y = i; y < this.wordToCheck.length; y++) {
              if (newStr.length !== y) {
                y++;
              }
              newStr += this.wordToCheck[y];
            }
          }

          this.wordToCheck = newStr;
          this.copyOfWord = newStr;
          // this.copyOfWord[s] = this.currentObject.celka.valueState;
          console.log(`wordToCheck`);
          console.log(this.wordToCheck);
          console.log(`copyOfWord`);
          console.log(this.copyOfWord);
          s = this.wordToCheck.length;
        } else if (currentSignFromTape.value === '#') {
          let newStr = '';
          let i = 0;
          for (i; i < s; i++) {
            newStr += this.wordToCheck[i];
          }
          newStr += this.currentObject.celka.valueState;
          if (i === 0) {
            i++;
          }
          if (newStr.length !== this.wordToCheck.length) {
            for (let y = i; y < this.wordToCheck.length; y++) {
              if ( newStr.length !== y ) {
                y++;
              }
              newStr += this.wordToCheck[y];
            }
          }
          this.wordToCheck = newStr;
          this.copyOfWord = newStr;
          // this.copyOfWord[s] = this.currentObject.celka.valueState;
          console.log(`wordToCheck`);
          console.log(this.wordToCheck);
          console.log(`copyOfWord`);
          console.log(this.copyOfWord);
          s = this.wordToCheck.length;
        }
      }
      // Wpisanie nowego znaku na taśmę
      this.tape.currentElement.value = this.currentObject.celka.valueState;

      // Ruch głowicy na taśmie
      //    Zczytanie w którą strone głowica ma się ruszyć
      if (this.currentObject.celka.moveState === 'P') { // Prawo
        this.tape.MoveNext();
      } else if (this.currentObject.celka.moveState === 'L') { // Lewo
        this.tape.MovePrev();
      }
      // Przejście do stanu z celki
      // Q0 a - Ruch do stanu Q1  -- np.


      // Czy zakończyć
      if (this.currentObject.celka.valueState === 'N') {
        noAcceptationState = true;
        stop = true;
        alert(`It's not a palindrome`);
        break;
      }
      if (this.currentObject.celka.valueState === 'A') {
        acceptationState = true;
        stop = true;
        alert(`It's a palindrome`);
        break;
      }
      break;
    }
  }


  checkSignOnTheTape() {
    return this.tape.currentElement;
  }

  setFalseOnAllActiveState() {
    for (let object = 0; object < this.palindromTabelExample.length; object++) {
      for (let state = 0; state < this.stateColumn.length; state++) {
        this.palindromTabelExample[object][state].activeState = false;
      }
    }
  }

  setFalseOnAllActiveNow() {
    for (let object = 0; object < this.palindromTabelExample.length; object++) {
      for (let state = 0; state < this.stateColumn.length; state++) {
        this.palindromTabelExample[object][state].activeNow = false;
      }
    }
  }

  setFalseOnOneActiveNow(numberObject, numberState) {
    this.palindromTabelExample[numberObject][numberState].activeNow = false;
  }

  setFalseOnOneActiveState(numberState) {
    for (let set = 0; set < this.palindromTabelExample.length; set++) {
      this.palindromTabelExample[set][numberState].activeState = false;
    }
  }

  findActiveNowInTable(tabel: any) {
    for (let object = 0; object < tabel.length; object++) {
      for (let state = 0; state < this.displayAlphabet.letter.length; state++) {
        if (tabel[object][state].activeNow === true) {
          return ({
            celka: tabel[object][state],
            object: object,
            state: state
          });
        }
      }
    }
  }

  findSignInStateQn(stateNumber: any, tabel: any, mark: any) {
    for (let object = 0; object < this.displayAlphabet.letter.length; object++) {
      if (this.displayAlphabet.letter[object] === mark) {
        return ({
          celka: tabel[object][stateNumber],
          object: object,
          state: stateNumber
        });
      }
    }
  }



  setTrueOnOneActiveNow(numberObject, numberState) {
    this.palindromTabelExample[numberObject][numberState].activeNow = true;
  }

  setTrueOnOneActiveState(numberState) {
    for (let set = 0; set < this.palindromTabelExample.length; set++) {
      this.palindromTabelExample[set][numberState].activeState = true;
    }
  }

  checkTheCurrentMarkInTable(numberObject, numberState) {
    return this.palindromTabelExample[numberObject][numberState].valueState;
  }

  getTheSignFromTheWord(v: number) {
    return this.wordToCheck.charAt(v);
  }

  setEmptySignInASpecificPlace(position, mark) {
    // String.prototype.replace =
    //   function (index, replacement) {
    //     return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    //   };
    debugger;
    this.copyOfWord = this.copyOfWord.replace(position, mark);
    this.wordToCheck = this.wordToCheck.replace(position, mark);
  }

  createTapeFromWord() {
    for (let i = 0; i < this.wordToCheck.length; i++) {
      if (i === 0) {
        this.tape.currentElement = new TapeField();
      }
      if (this.tape.currentElement.next === null) {
        this.tape.currentElement.value = this.wordToCheck.charAt(i);
        this.tape.MoveNext();
      } else {
        this.tape.MoveNext();
        this.tape.currentElement.value = this.wordToCheck.charAt(i);
        this.tape.MoveNext();
      }
      console.log(`tape`);
      console.log(this.tape);
    }
    for (let i = 0; i < this.wordToCheck.length; i++) {
      this.tape.MovePrev();
    }
  }



  insertWord() {
    this.copyOfWord = this.wordToCheck;
    this.createTapeFromWord();
  }


  initializerOfTableState() {
    this.counterForOneMove = 0;
    this.counterForAllMoves = 0;
    // this.or.rows[0].cells[2].innerHTML = 'dupa';
    // Creating an object to the tabel
    // debugger;
    this.initTestTabelMT = [];
    for (let state = 0; state < this.displayAlphabet.letter.length; state++) {
      this.initTestTabelMT.push({});
    }
    // debugger;
    console.log(this.initTestTabelMT);
    this.initTestTabelMT.forEach(item => {
      for (let propert = 0; propert <= +this.valueNumberOfState; ++propert) {
        item[`${propert}`] = ({
          // state: `q${propert}/a/P`,
          activeState: true,
          nextState: propert,
          valueState: 'a',
          moveState: 'P',
          activeNow: false
        });
        if (propert === +this.valueNumberOfState) {
          // item[`${propert}`] = `q${propert + 1}/A/#`;
          item[`${propert}`] = ({
            activeState: false,
            nextState: propert,
            valueState: '#',
            moveState: '-',
            activeNow: true
          });
          // item[`${propert + 1}`] =  `q${propert + 2}/N/#`;
          item[`${propert + 1}`] = ({
            activeState: false,
            nextState: propert,
            valueState: '#',
            moveState: '-',
            activeNow: false
          });
        }

      }
    });
    console.log(`this.initTestTabelMT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
    console.log(this.initTestTabelMT);
    console.log('this.palindromTabelExample#######################################################');
    console.log(this.palindromTabelExample);
    if (+this.valueNumberOfState) {
      this.createColumnsForState();
    } else {
      alert('The number of state it isnt the number!');
    }
  }


  setBackgroundColor(set: boolean) {
    if (set === true) {
      return this.setBackgroundColorValue = 'move';
    } else {
      return this.setBackgroundColorValue = '';
    }
  }

  // Alphabet
  createDisplayAlphabet(): any {
    this.counterForOneMove = 0;
    this.counterForAllMoves = 0;
    this.numberOfState = new Array();
    for (let i = 0; i <= this.displayAlphabet.letter.length; i++) {
      this.ValueState.push(
        {
          label: `${this.displayAlphabet.letter[i]}`,
          value: `${this.displayAlphabet.letter[i]}`
        }
      );
      // Set a number of state
      this.numberOfState.push(i);
    }
    if (this.alfabet.indexOf('#', 0) === 0) {
      if (this.alfabet.includes('#')) {
        this.displayAlphabet.letter = this.alfabet.split('');
        if (this.didWasDone === false) {
          this.initializerOfTableState();
        }
      } else {
        alert('Brak symbolu pustego "#"');
      }
    } else {
      alert('Brak symbolu pustego na pierwszej pozycji "#"');
    }
  }

  // Columns of State
  createColumnsForState() {
    // Columns
    if (+this.valueNumberOfState) {
      this.stateColumn = [];
      for (let column = 0; column <= +this.valueNumberOfState + 1; column++) {
        // this.stateColumn[column] = {
        //   state: column
        // };
        this.stateColumn[column] = column.toString();
      }
      console.log(`this.stateColumn`);
      console.log(this.stateColumn);
    } else {
      alert('The number of state it isnt the number!');
    }
  }

  reset() {
    this.initializerOfTableState();
    this.setFalseOnAllActiveNow();
    this.setFalseOnAllActiveState();
    this.wordToCheck = 'abba';
    this.copyOfWord = 'abba';
    this.createTapeFromWord();
  }
}


class ClassDropdownMe implements DropDownMe {

  constructor(
    label?: string,
    value?: number
  ) { }
}



