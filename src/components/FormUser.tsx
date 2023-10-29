import '../App.css'
import { StatusEnum } from '../enum/statusEnum';
import { useState, ChangeEvent, FormEvent } from 'react'
import { DataUser } from '../interfaces/dataFetch.interface';
import { useFetch } from '../Fetch/fetch';
import { methodEnum } from '../enum/methodEnum';
const FormUser = () => {
    const [user, setUser] = useState<DataUser>({
        nombres: "",
        apellidos: "",
        edad: 0,
        email: "",
        telefono: 0,
        status: StatusEnum.ACT
    })

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUser({
            ...user,
            [e.target.name]: Number(e.target.value) || e.target.value
        })
    }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const result = await useFetch('user', methodEnum.POST, user);
            console.log(result);
        } catch (error) {

        }
        window.location.reload()
    }
    return (
        <div className='container'>

            <div className="header">
                <h1>
                    Registrar usuarios
                </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Nombres:</label>
                    <input type="text" name="nombres" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Apellidos:</label>
                    <input type="text" name="apellidos" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Edad:</label>
                    <input type="number" name="edad" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Telefono:</label>
                    <input type="number" name="telefono" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Estado:</label>
                    <select name="status" id="" onChange={handleInput}>
                        <option value={StatusEnum.ACT} selected>{StatusEnum.ACT}</option>
                        <option value={StatusEnum.INAC}>{StatusEnum.INAC}</option>
                    </select>
                </div>
                <div className="submit-button">
                    <button>Registrar</button>
                </div>
            </form>
        </div>
    )
}

export default FormUser;