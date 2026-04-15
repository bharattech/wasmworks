// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
};

// Disable worker threads for middleware compatibility
process.env.NEXT_PRIVATE_WORKER_THREADS = 'false';

module.exports = nextConfig;
