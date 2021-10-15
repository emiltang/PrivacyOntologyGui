export enum NodeType { data, context}

export interface IAttribute<T> {
    name: string;
    value: T;
}

export interface ILink {
    predicate: string;
    object: string;
}

export interface INode {
    id: string;
    name: string;
    comment?: string;
    nodeType: NodeType;
    type: string;
    superType: string;
    attributes: IAttribute<any>[];
    links: ILink[];
}

