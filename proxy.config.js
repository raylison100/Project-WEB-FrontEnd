const proxy = [
    {
      context: '/api',
      target: 'http://34.90.185.244:8082',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;