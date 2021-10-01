import IAttribute from './IAttribute';
import ILink from './ILink';
import IField from './IField';


export default interface INode {
    id: string;
    name: string;
    type: IField;
    superType: IField;
    attributes: IAttribute<any>[];
    links: ILink[];
}
