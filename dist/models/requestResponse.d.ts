export interface StudentRequest {
    name: string;
    age: number;
    place: string;
}
export interface StudentResponse {
    _id: string;
    name: string;
    age: number;
    place: string;
}
export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    error?: any;
}
//# sourceMappingURL=requestResponse.d.ts.map