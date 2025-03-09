import { baseUrl } from "./constants";
import Router from "next/router"; // Next.js router for redirection

const handleError = async (response: Response) => {
  if (response.status === 401) {
    Router.push("/login"); // Redirect on unauthorized access
    throw new Error("Unauthorized - Redirecting to login");
  }
  if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  return response.json();
};

const getData = async (path: string, token?: string) => {
  try {
    const headers = new Headers();
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    const response = await fetch(`${baseUrl}/${path}`, { headers });
    return handleError(response);
  } catch (error) {
    console.error("getData Error:", error);
    return null;
  }
};

const createData = async <T>(path: string, contentType: string, data?: T, token?: string) => {
  try {
    const headers = new Headers();
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }
    headers.append("Content-Type", contentType);

    const response = await fetch(`${baseUrl}/${path}`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    return handleError(response);
  } catch (error) {
    console.error("createData Error:", error);
    return null;
  }
};

const deleteData = async (path: string, token?: string) => {
  try {
    const headers = new Headers();
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    const response = await fetch(`${baseUrl}/${path}`, {
      method: "DELETE",
      headers,
    });

    return handleError(response);
  } catch (error) {
    console.error("deleteData Error:", error);
    return null;
  }
};

const updateData = async <T>(path: string, contentType: string, data?: T, token?: string) => {
  try {
    const headers = new Headers();
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }
    headers.append("Content-Type", contentType);

    const response = await fetch(`${baseUrl}/${path}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });

    return handleError(response);
  } catch (error) {
    console.error("updateData Error:", error);
    return null;
  }
};

export { getData, createData, deleteData, updateData };
