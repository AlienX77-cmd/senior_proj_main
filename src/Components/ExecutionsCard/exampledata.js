const exampleData = [
  {
    ticker: "JPM",
    side: "Long",
    order_volume: "200,000",
    no_order: "66",
    avg: "84.14",
    vwap: "83.53",
    diff: "0.73",
    csv_format: [
      ["Time", "Volume", "Price (THB)", "Order type"],
      ["10:06", "100", "83.0", "MO"],
      // ... more rows
    ],
    result: [
      { time: "10:06", volume: "100", price: "83.0", otype: "MO" },
      { time: "10:09", volume: "100", price: "83.0", otype: "MO" },
      { time: "10:13", volume: "100", price: "83.0", otype: "MO" },
      { time: "10:16", volume: "100", price: "83.0", otype: "LO" },
    ],
  },
  {
    ticker: "GD",
    side: "Short",
    order_volume: "200,000",
    no_order: "87",
    avg: "84.14",
    vwap: "83.52",
    diff: "-0.01",
    csv_format: [
      ["Time", "Volume", "Price (THB)", "Order type"],
      ["14:36", "19,000", "84.5", "MO"],
      // ... more rows
    ],
    result: [
      { time: "14:36", volume: "19,000", price: "84.5", otype: "MO" },
      { time: "14:37", volume: "100", price: "84.5", otype: "MO" },
      { time: "14:45", volume: "100", price: "83.0", otype: "MO" },
      { time: "14:48", volume: "100", price: "83.0", otype: "LO" },
    ],
  },
  {
    ticker: "MCD",
    side: "Long",
    order_volume: "200,000",
    no_order: "66",
    avg: "84.14",
    vwap: "83.53",
    diff: "0.73",
    csv_format: [
      ["Time", "Volume", "Price (THB)", "Order type"],
      ["10:06", "100", "83.0", "MO"],
      // ... more rows
    ],
    result: [
      { time: "10:06", volume: "100", price: "83.0", otype: "MO" },
      { time: "10:09", volume: "100", price: "83.0", otype: "MO" },
      { time: "10:13", volume: "100", price: "83.0", otype: "MO" },
      { time: "10:16", volume: "100", price: "83.0", otype: "LO" },
    ],
  },
  {
    ticker: "MSFT",
    side: "Long",
    order_volume: "200,000",
    no_order: "66",
    avg: "84.14",
    vwap: "83.53",
    diff: "0.73",
    csv_format: [
      ["Time", "Volume", "Price (THB)", "Order type"],
      ["10:06", "100", "83.0", "MO"],
      // ... more rows
    ],
    result: [
      { time: "10:06", volume: "100", price: "83.0", otype: "MO" },
      { time: "10:09", volume: "100", price: "83.0", otype: "MO" },
      { time: "10:13", volume: "100", price: "83.0", otype: "MO" },
      { time: "10:16", volume: "100", price: "83.0", otype: "LO" },
    ],
  },
  // ... more cards
];

export default exampleData;
