import IAttribute from './IAttribute';
import ILink from './ILink';
import IRdfType from './IRdfType';

export enum NodeType { data, context}

export default interface INode {
    id: string;
    name: string;
    comment?: string;
    nodeType: NodeType;
    type: IRdfType;
    superType: IRdfType;
    attributes: IAttribute<any>[];
    links: ILink[];
}
