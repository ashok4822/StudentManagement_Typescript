//Request model - defines what data client must send
export interface StudentRequest {
  name: string;
  age: number;
  place: string;
}

//Response model - defines what data API returns
export interface StudentResponse {
  _id: string;
  name: string;
  age: number;
  place: string;
}

//Generic API Response Wrapper
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
}
