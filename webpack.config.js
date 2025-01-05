module.exports = {
    module: {
      rules: [
        {
          test: /\.(mp4|webm|ogg|avi|mkv)$/,
          use: 'file-loader',
        },
      ],
    },
  };
  