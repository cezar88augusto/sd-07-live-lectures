const { expect, afterEach } = require("@jest/globals");
const { default: fetch } = require("node-fetch");
let { fetchDog } = require("./fetch-dog");

describe('', () => {
  fetchDog = jest.fn();

  afterEach(() => {
    fetchDog.mockReset();
  });

  test('when request is successful', () => {
    fetchDog.mockResolvedValue('request success');

    expect(fetchDog()).resolves.toBe('request success');
    expect(fetchDog).toHaveBeenCalledTimes(1);

    fetchDog();
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });

  test('when request is failed', () => {
    fetchDog.mockRejectedValue('request failed');

    expect(fetchDog()).rejects.toBe('request failed');
    expect(fetchDog).toHaveBeenCalledTimes(3);
  });

});