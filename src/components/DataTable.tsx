import { Table, Pagination, Form } from 'react-bootstrap';
import { UseContext } from '../api/UseContext';
import { useEffect, useState, ChangeEvent } from 'react'
import { methodEnum } from '../enum/methodEnum';
import { OrderEnum } from '../enum/OrderPage.enum';
import { takeOptions } from '../const/dataTable/takeOptions';
import '../App.css'
function DataTable() {
    const [orderData, setOrderData] = useState<OrderEnum | string>(OrderEnum.ASC);
    const [page, setPage] = useState<number>(1);
    const [take, setTake] = useState<number>(10);
    const { dataUser, onQuery } = UseContext();
    const items = dataUser.data.map((item, i) => {
        return (
            <tr key={i}>
                <td>{item.dataValues.id}</td>
                <td>{item.dataValues.nombres}</td>
                <td>{item.dataValues.apellidos}</td>
                <td>{item.dataValues.edad}</td>
                <td>{item.dataValues.telefono}</td>
                <td>{item.dataValues.email}</td>
                <td>{item.dataValues.status}</td>
            </tr>
        )
    });
    const onChangeDataTable = async (pageNum: number) => {
        setPage(pageNum);
    }
    const onChangeTake = (e: ChangeEvent<HTMLSelectElement>) => {
        setPage(1)
        setTake(parseInt(e.target.value, 10))
    }
    const onChangeOrder = (e: ChangeEvent<HTMLSelectElement>) => {
        setPage(1)
        setOrderData(e.target.value)
    }
    useEffect(() => {
        async function fetchData() {
            await onQuery(methodEnum.GET, { url: 'user', order: orderData, page: dataUser.meta.page, take: dataUser.meta.take })
        }
        fetchData();
    }, [])
    useEffect(() => {
        async function fetchData() {
            await onQuery(methodEnum.GET, {
                order: orderData,
                page: page,
                take: take,
                url: 'user'
            });
        }
        fetchData();
    }, [take, page, orderData])
    return (
        <div>
            <div><h1>Lista de usuarios</h1></div>
            <Pagination className='containerpageoption'>
                <div className='containerFormPage'>
                    <label htmlFor="">Take:</label>
                    <Form.Select value={take} onChange={onChangeTake}>
                        {
                            takeOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))
                        }
                    </Form.Select>
                </div>
                <div className='containerFormPage'>
                    <label htmlFor="">Order:</label>
                    <Form.Select value={orderData} onChange={onChangeOrder}>
                        <option value={OrderEnum.ASC}>{OrderEnum.ASC}</option>
                        <option value={OrderEnum.DESC}>{OrderEnum.DESC}</option>
                    </Form.Select>
                </div>
                <div className='containerFormPage'>
                    <Pagination.Prev
                        onClick={() => onChangeDataTable(dataUser.meta.page - 1)}
                        disabled={!dataUser.meta.hasPreviousPage}
                    />
                    <Pagination.Item active>{
                        dataUser.meta.page
                    }</Pagination.Item>
                    <Pagination.Next
                        onClick={() => onChangeDataTable(dataUser.meta.page + 1)}
                        disabled={!dataUser.meta.hasNextPage}
                    />
                </div>
            </Pagination>
            <Table striped bordered hover className="table-container">
                <thead>
                    <tr>
                        <th className='theadTable'>ID</th>
                        <th className='theadTable'>Nombres</th>
                        <th className='theadTable'>Apellidos</th>
                        <th className='theadTable'>Edad</th>
                        <th className='theadTable'>Teléfono</th>
                        <th className='theadTable'>Email</th>
                        <th className='theadTable'>Status</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </Table>
        </div>
    );
}

export default DataTable;