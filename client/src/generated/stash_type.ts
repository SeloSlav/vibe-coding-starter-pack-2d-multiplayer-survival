// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN YOUR MODULE SOURCE CODE INSTEAD.

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import {
  AlgebraicType,
  AlgebraicValue,
  BinaryReader,
  BinaryWriter,
  CallReducerFlags,
  ConnectionId,
  DbConnectionBuilder,
  DbConnectionImpl,
  DbContext,
  ErrorContextInterface,
  Event,
  EventContextInterface,
  Identity,
  ProductType,
  ProductTypeElement,
  ReducerEventContextInterface,
  SubscriptionBuilderImpl,
  SubscriptionEventContextInterface,
  SumType,
  SumTypeVariant,
  TableCache,
  TimeDuration,
  Timestamp,
  deepEqual,
} from "@clockworklabs/spacetimedb-sdk";
export type Stash = {
  id: number,
  posX: number,
  posY: number,
  chunkIndex: number,
  placedBy: Identity,
  isHidden: boolean,
  lastSurfacedBy: Identity | undefined,
  slotInstanceId0: bigint | undefined,
  slotDefId0: bigint | undefined,
  slotInstanceId1: bigint | undefined,
  slotDefId1: bigint | undefined,
  slotInstanceId2: bigint | undefined,
  slotDefId2: bigint | undefined,
  slotInstanceId3: bigint | undefined,
  slotDefId3: bigint | undefined,
  slotInstanceId4: bigint | undefined,
  slotDefId4: bigint | undefined,
  slotInstanceId5: bigint | undefined,
  slotDefId5: bigint | undefined,
  health: number,
  maxHealth: number,
  isDestroyed: boolean,
  destroyedAt: Timestamp | undefined,
  lastHitTime: Timestamp | undefined,
};

/**
 * A namespace for generated helper functions.
 */
export namespace Stash {
  /**
  * A function which returns this type represented as an AlgebraicType.
  * This function is derived from the AlgebraicType used to generate this type.
  */
  export function getTypeScriptAlgebraicType(): AlgebraicType {
    return AlgebraicType.createProductType([
      new ProductTypeElement("id", AlgebraicType.createU32Type()),
      new ProductTypeElement("posX", AlgebraicType.createF32Type()),
      new ProductTypeElement("posY", AlgebraicType.createF32Type()),
      new ProductTypeElement("chunkIndex", AlgebraicType.createU32Type()),
      new ProductTypeElement("placedBy", AlgebraicType.createIdentityType()),
      new ProductTypeElement("isHidden", AlgebraicType.createBoolType()),
      new ProductTypeElement("lastSurfacedBy", AlgebraicType.createOptionType(AlgebraicType.createIdentityType())),
      new ProductTypeElement("slotInstanceId0", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("slotDefId0", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("slotInstanceId1", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("slotDefId1", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("slotInstanceId2", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("slotDefId2", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("slotInstanceId3", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("slotDefId3", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("slotInstanceId4", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("slotDefId4", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("slotInstanceId5", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("slotDefId5", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("health", AlgebraicType.createF32Type()),
      new ProductTypeElement("maxHealth", AlgebraicType.createF32Type()),
      new ProductTypeElement("isDestroyed", AlgebraicType.createBoolType()),
      new ProductTypeElement("destroyedAt", AlgebraicType.createOptionType(AlgebraicType.createTimestampType())),
      new ProductTypeElement("lastHitTime", AlgebraicType.createOptionType(AlgebraicType.createTimestampType())),
    ]);
  }

  export function serialize(writer: BinaryWriter, value: Stash): void {
    Stash.getTypeScriptAlgebraicType().serialize(writer, value);
  }

  export function deserialize(reader: BinaryReader): Stash {
    return Stash.getTypeScriptAlgebraicType().deserialize(reader);
  }

}


