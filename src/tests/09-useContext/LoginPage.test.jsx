import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../09-useContext/LoginPage";
import { UserContext } from "../../09-useContext/context/UserContext";

describe("Tests ub LoginPage component", () => {
  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should call the setUser when you click the button", () => {
    setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const setUserButton = screen.getByRole("button", { name: "Set user" });
    fireEvent.click(setUserButton);
    expect(setUserMock).toBeCalledWith({ id: 123, name: "User no.1" });
  });
});
