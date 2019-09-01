function f1() {
  const n = 5;
  if (true) {
    const n = 10;
  }
  console.log(n); // 5
}
f1();

{ { { {
  const insane = 'Hello World';
  { const insane = 'Hello World'; }
} } } }
