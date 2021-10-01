import IAttribute from './IAttribute';
import ILink from './ILink';
import IField from './IField';

export enum NodeType { data, context}

export default interface INode {
    id: string;
    name: string;
    comment?: string;
    nodeType: NodeType;
    type: IField;
    superType: IField;
    attributes: IAttribute<any>[];
    links: ILink[];
}
