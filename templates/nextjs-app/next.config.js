const { withLogtail } = require('@logtail/next')
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = withLogtail(nextConfig)
