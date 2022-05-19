const { Given, When, Then } = require('@cucumber/cucumber')

Given(/^I have started my test$/, () => {
  // test started
})

When(/^I change the state$/, async () => {
  // change the state in some way
  return new Promise(async res => setTimeout(() => res, 1 * 1000))
})

Then(/^I pass$/, () => {
  // don't throw
})

Then(/^I fail$/, () => {
  throw 'I failed'
})


Then(/^I parallel$/, () => {
  return true
})