import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div className='container py-12'>
        <div>
          <Image
            src='/images/womazing-logo.svg'
            alt='logo womazing'
            width={103}
            height={15}
          />
        </div>
        <nav></nav>
      </div>
    </header>
  );
}
