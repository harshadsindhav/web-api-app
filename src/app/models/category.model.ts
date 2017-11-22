
export interface ApiCategory {
    sub_categories : ApiCategory[];
    api_list : ApiEntry[];
    category : string;
}

export interface ApiEntry {
    path : string;
    title : string;
    type : string;
}