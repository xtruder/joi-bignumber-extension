import {expect} from 'chai';

import * as BaseJoi from 'joi';
import {BigNumber} from 'bignumber.js';
import {BigNumberExtension} from '../src/index';

describe('bignumber', () => {
    const Joi = BaseJoi.extend(BigNumberExtension);

    it('should extend joi', () => {
        Joi.bignumber();
    });

    it('should validate bignumber value', () => {
        const bnValidator = Joi.bignumber();

        const result = bnValidator.validate('100');

        expect(result.error).to.be.null;
        expect(result.value).to.be.instanceof(BigNumber);
        expect(result.value.toString()).to.be.equal('100');
    });

    it('should return validation error when invalid bignumber value', () => {
        const bnValidator = Joi.bignumber();

        const result = bnValidator.validate('wrong');

        expect(result.error).to.not.be.null;
        expect(result.error.name).to.be.equal('ValidationError');
        expect(result.error.message).to.be.equal('"wrong" is not a number');
    });

    it('should not convert if conversion is disabled', () => {
        const bnValidator = Joi.bignumber();

        const result = bnValidator.validate('100', {convert: false});

        expect(result.error).to.be.null;
        expect(result.value).to.be.string('100');
    });

    describe('min', () => {
        it('should validate if equal to min', () => {
            const bnValidator = Joi.bignumber().min(100);

            const result = bnValidator.validate('100');

            expect(result.error).to.be.null;
        });

        it('should validate if greater than min', () => {
            const bnValidator = Joi.bignumber().min(100);

            const result = bnValidator.validate('101');

            expect(result.error).to.be.null;
        });

        it('should return validation error if below min', () => {
            const bnValidator = Joi.bignumber().min(100);

            const result = bnValidator.validate('99');

            expect(result.error).to.not.be.null;
            expect(result.error.name).to.be.equal('ValidationError');
            expect(result.error.message).to.be.equal('"99" needs to be greater than or equal to "100"');
        });
    });

    describe('max', () => {
        it('should validate if equal to max', () => {
            const bnValidator = Joi.bignumber().max(100);

            const result = bnValidator.validate('100');

            expect(result.error).to.be.null;
        });

        it('should validate if less than max', () => {
            const bnValidator = Joi.bignumber().max(100);

            const result = bnValidator.validate('99');

            expect(result.error).to.be.null;
        });

        it('should return validation error if greater than max', () => {
            const bnValidator = Joi.bignumber().max(100);

            const result = bnValidator.validate('101');

            expect(result.error).to.not.be.null;
            expect(result.error.name).to.be.equal('ValidationError');
            expect(result.error.message).to.be.equal('"101" needs to be less than or equal to "100"');
        });
    });

    describe('greater', () => {
        it('should validate if greater than min', () => {
            const bnValidator = Joi.bignumber().greater(100);

            const result = bnValidator.validate('101');

            expect(result.error).to.be.null;
        });

        it('should return validation error if less than min', () => {
            const bnValidator = Joi.bignumber().greater(100);

            const result = bnValidator.validate('99');

            expect(result.error).to.not.be.null;
            expect(result.error.name).to.be.equal('ValidationError');
            expect(result.error.message).to.be.equal('"99" needs to be greater than "100"');
        });
    });

    describe('less', () => {
        it('should validate if less than max', () => {
            const bnValidator = Joi.bignumber().less(100);

            const result = bnValidator.validate('99');

            expect(result.error).to.be.null;
        });

        it('should return validation error if greater than max', () => {
            const bnValidator = Joi.bignumber().less(100);

            const result = bnValidator.validate('101');

            expect(result.error).to.not.be.null;
            expect(result.error.name).to.be.equal('ValidationError');
            expect(result.error.message).to.be.equal('"101" needs to be less than "100"');
        });
    });

    describe('integer', () => {
        it('should validate if integer', () => {
            const bnValidator = Joi.bignumber().integer();

            const result = bnValidator.validate('100');

            expect(result.error).to.be.null;
        });

        it('should return validation error if value is not an integer', () => {
            const bnValidator = Joi.bignumber().integer();

            const result = bnValidator.validate('100.1');

            expect(result.error).to.not.be.null;
            expect(result.error.name).to.be.equal('ValidationError');
            expect(result.error.message).to.be.equal('"100.1" needs to be integer');
        });
    });

    describe('precision', () => {
        it('should round to precision', () => {
            const bnValidator = Joi.bignumber().precision(5);

            const result = bnValidator.validate('100.111');

            expect(result.error).to.be.null;
            expect(result.value.toString()).to.be.equal('100.11')
        });

        it('should round to a precision with rounding mode', () => {
            const bnValidator = Joi.bignumber().precision(5, BigNumber.ROUND_UP);

            const result = bnValidator.validate('100.111');

            expect(result.error).to.be.null;
            expect(result.value.toString()).to.be.equal('100.12')
        });
    });

    describe('multiple', () => {
        it('should be multiple of value', () => {
            const bnValidator = Joi.bignumber().multiple(10);

            const result = bnValidator.validate('100');

            expect(result.error).to.be.null;
        });

        it('should return validation error if not multiple of value', () => {
            const bnValidator = Joi.bignumber().multiple(10);

            const result = bnValidator.validate('101');

            expect(result.error).to.not.be.null;
            expect(result.error.name).to.be.equal('ValidationError');
            expect(result.error.message).to.be.equal('"101" needs to be multiple of "10"');
        });
    });

    describe('positive', () => {
        it('should be positive value', () => {
            const bnValidator = Joi.bignumber().positive();

            const result = bnValidator.validate('100');

            expect(result.error).to.be.null;
        });

        it('should return validation error if not positive value', () => {
            const bnValidator = Joi.bignumber().positive();

            const result = bnValidator.validate('-100');

            expect(result.error).to.not.be.null;
            expect(result.error.name).to.be.equal('ValidationError');
            expect(result.error.message).to.be.equal('"-100" needs to be positive');
        });
    });

    describe('negative', () => {
        it('should be negative value', () => {
            const bnValidator = Joi.bignumber().negative();

            const result = bnValidator.validate('-100');

            expect(result.error).to.be.null;
        });

        it('should return validation error if not negative value', () => {
            const bnValidator = Joi.bignumber().negative();

            const result = bnValidator.validate('100');

            expect(result.error).to.not.be.null;
            expect(result.error.name).to.be.equal('ValidationError');
            expect(result.error.message).to.be.equal('"100" needs to be negative');
        });
    });
});