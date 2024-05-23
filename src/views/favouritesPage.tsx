import { useMemo } from "react";
import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export default function FavouritesPage() {
  const { favourite } = useAppStore()
  const hasFavourites = useMemo(() => favourite.length > 0, [favourite])

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>

      {hasFavourites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
          {
            favourite.map(fav => (
              <DrinkCard key={fav.idDrink} drink={fav} />
            ))
          }
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">Los favoritos se mostrarán aquí</p>
      )
      }
    </>
  );
};