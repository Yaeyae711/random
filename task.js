// Question 1

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Example 1:

// Input: x = 121 Output: true Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121 Output: false Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

function isPallindrome() {
  let number = -121;
  let rem;
  let temp;
  let sum = 0;

  temp = number;
  while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);

    sum = sum * 10 + rem;
  }
  if (sum == temp) {
    console.log("The  number is Palindrome");
  } else {
    console.log("The  number is not palindrome");
  }
}
isPallindrome();
// Question 2

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Example:

// Input: nums = [0,0,1,1,1,2,2,3,3,4] Output: 5, nums = [0,1,2,3,4] Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.

function uniqueArray(array) {
  const unique = [];
  for (let i = 0; i < array.length; i++) {
    let found = false;
    for (j = 0; j < unique.length; j++) {
      if (array[i] === unique[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      unique.push(array[i]);
    }
  }
  return [unique, `ouput is ${unique.length}`];
}

// Running the code is straightforward.

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(uniqueArray(arr, arr.length));

// Question 3

// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World" Output: 5 Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = " fly me to the moon " Output: 4 Explanation: The last word is "moon" with length 4.

function lengthOfLastWord(a) {
  let len = 0;

  // String a is 'final'-- can
  // not be modified So, create
  // a copy and trim the
  // spaces from both sides
  x = a.trim();
  let word = "";

  for (let i = x.length - 1; i >= 0; i--) {
    if (x[i] != " ") {
      len++;
      word = word + x[i];
    } else {
      break;
    }
  }

  let newStr = [...word].reverse().join("");
  console.log(newStr);

  return [len, newStr];
}

console.log(lengthOfLastWord("Hello World"));

// Question 4

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4] Output: 5 Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1] Output: 0 Explanation: In this case, no transactions are done and the max profit = 0.

function maxProfit(prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit = Math.max(profit, prices[j] - prices[i]);
    }
  }
  return profit;
}

let prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));

// Question 5:

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4] Output: [1,1,2,3,4,4]

// Question 6:

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4] Output: 6 Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1] Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8] Output: 23

function maxSubArraySum(a, size) {
  var maxint = Math.pow(2, 53);
  var max_so_far = -maxint - 1;
  var max_ending_here = 0;

  for (var i = 0; i < size; i++) {
    max_ending_here = max_ending_here + a[i];
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;

    if (max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
}
var a = [5, 4, -1, 7, 8];

console.log(maxSubArraySum(a, a.length));
