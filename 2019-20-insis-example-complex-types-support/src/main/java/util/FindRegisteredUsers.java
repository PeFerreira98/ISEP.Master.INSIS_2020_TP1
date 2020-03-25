package util;

import java.util.ArrayList;
import java.util.List;

import org.activiti.engine.ProcessEngine;
import org.activiti.engine.ProcessEngines;
import org.activiti.engine.delegate.DelegateExecution;
import org.activiti.engine.delegate.JavaDelegate;
import org.activiti.engine.identity.User;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class FindRegisteredUsers implements JavaDelegate {
	
	private static Log log = LogFactory.getLog(FindRegisteredUsers.class);

	public void execute(DelegateExecution execution) throws Exception {
		log.info("looking for registered users...");

		ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();

		List<User> users = processEngine.getIdentityService().createUserQuery().orderByUserId().asc().list();

		List<String> registeredUsers = new ArrayList<>();

		for (User user : users) {
			log.info("user: " + user.getId());
			registeredUsers.add(user.getId());
		}

		execution.setVariable("registeredUsers", registeredUsers);
	}

}
