/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import "@testing-library/jest-dom";

describe("Pruebas en <GifExpertApp />", () => {
  test("debe renderizar el titulo y el componente AddCategory correctamente", () => {
    render(<GifExpertApp />);

    expect(screen.getByText("Gif Expert App")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("debe agregar una nueva categoria si no es duplicada", async () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "One Piece" } });
    fireEvent.submit(form);

    const category = await screen.findByText("One Piece");
    expect(category).toBeTruthy();
  });
});
