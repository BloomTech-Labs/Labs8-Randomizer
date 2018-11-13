const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_c0CBG0uB11JmuYO3bHS28wnR'
  : 'pk_test_W5zaThxw6j82sZI0LwET9aQK';

export default STRIPE_PUBLISHABLE;