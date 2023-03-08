import { useEffect, useState } from 'react';

import { useKeyboard } from '../hooks/useKeyboard';
import { useGameContext } from '../hooks/useGameContext';

import * as images from '../images/images';

export const TextureSelector = () => {
  const [visible, setVisible] = useState(true);
  const [texture, setTexture] = useGameContext(state => [state.texture, state.setTexture]);

  const {
    dirt,
    grass,
    glass,
    wood,
    log
  } = useKeyboard();

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false)
    }, 1000);

    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeout);
    }
  }, [texture]);

  useEffect(() => {
    const options = {
      dirt,
      grass,
      glass,
      wood,
      log
    };

    const selectedTexture = Object
      .entries(options)
      .find(([_, isEnabled]) => isEnabled);

    if (selectedTexture) {
      const [textureName] = selectedTexture;
      setTexture(textureName);
    }
  }, [dirt, grass, glass, wood, log]);

  return (
    <div className={`texture-selector ${visible ? '' : 'hidden'}`}>
      {
        Object
          .entries(images)
          .map(([imgKey, img]) => {
            return (
              <img
                className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
                key={imgKey}
                src={img}
                alt={imgKey}
              />
            );
          })
      }
    </div>
  )
}
