import { getSubscriptionByUserId } from "./getSubscriptionUtil";
const unmockedFetch = global.fetch;

const fakeSubscriptionList = [
  {
    id: 39,
    userId: 6,
    magazineId: 1,
    price: 10,
    type: "weekly",
    isActive: false,
    startDate: "2024-01-04T13:32:29.286Z",
    endDate: "2029-01-04T13:32:29.286Z",
  },
];

beforeAll(() => {
  global.fetch = () =>
    // @ts-ignore
    Promise.resolve({
      json: () => Promise.resolve(fakeSubscriptionList),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

it("Get magazine list", async () => {
  const list = await getSubscriptionByUserId(1);
  expect(list.length).toEqual(1);
});
