const timeout = ms => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

async function asyncPrint(value, ms) {
  const startTime = new Date().getTime();
  console.log(`进来了${value}`, startTime);
  await timeout(ms);
  console.log(`完成了${value}`, new Date().getTime() - startTime);
}

asyncPrint('hello world', 2000);
