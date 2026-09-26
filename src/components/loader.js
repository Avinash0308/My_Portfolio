import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .logo-wrapper {
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
    transition: opacity 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '.logo-wrapper',
        delay: 500,
        duration: 800,
        top: { value: 28.125, easing: 'easeOutSine' },
        left: {
          value: () => {
            if (window.innerWidth <= 768) return 24.125;
            if (window.innerWidth <= 1080) return 39.125;
            return 49.125;
          },
          easing: 'easeInSine',
        },
        width: { value: 43.75, easing: 'easeInOutQuart' },
        height: { value: 43.75, easing: 'easeInOutQuart' },
        filter: [
          { value: 'drop-shadow(0px 0px 0px rgba(100, 255, 218, 0))', duration: 0 },
          { value: 'drop-shadow(15px 15px 15px rgba(100, 255, 218, 0.6))', duration: 400, easing: 'easeOutQuad' },
          { value: 'drop-shadow(0px 0px 0px rgba(100, 255, 218, 0))', duration: 400, easing: 'easeInQuad' }
        ],
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      }, '-=200');
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
