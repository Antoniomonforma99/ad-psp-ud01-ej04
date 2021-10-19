export class AuthLoginRequest {
    email: string;
    password: string;

    constructor() {
        this.email = '',
        this.password = ''
    }
}

export class AuthRegisterRequest {
    username: string;
    email: string;
    password: string;
    code: string;

    constructor() {
        this.username = '';
        this.email = '';
        this.password = '';
        this.code = 'UDEMYANDROID';
    }
}