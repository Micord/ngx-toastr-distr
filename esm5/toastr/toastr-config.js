/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * Configuration for an individual toast.
 * @record
 */
export function IndividualConfig() { }
/**
 * disable both timeOut and extendedTimeOut
 * default: false
 * @type {?}
 */
IndividualConfig.prototype.disableTimeOut;
/**
 * toast time to live in milliseconds
 * default: 5000
 * @type {?}
 */
IndividualConfig.prototype.timeOut;
/**
 * toast show close button
 * default: false
 * @type {?}
 */
IndividualConfig.prototype.closeButton;
/**
 * time to close after a user hovers over toast
 * default: 1000
 * @type {?}
 */
IndividualConfig.prototype.extendedTimeOut;
/**
 * show toast progress bar
 * default: false
 * @type {?}
 */
IndividualConfig.prototype.progressBar;
/**
 * changes toast progress bar animation
 * default: decreasing
 * @type {?|undefined}
 */
IndividualConfig.prototype.progressAnimation;
/**
 * render html in toast message (possibly unsafe)
 * default: false
 * @type {?}
 */
IndividualConfig.prototype.enableHtml;
/**
 * css class on toast component
 * default: toast
 * @type {?}
 */
IndividualConfig.prototype.toastClass;
/**
 * css class on toast container
 * default: toast-top-right
 * @type {?}
 */
IndividualConfig.prototype.positionClass;
/**
 * css class on toast title
 * default: toast-title
 * @type {?}
 */
IndividualConfig.prototype.titleClass;
/**
 * css class on toast message
 * default: toast-message
 * @type {?}
 */
IndividualConfig.prototype.messageClass;
/**
 * animation easing on toast
 * default: ease-in
 * @type {?}
 */
IndividualConfig.prototype.easing;
/**
 * animation ease time on toast
 * default: 300
 * @type {?}
 */
IndividualConfig.prototype.easeTime;
/**
 * clicking on toast dismisses it
 * default: true
 * @type {?}
 */
IndividualConfig.prototype.tapToDismiss;
/**
 * Angular toast component to be shown
 * default: Toast
 * @type {?}
 */
IndividualConfig.prototype.toastComponent;
/**
 * Helps show toast from a websocket or from event outside Angular
 * default: false
 * @type {?}
 */
IndividualConfig.prototype.onActivateTick;
/**
 * @record
 */
export function ToastrIconClasses() { }
/** @type {?} */
ToastrIconClasses.prototype.error;
/** @type {?} */
ToastrIconClasses.prototype.info;
/** @type {?} */
ToastrIconClasses.prototype.success;
/** @type {?} */
ToastrIconClasses.prototype.warning;
/**
 * Global Toast configuration
 * Includes all IndividualConfig
 * @record
 */
export function GlobalConfig() { }
/**
 * max toasts opened. Toasts will be queued
 * Zero is unlimited
 * default: 0
 * @type {?}
 */
GlobalConfig.prototype.maxOpened;
/**
 * dismiss current toast when max is reached
 * default: false
 * @type {?}
 */
GlobalConfig.prototype.autoDismiss;
/** @type {?} */
GlobalConfig.prototype.iconClasses;
/**
 * New toast placement
 * default: true
 * @type {?}
 */
GlobalConfig.prototype.newestOnTop;
/**
 * block duplicate messages
 * default: false
 * @type {?}
 */
GlobalConfig.prototype.preventDuplicates;
/**
 * Reset toast timeout when there's a duplicate (preventDuplicates needs to be set to true)
 * default: false
 * @type {?}
 */
GlobalConfig.prototype.resetTimeoutOnDuplicate;
/**
 * Everything a toast needs to launch
 */
var /**
 * Everything a toast needs to launch
 */
