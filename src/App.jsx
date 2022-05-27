import React, { useState } from 'react'
import PhotosGallery from './Component/Photosgallery'


function App () {

  const photos = [
   'http://placeimg.com/140/160/any',
   'http://placeimg.com/140/160/any',
   'http://placeimg.com/140/160/any',
   'http://placeimg.com/140/160/any',
  ]
return(
  <>
<h1>Galeria de fotos</h1>
    <PhotosGallery 
      photos={photos}
      />
  </>
)
}

export default App