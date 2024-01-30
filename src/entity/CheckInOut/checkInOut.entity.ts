import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { UserInfo } from '../UserInfo/userInfo.entity';

@Entity({ name: 'CheckInOut' })
export class CheckInOut {
  @ManyToOne(() => UserInfo, (userInfo) => userInfo.checkInOuts)
  @JoinColumn({ name: 'UserEnrollNumber' })
  userInfo: UserInfo;

  @PrimaryColumn({ name: 'TimeStr', type: 'datetime' })
  timeStr: Date;

  @Column({ name: 'TimeDate', type: 'datetime', nullable: true })
  timeDate: Date;

  @Column({ name: 'OriginType', type: 'nvarchar', nullable: true })
  originType: string;

  @Column({ name: 'NewType', type: 'nvarchar', nullable: null })
  newType: string;

  @Column({ name: 'Source', type: 'nvarchar', nullable: true })
  source: string;

  @Column({ name: 'MachineNo', type: 'tinyint', nullable: true })
  machineNo: number;

  @Column({ name: 'WorkCode', type: 'tinyint' })
  workCode: number;

  @Column({ name: 'SerialNumber' })
  serialNumber: string;

  @Column({ name: 'EventType' })
  eventType: number;

  @Column({ name: 'EventAddr' })
  eventAddr: number;

  @Column({ name: 'CardNo' })
  cardNo: string;

  @Column({ name: 'InOutState' })
  inOutState: number;

  @Column({ name: 'MaskFlag' })
  maskFlag: number;

  @Column({ name: 'Temperature', type: 'real', nullable: true })
  temperature: number;
}
