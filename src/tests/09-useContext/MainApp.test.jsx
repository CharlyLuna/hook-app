import { render, screen } from "@testing-library/react";
import { MainApp } from "../../09-useContext/MainApp";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Tests in MainApp component", () => {
  test("should show the home page", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("should show the login page", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("LoginPage")).toBeTruthy();
    expect(screen.getAllByRole("link")[3].className).toBe("nav-link active");
  });
});
