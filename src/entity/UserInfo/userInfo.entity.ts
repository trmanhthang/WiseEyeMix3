import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CheckInOut } from '../CheckInOut/checkInOut.entity';

@Entity({ name: 'UserInfo' })
export class UserInfo {
  @PrimaryGeneratedColumn({ name: 'UserEnrollNUmber', type: 'bigint' })
  userEnrollNumber: number;

  @Column({ name: 'UserFullCode', type: 'nvarchar', nullable: true })
  userFullCode: string;

  @Column({ name: 'UserFullName', type: 'nvarchar', nullable: true })
  userFullName: string;

  @Column({ name: 'UserLastName', type: 'nvarchar', nullable: true })
  userLastName: string;

  @Column({ name: 'UserEnrollName', type: 'nvarchar', nullable: true })
  userEnrollName: string;

  @Column({ name: 'UserCardNo', type: 'nvarchar', nullable: true })
  userCardNo: string;

  @Column({ name: 'UserHireDay', type: 'date', nullable: false })
  userHireDay: Date;

  @Column({ name: 'UserSex', type: 'int', nullable: true })
  userSex: number;

  @Column({ name: 'UserBirthDay', type: 'nvarchar', nullable: true })
  userBirthDay: string;

  @Column({ name: 'UserBirthPlace', type: 'int', nullable: true })
  userBirthPlace: number;

  @Column({ name: 'UserPhoto', type: 'image', nullable: true })
  userPhoto: string;

  @Column({ name: 'UserNoted', type: 'ntext', nullable: true })
  userNoted: string;

  @Column({ name: 'UserPW', type: 'nvarchar', nullable: true })
  userPW: string;

  @Column({ name: 'UserPrivilege', type: 'int', nullable: true })
  userPrivilege: number;

  @Column({ name: 'UserEnabled', type: 'bit' })
  userEnabled: boolean;

  @Column({ name: 'UserIDC', type: 'int', nullable: true })
  userIDC: number;

  @Column({ name: 'UserIDD', type: 'int', nullable: true })
  userIDD: number;

  @Column({ name: 'SchID', type: 'int', nullable: true })
  schID: number;

  @Column({ name: 'UserGroup', type: 'int', nullable: true })
  userGroup: number;

  @Column({ name: 'UserTZ', type: 'nvarchar', nullable: true })
  userTZ: string;

  @Column({ name: 'UserPIN1', type: 'nvarchar', nullable: true })
  userPIN1: string;

  @Column({ name: 'PushCardID', type: 'nvarchar', nullable: true })
  pushCardID: string;

  @Column({ name: 'UserNationality', type: 'int', nullable: true })
  userNationality: number;

  @Column({ name: 'UserPeople', type: 'int', nullable: true })
  userPeople: number;

  @Column({ name: 'UserNativeCountry', type: 'nvarchar', nullable: true })
  userNativeCountry: string;

  @Column({ name: 'UserIDCard', type: 'nvarchar', nullable: true })
  userIDCard: string;

  @Column({ name: 'IDCardPalaceOfIssue', type: 'nvarchar', nullable: true })
  IDCardPlaceOfIssue: string;

  @Column({ name: 'UserCalledName', type: 'nvarchar', nullable: true })
  userCalledName: string;

  @Column({ name: 'UserAddress', type: 'nvarchar', nullable: true })
  userAddress: string;

  @Column({ name: 'UserPhoneNumber', type: 'nvarchar', nullable: true })
  userPhoneNumber: string;

  @Column({ name: 'RelationshipName', type: 'nvarchar', nullable: true })
  relationshipName: string;

  @Column({ name: 'VerifyType', type: 'int', nullable: true })
  verifyType: number;

  @OneToMany(() => CheckInOut, (checkInOut) => checkInOut.userInfo)
  checkInOuts: CheckInOut[];
}
