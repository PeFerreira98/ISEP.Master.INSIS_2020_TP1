package form.util;

import java.util.ArrayList;
import java.util.List;

import org.activiti.engine.ProcessEngine;
import org.activiti.engine.ProcessEngines;
import org.activiti.engine.delegate.DelegateExecution;
import org.activiti.engine.delegate.JavaDelegate;
import org.activiti.engine.identity.User;

public class FindRegisteredUsers implements JavaDelegate {

    public void execute(DelegateExecution execution) throws Exception {
    	
    	ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();
    	
        List<User> users = processEngine.getIdentityService().createUserQuery().orderByUserId().asc().list();
     
        List<String> registeredUsers = new ArrayList<String>();
        List<String> registeredUsersPeritos = new ArrayList<String>();

        for (User user: users) {
            registeredUsers.add(user.getId());
            
            if (user.getId().contains("perit")) {
            	registeredUsersPeritos.add(user.getId());
			}
        }

        execution.setVariable("registeredUsers", registeredUsers);
        execution.setVariable("registeredUsersPeritos", registeredUsersPeritos);
    }
}
