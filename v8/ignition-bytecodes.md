# Ignition Bytecodes

<https://cs.chromium.org/chromium/src/v8/src/interpreter/bytecodes.h>

## Extended width operands 
- `Wide`
- `ExtraWide`

## Loading the accumulator
- `LdaZero`
- `LdaSmi`
- `LdaUndefined`
- `LdaNull`
- `LdaTheHole`
- `LdaTrue`
- `LdaFalse`
- `LdaConstant`

## Globals
- `LdaGlobal`
- `LdaGlobalInsideTypeof`
- `StaGlobalSloppy`
- `StaGlobalStrict`

## Context Operations
- `PushContext`
- `PopContext`
- `LdaContextSlot`
- `LdaImmutableContextSlot`
- `LdaCurrentContextSlot`
- `LdaImmutableCurrentContextSlot`
- `StaContextSlot`
- `StaCurrentContextSlot`

## Load-Store lookup slots
- `LdaLookupSlot`
- `LdaLookupContextSlot`
- `LdaLookupGlobalSlot`
- `LdaLookupSlotInsideTypeof`
- `LdaLookupContextSlotInsideTypeof`
- `LdaLookupGlobalSlotInsideTypeof`
- `StaLookupSlot`

## Register-accumulator transfers
- `Ldar`
- `Star`

## Register-register transfers
- `Mov`

## Property loads (LoadIC) operations
- `LdaNamedProperty`
- `LdaKeyedProperty`

## Operations on module variables
- `LdaModuleVariable`
- `StaModuleVariable`

## Propery stores (StoreIC) operations
- `StaNamedPropertySloppy`
- `StaNamedPropertyStrict`
- `StaNamedOwnProperty`
- `StaKeyedPropertySloppy`
- `StaKeyedPropertyStrict`
- `StaDataPropertyInLiteral`
- `CollectTypeProfile`

## Binary Operators
- `Add`
- `Sub`
- `Mul`
- `Div`
- `Mod`
- `BitwiseOr`
- `BitwiseXor`
- `BitwiseAnd`
- `ShiftLeft`
- `ShiftRight`
- `ShiftRightLogical`

## Binary operators with immediate operands
- `AddSmi`
- `SubSmi`
- `MulSmi`
- `DivSmi`
- `ModSmi`
- `BitwiseOrSmi`
- `BitwiseXorSmi`
- `BitwiseAndSmi`
- `ShiftLeftSmi`
- `ShiftRightSmi`
- `ShiftRightLogicalSmi`

## Unary Operators
- `Inc`
- `Dec`
- `ToBooleanLogicalNot`
- `LogicalNot`
- `TypeOf`
- `DeletePropertyStrict`
- `DeletePropertySloppy`

## GetSuperConstructor operator
- `GetSuperConstructor`

## Call operations
- `CallAnyReceiver`
- `CallProperty`
- `CallProperty0`
- `CallProperty1`
- `CallProperty2`
- `CallUndefinedReceiver`
- `CallUndefinedReceiver0`
- `CallUndefinedReceiver1`
- `CallUndefinedReceiver2`
- `CallWithSpread`
- `CallRuntime`
- `CallRuntimeForPair`
- `CallJSRuntime`

## Intrinsics
- `InvokeIntrinsic`

## Construct operators
- `Construct`
- `ConstructWithSpread`

## Test Operators
- `TestEqual`
- `TestEqualStrict`
- `TestLessThan`
- `TestGreaterThan`
- `TestLessThanOrEqual`
- `TestGreaterThanOrEqual`
- `TestEqualStrictNoFeedback`
- `TestInstanceOf`
- `TestIn`
- `TestUndetectable`
- `TestNull`
- `TestUndefined`
- `TestTypeOf`

## Cast operators
- `ToName`
- `ToNumber`
- `ToObject`

## Literals
- `CreateRegExpLiteral`
- `CreateArrayLiteral`
- `CreateEmptyArrayLiteral`
- `CreateObjectLiteral`

## Closure allocation
- `CreateClosure`

## Context allocation
- `CreateBlockContext`
- `CreateCatchContext`
- `CreateFunctionContext`
- `CreateEvalContext`
- `CreateWithContext`

## Arguments allocation
- `CreateMappedArguments`
- `CreateUnmappedArguments`
- `CreateRestParameter`

## Control Flow -- `carefully` ordered for efficient checks
###  [Unconditional jumps]
- `JumpLoop`
###  [Forward jumps]
- `Jump`
###  [Start constant jumps]
- `JumpConstant`
###  [Conditional jumps]
###  [Conditional constant jumps]
- `JumpIfNullConstant`
- `JumpIfNotNullConstant`
- `JumpIfUndefinedConstant`
- `JumpIfNotUndefinedConstant`
- `JumpIfTrueConstant`
- `JumpIfFalseConstant`
- `JumpIfJSReceiverConstant`
###  [Start ToBoolean jumps]
- `JumpIfToBooleanTrueConstant`
- `JumpIfToBooleanFalseConstant`
###  [End constant jumps]
###  [Conditional immediate jumps]
- `JumpIfToBooleanTrue`
- `JumpIfToBooleanFalse`
###  [End ToBoolean jumps]
- `JumpIfTrue`
- `JumpIfFalse`
- `JumpIfNull`
- `JumpIfNotNull`
- `JumpIfUndefined`
- `JumpIfNotUndefined`
- `JumpIfJSReceiver`

## Smi-table lookup for switch statements
- `SwitchOnSmiNoFeedback`

## Complex flow control For..in
- `ForInPrepare`
- `ForInContinue`
- `ForInNext`
- `ForInStep`

## Perform a stack guard check
- `StackCheck`

## Update the pending message
- `SetPendingMessage`

## Non-local flow control
- `Throw`
- `ReThrow`
- `Return`
- `ThrowReferenceErrorIfHole`
- `ThrowSuperNotCalledIfHole`
- `ThrowSuperAlreadyCalledIfNotHole`

## Generators
- `RestoreGeneratorState`
- `SuspendGenerator`
- `RestoreGeneratorRegisters`

## Debugger
- `Debugger`

## Debug Breakpoints                
- `DebugBreak0`
- `DebugBreak1`
- `DebugBreak2`
- `DebugBreak3`
- `DebugBreak4`
- `DebugBreak5`
- `DebugBreak6`
- `DebugBreakWide`
- `DebugBreakExtraWide`

## Block Coverage
- `IncBlockCounter`

## Illegal bytecode (terminates execution)
- `Illegal`
