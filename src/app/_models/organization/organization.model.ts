import { AuditModel, GenericModel } from "..";

export class OrganizationModel extends AuditModel {
    name: string = '';
    socialName: string = '';
    logoUrl: string = '';
    slackTeam: GenericModel = new GenericModel();
    contentsRef: number[] = [];
    membersRef: number[] = [];
}