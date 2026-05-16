function createCounter(val) {
  let init = val;

  function increment() {
    return ++init;
  }
  function decrement() {
    return --init;
  }
  function reset() {
    init = val;
    return init;
  }
  return { increment, decrement, reset };
}
let counter = createCounter(0);
// calls = ["increment", "reset", "decrement"];
calls = ["increment", "increment", "decrement", "reset", "reset"];

for (let i = 0; i < calls.length; i++) {
  if (calls[i] === "increment") {
    console.log(counter.increment());
  } else if (calls[i] === "decrement") {
    console.log(counter.decrement());
  } else if (calls[i] === "reset") {
    console.log(counter.reset());
  }
}
