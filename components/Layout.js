import Head from 'next/head'
import Header from '@/components/Header'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link ref="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  keywords: 'develpment, coding, programming',
  description: 'The best info and news in development',
}
