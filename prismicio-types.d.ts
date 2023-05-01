// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Company Page documents */
interface CompanyPageDocumentData {
  /**
   * Slice Zone field in *Company Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: company_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<CompanyPageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Company Page → Slice Zone*
 *
 */
type CompanyPageDocumentDataSlicesSlice =
  | CompanySlice
  | VirkepediaSlice
  | PlaceholderSlice
  | SearchSlice;
/**
 * Company Page document from Prismic
 *
 * - **API ID**: `company_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CompanyPageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<CompanyPageDocumentData>,
    "company_page",
    Lang
  >;
/** Content for Landing Page documents */
interface LandingPageDocumentData {
  /**
   * Slice Zone field in *Landing Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<LandingPageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Landing Page → Slice Zone*
 *
 */
type LandingPageDocumentDataSlicesSlice =
  | PlaceholderSlice
  | VirkepediaSlice
  | CompanySlice
  | SearchSlice;
/**
 * Landing Page document from Prismic
 *
 * - **API ID**: `landing_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LandingPageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<LandingPageDocumentData>,
    "landing_page",
    Lang
  >;
export type AllDocumentTypes = CompanyPageDocument | LandingPageDocument;
/**
 * Primary content in Company → Primary
 *
 */
interface CompanySliceDefaultPrimary {
  /**
   * uid field in *Company → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company.primary.uid
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  uid: prismicT.KeyTextField;
  /**
   * cvrNumber field in *Company → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company.primary.cvrNumber
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  cvrNumber: prismicT.KeyTextField;
  /**
   * companyName field in *Company → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company.primary.companyName
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  companyName: prismicT.KeyTextField;
  /**
   * address field in *Company → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company.primary.address
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  address: prismicT.KeyTextField;
  /**
   * postNoCity field in *Company → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company.primary.postNoCity
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  postNoCity: prismicT.KeyTextField;
  /**
   * companyType field in *Company → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company.primary.companyType
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  companyType: prismicT.KeyTextField;
  /**
   * status field in *Company → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: company.primary.status
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  status: prismicT.KeyTextField;
}
/**
 * Default variation for Company Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CompanySliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<CompanySliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Company*
 *
 */
type CompanySliceVariation = CompanySliceDefault;
/**
 * Company Shared Slice
 *
 * - **API ID**: `company`
 * - **Description**: `Company`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CompanySlice = prismicT.SharedSlice<
  "company",
  CompanySliceVariation
>;
/**
 * Item in Placeholder → Items
 *
 */
export interface PlaceholderSliceDefaultItem {
  /**
   * numberOfColumns field in *Placeholder → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: placeholder.items[].numberOfColumns
   * - **Documentation**: https://prismic.io/docs/core-concepts/number
   *
   */
  numberOfColumns: prismicT.NumberField;
  /**
   * titleColumnOne field in *Placeholder → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: placeholder.items[].titleColumnOne
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  titleColumnOne: prismicT.KeyTextField;
  /**
   * contentColumnOne field in *Placeholder → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: placeholder.items[].contentColumnOne
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  contentColumnOne: prismicT.KeyTextField;
  /**
   * titleColumnTwo field in *Placeholder → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: placeholder.items[].titleColumnTwo
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  titleColumnTwo: prismicT.KeyTextField;
  /**
   * contentColumnTwo field in *Placeholder → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: placeholder.items[].contentColumnTwo
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  contentColumnTwo: prismicT.KeyTextField;
  /**
   * titleColumnThree field in *Placeholder → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: placeholder.items[].titleColumnThree
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  titleColumnThree: prismicT.KeyTextField;
  /**
   * contentColumnThree field in *Placeholder → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: placeholder.items[].contentColumnThree
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  contentColumnThree: prismicT.KeyTextField;
}
/**
 * Default variation for Placeholder Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PlaceholderSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<PlaceholderSliceDefaultItem>
>;
/**
 * Slice variation for *Placeholder*
 *
 */
type PlaceholderSliceVariation = PlaceholderSliceDefault;
/**
 * Placeholder Shared Slice
 *
 * - **API ID**: `placeholder`
 * - **Description**: `Placeholder`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PlaceholderSlice = prismicT.SharedSlice<
  "placeholder",
  PlaceholderSliceVariation
>;
/**
 * Item in Search → Items
 *
 */
export interface SearchSliceDefaultItem {
  /**
   * uid field in *Search → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: search.items[].uid
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  uid: prismicT.KeyTextField;
  /**
   * cvrNumber field in *Search → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: search.items[].cvrNumber
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  cvrNumber: prismicT.KeyTextField;
  /**
   * companyName field in *Search → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: search.items[].companyName
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  companyName: prismicT.KeyTextField;
  /**
   * address field in *Search → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: search.items[].address
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  address: prismicT.KeyTextField;
  /**
   * postNoCity field in *Search → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: search.items[].postNoCity
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  postNoCity: prismicT.KeyTextField;
  /**
   * companyType field in *Search → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: search.items[].companyType
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  companyType: prismicT.KeyTextField;
  /**
   * status field in *Search → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: search.items[].status
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  status: prismicT.KeyTextField;
}
/**
 * Default variation for Search Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SearchSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<SearchSliceDefaultItem>
>;
/**
 * Slice variation for *Search*
 *
 */
type SearchSliceVariation = SearchSliceDefault;
/**
 * Search Shared Slice
 *
 * - **API ID**: `search`
 * - **Description**: `Search`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SearchSlice = prismicT.SharedSlice<"search", SearchSliceVariation>;
/**
 * Primary content in Virkepedia → Primary
 *
 */
interface VirkepediaSliceDefaultPrimary {
  /**
   * Title field in *Virkepedia → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: virkepedia.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismicT.TitleField;
  /**
   * Description field in *Virkepedia → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A nice description of your feature
   * - **API ID Path**: virkepedia.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
}
/**
 * Item in Virkepedia → Items
 *
 */
export interface VirkepediaSliceDefaultItem {
  /**
   * title field in *Virkepedia → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: virkepedia.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * content field in *Virkepedia → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: virkepedia.items[].content
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  content: prismicT.KeyTextField;
}
/**
 * Default variation for Virkepedia Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Virkepedia`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type VirkepediaSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<VirkepediaSliceDefaultPrimary>,
  Simplify<VirkepediaSliceDefaultItem>
>;
/**
 * Slice variation for *Virkepedia*
 *
 */
type VirkepediaSliceVariation = VirkepediaSliceDefault;
/**
 * Virkepedia Shared Slice
 *
 * - **API ID**: `virkepedia`
 * - **Description**: `Virkepedia`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type VirkepediaSlice = prismicT.SharedSlice<
  "virkepedia",
  VirkepediaSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      CompanyPageDocumentData,
      CompanyPageDocumentDataSlicesSlice,
      CompanyPageDocument,
      LandingPageDocumentData,
      LandingPageDocumentDataSlicesSlice,
      LandingPageDocument,
      AllDocumentTypes,
      CompanySliceDefaultPrimary,
      CompanySliceDefault,
      CompanySliceVariation,
      CompanySlice,
      PlaceholderSliceDefaultItem,
      PlaceholderSliceDefault,
      PlaceholderSliceVariation,
      PlaceholderSlice,
      SearchSliceDefaultItem,
      SearchSliceDefault,
      SearchSliceVariation,
      SearchSlice,
      VirkepediaSliceDefaultPrimary,
      VirkepediaSliceDefaultItem,
      VirkepediaSliceDefault,
      VirkepediaSliceVariation,
      VirkepediaSlice,
    };
  }
}
