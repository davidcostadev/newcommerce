import React from 'react'
import classNames from 'classnames'
import styles from '../assets/scss/App.scss'

const Thumbs = ({ images, urlMeta }) => {
  if (!images || !images.length) return null

  return images.map(image => (
    <picture key={image.PS_ID_ARQUIVO} className={styles.galleryThumb}>
      <img src={image.PS_PATH_IMAGEM_400} alt={urlMeta.PS_TITLE} />
    </picture>
  ))
}

const Gallery = ({ image, images, urlMeta }) => {
  return (
    <div className={styles.gallery}>
      <picture className={classNames([styles.galleryFeature, 'galleryImage'])}>
        <img src={image} alt={urlMeta.PS_TITLE} />
      </picture>
      <div className={styles.galleryThumbs}>
        <Thumbs images={images} urlMeta={urlMeta} />
      </div>
    </div>
  )
}

export default Gallery
