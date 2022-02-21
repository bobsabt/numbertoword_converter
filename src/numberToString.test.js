const numberToString = require("./numberToString");

test("seven", () => {
    const resultNumberToString = numberToString("7");
    expect(resultNumberToString).toBe("seven");
});

test("forty-two", () => {
    const resultNumberToString = numberToString("42");
    expect(resultNumberToString).toBe("forty-two");
});

test("one thousand nine hundred and ninety-nine", () => {
    const resultNumberToString = numberToString("1999");
    expect(resultNumberToString).toBe("one thousand nine hundred and ninety-nine");
});

test("two thousand and one", () => {
    const resultNumberToString = numberToString("2001");
    expect(resultNumberToString).toBe("two thousand and one");
});

test("seventeen thousand nine hundred and ninety-nine", () => {
    const resultNumberToString = numberToString("17999");
    expect(resultNumberToString).toBe("seventeen thousand nine hundred and ninety-nine");
});

test("three hundred and forty-two thousand two hundred and fifty-one", () => {
    const resultNumberToString = numberToString("342251");
    expect(resultNumberToString).toBe("three hundred and forty-two thousand two hundred and fifty-one");
});

test("one million three hundred thousand four hundred and twenty", () => {
    const resultNumberToString = numberToString("1300420");
    expect(resultNumberToString).toBe("one million three hundred thousand four hundred and twenty");
});

test("zero", () => {
    const resultNumberToString = numberToString("0");
    expect(resultNumberToString).toBe("zero");
});

test("Too long number", () => {
    const resultNumberToString = numberToString("13004202222222222");
    expect(resultNumberToString).toBe("Too long number");
});

test("one thousand", () => {
    const resultNumberToString = numberToString("1000");
    expect(resultNumberToString).toBe("one thousand");
});

test("three million", () => {
    const resultNumberToString = numberToString("3000000");
    expect(resultNumberToString).toBe("three million");
});

test("sixteen", () => {
    const resultNumberToString = numberToString("16");
    expect(resultNumberToString).toBe("sixteen")
});

test("eighty", () => {
    const resultNumberToString = numberToString("80");
    expect(resultNumberToString).toBe("eighty")
});

test("twelve thousand three hundred and forty-five million six hundred and seventy-eight thousand nine hundred and two", () => {
    const resultNumberToString = numberToString("12345678902");
    expect(resultNumberToString).toBe("twelve thousand three hundred and forty-five million six hundred and seventy-eight thousand nine hundred and two")
});