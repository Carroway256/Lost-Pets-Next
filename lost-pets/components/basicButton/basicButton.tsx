import { Roboto } from 'next/font/google';

const inter = Roboto({ subsets: ['latin'], weight: '500' });

type basicButtonType = {
  name: string;
  onClick?: Event;
};

export default function BasicButton({ name, onClick }: basicButtonType) {
  return (
    <>
      <button className={`${inter.className} rounded-lg bg-black px-6 py-3 text-white`}>
        {name}
      </button>
    </>
  );
}
