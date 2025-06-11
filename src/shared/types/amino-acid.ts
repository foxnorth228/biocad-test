export const AMINO_ACIDS_SYMBOLS = [
  'A',
  'R',
  'N',
  'D',
  'C',
  'E',
  'Q',
  'G',
  'H',
  'I',
  'L',
  'K',
  'M',
  'F',
  'P',
  'S',
  'T',
  'W',
  'Y',
  'V',
] as const;

export type IAminoAcidSymbols = (typeof AMINO_ACIDS_SYMBOLS)[number];

export const AMINO_ACID_REGEXP = new RegExp(`[^${AMINO_ACIDS_SYMBOLS.join('')}-]`, 'g');
