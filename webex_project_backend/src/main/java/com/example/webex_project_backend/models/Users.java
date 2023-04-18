package com.example.webex_project_backend.models;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="user_firstname",length=100)
    private String firstname;
    @Column(name="user_lastname",length=100)
    private String lastname;
    @Column(name="user_email",length=50)
    private String email;
    @Column(name="user_password",length=50)
    private String password;
    @Column(name="user_status",length=50)
    private String status;

    public Users(){ }

    public Users(String parFirstName, String parLastName, String parEmail, String parPassword, String parStatus){
        super();
        this.firstname = parFirstName;
        this.lastname = parLastName;
        this.email = parEmail;
        this.password = parPassword;
        this.status = parStatus;
    }

    public long getId() { return id; }
    public void setId(long id) {
        this.id = id;
    }

    public String getUser_firstname() {
        return firstname;
    }
    public void setUser_firstname(String user_firstname) {
        this.firstname = user_firstname;
    }

    public String getUser_lastname() {
        return lastname;
    }
    public void setUser_lastname(String user_lastname) {
        this.lastname = user_lastname;
    }

    public String getUser_email() {
        return email;
    }
    public void setUser_email(String user_email) {
        this.email = user_email;
    }

    public String getUser_password() {
        return password;
    }
    public void setUser_password(String user_password) {
        this.password = user_password;
    }

    public String getUser_status() {
        return status;
    }
    public void setUser_status(String user_status) {
        this.status = user_status;
    }

}
