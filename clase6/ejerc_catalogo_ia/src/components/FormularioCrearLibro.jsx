import {useForm} from "react-hook-form";

const FormularioCrearLibro = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="titulo">Titulo</label>
                <input type="text" id="titulo" {...register("titulo", {required: true})} />
                {errors.titulo && <p>Este campo es requerido</p>} 
                </div>

                <div>
                <label htmlFor="autor">Autor</label>
                <input type="text" id="autor" {...register("autor", {required: true})} />
                {errors.autor && <p>Este campo es requerido</p>} 
                </div>
                <div>
                <label htmlFor="sinopsis">Sinopsis</label>
                <input type="text" id="sinopsis" {...register("sinopsis", {required: true})} />
                {errors.sinopsis && <p>Este campo es requerido</p>} 
                </div>
                <div>
                <label htmlFor="precio">Precio</label>
                <input type="number" id="precio" {...register("precio", {required: true})} />
                {errors.precio && <p>Este campo es requerido</p>} 
                </div>
                <div>
                <label htmlFor="categoria">Categoria</label>
                <input type="text" id="categoria" {...register("categoria", {required: true})} />
                </div>
                <button>Crear Libro</button>
            </form>
        </>
    ) }

export default FormularioCrearLibro