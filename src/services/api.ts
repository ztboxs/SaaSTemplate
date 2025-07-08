import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// API 基础配置
const apiConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// 创建 API 实例
const apiClient: AxiosInstance = axios.create(apiConfig);

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 获取并添加认证令牌
    const token = localStorage.getItem('auth_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // 处理认证错误
      if (error.response.status === 401) {
        // 清除认证状态并重定向到登录页面
        localStorage.removeItem('auth_token');
        // 可以添加重定向逻辑，例如：
        // window.location.href = '/login';
      }
      
      // 统一处理错误响应
      return Promise.reject({
        status: error.response.status,
        data: error.response.data,
        message: error.response.data?.message || '请求失败',
      });
    }
    
    return Promise.reject({
      message: error.message || '网络错误',
    });
  }
);

// API 响应类型
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
}

// API 服务类
class ApiService {
  // 通用 GET 请求
  static async get<T = any>(url: string, params?: any): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await apiClient.get(url, { params });
    return {
      data: response.data,
      status: response.status,
    };
  }

  // 通用 POST 请求
  static async post<T = any>(url: string, data?: any): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await apiClient.post(url, data);
    return {
      data: response.data,
      status: response.status,
    };
  }

  // 通用 PUT 请求
  static async put<T = any>(url: string, data?: any): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await apiClient.put(url, data);
    return {
      data: response.data,
      status: response.status,
    };
  }

  // 通用 DELETE 请求
  static async delete<T = any>(url: string): Promise<ApiResponse<T>> {
    const response: AxiosResponse = await apiClient.delete(url);
    return {
      data: response.data,
      status: response.status,
    };
  }
}

export default ApiService; 