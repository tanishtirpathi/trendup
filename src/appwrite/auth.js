import { Client, Account, ID } from "appwrite";
import conf from "./config";

export class Authservice {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const useracc = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (useracc) {
        // call another method
        return this.loginUser({ email, password });
      } else {
        return useracc;
      }
    } catch (error) {
      throw error;
    }
  }
  async loginUser({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
}

const authservice = new Authservice();

export default authservice;
