declare namespace Common {
    export interface Location {
        city: string;
        coordinates: number[];
        country: string;
    }
    export interface Plan {
        _id: string;
        planType: string;
    }

    export interface ApiResponse<T={}> {
        statusCode: number;
        message?: string;
        data: T;
    }
 
    export interface List<T> {
        data:T[],
        total:number
    }
}