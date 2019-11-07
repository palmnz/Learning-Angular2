


import { Directive, ElementRef,Renderer} from 'angular2/core'

@Directive ({
    selector: '[autoGrow]',
    host: {
        '(focus)':'onFocus()',
        '(blur)':'onBlur()'
    }
})
export class AutoGrowDirective {
    constructor(private el: ElementRef, private ren: Renderer){
    }

    onFocus(){
        this.ren.setElementStyle(this.el, 'width', '200')
    }

    onBlur(){
        this.ren.setElementStyle(this.el, 'width', '2120')
    }
}