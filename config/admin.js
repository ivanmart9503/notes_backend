module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3e1d6fa851e1e5aa0b1a0c270192f3d4'),
  },
});
