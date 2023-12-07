export class Product{
    id: number | null | undefined;
    code: string | null | undefined;
    brand: string | null | undefined;
    description: string | null | undefined;
}

export class Person{
    dni: string | null | undefined;
    name: string | null | undefined;
    lastname: string | null | undefined;
    birthday: string | null | undefined;
    
}

export class Employee extends Person{
    id: number | null | undefined;
    job: string | null | undefined;
    store: string | null | undefined;
}

export class Job{
    name: string | null | undefined;
    salary: number | null | undefined;
}

export class User{
    email: string | null | undefined;
    password: string | null | undefined;
}

