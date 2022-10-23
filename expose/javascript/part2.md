# Part 2
1. 3; The variable `i` is being printed to the console becuase it is of function scope. In the for-loop `i` increments for the length of prices. Since the length of prices list is 3, that is what gets printed at the end of the for-loop.
2. 150; The variable `discountedPrice` is 150 because after the for-loop finishes, the discountedPrice that was last calculated is 150. The variable `i` is 3 and so `prices[3]` is 300. We multiply that by `(1 - 0.5)`, which gives us `discountedPrice` = 150.
3. 150; The `finalPrice` is set to the rounded value of `discountedPrice` and `discountedPrice` is 150 for the last iteration of the for-loop. Therefore, `finalPrice` is 150.
4. [50, 100, 150]; The function will return a list of the `discountedPrice` for each of the values in the `prices` list.
5. The code causes a reference error since `i` is declared with the `let` keyword, which makes it a block scope variable. As a result it is not defined outside the for-loop at line 12.
6. The code causes a reference error since `discountedPrice` is declared with the `let` keyword, which makes it a block scope variable. As a result, it is not defined outside the for-loop at line 13.
7. 150; The `finalPrice` is defined in the scope. It gets set to 150 in the last iteration of the for-loop and therefore 150 is printed.
8. [50, 100, 150]; The function will return a list of the `discountedPrice` for each of the values in the `prices` list. Also since `finalPrice` is declared using the `let` keyword, but for the scope of the function, it will return the correct discounted values.
9. The code causes a reference error since `i` is declared with the `let` keyword, which makes it a block scope variable. As a result it is not defined outside the for-loop at line 11.
10. 3; The length is set to the length of `prices`, which is 3. Since the length of `prices` does not change or get re-assigned throughout the function the `const` declaration makes sense in this case and does not cause an error.
11. [50, 100, 150]; The function will return a list of the `discountedPrice` for each of the values in the `prices` list. Since `discountedPrice` is getting redeclared as a `const` variable in each iteration of the for-loop, the code does not cause an error. Then each time the value is pushed to the `discounted` list, which does not cause an error as the values are merely being added to the list and the memory address itself remains constant.
12. Notation:
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. Arithmetic:
    A. 32; The addition operator will concatonate the integer `2` to the string `'3'`, resulting in the string `'32'`.
    B. 1; The subtraction operator will convert `3` to an integer and then subtract `2` from it, resulting in the integer `1`.
    C. 3; The `null` has a value of 0 so adding it to `3` will result in the integer `3`.
    D. 3null; The addition operator will concatonate the string `'3'` to the `null`, resulting in the string `'3null'`.
    E. 4; The `true` has a value of 1, which when added to the integer `3`, will result in the integer `4`.
    F. 0; The `false` has a value of 0, which when added to the `null`, which also has a value of 0, will result in the integer `0`.
    G. 3undefined; The addition operator will concatonate the string `'3'` to the `undefined`, resulting in the string `'3undefined'`.
    H. nan; The subtraction operator will convert `3` to an integer and then subtract undefined from it, resulting in `nan`.
14. Comparison:
    A. true; The string `'2'` becomes the number 2 and is compared to the number `1`. Since 2 is greater than 1, true is the output.
    B. false; The string `'2'` is getting compared with the string `'12'`, letter by letter. So since 2 is greater than 1, false is the output.
    C. true; The string `'2'` becomes the number 2 and is compared to the number `2`. Since 2 is equal to 2, true is the output.
    D. false; The string `'2'` is being compared to the number `2` without type conversion, which outputs false.
    E. false; The `true` is converted to the integer 1, and 1 is not equal to `2`, so false is returned
    F. true; `Boolean(2)` is not 0, so therefore it's value will be true. and `true` is equal to true, so true is the output.
15. The `==` checks equality with type conversion while the `===` checks equality without type conversion.
16. check JS file part2-question16.js
17. [2, 4, 6]; We pass in `[1, 2, 3]` and the `doSomthing` function as parameters to `modifyArray`. Then in `modifyArray`, there is a new array that gets created and then for the length of the array we are pushing numbers from the original `array` into the newArray that are modified by the `doSomething` function, which multiplies the original value by 2. As a result, the `newArray` is returned with values that are 2 times the original `array`'s values.
18. check JS file part2-question18.js
19. Output:
    ```
        1
        4
        3
        2
    ```