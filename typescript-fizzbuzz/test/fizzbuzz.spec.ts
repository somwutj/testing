import { fizzbuzz } from "../src/fizzbuzz";

describe("fizzbuzz", () => {
  it("should return '1' for 1", () => {
    expect(fizzbuzz(1)).toBe("1");
  });
  it("should return '2' for 2", () => {
    expect(fizzbuzz(2)).toBe("2");
  });
  it("should return 'Fizz' for 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });
  it("should return '4' for 4", () => {
    expect(fizzbuzz(4)).toBe("4");
  });
  it("should return 'Buzz' for 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });
  it("should return 'Fizz' for 6", () => {
    expect(fizzbuzz(6)).toBe("Fizz");
  });
  it("should return 'FizzBuzz' for 15", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });
  it("should return 'FizzBuzz' for 30", () => {
    expect(fizzbuzz(30)).toBe("FizzBuzz");
  });
})