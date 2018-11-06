interface IEmployee{
    id: number;
    name:string;
}

export function getInterfaceName(){
    return 'IEmployee';
}

export { IEmployee as IEmployeeInterface };
