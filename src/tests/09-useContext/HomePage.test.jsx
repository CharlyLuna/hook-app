import { render, screen } from "@testing-library/react";
import { HomePage } from "../../09-useContext/HomePage";
import { UserContext } from "../../09-useContext/context/UserContext";
import { UserProvider } from "../../09-useContext/context/UserProvider";

describe("Tests in HomePage component", () => {
  const user = { id: 1, name: "CH" };

  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should show the component with the user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
    const titleElement = screen.getByRole("heading");
    expect(titleElement.innerHTML).toContain(user.name);
  });
});
