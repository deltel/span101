import handleError from "./handleError";

describe("handleError Unit Test", () => {
  it('should call mock "json" function once', () => {
    const mockResponse = {
      json: jest.fn(() => "successful"),
    };

    handleError(mockResponse);
    expect(mockResponse.json).toBeCalledTimes(1);
  });
});
