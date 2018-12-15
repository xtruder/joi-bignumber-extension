<!-- version -->
# 1.1.1 API Reference
<!-- versionstop -->

<!-- toc -->

- [BigNumber](#bignumber)
  - [`bignumber` - inherits from `Any`](#bignumber---inherits-from-any)
    - [`bignumber.min(limit)`](#bignumberminlimit)
    - [`bignumber.greater(limit)`](#bignumbergreaterlimit)
    - [`bignumber.less(limit)`](#bignumberlesslimit)
    - [`bignumber.integer()`](#bignumberinteger)
    - [`bignumber.precision(limit, rounding)`](#bignumberprecisionlimit-rounding)
    - [`bignumber.multiple(base)`](#bignumbermultiplebase)
    - [`bignumber.positive()`](#bignumberpositive)
    - [`bignumber.negative()`](#bignumbernegative)

<!-- tocstop -->

## BigNumber

### `bignumber` - inherits from `Any`

Generates a schema object that matches a BigNumber data type (as well as strings and numbers that can be converted to BigNumber). 

If the validation `convert` option is on (enabled by default), a string or number will be converted to a `BigNumber` if specified. Also, if
`convert` is on and `number.precision()` is used, the value will be converted to the specified `precision` as well.

Supports the same methods of the [`any()`](#any) type.

```js
const bn = Joi.bignumber();
bn.validate(5, (err, value) => { });
```

💥 Possible validation errors:[`bignumber.nan`](#bignumbernan)

#### `bignumber.min(limit)`

Specifies the minimum value where:
- `limit` - the minimum value allowed.

```js
const schema = Joi.bignumber().min(2);
```

💥 Possible validation errors:[`bignumber.min`](#bignumbermin)

#### `bignumber.greater(limit)`

Specifies that the value must be greater than `limit`.

```js
const schema = Joi.bignumber().greater(5);
```

💥 Possible validation errors:[`bignumber.greater`](#bignumbergreater)

#### `bignumber.less(limit)`

Specifies that the value must be less than `limit`.

```js
const schema = Joi.bignumber().less(10);
```

💥 Possible validation errors:[`bignumber.less`](#bignumberless)

#### `bignumber.integer()`

Requires the number to be an integer (no floating point).

```js
const schema = Joi.bignumber().integer();
```

💥 Possible validation errors:[`bignumber.integer`](#bignumberinteger)

#### `bignumber.precision(limit, rounding)`

Specifies the maximum number of digits where:
- `limit` - the maximum number of digits allowed.
- `rounding` - bignumber rounding mode to use (by default 4).

```js
const schema = Joi.bignumber().precision(2, 4);
```

💥 Possible validation errors:[`bignumber.nan`](#bignumbernan)

#### `bignumber.multiple(base)`

Specifies that the value must be a multiple of `base`:

```js
const schema = Joi.bignumber().multiple(3);
```

💥 Possible validation errors:[`bignumber.multiple`](#bignumbermultiple)

#### `bignumber.positive()`

Requires the number to be positive.

```js
const schema = Joi.bignumber().positive();
```

💥 Possible validation errors:[`bignumber.positive`](#bignumberpositive)

#### `bignumber.negative()`

Requires the number to be negative.

```js
const schema = Joi.bignumber().negative();
```

💥 Possible validation errors:[`bignumber.negative`](#bignumbernegative)
