import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { HeaderIcon } from './HeaderIcon';
import './Header.css';

export function Header() {
  const headerText = "Ashley's Very Professional Website";

  const wiggleWords = ['Very', 'Professional'];
  const bounceDuration =
    (headerText.indexOf('Website') - headerText.indexOf('Very')) * 0.1;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#e0f7fa',
        color: '#00695c',
        position: 'relative',
      }}
    >
      <Toolbar sx={{ height: 80 }}>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontFamily: `'Montserrat', sans-serif` }}
        >
          {headerText.split(' ').map((word, wordIndex) => {
            const isWiggleWord = wiggleWords.includes(word);
            return (
              <span
                key={wordIndex}
                className={isWiggleWord ? 'wiggle' : ''}
                style={{
                  display: 'inline-block',
                  marginRight: '0.25rem',
                  animationDelay: isWiggleWord ? `${bounceDuration}s` : '0s',
                }}
              >
                {word.split('').map((char, letterIndex) => (
                  <span
                    key={letterIndex}
                    className="bounce-in"
                    style={{
                      animationDelay: `${(wordIndex * 2 + letterIndex) * 0.1}s`,
                      display: 'inline-block',
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            );
          })}
        </Typography>
        <HeaderIcon />
      </Toolbar>
    </AppBar>
  );
}
