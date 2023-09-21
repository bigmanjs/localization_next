import Link from 'next/link'
import { useTranslation } from '../../i18n'
import { Footer } from '../../components/Footer'

export default async function Page({
  params: { lng },
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng)
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/i18next-app-router`}>{t('to-second-page')}</Link>
      <Footer lng={lng} />
    </>
  )
}
