/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Toast } from './toast.component';
var DefaultGlobalConfig = /** @class */ (function () {
    function DefaultGlobalConfig() {
        // Global
        this.maxOpened = 0;
        this.autoDismiss = false;
        this.newestOnTop = true;
        this.preventDuplicates = false;
        this.resetTimeoutOnDuplicate = false;
        this.iconClasses = {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning'
        };
        // Individual
        this.toastComponent = Toast;
        this.closeButton = false;
        this.timeOut = 5000;
        this.extendedTimeOut = 1000;
        this.enableHtml = false;
        this.progressBar = false;
        this.toastClass = 'toast';
        this.positionClass = 'toast-top-right';
        this.titleClass = 'toast-title';
        this.messageClass = 'toast-message';
        this.easing = 'ease-in';
        this.easeTime = 300;
        this.tapToDismiss = true;
        this.onActivateTick = false;
        this.progressAnimation = 'decreasing';
    }
    return DefaultGlobalConfig;
}());
export { DefaultGlobalConfig };
if (false) {
    /** @type {?} */
    DefaultGlobalConfig.prototype.maxOpened;
    /** @type {?} */
    DefaultGlobalConfig.prototype.autoDismiss;
    /** @type {?} */
    DefaultGlobalConfig.prototype.newestOnTop;
    /** @type {?} */
    DefaultGlobalConfig.prototype.preventDuplicates;
    /** @type {?} */
    DefaultGlobalConfig.prototype.resetTimeoutOnDuplicate;
    /** @type {?} */
    DefaultGlobalConfig.prototype.iconClasses;
    /** @type {?} */
    DefaultGlobalConfig.prototype.toastComponent;
    /** @type {?} */
    DefaultGlobalConfig.prototype.closeButton;
    /** @type {?} */
    DefaultGlobalConfig.prototype.disableTimeOut;
    /** @type {?} */
    DefaultGlobalConfig.prototype.timeOut;
    /** @type {?} */
    DefaultGlobalConfig.prototype.extendedTimeOut;
    /** @type {?} */
    DefaultGlobalConfig.prototype.enableHtml;
    /** @type {?} */
    DefaultGlobalConfig.prototype.progressBar;
    /** @type {?} */
    DefaultGlobalConfig.prototype.toastClass;
    /** @type {?} */
    DefaultGlobalConfig.prototype.positionClass;
    /** @type {?} */
    DefaultGlobalConfig.prototype.titleClass;
    /** @type {?} */
    DefaultGlobalConfig.prototype.messageClass;
    /** @type {?} */
    DefaultGlobalConfig.prototype.easing;
    /** @type {?} */
    DefaultGlobalConfig.prototype.easeTime;
    /** @type {?} */
    DefaultGlobalConfig.prototype.tapToDismiss;
    /** @type {?} */
    DefaultGlobalConfig.prototype.onActivateTick;
    /** @type {?} */
    DefaultGlobalConfig.prototype.progressAnimation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG9hc3RyLyIsInNvdXJjZXMiOlsidG9hc3RyL2RlZmF1bHQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHMUMsSUFBQTs7O3lCQUVjLENBQUM7MkJBQ0MsS0FBSzsyQkFDTCxJQUFJO2lDQUNFLEtBQUs7dUNBQ0MsS0FBSzsyQkFDakI7WUFDWixLQUFLLEVBQUUsYUFBYTtZQUNwQixJQUFJLEVBQUUsWUFBWTtZQUNsQixPQUFPLEVBQUUsZUFBZTtZQUN4QixPQUFPLEVBQUUsZUFBZTtTQUN6Qjs7OEJBR2dCLEtBQUs7MkJBQ1IsS0FBSzt1QkFFVCxJQUFJOytCQUNJLElBQUk7MEJBQ1QsS0FBSzsyQkFDSixLQUFLOzBCQUNOLE9BQU87NkJBQ0osaUJBQWlCOzBCQUNwQixhQUFhOzRCQUNYLGVBQWU7c0JBQ3JCLFNBQVM7d0JBQ1AsR0FBRzs0QkFDQyxJQUFJOzhCQUNGLEtBQUs7aUNBQzJCLFlBQVk7OzhCQWpDL0Q7SUFrQ0MsQ0FBQTtBQS9CRCwrQkErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0R2xvYmFsQ29uZmlnIGltcGxlbWVudHMgR2xvYmFsQ29uZmlnIHtcclxuICAvLyBHbG9iYWxcclxuICBtYXhPcGVuZWQgPSAwO1xyXG4gIGF1dG9EaXNtaXNzID0gZmFsc2U7XHJcbiAgbmV3ZXN0T25Ub3AgPSB0cnVlO1xyXG4gIHByZXZlbnREdXBsaWNhdGVzID0gZmFsc2U7XHJcbiAgcmVzZXRUaW1lb3V0T25EdXBsaWNhdGUgPSBmYWxzZTtcclxuICBpY29uQ2xhc3NlcyA9IHtcclxuICAgIGVycm9yOiAndG9hc3QtZXJyb3InLFxyXG4gICAgaW5mbzogJ3RvYXN0LWluZm8nLFxyXG4gICAgc3VjY2VzczogJ3RvYXN0LXN1Y2Nlc3MnLFxyXG4gICAgd2FybmluZzogJ3RvYXN0LXdhcm5pbmcnXHJcbiAgfTtcclxuXHJcbiAgLy8gSW5kaXZpZHVhbFxyXG4gIHRvYXN0Q29tcG9uZW50ID0gVG9hc3Q7XHJcbiAgY2xvc2VCdXR0b24gPSBmYWxzZTtcclxuICBkaXNhYmxlVGltZU91dDogZmFsc2U7XHJcbiAgdGltZU91dCA9IDUwMDA7XHJcbiAgZXh0ZW5kZWRUaW1lT3V0ID0gMTAwMDtcclxuICBlbmFibGVIdG1sID0gZmFsc2U7XHJcbiAgcHJvZ3Jlc3NCYXIgPSBmYWxzZTtcclxuICB0b2FzdENsYXNzID0gJ3RvYXN0JztcclxuICBwb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XHJcbiAgdGl0bGVDbGFzcyA9ICd0b2FzdC10aXRsZSc7XHJcbiAgbWVzc2FnZUNsYXNzID0gJ3RvYXN0LW1lc3NhZ2UnO1xyXG4gIGVhc2luZyA9ICdlYXNlLWluJztcclxuICBlYXNlVGltZSA9IDMwMDtcclxuICB0YXBUb0Rpc21pc3MgPSB0cnVlO1xyXG4gIG9uQWN0aXZhdGVUaWNrID0gZmFsc2U7XHJcbiAgcHJvZ3Jlc3NBbmltYXRpb246ICdkZWNyZWFzaW5nJyB8ICdpbmNyZWFzaW5nJyA9ICdkZWNyZWFzaW5nJztcclxufVxyXG4iXX0=