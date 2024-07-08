import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface IUnitDTO {
    name: string;
}

export interface IUnit {
    id: number;
    name: string;
    level: number;
    show_for_my_level: boolean;
}

@Injectable()
export class StagesService {
    public baseURL: string = "/api";

    constructor(private httpCliente: HttpClient) {}

    public getUnits(): Observable<IUnit[]> {
        return this.httpCliente.get<IUnit[]>("/api/my_unit/");
    }
}
