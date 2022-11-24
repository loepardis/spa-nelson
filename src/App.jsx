import { Suspense } from 'react'
import Home from './pages/home'
import { Layout } from './Layout'
import { Foo, Description, Navbar } from './components'
import { version } from '../package.json'
import { hairCuts, balayage, mechas } from './api/images'

// const sofaImg = 'https://res.cloudinary.com/djc1umong/image/upload/v1628720883/sofa_avjdc2.webp'
// const mouthImg = 'https://res.cloudinary.com/djc1umong/image/upload/v1628793956/fuegoMouth_on5m8e.webp'
// const hatImg = 'https://res.cloudinary.com/djc1umong/image/upload/v1628795461/fuegoHat_hvyabw.webp'
// const eyeImg = 'https://res.cloudinary.com/djc1umong/image/upload/v1628790293/fuegoEyes_heopfx.webp'
// const pineImg = 'https://res.cloudinary.com/djc1umong/image/upload/v1628721569/pine_oadiet.webp'

console.log('V:', version)

function App () {
  return (
    <>
      {/*   <Home /> */}
      <Navbar />
      <Layout>
        <Suspense fallback={<div>loading...</div>}>
          <Description
            ornament='./sofa.webp'
            title='Balayage'
            carouselImages={balayage}
            servicesPrice='250 Bs.'
            servicesTitle='Decoloración Balayage o Mechas tipo Balayage'
            servicesDesc1='Tinte Base'
            servicesDesc2='Hidratación'
            servicesDesc3='Cepillado'
            titleImage='Balayage | CBBA - Bolivia, Por Nelson Torrico.'
            altOrnament='El sofa mas gosu que vas a encontrar en behance'
            p='Coloración  de cabello que aclara ligeramente y luce un aspecto natural como aclarado por el sol, con tonos más claros en las puntas.'
          />

          <Description
            ornament='./eye.webp'
            ornament1='./mouth.webp'
            title='Rayitos o Mechas'
            carouselImages={mechas}
            servicesTitle='Rayitos o Mechas'
            servicesDesc1='Tinte Base'
            servicesDesc2='Hidratación Profunda'
            servicesDesc3='Cepillado'
            servicesPrice='200 Bs.'
            titleImage='Exposición de un T-Rex en el museo de la Universidad de Manchester.'
            altOrnament='Imagen de labios escarlata.'
            p='Dan un aspecto de sofisticación y elegancia en la imagen. La línea es llevar un estilo con el que irradies luz y frescura.'
          />
          <Description
            ornament='./sofa.webp'
            ornament1='./pine.webp'
            ornament2='./mouth.webp'
            ornament3='./hat.webp'
            image='./b1T.webp'
            title='Corte y Tinte'
            carouselImages={hairCuts}
            servicesDesc1='Corte'
            servicesDesc2='Tinte'
            servicesDesc3='Hidratación'
            servicesPrice='120 Bs.'
            titleImage='Exposición de un T-Rex en el museo de la Universidad de Manchester.'
            altImage='Foto de los rayitos mas geniales de Bolivia hechos en cochabamba'
            altOrnament='Sombrero tipo campo con un corazon en el centro.'
            p='Dan un aspecto de sofisticación y elegancia en la imagen. La línea es llevar un estilo con el que irradies luz y frescura.'
          />
        </Suspense>
      </Layout>
      <Foo />
    </>
  )
}

export default App
