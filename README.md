# [Simple Elevator](https://www.codewars.com/kata/simple-elevator)

Explain the challenge as completely & clearly as you can.

simple_elevator: Function
* Args: 2
  1: Number
  2: String
* Return: Number -> -3 <= n <= 3
  * Return difference between arg2 and arg1
* Behavior: Returns difference between arg2 and arg1

'''js


  function goto(level,button){
    if(level > 3 || Number(button) > 3) {
    return 0;
    }  else if (level < -3 ||  Number(button) < -3) {
    return 0;
    }  else if (typeof level !== 'number' || typeof button !== 'string') {
    return 0;
      } else if (level % 1 !== 0 ||  Number(button) % 1 !== 0 ) {
    return 0;
    }  else if (button === undefined ||  button === '') {
    return 0;
    }  else if (level === undefined ||  level === '') {
    return 0;
    
    } else {
      return Math.floor(Number(button)) - Math.floor(level);
    }
  }


'''


### Index
* [Input Classifications](#input-classifications)
* [Solution Explanation](#solution-explanation)
* [Constraints](#constraints)
* [Resource Estimation](#resource-estimation)
* [Scaffolding](#scaffolding)
* [Bugs & Challenges](#bugs-challenges) 
* [Language Features](#language-features)
* [Use Cases](#use-cases)
* [Learning Journal](#learning-journal)

---

## Input Classifications

What characteristics of your inputs are important for your solution? 

1 argument: -3 <= whole number <= 3 

2 argument: string


[TOP](#index)

___

## Solution Explanation

Python tutor link - https://goo.gl/7vbFMF

[TOP](#index)

---

## Constraints

We will solve it twice:
1. With a pure function
2. With an object

[TOP](#index)

___


## Resource Estimation

Estimate how what resources you will require, and how much of each.  


[TOP](#index)

___

## Scaffolding

Python tutor link - https://goo.gl/7vbFMF

[TOP](#index)

___

## Challenges & Bugs

What particular challenges & bugs did you come across when you were filling in your scaffolding?

Were they logic bugs? Language bugs? 

Did you have trouble keeping track of which part of the challenge you were solving?

[TOP](#index)

___

## Language Features

List the language features used in your solution.

The focus of these exercises are to strengthen you problem solving skills, not to learn the newest ES6 tricks. When you have the choice between to different language features it is better to choose the option that is easiest to read, most common, or most consistent with the rest of your solution.  

Keeping track of the language features you use will enable you separate the problem solving strategy from the implementation.  Being aware of this difference will be an asset later on when you're faced with larger applications and popular frameworks.

[TOP](#index)

---
## Use Cases

List 5+ use cases for your solution.  They can be stand-alone, part of an application, or impractical.  Your use cases can be overly complicated, or very basic. What's important is that you come up with as many and as diverse use cases as possible.


[TOP](#index)

---

## Learning Journal

Things I learned studying this problem: Never trust Javascript


New vocabulary: WTFJS


Things I struggled with: Making tests


Lessons to apply for next time: Never ever trust Javascript



[TOP](#index)

___
___


