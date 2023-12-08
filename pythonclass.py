class Student:
    def __init(self,name,regno):
        self.name=name
        self.regno=regno
class subclass2(student):
    def setdetail(self,marks):
        self.marks=marks
    
 class childclass(subclass2):
    def __init(self,result,percentage,grade):
        self.result=result
        self.percentage=percentage
        self.grade=grade

