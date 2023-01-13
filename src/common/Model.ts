
export interface UserModel {
    id: number,
    name?: string,
    avatar?: string,
    gender?: number,
    profession?: string,
    userInfo?: UserInfoModel,
    createdAt?: number,
    mobile?: string,
    nickname?: string,
    intro?: string,
}

export interface UserInfoModel {
    avatar?: string,
    gender?: number,
    profession?: number,
    education?: number,
    birthDate?: number,
    constellation?: string,
    remark?: string
}

export interface KVModel {
    key: number,
    val: string
}
export interface BannerModel {
    key: string,
    list: Array<BannerItemModel>,
    listStyle: number,
    title: string
}

export interface BannerItemModel {
    id: number
    img: string,
    act: string,
    cindex: number,
    payload: any,
    index: number,
    type: string
}

export interface UserPropsModel {
    professions: Array<KVModel>,
    educations: Array<KVModel>
}

export interface ArticleModel {
    id: number,
    cover?: string,
    img?: string,
    title?: string,
    descr?: string,
    user?: UserModel,
    pv?: number,
    commentNum?: number,
    likeNum?: number,
    collectNum?: number,
    tags?: Array<TagModel>,
    content?: string,
    isCollected?: number,
    lastModified?: number,
    status?: number,
    products?: Array<ProductModel>,
    author?: any,
}
export interface ProductModel {
    id: number,
    brandId: number,
    categoryId: number,
    createdAt: number,
    merchantId: number,
    priority: number
    pubAt: number
    sequence: string
    status: number
    title: string
}

export interface TagModel {
    id: number,
    title: string,
    color: string
}

export interface TagTypeModel {
    key: number,
    val: string
}

export interface ArticleTagModel {
    id: number,
    tagId: number,
    tag: TagModel
}

export interface PagerModel {
    content: Array<any>,
    pageable: Pageable,
    totalElements: number,
    last: boolean

}

export interface Pageable {
    pageSize: number,
    pageNumber?: number,
    current: number,
    total: number,
    last?: boolean
}


export interface CollectModel {
    id: number
}

export interface HistoryModel {
    id: number,
    userId: number,
    articleId: number,
    article?: ArticleModel,
    creatAt: number
}

export interface MerchantModel {
    id: number


}

export interface UserCollectModel {
    id: number,
    userId: number,
    collectType?: number,
    collectId?: number,
    merchant?: MerchantModel,

}
export interface BrandModel {
    id: number,
    name?: string,
    logo?: string
}

export interface HomeUIItem {
    key: string,
    list: Array<any>,
    listStyle: number,
    title: string,
}