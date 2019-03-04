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
export class ToastPackage {
    /**
     * @param {?} toastId
     * @param {?} config
     * @param {?} message
     * @param {?} title
     * @param {?} toastType
     * @param {?} toastRef
     */
    constructor(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
        this.toastRef.afterClosed().subscribe(() => {
            this._onAction.complete();
            this._onTap.complete();
        });
    }
    /**
     * Fired on click
     * @return {?}
     */
    triggerTap() {
        this._onTap.next();
        if (this.config.tapToDismiss) {
            this._onTap.complete();
        }
    }
    /**
     * @return {?}
     */
    onTap() {
        return this._onTap.asObservable();
    }
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    triggerAction(action) {
        this._onAction.next(action);
    }
    /**
     * @return {?}
     */
    onAction() {
        return this._onAction.asObservable();
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3RyLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b2FzdHIvIiwic291cmNlcyI6WyJ0b2FzdHIvdG9hc3RyLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0kzQyxNQUFNOzs7Ozs7Ozs7SUFJSixZQUNTLFNBQ0EsUUFDQSxTQUNBLE9BQ0EsV0FDQTtRQUxBLFlBQU8sR0FBUCxPQUFPO1FBQ1AsV0FBTSxHQUFOLE1BQU07UUFDTixZQUFPLEdBQVAsT0FBTztRQUNQLFVBQUssR0FBTCxLQUFLO1FBQ0wsY0FBUyxHQUFULFNBQVM7UUFDVCxhQUFRLEdBQVIsUUFBUTtzQkFUQSxJQUFJLE9BQU8sRUFBTzt5QkFDZixJQUFJLE9BQU8sRUFBTztRQVVwQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hCLENBQUMsQ0FBQztLQUNKOzs7OztJQUdELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtLQUNGOzs7O0lBRUQsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNuQzs7Ozs7O0lBR0QsYUFBYSxDQUFDLE1BQVk7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDN0I7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3RDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICcuLi9wb3J0YWwvcG9ydGFsJztcclxuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LWluamVjdG9yJztcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciBhbiBpbmRpdmlkdWFsIHRvYXN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbmRpdmlkdWFsQ29uZmlnIHtcclxuICAvKipcclxuICAgKiBkaXNhYmxlIGJvdGggdGltZU91dCBhbmQgZXh0ZW5kZWRUaW1lT3V0XHJcbiAgICogZGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBkaXNhYmxlVGltZU91dDogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiB0b2FzdCB0aW1lIHRvIGxpdmUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICogZGVmYXVsdDogNTAwMFxyXG4gICAqL1xyXG4gIHRpbWVPdXQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiB0b2FzdCBzaG93IGNsb3NlIGJ1dHRvblxyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICovXHJcbiAgY2xvc2VCdXR0b246IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogdGltZSB0byBjbG9zZSBhZnRlciBhIHVzZXIgaG92ZXJzIG92ZXIgdG9hc3RcclxuICAgKiBkZWZhdWx0OiAxMDAwXHJcbiAgICovXHJcbiAgZXh0ZW5kZWRUaW1lT3V0OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogc2hvdyB0b2FzdCBwcm9ncmVzcyBiYXJcclxuICAgKiBkZWZhdWx0OiBmYWxzZVxyXG4gICAqL1xyXG4gIHByb2dyZXNzQmFyOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBjaGFuZ2VzIHRvYXN0IHByb2dyZXNzIGJhciBhbmltYXRpb25cclxuICAgKiBkZWZhdWx0OiBkZWNyZWFzaW5nXHJcbiAgICovXHJcbiAgcHJvZ3Jlc3NBbmltYXRpb24/OiAnaW5jcmVhc2luZycgfCAnZGVjcmVhc2luZyc7XHJcbiAgLyoqXHJcbiAgICogcmVuZGVyIGh0bWwgaW4gdG9hc3QgbWVzc2FnZSAocG9zc2libHkgdW5zYWZlKVxyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICovXHJcbiAgZW5hYmxlSHRtbDogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgY29tcG9uZW50XHJcbiAgICogZGVmYXVsdDogdG9hc3RcclxuICAgKi9cclxuICB0b2FzdENsYXNzOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IGNvbnRhaW5lclxyXG4gICAqIGRlZmF1bHQ6IHRvYXN0LXRvcC1yaWdodFxyXG4gICAqL1xyXG4gIHBvc2l0aW9uQ2xhc3M6IHN0cmluZztcclxuICAvKipcclxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgdGl0bGVcclxuICAgKiBkZWZhdWx0OiB0b2FzdC10aXRsZVxyXG4gICAqL1xyXG4gIHRpdGxlQ2xhc3M6IHN0cmluZztcclxuICAvKipcclxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgbWVzc2FnZVxyXG4gICAqIGRlZmF1bHQ6IHRvYXN0LW1lc3NhZ2VcclxuICAgKi9cclxuICBtZXNzYWdlQ2xhc3M6IHN0cmluZztcclxuICAvKipcclxuICAgKiBhbmltYXRpb24gZWFzaW5nIG9uIHRvYXN0XHJcbiAgICogZGVmYXVsdDogZWFzZS1pblxyXG4gICAqL1xyXG4gIGVhc2luZzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFuaW1hdGlvbiBlYXNlIHRpbWUgb24gdG9hc3RcclxuICAgKiBkZWZhdWx0OiAzMDBcclxuICAgKi9cclxuICBlYXNlVGltZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGNsaWNraW5nIG9uIHRvYXN0IGRpc21pc3NlcyBpdFxyXG4gICAqIGRlZmF1bHQ6IHRydWVcclxuICAgKi9cclxuICB0YXBUb0Rpc21pc3M6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQW5ndWxhciB0b2FzdCBjb21wb25lbnQgdG8gYmUgc2hvd25cclxuICAgKiBkZWZhdWx0OiBUb2FzdFxyXG4gICAqL1xyXG4gIHRvYXN0Q29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT47XHJcbiAgLyoqXHJcbiAgICogSGVscHMgc2hvdyB0b2FzdCBmcm9tIGEgd2Vic29ja2V0IG9yIGZyb20gZXZlbnQgb3V0c2lkZSBBbmd1bGFyXHJcbiAgICogZGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBvbkFjdGl2YXRlVGljazogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb2FzdHJJY29uQ2xhc3NlcyB7XHJcbiAgZXJyb3I6IHN0cmluZztcclxuICBpbmZvOiBzdHJpbmc7XHJcbiAgc3VjY2Vzczogc3RyaW5nO1xyXG4gIHdhcm5pbmc6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEdsb2JhbCBUb2FzdCBjb25maWd1cmF0aW9uXHJcbiAqIEluY2x1ZGVzIGFsbCBJbmRpdmlkdWFsQ29uZmlnXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbENvbmZpZyBleHRlbmRzIEluZGl2aWR1YWxDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIG1heCB0b2FzdHMgb3BlbmVkLiBUb2FzdHMgd2lsbCBiZSBxdWV1ZWRcclxuICAgKiBaZXJvIGlzIHVubGltaXRlZFxyXG4gICAqIGRlZmF1bHQ6IDBcclxuICAgKi9cclxuICBtYXhPcGVuZWQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBkaXNtaXNzIGN1cnJlbnQgdG9hc3Qgd2hlbiBtYXggaXMgcmVhY2hlZFxyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICovXHJcbiAgYXV0b0Rpc21pc3M6IGJvb2xlYW47XHJcbiAgaWNvbkNsYXNzZXM6IFBhcnRpYWw8VG9hc3RySWNvbkNsYXNzZXM+O1xyXG4gIC8qKlxyXG4gICAqIE5ldyB0b2FzdCBwbGFjZW1lbnRcclxuICAgKiBkZWZhdWx0OiB0cnVlXHJcbiAgICovXHJcbiAgbmV3ZXN0T25Ub3A6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogYmxvY2sgZHVwbGljYXRlIG1lc3NhZ2VzXHJcbiAgICogZGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBwcmV2ZW50RHVwbGljYXRlczogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgdG9hc3QgdGltZW91dCB3aGVuIHRoZXJlJ3MgYSBkdXBsaWNhdGUgKHByZXZlbnREdXBsaWNhdGVzIG5lZWRzIHRvIGJlIHNldCB0byB0cnVlKVxyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICovXHJcbiAgcmVzZXRUaW1lb3V0T25EdXBsaWNhdGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFdmVyeXRoaW5nIGEgdG9hc3QgbmVlZHMgdG8gbGF1bmNoXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVG9hc3RQYWNrYWdlIHtcclxuICBwcml2YXRlIF9vblRhcCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwcml2YXRlIF9vbkFjdGlvbiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdG9hc3RJZDogbnVtYmVyLFxyXG4gICAgcHVibGljIGNvbmZpZzogSW5kaXZpZHVhbENvbmZpZyxcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgfCBTYWZlSHRtbCB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIHB1YmxpYyB0b2FzdFR5cGU6IHN0cmluZyxcclxuICAgIHB1YmxpYyB0b2FzdFJlZjogVG9hc3RSZWY8YW55PlxyXG4gICkge1xyXG4gICAgdGhpcy50b2FzdFJlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX29uQWN0aW9uLmNvbXBsZXRlKCk7XHJcbiAgICAgIHRoaXMuX29uVGFwLmNvbXBsZXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBGaXJlZCBvbiBjbGljayAqL1xyXG4gIHRyaWdnZXJUYXAoKSB7XHJcbiAgICB0aGlzLl9vblRhcC5uZXh0KCk7XHJcbiAgICBpZiAodGhpcy5jb25maWcudGFwVG9EaXNtaXNzKSB7XHJcbiAgICAgIHRoaXMuX29uVGFwLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRhcCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29uVGFwLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIGF2YWlsYWJsZSBmb3IgdXNlIGluIGN1c3RvbSB0b2FzdCAqL1xyXG4gIHRyaWdnZXJBY3Rpb24oYWN0aW9uPzogYW55KSB7XHJcbiAgICB0aGlzLl9vbkFjdGlvbi5uZXh0KGFjdGlvbik7XHJcbiAgfVxyXG5cclxuICBvbkFjdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29uQWN0aW9uLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxufVxyXG5cclxuLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHktaW50ZXJmYWNlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsVG9hc3RyQ29uZmlnIGV4dGVuZHMgR2xvYmFsQ29uZmlnIHt9XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5kaXZpZHVhbFRvYXN0ckNvbmZpZyBleHRlbmRzIEluZGl2aWR1YWxDb25maWcge31cclxuZXhwb3J0IGludGVyZmFjZSBUb2FzdHJDb25maWcgZXh0ZW5kcyBJbmRpdmlkdWFsQ29uZmlnIHt9XHJcbiJdfQ==