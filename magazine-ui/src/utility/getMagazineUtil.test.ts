import { getMagazineList } from "./getMagazineUtil";
const unmockedFetch = global.fetch;

const fakeMagazineList = [
  {
    id: 10,
    name: "Vogue",
    category: "Fashion",
    publication: "Vogue",
    price: 10,
    issue: 101,
    imageurl: "https://ibb.co/DfH47Qh",
  },
];
beforeAll(() => {
  global.fetch = () =>
    // @ts-ignore
    Promise.resolve({
      json: () => Promise.resolve(fakeMagazineList),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

it("Get magazine list", async () => {
  const list = await getMagazineList();
  expect(list.length).toEqual(1);
});
