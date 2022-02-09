module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'af5252cd2a6db28ae2e3321186aed495'),
  },
});
