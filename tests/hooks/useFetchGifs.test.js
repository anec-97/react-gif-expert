/* eslint-disable no-undef */
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en useFetchGifs", () => {
  test("Debe de regresar un estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Piece"));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de imagenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Piece"));

    await waitFor(() => {
      const { images, isLoading } = result.current;
      expect(images.length).toBeGreaterThan(0);
      expect(isLoading).toBeFalsy();
    });
  });
});
