import handleError from "./handleError";

describe("handleError Unit Test", () => {
  it('should call mock "json" function once', () => {
    const mockResponse = {
      json: jest.fn(() => "successful"),
      status: 200,
    };

    handleError(mockResponse);
    expect(mockResponse.json).toBeCalledTimes(1);
  });

  describe("handleInvalidToken", () => {
    const removeItemSpy = jest
      .spyOn(window.localStorage.__proto__, "removeItem")
      .mockImplementation(() => {});

    it("should call removeItem function once", () => {
      const mockResponse = {
        json: jest.fn(() => "successful"),
        status: 401,
      };
      const getItemSpy = jest
        .spyOn(window.localStorage.__proto__, "getItem")
        .mockImplementation(() => "mockToken");

      handleError(mockResponse);
      expect(getItemSpy).toHaveBeenCalledTimes(1);
      expect(removeItemSpy).toHaveBeenCalledTimes(1);
    });

    it("should not call removeItem function", () => {
      const mockResponse = {
        json: jest.fn(() => "successful"),
        status: 500,
      };
      const getItemSpy = jest
        .spyOn(window.localStorage.__proto__, "getItem")
        .mockImplementation(() => undefined);

      handleError(mockResponse);
      expect(getItemSpy).toHaveBeenCalledTimes(1);
      expect(removeItemSpy).toHaveBeenCalledTimes(0);
    });
  });
});
