import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const GalleryThumb = styled.picture`
  flex: 1;
  max-width: 100px;
`

const Thumbs = ({ images, urlMeta }) => {
  if (!images || !images.length) return null

  return images.map(image => (
    <GalleryThumb key={image.PS_ID_ARQUIVO}>
      <img src={image.PS_PATH_IMAGEM_400} alt={urlMeta.PS_TITLE} />
    </GalleryThumb>
  ))
}

const GalleryBox = styled.div`
  background-color: white;
  margin-bottom: 20px;
  img {
    width: 100%;
    max-width: 400px;
  }

`
const GalleryFeature = styled.picture`
  display: block;
  text-align: center;
`
const GalleryThumbs = styled.div`
 display: flex;
`

const Gallery = ({ image, images, urlMeta }) => (
  <GalleryBox>
    <GalleryFeature>
      <img src={image} alt={urlMeta.PS_TITLE} />
    </GalleryFeature>
    <GalleryThumbs>
      <Thumbs images={images} urlMeta={urlMeta} />
    </GalleryThumbs>
  </GalleryBox>
)


Gallery.propTypes = {
  image: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  urlMeta: PropTypes.object.isRequired,
}

export default Gallery
