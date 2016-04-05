package com.reactnativetutorial;

import android.support.annotation.Nullable;

import android.view.View;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class ButtonManager extends SimpleViewManager<MyButton> {
    public static final String REACT_CLASS = "RCTButton";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected MyButton createViewInstance(final ThemedReactContext reactContext) {
        final MyButton b = new MyButton(reactContext);
        b.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        b.getId(),
                        "topChange",
                        Arguments.createMap());
            }
        });
        return b;
    }

    @ReactProp(name = "text")
    public void setText(MyButton view, @Nullable String text) {
        view.setText(text);
    }
}
