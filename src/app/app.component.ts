import { SelectItem } from 'primeng/components/common/selectitem';
import { DropDownMe } from './Interfaces/DropDown';
import { State } from './Interfaces/State';
import { ClassAlphabet } from './Class/ClassAlphabet';
import { Alphabet } from './Interfaces/Alphabet';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

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

  constructor() {
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


  // Empty sign
  emptySign = '#';
  // setBackgroundColor
  setBackgroundColorValue = '';

  // alfabet: String = ['a','b','c','d','e'];
  alfabet: String = '#ab';
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
        moveState: 'L',
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
        valueState: 'A',
        activeNow: false
      },
      7: {
        activeState: false,
        nextState: 7,
        moveState: '-',
        valueState: 'N',
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
        moveState: '{',
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
        valueState: 'A',
        activeNow: false
      },
      7: {
        activeState: false,
        nextState: 7,
        moveState: '-',
        valueState: 'N',
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
        valueState: 'A',
        activeNow: false
      },
      7: {
        activeState: false,
        nextState: 7,
        moveState: '-',
        valueState: 'N',
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

    // For test no.1
    // let object = 0;
    // // creating tabel for operation
    // this.initTestTabelMT.forEach(state => {
    //   // debugger;
    //   this.tableState[object] = [{}];
    //   for (let propertas = 0; propertas < this.valueNumberOfState + 1; propertas++) {
    //     const tempString = state[propertas];
    //     this.tableState[object][propertas] = ({
    //       nextState: tempString.state.substr(1, 1),
    //       valueState: tempString.state.substr(3, 1),
    //       moveState: tempString.state.substr(5, 1),
    //       activeState: true
    //     });
    //   }
    //   object++;
    //   // debugger;
    //   console.log(`this.tableState`);
    //   console.log(this.tableState);
    // });
    // object = 0;
    this.didWasDone = false;
  }


  ngAfterContentInit(): void {

  }

  isPalindrom() {
    debugger;
    this.copyOfWord = this.wordToCheck;
    // Check first sign
    // this.word.charAt(0);

    // for (let c = this.word.length; c >= 0; c--) {
    //   // Dupa
    // }

  }

  getBackgroundColor(currentSignInCurrentState: boolean) {
    if (currentSignInCurrentState) {
      return 'yellow';
    } else {
      return 'white';
    }
  }

  initializerOfTableState() {
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
}


class ClassDropdownMe implements DropDownMe {

  constructor(
    label?: string,
    value?: number
  ) { }
}



