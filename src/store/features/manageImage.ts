import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface ManageImageProps {
  src: string | null;
  nome: string | null;
  posicao: string | null;
}

const initialState = {
    src: null,
  nome: null,
  posicao: null,
} as ManageImageProps

const ManageImage = createSlice({
  name: 'manage_image',
  initialState,
  reducers: {
    setSelectedImage: (state, action: PayloadAction<string>) => {
      state.src = action.payload;
    },
    setNome: (state, action: PayloadAction<string>) => {
      state.nome = action.payload;
    },
    setPosicao: (state, action: PayloadAction<string>) => {
      state.posicao = action.payload;
    },
  },
});

export const { setSelectedImage, setNome, setPosicao } = ManageImage.actions;

export const selectImg = (state: RootState) => state.manageImage.src;
export const selectNome = (state: RootState) => state.manageImage.nome;
export const selectPosicao = (state: RootState) => state.manageImage.posicao;

export default ManageImage.reducer;
