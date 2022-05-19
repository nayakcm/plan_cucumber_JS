const { BeforeAll, Before, After, AfterAll } = require('@cucumber/cucumber')

BeforeAll(() => console.log('>>> in BeforeAll()'))

Before(scenario =>
  console.log('>>> in Before()', { name: scenario.pickle.name })
)

After(scenario =>
  console.log('>>> in After()', {
    name: scenario.pickle.name,
    result: scenario.result.status
  })
)

AfterAll(() => console.log('>>> in AfterAll()'))
