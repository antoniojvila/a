import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface IRegisterStudentDTO {
    username: string;
    birthday: string | null;
    email: string;
    password: string;
}

@Injectable()
export class RegisterService {
    public baseURL: string = "/api";

    constructor(private httpCliente: HttpClient) {}

    public registerStudent(body: IRegisterStudentDTO): Observable<{ success: boolean }> {
        return this.httpCliente.post<{ success: boolean }>("/api/register/", body);
    }
}
