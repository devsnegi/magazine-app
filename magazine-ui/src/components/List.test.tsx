import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

import { List } from "./List";
import MagazineContextProvider from "../contexts/MagazineContext";
// @ts-expect-error
const wrapper = (children: React.ReactNode, stateValue) => {
  return render(
    <MagazineContextProvider value={stateValue}>
      {children}
    </MagazineContextProvider>
  );
};

const stateValue = {
  state: {
    showSubScription: false,
  },
};
test("List Render", () => {
  // @ts-ignore
  wrapper(<List />, stateValue);
  const linkElement = screen.getByText(/No data to display/i);
  expect(linkElement).toBeInTheDocument();
});

// const fakeMagazine = [
//   {
//     id: 10,
//     name: "Vogue",
//     category: "Fashion",
//     publication: "Vogue",
//     price: 10,
//     issue: 101,
//     imageurl: "https://ibb.co/DfH47Qh",
//   },
//   {
//     id: 11,
//     name: "Times",
//     category: "Public",
//     publication: "Times",
//     price: 30,
//     issue: 9,
//     imageurl: "https://ibb.co/DfH47Qh",
//   },
// ];

// describe("App", () => {
//   beforeEach(() => {
//     fetchMock.resetMocks();
//   });

//   test("renders users when API call succeeds", async () => {
//     fetchMock.mockResolvedValue({
//       status: 200,
//       // @ts-ignore
//       json: jest.fn(() => fakeMagazine),
//     });

//     render(<List />);
//     expect(await screen.findByText("Magazine List")).toBeInTheDocument();
//     expect(await screen.findByText("Vogue")).toBeInTheDocument();
//     expect(await screen.findByText("Times")).toBeInTheDocument();
//   });
// });
