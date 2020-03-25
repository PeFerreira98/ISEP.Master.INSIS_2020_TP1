package form.type;

import java.util.List;

import org.activiti.engine.form.AbstractFormType;
import org.activiti.engine.impl.util.json.JSONArray;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

@SuppressWarnings("unchecked")
public class SimpleTable extends AbstractFormType {

	private static final long serialVersionUID = 1L;

	public static final String TYPE_NAME = "simpleTable";

	private static Log log = LogFactory.getLog(SimpleTable.class);

	@Override
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

		List<String> list = (List<String>) modelValue;
		JSONArray array = new JSONArray();
		for (String string : list) {
			log.info("option: " + string);
			array.put(string);
		}

		return array.toString();
	}

}
