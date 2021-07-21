import executeRequest from "./executeGet";

jest.spyOn(global, "fetch");

describe("executeRequest Unit Tests", () => {
  it("should return an array", async () => {
    global.fetch.mockResolvedValue({
      json: () => [
        { value: "Uno", id: 1 },
        { value: "Dos", id: 2 },
        { value: "Tres", id: 3 },
      ],
    });

    const result = await executeRequest("http://localhost:4000/words");

    expect(result).toMatchObject([
      { value: "Uno", id: 1 },
      { value: "Dos", id: 2 },
      { value: "Tres", id: 3 },
    ]);
  });
});
