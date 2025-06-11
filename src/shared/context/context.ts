import { IAminoAcidValues } from '@features/amino-acid-input-form/model/types';
import { createContext, useContext } from 'react';

interface IAminoAcidContext {
  firstAminoAcid: string;
  secondAminoAcid: string;
  changeAminoAcid: (name: IAminoAcidValues, value: string) => void;
}

const AminoAcidContext = createContext<IAminoAcidContext>({
  firstAminoAcid: '',
  secondAminoAcid: '',
  changeAminoAcid: () => {},
});

export const useAminoAcidContext = () => useContext(AminoAcidContext);

export default AminoAcidContext;
