import React from 'react'

function Home() {
  return (
    <div className='hero min-h-screen'>
      <div class='hero-overlay bg-opacity-60'></div>
      <div class='hero-content text-center text-neutral-content'>
        <div class='max-w-md'>
          <h1 class='mb-5 text-5xl font-bold'>Hello there</h1>
          <p class='mb-5'>
            This Application was created to showcase detailed stats about the
            Overwatch League. I got inspired by Overbuff to create a similar
            styled Application just for Pro-Player Statistics. Select a subpage
            in the header to start exploring the site.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
