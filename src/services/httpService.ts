import apiClient from "./apiClient";
import { tryCache, setCache } from "./cacheService";

class HttpService {
    baseEndpoint: string;

    constructor(baseEndpoint: string) {
        this.baseEndpoint = baseEndpoint;
    }

    get<T>(endpoint: Array<string | number>, queryParams: any = {}) {
        const controller = new AbortController();
        const fullEndpoint = this.baseEndpoint + "/" + endpoint.join("/");
        const cacheName =
            fullEndpoint + "?" + this.serializeQueryParams(queryParams);
        const cachedData = tryCache(cacheName);
        if (cachedData)
            return {
                request: Promise.resolve({ data: cachedData }),
                cancel: () => controller.abort(),
            };
        else {
            const request = apiClient.get<T[]>(fullEndpoint, {
                params: queryParams,
            });
            request.then((response) => {
                setCache(cacheName, response.data);
            });
            return { request, cancel: () => controller.abort() };
        }
    }

    serializeQueryParams(params: object) {
        return Object.entries(params)
            .map(
                ([key, value]) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
            )
            .join("&");
    }
}

const creates = (endpoint: string) => new HttpService(endpoint);

export default creates;
