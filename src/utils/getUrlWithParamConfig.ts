import config from '../config';

function getUrlWithParamConfig(endpointConfig: string, query: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].url,
    query: {
      ...query,
    },
  };
  return url;
}

export default getUrlWithParamConfig;
