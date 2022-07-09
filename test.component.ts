import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
 

@Component({
  selector: 'app-test',
  template: `
    
     <p> welcome to {{name}}  </p>
      <p>{{"Welcome to:" +name }}</p>
     <p> {{name.length}}</p>
     <p>{{name.toUpperCase()}}</p>
     <p>{{userName()}}</p>
     <input [id]="courseId" type="text" value="angular">
     <input [disabled]=true   type="text" value= "angular10">
     <h2 [style.color]="'blue'">rsk helpline</h2>
     <h2 [style.color]="myColor">rsk helpline</h2>
     <h2 [style.color]="required ? 'green' :'red' ">rsk helpline</h2>
     
     <input [(ngModel)]=data type="text">
     <button type="button">Click me</button>
     {{data}}
     <h1>{{fromParent}}</h1>
     <button (click)="fireEvent()">click me</button>
     <h2>{{name | uppercase}}</h2>
     <h2>{{name | titlecase}}</h2>
     <h2>{{date}}</h2>
     <h2>{{date | date:'short'}}</h2>
     <h2>{{birthday| date:'fullDate'|uppercase}}</h2>

    
  `,
  styles: [`
    h2{
      text-align:center;
      font-size:30px;

    }
    .textColor{
      color:green;
    }
    .textSize{
      font-size: 60px;
    }
    .textStyle{
      font-style:italic;
    }

    
  `]
})
export class TestComponent implements OnInit {

  public name="RSK Helpline";
  public msg= "welcome to rsk helpline";
  public person={
    "firstName": "rsk",
    "secondName": "helpline"
  }
  public date = new Date();
  public birthday=new Date(1987,6,18);
  public courseId = "123";
  public isDisabled = true;
  public myText = "textColor";
  public myText1 = "textSize";
  public myText2 = "textStyle";
  public required=true;
  @Input() public fromParent: any;
  @Output() public childInfo= new EventEmitter();
  fireEvent(){
    this.childInfo.emit("this is from child");
  }
  public group= {
    "textColor": this.required,
    "textSize": this.required,
    "textStyle": this.required
  }
  public data= "";
  public myColor= "pink";
  public greetings='';

  constructor() { }

  ngOnInit(): void {
  }
  userName(){
    return "welcome:" + this.name;
  }
  onClick(){
   return this.greetings="welcome to rsk helpline";
  }
  message(){
    console.log("how r u");
  }
  

}
