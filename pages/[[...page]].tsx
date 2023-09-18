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
import MuiAlert from '../components/mui/MuiAlert'
import MuiButton from '../components/mui/MuiButton'
import MuiCheckbox from '../components/mui/MuiCheckbox'
import MuiButtonGroup from '../components/mui/MuiButtonGroup'
import MuiLink from '../components/mui/MuiLink'
import MuiAspectRatio from '../components/mui/MuiAspectRatio'
import MuiAutocomplete from '../components/mui/MuiAutocomplete'
import MuiAutocompleteListbox from '../components/mui/MuiAutocompleteListbox'
import MuiAutocompleteOption from '../components/mui/MuiAutocompleteOption'
import MuiAvatar from '../components/mui/MuiAvatar'
import MuiAvatarGroup from '../components/mui/MuiAvatarGroup'
import MuiBadge from '../components/mui/MuiBadge'
import MuiBreadcrumbs from '../components/mui/MuiBreadcrumbs'
import MuiCard from '../components/mui/MuiCard'
import MuiCardActions from '../components/mui/MuiCardActions'
import MuiCardContent from '../components/mui/MuiCardContent'
import MuiCardCover from '../components/mui/MuiCardCover'
import MuiCardOverflow from '../components/mui/MuiCardOverflow'
import MuiChip from '../components/mui/MuiChip'
import MuiChipDelete from '../components/mui/MuiChipDelete'
import MuiCircularProgress from '../components/mui/MuiCircularProgress'
import MuiDivider from '../components/mui/MuiDivider'
import MuiFormControl from '../components/mui/MuiFormControl'
import MuiFormHelperText from '../components/mui/MuiFormHelperText'
import MuiFormLabel from '../components/mui/MuiFormLabel'
import MuiGrid from '../components/mui/MuiGrid'
import MuiIconButton from '../components/mui/MuiIconButton'
import MuiLinearProgress from '../components/mui/MuiLinearProgress'
import MuiList from '../components/mui/MuiList'
import MuiListDivider from '../components/mui/MuiListDivider'
import MuiListItem from '../components/mui/MuiListItem'
import MuiListItemButton from '../components/mui/MuiListItemButton'
import MuiListItemContent from '../components/mui/MuiListItemContent'
import MuiListSubheader from '../components/mui/MuiListSubheader'
import MuiListItemDecorator from '../components/mui/MuiListItemDecorator'
import MuiMenu from '../components/mui/MuiMenu'
import MuiMenuButton from '../components/mui/MuiMenuButton'
import MuiMenuItem from '../components/mui/MuiMenuItem'
import MuiModal from '../components/mui/MuiModal'
import MuiModalClose from '../components/mui/MuiModalClose'
import MuiModalDialog from '../components/mui/MuiModalDialog'
import MuiRadio from '../components/mui/MuiRadio'
import MuiRadioGroup from '../components/mui/MuiRadioGroup'
import MuiSheet from '../components/mui/MuiSheet'
import MuiSkeleton from '../components/mui/MuiSkeleton'
import MuiSvgIcon from '../components/mui/MuiSvgIcon'
import MuiSwitch from '../components/mui/MuiSwitch'
import MuiTabList from '../components/mui/MuiTabList'
import MuiTabPanel from '../components/mui/MuiTabPanel'
import MuiTab from '../components/mui/MuiTab'
import MuiTextarea from '../components/mui/MuiTextarea'
import MuiToggleButtonGroup from '../components/mui/MuiToggleButtonGroup'
import MuiTooltip from '../components/mui/MuiTooltip'

// this is where components are imported
const CUSTOM_COMPONENTS = [
    DynamicIcon,
    MuiTypography,
    MuiOption,
    MuiSelect,
    MuiInput,
    MuiSlider,
    MuiTable,
	MuiAlert,
    MuiButton,
    MuiCheckbox,
    MuiButtonGroup,
    MuiLink,
    MuiAspectRatio,
    MuiAutocomplete,
    MuiAutocompleteListbox,
    MuiAutocompleteOption,
    MuiAvatar,
    MuiAvatarGroup,
    MuiBadge,
    MuiBreadcrumbs,
    MuiCard,
    MuiCardActions,
    MuiCardContent,
    MuiCardCover,
    MuiCardOverflow,
    MuiChip,
    MuiChipDelete,
    MuiCircularProgress,
    MuiDivider,
    MuiFormControl,
    MuiFormHelperText,
    MuiFormLabel,
    MuiGrid,
    MuiIconButton,
    MuiLinearProgress,
    MuiList,
    MuiListDivider,
    MuiListItem,
    MuiListItemButton,
    MuiListItemContent,
    MuiListItemDecorator,
    MuiListSubheader,
    MuiMenu,
    MuiMenuButton,
    MuiMenuItem,
    MuiModal,
    MuiModalClose,
    MuiModalDialog,
    MuiRadio,
    MuiRadioGroup,
    MuiSheet,
    MuiSkeleton,
    MuiSvgIcon,
    MuiSwitch,
    MuiTab,
    MuiTabList,
    MuiTabPanel,
    MuiTextarea,
    MuiToggleButtonGroup,
    MuiTooltip,
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