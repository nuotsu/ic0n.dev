const dev = process.env.NODE_ENV === 'development'

export const BASE_URL = dev ? 'http://localhost:3000' : 'https://svg.vercel.app'
