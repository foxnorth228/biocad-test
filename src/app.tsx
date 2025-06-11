import { IAminoAcidValues } from '@features/amino-acid-input-form/model/types';
import MainPage from '@pages/main/ui/page';
import AminoAcidContext from '@shared/context/context';
import { useState } from 'react';

const App = () => {
  const [firstAminoAcid, setFirstAminoAcid] = useState('');
  const [secondAminoAcid, setSecondAminoAcid] = useState('');

  const changeAminoAcid = (name: IAminoAcidValues, value: string) => {
    if (name === 'first amino acid') {
      setFirstAminoAcid(value);
    } else if (name === 'second amino acid') {
      setSecondAminoAcid(value);
    }
  };

  return (
    <AminoAcidContext value={{ firstAminoAcid, secondAminoAcid, changeAminoAcid }}>
      <MainPage />
    </AminoAcidContext>
  );
};

export default App;
