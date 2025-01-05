/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          config.module.rules.push({
            test: /\.(mp4|webm|ogg|wav|audio)$/,
            use: 'file-loader',
          });
        }
    
        return config;
      },
};

export default nextConfig;
