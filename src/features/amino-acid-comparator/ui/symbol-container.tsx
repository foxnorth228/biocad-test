import Symbol from '@features/amino-acid-comparator/ui/symbol';
import { Box, BoxProps, useTheme } from '@mui/material';
import { IAminoAcidSymbols } from '@shared/types/amino-acid';

interface ISymbolContainerProps extends BoxProps {
  string: string;
  comparingString?: string;
}

const SymbolContainer = ({ string, comparingString, ...props }: ISymbolContainerProps) => {
  const theme = useTheme();

  return (
    <Box display="flex" rowGap={theme.sizes.comparator.lineHeight} flexWrap="wrap" {...props}>
      {string.split('').map((symbol, i) => (
        <Symbol key={i} symbol={symbol as IAminoAcidSymbols} compareSymbol={comparingString?.[i]} />
      ))}
    </Box>
  );
};

export default SymbolContainer;
