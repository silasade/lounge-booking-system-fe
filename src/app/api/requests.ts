import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  RawAxiosRequestHeaders,
} from "axios";
import { baseUrl } from "./constants";
import { SuccessResponse, ErrorResponse } from "./types";

// Utility to serialize search params
const isSerializable = (
  obj: Record<string, unknown>
): obj is Record<string, string | number | boolean> => {
  return Object.values(obj).every(
    (value) =>
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
  );
};

// Function to convert HeadersInit to RawAxiosRequestHeaders
const convertHeaders = (
  headers: HeadersInit | undefined
): RawAxiosRequestHeaders => {
  const convertedHeaders: RawAxiosRequestHeaders = {};

  if (headers) {
    if (headers instanceof Headers) {
      headers.forEach((value, key) => {
        convertedHeaders[key] = value;
      });
    } else if (Array.isArray(headers)) {
      headers.forEach(([key, value]) => {
        convertedHeaders[key] = value;
      });
    } else {
      Object.assign(convertedHeaders, headers);
    }
  }

  return convertedHeaders;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type SWRFetcher<T> = {
  token?: string;
  url: string;
  requestOption?: RequestInit;
  searchParams?: Record<string, unknown>;
};

const swrFetcher = async <T>({
  token,
  url,
  requestOption,
  searchParams,
}: SWRFetcher<T>): Promise<SuccessResponse<T>> => {
  try {
    // Construct URL with Search Params
    const queryString =
      searchParams && isSerializable(searchParams)
        ? `?${isSerializable(searchParams)}`
        : "";
    const requestUrl = `${baseUrl}/${url}${queryString}`;

    // Convert HeadersInit to RawAxiosRequestHeaders
    const headers = {
      ...convertHeaders(requestOption?.headers),
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    // Map RequestInit to AxiosRequestConfig
    const axiosConfig: AxiosRequestConfig = {
      headers,
      method: requestOption?.method || "GET",
      data: requestOption?.body, // Only relevant for POST/PUT/PATCH
    };

    const response: AxiosResponse<SuccessResponse<T>> = await axios(
      requestUrl,
      axiosConfig
    );

    return response.data; // Return SuccessResponse<T>
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Construct ErrorResponse from Axios error
      const err: ErrorResponse = {
        statusCode: error.response.status,
        message: error.response.data?.message || "An error occurred",
      };
      console.error("Axios error:", err);
      throw err;
    } else {
      const unexpectedError: ErrorResponse = {
        statusCode: 500,
        message: "An unexpected error occurred",
      };
      console.error("Unexpected error:", unexpectedError);
      throw unexpectedError;
    }
  }
};

export { swrFetcher };
