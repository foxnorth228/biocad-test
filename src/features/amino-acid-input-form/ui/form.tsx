import { IAminoAcidValues } from '@features/amino-acid-input-form/model/types';
import Textarea from '@features/amino-acid-input-form/ui/textarea';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { useAminoAcidContext } from '@shared/context/context';
import { FieldValues, useForm } from 'react-hook-form';

const Form = () => {
  const aminoAcidContext = useAminoAcidContext();
  const { control, handleSubmit, setError, clearErrors } = useForm({
    defaultValues: {
      'first amino acid': aminoAcidContext.firstAminoAcid,
      'second amino acid': aminoAcidContext.secondAminoAcid,
    } as { [k in IAminoAcidValues]: string },
  });

  const onSubmit = (e: FieldValues) => {
    clearErrors();
    if (e['first amino acid'].length !== e['second amino acid'].length) {
      setError('second amino acid', {
        type: 'custom',
        message: 'Value length of the both fields should be equal',
      });
      return;
    }

    aminoAcidContext.changeAminoAcid('first amino acid', e['first amino acid']);
    aminoAcidContext.changeAminoAcid('second amino acid', e['second amino acid']);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Typography variant="h5" textAlign="center">
          Введите последовательности аминокислот
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Textarea name="first amino acid" control={control} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Textarea name="second amino acid" control={control} />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit">
          Подсчитать
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