ToastPackage = /** @class */ (function () {
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        var _this = this;
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
        this.toastRef.afterClosed().subscribe(function () {
            _this._onAction.complete();
            _this._onTap.complete();
        });
    }
    /** Fired on click */
    /**
     * Fired on click
     * @return {?}
     */
    ToastPackage.prototype.triggerTap = /**
     * Fired on click
     * @return {?}
     */
    function () {
        this._onTap.next();
        if (this.config.tapToDismiss) {
            this._onTap.complete();
        }
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onTap = /**
     * @return {?}
     */
    function () {
        return this._onTap.asObservable();
    };
    /** available for use in custom toast */
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    ToastPackage.prototype.triggerAction = /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        this._onAction.next(action);
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onAction = /**
     * @return {?}
     */
    function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());
/**
 * Everything a toast needs to launch
 */
export { ToastPackage };
if (false) {
    /** @type {?} */
    ToastPackage.prototype._onTap;
    /** @type {?} */
    ToastPackage.prototype._onAction;
    /** @type {?} */
    ToastPackage.prototype.toastId;
    /** @type {?} */
    ToastPackage.prototype.config;
    /** @type {?} */
    ToastPackage.prototype.message;
    /** @type {?} */
    ToastPackage.prototype.title;
    /** @type {?} */
    ToastPackage.prototype.toastType;
    /** @type {?} */
    ToastPackage.prototype.toastRef;
}
/**
 * @record
 */
export function GlobalToastrConfig() { }
/**
 * @record
 */
export function IndividualToastrConfig() { }
/**
 * @record
 */
export function ToastrConfig() { }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b2FzdHIvIiwic291cmNlcyI6WyJ0b2FzdHIvdG9hc3RyLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0kzQzs7O0FBQUE7SUFJRSxzQkFDUyxTQUNBLFFBQ0EsU0FDQSxPQUNBLFdBQ0E7UUFOVCxpQkFZQztRQVhRLFlBQU8sR0FBUCxPQUFPO1FBQ1AsV0FBTSxHQUFOLE1BQU07UUFDTixZQUFPLEdBQVAsT0FBTztRQUNQLFVBQUssR0FBTCxLQUFLO1FBQ0wsY0FBUyxHQUFULFNBQVM7UUFDVCxhQUFRLEdBQVIsUUFBUTtzQkFUQSxJQUFJLE9BQU8sRUFBTzt5QkFDZixJQUFJLE9BQU8sRUFBTztRQVVwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxxQkFBcUI7Ozs7O0lBQ3JCLGlDQUFVOzs7O0lBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtLQUNGOzs7O0lBRUQsNEJBQUs7OztJQUFMO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ25DO0lBRUQsd0NBQXdDOzs7Ozs7SUFDeEMsb0NBQWE7Ozs7O0lBQWIsVUFBYyxNQUFZO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzdCOzs7O0lBRUQsK0JBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3RDO3VCQTlLSDtJQStLQyxDQUFBOzs7O0FBdENELHdCQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xyXG5pbXBvcnQgeyBUb2FzdFJlZiB9IGZyb20gJy4vdG9hc3QtaW5qZWN0b3InO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGFuIGluZGl2aWR1YWwgdG9hc3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEluZGl2aWR1YWxDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIGRpc2FibGUgYm90aCB0aW1lT3V0IGFuZCBleHRlbmRlZFRpbWVPdXRcclxuICAgKiBkZWZhdWx0OiBmYWxzZVxyXG4gICAqL1xyXG4gIGRpc2FibGVUaW1lT3V0OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIHRvYXN0IHRpbWUgdG8gbGl2ZSBpbiBtaWxsaXNlY29uZHNcclxuICAgKiBkZWZhdWx0OiA1MDAwXHJcbiAgICovXHJcbiAgdGltZU91dDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIHRvYXN0IHNob3cgY2xvc2UgYnV0dG9uXHJcbiAgICogZGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBjbG9zZUJ1dHRvbjogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiB0aW1lIHRvIGNsb3NlIGFmdGVyIGEgdXNlciBob3ZlcnMgb3ZlciB0b2FzdFxyXG4gICAqIGRlZmF1bHQ6IDEwMDBcclxuICAgKi9cclxuICBleHRlbmRlZFRpbWVPdXQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBzaG93IHRvYXN0IHByb2dyZXNzIGJhclxyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICovXHJcbiAgcHJvZ3Jlc3NCYXI6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIGNoYW5nZXMgdG9hc3QgcHJvZ3Jlc3MgYmFyIGFuaW1hdGlvblxyXG4gICAqIGRlZmF1bHQ6IGRlY3JlYXNpbmdcclxuICAgKi9cclxuICBwcm9ncmVzc0FuaW1hdGlvbj86ICdpbmNyZWFzaW5nJyB8ICdkZWNyZWFzaW5nJztcclxuICAvKipcclxuICAgKiByZW5kZXIgaHRtbCBpbiB0b2FzdCBtZXNzYWdlIChwb3NzaWJseSB1bnNhZmUpXHJcbiAgICogZGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBlbmFibGVIdG1sOiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIGNzcyBjbGFzcyBvbiB0b2FzdCBjb21wb25lbnRcclxuICAgKiBkZWZhdWx0OiB0b2FzdFxyXG4gICAqL1xyXG4gIHRvYXN0Q2xhc3M6IHN0cmluZztcclxuICAvKipcclxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgY29udGFpbmVyXHJcbiAgICogZGVmYXVsdDogdG9hc3QtdG9wLXJpZ2h0XHJcbiAgICovXHJcbiAgcG9zaXRpb25DbGFzczogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGNzcyBjbGFzcyBvbiB0b2FzdCB0aXRsZVxyXG4gICAqIGRlZmF1bHQ6IHRvYXN0LXRpdGxlXHJcbiAgICovXHJcbiAgdGl0bGVDbGFzczogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGNzcyBjbGFzcyBvbiB0b2FzdCBtZXNzYWdlXHJcbiAgICogZGVmYXVsdDogdG9hc3QtbWVzc2FnZVxyXG4gICAqL1xyXG4gIG1lc3NhZ2VDbGFzczogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFuaW1hdGlvbiBlYXNpbmcgb24gdG9hc3RcclxuICAgKiBkZWZhdWx0OiBlYXNlLWluXHJcbiAgICovXHJcbiAgZWFzaW5nOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYW5pbWF0aW9uIGVhc2UgdGltZSBvbiB0b2FzdFxyXG4gICAqIGRlZmF1bHQ6IDMwMFxyXG4gICAqL1xyXG4gIGVhc2VUaW1lOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogY2xpY2tpbmcgb24gdG9hc3QgZGlzbWlzc2VzIGl0XHJcbiAgICogZGVmYXVsdDogdHJ1ZVxyXG4gICAqL1xyXG4gIHRhcFRvRGlzbWlzczogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBBbmd1bGFyIHRvYXN0IGNvbXBvbmVudCB0byBiZSBzaG93blxyXG4gICAqIGRlZmF1bHQ6IFRvYXN0XHJcbiAgICovXHJcbiAgdG9hc3RDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8YW55PjtcclxuICAvKipcclxuICAgKiBIZWxwcyBzaG93IHRvYXN0IGZyb20gYSB3ZWJzb2NrZXQgb3IgZnJvbSBldmVudCBvdXRzaWRlIEFuZ3VsYXJcclxuICAgKiBkZWZhdWx0OiBmYWxzZVxyXG4gICAqL1xyXG4gIG9uQWN0aXZhdGVUaWNrOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0ckljb25DbGFzc2VzIHtcclxuICBlcnJvcjogc3RyaW5nO1xyXG4gIGluZm86IHN0cmluZztcclxuICBzdWNjZXNzOiBzdHJpbmc7XHJcbiAgd2FybmluZzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogR2xvYmFsIFRvYXN0IGNvbmZpZ3VyYXRpb25cclxuICogSW5jbHVkZXMgYWxsIEluZGl2aWR1YWxDb25maWdcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsQ29uZmlnIGV4dGVuZHMgSW5kaXZpZHVhbENvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogbWF4IHRvYXN0cyBvcGVuZWQuIFRvYXN0cyB3aWxsIGJlIHF1ZXVlZFxyXG4gICAqIFplcm8gaXMgdW5saW1pdGVkXHJcbiAgICogZGVmYXVsdDogMFxyXG4gICAqL1xyXG4gIG1heE9wZW5lZDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGRpc21pc3MgY3VycmVudCB0b2FzdCB3aGVuIG1heCBpcyByZWFjaGVkXHJcbiAgICogZGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBhdXRvRGlzbWlzczogYm9vbGVhbjtcclxuICBpY29uQ2xhc3NlczogUGFydGlhbDxUb2FzdHJJY29uQ2xhc3Nlcz47XHJcbiAgLyoqXHJcbiAgICogTmV3IHRvYXN0IHBsYWNlbWVudFxyXG4gICAqIGRlZmF1bHQ6IHRydWVcclxuICAgKi9cclxuICBuZXdlc3RPblRvcDogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBibG9jayBkdXBsaWNhdGUgbWVzc2FnZXNcclxuICAgKiBkZWZhdWx0OiBmYWxzZVxyXG4gICAqL1xyXG4gIHByZXZlbnREdXBsaWNhdGVzOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBSZXNldCB0b2FzdCB0aW1lb3V0IHdoZW4gdGhlcmUncyBhIGR1cGxpY2F0ZSAocHJldmVudER1cGxpY2F0ZXMgbmVlZHMgdG8gYmUgc2V0IHRvIHRydWUpXHJcbiAgICogZGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICByZXNldFRpbWVvdXRPbkR1cGxpY2F0ZTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEV2ZXJ5dGhpbmcgYSB0b2FzdCBuZWVkcyB0byBsYXVuY2hcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUb2FzdFBhY2thZ2Uge1xyXG4gIHByaXZhdGUgX29uVGFwID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIHByaXZhdGUgX29uQWN0aW9uID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyB0b2FzdElkOiBudW1iZXIsXHJcbiAgICBwdWJsaWMgY29uZmlnOiBJbmRpdmlkdWFsQ29uZmlnLFxyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyB8IFNhZmVIdG1sIHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgcHVibGljIHRvYXN0VHlwZTogc3RyaW5nLFxyXG4gICAgcHVibGljIHRvYXN0UmVmOiBUb2FzdFJlZjxhbnk+XHJcbiAgKSB7XHJcbiAgICB0aGlzLnRvYXN0UmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5fb25BY3Rpb24uY29tcGxldGUoKTtcclxuICAgICAgdGhpcy5fb25UYXAuY29tcGxldGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZpcmVkIG9uIGNsaWNrICovXHJcbiAgdHJpZ2dlclRhcCgpIHtcclxuICAgIHRoaXMuX29uVGFwLm5leHQoKTtcclxuICAgIGlmICh0aGlzLmNvbmZpZy50YXBUb0Rpc21pc3MpIHtcclxuICAgICAgdGhpcy5fb25UYXAuY29tcGxldGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVGFwKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb25UYXAuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICAvKiogYXZhaWxhYmxlIGZvciB1c2UgaW4gY3VzdG9tIHRvYXN0ICovXHJcbiAgdHJpZ2dlckFjdGlvbihhY3Rpb24/OiBhbnkpIHtcclxuICAgIHRoaXMuX29uQWN0aW9uLm5leHQoYWN0aW9uKTtcclxuICB9XHJcblxyXG4gIG9uQWN0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb25BY3Rpb24uYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1lbXB0eS1pbnRlcmZhY2UgKi9cclxuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxUb2FzdHJDb25maWcgZXh0ZW5kcyBHbG9iYWxDb25maWcge31cclxuZXhwb3J0IGludGVyZmFjZSBJbmRpdmlkdWFsVG9hc3RyQ29uZmlnIGV4dGVuZHMgSW5kaXZpZHVhbENvbmZpZyB7fVxyXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0ckNvbmZpZyBleHRlbmRzIEluZGl2aWR1YWxDb25maWcge31cclxuIl19