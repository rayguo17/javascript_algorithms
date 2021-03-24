const gigasecond = require("./gigasecond").gigasecond;

describe('Gigasecond', () => {
  // date only specification of time
  test('tells a gigasecond anniversary since midnight', () => {
    let gs = gigasecond(new Date(Date.UTC(2011, 3, 25)));
    let expectedDate = new Date(Date.parse('2043-01-01T01:46:40Z'));
    expect(gs).toEqual(expectedDate);
  });

  // second test for date only specification of time
  test('tells another gigasecond anniversary since midnight', () => {
    let gs = gigasecond(new Date(Date.UTC(1977, 5, 13)));
    let expectedDate = new Date(Date.parse('2009-02-19T01:46:40Z'));
    expect(gs).toEqual(expectedDate);
  });

  // third test for date only specification of time
  test('tells gigasecond anniversary since midnight, from before UNIX epoch', () => {
    let gs = gigasecond(new Date(Date.UTC(1959, 6, 19)));
    let expectedDate = new Date(Date.parse('1991-03-27T01:46:40Z'));
    expect(gs).toEqual(expectedDate);
  });

  // full time specified
  test('tells the anniversary, including a time', () => {
    let gs = gigasecond(new Date(Date.UTC(2015, 0, 24, 22, 0, 0)));
    let expectedDate = new Date(Date.parse('2046-10-02T23:46:40Z'));
    expect(gs).toEqual(expectedDate);
  });

  // full time with day roll-over
  test('tells the anniversary is next day when you are born at night', () => {
    let gs = gigasecond(new Date(Date.UTC(2015, 0, 24, 23, 59, 59)));
    let expectedDate = new Date(Date.parse('2046-10-03T01:46:39Z'));
    expect(gs).toEqual(expectedDate);
  });

  test('does not mutate the input', () => {
    let input = new Date(Date.UTC(2020, 0, 4, 20, 28, 30));
    gigasecond(input);
    expect(input).toEqual(new Date(Date.UTC(2020, 0, 4, 20, 28, 30)));
  });
});
