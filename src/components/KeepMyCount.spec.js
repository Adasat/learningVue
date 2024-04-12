import {sumCounter} from "./KeepMyCount.vue"; // Adjust the import path as necessary
import {describe, expect, test} from "@jest/globals";

describe("increment counter", () => {
  test("increments the current counter from one to one ", () => {
    const result = sumCounter(0);
    expect(result).toBe(1)
  })
})
