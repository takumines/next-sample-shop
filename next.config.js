/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      styledComponents: true,
    }
    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // 本番環境ではReact Testing Libraryのdata-testidを削除する
        reactRemovePropTypes: { properties: ['^data-testids$'] },
      }
    }

    return compilerConfig
  })(),
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}

module.exports = nextConfig
