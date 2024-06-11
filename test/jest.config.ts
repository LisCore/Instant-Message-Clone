module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/backend/tests/**/*.test.{js,ts}'],
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
};