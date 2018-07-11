import faker from 'faker'
import { random } from 'Utils'

export const fakeSomeData = count => {
  return [...Array(count || 5)].map((e, i) => ({
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    id: 320 + i,
    date: faker.date.past(),
    combination: [
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 50),
      random(1, 26)
    ]
  }))
}
