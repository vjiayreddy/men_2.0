const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const getEnvConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      APOLLO_API: "https://api.men2o.com/graphql",
    };
  }
  return {
    APOLLO_API: "https://api.men2o.com/graphql",
  };
};

module.exports = (phase) => {
  const envConfig = getEnvConfig(phase);
  return {
    env: envConfig,
    images: {
      domains: [
        "men2-public-bucket.s3.amazonaws.com",
        "mpf-public-data.s3.ap-south-1.amazonaws.com",
      ],
    },
    async headers() {
      return [
        {
          // matching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    }
  };
};
