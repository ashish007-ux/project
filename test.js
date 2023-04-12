describe("solution", () => {
  it("returns correct sum for each day of the week", () => {
    const D = {
      "2022-04-10": 1,
      "2022-04-11": 2,
      "2022-04-12": 3,
      "2022-04-13": 4,
      "2022-04-14": 5,
      "2022-04-15": 6,
      "2022-04-16": 7,
    };
    const result = solution(D);
    expect(result).toEqual({
      Sun: 1,
      Mon: 2,
      Tue: 3,
      Wed: 4,
      Thu: 5,
      Fri: 6,
      Sat: 7,
    });
  });

  it("interpolates missing days correctly", () => {
    const D = {
      "2022-04-10": 1,
      "2022-04-12": 3,
      "2022-04-13": 4,
      "2022-04-14": 5,
      "2022-04-16": 7,
    };
    const result = solution(D);
    expect(result).toEqual({
      Sun: 1,
      Mon: 3,
      Tue: 3,
      Wed: 4,
      Thu: 5,
      Fri: 7,
      Sat: 7,
    });
  });

});
