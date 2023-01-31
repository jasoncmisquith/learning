import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signin() {
        return {msg: 'I have signedin'}
    }

    signup() {
        return {msg: 'I have signedup'}
    }
}
