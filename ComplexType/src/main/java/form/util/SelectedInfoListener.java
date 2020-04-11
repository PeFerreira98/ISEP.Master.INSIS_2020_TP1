package form.util;

import org.activiti.engine.delegate.DelegateTask;
import org.activiti.engine.delegate.Expression;
import org.activiti.engine.delegate.TaskListener;

import java.util.ArrayList;
import java.util.List;

public class SelectedInfoListener implements TaskListener {

	private static final long serialVersionUID = 1L;
	
	private static final String ASSIGNEE = "assignee";
    private static final String SELECTED_FACT = "selectedFact";
    private static final String SELECTED_FACTS = "selectedFact";

    public Expression variableNameExpression;

    @SuppressWarnings("unchecked")
    public void notify(DelegateTask delegateTask){

        List<String> selectedFacts = new ArrayList<String>();

        if (delegateTask.hasVariable(SELECTED_FACTS)){
            selectedFacts = (List<String>) delegateTask.getVariable(SELECTED_FACTS);
        }

        String selectedFact = delegateTask.getVariable(SELECTED_FACT, String.class);
        String assignee = delegateTask.getVariable(ASSIGNEE, String.class);

        selectedFacts.add(assignee + ": " + selectedFact);

        delegateTask.setVariable(SELECTED_FACTS, selectedFacts);
    }
}
