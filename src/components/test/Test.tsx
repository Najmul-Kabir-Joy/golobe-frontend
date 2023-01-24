import { Button } from '@mui/material';
import styled from 'styled-components';

const S = {
  Text: styled.p`
    color: green;
  `,
};

const Test = () => {
  return (
    <div>
      <S.Text>Miau</S.Text>
      <Button variant="contained" color="primary">
        Contained
      </Button>
    </div>
  );
};

export default Test;
