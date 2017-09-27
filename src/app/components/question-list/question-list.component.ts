import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:Object[];

  constructor() { 
    this.questions = [
      {
        text: "What is the best programming language?",
        answer: "JavaScript is the best programming language out there!"
      },
      {
        text: "How long have you been married?",
        answer: "I have been married for almost 4 years."
      },
      {
        text: "What kind of car should I buy?",
        answer: "You should not buy a car, you need to buy a truck... next question."
      }
    ];
  }

  ngOnInit() {
  }

}
