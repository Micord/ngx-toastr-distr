/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, } from '@angular/core';
import { Overlay } from '../overlay/overlay';
import { OverlayContainer } from '../overlay/overlay-container';
import { DefaultGlobalConfig } from './default-config';
import { TOAST_CONFIG } from './toast-token';
import { Toast } from './toast.component';
import { ToastrService } from './toastr.service';
var ToastrModule = /** @class */ (function () {
    function ToastrModule(parentModule) {
        if (parentModule) {
            throw new Error('ToastrModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ToastrModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ToastrModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: { config: config, defaults: DefaultGlobalConfig } },
                OverlayContainer,
                Overlay,
                ToastrService,
            ],
        };
    };
    ToastrModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Toast],
                    declarations: [Toast],
                    entryComponents: [Toast],
                },] }
    ];
    /** @nocollapse */
    ToastrModule.ctorParameters = function () { return [
        { type: ToastrModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return ToastrModule;
}());
export { ToastrModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b2FzdHIvIiwic291cmNlcyI6WyJ0b2FzdHIvdG9hc3RyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFFTCxRQUFRLEVBQ1IsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQVUvQyxzQkFBb0MsWUFBMEI7UUFDNUQsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnR0FBZ0csQ0FBQyxDQUFDO1NBQ25IO0tBQ0Y7Ozs7O0lBQ00sb0JBQU87Ozs7SUFBZCxVQUFlLE1BQWtDO1FBQWxDLHVCQUFBLEVBQUEsV0FBa0M7UUFDL0MsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLEVBQUU7Z0JBQzlFLGdCQUFnQjtnQkFDaEIsT0FBTztnQkFDUCxhQUFhO2FBQ2Q7U0FDRixDQUFDO0tBQ0g7O2dCQXRCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ2hCLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDckIsZUFBZSxFQUFFLENBQUMsS0FBSyxDQUFDO2lCQUN6Qjs7OztnQkFFbUQsWUFBWSx1QkFBakQsUUFBUSxZQUFJLFFBQVE7O3VCQXhCbkM7O1NBdUJhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT3B0aW9uYWwsXHJcbiAgU2tpcFNlbGYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5JztcclxuaW1wb3J0IHsgT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheS1jb250YWluZXInO1xyXG5pbXBvcnQgeyBEZWZhdWx0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LWNvbmZpZyc7XHJcbmltcG9ydCB7IFRPQVNUX0NPTkZJRyB9IGZyb20gJy4vdG9hc3QtdG9rZW4nO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJy4vdG9hc3RyLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1RvYXN0XSxcclxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVG9hc3RdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RyTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFRvYXN0ck1vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvYXN0ck1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSXQgc2hvdWxkIG9ubHkgYmUgaW1wb3J0ZWQgaW4geW91ciBhcHBsaWNhdGlvblxcJ3MgbWFpbiBtb2R1bGUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogUGFydGlhbDxHbG9iYWxDb25maWc+ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUb2FzdHJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogVE9BU1RfQ09ORklHLCB1c2VWYWx1ZTogeyBjb25maWcsIGRlZmF1bHRzOiBEZWZhdWx0R2xvYmFsQ29uZmlnIH0gfSxcclxuICAgICAgICBPdmVybGF5Q29udGFpbmVyLFxyXG4gICAgICAgIE92ZXJsYXksXHJcbiAgICAgICAgVG9hc3RyU2VydmljZSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==