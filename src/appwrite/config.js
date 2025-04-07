import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // your Appwrite endpoint
  .setProject("67f3ad79001bce922f11"); // your project ID

export const account = new Account(client);
