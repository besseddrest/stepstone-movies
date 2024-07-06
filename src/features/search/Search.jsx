import { useForm } from "react-hook-form";

export default function Search() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    console.log(watch)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" {...register("search-field")} placeholder="Search by movie title, cast, genre" />
                <button type="button" {...register("search-button")}>Search</button>
            </div>
        </form>
    );

    function onSubmit(data) {
        console.log(data);
    }
}
