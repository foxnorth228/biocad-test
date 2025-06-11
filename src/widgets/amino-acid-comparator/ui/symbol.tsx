import { Typography, useTheme } from '@mui/material';
import { IAminoAcidSymbols } from '@shared/types/amino-acid';
import { AMINO_SYMBOLS_COLORS } from '@shared/types/amino-colors';
import { useMemo } from 'react';

interface ISymbolProps {
  symbol: IAminoAcidSymbols;
  compareSymbol?: string;
}

const Symbol = ({ symbol, compareSymbol }: ISymbolProps) => {
  const theme = useTheme();

  const bgColor = useMemo(
    () => (compareSymbol && symbol === compareSymbol ? 'white' : AMINO_SYMBOLS_COLORS[symbol]),
    [compareSymbol, symbol]
  );

  return (
    <Typography
      component="span"
      fontFamily="monospace"
      display="inline-block"
      width="1ch"
      fontSize={theme.sizes.comparator.fontSize}
      lineHeight={theme.sizes.comparator.lineHeight}
      textAlign="center"
      variant="body1"
      color="black"
      bgcolor={bgColor}
    >
      {symbol}
    </Typography>
  );
};

export default Symbol;
