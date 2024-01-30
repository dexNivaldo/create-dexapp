import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['app/components/**/*{js,jsx,ts,tsx}']
}

export default createJestConfig(config)
