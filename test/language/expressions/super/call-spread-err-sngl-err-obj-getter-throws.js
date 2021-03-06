// This file was procedurally generated from the following sources:
// - src/spread/sngl-err-obj-getter-throws.case
// - src/spread/error/super-call.template
/*---
description: Object Spread operator results in error when there is an getter that throws an exception (SuperCall)
esid: sec-super-keyword-runtime-semantics-evaluation
es6id: 12.3.5.1
flags: [generated]
info: |
    SuperCall : super Arguments

    1. Let newTarget be GetNewTarget().
    2. If newTarget is undefined, throw a ReferenceError exception.
    3. Let func be GetSuperConstructor().
    4. ReturnIfAbrupt(func).
    5. Let argList be ArgumentListEvaluation of Arguments.
    [...]

    Pending Runtime Semantics: PropertyDefinitionEvaluation

    PropertyDefinition:...AssignmentExpression

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let fromValue be GetValue(exprValue).
    3. ReturnIfAbrupt(fromValue).
    4. Let excludedNames be a new empty List.
    5. Return CopyDataProperties(object, fromValue, excludedNames).

---*/

class Test262ParentClass {
  constructor() {}
}

class Test262ChildClass extends Test262ParentClass {
  constructor() {
    super({...{ get foo() { throw new Test262Error(); } }});
  }
}

assert.throws(Test262Error, function() {
  new Test262ChildClass();
});
