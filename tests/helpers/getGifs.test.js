/* eslint-disable no-undef */
import { getGifs } from "../../src/helpers/getGifs";

describe("Test on GifItem ()", () => {
  test("should return an object of gifs", async () => {
    const gifs = await getGifs("One Piece");

    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
