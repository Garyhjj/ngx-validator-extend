"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * angular验证器扩展服务
 * version: '0.03'
 * name: 'ngValidatorExtend.js'
 * author: 'gary.h'
 * 2017-08-1
 */
var core_1 = require("@angular/core");
var NgxValidatorExtendService = (function () {
    function NgxValidatorExtendService() {
    }
    /**
     * 必须填
     * @return {ValidatorFn} [验证器]
     */
    NgxValidatorExtendService.prototype.required = function () {
        return function (ctrl) {
            var value = ctrl.value;
            return value ? null : {
                'required': true
            };
        };
    };
    /**
     * 字符串最小长度
     * @param  {number}   num 传入的长度要求
     * @return {ValidatorFn}     验证器
     */
    NgxValidatorExtendService.prototype.minLength = function (num) {
        return function (ctrl) {
            var value = ctrl.value;
            if (!value)
                return null;
            var valueL = value.length;
            return !value || (valueL >= num) ? null : {
                'minlength': {
                    'requiredLength': num,
                    'actualLength': valueL
                }
            };
        };
    };
    /**
     * 字符串最大长度
     * @param  {number}   num 传入的长度要求
     * @return {ValidatorFn}     验证器
     */
    NgxValidatorExtendService.prototype.maxLength = function (num) {
        return function (ctrl) {
            var value = ctrl.value;
            if (!value)
                return null;
            var valueL = value.length;
            return !value || (valueL <= num) ? null : {
                'maxlength': {
                    'requiredLength': num,
                    'actualLength': valueL
                }
            };
        };
    };
    /**
     * 限制最大数值
     * @param  {number}   num 传入的长度要求
     * @return {ValidatorFn}     验证器
     */
    NgxValidatorExtendService.prototype.max = function (num) {
        return function (ctrl) {
            var value = Number(ctrl.value);
            return !value || (value <= num) ? null : {
                'max': {
                    'requiredValue': num,
                    'actualValue': value
                }
            };
        };
    };
    /**
     * 限制最小数值
     * @param  {number}   num 传入的长度要求
     * @return {ValidatorFn}     验证器
     */
    NgxValidatorExtendService.prototype.min = function (num) {
        return function (ctrl) {
            var value = Number(ctrl.value);
            return !value || (value >= num) ? null : {
                'min': {
                    'requiredValue': num,
                    'actualValue': value
                }
            };
        };
    };
    /**
     * 限制字符串长度的范围
     * @param  {number[]} bet 长度为2的数组、例‘[2,6]’
     * @return {ValidatorFn}     验证器
     */
    NgxValidatorExtendService.prototype.betweenLength = function (bet) {
        if (bet instanceof Array && bet.length > 1) {
            return function (ctrl) {
                var value = ctrl.value;
                if (!value)
                    return null;
                var valueL = value.length;
                return !value || (valueL >= bet[0] && valueL <= bet[1]) ? null : { 'betweenLength': {
                        'requiredLength': bet[0] + '-' + bet[1], 'actualLength': valueL
                    } };
            };
        }
        else {
            throw new Error('参数必须是数组类型,并且长度不能小于1');
        }
    };
    /**
     * 根据输入的正则验证
     * @param  {any}    reg   正则表达式
     * @return {ValidatorFn}     验证器
     */
    NgxValidatorExtendService.prototype.regex = function (reg) {
        return function (ctrl) {
            var value = ctrl.value;
            if (!value)
                return null;
            var regx = new RegExp(reg);
            return !value || (value && regx.test(value)) ? null : {
                'RegExp': regx.toString()
            };
        };
    };
    /**
     * 检测是否为邮箱
     * @return {ValidatorFn} 验证器
     */
    NgxValidatorExtendService.prototype.email = function () {
        return function (ctrl) {
            var value = ctrl.value;
            if (!value)
                return null;
            return !value || /^([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]*)*\@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])*/.test(value) ? null : {
                'email': true
            };
        };
    };
    /**
     * 长度限制
     * @param  {number}   length 字符长度
     * @return {ValidatorFn}        验证器
     */
    NgxValidatorExtendService.prototype.length = function (length) {
        return function (ctrl) {
            var value = ctrl.value;
            if (!value)
                return null;
            var valueL = value.length;
            return !value || valueL === Number(length) ? null : {
                'length': {
                    'requiredLength': Number(length), 'actualLength': valueL
                }
            };
        };
    };
    /**
     * 限制数值最大最小值
     * @param  {number[]} bet 大小范围
     * @return {ValidatorFn}     验证器
     */
    NgxValidatorExtendService.prototype.between = function (bet) {
        if (bet instanceof Array && bet.length > 1) {
            return function (ctrl) {
                var value = Number(ctrl.value);
                return !value || (value >= bet[0] && value <= bet[1]) ? null : { 'between': {
                        'requiredValue': bet[0] + '-' + bet[1], 'actualValue': value
                    } };
            };
        }
        else {
            throw new Error('参数必须是数组类型,并且长度不能小于1');
        }
    };
    /**
     * 为整数
     * @return {ValidatorFn} 验证器
     */
    NgxValidatorExtendService.prototype.integer = function () {
        return function (ctrl) {
            var value = ctrl.value;
            if (!value)
                return null;
            return !value || /^\-?\d+$/.test(value) ? null : {
                'integer': true
            };
        };
    };
    /**
     * 为数字
     * @return {ValidatorFn} 验证器
     */
    NgxValidatorExtendService.prototype.number = function () {
        return function (ctrl) {
            var value = ctrl.value;
            if (!value)
                return null;
            return !value || !isNaN(Number(value)) ? null : {
                'number': true
            };
        };
    };
    /**
     * 为移动号码
     * @return {ValidatorFn} 验证器
     */
    NgxValidatorExtendService.prototype.mobile = function () {
        return function (ctrl) {
            var value = ctrl.value;
            if (!value)
                return null;
            return !value || /^1\d{10}$/.test(value) ? null : {
                'mobile': true
            };
        };
    };
    /**
     * 为固话号码
     * @return {ValidatorFn} 验证器
     */
    NgxValidatorExtendService.prototype.telephone = function () {
        return function (ctrl) {
            var value = ctrl.value;
            if (!value)
                return null;
            return !value || /^\d{4}\-\d{8}$/.test(value) ? null : {
                'telephone': true
            };
        };
    };
    /**
     * 为网址
     * @return {ValidatorFn} 验证器
     */
    NgxValidatorExtendService.prototype.url = function () {
        return function (ctrl) {
            var value = ctrl.value;
            if (!value)
                return null;
            return !value || /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g.test(value) ? null : {
                'url': true
            };
        };
    };
    /**
     * 与同级栏位进行内容对比，是否相等
     * @param  {string}   name 同级栏位名称
     * @return {ValidatorFn}      验证器
     */
    NgxValidatorExtendService.prototype.equalTo = function (name) {
        return function (ctrl) {
            var value = ctrl.value;
            if (!ctrl.parent)
                return null;
            if (!ctrl.parent.controls[name])
                throw new Error('同级栏位中没有' + name + '栏位');
            var anotherVal = ctrl.parent.controls[name].value || null;
            return (anotherVal && value == anotherVal) ? null : {
                'equalTo': {
                    'target': name
                }
            };
        };
    };
    /**
     * 检查小数位的个数
     * @param  {number} num   小数位的个数
     * @return {ValidatorFn}     验证器
     */
    NgxValidatorExtendService.prototype.toFix = function (num) {
        return function (ctrl) {
            var value = ctrl.value;
            if (!value)
                return null;
            var reg = '^([\\d]+)(\\.[\\d]{' + Number(num) + '})?$';
            return new RegExp(reg).test(value) ? null : {
                'toFix': true
            };
        };
    };
    /**
     * 自定位验证规则, fn(ctrl,opt)
     * @param  {ValidatorFn} fn  自定义的规则函数，参数（ctrl,opt）
     * @param  {any}      opt 自定义参数
     * @return {ValidatorFn}     验证器
     */
    NgxValidatorExtendService.prototype.selfDefine = function (fn, opt) {
        var _this = this;
        return function (ctrl) {
            return fn.call(_this, ctrl, opt);
        };
    };
    return NgxValidatorExtendService;
}());
NgxValidatorExtendService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], NgxValidatorExtendService);
exports.NgxValidatorExtendService = NgxValidatorExtendService;
//# sourceMappingURL=ngx-validator-extend.service.js.map