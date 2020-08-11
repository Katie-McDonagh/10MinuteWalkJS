# 10MinuteWalkJS

This Kata is to practice outside in TDD.

The program will be given an array of directions (n,s,e,w), the program will return true if walk will take 10 minutes and place the person back at their starting point, other wise it will return false.

each direction will take 1 minute to complete.

input/output:

ten_minute_walk?(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']) # => true
ten_minute_walk?(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']) # => false
ten_minute_walk?(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n']) # => false
ten_minute_walk?(['w', 's']) # => false

to be true:

- arrays length needs to be 10 and 
- array contents needs to have equal amounts of n + s, and e + w.

anything else will be false.

Notes:

for the next test: I will determine the amount of N and S in an array to not be equal return false, iterate over the array counting the occurances of each letter, then compare them to see if they are equal or not.