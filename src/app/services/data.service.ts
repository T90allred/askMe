import { Injectable } from '@angular/core';
import { Question } from "../models/Question";

@Injectable()
export class DataService {
  questions:Question[];


  constructor() { 
    // this.questions = [
    //   {
    //     text: "What is the best programming language?",
    //     answer: "JavaScript is the best programming language out there!",
    //     hide: true
    //   },
    //   {
    //     text: "How long have you been married?",
    //     answer: "I have been married for almost 4 years.",
    //     hide: true
    //   },
    //   {
    //     text: "What kind of car should I buy?",
    //     answer: "You should not buy a car, you need to buy a truck... next question.",
    //     hide: true
    //   }
    // ];
   }

   // Get Qs from local storage
   getQuestions() {
     if(localStorage.getItem('questions') === null) {
      this.questions = [];
     } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
     }
     return this.questions;
   }

   //add Q to local storage
   addQuestion(question:Question) {
    this.questions.unshift(question);

    //initial local var
    let questions;

    if(localStorage.getItem('questions') === null) {
       questions = [];
       //add new Q to Qarray
       questions.unshift(question);
       //Set new array to local storage
       localStorage.setItem('questions', JSON.stringify(questions));
     } else {
       questions = JSON.parse(localStorage.getItem('questions'));
       //add new question
       questions.unshift(question);
       //Reset local storage
       localStorage.setItem('questions', JSON.stringify(questions));
     }
    }

   //remove Q from local storage
   removeQuestion(question:Question) {
    for(let i = 0; i < this.questions.length; i++) {
      if(question == this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions',JSON.stringify(this.questions));
      }
    }
   }

}
