import theme from '@/styles/theme/themeOption';
import { Button } from '@mui/material';
import styled from 'styled-components';

const S = {
  Text: styled.p`
    color: ${theme.palette.secondary.main};
    font-size: 20px;
  `,
};

const Test = () => {
  return (
    <div>
      <S.Text>Miau</S.Text>
      <Button variant="contained" color="secondary">
        Contained
      </Button>
    </div>
  );
};

export default Test;
