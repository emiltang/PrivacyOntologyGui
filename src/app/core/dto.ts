/* eslint-disable @typescript-eslint/naming-convention */
export interface DTO {
    nodes: NodeDTO[];
    links: LinkDTO[];
    namespace: string;
}

export interface NodeDTO {
    name: string;
    type: string;
    address: string;
    superType: string;
    attributes: AttributeDTO[];
}

export interface AttributeDTO {
    dataType: string;
    name: string;
    value: any;
}

export interface LinkDTO {
    predicate: string;
    subject: string;
    object: string;
}

export interface ResultDTO {
    graph: string;
    privacy_report: Map<string, PrivacyRiskResultDTO>;
}

export interface PrivacyRiskResultDTO {
    privacy_risks: PrivacyRiskDTO[];
    privacy_score: number;
    type: string;
}

export interface PrivacyRiskDTO {
    privacy_risk_description: string;
    privacy_risks_name: string;
    privacy_score: number;
    privacy_strategies: any[];
    template_count: number;
}

