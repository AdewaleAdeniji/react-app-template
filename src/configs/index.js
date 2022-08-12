const dev = {
    API_URL: 'staging_api_url',
};

const prod = {
    API_URL: 'api_url',
};

const config = process.env.REACT_APP_STAGE === 'production'
    ? prod
    : dev;

export default {
    ...config,
};