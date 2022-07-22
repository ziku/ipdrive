// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class MonthlyPaymentMade extends ethereum.Event {
  get params(): MonthlyPaymentMade__Params {
    return new MonthlyPaymentMade__Params(this);
  }
}

export class MonthlyPaymentMade__Params {
  _event: MonthlyPaymentMade;

  constructor(event: MonthlyPaymentMade) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SubscriptionMade extends ethereum.Event {
  get params(): SubscriptionMade__Params {
    return new SubscriptionMade__Params(this);
  }
}

export class SubscriptionMade__Params {
  _event: SubscriptionMade;

  constructor(event: SubscriptionMade) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class IPDrive extends ethereum.SmartContract {
  static bind(address: Address): IPDrive {
    return new IPDrive("IPDrive", address);
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class PayMonthlyValueCall extends ethereum.Call {
  get inputs(): PayMonthlyValueCall__Inputs {
    return new PayMonthlyValueCall__Inputs(this);
  }

  get outputs(): PayMonthlyValueCall__Outputs {
    return new PayMonthlyValueCall__Outputs(this);
  }
}

export class PayMonthlyValueCall__Inputs {
  _call: PayMonthlyValueCall;

  constructor(call: PayMonthlyValueCall) {
    this._call = call;
  }
}

export class PayMonthlyValueCall__Outputs {
  _call: PayMonthlyValueCall;

  constructor(call: PayMonthlyValueCall) {
    this._call = call;
  }
}

export class SubscribeCall extends ethereum.Call {
  get inputs(): SubscribeCall__Inputs {
    return new SubscribeCall__Inputs(this);
  }

  get outputs(): SubscribeCall__Outputs {
    return new SubscribeCall__Outputs(this);
  }
}

export class SubscribeCall__Inputs {
  _call: SubscribeCall;

  constructor(call: SubscribeCall) {
    this._call = call;
  }
}

export class SubscribeCall__Outputs {
  _call: SubscribeCall;

  constructor(call: SubscribeCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}