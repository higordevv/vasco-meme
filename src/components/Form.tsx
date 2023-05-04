import React, { useState } from "react";
import { GiSoccerBall } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../store/hooks";
import {
  setSelectedImage,
  setNome,
  setPosicao,
} from "../store/features/manageImage";
import { getImageInfo } from "../utils/getImageInfo";
import SelectPosition from "./Select";

enum Positions {
  "Goleiro" = "Goleiro",
  "Laterais direito e esquerdo" = "Laterais direito e esquerdo",
  "Zagueiro" = "Zagueiro",
  "Volante" = "Volante",
  "Meia" = "Meia",
  "Atacante" = "Atacante",
}

type FormData = {
  image: FileList;
  name: string;
  position: Positions;
};

function Form() {
  const [imageName, setImageName] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const { name, url } = await getImageInfo(file);
      setImageName(name);
      return dispatch(setSelectedImage(url));
    }
  };

  const handlePositionSelect = (position: Positions) => {
    dispatch(setPosicao(position));
  };

  const onSubmit = (data: FormData) => {
    dispatch(setNome(data.name));
  };

  return (
    <div className="max-w-full max-h-full mt- md:mt-0 mx-auto h-full bg-white sm:rounded-r-lg">
      <div className="mt-5 md:mt-0 md:col-span-2 ">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
          <div className="shadow overflow-hidden w-full sm:rounded-r-lg flex flex-col">
            <div className="px-4 py-5  sm:p-6 ">
          <h1 className="mx-auto text-center font-semibold text-2xl">Novo Jogador</h1>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className={`${
                  errors.name ? "border-red-300" : ""
                } focus:ring-vasco focus:border-vasco-blue block w-full shadow-sm sm:text-sm border-gray-300 rounded-md mb-4`}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">
                  Por favor, preencha o nome completo.
                </p>
              )}
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Foto
              </label>
              <div className="flex items-center mb-4">
                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                  <GiSoccerBall className="h-12 w-12 text-gray-300" />
                </span>
                <span className="ml-5">
                  <input
                    type="file"
                    accept="image/*"
                    id="image"
                    {...register("image", { required: true })}
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <label htmlFor="image" className="cursor-pointer font-medium">
                    {imageName ?? "Selecione uma imagem"}
                  </label>
                  {errors.image && (
                    <p className="mt-2 text-sm text-red-600">
                      Por favor, selecione uma imagem.
                    </p>
                  )}
                </span>
              </div>
              <SelectPosition onSelect={handlePositionSelect} />
            </div>
            <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-vasco-blue hover:bg-vasco-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vasco"
              >
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
