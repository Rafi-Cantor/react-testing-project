import Counter from "./Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe(Counter, () => {

    it("Counter displays correct initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });

    it("Count should increment by 1 on increment button click", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const incrementBttn = getByRole("button", {name: "Increment"});
        expect(Number(getByTestId("count").textContent)).toEqual(0);
        fireEvent.click(incrementBttn);
        expect(Number(getByTestId("count").textContent)).toEqual(1);
    });

    it("Count should decrement by 1 on decrement button click", () => {
        const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
        const decrementBttn = getByRole("button", {name: "Decrement"});
        expect(Number(getByTestId("count").textContent)).toEqual(0);
        fireEvent.click(decrementBttn);
        expect(Number(getByTestId("count").textContent)).toEqual(-1);
    });

    it("Count should reset to 0 restart button click", () => {
        const { getByTestId, getByRole } = render(<Counter />);
        const incrementBttn = getByRole("button", {name: "Increment"});
        const resetBttn = getByRole("button", {name: "Restart"});
        fireEvent.click(incrementBttn);
        fireEvent.click(incrementBttn);
        expect(Number(getByTestId("count").textContent)).toEqual(2);
        fireEvent.click(resetBttn);
        expect(Number(getByTestId("count").textContent)).toEqual(0);
    });

    it("Count should invert between positive and negative values", () => {
        const { getByTestId, getByRole } = render(<Counter />);
        const incrementBttn = getByRole("button", {name: "Increment"});
        const switchBttn = getByRole("button", {name: "Switch Signs"});
        fireEvent.click(incrementBttn);
        expect(Number(getByTestId("count").textContent)).toEqual(1);
        fireEvent.click(switchBttn);
        expect(Number(getByTestId("count").textContent)).toEqual(-1);
    });

})