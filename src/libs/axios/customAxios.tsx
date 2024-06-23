import axios, { AxiosRequestConfig } from "axios";
import CONFIG from "src/config/config.json";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "src/constants/token/token.constants";
import token from "src/libs/token/token";
import requestHandler from "src/libs/axios/requestHandler";
import responseHandler from "src/libs/axios/responseHandler";

const createAxiosInstance = (config: AxiosRequestConfig) => {
    const Access_Token = token.getToken(ACCESS_TOKEN_KEY);
    const baseConfig: AxiosRequestConfig = {
        headers: {
            Authorization: `Bearer ${Access_Token}`,
        },
    };

    return axios.create({
        ...baseConfig,
        ...config
    });
}


export const Memor2Axios = createAxiosInstance({
    baseURL: CONFIG.server,
    headers: {
        [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}` // 요청 토큰을 헤더에 추가한다.
    },
});


export const babyaAxiosSetAccessToken = (newToken: string) => {
    Memor2Axios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
};


Memor2Axios.interceptors.request.use(requestHandler as any, (response) => response);


Memor2Axios.interceptors.response.use((response) => response, responseHandler);