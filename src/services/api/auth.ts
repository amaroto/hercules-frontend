import decode from "jwt-decode";
import isAfter from "date-fns/isAfter";
import axios from "axios";

class AuthApi {
  async login(token: string): Promise<string> {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/login`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return response.data.token;
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

  me(accessToken: string): Promise<User> {
    return new Promise((resolve, reject) => {
      try {
        if (this.isExpiredToken(accessToken)) {
          reject(new Error("Token expired"));
          return;
        }

        const user: User = decode(accessToken);

        resolve({
          id: user.id,
          username: user.username,
          firstname: user.firstname,
          lastname: user.lastname,
          permissions: user.permissions,
          email: user.email,
          active: user.active,
        });
      } catch (err) {
        console.error("[Auth Api]: ", err);
        reject(new Error("Internal server error"));
      }
    });
  }
}

export const authApi = new AuthApi();
