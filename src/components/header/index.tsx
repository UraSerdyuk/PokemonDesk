import React from 'react';
import cn from 'classnames';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMENU {
  id: number;
  value: string;
  link: string;
}

const MENU: IMENU[] = [
  {
    id: 1,
    value: 'Home',
    link: '#',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '#',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

const Header = () => {
  return (
    <div className={cn(s.root)}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ id, value, link }) => (
            <a key={id} href={link} className={s.menuLink}>
              {value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;