import { IAminoAcidSymbols } from '@shared/types/amino-acid';
import theme from '@shared/ui/theme';

export const AMINO_COLORS_NAME_SYMBOLS = {
  cysteine: ['C'],
  hydrophobic: ['A', 'I', 'L', 'M', 'F', 'W', 'Y', 'V', 'P'],
  glycine: ['G'],
  negativelyCharged: ['D', 'E'],
  positivelyCharged: ['K', 'R'],
  polarUncharged: ['S', 'T', 'H', 'Q', 'N'],
} as const;

export type AMINO_COLORS_NAMES = keyof typeof AMINO_COLORS_NAME_SYMBOLS;

export const AMINO_SYMBOLS_COLORS: Record<IAminoAcidSymbols, string> = {} as Record<
  IAminoAcidSymbols,
  string
>;

for (const [colorName, symbols] of Object.entries(AMINO_COLORS_NAME_SYMBOLS)) {
  for (const symbol of symbols) {
    AMINO_SYMBOLS_COLORS[symbol] = theme.colors.aminoAcid[colorName as AMINO_COLORS_NAMES];
  }
}
