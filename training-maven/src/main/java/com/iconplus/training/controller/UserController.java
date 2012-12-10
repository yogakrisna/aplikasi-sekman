package com.iconplus.training.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.iconplus.training.domain.SecmanService;
import com.iconplus.training.domain.User;

@Controller
public class UserController {
    
@Autowired private SecmanService secmanService;
    
    @RequestMapping("/user")
    @ResponseBody
    public List<User> cariUser(){
        return secmanService.cariSemuaUser();
    }
    
}