import { DataUser } from "../../interfaces/dataFetch.interface";

export const columns = [
    {
        name: 'Nombres',
        selector: (row: DataUser) => row.nombres,
        sortable: true,
    },
    {
        name: 'Apellidos',
        selector: (row: DataUser) => row.apellidos,
        sortable: true,
    },
    {
        name: 'Telefono',
        selector: (row: DataUser) => row.telefono,
        sortable: true,
    },
    {
        name: 'Correo',
        selector: (row: DataUser) => row.email,
        sortable: true,
    },
    {
        name: 'Estado',
        selector: (row: DataUser) => row.status,
        sortable: true,
    },
];