/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Toast } from './toast.component';
export class DefaultGlobalConfig {
    constructor() {
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
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG9hc3RyLyIsInNvdXJjZXMiOlsidG9hc3RyL2RlZmF1bHQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHMUMsTUFBTTs7O3lCQUVRLENBQUM7MkJBQ0MsS0FBSzsyQkFDTCxJQUFJO2lDQUNFLEtBQUs7dUNBQ0MsS0FBSzsyQkFDakI7WUFDWixLQUFLLEVBQUUsYUFBYTtZQUNwQixJQUFJLEVBQUUsWUFBWTtZQUNsQixPQUFPLEVBQUUsZUFBZTtZQUN4QixPQUFPLEVBQUUsZUFBZTtTQUN6Qjs7OEJBR2dCLEtBQUs7MkJBQ1IsS0FBSzt1QkFFVCxJQUFJOytCQUNJLElBQUk7MEJBQ1QsS0FBSzsyQkFDSixLQUFLOzBCQUNOLE9BQU87NkJBQ0osaUJBQWlCOzBCQUNwQixhQUFhOzRCQUNYLGVBQWU7c0JBQ3JCLFNBQVM7d0JBQ1AsR0FBRzs0QkFDQyxJQUFJOzhCQUNGLEtBQUs7aUNBQzJCLFlBQVk7O0NBQzlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9hc3QgfSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdsb2JhbENvbmZpZyB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdEdsb2JhbENvbmZpZyBpbXBsZW1lbnRzIEdsb2JhbENvbmZpZyB7XHJcbiAgLy8gR2xvYmFsXHJcbiAgbWF4T3BlbmVkID0gMDtcclxuICBhdXRvRGlzbWlzcyA9IGZhbHNlO1xyXG4gIG5ld2VzdE9uVG9wID0gdHJ1ZTtcclxuICBwcmV2ZW50RHVwbGljYXRlcyA9IGZhbHNlO1xyXG4gIHJlc2V0VGltZW91dE9uRHVwbGljYXRlID0gZmFsc2U7XHJcbiAgaWNvbkNsYXNzZXMgPSB7XHJcbiAgICBlcnJvcjogJ3RvYXN0LWVycm9yJyxcclxuICAgIGluZm86ICd0b2FzdC1pbmZvJyxcclxuICAgIHN1Y2Nlc3M6ICd0b2FzdC1zdWNjZXNzJyxcclxuICAgIHdhcm5pbmc6ICd0b2FzdC13YXJuaW5nJ1xyXG4gIH07XHJcblxyXG4gIC8vIEluZGl2aWR1YWxcclxuICB0b2FzdENvbXBvbmVudCA9IFRvYXN0O1xyXG4gIGNsb3NlQnV0dG9uID0gZmFsc2U7XHJcbiAgZGlzYWJsZVRpbWVPdXQ6IGZhbHNlO1xyXG4gIHRpbWVPdXQgPSA1MDAwO1xyXG4gIGV4dGVuZGVkVGltZU91dCA9IDEwMDA7XHJcbiAgZW5hYmxlSHRtbCA9IGZhbHNlO1xyXG4gIHByb2dyZXNzQmFyID0gZmFsc2U7XHJcbiAgdG9hc3RDbGFzcyA9ICd0b2FzdCc7XHJcbiAgcG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xyXG4gIHRpdGxlQ2xhc3MgPSAndG9hc3QtdGl0bGUnO1xyXG4gIG1lc3NhZ2VDbGFzcyA9ICd0b2FzdC1tZXNzYWdlJztcclxuICBlYXNpbmcgPSAnZWFzZS1pbic7XHJcbiAgZWFzZVRpbWUgPSAzMDA7XHJcbiAgdGFwVG9EaXNtaXNzID0gdHJ1ZTtcclxuICBvbkFjdGl2YXRlVGljayA9IGZhbHNlO1xyXG4gIHByb2dyZXNzQW5pbWF0aW9uOiAnZGVjcmVhc2luZycgfCAnaW5jcmVhc2luZycgPSAnZGVjcmVhc2luZyc7XHJcbn1cclxuIl19