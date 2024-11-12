import { render, act, waitFor, screen } from "@testing-library/react";
import Cart from "../Cart";
import RestoMenu from "../RestoMenu";
import MOCK_DATA from "../mocks/RestoMenuMock.json"

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA),
    })
  );


it("Should load RestoMenu component", async () => {
    render(<RestoMenu />);

    // Use waitFor to wait until the element is rendered after the fetch completes
    await waitFor(() =>
      expect(screen.getByText(MOCK_DATA?.cards[2]?.card?.card?.info?.name)).toBeInTheDocument()
    );

    screen.debug()
})