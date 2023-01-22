import axios from "axios";
const publicUrl = "https://parseapi.back4app.com";
const applicationIdHeader = "X-Parse-Application-Id";
const applicationId = "mJqu2PabcrwWlV529oobL5aITjjUUCJjJyROVGmb";
const restAPIKeyHeader = "X-Parse-REST-API-Key";
const restAPIKey = "hsGjDoh8YgE0GqexWhsc0J18viEuOPJr8EeT7MqK";
export default axios.create({
  baseURL: publicUrl,
  headers: {
    [applicationIdHeader]: applicationId,
    [restAPIKeyHeader]: restAPIKey,
    accept: 'application/json',
  },
});