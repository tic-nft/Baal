/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ShamanMinterInterface extends ethers.utils.Interface {
  functions: {
    "baal()": FunctionFragment;
    "doubler(address[])": FunctionFragment;
    "init(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "baal", values?: undefined): string;
  encodeFunctionData(functionFragment: "doubler", values: [string[]]): string;
  encodeFunctionData(functionFragment: "init", values: [string]): string;

  decodeFunctionResult(functionFragment: "baal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "doubler", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;

  events: {};
}

export class ShamanMinter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ShamanMinterInterface;

  functions: {
    baal(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "baal()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    doubler(
      members: string[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "doubler(address[])"(
      members: string[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    init(_baal: string, overrides?: Overrides): Promise<ContractTransaction>;

    "init(address)"(
      _baal: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  baal(overrides?: CallOverrides): Promise<string>;

  "baal()"(overrides?: CallOverrides): Promise<string>;

  doubler(
    members: string[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "doubler(address[])"(
    members: string[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  init(_baal: string, overrides?: Overrides): Promise<ContractTransaction>;

  "init(address)"(
    _baal: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    baal(overrides?: CallOverrides): Promise<string>;

    "baal()"(overrides?: CallOverrides): Promise<string>;

    doubler(members: string[], overrides?: CallOverrides): Promise<void>;

    "doubler(address[])"(
      members: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    init(_baal: string, overrides?: CallOverrides): Promise<void>;

    "init(address)"(_baal: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    baal(overrides?: CallOverrides): Promise<BigNumber>;

    "baal()"(overrides?: CallOverrides): Promise<BigNumber>;

    doubler(
      members: string[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "doubler(address[])"(
      members: string[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    init(_baal: string, overrides?: Overrides): Promise<BigNumber>;

    "init(address)"(_baal: string, overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    baal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "baal()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    doubler(
      members: string[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "doubler(address[])"(
      members: string[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    init(_baal: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "init(address)"(
      _baal: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}