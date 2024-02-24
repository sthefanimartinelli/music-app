import Link from 'next/link';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

export const Header = () => {
  return (
    <header>
      <nav>
        <Link href='/search'>
          <div>
            <BiSearchAlt />
            Busca
          </div>
        </Link>

        <Link href='/favorites'>
          <div>
            <AiOutlineHeart />
            Favoritas
          </div>
        </Link>

        <Link href='/profile'>
          <div>
            <CgProfile />
            Perfil
          </div>
        </Link>
      </nav>
    </header>
  );
}