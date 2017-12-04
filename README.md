[github](https://github.com/Garyhjj/ngx-validator-extend);

### 安装

```
npm i ngx-validator-extend --save
```

### 使用

这是一个服务,注入后就可以使用

```
...
 constructor(
    private validExd: NgxValidatorExtendService,
  ) { }
  ...
let sub = this.fb.group({
    site: [''test, [this.validExd.required(),this.validExd.selfDefine(function (ctr: AbstractControl,opt:any) {
        console.log(opt);
        return ctr.value === 'yourDefined' ? null : {
            'yourDefined': true
        }
      },{a:1})],
})
```