const sdk = require("node-appwrite");

config = {
  url: "https://cloud.appwrite.io/v1",
  project: "",
  api: "",
  database: "",
  collection: "",
};

let client = new sdk.Client();

client
  .setEndpoint(config.url) // Your API_KEY Endpoint
  .setProject(config.project) // Your project ID
  .setKey(
    config.api
  ) // Your secret API_KEY key
  .setSelfSigned(); // Use only on dev mode with a self-signed SSL cert

let docs = new sdk.Databases(client);
let pro = docs.listDocuments(config.database, config.collection);
pro
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
