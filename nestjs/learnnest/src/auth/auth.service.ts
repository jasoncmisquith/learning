import { Injectable, ForbiddenException } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client"
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';


import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService) {}

    signin() {
        return {msg: 'I have signedin'}
    }

    async signup(dto: AuthDto) {
        const hash = await argon.hash(dto.password);
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                }
            });
            delete user.hash;
            return user;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials Taken',)
                }
            }
            throw error;
        }


    }
}
