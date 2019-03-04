/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
export class OverlayRef {
    /**
     * @param {?} _portalHost
     */
    constructor(_portalHost) {
        this._portalHost = _portalHost;
    }
    /**
     * @param {?} portal
     * @param {?=} newestOnTop
     * @return {?}
     */
    attach(portal, newestOnTop = true) {
        return this._portalHost.attach(portal, newestOnTop);
    }
    /**
     * Detaches an overlay from a portal.
     * @return {?} Resolves when the overlay has been detached.
     */
    detach() {
        return this._portalHost.detach();
    }
}
if (false) {
    /** @type {?} */
    OverlayRef.prototype._portalHost;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1yZWYuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG9hc3RyLyIsInNvdXJjZXMiOlsib3ZlcmxheS9vdmVybGF5LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU9BLE1BQU07Ozs7SUFDSixZQUFvQixXQUEyQjtRQUEzQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7S0FBSTs7Ozs7O0lBRW5ELE1BQU0sQ0FDSixNQUE0QixFQUM1QixjQUF1QixJQUFJO1FBRTNCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0tBQ3JEOzs7OztJQU1ELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDbEM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlUG9ydGFsSG9zdCwgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnLi4vcG9ydGFsL3BvcnRhbCc7XHJcblxyXG4vKipcclxuICogUmVmZXJlbmNlIHRvIGFuIG92ZXJsYXkgdGhhdCBoYXMgYmVlbiBjcmVhdGVkIHdpdGggdGhlIE92ZXJsYXkgc2VydmljZS5cclxuICogVXNlZCB0byBtYW5pcHVsYXRlIG9yIGRpc3Bvc2Ugb2Ygc2FpZCBvdmVybGF5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlSZWYge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BvcnRhbEhvc3Q6IEJhc2VQb3J0YWxIb3N0KSB7fVxyXG5cclxuICBhdHRhY2goXHJcbiAgICBwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxhbnk+LFxyXG4gICAgbmV3ZXN0T25Ub3A6IGJvb2xlYW4gPSB0cnVlLFxyXG4gICk6IENvbXBvbmVudFJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9wb3J0YWxIb3N0LmF0dGFjaChwb3J0YWwsIG5ld2VzdE9uVG9wKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGFjaGVzIGFuIG92ZXJsYXkgZnJvbSBhIHBvcnRhbC5cclxuICAgKiBAcmV0dXJucyBSZXNvbHZlcyB3aGVuIHRoZSBvdmVybGF5IGhhcyBiZWVuIGRldGFjaGVkLlxyXG4gICAqL1xyXG4gIGRldGFjaCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wb3J0YWxIb3N0LmRldGFjaCgpO1xyXG4gIH1cclxufVxyXG4iXX0=