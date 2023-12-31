// role.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/role.model';

@Injectable({
    providedIn: 'root'
})
export class RoleService {
    private apiUrl = 'assets/json/roles.json';

    constructor(private http: HttpClient) { }

    getRoles(): Observable<Role[]> {
        return this.http.get<Role[]>(this.apiUrl);
    }
}
