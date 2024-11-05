/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "One Piece";

  test("Debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://onepiece.com/saitama.jpg",
      },
      {
        id: "123",
        title: "Naruto",
        url: "https://onepiece.com/naruto.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
