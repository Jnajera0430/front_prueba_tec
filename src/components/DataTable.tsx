import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react'
import { Data, DataUser } from '../interfaces/dataFetch.interface';
import { useFetch } from '../Fetch/fetch';
import { methodEnum } from '../enum/methodEnum';
const ExpandedComponent = ({ data }: any) => <pre>{JSON.stringify(data, null, 2)}</pre>;
const columns = [
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

const DataTableComponent = () => {
    const [dataFetch, setDataFetch] = useState<DataUser[]>([]);
    const [filteredData, setFilteredData] = useState(dataFetch);
    const [filterText, setFilterText] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const result: Data<DataUser>[] = await useFetch('user', methodEnum.GET);
            const data = result.map((item: Data<DataUser>) => (item.dataValues))
            setDataFetch(data);
        }
        fetchData();
    }, [])
    useEffect(() => {
        const lowercasedFilter = filterText.toLowerCase();
        const filteredItems = dataFetch.filter((item) => {
            const lowercaseFilter = lowercasedFilter.toLowerCase();

            if (item.nombres.toLowerCase().includes(lowercaseFilter) || item.apellidos.toLowerCase().includes(lowercaseFilter)) {
                return true;
            }

            if (item.telefono === Number.parseInt(lowercaseFilter, 10)) {
                return true;
            }

            if (item.email.toLowerCase().includes(lowercaseFilter)) {
                return true;
            }

            if (item.status.toLowerCase().includes(lowercaseFilter)) {
                return true;
            }
            return false;
        });
        setFilteredData(filteredItems);
    }, [dataFetch, filterText])
    return (<>
        <input
            type="text"
            placeholder="Filtrar"
            onChange={(e) => setFilterText(e.target.value)}
        />
        <DataTable columns={columns} data={filteredData.length == 0 ? dataFetch : filteredData} selectableRows expandableRows
            expandableRowsComponent={ExpandedComponent} />
    </>
    );
}

export default DataTableComponent;