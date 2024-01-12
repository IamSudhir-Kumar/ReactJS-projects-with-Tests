const sum = require('./sum');

/*toBe */
test("sum of 1 and 2 should be 3", () => {
  expect(sum(1, 2)).toBe(3);
});

/*toEqual */
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

/*toBeFlasy */
test('n i falsy', () => {
    const n = null;
    expect(n).toBeFalsy();
});

/*toBeTruthy */
test('n i truthy', () => {
    const n = 1;
    expect(n).toBeTruthy();
});