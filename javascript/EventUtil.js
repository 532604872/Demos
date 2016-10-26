var EventUtil = {
	addHandler : function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		}
		else if(element.attachEvent){
			element.attachEvent("on" + type, handler);
		}
		else{
			element["on" + type] = handler;
		}
	},
	removeHandler : function(element, type, handler){
		if(element.removerEventListener){
			element.removerEventListener(type, handler, false)
		}
		else if(element.detachEvent){
			element.detachEvent("on" + type, handler);			
		}
		else{
			element["on" + type] = null;
		}
	},
	
	getEvent : function(event){
		return event ? event : window.event;
	},
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	preventDefault : function(event){
		if(event.preventDefault){
			event.preventDefault();			
		}
		else{
			event.returnValue = false;
		}
	},
	stopPropagtion : function(event){
		if(event.stopPropagtion){
			event.stopPropagtion();
		}
		else{
			event.cancelBubble = false;
		}
	},
	getRelatedTarget : function(event){
		if(event.relatedTarget){
			return event.relatedTarget;
		}
		else if(event.toElement){
			return event.toElement;
		}
		else if(event.fromElement){
			return event.fromElement;
		}
		else{
			return null;
		}		
	},
	getButton : function(event){
		if(document.implementation.hasFeature("MouseEvents", "2.0")){
			return event.button;
		}
		else{
			switch(event.button){
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;
				case 2:
				case 6:
					return 2;
				case 4:
					return 1;
			}
		}
	},
	getWheelDelta : function(event){
		if(event.wheelDelta){
			return (client.engine.opera && client.engine.opera < 9.5 ? 
					-event.wheelDelta : event.wheelDelta);
		}
		else{
			return -event.detail * 40;
		}
	},
	getCharCode : function(event){
		if(typeof event.charCode == "number"){
			return event.charCode;
		}
		else{
			return event.keyCode;
		}
	},
	getClipboardText : function(event){
		var clipboardData = (eventclipboardDate || window.clipboardData);
		return clipboardData/getDate("text");
	},
	setClipboardText : function(event, value){
		if(event.clipboardData){
			return event.clipboardData.setDate("text/pain", value);
		}
		else if(window.clipboardData){
			return window.clipboardData.setDate("text", value);
		}
	}
};

var EventTarget = function() {
    this._listener = {};
};

EventTarget.prototype = {
    constructor: this,
    addEvent: function(type, fn) {
        if (typeof type === "string" && typeof fn === "function") {
            if (typeof this._listener[type] === "undefined") {
                this._listener[type] = [fn];
            } else {
                this._listener[type].push(fn);    
            }
        }
        return this;
    },
    addEvents: function(obj) {
        obj = typeof obj === "object"? obj : {};
        var type;
        for (type in obj) {
            if ( type && typeof obj[type] === "function") {
                this.addEvent(type, obj[type]);    
            }
        }
        return this;
    },
    fireEvent: function(type) {
        if (type && this._listener[type]) {
            var events = {
                type: type,
                target: this    
            };
            
            for (var length = this._listener[type].length, start=0; start<length; start+=1) {
                this._listener[type][start].call(this, events);
            }
        }
        return this;
    },
    fireEvents: function(array) {
        if (array instanceof Array) {
            for (var i=0, length = array.length; i<length; i+=1) {
                this.fireEvent(array[i]);
            }
        }
        return this;
    },
    removeEvent: function(type, key) {
        var listeners = this._listener[type];
        if (listeners instanceof Array) {
            if (typeof key === "function") {
                for (var i=0, length=listeners.length; i<length; i+=1){
                    if (listeners[i] === key){
                        listeners.splice(i, 1);
                        break;
                    }
                }
            } else if (key instanceof Array) {
                for (var lis=0, lenkey = key.length; lis<lenkey; lis+=1) {
                    this.removeEvent(type, key[lenkey]);
                }
            } else {
                delete this._listener[type];
            }
        }
        return this;
    },
    removeEvents: function(params) {
        if (params instanceof Array) {
            for (var i=0, length = params.length; i<length; i+=1) {
                this.removeEvent(params[i]);
            }    
        } else if (typeof params === "object") {
            for (var type in params) {
                this.removeEvent(type, params[type]);    
            }
        }
        return this;    
    }
};