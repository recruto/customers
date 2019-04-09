import extractIdFromName from "../extractIdFromName"

test('Name with "-"', () => {
  let name =
    "projects/recru-to/databases/(default)/documents/companies/my-company"
  expect(extractIdFromName(name)).toBe("my-company")
})

test("Name alphanumeric", () => {
  let name =
    "projects/recru-to/databases/(default)/documents/companies/JHh9e80kJ0"
  expect(extractIdFromName(name)).toBe("JHh9e80kJ0")
})
