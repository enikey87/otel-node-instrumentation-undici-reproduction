const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

while (true) {
  await (await fetch('https://ya.ru')).text()

  console.log('Spans from the fetch instrumentation should appear in the console a few seconds later')

  await sleep(10000)
}
