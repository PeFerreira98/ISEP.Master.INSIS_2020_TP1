package form.type;

import org.activiti.engine.form.AbstractFormType;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

@SuppressWarnings("unchecked")
public class SimpleSelect extends AbstractFormType {

	private static final long serialVersionUID = 1L;

	public static final String TYPE_NAME = "simpleSelect";

	private static Log log = LogFactory.getLog(SimpleSelect.class);

	public String getName() {
		return TYPE_NAME;
	}

	@Override
	public Object convertFormValueToModelValue(String propertyValue) {
		log.info("convert FORM VALUE to MODEL VALUE");

		return propertyValue;
	}

	@Override
	public String convertModelValueToFormValue(Object modelValue) {
		log.info("convert MODEL VALUE to FORM VALUE");

		if (modelValue == null) {
			log.info("object is null");
			return null;
		}

		log.info("request data: " + modelValue.toString().subSequence(0, 100) + "...");

		return modelValue.toString();
	}

}
