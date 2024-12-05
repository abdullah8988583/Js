#include <iostream>
#include <string.h>

using namespace std;

class Person{
    private:
    string name;
    int age;
public:
void namesetter(string n){
name=n;
}
string namegetter(){
    return name;
}
void agesetter(int a){
    age=a;
}
int agegetter(){
    return age;
}
Person (string x,int y){
    name=x;
    age=y;
}
Person(){
    name="Abdullah";
    age=18;
    
}
public:
void dowork(){
    cout <<"I am working on it";
}
public:
void dowork1(string assignedwork){
cout <<"I am working on: <assignedwork>" ;
}
string dowork2(string assignedwork){
    return assignedwork;
}
};

class Teacher:public Person{
private:
string subject;
public:
void subjectsetter(string s){
    subject=s;
}
string subjectgetter(){
    return subject;
}
};
class Student:public Person{
 private:
 string grade;
 public:
void gradsetter(string g){
    grade=g;
} 
string gradegetter(){
    return grade;
}
};

class HOD:public Teacher{
private:
string department;

public:
void deptsetter(string dt){
    department=dt;
}
public:
string deptgetter(){
    return department;
}
};
class Director:public Teacher{
protected:
int years;
public:
void yearsetter(int yr){
    years=yr;
}
public:
int yearsgetter(){
    return years;
}
void displaydetails(){
cout <<"Director Name : "<<namegetter() <<"\n";
cout <<"Director Age : "<<agegetter() <<"\n";
cout <<"Director Subject :"<<subjectgetter() <<"\n";
cout <<"Directors Years of Experience :"<<yearsgetter() <<"\n";


    
}
};
int main (){
Person p1;

Person p2;



p1.namesetter("Abdullah");

p2.agesetter(18);

cout <<p2.namegetter() <<"\n";

cout <<p2.agegetter() <<"\n";

Person p3;

p3.dowork();

p3.dowork1("Work!!");

cout<<p3.dowork2("Work!!") <<"\n";

Director d1;

d1.namesetter("Xyz");
d1.agesetter(60);
d1.subjectsetter("Computer Science");
d1.yearsetter(25);

d1.displaydetails();
return 0;
}
