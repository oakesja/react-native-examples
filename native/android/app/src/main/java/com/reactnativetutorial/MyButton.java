package com.reactnativetutorial;

import android.content.Context;
import android.util.AttributeSet;
import android.widget.Button;
import com.facebook.react.uimanager.ReactCompoundView;

public class MyButton extends Button implements ReactCompoundView {
    public MyButton(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public MyButton(Context context) {
        super(context);
    }

    public MyButton(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    @Override
    public int reactTagForTouch(float touchX, float touchY) {
        return getId();
    }
}
