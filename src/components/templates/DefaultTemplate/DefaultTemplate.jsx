import Footer from 'src/components/atoms/Footer';
import Header from '../../atoms/Header';
import { Wrapper } from './styled';

const DefaultTempla return (
    <Wrapper>
      <Header />

      {children}

      <Footer />
    </Wrapper>
  )
}

export default DefaultTemplate;
