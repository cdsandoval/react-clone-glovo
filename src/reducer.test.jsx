import reducer from "./reducer";

test("reducer - RESET", () => {
  const initialState = {
    cart: {
      1: {
        id: 1,
        quantity: 1
      }
    }
  };

  const action = { type: "RESET" };
  const finalState = reducer(initialState, action);
  const expectedState = { cart: {} };
  expect(finalState).toEqual(expectedState);
});
