import {
  capitalizeWord,
  separateDateGroup,
  separateWordGroup,
  transformLabel,
} from "./wordOperations";

describe("wordOperations Unit Tests", () => {
  const obj = {
    Id: 1,
    Value: "Uno",
    "Created At": "May 5 2020",
    "Updated At": "May 5 2020",
    Translation: "One",
    "Part of Speech": "noun",
    Category: "noun",
    Keyword: "noun",
    Example: "Uno, dos",
  };

  const dateObj = {
    "Created At": "Tue May 05 2020",
    "Updated At": "Tue May 05 2020",
  };

  const wordObj = {
    Translation: "One",
    "Part of Speech": "noun",
    Category: "noun",
    Keyword: "noun",
    Example: "Uno, dos",
  };

  it("should capitalize word", () => {
    const result = capitalizeWord("capital");

    expect(result).toBe("Capital");
  });

  it("should remove 4 properties", () => {
    const result = separateWordGroup(obj);

    expect(result).toMatchObject(wordObj);
  });

  it("should remove all but date properties", () => {
    const result = separateDateGroup(obj);

    expect(result).toMatchObject(dateObj);
  });

  describe("transformLabel()", () => {
    it("should capitalize word", () => {
      const result = transformLabel("label");

      expect(result).toBe("Label");
    });

    it('should separate "part_of_speech"', () => {
      const result = transformLabel("part_of_speech");

      expect(result).toBe("Part of Speech");
    });

    it('should separate "created_at"', () => {
      const result = transformLabel("created_at");

      expect(result).toBe("Created At");
    });
  });
});
