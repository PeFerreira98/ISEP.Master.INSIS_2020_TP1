package form.listener;

import java.util.ArrayList;
import java.util.List;

import org.activiti.engine.delegate.DelegateTask;
import org.activiti.engine.delegate.Expression;
import org.activiti.engine.delegate.TaskListener;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class SelectedInfoListener implements TaskListener {
	
	private static final long serialVersionUID = 1L;

	private static final String ASSIGNEE = "assignee";
	private static final String SELECTED_FACT = "selectedFact";
	private static final String SELECTED_FACTS = "selectedFacts";

	private static Log log = LogFactory.getLog(SelectedInfoListener.class);

	public Expression variableNameExpression;

	@SuppressWarnings("unchecked")
	public void notify(DelegateTask delegateTask) {
		log.info("gathering opinions...");

		List<String> selectedFacts = new ArrayList<>();

		if (delegateTask.hasVariable(SELECTED_FACTS)) {
			selectedFacts = (List<String>) delegateTask.getVariable(SELECTED_FACTS);
		}

		String selectedFact = delegateTask.getVariable(SELECTED_FACT, String.class);
		String assignee = delegateTask.getVariable(ASSIGNEE, String.class);

		log.info(assignee + ": " + selectedFact);

		selectedFacts.add(assignee + ": " + selectedFact);

		delegateTask.setVariable(SELECTED_FACTS, selectedFacts);
	}

}
