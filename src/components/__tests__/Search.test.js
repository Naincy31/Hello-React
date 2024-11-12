import { fireEvent, render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore"
import Search from "../Search";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/RestoListMock.json"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should render Search component", async () => {
    await act(async () => {
            render(
                <Provider store={appStore}>
                    <Search />
                </Provider>
            );
        });

        const searchbox = screen.getByRole("searchbox")

        expect(searchbox).toBeInTheDocument
})

// it("Should render filtered restaurants when the input value changes", async () => {
//     await act(async () => {
//         render(
//             <Provider store={appStore}>
//                 <Search />
//             </Provider>
//         );
//     });

//     const searchbox = screen.getByRole("searchbox")

//     fireEvent.change(searchbox, { target: {value: "Cafe"}})

//     const restoList = await screen.findAllByRole("div", {name: /res-info/i})
    
//     expect(restoList.length).toBeGreaterThan(0);

//     const pizzaRestaurant = await screen.findByText(/Cafe/i);  // Use regex to match the text "Pizza" in the restaurant name
//     expect(pizzaRestaurant).toBeInTheDocument();
// })