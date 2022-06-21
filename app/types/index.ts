import type { StoryVersions } from "../enums";

export type StoryAPIQueryParams = {
	version: StoryVersions
	starts_with?: string
	by_uuids?: string // eg: starts_with=products/MEGASHOP001 || starts_with=en/posts
	by_slugs?: string // eg: by_slugs=authors/john,authors/max || by_slugs=authors/*,articles/*
	sort_by?: string // eg: content.YOUR_FIELD:asc || created_at:desc
	page?: number // for pagination, default is 1
	per_page?: number // for pagination, default is 25 and max is 100
	language?: string
	fallback_lang?: string
}

export type {
	ProductResponseRawData,
	AllProductsResponseRawData,
	IProductStoryContent,
	ProductListingProps
} from "./data/product";

export type {
	Story,
	IStoryContent,
	IBasicStoryFields
} from "./story";

export type { IImageFieldType } from "./field";

export type {
	IPageStoryContent,
	PageResponseRawData
} from "./data/page";

export type {
	IFeatureComponent,
	FeatureComponentProps,
	ITeaserComponent,
	TeaserComponentProps,
	IRefinedLogos,
	LogoComponentProps,
	ILogoComponent,
	GridComponentProps,
	IGridComponent,
	PageComponentProps,
	HeaderComponentProps,
	ICatalogGridComponent,
	ICategoryComponent,
	RefinedCategory,
	CountrySelectorProps
} from "./component";

export type { IBrowserUtilities } from "./storage";

export interface ServerStyleContextData {
	key: string
	ids: Array<string>
	css: string
}

export interface ClientStyleContextData {
	reset: () => void
}

export interface ClientCacheProviderProps {
	children: React.ReactNode;
}

export interface DocumentProps {
	children: React.ReactNode
}
