# joi-bignumber-extension

Joi extension for BigNumber type

[![npm version](https://badge.fury.io/js/joi-bignumber-extension.svg)](http://badge.fury.io/js/joi-bignumber-extension)
[![Build Status](https://secure.travis-ci.org/xtruder/joi-bignumber-extension.svg?branch=master)](http://travis-ci.org/xtruder/joi-bignumber-extension)
[![Dependencies Status](https://david-dm.org/xtruder/joi-bignumber-extension.svg)](https://david-dm.org/xtruder/joi-bignumber-extension)
[![DevDependencies Status](https://david-dm.org/xtruder/joi-bignumber-extension/dev-status.svg)](https://david-dm.org/xtruder/joi-bignumber-extension#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/npm/joi-bignumber-extension/badge.svg)](https://snyk.io/test/npm/joi-bignumber-extension)

Lead Maintainer: [Jaka Hudoklin](https://github.com/offlinehacker)

## Installation

```npm install --save joi-bignumber-extension```

## Usage

### JavaScript

```javascript
const BaseJoi = require('joi');
const {BigNumberExtension} = require('joi-bignumber-extension');
const Joi = BaseJoi.extend(BigNumberExtension);

const schema = Joi.bignumber().positive().integer().min(10).less(100);
```

### Typescript

```typescript
import * as BaseJoi from 'joi';
import {BigNumber} from 'bignumber.js';
import {BigNumberExtension} from '../src/index';

const Joi = BaseJoi.extend(BigNumberExtension);

const schema = Joi.bignumber().positive().integer().min(10).less(100);
```
