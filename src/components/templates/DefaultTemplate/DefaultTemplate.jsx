import { React, useState, useEffect } from 'react';
import Button from 'src/components/atoms/Button';
import Footer from 'src/components/atoms/Footer';
import Header from '../../atoms/Header';
import { ButtonWrapper, Wrapper } from './styled';

const DefaultTemplate = ( {children} ) => { 
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const checkScrollPosition = () => {
    setIsButtonVisible(window.scrollY >= 200);
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);

    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  return (
    <>
      <Header />

      <Wrapper>{children}</Wrapper>

      {isButtonVisible && (
        <ButtonWrapper> <Button variant="info" onClick={scrollToTop} lable="^"/> </ButtonWrapper>
      )}

      <Footer/>
    </>
  )
}

export default DefaultTemplate;
