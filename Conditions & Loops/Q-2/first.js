let num = prompt("Enter your marks");
let grade;
if (num >= 90) {
  grade = "A";
} else if (num >= 70) {
  grade = "B";
} else if (num >= 50) {
  grade = "C";
} else {
  grade = "F";
}
alert(grade);
