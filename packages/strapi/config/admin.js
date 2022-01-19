module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cfa59c670996bf66fca4b2f78ef77d4a'),
  },
});
