export interface IAminoAcids {
  firstAminoAcid: 'first amino acid';
  secondAminoAcid: 'second amino acid';
}

export type IAminoAcidKeys = keyof IAminoAcids;
export type IAminoAcidValues = IAminoAcids[IAminoAcidKeys];

export type IAminoAcidValuesObj = {
  [k in IAminoAcidValues]: string;
};
