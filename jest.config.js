module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.+(js)", "**/?(*.)+(spec|test).+(ts|js|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
// };
