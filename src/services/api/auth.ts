import decode from "jwt-decode";
import isAfter from "date-fns/isAfter";
import axios from "axios";
import client from "./apiClient";

class AuthApi {
  async login(email: string, password: string): Promise<string> {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/login`,
        {
          email: email,
          password: password,
          device: navigator.userAgent,
        }
      );

      return response.data.token;
    } catch (err) {
      console.error("[Auth Api]: ", err);
      return "";
    }
  }

  async profile(): Promise<any> {
    try {
      const response = await client.get("api/profile");

      const user = response.data;

      const userResponse = {
        id: user.id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        permissions: user.permissions,
        email: user.email,
        active: user.active,
      };
    } catch (err) {
      console.error("[Auth Api]: ", err);
      return "";
    }
  }

  getTokenExpirationDate(encodedToken: any): Date {
    if (!encodedToken) {
      return new Date(0); // is expired
    }

    const token: { exp: number } = decode(encodedToken);
    if (!token.exp) {
      return new Date(0); // is expired
    }

    return new Date(token.exp * 1000);
  }

  isExpiredToken(encodedToken: any): boolean {
    const expirationDate = this.getTokenExpirationDate(encodedToken);
    const rightNow = new Date();

    return isAfter(rightNow, expirationDate);
  }
}

export const authApi = new AuthApi();
