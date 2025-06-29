import { IAminoAcidValues, IAminoAcidValuesObj } from '@features/amino-acid-input-form/model/types';
import { TextField } from '@mui/material';
import localization from '@shared/localization/localization';
import { AMINO_ACID_REGEXP } from '@shared/types/amino-acid';
import { Control, Controller } from 'react-hook-form';

interface ITextareaChildren {
  name: IAminoAcidValues;
  control: Control<IAminoAcidValuesObj, unknown, IAminoAcidValuesObj>;
}

const parseValue = (oldValue: string) => {
  return oldValue.toUpperCase().replace(AMINO_ACID_REGEXP, '');
};

const Textarea = ({ name, control }: ITextareaChildren) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          multiline
          required
          fullWidth
          rows={5}
          {...field}
          label={localization.formLabels[field.name]}
          placeholder="Введите аминокислотную цепочку"
          onChange={(e) => {
            const newValue = parseValue(e.target.value);
            field.onChange(newValue);
          }}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default Textarea;
