import Form from '@features/amino-acid-input-form/ui/form';
import { Stack } from '@mui/material';
import Comparator from '@widgets/amino-acid-comparator/ui/comparator';

const MainPage = () => {
  return (
    <Stack alignItems="center">
      <Stack width="100%" direction="column" spacing={4} maxWidth="1280px">
        <Form />
        <Comparator />
      </Stack>
    </Stack>
  );
};

export default MainPage;
