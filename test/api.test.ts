import fetch from "node-fetch";

describe("API tests", () => {
  describe("STEP 1", () => {
    it("should return the latest ETH/USD price", async () => {
      const response = await fetch("http://localhost:3000/api/fx/ohlc/ETHUSD");
      const json = await response.json();

      expect(json.pair).toBe("ETH/USD");
      expect(json.vwap).toBe(2219.31827);
    });
  });

  describe("STEP 2", () => {
    it("should return the latest ETH/GBP price", async () => {
      const response = await fetch("http://localhost:3000/api/fx/ohlc/ETHGBP");
      const json = await response.json();

      expect(json.pair).toBe("ETH/GBP");
      expect(json.vwap).toBe(1602.12);
    });
  });

  describe("STEP 3", () => {
    it("should return ETH/USD price history", async () => {
      const response = await fetch(
        "http://localhost:3000/api/fx/ohlc/ETHUSD/history",
      );
      const json = await response.json();

      expect(json).toEqual([
        ["ETH/USD", "2021-06-15", 2615.22, 2508.89],
        ["ETH/USD", "2021-06-18", 2339.91, 2135],
        ["ETH/USD", "2021-06-19", 2277.06, 2162.02],
        ["ETH/USD", "2021-06-20", 2275.83, 2044.32],
        ["ETH/USD", "2021-06-21", 2258.88, 1865.01],
        ["ETH/USD", "2021-06-22", 1998.35, 1858.53],
        ["ETH/USD", "2021-06-28", 2145, 1978.85],
        ["ETH/USD", "2021-06-29", 2236.41, 2076.29],
      ]);
    });

    it("should return ETH/GBP price history", async () => {
      const response = await fetch(
        "http://localhost:3000/api/fx/ohlc/ETHGBP/history",
      );
      const json = await response.json();

      expect(json).toEqual([
        ["ETH/GBP", "2021-06-15", 1854.99, 1785.58],
        ["ETH/GBP", "2021-06-18", 1687.02, 1550.42],
        ["ETH/GBP", "2021-06-19", 1650, 1574.02],
        ["ETH/GBP", "2021-06-20", 1650.9, 1486.95],
        ["ETH/GBP", "2021-06-21", 1638.93, 1343.43],
        ["ETH/GBP", "2021-06-22", 1434.58, 1339.44],
        ["ETH/GBP", "2021-06-28", 1543, 1426.07],
        ["ETH/GBP", "2021-06-29", 1615.28, 1498.91],
      ]);
    });
  });
});
