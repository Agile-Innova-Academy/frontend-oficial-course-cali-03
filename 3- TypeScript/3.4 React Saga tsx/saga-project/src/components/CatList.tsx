import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCats } from "../redux/slices/catSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const CatList = () => {
  const dispatch = useDispatch();
  const { cats, loading, error } = useSelector(
    (state: RootState) => state.cats
  );

  useEffect(() => {
    dispatch(fetchCats());

  }, [dispatch]);

  if(loading) return  <div>Cargando datos....</div>
  if(error)return  <div>Error al cargar los datos</div>

  return (
    <div className="flex flex-wrap p-4 justify-center">
        { cats.map((cat)=>(
            <div className="bg-white rounded-md shadow-md md:w-1/3 m-2">
                <img 
                src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`} 
                alt={cat.name} 
                className="w-full h-40 object-cover"
                />
                <div className="p-4">
                    <h2 className="fond-bold">{cat.name}</h2>
                    <p className="text-gray-500 text-sm">{cat.origin}</p>
                    <p className="text-gray-500 text-sm">{cat.description}</p>
                </div>

            </div>
        ))

        }

    </div>
  );
};

export default CatList;
