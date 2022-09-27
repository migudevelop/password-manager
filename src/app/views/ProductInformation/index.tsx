import { memo, FC } from 'react'
import {
  Layout,
  MainSection,
  ImagesSection,
  TextArticle
} from '@components/index'

const ProductInformation: FC = () => {
  return (
    <Layout>
      <MainSection title="Crea tu Password Manager">
        <ImagesSection />
        <TextArticle
          title="Cómo funciona"
          contentText="En primer lugar debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien."
        />
        <TextArticle
          title="Qué datos puedes guardar"
          contentText="Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en lugar seguro"
        />
      </MainSection>
    </Layout>
  )
}

export default memo(ProductInformation)
