/* eslint-disable react/no-unknown-property */
import React, { Fragment } from 'react'

export const AppFonts = () => (
  <Fragment>
    <style global jsx>{`
      /* Outfit ################################################## */
      @font-face {
        font-family: 'Outfit';
        src: url('/fonts/Outfit/Outfit-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Outfit';
        src: url('/fonts/Outfit/Outfit-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }

      /* ApercuPro ################################################## */

      @font-face {
        font-family: 'Apercu Pro';
        src: url('/fonts/Acerpu/ApercuPro-Light.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Apercu Pro';
        src: url('/fonts/Acerpu/ApercuPro-Black.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }

      /* Axiforma ################################################## */
      @font-face {
        font-family: 'Axiforma';
        src: url('/fonts/Axiforma/Axiforma-Light.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Axiforma';
        src: url('/fonts/Axiforma/Axiforma-Black.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }

      /* Gordita ################################################## */
      @font-face {
        font-family: 'Gordita';
        src: url('/fonts/Gordita/Gordita-Regular.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Gordita';
        src: url('/fonts/Gordita/Gordita-Black.otf') format('opentype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }

      /* Gotham ################################################## */
      @font-face {
        font-family: 'Gotham';
        src: url('/fonts/Gotham/Gotham-Light.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Gotham';
        src: url('/fonts/Gotham/Gotham-Black.otf') format('opentype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }

      /* Avenir ################################################## */
      @font-face {
        font-family: 'Avenir';
        src: url('/fonts/Avenir/AvenirNextLTPro-Regular.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Avenir';
        src: url('/fonts/Avenir/AvenirNextLTPro-Bold.otf') format('opentype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        font-weight: 500;
      }

      @font-face {
        font-family: 'Avenir';
        src: url('/fonts/Avenir/AvenirNextLTPro-Italic.otf') format('opentype');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
      }

      /* Hellix ################################################## */
      @font-face {
        font-family: 'Hellix';
        src: url('/fonts/Hellix/Hellix-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Hellix';
        src: url('/fonts/Hellix/Hellix-Medium.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        font-weight: 500;
      }

      /* GDSherpa ################################################## */
      @font-face {
        font-family: 'GDSherpa';
        src: url('/fonts/GDSherpa/GDSherpa-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'GDSherpa';
        src: url('/fonts/GDSherpa/GDSherpa-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        font-weight: 500;
      }

      /* TTNorms ################################################## */
      @font-face {
        font-family: 'TTNorms';
        src: url('/fonts/TTNorms/TTNorms-Regular.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'TTNorms';
        src: url('/fonts/TTNorms/TTNorms-Medium.otf') format('opentype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        font-weight: 500;
      }

      /* UberMove ################################################## */
      @font-face {
        font-family: 'UberMove';
        src: url('/fonts/UberMove/UberMove-Medium.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'UberMove';
        src: url('/fonts/UberMove/UberMove-Bold.otf') format('opentype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        font-weight: 500;
      }

      /* LexendDeca ################################################## */
      @font-face {
        font-family: 'LexendDeca';
        src: url('/fonts/Lexend-Deca/LexendDeca-Light.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'LexendDeca';
        src: url('/fonts/Lexend-Deca/LexendDeca-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        font-weight: 500;
      }

      /* Lora ################################################## */
      @font-face {
        font-family: 'Lora';
        src: url('/fonts/Lora/Lora-Regular.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Lora';
        src: url('/fonts/Lora/Lora-Medium.otf') format('opentype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        font-weight: 500;
      }

      /* Inter ################################################## */
      @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter/Inter-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter/Inter-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        font-weight: 500;
      }

      /* Calibre ################################################## */
      @font-face {
        font-family: 'Calibre';
        src: url('/fonts/Calibre/Calibre-Regular.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Calibre';
        src: url('/fonts/Calibre/Calibre-Semibold.otf') format('opentype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        font-weight: 500;
      }

      /* Garnett ################################################## */
      @font-face {
        font-family: 'Garnett';
        src: url('/fonts/Garnett/Garnett-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Garnett';
        src: url('/fonts/Garnett/Garnett-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        font-weight: 500;
      }

      /* Alpino ################################################## */
      @font-face {
        font-family: 'Alpino';
        src: url('/fonts/Alpino/Alpino-Regular.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Alpino';
        src: url('/fonts/Alpino/Alpino-Medium.otf') format('opentype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        font-weight: 500;
      }
    `}</style>
  </Fragment>
)

export default AppFonts
