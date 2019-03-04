(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/platform-browser'), require('@angular/animations'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-toastr', ['exports', '@angular/core', 'rxjs', '@angular/platform-browser', '@angular/animations', '@angular/common'], factory) :
    (factory((global['ngx-toastr'] = {}),global.ng.core,global.rxjs,global.ng.platformBrowser,global.ng.animations,global.ng.common));
}(this, (function (exports,core,rxjs,platformBrowser,animations,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToastContainerDirective = /** @class */ (function () {
        function ToastContainerDirective(el) {
            this.el = el;
        }
        /**
         * @return {?}
         */
        ToastContainerDirective.prototype.getContainerElement = /**
         * @return {?}
         */
            function () {
                return this.el.nativeElement;
            };
        ToastContainerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[toastContainer]',
                        exportAs: 'toastContainer',
                    },] }
        ];
        /** @nocollapse */
        ToastContainerDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return ToastContainerDirective;
    }());
    var ToastContainerModule = /** @class */ (function () {
        function ToastContainerModule() {
        }
        ToastContainerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ToastContainerDirective],
                        exports: [ToastContainerDirective],
                    },] }
        ];
        return ToastContainerModule;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Everything a toast needs to launch
     */
    var /**
     * Everything a toast needs to launch
     */ ToastPackage = /** @class */ (function () {
        function ToastPackage(toastId, config, message, title, toastType, toastRef) {
            var _this = this;
            this.toastId = toastId;
            this.config = config;
            this.message = message;
            this.title = title;
            this.toastType = toastType;
            this.toastRef = toastRef;
            this._onTap = new rxjs.Subject();
            this._onAction = new rxjs.Subject();
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
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     * @template T
     */
    var /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     * @template T
     */ ComponentPortal = /** @class */ (function () {
        function ComponentPortal(component, injector) {
            this.component = component;
            this.injector = injector;
        }
        /** Attach this portal to a host. */
        /**
         * Attach this portal to a host.
         * @param {?} host
         * @param {?} newestOnTop
         * @return {?}
         */
        ComponentPortal.prototype.attach = /**
         * Attach this portal to a host.
         * @param {?} host
         * @param {?} newestOnTop
         * @return {?}
         */
            function (host, newestOnTop) {
                this._attachedHost = host;
                return host.attach(this, newestOnTop);
            };
        /** Detach this portal from its host */
        /**
         * Detach this portal from its host
         * @return {?}
         */
        ComponentPortal.prototype.detach = /**
         * Detach this portal from its host
         * @return {?}
         */
            function () {
                /** @type {?} */
                var host = this._attachedHost;
                if (host) {
                    this._attachedHost = undefined;
                    return host.detach();
                }
            };
        Object.defineProperty(ComponentPortal.prototype, "isAttached", {
            /** Whether this portal is attached to a host. */
            get: /**
             * Whether this portal is attached to a host.
             * @return {?}
             */ function () {
                return this._attachedHost != null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Sets the PortalHost reference without performing `attach()`. This is used directly by
         * the PortalHost when it is performing an `attach()` or `detach()`.
         */
        /**
         * Sets the PortalHost reference without performing `attach()`. This is used directly by
         * the PortalHost when it is performing an `attach()` or `detach()`.
         * @param {?=} host
         * @return {?}
         */
        ComponentPortal.prototype.setAttachedHost = /**
         * Sets the PortalHost reference without performing `attach()`. This is used directly by
         * the PortalHost when it is performing an `attach()` or `detach()`.
         * @param {?=} host
         * @return {?}
         */
            function (host) {
                this._attachedHost = host;
            };
        return ComponentPortal;
    }());
    /**
     * Partial implementation of PortalHost that only deals with attaching a
     * ComponentPortal
     * @abstract
     */
    var /**
     * Partial implementation of PortalHost that only deals with attaching a
     * ComponentPortal
     * @abstract
     */ BasePortalHost = /** @class */ (function () {
        function BasePortalHost() {
        }
        /**
         * @param {?} portal
         * @param {?} newestOnTop
         * @return {?}
         */
        BasePortalHost.prototype.attach = /**
         * @param {?} portal
         * @param {?} newestOnTop
         * @return {?}
         */
            function (portal, newestOnTop) {
                this._attachedPortal = portal;
                return this.attachComponentPortal(portal, newestOnTop);
            };
        /**
         * @return {?}
         */
        BasePortalHost.prototype.detach = /**
         * @return {?}
         */
            function () {
                if (this._attachedPortal) {
                    this._attachedPortal.setAttachedHost();
                }
                this._attachedPortal = undefined;
                if (this._disposeFn) {
                    this._disposeFn();
                    this._disposeFn = undefined;
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        BasePortalHost.prototype.setDisposeFn = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._disposeFn = fn;
            };
        return BasePortalHost;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
     * application context.
     *
     * This is the only part of the portal core that directly touches the DOM.
     */
    var /**
     * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
     * application context.
     *
     * This is the only part of the portal core that directly touches the DOM.
     */ DomPortalHost = /** @class */ (function (_super) {
        __extends(DomPortalHost, _super);
        function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
            var _this = _super.call(this) || this;
            _this._hostDomElement = _hostDomElement;
            _this._componentFactoryResolver = _componentFactoryResolver;
            _this._appRef = _appRef;
            return _this;
        }
        /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @param portal Portal to be attached
         */
        /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @template T
         * @param {?} portal Portal to be attached
         * @param {?} newestOnTop
         * @return {?}
         */
        DomPortalHost.prototype.attachComponentPortal = /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @template T
         * @param {?} portal Portal to be attached
         * @param {?} newestOnTop
         * @return {?}
         */
            function (portal, newestOnTop) {
                var _this = this;
                /** @type {?} */
                var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
                /** @type {?} */
                var componentRef;
                // If the portal specifies a ViewContainerRef, we will use that as the attachment point
                // for the component (in terms of Angular's component tree, not rendering).
                // When the ViewContainerRef is missing, we use the factory to create the component directly
                // and then manually attach the ChangeDetector for that component to the application (which
                // happens automatically when using a ViewContainer).
                componentRef = componentFactory.create(portal.injector);
                // When creating a component outside of a ViewContainer, we need to manually register
                // its ChangeDetector with the application. This API is unfortunately not yet published
                // in Angular core. The change detector must also be deregistered when the component
                // is destroyed to prevent memory leaks.
                this._appRef.attachView(componentRef.hostView);
                this.setDisposeFn(function () {
                    _this._appRef.detachView(componentRef.hostView);
                    componentRef.destroy();
                });
                // At this point the component has been instantiated, so we move it to the location in the DOM
                // where we want it to be rendered.
                if (newestOnTop) {
                    this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
                }
                else {
                    this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
                }
                return componentRef;
            };
        /**
         * Gets the root HTMLElement for an instantiated component.
         * @param {?} componentRef
         * @return {?}
         */
        DomPortalHost.prototype._getComponentRootNode = /**
         * Gets the root HTMLElement for an instantiated component.
         * @param {?} componentRef
         * @return {?}
         */
            function (componentRef) {
                return /** @type {?} */ (( /** @type {?} */(componentRef.hostView)).rootNodes[0]);
            };
        return DomPortalHost;
    }(BasePortalHost));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */
    var /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */ OverlayRef = /** @class */ (function () {
        function OverlayRef(_portalHost) {
            this._portalHost = _portalHost;
        }
        /**
         * @param {?} portal
         * @param {?=} newestOnTop
         * @return {?}
         */
        OverlayRef.prototype.attach = /**
         * @param {?} portal
         * @param {?=} newestOnTop
         * @return {?}
         */
            function (portal, newestOnTop) {
                if (newestOnTop === void 0) {
                    newestOnTop = true;
                }
                return this._portalHost.attach(portal, newestOnTop);
            };
        /**
         * Detaches an overlay from a portal.
         * @returns Resolves when the overlay has been detached.
         */
        /**
         * Detaches an overlay from a portal.
         * @return {?} Resolves when the overlay has been detached.
         */
        OverlayRef.prototype.detach = /**
         * Detaches an overlay from a portal.
         * @return {?} Resolves when the overlay has been detached.
         */
            function () {
                return this._portalHost.detach();
            };
        return OverlayRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The OverlayContainer is the container in which all overlays will load.
     * It should be provided in the root component to ensure it is properly shared.
     */
    var /**
     * The OverlayContainer is the container in which all overlays will load.
     * It should be provided in the root component to ensure it is properly shared.
     */ OverlayContainer = /** @class */ (function () {
        function OverlayContainer() {
        }
        /**
         * This method returns the overlay container element.  It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @returns the container element
         */
        /**
         * This method returns the overlay container element.  It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @return {?} the container element
         */
        OverlayContainer.prototype.getContainerElement = /**
         * This method returns the overlay container element.  It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @return {?} the container element
         */
            function () {
                if (!this._containerElement) {
                    this._createContainer();
                }
                return this._containerElement;
            };
        /**
         * Create the overlay container element, which is simply a div
         * with the 'cdk-overlay-container' class on the document body.
         * @return {?}
         */
        OverlayContainer.prototype._createContainer = /**
         * Create the overlay container element, which is simply a div
         * with the 'cdk-overlay-container' class on the document body.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var container = document.createElement('div');
                container.classList.add('overlay-container');
                document.body.appendChild(container);
                this._containerElement = container;
            };
        return OverlayContainer;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
     * used as a low-level building building block for other components. Dialogs, tooltips, menus,
     * selects, etc. can all be built using overlays. The service should primarily be used by authors
     * of re-usable components rather than developers building end-user applications.
     *
     * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
     */
    var Overlay = /** @class */ (function () {
        function Overlay(_overlayContainer, _componentFactoryResolver, _appRef) {
            this._overlayContainer = _overlayContainer;
            this._componentFactoryResolver = _componentFactoryResolver;
            this._appRef = _appRef;
            this._paneElements = new Map();
        }
        /**
         * Creates an overlay.
         * @returns A reference to the created overlay.
         */
        /**
         * Creates an overlay.
         * @param {?=} positionClass
         * @param {?=} overlayContainer
         * @return {?} A reference to the created overlay.
         */
        Overlay.prototype.create = /**
         * Creates an overlay.
         * @param {?=} positionClass
         * @param {?=} overlayContainer
         * @return {?} A reference to the created overlay.
         */
            function (positionClass, overlayContainer) {
                // get existing pane if possible
                return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
            };
        /**
         * @param {?=} positionClass
         * @param {?=} overlayContainer
         * @return {?}
         */
        Overlay.prototype.getPaneElement = /**
         * @param {?=} positionClass
         * @param {?=} overlayContainer
         * @return {?}
         */
            function (positionClass, overlayContainer) {
                if (positionClass === void 0) {
                    positionClass = '';
                }
                if (!this._paneElements.get(overlayContainer)) {
                    this._paneElements.set(overlayContainer, {});
                }
                if (!this._paneElements.get(overlayContainer)[positionClass]) {
                    this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
                }
                return this._paneElements.get(overlayContainer)[positionClass];
            };
        /**
         * Creates the DOM element for an overlay and appends it to the overlay container.
         * @param {?} positionClass
         * @param {?=} overlayContainer
         * @return {?} Newly-created pane element
         */
        Overlay.prototype._createPaneElement = /**
         * Creates the DOM element for an overlay and appends it to the overlay container.
         * @param {?} positionClass
         * @param {?=} overlayContainer
         * @return {?} Newly-created pane element
         */
            function (positionClass, overlayContainer) {
                /** @type {?} */
                var pane = document.createElement('div');
                pane.id = 'toast-container';
                pane.classList.add(positionClass);
                pane.classList.add('toast-container');
                if (!overlayContainer) {
                    this._overlayContainer.getContainerElement().appendChild(pane);
                }
                else {
                    overlayContainer.getContainerElement().appendChild(pane);
                }
                return pane;
            };
        /**
         * Create a DomPortalHost into which the overlay content can be loaded.
         * @param {?} pane The DOM element to turn into a portal host.
         * @return {?} A portal host for the given DOM element.
         */
        Overlay.prototype._createPortalHost = /**
         * Create a DomPortalHost into which the overlay content can be loaded.
         * @param {?} pane The DOM element to turn into a portal host.
         * @return {?} A portal host for the given DOM element.
         */
            function (pane) {
                return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
            };
        /**
         * Creates an OverlayRef for an overlay in the given DOM element.
         * @param {?} pane DOM element for the overlay
         * @return {?}
         */
        Overlay.prototype._createOverlayRef = /**
         * Creates an OverlayRef for an overlay in the given DOM element.
         * @param {?} pane DOM element for the overlay
         * @return {?}
         */
            function (pane) {
                return new OverlayRef(this._createPortalHost(pane));
            };
        Overlay.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        Overlay.ctorParameters = function () {
            return [
                { type: OverlayContainer },
                { type: core.ComponentFactoryResolver },
                { type: core.ApplicationRef }
            ];
        };
        return Overlay;
    }());
    /** *
     * Providers for Overlay and its related injectables.
      @type {?} */
    var OVERLAY_PROVIDERS = [
        Overlay,
        OverlayContainer,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Reference to a toast opened via the Toastr service.
     * @template T
     */
    var /**
     * Reference to a toast opened via the Toastr service.
     * @template T
     */ ToastRef = /** @class */ (function () {
        function ToastRef(_overlayRef) {
            this._overlayRef = _overlayRef;
            /**
             * Subject for notifying the user that the toast has finished closing.
             */
            this._afterClosed = new rxjs.Subject();
            /**
             * triggered when toast is activated
             */
            this._activate = new rxjs.Subject();
            /**
             * notifies the toast that it should close before the timeout
             */
            this._manualClose = new rxjs.Subject();
            /**
             * notifies the toast that it should reset the timeouts
             */
            this._resetTimeout = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        ToastRef.prototype.manualClose = /**
         * @return {?}
         */
            function () {
                this._manualClose.next();
                this._manualClose.complete();
            };
        /**
         * @return {?}
         */
        ToastRef.prototype.manualClosed = /**
         * @return {?}
         */
            function () {
                return this._manualClose.asObservable();
            };
        /**
         * @return {?}
         */
        ToastRef.prototype.timeoutReset = /**
         * @return {?}
         */
            function () {
                return this._resetTimeout.asObservable();
            };
        /**
         * Close the toast.
         */
        /**
         * Close the toast.
         * @return {?}
         */
        ToastRef.prototype.close = /**
         * Close the toast.
         * @return {?}
         */
            function () {
                this._overlayRef.detach();
                this._afterClosed.next();
                this._manualClose.next();
                this._afterClosed.complete();
                this._manualClose.complete();
                this._activate.complete();
                this._resetTimeout.complete();
            };
        /** Gets an observable that is notified when the toast is finished closing. */
        /**
         * Gets an observable that is notified when the toast is finished closing.
         * @return {?}
         */
        ToastRef.prototype.afterClosed = /**
         * Gets an observable that is notified when the toast is finished closing.
         * @return {?}
         */
            function () {
                return this._afterClosed.asObservable();
            };
        /**
         * @return {?}
         */
        ToastRef.prototype.isInactive = /**
         * @return {?}
         */
            function () {
                return this._activate.isStopped;
            };
        /**
         * @return {?}
         */
        ToastRef.prototype.activate = /**
         * @return {?}
         */
            function () {
                this._activate.next();
                this._activate.complete();
            };
        /** Gets an observable that is notified when the toast has started opening. */
        /**
         * Gets an observable that is notified when the toast has started opening.
         * @return {?}
         */
        ToastRef.prototype.afterActivate = /**
         * Gets an observable that is notified when the toast has started opening.
         * @return {?}
         */
            function () {
                return this._activate.asObservable();
            };
        /** Reset the toast timouts */
        /**
         * Reset the toast timouts
         * @return {?}
         */
        ToastRef.prototype.resetTimeout = /**
         * Reset the toast timouts
         * @return {?}
         */
            function () {
                this._resetTimeout.next();
            };
        return ToastRef;
    }());
    /**
     * Custom injector type specifically for instantiating components with a toast.
     */
    var /**
     * Custom injector type specifically for instantiating components with a toast.
     */ ToastInjector = /** @class */ (function () {
        function ToastInjector(_toastPackage, _parentInjector) {
            this._toastPackage = _toastPackage;
            this._parentInjector = _parentInjector;
        }
        /* tslint:disable:deprecation */
        /**
         * @param {?} token
         * @param {?=} notFoundValue
         * @return {?}
         */
        ToastInjector.prototype.get = /**
         * @param {?} token
         * @param {?=} notFoundValue
         * @return {?}
         */
            function (token, notFoundValue) {
                if (token === ToastPackage && this._toastPackage) {
                    return this._toastPackage;
                }
                return this._parentInjector.get(token, notFoundValue);
            };
        return ToastInjector;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TOAST_CONFIG = new core.InjectionToken('ToastConfig');

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToastrService = /** @class */ (function () {
        function ToastrService(token, overlay, _injector, sanitizer, ngZone) {
            this.overlay = overlay;
            this._injector = _injector;
            this.sanitizer = sanitizer;
            this.ngZone = ngZone;
            this.currentlyActive = 0;
            this.toasts = [];
            this.index = 0;
            /** @type {?} */
            var defaultConfig = new token.defaults();
            this.toastrConfig = __assign({}, defaultConfig, token.config);
            this.toastrConfig.iconClasses = __assign({}, defaultConfig.iconClasses, token.config.iconClasses);
        }
        /** show toast */
        /**
         * show toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @param {?=} type
         * @return {?}
         */
        ToastrService.prototype.show = /**
         * show toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @param {?=} type
         * @return {?}
         */
            function (message, title, override, type) {
                if (override === void 0) {
                    override = {};
                }
                if (type === void 0) {
                    type = '';
                }
                return this._preBuildNotification(type, message, title, this.applyConfig(override));
            };
        /** show successful toast */
        /**
         * show successful toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
        ToastrService.prototype.success = /**
         * show successful toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
            function (message, title, override) {
                if (override === void 0) {
                    override = {};
                }
                /** @type {?} */
                var type = this.toastrConfig.iconClasses.success || '';
                return this._preBuildNotification(type, message, title, this.applyConfig(override));
            };
        /** show error toast */
        /**
         * show error toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
        ToastrService.prototype.error = /**
         * show error toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
            function (message, title, override) {
                if (override === void 0) {
                    override = {};
                }
                /** @type {?} */
                var type = this.toastrConfig.iconClasses.error || '';
                return this._preBuildNotification(type, message, title, this.applyConfig(override));
            };
        /** show info toast */
        /**
         * show info toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
        ToastrService.prototype.info = /**
         * show info toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
            function (message, title, override) {
                if (override === void 0) {
                    override = {};
                }
                /** @type {?} */
                var type = this.toastrConfig.iconClasses.info || '';
                return this._preBuildNotification(type, message, title, this.applyConfig(override));
            };
        /** show warning toast */
        /**
         * show warning toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
        ToastrService.prototype.warning = /**
         * show warning toast
         * @param {?=} message
         * @param {?=} title
         * @param {?=} override
         * @return {?}
         */
            function (message, title, override) {
                if (override === void 0) {
                    override = {};
                }
                /** @type {?} */
                var type = this.toastrConfig.iconClasses.warning || '';
                return this._preBuildNotification(type, message, title, this.applyConfig(override));
            };
        /**
         * Remove all or a single toast by id
         */
        /**
         * Remove all or a single toast by id
         * @param {?=} toastId
         * @return {?}
         */
        ToastrService.prototype.clear = /**
         * Remove all or a single toast by id
         * @param {?=} toastId
         * @return {?}
         */
            function (toastId) {
                var e_1, _a;
                try {
                    // Call every toastRef manualClose function
                    for (var _b = __values(this.toasts), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var toast = _c.value;
                        if (toastId !== undefined) {
                            if (toast.toastId === toastId) {
                                toast.toastRef.manualClose();
                                return;
                            }
                        }
                        else {
                            toast.toastRef.manualClose();
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * Remove and destroy a single toast by id
         */
        /**
         * Remove and destroy a single toast by id
         * @param {?} toastId
         * @return {?}
         */
        ToastrService.prototype.remove = /**
         * Remove and destroy a single toast by id
         * @param {?} toastId
         * @return {?}
         */
            function (toastId) {
                /** @type {?} */
                var found = this._findToast(toastId);
                if (!found) {
                    return false;
                }
                found.activeToast.toastRef.close();
                this.toasts.splice(found.index, 1);
                this.currentlyActive = this.currentlyActive - 1;
                if (!this.toastrConfig.maxOpened || !this.toasts.length) {
                    return false;
                }
                if (this.currentlyActive < this.toastrConfig.maxOpened &&
                    this.toasts[this.currentlyActive]) {
                    /** @type {?} */
                    var p = this.toasts[this.currentlyActive].toastRef;
                    if (!p.isInactive()) {
                        this.currentlyActive = this.currentlyActive + 1;
                        p.activate();
                    }
                }
                return true;
            };
        /**
         * Determines if toast message is already shown
         */
        /**
         * Determines if toast message is already shown
         * @param {?} message
         * @param {?} resetOnDuplicate
         * @return {?}
         */
        ToastrService.prototype.isDuplicate = /**
         * Determines if toast message is already shown
         * @param {?} message
         * @param {?} resetOnDuplicate
         * @return {?}
         */
            function (message, resetOnDuplicate) {
                for (var i = 0; i < this.toasts.length; i++) {
                    if (this.toasts[i].message === message) {
                        if (resetOnDuplicate &&
                            this.toasts[i].toastRef.componentInstance.resetTimeout) {
                            this.toasts[i].toastRef.resetTimeout();
                        }
                        return true;
                    }
                }
                return false;
            };
        /**
         * create a clone of global config and apply individual settings
         * @param {?=} override
         * @return {?}
         */
        ToastrService.prototype.applyConfig = /**
         * create a clone of global config and apply individual settings
         * @param {?=} override
         * @return {?}
         */
            function (override) {
                if (override === void 0) {
                    override = {};
                }
                return __assign({}, this.toastrConfig, override);
            };
        /**
         * Find toast object by id
         * @param {?} toastId
         * @return {?}
         */
        ToastrService.prototype._findToast = /**
         * Find toast object by id
         * @param {?} toastId
         * @return {?}
         */
            function (toastId) {
                for (var i = 0; i < this.toasts.length; i++) {
                    if (this.toasts[i].toastId === toastId) {
                        return { index: i, activeToast: this.toasts[i] };
                    }
                }
                return null;
            };
        /**
         * Determines the need to run inside angular's zone then builds the toast
         * @param {?} toastType
         * @param {?} message
         * @param {?} title
         * @param {?} config
         * @return {?}
         */
        ToastrService.prototype._preBuildNotification = /**
         * Determines the need to run inside angular's zone then builds the toast
         * @param {?} toastType
         * @param {?} message
         * @param {?} title
         * @param {?} config
         * @return {?}
         */
            function (toastType, message, title, config) {
                var _this = this;
                if (config.onActivateTick) {
                    return this.ngZone.run(function () {
                        return _this._buildNotification(toastType, message, title, config);
                    });
                }
                return this._buildNotification(toastType, message, title, config);
            };
        /**
         * Creates and attaches toast data to component
         * returns null if toast is duplicate and preventDuplicates == True
         * @param {?} toastType
         * @param {?} message
         * @param {?} title
         * @param {?} config
         * @return {?}
         */
        ToastrService.prototype._buildNotification = /**
         * Creates and attaches toast data to component
         * returns null if toast is duplicate and preventDuplicates == True
         * @param {?} toastType
         * @param {?} message
         * @param {?} title
         * @param {?} config
         * @return {?}
         */
            function (toastType, message, title, config) {
                var _this = this;
                if (!config.toastComponent) {
                    throw new Error('toastComponent required');
                }
                // max opened and auto dismiss = true
                if (message &&
                    this.toastrConfig.preventDuplicates &&
                    this.isDuplicate(message, this.toastrConfig.resetTimeoutOnDuplicate)) {
                    return null;
                }
                this.previousToastMessage = message;
                /** @type {?} */
                var keepInactive = false;
                if (this.toastrConfig.maxOpened &&
                    this.currentlyActive >= this.toastrConfig.maxOpened) {
                    keepInactive = true;
                    if (this.toastrConfig.autoDismiss) {
                        this.clear(this.toasts[0].toastId);
                    }
                }
                /** @type {?} */
                var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
                this.index = this.index + 1;
                /** @type {?} */
                var trustedMessage = message;
                if (message && config.enableHtml) {
                    trustedMessage = this.sanitizer.bypassSecurityTrustHtml(message);
                }
                /** @type {?} */
                var toastRef = new ToastRef(overlayRef);
                /** @type {?} */
                var toastPackage = new ToastPackage(this.index, config, trustedMessage, title, toastType, toastRef);
                /** @type {?} */
                var toastInjector = new ToastInjector(toastPackage, this._injector);
                /** @type {?} */
                var component = new ComponentPortal(config.toastComponent, toastInjector);
                /** @type {?} */
                var portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
                toastRef.componentInstance = ( /** @type {?} */(portal))._component;
                /** @type {?} */
                var ins = {
                    toastId: this.index,
                    message: message || '',
                    toastRef: toastRef,
                    onShown: toastRef.afterActivate(),
                    onHidden: toastRef.afterClosed(),
                    onTap: toastPackage.onTap(),
                    onAction: toastPackage.onAction(),
                    portal: portal
                };
                if (!keepInactive) {
                    setTimeout(function () {
                        ins.toastRef.activate();
                        _this.currentlyActive = _this.currentlyActive + 1;
                    });
                }
                this.toasts.push(ins);
                return ins;
            };
        ToastrService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ToastrService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [TOAST_CONFIG,] }] },
                { type: Overlay },
                { type: core.Injector },
                { type: platformBrowser.DomSanitizer },
                { type: core.NgZone }
            ];
        };
        return ToastrService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Toast = /** @class */ (function () {
        function Toast(toastrService, toastPackage, ngZone) {
            var _this = this;
            this.toastrService = toastrService;
            this.toastPackage = toastPackage;
            this.ngZone = ngZone;
            /**
             * width of progress bar
             */
            this.width = -1;
            /**
             * a combination of toast type and options.toastClass
             */
            this.toastClasses = '';
            /**
             * controls animation
             */
            this.state = {
                value: 'inactive',
                params: {
                    easeTime: this.toastPackage.config.easeTime,
                    easing: 'ease-in'
                }
            };
            this.message = toastPackage.message;
            this.title = toastPackage.title;
            this.options = toastPackage.config;
            this.originalTimeout = toastPackage.config.timeOut;
            this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
            this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
                _this.activateToast();
            });
            this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
                _this.remove();
            });
            this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
                _this.resetTimeout();
            });
        }
        /**
         * @return {?}
         */
        Toast.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.sub.unsubscribe();
                this.sub1.unsubscribe();
                this.sub2.unsubscribe();
                clearInterval(this.intervalId);
                clearTimeout(this.timeout);
            };
        /**
         * activates toast and sets timeout
         */
        /**
         * activates toast and sets timeout
         * @return {?}
         */
        Toast.prototype.activateToast = /**
         * activates toast and sets timeout
         * @return {?}
         */
            function () {
                var _this = this;
                this.state = __assign({}, this.state, { value: 'active' });
                if (!this.options.disableTimeOut && this.options.timeOut) {
                    this.outsideTimeout(function () { return _this.remove(); }, this.options.timeOut);
                    this.hideTime = new Date().getTime() + this.options.timeOut;
                    if (this.options.progressBar) {
                        this.outsideInterval(function () { return _this.updateProgress(); }, 10);
                    }
                }
            };
        /**
         * updates progress bar width
         */
        /**
         * updates progress bar width
         * @return {?}
         */
        Toast.prototype.updateProgress = /**
         * updates progress bar width
         * @return {?}
         */
            function () {
                if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
                    return;
                }
                /** @type {?} */
                var now = new Date().getTime();
                /** @type {?} */
                var remaining = this.hideTime - now;
                this.width = (remaining / this.options.timeOut) * 100;
                if (this.options.progressAnimation === 'increasing') {
                    this.width = 100 - this.width;
                }
                if (this.width <= 0) {
                    this.width = 0;
                }
                if (this.width >= 100) {
                    this.width = 100;
                }
            };
        /**
         * @return {?}
         */
        Toast.prototype.resetTimeout = /**
         * @return {?}
         */
            function () {
                var _this = this;
                clearTimeout(this.timeout);
                clearInterval(this.intervalId);
                this.state = __assign({}, this.state, { value: 'active' });
                this.outsideTimeout(function () { return _this.remove(); }, this.originalTimeout);
                this.options.timeOut = this.originalTimeout;
                this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
                this.width = -1;
                if (this.options.progressBar) {
                    this.outsideInterval(function () { return _this.updateProgress(); }, 10);
                }
            };
        /**
         * tells toastrService to remove this toast after animation time
         */
        /**
         * tells toastrService to remove this toast after animation time
         * @return {?}
         */
        Toast.prototype.remove = /**
         * tells toastrService to remove this toast after animation time
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.state.value === 'removed') {
                    return;
                }
                clearTimeout(this.timeout);
                this.state = __assign({}, this.state, { value: 'removed' });
                this.outsideTimeout(function () { return _this.toastrService.remove(_this.toastPackage.toastId); }, +this.toastPackage.config.easeTime);
            };
        /**
         * @return {?}
         */
        Toast.prototype.tapToast = /**
         * @return {?}
         */
            function () {
                if (this.state.value === 'removed') {
                    return;
                }
                this.toastPackage.triggerTap();
                if (this.options.tapToDismiss) {
                    this.remove();
                }
            };
        /**
         * @return {?}
         */
        Toast.prototype.stickAround = /**
         * @return {?}
         */
            function () {
                if (this.state.value === 'removed') {
                    return;
                }
                clearTimeout(this.timeout);
                this.options.timeOut = 0;
                this.hideTime = 0;
                // disable progressBar
                clearInterval(this.intervalId);
                this.width = 0;
            };
        /**
         * @return {?}
         */
        Toast.prototype.delayedHideToast = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.options.disableTimeOut ||
                    this.options.extendedTimeOut === 0 ||
                    this.state.value === 'removed') {
                    return;
                }
                this.outsideTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
                this.options.timeOut = this.options.extendedTimeOut;
                this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
                this.width = -1;
                if (this.options.progressBar) {
                    this.outsideInterval(function () { return _this.updateProgress(); }, 10);
                }
            };
        /**
         * @param {?} func
         * @param {?} timeout
         * @return {?}
         */
        Toast.prototype.outsideTimeout = /**
         * @param {?} func
         * @param {?} timeout
         * @return {?}
         */
            function (func, timeout) {
                var _this = this;
                if (this.ngZone) {
                    this.ngZone.runOutsideAngular(function () {
                        return (_this.timeout = setTimeout(function () { return _this.runInsideAngular(func); }, timeout));
                    });
                }
                else {
                    this.timeout = setTimeout(function () { return func(); }, timeout);
                }
            };
        /**
         * @param {?} func
         * @param {?} timeout
         * @return {?}
         */
        Toast.prototype.outsideInterval = /**
         * @param {?} func
         * @param {?} timeout
         * @return {?}
         */
            function (func, timeout) {
                var _this = this;
                if (this.ngZone) {
                    this.ngZone.runOutsideAngular(function () {
                        return (_this.intervalId = setInterval(function () { return _this.runInsideAngular(func); }, timeout));
                    });
                }
                else {
                    this.intervalId = setInterval(function () { return func(); }, timeout);
                }
            };
        /**
         * @param {?} func
         * @return {?}
         */
        Toast.prototype.runInsideAngular = /**
         * @param {?} func
         * @return {?}
         */
            function (func) {
                if (this.ngZone) {
                    this.ngZone.run(function () { return func(); });
                }
                else {
                    func();
                }
            };
        Toast.decorators = [
            { type: core.Component, args: [{
                        selector: '[toast-component]',
                        template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
                        animations: [
                            animations.trigger('flyInOut', [
                                animations.state('inactive', animations.style({
                                    display: 'none',
                                    opacity: 0
                                })),
                                animations.state('active', animations.style({})),
                                animations.state('removed', animations.style({ opacity: 0 })),
                                animations.transition('inactive => active', animations.animate('{{ easeTime }}ms {{ easing }}')),
                                animations.transition('active => removed', animations.animate('{{ easeTime }}ms {{ easing }}'))
                            ])
                        ],
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        Toast.ctorParameters = function () {
            return [
                { type: ToastrService },
                { type: ToastPackage },
                { type: core.NgZone }
            ];
        };
        Toast.propDecorators = {
            toastClasses: [{ type: core.HostBinding, args: ['class',] }],
            state: [{ type: core.HostBinding, args: ['@flyInOut',] }],
            tapToast: [{ type: core.HostListener, args: ['click',] }],
            stickAround: [{ type: core.HostListener, args: ['mouseenter',] }],
            delayedHideToast: [{ type: core.HostListener, args: ['mouseleave',] }]
        };
        return Toast;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
                if (config === void 0) {
                    config = {};
                }
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [Toast],
                        declarations: [Toast],
                        entryComponents: [Toast],
                    },] }
        ];
        /** @nocollapse */
        ToastrModule.ctorParameters = function () {
            return [
                { type: ToastrModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
            ];
        };
        return ToastrModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ToastNoAnimation = /** @class */ (function () {
        function ToastNoAnimation(toastrService, toastPackage, appRef) {
            var _this = this;
            this.toastrService = toastrService;
            this.toastPackage = toastPackage;
            this.appRef = appRef;
            /**
             * width of progress bar
             */
            this.width = -1;
            /**
             * a combination of toast type and options.toastClass
             */
            this.toastClasses = '';
            /**
             * controls animation
             */
            this.state = 'inactive';
            this.message = toastPackage.message;
            this.title = toastPackage.title;
            this.options = toastPackage.config;
            this.originalTimeout = toastPackage.config.timeOut;
            this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
            this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
                _this.activateToast();
            });
            this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
                _this.remove();
            });
            this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
                _this.resetTimeout();
            });
        }
        Object.defineProperty(ToastNoAnimation.prototype, "displayStyle", {
            get: /**
             * @return {?}
             */ function () {
                if (this.state === 'inactive') {
                    return 'none';
                }
                return 'inherit';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ToastNoAnimation.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.sub.unsubscribe();
                this.sub1.unsubscribe();
                this.sub2.unsubscribe();
                clearInterval(this.intervalId);
                clearTimeout(this.timeout);
            };
        /**
         * activates toast and sets timeout
         */
        /**
         * activates toast and sets timeout
         * @return {?}
         */
        ToastNoAnimation.prototype.activateToast = /**
         * activates toast and sets timeout
         * @return {?}
         */
            function () {
                var _this = this;
                this.state = 'active';
                if (!this.options.disableTimeOut && this.options.timeOut) {
                    this.timeout = setTimeout(function () {
                        _this.remove();
                    }, this.options.timeOut);
                    this.hideTime = new Date().getTime() + this.options.timeOut;
                    if (this.options.progressBar) {
                        this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
                    }
                }
                if (this.options.onActivateTick) {
                    this.appRef.tick();
                }
            };
        /**
         * updates progress bar width
         */
        /**
         * updates progress bar width
         * @return {?}
         */
        ToastNoAnimation.prototype.updateProgress = /**
         * updates progress bar width
         * @return {?}
         */
            function () {
                if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
                    return;
                }
                /** @type {?} */
                var now = new Date().getTime();
                /** @type {?} */
                var remaining = this.hideTime - now;
                this.width = (remaining / this.options.timeOut) * 100;
                if (this.options.progressAnimation === 'increasing') {
                    this.width = 100 - this.width;
                }
                if (this.width <= 0) {
                    this.width = 0;
                }
                if (this.width >= 100) {
                    this.width = 100;
                }
            };
        /**
         * @return {?}
         */
        ToastNoAnimation.prototype.resetTimeout = /**
         * @return {?}
         */
            function () {
                var _this = this;
                clearTimeout(this.timeout);
                clearInterval(this.intervalId);
                this.state = 'active';
                this.options.timeOut = this.originalTimeout;
                this.timeout = setTimeout(function () { return _this.remove(); }, this.originalTimeout);
                this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
                this.width = -1;
                if (this.options.progressBar) {
                    this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
                }
            };
        /**
         * tells toastrService to remove this toast after animation time
         */
        /**
         * tells toastrService to remove this toast after animation time
         * @return {?}
         */
        ToastNoAnimation.prototype.remove = /**
         * tells toastrService to remove this toast after animation time
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.state === 'removed') {
                    return;
                }
                clearTimeout(this.timeout);
                this.state = 'removed';
                this.timeout = setTimeout(function () {
                    return _this.toastrService.remove(_this.toastPackage.toastId);
                });
            };
        /**
         * @return {?}
         */
        ToastNoAnimation.prototype.tapToast = /**
         * @return {?}
         */
            function () {
                if (this.state === 'removed') {
                    return;
                }
                this.toastPackage.triggerTap();
                if (this.options.tapToDismiss) {
                    this.remove();
                }
            };
        /**
         * @return {?}
         */
        ToastNoAnimation.prototype.stickAround = /**
         * @return {?}
         */
            function () {
                if (this.state === 'removed') {
                    return;
                }
                clearTimeout(this.timeout);
                this.options.timeOut = 0;
                this.hideTime = 0;
                // disable progressBar
                clearInterval(this.intervalId);
                this.width = 0;
            };
        /**
         * @return {?}
         */
        ToastNoAnimation.prototype.delayedHideToast = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.options.disableTimeOut ||
                    this.options.extendedTimeOut === 0 ||
                    this.state === 'removed') {
                    return;
                }
                this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
                this.options.timeOut = this.options.extendedTimeOut;
                this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
                this.width = -1;
                if (this.options.progressBar) {
                    this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
                }
            };
        ToastNoAnimation.decorators = [
            { type: core.Component, args: [{
                        selector: '[toast-component]',
                        template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        ToastNoAnimation.ctorParameters = function () {
            return [
                { type: ToastrService },
                { type: ToastPackage },
                { type: core.ApplicationRef }
            ];
        };
        ToastNoAnimation.propDecorators = {
            toastClasses: [{ type: core.HostBinding, args: ['class',] }],
            displayStyle: [{ type: core.HostBinding, args: ['style.display',] }],
            tapToast: [{ type: core.HostListener, args: ['click',] }],
            stickAround: [{ type: core.HostListener, args: ['mouseenter',] }],
            delayedHideToast: [{ type: core.HostListener, args: ['mouseleave',] }]
        };
        return ToastNoAnimation;
    }());
    var ToastNoAnimationModule = /** @class */ (function () {
        function ToastNoAnimationModule() {
        }
        ToastNoAnimationModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [ToastNoAnimation],
                        exports: [ToastNoAnimation],
                        entryComponents: [ToastNoAnimation]
                    },] }
        ];
        return ToastNoAnimationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ToastContainerDirective = ToastContainerDirective;
    exports.ToastContainerModule = ToastContainerModule;
    exports.Toast = Toast;
    exports.ToastrService = ToastrService;
    exports.ToastPackage = ToastPackage;
    exports.DefaultGlobalConfig = DefaultGlobalConfig;
    exports.ToastrModule = ToastrModule;
    exports.ToastRef = ToastRef;
    exports.ToastInjector = ToastInjector;
    exports.TOAST_CONFIG = TOAST_CONFIG;
    exports.ToastNoAnimation = ToastNoAnimation;
    exports.ToastNoAnimationModule = ToastNoAnimationModule;
    exports.ComponentPortal = ComponentPortal;
    exports.BasePortalHost = BasePortalHost;
    exports.Overlay = Overlay;
    exports.OVERLAY_PROVIDERS = OVERLAY_PROVIDERS;
    exports.OverlayContainer = OverlayContainer;
    exports.OverlayRef = OverlayRef;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRvYXN0ci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC10b2FzdHIvdG9hc3RyL3RvYXN0LmRpcmVjdGl2ZS50cyIsIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL25neC10b2FzdHIvdG9hc3RyL3RvYXN0ci1jb25maWcudHMiLCJuZzovL25neC10b2FzdHIvcG9ydGFsL3BvcnRhbC50cyIsIm5nOi8vbmd4LXRvYXN0ci9wb3J0YWwvZG9tLXBvcnRhbC1ob3N0LnRzIiwibmc6Ly9uZ3gtdG9hc3RyL292ZXJsYXkvb3ZlcmxheS1yZWYudHMiLCJuZzovL25neC10b2FzdHIvb3ZlcmxheS9vdmVybGF5LWNvbnRhaW5lci50cyIsIm5nOi8vbmd4LXRvYXN0ci9vdmVybGF5L292ZXJsYXkudHMiLCJuZzovL25neC10b2FzdHIvdG9hc3RyL3RvYXN0LWluamVjdG9yLnRzIiwibmc6Ly9uZ3gtdG9hc3RyL3RvYXN0ci90b2FzdC10b2tlbi50cyIsIm5nOi8vbmd4LXRvYXN0ci90b2FzdHIvdG9hc3RyLnNlcnZpY2UudHMiLCJuZzovL25neC10b2FzdHIvdG9hc3RyL3RvYXN0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LXRvYXN0ci90b2FzdHIvZGVmYXVsdC1jb25maWcudHMiLCJuZzovL25neC10b2FzdHIvdG9hc3RyL3RvYXN0ci5tb2R1bGUudHMiLCJuZzovL25neC10b2FzdHIvdG9hc3RyL3RvYXN0LW5vYW5pbWF0aW9uLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIE5nTW9kdWxlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbdG9hc3RDb250YWluZXJdJyxcclxuICBleHBvcnRBczogJ3RvYXN0Q29udGFpbmVyJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cclxuICBnZXRDb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1RvYXN0Q29udGFpbmVyRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbVG9hc3RDb250YWluZXJEaXJlY3RpdmVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RDb250YWluZXJNb2R1bGUge31cclxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICcuLi9wb3J0YWwvcG9ydGFsJztcclxuaW1wb3J0IHsgVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LWluamVjdG9yJztcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIGZvciBhbiBpbmRpdmlkdWFsIHRvYXN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbmRpdmlkdWFsQ29uZmlnIHtcclxuICAvKipcclxuICAgKiBkaXNhYmxlIGJvdGggdGltZU91dCBhbmQgZXh0ZW5kZWRUaW1lT3V0XHJcbiAgICogZGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBkaXNhYmxlVGltZU91dDogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiB0b2FzdCB0aW1lIHRvIGxpdmUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgICogZGVmYXVsdDogNTAwMFxyXG4gICAqL1xyXG4gIHRpbWVPdXQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiB0b2FzdCBzaG93IGNsb3NlIGJ1dHRvblxyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICovXHJcbiAgY2xvc2VCdXR0b246IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogdGltZSB0byBjbG9zZSBhZnRlciBhIHVzZXIgaG92ZXJzIG92ZXIgdG9hc3RcclxuICAgKiBkZWZhdWx0OiAxMDAwXHJcbiAgICovXHJcbiAgZXh0ZW5kZWRUaW1lT3V0OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogc2hvdyB0b2FzdCBwcm9ncmVzcyBiYXJcclxuICAgKiBkZWZhdWx0OiBmYWxzZVxyXG4gICAqL1xyXG4gIHByb2dyZXNzQmFyOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBjaGFuZ2VzIHRvYXN0IHByb2dyZXNzIGJhciBhbmltYXRpb25cclxuICAgKiBkZWZhdWx0OiBkZWNyZWFzaW5nXHJcbiAgICovXHJcbiAgcHJvZ3Jlc3NBbmltYXRpb24/OiAnaW5jcmVhc2luZycgfCAnZGVjcmVhc2luZyc7XHJcbiAgLyoqXHJcbiAgICogcmVuZGVyIGh0bWwgaW4gdG9hc3QgbWVzc2FnZSAocG9zc2libHkgdW5zYWZlKVxyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICovXHJcbiAgZW5hYmxlSHRtbDogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgY29tcG9uZW50XHJcbiAgICogZGVmYXVsdDogdG9hc3RcclxuICAgKi9cclxuICB0b2FzdENsYXNzOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IGNvbnRhaW5lclxyXG4gICAqIGRlZmF1bHQ6IHRvYXN0LXRvcC1yaWdodFxyXG4gICAqL1xyXG4gIHBvc2l0aW9uQ2xhc3M6IHN0cmluZztcclxuICAvKipcclxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgdGl0bGVcclxuICAgKiBkZWZhdWx0OiB0b2FzdC10aXRsZVxyXG4gICAqL1xyXG4gIHRpdGxlQ2xhc3M6IHN0cmluZztcclxuICAvKipcclxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgbWVzc2FnZVxyXG4gICAqIGRlZmF1bHQ6IHRvYXN0LW1lc3NhZ2VcclxuICAgKi9cclxuICBtZXNzYWdlQ2xhc3M6IHN0cmluZztcclxuICAvKipcclxuICAgKiBhbmltYXRpb24gZWFzaW5nIG9uIHRvYXN0XHJcbiAgICogZGVmYXVsdDogZWFzZS1pblxyXG4gICAqL1xyXG4gIGVhc2luZzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFuaW1hdGlvbiBlYXNlIHRpbWUgb24gdG9hc3RcclxuICAgKiBkZWZhdWx0OiAzMDBcclxuICAgKi9cclxuICBlYXNlVGltZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGNsaWNraW5nIG9uIHRvYXN0IGRpc21pc3NlcyBpdFxyXG4gICAqIGRlZmF1bHQ6IHRydWVcclxuICAgKi9cclxuICB0YXBUb0Rpc21pc3M6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQW5ndWxhciB0b2FzdCBjb21wb25lbnQgdG8gYmUgc2hvd25cclxuICAgKiBkZWZhdWx0OiBUb2FzdFxyXG4gICAqL1xyXG4gIHRvYXN0Q29tcG9uZW50OiBDb21wb25lbnRUeXBlPGFueT47XHJcbiAgLyoqXHJcbiAgICogSGVscHMgc2hvdyB0b2FzdCBmcm9tIGEgd2Vic29ja2V0IG9yIGZyb20gZXZlbnQgb3V0c2lkZSBBbmd1bGFyXHJcbiAgICogZGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBvbkFjdGl2YXRlVGljazogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb2FzdHJJY29uQ2xhc3NlcyB7XHJcbiAgZXJyb3I6IHN0cmluZztcclxuICBpbmZvOiBzdHJpbmc7XHJcbiAgc3VjY2Vzczogc3RyaW5nO1xyXG4gIHdhcm5pbmc6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEdsb2JhbCBUb2FzdCBjb25maWd1cmF0aW9uXHJcbiAqIEluY2x1ZGVzIGFsbCBJbmRpdmlkdWFsQ29uZmlnXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbENvbmZpZyBleHRlbmRzIEluZGl2aWR1YWxDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIG1heCB0b2FzdHMgb3BlbmVkLiBUb2FzdHMgd2lsbCBiZSBxdWV1ZWRcclxuICAgKiBaZXJvIGlzIHVubGltaXRlZFxyXG4gICAqIGRlZmF1bHQ6IDBcclxuICAgKi9cclxuICBtYXhPcGVuZWQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBkaXNtaXNzIGN1cnJlbnQgdG9hc3Qgd2hlbiBtYXggaXMgcmVhY2hlZFxyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICovXHJcbiAgYXV0b0Rpc21pc3M6IGJvb2xlYW47XHJcbiAgaWNvbkNsYXNzZXM6IFBhcnRpYWw8VG9hc3RySWNvbkNsYXNzZXM+O1xyXG4gIC8qKlxyXG4gICAqIE5ldyB0b2FzdCBwbGFjZW1lbnRcclxuICAgKiBkZWZhdWx0OiB0cnVlXHJcbiAgICovXHJcbiAgbmV3ZXN0T25Ub3A6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogYmxvY2sgZHVwbGljYXRlIG1lc3NhZ2VzXHJcbiAgICogZGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICBwcmV2ZW50RHVwbGljYXRlczogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVzZXQgdG9hc3QgdGltZW91dCB3aGVuIHRoZXJlJ3MgYSBkdXBsaWNhdGUgKHByZXZlbnREdXBsaWNhdGVzIG5lZWRzIHRvIGJlIHNldCB0byB0cnVlKVxyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICovXHJcbiAgcmVzZXRUaW1lb3V0T25EdXBsaWNhdGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFdmVyeXRoaW5nIGEgdG9hc3QgbmVlZHMgdG8gbGF1bmNoXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVG9hc3RQYWNrYWdlIHtcclxuICBwcml2YXRlIF9vblRhcCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICBwcml2YXRlIF9vbkFjdGlvbiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgdG9hc3RJZDogbnVtYmVyLFxyXG4gICAgcHVibGljIGNvbmZpZzogSW5kaXZpZHVhbENvbmZpZyxcclxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgfCBTYWZlSHRtbCB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIHB1YmxpYyB0b2FzdFR5cGU6IHN0cmluZyxcclxuICAgIHB1YmxpYyB0b2FzdFJlZjogVG9hc3RSZWY8YW55PlxyXG4gICkge1xyXG4gICAgdGhpcy50b2FzdFJlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX29uQWN0aW9uLmNvbXBsZXRlKCk7XHJcbiAgICAgIHRoaXMuX29uVGFwLmNvbXBsZXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBGaXJlZCBvbiBjbGljayAqL1xyXG4gIHRyaWdnZXJUYXAoKSB7XHJcbiAgICB0aGlzLl9vblRhcC5uZXh0KCk7XHJcbiAgICBpZiAodGhpcy5jb25maWcudGFwVG9EaXNtaXNzKSB7XHJcbiAgICAgIHRoaXMuX29uVGFwLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblRhcCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29uVGFwLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIGF2YWlsYWJsZSBmb3IgdXNlIGluIGN1c3RvbSB0b2FzdCAqL1xyXG4gIHRyaWdnZXJBY3Rpb24oYWN0aW9uPzogYW55KSB7XHJcbiAgICB0aGlzLl9vbkFjdGlvbi5uZXh0KGFjdGlvbik7XHJcbiAgfVxyXG5cclxuICBvbkFjdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX29uQWN0aW9uLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxufVxyXG5cclxuLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHktaW50ZXJmYWNlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsVG9hc3RyQ29uZmlnIGV4dGVuZHMgR2xvYmFsQ29uZmlnIHt9XHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5kaXZpZHVhbFRvYXN0ckNvbmZpZyBleHRlbmRzIEluZGl2aWR1YWxDb25maWcge31cclxuZXhwb3J0IGludGVyZmFjZSBUb2FzdHJDb25maWcgZXh0ZW5kcyBJbmRpdmlkdWFsQ29uZmlnIHt9XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEluamVjdG9yLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50VHlwZTxUPiB7XHJcbiAgbmV3ICguLi5hcmdzOiBhbnlbXSk6IFQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQSBgQ29tcG9uZW50UG9ydGFsYCBpcyBhIHBvcnRhbCB0aGF0IGluc3RhbnRpYXRlcyBzb21lIENvbXBvbmVudCB1cG9uIGF0dGFjaG1lbnQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50UG9ydGFsPFQ+IHtcclxuICBwcml2YXRlIF9hdHRhY2hlZEhvc3Q/OiBCYXNlUG9ydGFsSG9zdDtcclxuICAvKiogVGhlIHR5cGUgb2YgdGhlIGNvbXBvbmVudCB0aGF0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGZvciBhdHRhY2htZW50LiAqL1xyXG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPjtcclxuXHJcbiAgLyoqXHJcbiAgICogW09wdGlvbmFsXSBXaGVyZSB0aGUgYXR0YWNoZWQgY29tcG9uZW50IHNob3VsZCBsaXZlIGluIEFuZ3VsYXIncyAqbG9naWNhbCogY29tcG9uZW50IHRyZWUuXHJcbiAgICogVGhpcyBpcyBkaWZmZXJlbnQgZnJvbSB3aGVyZSB0aGUgY29tcG9uZW50ICpyZW5kZXJzKiwgd2hpY2ggaXMgZGV0ZXJtaW5lZCBieSB0aGUgUG9ydGFsSG9zdC5cclxuICAgKiBUaGUgb3JpZ2luIG5lY2Vzc2FyeSB3aGVuIHRoZSBob3N0IGlzIG91dHNpZGUgb2YgdGhlIEFuZ3VsYXIgYXBwbGljYXRpb24gY29udGV4dC5cclxuICAgKi9cclxuICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICAvKiogSW5qZWN0b3IgdXNlZCBmb3IgdGhlIGluc3RhbnRpYXRpb24gb2YgdGhlIGNvbXBvbmVudC4gKi9cclxuICBpbmplY3RvcjogSW5qZWN0b3I7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudDogQ29tcG9uZW50VHlwZTxUPiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgIHRoaXMuaW5qZWN0b3IgPSBpbmplY3RvcjtcclxuICB9XHJcblxyXG4gIC8qKiBBdHRhY2ggdGhpcyBwb3J0YWwgdG8gYSBob3N0LiAqL1xyXG4gIGF0dGFjaChob3N0OiBCYXNlUG9ydGFsSG9zdCwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IGhvc3Q7XHJcbiAgICByZXR1cm4gaG9zdC5hdHRhY2godGhpcywgbmV3ZXN0T25Ub3ApO1xyXG4gIH1cclxuXHJcbiAgLyoqIERldGFjaCB0aGlzIHBvcnRhbCBmcm9tIGl0cyBob3N0ICovXHJcbiAgZGV0YWNoKCkge1xyXG4gICAgY29uc3QgaG9zdCA9IHRoaXMuX2F0dGFjaGVkSG9zdDtcclxuICAgIGlmIChob3N0KSB7XHJcbiAgICAgIHRoaXMuX2F0dGFjaGVkSG9zdCA9IHVuZGVmaW5lZDtcclxuICAgICAgcmV0dXJuIGhvc3QuZGV0YWNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogV2hldGhlciB0aGlzIHBvcnRhbCBpcyBhdHRhY2hlZCB0byBhIGhvc3QuICovXHJcbiAgZ2V0IGlzQXR0YWNoZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXR0YWNoZWRIb3N0ICE9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBQb3J0YWxIb3N0IHJlZmVyZW5jZSB3aXRob3V0IHBlcmZvcm1pbmcgYGF0dGFjaCgpYC4gVGhpcyBpcyB1c2VkIGRpcmVjdGx5IGJ5XHJcbiAgICogdGhlIFBvcnRhbEhvc3Qgd2hlbiBpdCBpcyBwZXJmb3JtaW5nIGFuIGBhdHRhY2goKWAgb3IgYGRldGFjaCgpYC5cclxuICAgKi9cclxuICBzZXRBdHRhY2hlZEhvc3QoaG9zdD86IEJhc2VQb3J0YWxIb3N0KSB7XHJcbiAgICB0aGlzLl9hdHRhY2hlZEhvc3QgPSBob3N0O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnRpYWwgaW1wbGVtZW50YXRpb24gb2YgUG9ydGFsSG9zdCB0aGF0IG9ubHkgZGVhbHMgd2l0aCBhdHRhY2hpbmcgYVxyXG4gKiBDb21wb25lbnRQb3J0YWxcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUG9ydGFsSG9zdCB7XHJcbiAgLyoqIFRoZSBwb3J0YWwgY3VycmVudGx5IGF0dGFjaGVkIHRvIHRoZSBob3N0LiAqL1xyXG4gIHByaXZhdGUgX2F0dGFjaGVkUG9ydGFsPzogQ29tcG9uZW50UG9ydGFsPGFueT47XHJcblxyXG4gIC8qKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBwZXJtYW5lbnRseSBkaXNwb3NlIHRoaXMgaG9zdC4gKi9cclxuICBwcml2YXRlIF9kaXNwb3NlRm4/OiAoKSA9PiB2b2lkO1xyXG5cclxuICBhdHRhY2gocG9ydGFsOiBDb21wb25lbnRQb3J0YWw8YW55PiwgbmV3ZXN0T25Ub3A6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gcG9ydGFsO1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0YWNoQ29tcG9uZW50UG9ydGFsKHBvcnRhbCwgbmV3ZXN0T25Ub3ApO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgYXR0YWNoQ29tcG9uZW50UG9ydGFsPFQ+KHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPFQ+LCBuZXdlc3RPblRvcDogYm9vbGVhbik6IENvbXBvbmVudFJlZjxUPjtcclxuXHJcbiAgZGV0YWNoKCkge1xyXG4gICAgaWYgKHRoaXMuX2F0dGFjaGVkUG9ydGFsKSB7XHJcbiAgICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsLnNldEF0dGFjaGVkSG9zdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2F0dGFjaGVkUG9ydGFsID0gdW5kZWZpbmVkO1xyXG4gICAgaWYgKHRoaXMuX2Rpc3Bvc2VGbikge1xyXG4gICAgICB0aGlzLl9kaXNwb3NlRm4oKTtcclxuICAgICAgdGhpcy5fZGlzcG9zZUZuID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RGlzcG9zZUZuKGZuOiAoKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLl9kaXNwb3NlRm4gPSBmbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblJlZixcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZVBvcnRhbEhvc3QsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJy4vcG9ydGFsJztcclxuXHJcbi8qKlxyXG4gKiBBIFBvcnRhbEhvc3QgZm9yIGF0dGFjaGluZyBwb3J0YWxzIHRvIGFuIGFyYml0cmFyeSBET00gZWxlbWVudCBvdXRzaWRlIG9mIHRoZSBBbmd1bGFyXHJcbiAqIGFwcGxpY2F0aW9uIGNvbnRleHQuXHJcbiAqXHJcbiAqIFRoaXMgaXMgdGhlIG9ubHkgcGFydCBvZiB0aGUgcG9ydGFsIGNvcmUgdGhhdCBkaXJlY3RseSB0b3VjaGVzIHRoZSBET00uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRG9tUG9ydGFsSG9zdCBleHRlbmRzIEJhc2VQb3J0YWxIb3N0IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2hvc3REb21FbGVtZW50OiBFbGVtZW50LFxyXG4gICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIF9hcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGFjaCB0aGUgZ2l2ZW4gQ29tcG9uZW50UG9ydGFsIHRvIERPTSBlbGVtZW50IHVzaW5nIHRoZSBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIuXHJcbiAgICogQHBhcmFtIHBvcnRhbCBQb3J0YWwgdG8gYmUgYXR0YWNoZWRcclxuICAgKi9cclxuICBhdHRhY2hDb21wb25lbnRQb3J0YWw8VD4oXHJcbiAgICBwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxUPixcclxuICAgIG5ld2VzdE9uVG9wOiBib29sZWFuLFxyXG4gICk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxyXG4gICAgICBwb3J0YWwuY29tcG9uZW50LFxyXG4gICAgKTtcclxuICAgIGxldCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPjtcclxuXHJcbiAgICAvLyBJZiB0aGUgcG9ydGFsIHNwZWNpZmllcyBhIFZpZXdDb250YWluZXJSZWYsIHdlIHdpbGwgdXNlIHRoYXQgYXMgdGhlIGF0dGFjaG1lbnQgcG9pbnRcclxuICAgIC8vIGZvciB0aGUgY29tcG9uZW50IChpbiB0ZXJtcyBvZiBBbmd1bGFyJ3MgY29tcG9uZW50IHRyZWUsIG5vdCByZW5kZXJpbmcpLlxyXG4gICAgLy8gV2hlbiB0aGUgVmlld0NvbnRhaW5lclJlZiBpcyBtaXNzaW5nLCB3ZSB1c2UgdGhlIGZhY3RvcnkgdG8gY3JlYXRlIHRoZSBjb21wb25lbnQgZGlyZWN0bHlcclxuICAgIC8vIGFuZCB0aGVuIG1hbnVhbGx5IGF0dGFjaCB0aGUgQ2hhbmdlRGV0ZWN0b3IgZm9yIHRoYXQgY29tcG9uZW50IHRvIHRoZSBhcHBsaWNhdGlvbiAod2hpY2hcclxuICAgIC8vIGhhcHBlbnMgYXV0b21hdGljYWxseSB3aGVuIHVzaW5nIGEgVmlld0NvbnRhaW5lcikuXHJcbiAgICBjb21wb25lbnRSZWYgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZShwb3J0YWwuaW5qZWN0b3IpO1xyXG5cclxuICAgIC8vIFdoZW4gY3JlYXRpbmcgYSBjb21wb25lbnQgb3V0c2lkZSBvZiBhIFZpZXdDb250YWluZXIsIHdlIG5lZWQgdG8gbWFudWFsbHkgcmVnaXN0ZXJcclxuICAgIC8vIGl0cyBDaGFuZ2VEZXRlY3RvciB3aXRoIHRoZSBhcHBsaWNhdGlvbi4gVGhpcyBBUEkgaXMgdW5mb3J0dW5hdGVseSBub3QgeWV0IHB1Ymxpc2hlZFxyXG4gICAgLy8gaW4gQW5ndWxhciBjb3JlLiBUaGUgY2hhbmdlIGRldGVjdG9yIG11c3QgYWxzbyBiZSBkZXJlZ2lzdGVyZWQgd2hlbiB0aGUgY29tcG9uZW50XHJcbiAgICAvLyBpcyBkZXN0cm95ZWQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuXHJcbiAgICB0aGlzLl9hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xyXG5cclxuICAgIHRoaXMuc2V0RGlzcG9zZUZuKCgpID0+IHtcclxuICAgICAgdGhpcy5fYXBwUmVmLmRldGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEF0IHRoaXMgcG9pbnQgdGhlIGNvbXBvbmVudCBoYXMgYmVlbiBpbnN0YW50aWF0ZWQsIHNvIHdlIG1vdmUgaXQgdG8gdGhlIGxvY2F0aW9uIGluIHRoZSBET01cclxuICAgIC8vIHdoZXJlIHdlIHdhbnQgaXQgdG8gYmUgcmVuZGVyZWQuXHJcbiAgICBpZiAobmV3ZXN0T25Ub3ApIHtcclxuICAgICAgdGhpcy5faG9zdERvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICAgIHRoaXMuX2dldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudFJlZiksXHJcbiAgICAgICAgdGhpcy5faG9zdERvbUVsZW1lbnQuZmlyc3RDaGlsZCxcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hvc3REb21FbGVtZW50LmFwcGVuZENoaWxkKFxyXG4gICAgICAgIHRoaXMuX2dldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudFJlZiksXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlZjtcclxuICB9XHJcblxyXG4gIC8qKiBHZXRzIHRoZSByb290IEhUTUxFbGVtZW50IGZvciBhbiBpbnN0YW50aWF0ZWQgY29tcG9uZW50LiAqL1xyXG4gIHByaXZhdGUgX2dldENvbXBvbmVudFJvb3ROb2RlKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4pOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZVBvcnRhbEhvc3QsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSB0byBhbiBvdmVybGF5IHRoYXQgaGFzIGJlZW4gY3JlYXRlZCB3aXRoIHRoZSBPdmVybGF5IHNlcnZpY2UuXHJcbiAqIFVzZWQgdG8gbWFuaXB1bGF0ZSBvciBkaXNwb3NlIG9mIHNhaWQgb3ZlcmxheS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBPdmVybGF5UmVmIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wb3J0YWxIb3N0OiBCYXNlUG9ydGFsSG9zdCkge31cclxuXHJcbiAgYXR0YWNoKFxyXG4gICAgcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8YW55PixcclxuICAgIG5ld2VzdE9uVG9wOiBib29sZWFuID0gdHJ1ZSxcclxuICApOiBDb21wb25lbnRSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsSG9zdC5hdHRhY2gocG9ydGFsLCBuZXdlc3RPblRvcCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRhY2hlcyBhbiBvdmVybGF5IGZyb20gYSBwb3J0YWwuXHJcbiAgICogQHJldHVybnMgUmVzb2x2ZXMgd2hlbiB0aGUgb3ZlcmxheSBoYXMgYmVlbiBkZXRhY2hlZC5cclxuICAgKi9cclxuICBkZXRhY2goKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9ydGFsSG9zdC5kZXRhY2goKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoZSBPdmVybGF5Q29udGFpbmVyIGlzIHRoZSBjb250YWluZXIgaW4gd2hpY2ggYWxsIG92ZXJsYXlzIHdpbGwgbG9hZC5cclxuICogSXQgc2hvdWxkIGJlIHByb3ZpZGVkIGluIHRoZSByb290IGNvbXBvbmVudCB0byBlbnN1cmUgaXQgaXMgcHJvcGVybHkgc2hhcmVkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb250YWluZXIge1xyXG4gIHByaXZhdGUgX2NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBvdmVybGF5IGNvbnRhaW5lciBlbGVtZW50LiAgSXQgd2lsbCBsYXppbHlcclxuICAgKiBjcmVhdGUgdGhlIGVsZW1lbnQgdGhlIGZpcnN0IHRpbWUgIGl0IGlzIGNhbGxlZCB0byBmYWNpbGl0YXRlIHVzaW5nXHJcbiAgICogdGhlIGNvbnRhaW5lciBpbiBub24tYnJvd3NlciBlbnZpcm9ubWVudHMuXHJcbiAgICogQHJldHVybnMgdGhlIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgICovXHJcbiAgZ2V0Q29udGFpbmVyRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICBpZiAoIXRoaXMuX2NvbnRhaW5lckVsZW1lbnQpIHsgdGhpcy5fY3JlYXRlQ29udGFpbmVyKCk7IH1cclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIHRoZSBvdmVybGF5IGNvbnRhaW5lciBlbGVtZW50LCB3aGljaCBpcyBzaW1wbHkgYSBkaXZcclxuICAgKiB3aXRoIHRoZSAnY2RrLW92ZXJsYXktY29udGFpbmVyJyBjbGFzcyBvbiB0aGUgZG9jdW1lbnQgYm9keS5cclxuICAgKi9cclxuICBwcml2YXRlIF9jcmVhdGVDb250YWluZXIoKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LWNvbnRhaW5lcicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgdGhpcy5fY29udGFpbmVyRWxlbWVudCA9IGNvbnRhaW5lcjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb25SZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21Qb3J0YWxIb3N0IH0gZnJvbSAnLi4vcG9ydGFsL2RvbS1wb3J0YWwtaG9zdCc7XHJcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICcuL292ZXJsYXktcmVmJztcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vdG9hc3RyL3RvYXN0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE92ZXJsYXlDb250YWluZXIgfSBmcm9tICcuL292ZXJsYXktY29udGFpbmVyJztcclxuXHJcbi8qKlxyXG4gKiBTZXJ2aWNlIHRvIGNyZWF0ZSBPdmVybGF5cy4gT3ZlcmxheXMgYXJlIGR5bmFtaWNhbGx5IGFkZGVkIHBpZWNlcyBvZiBmbG9hdGluZyBVSSwgbWVhbnQgdG8gYmVcclxuICogdXNlZCBhcyBhIGxvdy1sZXZlbCBidWlsZGluZyBidWlsZGluZyBibG9jayBmb3Igb3RoZXIgY29tcG9uZW50cy4gRGlhbG9ncywgdG9vbHRpcHMsIG1lbnVzLFxyXG4gKiBzZWxlY3RzLCBldGMuIGNhbiBhbGwgYmUgYnVpbHQgdXNpbmcgb3ZlcmxheXMuIFRoZSBzZXJ2aWNlIHNob3VsZCBwcmltYXJpbHkgYmUgdXNlZCBieSBhdXRob3JzXHJcbiAqIG9mIHJlLXVzYWJsZSBjb21wb25lbnRzIHJhdGhlciB0aGFuIGRldmVsb3BlcnMgYnVpbGRpbmcgZW5kLXVzZXIgYXBwbGljYXRpb25zLlxyXG4gKlxyXG4gKiBBbiBvdmVybGF5ICppcyogYSBQb3J0YWxIb3N0LCBzbyBhbnkga2luZCBvZiBQb3J0YWwgY2FuIGJlIGxvYWRlZCBpbnRvIG9uZS5cclxuICovXHJcbiBASW5qZWN0YWJsZSgpXHJcbiAgZXhwb3J0IGNsYXNzIE92ZXJsYXkge1xyXG4gICAgLy8gTmFtZXNwYWNlIHBhbmVzIGJ5IG92ZXJsYXkgY29udGFpbmVyXHJcbiAgICBwcml2YXRlIF9wYW5lRWxlbWVudHM6IE1hcDxUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSwge3N0cmluZz86IEhUTUxFbGVtZW50fT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3ZlcmxheUNvbnRhaW5lcjogT3ZlcmxheUNvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge31cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuIG92ZXJsYXkuXHJcbiAgICogQHJldHVybnMgQSByZWZlcmVuY2UgdG8gdGhlIGNyZWF0ZWQgb3ZlcmxheS5cclxuICAgKi9cclxuICBjcmVhdGUocG9zaXRpb25DbGFzcz86IHN0cmluZywgb3ZlcmxheUNvbnRhaW5lcj86IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlKTogT3ZlcmxheVJlZiB7XHJcbiAgICAvLyBnZXQgZXhpc3RpbmcgcGFuZSBpZiBwb3NzaWJsZVxyXG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZU92ZXJsYXlSZWYodGhpcy5nZXRQYW5lRWxlbWVudChwb3NpdGlvbkNsYXNzLCBvdmVybGF5Q29udGFpbmVyKSk7XHJcbiAgfVxyXG5cclxuICBnZXRQYW5lRWxlbWVudChwb3NpdGlvbkNsYXNzOiBzdHJpbmcgPSAnJywgb3ZlcmxheUNvbnRhaW5lcj86IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlKTogSFRNTEVsZW1lbnQge1xyXG4gICAgaWYgKCF0aGlzLl9wYW5lRWxlbWVudHMuZ2V0KG92ZXJsYXlDb250YWluZXIpKSB7XHJcbiAgICAgIHRoaXMuX3BhbmVFbGVtZW50cy5zZXQob3ZlcmxheUNvbnRhaW5lciwge30pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fcGFuZUVsZW1lbnRzLmdldChvdmVybGF5Q29udGFpbmVyKVtwb3NpdGlvbkNsYXNzXSkge1xyXG4gICAgICB0aGlzLl9wYW5lRWxlbWVudHMuZ2V0KG92ZXJsYXlDb250YWluZXIpW3Bvc2l0aW9uQ2xhc3NdID0gdGhpcy5fY3JlYXRlUGFuZUVsZW1lbnQocG9zaXRpb25DbGFzcywgb3ZlcmxheUNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3BhbmVFbGVtZW50cy5nZXQob3ZlcmxheUNvbnRhaW5lcilbcG9zaXRpb25DbGFzc107XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIHRoZSBET00gZWxlbWVudCBmb3IgYW4gb3ZlcmxheSBhbmQgYXBwZW5kcyBpdCB0byB0aGUgb3ZlcmxheSBjb250YWluZXIuXHJcbiAgICogQHJldHVybnMgTmV3bHktY3JlYXRlZCBwYW5lIGVsZW1lbnRcclxuICAgKi9cclxuICBwcml2YXRlIF9jcmVhdGVQYW5lRWxlbWVudChwb3NpdGlvbkNsYXNzOiBzdHJpbmcsIG92ZXJsYXlDb250YWluZXI/OiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IHBhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBhbmUuaWQgPSAndG9hc3QtY29udGFpbmVyJztcclxuICAgIHBhbmUuY2xhc3NMaXN0LmFkZChwb3NpdGlvbkNsYXNzKTtcclxuICAgIHBhbmUuY2xhc3NMaXN0LmFkZCgndG9hc3QtY29udGFpbmVyJyk7XHJcblxyXG4gICAgaWYgKCFvdmVybGF5Q29udGFpbmVyKSB7XHJcbiAgICAgIHRoaXMuX292ZXJsYXlDb250YWluZXIuZ2V0Q29udGFpbmVyRWxlbWVudCgpLmFwcGVuZENoaWxkKHBhbmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3ZlcmxheUNvbnRhaW5lci5nZXRDb250YWluZXJFbGVtZW50KCkuYXBwZW5kQ2hpbGQocGFuZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFuZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIERvbVBvcnRhbEhvc3QgaW50byB3aGljaCB0aGUgb3ZlcmxheSBjb250ZW50IGNhbiBiZSBsb2FkZWQuXHJcbiAgICogQHBhcmFtIHBhbmUgVGhlIERPTSBlbGVtZW50IHRvIHR1cm4gaW50byBhIHBvcnRhbCBob3N0LlxyXG4gICAqIEByZXR1cm5zIEEgcG9ydGFsIGhvc3QgZm9yIHRoZSBnaXZlbiBET00gZWxlbWVudC5cclxuICAgKi9cclxuICBwcml2YXRlIF9jcmVhdGVQb3J0YWxIb3N0KHBhbmU6IEhUTUxFbGVtZW50KTogRG9tUG9ydGFsSG9zdCB7XHJcbiAgICByZXR1cm4gbmV3IERvbVBvcnRhbEhvc3QocGFuZSwgdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB0aGlzLl9hcHBSZWYpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBPdmVybGF5UmVmIGZvciBhbiBvdmVybGF5IGluIHRoZSBnaXZlbiBET00gZWxlbWVudC5cclxuICAgKiBAcGFyYW0gcGFuZSBET00gZWxlbWVudCBmb3IgdGhlIG92ZXJsYXlcclxuICAgKi9cclxuICBwcml2YXRlIF9jcmVhdGVPdmVybGF5UmVmKHBhbmU6IEhUTUxFbGVtZW50KTogT3ZlcmxheVJlZiB7XHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlSZWYodGhpcy5fY3JlYXRlUG9ydGFsSG9zdChwYW5lKSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyoqIFByb3ZpZGVycyBmb3IgT3ZlcmxheSBhbmQgaXRzIHJlbGF0ZWQgaW5qZWN0YWJsZXMuICovXHJcbmV4cG9ydCBjb25zdCBPVkVSTEFZX1BST1ZJREVSUyA9IFtcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlDb250YWluZXIsXHJcbl07XHJcbiIsImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheS1yZWYnO1xyXG5pbXBvcnQgeyBUb2FzdFBhY2thZ2UgfSBmcm9tICcuL3RvYXN0ci1jb25maWcnO1xyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSB0byBhIHRvYXN0IG9wZW5lZCB2aWEgdGhlIFRvYXN0ciBzZXJ2aWNlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRvYXN0UmVmPFQ+IHtcclxuICAvKiogVGhlIGluc3RhbmNlIG9mIGNvbXBvbmVudCBvcGVuZWQgaW50byB0aGUgdG9hc3QuICovXHJcbiAgY29tcG9uZW50SW5zdGFuY2U6IFQ7XHJcblxyXG4gIC8qKiBTdWJqZWN0IGZvciBub3RpZnlpbmcgdGhlIHVzZXIgdGhhdCB0aGUgdG9hc3QgaGFzIGZpbmlzaGVkIGNsb3NpbmcuICovXHJcbiAgcHJpdmF0ZSBfYWZ0ZXJDbG9zZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgLyoqIHRyaWdnZXJlZCB3aGVuIHRvYXN0IGlzIGFjdGl2YXRlZCAqL1xyXG4gIHByaXZhdGUgX2FjdGl2YXRlID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gIC8qKiBub3RpZmllcyB0aGUgdG9hc3QgdGhhdCBpdCBzaG91bGQgY2xvc2UgYmVmb3JlIHRoZSB0aW1lb3V0ICovXHJcbiAgcHJpdmF0ZSBfbWFudWFsQ2xvc2UgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgLyoqIG5vdGlmaWVzIHRoZSB0b2FzdCB0aGF0IGl0IHNob3VsZCByZXNldCB0aGUgdGltZW91dHMgKi9cclxuICBwcml2YXRlIF9yZXNldFRpbWVvdXQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX292ZXJsYXlSZWY6IE92ZXJsYXlSZWYpIHt9XHJcblxyXG4gIG1hbnVhbENsb3NlKCkge1xyXG4gICAgdGhpcy5fbWFudWFsQ2xvc2UubmV4dCgpO1xyXG4gICAgdGhpcy5fbWFudWFsQ2xvc2UuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG1hbnVhbENsb3NlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hbnVhbENsb3NlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgdGltZW91dFJlc2V0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVzZXRUaW1lb3V0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgdGhlIHRvYXN0LlxyXG4gICAqL1xyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgIHRoaXMuX2FmdGVyQ2xvc2VkLm5leHQoKTtcclxuICAgIHRoaXMuX21hbnVhbENsb3NlLm5leHQoKTtcclxuICAgIHRoaXMuX2FmdGVyQ2xvc2VkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLl9tYW51YWxDbG9zZS5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5fYWN0aXZhdGUuY29tcGxldGUoKTtcclxuICAgIHRoaXMuX3Jlc2V0VGltZW91dC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldHMgYW4gb2JzZXJ2YWJsZSB0aGF0IGlzIG5vdGlmaWVkIHdoZW4gdGhlIHRvYXN0IGlzIGZpbmlzaGVkIGNsb3NpbmcuICovXHJcbiAgYWZ0ZXJDbG9zZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9hZnRlckNsb3NlZC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGlzSW5hY3RpdmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZhdGUuaXNTdG9wcGVkO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoKSB7XHJcbiAgICB0aGlzLl9hY3RpdmF0ZS5uZXh0KCk7XHJcbiAgICB0aGlzLl9hY3RpdmF0ZS5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdldHMgYW4gb2JzZXJ2YWJsZSB0aGF0IGlzIG5vdGlmaWVkIHdoZW4gdGhlIHRvYXN0IGhhcyBzdGFydGVkIG9wZW5pbmcuICovXHJcbiAgYWZ0ZXJBY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlc2V0IHRoZSB0b2FzdCB0aW1vdXRzICovXHJcbiAgcmVzZXRUaW1lb3V0KCkge1xyXG4gICAgdGhpcy5fcmVzZXRUaW1lb3V0Lm5leHQoKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKiBDdXN0b20gaW5qZWN0b3IgdHlwZSBzcGVjaWZpY2FsbHkgZm9yIGluc3RhbnRpYXRpbmcgY29tcG9uZW50cyB3aXRoIGEgdG9hc3QuICovXHJcbmV4cG9ydCBjbGFzcyBUb2FzdEluamVjdG9yIGltcGxlbWVudHMgSW5qZWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfdG9hc3RQYWNrYWdlOiBUb2FzdFBhY2thZ2UsXHJcbiAgICBwcml2YXRlIF9wYXJlbnRJbmplY3RvcjogSW5qZWN0b3JcclxuICApIHt9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlOmRlcHJlY2F0aW9uICovXHJcbiAgZ2V0KHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU/OiBhbnkpOiBhbnkge1xyXG4gICAgaWYgKHRva2VuID09PSBUb2FzdFBhY2thZ2UgJiYgdGhpcy5fdG9hc3RQYWNrYWdlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl90b2FzdFBhY2thZ2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50SW5qZWN0b3IuZ2V0KHRva2VuLCBub3RGb3VuZFZhbHVlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEdsb2JhbENvbmZpZyB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0VG9rZW4ge1xyXG4gIGNvbmZpZzogR2xvYmFsQ29uZmlnO1xyXG4gIGRlZmF1bHRzOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUT0FTVF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48VG9hc3RUb2tlbj4oJ1RvYXN0Q29uZmlnJyk7XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEluamVjdCxcclxuICBJbmplY3RhYmxlLFxyXG4gIEluamVjdG9yLFxyXG4gIE5nWm9uZSxcclxuICBTZWN1cml0eUNvbnRleHRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi9vdmVybGF5L292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICcuLi9wb3J0YWwvcG9ydGFsJztcclxuaW1wb3J0IHsgVG9hc3RJbmplY3RvciwgVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LWluamVjdG9yJztcclxuaW1wb3J0IHsgVG9hc3RUb2tlbiwgVE9BU1RfQ09ORklHIH0gZnJvbSAnLi90b2FzdC10b2tlbic7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b2FzdC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb25maWcsIEluZGl2aWR1YWxDb25maWcsIFRvYXN0UGFja2FnZSB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVRvYXN0PEM+IHtcclxuICAvKiogWW91ciBUb2FzdCBJRC4gVXNlIHRoaXMgdG8gY2xvc2UgaXQgaW5kaXZpZHVhbGx5ICovXHJcbiAgdG9hc3RJZDogbnVtYmVyO1xyXG4gIC8qKiB0aGUgbWVzc2FnZSBvZiB5b3VyIHRvYXN0LiBTdG9yZWQgdG8gcHJldmVudCBkdXBsaWNhdGVzICovXHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIC8qKiBhIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50IHNlZSBwb3J0YWwudHMgKi9cclxuICBwb3J0YWw6IENvbXBvbmVudFJlZjxDPjtcclxuICAvKiogYSByZWZlcmVuY2UgdG8geW91ciB0b2FzdCAqL1xyXG4gIHRvYXN0UmVmOiBUb2FzdFJlZjxDPjtcclxuICAvKiogdHJpZ2dlcmVkIHdoZW4gdG9hc3QgaXMgYWN0aXZlICovXHJcbiAgb25TaG93bjogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIC8qKiB0cmlnZ2VyZWQgd2hlbiB0b2FzdCBpcyBkZXN0cm95ZWQgKi9cclxuICBvbkhpZGRlbjogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIC8qKiB0cmlnZ2VyZWQgb24gdG9hc3QgY2xpY2sgKi9cclxuICBvblRhcDogT2JzZXJ2YWJsZTxhbnk+O1xyXG4gIC8qKiBhdmFpbGFibGUgZm9yIHlvdXIgdXNlIGluIGN1c3RvbSB0b2FzdCAqL1xyXG4gIG9uQWN0aW9uOiBPYnNlcnZhYmxlPGFueT47XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRvYXN0clNlcnZpY2Uge1xyXG4gIHRvYXN0ckNvbmZpZzogR2xvYmFsQ29uZmlnO1xyXG4gIGN1cnJlbnRseUFjdGl2ZSA9IDA7XHJcbiAgdG9hc3RzOiBBY3RpdmVUb2FzdDxhbnk+W10gPSBbXTtcclxuICBvdmVybGF5Q29udGFpbmVyOiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZTtcclxuICBwcmV2aW91c1RvYXN0TWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgaW5kZXggPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoVE9BU1RfQ09ORklHKSB0b2tlbjogVG9hc3RUb2tlbixcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcclxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXHJcbiAgKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0gbmV3IHRva2VuLmRlZmF1bHRzKCk7XHJcbiAgICB0aGlzLnRvYXN0ckNvbmZpZyA9IHsgLi4uZGVmYXVsdENvbmZpZywgLi4udG9rZW4uY29uZmlnIH07XHJcbiAgICB0aGlzLnRvYXN0ckNvbmZpZy5pY29uQ2xhc3NlcyA9IHtcclxuICAgICAgLi4uZGVmYXVsdENvbmZpZy5pY29uQ2xhc3NlcyxcclxuICAgICAgLi4udG9rZW4uY29uZmlnLmljb25DbGFzc2VzXHJcbiAgICB9O1xyXG4gIH1cclxuICAvKiogc2hvdyB0b2FzdCAqL1xyXG4gIHNob3coXHJcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9LFxyXG4gICAgdHlwZSA9ICcnXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24oXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqIHNob3cgc3VjY2Vzc2Z1bCB0b2FzdCAqL1xyXG4gIHN1Y2Nlc3MoXHJcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9XHJcbiAgKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50b2FzdHJDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcyB8fCAnJztcclxuICAgIHJldHVybiB0aGlzLl9wcmVCdWlsZE5vdGlmaWNhdGlvbihcclxuICAgICAgdHlwZSxcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpXHJcbiAgICApO1xyXG4gIH1cclxuICAvKiogc2hvdyBlcnJvciB0b2FzdCAqL1xyXG4gIGVycm9yKFxyXG4gICAgbWVzc2FnZT86IHN0cmluZyxcclxuICAgIHRpdGxlPzogc3RyaW5nLFxyXG4gICAgb3ZlcnJpZGU6IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4gPSB7fVxyXG4gICkge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RyQ29uZmlnLmljb25DbGFzc2VzLmVycm9yIHx8ICcnO1xyXG4gICAgcmV0dXJuIHRoaXMuX3ByZUJ1aWxkTm90aWZpY2F0aW9uKFxyXG4gICAgICB0eXBlLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSlcclxuICAgICk7XHJcbiAgfVxyXG4gIC8qKiBzaG93IGluZm8gdG9hc3QgKi9cclxuICBpbmZvKFxyXG4gICAgbWVzc2FnZT86IHN0cmluZyxcclxuICAgIHRpdGxlPzogc3RyaW5nLFxyXG4gICAgb3ZlcnJpZGU6IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4gPSB7fVxyXG4gICkge1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RyQ29uZmlnLmljb25DbGFzc2VzLmluZm8gfHwgJyc7XHJcbiAgICByZXR1cm4gdGhpcy5fcHJlQnVpbGROb3RpZmljYXRpb24oXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKVxyXG4gICAgKTtcclxuICB9XHJcbiAgLyoqIHNob3cgd2FybmluZyB0b2FzdCAqL1xyXG4gIHdhcm5pbmcoXHJcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxyXG4gICAgdGl0bGU/OiBzdHJpbmcsXHJcbiAgICBvdmVycmlkZTogUGFydGlhbDxJbmRpdmlkdWFsQ29uZmlnPiA9IHt9XHJcbiAgKSB7XHJcbiAgICBjb25zdCB0eXBlID0gdGhpcy50b2FzdHJDb25maWcuaWNvbkNsYXNzZXMud2FybmluZyB8fCAnJztcclxuICAgIHJldHVybiB0aGlzLl9wcmVCdWlsZE5vdGlmaWNhdGlvbihcclxuICAgICAgdHlwZSxcclxuICAgICAgbWVzc2FnZSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpXHJcbiAgICApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBSZW1vdmUgYWxsIG9yIGEgc2luZ2xlIHRvYXN0IGJ5IGlkXHJcbiAgICovXHJcbiAgY2xlYXIodG9hc3RJZD86IG51bWJlcikge1xyXG4gICAgLy8gQ2FsbCBldmVyeSB0b2FzdFJlZiBtYW51YWxDbG9zZSBmdW5jdGlvblxyXG4gICAgZm9yIChjb25zdCB0b2FzdCBvZiB0aGlzLnRvYXN0cykge1xyXG4gICAgICBpZiAodG9hc3RJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRvYXN0LnRvYXN0SWQgPT09IHRvYXN0SWQpIHtcclxuICAgICAgICAgIHRvYXN0LnRvYXN0UmVmLm1hbnVhbENsb3NlKCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0LnRvYXN0UmVmLm1hbnVhbENsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFuZCBkZXN0cm95IGEgc2luZ2xlIHRvYXN0IGJ5IGlkXHJcbiAgICovXHJcbiAgcmVtb3ZlKHRvYXN0SWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgZm91bmQgPSB0aGlzLl9maW5kVG9hc3QodG9hc3RJZCk7XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvdW5kLmFjdGl2ZVRvYXN0LnRvYXN0UmVmLmNsb3NlKCk7XHJcbiAgICB0aGlzLnRvYXN0cy5zcGxpY2UoZm91bmQuaW5kZXgsIDEpO1xyXG4gICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPSB0aGlzLmN1cnJlbnRseUFjdGl2ZSAtIDE7XHJcbiAgICBpZiAoIXRoaXMudG9hc3RyQ29uZmlnLm1heE9wZW5lZCB8fCAhdGhpcy50b2FzdHMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPCB0aGlzLnRvYXN0ckNvbmZpZy5tYXhPcGVuZWQgJiZcclxuICAgICAgdGhpcy50b2FzdHNbdGhpcy5jdXJyZW50bHlBY3RpdmVdXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgcCA9IHRoaXMudG9hc3RzW3RoaXMuY3VycmVudGx5QWN0aXZlXS50b2FzdFJlZjtcclxuICAgICAgaWYgKCFwLmlzSW5hY3RpdmUoKSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgKyAxO1xyXG4gICAgICAgIHAuYWN0aXZhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIGlmIHRvYXN0IG1lc3NhZ2UgaXMgYWxyZWFkeSBzaG93blxyXG4gICAqL1xyXG4gIGlzRHVwbGljYXRlKG1lc3NhZ2U6IHN0cmluZywgcmVzZXRPbkR1cGxpY2F0ZTogYm9vbGVhbikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvYXN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy50b2FzdHNbaV0ubWVzc2FnZSA9PT0gbWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHJlc2V0T25EdXBsaWNhdGUgJiZcclxuICAgICAgICAgIHRoaXMudG9hc3RzW2ldLnRvYXN0UmVmLmNvbXBvbmVudEluc3RhbmNlLnJlc2V0VGltZW91dFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy50b2FzdHNbaV0udG9hc3RSZWYucmVzZXRUaW1lb3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKiogY3JlYXRlIGEgY2xvbmUgb2YgZ2xvYmFsIGNvbmZpZyBhbmQgYXBwbHkgaW5kaXZpZHVhbCBzZXR0aW5ncyAqL1xyXG4gIHByaXZhdGUgYXBwbHlDb25maWcob3ZlcnJpZGU6IFBhcnRpYWw8SW5kaXZpZHVhbENvbmZpZz4gPSB7fSk6IEdsb2JhbENvbmZpZyB7XHJcbiAgICByZXR1cm4geyAuLi50aGlzLnRvYXN0ckNvbmZpZywgLi4ub3ZlcnJpZGUgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgdG9hc3Qgb2JqZWN0IGJ5IGlkXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZmluZFRvYXN0KFxyXG4gICAgdG9hc3RJZDogbnVtYmVyXHJcbiAgKTogeyBpbmRleDogbnVtYmVyOyBhY3RpdmVUb2FzdDogQWN0aXZlVG9hc3Q8YW55PiB9IHwgbnVsbCB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9hc3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnRvYXN0c1tpXS50b2FzdElkID09PSB0b2FzdElkKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgaW5kZXg6IGksIGFjdGl2ZVRvYXN0OiB0aGlzLnRvYXN0c1tpXSB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgdGhlIG5lZWQgdG8gcnVuIGluc2lkZSBhbmd1bGFyJ3Mgem9uZSB0aGVuIGJ1aWxkcyB0aGUgdG9hc3RcclxuICAgKi9cclxuICBwcml2YXRlIF9wcmVCdWlsZE5vdGlmaWNhdGlvbihcclxuICAgIHRvYXN0VHlwZTogc3RyaW5nLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIGNvbmZpZzogR2xvYmFsQ29uZmlnXHJcbiAgKTogQWN0aXZlVG9hc3Q8YW55PiB8IG51bGwge1xyXG4gICAgaWYgKGNvbmZpZy5vbkFjdGl2YXRlVGljaykge1xyXG4gICAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuKCgpID0+XHJcbiAgICAgICAgdGhpcy5fYnVpbGROb3RpZmljYXRpb24odG9hc3RUeXBlLCBtZXNzYWdlLCB0aXRsZSwgY29uZmlnKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHRvYXN0VHlwZSwgbWVzc2FnZSwgdGl0bGUsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuZCBhdHRhY2hlcyB0b2FzdCBkYXRhIHRvIGNvbXBvbmVudFxyXG4gICAqIHJldHVybnMgbnVsbCBpZiB0b2FzdCBpcyBkdXBsaWNhdGUgYW5kIHByZXZlbnREdXBsaWNhdGVzID09IFRydWVcclxuICAgKi9cclxuICBwcml2YXRlIF9idWlsZE5vdGlmaWNhdGlvbihcclxuICAgIHRvYXN0VHlwZTogc3RyaW5nLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkLFxyXG4gICAgdGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgIGNvbmZpZzogR2xvYmFsQ29uZmlnXHJcbiAgKTogQWN0aXZlVG9hc3Q8YW55PiB8IG51bGwge1xyXG4gICAgaWYgKCFjb25maWcudG9hc3RDb21wb25lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0b2FzdENvbXBvbmVudCByZXF1aXJlZCcpO1xyXG4gICAgfVxyXG4gICAgLy8gbWF4IG9wZW5lZCBhbmQgYXV0byBkaXNtaXNzID0gdHJ1ZVxyXG4gICAgaWYgKFxyXG4gICAgICBtZXNzYWdlICYmXHJcbiAgICAgIHRoaXMudG9hc3RyQ29uZmlnLnByZXZlbnREdXBsaWNhdGVzICYmXHJcbiAgICAgIHRoaXMuaXNEdXBsaWNhdGUobWVzc2FnZSwgdGhpcy50b2FzdHJDb25maWcucmVzZXRUaW1lb3V0T25EdXBsaWNhdGUpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByZXZpb3VzVG9hc3RNZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIGxldCBrZWVwSW5hY3RpdmUgPSBmYWxzZTtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy50b2FzdHJDb25maWcubWF4T3BlbmVkICYmXHJcbiAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID49IHRoaXMudG9hc3RyQ29uZmlnLm1heE9wZW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIGtlZXBJbmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIGlmICh0aGlzLnRvYXN0ckNvbmZpZy5hdXRvRGlzbWlzcykge1xyXG4gICAgICAgIHRoaXMuY2xlYXIodGhpcy50b2FzdHNbMF0udG9hc3RJZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKFxyXG4gICAgICBjb25maWcucG9zaXRpb25DbGFzcyxcclxuICAgICAgdGhpcy5vdmVybGF5Q29udGFpbmVyXHJcbiAgICApO1xyXG4gICAgdGhpcy5pbmRleCA9IHRoaXMuaW5kZXggKyAxO1xyXG4gICAgbGV0IHRydXN0ZWRNZXNzYWdlOiBzdHJpbmcgfCBTYWZlSHRtbCB8IHVuZGVmaW5lZCB8IG51bGwgPSBtZXNzYWdlO1xyXG4gICAgaWYgKG1lc3NhZ2UgJiYgY29uZmlnLmVuYWJsZUh0bWwpIHtcclxuICAgICAgdHJ1c3RlZE1lc3NhZ2UgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRvYXN0UmVmID0gbmV3IFRvYXN0UmVmKG92ZXJsYXlSZWYpO1xyXG4gICAgY29uc3QgdG9hc3RQYWNrYWdlID0gbmV3IFRvYXN0UGFja2FnZShcclxuICAgICAgdGhpcy5pbmRleCxcclxuICAgICAgY29uZmlnLFxyXG4gICAgICB0cnVzdGVkTWVzc2FnZSxcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIHRvYXN0VHlwZSxcclxuICAgICAgdG9hc3RSZWZcclxuICAgICk7XHJcbiAgICBjb25zdCB0b2FzdEluamVjdG9yID0gbmV3IFRvYXN0SW5qZWN0b3IodG9hc3RQYWNrYWdlLCB0aGlzLl9pbmplY3Rvcik7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbmZpZy50b2FzdENvbXBvbmVudCwgdG9hc3RJbmplY3Rvcik7XHJcbiAgICBjb25zdCBwb3J0YWwgPSBvdmVybGF5UmVmLmF0dGFjaChjb21wb25lbnQsIHRoaXMudG9hc3RyQ29uZmlnLm5ld2VzdE9uVG9wKTtcclxuICAgIHRvYXN0UmVmLmNvbXBvbmVudEluc3RhbmNlID0gKDxhbnk+cG9ydGFsKS5fY29tcG9uZW50O1xyXG4gICAgY29uc3QgaW5zOiBBY3RpdmVUb2FzdDxhbnk+ID0ge1xyXG4gICAgICB0b2FzdElkOiB0aGlzLmluZGV4LFxyXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8ICcnLFxyXG4gICAgICB0b2FzdFJlZixcclxuICAgICAgb25TaG93bjogdG9hc3RSZWYuYWZ0ZXJBY3RpdmF0ZSgpLFxyXG4gICAgICBvbkhpZGRlbjogdG9hc3RSZWYuYWZ0ZXJDbG9zZWQoKSxcclxuICAgICAgb25UYXA6IHRvYXN0UGFja2FnZS5vblRhcCgpLFxyXG4gICAgICBvbkFjdGlvbjogdG9hc3RQYWNrYWdlLm9uQWN0aW9uKCksXHJcbiAgICAgIHBvcnRhbFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIWtlZXBJbmFjdGl2ZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbnMudG9hc3RSZWYuYWN0aXZhdGUoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlICsgMTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b2FzdHMucHVzaChpbnMpO1xyXG4gICAgcmV0dXJuIGlucztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIHN0YXRlLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgTmdab25lLFxyXG4gIE9uRGVzdHJveVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSW5kaXZpZHVhbENvbmZpZywgVG9hc3RQYWNrYWdlIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJy4vdG9hc3RyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbdG9hc3QtY29tcG9uZW50XScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8YnV0dG9uICpuZ0lmPVwib3B0aW9ucy5jbG9zZUJ1dHRvblwiIChjbGljayk9XCJyZW1vdmUoKVwiIGNsYXNzPVwidG9hc3QtY2xvc2UtYnV0dG9uXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxkaXYgKm5nSWY9XCJ0aXRsZVwiIFtjbGFzc109XCJvcHRpb25zLnRpdGxlQ2xhc3NcIiBbYXR0ci5hcmlhLWxhYmVsXT1cInRpdGxlXCI+XHJcbiAgICB7eyB0aXRsZSB9fVxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJtZXNzYWdlICYmIG9wdGlvbnMuZW5hYmxlSHRtbFwiIHJvbGU9XCJhbGVydGRpYWxvZ1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXHJcbiAgICBbY2xhc3NdPVwib3B0aW9ucy5tZXNzYWdlQ2xhc3NcIiBbaW5uZXJIVE1MXT1cIm1lc3NhZ2VcIj5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwibWVzc2FnZSAmJiAhb3B0aW9ucy5lbmFibGVIdG1sXCIgcm9sZT1cImFsZXJ0ZGlhbG9nXCIgYXJpYS1saXZlPVwicG9saXRlXCJcclxuICAgIFtjbGFzc109XCJvcHRpb25zLm1lc3NhZ2VDbGFzc1wiIFthdHRyLmFyaWEtbGFiZWxdPVwibWVzc2FnZVwiPlxyXG4gICAge3sgbWVzc2FnZSB9fVxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJvcHRpb25zLnByb2dyZXNzQmFyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidG9hc3QtcHJvZ3Jlc3NcIiBbc3R5bGUud2lkdGhdPVwid2lkdGggKyAnJSdcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIGFuaW1hdGlvbnM6IFtcclxuICAgIHRyaWdnZXIoJ2ZseUluT3V0JywgW1xyXG4gICAgICBzdGF0ZShcclxuICAgICAgICAnaW5hY3RpdmUnLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICB9KVxyXG4gICAgICApLFxyXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoe30pKSxcclxuICAgICAgc3RhdGUoJ3JlbW92ZWQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKFxyXG4gICAgICAgICdpbmFjdGl2ZSA9PiBhY3RpdmUnLFxyXG4gICAgICAgIGFuaW1hdGUoJ3t7IGVhc2VUaW1lIH19bXMge3sgZWFzaW5nIH19JylcclxuICAgICAgKSxcclxuICAgICAgdHJhbnNpdGlvbignYWN0aXZlID0+IHJlbW92ZWQnLCBhbmltYXRlKCd7eyBlYXNlVGltZSB9fW1zIHt7IGVhc2luZyB9fScpKVxyXG4gICAgXSlcclxuICBdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgbWVzc2FnZT86IHN0cmluZyB8IFNhZmVIdG1sIHwgbnVsbDtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBvcHRpb25zOiBJbmRpdmlkdWFsQ29uZmlnO1xyXG4gIG9yaWdpbmFsVGltZW91dDogbnVtYmVyO1xyXG4gIC8qKiB3aWR0aCBvZiBwcm9ncmVzcyBiYXIgKi9cclxuICB3aWR0aCA9IC0xO1xyXG4gIC8qKiBhIGNvbWJpbmF0aW9uIG9mIHRvYXN0IHR5cGUgYW5kIG9wdGlvbnMudG9hc3RDbGFzcyAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSB0b2FzdENsYXNzZXMgPSAnJztcclxuICAvKiogY29udHJvbHMgYW5pbWF0aW9uICovXHJcbiAgQEhvc3RCaW5kaW5nKCdAZmx5SW5PdXQnKVxyXG4gIHN0YXRlID0ge1xyXG4gICAgdmFsdWU6ICdpbmFjdGl2ZScsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgZWFzZVRpbWU6IHRoaXMudG9hc3RQYWNrYWdlLmNvbmZpZy5lYXNlVGltZSxcclxuICAgICAgZWFzaW5nOiAnZWFzZS1pbidcclxuICAgIH1cclxuICB9O1xyXG4gIHByaXZhdGUgdGltZW91dDogYW55O1xyXG4gIHByaXZhdGUgaW50ZXJ2YWxJZDogYW55O1xyXG4gIHByaXZhdGUgaGlkZVRpbWU6IG51bWJlcjtcclxuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgc3ViMTogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgc3ViMjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCB0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgcHVibGljIHRvYXN0UGFja2FnZTogVG9hc3RQYWNrYWdlLFxyXG4gICAgcHJvdGVjdGVkIG5nWm9uZT86IE5nWm9uZVxyXG4gICkge1xyXG4gICAgdGhpcy5tZXNzYWdlID0gdG9hc3RQYWNrYWdlLm1lc3NhZ2U7XHJcbiAgICB0aGlzLnRpdGxlID0gdG9hc3RQYWNrYWdlLnRpdGxlO1xyXG4gICAgdGhpcy5vcHRpb25zID0gdG9hc3RQYWNrYWdlLmNvbmZpZztcclxuICAgIHRoaXMub3JpZ2luYWxUaW1lb3V0ID0gdG9hc3RQYWNrYWdlLmNvbmZpZy50aW1lT3V0O1xyXG4gICAgdGhpcy50b2FzdENsYXNzZXMgPSBgJHt0b2FzdFBhY2thZ2UudG9hc3RUeXBlfSAke1xyXG4gICAgICB0b2FzdFBhY2thZ2UuY29uZmlnLnRvYXN0Q2xhc3NcclxuICAgIH1gO1xyXG4gICAgdGhpcy5zdWIgPSB0b2FzdFBhY2thZ2UudG9hc3RSZWYuYWZ0ZXJBY3RpdmF0ZSgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYWN0aXZhdGVUb2FzdCgpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN1YjEgPSB0b2FzdFBhY2thZ2UudG9hc3RSZWYubWFudWFsQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWIyID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLnRpbWVvdXRSZXNldCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVzZXRUaW1lb3V0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5zdWIxLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnN1YjIudW5zdWJzY3JpYmUoKTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBhY3RpdmF0ZXMgdG9hc3QgYW5kIHNldHMgdGltZW91dFxyXG4gICAqL1xyXG4gIGFjdGl2YXRlVG9hc3QoKSB7XHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCB2YWx1ZTogJ2FjdGl2ZScgfTtcclxuICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGVUaW1lT3V0ICYmIHRoaXMub3B0aW9ucy50aW1lT3V0KSB7XHJcbiAgICAgIHRoaXMub3V0c2lkZVRpbWVvdXQoKCkgPT4gdGhpcy5yZW1vdmUoKSwgdGhpcy5vcHRpb25zLnRpbWVPdXQpO1xyXG4gICAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB0aGlzLm9wdGlvbnMudGltZU91dDtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0Jhcikge1xyXG4gICAgICAgIHRoaXMub3V0c2lkZUludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIHVwZGF0ZXMgcHJvZ3Jlc3MgYmFyIHdpZHRoXHJcbiAgICovXHJcbiAgdXBkYXRlUHJvZ3Jlc3MoKSB7XHJcbiAgICBpZiAodGhpcy53aWR0aCA9PT0gMCB8fCB0aGlzLndpZHRoID09PSAxMDAgfHwgIXRoaXMub3B0aW9ucy50aW1lT3V0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5oaWRlVGltZSAtIG5vdztcclxuICAgIHRoaXMud2lkdGggPSAocmVtYWluaW5nIC8gdGhpcy5vcHRpb25zLnRpbWVPdXQpICogMTAwO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0FuaW1hdGlvbiA9PT0gJ2luY3JlYXNpbmcnKSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSAxMDAgLSB0aGlzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2lkdGggPD0gMCkge1xyXG4gICAgICB0aGlzLndpZHRoID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLndpZHRoID49IDEwMCkge1xyXG4gICAgICB0aGlzLndpZHRoID0gMTAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRUaW1lb3V0KCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCB2YWx1ZTogJ2FjdGl2ZScgfTtcclxuXHJcbiAgICB0aGlzLm91dHNpZGVUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlKCksIHRoaXMub3JpZ2luYWxUaW1lb3V0KTtcclxuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gdGhpcy5vcmlnaW5hbFRpbWVvdXQ7XHJcbiAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAodGhpcy5vcHRpb25zLnRpbWVPdXQgfHwgMCk7XHJcbiAgICB0aGlzLndpZHRoID0gLTE7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XHJcbiAgICAgIHRoaXMub3V0c2lkZUludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdGVsbHMgdG9hc3RyU2VydmljZSB0byByZW1vdmUgdGhpcyB0b2FzdCBhZnRlciBhbmltYXRpb24gdGltZVxyXG4gICAqL1xyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlID09PSAncmVtb3ZlZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCB2YWx1ZTogJ3JlbW92ZWQnIH07XHJcbiAgICB0aGlzLm91dHNpZGVUaW1lb3V0KFxyXG4gICAgICAoKSA9PiB0aGlzLnRvYXN0clNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3RQYWNrYWdlLnRvYXN0SWQpLFxyXG4gICAgICArdGhpcy50b2FzdFBhY2thZ2UuY29uZmlnLmVhc2VUaW1lXHJcbiAgICApO1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgdGFwVG9hc3QoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSA9PT0gJ3JlbW92ZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudG9hc3RQYWNrYWdlLnRyaWdnZXJUYXAoKTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMudGFwVG9EaXNtaXNzKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxyXG4gIHN0aWNrQXJvdW5kKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgPT09ICdyZW1vdmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gMDtcclxuICAgIHRoaXMuaGlkZVRpbWUgPSAwO1xyXG5cclxuICAgIC8vIGRpc2FibGUgcHJvZ3Jlc3NCYXJcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICAgIHRoaXMud2lkdGggPSAwO1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcclxuICBkZWxheWVkSGlkZVRvYXN0KCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm9wdGlvbnMuZGlzYWJsZVRpbWVPdXQgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dCA9PT0gMCB8fFxyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlID09PSAncmVtb3ZlZCdcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm91dHNpZGVUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlKCksIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQpO1xyXG4gICAgdGhpcy5vcHRpb25zLnRpbWVPdXQgPSB0aGlzLm9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0O1xyXG4gICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKHRoaXMub3B0aW9ucy50aW1lT3V0IHx8IDApO1xyXG4gICAgdGhpcy53aWR0aCA9IC0xO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0Jhcikge1xyXG4gICAgICB0aGlzLm91dHNpZGVJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzKCksIDEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG91dHNpZGVUaW1lb3V0KGZ1bmM6IEZ1bmN0aW9uLCB0aW1lb3V0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLm5nWm9uZSkge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcihcclxuICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgKHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICgpID0+IHRoaXMucnVuSW5zaWRlQW5ndWxhcihmdW5jKSxcclxuICAgICAgICAgICAgdGltZW91dFxyXG4gICAgICAgICAgKSlcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYygpLCB0aW1lb3V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG91dHNpZGVJbnRlcnZhbChmdW5jOiBGdW5jdGlvbiwgdGltZW91dDogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5uZ1pvbmUpIHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoXHJcbiAgICAgICAgKCkgPT5cclxuICAgICAgICAgICh0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbChcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5ydW5JbnNpZGVBbmd1bGFyKGZ1bmMpLFxyXG4gICAgICAgICAgICB0aW1lb3V0XHJcbiAgICAgICAgICApKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gZnVuYygpLCB0aW1lb3V0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuSW5zaWRlQW5ndWxhcihmdW5jOiBGdW5jdGlvbikge1xyXG4gICAgaWYgKHRoaXMubmdab25lKSB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiBmdW5jKCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZnVuYygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0R2xvYmFsQ29uZmlnIGltcGxlbWVudHMgR2xvYmFsQ29uZmlnIHtcclxuICAvLyBHbG9iYWxcclxuICBtYXhPcGVuZWQgPSAwO1xyXG4gIGF1dG9EaXNtaXNzID0gZmFsc2U7XHJcbiAgbmV3ZXN0T25Ub3AgPSB0cnVlO1xyXG4gIHByZXZlbnREdXBsaWNhdGVzID0gZmFsc2U7XHJcbiAgcmVzZXRUaW1lb3V0T25EdXBsaWNhdGUgPSBmYWxzZTtcclxuICBpY29uQ2xhc3NlcyA9IHtcclxuICAgIGVycm9yOiAndG9hc3QtZXJyb3InLFxyXG4gICAgaW5mbzogJ3RvYXN0LWluZm8nLFxyXG4gICAgc3VjY2VzczogJ3RvYXN0LXN1Y2Nlc3MnLFxyXG4gICAgd2FybmluZzogJ3RvYXN0LXdhcm5pbmcnXHJcbiAgfTtcclxuXHJcbiAgLy8gSW5kaXZpZHVhbFxyXG4gIHRvYXN0Q29tcG9uZW50ID0gVG9hc3Q7XHJcbiAgY2xvc2VCdXR0b24gPSBmYWxzZTtcclxuICBkaXNhYmxlVGltZU91dDogZmFsc2U7XHJcbiAgdGltZU91dCA9IDUwMDA7XHJcbiAgZXh0ZW5kZWRUaW1lT3V0ID0gMTAwMDtcclxuICBlbmFibGVIdG1sID0gZmFsc2U7XHJcbiAgcHJvZ3Jlc3NCYXIgPSBmYWxzZTtcclxuICB0b2FzdENsYXNzID0gJ3RvYXN0JztcclxuICBwb3NpdGlvbkNsYXNzID0gJ3RvYXN0LXRvcC1yaWdodCc7XHJcbiAgdGl0bGVDbGFzcyA9ICd0b2FzdC10aXRsZSc7XHJcbiAgbWVzc2FnZUNsYXNzID0gJ3RvYXN0LW1lc3NhZ2UnO1xyXG4gIGVhc2luZyA9ICdlYXNlLWluJztcclxuICBlYXNlVGltZSA9IDMwMDtcclxuICB0YXBUb0Rpc21pc3MgPSB0cnVlO1xyXG4gIG9uQWN0aXZhdGVUaWNrID0gZmFsc2U7XHJcbiAgcHJvZ3Jlc3NBbmltYXRpb246ICdkZWNyZWFzaW5nJyB8ICdpbmNyZWFzaW5nJyA9ICdkZWNyZWFzaW5nJztcclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT3B0aW9uYWwsXHJcbiAgU2tpcFNlbGYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5JztcclxuaW1wb3J0IHsgT3ZlcmxheUNvbnRhaW5lciB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheS1jb250YWluZXInO1xyXG5pbXBvcnQgeyBEZWZhdWx0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LWNvbmZpZyc7XHJcbmltcG9ydCB7IFRPQVNUX0NPTkZJRyB9IGZyb20gJy4vdG9hc3QtdG9rZW4nO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi90b2FzdHItY29uZmlnJztcclxuaW1wb3J0IHsgVG9hc3RyU2VydmljZSB9IGZyb20gJy4vdG9hc3RyLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1RvYXN0XSxcclxuICBkZWNsYXJhdGlvbnM6IFtUb2FzdF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVG9hc3RdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RyTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFRvYXN0ck1vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvYXN0ck1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSXQgc2hvdWxkIG9ubHkgYmUgaW1wb3J0ZWQgaW4geW91ciBhcHBsaWNhdGlvblxcJ3MgbWFpbiBtb2R1bGUuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogUGFydGlhbDxHbG9iYWxDb25maWc+ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUb2FzdHJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogVE9BU1RfQ09ORklHLCB1c2VWYWx1ZTogeyBjb25maWcsIGRlZmF1bHRzOiBEZWZhdWx0R2xvYmFsQ29uZmlnIH0gfSxcclxuICAgICAgICBPdmVybGF5Q29udGFpbmVyLFxyXG4gICAgICAgIE92ZXJsYXksXHJcbiAgICAgICAgVG9hc3RyU2VydmljZSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBOZ01vZHVsZSxcclxuICBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEluZGl2aWR1YWxDb25maWcsIFRvYXN0UGFja2FnZSB9IGZyb20gJy4vdG9hc3RyLWNvbmZpZyc7XHJcbmltcG9ydCB7IFRvYXN0clNlcnZpY2UgfSBmcm9tICcuL3RvYXN0ci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnW3RvYXN0LWNvbXBvbmVudF0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGJ1dHRvbiAqbmdJZj1cIm9wdGlvbnMuY2xvc2VCdXR0b25cIiAoY2xpY2spPVwicmVtb3ZlKClcIiBjbGFzcz1cInRvYXN0LWNsb3NlLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICA8ZGl2ICpuZ0lmPVwidGl0bGVcIiBbY2xhc3NdPVwib3B0aW9ucy50aXRsZUNsYXNzXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJ0aXRsZVwiPlxyXG4gICAge3sgdGl0bGUgfX1cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwibWVzc2FnZSAmJiBvcHRpb25zLmVuYWJsZUh0bWxcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIlxyXG4gICAgW2NsYXNzXT1cIm9wdGlvbnMubWVzc2FnZUNsYXNzXCIgW2lubmVySFRNTF09XCJtZXNzYWdlXCI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cIm1lc3NhZ2UgJiYgIW9wdGlvbnMuZW5hYmxlSHRtbFwiIHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXHJcbiAgICBbY2xhc3NdPVwib3B0aW9ucy5tZXNzYWdlQ2xhc3NcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIm1lc3NhZ2VcIj5cclxuICAgIHt7IG1lc3NhZ2UgfX1cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwib3B0aW9ucy5wcm9ncmVzc0JhclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRvYXN0LXByb2dyZXNzXCIgW3N0eWxlLndpZHRoXT1cIndpZHRoICsgJyUnXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3ROb0FuaW1hdGlvbiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgbWVzc2FnZT86IHN0cmluZyB8IFNhZmVIdG1sIHwgbnVsbDtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBvcHRpb25zOiBJbmRpdmlkdWFsQ29uZmlnO1xyXG4gIG9yaWdpbmFsVGltZW91dDogbnVtYmVyO1xyXG4gIC8qKiB3aWR0aCBvZiBwcm9ncmVzcyBiYXIgKi9cclxuICB3aWR0aCA9IC0xO1xyXG4gIC8qKiBhIGNvbWJpbmF0aW9uIG9mIHRvYXN0IHR5cGUgYW5kIG9wdGlvbnMudG9hc3RDbGFzcyAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSB0b2FzdENsYXNzZXMgPSAnJztcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcclxuICBnZXQgZGlzcGxheVN0eWxlKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdpbmFjdGl2ZScpIHtcclxuICAgICAgcmV0dXJuICdub25lJztcclxuICAgIH1cclxuICAgIHJldHVybiAnaW5oZXJpdCc7XHJcbiAgfVxyXG5cclxuICAvKiogY29udHJvbHMgYW5pbWF0aW9uICovXHJcbiAgc3RhdGUgPSAnaW5hY3RpdmUnO1xyXG4gIHByaXZhdGUgdGltZW91dDogYW55O1xyXG4gIHByaXZhdGUgaW50ZXJ2YWxJZDogYW55O1xyXG4gIHByaXZhdGUgaGlkZVRpbWU6IG51bWJlcjtcclxuICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgc3ViMTogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgc3ViMjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCB0b2FzdHJTZXJ2aWNlOiBUb2FzdHJTZXJ2aWNlLFxyXG4gICAgcHVibGljIHRvYXN0UGFja2FnZTogVG9hc3RQYWNrYWdlLFxyXG4gICAgcHJvdGVjdGVkIGFwcFJlZjogQXBwbGljYXRpb25SZWZcclxuICApIHtcclxuICAgIHRoaXMubWVzc2FnZSA9IHRvYXN0UGFja2FnZS5tZXNzYWdlO1xyXG4gICAgdGhpcy50aXRsZSA9IHRvYXN0UGFja2FnZS50aXRsZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IHRvYXN0UGFja2FnZS5jb25maWc7XHJcbiAgICB0aGlzLm9yaWdpbmFsVGltZW91dCA9IHRvYXN0UGFja2FnZS5jb25maWcudGltZU91dDtcclxuICAgIHRoaXMudG9hc3RDbGFzc2VzID0gYCR7dG9hc3RQYWNrYWdlLnRvYXN0VHlwZX0gJHtcclxuICAgICAgdG9hc3RQYWNrYWdlLmNvbmZpZy50b2FzdENsYXNzXHJcbiAgICB9YDtcclxuICAgIHRoaXMuc3ViID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlVG9hc3QoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWIxID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLm1hbnVhbENsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3ViMiA9IHRvYXN0UGFja2FnZS50b2FzdFJlZi50aW1lb3V0UmVzZXQoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc2V0VGltZW91dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc3ViMS51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5zdWIyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogYWN0aXZhdGVzIHRvYXN0IGFuZCBzZXRzIHRpbWVvdXRcclxuICAgKi9cclxuICBhY3RpdmF0ZVRvYXN0KCkge1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdhY3RpdmUnO1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuZGlzYWJsZVRpbWVPdXQgJiYgdGhpcy5vcHRpb25zLnRpbWVPdXQpIHtcclxuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgfSwgdGhpcy5vcHRpb25zLnRpbWVPdXQpO1xyXG4gICAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB0aGlzLm9wdGlvbnMudGltZU91dDtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0Jhcikge1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLm9uQWN0aXZhdGVUaWNrKSB7XHJcbiAgICAgIHRoaXMuYXBwUmVmLnRpY2soKTtcclxuICAgIH1cclxuICB9XHJcbiAgLyoqXHJcbiAgICogdXBkYXRlcyBwcm9ncmVzcyBiYXIgd2lkdGhcclxuICAgKi9cclxuICB1cGRhdGVQcm9ncmVzcygpIHtcclxuICAgIGlmICh0aGlzLndpZHRoID09PSAwIHx8IHRoaXMud2lkdGggPT09IDEwMCB8fCAhdGhpcy5vcHRpb25zLnRpbWVPdXQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmhpZGVUaW1lIC0gbm93O1xyXG4gICAgdGhpcy53aWR0aCA9IChyZW1haW5pbmcgLyB0aGlzLm9wdGlvbnMudGltZU91dCkgKiAxMDA7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQW5pbWF0aW9uID09PSAnaW5jcmVhc2luZycpIHtcclxuICAgICAgdGhpcy53aWR0aCA9IDEwMCAtIHRoaXMud2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy53aWR0aCA8PSAwKSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMud2lkdGggPj0gMTAwKSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSAxMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldFRpbWVvdXQoKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICAgIHRoaXMuc3RhdGUgPSAnYWN0aXZlJztcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMudGltZU91dCA9IHRoaXMub3JpZ2luYWxUaW1lb3V0O1xyXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZSgpLCB0aGlzLm9yaWdpbmFsVGltZW91dCk7XHJcbiAgICB0aGlzLmhpZGVUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAodGhpcy5vcmlnaW5hbFRpbWVvdXQgfHwgMCk7XHJcbiAgICB0aGlzLndpZHRoID0gLTE7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdGVsbHMgdG9hc3RyU2VydmljZSB0byByZW1vdmUgdGhpcyB0b2FzdCBhZnRlciBhbmltYXRpb24gdGltZVxyXG4gICAqL1xyXG4gIHJlbW92ZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAncmVtb3ZlZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XHJcbiAgICB0aGlzLnN0YXRlID0gJ3JlbW92ZWQnO1xyXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PlxyXG4gICAgICB0aGlzLnRvYXN0clNlcnZpY2UucmVtb3ZlKHRoaXMudG9hc3RQYWNrYWdlLnRvYXN0SWQpXHJcbiAgICApO1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgdGFwVG9hc3QoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMudG9hc3RQYWNrYWdlLnRyaWdnZXJUYXAoKTtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMudGFwVG9EaXNtaXNzKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxyXG4gIHN0aWNrQXJvdW5kKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gMDtcclxuICAgIHRoaXMuaGlkZVRpbWUgPSAwO1xyXG5cclxuICAgIC8vIGRpc2FibGUgcHJvZ3Jlc3NCYXJcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcclxuICAgIHRoaXMud2lkdGggPSAwO1xyXG4gIH1cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcclxuICBkZWxheWVkSGlkZVRvYXN0KCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm9wdGlvbnMuZGlzYWJsZVRpbWVPdXQgfHxcclxuICAgICAgdGhpcy5vcHRpb25zLmV4dGVuZGVkVGltZU91dCA9PT0gMCB8fFxyXG4gICAgICB0aGlzLnN0YXRlID09PSAncmVtb3ZlZCdcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAoKSA9PiB0aGlzLnJlbW92ZSgpLFxyXG4gICAgICB0aGlzLm9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0XHJcbiAgICApO1xyXG4gICAgdGhpcy5vcHRpb25zLnRpbWVPdXQgPSB0aGlzLm9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0O1xyXG4gICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKHRoaXMub3B0aW9ucy50aW1lT3V0IHx8IDApO1xyXG4gICAgdGhpcy53aWR0aCA9IC0xO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wcm9ncmVzc0Jhcikge1xyXG4gICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzKCksIDEwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVG9hc3ROb0FuaW1hdGlvbl0sXHJcbiAgZXhwb3J0czogW1RvYXN0Tm9BbmltYXRpb25dLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1RvYXN0Tm9BbmltYXRpb25dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2FzdE5vQW5pbWF0aW9uTW9kdWxlIHt9XHJcbiJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJFbGVtZW50UmVmIiwiTmdNb2R1bGUiLCJTdWJqZWN0IiwidHNsaWJfMS5fX2V4dGVuZHMiLCJJbmplY3RhYmxlIiwiQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyIiwiQXBwbGljYXRpb25SZWYiLCJJbmplY3Rpb25Ub2tlbiIsInRzbGliXzEuX192YWx1ZXMiLCJJbmplY3QiLCJJbmplY3RvciIsIkRvbVNhbml0aXplciIsIk5nWm9uZSIsIkNvbXBvbmVudCIsInRyaWdnZXIiLCJzdGF0ZSIsInN0eWxlIiwidHJhbnNpdGlvbiIsImFuaW1hdGUiLCJIb3N0QmluZGluZyIsIkhvc3RMaXN0ZW5lciIsIkNvbW1vbk1vZHVsZSIsIk9wdGlvbmFsIiwiU2tpcFNlbGYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVdFLGlDQUFvQixFQUFjO1lBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtTQUFLOzs7O1FBQ3ZDLHFEQUFtQjs7O1lBQW5CO2dCQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDOUI7O29CQVJGQSxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjt3QkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtxQkFDM0I7Ozs7O3dCQVBDQyxlQUFVOzs7c0NBRlo7Ozs7OztvQkFpQkNDLGFBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7cUJBQ25DOzttQ0FwQkQ7OztJQ0FBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7YUFDaEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FB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