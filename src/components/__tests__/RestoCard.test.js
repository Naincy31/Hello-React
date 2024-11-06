import RestoCard, { withOfferLabel } from "../RestoCard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../../components/mocks/RestoCardMock.json"

it("Should render RestoCard component with props data", () => {
    render(<RestoCard resInfo={MOCK_DATA}/>)

    const RestoName = screen.getByText("Mani's Cafe")

    expect(RestoName).toBeInTheDocument()
})

it("Should render RestoCard component with offer label", () => {
    const RestoCardOffer = withOfferLabel(RestoCard)

    render(<RestoCardOffer resInfo={MOCK_DATA}/>)

    const RestoOffer = screen.getByText(/10% OFF/)

    expect(RestoOffer).toBeInTheDocument()
})