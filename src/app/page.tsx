export default function Home() {
  return (
    <>
      <div className='relative container-md mx-auto mt-24'>
        <header className='text-center'>
          <h1 className='max-w-xl mx-auto text-6xl text-white'>
            What do you want to spell?
          </h1>
        </header>
        <div className='container-md w-9/12 flex items-center justify-center bg-white my-20 mx-auto px-8 py-10 rounded-lg'>
          <form className='flex flex-auto items-center'>
            <input
              type='text'
              id='username'
              name='username'
              className='w-full flex-1 text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mr-2'
              placeholder='Enter your word...'
            />

            <button
              type='submit'
              className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
            >
              Show me!
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

