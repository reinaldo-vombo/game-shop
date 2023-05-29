import { AiOutlineShopping } from 'react-icons/ai';
import { FaHeart, FaUser } from 'react-icons/fa';
import { RiComputerFill, RiHeadphoneFill } from 'react-icons/ri';
import { MdGames, MdMouse } from 'react-icons/md';
import { GiGamepad } from 'react-icons/gi';
import { BsKeyboardFill, BsFillBagCheckFill } from 'react-icons/bs';

export const navlinks = [
  {
    name: 'Profil',
    imgUrl: <FaUser />,
    link: '/',
  },
  {
    name: 'Favorits',
    imgUrl: <FaHeart />,
    link: '/create-campaign',
  },
  {
    name: 'cart',
    imgUrl: <BsFillBagCheckFill />,
    link: '/',
    disabled: true,
  },
];
export const categorylinks = [
  {
    name: 'Computer mouse',
    imgUrl: <MdMouse />,
    link: '/',
  },
  {
    name: 'Game Headphones',
    imgUrl: <RiHeadphoneFill />,
    link: '/create-campaign',
  },
  {
    name: 'Games',
    imgUrl: <MdGames />,
    link: '/',
  },
  {
    name: 'Gamepads',
    imgUrl: <GiGamepad />,
    link: '/',
  },
  {
    name: 'Keyboard',
    imgUrl: <BsKeyboardFill />,
    link: '/',
  },
  {
    name: 'Computers',
    imgUrl: <RiComputerFill />,
    link: '/',
  },
];
