// /** @type {import('ts-jest').JestConfigWithTsJest} */
// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
// };

import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
  "^.+\\.tsx?$" : "ts-jest",
  "^.+\\.js$": "babel-jest",
  },
 // setupFilesAfterEnv: ['./jest.setup.ts']
};
export default config;