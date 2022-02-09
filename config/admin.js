module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9885e920ee1604e064e049fc2b3be113'),
  },
});
