import Button from './components/ui /Button';

export default function Home() {
  return (
    <div>
      <h1 className='text-titleXl'> Hello Womazing </h1>
      <Button appearance={'primary'}>Hello</Button>
      <Button appearance={'ghost'}>Hello</Button>
    </div>
  );
}
