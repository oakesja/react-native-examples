package com.reactnativetutorial;

import android.support.annotation.Nullable;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class ButtonManager extends SimpleViewManager<MyButton> {
    public static final String REACT_CLASS = "RCTButton";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected MyButton createViewInstance(ThemedReactContext reactContext) {
        return new MyButton(reactContext);
    }

    @ReactProp(name = "text")
    public void setText(MyButton view, @Nullable String text) {
        view.setText(text);
    }
}
