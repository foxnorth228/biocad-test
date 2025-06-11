import { Stack, Typography, useTheme } from '@mui/material';
import { useAminoAcidContext } from '@shared/context/context';
import SymbolContainer from '@widgets/amino-acid-comparator/ui/symbol-container';

const Comparator = () => {
  const aminoAcidContext = useAminoAcidContext();
  const theme = useTheme();

  if (!aminoAcidContext.firstAminoAcid || !aminoAcidContext.secondAminoAcid) {
    return null;
  }

  return (
    <Stack>
      <Typography variant="h5" textAlign="center">
        Сравнение
      </Typography>
      <Stack position="relative">
        <SymbolContainer string={aminoAcidContext.firstAminoAcid} />
        <SymbolContainer
          position="absolute"
          sx={{ transform: `translateY(${theme.sizes.comparator.lineHeight})` }}
          string={aminoAcidContext.secondAminoAcid}
          comparingString={aminoAcidContext.firstAminoAcid}
        />
      </Stack>
    </Stack>
  );
};

export default Comparator;
