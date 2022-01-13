export interface Product{
    pictures:Array<{url:string}>;
    id:string;
    title:string;
    price: number;
    thumbnail: string;
    description:string|undefined;
}

export interface ResponseProducts{
    site_id:string;
    query:string|number;
    country_default_time_zone:string;
    sort:{
        id:string;
        name:string;
    };
    paging:{[k:string]:string|number};
    results:Product[];
}

