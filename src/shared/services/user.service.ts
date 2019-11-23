import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    user: User;

    getUser() {
        return this.user;
    }

    setUser(user) {
        this.user = user;
    }
}

interface User {
    firstName: string;
    lastName: string;
    type: string;
}
