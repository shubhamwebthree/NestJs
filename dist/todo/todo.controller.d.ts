import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto, userEmail: string): Promise<any>;
    findAll(userEmail: string): Promise<{
        id: number;
        task: string;
        description: string | null;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        task: string;
        description: string | null;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<{
        id: number;
        task: string;
        description: string | null;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        task: string;
        description: string | null;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }>;
}
