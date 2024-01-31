// The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// Because loop condition always evaluates to true.
// Assignment expression returns the assigned value, in this case 1.
// Since 1 evaluates as true, the loop never stops.
// The if condition never becomes true and loop never breaks because on each iteration,
// counter is reassigned the value of 1, never reaching above 2.
