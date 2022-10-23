# Part 1 Answers
1. values added: 20
2. final result: 20
3. values added: 20
4. The code returns a reference error because result is declared with the `let` keyword, which only allows it block scope. This means that it cannot be accessed outside the block it is in, which is the if-statement. Line 13 is outside of the if-statement, therefore an error will occur.
5. The code returns a type error because result is declared with the `const` keyword, which means that it cannot be re-assigned to result, since it is a constant. As a result, the error occurs at line 7 and line 9 doesn't execute.
6. The code returns an type error because result is being re-assigned when it is a `const`. Additionally, being declared with the `const` keyword only allows it block scope. This means that it cannot be accessed outside the block that it is in, which is the if-statement. Line 13 is outside of the if-statement, therefore an error will occur.