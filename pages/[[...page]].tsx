import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import {
    Content,
    fetchEntries,
    fetchOneEntry,
    isEditing,
    isPreviewing,
} from '@builder.io/sdk-react'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import MuiSelect from '../components/mui/MuiSelect'
import MuiOption from '../components/mui/MuiOption'
import DynamicIcon from '../components/DynamicIcon'
import MuiTypography from '../components/mui/MuiTypography'
import MuiInput from '../components/mui/MuiInput'
import MuiSlider from '../components/mui/MuiSlider'
import MuiTable from '../components/mui/MuiTable'

// this is where components are imported
const CUSTOM_COMPONENTS = [
    DynamicIcon,
    MuiTypography,
    MuiOption,
    MuiSelect,
    MuiInput,
    MuiSlider,
    MuiTable,
]

export async function getStaticProps({ params }: GetStaticPropsContext<{ page: string[] }>) {
    const page = await fetchOneEntry({
        model: 'page',
        apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
        options: { noTargeting: true },
        userAttributes: { urlPath: '/' + (params?.page?.join('/') || '') },
    })

    return {
        props: {
            page: page || null,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 5 seconds
        revalidate: 5,
    }
}

export async function getStaticPaths() {
    const { results: pages } = await fetchEntries({
        model: 'page',
        apiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY!,
        options: {
            noTargeting: true,
            // We only need the URL field
            fields: 'data.url',
            // omit: 'data.blocks',
        },
    })

    return {
        paths: pages.map((page) => String(page.data?.url)),
        // .filter((url) => url !== '/'),
        fallback: true, // or fallback: true
    }
}

export default function Page({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    const isLive = !isEditing && !isPreviewing

    if (!page && isLive) {
        return (
            <>
                <Head>
                    <title>Error</title>
                    <meta name="robots" content="noindex, noffolow" />
                </Head>
                <DefaultErrorPage statusCode={404} />
            </>
        )
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{page?.data?.title}</title>
            </Head>
            <Content
                customComponents={CUSTOM_COMPONENTS}
                apiKey={process.env.NEXT_PUBLIC_BUILDER_API_KEY!}
                model="page"
                content={page}
            />
        </>
    )
}
