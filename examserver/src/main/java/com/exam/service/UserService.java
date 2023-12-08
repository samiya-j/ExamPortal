package com.exam.service;
import com.exam.model.User;
import com.exam.model.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
public interface UserService {
    //creating user
    @Autowired
    public User createUser(User user,Set<UserRole> userRoles) throws Exception;

    public User getUser(String username);

    public void deleteUser(Long userId);
}
