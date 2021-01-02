export interface Employee {
    id: number;
    firstname: string;
    lastname: string;
    email?: string;
}

export const EmployeeData: Employee[] = [
    { id: 1, firstname: 'John', lastname: 'Doe', email: 'john.dow@gmail.com' },
    { id: 2, firstname: 'Rehan', lastname: 'Muller', email: 'rehan.muller@hotmail.com' },
    { id: 3, firstname: 'Admi', lastname: 'Sent', email: 'admi.sent@gmail.com' },
    { id: 5, firstname: 'Setap', lastname: 'Fritz', email: 'setap.123@microsoft.com' },
    { id: 6, firstname: 'Einste', lastname: 'Rossi', email: 'einste.rossi@gmail.com'  },
    { id: 7, firstname: 'Rehan', lastname: 'Muller', email: 'rehan.muller@hotmail.com' },
    { id: 8, firstname: 'Admi', lastname: 'Sent', email: 'admi.sent@gmail.com' }
];
