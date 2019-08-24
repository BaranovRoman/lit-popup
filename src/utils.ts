export const withPrefix = (text: string | number) => `[lit-popup] ${text}`;

export const KEYCODES = {
    ESC: 27,
};

export const listenOnce = (element: Element, eventName: string, fn: EventListener) => {
    element.addEventListener(eventName, function listener(...args) {
        element.removeEventListener(eventName, listener);
        fn(...args);
    });
};

export const triggerCustomEvent = (el: Element | Document | Window, eventName: string, data = {}): void => {
    let event;

    if (CustomEvent) {
        try {
            event = new CustomEvent(eventName, { detail: data });
        } catch (err) {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, true, true, data);
        }
    } else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, data);
    }

    el.dispatchEvent(event);
};
