import { Strategy } from "passport-jwt";
import { DatabaseService } from "src/database/database.service";
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    validate(payload: {
        email: string;
    }): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
    }>;
}
export {};
