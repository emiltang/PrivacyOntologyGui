export enum NodeType { data, context}

export interface IAttribute<T> {
    name: string;
    value: T;
    dataType: string;
}

export interface ILink {
    predicate: string;
    object: INode;
}

export interface INode {
    id: string;
    name: string;
//    comment?: string;
    nodeType: NodeType;
    type: string;
    superType: string;
    attributes: IAttribute<any>[];
    links: ILink[];
}

export interface IResult {
    title: string;
    score: number;
    type: string;
    privacyRisks: IPrivacyRisk[];
}

export interface IPrivacyRisk {
    description: string;
    name: string;
    score: number;
    templateCount: number;
}
