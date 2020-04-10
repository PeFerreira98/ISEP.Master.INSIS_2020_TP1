package form.type;

import org.activiti.engine.form.AbstractFormType;

@SuppressWarnings("unchecked")
public class SimpleTable extends AbstractFormType {
	
    private static final long serialVersionUID = 1L;

    public static final String TYPE_NAME = "simpleTable";

    public String getName() {
        return TYPE_NAME;
    }

    @Override
    public Object convertFormValueToModelValue(String propertyValue) {
        return propertyValue;
    }

    @Override
    public String convertModelValueToFormValue(Object modelValue) {
        if	(modelValue	== null) {
            return null;
        }
        return modelValue.toString();
    }
}
