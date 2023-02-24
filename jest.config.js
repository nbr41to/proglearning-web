// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリをセット。基本は"./"で良い。
  dir: './',
});

const jestConfig = {
  moduleNameMapper: {
    // path alias
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/src/(.*)$': '<rootDir>/src/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  // testEnvironment: 'jest-environment-jsdom', // unused
};

// createJestConfigを定義することによって、本ファイルで定義された設定がNext.jsの設定に反映されます
module.exports = createJestConfig(jestConfig);

// 参考: https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler
