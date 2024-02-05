import TabsCategories from '@/app/components/TabsCategories/TabsCategories';

export default function Page() {
  return (
    <div className='container'>
      <h1 className='py-10 text-titleXl'>Shop</h1>
      <div className='my-10'>
        <TabsCategories />
      </div>
    </div>
  );
}
