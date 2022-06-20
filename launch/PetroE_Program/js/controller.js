var app = angular.module("main", []);
app.controller("main", function($scope) { 
$scope.selectedPlan = "TraditionalPlan";
var that = this;
this.render = function(plan) {
            this.disable(this.previousPlan);
            this.enable(plan);
            this.previousPlan = plan;
};
var radios = document.querySelectorAll("input[type=radio][name=planselector]");
Array.prototype.forEach.call(radios, function (radio) {
    radio.addEventListener("change", function () { 
that.setDefaults($scope.selectedPlan);
that.render($scope.selectedPlan);
   });
});
this.TraditionalPlanList = [];
this.TraditionalPlanClicked = [];
this.TraditionalPlanLegendBtns = [];
this.TraditionalPlanLegendBtnsClicked = [];
this.TraditionalPlanTerms = 8;
this.TraditionalPlanMaxCourses = 7;
this.TraditionalPlanProposedList = [];
this.TraditionalPlanProposedClicked = [];
this.TraditionalPlanProposedLegendBtns = [];
this.TraditionalPlanProposedLegendBtnsClicked = [];
this.TraditionalPlanProposedTerms = 8;
this.TraditionalPlanProposedMaxCourses = 7;
this.CoopPlanList = [];
this.CoopPlanClicked = [];
this.CoopPlanLegendBtns = [];
this.CoopPlanLegendBtnsClicked = [];
this.CoopPlanTerms = 13;
this.CoopPlanMaxCourses = 7;
this.CoopPlanProposedList = [];
this.CoopPlanProposedClicked = [];
this.CoopPlanProposedLegendBtns = [];
this.CoopPlanProposedLegendBtnsClicked = [];
this.CoopPlanProposedTerms = 13;
this.CoopPlanProposedMaxCourses = 8;
this.previousPlan = $scope.selectedPlan
this.setDefaults = function(plan) { 
  switch(plan) { 
      case "TraditionalPlan": 
          $scope.$apply();
          break;
      case "TraditionalPlanProposed": 
          $scope.$apply();
          break;
      case "CoopPlan": 
          $scope.$apply();
          break;
      case "CoopPlanProposed": 
          $scope.$apply();
          break;
    default:
    console.log("shouldn't be here");
    }
};
$scope.globalSubGroupChange = function () { 
that.render($scope.selectedPlan);
};
this.disable = function(plan) {
    switch (plan) { 
  case "TraditionalPlan": 
    for (let i = 0; i < this.TraditionalPlanList.length; i++) {
        this.TraditionalPlanList[i][0].hide(true);
    }
    break; 
  case "TraditionalPlanProposed": 
    for (let i = 0; i < this.TraditionalPlanProposedList.length; i++) {
        this.TraditionalPlanProposedList[i][0].hide(true);
    }
    break; 
  case "CoopPlan": 
    for (let i = 0; i < this.CoopPlanList.length; i++) {
        this.CoopPlanList[i][0].hide(true);
    }
    break; 
  case "CoopPlanProposed": 
    for (let i = 0; i < this.CoopPlanProposedList.length; i++) {
        this.CoopPlanProposedList[i][0].hide(true);
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
  var currbtn = document.getElementById("NaturalSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.TraditionalPlanProposedLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopPlanProposedLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringProfession");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.TraditionalPlanProposedLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopPlanProposedLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Other");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.TraditionalPlanProposedLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopPlanProposedLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Math");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.TraditionalPlanProposedLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopPlanProposedLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringDesign");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.TraditionalPlanProposedLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopPlanProposedLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.TraditionalPlanProposedLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopPlanProposedLegendBtns.push(currbtn);
  var currbtn = document.getElementById("COMP");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.TraditionalPlanProposedLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopPlanProposedLegendBtns.push(currbtn);
  var currbtn = document.getElementById("PROG");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.TraditionalPlanProposedLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopPlanProposedLegendBtns.push(currbtn);
  var currbtn = document.getElementById("ITS");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.TraditionalPlanProposedLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopPlanProposedLegendBtns.push(currbtn);
this.enable = function(plan) {
  switch(plan) {
    case "TraditionalPlan": 
      for (let i = 0; i < this.TraditionalPlanList.length; i++) {
          this.TraditionalPlanList[i][0].show(true);
      }
      width = this.TraditionalPlanTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlanMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlanClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlanClicked[i][0]);
          element.classList.remove(this.TraditionalPlanClicked[i][1]);
          element.classList.add(this.TraditionalPlanClicked[i][1]+"-highlighted");
      }
      for (let i = 0; i < this.TraditionalPlanLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.TraditionalPlanLegendBtnsClicked.length; j++) {
              if (this.TraditionalPlanLegendBtnsClicked[j] == this.TraditionalPlanLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
              this.TraditionalPlanLegendBtns[i].classList.remove("legendbutton-pressed");
              this.TraditionalPlanLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
              this.TraditionalPlanLegendBtns[i].classList.remove("legendbutton");
              this.TraditionalPlanLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    case "TraditionalPlanProposed": 
      for (let i = 0; i < this.TraditionalPlanProposedList.length; i++) {
          this.TraditionalPlanProposedList[i][0].show(true);
      }
      width = this.TraditionalPlanProposedTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.TraditionalPlanProposedMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.TraditionalPlanProposedClicked.length; i++) {
          var element = document.getElementById(this.TraditionalPlanProposedClicked[i][0]);
          element.classList.remove(this.TraditionalPlanProposedClicked[i][1]);
          element.classList.add(this.TraditionalPlanProposedClicked[i][1]+"-highlighted");
      }
      for (let i = 0; i < this.TraditionalPlanProposedLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.TraditionalPlanProposedLegendBtnsClicked.length; j++) {
              if (this.TraditionalPlanProposedLegendBtnsClicked[j] == this.TraditionalPlanProposedLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
              this.TraditionalPlanProposedLegendBtns[i].classList.remove("legendbutton-pressed");
              this.TraditionalPlanProposedLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
              this.TraditionalPlanProposedLegendBtns[i].classList.remove("legendbutton");
              this.TraditionalPlanProposedLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    case "CoopPlan": 
      for (let i = 0; i < this.CoopPlanList.length; i++) {
          this.CoopPlanList[i][0].show(true);
      }
      width = this.CoopPlanTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlanMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlanClicked.length; i++) {
          var element = document.getElementById(this.CoopPlanClicked[i][0]);
          element.classList.remove(this.CoopPlanClicked[i][1]);
          element.classList.add(this.CoopPlanClicked[i][1]+"-highlighted");
      }
      for (let i = 0; i < this.CoopPlanLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.CoopPlanLegendBtnsClicked.length; j++) {
              if (this.CoopPlanLegendBtnsClicked[j] == this.CoopPlanLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
              this.CoopPlanLegendBtns[i].classList.remove("legendbutton-pressed");
              this.CoopPlanLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
              this.CoopPlanLegendBtns[i].classList.remove("legendbutton");
              this.CoopPlanLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    case "CoopPlanProposed": 
      for (let i = 0; i < this.CoopPlanProposedList.length; i++) {
          this.CoopPlanProposedList[i][0].show(true);
      }
      width = this.CoopPlanProposedTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlanProposedMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlanProposedClicked.length; i++) {
          var element = document.getElementById(this.CoopPlanProposedClicked[i][0]);
          element.classList.remove(this.CoopPlanProposedClicked[i][1]);
          element.classList.add(this.CoopPlanProposedClicked[i][1]+"-highlighted");
      }
      for (let i = 0; i < this.CoopPlanProposedLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.CoopPlanProposedLegendBtnsClicked.length; j++) {
              if (this.CoopPlanProposedLegendBtnsClicked[j] == this.CoopPlanProposedLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
              this.CoopPlanProposedLegendBtns[i].classList.remove("legendbutton-pressed");
              this.CoopPlanProposedLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
              this.CoopPlanProposedLegendBtns[i].classList.remove("legendbutton");
              this.CoopPlanProposedLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    default:
    console.log("shouldn't be here");
    }
};
this.addLine = function(line) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlanList.push([line, 1])
    }
    else {
        this.TraditionalPlanList[index][1]++;
    }
    break;
 case "TraditionalPlanProposed":
    var index = this.TraditionalPlanProposedList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.TraditionalPlanProposedList.push([line, 1])
    }
    else {
        this.TraditionalPlanProposedList[index][1]++;
    }
    break;
 case "CoopPlan":
    var index = this.CoopPlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlanList.push([line, 1])
    }
    else {
        this.CoopPlanList[index][1]++;
    }
    break;
 case "CoopPlanProposed":
    var index = this.CoopPlanProposedList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlanProposedList.push([line, 1])
    }
    else {
        this.CoopPlanProposedList[index][1]++;
    }
    break;
    default:
    console.log("shouldn't be here");
    }
};
this.removeLine = function(line) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlanList[index][1]--
        if (this.TraditionalPlanList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlanList.splice(index, 1);
        }
    }
    break; case "TraditionalPlanProposed":
    var index = this.TraditionalPlanProposedList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.TraditionalPlanProposedList[index][1]--
        if (this.TraditionalPlanProposedList[index][1] <= 0) {
            line.hide(false);
            this.TraditionalPlanProposedList.splice(index, 1);
        }
    }
    break; case "CoopPlan":
    var index = this.CoopPlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlanList[index][1]--
        if (this.CoopPlanList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlanList.splice(index, 1);
        }
    }
    break; case "CoopPlanProposed":
    var index = this.CoopPlanProposedList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlanProposedList[index][1]--
        if (this.CoopPlanProposedList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlanProposedList.splice(index, 1);
        }
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
this.addToClicked = function(element) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanClicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.TraditionalPlanClicked.push(element);
    }
    break; case "TraditionalPlanProposed":
    var index = this.TraditionalPlanProposedClicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.TraditionalPlanProposedClicked.push(element);
    }
    break; case "CoopPlan":
    var index = this.CoopPlanClicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.CoopPlanClicked.push(element);
    }
    break; case "CoopPlanProposed":
    var index = this.CoopPlanProposedClicked.findIndex((item) => item[0] == element[0]);
    if (index == -1) {
        this.CoopPlanProposedClicked.push(element);
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
this.removeFromClicked = function(element) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.TraditionalPlanClicked.splice(index, 1);
    }
    break; case "TraditionalPlanProposed":
    var index = this.TraditionalPlanProposedClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.TraditionalPlanProposedClicked.splice(index, 1);
    }
    break; case "CoopPlan":
    var index = this.CoopPlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.CoopPlanClicked.splice(index, 1);
    }
    break; case "CoopPlanProposed":
    var index = this.CoopPlanProposedClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        this.CoopPlanProposedClicked.splice(index, 1);
    }
    break;    default:
    console.log("shouldn't be here");
    }
};
var NaturalSciencesTraditionalPlanflag = false;
var NaturalSciencesTraditionalPlanProposedflag = false;
var NaturalSciencesCoopPlanflag = false;
var NaturalSciencesCoopPlanProposedflag = false;
var EngineeringProfessionTraditionalPlanflag = false;
var EngineeringProfessionTraditionalPlanProposedflag = false;
var EngineeringProfessionCoopPlanflag = false;
var EngineeringProfessionCoopPlanProposedflag = false;
var OtherTraditionalPlanflag = false;
var OtherTraditionalPlanProposedflag = false;
var OtherCoopPlanflag = false;
var OtherCoopPlanProposedflag = false;
var MathTraditionalPlanflag = false;
var MathTraditionalPlanProposedflag = false;
var MathCoopPlanflag = false;
var MathCoopPlanProposedflag = false;
var EngineeringDesignTraditionalPlanflag = false;
var EngineeringDesignTraditionalPlanProposedflag = false;
var EngineeringDesignCoopPlanflag = false;
var EngineeringDesignCoopPlanProposedflag = false;
var EngineeringSciencesTraditionalPlanflag = false;
var EngineeringSciencesTraditionalPlanProposedflag = false;
var EngineeringSciencesCoopPlanflag = false;
var EngineeringSciencesCoopPlanProposedflag = false;
var COMPTraditionalPlanflag = false;
var COMPTraditionalPlanProposedflag = false;
var COMPCoopPlanflag = false;
var COMPCoopPlanProposedflag = false;
var PROGTraditionalPlanflag = false;
var PROGTraditionalPlanProposedflag = false;
var PROGCoopPlanflag = false;
var PROGCoopPlanProposedflag = false;
var ITSTraditionalPlanflag = false;
var ITSTraditionalPlanProposedflag = false;
var ITSCoopPlanflag = false;
var ITSCoopPlanProposedflag = false;
$scope.NaturalSciencesclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("NaturalSciences");
    var checkFlag = "!NaturalSciences" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("NaturalSciences", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "NaturalSciences" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("NaturalSciences", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "NaturalSciences" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.EngineeringProfessionclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("EngineeringProfession");
    var checkFlag = "!EngineeringProfession" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("EngineeringProfession", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringProfession" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringProfession", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringProfession" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.OtherclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("Other");
    var checkFlag = "!Other" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("Other", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "Other" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("Other", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "Other" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.MathclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("Math");
    var checkFlag = "!Math" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("Math", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "Math" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("Math", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "Math" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.EngineeringDesignclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("EngineeringDesign");
    var checkFlag = "!EngineeringDesign" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("EngineeringDesign", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringDesign" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringDesign", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringDesign" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.EngineeringSciencesclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("EngineeringSciences");
    var checkFlag = "!EngineeringSciences" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("EngineeringSciences", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringSciences" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringSciences", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringSciences" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.COMPclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("COMP");
    var checkFlag = "!COMP" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("COMP", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "COMP" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("COMP", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "COMP" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.PROGclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("PROG");
    var checkFlag = "!PROG" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("PROG", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "PROG" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("PROG", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "PROG" + planName + "flag";
        eval(flagName + " = false");
    }
}
$scope.ITSclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("ITS");
    var checkFlag = "!ITS" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("ITS", planName);
        pressedbtn.classList.remove("legendbutton");
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "ITS" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("ITS", planName);
        pressedbtn.classList.remove("legendbutton-pressed");
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "ITS" + planName + "flag";
        eval(flagName + " = false");
    }
}
this.highlightCategory = function(categoryName, planName) {
switch(categoryName) { 
  case "NaturalSciences":
    switch(planName) {
      case "TraditionalPlan":
       var CHEM103TraditionalPlanelement = document.getElementById("CHEM103TraditionalPlan");
       CHEM103TraditionalPlanelement.classList.remove("NaturalSciences");
       CHEM103TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM103TraditionalPlan","NaturalSciences"]);
       var ENGG130TraditionalPlanelement = document.getElementById("ENGG130TraditionalPlan");
       ENGG130TraditionalPlanelement.classList.remove("NaturalSciences");
       ENGG130TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENGG130TraditionalPlan","NaturalSciences"]);
       var PHYS130TraditionalPlanelement = document.getElementById("PHYS130TraditionalPlan");
       PHYS130TraditionalPlanelement.classList.remove("NaturalSciences");
       PHYS130TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["PHYS130TraditionalPlan","NaturalSciences"]);
       var CHEM105TraditionalPlanelement = document.getElementById("CHEM105TraditionalPlan");
       CHEM105TraditionalPlanelement.classList.remove("NaturalSciences");
       CHEM105TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM105TraditionalPlan","NaturalSciences"]);
       var ENCMP100TraditionalPlanelement = document.getElementById("ENCMP100TraditionalPlan");
       ENCMP100TraditionalPlanelement.classList.remove("NaturalSciences");
       ENCMP100TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENCMP100TraditionalPlan","NaturalSciences"]);
       var ENPH131TraditionalPlanelement = document.getElementById("ENPH131TraditionalPlan");
       ENPH131TraditionalPlanelement.classList.remove("NaturalSciences");
       ENPH131TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENPH131TraditionalPlan","NaturalSciences"]);
       var EAS210TraditionalPlanelement = document.getElementById("EAS210TraditionalPlan");
       EAS210TraditionalPlanelement.classList.remove("NaturalSciences");
       EAS210TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["EAS210TraditionalPlan","NaturalSciences"]);
       var CHEM371TraditionalPlanelement = document.getElementById("CHEM371TraditionalPlan");
       CHEM371TraditionalPlanelement.classList.remove("NaturalSciences");
       CHEM371TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM371TraditionalPlan","NaturalSciences"]);
       var EAS222TraditionalPlanelement = document.getElementById("EAS222TraditionalPlan");
       EAS222TraditionalPlanelement.classList.remove("NaturalSciences");
       EAS222TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["EAS222TraditionalPlan","NaturalSciences"]);
       var CHE314TraditionalPlanelement = document.getElementById("CHE314TraditionalPlan");
       CHE314TraditionalPlanelement.classList.remove("NaturalSciences");
       CHE314TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHE314TraditionalPlan","NaturalSciences"]);
       break;
      case "TraditionalPlanProposed":
       var CHEM103TraditionalPlanProposedelement = document.getElementById("CHEM103TraditionalPlanProposed");
       CHEM103TraditionalPlanProposedelement.classList.remove("NaturalSciences");
       CHEM103TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM103TraditionalPlanProposed","NaturalSciences"]);
       var ENGG130TraditionalPlanProposedelement = document.getElementById("ENGG130TraditionalPlanProposed");
       ENGG130TraditionalPlanProposedelement.classList.remove("NaturalSciences");
       ENGG130TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENGG130TraditionalPlanProposed","NaturalSciences"]);
       var PHYS130TraditionalPlanProposedelement = document.getElementById("PHYS130TraditionalPlanProposed");
       PHYS130TraditionalPlanProposedelement.classList.remove("NaturalSciences");
       PHYS130TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["PHYS130TraditionalPlanProposed","NaturalSciences"]);
       var CHEM105TraditionalPlanProposedelement = document.getElementById("CHEM105TraditionalPlanProposed");
       CHEM105TraditionalPlanProposedelement.classList.remove("NaturalSciences");
       CHEM105TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM105TraditionalPlanProposed","NaturalSciences"]);
       var ENCMP100TraditionalPlanProposedelement = document.getElementById("ENCMP100TraditionalPlanProposed");
       ENCMP100TraditionalPlanProposedelement.classList.remove("NaturalSciences");
       ENCMP100TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENCMP100TraditionalPlanProposed","NaturalSciences"]);
       var ENPH131TraditionalPlanProposedelement = document.getElementById("ENPH131TraditionalPlanProposed");
       ENPH131TraditionalPlanProposedelement.classList.remove("NaturalSciences");
       ENPH131TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENPH131TraditionalPlanProposed","NaturalSciences"]);
       var EAS210TraditionalPlanProposedelement = document.getElementById("EAS210TraditionalPlanProposed");
       EAS210TraditionalPlanProposedelement.classList.remove("NaturalSciences");
       EAS210TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["EAS210TraditionalPlanProposed","NaturalSciences"]);
       var CHEM371TraditionalPlanProposedelement = document.getElementById("CHEM371TraditionalPlanProposed");
       CHEM371TraditionalPlanProposedelement.classList.remove("NaturalSciences");
       CHEM371TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM371TraditionalPlanProposed","NaturalSciences"]);
       var CHE314TraditionalPlanProposedelement = document.getElementById("CHE314TraditionalPlanProposed");
       CHE314TraditionalPlanProposedelement.classList.remove("NaturalSciences");
       CHE314TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHE314TraditionalPlanProposed","NaturalSciences"]);
       var EAS222TraditionalPlanProposedelement = document.getElementById("EAS222TraditionalPlanProposed");
       EAS222TraditionalPlanProposedelement.classList.remove("NaturalSciences");
       EAS222TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["EAS222TraditionalPlanProposed","NaturalSciences"]);
       break;
      case "CoopPlan":
       var CHEM103CoopPlanelement = document.getElementById("CHEM103CoopPlan");
       CHEM103CoopPlanelement.classList.remove("NaturalSciences");
       CHEM103CoopPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM103CoopPlan","NaturalSciences"]);
       var ENGG130CoopPlanelement = document.getElementById("ENGG130CoopPlan");
       ENGG130CoopPlanelement.classList.remove("NaturalSciences");
       ENGG130CoopPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENGG130CoopPlan","NaturalSciences"]);
       var PHYS130CoopPlanelement = document.getElementById("PHYS130CoopPlan");
       PHYS130CoopPlanelement.classList.remove("NaturalSciences");
       PHYS130CoopPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["PHYS130CoopPlan","NaturalSciences"]);
       var CHEM105CoopPlanelement = document.getElementById("CHEM105CoopPlan");
       CHEM105CoopPlanelement.classList.remove("NaturalSciences");
       CHEM105CoopPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM105CoopPlan","NaturalSciences"]);
       var ENCMP100CoopPlanelement = document.getElementById("ENCMP100CoopPlan");
       ENCMP100CoopPlanelement.classList.remove("NaturalSciences");
       ENCMP100CoopPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENCMP100CoopPlan","NaturalSciences"]);
       var ENPH131CoopPlanelement = document.getElementById("ENPH131CoopPlan");
       ENPH131CoopPlanelement.classList.remove("NaturalSciences");
       ENPH131CoopPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENPH131CoopPlan","NaturalSciences"]);
       var EAS210CoopPlanelement = document.getElementById("EAS210CoopPlan");
       EAS210CoopPlanelement.classList.remove("NaturalSciences");
       EAS210CoopPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["EAS210CoopPlan","NaturalSciences"]);
       var EAS222CoopPlanelement = document.getElementById("EAS222CoopPlan");
       EAS222CoopPlanelement.classList.remove("NaturalSciences");
       EAS222CoopPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["EAS222CoopPlan","NaturalSciences"]);
       var CHEM371CoopPlanelement = document.getElementById("CHEM371CoopPlan");
       CHEM371CoopPlanelement.classList.remove("NaturalSciences");
       CHEM371CoopPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM371CoopPlan","NaturalSciences"]);
       var CHE314CoopPlanelement = document.getElementById("CHE314CoopPlan");
       CHE314CoopPlanelement.classList.remove("NaturalSciences");
       CHE314CoopPlanelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHE314CoopPlan","NaturalSciences"]);
       break;
      case "CoopPlanProposed":
       var CHEM103CoopPlanProposedelement = document.getElementById("CHEM103CoopPlanProposed");
       CHEM103CoopPlanProposedelement.classList.remove("NaturalSciences");
       CHEM103CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM103CoopPlanProposed","NaturalSciences"]);
       var ENGG130CoopPlanProposedelement = document.getElementById("ENGG130CoopPlanProposed");
       ENGG130CoopPlanProposedelement.classList.remove("NaturalSciences");
       ENGG130CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENGG130CoopPlanProposed","NaturalSciences"]);
       var PHYS130CoopPlanProposedelement = document.getElementById("PHYS130CoopPlanProposed");
       PHYS130CoopPlanProposedelement.classList.remove("NaturalSciences");
       PHYS130CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["PHYS130CoopPlanProposed","NaturalSciences"]);
       var CHEM105CoopPlanProposedelement = document.getElementById("CHEM105CoopPlanProposed");
       CHEM105CoopPlanProposedelement.classList.remove("NaturalSciences");
       CHEM105CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM105CoopPlanProposed","NaturalSciences"]);
       var ENCMP100CoopPlanProposedelement = document.getElementById("ENCMP100CoopPlanProposed");
       ENCMP100CoopPlanProposedelement.classList.remove("NaturalSciences");
       ENCMP100CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENCMP100CoopPlanProposed","NaturalSciences"]);
       var ENPH131CoopPlanProposedelement = document.getElementById("ENPH131CoopPlanProposed");
       ENPH131CoopPlanProposedelement.classList.remove("NaturalSciences");
       ENPH131CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["ENPH131CoopPlanProposed","NaturalSciences"]);
       var EAS210CoopPlanProposedelement = document.getElementById("EAS210CoopPlanProposed");
       EAS210CoopPlanProposedelement.classList.remove("NaturalSciences");
       EAS210CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["EAS210CoopPlanProposed","NaturalSciences"]);
       var EAS222CoopPlanProposedelement = document.getElementById("EAS222CoopPlanProposed");
       EAS222CoopPlanProposedelement.classList.remove("NaturalSciences");
       EAS222CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["EAS222CoopPlanProposed","NaturalSciences"]);
       var CHEM371CoopPlanProposedelement = document.getElementById("CHEM371CoopPlanProposed");
       CHEM371CoopPlanProposedelement.classList.remove("NaturalSciences");
       CHEM371CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHEM371CoopPlanProposed","NaturalSciences"]);
       var CHE314CoopPlanProposedelement = document.getElementById("CHE314CoopPlanProposed");
       CHE314CoopPlanProposedelement.classList.remove("NaturalSciences");
       CHE314CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
       that.addToClicked(["CHE314CoopPlanProposed","NaturalSciences"]);
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "TraditionalPlan":
       var ENGG100TraditionalPlanelement = document.getElementById("ENGG100TraditionalPlan");
       ENGG100TraditionalPlanelement.classList.remove("EngineeringProfession");
       ENGG100TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG100TraditionalPlan","EngineeringProfession"]);
       var ENGG404TraditionalPlanelement = document.getElementById("ENGG404TraditionalPlan");
       ENGG404TraditionalPlanelement.classList.remove("EngineeringProfession");
       ENGG404TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG404TraditionalPlan","EngineeringProfession"]);
       var ENGG400TraditionalPlanelement = document.getElementById("ENGG400TraditionalPlan");
       ENGG400TraditionalPlanelement.classList.remove("EngineeringProfession");
       ENGG400TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG400TraditionalPlan","EngineeringProfession"]);
       break;
      case "TraditionalPlanProposed":
       var ENGG100TraditionalPlanProposedelement = document.getElementById("ENGG100TraditionalPlanProposed");
       ENGG100TraditionalPlanProposedelement.classList.remove("EngineeringProfession");
       ENGG100TraditionalPlanProposedelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG100TraditionalPlanProposed","EngineeringProfession"]);
       var ENGG404TraditionalPlanProposedelement = document.getElementById("ENGG404TraditionalPlanProposed");
       ENGG404TraditionalPlanProposedelement.classList.remove("EngineeringProfession");
       ENGG404TraditionalPlanProposedelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG404TraditionalPlanProposed","EngineeringProfession"]);
       var ENGG400TraditionalPlanProposedelement = document.getElementById("ENGG400TraditionalPlanProposed");
       ENGG400TraditionalPlanProposedelement.classList.remove("EngineeringProfession");
       ENGG400TraditionalPlanProposedelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG400TraditionalPlanProposed","EngineeringProfession"]);
       break;
      case "CoopPlan":
       var ENGG100CoopPlanelement = document.getElementById("ENGG100CoopPlan");
       ENGG100CoopPlanelement.classList.remove("EngineeringProfession");
       ENGG100CoopPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG100CoopPlan","EngineeringProfession"]);
       var ENGG299CoopPlanelement = document.getElementById("ENGG299CoopPlan");
       ENGG299CoopPlanelement.classList.remove("EngineeringProfession");
       ENGG299CoopPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG299CoopPlan","EngineeringProfession"]);
       var WKEXP901CoopPlanelement = document.getElementById("WKEXP901CoopPlan");
       WKEXP901CoopPlanelement.classList.remove("EngineeringProfession");
       WKEXP901CoopPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["WKEXP901CoopPlan","EngineeringProfession"]);
       var WKEXP902CoopPlanelement = document.getElementById("WKEXP902CoopPlan");
       WKEXP902CoopPlanelement.classList.remove("EngineeringProfession");
       WKEXP902CoopPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["WKEXP902CoopPlan","EngineeringProfession"]);
       var WKEXP903CoopPlanelement = document.getElementById("WKEXP903CoopPlan");
       WKEXP903CoopPlanelement.classList.remove("EngineeringProfession");
       WKEXP903CoopPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["WKEXP903CoopPlan","EngineeringProfession"]);
       var WKEXP904CoopPlanelement = document.getElementById("WKEXP904CoopPlan");
       WKEXP904CoopPlanelement.classList.remove("EngineeringProfession");
       WKEXP904CoopPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["WKEXP904CoopPlan","EngineeringProfession"]);
       var WKEXP905CoopPlanelement = document.getElementById("WKEXP905CoopPlan");
       WKEXP905CoopPlanelement.classList.remove("EngineeringProfession");
       WKEXP905CoopPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["WKEXP905CoopPlan","EngineeringProfession"]);
       var ENGG404CoopPlanelement = document.getElementById("ENGG404CoopPlan");
       ENGG404CoopPlanelement.classList.remove("EngineeringProfession");
       ENGG404CoopPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG404CoopPlan","EngineeringProfession"]);
       var ENGG400CoopPlanelement = document.getElementById("ENGG400CoopPlan");
       ENGG400CoopPlanelement.classList.remove("EngineeringProfession");
       ENGG400CoopPlanelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG400CoopPlan","EngineeringProfession"]);
       break;
      case "CoopPlanProposed":
       var ENGG100CoopPlanProposedelement = document.getElementById("ENGG100CoopPlanProposed");
       ENGG100CoopPlanProposedelement.classList.remove("EngineeringProfession");
       ENGG100CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG100CoopPlanProposed","EngineeringProfession"]);
       var ENGG299CoopPlanProposedelement = document.getElementById("ENGG299CoopPlanProposed");
       ENGG299CoopPlanProposedelement.classList.remove("EngineeringProfession");
       ENGG299CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG299CoopPlanProposed","EngineeringProfession"]);
       var WKEXP901CoopPlanProposedelement = document.getElementById("WKEXP901CoopPlanProposed");
       WKEXP901CoopPlanProposedelement.classList.remove("EngineeringProfession");
       WKEXP901CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["WKEXP901CoopPlanProposed","EngineeringProfession"]);
       var WKEXP902CoopPlanProposedelement = document.getElementById("WKEXP902CoopPlanProposed");
       WKEXP902CoopPlanProposedelement.classList.remove("EngineeringProfession");
       WKEXP902CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["WKEXP902CoopPlanProposed","EngineeringProfession"]);
       var WKEXP903CoopPlanProposedelement = document.getElementById("WKEXP903CoopPlanProposed");
       WKEXP903CoopPlanProposedelement.classList.remove("EngineeringProfession");
       WKEXP903CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["WKEXP903CoopPlanProposed","EngineeringProfession"]);
       var WKEXP904CoopPlanProposedelement = document.getElementById("WKEXP904CoopPlanProposed");
       WKEXP904CoopPlanProposedelement.classList.remove("EngineeringProfession");
       WKEXP904CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["WKEXP904CoopPlanProposed","EngineeringProfession"]);
       var WKEXP905CoopPlanProposedelement = document.getElementById("WKEXP905CoopPlanProposed");
       WKEXP905CoopPlanProposedelement.classList.remove("EngineeringProfession");
       WKEXP905CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["WKEXP905CoopPlanProposed","EngineeringProfession"]);
       var ENGG404CoopPlanProposedelement = document.getElementById("ENGG404CoopPlanProposed");
       ENGG404CoopPlanProposedelement.classList.remove("EngineeringProfession");
       ENGG404CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG404CoopPlanProposed","EngineeringProfession"]);
       var ENGG400CoopPlanProposedelement = document.getElementById("ENGG400CoopPlanProposed");
       ENGG400CoopPlanProposedelement.classList.remove("EngineeringProfession");
       ENGG400CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
       that.addToClicked(["ENGG400CoopPlanProposed","EngineeringProfession"]);
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "TraditionalPlan":
       var ENGL199TraditionalPlanelement = document.getElementById("ENGL199TraditionalPlan");
       ENGL199TraditionalPlanelement.classList.remove("Other");
       ENGL199TraditionalPlanelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGL199TraditionalPlan","Other"]);
       var ENGM310TraditionalPlanelement = document.getElementById("ENGM310TraditionalPlan");
       ENGM310TraditionalPlanelement.classList.remove("Other");
       ENGM310TraditionalPlanelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGM310TraditionalPlan","Other"]);
       var ENGM401TraditionalPlanelement = document.getElementById("ENGM401TraditionalPlan");
       ENGM401TraditionalPlanelement.classList.remove("Other");
       ENGM401TraditionalPlanelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGM401TraditionalPlan","Other"]);
       break;
      case "TraditionalPlanProposed":
       var ENGL199TraditionalPlanProposedelement = document.getElementById("ENGL199TraditionalPlanProposed");
       ENGL199TraditionalPlanProposedelement.classList.remove("Other");
       ENGL199TraditionalPlanProposedelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGL199TraditionalPlanProposed","Other"]);
       var ENGM310TraditionalPlanProposedelement = document.getElementById("ENGM310TraditionalPlanProposed");
       ENGM310TraditionalPlanProposedelement.classList.remove("Other");
       ENGM310TraditionalPlanProposedelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGM310TraditionalPlanProposed","Other"]);
       var ENGM401TraditionalPlanProposedelement = document.getElementById("ENGM401TraditionalPlanProposed");
       ENGM401TraditionalPlanProposedelement.classList.remove("Other");
       ENGM401TraditionalPlanProposedelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGM401TraditionalPlanProposed","Other"]);
       break;
      case "CoopPlan":
       var ENGL199CoopPlanelement = document.getElementById("ENGL199CoopPlan");
       ENGL199CoopPlanelement.classList.remove("Other");
       ENGL199CoopPlanelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGL199CoopPlan","Other"]);
       var ENGM310CoopPlanelement = document.getElementById("ENGM310CoopPlan");
       ENGM310CoopPlanelement.classList.remove("Other");
       ENGM310CoopPlanelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGM310CoopPlan","Other"]);
       var ENGM401CoopPlanelement = document.getElementById("ENGM401CoopPlan");
       ENGM401CoopPlanelement.classList.remove("Other");
       ENGM401CoopPlanelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGM401CoopPlan","Other"]);
       break;
      case "CoopPlanProposed":
       var ENGL199CoopPlanProposedelement = document.getElementById("ENGL199CoopPlanProposed");
       ENGL199CoopPlanProposedelement.classList.remove("Other");
       ENGL199CoopPlanProposedelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGL199CoopPlanProposed","Other"]);
       var ENGM310CoopPlanProposedelement = document.getElementById("ENGM310CoopPlanProposed");
       ENGM310CoopPlanProposedelement.classList.remove("Other");
       ENGM310CoopPlanProposedelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGM310CoopPlanProposed","Other"]);
       var ENGM401CoopPlanProposedelement = document.getElementById("ENGM401CoopPlanProposed");
       ENGM401CoopPlanProposedelement.classList.remove("Other");
       ENGM401CoopPlanProposedelement.classList.add("Other-highlighted");
       that.addToClicked(["ENGM401CoopPlanProposed","Other"]);
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "TraditionalPlan":
       var MATH100TraditionalPlanelement = document.getElementById("MATH100TraditionalPlan");
       MATH100TraditionalPlanelement.classList.remove("Math");
       MATH100TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH100TraditionalPlan","Math"]);
       var MATH101TraditionalPlanelement = document.getElementById("MATH101TraditionalPlan");
       MATH101TraditionalPlanelement.classList.remove("Math");
       MATH101TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH101TraditionalPlan","Math"]);
       var MATH102TraditionalPlanelement = document.getElementById("MATH102TraditionalPlan");
       MATH102TraditionalPlanelement.classList.remove("Math");
       MATH102TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH102TraditionalPlan","Math"]);
       var MATH209TraditionalPlanelement = document.getElementById("MATH209TraditionalPlan");
       MATH209TraditionalPlanelement.classList.remove("Math");
       MATH209TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH209TraditionalPlan","Math"]);
       var MATH201TraditionalPlanelement = document.getElementById("MATH201TraditionalPlan");
       MATH201TraditionalPlanelement.classList.remove("Math");
       MATH201TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH201TraditionalPlan","Math"]);
       var STAT235TraditionalPlanelement = document.getElementById("STAT235TraditionalPlan");
       STAT235TraditionalPlanelement.classList.remove("Math");
       STAT235TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["STAT235TraditionalPlan","Math"]);
       var CHE374TraditionalPlanelement = document.getElementById("CHE374TraditionalPlan");
       CHE374TraditionalPlanelement.classList.remove("Math");
       CHE374TraditionalPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["CHE374TraditionalPlan","Math"]);
       break;
      case "TraditionalPlanProposed":
       var MATH100TraditionalPlanProposedelement = document.getElementById("MATH100TraditionalPlanProposed");
       MATH100TraditionalPlanProposedelement.classList.remove("Math");
       MATH100TraditionalPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH100TraditionalPlanProposed","Math"]);
       var MATH101TraditionalPlanProposedelement = document.getElementById("MATH101TraditionalPlanProposed");
       MATH101TraditionalPlanProposedelement.classList.remove("Math");
       MATH101TraditionalPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH101TraditionalPlanProposed","Math"]);
       var MATH102TraditionalPlanProposedelement = document.getElementById("MATH102TraditionalPlanProposed");
       MATH102TraditionalPlanProposedelement.classList.remove("Math");
       MATH102TraditionalPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH102TraditionalPlanProposed","Math"]);
       var MATH209TraditionalPlanProposedelement = document.getElementById("MATH209TraditionalPlanProposed");
       MATH209TraditionalPlanProposedelement.classList.remove("Math");
       MATH209TraditionalPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH209TraditionalPlanProposed","Math"]);
       var MATH201TraditionalPlanProposedelement = document.getElementById("MATH201TraditionalPlanProposed");
       MATH201TraditionalPlanProposedelement.classList.remove("Math");
       MATH201TraditionalPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH201TraditionalPlanProposed","Math"]);
       var STAT235TraditionalPlanProposedelement = document.getElementById("STAT235TraditionalPlanProposed");
       STAT235TraditionalPlanProposedelement.classList.remove("Math");
       STAT235TraditionalPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["STAT235TraditionalPlanProposed","Math"]);
       var CHE374TraditionalPlanProposedelement = document.getElementById("CHE374TraditionalPlanProposed");
       CHE374TraditionalPlanProposedelement.classList.remove("Math");
       CHE374TraditionalPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["CHE374TraditionalPlanProposed","Math"]);
       break;
      case "CoopPlan":
       var MATH100CoopPlanelement = document.getElementById("MATH100CoopPlan");
       MATH100CoopPlanelement.classList.remove("Math");
       MATH100CoopPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH100CoopPlan","Math"]);
       var MATH101CoopPlanelement = document.getElementById("MATH101CoopPlan");
       MATH101CoopPlanelement.classList.remove("Math");
       MATH101CoopPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH101CoopPlan","Math"]);
       var MATH102CoopPlanelement = document.getElementById("MATH102CoopPlan");
       MATH102CoopPlanelement.classList.remove("Math");
       MATH102CoopPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH102CoopPlan","Math"]);
       var MATH209CoopPlanelement = document.getElementById("MATH209CoopPlan");
       MATH209CoopPlanelement.classList.remove("Math");
       MATH209CoopPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH209CoopPlan","Math"]);
       var MATH201CoopPlanelement = document.getElementById("MATH201CoopPlan");
       MATH201CoopPlanelement.classList.remove("Math");
       MATH201CoopPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH201CoopPlan","Math"]);
       var STAT235CoopPlanelement = document.getElementById("STAT235CoopPlan");
       STAT235CoopPlanelement.classList.remove("Math");
       STAT235CoopPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["STAT235CoopPlan","Math"]);
       var CHE374CoopPlanelement = document.getElementById("CHE374CoopPlan");
       CHE374CoopPlanelement.classList.remove("Math");
       CHE374CoopPlanelement.classList.add("Math-highlighted");
       that.addToClicked(["CHE374CoopPlan","Math"]);
       break;
      case "CoopPlanProposed":
       var MATH100CoopPlanProposedelement = document.getElementById("MATH100CoopPlanProposed");
       MATH100CoopPlanProposedelement.classList.remove("Math");
       MATH100CoopPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH100CoopPlanProposed","Math"]);
       var MATH101CoopPlanProposedelement = document.getElementById("MATH101CoopPlanProposed");
       MATH101CoopPlanProposedelement.classList.remove("Math");
       MATH101CoopPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH101CoopPlanProposed","Math"]);
       var MATH102CoopPlanProposedelement = document.getElementById("MATH102CoopPlanProposed");
       MATH102CoopPlanProposedelement.classList.remove("Math");
       MATH102CoopPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH102CoopPlanProposed","Math"]);
       var MATH209CoopPlanProposedelement = document.getElementById("MATH209CoopPlanProposed");
       MATH209CoopPlanProposedelement.classList.remove("Math");
       MATH209CoopPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH209CoopPlanProposed","Math"]);
       var MATH201CoopPlanProposedelement = document.getElementById("MATH201CoopPlanProposed");
       MATH201CoopPlanProposedelement.classList.remove("Math");
       MATH201CoopPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["MATH201CoopPlanProposed","Math"]);
       var STAT235CoopPlanProposedelement = document.getElementById("STAT235CoopPlanProposed");
       STAT235CoopPlanProposedelement.classList.remove("Math");
       STAT235CoopPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["STAT235CoopPlanProposed","Math"]);
       var CHE374CoopPlanProposedelement = document.getElementById("CHE374CoopPlanProposed");
       CHE374CoopPlanProposedelement.classList.remove("Math");
       CHE374CoopPlanProposedelement.classList.add("Math-highlighted");
       that.addToClicked(["CHE374CoopPlanProposed","Math"]);
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "TraditionalPlan":
       var ENGG160TraditionalPlanelement = document.getElementById("ENGG160TraditionalPlan");
       ENGG160TraditionalPlanelement.classList.remove("EngineeringDesign");
       ENGG160TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["ENGG160TraditionalPlan","EngineeringDesign"]);
       var PETE478TraditionalPlanelement = document.getElementById("PETE478TraditionalPlan");
       PETE478TraditionalPlanelement.classList.remove("EngineeringDesign");
       PETE478TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["PETE478TraditionalPlan","EngineeringDesign"]);
       var PETE496TraditionalPlanelement = document.getElementById("PETE496TraditionalPlan");
       PETE496TraditionalPlanelement.classList.remove("EngineeringDesign");
       PETE496TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["PETE496TraditionalPlan","EngineeringDesign"]);
       break;
      case "TraditionalPlanProposed":
       var ENGG160TraditionalPlanProposedelement = document.getElementById("ENGG160TraditionalPlanProposed");
       ENGG160TraditionalPlanProposedelement.classList.remove("EngineeringDesign");
       ENGG160TraditionalPlanProposedelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["ENGG160TraditionalPlanProposed","EngineeringDesign"]);
       var PETE478TraditionalPlanProposedelement = document.getElementById("PETE478TraditionalPlanProposed");
       PETE478TraditionalPlanProposedelement.classList.remove("EngineeringDesign");
       PETE478TraditionalPlanProposedelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["PETE478TraditionalPlanProposed","EngineeringDesign"]);
       var PETE496TraditionalPlanProposedelement = document.getElementById("PETE496TraditionalPlanProposed");
       PETE496TraditionalPlanProposedelement.classList.remove("EngineeringDesign");
       PETE496TraditionalPlanProposedelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["PETE496TraditionalPlanProposed","EngineeringDesign"]);
       break;
      case "CoopPlan":
       var ENGG160CoopPlanelement = document.getElementById("ENGG160CoopPlan");
       ENGG160CoopPlanelement.classList.remove("EngineeringDesign");
       ENGG160CoopPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["ENGG160CoopPlan","EngineeringDesign"]);
       var PETE478CoopPlanelement = document.getElementById("PETE478CoopPlan");
       PETE478CoopPlanelement.classList.remove("EngineeringDesign");
       PETE478CoopPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["PETE478CoopPlan","EngineeringDesign"]);
       var PETE496CoopPlanelement = document.getElementById("PETE496CoopPlan");
       PETE496CoopPlanelement.classList.remove("EngineeringDesign");
       PETE496CoopPlanelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["PETE496CoopPlan","EngineeringDesign"]);
       break;
      case "CoopPlanProposed":
       var ENGG160CoopPlanProposedelement = document.getElementById("ENGG160CoopPlanProposed");
       ENGG160CoopPlanProposedelement.classList.remove("EngineeringDesign");
       ENGG160CoopPlanProposedelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["ENGG160CoopPlanProposed","EngineeringDesign"]);
       var PETE478CoopPlanProposedelement = document.getElementById("PETE478CoopPlanProposed");
       PETE478CoopPlanProposedelement.classList.remove("EngineeringDesign");
       PETE478CoopPlanProposedelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["PETE478CoopPlanProposed","EngineeringDesign"]);
       var PETE496CoopPlanProposedelement = document.getElementById("PETE496CoopPlanProposed");
       PETE496CoopPlanProposedelement.classList.remove("EngineeringDesign");
       PETE496CoopPlanProposedelement.classList.add("EngineeringDesign-highlighted");
       that.addToClicked(["PETE496CoopPlanProposed","EngineeringDesign"]);
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "TraditionalPlan":
       var CHE243TraditionalPlanelement = document.getElementById("CHE243TraditionalPlan");
       CHE243TraditionalPlanelement.classList.remove("EngineeringSciences");
       CHE243TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CHE243TraditionalPlan","EngineeringSciences"]);
       var ECE209TraditionalPlanelement = document.getElementById("ECE209TraditionalPlan");
       ECE209TraditionalPlanelement.classList.remove("EngineeringSciences");
       ECE209TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE209TraditionalPlan","EngineeringSciences"]);
       var MATE202TraditionalPlanelement = document.getElementById("MATE202TraditionalPlan");
       MATE202TraditionalPlanelement.classList.remove("EngineeringSciences");
       MATE202TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MATE202TraditionalPlan","EngineeringSciences"]);
       var CHE312TraditionalPlanelement = document.getElementById("CHE312TraditionalPlan");
       CHE312TraditionalPlanelement.classList.remove("EngineeringSciences");
       CHE312TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CHE312TraditionalPlan","EngineeringSciences"]);
       var CIVE270TraditionalPlanelement = document.getElementById("CIVE270TraditionalPlan");
       CIVE270TraditionalPlanelement.classList.remove("EngineeringSciences");
       CIVE270TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CIVE270TraditionalPlan","EngineeringSciences"]);
       var PETE275TraditionalPlanelement = document.getElementById("PETE275TraditionalPlan");
       PETE275TraditionalPlanelement.classList.remove("EngineeringSciences");
       PETE275TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE275TraditionalPlan","EngineeringSciences"]);
       var PETE364TraditionalPlanelement = document.getElementById("PETE364TraditionalPlan");
       PETE364TraditionalPlanelement.classList.remove("EngineeringSciences");
       PETE364TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE364TraditionalPlan","EngineeringSciences"]);
       var PETE373TraditionalPlanelement = document.getElementById("PETE373TraditionalPlan");
       PETE373TraditionalPlanelement.classList.remove("EngineeringSciences");
       PETE373TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE373TraditionalPlan","EngineeringSciences"]);
       var PETE365TraditionalPlanelement = document.getElementById("PETE365TraditionalPlan");
       PETE365TraditionalPlanelement.classList.remove("EngineeringSciences");
       PETE365TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE365TraditionalPlan","EngineeringSciences"]);
       var PETE366TraditionalPlanelement = document.getElementById("PETE366TraditionalPlan");
       PETE366TraditionalPlanelement.classList.remove("EngineeringSciences");
       PETE366TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE366TraditionalPlan","EngineeringSciences"]);
       var PETE444TraditionalPlanelement = document.getElementById("PETE444TraditionalPlan");
       PETE444TraditionalPlanelement.classList.remove("EngineeringSciences");
       PETE444TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE444TraditionalPlan","EngineeringSciences"]);
       var PETE475TraditionalPlanelement = document.getElementById("PETE475TraditionalPlan");
       PETE475TraditionalPlanelement.classList.remove("EngineeringSciences");
       PETE475TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE475TraditionalPlan","EngineeringSciences"]);
       var PETE476TraditionalPlanelement = document.getElementById("PETE476TraditionalPlan");
       PETE476TraditionalPlanelement.classList.remove("EngineeringSciences");
       PETE476TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE476TraditionalPlan","EngineeringSciences"]);
       var PETE484TraditionalPlanelement = document.getElementById("PETE484TraditionalPlan");
       PETE484TraditionalPlanelement.classList.remove("EngineeringSciences");
       PETE484TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE484TraditionalPlan","EngineeringSciences"]);
       var PETE471TraditionalPlanelement = document.getElementById("PETE471TraditionalPlan");
       PETE471TraditionalPlanelement.classList.remove("EngineeringSciences");
       PETE471TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE471TraditionalPlan","EngineeringSciences"]);
       var PETE477TraditionalPlanelement = document.getElementById("PETE477TraditionalPlan");
       PETE477TraditionalPlanelement.classList.remove("EngineeringSciences");
       PETE477TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE477TraditionalPlan","EngineeringSciences"]);
       break;
      case "TraditionalPlanProposed":
       var CHE243TraditionalPlanProposedelement = document.getElementById("CHE243TraditionalPlanProposed");
       CHE243TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       CHE243TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CHE243TraditionalPlanProposed","EngineeringSciences"]);
       var ECE209TraditionalPlanProposedelement = document.getElementById("ECE209TraditionalPlanProposed");
       ECE209TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       ECE209TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE209TraditionalPlanProposed","EngineeringSciences"]);
       var MATE202TraditionalPlanProposedelement = document.getElementById("MATE202TraditionalPlanProposed");
       MATE202TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       MATE202TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MATE202TraditionalPlanProposed","EngineeringSciences"]);
       var PETE275TraditionalPlanProposedelement = document.getElementById("PETE275TraditionalPlanProposed");
       PETE275TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       PETE275TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE275TraditionalPlanProposed","EngineeringSciences"]);
       var CHE312TraditionalPlanProposedelement = document.getElementById("CHE312TraditionalPlanProposed");
       CHE312TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       CHE312TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CHE312TraditionalPlanProposed","EngineeringSciences"]);
       var CIVE270TraditionalPlanProposedelement = document.getElementById("CIVE270TraditionalPlanProposed");
       CIVE270TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       CIVE270TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CIVE270TraditionalPlanProposed","EngineeringSciences"]);
       var PETE295TraditionalPlanProposedelement = document.getElementById("PETE295TraditionalPlanProposed");
       PETE295TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       PETE295TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE295TraditionalPlanProposed","EngineeringSciences"]);
       var PETE364TraditionalPlanProposedelement = document.getElementById("PETE364TraditionalPlanProposed");
       PETE364TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       PETE364TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE364TraditionalPlanProposed","EngineeringSciences"]);
       var PETE375TraditionalPlanProposedelement = document.getElementById("PETE375TraditionalPlanProposed");
       PETE375TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       PETE375TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE375TraditionalPlanProposed","EngineeringSciences"]);
       var PETE365TraditionalPlanProposedelement = document.getElementById("PETE365TraditionalPlanProposed");
       PETE365TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       PETE365TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE365TraditionalPlanProposed","EngineeringSciences"]);
       var PETE366TraditionalPlanProposedelement = document.getElementById("PETE366TraditionalPlanProposed");
       PETE366TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       PETE366TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE366TraditionalPlanProposed","EngineeringSciences"]);
       var PETE377TraditionalPlanProposedelement = document.getElementById("PETE377TraditionalPlanProposed");
       PETE377TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       PETE377TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE377TraditionalPlanProposed","EngineeringSciences"]);
       var PETE444TraditionalPlanProposedelement = document.getElementById("PETE444TraditionalPlanProposed");
       PETE444TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       PETE444TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE444TraditionalPlanProposed","EngineeringSciences"]);
       var PETE476TraditionalPlanProposedelement = document.getElementById("PETE476TraditionalPlanProposed");
       PETE476TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       PETE476TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE476TraditionalPlanProposed","EngineeringSciences"]);
       var PETE484TraditionalPlanProposedelement = document.getElementById("PETE484TraditionalPlanProposed");
       PETE484TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       PETE484TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE484TraditionalPlanProposed","EngineeringSciences"]);
       var PETE471TraditionalPlanProposedelement = document.getElementById("PETE471TraditionalPlanProposed");
       PETE471TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
       PETE471TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE471TraditionalPlanProposed","EngineeringSciences"]);
       break;
      case "CoopPlan":
       var CHE243CoopPlanelement = document.getElementById("CHE243CoopPlan");
       CHE243CoopPlanelement.classList.remove("EngineeringSciences");
       CHE243CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CHE243CoopPlan","EngineeringSciences"]);
       var ECE209CoopPlanelement = document.getElementById("ECE209CoopPlan");
       ECE209CoopPlanelement.classList.remove("EngineeringSciences");
       ECE209CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE209CoopPlan","EngineeringSciences"]);
       var MATE202CoopPlanelement = document.getElementById("MATE202CoopPlan");
       MATE202CoopPlanelement.classList.remove("EngineeringSciences");
       MATE202CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MATE202CoopPlan","EngineeringSciences"]);
       var CHE312CoopPlanelement = document.getElementById("CHE312CoopPlan");
       CHE312CoopPlanelement.classList.remove("EngineeringSciences");
       CHE312CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CHE312CoopPlan","EngineeringSciences"]);
       var CIVE270CoopPlanelement = document.getElementById("CIVE270CoopPlan");
       CIVE270CoopPlanelement.classList.remove("EngineeringSciences");
       CIVE270CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CIVE270CoopPlan","EngineeringSciences"]);
       var PETE275CoopPlanelement = document.getElementById("PETE275CoopPlan");
       PETE275CoopPlanelement.classList.remove("EngineeringSciences");
       PETE275CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE275CoopPlan","EngineeringSciences"]);
       var PETE365CoopPlanelement = document.getElementById("PETE365CoopPlan");
       PETE365CoopPlanelement.classList.remove("EngineeringSciences");
       PETE365CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE365CoopPlan","EngineeringSciences"]);
       var PETE366CoopPlanelement = document.getElementById("PETE366CoopPlan");
       PETE366CoopPlanelement.classList.remove("EngineeringSciences");
       PETE366CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE366CoopPlan","EngineeringSciences"]);
       var PETE364CoopPlanelement = document.getElementById("PETE364CoopPlan");
       PETE364CoopPlanelement.classList.remove("EngineeringSciences");
       PETE364CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE364CoopPlan","EngineeringSciences"]);
       var PETE373CoopPlanelement = document.getElementById("PETE373CoopPlan");
       PETE373CoopPlanelement.classList.remove("EngineeringSciences");
       PETE373CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE373CoopPlan","EngineeringSciences"]);
       var PETE444CoopPlanelement = document.getElementById("PETE444CoopPlan");
       PETE444CoopPlanelement.classList.remove("EngineeringSciences");
       PETE444CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE444CoopPlan","EngineeringSciences"]);
       var PETE475CoopPlanelement = document.getElementById("PETE475CoopPlan");
       PETE475CoopPlanelement.classList.remove("EngineeringSciences");
       PETE475CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE475CoopPlan","EngineeringSciences"]);
       var PETE476CoopPlanelement = document.getElementById("PETE476CoopPlan");
       PETE476CoopPlanelement.classList.remove("EngineeringSciences");
       PETE476CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE476CoopPlan","EngineeringSciences"]);
       var PETE484CoopPlanelement = document.getElementById("PETE484CoopPlan");
       PETE484CoopPlanelement.classList.remove("EngineeringSciences");
       PETE484CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE484CoopPlan","EngineeringSciences"]);
       var PETE471CoopPlanelement = document.getElementById("PETE471CoopPlan");
       PETE471CoopPlanelement.classList.remove("EngineeringSciences");
       PETE471CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE471CoopPlan","EngineeringSciences"]);
       var PETE477CoopPlanelement = document.getElementById("PETE477CoopPlan");
       PETE477CoopPlanelement.classList.remove("EngineeringSciences");
       PETE477CoopPlanelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE477CoopPlan","EngineeringSciences"]);
       break;
      case "CoopPlanProposed":
       var CHE243CoopPlanProposedelement = document.getElementById("CHE243CoopPlanProposed");
       CHE243CoopPlanProposedelement.classList.remove("EngineeringSciences");
       CHE243CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CHE243CoopPlanProposed","EngineeringSciences"]);
       var ECE209CoopPlanProposedelement = document.getElementById("ECE209CoopPlanProposed");
       ECE209CoopPlanProposedelement.classList.remove("EngineeringSciences");
       ECE209CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["ECE209CoopPlanProposed","EngineeringSciences"]);
       var MATE202CoopPlanProposedelement = document.getElementById("MATE202CoopPlanProposed");
       MATE202CoopPlanProposedelement.classList.remove("EngineeringSciences");
       MATE202CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["MATE202CoopPlanProposed","EngineeringSciences"]);
       var PETE275CoopPlanProposedelement = document.getElementById("PETE275CoopPlanProposed");
       PETE275CoopPlanProposedelement.classList.remove("EngineeringSciences");
       PETE275CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE275CoopPlanProposed","EngineeringSciences"]);
       var CHE312CoopPlanProposedelement = document.getElementById("CHE312CoopPlanProposed");
       CHE312CoopPlanProposedelement.classList.remove("EngineeringSciences");
       CHE312CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CHE312CoopPlanProposed","EngineeringSciences"]);
       var CIVE270CoopPlanProposedelement = document.getElementById("CIVE270CoopPlanProposed");
       CIVE270CoopPlanProposedelement.classList.remove("EngineeringSciences");
       CIVE270CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["CIVE270CoopPlanProposed","EngineeringSciences"]);
       var PETE295CoopPlanProposedelement = document.getElementById("PETE295CoopPlanProposed");
       PETE295CoopPlanProposedelement.classList.remove("EngineeringSciences");
       PETE295CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE295CoopPlanProposed","EngineeringSciences"]);
       var PETE365CoopPlanProposedelement = document.getElementById("PETE365CoopPlanProposed");
       PETE365CoopPlanProposedelement.classList.remove("EngineeringSciences");
       PETE365CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE365CoopPlanProposed","EngineeringSciences"]);
       var PETE366CoopPlanProposedelement = document.getElementById("PETE366CoopPlanProposed");
       PETE366CoopPlanProposedelement.classList.remove("EngineeringSciences");
       PETE366CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE366CoopPlanProposed","EngineeringSciences"]);
       var PETE377CoopPlanProposedelement = document.getElementById("PETE377CoopPlanProposed");
       PETE377CoopPlanProposedelement.classList.remove("EngineeringSciences");
       PETE377CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE377CoopPlanProposed","EngineeringSciences"]);
       var PETE364CoopPlanProposedelement = document.getElementById("PETE364CoopPlanProposed");
       PETE364CoopPlanProposedelement.classList.remove("EngineeringSciences");
       PETE364CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE364CoopPlanProposed","EngineeringSciences"]);
       var PETE373CoopPlanProposedelement = document.getElementById("PETE373CoopPlanProposed");
       PETE373CoopPlanProposedelement.classList.remove("EngineeringSciences");
       PETE373CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE373CoopPlanProposed","EngineeringSciences"]);
       var PETE375CoopPlanProposedelement = document.getElementById("PETE375CoopPlanProposed");
       PETE375CoopPlanProposedelement.classList.remove("EngineeringSciences");
       PETE375CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE375CoopPlanProposed","EngineeringSciences"]);
       var PETE444CoopPlanProposedelement = document.getElementById("PETE444CoopPlanProposed");
       PETE444CoopPlanProposedelement.classList.remove("EngineeringSciences");
       PETE444CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE444CoopPlanProposed","EngineeringSciences"]);
       var PETE476CoopPlanProposedelement = document.getElementById("PETE476CoopPlanProposed");
       PETE476CoopPlanProposedelement.classList.remove("EngineeringSciences");
       PETE476CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE476CoopPlanProposed","EngineeringSciences"]);
       var PETE484CoopPlanProposedelement = document.getElementById("PETE484CoopPlanProposed");
       PETE484CoopPlanProposedelement.classList.remove("EngineeringSciences");
       PETE484CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE484CoopPlanProposed","EngineeringSciences"]);
       var PETE471CoopPlanProposedelement = document.getElementById("PETE471CoopPlanProposed");
       PETE471CoopPlanProposedelement.classList.remove("EngineeringSciences");
       PETE471CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
       that.addToClicked(["PETE471CoopPlanProposed","EngineeringSciences"]);
       break;
       }
      break;
  case "COMP":
  case "ComplementaryElective":
    switch(planName) {
      case "TraditionalPlan":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveTraditionalPlan" + i,"COMP"]);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveTraditionalPlan" + i,"COMP"]);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveTraditionalPlan" + i,"COMP"]);
          i = i + 1;
        }
       break;
      case "TraditionalPlanProposed":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveTraditionalPlanProposed" + i,"COMP"]);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveTraditionalPlanProposed" + i,"COMP"]);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveTraditionalPlanProposed" + i,"COMP"]);
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveCoopPlan" + i,"COMP"]);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveCoopPlan" + i,"COMP"]);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveCoopPlan" + i,"COMP"]);
          i = i + 1;
        }
       break;
      case "CoopPlanProposed":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveCoopPlanProposed" + i,"COMP"]);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveCoopPlanProposed" + i,"COMP"]);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP");
          currelement.classList.add("COMP-highlighted");
          that.addToClicked(["ComplementaryElectiveCoopPlanProposed" + i,"COMP"]);
          i = i + 1;
        }
       break;
       }
      break;
  case "PROG":
  case "ProgramTechnicalElective":
    switch(planName) {
      case "TraditionalPlan":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG");
          currelement.classList.add("PROG-highlighted");
          that.addToClicked(["ProgramTechnicalElectiveTraditionalPlan" + i,"PROG"]);
          i = i + 1;
        }
       break;
      case "TraditionalPlanProposed":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG");
          currelement.classList.add("PROG-highlighted");
          that.addToClicked(["ProgramTechnicalElectiveTraditionalPlanProposed" + i,"PROG"]);
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG");
          currelement.classList.add("PROG-highlighted");
          that.addToClicked(["ProgramTechnicalElectiveCoopPlan" + i,"PROG"]);
          i = i + 1;
        }
       break;
      case "CoopPlanProposed":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG");
          currelement.classList.add("PROG-highlighted");
          that.addToClicked(["ProgramTechnicalElectiveCoopPlanProposed" + i,"PROG"]);
          i = i + 1;
        }
       break;
       }
      break;
  case "ITS":
    switch(planName) {
      case "TraditionalPlan":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS");
          currelement.classList.add("ITS-highlighted");
          that.addToClicked(["ITSElectiveTraditionalPlan" + i,"ITS"]);
          i = i + 1;
        }
       break;
      case "TraditionalPlanProposed":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS");
          currelement.classList.add("ITS-highlighted");
          that.addToClicked(["ITSElectiveTraditionalPlanProposed" + i,"ITS"]);
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS");
          currelement.classList.add("ITS-highlighted");
          that.addToClicked(["ITSElectiveCoopPlan" + i,"ITS"]);
          i = i + 1;
        }
       break;
      case "CoopPlanProposed":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS");
          currelement.classList.add("ITS-highlighted");
          that.addToClicked(["ITSElectiveCoopPlanProposed" + i,"ITS"]);
          i = i + 1;
        }
       break;
       }
      break;
break;   default:
    console.log("shouldn't be here");
    }
};
this.unhighlightCategory = function(categoryName, planName) {
switch(categoryName) { 
  case "NaturalSciences":
    switch(planName) {
      case "TraditionalPlan":
if (!CHEM103TraditionalPlanflag) { 
       var CHEM103TraditionalPlanelement = document.getElementById("CHEM103TraditionalPlan");
       CHEM103TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       CHEM103TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM103TraditionalPlan");
 } 
if (!ENGG130TraditionalPlanflag) { 
       var ENGG130TraditionalPlanelement = document.getElementById("ENGG130TraditionalPlan");
       ENGG130TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       ENGG130TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENGG130TraditionalPlan");
 } 
if (!PHYS130TraditionalPlanflag) { 
       var PHYS130TraditionalPlanelement = document.getElementById("PHYS130TraditionalPlan");
       PHYS130TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       PHYS130TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("PHYS130TraditionalPlan");
 } 
if (!CHEM105TraditionalPlanflag) { 
       var CHEM105TraditionalPlanelement = document.getElementById("CHEM105TraditionalPlan");
       CHEM105TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       CHEM105TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM105TraditionalPlan");
 } 
if (!ENCMP100TraditionalPlanflag) { 
       var ENCMP100TraditionalPlanelement = document.getElementById("ENCMP100TraditionalPlan");
       ENCMP100TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       ENCMP100TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENCMP100TraditionalPlan");
 } 
if (!ENPH131TraditionalPlanflag) { 
       var ENPH131TraditionalPlanelement = document.getElementById("ENPH131TraditionalPlan");
       ENPH131TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       ENPH131TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENPH131TraditionalPlan");
 } 
if (!EAS210TraditionalPlanflag) { 
       var EAS210TraditionalPlanelement = document.getElementById("EAS210TraditionalPlan");
       EAS210TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       EAS210TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("EAS210TraditionalPlan");
 } 
if (!CHEM371TraditionalPlanflag) { 
       var CHEM371TraditionalPlanelement = document.getElementById("CHEM371TraditionalPlan");
       CHEM371TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       CHEM371TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM371TraditionalPlan");
 } 
if (!EAS222TraditionalPlanflag) { 
       var EAS222TraditionalPlanelement = document.getElementById("EAS222TraditionalPlan");
       EAS222TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       EAS222TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("EAS222TraditionalPlan");
 } 
if (!CHE314TraditionalPlanflag) { 
       var CHE314TraditionalPlanelement = document.getElementById("CHE314TraditionalPlan");
       CHE314TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
       CHE314TraditionalPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHE314TraditionalPlan");
 } 
       break;
      case "TraditionalPlanProposed":
if (!CHEM103TraditionalPlanProposedflag) { 
       var CHEM103TraditionalPlanProposedelement = document.getElementById("CHEM103TraditionalPlanProposed");
       CHEM103TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       CHEM103TraditionalPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM103TraditionalPlanProposed");
 } 
if (!ENGG130TraditionalPlanProposedflag) { 
       var ENGG130TraditionalPlanProposedelement = document.getElementById("ENGG130TraditionalPlanProposed");
       ENGG130TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       ENGG130TraditionalPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENGG130TraditionalPlanProposed");
 } 
if (!PHYS130TraditionalPlanProposedflag) { 
       var PHYS130TraditionalPlanProposedelement = document.getElementById("PHYS130TraditionalPlanProposed");
       PHYS130TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       PHYS130TraditionalPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("PHYS130TraditionalPlanProposed");
 } 
if (!CHEM105TraditionalPlanProposedflag) { 
       var CHEM105TraditionalPlanProposedelement = document.getElementById("CHEM105TraditionalPlanProposed");
       CHEM105TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       CHEM105TraditionalPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM105TraditionalPlanProposed");
 } 
if (!ENCMP100TraditionalPlanProposedflag) { 
       var ENCMP100TraditionalPlanProposedelement = document.getElementById("ENCMP100TraditionalPlanProposed");
       ENCMP100TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       ENCMP100TraditionalPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENCMP100TraditionalPlanProposed");
 } 
if (!ENPH131TraditionalPlanProposedflag) { 
       var ENPH131TraditionalPlanProposedelement = document.getElementById("ENPH131TraditionalPlanProposed");
       ENPH131TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       ENPH131TraditionalPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENPH131TraditionalPlanProposed");
 } 
if (!EAS210TraditionalPlanProposedflag) { 
       var EAS210TraditionalPlanProposedelement = document.getElementById("EAS210TraditionalPlanProposed");
       EAS210TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       EAS210TraditionalPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("EAS210TraditionalPlanProposed");
 } 
if (!CHEM371TraditionalPlanProposedflag) { 
       var CHEM371TraditionalPlanProposedelement = document.getElementById("CHEM371TraditionalPlanProposed");
       CHEM371TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       CHEM371TraditionalPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM371TraditionalPlanProposed");
 } 
if (!CHE314TraditionalPlanProposedflag) { 
       var CHE314TraditionalPlanProposedelement = document.getElementById("CHE314TraditionalPlanProposed");
       CHE314TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       CHE314TraditionalPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHE314TraditionalPlanProposed");
 } 
if (!EAS222TraditionalPlanProposedflag) { 
       var EAS222TraditionalPlanProposedelement = document.getElementById("EAS222TraditionalPlanProposed");
       EAS222TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       EAS222TraditionalPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("EAS222TraditionalPlanProposed");
 } 
       break;
      case "CoopPlan":
if (!CHEM103CoopPlanflag) { 
       var CHEM103CoopPlanelement = document.getElementById("CHEM103CoopPlan");
       CHEM103CoopPlanelement.classList.remove("NaturalSciences-highlighted");
       CHEM103CoopPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM103CoopPlan");
 } 
if (!ENGG130CoopPlanflag) { 
       var ENGG130CoopPlanelement = document.getElementById("ENGG130CoopPlan");
       ENGG130CoopPlanelement.classList.remove("NaturalSciences-highlighted");
       ENGG130CoopPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENGG130CoopPlan");
 } 
if (!PHYS130CoopPlanflag) { 
       var PHYS130CoopPlanelement = document.getElementById("PHYS130CoopPlan");
       PHYS130CoopPlanelement.classList.remove("NaturalSciences-highlighted");
       PHYS130CoopPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("PHYS130CoopPlan");
 } 
if (!CHEM105CoopPlanflag) { 
       var CHEM105CoopPlanelement = document.getElementById("CHEM105CoopPlan");
       CHEM105CoopPlanelement.classList.remove("NaturalSciences-highlighted");
       CHEM105CoopPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM105CoopPlan");
 } 
if (!ENCMP100CoopPlanflag) { 
       var ENCMP100CoopPlanelement = document.getElementById("ENCMP100CoopPlan");
       ENCMP100CoopPlanelement.classList.remove("NaturalSciences-highlighted");
       ENCMP100CoopPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENCMP100CoopPlan");
 } 
if (!ENPH131CoopPlanflag) { 
       var ENPH131CoopPlanelement = document.getElementById("ENPH131CoopPlan");
       ENPH131CoopPlanelement.classList.remove("NaturalSciences-highlighted");
       ENPH131CoopPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENPH131CoopPlan");
 } 
if (!EAS210CoopPlanflag) { 
       var EAS210CoopPlanelement = document.getElementById("EAS210CoopPlan");
       EAS210CoopPlanelement.classList.remove("NaturalSciences-highlighted");
       EAS210CoopPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("EAS210CoopPlan");
 } 
if (!EAS222CoopPlanflag) { 
       var EAS222CoopPlanelement = document.getElementById("EAS222CoopPlan");
       EAS222CoopPlanelement.classList.remove("NaturalSciences-highlighted");
       EAS222CoopPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("EAS222CoopPlan");
 } 
if (!CHEM371CoopPlanflag) { 
       var CHEM371CoopPlanelement = document.getElementById("CHEM371CoopPlan");
       CHEM371CoopPlanelement.classList.remove("NaturalSciences-highlighted");
       CHEM371CoopPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM371CoopPlan");
 } 
if (!CHE314CoopPlanflag) { 
       var CHE314CoopPlanelement = document.getElementById("CHE314CoopPlan");
       CHE314CoopPlanelement.classList.remove("NaturalSciences-highlighted");
       CHE314CoopPlanelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHE314CoopPlan");
 } 
       break;
      case "CoopPlanProposed":
if (!CHEM103CoopPlanProposedflag) { 
       var CHEM103CoopPlanProposedelement = document.getElementById("CHEM103CoopPlanProposed");
       CHEM103CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       CHEM103CoopPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM103CoopPlanProposed");
 } 
if (!ENGG130CoopPlanProposedflag) { 
       var ENGG130CoopPlanProposedelement = document.getElementById("ENGG130CoopPlanProposed");
       ENGG130CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       ENGG130CoopPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENGG130CoopPlanProposed");
 } 
if (!PHYS130CoopPlanProposedflag) { 
       var PHYS130CoopPlanProposedelement = document.getElementById("PHYS130CoopPlanProposed");
       PHYS130CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       PHYS130CoopPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("PHYS130CoopPlanProposed");
 } 
if (!CHEM105CoopPlanProposedflag) { 
       var CHEM105CoopPlanProposedelement = document.getElementById("CHEM105CoopPlanProposed");
       CHEM105CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       CHEM105CoopPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM105CoopPlanProposed");
 } 
if (!ENCMP100CoopPlanProposedflag) { 
       var ENCMP100CoopPlanProposedelement = document.getElementById("ENCMP100CoopPlanProposed");
       ENCMP100CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       ENCMP100CoopPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENCMP100CoopPlanProposed");
 } 
if (!ENPH131CoopPlanProposedflag) { 
       var ENPH131CoopPlanProposedelement = document.getElementById("ENPH131CoopPlanProposed");
       ENPH131CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       ENPH131CoopPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("ENPH131CoopPlanProposed");
 } 
if (!EAS210CoopPlanProposedflag) { 
       var EAS210CoopPlanProposedelement = document.getElementById("EAS210CoopPlanProposed");
       EAS210CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       EAS210CoopPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("EAS210CoopPlanProposed");
 } 
if (!EAS222CoopPlanProposedflag) { 
       var EAS222CoopPlanProposedelement = document.getElementById("EAS222CoopPlanProposed");
       EAS222CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       EAS222CoopPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("EAS222CoopPlanProposed");
 } 
if (!CHEM371CoopPlanProposedflag) { 
       var CHEM371CoopPlanProposedelement = document.getElementById("CHEM371CoopPlanProposed");
       CHEM371CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       CHEM371CoopPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHEM371CoopPlanProposed");
 } 
if (!CHE314CoopPlanProposedflag) { 
       var CHE314CoopPlanProposedelement = document.getElementById("CHE314CoopPlanProposed");
       CHE314CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
       CHE314CoopPlanProposedelement.classList.add("NaturalSciences");
       
       that.removeFromClicked("CHE314CoopPlanProposed");
 } 
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "TraditionalPlan":
if (!ENGG100TraditionalPlanflag) { 
       var ENGG100TraditionalPlanelement = document.getElementById("ENGG100TraditionalPlan");
       ENGG100TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG100TraditionalPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG100TraditionalPlan");
 } 
if (!ENGG404TraditionalPlanflag) { 
       var ENGG404TraditionalPlanelement = document.getElementById("ENGG404TraditionalPlan");
       ENGG404TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG404TraditionalPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG404TraditionalPlan");
 } 
if (!ENGG400TraditionalPlanflag) { 
       var ENGG400TraditionalPlanelement = document.getElementById("ENGG400TraditionalPlan");
       ENGG400TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG400TraditionalPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG400TraditionalPlan");
 } 
       break;
      case "TraditionalPlanProposed":
if (!ENGG100TraditionalPlanProposedflag) { 
       var ENGG100TraditionalPlanProposedelement = document.getElementById("ENGG100TraditionalPlanProposed");
       ENGG100TraditionalPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
       ENGG100TraditionalPlanProposedelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG100TraditionalPlanProposed");
 } 
if (!ENGG404TraditionalPlanProposedflag) { 
       var ENGG404TraditionalPlanProposedelement = document.getElementById("ENGG404TraditionalPlanProposed");
       ENGG404TraditionalPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
       ENGG404TraditionalPlanProposedelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG404TraditionalPlanProposed");
 } 
if (!ENGG400TraditionalPlanProposedflag) { 
       var ENGG400TraditionalPlanProposedelement = document.getElementById("ENGG400TraditionalPlanProposed");
       ENGG400TraditionalPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
       ENGG400TraditionalPlanProposedelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG400TraditionalPlanProposed");
 } 
       break;
      case "CoopPlan":
if (!ENGG100CoopPlanflag) { 
       var ENGG100CoopPlanelement = document.getElementById("ENGG100CoopPlan");
       ENGG100CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG100CoopPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG100CoopPlan");
 } 
if (!ENGG299CoopPlanflag) { 
       var ENGG299CoopPlanelement = document.getElementById("ENGG299CoopPlan");
       ENGG299CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG299CoopPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG299CoopPlan");
 } 
if (!WKEXP901CoopPlanflag) { 
       var WKEXP901CoopPlanelement = document.getElementById("WKEXP901CoopPlan");
       WKEXP901CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
       WKEXP901CoopPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("WKEXP901CoopPlan");
 } 
if (!WKEXP902CoopPlanflag) { 
       var WKEXP902CoopPlanelement = document.getElementById("WKEXP902CoopPlan");
       WKEXP902CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
       WKEXP902CoopPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("WKEXP902CoopPlan");
 } 
if (!WKEXP903CoopPlanflag) { 
       var WKEXP903CoopPlanelement = document.getElementById("WKEXP903CoopPlan");
       WKEXP903CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
       WKEXP903CoopPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("WKEXP903CoopPlan");
 } 
if (!WKEXP904CoopPlanflag) { 
       var WKEXP904CoopPlanelement = document.getElementById("WKEXP904CoopPlan");
       WKEXP904CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
       WKEXP904CoopPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("WKEXP904CoopPlan");
 } 
if (!WKEXP905CoopPlanflag) { 
       var WKEXP905CoopPlanelement = document.getElementById("WKEXP905CoopPlan");
       WKEXP905CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
       WKEXP905CoopPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("WKEXP905CoopPlan");
 } 
if (!ENGG404CoopPlanflag) { 
       var ENGG404CoopPlanelement = document.getElementById("ENGG404CoopPlan");
       ENGG404CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG404CoopPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG404CoopPlan");
 } 
if (!ENGG400CoopPlanflag) { 
       var ENGG400CoopPlanelement = document.getElementById("ENGG400CoopPlan");
       ENGG400CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
       ENGG400CoopPlanelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG400CoopPlan");
 } 
       break;
      case "CoopPlanProposed":
if (!ENGG100CoopPlanProposedflag) { 
       var ENGG100CoopPlanProposedelement = document.getElementById("ENGG100CoopPlanProposed");
       ENGG100CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
       ENGG100CoopPlanProposedelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG100CoopPlanProposed");
 } 
if (!ENGG299CoopPlanProposedflag) { 
       var ENGG299CoopPlanProposedelement = document.getElementById("ENGG299CoopPlanProposed");
       ENGG299CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
       ENGG299CoopPlanProposedelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG299CoopPlanProposed");
 } 
if (!WKEXP901CoopPlanProposedflag) { 
       var WKEXP901CoopPlanProposedelement = document.getElementById("WKEXP901CoopPlanProposed");
       WKEXP901CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
       WKEXP901CoopPlanProposedelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("WKEXP901CoopPlanProposed");
 } 
if (!WKEXP902CoopPlanProposedflag) { 
       var WKEXP902CoopPlanProposedelement = document.getElementById("WKEXP902CoopPlanProposed");
       WKEXP902CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
       WKEXP902CoopPlanProposedelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("WKEXP902CoopPlanProposed");
 } 
if (!WKEXP903CoopPlanProposedflag) { 
       var WKEXP903CoopPlanProposedelement = document.getElementById("WKEXP903CoopPlanProposed");
       WKEXP903CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
       WKEXP903CoopPlanProposedelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("WKEXP903CoopPlanProposed");
 } 
if (!WKEXP904CoopPlanProposedflag) { 
       var WKEXP904CoopPlanProposedelement = document.getElementById("WKEXP904CoopPlanProposed");
       WKEXP904CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
       WKEXP904CoopPlanProposedelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("WKEXP904CoopPlanProposed");
 } 
if (!WKEXP905CoopPlanProposedflag) { 
       var WKEXP905CoopPlanProposedelement = document.getElementById("WKEXP905CoopPlanProposed");
       WKEXP905CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
       WKEXP905CoopPlanProposedelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("WKEXP905CoopPlanProposed");
 } 
if (!ENGG404CoopPlanProposedflag) { 
       var ENGG404CoopPlanProposedelement = document.getElementById("ENGG404CoopPlanProposed");
       ENGG404CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
       ENGG404CoopPlanProposedelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG404CoopPlanProposed");
 } 
if (!ENGG400CoopPlanProposedflag) { 
       var ENGG400CoopPlanProposedelement = document.getElementById("ENGG400CoopPlanProposed");
       ENGG400CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
       ENGG400CoopPlanProposedelement.classList.add("EngineeringProfession");
       
       that.removeFromClicked("ENGG400CoopPlanProposed");
 } 
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "TraditionalPlan":
if (!ENGL199TraditionalPlanflag) { 
       var ENGL199TraditionalPlanelement = document.getElementById("ENGL199TraditionalPlan");
       ENGL199TraditionalPlanelement.classList.remove("Other-highlighted");
       ENGL199TraditionalPlanelement.classList.add("Other");
       
       that.removeFromClicked("ENGL199TraditionalPlan");
 } 
if (!ENGM310TraditionalPlanflag) { 
       var ENGM310TraditionalPlanelement = document.getElementById("ENGM310TraditionalPlan");
       ENGM310TraditionalPlanelement.classList.remove("Other-highlighted");
       ENGM310TraditionalPlanelement.classList.add("Other");
       
       that.removeFromClicked("ENGM310TraditionalPlan");
 } 
if (!ENGM401TraditionalPlanflag) { 
       var ENGM401TraditionalPlanelement = document.getElementById("ENGM401TraditionalPlan");
       ENGM401TraditionalPlanelement.classList.remove("Other-highlighted");
       ENGM401TraditionalPlanelement.classList.add("Other");
       
       that.removeFromClicked("ENGM401TraditionalPlan");
 } 
       break;
      case "TraditionalPlanProposed":
if (!ENGL199TraditionalPlanProposedflag) { 
       var ENGL199TraditionalPlanProposedelement = document.getElementById("ENGL199TraditionalPlanProposed");
       ENGL199TraditionalPlanProposedelement.classList.remove("Other-highlighted");
       ENGL199TraditionalPlanProposedelement.classList.add("Other");
       
       that.removeFromClicked("ENGL199TraditionalPlanProposed");
 } 
if (!ENGM310TraditionalPlanProposedflag) { 
       var ENGM310TraditionalPlanProposedelement = document.getElementById("ENGM310TraditionalPlanProposed");
       ENGM310TraditionalPlanProposedelement.classList.remove("Other-highlighted");
       ENGM310TraditionalPlanProposedelement.classList.add("Other");
       
       that.removeFromClicked("ENGM310TraditionalPlanProposed");
 } 
if (!ENGM401TraditionalPlanProposedflag) { 
       var ENGM401TraditionalPlanProposedelement = document.getElementById("ENGM401TraditionalPlanProposed");
       ENGM401TraditionalPlanProposedelement.classList.remove("Other-highlighted");
       ENGM401TraditionalPlanProposedelement.classList.add("Other");
       
       that.removeFromClicked("ENGM401TraditionalPlanProposed");
 } 
       break;
      case "CoopPlan":
if (!ENGL199CoopPlanflag) { 
       var ENGL199CoopPlanelement = document.getElementById("ENGL199CoopPlan");
       ENGL199CoopPlanelement.classList.remove("Other-highlighted");
       ENGL199CoopPlanelement.classList.add("Other");
       
       that.removeFromClicked("ENGL199CoopPlan");
 } 
if (!ENGM310CoopPlanflag) { 
       var ENGM310CoopPlanelement = document.getElementById("ENGM310CoopPlan");
       ENGM310CoopPlanelement.classList.remove("Other-highlighted");
       ENGM310CoopPlanelement.classList.add("Other");
       
       that.removeFromClicked("ENGM310CoopPlan");
 } 
if (!ENGM401CoopPlanflag) { 
       var ENGM401CoopPlanelement = document.getElementById("ENGM401CoopPlan");
       ENGM401CoopPlanelement.classList.remove("Other-highlighted");
       ENGM401CoopPlanelement.classList.add("Other");
       
       that.removeFromClicked("ENGM401CoopPlan");
 } 
       break;
      case "CoopPlanProposed":
if (!ENGL199CoopPlanProposedflag) { 
       var ENGL199CoopPlanProposedelement = document.getElementById("ENGL199CoopPlanProposed");
       ENGL199CoopPlanProposedelement.classList.remove("Other-highlighted");
       ENGL199CoopPlanProposedelement.classList.add("Other");
       
       that.removeFromClicked("ENGL199CoopPlanProposed");
 } 
if (!ENGM310CoopPlanProposedflag) { 
       var ENGM310CoopPlanProposedelement = document.getElementById("ENGM310CoopPlanProposed");
       ENGM310CoopPlanProposedelement.classList.remove("Other-highlighted");
       ENGM310CoopPlanProposedelement.classList.add("Other");
       
       that.removeFromClicked("ENGM310CoopPlanProposed");
 } 
if (!ENGM401CoopPlanProposedflag) { 
       var ENGM401CoopPlanProposedelement = document.getElementById("ENGM401CoopPlanProposed");
       ENGM401CoopPlanProposedelement.classList.remove("Other-highlighted");
       ENGM401CoopPlanProposedelement.classList.add("Other");
       
       that.removeFromClicked("ENGM401CoopPlanProposed");
 } 
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "TraditionalPlan":
if (!MATH100TraditionalPlanflag) { 
       var MATH100TraditionalPlanelement = document.getElementById("MATH100TraditionalPlan");
       MATH100TraditionalPlanelement.classList.remove("Math-highlighted");
       MATH100TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH100TraditionalPlan");
 } 
if (!MATH101TraditionalPlanflag) { 
       var MATH101TraditionalPlanelement = document.getElementById("MATH101TraditionalPlan");
       MATH101TraditionalPlanelement.classList.remove("Math-highlighted");
       MATH101TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH101TraditionalPlan");
 } 
if (!MATH102TraditionalPlanflag) { 
       var MATH102TraditionalPlanelement = document.getElementById("MATH102TraditionalPlan");
       MATH102TraditionalPlanelement.classList.remove("Math-highlighted");
       MATH102TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH102TraditionalPlan");
 } 
if (!MATH209TraditionalPlanflag) { 
       var MATH209TraditionalPlanelement = document.getElementById("MATH209TraditionalPlan");
       MATH209TraditionalPlanelement.classList.remove("Math-highlighted");
       MATH209TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH209TraditionalPlan");
 } 
if (!MATH201TraditionalPlanflag) { 
       var MATH201TraditionalPlanelement = document.getElementById("MATH201TraditionalPlan");
       MATH201TraditionalPlanelement.classList.remove("Math-highlighted");
       MATH201TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH201TraditionalPlan");
 } 
if (!STAT235TraditionalPlanflag) { 
       var STAT235TraditionalPlanelement = document.getElementById("STAT235TraditionalPlan");
       STAT235TraditionalPlanelement.classList.remove("Math-highlighted");
       STAT235TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("STAT235TraditionalPlan");
 } 
if (!CHE374TraditionalPlanflag) { 
       var CHE374TraditionalPlanelement = document.getElementById("CHE374TraditionalPlan");
       CHE374TraditionalPlanelement.classList.remove("Math-highlighted");
       CHE374TraditionalPlanelement.classList.add("Math");
       
       that.removeFromClicked("CHE374TraditionalPlan");
 } 
       break;
      case "TraditionalPlanProposed":
if (!MATH100TraditionalPlanProposedflag) { 
       var MATH100TraditionalPlanProposedelement = document.getElementById("MATH100TraditionalPlanProposed");
       MATH100TraditionalPlanProposedelement.classList.remove("Math-highlighted");
       MATH100TraditionalPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("MATH100TraditionalPlanProposed");
 } 
if (!MATH101TraditionalPlanProposedflag) { 
       var MATH101TraditionalPlanProposedelement = document.getElementById("MATH101TraditionalPlanProposed");
       MATH101TraditionalPlanProposedelement.classList.remove("Math-highlighted");
       MATH101TraditionalPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("MATH101TraditionalPlanProposed");
 } 
if (!MATH102TraditionalPlanProposedflag) { 
       var MATH102TraditionalPlanProposedelement = document.getElementById("MATH102TraditionalPlanProposed");
       MATH102TraditionalPlanProposedelement.classList.remove("Math-highlighted");
       MATH102TraditionalPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("MATH102TraditionalPlanProposed");
 } 
if (!MATH209TraditionalPlanProposedflag) { 
       var MATH209TraditionalPlanProposedelement = document.getElementById("MATH209TraditionalPlanProposed");
       MATH209TraditionalPlanProposedelement.classList.remove("Math-highlighted");
       MATH209TraditionalPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("MATH209TraditionalPlanProposed");
 } 
if (!MATH201TraditionalPlanProposedflag) { 
       var MATH201TraditionalPlanProposedelement = document.getElementById("MATH201TraditionalPlanProposed");
       MATH201TraditionalPlanProposedelement.classList.remove("Math-highlighted");
       MATH201TraditionalPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("MATH201TraditionalPlanProposed");
 } 
if (!STAT235TraditionalPlanProposedflag) { 
       var STAT235TraditionalPlanProposedelement = document.getElementById("STAT235TraditionalPlanProposed");
       STAT235TraditionalPlanProposedelement.classList.remove("Math-highlighted");
       STAT235TraditionalPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("STAT235TraditionalPlanProposed");
 } 
if (!CHE374TraditionalPlanProposedflag) { 
       var CHE374TraditionalPlanProposedelement = document.getElementById("CHE374TraditionalPlanProposed");
       CHE374TraditionalPlanProposedelement.classList.remove("Math-highlighted");
       CHE374TraditionalPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("CHE374TraditionalPlanProposed");
 } 
       break;
      case "CoopPlan":
if (!MATH100CoopPlanflag) { 
       var MATH100CoopPlanelement = document.getElementById("MATH100CoopPlan");
       MATH100CoopPlanelement.classList.remove("Math-highlighted");
       MATH100CoopPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH100CoopPlan");
 } 
if (!MATH101CoopPlanflag) { 
       var MATH101CoopPlanelement = document.getElementById("MATH101CoopPlan");
       MATH101CoopPlanelement.classList.remove("Math-highlighted");
       MATH101CoopPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH101CoopPlan");
 } 
if (!MATH102CoopPlanflag) { 
       var MATH102CoopPlanelement = document.getElementById("MATH102CoopPlan");
       MATH102CoopPlanelement.classList.remove("Math-highlighted");
       MATH102CoopPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH102CoopPlan");
 } 
if (!MATH209CoopPlanflag) { 
       var MATH209CoopPlanelement = document.getElementById("MATH209CoopPlan");
       MATH209CoopPlanelement.classList.remove("Math-highlighted");
       MATH209CoopPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH209CoopPlan");
 } 
if (!MATH201CoopPlanflag) { 
       var MATH201CoopPlanelement = document.getElementById("MATH201CoopPlan");
       MATH201CoopPlanelement.classList.remove("Math-highlighted");
       MATH201CoopPlanelement.classList.add("Math");
       
       that.removeFromClicked("MATH201CoopPlan");
 } 
if (!STAT235CoopPlanflag) { 
       var STAT235CoopPlanelement = document.getElementById("STAT235CoopPlan");
       STAT235CoopPlanelement.classList.remove("Math-highlighted");
       STAT235CoopPlanelement.classList.add("Math");
       
       that.removeFromClicked("STAT235CoopPlan");
 } 
if (!CHE374CoopPlanflag) { 
       var CHE374CoopPlanelement = document.getElementById("CHE374CoopPlan");
       CHE374CoopPlanelement.classList.remove("Math-highlighted");
       CHE374CoopPlanelement.classList.add("Math");
       
       that.removeFromClicked("CHE374CoopPlan");
 } 
       break;
      case "CoopPlanProposed":
if (!MATH100CoopPlanProposedflag) { 
       var MATH100CoopPlanProposedelement = document.getElementById("MATH100CoopPlanProposed");
       MATH100CoopPlanProposedelement.classList.remove("Math-highlighted");
       MATH100CoopPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("MATH100CoopPlanProposed");
 } 
if (!MATH101CoopPlanProposedflag) { 
       var MATH101CoopPlanProposedelement = document.getElementById("MATH101CoopPlanProposed");
       MATH101CoopPlanProposedelement.classList.remove("Math-highlighted");
       MATH101CoopPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("MATH101CoopPlanProposed");
 } 
if (!MATH102CoopPlanProposedflag) { 
       var MATH102CoopPlanProposedelement = document.getElementById("MATH102CoopPlanProposed");
       MATH102CoopPlanProposedelement.classList.remove("Math-highlighted");
       MATH102CoopPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("MATH102CoopPlanProposed");
 } 
if (!MATH209CoopPlanProposedflag) { 
       var MATH209CoopPlanProposedelement = document.getElementById("MATH209CoopPlanProposed");
       MATH209CoopPlanProposedelement.classList.remove("Math-highlighted");
       MATH209CoopPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("MATH209CoopPlanProposed");
 } 
if (!MATH201CoopPlanProposedflag) { 
       var MATH201CoopPlanProposedelement = document.getElementById("MATH201CoopPlanProposed");
       MATH201CoopPlanProposedelement.classList.remove("Math-highlighted");
       MATH201CoopPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("MATH201CoopPlanProposed");
 } 
if (!STAT235CoopPlanProposedflag) { 
       var STAT235CoopPlanProposedelement = document.getElementById("STAT235CoopPlanProposed");
       STAT235CoopPlanProposedelement.classList.remove("Math-highlighted");
       STAT235CoopPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("STAT235CoopPlanProposed");
 } 
if (!CHE374CoopPlanProposedflag) { 
       var CHE374CoopPlanProposedelement = document.getElementById("CHE374CoopPlanProposed");
       CHE374CoopPlanProposedelement.classList.remove("Math-highlighted");
       CHE374CoopPlanProposedelement.classList.add("Math");
       
       that.removeFromClicked("CHE374CoopPlanProposed");
 } 
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "TraditionalPlan":
if (!ENGG160TraditionalPlanflag) { 
       var ENGG160TraditionalPlanelement = document.getElementById("ENGG160TraditionalPlan");
       ENGG160TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
       ENGG160TraditionalPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("ENGG160TraditionalPlan");
 } 
if (!PETE478TraditionalPlanflag) { 
       var PETE478TraditionalPlanelement = document.getElementById("PETE478TraditionalPlan");
       PETE478TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
       PETE478TraditionalPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("PETE478TraditionalPlan");
 } 
if (!PETE496TraditionalPlanflag) { 
       var PETE496TraditionalPlanelement = document.getElementById("PETE496TraditionalPlan");
       PETE496TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
       PETE496TraditionalPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("PETE496TraditionalPlan");
 } 
       break;
      case "TraditionalPlanProposed":
if (!ENGG160TraditionalPlanProposedflag) { 
       var ENGG160TraditionalPlanProposedelement = document.getElementById("ENGG160TraditionalPlanProposed");
       ENGG160TraditionalPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
       ENGG160TraditionalPlanProposedelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("ENGG160TraditionalPlanProposed");
 } 
if (!PETE478TraditionalPlanProposedflag) { 
       var PETE478TraditionalPlanProposedelement = document.getElementById("PETE478TraditionalPlanProposed");
       PETE478TraditionalPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
       PETE478TraditionalPlanProposedelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("PETE478TraditionalPlanProposed");
 } 
if (!PETE496TraditionalPlanProposedflag) { 
       var PETE496TraditionalPlanProposedelement = document.getElementById("PETE496TraditionalPlanProposed");
       PETE496TraditionalPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
       PETE496TraditionalPlanProposedelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("PETE496TraditionalPlanProposed");
 } 
       break;
      case "CoopPlan":
if (!ENGG160CoopPlanflag) { 
       var ENGG160CoopPlanelement = document.getElementById("ENGG160CoopPlan");
       ENGG160CoopPlanelement.classList.remove("EngineeringDesign-highlighted");
       ENGG160CoopPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("ENGG160CoopPlan");
 } 
if (!PETE478CoopPlanflag) { 
       var PETE478CoopPlanelement = document.getElementById("PETE478CoopPlan");
       PETE478CoopPlanelement.classList.remove("EngineeringDesign-highlighted");
       PETE478CoopPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("PETE478CoopPlan");
 } 
if (!PETE496CoopPlanflag) { 
       var PETE496CoopPlanelement = document.getElementById("PETE496CoopPlan");
       PETE496CoopPlanelement.classList.remove("EngineeringDesign-highlighted");
       PETE496CoopPlanelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("PETE496CoopPlan");
 } 
       break;
      case "CoopPlanProposed":
if (!ENGG160CoopPlanProposedflag) { 
       var ENGG160CoopPlanProposedelement = document.getElementById("ENGG160CoopPlanProposed");
       ENGG160CoopPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
       ENGG160CoopPlanProposedelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("ENGG160CoopPlanProposed");
 } 
if (!PETE478CoopPlanProposedflag) { 
       var PETE478CoopPlanProposedelement = document.getElementById("PETE478CoopPlanProposed");
       PETE478CoopPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
       PETE478CoopPlanProposedelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("PETE478CoopPlanProposed");
 } 
if (!PETE496CoopPlanProposedflag) { 
       var PETE496CoopPlanProposedelement = document.getElementById("PETE496CoopPlanProposed");
       PETE496CoopPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
       PETE496CoopPlanProposedelement.classList.add("EngineeringDesign");
       
       that.removeFromClicked("PETE496CoopPlanProposed");
 } 
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "TraditionalPlan":
if (!CHE243TraditionalPlanflag) { 
       var CHE243TraditionalPlanelement = document.getElementById("CHE243TraditionalPlan");
       CHE243TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       CHE243TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CHE243TraditionalPlan");
 } 
if (!ECE209TraditionalPlanflag) { 
       var ECE209TraditionalPlanelement = document.getElementById("ECE209TraditionalPlan");
       ECE209TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       ECE209TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE209TraditionalPlan");
 } 
if (!MATE202TraditionalPlanflag) { 
       var MATE202TraditionalPlanelement = document.getElementById("MATE202TraditionalPlan");
       MATE202TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       MATE202TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MATE202TraditionalPlan");
 } 
if (!CHE312TraditionalPlanflag) { 
       var CHE312TraditionalPlanelement = document.getElementById("CHE312TraditionalPlan");
       CHE312TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       CHE312TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CHE312TraditionalPlan");
 } 
if (!CIVE270TraditionalPlanflag) { 
       var CIVE270TraditionalPlanelement = document.getElementById("CIVE270TraditionalPlan");
       CIVE270TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       CIVE270TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CIVE270TraditionalPlan");
 } 
if (!PETE275TraditionalPlanflag) { 
       var PETE275TraditionalPlanelement = document.getElementById("PETE275TraditionalPlan");
       PETE275TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE275TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE275TraditionalPlan");
 } 
if (!PETE364TraditionalPlanflag) { 
       var PETE364TraditionalPlanelement = document.getElementById("PETE364TraditionalPlan");
       PETE364TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE364TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE364TraditionalPlan");
 } 
if (!PETE373TraditionalPlanflag) { 
       var PETE373TraditionalPlanelement = document.getElementById("PETE373TraditionalPlan");
       PETE373TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE373TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE373TraditionalPlan");
 } 
if (!PETE365TraditionalPlanflag) { 
       var PETE365TraditionalPlanelement = document.getElementById("PETE365TraditionalPlan");
       PETE365TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE365TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE365TraditionalPlan");
 } 
if (!PETE366TraditionalPlanflag) { 
       var PETE366TraditionalPlanelement = document.getElementById("PETE366TraditionalPlan");
       PETE366TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE366TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE366TraditionalPlan");
 } 
if (!PETE444TraditionalPlanflag) { 
       var PETE444TraditionalPlanelement = document.getElementById("PETE444TraditionalPlan");
       PETE444TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE444TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE444TraditionalPlan");
 } 
if (!PETE475TraditionalPlanflag) { 
       var PETE475TraditionalPlanelement = document.getElementById("PETE475TraditionalPlan");
       PETE475TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE475TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE475TraditionalPlan");
 } 
if (!PETE476TraditionalPlanflag) { 
       var PETE476TraditionalPlanelement = document.getElementById("PETE476TraditionalPlan");
       PETE476TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE476TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE476TraditionalPlan");
 } 
if (!PETE484TraditionalPlanflag) { 
       var PETE484TraditionalPlanelement = document.getElementById("PETE484TraditionalPlan");
       PETE484TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE484TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE484TraditionalPlan");
 } 
if (!PETE471TraditionalPlanflag) { 
       var PETE471TraditionalPlanelement = document.getElementById("PETE471TraditionalPlan");
       PETE471TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE471TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE471TraditionalPlan");
 } 
if (!PETE477TraditionalPlanflag) { 
       var PETE477TraditionalPlanelement = document.getElementById("PETE477TraditionalPlan");
       PETE477TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE477TraditionalPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE477TraditionalPlan");
 } 
       break;
      case "TraditionalPlanProposed":
if (!CHE243TraditionalPlanProposedflag) { 
       var CHE243TraditionalPlanProposedelement = document.getElementById("CHE243TraditionalPlanProposed");
       CHE243TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       CHE243TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CHE243TraditionalPlanProposed");
 } 
if (!ECE209TraditionalPlanProposedflag) { 
       var ECE209TraditionalPlanProposedelement = document.getElementById("ECE209TraditionalPlanProposed");
       ECE209TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       ECE209TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE209TraditionalPlanProposed");
 } 
if (!MATE202TraditionalPlanProposedflag) { 
       var MATE202TraditionalPlanProposedelement = document.getElementById("MATE202TraditionalPlanProposed");
       MATE202TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       MATE202TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MATE202TraditionalPlanProposed");
 } 
if (!PETE275TraditionalPlanProposedflag) { 
       var PETE275TraditionalPlanProposedelement = document.getElementById("PETE275TraditionalPlanProposed");
       PETE275TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE275TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE275TraditionalPlanProposed");
 } 
if (!CHE312TraditionalPlanProposedflag) { 
       var CHE312TraditionalPlanProposedelement = document.getElementById("CHE312TraditionalPlanProposed");
       CHE312TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       CHE312TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CHE312TraditionalPlanProposed");
 } 
if (!CIVE270TraditionalPlanProposedflag) { 
       var CIVE270TraditionalPlanProposedelement = document.getElementById("CIVE270TraditionalPlanProposed");
       CIVE270TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       CIVE270TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CIVE270TraditionalPlanProposed");
 } 
if (!PETE295TraditionalPlanProposedflag) { 
       var PETE295TraditionalPlanProposedelement = document.getElementById("PETE295TraditionalPlanProposed");
       PETE295TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE295TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE295TraditionalPlanProposed");
 } 
if (!PETE364TraditionalPlanProposedflag) { 
       var PETE364TraditionalPlanProposedelement = document.getElementById("PETE364TraditionalPlanProposed");
       PETE364TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE364TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE364TraditionalPlanProposed");
 } 
if (!PETE375TraditionalPlanProposedflag) { 
       var PETE375TraditionalPlanProposedelement = document.getElementById("PETE375TraditionalPlanProposed");
       PETE375TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE375TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE375TraditionalPlanProposed");
 } 
if (!PETE365TraditionalPlanProposedflag) { 
       var PETE365TraditionalPlanProposedelement = document.getElementById("PETE365TraditionalPlanProposed");
       PETE365TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE365TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE365TraditionalPlanProposed");
 } 
if (!PETE366TraditionalPlanProposedflag) { 
       var PETE366TraditionalPlanProposedelement = document.getElementById("PETE366TraditionalPlanProposed");
       PETE366TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE366TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE366TraditionalPlanProposed");
 } 
if (!PETE377TraditionalPlanProposedflag) { 
       var PETE377TraditionalPlanProposedelement = document.getElementById("PETE377TraditionalPlanProposed");
       PETE377TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE377TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE377TraditionalPlanProposed");
 } 
if (!PETE444TraditionalPlanProposedflag) { 
       var PETE444TraditionalPlanProposedelement = document.getElementById("PETE444TraditionalPlanProposed");
       PETE444TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE444TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE444TraditionalPlanProposed");
 } 
if (!PETE476TraditionalPlanProposedflag) { 
       var PETE476TraditionalPlanProposedelement = document.getElementById("PETE476TraditionalPlanProposed");
       PETE476TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE476TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE476TraditionalPlanProposed");
 } 
if (!PETE484TraditionalPlanProposedflag) { 
       var PETE484TraditionalPlanProposedelement = document.getElementById("PETE484TraditionalPlanProposed");
       PETE484TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE484TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE484TraditionalPlanProposed");
 } 
if (!PETE471TraditionalPlanProposedflag) { 
       var PETE471TraditionalPlanProposedelement = document.getElementById("PETE471TraditionalPlanProposed");
       PETE471TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE471TraditionalPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE471TraditionalPlanProposed");
 } 
       break;
      case "CoopPlan":
if (!CHE243CoopPlanflag) { 
       var CHE243CoopPlanelement = document.getElementById("CHE243CoopPlan");
       CHE243CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       CHE243CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CHE243CoopPlan");
 } 
if (!ECE209CoopPlanflag) { 
       var ECE209CoopPlanelement = document.getElementById("ECE209CoopPlan");
       ECE209CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       ECE209CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE209CoopPlan");
 } 
if (!MATE202CoopPlanflag) { 
       var MATE202CoopPlanelement = document.getElementById("MATE202CoopPlan");
       MATE202CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       MATE202CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MATE202CoopPlan");
 } 
if (!CHE312CoopPlanflag) { 
       var CHE312CoopPlanelement = document.getElementById("CHE312CoopPlan");
       CHE312CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       CHE312CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CHE312CoopPlan");
 } 
if (!CIVE270CoopPlanflag) { 
       var CIVE270CoopPlanelement = document.getElementById("CIVE270CoopPlan");
       CIVE270CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       CIVE270CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CIVE270CoopPlan");
 } 
if (!PETE275CoopPlanflag) { 
       var PETE275CoopPlanelement = document.getElementById("PETE275CoopPlan");
       PETE275CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE275CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE275CoopPlan");
 } 
if (!PETE365CoopPlanflag) { 
       var PETE365CoopPlanelement = document.getElementById("PETE365CoopPlan");
       PETE365CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE365CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE365CoopPlan");
 } 
if (!PETE366CoopPlanflag) { 
       var PETE366CoopPlanelement = document.getElementById("PETE366CoopPlan");
       PETE366CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE366CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE366CoopPlan");
 } 
if (!PETE364CoopPlanflag) { 
       var PETE364CoopPlanelement = document.getElementById("PETE364CoopPlan");
       PETE364CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE364CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE364CoopPlan");
 } 
if (!PETE373CoopPlanflag) { 
       var PETE373CoopPlanelement = document.getElementById("PETE373CoopPlan");
       PETE373CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE373CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE373CoopPlan");
 } 
if (!PETE444CoopPlanflag) { 
       var PETE444CoopPlanelement = document.getElementById("PETE444CoopPlan");
       PETE444CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE444CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE444CoopPlan");
 } 
if (!PETE475CoopPlanflag) { 
       var PETE475CoopPlanelement = document.getElementById("PETE475CoopPlan");
       PETE475CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE475CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE475CoopPlan");
 } 
if (!PETE476CoopPlanflag) { 
       var PETE476CoopPlanelement = document.getElementById("PETE476CoopPlan");
       PETE476CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE476CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE476CoopPlan");
 } 
if (!PETE484CoopPlanflag) { 
       var PETE484CoopPlanelement = document.getElementById("PETE484CoopPlan");
       PETE484CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE484CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE484CoopPlan");
 } 
if (!PETE471CoopPlanflag) { 
       var PETE471CoopPlanelement = document.getElementById("PETE471CoopPlan");
       PETE471CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE471CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE471CoopPlan");
 } 
if (!PETE477CoopPlanflag) { 
       var PETE477CoopPlanelement = document.getElementById("PETE477CoopPlan");
       PETE477CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
       PETE477CoopPlanelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE477CoopPlan");
 } 
       break;
      case "CoopPlanProposed":
if (!CHE243CoopPlanProposedflag) { 
       var CHE243CoopPlanProposedelement = document.getElementById("CHE243CoopPlanProposed");
       CHE243CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       CHE243CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CHE243CoopPlanProposed");
 } 
if (!ECE209CoopPlanProposedflag) { 
       var ECE209CoopPlanProposedelement = document.getElementById("ECE209CoopPlanProposed");
       ECE209CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       ECE209CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("ECE209CoopPlanProposed");
 } 
if (!MATE202CoopPlanProposedflag) { 
       var MATE202CoopPlanProposedelement = document.getElementById("MATE202CoopPlanProposed");
       MATE202CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       MATE202CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("MATE202CoopPlanProposed");
 } 
if (!PETE275CoopPlanProposedflag) { 
       var PETE275CoopPlanProposedelement = document.getElementById("PETE275CoopPlanProposed");
       PETE275CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE275CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE275CoopPlanProposed");
 } 
if (!CHE312CoopPlanProposedflag) { 
       var CHE312CoopPlanProposedelement = document.getElementById("CHE312CoopPlanProposed");
       CHE312CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       CHE312CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CHE312CoopPlanProposed");
 } 
if (!CIVE270CoopPlanProposedflag) { 
       var CIVE270CoopPlanProposedelement = document.getElementById("CIVE270CoopPlanProposed");
       CIVE270CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       CIVE270CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("CIVE270CoopPlanProposed");
 } 
if (!PETE295CoopPlanProposedflag) { 
       var PETE295CoopPlanProposedelement = document.getElementById("PETE295CoopPlanProposed");
       PETE295CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE295CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE295CoopPlanProposed");
 } 
if (!PETE365CoopPlanProposedflag) { 
       var PETE365CoopPlanProposedelement = document.getElementById("PETE365CoopPlanProposed");
       PETE365CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE365CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE365CoopPlanProposed");
 } 
if (!PETE366CoopPlanProposedflag) { 
       var PETE366CoopPlanProposedelement = document.getElementById("PETE366CoopPlanProposed");
       PETE366CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE366CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE366CoopPlanProposed");
 } 
if (!PETE377CoopPlanProposedflag) { 
       var PETE377CoopPlanProposedelement = document.getElementById("PETE377CoopPlanProposed");
       PETE377CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE377CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE377CoopPlanProposed");
 } 
if (!PETE364CoopPlanProposedflag) { 
       var PETE364CoopPlanProposedelement = document.getElementById("PETE364CoopPlanProposed");
       PETE364CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE364CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE364CoopPlanProposed");
 } 
if (!PETE373CoopPlanProposedflag) { 
       var PETE373CoopPlanProposedelement = document.getElementById("PETE373CoopPlanProposed");
       PETE373CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE373CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE373CoopPlanProposed");
 } 
if (!PETE375CoopPlanProposedflag) { 
       var PETE375CoopPlanProposedelement = document.getElementById("PETE375CoopPlanProposed");
       PETE375CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE375CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE375CoopPlanProposed");
 } 
if (!PETE444CoopPlanProposedflag) { 
       var PETE444CoopPlanProposedelement = document.getElementById("PETE444CoopPlanProposed");
       PETE444CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE444CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE444CoopPlanProposed");
 } 
if (!PETE476CoopPlanProposedflag) { 
       var PETE476CoopPlanProposedelement = document.getElementById("PETE476CoopPlanProposed");
       PETE476CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE476CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE476CoopPlanProposed");
 } 
if (!PETE484CoopPlanProposedflag) { 
       var PETE484CoopPlanProposedelement = document.getElementById("PETE484CoopPlanProposed");
       PETE484CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE484CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE484CoopPlanProposed");
 } 
if (!PETE471CoopPlanProposedflag) { 
       var PETE471CoopPlanProposedelement = document.getElementById("PETE471CoopPlanProposed");
       PETE471CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
       PETE471CoopPlanProposedelement.classList.add("EngineeringSciences");
       
       that.removeFromClicked("PETE471CoopPlanProposed");
 } 
       break;
       }
      break;
  case "COMP":
  case "ComplementaryElective":
    switch(planName) {
      case "TraditionalPlan":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveTraditionalPlan" + i);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveTraditionalPlan" + i);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveTraditionalPlan" + i);
          i = i + 1;
        }
       break;
      case "TraditionalPlanProposed":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveTraditionalPlanProposed" + i);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveTraditionalPlanProposed" + i);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveTraditionalPlanProposed" + i);
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveCoopPlan" + i);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveCoopPlan" + i);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveCoopPlan" + i);
          i = i + 1;
        }
       break;
      case "CoopPlanProposed":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveCoopPlanProposed" + i);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveCoopPlanProposed" + i);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          currelement.classList.remove("COMP-highlighted");
          currelement.classList.add("COMP");
          that.removeFromClicked("ComplementaryElectiveCoopPlanProposed" + i);
          i = i + 1;
        }
       break;
       }
      break;
  case "PROG":
  case "ProgramTechnicalElective":
    switch(planName) {
      case "TraditionalPlan":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG-highlighted");
          currelement.classList.add("PROG");
          that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan" + i);
          i = i + 1;
        }
       break;
      case "TraditionalPlanProposed":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG-highlighted");
          currelement.classList.add("PROG");
          that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlanProposed" + i);
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG-highlighted");
          currelement.classList.add("PROG");
          that.removeFromClicked("ProgramTechnicalElectiveCoopPlan" + i);
          i = i + 1;
        }
       break;
      case "CoopPlanProposed":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          currelement.classList.remove("PROG-highlighted");
          currelement.classList.add("PROG");
          that.removeFromClicked("ProgramTechnicalElectiveCoopPlanProposed" + i);
          i = i + 1;
        }
       break;
       }
      break;
  case "ITS":
    switch(planName) {
      case "TraditionalPlan":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS-highlighted");
          currelement.classList.add("ITS");
          that.removeFromClicked("ITSElectiveTraditionalPlan" + i);
          i = i + 1;
        }
       break;
      case "TraditionalPlanProposed":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS-highlighted");
          currelement.classList.add("ITS");
          that.removeFromClicked("ITSElectiveTraditionalPlanProposed" + i);
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS-highlighted");
          currelement.classList.add("ITS");
          that.removeFromClicked("ITSElectiveCoopPlan" + i);
          i = i + 1;
        }
       break;
      case "CoopPlanProposed":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          currelement.classList.remove("ITS-highlighted");
          currelement.classList.add("ITS");
          that.removeFromClicked("ITSElectiveCoopPlanProposed" + i);
          i = i + 1;
        }
       break;
       }
      break;
break;   default:
    console.log("shouldn't be here");
    }
};
  var CHEM103TraditionalPlanflag = false;
  var CHEM103TraditionalPlanrflag = false;
 var CHEM103TraditionalPlanTime = new Date().getTime();
  var ENGG100TraditionalPlanflag = false;
  var ENGG100TraditionalPlanrflag = false;
 var ENGG100TraditionalPlanTime = new Date().getTime();
  var ENGG130TraditionalPlanflag = false;
  var ENGG130TraditionalPlanrflag = false;
 var ENGG130TraditionalPlanTime = new Date().getTime();
  var ENGL199TraditionalPlanflag = false;
  var ENGL199TraditionalPlanrflag = false;
 var ENGL199TraditionalPlanTime = new Date().getTime();
  var MATH100TraditionalPlanflag = false;
  var MATH100TraditionalPlanrflag = false;
 var MATH100TraditionalPlanTime = new Date().getTime();
  var PHYS130TraditionalPlanflag = false;
  var PHYS130TraditionalPlanrflag = false;
 var PHYS130TraditionalPlanTime = new Date().getTime();
  var CHEM105TraditionalPlanflag = false;
  var CHEM105TraditionalPlanrflag = false;
 var CHEM105TraditionalPlanTime = new Date().getTime();
  var ENCMP100TraditionalPlanflag = false;
  var ENCMP100TraditionalPlanrflag = false;
 var ENCMP100TraditionalPlanTime = new Date().getTime();
  var ENGG160TraditionalPlanflag = false;
  var ENGG160TraditionalPlanrflag = false;
 var ENGG160TraditionalPlanTime = new Date().getTime();
  var ENPH131TraditionalPlanflag = false;
  var ENPH131TraditionalPlanrflag = false;
 var ENPH131TraditionalPlanTime = new Date().getTime();
  var MATH101TraditionalPlanflag = false;
  var MATH101TraditionalPlanrflag = false;
 var MATH101TraditionalPlanTime = new Date().getTime();
  var MATH102TraditionalPlanflag = false;
  var MATH102TraditionalPlanrflag = false;
 var MATH102TraditionalPlanTime = new Date().getTime();
  var CHE243TraditionalPlanflag = false;
  var CHE243TraditionalPlanrflag = false;
 var CHE243TraditionalPlanTime = new Date().getTime();
  var EAS210TraditionalPlanflag = false;
  var EAS210TraditionalPlanrflag = false;
 var EAS210TraditionalPlanTime = new Date().getTime();
  var ECE209TraditionalPlanflag = false;
  var ECE209TraditionalPlanrflag = false;
 var ECE209TraditionalPlanTime = new Date().getTime();
  var MATE202TraditionalPlanflag = false;
  var MATE202TraditionalPlanrflag = false;
 var MATE202TraditionalPlanTime = new Date().getTime();
  var MATH209TraditionalPlanflag = false;
  var MATH209TraditionalPlanrflag = false;
 var MATH209TraditionalPlanTime = new Date().getTime();
  var ComplementaryElectiveTraditionalPlan0flag = false;
  var ComplementaryElectiveTraditionalPlan0rflag = false;
 var ComplementaryElectiveTraditionalPlan0Time = new Date().getTime();
  var CHE312TraditionalPlanflag = false;
  var CHE312TraditionalPlanrflag = false;
 var CHE312TraditionalPlanTime = new Date().getTime();
  var CIVE270TraditionalPlanflag = false;
  var CIVE270TraditionalPlanrflag = false;
 var CIVE270TraditionalPlanTime = new Date().getTime();
  var MATH201TraditionalPlanflag = false;
  var MATH201TraditionalPlanrflag = false;
 var MATH201TraditionalPlanTime = new Date().getTime();
  var PETE275TraditionalPlanflag = false;
  var PETE275TraditionalPlanrflag = false;
 var PETE275TraditionalPlanTime = new Date().getTime();
  var STAT235TraditionalPlanflag = false;
  var STAT235TraditionalPlanrflag = false;
 var STAT235TraditionalPlanTime = new Date().getTime();
  var ComplementaryElectiveTraditionalPlan1flag = false;
  var ComplementaryElectiveTraditionalPlan1rflag = false;
 var ComplementaryElectiveTraditionalPlan1Time = new Date().getTime();
  var CHEM371TraditionalPlanflag = false;
  var CHEM371TraditionalPlanrflag = false;
 var CHEM371TraditionalPlanTime = new Date().getTime();
  var ENGM310TraditionalPlanflag = false;
  var ENGM310TraditionalPlanrflag = false;
 var ENGM310TraditionalPlanTime = new Date().getTime();
  var ENGM401TraditionalPlanflag = false;
  var ENGM401TraditionalPlanrflag = false;
 var ENGM401TraditionalPlanTime = new Date().getTime();
  var PETE364TraditionalPlanflag = false;
  var PETE364TraditionalPlanrflag = false;
 var PETE364TraditionalPlanTime = new Date().getTime();
  var PETE373TraditionalPlanflag = false;
  var PETE373TraditionalPlanrflag = false;
 var PETE373TraditionalPlanTime = new Date().getTime();
  var ProgramTechnicalElectiveTraditionalPlan0flag = false;
  var ProgramTechnicalElectiveTraditionalPlan0rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan0Time = new Date().getTime();
  var ComplementaryElectiveTraditionalPlan2flag = false;
  var ComplementaryElectiveTraditionalPlan2rflag = false;
 var ComplementaryElectiveTraditionalPlan2Time = new Date().getTime();
  var CHE374TraditionalPlanflag = false;
  var CHE374TraditionalPlanrflag = false;
 var CHE374TraditionalPlanTime = new Date().getTime();
  var EAS222TraditionalPlanflag = false;
  var EAS222TraditionalPlanrflag = false;
 var EAS222TraditionalPlanTime = new Date().getTime();
  var PETE365TraditionalPlanflag = false;
  var PETE365TraditionalPlanrflag = false;
 var PETE365TraditionalPlanTime = new Date().getTime();
  var PETE366TraditionalPlanflag = false;
  var PETE366TraditionalPlanrflag = false;
 var PETE366TraditionalPlanTime = new Date().getTime();
  var ProgramTechnicalElectiveTraditionalPlan1flag = false;
  var ProgramTechnicalElectiveTraditionalPlan1rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan1Time = new Date().getTime();
  var CHE314TraditionalPlanflag = false;
  var CHE314TraditionalPlanrflag = false;
 var CHE314TraditionalPlanTime = new Date().getTime();
  var ENGG404TraditionalPlanflag = false;
  var ENGG404TraditionalPlanrflag = false;
 var ENGG404TraditionalPlanTime = new Date().getTime();
  var PETE444TraditionalPlanflag = false;
  var PETE444TraditionalPlanrflag = false;
 var PETE444TraditionalPlanTime = new Date().getTime();
  var PETE475TraditionalPlanflag = false;
  var PETE475TraditionalPlanrflag = false;
 var PETE475TraditionalPlanTime = new Date().getTime();
  var PETE476TraditionalPlanflag = false;
  var PETE476TraditionalPlanrflag = false;
 var PETE476TraditionalPlanTime = new Date().getTime();
  var PETE484TraditionalPlanflag = false;
  var PETE484TraditionalPlanrflag = false;
 var PETE484TraditionalPlanTime = new Date().getTime();
  var ENGG400TraditionalPlanflag = false;
  var ENGG400TraditionalPlanrflag = false;
 var ENGG400TraditionalPlanTime = new Date().getTime();
  var PETE471TraditionalPlanflag = false;
  var PETE471TraditionalPlanrflag = false;
 var PETE471TraditionalPlanTime = new Date().getTime();
  var PETE477TraditionalPlanflag = false;
  var PETE477TraditionalPlanrflag = false;
 var PETE477TraditionalPlanTime = new Date().getTime();
  var PETE478TraditionalPlanflag = false;
  var PETE478TraditionalPlanrflag = false;
 var PETE478TraditionalPlanTime = new Date().getTime();
  var PETE496TraditionalPlanflag = false;
  var PETE496TraditionalPlanrflag = false;
 var PETE496TraditionalPlanTime = new Date().getTime();
  var ITSElectiveTraditionalPlan0flag = false;
  var ITSElectiveTraditionalPlan0rflag = false;
 var ITSElectiveTraditionalPlan0Time = new Date().getTime();
$scope.CHEM103TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103TraditionalPlanTime <= 200) { 
        CHEM103TraditionalPlanTime = currentTime;
        return;
    }
CHEM103TraditionalPlanTime = currentTime;
  var CHEM103TraditionalPlanelement = document.getElementById("CHEM103TraditionalPlan");
 if (!CHEM103TraditionalPlanflag) {
     if (CHEM103TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM103TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM103TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine2());
     CHEM103TraditionalPlanelement.classList.remove("NaturalSciences");
     CHEM103TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM103TraditionalPlan", "NaturalSciences"]);
      CHEM103TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
     CHEM103TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM103TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM103TraditionalPlan");
      CHEM103TraditionalPlanflag=false
  }
};
$scope.ENGG100TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100TraditionalPlanTime <= 200) { 
        ENGG100TraditionalPlanTime = currentTime;
        return;
    }
ENGG100TraditionalPlanTime = currentTime;
  var ENGG100TraditionalPlanelement = document.getElementById("ENGG100TraditionalPlan");
 if (!ENGG100TraditionalPlanflag) {
     if (ENGG100TraditionalPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG100TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100TraditionalPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG100TraditionalPlanelement.classList.remove("EngineeringProfession");
     ENGG100TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG100TraditionalPlan", "EngineeringProfession"]);
      ENGG100TraditionalPlanflag=true
  }
 else {
     ENGG100TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100TraditionalPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG100TraditionalPlan");
      ENGG100TraditionalPlanflag=false
  }
};
$scope.ENGG130TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130TraditionalPlanTime <= 200) { 
        ENGG130TraditionalPlanTime = currentTime;
        return;
    }
ENGG130TraditionalPlanTime = currentTime;
  var ENGG130TraditionalPlanelement = document.getElementById("ENGG130TraditionalPlan");
 if (!ENGG130TraditionalPlanflag) {
     if (ENGG130TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENGG130TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENGG130TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine0());
      that.addLine(getLine5());
      that.addLine(getLine17());
     ENGG130TraditionalPlanelement.classList.remove("NaturalSciences");
     ENGG130TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENGG130TraditionalPlan", "NaturalSciences"]);
      ENGG130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine5());
      that.removeLine(getLine17());
     ENGG130TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENGG130TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENGG130TraditionalPlan");
      ENGG130TraditionalPlanflag=false
  }
};
$scope.ENGL199TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199TraditionalPlanTime <= 200) { 
        ENGL199TraditionalPlanTime = currentTime;
        return;
    }
ENGL199TraditionalPlanTime = currentTime;
  var ENGL199TraditionalPlanelement = document.getElementById("ENGL199TraditionalPlan");
 if (!ENGL199TraditionalPlanflag) {
     if (ENGL199TraditionalPlanelement.classList.contains("Other-highlighted")) { 
     ENGL199TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGL199TraditionalPlanelement.classList.add("Other");
      return;
}      that.addLine(getLine3());
     ENGL199TraditionalPlanelement.classList.remove("Other");
     ENGL199TraditionalPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199TraditionalPlan", "Other"]);
      ENGL199TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
     ENGL199TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGL199TraditionalPlanelement.classList.add("Other");
     that.removeFromClicked("ENGL199TraditionalPlan");
      ENGL199TraditionalPlanflag=false
  }
};
$scope.MATH100TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100TraditionalPlanTime <= 200) { 
        MATH100TraditionalPlanTime = currentTime;
        return;
    }
MATH100TraditionalPlanTime = currentTime;
  var MATH100TraditionalPlanelement = document.getElementById("MATH100TraditionalPlan");
 if (!MATH100TraditionalPlanflag) {
     if (MATH100TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     MATH100TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH100TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine0());
      that.addLine(getLine1());
      that.addLine(getLine4());
      that.addLine(getLine7());
      that.addLine(getLine8());
      that.addLine(getLine21());
     MATH100TraditionalPlanelement.classList.remove("Math");
     MATH100TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH100TraditionalPlan", "Math"]);
      MATH100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine1());
      that.removeLine(getLine4());
      that.removeLine(getLine7());
      that.removeLine(getLine8());
      that.removeLine(getLine21());
     MATH100TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH100TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH100TraditionalPlan");
      MATH100TraditionalPlanflag=false
  }
};
$scope.PHYS130TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130TraditionalPlanTime <= 200) { 
        PHYS130TraditionalPlanTime = currentTime;
        return;
    }
PHYS130TraditionalPlanTime = currentTime;
  var PHYS130TraditionalPlanelement = document.getElementById("PHYS130TraditionalPlan");
 if (!PHYS130TraditionalPlanflag) {
     if (PHYS130TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     PHYS130TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     PHYS130TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine1());
     PHYS130TraditionalPlanelement.classList.remove("NaturalSciences");
     PHYS130TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["PHYS130TraditionalPlan", "NaturalSciences"]);
      PHYS130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine1());
     PHYS130TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     PHYS130TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("PHYS130TraditionalPlan");
      PHYS130TraditionalPlanflag=false
  }
};
$scope.CHEM105TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105TraditionalPlanTime <= 200) { 
        CHEM105TraditionalPlanTime = currentTime;
        return;
    }
CHEM105TraditionalPlanTime = currentTime;
  var CHEM105TraditionalPlanelement = document.getElementById("CHEM105TraditionalPlan");
 if (!CHEM105TraditionalPlanflag) {
     if (CHEM105TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM105TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM105TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine2());
      that.addLine(getLine10());
      that.addLine(getLine20());
      that.addLine(getLine23());
     CHEM105TraditionalPlanelement.classList.remove("NaturalSciences");
     CHEM105TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM105TraditionalPlan", "NaturalSciences"]);
      CHEM105TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
      that.removeLine(getLine10());
      that.removeLine(getLine20());
      that.removeLine(getLine23());
     CHEM105TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM105TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM105TraditionalPlan");
      CHEM105TraditionalPlanflag=false
  }
};
$scope.ENCMP100TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100TraditionalPlanTime <= 200) { 
        ENCMP100TraditionalPlanTime = currentTime;
        return;
    }
ENCMP100TraditionalPlanTime = currentTime;
  var ENCMP100TraditionalPlanelement = document.getElementById("ENCMP100TraditionalPlan");
 if (!ENCMP100TraditionalPlanflag) {
     if (ENCMP100TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENCMP100TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine28());
     ENCMP100TraditionalPlanelement.classList.remove("NaturalSciences");
     ENCMP100TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENCMP100TraditionalPlan", "NaturalSciences"]);
      ENCMP100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine28());
     ENCMP100TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENCMP100TraditionalPlan");
      ENCMP100TraditionalPlanflag=false
  }
};
$scope.ENGG160TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160TraditionalPlanTime <= 200) { 
        ENGG160TraditionalPlanTime = currentTime;
        return;
    }
ENGG160TraditionalPlanTime = currentTime;
  var ENGG160TraditionalPlanelement = document.getElementById("ENGG160TraditionalPlan");
 if (!ENGG160TraditionalPlanflag) {
     if (ENGG160TraditionalPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     ENGG160TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     ENGG160TraditionalPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine3());
     ENGG160TraditionalPlanelement.classList.remove("EngineeringDesign");
     ENGG160TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["ENGG160TraditionalPlan", "EngineeringDesign"]);
      ENGG160TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
     ENGG160TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     ENGG160TraditionalPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("ENGG160TraditionalPlan");
      ENGG160TraditionalPlanflag=false
  }
};
$scope.ENPH131TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131TraditionalPlanTime <= 200) { 
        ENPH131TraditionalPlanTime = currentTime;
        return;
    }
ENPH131TraditionalPlanTime = currentTime;
  var ENPH131TraditionalPlanelement = document.getElementById("ENPH131TraditionalPlan");
 if (!ENPH131TraditionalPlanflag) {
     if (ENPH131TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENPH131TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENPH131TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine4());
      that.addLine(getLine5());
      that.addLine(getLine6());
      that.addLine(getLine14());
     ENPH131TraditionalPlanelement.classList.remove("NaturalSciences");
     ENPH131TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENPH131TraditionalPlan", "NaturalSciences"]);
      ENPH131TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine14());
     ENPH131TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     ENPH131TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENPH131TraditionalPlan");
      ENPH131TraditionalPlanflag=false
  }
};
$scope.MATH101TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101TraditionalPlanTime <= 200) { 
        MATH101TraditionalPlanTime = currentTime;
        return;
    }
MATH101TraditionalPlanTime = currentTime;
  var MATH101TraditionalPlanelement = document.getElementById("MATH101TraditionalPlan");
 if (!MATH101TraditionalPlanflag) {
     if (MATH101TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     MATH101TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH101TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine6());
      that.addLine(getLine7());
      that.addLine(getLine9());
      that.addLine(getLine11());
      that.addLine(getLine18());
      that.addLine(getLine22());
      that.addLine(getLine24());
     MATH101TraditionalPlanelement.classList.remove("Math");
     MATH101TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH101TraditionalPlan", "Math"]);
      MATH101TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine6());
      that.removeLine(getLine7());
      that.removeLine(getLine9());
      that.removeLine(getLine11());
      that.removeLine(getLine18());
      that.removeLine(getLine22());
      that.removeLine(getLine24());
     MATH101TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH101TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH101TraditionalPlan");
      MATH101TraditionalPlanflag=false
  }
};
$scope.MATH102TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102TraditionalPlanTime <= 200) { 
        MATH102TraditionalPlanTime = currentTime;
        return;
    }
MATH102TraditionalPlanTime = currentTime;
  var MATH102TraditionalPlanelement = document.getElementById("MATH102TraditionalPlan");
 if (!MATH102TraditionalPlanflag) {
     if (MATH102TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     MATH102TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH102TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine8());
      that.addLine(getLine12());
     MATH102TraditionalPlanelement.classList.remove("Math");
     MATH102TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH102TraditionalPlan", "Math"]);
      MATH102TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine12());
     MATH102TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH102TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH102TraditionalPlan");
      MATH102TraditionalPlanflag=false
  }
};
$scope.CHE243TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243TraditionalPlanTime <= 200) { 
        CHE243TraditionalPlanTime = currentTime;
        return;
    }
CHE243TraditionalPlanTime = currentTime;
  var CHE243TraditionalPlanelement = document.getElementById("CHE243TraditionalPlan");
 if (!CHE243TraditionalPlanflag) {
     if (CHE243TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     CHE243TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE243TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine9());
      that.addLine(getLine13());
     CHE243TraditionalPlanelement.classList.remove("EngineeringSciences");
     CHE243TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CHE243TraditionalPlan", "EngineeringSciences"]);
      CHE243TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine9());
      that.removeLine(getLine13());
     CHE243TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE243TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CHE243TraditionalPlan");
      CHE243TraditionalPlanflag=false
  }
};
$scope.EAS210TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - EAS210TraditionalPlanTime <= 200) { 
        EAS210TraditionalPlanTime = currentTime;
        return;
    }
EAS210TraditionalPlanTime = currentTime;
  var EAS210TraditionalPlanelement = document.getElementById("EAS210TraditionalPlan");
 if (!EAS210TraditionalPlanflag) {
     if (EAS210TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     EAS210TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     EAS210TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine29());
     EAS210TraditionalPlanelement.classList.remove("NaturalSciences");
     EAS210TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["EAS210TraditionalPlan", "NaturalSciences"]);
      EAS210TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine29());
     EAS210TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     EAS210TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("EAS210TraditionalPlan");
      EAS210TraditionalPlanflag=false
  }
};
$scope.ECE209TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE209TraditionalPlanTime <= 200) { 
        ECE209TraditionalPlanTime = currentTime;
        return;
    }
ECE209TraditionalPlanTime = currentTime;
  var ECE209TraditionalPlanelement = document.getElementById("ECE209TraditionalPlan");
 if (!ECE209TraditionalPlanflag) {
     if (ECE209TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE209TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE209TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}     ECE209TraditionalPlanelement.classList.remove("EngineeringSciences");
     ECE209TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE209TraditionalPlan", "EngineeringSciences"]);
      ECE209TraditionalPlanflag=true
  }
 else {
     ECE209TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE209TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE209TraditionalPlan");
      ECE209TraditionalPlanflag=false
  }
};
$scope.MATE202TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE202TraditionalPlanTime <= 200) { 
        MATE202TraditionalPlanTime = currentTime;
        return;
    }
MATE202TraditionalPlanTime = currentTime;
  var MATE202TraditionalPlanelement = document.getElementById("MATE202TraditionalPlan");
 if (!MATE202TraditionalPlanflag) {
     if (MATE202TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     MATE202TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     MATE202TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine10());
     MATE202TraditionalPlanelement.classList.remove("EngineeringSciences");
     MATE202TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MATE202TraditionalPlan", "EngineeringSciences"]);
      MATE202TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine10());
     MATE202TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     MATE202TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MATE202TraditionalPlan");
      MATE202TraditionalPlanflag=false
  }
};
$scope.MATH209TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209TraditionalPlanTime <= 200) { 
        MATH209TraditionalPlanTime = currentTime;
        return;
    }
MATH209TraditionalPlanTime = currentTime;
  var MATH209TraditionalPlanelement = document.getElementById("MATH209TraditionalPlan");
 if (!MATH209TraditionalPlanflag) {
     if (MATH209TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     MATH209TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH209TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine11());
      that.addLine(getLine12());
      that.addLine(getLine15());
      that.addLine(getLine19());
     MATH209TraditionalPlanelement.classList.remove("Math");
     MATH209TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH209TraditionalPlan", "Math"]);
      MATH209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine12());
      that.removeLine(getLine15());
      that.removeLine(getLine19());
     MATH209TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH209TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH209TraditionalPlan");
      MATH209TraditionalPlanflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveTraditionalPlan0Time <= 200) { 
        ComplementaryElectiveTraditionalPlan0Time = currentTime;
        return;
    }
ComplementaryElectiveTraditionalPlan0Time = currentTime;
  var ComplementaryElectiveTraditionalPlan0element = document.getElementById("ComplementaryElectiveTraditionalPlan0");
 if (!ComplementaryElectiveTraditionalPlan0flag) {
     if (ComplementaryElectiveTraditionalPlan0element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveTraditionalPlan0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlan0element.classList.add("COMP");
      return;
}     ComplementaryElectiveTraditionalPlan0element.classList.remove("COMP");
     ComplementaryElectiveTraditionalPlan0element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveTraditionalPlan0", "COMP"]);
      ComplementaryElectiveTraditionalPlan0flag=true
  }
 else {
     ComplementaryElectiveTraditionalPlan0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlan0element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveTraditionalPlan0");
      ComplementaryElectiveTraditionalPlan0flag=false
  }
};
$scope.CHE312TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE312TraditionalPlanTime <= 200) { 
        CHE312TraditionalPlanTime = currentTime;
        return;
    }
CHE312TraditionalPlanTime = currentTime;
  var CHE312TraditionalPlanelement = document.getElementById("CHE312TraditionalPlan");
 if (!CHE312TraditionalPlanflag) {
     if (CHE312TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     CHE312TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE312TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine13());
      that.addLine(getLine14());
      that.addLine(getLine15());
      that.addLine(getLine16());
      that.addLine(getLine25());
      that.addLine(getLine31());
      that.addLine(getLine33());
     CHE312TraditionalPlanelement.classList.remove("EngineeringSciences");
     CHE312TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CHE312TraditionalPlan", "EngineeringSciences"]);
      CHE312TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine13());
      that.removeLine(getLine14());
      that.removeLine(getLine15());
      that.removeLine(getLine16());
      that.removeLine(getLine25());
      that.removeLine(getLine31());
      that.removeLine(getLine33());
     CHE312TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE312TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CHE312TraditionalPlan");
      CHE312TraditionalPlanflag=false
  }
};
$scope.CIVE270TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270TraditionalPlanTime <= 200) { 
        CIVE270TraditionalPlanTime = currentTime;
        return;
    }
CIVE270TraditionalPlanTime = currentTime;
  var CIVE270TraditionalPlanelement = document.getElementById("CIVE270TraditionalPlan");
 if (!CIVE270TraditionalPlanflag) {
     if (CIVE270TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     CIVE270TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine17());
      that.addLine(getLine18());
      that.addLine(getLine26());
     CIVE270TraditionalPlanelement.classList.remove("EngineeringSciences");
     CIVE270TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CIVE270TraditionalPlan", "EngineeringSciences"]);
      CIVE270TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine17());
      that.removeLine(getLine18());
      that.removeLine(getLine26());
     CIVE270TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CIVE270TraditionalPlan");
      CIVE270TraditionalPlanflag=false
  }
};
$scope.MATH201TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201TraditionalPlanTime <= 200) { 
        MATH201TraditionalPlanTime = currentTime;
        return;
    }
MATH201TraditionalPlanTime = currentTime;
  var MATH201TraditionalPlanelement = document.getElementById("MATH201TraditionalPlan");
 if (!MATH201TraditionalPlanflag) {
     if (MATH201TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     MATH201TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH201TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine16());
      that.addLine(getLine19());
      that.addLine(getLine32());
     MATH201TraditionalPlanelement.classList.remove("Math");
     MATH201TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH201TraditionalPlan", "Math"]);
      MATH201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine16());
      that.removeLine(getLine19());
      that.removeLine(getLine32());
     MATH201TraditionalPlanelement.classList.remove("Math-highlighted");
     MATH201TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("MATH201TraditionalPlan");
      MATH201TraditionalPlanflag=false
  }
};
$scope.PETE275TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE275TraditionalPlanTime <= 200) { 
        PETE275TraditionalPlanTime = currentTime;
        return;
    }
PETE275TraditionalPlanTime = currentTime;
  var PETE275TraditionalPlanelement = document.getElementById("PETE275TraditionalPlan");
 if (!PETE275TraditionalPlanflag) {
     if (PETE275TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE275TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE275TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine20());
      that.addLine(getLine27());
      that.addLine(getLine30());
      that.addLine(getLine35());
     PETE275TraditionalPlanelement.classList.remove("EngineeringSciences");
     PETE275TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE275TraditionalPlan", "EngineeringSciences"]);
      PETE275TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine20());
      that.removeLine(getLine27());
      that.removeLine(getLine30());
      that.removeLine(getLine35());
     PETE275TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE275TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE275TraditionalPlan");
      PETE275TraditionalPlanflag=false
  }
};
$scope.STAT235TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - STAT235TraditionalPlanTime <= 200) { 
        STAT235TraditionalPlanTime = currentTime;
        return;
    }
STAT235TraditionalPlanTime = currentTime;
  var STAT235TraditionalPlanelement = document.getElementById("STAT235TraditionalPlan");
 if (!STAT235TraditionalPlanflag) {
     if (STAT235TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     STAT235TraditionalPlanelement.classList.remove("Math-highlighted");
     STAT235TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine21());
      that.addLine(getLine22());
     STAT235TraditionalPlanelement.classList.remove("Math");
     STAT235TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["STAT235TraditionalPlan", "Math"]);
      STAT235TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine22());
     STAT235TraditionalPlanelement.classList.remove("Math-highlighted");
     STAT235TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("STAT235TraditionalPlan");
      STAT235TraditionalPlanflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveTraditionalPlan1Time <= 200) { 
        ComplementaryElectiveTraditionalPlan1Time = currentTime;
        return;
    }
ComplementaryElectiveTraditionalPlan1Time = currentTime;
  var ComplementaryElectiveTraditionalPlan1element = document.getElementById("ComplementaryElectiveTraditionalPlan1");
 if (!ComplementaryElectiveTraditionalPlan1flag) {
     if (ComplementaryElectiveTraditionalPlan1element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveTraditionalPlan1element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlan1element.classList.add("COMP");
      return;
}     ComplementaryElectiveTraditionalPlan1element.classList.remove("COMP");
     ComplementaryElectiveTraditionalPlan1element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveTraditionalPlan1", "COMP"]);
      ComplementaryElectiveTraditionalPlan1flag=true
  }
 else {
     ComplementaryElectiveTraditionalPlan1element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlan1element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveTraditionalPlan1");
      ComplementaryElectiveTraditionalPlan1flag=false
  }
};
$scope.CHEM371TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM371TraditionalPlanTime <= 200) { 
        CHEM371TraditionalPlanTime = currentTime;
        return;
    }
CHEM371TraditionalPlanTime = currentTime;
  var CHEM371TraditionalPlanelement = document.getElementById("CHEM371TraditionalPlan");
 if (!CHEM371TraditionalPlanflag) {
     if (CHEM371TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM371TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM371TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine23());
      that.addLine(getLine24());
     CHEM371TraditionalPlanelement.classList.remove("NaturalSciences");
     CHEM371TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM371TraditionalPlan", "NaturalSciences"]);
      CHEM371TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine23());
      that.removeLine(getLine24());
     CHEM371TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM371TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM371TraditionalPlan");
      CHEM371TraditionalPlanflag=false
  }
};
$scope.ENGM310TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310TraditionalPlanTime <= 200) { 
        ENGM310TraditionalPlanTime = currentTime;
        return;
    }
ENGM310TraditionalPlanTime = currentTime;
  var ENGM310TraditionalPlanelement = document.getElementById("ENGM310TraditionalPlan");
 if (!ENGM310TraditionalPlanflag) {
     if (ENGM310TraditionalPlanelement.classList.contains("Other-highlighted")) { 
     ENGM310TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGM310TraditionalPlanelement.classList.add("Other");
      return;
}      that.addLine(getLine38());
     ENGM310TraditionalPlanelement.classList.remove("Other");
     ENGM310TraditionalPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM310TraditionalPlan", "Other"]);
      ENGM310TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine38());
     ENGM310TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGM310TraditionalPlanelement.classList.add("Other");
     that.removeFromClicked("ENGM310TraditionalPlan");
      ENGM310TraditionalPlanflag=false
  }
};
$scope.ENGM401TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401TraditionalPlanTime <= 200) { 
        ENGM401TraditionalPlanTime = currentTime;
        return;
    }
ENGM401TraditionalPlanTime = currentTime;
  var ENGM401TraditionalPlanelement = document.getElementById("ENGM401TraditionalPlan");
 if (!ENGM401TraditionalPlanflag) {
     if (ENGM401TraditionalPlanelement.classList.contains("Other-highlighted")) { 
     ENGM401TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGM401TraditionalPlanelement.classList.add("Other");
      return;
}      that.addLine(getLine39());
     ENGM401TraditionalPlanelement.classList.remove("Other");
     ENGM401TraditionalPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401TraditionalPlan", "Other"]);
      ENGM401TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine39());
     ENGM401TraditionalPlanelement.classList.remove("Other-highlighted");
     ENGM401TraditionalPlanelement.classList.add("Other");
     that.removeFromClicked("ENGM401TraditionalPlan");
      ENGM401TraditionalPlanflag=false
  }
};
$scope.PETE364TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE364TraditionalPlanTime <= 200) { 
        PETE364TraditionalPlanTime = currentTime;
        return;
    }
PETE364TraditionalPlanTime = currentTime;
  var PETE364TraditionalPlanelement = document.getElementById("PETE364TraditionalPlan");
 if (!PETE364TraditionalPlanflag) {
     if (PETE364TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE364TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE364TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine25());
      that.addLine(getLine26());
      that.addLine(getLine37());
     PETE364TraditionalPlanelement.classList.remove("EngineeringSciences");
     PETE364TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE364TraditionalPlan", "EngineeringSciences"]);
      PETE364TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine25());
      that.removeLine(getLine26());
      that.removeLine(getLine37());
     PETE364TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE364TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE364TraditionalPlan");
      PETE364TraditionalPlanflag=false
  }
};
$scope.PETE373TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE373TraditionalPlanTime <= 200) { 
        PETE373TraditionalPlanTime = currentTime;
        return;
    }
PETE373TraditionalPlanTime = currentTime;
  var PETE373TraditionalPlanelement = document.getElementById("PETE373TraditionalPlan");
 if (!PETE373TraditionalPlanflag) {
     if (PETE373TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE373TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE373TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine27());
      that.addLine(getLine36());
      that.addLine(getLine40());
      that.addLine(getLine41());
      that.addLine(getLine43());
     PETE373TraditionalPlanelement.classList.remove("EngineeringSciences");
     PETE373TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE373TraditionalPlan", "EngineeringSciences"]);
      PETE373TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine27());
      that.removeLine(getLine36());
      that.removeLine(getLine40());
      that.removeLine(getLine41());
      that.removeLine(getLine43());
     PETE373TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE373TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE373TraditionalPlan");
      PETE373TraditionalPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan0Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan0Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan0element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan0");
 if (!ProgramTechnicalElectiveTraditionalPlan0flag) {
     if (ProgramTechnicalElectiveTraditionalPlan0element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveTraditionalPlan0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlan0element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveTraditionalPlan0element.classList.remove("PROG");
     ProgramTechnicalElectiveTraditionalPlan0element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveTraditionalPlan0", "PROG"]);
      ProgramTechnicalElectiveTraditionalPlan0flag=true
  }
 else {
     ProgramTechnicalElectiveTraditionalPlan0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlan0element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan0");
      ProgramTechnicalElectiveTraditionalPlan0flag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveTraditionalPlan2Time <= 200) { 
        ComplementaryElectiveTraditionalPlan2Time = currentTime;
        return;
    }
ComplementaryElectiveTraditionalPlan2Time = currentTime;
  var ComplementaryElectiveTraditionalPlan2element = document.getElementById("ComplementaryElectiveTraditionalPlan2");
 if (!ComplementaryElectiveTraditionalPlan2flag) {
     if (ComplementaryElectiveTraditionalPlan2element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveTraditionalPlan2element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlan2element.classList.add("COMP");
      return;
}     ComplementaryElectiveTraditionalPlan2element.classList.remove("COMP");
     ComplementaryElectiveTraditionalPlan2element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveTraditionalPlan2", "COMP"]);
      ComplementaryElectiveTraditionalPlan2flag=true
  }
 else {
     ComplementaryElectiveTraditionalPlan2element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlan2element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveTraditionalPlan2");
      ComplementaryElectiveTraditionalPlan2flag=false
  }
};
$scope.CHE374TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE374TraditionalPlanTime <= 200) { 
        CHE374TraditionalPlanTime = currentTime;
        return;
    }
CHE374TraditionalPlanTime = currentTime;
  var CHE374TraditionalPlanelement = document.getElementById("CHE374TraditionalPlan");
 if (!CHE374TraditionalPlanflag) {
     if (CHE374TraditionalPlanelement.classList.contains("Math-highlighted")) { 
     CHE374TraditionalPlanelement.classList.remove("Math-highlighted");
     CHE374TraditionalPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine28());
      that.addLine(getLine34());
      that.addLine(getLine42());
     CHE374TraditionalPlanelement.classList.remove("Math");
     CHE374TraditionalPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["CHE374TraditionalPlan", "Math"]);
      CHE374TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine28());
      that.removeLine(getLine34());
      that.removeLine(getLine42());
     CHE374TraditionalPlanelement.classList.remove("Math-highlighted");
     CHE374TraditionalPlanelement.classList.add("Math");
     that.removeFromClicked("CHE374TraditionalPlan");
      CHE374TraditionalPlanflag=false
  }
};
$scope.EAS222TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - EAS222TraditionalPlanTime <= 200) { 
        EAS222TraditionalPlanTime = currentTime;
        return;
    }
EAS222TraditionalPlanTime = currentTime;
  var EAS222TraditionalPlanelement = document.getElementById("EAS222TraditionalPlan");
 if (!EAS222TraditionalPlanflag) {
     if (EAS222TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     EAS222TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     EAS222TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine29());
     EAS222TraditionalPlanelement.classList.remove("NaturalSciences");
     EAS222TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["EAS222TraditionalPlan", "NaturalSciences"]);
      EAS222TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine29());
     EAS222TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     EAS222TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("EAS222TraditionalPlan");
      EAS222TraditionalPlanflag=false
  }
};
$scope.PETE365TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE365TraditionalPlanTime <= 200) { 
        PETE365TraditionalPlanTime = currentTime;
        return;
    }
PETE365TraditionalPlanTime = currentTime;
  var PETE365TraditionalPlanelement = document.getElementById("PETE365TraditionalPlan");
 if (!PETE365TraditionalPlanflag) {
     if (PETE365TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE365TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE365TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine30());
     PETE365TraditionalPlanelement.classList.remove("EngineeringSciences");
     PETE365TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE365TraditionalPlan", "EngineeringSciences"]);
      PETE365TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine30());
     PETE365TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE365TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE365TraditionalPlan");
      PETE365TraditionalPlanflag=false
  }
};
$scope.PETE366TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE366TraditionalPlanTime <= 200) { 
        PETE366TraditionalPlanTime = currentTime;
        return;
    }
PETE366TraditionalPlanTime = currentTime;
  var PETE366TraditionalPlanelement = document.getElementById("PETE366TraditionalPlan");
 if (!PETE366TraditionalPlanflag) {
     if (PETE366TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE366TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE366TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine31());
     PETE366TraditionalPlanelement.classList.remove("EngineeringSciences");
     PETE366TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE366TraditionalPlan", "EngineeringSciences"]);
      PETE366TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine31());
     PETE366TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE366TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE366TraditionalPlan");
      PETE366TraditionalPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan1Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan1Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan1element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan1");
 if (!ProgramTechnicalElectiveTraditionalPlan1flag) {
     if (ProgramTechnicalElectiveTraditionalPlan1element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveTraditionalPlan1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlan1element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveTraditionalPlan1element.classList.remove("PROG");
     ProgramTechnicalElectiveTraditionalPlan1element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveTraditionalPlan1", "PROG"]);
      ProgramTechnicalElectiveTraditionalPlan1flag=true
  }
 else {
     ProgramTechnicalElectiveTraditionalPlan1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlan1element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan1");
      ProgramTechnicalElectiveTraditionalPlan1flag=false
  }
};
$scope.CHE314TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE314TraditionalPlanTime <= 200) { 
        CHE314TraditionalPlanTime = currentTime;
        return;
    }
CHE314TraditionalPlanTime = currentTime;
  var CHE314TraditionalPlanelement = document.getElementById("CHE314TraditionalPlan");
 if (!CHE314TraditionalPlanflag) {
     if (CHE314TraditionalPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHE314TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHE314TraditionalPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine32());
      that.addLine(getLine33());
      that.addLine(getLine34());
     CHE314TraditionalPlanelement.classList.remove("NaturalSciences");
     CHE314TraditionalPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHE314TraditionalPlan", "NaturalSciences"]);
      CHE314TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine32());
      that.removeLine(getLine33());
      that.removeLine(getLine34());
     CHE314TraditionalPlanelement.classList.remove("NaturalSciences-highlighted");
     CHE314TraditionalPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHE314TraditionalPlan");
      CHE314TraditionalPlanflag=false
  }
};
$scope.ENGG404TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404TraditionalPlanTime <= 200) { 
        ENGG404TraditionalPlanTime = currentTime;
        return;
    }
ENGG404TraditionalPlanTime = currentTime;
  var ENGG404TraditionalPlanelement = document.getElementById("ENGG404TraditionalPlan");
 if (!ENGG404TraditionalPlanflag) {
     if (ENGG404TraditionalPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG404TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404TraditionalPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG404TraditionalPlanelement.classList.remove("EngineeringProfession");
     ENGG404TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG404TraditionalPlan", "EngineeringProfession"]);
      ENGG404TraditionalPlanflag=true
  }
 else {
     ENGG404TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404TraditionalPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG404TraditionalPlan");
      ENGG404TraditionalPlanflag=false
  }
};
$scope.PETE444TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE444TraditionalPlanTime <= 200) { 
        PETE444TraditionalPlanTime = currentTime;
        return;
    }
PETE444TraditionalPlanTime = currentTime;
  var PETE444TraditionalPlanelement = document.getElementById("PETE444TraditionalPlan");
 if (!PETE444TraditionalPlanflag) {
     if (PETE444TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE444TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE444TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine35());
     PETE444TraditionalPlanelement.classList.remove("EngineeringSciences");
     PETE444TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE444TraditionalPlan", "EngineeringSciences"]);
      PETE444TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine35());
     PETE444TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE444TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE444TraditionalPlan");
      PETE444TraditionalPlanflag=false
  }
};
$scope.PETE475TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE475TraditionalPlanTime <= 200) { 
        PETE475TraditionalPlanTime = currentTime;
        return;
    }
PETE475TraditionalPlanTime = currentTime;
  var PETE475TraditionalPlanelement = document.getElementById("PETE475TraditionalPlan");
 if (!PETE475TraditionalPlanflag) {
     if (PETE475TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE475TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE475TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine36());
     PETE475TraditionalPlanelement.classList.remove("EngineeringSciences");
     PETE475TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE475TraditionalPlan", "EngineeringSciences"]);
      PETE475TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine36());
     PETE475TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE475TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE475TraditionalPlan");
      PETE475TraditionalPlanflag=false
  }
};
$scope.PETE476TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE476TraditionalPlanTime <= 200) { 
        PETE476TraditionalPlanTime = currentTime;
        return;
    }
PETE476TraditionalPlanTime = currentTime;
  var PETE476TraditionalPlanelement = document.getElementById("PETE476TraditionalPlan");
 if (!PETE476TraditionalPlanflag) {
     if (PETE476TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE476TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE476TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine37());
     PETE476TraditionalPlanelement.classList.remove("EngineeringSciences");
     PETE476TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE476TraditionalPlan", "EngineeringSciences"]);
      PETE476TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine37());
     PETE476TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE476TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE476TraditionalPlan");
      PETE476TraditionalPlanflag=false
  }
};
$scope.PETE484TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE484TraditionalPlanTime <= 200) { 
        PETE484TraditionalPlanTime = currentTime;
        return;
    }
PETE484TraditionalPlanTime = currentTime;
  var PETE484TraditionalPlanelement = document.getElementById("PETE484TraditionalPlan");
 if (!PETE484TraditionalPlanflag) {
     if (PETE484TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE484TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE484TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine38());
      that.addLine(getLine39());
      that.addLine(getLine44());
     PETE484TraditionalPlanelement.classList.remove("EngineeringSciences");
     PETE484TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE484TraditionalPlan", "EngineeringSciences"]);
      PETE484TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine38());
      that.removeLine(getLine39());
      that.removeLine(getLine44());
     PETE484TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE484TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE484TraditionalPlan");
      PETE484TraditionalPlanflag=false
  }
};
$scope.ENGG400TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400TraditionalPlanTime <= 200) { 
        ENGG400TraditionalPlanTime = currentTime;
        return;
    }
ENGG400TraditionalPlanTime = currentTime;
  var ENGG400TraditionalPlanelement = document.getElementById("ENGG400TraditionalPlan");
 if (!ENGG400TraditionalPlanflag) {
     if (ENGG400TraditionalPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG400TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400TraditionalPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG400TraditionalPlanelement.classList.remove("EngineeringProfession");
     ENGG400TraditionalPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG400TraditionalPlan", "EngineeringProfession"]);
      ENGG400TraditionalPlanflag=true
  }
 else {
     ENGG400TraditionalPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400TraditionalPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG400TraditionalPlan");
      ENGG400TraditionalPlanflag=false
  }
};
$scope.PETE471TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE471TraditionalPlanTime <= 200) { 
        PETE471TraditionalPlanTime = currentTime;
        return;
    }
PETE471TraditionalPlanTime = currentTime;
  var PETE471TraditionalPlanelement = document.getElementById("PETE471TraditionalPlan");
 if (!PETE471TraditionalPlanflag) {
     if (PETE471TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE471TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE471TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine40());
     PETE471TraditionalPlanelement.classList.remove("EngineeringSciences");
     PETE471TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE471TraditionalPlan", "EngineeringSciences"]);
      PETE471TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine40());
     PETE471TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE471TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE471TraditionalPlan");
      PETE471TraditionalPlanflag=false
  }
};
$scope.PETE477TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE477TraditionalPlanTime <= 200) { 
        PETE477TraditionalPlanTime = currentTime;
        return;
    }
PETE477TraditionalPlanTime = currentTime;
  var PETE477TraditionalPlanelement = document.getElementById("PETE477TraditionalPlan");
 if (!PETE477TraditionalPlanflag) {
     if (PETE477TraditionalPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE477TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE477TraditionalPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine41());
      that.addLine(getLine42());
     PETE477TraditionalPlanelement.classList.remove("EngineeringSciences");
     PETE477TraditionalPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE477TraditionalPlan", "EngineeringSciences"]);
      PETE477TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine41());
      that.removeLine(getLine42());
     PETE477TraditionalPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE477TraditionalPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE477TraditionalPlan");
      PETE477TraditionalPlanflag=false
  }
};
$scope.PETE478TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE478TraditionalPlanTime <= 200) { 
        PETE478TraditionalPlanTime = currentTime;
        return;
    }
PETE478TraditionalPlanTime = currentTime;
  var PETE478TraditionalPlanelement = document.getElementById("PETE478TraditionalPlan");
 if (!PETE478TraditionalPlanflag) {
     if (PETE478TraditionalPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     PETE478TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     PETE478TraditionalPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine43());
     PETE478TraditionalPlanelement.classList.remove("EngineeringDesign");
     PETE478TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["PETE478TraditionalPlan", "EngineeringDesign"]);
      PETE478TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine43());
     PETE478TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     PETE478TraditionalPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("PETE478TraditionalPlan");
      PETE478TraditionalPlanflag=false
  }
};
$scope.PETE496TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE496TraditionalPlanTime <= 200) { 
        PETE496TraditionalPlanTime = currentTime;
        return;
    }
PETE496TraditionalPlanTime = currentTime;
  var PETE496TraditionalPlanelement = document.getElementById("PETE496TraditionalPlan");
 if (!PETE496TraditionalPlanflag) {
     if (PETE496TraditionalPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     PETE496TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     PETE496TraditionalPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine44());
     PETE496TraditionalPlanelement.classList.remove("EngineeringDesign");
     PETE496TraditionalPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["PETE496TraditionalPlan", "EngineeringDesign"]);
      PETE496TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine44());
     PETE496TraditionalPlanelement.classList.remove("EngineeringDesign-highlighted");
     PETE496TraditionalPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("PETE496TraditionalPlan");
      PETE496TraditionalPlanflag=false
  }
};
$scope.ITSElectiveTraditionalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveTraditionalPlan0Time <= 200) { 
        ITSElectiveTraditionalPlan0Time = currentTime;
        return;
    }
ITSElectiveTraditionalPlan0Time = currentTime;
  var ITSElectiveTraditionalPlan0element = document.getElementById("ITSElectiveTraditionalPlan0");
 if (!ITSElectiveTraditionalPlan0flag) {
     if (ITSElectiveTraditionalPlan0element.classList.contains("ITS-highlighted")) { 
     ITSElectiveTraditionalPlan0element.classList.remove("ITS-highlighted");
     ITSElectiveTraditionalPlan0element.classList.add("ITS");
      return;
}     ITSElectiveTraditionalPlan0element.classList.remove("ITS");
     ITSElectiveTraditionalPlan0element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveTraditionalPlan0", "ITS"]);
      ITSElectiveTraditionalPlan0flag=true
  }
 else {
     ITSElectiveTraditionalPlan0element.classList.remove("ITS-highlighted");
     ITSElectiveTraditionalPlan0element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveTraditionalPlan0");
      ITSElectiveTraditionalPlan0flag=false
  }
};
$scope.CHEM103TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHEM103TraditionalPlandesc");
 if (!CHEM103TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103TraditionalPlanrflag=false
  }
};
$scope.ENGG100TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG100TraditionalPlandesc");
 if (!ENGG100TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100TraditionalPlanrflag=false
  }
};
$scope.ENGG130TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG130TraditionalPlandesc");
 if (!ENGG130TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130TraditionalPlanrflag=false
  }
};
$scope.ENGL199TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGL199TraditionalPlandesc");
 if (!ENGL199TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199TraditionalPlanrflag=false
  }
};
$scope.MATH100TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH100TraditionalPlandesc");
 if (!MATH100TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100TraditionalPlanrflag=false
  }
};
$scope.PHYS130TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS130TraditionalPlandesc");
 if (!PHYS130TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130TraditionalPlanrflag=false
  }
};
$scope.CHEM105TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHEM105TraditionalPlandesc");
 if (!CHEM105TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105TraditionalPlanrflag=false
  }
};
$scope.ENCMP100TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENCMP100TraditionalPlandesc");
 if (!ENCMP100TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100TraditionalPlanrflag=false
  }
};
$scope.ENGG160TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG160TraditionalPlandesc");
 if (!ENGG160TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160TraditionalPlanrflag=false
  }
};
$scope.ENPH131TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENPH131TraditionalPlandesc");
 if (!ENPH131TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131TraditionalPlanrflag=false
  }
};
$scope.MATH101TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH101TraditionalPlandesc");
 if (!MATH101TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101TraditionalPlanrflag=false
  }
};
$scope.MATH102TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH102TraditionalPlandesc");
 if (!MATH102TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102TraditionalPlanrflag=false
  }
};
$scope.CHE243TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHE243TraditionalPlandesc");
 if (!CHE243TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243TraditionalPlanrflag=false
  }
};
$scope.EAS210TraditionalPlanRCListener = function () {
  var element = document.getElementById("EAS210TraditionalPlandesc");
 if (!EAS210TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      EAS210TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      EAS210TraditionalPlanrflag=false
  }
};
$scope.ECE209TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE209TraditionalPlandesc");
 if (!ECE209TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE209TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE209TraditionalPlanrflag=false
  }
};
$scope.MATE202TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE202TraditionalPlandesc");
 if (!MATE202TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE202TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE202TraditionalPlanrflag=false
  }
};
$scope.MATH209TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH209TraditionalPlandesc");
 if (!MATH209TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209TraditionalPlanrflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveTraditionalPlan0desc");
 if (!ComplementaryElectiveTraditionalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveTraditionalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveTraditionalPlan0rflag=false
  }
};
$scope.CHE312TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHE312TraditionalPlandesc");
 if (!CHE312TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE312TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE312TraditionalPlanrflag=false
  }
};
$scope.CIVE270TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE270TraditionalPlandesc");
 if (!CIVE270TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270TraditionalPlanrflag=false
  }
};
$scope.MATH201TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH201TraditionalPlandesc");
 if (!MATH201TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201TraditionalPlanrflag=false
  }
};
$scope.PETE275TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE275TraditionalPlandesc");
 if (!PETE275TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE275TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE275TraditionalPlanrflag=false
  }
};
$scope.STAT235TraditionalPlanRCListener = function () {
  var element = document.getElementById("STAT235TraditionalPlandesc");
 if (!STAT235TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      STAT235TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      STAT235TraditionalPlanrflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan1RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveTraditionalPlan1desc");
 if (!ComplementaryElectiveTraditionalPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveTraditionalPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveTraditionalPlan1rflag=false
  }
};
$scope.CHEM371TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHEM371TraditionalPlandesc");
 if (!CHEM371TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM371TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM371TraditionalPlanrflag=false
  }
};
$scope.ENGM310TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGM310TraditionalPlandesc");
 if (!ENGM310TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310TraditionalPlanrflag=false
  }
};
$scope.ENGM401TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGM401TraditionalPlandesc");
 if (!ENGM401TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401TraditionalPlanrflag=false
  }
};
$scope.PETE364TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE364TraditionalPlandesc");
 if (!PETE364TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE364TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE364TraditionalPlanrflag=false
  }
};
$scope.PETE373TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE373TraditionalPlandesc");
 if (!PETE373TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE373TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE373TraditionalPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan0desc");
 if (!ProgramTechnicalElectiveTraditionalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan0rflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlan2RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveTraditionalPlan2desc");
 if (!ComplementaryElectiveTraditionalPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveTraditionalPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveTraditionalPlan2rflag=false
  }
};
$scope.CHE374TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHE374TraditionalPlandesc");
 if (!CHE374TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE374TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE374TraditionalPlanrflag=false
  }
};
$scope.EAS222TraditionalPlanRCListener = function () {
  var element = document.getElementById("EAS222TraditionalPlandesc");
 if (!EAS222TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      EAS222TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      EAS222TraditionalPlanrflag=false
  }
};
$scope.PETE365TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE365TraditionalPlandesc");
 if (!PETE365TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE365TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE365TraditionalPlanrflag=false
  }
};
$scope.PETE366TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE366TraditionalPlandesc");
 if (!PETE366TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE366TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE366TraditionalPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan1desc");
 if (!ProgramTechnicalElectiveTraditionalPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan1rflag=false
  }
};
$scope.CHE314TraditionalPlanRCListener = function () {
  var element = document.getElementById("CHE314TraditionalPlandesc");
 if (!CHE314TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE314TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE314TraditionalPlanrflag=false
  }
};
$scope.ENGG404TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG404TraditionalPlandesc");
 if (!ENGG404TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404TraditionalPlanrflag=false
  }
};
$scope.PETE444TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE444TraditionalPlandesc");
 if (!PETE444TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE444TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE444TraditionalPlanrflag=false
  }
};
$scope.PETE475TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE475TraditionalPlandesc");
 if (!PETE475TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE475TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE475TraditionalPlanrflag=false
  }
};
$scope.PETE476TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE476TraditionalPlandesc");
 if (!PETE476TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE476TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE476TraditionalPlanrflag=false
  }
};
$scope.PETE484TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE484TraditionalPlandesc");
 if (!PETE484TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE484TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE484TraditionalPlanrflag=false
  }
};
$scope.ENGG400TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG400TraditionalPlandesc");
 if (!ENGG400TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400TraditionalPlanrflag=false
  }
};
$scope.PETE471TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE471TraditionalPlandesc");
 if (!PETE471TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE471TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE471TraditionalPlanrflag=false
  }
};
$scope.PETE477TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE477TraditionalPlandesc");
 if (!PETE477TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE477TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE477TraditionalPlanrflag=false
  }
};
$scope.PETE478TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE478TraditionalPlandesc");
 if (!PETE478TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE478TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE478TraditionalPlanrflag=false
  }
};
$scope.PETE496TraditionalPlanRCListener = function () {
  var element = document.getElementById("PETE496TraditionalPlandesc");
 if (!PETE496TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE496TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE496TraditionalPlanrflag=false
  }
};
$scope.ITSElectiveTraditionalPlan0RCListener = function () {
  var element = document.getElementById("ITSElectiveTraditionalPlan0desc");
 if (!ITSElectiveTraditionalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveTraditionalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveTraditionalPlan0rflag=false
  }
};
  var CHEM103TraditionalPlanProposedflag = false;
  var CHEM103TraditionalPlanProposedrflag = false;
 var CHEM103TraditionalPlanProposedTime = new Date().getTime();
  var ENGG100TraditionalPlanProposedflag = false;
  var ENGG100TraditionalPlanProposedrflag = false;
 var ENGG100TraditionalPlanProposedTime = new Date().getTime();
  var ENGG130TraditionalPlanProposedflag = false;
  var ENGG130TraditionalPlanProposedrflag = false;
 var ENGG130TraditionalPlanProposedTime = new Date().getTime();
  var ENGL199TraditionalPlanProposedflag = false;
  var ENGL199TraditionalPlanProposedrflag = false;
 var ENGL199TraditionalPlanProposedTime = new Date().getTime();
  var MATH100TraditionalPlanProposedflag = false;
  var MATH100TraditionalPlanProposedrflag = false;
 var MATH100TraditionalPlanProposedTime = new Date().getTime();
  var PHYS130TraditionalPlanProposedflag = false;
  var PHYS130TraditionalPlanProposedrflag = false;
 var PHYS130TraditionalPlanProposedTime = new Date().getTime();
  var CHEM105TraditionalPlanProposedflag = false;
  var CHEM105TraditionalPlanProposedrflag = false;
 var CHEM105TraditionalPlanProposedTime = new Date().getTime();
  var ENCMP100TraditionalPlanProposedflag = false;
  var ENCMP100TraditionalPlanProposedrflag = false;
 var ENCMP100TraditionalPlanProposedTime = new Date().getTime();
  var ENGG160TraditionalPlanProposedflag = false;
  var ENGG160TraditionalPlanProposedrflag = false;
 var ENGG160TraditionalPlanProposedTime = new Date().getTime();
  var ENPH131TraditionalPlanProposedflag = false;
  var ENPH131TraditionalPlanProposedrflag = false;
 var ENPH131TraditionalPlanProposedTime = new Date().getTime();
  var MATH101TraditionalPlanProposedflag = false;
  var MATH101TraditionalPlanProposedrflag = false;
 var MATH101TraditionalPlanProposedTime = new Date().getTime();
  var MATH102TraditionalPlanProposedflag = false;
  var MATH102TraditionalPlanProposedrflag = false;
 var MATH102TraditionalPlanProposedTime = new Date().getTime();
  var CHE243TraditionalPlanProposedflag = false;
  var CHE243TraditionalPlanProposedrflag = false;
 var CHE243TraditionalPlanProposedTime = new Date().getTime();
  var EAS210TraditionalPlanProposedflag = false;
  var EAS210TraditionalPlanProposedrflag = false;
 var EAS210TraditionalPlanProposedTime = new Date().getTime();
  var ECE209TraditionalPlanProposedflag = false;
  var ECE209TraditionalPlanProposedrflag = false;
 var ECE209TraditionalPlanProposedTime = new Date().getTime();
  var MATE202TraditionalPlanProposedflag = false;
  var MATE202TraditionalPlanProposedrflag = false;
 var MATE202TraditionalPlanProposedTime = new Date().getTime();
  var MATH209TraditionalPlanProposedflag = false;
  var MATH209TraditionalPlanProposedrflag = false;
 var MATH209TraditionalPlanProposedTime = new Date().getTime();
  var PETE275TraditionalPlanProposedflag = false;
  var PETE275TraditionalPlanProposedrflag = false;
 var PETE275TraditionalPlanProposedTime = new Date().getTime();
  var CHE312TraditionalPlanProposedflag = false;
  var CHE312TraditionalPlanProposedrflag = false;
 var CHE312TraditionalPlanProposedTime = new Date().getTime();
  var CIVE270TraditionalPlanProposedflag = false;
  var CIVE270TraditionalPlanProposedrflag = false;
 var CIVE270TraditionalPlanProposedTime = new Date().getTime();
  var MATH201TraditionalPlanProposedflag = false;
  var MATH201TraditionalPlanProposedrflag = false;
 var MATH201TraditionalPlanProposedTime = new Date().getTime();
  var PETE295TraditionalPlanProposedflag = false;
  var PETE295TraditionalPlanProposedrflag = false;
 var PETE295TraditionalPlanProposedTime = new Date().getTime();
  var STAT235TraditionalPlanProposedflag = false;
  var STAT235TraditionalPlanProposedrflag = false;
 var STAT235TraditionalPlanProposedTime = new Date().getTime();
  var ComplementaryElectiveTraditionalPlanProposed0flag = false;
  var ComplementaryElectiveTraditionalPlanProposed0rflag = false;
 var ComplementaryElectiveTraditionalPlanProposed0Time = new Date().getTime();
  var CHEM371TraditionalPlanProposedflag = false;
  var CHEM371TraditionalPlanProposedrflag = false;
 var CHEM371TraditionalPlanProposedTime = new Date().getTime();
  var ENGM310TraditionalPlanProposedflag = false;
  var ENGM310TraditionalPlanProposedrflag = false;
 var ENGM310TraditionalPlanProposedTime = new Date().getTime();
  var ENGM401TraditionalPlanProposedflag = false;
  var ENGM401TraditionalPlanProposedrflag = false;
 var ENGM401TraditionalPlanProposedTime = new Date().getTime();
  var PETE364TraditionalPlanProposedflag = false;
  var PETE364TraditionalPlanProposedrflag = false;
 var PETE364TraditionalPlanProposedTime = new Date().getTime();
  var CHE314TraditionalPlanProposedflag = false;
  var CHE314TraditionalPlanProposedrflag = false;
 var CHE314TraditionalPlanProposedTime = new Date().getTime();
  var PETE375TraditionalPlanProposedflag = false;
  var PETE375TraditionalPlanProposedrflag = false;
 var PETE375TraditionalPlanProposedTime = new Date().getTime();
  var ComplementaryElectiveTraditionalPlanProposed1flag = false;
  var ComplementaryElectiveTraditionalPlanProposed1rflag = false;
 var ComplementaryElectiveTraditionalPlanProposed1Time = new Date().getTime();
  var CHE374TraditionalPlanProposedflag = false;
  var CHE374TraditionalPlanProposedrflag = false;
 var CHE374TraditionalPlanProposedTime = new Date().getTime();
  var EAS222TraditionalPlanProposedflag = false;
  var EAS222TraditionalPlanProposedrflag = false;
 var EAS222TraditionalPlanProposedTime = new Date().getTime();
  var PETE365TraditionalPlanProposedflag = false;
  var PETE365TraditionalPlanProposedrflag = false;
 var PETE365TraditionalPlanProposedTime = new Date().getTime();
  var PETE366TraditionalPlanProposedflag = false;
  var PETE366TraditionalPlanProposedrflag = false;
 var PETE366TraditionalPlanProposedTime = new Date().getTime();
  var PETE377TraditionalPlanProposedflag = false;
  var PETE377TraditionalPlanProposedrflag = false;
 var PETE377TraditionalPlanProposedTime = new Date().getTime();
  var ProgramTechnicalElectiveTraditionalPlanProposed0flag = false;
  var ProgramTechnicalElectiveTraditionalPlanProposed0rflag = false;
 var ProgramTechnicalElectiveTraditionalPlanProposed0Time = new Date().getTime();
  var ENGG404TraditionalPlanProposedflag = false;
  var ENGG404TraditionalPlanProposedrflag = false;
 var ENGG404TraditionalPlanProposedTime = new Date().getTime();
  var PETE444TraditionalPlanProposedflag = false;
  var PETE444TraditionalPlanProposedrflag = false;
 var PETE444TraditionalPlanProposedTime = new Date().getTime();
  var ComplementaryElectiveTraditionalPlanProposed2flag = false;
  var ComplementaryElectiveTraditionalPlanProposed2rflag = false;
 var ComplementaryElectiveTraditionalPlanProposed2Time = new Date().getTime();
  var PETE476TraditionalPlanProposedflag = false;
  var PETE476TraditionalPlanProposedrflag = false;
 var PETE476TraditionalPlanProposedTime = new Date().getTime();
  var PETE484TraditionalPlanProposedflag = false;
  var PETE484TraditionalPlanProposedrflag = false;
 var PETE484TraditionalPlanProposedTime = new Date().getTime();
  var ENGG400TraditionalPlanProposedflag = false;
  var ENGG400TraditionalPlanProposedrflag = false;
 var ENGG400TraditionalPlanProposedTime = new Date().getTime();
  var PETE471TraditionalPlanProposedflag = false;
  var PETE471TraditionalPlanProposedrflag = false;
 var PETE471TraditionalPlanProposedTime = new Date().getTime();
  var ProgramTechnicalElectiveTraditionalPlanProposed1flag = false;
  var ProgramTechnicalElectiveTraditionalPlanProposed1rflag = false;
 var ProgramTechnicalElectiveTraditionalPlanProposed1Time = new Date().getTime();
  var PETE478TraditionalPlanProposedflag = false;
  var PETE478TraditionalPlanProposedrflag = false;
 var PETE478TraditionalPlanProposedTime = new Date().getTime();
  var PETE496TraditionalPlanProposedflag = false;
  var PETE496TraditionalPlanProposedrflag = false;
 var PETE496TraditionalPlanProposedTime = new Date().getTime();
  var ITSElectiveTraditionalPlanProposed0flag = false;
  var ITSElectiveTraditionalPlanProposed0rflag = false;
 var ITSElectiveTraditionalPlanProposed0Time = new Date().getTime();
$scope.CHEM103TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103TraditionalPlanProposedTime <= 200) { 
        CHEM103TraditionalPlanProposedTime = currentTime;
        return;
    }
CHEM103TraditionalPlanProposedTime = currentTime;
  var CHEM103TraditionalPlanProposedelement = document.getElementById("CHEM103TraditionalPlanProposed");
 if (!CHEM103TraditionalPlanProposedflag) {
     if (CHEM103TraditionalPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM103TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHEM103TraditionalPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine47());
     CHEM103TraditionalPlanProposedelement.classList.remove("NaturalSciences");
     CHEM103TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM103TraditionalPlanProposed", "NaturalSciences"]);
      CHEM103TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine47());
     CHEM103TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHEM103TraditionalPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM103TraditionalPlanProposed");
      CHEM103TraditionalPlanProposedflag=false
  }
};
$scope.ENGG100TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100TraditionalPlanProposedTime <= 200) { 
        ENGG100TraditionalPlanProposedTime = currentTime;
        return;
    }
ENGG100TraditionalPlanProposedTime = currentTime;
  var ENGG100TraditionalPlanProposedelement = document.getElementById("ENGG100TraditionalPlanProposed");
 if (!ENGG100TraditionalPlanProposedflag) {
     if (ENGG100TraditionalPlanProposedelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG100TraditionalPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100TraditionalPlanProposedelement.classList.add("EngineeringProfession");
      return;
}     ENGG100TraditionalPlanProposedelement.classList.remove("EngineeringProfession");
     ENGG100TraditionalPlanProposedelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG100TraditionalPlanProposed", "EngineeringProfession"]);
      ENGG100TraditionalPlanProposedflag=true
  }
 else {
     ENGG100TraditionalPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100TraditionalPlanProposedelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG100TraditionalPlanProposed");
      ENGG100TraditionalPlanProposedflag=false
  }
};
$scope.ENGG130TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130TraditionalPlanProposedTime <= 200) { 
        ENGG130TraditionalPlanProposedTime = currentTime;
        return;
    }
ENGG130TraditionalPlanProposedTime = currentTime;
  var ENGG130TraditionalPlanProposedelement = document.getElementById("ENGG130TraditionalPlanProposed");
 if (!ENGG130TraditionalPlanProposedflag) {
     if (ENGG130TraditionalPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     ENGG130TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     ENGG130TraditionalPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine45());
      that.addLine(getLine50());
      that.addLine(getLine63());
     ENGG130TraditionalPlanProposedelement.classList.remove("NaturalSciences");
     ENGG130TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENGG130TraditionalPlanProposed", "NaturalSciences"]);
      ENGG130TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine45());
      that.removeLine(getLine50());
      that.removeLine(getLine63());
     ENGG130TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     ENGG130TraditionalPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENGG130TraditionalPlanProposed");
      ENGG130TraditionalPlanProposedflag=false
  }
};
$scope.ENGL199TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199TraditionalPlanProposedTime <= 200) { 
        ENGL199TraditionalPlanProposedTime = currentTime;
        return;
    }
ENGL199TraditionalPlanProposedTime = currentTime;
  var ENGL199TraditionalPlanProposedelement = document.getElementById("ENGL199TraditionalPlanProposed");
 if (!ENGL199TraditionalPlanProposedflag) {
     if (ENGL199TraditionalPlanProposedelement.classList.contains("Other-highlighted")) { 
     ENGL199TraditionalPlanProposedelement.classList.remove("Other-highlighted");
     ENGL199TraditionalPlanProposedelement.classList.add("Other");
      return;
}      that.addLine(getLine48());
     ENGL199TraditionalPlanProposedelement.classList.remove("Other");
     ENGL199TraditionalPlanProposedelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199TraditionalPlanProposed", "Other"]);
      ENGL199TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine48());
     ENGL199TraditionalPlanProposedelement.classList.remove("Other-highlighted");
     ENGL199TraditionalPlanProposedelement.classList.add("Other");
     that.removeFromClicked("ENGL199TraditionalPlanProposed");
      ENGL199TraditionalPlanProposedflag=false
  }
};
$scope.MATH100TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100TraditionalPlanProposedTime <= 200) { 
        MATH100TraditionalPlanProposedTime = currentTime;
        return;
    }
MATH100TraditionalPlanProposedTime = currentTime;
  var MATH100TraditionalPlanProposedelement = document.getElementById("MATH100TraditionalPlanProposed");
 if (!MATH100TraditionalPlanProposedflag) {
     if (MATH100TraditionalPlanProposedelement.classList.contains("Math-highlighted")) { 
     MATH100TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     MATH100TraditionalPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine45());
      that.addLine(getLine46());
      that.addLine(getLine49());
      that.addLine(getLine52());
      that.addLine(getLine53());
      that.addLine(getLine66());
     MATH100TraditionalPlanProposedelement.classList.remove("Math");
     MATH100TraditionalPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH100TraditionalPlanProposed", "Math"]);
      MATH100TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine45());
      that.removeLine(getLine46());
      that.removeLine(getLine49());
      that.removeLine(getLine52());
      that.removeLine(getLine53());
      that.removeLine(getLine66());
     MATH100TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     MATH100TraditionalPlanProposedelement.classList.add("Math");
     that.removeFromClicked("MATH100TraditionalPlanProposed");
      MATH100TraditionalPlanProposedflag=false
  }
};
$scope.PHYS130TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130TraditionalPlanProposedTime <= 200) { 
        PHYS130TraditionalPlanProposedTime = currentTime;
        return;
    }
PHYS130TraditionalPlanProposedTime = currentTime;
  var PHYS130TraditionalPlanProposedelement = document.getElementById("PHYS130TraditionalPlanProposed");
 if (!PHYS130TraditionalPlanProposedflag) {
     if (PHYS130TraditionalPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     PHYS130TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     PHYS130TraditionalPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine46());
     PHYS130TraditionalPlanProposedelement.classList.remove("NaturalSciences");
     PHYS130TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["PHYS130TraditionalPlanProposed", "NaturalSciences"]);
      PHYS130TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine46());
     PHYS130TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     PHYS130TraditionalPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("PHYS130TraditionalPlanProposed");
      PHYS130TraditionalPlanProposedflag=false
  }
};
$scope.CHEM105TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105TraditionalPlanProposedTime <= 200) { 
        CHEM105TraditionalPlanProposedTime = currentTime;
        return;
    }
CHEM105TraditionalPlanProposedTime = currentTime;
  var CHEM105TraditionalPlanProposedelement = document.getElementById("CHEM105TraditionalPlanProposed");
 if (!CHEM105TraditionalPlanProposedflag) {
     if (CHEM105TraditionalPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM105TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHEM105TraditionalPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine47());
      that.addLine(getLine55());
      that.addLine(getLine58());
      that.addLine(getLine68());
     CHEM105TraditionalPlanProposedelement.classList.remove("NaturalSciences");
     CHEM105TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM105TraditionalPlanProposed", "NaturalSciences"]);
      CHEM105TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine47());
      that.removeLine(getLine55());
      that.removeLine(getLine58());
      that.removeLine(getLine68());
     CHEM105TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHEM105TraditionalPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM105TraditionalPlanProposed");
      CHEM105TraditionalPlanProposedflag=false
  }
};
$scope.ENCMP100TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100TraditionalPlanProposedTime <= 200) { 
        ENCMP100TraditionalPlanProposedTime = currentTime;
        return;
    }
ENCMP100TraditionalPlanProposedTime = currentTime;
  var ENCMP100TraditionalPlanProposedelement = document.getElementById("ENCMP100TraditionalPlanProposed");
 if (!ENCMP100TraditionalPlanProposedflag) {
     if (ENCMP100TraditionalPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     ENCMP100TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100TraditionalPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine75());
     ENCMP100TraditionalPlanProposedelement.classList.remove("NaturalSciences");
     ENCMP100TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENCMP100TraditionalPlanProposed", "NaturalSciences"]);
      ENCMP100TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine75());
     ENCMP100TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100TraditionalPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENCMP100TraditionalPlanProposed");
      ENCMP100TraditionalPlanProposedflag=false
  }
};
$scope.ENGG160TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160TraditionalPlanProposedTime <= 200) { 
        ENGG160TraditionalPlanProposedTime = currentTime;
        return;
    }
ENGG160TraditionalPlanProposedTime = currentTime;
  var ENGG160TraditionalPlanProposedelement = document.getElementById("ENGG160TraditionalPlanProposed");
 if (!ENGG160TraditionalPlanProposedflag) {
     if (ENGG160TraditionalPlanProposedelement.classList.contains("EngineeringDesign-highlighted")) { 
     ENGG160TraditionalPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
     ENGG160TraditionalPlanProposedelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine48());
     ENGG160TraditionalPlanProposedelement.classList.remove("EngineeringDesign");
     ENGG160TraditionalPlanProposedelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["ENGG160TraditionalPlanProposed", "EngineeringDesign"]);
      ENGG160TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine48());
     ENGG160TraditionalPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
     ENGG160TraditionalPlanProposedelement.classList.add("EngineeringDesign");
     that.removeFromClicked("ENGG160TraditionalPlanProposed");
      ENGG160TraditionalPlanProposedflag=false
  }
};
$scope.ENPH131TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131TraditionalPlanProposedTime <= 200) { 
        ENPH131TraditionalPlanProposedTime = currentTime;
        return;
    }
ENPH131TraditionalPlanProposedTime = currentTime;
  var ENPH131TraditionalPlanProposedelement = document.getElementById("ENPH131TraditionalPlanProposed");
 if (!ENPH131TraditionalPlanProposedflag) {
     if (ENPH131TraditionalPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     ENPH131TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     ENPH131TraditionalPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine49());
      that.addLine(getLine50());
      that.addLine(getLine51());
      that.addLine(getLine60());
     ENPH131TraditionalPlanProposedelement.classList.remove("NaturalSciences");
     ENPH131TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENPH131TraditionalPlanProposed", "NaturalSciences"]);
      ENPH131TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine49());
      that.removeLine(getLine50());
      that.removeLine(getLine51());
      that.removeLine(getLine60());
     ENPH131TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     ENPH131TraditionalPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENPH131TraditionalPlanProposed");
      ENPH131TraditionalPlanProposedflag=false
  }
};
$scope.MATH101TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101TraditionalPlanProposedTime <= 200) { 
        MATH101TraditionalPlanProposedTime = currentTime;
        return;
    }
MATH101TraditionalPlanProposedTime = currentTime;
  var MATH101TraditionalPlanProposedelement = document.getElementById("MATH101TraditionalPlanProposed");
 if (!MATH101TraditionalPlanProposedflag) {
     if (MATH101TraditionalPlanProposedelement.classList.contains("Math-highlighted")) { 
     MATH101TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     MATH101TraditionalPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine51());
      that.addLine(getLine52());
      that.addLine(getLine54());
      that.addLine(getLine56());
      that.addLine(getLine64());
      that.addLine(getLine67());
      that.addLine(getLine69());
     MATH101TraditionalPlanProposedelement.classList.remove("Math");
     MATH101TraditionalPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH101TraditionalPlanProposed", "Math"]);
      MATH101TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine51());
      that.removeLine(getLine52());
      that.removeLine(getLine54());
      that.removeLine(getLine56());
      that.removeLine(getLine64());
      that.removeLine(getLine67());
      that.removeLine(getLine69());
     MATH101TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     MATH101TraditionalPlanProposedelement.classList.add("Math");
     that.removeFromClicked("MATH101TraditionalPlanProposed");
      MATH101TraditionalPlanProposedflag=false
  }
};
$scope.MATH102TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102TraditionalPlanProposedTime <= 200) { 
        MATH102TraditionalPlanProposedTime = currentTime;
        return;
    }
MATH102TraditionalPlanProposedTime = currentTime;
  var MATH102TraditionalPlanProposedelement = document.getElementById("MATH102TraditionalPlanProposed");
 if (!MATH102TraditionalPlanProposedflag) {
     if (MATH102TraditionalPlanProposedelement.classList.contains("Math-highlighted")) { 
     MATH102TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     MATH102TraditionalPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine53());
      that.addLine(getLine57());
     MATH102TraditionalPlanProposedelement.classList.remove("Math");
     MATH102TraditionalPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH102TraditionalPlanProposed", "Math"]);
      MATH102TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine53());
      that.removeLine(getLine57());
     MATH102TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     MATH102TraditionalPlanProposedelement.classList.add("Math");
     that.removeFromClicked("MATH102TraditionalPlanProposed");
      MATH102TraditionalPlanProposedflag=false
  }
};
$scope.CHE243TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243TraditionalPlanProposedTime <= 200) { 
        CHE243TraditionalPlanProposedTime = currentTime;
        return;
    }
CHE243TraditionalPlanProposedTime = currentTime;
  var CHE243TraditionalPlanProposedelement = document.getElementById("CHE243TraditionalPlanProposed");
 if (!CHE243TraditionalPlanProposedflag) {
     if (CHE243TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     CHE243TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     CHE243TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine54());
      that.addLine(getLine59());
     CHE243TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     CHE243TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CHE243TraditionalPlanProposed", "EngineeringSciences"]);
      CHE243TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine54());
      that.removeLine(getLine59());
     CHE243TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     CHE243TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CHE243TraditionalPlanProposed");
      CHE243TraditionalPlanProposedflag=false
  }
};
$scope.EAS210TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - EAS210TraditionalPlanProposedTime <= 200) { 
        EAS210TraditionalPlanProposedTime = currentTime;
        return;
    }
EAS210TraditionalPlanProposedTime = currentTime;
  var EAS210TraditionalPlanProposedelement = document.getElementById("EAS210TraditionalPlanProposed");
 if (!EAS210TraditionalPlanProposedflag) {
     if (EAS210TraditionalPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     EAS210TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     EAS210TraditionalPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine76());
     EAS210TraditionalPlanProposedelement.classList.remove("NaturalSciences");
     EAS210TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["EAS210TraditionalPlanProposed", "NaturalSciences"]);
      EAS210TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine76());
     EAS210TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     EAS210TraditionalPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("EAS210TraditionalPlanProposed");
      EAS210TraditionalPlanProposedflag=false
  }
};
$scope.ECE209TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE209TraditionalPlanProposedTime <= 200) { 
        ECE209TraditionalPlanProposedTime = currentTime;
        return;
    }
ECE209TraditionalPlanProposedTime = currentTime;
  var ECE209TraditionalPlanProposedelement = document.getElementById("ECE209TraditionalPlanProposed");
 if (!ECE209TraditionalPlanProposedflag) {
     if (ECE209TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE209TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     ECE209TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}     ECE209TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     ECE209TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE209TraditionalPlanProposed", "EngineeringSciences"]);
      ECE209TraditionalPlanProposedflag=true
  }
 else {
     ECE209TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     ECE209TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE209TraditionalPlanProposed");
      ECE209TraditionalPlanProposedflag=false
  }
};
$scope.MATE202TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE202TraditionalPlanProposedTime <= 200) { 
        MATE202TraditionalPlanProposedTime = currentTime;
        return;
    }
MATE202TraditionalPlanProposedTime = currentTime;
  var MATE202TraditionalPlanProposedelement = document.getElementById("MATE202TraditionalPlanProposed");
 if (!MATE202TraditionalPlanProposedflag) {
     if (MATE202TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     MATE202TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     MATE202TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine55());
     MATE202TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     MATE202TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MATE202TraditionalPlanProposed", "EngineeringSciences"]);
      MATE202TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine55());
     MATE202TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     MATE202TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MATE202TraditionalPlanProposed");
      MATE202TraditionalPlanProposedflag=false
  }
};
$scope.MATH209TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209TraditionalPlanProposedTime <= 200) { 
        MATH209TraditionalPlanProposedTime = currentTime;
        return;
    }
MATH209TraditionalPlanProposedTime = currentTime;
  var MATH209TraditionalPlanProposedelement = document.getElementById("MATH209TraditionalPlanProposed");
 if (!MATH209TraditionalPlanProposedflag) {
     if (MATH209TraditionalPlanProposedelement.classList.contains("Math-highlighted")) { 
     MATH209TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     MATH209TraditionalPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine56());
      that.addLine(getLine57());
      that.addLine(getLine61());
      that.addLine(getLine65());
     MATH209TraditionalPlanProposedelement.classList.remove("Math");
     MATH209TraditionalPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH209TraditionalPlanProposed", "Math"]);
      MATH209TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine56());
      that.removeLine(getLine57());
      that.removeLine(getLine61());
      that.removeLine(getLine65());
     MATH209TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     MATH209TraditionalPlanProposedelement.classList.add("Math");
     that.removeFromClicked("MATH209TraditionalPlanProposed");
      MATH209TraditionalPlanProposedflag=false
  }
};
$scope.PETE275TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE275TraditionalPlanProposedTime <= 200) { 
        PETE275TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE275TraditionalPlanProposedTime = currentTime;
  var PETE275TraditionalPlanProposedelement = document.getElementById("PETE275TraditionalPlanProposed");
 if (!PETE275TraditionalPlanProposedflag) {
     if (PETE275TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE275TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE275TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine58());
      that.addLine(getLine77());
      that.addLine(getLine79());
     PETE275TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     PETE275TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE275TraditionalPlanProposed", "EngineeringSciences"]);
      PETE275TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine58());
      that.removeLine(getLine77());
      that.removeLine(getLine79());
     PETE275TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE275TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE275TraditionalPlanProposed");
      PETE275TraditionalPlanProposedflag=false
  }
};
$scope.CHE312TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE312TraditionalPlanProposedTime <= 200) { 
        CHE312TraditionalPlanProposedTime = currentTime;
        return;
    }
CHE312TraditionalPlanProposedTime = currentTime;
  var CHE312TraditionalPlanProposedelement = document.getElementById("CHE312TraditionalPlanProposed");
 if (!CHE312TraditionalPlanProposedflag) {
     if (CHE312TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     CHE312TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     CHE312TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine59());
      that.addLine(getLine60());
      that.addLine(getLine61());
      that.addLine(getLine62());
      that.addLine(getLine70());
      that.addLine(getLine73());
      that.addLine(getLine78());
     CHE312TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     CHE312TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CHE312TraditionalPlanProposed", "EngineeringSciences"]);
      CHE312TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine59());
      that.removeLine(getLine60());
      that.removeLine(getLine61());
      that.removeLine(getLine62());
      that.removeLine(getLine70());
      that.removeLine(getLine73());
      that.removeLine(getLine78());
     CHE312TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     CHE312TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CHE312TraditionalPlanProposed");
      CHE312TraditionalPlanProposedflag=false
  }
};
$scope.CIVE270TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270TraditionalPlanProposedTime <= 200) { 
        CIVE270TraditionalPlanProposedTime = currentTime;
        return;
    }
CIVE270TraditionalPlanProposedTime = currentTime;
  var CIVE270TraditionalPlanProposedelement = document.getElementById("CIVE270TraditionalPlanProposed");
 if (!CIVE270TraditionalPlanProposedflag) {
     if (CIVE270TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     CIVE270TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine63());
      that.addLine(getLine64());
      that.addLine(getLine71());
     CIVE270TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     CIVE270TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CIVE270TraditionalPlanProposed", "EngineeringSciences"]);
      CIVE270TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine63());
      that.removeLine(getLine64());
      that.removeLine(getLine71());
     CIVE270TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CIVE270TraditionalPlanProposed");
      CIVE270TraditionalPlanProposedflag=false
  }
};
$scope.MATH201TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201TraditionalPlanProposedTime <= 200) { 
        MATH201TraditionalPlanProposedTime = currentTime;
        return;
    }
MATH201TraditionalPlanProposedTime = currentTime;
  var MATH201TraditionalPlanProposedelement = document.getElementById("MATH201TraditionalPlanProposed");
 if (!MATH201TraditionalPlanProposedflag) {
     if (MATH201TraditionalPlanProposedelement.classList.contains("Math-highlighted")) { 
     MATH201TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     MATH201TraditionalPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine62());
      that.addLine(getLine65());
      that.addLine(getLine72());
     MATH201TraditionalPlanProposedelement.classList.remove("Math");
     MATH201TraditionalPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH201TraditionalPlanProposed", "Math"]);
      MATH201TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine62());
      that.removeLine(getLine65());
      that.removeLine(getLine72());
     MATH201TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     MATH201TraditionalPlanProposedelement.classList.add("Math");
     that.removeFromClicked("MATH201TraditionalPlanProposed");
      MATH201TraditionalPlanProposedflag=false
  }
};
$scope.PETE295TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE295TraditionalPlanProposedTime <= 200) { 
        PETE295TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE295TraditionalPlanProposedTime = currentTime;
  var PETE295TraditionalPlanProposedelement = document.getElementById("PETE295TraditionalPlanProposed");
 if (!PETE295TraditionalPlanProposedflag) {
     if (PETE295TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE295TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE295TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}     PETE295TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     PETE295TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE295TraditionalPlanProposed", "EngineeringSciences"]);
      PETE295TraditionalPlanProposedflag=true
  }
 else {
     PETE295TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE295TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE295TraditionalPlanProposed");
      PETE295TraditionalPlanProposedflag=false
  }
};
$scope.STAT235TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - STAT235TraditionalPlanProposedTime <= 200) { 
        STAT235TraditionalPlanProposedTime = currentTime;
        return;
    }
STAT235TraditionalPlanProposedTime = currentTime;
  var STAT235TraditionalPlanProposedelement = document.getElementById("STAT235TraditionalPlanProposed");
 if (!STAT235TraditionalPlanProposedflag) {
     if (STAT235TraditionalPlanProposedelement.classList.contains("Math-highlighted")) { 
     STAT235TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     STAT235TraditionalPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine66());
      that.addLine(getLine67());
     STAT235TraditionalPlanProposedelement.classList.remove("Math");
     STAT235TraditionalPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["STAT235TraditionalPlanProposed", "Math"]);
      STAT235TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine66());
      that.removeLine(getLine67());
     STAT235TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     STAT235TraditionalPlanProposedelement.classList.add("Math");
     that.removeFromClicked("STAT235TraditionalPlanProposed");
      STAT235TraditionalPlanProposedflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlanProposed0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveTraditionalPlanProposed0Time <= 200) { 
        ComplementaryElectiveTraditionalPlanProposed0Time = currentTime;
        return;
    }
ComplementaryElectiveTraditionalPlanProposed0Time = currentTime;
  var ComplementaryElectiveTraditionalPlanProposed0element = document.getElementById("ComplementaryElectiveTraditionalPlanProposed0");
 if (!ComplementaryElectiveTraditionalPlanProposed0flag) {
     if (ComplementaryElectiveTraditionalPlanProposed0element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveTraditionalPlanProposed0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlanProposed0element.classList.add("COMP");
      return;
}     ComplementaryElectiveTraditionalPlanProposed0element.classList.remove("COMP");
     ComplementaryElectiveTraditionalPlanProposed0element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveTraditionalPlanProposed0", "COMP"]);
      ComplementaryElectiveTraditionalPlanProposed0flag=true
  }
 else {
     ComplementaryElectiveTraditionalPlanProposed0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlanProposed0element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveTraditionalPlanProposed0");
      ComplementaryElectiveTraditionalPlanProposed0flag=false
  }
};
$scope.CHEM371TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM371TraditionalPlanProposedTime <= 200) { 
        CHEM371TraditionalPlanProposedTime = currentTime;
        return;
    }
CHEM371TraditionalPlanProposedTime = currentTime;
  var CHEM371TraditionalPlanProposedelement = document.getElementById("CHEM371TraditionalPlanProposed");
 if (!CHEM371TraditionalPlanProposedflag) {
     if (CHEM371TraditionalPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM371TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHEM371TraditionalPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine68());
      that.addLine(getLine69());
     CHEM371TraditionalPlanProposedelement.classList.remove("NaturalSciences");
     CHEM371TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM371TraditionalPlanProposed", "NaturalSciences"]);
      CHEM371TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine68());
      that.removeLine(getLine69());
     CHEM371TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHEM371TraditionalPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM371TraditionalPlanProposed");
      CHEM371TraditionalPlanProposedflag=false
  }
};
$scope.ENGM310TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310TraditionalPlanProposedTime <= 200) { 
        ENGM310TraditionalPlanProposedTime = currentTime;
        return;
    }
ENGM310TraditionalPlanProposedTime = currentTime;
  var ENGM310TraditionalPlanProposedelement = document.getElementById("ENGM310TraditionalPlanProposed");
 if (!ENGM310TraditionalPlanProposedflag) {
     if (ENGM310TraditionalPlanProposedelement.classList.contains("Other-highlighted")) { 
     ENGM310TraditionalPlanProposedelement.classList.remove("Other-highlighted");
     ENGM310TraditionalPlanProposedelement.classList.add("Other");
      return;
}      that.addLine(getLine81());
     ENGM310TraditionalPlanProposedelement.classList.remove("Other");
     ENGM310TraditionalPlanProposedelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM310TraditionalPlanProposed", "Other"]);
      ENGM310TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine81());
     ENGM310TraditionalPlanProposedelement.classList.remove("Other-highlighted");
     ENGM310TraditionalPlanProposedelement.classList.add("Other");
     that.removeFromClicked("ENGM310TraditionalPlanProposed");
      ENGM310TraditionalPlanProposedflag=false
  }
};
$scope.ENGM401TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401TraditionalPlanProposedTime <= 200) { 
        ENGM401TraditionalPlanProposedTime = currentTime;
        return;
    }
ENGM401TraditionalPlanProposedTime = currentTime;
  var ENGM401TraditionalPlanProposedelement = document.getElementById("ENGM401TraditionalPlanProposed");
 if (!ENGM401TraditionalPlanProposedflag) {
     if (ENGM401TraditionalPlanProposedelement.classList.contains("Other-highlighted")) { 
     ENGM401TraditionalPlanProposedelement.classList.remove("Other-highlighted");
     ENGM401TraditionalPlanProposedelement.classList.add("Other");
      return;
}      that.addLine(getLine82());
     ENGM401TraditionalPlanProposedelement.classList.remove("Other");
     ENGM401TraditionalPlanProposedelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401TraditionalPlanProposed", "Other"]);
      ENGM401TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine82());
     ENGM401TraditionalPlanProposedelement.classList.remove("Other-highlighted");
     ENGM401TraditionalPlanProposedelement.classList.add("Other");
     that.removeFromClicked("ENGM401TraditionalPlanProposed");
      ENGM401TraditionalPlanProposedflag=false
  }
};
$scope.PETE364TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE364TraditionalPlanProposedTime <= 200) { 
        PETE364TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE364TraditionalPlanProposedTime = currentTime;
  var PETE364TraditionalPlanProposedelement = document.getElementById("PETE364TraditionalPlanProposed");
 if (!PETE364TraditionalPlanProposedflag) {
     if (PETE364TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE364TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE364TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine70());
      that.addLine(getLine71());
      that.addLine(getLine80());
     PETE364TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     PETE364TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE364TraditionalPlanProposed", "EngineeringSciences"]);
      PETE364TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine70());
      that.removeLine(getLine71());
      that.removeLine(getLine80());
     PETE364TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE364TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE364TraditionalPlanProposed");
      PETE364TraditionalPlanProposedflag=false
  }
};
$scope.CHE314TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE314TraditionalPlanProposedTime <= 200) { 
        CHE314TraditionalPlanProposedTime = currentTime;
        return;
    }
CHE314TraditionalPlanProposedTime = currentTime;
  var CHE314TraditionalPlanProposedelement = document.getElementById("CHE314TraditionalPlanProposed");
 if (!CHE314TraditionalPlanProposedflag) {
     if (CHE314TraditionalPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     CHE314TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHE314TraditionalPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine72());
      that.addLine(getLine73());
      that.addLine(getLine74());
     CHE314TraditionalPlanProposedelement.classList.remove("NaturalSciences");
     CHE314TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHE314TraditionalPlanProposed", "NaturalSciences"]);
      CHE314TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine72());
      that.removeLine(getLine73());
      that.removeLine(getLine74());
     CHE314TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHE314TraditionalPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHE314TraditionalPlanProposed");
      CHE314TraditionalPlanProposedflag=false
  }
};
$scope.PETE375TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE375TraditionalPlanProposedTime <= 200) { 
        PETE375TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE375TraditionalPlanProposedTime = currentTime;
  var PETE375TraditionalPlanProposedelement = document.getElementById("PETE375TraditionalPlanProposed");
 if (!PETE375TraditionalPlanProposedflag) {
     if (PETE375TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE375TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE375TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}     PETE375TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     PETE375TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE375TraditionalPlanProposed", "EngineeringSciences"]);
      PETE375TraditionalPlanProposedflag=true
  }
 else {
     PETE375TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE375TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE375TraditionalPlanProposed");
      PETE375TraditionalPlanProposedflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlanProposed1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveTraditionalPlanProposed1Time <= 200) { 
        ComplementaryElectiveTraditionalPlanProposed1Time = currentTime;
        return;
    }
ComplementaryElectiveTraditionalPlanProposed1Time = currentTime;
  var ComplementaryElectiveTraditionalPlanProposed1element = document.getElementById("ComplementaryElectiveTraditionalPlanProposed1");
 if (!ComplementaryElectiveTraditionalPlanProposed1flag) {
     if (ComplementaryElectiveTraditionalPlanProposed1element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveTraditionalPlanProposed1element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlanProposed1element.classList.add("COMP");
      return;
}     ComplementaryElectiveTraditionalPlanProposed1element.classList.remove("COMP");
     ComplementaryElectiveTraditionalPlanProposed1element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveTraditionalPlanProposed1", "COMP"]);
      ComplementaryElectiveTraditionalPlanProposed1flag=true
  }
 else {
     ComplementaryElectiveTraditionalPlanProposed1element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlanProposed1element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveTraditionalPlanProposed1");
      ComplementaryElectiveTraditionalPlanProposed1flag=false
  }
};
$scope.CHE374TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE374TraditionalPlanProposedTime <= 200) { 
        CHE374TraditionalPlanProposedTime = currentTime;
        return;
    }
CHE374TraditionalPlanProposedTime = currentTime;
  var CHE374TraditionalPlanProposedelement = document.getElementById("CHE374TraditionalPlanProposed");
 if (!CHE374TraditionalPlanProposedflag) {
     if (CHE374TraditionalPlanProposedelement.classList.contains("Math-highlighted")) { 
     CHE374TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     CHE374TraditionalPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine74());
      that.addLine(getLine75());
     CHE374TraditionalPlanProposedelement.classList.remove("Math");
     CHE374TraditionalPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["CHE374TraditionalPlanProposed", "Math"]);
      CHE374TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine74());
      that.removeLine(getLine75());
     CHE374TraditionalPlanProposedelement.classList.remove("Math-highlighted");
     CHE374TraditionalPlanProposedelement.classList.add("Math");
     that.removeFromClicked("CHE374TraditionalPlanProposed");
      CHE374TraditionalPlanProposedflag=false
  }
};
$scope.EAS222TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - EAS222TraditionalPlanProposedTime <= 200) { 
        EAS222TraditionalPlanProposedTime = currentTime;
        return;
    }
EAS222TraditionalPlanProposedTime = currentTime;
  var EAS222TraditionalPlanProposedelement = document.getElementById("EAS222TraditionalPlanProposed");
 if (!EAS222TraditionalPlanProposedflag) {
     if (EAS222TraditionalPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     EAS222TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     EAS222TraditionalPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine76());
     EAS222TraditionalPlanProposedelement.classList.remove("NaturalSciences");
     EAS222TraditionalPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["EAS222TraditionalPlanProposed", "NaturalSciences"]);
      EAS222TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine76());
     EAS222TraditionalPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     EAS222TraditionalPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("EAS222TraditionalPlanProposed");
      EAS222TraditionalPlanProposedflag=false
  }
};
$scope.PETE365TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE365TraditionalPlanProposedTime <= 200) { 
        PETE365TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE365TraditionalPlanProposedTime = currentTime;
  var PETE365TraditionalPlanProposedelement = document.getElementById("PETE365TraditionalPlanProposed");
 if (!PETE365TraditionalPlanProposedflag) {
     if (PETE365TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE365TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE365TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine77());
     PETE365TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     PETE365TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE365TraditionalPlanProposed", "EngineeringSciences"]);
      PETE365TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine77());
     PETE365TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE365TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE365TraditionalPlanProposed");
      PETE365TraditionalPlanProposedflag=false
  }
};
$scope.PETE366TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE366TraditionalPlanProposedTime <= 200) { 
        PETE366TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE366TraditionalPlanProposedTime = currentTime;
  var PETE366TraditionalPlanProposedelement = document.getElementById("PETE366TraditionalPlanProposed");
 if (!PETE366TraditionalPlanProposedflag) {
     if (PETE366TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE366TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE366TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine78());
     PETE366TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     PETE366TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE366TraditionalPlanProposed", "EngineeringSciences"]);
      PETE366TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine78());
     PETE366TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE366TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE366TraditionalPlanProposed");
      PETE366TraditionalPlanProposedflag=false
  }
};
$scope.PETE377TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE377TraditionalPlanProposedTime <= 200) { 
        PETE377TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE377TraditionalPlanProposedTime = currentTime;
  var PETE377TraditionalPlanProposedelement = document.getElementById("PETE377TraditionalPlanProposed");
 if (!PETE377TraditionalPlanProposedflag) {
     if (PETE377TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE377TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE377TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}     PETE377TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     PETE377TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE377TraditionalPlanProposed", "EngineeringSciences"]);
      PETE377TraditionalPlanProposedflag=true
  }
 else {
     PETE377TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE377TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE377TraditionalPlanProposed");
      PETE377TraditionalPlanProposedflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlanProposed0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlanProposed0Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlanProposed0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlanProposed0Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlanProposed0element = document.getElementById("ProgramTechnicalElectiveTraditionalPlanProposed0");
 if (!ProgramTechnicalElectiveTraditionalPlanProposed0flag) {
     if (ProgramTechnicalElectiveTraditionalPlanProposed0element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveTraditionalPlanProposed0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlanProposed0element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveTraditionalPlanProposed0element.classList.remove("PROG");
     ProgramTechnicalElectiveTraditionalPlanProposed0element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveTraditionalPlanProposed0", "PROG"]);
      ProgramTechnicalElectiveTraditionalPlanProposed0flag=true
  }
 else {
     ProgramTechnicalElectiveTraditionalPlanProposed0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlanProposed0element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlanProposed0");
      ProgramTechnicalElectiveTraditionalPlanProposed0flag=false
  }
};
$scope.ENGG404TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404TraditionalPlanProposedTime <= 200) { 
        ENGG404TraditionalPlanProposedTime = currentTime;
        return;
    }
ENGG404TraditionalPlanProposedTime = currentTime;
  var ENGG404TraditionalPlanProposedelement = document.getElementById("ENGG404TraditionalPlanProposed");
 if (!ENGG404TraditionalPlanProposedflag) {
     if (ENGG404TraditionalPlanProposedelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG404TraditionalPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404TraditionalPlanProposedelement.classList.add("EngineeringProfession");
      return;
}     ENGG404TraditionalPlanProposedelement.classList.remove("EngineeringProfession");
     ENGG404TraditionalPlanProposedelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG404TraditionalPlanProposed", "EngineeringProfession"]);
      ENGG404TraditionalPlanProposedflag=true
  }
 else {
     ENGG404TraditionalPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404TraditionalPlanProposedelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG404TraditionalPlanProposed");
      ENGG404TraditionalPlanProposedflag=false
  }
};
$scope.PETE444TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE444TraditionalPlanProposedTime <= 200) { 
        PETE444TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE444TraditionalPlanProposedTime = currentTime;
  var PETE444TraditionalPlanProposedelement = document.getElementById("PETE444TraditionalPlanProposed");
 if (!PETE444TraditionalPlanProposedflag) {
     if (PETE444TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE444TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE444TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine79());
     PETE444TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     PETE444TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE444TraditionalPlanProposed", "EngineeringSciences"]);
      PETE444TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine79());
     PETE444TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE444TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE444TraditionalPlanProposed");
      PETE444TraditionalPlanProposedflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlanProposed2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveTraditionalPlanProposed2Time <= 200) { 
        ComplementaryElectiveTraditionalPlanProposed2Time = currentTime;
        return;
    }
ComplementaryElectiveTraditionalPlanProposed2Time = currentTime;
  var ComplementaryElectiveTraditionalPlanProposed2element = document.getElementById("ComplementaryElectiveTraditionalPlanProposed2");
 if (!ComplementaryElectiveTraditionalPlanProposed2flag) {
     if (ComplementaryElectiveTraditionalPlanProposed2element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveTraditionalPlanProposed2element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlanProposed2element.classList.add("COMP");
      return;
}     ComplementaryElectiveTraditionalPlanProposed2element.classList.remove("COMP");
     ComplementaryElectiveTraditionalPlanProposed2element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveTraditionalPlanProposed2", "COMP"]);
      ComplementaryElectiveTraditionalPlanProposed2flag=true
  }
 else {
     ComplementaryElectiveTraditionalPlanProposed2element.classList.remove("COMP-highlighted");
     ComplementaryElectiveTraditionalPlanProposed2element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveTraditionalPlanProposed2");
      ComplementaryElectiveTraditionalPlanProposed2flag=false
  }
};
$scope.PETE476TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE476TraditionalPlanProposedTime <= 200) { 
        PETE476TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE476TraditionalPlanProposedTime = currentTime;
  var PETE476TraditionalPlanProposedelement = document.getElementById("PETE476TraditionalPlanProposed");
 if (!PETE476TraditionalPlanProposedflag) {
     if (PETE476TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE476TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE476TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine80());
     PETE476TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     PETE476TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE476TraditionalPlanProposed", "EngineeringSciences"]);
      PETE476TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine80());
     PETE476TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE476TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE476TraditionalPlanProposed");
      PETE476TraditionalPlanProposedflag=false
  }
};
$scope.PETE484TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE484TraditionalPlanProposedTime <= 200) { 
        PETE484TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE484TraditionalPlanProposedTime = currentTime;
  var PETE484TraditionalPlanProposedelement = document.getElementById("PETE484TraditionalPlanProposed");
 if (!PETE484TraditionalPlanProposedflag) {
     if (PETE484TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE484TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE484TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine81());
      that.addLine(getLine82());
      that.addLine(getLine83());
     PETE484TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     PETE484TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE484TraditionalPlanProposed", "EngineeringSciences"]);
      PETE484TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine81());
      that.removeLine(getLine82());
      that.removeLine(getLine83());
     PETE484TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE484TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE484TraditionalPlanProposed");
      PETE484TraditionalPlanProposedflag=false
  }
};
$scope.ENGG400TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400TraditionalPlanProposedTime <= 200) { 
        ENGG400TraditionalPlanProposedTime = currentTime;
        return;
    }
ENGG400TraditionalPlanProposedTime = currentTime;
  var ENGG400TraditionalPlanProposedelement = document.getElementById("ENGG400TraditionalPlanProposed");
 if (!ENGG400TraditionalPlanProposedflag) {
     if (ENGG400TraditionalPlanProposedelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG400TraditionalPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400TraditionalPlanProposedelement.classList.add("EngineeringProfession");
      return;
}     ENGG400TraditionalPlanProposedelement.classList.remove("EngineeringProfession");
     ENGG400TraditionalPlanProposedelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG400TraditionalPlanProposed", "EngineeringProfession"]);
      ENGG400TraditionalPlanProposedflag=true
  }
 else {
     ENGG400TraditionalPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400TraditionalPlanProposedelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG400TraditionalPlanProposed");
      ENGG400TraditionalPlanProposedflag=false
  }
};
$scope.PETE471TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE471TraditionalPlanProposedTime <= 200) { 
        PETE471TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE471TraditionalPlanProposedTime = currentTime;
  var PETE471TraditionalPlanProposedelement = document.getElementById("PETE471TraditionalPlanProposed");
 if (!PETE471TraditionalPlanProposedflag) {
     if (PETE471TraditionalPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE471TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE471TraditionalPlanProposedelement.classList.add("EngineeringSciences");
      return;
}     PETE471TraditionalPlanProposedelement.classList.remove("EngineeringSciences");
     PETE471TraditionalPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE471TraditionalPlanProposed", "EngineeringSciences"]);
      PETE471TraditionalPlanProposedflag=true
  }
 else {
     PETE471TraditionalPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE471TraditionalPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE471TraditionalPlanProposed");
      PETE471TraditionalPlanProposedflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlanProposed1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlanProposed1Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlanProposed1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlanProposed1Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlanProposed1element = document.getElementById("ProgramTechnicalElectiveTraditionalPlanProposed1");
 if (!ProgramTechnicalElectiveTraditionalPlanProposed1flag) {
     if (ProgramTechnicalElectiveTraditionalPlanProposed1element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveTraditionalPlanProposed1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlanProposed1element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveTraditionalPlanProposed1element.classList.remove("PROG");
     ProgramTechnicalElectiveTraditionalPlanProposed1element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveTraditionalPlanProposed1", "PROG"]);
      ProgramTechnicalElectiveTraditionalPlanProposed1flag=true
  }
 else {
     ProgramTechnicalElectiveTraditionalPlanProposed1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveTraditionalPlanProposed1element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlanProposed1");
      ProgramTechnicalElectiveTraditionalPlanProposed1flag=false
  }
};
$scope.PETE478TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE478TraditionalPlanProposedTime <= 200) { 
        PETE478TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE478TraditionalPlanProposedTime = currentTime;
  var PETE478TraditionalPlanProposedelement = document.getElementById("PETE478TraditionalPlanProposed");
 if (!PETE478TraditionalPlanProposedflag) {
     if (PETE478TraditionalPlanProposedelement.classList.contains("EngineeringDesign-highlighted")) { 
     PETE478TraditionalPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
     PETE478TraditionalPlanProposedelement.classList.add("EngineeringDesign");
      return;
}     PETE478TraditionalPlanProposedelement.classList.remove("EngineeringDesign");
     PETE478TraditionalPlanProposedelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["PETE478TraditionalPlanProposed", "EngineeringDesign"]);
      PETE478TraditionalPlanProposedflag=true
  }
 else {
     PETE478TraditionalPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
     PETE478TraditionalPlanProposedelement.classList.add("EngineeringDesign");
     that.removeFromClicked("PETE478TraditionalPlanProposed");
      PETE478TraditionalPlanProposedflag=false
  }
};
$scope.PETE496TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE496TraditionalPlanProposedTime <= 200) { 
        PETE496TraditionalPlanProposedTime = currentTime;
        return;
    }
PETE496TraditionalPlanProposedTime = currentTime;
  var PETE496TraditionalPlanProposedelement = document.getElementById("PETE496TraditionalPlanProposed");
 if (!PETE496TraditionalPlanProposedflag) {
     if (PETE496TraditionalPlanProposedelement.classList.contains("EngineeringDesign-highlighted")) { 
     PETE496TraditionalPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
     PETE496TraditionalPlanProposedelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine83());
     PETE496TraditionalPlanProposedelement.classList.remove("EngineeringDesign");
     PETE496TraditionalPlanProposedelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["PETE496TraditionalPlanProposed", "EngineeringDesign"]);
      PETE496TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine83());
     PETE496TraditionalPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
     PETE496TraditionalPlanProposedelement.classList.add("EngineeringDesign");
     that.removeFromClicked("PETE496TraditionalPlanProposed");
      PETE496TraditionalPlanProposedflag=false
  }
};
$scope.ITSElectiveTraditionalPlanProposed0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveTraditionalPlanProposed0Time <= 200) { 
        ITSElectiveTraditionalPlanProposed0Time = currentTime;
        return;
    }
ITSElectiveTraditionalPlanProposed0Time = currentTime;
  var ITSElectiveTraditionalPlanProposed0element = document.getElementById("ITSElectiveTraditionalPlanProposed0");
 if (!ITSElectiveTraditionalPlanProposed0flag) {
     if (ITSElectiveTraditionalPlanProposed0element.classList.contains("ITS-highlighted")) { 
     ITSElectiveTraditionalPlanProposed0element.classList.remove("ITS-highlighted");
     ITSElectiveTraditionalPlanProposed0element.classList.add("ITS");
      return;
}     ITSElectiveTraditionalPlanProposed0element.classList.remove("ITS");
     ITSElectiveTraditionalPlanProposed0element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveTraditionalPlanProposed0", "ITS"]);
      ITSElectiveTraditionalPlanProposed0flag=true
  }
 else {
     ITSElectiveTraditionalPlanProposed0element.classList.remove("ITS-highlighted");
     ITSElectiveTraditionalPlanProposed0element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveTraditionalPlanProposed0");
      ITSElectiveTraditionalPlanProposed0flag=false
  }
};
$scope.CHEM103TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("CHEM103TraditionalPlanProposeddesc");
 if (!CHEM103TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103TraditionalPlanProposedrflag=false
  }
};
$scope.ENGG100TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("ENGG100TraditionalPlanProposeddesc");
 if (!ENGG100TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100TraditionalPlanProposedrflag=false
  }
};
$scope.ENGG130TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("ENGG130TraditionalPlanProposeddesc");
 if (!ENGG130TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130TraditionalPlanProposedrflag=false
  }
};
$scope.ENGL199TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("ENGL199TraditionalPlanProposeddesc");
 if (!ENGL199TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199TraditionalPlanProposedrflag=false
  }
};
$scope.MATH100TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("MATH100TraditionalPlanProposeddesc");
 if (!MATH100TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100TraditionalPlanProposedrflag=false
  }
};
$scope.PHYS130TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PHYS130TraditionalPlanProposeddesc");
 if (!PHYS130TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130TraditionalPlanProposedrflag=false
  }
};
$scope.CHEM105TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("CHEM105TraditionalPlanProposeddesc");
 if (!CHEM105TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105TraditionalPlanProposedrflag=false
  }
};
$scope.ENCMP100TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("ENCMP100TraditionalPlanProposeddesc");
 if (!ENCMP100TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100TraditionalPlanProposedrflag=false
  }
};
$scope.ENGG160TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("ENGG160TraditionalPlanProposeddesc");
 if (!ENGG160TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160TraditionalPlanProposedrflag=false
  }
};
$scope.ENPH131TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("ENPH131TraditionalPlanProposeddesc");
 if (!ENPH131TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131TraditionalPlanProposedrflag=false
  }
};
$scope.MATH101TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("MATH101TraditionalPlanProposeddesc");
 if (!MATH101TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101TraditionalPlanProposedrflag=false
  }
};
$scope.MATH102TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("MATH102TraditionalPlanProposeddesc");
 if (!MATH102TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102TraditionalPlanProposedrflag=false
  }
};
$scope.CHE243TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("CHE243TraditionalPlanProposeddesc");
 if (!CHE243TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243TraditionalPlanProposedrflag=false
  }
};
$scope.EAS210TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("EAS210TraditionalPlanProposeddesc");
 if (!EAS210TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      EAS210TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      EAS210TraditionalPlanProposedrflag=false
  }
};
$scope.ECE209TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("ECE209TraditionalPlanProposeddesc");
 if (!ECE209TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE209TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE209TraditionalPlanProposedrflag=false
  }
};
$scope.MATE202TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("MATE202TraditionalPlanProposeddesc");
 if (!MATE202TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE202TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE202TraditionalPlanProposedrflag=false
  }
};
$scope.MATH209TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("MATH209TraditionalPlanProposeddesc");
 if (!MATH209TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209TraditionalPlanProposedrflag=false
  }
};
$scope.PETE275TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE275TraditionalPlanProposeddesc");
 if (!PETE275TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE275TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE275TraditionalPlanProposedrflag=false
  }
};
$scope.CHE312TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("CHE312TraditionalPlanProposeddesc");
 if (!CHE312TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE312TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE312TraditionalPlanProposedrflag=false
  }
};
$scope.CIVE270TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("CIVE270TraditionalPlanProposeddesc");
 if (!CIVE270TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270TraditionalPlanProposedrflag=false
  }
};
$scope.MATH201TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("MATH201TraditionalPlanProposeddesc");
 if (!MATH201TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201TraditionalPlanProposedrflag=false
  }
};
$scope.PETE295TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE295TraditionalPlanProposeddesc");
 if (!PETE295TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE295TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE295TraditionalPlanProposedrflag=false
  }
};
$scope.STAT235TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("STAT235TraditionalPlanProposeddesc");
 if (!STAT235TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      STAT235TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      STAT235TraditionalPlanProposedrflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlanProposed0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveTraditionalPlanProposed0desc");
 if (!ComplementaryElectiveTraditionalPlanProposed0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveTraditionalPlanProposed0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveTraditionalPlanProposed0rflag=false
  }
};
$scope.CHEM371TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("CHEM371TraditionalPlanProposeddesc");
 if (!CHEM371TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM371TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM371TraditionalPlanProposedrflag=false
  }
};
$scope.ENGM310TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("ENGM310TraditionalPlanProposeddesc");
 if (!ENGM310TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310TraditionalPlanProposedrflag=false
  }
};
$scope.ENGM401TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("ENGM401TraditionalPlanProposeddesc");
 if (!ENGM401TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401TraditionalPlanProposedrflag=false
  }
};
$scope.PETE364TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE364TraditionalPlanProposeddesc");
 if (!PETE364TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE364TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE364TraditionalPlanProposedrflag=false
  }
};
$scope.CHE314TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("CHE314TraditionalPlanProposeddesc");
 if (!CHE314TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE314TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE314TraditionalPlanProposedrflag=false
  }
};
$scope.PETE375TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE375TraditionalPlanProposeddesc");
 if (!PETE375TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE375TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE375TraditionalPlanProposedrflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlanProposed1RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveTraditionalPlanProposed1desc");
 if (!ComplementaryElectiveTraditionalPlanProposed1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveTraditionalPlanProposed1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveTraditionalPlanProposed1rflag=false
  }
};
$scope.CHE374TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("CHE374TraditionalPlanProposeddesc");
 if (!CHE374TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE374TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE374TraditionalPlanProposedrflag=false
  }
};
$scope.EAS222TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("EAS222TraditionalPlanProposeddesc");
 if (!EAS222TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      EAS222TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      EAS222TraditionalPlanProposedrflag=false
  }
};
$scope.PETE365TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE365TraditionalPlanProposeddesc");
 if (!PETE365TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE365TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE365TraditionalPlanProposedrflag=false
  }
};
$scope.PETE366TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE366TraditionalPlanProposeddesc");
 if (!PETE366TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE366TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE366TraditionalPlanProposedrflag=false
  }
};
$scope.PETE377TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE377TraditionalPlanProposeddesc");
 if (!PETE377TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE377TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE377TraditionalPlanProposedrflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlanProposed0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlanProposed0desc");
 if (!ProgramTechnicalElectiveTraditionalPlanProposed0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlanProposed0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlanProposed0rflag=false
  }
};
$scope.ENGG404TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("ENGG404TraditionalPlanProposeddesc");
 if (!ENGG404TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404TraditionalPlanProposedrflag=false
  }
};
$scope.PETE444TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE444TraditionalPlanProposeddesc");
 if (!PETE444TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE444TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE444TraditionalPlanProposedrflag=false
  }
};
$scope.ComplementaryElectiveTraditionalPlanProposed2RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveTraditionalPlanProposed2desc");
 if (!ComplementaryElectiveTraditionalPlanProposed2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveTraditionalPlanProposed2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveTraditionalPlanProposed2rflag=false
  }
};
$scope.PETE476TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE476TraditionalPlanProposeddesc");
 if (!PETE476TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE476TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE476TraditionalPlanProposedrflag=false
  }
};
$scope.PETE484TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE484TraditionalPlanProposeddesc");
 if (!PETE484TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE484TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE484TraditionalPlanProposedrflag=false
  }
};
$scope.ENGG400TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("ENGG400TraditionalPlanProposeddesc");
 if (!ENGG400TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400TraditionalPlanProposedrflag=false
  }
};
$scope.PETE471TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE471TraditionalPlanProposeddesc");
 if (!PETE471TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE471TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE471TraditionalPlanProposedrflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlanProposed1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlanProposed1desc");
 if (!ProgramTechnicalElectiveTraditionalPlanProposed1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlanProposed1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlanProposed1rflag=false
  }
};
$scope.PETE478TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE478TraditionalPlanProposeddesc");
 if (!PETE478TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE478TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE478TraditionalPlanProposedrflag=false
  }
};
$scope.PETE496TraditionalPlanProposedRCListener = function () {
  var element = document.getElementById("PETE496TraditionalPlanProposeddesc");
 if (!PETE496TraditionalPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE496TraditionalPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE496TraditionalPlanProposedrflag=false
  }
};
$scope.ITSElectiveTraditionalPlanProposed0RCListener = function () {
  var element = document.getElementById("ITSElectiveTraditionalPlanProposed0desc");
 if (!ITSElectiveTraditionalPlanProposed0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveTraditionalPlanProposed0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveTraditionalPlanProposed0rflag=false
  }
};
  var CHEM103CoopPlanflag = false;
  var CHEM103CoopPlanrflag = false;
 var CHEM103CoopPlanTime = new Date().getTime();
  var ENGG100CoopPlanflag = false;
  var ENGG100CoopPlanrflag = false;
 var ENGG100CoopPlanTime = new Date().getTime();
  var ENGG130CoopPlanflag = false;
  var ENGG130CoopPlanrflag = false;
 var ENGG130CoopPlanTime = new Date().getTime();
  var ENGL199CoopPlanflag = false;
  var ENGL199CoopPlanrflag = false;
 var ENGL199CoopPlanTime = new Date().getTime();
  var MATH100CoopPlanflag = false;
  var MATH100CoopPlanrflag = false;
 var MATH100CoopPlanTime = new Date().getTime();
  var PHYS130CoopPlanflag = false;
  var PHYS130CoopPlanrflag = false;
 var PHYS130CoopPlanTime = new Date().getTime();
  var CHEM105CoopPlanflag = false;
  var CHEM105CoopPlanrflag = false;
 var CHEM105CoopPlanTime = new Date().getTime();
  var ENCMP100CoopPlanflag = false;
  var ENCMP100CoopPlanrflag = false;
 var ENCMP100CoopPlanTime = new Date().getTime();
  var ENGG160CoopPlanflag = false;
  var ENGG160CoopPlanrflag = false;
 var ENGG160CoopPlanTime = new Date().getTime();
  var ENPH131CoopPlanflag = false;
  var ENPH131CoopPlanrflag = false;
 var ENPH131CoopPlanTime = new Date().getTime();
  var MATH101CoopPlanflag = false;
  var MATH101CoopPlanrflag = false;
 var MATH101CoopPlanTime = new Date().getTime();
  var MATH102CoopPlanflag = false;
  var MATH102CoopPlanrflag = false;
 var MATH102CoopPlanTime = new Date().getTime();
  var CHE243CoopPlanflag = false;
  var CHE243CoopPlanrflag = false;
 var CHE243CoopPlanTime = new Date().getTime();
  var EAS210CoopPlanflag = false;
  var EAS210CoopPlanrflag = false;
 var EAS210CoopPlanTime = new Date().getTime();
  var ECE209CoopPlanflag = false;
  var ECE209CoopPlanrflag = false;
 var ECE209CoopPlanTime = new Date().getTime();
  var ENGG299CoopPlanflag = false;
  var ENGG299CoopPlanrflag = false;
 var ENGG299CoopPlanTime = new Date().getTime();
  var MATE202CoopPlanflag = false;
  var MATE202CoopPlanrflag = false;
 var MATE202CoopPlanTime = new Date().getTime();
  var MATH209CoopPlanflag = false;
  var MATH209CoopPlanrflag = false;
 var MATH209CoopPlanTime = new Date().getTime();
  var ComplementaryElectiveCoopPlan0flag = false;
  var ComplementaryElectiveCoopPlan0rflag = false;
 var ComplementaryElectiveCoopPlan0Time = new Date().getTime();
  var CHE312CoopPlanflag = false;
  var CHE312CoopPlanrflag = false;
 var CHE312CoopPlanTime = new Date().getTime();
  var CIVE270CoopPlanflag = false;
  var CIVE270CoopPlanrflag = false;
 var CIVE270CoopPlanTime = new Date().getTime();
  var MATH201CoopPlanflag = false;
  var MATH201CoopPlanrflag = false;
 var MATH201CoopPlanTime = new Date().getTime();
  var PETE275CoopPlanflag = false;
  var PETE275CoopPlanrflag = false;
 var PETE275CoopPlanTime = new Date().getTime();
  var STAT235CoopPlanflag = false;
  var STAT235CoopPlanrflag = false;
 var STAT235CoopPlanTime = new Date().getTime();
  var ComplementaryElectiveCoopPlan1flag = false;
  var ComplementaryElectiveCoopPlan1rflag = false;
 var ComplementaryElectiveCoopPlan1Time = new Date().getTime();
  var WKEXP901CoopPlanflag = false;
  var WKEXP901CoopPlanrflag = false;
 var WKEXP901CoopPlanTime = new Date().getTime();
  var WKEXP902CoopPlanflag = false;
  var WKEXP902CoopPlanrflag = false;
 var WKEXP902CoopPlanTime = new Date().getTime();
  var CHE374CoopPlanflag = false;
  var CHE374CoopPlanrflag = false;
 var CHE374CoopPlanTime = new Date().getTime();
  var EAS222CoopPlanflag = false;
  var EAS222CoopPlanrflag = false;
 var EAS222CoopPlanTime = new Date().getTime();
  var PETE365CoopPlanflag = false;
  var PETE365CoopPlanrflag = false;
 var PETE365CoopPlanTime = new Date().getTime();
  var PETE366CoopPlanflag = false;
  var PETE366CoopPlanrflag = false;
 var PETE366CoopPlanTime = new Date().getTime();
  var ProgramTechnicalElectiveCoopPlan0flag = false;
  var ProgramTechnicalElectiveCoopPlan0rflag = false;
 var ProgramTechnicalElectiveCoopPlan0Time = new Date().getTime();
  var WKEXP903CoopPlanflag = false;
  var WKEXP903CoopPlanrflag = false;
 var WKEXP903CoopPlanTime = new Date().getTime();
  var CHEM371CoopPlanflag = false;
  var CHEM371CoopPlanrflag = false;
 var CHEM371CoopPlanTime = new Date().getTime();
  var ENGM310CoopPlanflag = false;
  var ENGM310CoopPlanrflag = false;
 var ENGM310CoopPlanTime = new Date().getTime();
  var ENGM401CoopPlanflag = false;
  var ENGM401CoopPlanrflag = false;
 var ENGM401CoopPlanTime = new Date().getTime();
  var PETE364CoopPlanflag = false;
  var PETE364CoopPlanrflag = false;
 var PETE364CoopPlanTime = new Date().getTime();
  var PETE373CoopPlanflag = false;
  var PETE373CoopPlanrflag = false;
 var PETE373CoopPlanTime = new Date().getTime();
  var ProgramTechnicalElectiveCoopPlan1flag = false;
  var ProgramTechnicalElectiveCoopPlan1rflag = false;
 var ProgramTechnicalElectiveCoopPlan1Time = new Date().getTime();
  var ComplementaryElectiveCoopPlan2flag = false;
  var ComplementaryElectiveCoopPlan2rflag = false;
 var ComplementaryElectiveCoopPlan2Time = new Date().getTime();
  var WKEXP904CoopPlanflag = false;
  var WKEXP904CoopPlanrflag = false;
 var WKEXP904CoopPlanTime = new Date().getTime();
  var WKEXP905CoopPlanflag = false;
  var WKEXP905CoopPlanrflag = false;
 var WKEXP905CoopPlanTime = new Date().getTime();
  var CHE314CoopPlanflag = false;
  var CHE314CoopPlanrflag = false;
 var CHE314CoopPlanTime = new Date().getTime();
  var ENGG404CoopPlanflag = false;
  var ENGG404CoopPlanrflag = false;
 var ENGG404CoopPlanTime = new Date().getTime();
  var PETE444CoopPlanflag = false;
  var PETE444CoopPlanrflag = false;
 var PETE444CoopPlanTime = new Date().getTime();
  var PETE475CoopPlanflag = false;
  var PETE475CoopPlanrflag = false;
 var PETE475CoopPlanTime = new Date().getTime();
  var PETE476CoopPlanflag = false;
  var PETE476CoopPlanrflag = false;
 var PETE476CoopPlanTime = new Date().getTime();
  var PETE484CoopPlanflag = false;
  var PETE484CoopPlanrflag = false;
 var PETE484CoopPlanTime = new Date().getTime();
  var ENGG400CoopPlanflag = false;
  var ENGG400CoopPlanrflag = false;
 var ENGG400CoopPlanTime = new Date().getTime();
  var PETE471CoopPlanflag = false;
  var PETE471CoopPlanrflag = false;
 var PETE471CoopPlanTime = new Date().getTime();
  var PETE477CoopPlanflag = false;
  var PETE477CoopPlanrflag = false;
 var PETE477CoopPlanTime = new Date().getTime();
  var PETE478CoopPlanflag = false;
  var PETE478CoopPlanrflag = false;
 var PETE478CoopPlanTime = new Date().getTime();
  var PETE496CoopPlanflag = false;
  var PETE496CoopPlanrflag = false;
 var PETE496CoopPlanTime = new Date().getTime();
  var ITSElectiveCoopPlan0flag = false;
  var ITSElectiveCoopPlan0rflag = false;
 var ITSElectiveCoopPlan0Time = new Date().getTime();
$scope.CHEM103CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103CoopPlanTime <= 200) { 
        CHEM103CoopPlanTime = currentTime;
        return;
    }
CHEM103CoopPlanTime = currentTime;
  var CHEM103CoopPlanelement = document.getElementById("CHEM103CoopPlan");
 if (!CHEM103CoopPlanflag) {
     if (CHEM103CoopPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM103CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM103CoopPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine86());
     CHEM103CoopPlanelement.classList.remove("NaturalSciences");
     CHEM103CoopPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM103CoopPlan", "NaturalSciences"]);
      CHEM103CoopPlanflag=true
  }
 else {
      that.removeLine(getLine86());
     CHEM103CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM103CoopPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM103CoopPlan");
      CHEM103CoopPlanflag=false
  }
};
$scope.ENGG100CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100CoopPlanTime <= 200) { 
        ENGG100CoopPlanTime = currentTime;
        return;
    }
ENGG100CoopPlanTime = currentTime;
  var ENGG100CoopPlanelement = document.getElementById("ENGG100CoopPlan");
 if (!ENGG100CoopPlanflag) {
     if (ENGG100CoopPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG100CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100CoopPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG100CoopPlanelement.classList.remove("EngineeringProfession");
     ENGG100CoopPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG100CoopPlan", "EngineeringProfession"]);
      ENGG100CoopPlanflag=true
  }
 else {
     ENGG100CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100CoopPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG100CoopPlan");
      ENGG100CoopPlanflag=false
  }
};
$scope.ENGG130CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130CoopPlanTime <= 200) { 
        ENGG130CoopPlanTime = currentTime;
        return;
    }
ENGG130CoopPlanTime = currentTime;
  var ENGG130CoopPlanelement = document.getElementById("ENGG130CoopPlan");
 if (!ENGG130CoopPlanflag) {
     if (ENGG130CoopPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENGG130CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     ENGG130CoopPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine84());
      that.addLine(getLine89());
      that.addLine(getLine101());
     ENGG130CoopPlanelement.classList.remove("NaturalSciences");
     ENGG130CoopPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENGG130CoopPlan", "NaturalSciences"]);
      ENGG130CoopPlanflag=true
  }
 else {
      that.removeLine(getLine84());
      that.removeLine(getLine89());
      that.removeLine(getLine101());
     ENGG130CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     ENGG130CoopPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENGG130CoopPlan");
      ENGG130CoopPlanflag=false
  }
};
$scope.ENGL199CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199CoopPlanTime <= 200) { 
        ENGL199CoopPlanTime = currentTime;
        return;
    }
ENGL199CoopPlanTime = currentTime;
  var ENGL199CoopPlanelement = document.getElementById("ENGL199CoopPlan");
 if (!ENGL199CoopPlanflag) {
     if (ENGL199CoopPlanelement.classList.contains("Other-highlighted")) { 
     ENGL199CoopPlanelement.classList.remove("Other-highlighted");
     ENGL199CoopPlanelement.classList.add("Other");
      return;
}      that.addLine(getLine87());
     ENGL199CoopPlanelement.classList.remove("Other");
     ENGL199CoopPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199CoopPlan", "Other"]);
      ENGL199CoopPlanflag=true
  }
 else {
      that.removeLine(getLine87());
     ENGL199CoopPlanelement.classList.remove("Other-highlighted");
     ENGL199CoopPlanelement.classList.add("Other");
     that.removeFromClicked("ENGL199CoopPlan");
      ENGL199CoopPlanflag=false
  }
};
$scope.MATH100CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100CoopPlanTime <= 200) { 
        MATH100CoopPlanTime = currentTime;
        return;
    }
MATH100CoopPlanTime = currentTime;
  var MATH100CoopPlanelement = document.getElementById("MATH100CoopPlan");
 if (!MATH100CoopPlanflag) {
     if (MATH100CoopPlanelement.classList.contains("Math-highlighted")) { 
     MATH100CoopPlanelement.classList.remove("Math-highlighted");
     MATH100CoopPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine84());
      that.addLine(getLine85());
      that.addLine(getLine88());
      that.addLine(getLine91());
      that.addLine(getLine92());
      that.addLine(getLine105());
     MATH100CoopPlanelement.classList.remove("Math");
     MATH100CoopPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH100CoopPlan", "Math"]);
      MATH100CoopPlanflag=true
  }
 else {
      that.removeLine(getLine84());
      that.removeLine(getLine85());
      that.removeLine(getLine88());
      that.removeLine(getLine91());
      that.removeLine(getLine92());
      that.removeLine(getLine105());
     MATH100CoopPlanelement.classList.remove("Math-highlighted");
     MATH100CoopPlanelement.classList.add("Math");
     that.removeFromClicked("MATH100CoopPlan");
      MATH100CoopPlanflag=false
  }
};
$scope.PHYS130CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130CoopPlanTime <= 200) { 
        PHYS130CoopPlanTime = currentTime;
        return;
    }
PHYS130CoopPlanTime = currentTime;
  var PHYS130CoopPlanelement = document.getElementById("PHYS130CoopPlan");
 if (!PHYS130CoopPlanflag) {
     if (PHYS130CoopPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     PHYS130CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     PHYS130CoopPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine85());
     PHYS130CoopPlanelement.classList.remove("NaturalSciences");
     PHYS130CoopPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["PHYS130CoopPlan", "NaturalSciences"]);
      PHYS130CoopPlanflag=true
  }
 else {
      that.removeLine(getLine85());
     PHYS130CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     PHYS130CoopPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("PHYS130CoopPlan");
      PHYS130CoopPlanflag=false
  }
};
$scope.CHEM105CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105CoopPlanTime <= 200) { 
        CHEM105CoopPlanTime = currentTime;
        return;
    }
CHEM105CoopPlanTime = currentTime;
  var CHEM105CoopPlanelement = document.getElementById("CHEM105CoopPlan");
 if (!CHEM105CoopPlanflag) {
     if (CHEM105CoopPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM105CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM105CoopPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine86());
      that.addLine(getLine94());
      that.addLine(getLine104());
      that.addLine(getLine114());
     CHEM105CoopPlanelement.classList.remove("NaturalSciences");
     CHEM105CoopPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM105CoopPlan", "NaturalSciences"]);
      CHEM105CoopPlanflag=true
  }
 else {
      that.removeLine(getLine86());
      that.removeLine(getLine94());
      that.removeLine(getLine104());
      that.removeLine(getLine114());
     CHEM105CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM105CoopPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM105CoopPlan");
      CHEM105CoopPlanflag=false
  }
};
$scope.ENCMP100CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100CoopPlanTime <= 200) { 
        ENCMP100CoopPlanTime = currentTime;
        return;
    }
ENCMP100CoopPlanTime = currentTime;
  var ENCMP100CoopPlanelement = document.getElementById("ENCMP100CoopPlan");
 if (!ENCMP100CoopPlanflag) {
     if (ENCMP100CoopPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENCMP100CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100CoopPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine109());
     ENCMP100CoopPlanelement.classList.remove("NaturalSciences");
     ENCMP100CoopPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENCMP100CoopPlan", "NaturalSciences"]);
      ENCMP100CoopPlanflag=true
  }
 else {
      that.removeLine(getLine109());
     ENCMP100CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100CoopPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENCMP100CoopPlan");
      ENCMP100CoopPlanflag=false
  }
};
$scope.ENGG160CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160CoopPlanTime <= 200) { 
        ENGG160CoopPlanTime = currentTime;
        return;
    }
ENGG160CoopPlanTime = currentTime;
  var ENGG160CoopPlanelement = document.getElementById("ENGG160CoopPlan");
 if (!ENGG160CoopPlanflag) {
     if (ENGG160CoopPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     ENGG160CoopPlanelement.classList.remove("EngineeringDesign-highlighted");
     ENGG160CoopPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine87());
     ENGG160CoopPlanelement.classList.remove("EngineeringDesign");
     ENGG160CoopPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["ENGG160CoopPlan", "EngineeringDesign"]);
      ENGG160CoopPlanflag=true
  }
 else {
      that.removeLine(getLine87());
     ENGG160CoopPlanelement.classList.remove("EngineeringDesign-highlighted");
     ENGG160CoopPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("ENGG160CoopPlan");
      ENGG160CoopPlanflag=false
  }
};
$scope.ENPH131CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131CoopPlanTime <= 200) { 
        ENPH131CoopPlanTime = currentTime;
        return;
    }
ENPH131CoopPlanTime = currentTime;
  var ENPH131CoopPlanelement = document.getElementById("ENPH131CoopPlan");
 if (!ENPH131CoopPlanflag) {
     if (ENPH131CoopPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     ENPH131CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     ENPH131CoopPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine88());
      that.addLine(getLine89());
      that.addLine(getLine90());
      that.addLine(getLine98());
     ENPH131CoopPlanelement.classList.remove("NaturalSciences");
     ENPH131CoopPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENPH131CoopPlan", "NaturalSciences"]);
      ENPH131CoopPlanflag=true
  }
 else {
      that.removeLine(getLine88());
      that.removeLine(getLine89());
      that.removeLine(getLine90());
      that.removeLine(getLine98());
     ENPH131CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     ENPH131CoopPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENPH131CoopPlan");
      ENPH131CoopPlanflag=false
  }
};
$scope.MATH101CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101CoopPlanTime <= 200) { 
        MATH101CoopPlanTime = currentTime;
        return;
    }
MATH101CoopPlanTime = currentTime;
  var MATH101CoopPlanelement = document.getElementById("MATH101CoopPlan");
 if (!MATH101CoopPlanflag) {
     if (MATH101CoopPlanelement.classList.contains("Math-highlighted")) { 
     MATH101CoopPlanelement.classList.remove("Math-highlighted");
     MATH101CoopPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine90());
      that.addLine(getLine91());
      that.addLine(getLine93());
      that.addLine(getLine95());
      that.addLine(getLine102());
      that.addLine(getLine106());
      that.addLine(getLine115());
     MATH101CoopPlanelement.classList.remove("Math");
     MATH101CoopPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH101CoopPlan", "Math"]);
      MATH101CoopPlanflag=true
  }
 else {
      that.removeLine(getLine90());
      that.removeLine(getLine91());
      that.removeLine(getLine93());
      that.removeLine(getLine95());
      that.removeLine(getLine102());
      that.removeLine(getLine106());
      that.removeLine(getLine115());
     MATH101CoopPlanelement.classList.remove("Math-highlighted");
     MATH101CoopPlanelement.classList.add("Math");
     that.removeFromClicked("MATH101CoopPlan");
      MATH101CoopPlanflag=false
  }
};
$scope.MATH102CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102CoopPlanTime <= 200) { 
        MATH102CoopPlanTime = currentTime;
        return;
    }
MATH102CoopPlanTime = currentTime;
  var MATH102CoopPlanelement = document.getElementById("MATH102CoopPlan");
 if (!MATH102CoopPlanflag) {
     if (MATH102CoopPlanelement.classList.contains("Math-highlighted")) { 
     MATH102CoopPlanelement.classList.remove("Math-highlighted");
     MATH102CoopPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine92());
      that.addLine(getLine96());
     MATH102CoopPlanelement.classList.remove("Math");
     MATH102CoopPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH102CoopPlan", "Math"]);
      MATH102CoopPlanflag=true
  }
 else {
      that.removeLine(getLine92());
      that.removeLine(getLine96());
     MATH102CoopPlanelement.classList.remove("Math-highlighted");
     MATH102CoopPlanelement.classList.add("Math");
     that.removeFromClicked("MATH102CoopPlan");
      MATH102CoopPlanflag=false
  }
};
$scope.CHE243CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243CoopPlanTime <= 200) { 
        CHE243CoopPlanTime = currentTime;
        return;
    }
CHE243CoopPlanTime = currentTime;
  var CHE243CoopPlanelement = document.getElementById("CHE243CoopPlan");
 if (!CHE243CoopPlanflag) {
     if (CHE243CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     CHE243CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE243CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine93());
      that.addLine(getLine97());
     CHE243CoopPlanelement.classList.remove("EngineeringSciences");
     CHE243CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CHE243CoopPlan", "EngineeringSciences"]);
      CHE243CoopPlanflag=true
  }
 else {
      that.removeLine(getLine93());
      that.removeLine(getLine97());
     CHE243CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE243CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CHE243CoopPlan");
      CHE243CoopPlanflag=false
  }
};
$scope.EAS210CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - EAS210CoopPlanTime <= 200) { 
        EAS210CoopPlanTime = currentTime;
        return;
    }
EAS210CoopPlanTime = currentTime;
  var EAS210CoopPlanelement = document.getElementById("EAS210CoopPlan");
 if (!EAS210CoopPlanflag) {
     if (EAS210CoopPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     EAS210CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     EAS210CoopPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine110());
     EAS210CoopPlanelement.classList.remove("NaturalSciences");
     EAS210CoopPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["EAS210CoopPlan", "NaturalSciences"]);
      EAS210CoopPlanflag=true
  }
 else {
      that.removeLine(getLine110());
     EAS210CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     EAS210CoopPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("EAS210CoopPlan");
      EAS210CoopPlanflag=false
  }
};
$scope.ECE209CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE209CoopPlanTime <= 200) { 
        ECE209CoopPlanTime = currentTime;
        return;
    }
ECE209CoopPlanTime = currentTime;
  var ECE209CoopPlanelement = document.getElementById("ECE209CoopPlan");
 if (!ECE209CoopPlanflag) {
     if (ECE209CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE209CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE209CoopPlanelement.classList.add("EngineeringSciences");
      return;
}     ECE209CoopPlanelement.classList.remove("EngineeringSciences");
     ECE209CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE209CoopPlan", "EngineeringSciences"]);
      ECE209CoopPlanflag=true
  }
 else {
     ECE209CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     ECE209CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE209CoopPlan");
      ECE209CoopPlanflag=false
  }
};
$scope.ENGG299CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299CoopPlanTime <= 200) { 
        ENGG299CoopPlanTime = currentTime;
        return;
    }
ENGG299CoopPlanTime = currentTime;
  var ENGG299CoopPlanelement = document.getElementById("ENGG299CoopPlan");
 if (!ENGG299CoopPlanflag) {
     if (ENGG299CoopPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG299CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG299CoopPlanelement.classList.add("EngineeringProfession");
      return;
}      that.addLine(getLine107());
     ENGG299CoopPlanelement.classList.remove("EngineeringProfession");
     ENGG299CoopPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG299CoopPlan", "EngineeringProfession"]);
      ENGG299CoopPlanflag=true
  }
 else {
      that.removeLine(getLine107());
     ENGG299CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG299CoopPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG299CoopPlan");
      ENGG299CoopPlanflag=false
  }
};
$scope.MATE202CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE202CoopPlanTime <= 200) { 
        MATE202CoopPlanTime = currentTime;
        return;
    }
MATE202CoopPlanTime = currentTime;
  var MATE202CoopPlanelement = document.getElementById("MATE202CoopPlan");
 if (!MATE202CoopPlanflag) {
     if (MATE202CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     MATE202CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     MATE202CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine94());
     MATE202CoopPlanelement.classList.remove("EngineeringSciences");
     MATE202CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MATE202CoopPlan", "EngineeringSciences"]);
      MATE202CoopPlanflag=true
  }
 else {
      that.removeLine(getLine94());
     MATE202CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     MATE202CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MATE202CoopPlan");
      MATE202CoopPlanflag=false
  }
};
$scope.MATH209CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209CoopPlanTime <= 200) { 
        MATH209CoopPlanTime = currentTime;
        return;
    }
MATH209CoopPlanTime = currentTime;
  var MATH209CoopPlanelement = document.getElementById("MATH209CoopPlan");
 if (!MATH209CoopPlanflag) {
     if (MATH209CoopPlanelement.classList.contains("Math-highlighted")) { 
     MATH209CoopPlanelement.classList.remove("Math-highlighted");
     MATH209CoopPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine95());
      that.addLine(getLine96());
      that.addLine(getLine99());
      that.addLine(getLine103());
     MATH209CoopPlanelement.classList.remove("Math");
     MATH209CoopPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH209CoopPlan", "Math"]);
      MATH209CoopPlanflag=true
  }
 else {
      that.removeLine(getLine95());
      that.removeLine(getLine96());
      that.removeLine(getLine99());
      that.removeLine(getLine103());
     MATH209CoopPlanelement.classList.remove("Math-highlighted");
     MATH209CoopPlanelement.classList.add("Math");
     that.removeFromClicked("MATH209CoopPlan");
      MATH209CoopPlanflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlan0Time <= 200) { 
        ComplementaryElectiveCoopPlan0Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlan0Time = currentTime;
  var ComplementaryElectiveCoopPlan0element = document.getElementById("ComplementaryElectiveCoopPlan0");
 if (!ComplementaryElectiveCoopPlan0flag) {
     if (ComplementaryElectiveCoopPlan0element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveCoopPlan0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan0element.classList.add("COMP");
      return;
}     ComplementaryElectiveCoopPlan0element.classList.remove("COMP");
     ComplementaryElectiveCoopPlan0element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveCoopPlan0", "COMP"]);
      ComplementaryElectiveCoopPlan0flag=true
  }
 else {
     ComplementaryElectiveCoopPlan0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan0element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveCoopPlan0");
      ComplementaryElectiveCoopPlan0flag=false
  }
};
$scope.CHE312CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE312CoopPlanTime <= 200) { 
        CHE312CoopPlanTime = currentTime;
        return;
    }
CHE312CoopPlanTime = currentTime;
  var CHE312CoopPlanelement = document.getElementById("CHE312CoopPlan");
 if (!CHE312CoopPlanflag) {
     if (CHE312CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     CHE312CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE312CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine97());
      that.addLine(getLine98());
      that.addLine(getLine99());
      that.addLine(getLine100());
      that.addLine(getLine112());
      that.addLine(getLine116());
      that.addLine(getLine122());
     CHE312CoopPlanelement.classList.remove("EngineeringSciences");
     CHE312CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CHE312CoopPlan", "EngineeringSciences"]);
      CHE312CoopPlanflag=true
  }
 else {
      that.removeLine(getLine97());
      that.removeLine(getLine98());
      that.removeLine(getLine99());
      that.removeLine(getLine100());
      that.removeLine(getLine112());
      that.removeLine(getLine116());
      that.removeLine(getLine122());
     CHE312CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     CHE312CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CHE312CoopPlan");
      CHE312CoopPlanflag=false
  }
};
$scope.CIVE270CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270CoopPlanTime <= 200) { 
        CIVE270CoopPlanTime = currentTime;
        return;
    }
CIVE270CoopPlanTime = currentTime;
  var CIVE270CoopPlanelement = document.getElementById("CIVE270CoopPlan");
 if (!CIVE270CoopPlanflag) {
     if (CIVE270CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     CIVE270CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine101());
      that.addLine(getLine102());
      that.addLine(getLine117());
     CIVE270CoopPlanelement.classList.remove("EngineeringSciences");
     CIVE270CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CIVE270CoopPlan", "EngineeringSciences"]);
      CIVE270CoopPlanflag=true
  }
 else {
      that.removeLine(getLine101());
      that.removeLine(getLine102());
      that.removeLine(getLine117());
     CIVE270CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CIVE270CoopPlan");
      CIVE270CoopPlanflag=false
  }
};
$scope.MATH201CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201CoopPlanTime <= 200) { 
        MATH201CoopPlanTime = currentTime;
        return;
    }
MATH201CoopPlanTime = currentTime;
  var MATH201CoopPlanelement = document.getElementById("MATH201CoopPlan");
 if (!MATH201CoopPlanflag) {
     if (MATH201CoopPlanelement.classList.contains("Math-highlighted")) { 
     MATH201CoopPlanelement.classList.remove("Math-highlighted");
     MATH201CoopPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine100());
      that.addLine(getLine103());
      that.addLine(getLine121());
     MATH201CoopPlanelement.classList.remove("Math");
     MATH201CoopPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH201CoopPlan", "Math"]);
      MATH201CoopPlanflag=true
  }
 else {
      that.removeLine(getLine100());
      that.removeLine(getLine103());
      that.removeLine(getLine121());
     MATH201CoopPlanelement.classList.remove("Math-highlighted");
     MATH201CoopPlanelement.classList.add("Math");
     that.removeFromClicked("MATH201CoopPlan");
      MATH201CoopPlanflag=false
  }
};
$scope.PETE275CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE275CoopPlanTime <= 200) { 
        PETE275CoopPlanTime = currentTime;
        return;
    }
PETE275CoopPlanTime = currentTime;
  var PETE275CoopPlanelement = document.getElementById("PETE275CoopPlan");
 if (!PETE275CoopPlanflag) {
     if (PETE275CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE275CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE275CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine104());
      that.addLine(getLine111());
      that.addLine(getLine118());
      that.addLine(getLine124());
     PETE275CoopPlanelement.classList.remove("EngineeringSciences");
     PETE275CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE275CoopPlan", "EngineeringSciences"]);
      PETE275CoopPlanflag=true
  }
 else {
      that.removeLine(getLine104());
      that.removeLine(getLine111());
      that.removeLine(getLine118());
      that.removeLine(getLine124());
     PETE275CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE275CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE275CoopPlan");
      PETE275CoopPlanflag=false
  }
};
$scope.STAT235CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - STAT235CoopPlanTime <= 200) { 
        STAT235CoopPlanTime = currentTime;
        return;
    }
STAT235CoopPlanTime = currentTime;
  var STAT235CoopPlanelement = document.getElementById("STAT235CoopPlan");
 if (!STAT235CoopPlanflag) {
     if (STAT235CoopPlanelement.classList.contains("Math-highlighted")) { 
     STAT235CoopPlanelement.classList.remove("Math-highlighted");
     STAT235CoopPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine105());
      that.addLine(getLine106());
     STAT235CoopPlanelement.classList.remove("Math");
     STAT235CoopPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["STAT235CoopPlan", "Math"]);
      STAT235CoopPlanflag=true
  }
 else {
      that.removeLine(getLine105());
      that.removeLine(getLine106());
     STAT235CoopPlanelement.classList.remove("Math-highlighted");
     STAT235CoopPlanelement.classList.add("Math");
     that.removeFromClicked("STAT235CoopPlan");
      STAT235CoopPlanflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlan1Time <= 200) { 
        ComplementaryElectiveCoopPlan1Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlan1Time = currentTime;
  var ComplementaryElectiveCoopPlan1element = document.getElementById("ComplementaryElectiveCoopPlan1");
 if (!ComplementaryElectiveCoopPlan1flag) {
     if (ComplementaryElectiveCoopPlan1element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveCoopPlan1element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan1element.classList.add("COMP");
      return;
}     ComplementaryElectiveCoopPlan1element.classList.remove("COMP");
     ComplementaryElectiveCoopPlan1element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveCoopPlan1", "COMP"]);
      ComplementaryElectiveCoopPlan1flag=true
  }
 else {
     ComplementaryElectiveCoopPlan1element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan1element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveCoopPlan1");
      ComplementaryElectiveCoopPlan1flag=false
  }
};
$scope.WKEXP901CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP901CoopPlanTime <= 200) { 
        WKEXP901CoopPlanTime = currentTime;
        return;
    }
WKEXP901CoopPlanTime = currentTime;
  var WKEXP901CoopPlanelement = document.getElementById("WKEXP901CoopPlan");
 if (!WKEXP901CoopPlanflag) {
     if (WKEXP901CoopPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     WKEXP901CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP901CoopPlanelement.classList.add("EngineeringProfession");
      return;
}      that.addLine(getLine107());
      that.addLine(getLine108());
     WKEXP901CoopPlanelement.classList.remove("EngineeringProfession");
     WKEXP901CoopPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["WKEXP901CoopPlan", "EngineeringProfession"]);
      WKEXP901CoopPlanflag=true
  }
 else {
      that.removeLine(getLine107());
      that.removeLine(getLine108());
     WKEXP901CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP901CoopPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("WKEXP901CoopPlan");
      WKEXP901CoopPlanflag=false
  }
};
$scope.WKEXP902CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP902CoopPlanTime <= 200) { 
        WKEXP902CoopPlanTime = currentTime;
        return;
    }
WKEXP902CoopPlanTime = currentTime;
  var WKEXP902CoopPlanelement = document.getElementById("WKEXP902CoopPlan");
 if (!WKEXP902CoopPlanflag) {
     if (WKEXP902CoopPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     WKEXP902CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP902CoopPlanelement.classList.add("EngineeringProfession");
      return;
}      that.addLine(getLine108());
      that.addLine(getLine113());
     WKEXP902CoopPlanelement.classList.remove("EngineeringProfession");
     WKEXP902CoopPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["WKEXP902CoopPlan", "EngineeringProfession"]);
      WKEXP902CoopPlanflag=true
  }
 else {
      that.removeLine(getLine108());
      that.removeLine(getLine113());
     WKEXP902CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP902CoopPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("WKEXP902CoopPlan");
      WKEXP902CoopPlanflag=false
  }
};
$scope.CHE374CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE374CoopPlanTime <= 200) { 
        CHE374CoopPlanTime = currentTime;
        return;
    }
CHE374CoopPlanTime = currentTime;
  var CHE374CoopPlanelement = document.getElementById("CHE374CoopPlan");
 if (!CHE374CoopPlanflag) {
     if (CHE374CoopPlanelement.classList.contains("Math-highlighted")) { 
     CHE374CoopPlanelement.classList.remove("Math-highlighted");
     CHE374CoopPlanelement.classList.add("Math");
      return;
}      that.addLine(getLine109());
      that.addLine(getLine123());
      that.addLine(getLine131());
     CHE374CoopPlanelement.classList.remove("Math");
     CHE374CoopPlanelement.classList.add("Math-highlighted");
     that.addToClicked(["CHE374CoopPlan", "Math"]);
      CHE374CoopPlanflag=true
  }
 else {
      that.removeLine(getLine109());
      that.removeLine(getLine123());
      that.removeLine(getLine131());
     CHE374CoopPlanelement.classList.remove("Math-highlighted");
     CHE374CoopPlanelement.classList.add("Math");
     that.removeFromClicked("CHE374CoopPlan");
      CHE374CoopPlanflag=false
  }
};
$scope.EAS222CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - EAS222CoopPlanTime <= 200) { 
        EAS222CoopPlanTime = currentTime;
        return;
    }
EAS222CoopPlanTime = currentTime;
  var EAS222CoopPlanelement = document.getElementById("EAS222CoopPlan");
 if (!EAS222CoopPlanflag) {
     if (EAS222CoopPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     EAS222CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     EAS222CoopPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine110());
     EAS222CoopPlanelement.classList.remove("NaturalSciences");
     EAS222CoopPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["EAS222CoopPlan", "NaturalSciences"]);
      EAS222CoopPlanflag=true
  }
 else {
      that.removeLine(getLine110());
     EAS222CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     EAS222CoopPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("EAS222CoopPlan");
      EAS222CoopPlanflag=false
  }
};
$scope.PETE365CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE365CoopPlanTime <= 200) { 
        PETE365CoopPlanTime = currentTime;
        return;
    }
PETE365CoopPlanTime = currentTime;
  var PETE365CoopPlanelement = document.getElementById("PETE365CoopPlan");
 if (!PETE365CoopPlanflag) {
     if (PETE365CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE365CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE365CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine111());
     PETE365CoopPlanelement.classList.remove("EngineeringSciences");
     PETE365CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE365CoopPlan", "EngineeringSciences"]);
      PETE365CoopPlanflag=true
  }
 else {
      that.removeLine(getLine111());
     PETE365CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE365CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE365CoopPlan");
      PETE365CoopPlanflag=false
  }
};
$scope.PETE366CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE366CoopPlanTime <= 200) { 
        PETE366CoopPlanTime = currentTime;
        return;
    }
PETE366CoopPlanTime = currentTime;
  var PETE366CoopPlanelement = document.getElementById("PETE366CoopPlan");
 if (!PETE366CoopPlanflag) {
     if (PETE366CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE366CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE366CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine112());
     PETE366CoopPlanelement.classList.remove("EngineeringSciences");
     PETE366CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE366CoopPlan", "EngineeringSciences"]);
      PETE366CoopPlanflag=true
  }
 else {
      that.removeLine(getLine112());
     PETE366CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE366CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE366CoopPlan");
      PETE366CoopPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan0Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan0Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan0element = document.getElementById("ProgramTechnicalElectiveCoopPlan0");
 if (!ProgramTechnicalElectiveCoopPlan0flag) {
     if (ProgramTechnicalElectiveCoopPlan0element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan0element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan0element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan0element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan0", "PROG"]);
      ProgramTechnicalElectiveCoopPlan0flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan0element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan0");
      ProgramTechnicalElectiveCoopPlan0flag=false
  }
};
$scope.WKEXP903CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP903CoopPlanTime <= 200) { 
        WKEXP903CoopPlanTime = currentTime;
        return;
    }
WKEXP903CoopPlanTime = currentTime;
  var WKEXP903CoopPlanelement = document.getElementById("WKEXP903CoopPlan");
 if (!WKEXP903CoopPlanflag) {
     if (WKEXP903CoopPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     WKEXP903CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP903CoopPlanelement.classList.add("EngineeringProfession");
      return;
}      that.addLine(getLine113());
      that.addLine(getLine119());
     WKEXP903CoopPlanelement.classList.remove("EngineeringProfession");
     WKEXP903CoopPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["WKEXP903CoopPlan", "EngineeringProfession"]);
      WKEXP903CoopPlanflag=true
  }
 else {
      that.removeLine(getLine113());
      that.removeLine(getLine119());
     WKEXP903CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP903CoopPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("WKEXP903CoopPlan");
      WKEXP903CoopPlanflag=false
  }
};
$scope.CHEM371CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM371CoopPlanTime <= 200) { 
        CHEM371CoopPlanTime = currentTime;
        return;
    }
CHEM371CoopPlanTime = currentTime;
  var CHEM371CoopPlanelement = document.getElementById("CHEM371CoopPlan");
 if (!CHEM371CoopPlanflag) {
     if (CHEM371CoopPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM371CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM371CoopPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine114());
      that.addLine(getLine115());
     CHEM371CoopPlanelement.classList.remove("NaturalSciences");
     CHEM371CoopPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM371CoopPlan", "NaturalSciences"]);
      CHEM371CoopPlanflag=true
  }
 else {
      that.removeLine(getLine114());
      that.removeLine(getLine115());
     CHEM371CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     CHEM371CoopPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM371CoopPlan");
      CHEM371CoopPlanflag=false
  }
};
$scope.ENGM310CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310CoopPlanTime <= 200) { 
        ENGM310CoopPlanTime = currentTime;
        return;
    }
ENGM310CoopPlanTime = currentTime;
  var ENGM310CoopPlanelement = document.getElementById("ENGM310CoopPlan");
 if (!ENGM310CoopPlanflag) {
     if (ENGM310CoopPlanelement.classList.contains("Other-highlighted")) { 
     ENGM310CoopPlanelement.classList.remove("Other-highlighted");
     ENGM310CoopPlanelement.classList.add("Other");
      return;
}      that.addLine(getLine127());
     ENGM310CoopPlanelement.classList.remove("Other");
     ENGM310CoopPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM310CoopPlan", "Other"]);
      ENGM310CoopPlanflag=true
  }
 else {
      that.removeLine(getLine127());
     ENGM310CoopPlanelement.classList.remove("Other-highlighted");
     ENGM310CoopPlanelement.classList.add("Other");
     that.removeFromClicked("ENGM310CoopPlan");
      ENGM310CoopPlanflag=false
  }
};
$scope.ENGM401CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401CoopPlanTime <= 200) { 
        ENGM401CoopPlanTime = currentTime;
        return;
    }
ENGM401CoopPlanTime = currentTime;
  var ENGM401CoopPlanelement = document.getElementById("ENGM401CoopPlan");
 if (!ENGM401CoopPlanflag) {
     if (ENGM401CoopPlanelement.classList.contains("Other-highlighted")) { 
     ENGM401CoopPlanelement.classList.remove("Other-highlighted");
     ENGM401CoopPlanelement.classList.add("Other");
      return;
}      that.addLine(getLine128());
     ENGM401CoopPlanelement.classList.remove("Other");
     ENGM401CoopPlanelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401CoopPlan", "Other"]);
      ENGM401CoopPlanflag=true
  }
 else {
      that.removeLine(getLine128());
     ENGM401CoopPlanelement.classList.remove("Other-highlighted");
     ENGM401CoopPlanelement.classList.add("Other");
     that.removeFromClicked("ENGM401CoopPlan");
      ENGM401CoopPlanflag=false
  }
};
$scope.PETE364CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE364CoopPlanTime <= 200) { 
        PETE364CoopPlanTime = currentTime;
        return;
    }
PETE364CoopPlanTime = currentTime;
  var PETE364CoopPlanelement = document.getElementById("PETE364CoopPlan");
 if (!PETE364CoopPlanflag) {
     if (PETE364CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE364CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE364CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine116());
      that.addLine(getLine117());
      that.addLine(getLine126());
     PETE364CoopPlanelement.classList.remove("EngineeringSciences");
     PETE364CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE364CoopPlan", "EngineeringSciences"]);
      PETE364CoopPlanflag=true
  }
 else {
      that.removeLine(getLine116());
      that.removeLine(getLine117());
      that.removeLine(getLine126());
     PETE364CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE364CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE364CoopPlan");
      PETE364CoopPlanflag=false
  }
};
$scope.PETE373CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE373CoopPlanTime <= 200) { 
        PETE373CoopPlanTime = currentTime;
        return;
    }
PETE373CoopPlanTime = currentTime;
  var PETE373CoopPlanelement = document.getElementById("PETE373CoopPlan");
 if (!PETE373CoopPlanflag) {
     if (PETE373CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE373CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE373CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine118());
      that.addLine(getLine125());
      that.addLine(getLine129());
      that.addLine(getLine130());
      that.addLine(getLine132());
     PETE373CoopPlanelement.classList.remove("EngineeringSciences");
     PETE373CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE373CoopPlan", "EngineeringSciences"]);
      PETE373CoopPlanflag=true
  }
 else {
      that.removeLine(getLine118());
      that.removeLine(getLine125());
      that.removeLine(getLine129());
      that.removeLine(getLine130());
      that.removeLine(getLine132());
     PETE373CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE373CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE373CoopPlan");
      PETE373CoopPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan1Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan1Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan1element = document.getElementById("ProgramTechnicalElectiveCoopPlan1");
 if (!ProgramTechnicalElectiveCoopPlan1flag) {
     if (ProgramTechnicalElectiveCoopPlan1element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlan1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan1element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlan1element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlan1element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlan1", "PROG"]);
      ProgramTechnicalElectiveCoopPlan1flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlan1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlan1element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlan1");
      ProgramTechnicalElectiveCoopPlan1flag=false
  }
};
$scope.ComplementaryElectiveCoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlan2Time <= 200) { 
        ComplementaryElectiveCoopPlan2Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlan2Time = currentTime;
  var ComplementaryElectiveCoopPlan2element = document.getElementById("ComplementaryElectiveCoopPlan2");
 if (!ComplementaryElectiveCoopPlan2flag) {
     if (ComplementaryElectiveCoopPlan2element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveCoopPlan2element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan2element.classList.add("COMP");
      return;
}     ComplementaryElectiveCoopPlan2element.classList.remove("COMP");
     ComplementaryElectiveCoopPlan2element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveCoopPlan2", "COMP"]);
      ComplementaryElectiveCoopPlan2flag=true
  }
 else {
     ComplementaryElectiveCoopPlan2element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlan2element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveCoopPlan2");
      ComplementaryElectiveCoopPlan2flag=false
  }
};
$scope.WKEXP904CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP904CoopPlanTime <= 200) { 
        WKEXP904CoopPlanTime = currentTime;
        return;
    }
WKEXP904CoopPlanTime = currentTime;
  var WKEXP904CoopPlanelement = document.getElementById("WKEXP904CoopPlan");
 if (!WKEXP904CoopPlanflag) {
     if (WKEXP904CoopPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     WKEXP904CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP904CoopPlanelement.classList.add("EngineeringProfession");
      return;
}      that.addLine(getLine119());
      that.addLine(getLine120());
     WKEXP904CoopPlanelement.classList.remove("EngineeringProfession");
     WKEXP904CoopPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["WKEXP904CoopPlan", "EngineeringProfession"]);
      WKEXP904CoopPlanflag=true
  }
 else {
      that.removeLine(getLine119());
      that.removeLine(getLine120());
     WKEXP904CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP904CoopPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("WKEXP904CoopPlan");
      WKEXP904CoopPlanflag=false
  }
};
$scope.WKEXP905CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP905CoopPlanTime <= 200) { 
        WKEXP905CoopPlanTime = currentTime;
        return;
    }
WKEXP905CoopPlanTime = currentTime;
  var WKEXP905CoopPlanelement = document.getElementById("WKEXP905CoopPlan");
 if (!WKEXP905CoopPlanflag) {
     if (WKEXP905CoopPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     WKEXP905CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP905CoopPlanelement.classList.add("EngineeringProfession");
      return;
}      that.addLine(getLine120());
     WKEXP905CoopPlanelement.classList.remove("EngineeringProfession");
     WKEXP905CoopPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["WKEXP905CoopPlan", "EngineeringProfession"]);
      WKEXP905CoopPlanflag=true
  }
 else {
      that.removeLine(getLine120());
     WKEXP905CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP905CoopPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("WKEXP905CoopPlan");
      WKEXP905CoopPlanflag=false
  }
};
$scope.CHE314CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE314CoopPlanTime <= 200) { 
        CHE314CoopPlanTime = currentTime;
        return;
    }
CHE314CoopPlanTime = currentTime;
  var CHE314CoopPlanelement = document.getElementById("CHE314CoopPlan");
 if (!CHE314CoopPlanflag) {
     if (CHE314CoopPlanelement.classList.contains("NaturalSciences-highlighted")) { 
     CHE314CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     CHE314CoopPlanelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine121());
      that.addLine(getLine122());
      that.addLine(getLine123());
     CHE314CoopPlanelement.classList.remove("NaturalSciences");
     CHE314CoopPlanelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHE314CoopPlan", "NaturalSciences"]);
      CHE314CoopPlanflag=true
  }
 else {
      that.removeLine(getLine121());
      that.removeLine(getLine122());
      that.removeLine(getLine123());
     CHE314CoopPlanelement.classList.remove("NaturalSciences-highlighted");
     CHE314CoopPlanelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHE314CoopPlan");
      CHE314CoopPlanflag=false
  }
};
$scope.ENGG404CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404CoopPlanTime <= 200) { 
        ENGG404CoopPlanTime = currentTime;
        return;
    }
ENGG404CoopPlanTime = currentTime;
  var ENGG404CoopPlanelement = document.getElementById("ENGG404CoopPlan");
 if (!ENGG404CoopPlanflag) {
     if (ENGG404CoopPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG404CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404CoopPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG404CoopPlanelement.classList.remove("EngineeringProfession");
     ENGG404CoopPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG404CoopPlan", "EngineeringProfession"]);
      ENGG404CoopPlanflag=true
  }
 else {
     ENGG404CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404CoopPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG404CoopPlan");
      ENGG404CoopPlanflag=false
  }
};
$scope.PETE444CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE444CoopPlanTime <= 200) { 
        PETE444CoopPlanTime = currentTime;
        return;
    }
PETE444CoopPlanTime = currentTime;
  var PETE444CoopPlanelement = document.getElementById("PETE444CoopPlan");
 if (!PETE444CoopPlanflag) {
     if (PETE444CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE444CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE444CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine124());
     PETE444CoopPlanelement.classList.remove("EngineeringSciences");
     PETE444CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE444CoopPlan", "EngineeringSciences"]);
      PETE444CoopPlanflag=true
  }
 else {
      that.removeLine(getLine124());
     PETE444CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE444CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE444CoopPlan");
      PETE444CoopPlanflag=false
  }
};
$scope.PETE475CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE475CoopPlanTime <= 200) { 
        PETE475CoopPlanTime = currentTime;
        return;
    }
PETE475CoopPlanTime = currentTime;
  var PETE475CoopPlanelement = document.getElementById("PETE475CoopPlan");
 if (!PETE475CoopPlanflag) {
     if (PETE475CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE475CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE475CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine125());
     PETE475CoopPlanelement.classList.remove("EngineeringSciences");
     PETE475CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE475CoopPlan", "EngineeringSciences"]);
      PETE475CoopPlanflag=true
  }
 else {
      that.removeLine(getLine125());
     PETE475CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE475CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE475CoopPlan");
      PETE475CoopPlanflag=false
  }
};
$scope.PETE476CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE476CoopPlanTime <= 200) { 
        PETE476CoopPlanTime = currentTime;
        return;
    }
PETE476CoopPlanTime = currentTime;
  var PETE476CoopPlanelement = document.getElementById("PETE476CoopPlan");
 if (!PETE476CoopPlanflag) {
     if (PETE476CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE476CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE476CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine126());
     PETE476CoopPlanelement.classList.remove("EngineeringSciences");
     PETE476CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE476CoopPlan", "EngineeringSciences"]);
      PETE476CoopPlanflag=true
  }
 else {
      that.removeLine(getLine126());
     PETE476CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE476CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE476CoopPlan");
      PETE476CoopPlanflag=false
  }
};
$scope.PETE484CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE484CoopPlanTime <= 200) { 
        PETE484CoopPlanTime = currentTime;
        return;
    }
PETE484CoopPlanTime = currentTime;
  var PETE484CoopPlanelement = document.getElementById("PETE484CoopPlan");
 if (!PETE484CoopPlanflag) {
     if (PETE484CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE484CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE484CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine127());
      that.addLine(getLine128());
      that.addLine(getLine133());
     PETE484CoopPlanelement.classList.remove("EngineeringSciences");
     PETE484CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE484CoopPlan", "EngineeringSciences"]);
      PETE484CoopPlanflag=true
  }
 else {
      that.removeLine(getLine127());
      that.removeLine(getLine128());
      that.removeLine(getLine133());
     PETE484CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE484CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE484CoopPlan");
      PETE484CoopPlanflag=false
  }
};
$scope.ENGG400CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400CoopPlanTime <= 200) { 
        ENGG400CoopPlanTime = currentTime;
        return;
    }
ENGG400CoopPlanTime = currentTime;
  var ENGG400CoopPlanelement = document.getElementById("ENGG400CoopPlan");
 if (!ENGG400CoopPlanflag) {
     if (ENGG400CoopPlanelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG400CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400CoopPlanelement.classList.add("EngineeringProfession");
      return;
}     ENGG400CoopPlanelement.classList.remove("EngineeringProfession");
     ENGG400CoopPlanelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG400CoopPlan", "EngineeringProfession"]);
      ENGG400CoopPlanflag=true
  }
 else {
     ENGG400CoopPlanelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400CoopPlanelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG400CoopPlan");
      ENGG400CoopPlanflag=false
  }
};
$scope.PETE471CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE471CoopPlanTime <= 200) { 
        PETE471CoopPlanTime = currentTime;
        return;
    }
PETE471CoopPlanTime = currentTime;
  var PETE471CoopPlanelement = document.getElementById("PETE471CoopPlan");
 if (!PETE471CoopPlanflag) {
     if (PETE471CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE471CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE471CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine129());
     PETE471CoopPlanelement.classList.remove("EngineeringSciences");
     PETE471CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE471CoopPlan", "EngineeringSciences"]);
      PETE471CoopPlanflag=true
  }
 else {
      that.removeLine(getLine129());
     PETE471CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE471CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE471CoopPlan");
      PETE471CoopPlanflag=false
  }
};
$scope.PETE477CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE477CoopPlanTime <= 200) { 
        PETE477CoopPlanTime = currentTime;
        return;
    }
PETE477CoopPlanTime = currentTime;
  var PETE477CoopPlanelement = document.getElementById("PETE477CoopPlan");
 if (!PETE477CoopPlanflag) {
     if (PETE477CoopPlanelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE477CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE477CoopPlanelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine130());
      that.addLine(getLine131());
     PETE477CoopPlanelement.classList.remove("EngineeringSciences");
     PETE477CoopPlanelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE477CoopPlan", "EngineeringSciences"]);
      PETE477CoopPlanflag=true
  }
 else {
      that.removeLine(getLine130());
      that.removeLine(getLine131());
     PETE477CoopPlanelement.classList.remove("EngineeringSciences-highlighted");
     PETE477CoopPlanelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE477CoopPlan");
      PETE477CoopPlanflag=false
  }
};
$scope.PETE478CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE478CoopPlanTime <= 200) { 
        PETE478CoopPlanTime = currentTime;
        return;
    }
PETE478CoopPlanTime = currentTime;
  var PETE478CoopPlanelement = document.getElementById("PETE478CoopPlan");
 if (!PETE478CoopPlanflag) {
     if (PETE478CoopPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     PETE478CoopPlanelement.classList.remove("EngineeringDesign-highlighted");
     PETE478CoopPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine132());
     PETE478CoopPlanelement.classList.remove("EngineeringDesign");
     PETE478CoopPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["PETE478CoopPlan", "EngineeringDesign"]);
      PETE478CoopPlanflag=true
  }
 else {
      that.removeLine(getLine132());
     PETE478CoopPlanelement.classList.remove("EngineeringDesign-highlighted");
     PETE478CoopPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("PETE478CoopPlan");
      PETE478CoopPlanflag=false
  }
};
$scope.PETE496CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE496CoopPlanTime <= 200) { 
        PETE496CoopPlanTime = currentTime;
        return;
    }
PETE496CoopPlanTime = currentTime;
  var PETE496CoopPlanelement = document.getElementById("PETE496CoopPlan");
 if (!PETE496CoopPlanflag) {
     if (PETE496CoopPlanelement.classList.contains("EngineeringDesign-highlighted")) { 
     PETE496CoopPlanelement.classList.remove("EngineeringDesign-highlighted");
     PETE496CoopPlanelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine133());
     PETE496CoopPlanelement.classList.remove("EngineeringDesign");
     PETE496CoopPlanelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["PETE496CoopPlan", "EngineeringDesign"]);
      PETE496CoopPlanflag=true
  }
 else {
      that.removeLine(getLine133());
     PETE496CoopPlanelement.classList.remove("EngineeringDesign-highlighted");
     PETE496CoopPlanelement.classList.add("EngineeringDesign");
     that.removeFromClicked("PETE496CoopPlan");
      PETE496CoopPlanflag=false
  }
};
$scope.ITSElectiveCoopPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveCoopPlan0Time <= 200) { 
        ITSElectiveCoopPlan0Time = currentTime;
        return;
    }
ITSElectiveCoopPlan0Time = currentTime;
  var ITSElectiveCoopPlan0element = document.getElementById("ITSElectiveCoopPlan0");
 if (!ITSElectiveCoopPlan0flag) {
     if (ITSElectiveCoopPlan0element.classList.contains("ITS-highlighted")) { 
     ITSElectiveCoopPlan0element.classList.remove("ITS-highlighted");
     ITSElectiveCoopPlan0element.classList.add("ITS");
      return;
}     ITSElectiveCoopPlan0element.classList.remove("ITS");
     ITSElectiveCoopPlan0element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveCoopPlan0", "ITS"]);
      ITSElectiveCoopPlan0flag=true
  }
 else {
     ITSElectiveCoopPlan0element.classList.remove("ITS-highlighted");
     ITSElectiveCoopPlan0element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveCoopPlan0");
      ITSElectiveCoopPlan0flag=false
  }
};
$scope.CHEM103CoopPlanRCListener = function () {
  var element = document.getElementById("CHEM103CoopPlandesc");
 if (!CHEM103CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103CoopPlanrflag=false
  }
};
$scope.ENGG100CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG100CoopPlandesc");
 if (!ENGG100CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100CoopPlanrflag=false
  }
};
$scope.ENGG130CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG130CoopPlandesc");
 if (!ENGG130CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130CoopPlanrflag=false
  }
};
$scope.ENGL199CoopPlanRCListener = function () {
  var element = document.getElementById("ENGL199CoopPlandesc");
 if (!ENGL199CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199CoopPlanrflag=false
  }
};
$scope.MATH100CoopPlanRCListener = function () {
  var element = document.getElementById("MATH100CoopPlandesc");
 if (!MATH100CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100CoopPlanrflag=false
  }
};
$scope.PHYS130CoopPlanRCListener = function () {
  var element = document.getElementById("PHYS130CoopPlandesc");
 if (!PHYS130CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130CoopPlanrflag=false
  }
};
$scope.CHEM105CoopPlanRCListener = function () {
  var element = document.getElementById("CHEM105CoopPlandesc");
 if (!CHEM105CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105CoopPlanrflag=false
  }
};
$scope.ENCMP100CoopPlanRCListener = function () {
  var element = document.getElementById("ENCMP100CoopPlandesc");
 if (!ENCMP100CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100CoopPlanrflag=false
  }
};
$scope.ENGG160CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG160CoopPlandesc");
 if (!ENGG160CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160CoopPlanrflag=false
  }
};
$scope.ENPH131CoopPlanRCListener = function () {
  var element = document.getElementById("ENPH131CoopPlandesc");
 if (!ENPH131CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131CoopPlanrflag=false
  }
};
$scope.MATH101CoopPlanRCListener = function () {
  var element = document.getElementById("MATH101CoopPlandesc");
 if (!MATH101CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101CoopPlanrflag=false
  }
};
$scope.MATH102CoopPlanRCListener = function () {
  var element = document.getElementById("MATH102CoopPlandesc");
 if (!MATH102CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102CoopPlanrflag=false
  }
};
$scope.CHE243CoopPlanRCListener = function () {
  var element = document.getElementById("CHE243CoopPlandesc");
 if (!CHE243CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243CoopPlanrflag=false
  }
};
$scope.EAS210CoopPlanRCListener = function () {
  var element = document.getElementById("EAS210CoopPlandesc");
 if (!EAS210CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      EAS210CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      EAS210CoopPlanrflag=false
  }
};
$scope.ECE209CoopPlanRCListener = function () {
  var element = document.getElementById("ECE209CoopPlandesc");
 if (!ECE209CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE209CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE209CoopPlanrflag=false
  }
};
$scope.ENGG299CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG299CoopPlandesc");
 if (!ENGG299CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299CoopPlanrflag=false
  }
};
$scope.MATE202CoopPlanRCListener = function () {
  var element = document.getElementById("MATE202CoopPlandesc");
 if (!MATE202CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE202CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE202CoopPlanrflag=false
  }
};
$scope.MATH209CoopPlanRCListener = function () {
  var element = document.getElementById("MATH209CoopPlandesc");
 if (!MATH209CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209CoopPlanrflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlan0desc");
 if (!ComplementaryElectiveCoopPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlan0rflag=false
  }
};
$scope.CHE312CoopPlanRCListener = function () {
  var element = document.getElementById("CHE312CoopPlandesc");
 if (!CHE312CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE312CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE312CoopPlanrflag=false
  }
};
$scope.CIVE270CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE270CoopPlandesc");
 if (!CIVE270CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270CoopPlanrflag=false
  }
};
$scope.MATH201CoopPlanRCListener = function () {
  var element = document.getElementById("MATH201CoopPlandesc");
 if (!MATH201CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201CoopPlanrflag=false
  }
};
$scope.PETE275CoopPlanRCListener = function () {
  var element = document.getElementById("PETE275CoopPlandesc");
 if (!PETE275CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE275CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE275CoopPlanrflag=false
  }
};
$scope.STAT235CoopPlanRCListener = function () {
  var element = document.getElementById("STAT235CoopPlandesc");
 if (!STAT235CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      STAT235CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      STAT235CoopPlanrflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan1RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlan1desc");
 if (!ComplementaryElectiveCoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlan1rflag=false
  }
};
$scope.WKEXP901CoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP901CoopPlandesc");
 if (!WKEXP901CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP901CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP901CoopPlanrflag=false
  }
};
$scope.WKEXP902CoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP902CoopPlandesc");
 if (!WKEXP902CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP902CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP902CoopPlanrflag=false
  }
};
$scope.CHE374CoopPlanRCListener = function () {
  var element = document.getElementById("CHE374CoopPlandesc");
 if (!CHE374CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE374CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE374CoopPlanrflag=false
  }
};
$scope.EAS222CoopPlanRCListener = function () {
  var element = document.getElementById("EAS222CoopPlandesc");
 if (!EAS222CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      EAS222CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      EAS222CoopPlanrflag=false
  }
};
$scope.PETE365CoopPlanRCListener = function () {
  var element = document.getElementById("PETE365CoopPlandesc");
 if (!PETE365CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE365CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE365CoopPlanrflag=false
  }
};
$scope.PETE366CoopPlanRCListener = function () {
  var element = document.getElementById("PETE366CoopPlandesc");
 if (!PETE366CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE366CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE366CoopPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan0desc");
 if (!ProgramTechnicalElectiveCoopPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan0rflag=false
  }
};
$scope.WKEXP903CoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP903CoopPlandesc");
 if (!WKEXP903CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP903CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP903CoopPlanrflag=false
  }
};
$scope.CHEM371CoopPlanRCListener = function () {
  var element = document.getElementById("CHEM371CoopPlandesc");
 if (!CHEM371CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM371CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM371CoopPlanrflag=false
  }
};
$scope.ENGM310CoopPlanRCListener = function () {
  var element = document.getElementById("ENGM310CoopPlandesc");
 if (!ENGM310CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310CoopPlanrflag=false
  }
};
$scope.ENGM401CoopPlanRCListener = function () {
  var element = document.getElementById("ENGM401CoopPlandesc");
 if (!ENGM401CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401CoopPlanrflag=false
  }
};
$scope.PETE364CoopPlanRCListener = function () {
  var element = document.getElementById("PETE364CoopPlandesc");
 if (!PETE364CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE364CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE364CoopPlanrflag=false
  }
};
$scope.PETE373CoopPlanRCListener = function () {
  var element = document.getElementById("PETE373CoopPlandesc");
 if (!PETE373CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE373CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE373CoopPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan1desc");
 if (!ProgramTechnicalElectiveCoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan1rflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan2RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlan2desc");
 if (!ComplementaryElectiveCoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlan2rflag=false
  }
};
$scope.WKEXP904CoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP904CoopPlandesc");
 if (!WKEXP904CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP904CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP904CoopPlanrflag=false
  }
};
$scope.WKEXP905CoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP905CoopPlandesc");
 if (!WKEXP905CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP905CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP905CoopPlanrflag=false
  }
};
$scope.CHE314CoopPlanRCListener = function () {
  var element = document.getElementById("CHE314CoopPlandesc");
 if (!CHE314CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE314CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE314CoopPlanrflag=false
  }
};
$scope.ENGG404CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG404CoopPlandesc");
 if (!ENGG404CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404CoopPlanrflag=false
  }
};
$scope.PETE444CoopPlanRCListener = function () {
  var element = document.getElementById("PETE444CoopPlandesc");
 if (!PETE444CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE444CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE444CoopPlanrflag=false
  }
};
$scope.PETE475CoopPlanRCListener = function () {
  var element = document.getElementById("PETE475CoopPlandesc");
 if (!PETE475CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE475CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE475CoopPlanrflag=false
  }
};
$scope.PETE476CoopPlanRCListener = function () {
  var element = document.getElementById("PETE476CoopPlandesc");
 if (!PETE476CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE476CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE476CoopPlanrflag=false
  }
};
$scope.PETE484CoopPlanRCListener = function () {
  var element = document.getElementById("PETE484CoopPlandesc");
 if (!PETE484CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE484CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE484CoopPlanrflag=false
  }
};
$scope.ENGG400CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG400CoopPlandesc");
 if (!ENGG400CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400CoopPlanrflag=false
  }
};
$scope.PETE471CoopPlanRCListener = function () {
  var element = document.getElementById("PETE471CoopPlandesc");
 if (!PETE471CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE471CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE471CoopPlanrflag=false
  }
};
$scope.PETE477CoopPlanRCListener = function () {
  var element = document.getElementById("PETE477CoopPlandesc");
 if (!PETE477CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE477CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE477CoopPlanrflag=false
  }
};
$scope.PETE478CoopPlanRCListener = function () {
  var element = document.getElementById("PETE478CoopPlandesc");
 if (!PETE478CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE478CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE478CoopPlanrflag=false
  }
};
$scope.PETE496CoopPlanRCListener = function () {
  var element = document.getElementById("PETE496CoopPlandesc");
 if (!PETE496CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE496CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE496CoopPlanrflag=false
  }
};
$scope.ITSElectiveCoopPlan0RCListener = function () {
  var element = document.getElementById("ITSElectiveCoopPlan0desc");
 if (!ITSElectiveCoopPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveCoopPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveCoopPlan0rflag=false
  }
};
  var CHEM103CoopPlanProposedflag = false;
  var CHEM103CoopPlanProposedrflag = false;
 var CHEM103CoopPlanProposedTime = new Date().getTime();
  var ENGG100CoopPlanProposedflag = false;
  var ENGG100CoopPlanProposedrflag = false;
 var ENGG100CoopPlanProposedTime = new Date().getTime();
  var ENGG130CoopPlanProposedflag = false;
  var ENGG130CoopPlanProposedrflag = false;
 var ENGG130CoopPlanProposedTime = new Date().getTime();
  var ENGL199CoopPlanProposedflag = false;
  var ENGL199CoopPlanProposedrflag = false;
 var ENGL199CoopPlanProposedTime = new Date().getTime();
  var MATH100CoopPlanProposedflag = false;
  var MATH100CoopPlanProposedrflag = false;
 var MATH100CoopPlanProposedTime = new Date().getTime();
  var PHYS130CoopPlanProposedflag = false;
  var PHYS130CoopPlanProposedrflag = false;
 var PHYS130CoopPlanProposedTime = new Date().getTime();
  var CHEM105CoopPlanProposedflag = false;
  var CHEM105CoopPlanProposedrflag = false;
 var CHEM105CoopPlanProposedTime = new Date().getTime();
  var ENCMP100CoopPlanProposedflag = false;
  var ENCMP100CoopPlanProposedrflag = false;
 var ENCMP100CoopPlanProposedTime = new Date().getTime();
  var ENGG160CoopPlanProposedflag = false;
  var ENGG160CoopPlanProposedrflag = false;
 var ENGG160CoopPlanProposedTime = new Date().getTime();
  var ENPH131CoopPlanProposedflag = false;
  var ENPH131CoopPlanProposedrflag = false;
 var ENPH131CoopPlanProposedTime = new Date().getTime();
  var MATH101CoopPlanProposedflag = false;
  var MATH101CoopPlanProposedrflag = false;
 var MATH101CoopPlanProposedTime = new Date().getTime();
  var MATH102CoopPlanProposedflag = false;
  var MATH102CoopPlanProposedrflag = false;
 var MATH102CoopPlanProposedTime = new Date().getTime();
  var CHE243CoopPlanProposedflag = false;
  var CHE243CoopPlanProposedrflag = false;
 var CHE243CoopPlanProposedTime = new Date().getTime();
  var EAS210CoopPlanProposedflag = false;
  var EAS210CoopPlanProposedrflag = false;
 var EAS210CoopPlanProposedTime = new Date().getTime();
  var ECE209CoopPlanProposedflag = false;
  var ECE209CoopPlanProposedrflag = false;
 var ECE209CoopPlanProposedTime = new Date().getTime();
  var ENGG299CoopPlanProposedflag = false;
  var ENGG299CoopPlanProposedrflag = false;
 var ENGG299CoopPlanProposedTime = new Date().getTime();
  var MATE202CoopPlanProposedflag = false;
  var MATE202CoopPlanProposedrflag = false;
 var MATE202CoopPlanProposedTime = new Date().getTime();
  var MATH209CoopPlanProposedflag = false;
  var MATH209CoopPlanProposedrflag = false;
 var MATH209CoopPlanProposedTime = new Date().getTime();
  var PETE275CoopPlanProposedflag = false;
  var PETE275CoopPlanProposedrflag = false;
 var PETE275CoopPlanProposedTime = new Date().getTime();
  var CHE312CoopPlanProposedflag = false;
  var CHE312CoopPlanProposedrflag = false;
 var CHE312CoopPlanProposedTime = new Date().getTime();
  var CIVE270CoopPlanProposedflag = false;
  var CIVE270CoopPlanProposedrflag = false;
 var CIVE270CoopPlanProposedTime = new Date().getTime();
  var MATH201CoopPlanProposedflag = false;
  var MATH201CoopPlanProposedrflag = false;
 var MATH201CoopPlanProposedTime = new Date().getTime();
  var PETE295CoopPlanProposedflag = false;
  var PETE295CoopPlanProposedrflag = false;
 var PETE295CoopPlanProposedTime = new Date().getTime();
  var STAT235CoopPlanProposedflag = false;
  var STAT235CoopPlanProposedrflag = false;
 var STAT235CoopPlanProposedTime = new Date().getTime();
  var ComplementaryElectiveCoopPlanProposed0flag = false;
  var ComplementaryElectiveCoopPlanProposed0rflag = false;
 var ComplementaryElectiveCoopPlanProposed0Time = new Date().getTime();
  var WKEXP901CoopPlanProposedflag = false;
  var WKEXP901CoopPlanProposedrflag = false;
 var WKEXP901CoopPlanProposedTime = new Date().getTime();
  var WKEXP902CoopPlanProposedflag = false;
  var WKEXP902CoopPlanProposedrflag = false;
 var WKEXP902CoopPlanProposedTime = new Date().getTime();
  var CHE374CoopPlanProposedflag = false;
  var CHE374CoopPlanProposedrflag = false;
 var CHE374CoopPlanProposedTime = new Date().getTime();
  var EAS222CoopPlanProposedflag = false;
  var EAS222CoopPlanProposedrflag = false;
 var EAS222CoopPlanProposedTime = new Date().getTime();
  var PETE365CoopPlanProposedflag = false;
  var PETE365CoopPlanProposedrflag = false;
 var PETE365CoopPlanProposedTime = new Date().getTime();
  var PETE366CoopPlanProposedflag = false;
  var PETE366CoopPlanProposedrflag = false;
 var PETE366CoopPlanProposedTime = new Date().getTime();
  var PETE377CoopPlanProposedflag = false;
  var PETE377CoopPlanProposedrflag = false;
 var PETE377CoopPlanProposedTime = new Date().getTime();
  var WKEXP903CoopPlanProposedflag = false;
  var WKEXP903CoopPlanProposedrflag = false;
 var WKEXP903CoopPlanProposedTime = new Date().getTime();
  var CHEM371CoopPlanProposedflag = false;
  var CHEM371CoopPlanProposedrflag = false;
 var CHEM371CoopPlanProposedTime = new Date().getTime();
  var ENGM310CoopPlanProposedflag = false;
  var ENGM310CoopPlanProposedrflag = false;
 var ENGM310CoopPlanProposedTime = new Date().getTime();
  var ENGM401CoopPlanProposedflag = false;
  var ENGM401CoopPlanProposedrflag = false;
 var ENGM401CoopPlanProposedTime = new Date().getTime();
  var PETE364CoopPlanProposedflag = false;
  var PETE364CoopPlanProposedrflag = false;
 var PETE364CoopPlanProposedTime = new Date().getTime();
  var PETE373CoopPlanProposedflag = false;
  var PETE373CoopPlanProposedrflag = false;
 var PETE373CoopPlanProposedTime = new Date().getTime();
  var PETE375CoopPlanProposedflag = false;
  var PETE375CoopPlanProposedrflag = false;
 var PETE375CoopPlanProposedTime = new Date().getTime();
  var CHE314CoopPlanProposedflag = false;
  var CHE314CoopPlanProposedrflag = false;
 var CHE314CoopPlanProposedTime = new Date().getTime();
  var ComplementaryElectiveCoopPlanProposed1flag = false;
  var ComplementaryElectiveCoopPlanProposed1rflag = false;
 var ComplementaryElectiveCoopPlanProposed1Time = new Date().getTime();
  var WKEXP904CoopPlanProposedflag = false;
  var WKEXP904CoopPlanProposedrflag = false;
 var WKEXP904CoopPlanProposedTime = new Date().getTime();
  var WKEXP905CoopPlanProposedflag = false;
  var WKEXP905CoopPlanProposedrflag = false;
 var WKEXP905CoopPlanProposedTime = new Date().getTime();
  var ComplementaryElectiveCoopPlanProposed2flag = false;
  var ComplementaryElectiveCoopPlanProposed2rflag = false;
 var ComplementaryElectiveCoopPlanProposed2Time = new Date().getTime();
  var ENGG404CoopPlanProposedflag = false;
  var ENGG404CoopPlanProposedrflag = false;
 var ENGG404CoopPlanProposedTime = new Date().getTime();
  var PETE444CoopPlanProposedflag = false;
  var PETE444CoopPlanProposedrflag = false;
 var PETE444CoopPlanProposedTime = new Date().getTime();
  var ProgramTechnicalElectiveCoopPlanProposed0flag = false;
  var ProgramTechnicalElectiveCoopPlanProposed0rflag = false;
 var ProgramTechnicalElectiveCoopPlanProposed0Time = new Date().getTime();
  var PETE476CoopPlanProposedflag = false;
  var PETE476CoopPlanProposedrflag = false;
 var PETE476CoopPlanProposedTime = new Date().getTime();
  var PETE484CoopPlanProposedflag = false;
  var PETE484CoopPlanProposedrflag = false;
 var PETE484CoopPlanProposedTime = new Date().getTime();
  var ENGG400CoopPlanProposedflag = false;
  var ENGG400CoopPlanProposedrflag = false;
 var ENGG400CoopPlanProposedTime = new Date().getTime();
  var PETE471CoopPlanProposedflag = false;
  var PETE471CoopPlanProposedrflag = false;
 var PETE471CoopPlanProposedTime = new Date().getTime();
  var ProgramTechnicalElectiveCoopPlanProposed1flag = false;
  var ProgramTechnicalElectiveCoopPlanProposed1rflag = false;
 var ProgramTechnicalElectiveCoopPlanProposed1Time = new Date().getTime();
  var PETE478CoopPlanProposedflag = false;
  var PETE478CoopPlanProposedrflag = false;
 var PETE478CoopPlanProposedTime = new Date().getTime();
  var PETE496CoopPlanProposedflag = false;
  var PETE496CoopPlanProposedrflag = false;
 var PETE496CoopPlanProposedTime = new Date().getTime();
  var ITSElectiveCoopPlanProposed0flag = false;
  var ITSElectiveCoopPlanProposed0rflag = false;
 var ITSElectiveCoopPlanProposed0Time = new Date().getTime();
$scope.CHEM103CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103CoopPlanProposedTime <= 200) { 
        CHEM103CoopPlanProposedTime = currentTime;
        return;
    }
CHEM103CoopPlanProposedTime = currentTime;
  var CHEM103CoopPlanProposedelement = document.getElementById("CHEM103CoopPlanProposed");
 if (!CHEM103CoopPlanProposedflag) {
     if (CHEM103CoopPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM103CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHEM103CoopPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine136());
     CHEM103CoopPlanProposedelement.classList.remove("NaturalSciences");
     CHEM103CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM103CoopPlanProposed", "NaturalSciences"]);
      CHEM103CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine136());
     CHEM103CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHEM103CoopPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM103CoopPlanProposed");
      CHEM103CoopPlanProposedflag=false
  }
};
$scope.ENGG100CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100CoopPlanProposedTime <= 200) { 
        ENGG100CoopPlanProposedTime = currentTime;
        return;
    }
ENGG100CoopPlanProposedTime = currentTime;
  var ENGG100CoopPlanProposedelement = document.getElementById("ENGG100CoopPlanProposed");
 if (!ENGG100CoopPlanProposedflag) {
     if (ENGG100CoopPlanProposedelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG100CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100CoopPlanProposedelement.classList.add("EngineeringProfession");
      return;
}     ENGG100CoopPlanProposedelement.classList.remove("EngineeringProfession");
     ENGG100CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG100CoopPlanProposed", "EngineeringProfession"]);
      ENGG100CoopPlanProposedflag=true
  }
 else {
     ENGG100CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG100CoopPlanProposedelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG100CoopPlanProposed");
      ENGG100CoopPlanProposedflag=false
  }
};
$scope.ENGG130CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130CoopPlanProposedTime <= 200) { 
        ENGG130CoopPlanProposedTime = currentTime;
        return;
    }
ENGG130CoopPlanProposedTime = currentTime;
  var ENGG130CoopPlanProposedelement = document.getElementById("ENGG130CoopPlanProposed");
 if (!ENGG130CoopPlanProposedflag) {
     if (ENGG130CoopPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     ENGG130CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     ENGG130CoopPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine134());
      that.addLine(getLine139());
      that.addLine(getLine152());
     ENGG130CoopPlanProposedelement.classList.remove("NaturalSciences");
     ENGG130CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENGG130CoopPlanProposed", "NaturalSciences"]);
      ENGG130CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine134());
      that.removeLine(getLine139());
      that.removeLine(getLine152());
     ENGG130CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     ENGG130CoopPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENGG130CoopPlanProposed");
      ENGG130CoopPlanProposedflag=false
  }
};
$scope.ENGL199CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199CoopPlanProposedTime <= 200) { 
        ENGL199CoopPlanProposedTime = currentTime;
        return;
    }
ENGL199CoopPlanProposedTime = currentTime;
  var ENGL199CoopPlanProposedelement = document.getElementById("ENGL199CoopPlanProposed");
 if (!ENGL199CoopPlanProposedflag) {
     if (ENGL199CoopPlanProposedelement.classList.contains("Other-highlighted")) { 
     ENGL199CoopPlanProposedelement.classList.remove("Other-highlighted");
     ENGL199CoopPlanProposedelement.classList.add("Other");
      return;
}      that.addLine(getLine137());
     ENGL199CoopPlanProposedelement.classList.remove("Other");
     ENGL199CoopPlanProposedelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGL199CoopPlanProposed", "Other"]);
      ENGL199CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine137());
     ENGL199CoopPlanProposedelement.classList.remove("Other-highlighted");
     ENGL199CoopPlanProposedelement.classList.add("Other");
     that.removeFromClicked("ENGL199CoopPlanProposed");
      ENGL199CoopPlanProposedflag=false
  }
};
$scope.MATH100CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100CoopPlanProposedTime <= 200) { 
        MATH100CoopPlanProposedTime = currentTime;
        return;
    }
MATH100CoopPlanProposedTime = currentTime;
  var MATH100CoopPlanProposedelement = document.getElementById("MATH100CoopPlanProposed");
 if (!MATH100CoopPlanProposedflag) {
     if (MATH100CoopPlanProposedelement.classList.contains("Math-highlighted")) { 
     MATH100CoopPlanProposedelement.classList.remove("Math-highlighted");
     MATH100CoopPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine134());
      that.addLine(getLine135());
      that.addLine(getLine138());
      that.addLine(getLine141());
      that.addLine(getLine142());
      that.addLine(getLine155());
     MATH100CoopPlanProposedelement.classList.remove("Math");
     MATH100CoopPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH100CoopPlanProposed", "Math"]);
      MATH100CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine134());
      that.removeLine(getLine135());
      that.removeLine(getLine138());
      that.removeLine(getLine141());
      that.removeLine(getLine142());
      that.removeLine(getLine155());
     MATH100CoopPlanProposedelement.classList.remove("Math-highlighted");
     MATH100CoopPlanProposedelement.classList.add("Math");
     that.removeFromClicked("MATH100CoopPlanProposed");
      MATH100CoopPlanProposedflag=false
  }
};
$scope.PHYS130CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130CoopPlanProposedTime <= 200) { 
        PHYS130CoopPlanProposedTime = currentTime;
        return;
    }
PHYS130CoopPlanProposedTime = currentTime;
  var PHYS130CoopPlanProposedelement = document.getElementById("PHYS130CoopPlanProposed");
 if (!PHYS130CoopPlanProposedflag) {
     if (PHYS130CoopPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     PHYS130CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     PHYS130CoopPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine135());
     PHYS130CoopPlanProposedelement.classList.remove("NaturalSciences");
     PHYS130CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["PHYS130CoopPlanProposed", "NaturalSciences"]);
      PHYS130CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine135());
     PHYS130CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     PHYS130CoopPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("PHYS130CoopPlanProposed");
      PHYS130CoopPlanProposedflag=false
  }
};
$scope.CHEM105CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105CoopPlanProposedTime <= 200) { 
        CHEM105CoopPlanProposedTime = currentTime;
        return;
    }
CHEM105CoopPlanProposedTime = currentTime;
  var CHEM105CoopPlanProposedelement = document.getElementById("CHEM105CoopPlanProposed");
 if (!CHEM105CoopPlanProposedflag) {
     if (CHEM105CoopPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM105CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHEM105CoopPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine136());
      that.addLine(getLine144());
      that.addLine(getLine147());
      that.addLine(getLine164());
     CHEM105CoopPlanProposedelement.classList.remove("NaturalSciences");
     CHEM105CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM105CoopPlanProposed", "NaturalSciences"]);
      CHEM105CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine136());
      that.removeLine(getLine144());
      that.removeLine(getLine147());
      that.removeLine(getLine164());
     CHEM105CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHEM105CoopPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM105CoopPlanProposed");
      CHEM105CoopPlanProposedflag=false
  }
};
$scope.ENCMP100CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100CoopPlanProposedTime <= 200) { 
        ENCMP100CoopPlanProposedTime = currentTime;
        return;
    }
ENCMP100CoopPlanProposedTime = currentTime;
  var ENCMP100CoopPlanProposedelement = document.getElementById("ENCMP100CoopPlanProposed");
 if (!ENCMP100CoopPlanProposedflag) {
     if (ENCMP100CoopPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     ENCMP100CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100CoopPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine159());
     ENCMP100CoopPlanProposedelement.classList.remove("NaturalSciences");
     ENCMP100CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENCMP100CoopPlanProposed", "NaturalSciences"]);
      ENCMP100CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine159());
     ENCMP100CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     ENCMP100CoopPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENCMP100CoopPlanProposed");
      ENCMP100CoopPlanProposedflag=false
  }
};
$scope.ENGG160CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160CoopPlanProposedTime <= 200) { 
        ENGG160CoopPlanProposedTime = currentTime;
        return;
    }
ENGG160CoopPlanProposedTime = currentTime;
  var ENGG160CoopPlanProposedelement = document.getElementById("ENGG160CoopPlanProposed");
 if (!ENGG160CoopPlanProposedflag) {
     if (ENGG160CoopPlanProposedelement.classList.contains("EngineeringDesign-highlighted")) { 
     ENGG160CoopPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
     ENGG160CoopPlanProposedelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine137());
     ENGG160CoopPlanProposedelement.classList.remove("EngineeringDesign");
     ENGG160CoopPlanProposedelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["ENGG160CoopPlanProposed", "EngineeringDesign"]);
      ENGG160CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine137());
     ENGG160CoopPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
     ENGG160CoopPlanProposedelement.classList.add("EngineeringDesign");
     that.removeFromClicked("ENGG160CoopPlanProposed");
      ENGG160CoopPlanProposedflag=false
  }
};
$scope.ENPH131CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131CoopPlanProposedTime <= 200) { 
        ENPH131CoopPlanProposedTime = currentTime;
        return;
    }
ENPH131CoopPlanProposedTime = currentTime;
  var ENPH131CoopPlanProposedelement = document.getElementById("ENPH131CoopPlanProposed");
 if (!ENPH131CoopPlanProposedflag) {
     if (ENPH131CoopPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     ENPH131CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     ENPH131CoopPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine138());
      that.addLine(getLine139());
      that.addLine(getLine140());
      that.addLine(getLine149());
     ENPH131CoopPlanProposedelement.classList.remove("NaturalSciences");
     ENPH131CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["ENPH131CoopPlanProposed", "NaturalSciences"]);
      ENPH131CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine138());
      that.removeLine(getLine139());
      that.removeLine(getLine140());
      that.removeLine(getLine149());
     ENPH131CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     ENPH131CoopPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("ENPH131CoopPlanProposed");
      ENPH131CoopPlanProposedflag=false
  }
};
$scope.MATH101CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101CoopPlanProposedTime <= 200) { 
        MATH101CoopPlanProposedTime = currentTime;
        return;
    }
MATH101CoopPlanProposedTime = currentTime;
  var MATH101CoopPlanProposedelement = document.getElementById("MATH101CoopPlanProposed");
 if (!MATH101CoopPlanProposedflag) {
     if (MATH101CoopPlanProposedelement.classList.contains("Math-highlighted")) { 
     MATH101CoopPlanProposedelement.classList.remove("Math-highlighted");
     MATH101CoopPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine140());
      that.addLine(getLine141());
      that.addLine(getLine143());
      that.addLine(getLine145());
      that.addLine(getLine153());
      that.addLine(getLine156());
      that.addLine(getLine165());
     MATH101CoopPlanProposedelement.classList.remove("Math");
     MATH101CoopPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH101CoopPlanProposed", "Math"]);
      MATH101CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine140());
      that.removeLine(getLine141());
      that.removeLine(getLine143());
      that.removeLine(getLine145());
      that.removeLine(getLine153());
      that.removeLine(getLine156());
      that.removeLine(getLine165());
     MATH101CoopPlanProposedelement.classList.remove("Math-highlighted");
     MATH101CoopPlanProposedelement.classList.add("Math");
     that.removeFromClicked("MATH101CoopPlanProposed");
      MATH101CoopPlanProposedflag=false
  }
};
$scope.MATH102CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102CoopPlanProposedTime <= 200) { 
        MATH102CoopPlanProposedTime = currentTime;
        return;
    }
MATH102CoopPlanProposedTime = currentTime;
  var MATH102CoopPlanProposedelement = document.getElementById("MATH102CoopPlanProposed");
 if (!MATH102CoopPlanProposedflag) {
     if (MATH102CoopPlanProposedelement.classList.contains("Math-highlighted")) { 
     MATH102CoopPlanProposedelement.classList.remove("Math-highlighted");
     MATH102CoopPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine142());
      that.addLine(getLine146());
     MATH102CoopPlanProposedelement.classList.remove("Math");
     MATH102CoopPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH102CoopPlanProposed", "Math"]);
      MATH102CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine142());
      that.removeLine(getLine146());
     MATH102CoopPlanProposedelement.classList.remove("Math-highlighted");
     MATH102CoopPlanProposedelement.classList.add("Math");
     that.removeFromClicked("MATH102CoopPlanProposed");
      MATH102CoopPlanProposedflag=false
  }
};
$scope.CHE243CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243CoopPlanProposedTime <= 200) { 
        CHE243CoopPlanProposedTime = currentTime;
        return;
    }
CHE243CoopPlanProposedTime = currentTime;
  var CHE243CoopPlanProposedelement = document.getElementById("CHE243CoopPlanProposed");
 if (!CHE243CoopPlanProposedflag) {
     if (CHE243CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     CHE243CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     CHE243CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine143());
      that.addLine(getLine148());
     CHE243CoopPlanProposedelement.classList.remove("EngineeringSciences");
     CHE243CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CHE243CoopPlanProposed", "EngineeringSciences"]);
      CHE243CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine143());
      that.removeLine(getLine148());
     CHE243CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     CHE243CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CHE243CoopPlanProposed");
      CHE243CoopPlanProposedflag=false
  }
};
$scope.EAS210CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - EAS210CoopPlanProposedTime <= 200) { 
        EAS210CoopPlanProposedTime = currentTime;
        return;
    }
EAS210CoopPlanProposedTime = currentTime;
  var EAS210CoopPlanProposedelement = document.getElementById("EAS210CoopPlanProposed");
 if (!EAS210CoopPlanProposedflag) {
     if (EAS210CoopPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     EAS210CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     EAS210CoopPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine160());
     EAS210CoopPlanProposedelement.classList.remove("NaturalSciences");
     EAS210CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["EAS210CoopPlanProposed", "NaturalSciences"]);
      EAS210CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine160());
     EAS210CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     EAS210CoopPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("EAS210CoopPlanProposed");
      EAS210CoopPlanProposedflag=false
  }
};
$scope.ECE209CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE209CoopPlanProposedTime <= 200) { 
        ECE209CoopPlanProposedTime = currentTime;
        return;
    }
ECE209CoopPlanProposedTime = currentTime;
  var ECE209CoopPlanProposedelement = document.getElementById("ECE209CoopPlanProposed");
 if (!ECE209CoopPlanProposedflag) {
     if (ECE209CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     ECE209CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     ECE209CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}     ECE209CoopPlanProposedelement.classList.remove("EngineeringSciences");
     ECE209CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["ECE209CoopPlanProposed", "EngineeringSciences"]);
      ECE209CoopPlanProposedflag=true
  }
 else {
     ECE209CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     ECE209CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("ECE209CoopPlanProposed");
      ECE209CoopPlanProposedflag=false
  }
};
$scope.ENGG299CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299CoopPlanProposedTime <= 200) { 
        ENGG299CoopPlanProposedTime = currentTime;
        return;
    }
ENGG299CoopPlanProposedTime = currentTime;
  var ENGG299CoopPlanProposedelement = document.getElementById("ENGG299CoopPlanProposed");
 if (!ENGG299CoopPlanProposedflag) {
     if (ENGG299CoopPlanProposedelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG299CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG299CoopPlanProposedelement.classList.add("EngineeringProfession");
      return;
}      that.addLine(getLine157());
     ENGG299CoopPlanProposedelement.classList.remove("EngineeringProfession");
     ENGG299CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG299CoopPlanProposed", "EngineeringProfession"]);
      ENGG299CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine157());
     ENGG299CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG299CoopPlanProposedelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG299CoopPlanProposed");
      ENGG299CoopPlanProposedflag=false
  }
};
$scope.MATE202CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE202CoopPlanProposedTime <= 200) { 
        MATE202CoopPlanProposedTime = currentTime;
        return;
    }
MATE202CoopPlanProposedTime = currentTime;
  var MATE202CoopPlanProposedelement = document.getElementById("MATE202CoopPlanProposed");
 if (!MATE202CoopPlanProposedflag) {
     if (MATE202CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     MATE202CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     MATE202CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine144());
     MATE202CoopPlanProposedelement.classList.remove("EngineeringSciences");
     MATE202CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["MATE202CoopPlanProposed", "EngineeringSciences"]);
      MATE202CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine144());
     MATE202CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     MATE202CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("MATE202CoopPlanProposed");
      MATE202CoopPlanProposedflag=false
  }
};
$scope.MATH209CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209CoopPlanProposedTime <= 200) { 
        MATH209CoopPlanProposedTime = currentTime;
        return;
    }
MATH209CoopPlanProposedTime = currentTime;
  var MATH209CoopPlanProposedelement = document.getElementById("MATH209CoopPlanProposed");
 if (!MATH209CoopPlanProposedflag) {
     if (MATH209CoopPlanProposedelement.classList.contains("Math-highlighted")) { 
     MATH209CoopPlanProposedelement.classList.remove("Math-highlighted");
     MATH209CoopPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine145());
      that.addLine(getLine146());
      that.addLine(getLine150());
      that.addLine(getLine154());
     MATH209CoopPlanProposedelement.classList.remove("Math");
     MATH209CoopPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH209CoopPlanProposed", "Math"]);
      MATH209CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine145());
      that.removeLine(getLine146());
      that.removeLine(getLine150());
      that.removeLine(getLine154());
     MATH209CoopPlanProposedelement.classList.remove("Math-highlighted");
     MATH209CoopPlanProposedelement.classList.add("Math");
     that.removeFromClicked("MATH209CoopPlanProposed");
      MATH209CoopPlanProposedflag=false
  }
};
$scope.PETE275CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE275CoopPlanProposedTime <= 200) { 
        PETE275CoopPlanProposedTime = currentTime;
        return;
    }
PETE275CoopPlanProposedTime = currentTime;
  var PETE275CoopPlanProposedelement = document.getElementById("PETE275CoopPlanProposed");
 if (!PETE275CoopPlanProposedflag) {
     if (PETE275CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE275CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE275CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine147());
      that.addLine(getLine161());
      that.addLine(getLine168());
      that.addLine(getLine174());
     PETE275CoopPlanProposedelement.classList.remove("EngineeringSciences");
     PETE275CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE275CoopPlanProposed", "EngineeringSciences"]);
      PETE275CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine147());
      that.removeLine(getLine161());
      that.removeLine(getLine168());
      that.removeLine(getLine174());
     PETE275CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE275CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE275CoopPlanProposed");
      PETE275CoopPlanProposedflag=false
  }
};
$scope.CHE312CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE312CoopPlanProposedTime <= 200) { 
        CHE312CoopPlanProposedTime = currentTime;
        return;
    }
CHE312CoopPlanProposedTime = currentTime;
  var CHE312CoopPlanProposedelement = document.getElementById("CHE312CoopPlanProposed");
 if (!CHE312CoopPlanProposedflag) {
     if (CHE312CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     CHE312CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     CHE312CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine148());
      that.addLine(getLine149());
      that.addLine(getLine150());
      that.addLine(getLine151());
      that.addLine(getLine162());
      that.addLine(getLine166());
      that.addLine(getLine170());
     CHE312CoopPlanProposedelement.classList.remove("EngineeringSciences");
     CHE312CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CHE312CoopPlanProposed", "EngineeringSciences"]);
      CHE312CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine148());
      that.removeLine(getLine149());
      that.removeLine(getLine150());
      that.removeLine(getLine151());
      that.removeLine(getLine162());
      that.removeLine(getLine166());
      that.removeLine(getLine170());
     CHE312CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     CHE312CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CHE312CoopPlanProposed");
      CHE312CoopPlanProposedflag=false
  }
};
$scope.CIVE270CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270CoopPlanProposedTime <= 200) { 
        CIVE270CoopPlanProposedTime = currentTime;
        return;
    }
CIVE270CoopPlanProposedTime = currentTime;
  var CIVE270CoopPlanProposedelement = document.getElementById("CIVE270CoopPlanProposed");
 if (!CIVE270CoopPlanProposedflag) {
     if (CIVE270CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     CIVE270CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine152());
      that.addLine(getLine153());
      that.addLine(getLine167());
     CIVE270CoopPlanProposedelement.classList.remove("EngineeringSciences");
     CIVE270CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["CIVE270CoopPlanProposed", "EngineeringSciences"]);
      CIVE270CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine152());
      that.removeLine(getLine153());
      that.removeLine(getLine167());
     CIVE270CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     CIVE270CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("CIVE270CoopPlanProposed");
      CIVE270CoopPlanProposedflag=false
  }
};
$scope.MATH201CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201CoopPlanProposedTime <= 200) { 
        MATH201CoopPlanProposedTime = currentTime;
        return;
    }
MATH201CoopPlanProposedTime = currentTime;
  var MATH201CoopPlanProposedelement = document.getElementById("MATH201CoopPlanProposed");
 if (!MATH201CoopPlanProposedflag) {
     if (MATH201CoopPlanProposedelement.classList.contains("Math-highlighted")) { 
     MATH201CoopPlanProposedelement.classList.remove("Math-highlighted");
     MATH201CoopPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine151());
      that.addLine(getLine154());
      that.addLine(getLine169());
     MATH201CoopPlanProposedelement.classList.remove("Math");
     MATH201CoopPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["MATH201CoopPlanProposed", "Math"]);
      MATH201CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine151());
      that.removeLine(getLine154());
      that.removeLine(getLine169());
     MATH201CoopPlanProposedelement.classList.remove("Math-highlighted");
     MATH201CoopPlanProposedelement.classList.add("Math");
     that.removeFromClicked("MATH201CoopPlanProposed");
      MATH201CoopPlanProposedflag=false
  }
};
$scope.PETE295CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE295CoopPlanProposedTime <= 200) { 
        PETE295CoopPlanProposedTime = currentTime;
        return;
    }
PETE295CoopPlanProposedTime = currentTime;
  var PETE295CoopPlanProposedelement = document.getElementById("PETE295CoopPlanProposed");
 if (!PETE295CoopPlanProposedflag) {
     if (PETE295CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE295CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE295CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}     PETE295CoopPlanProposedelement.classList.remove("EngineeringSciences");
     PETE295CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE295CoopPlanProposed", "EngineeringSciences"]);
      PETE295CoopPlanProposedflag=true
  }
 else {
     PETE295CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE295CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE295CoopPlanProposed");
      PETE295CoopPlanProposedflag=false
  }
};
$scope.STAT235CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - STAT235CoopPlanProposedTime <= 200) { 
        STAT235CoopPlanProposedTime = currentTime;
        return;
    }
STAT235CoopPlanProposedTime = currentTime;
  var STAT235CoopPlanProposedelement = document.getElementById("STAT235CoopPlanProposed");
 if (!STAT235CoopPlanProposedflag) {
     if (STAT235CoopPlanProposedelement.classList.contains("Math-highlighted")) { 
     STAT235CoopPlanProposedelement.classList.remove("Math-highlighted");
     STAT235CoopPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine155());
      that.addLine(getLine156());
     STAT235CoopPlanProposedelement.classList.remove("Math");
     STAT235CoopPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["STAT235CoopPlanProposed", "Math"]);
      STAT235CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine155());
      that.removeLine(getLine156());
     STAT235CoopPlanProposedelement.classList.remove("Math-highlighted");
     STAT235CoopPlanProposedelement.classList.add("Math");
     that.removeFromClicked("STAT235CoopPlanProposed");
      STAT235CoopPlanProposedflag=false
  }
};
$scope.ComplementaryElectiveCoopPlanProposed0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlanProposed0Time <= 200) { 
        ComplementaryElectiveCoopPlanProposed0Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlanProposed0Time = currentTime;
  var ComplementaryElectiveCoopPlanProposed0element = document.getElementById("ComplementaryElectiveCoopPlanProposed0");
 if (!ComplementaryElectiveCoopPlanProposed0flag) {
     if (ComplementaryElectiveCoopPlanProposed0element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveCoopPlanProposed0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlanProposed0element.classList.add("COMP");
      return;
}     ComplementaryElectiveCoopPlanProposed0element.classList.remove("COMP");
     ComplementaryElectiveCoopPlanProposed0element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveCoopPlanProposed0", "COMP"]);
      ComplementaryElectiveCoopPlanProposed0flag=true
  }
 else {
     ComplementaryElectiveCoopPlanProposed0element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlanProposed0element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveCoopPlanProposed0");
      ComplementaryElectiveCoopPlanProposed0flag=false
  }
};
$scope.WKEXP901CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP901CoopPlanProposedTime <= 200) { 
        WKEXP901CoopPlanProposedTime = currentTime;
        return;
    }
WKEXP901CoopPlanProposedTime = currentTime;
  var WKEXP901CoopPlanProposedelement = document.getElementById("WKEXP901CoopPlanProposed");
 if (!WKEXP901CoopPlanProposedflag) {
     if (WKEXP901CoopPlanProposedelement.classList.contains("EngineeringProfession-highlighted")) { 
     WKEXP901CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP901CoopPlanProposedelement.classList.add("EngineeringProfession");
      return;
}      that.addLine(getLine157());
      that.addLine(getLine158());
     WKEXP901CoopPlanProposedelement.classList.remove("EngineeringProfession");
     WKEXP901CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["WKEXP901CoopPlanProposed", "EngineeringProfession"]);
      WKEXP901CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine157());
      that.removeLine(getLine158());
     WKEXP901CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP901CoopPlanProposedelement.classList.add("EngineeringProfession");
     that.removeFromClicked("WKEXP901CoopPlanProposed");
      WKEXP901CoopPlanProposedflag=false
  }
};
$scope.WKEXP902CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP902CoopPlanProposedTime <= 200) { 
        WKEXP902CoopPlanProposedTime = currentTime;
        return;
    }
WKEXP902CoopPlanProposedTime = currentTime;
  var WKEXP902CoopPlanProposedelement = document.getElementById("WKEXP902CoopPlanProposed");
 if (!WKEXP902CoopPlanProposedflag) {
     if (WKEXP902CoopPlanProposedelement.classList.contains("EngineeringProfession-highlighted")) { 
     WKEXP902CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP902CoopPlanProposedelement.classList.add("EngineeringProfession");
      return;
}      that.addLine(getLine158());
      that.addLine(getLine163());
     WKEXP902CoopPlanProposedelement.classList.remove("EngineeringProfession");
     WKEXP902CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["WKEXP902CoopPlanProposed", "EngineeringProfession"]);
      WKEXP902CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine158());
      that.removeLine(getLine163());
     WKEXP902CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP902CoopPlanProposedelement.classList.add("EngineeringProfession");
     that.removeFromClicked("WKEXP902CoopPlanProposed");
      WKEXP902CoopPlanProposedflag=false
  }
};
$scope.CHE374CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE374CoopPlanProposedTime <= 200) { 
        CHE374CoopPlanProposedTime = currentTime;
        return;
    }
CHE374CoopPlanProposedTime = currentTime;
  var CHE374CoopPlanProposedelement = document.getElementById("CHE374CoopPlanProposed");
 if (!CHE374CoopPlanProposedflag) {
     if (CHE374CoopPlanProposedelement.classList.contains("Math-highlighted")) { 
     CHE374CoopPlanProposedelement.classList.remove("Math-highlighted");
     CHE374CoopPlanProposedelement.classList.add("Math");
      return;
}      that.addLine(getLine159());
      that.addLine(getLine171());
     CHE374CoopPlanProposedelement.classList.remove("Math");
     CHE374CoopPlanProposedelement.classList.add("Math-highlighted");
     that.addToClicked(["CHE374CoopPlanProposed", "Math"]);
      CHE374CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine159());
      that.removeLine(getLine171());
     CHE374CoopPlanProposedelement.classList.remove("Math-highlighted");
     CHE374CoopPlanProposedelement.classList.add("Math");
     that.removeFromClicked("CHE374CoopPlanProposed");
      CHE374CoopPlanProposedflag=false
  }
};
$scope.EAS222CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - EAS222CoopPlanProposedTime <= 200) { 
        EAS222CoopPlanProposedTime = currentTime;
        return;
    }
EAS222CoopPlanProposedTime = currentTime;
  var EAS222CoopPlanProposedelement = document.getElementById("EAS222CoopPlanProposed");
 if (!EAS222CoopPlanProposedflag) {
     if (EAS222CoopPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     EAS222CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     EAS222CoopPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine160());
     EAS222CoopPlanProposedelement.classList.remove("NaturalSciences");
     EAS222CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["EAS222CoopPlanProposed", "NaturalSciences"]);
      EAS222CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine160());
     EAS222CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     EAS222CoopPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("EAS222CoopPlanProposed");
      EAS222CoopPlanProposedflag=false
  }
};
$scope.PETE365CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE365CoopPlanProposedTime <= 200) { 
        PETE365CoopPlanProposedTime = currentTime;
        return;
    }
PETE365CoopPlanProposedTime = currentTime;
  var PETE365CoopPlanProposedelement = document.getElementById("PETE365CoopPlanProposed");
 if (!PETE365CoopPlanProposedflag) {
     if (PETE365CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE365CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE365CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine161());
     PETE365CoopPlanProposedelement.classList.remove("EngineeringSciences");
     PETE365CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE365CoopPlanProposed", "EngineeringSciences"]);
      PETE365CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine161());
     PETE365CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE365CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE365CoopPlanProposed");
      PETE365CoopPlanProposedflag=false
  }
};
$scope.PETE366CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE366CoopPlanProposedTime <= 200) { 
        PETE366CoopPlanProposedTime = currentTime;
        return;
    }
PETE366CoopPlanProposedTime = currentTime;
  var PETE366CoopPlanProposedelement = document.getElementById("PETE366CoopPlanProposed");
 if (!PETE366CoopPlanProposedflag) {
     if (PETE366CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE366CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE366CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine162());
     PETE366CoopPlanProposedelement.classList.remove("EngineeringSciences");
     PETE366CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE366CoopPlanProposed", "EngineeringSciences"]);
      PETE366CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine162());
     PETE366CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE366CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE366CoopPlanProposed");
      PETE366CoopPlanProposedflag=false
  }
};
$scope.PETE377CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE377CoopPlanProposedTime <= 200) { 
        PETE377CoopPlanProposedTime = currentTime;
        return;
    }
PETE377CoopPlanProposedTime = currentTime;
  var PETE377CoopPlanProposedelement = document.getElementById("PETE377CoopPlanProposed");
 if (!PETE377CoopPlanProposedflag) {
     if (PETE377CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE377CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE377CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}     PETE377CoopPlanProposedelement.classList.remove("EngineeringSciences");
     PETE377CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE377CoopPlanProposed", "EngineeringSciences"]);
      PETE377CoopPlanProposedflag=true
  }
 else {
     PETE377CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE377CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE377CoopPlanProposed");
      PETE377CoopPlanProposedflag=false
  }
};
$scope.WKEXP903CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP903CoopPlanProposedTime <= 200) { 
        WKEXP903CoopPlanProposedTime = currentTime;
        return;
    }
WKEXP903CoopPlanProposedTime = currentTime;
  var WKEXP903CoopPlanProposedelement = document.getElementById("WKEXP903CoopPlanProposed");
 if (!WKEXP903CoopPlanProposedflag) {
     if (WKEXP903CoopPlanProposedelement.classList.contains("EngineeringProfession-highlighted")) { 
     WKEXP903CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP903CoopPlanProposedelement.classList.add("EngineeringProfession");
      return;
}      that.addLine(getLine163());
      that.addLine(getLine172());
     WKEXP903CoopPlanProposedelement.classList.remove("EngineeringProfession");
     WKEXP903CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["WKEXP903CoopPlanProposed", "EngineeringProfession"]);
      WKEXP903CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine163());
      that.removeLine(getLine172());
     WKEXP903CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP903CoopPlanProposedelement.classList.add("EngineeringProfession");
     that.removeFromClicked("WKEXP903CoopPlanProposed");
      WKEXP903CoopPlanProposedflag=false
  }
};
$scope.CHEM371CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM371CoopPlanProposedTime <= 200) { 
        CHEM371CoopPlanProposedTime = currentTime;
        return;
    }
CHEM371CoopPlanProposedTime = currentTime;
  var CHEM371CoopPlanProposedelement = document.getElementById("CHEM371CoopPlanProposed");
 if (!CHEM371CoopPlanProposedflag) {
     if (CHEM371CoopPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     CHEM371CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHEM371CoopPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine164());
      that.addLine(getLine165());
     CHEM371CoopPlanProposedelement.classList.remove("NaturalSciences");
     CHEM371CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHEM371CoopPlanProposed", "NaturalSciences"]);
      CHEM371CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine164());
      that.removeLine(getLine165());
     CHEM371CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHEM371CoopPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHEM371CoopPlanProposed");
      CHEM371CoopPlanProposedflag=false
  }
};
$scope.ENGM310CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310CoopPlanProposedTime <= 200) { 
        ENGM310CoopPlanProposedTime = currentTime;
        return;
    }
ENGM310CoopPlanProposedTime = currentTime;
  var ENGM310CoopPlanProposedelement = document.getElementById("ENGM310CoopPlanProposed");
 if (!ENGM310CoopPlanProposedflag) {
     if (ENGM310CoopPlanProposedelement.classList.contains("Other-highlighted")) { 
     ENGM310CoopPlanProposedelement.classList.remove("Other-highlighted");
     ENGM310CoopPlanProposedelement.classList.add("Other");
      return;
}      that.addLine(getLine176());
     ENGM310CoopPlanProposedelement.classList.remove("Other");
     ENGM310CoopPlanProposedelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM310CoopPlanProposed", "Other"]);
      ENGM310CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine176());
     ENGM310CoopPlanProposedelement.classList.remove("Other-highlighted");
     ENGM310CoopPlanProposedelement.classList.add("Other");
     that.removeFromClicked("ENGM310CoopPlanProposed");
      ENGM310CoopPlanProposedflag=false
  }
};
$scope.ENGM401CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401CoopPlanProposedTime <= 200) { 
        ENGM401CoopPlanProposedTime = currentTime;
        return;
    }
ENGM401CoopPlanProposedTime = currentTime;
  var ENGM401CoopPlanProposedelement = document.getElementById("ENGM401CoopPlanProposed");
 if (!ENGM401CoopPlanProposedflag) {
     if (ENGM401CoopPlanProposedelement.classList.contains("Other-highlighted")) { 
     ENGM401CoopPlanProposedelement.classList.remove("Other-highlighted");
     ENGM401CoopPlanProposedelement.classList.add("Other");
      return;
}      that.addLine(getLine177());
     ENGM401CoopPlanProposedelement.classList.remove("Other");
     ENGM401CoopPlanProposedelement.classList.add("Other-highlighted");
     that.addToClicked(["ENGM401CoopPlanProposed", "Other"]);
      ENGM401CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine177());
     ENGM401CoopPlanProposedelement.classList.remove("Other-highlighted");
     ENGM401CoopPlanProposedelement.classList.add("Other");
     that.removeFromClicked("ENGM401CoopPlanProposed");
      ENGM401CoopPlanProposedflag=false
  }
};
$scope.PETE364CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE364CoopPlanProposedTime <= 200) { 
        PETE364CoopPlanProposedTime = currentTime;
        return;
    }
PETE364CoopPlanProposedTime = currentTime;
  var PETE364CoopPlanProposedelement = document.getElementById("PETE364CoopPlanProposed");
 if (!PETE364CoopPlanProposedflag) {
     if (PETE364CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE364CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE364CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine166());
      that.addLine(getLine167());
      that.addLine(getLine175());
     PETE364CoopPlanProposedelement.classList.remove("EngineeringSciences");
     PETE364CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE364CoopPlanProposed", "EngineeringSciences"]);
      PETE364CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine166());
      that.removeLine(getLine167());
      that.removeLine(getLine175());
     PETE364CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE364CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE364CoopPlanProposed");
      PETE364CoopPlanProposedflag=false
  }
};
$scope.PETE373CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE373CoopPlanProposedTime <= 200) { 
        PETE373CoopPlanProposedTime = currentTime;
        return;
    }
PETE373CoopPlanProposedTime = currentTime;
  var PETE373CoopPlanProposedelement = document.getElementById("PETE373CoopPlanProposed");
 if (!PETE373CoopPlanProposedflag) {
     if (PETE373CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE373CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE373CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine168());
      that.addLine(getLine178());
      that.addLine(getLine179());
     PETE373CoopPlanProposedelement.classList.remove("EngineeringSciences");
     PETE373CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE373CoopPlanProposed", "EngineeringSciences"]);
      PETE373CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine168());
      that.removeLine(getLine178());
      that.removeLine(getLine179());
     PETE373CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE373CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE373CoopPlanProposed");
      PETE373CoopPlanProposedflag=false
  }
};
$scope.PETE375CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE375CoopPlanProposedTime <= 200) { 
        PETE375CoopPlanProposedTime = currentTime;
        return;
    }
PETE375CoopPlanProposedTime = currentTime;
  var PETE375CoopPlanProposedelement = document.getElementById("PETE375CoopPlanProposed");
 if (!PETE375CoopPlanProposedflag) {
     if (PETE375CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE375CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE375CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}     PETE375CoopPlanProposedelement.classList.remove("EngineeringSciences");
     PETE375CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE375CoopPlanProposed", "EngineeringSciences"]);
      PETE375CoopPlanProposedflag=true
  }
 else {
     PETE375CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE375CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE375CoopPlanProposed");
      PETE375CoopPlanProposedflag=false
  }
};
$scope.CHE314CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE314CoopPlanProposedTime <= 200) { 
        CHE314CoopPlanProposedTime = currentTime;
        return;
    }
CHE314CoopPlanProposedTime = currentTime;
  var CHE314CoopPlanProposedelement = document.getElementById("CHE314CoopPlanProposed");
 if (!CHE314CoopPlanProposedflag) {
     if (CHE314CoopPlanProposedelement.classList.contains("NaturalSciences-highlighted")) { 
     CHE314CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHE314CoopPlanProposedelement.classList.add("NaturalSciences");
      return;
}      that.addLine(getLine169());
      that.addLine(getLine170());
      that.addLine(getLine171());
     CHE314CoopPlanProposedelement.classList.remove("NaturalSciences");
     CHE314CoopPlanProposedelement.classList.add("NaturalSciences-highlighted");
     that.addToClicked(["CHE314CoopPlanProposed", "NaturalSciences"]);
      CHE314CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine169());
      that.removeLine(getLine170());
      that.removeLine(getLine171());
     CHE314CoopPlanProposedelement.classList.remove("NaturalSciences-highlighted");
     CHE314CoopPlanProposedelement.classList.add("NaturalSciences");
     that.removeFromClicked("CHE314CoopPlanProposed");
      CHE314CoopPlanProposedflag=false
  }
};
$scope.ComplementaryElectiveCoopPlanProposed1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlanProposed1Time <= 200) { 
        ComplementaryElectiveCoopPlanProposed1Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlanProposed1Time = currentTime;
  var ComplementaryElectiveCoopPlanProposed1element = document.getElementById("ComplementaryElectiveCoopPlanProposed1");
 if (!ComplementaryElectiveCoopPlanProposed1flag) {
     if (ComplementaryElectiveCoopPlanProposed1element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveCoopPlanProposed1element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlanProposed1element.classList.add("COMP");
      return;
}     ComplementaryElectiveCoopPlanProposed1element.classList.remove("COMP");
     ComplementaryElectiveCoopPlanProposed1element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveCoopPlanProposed1", "COMP"]);
      ComplementaryElectiveCoopPlanProposed1flag=true
  }
 else {
     ComplementaryElectiveCoopPlanProposed1element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlanProposed1element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveCoopPlanProposed1");
      ComplementaryElectiveCoopPlanProposed1flag=false
  }
};
$scope.WKEXP904CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP904CoopPlanProposedTime <= 200) { 
        WKEXP904CoopPlanProposedTime = currentTime;
        return;
    }
WKEXP904CoopPlanProposedTime = currentTime;
  var WKEXP904CoopPlanProposedelement = document.getElementById("WKEXP904CoopPlanProposed");
 if (!WKEXP904CoopPlanProposedflag) {
     if (WKEXP904CoopPlanProposedelement.classList.contains("EngineeringProfession-highlighted")) { 
     WKEXP904CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP904CoopPlanProposedelement.classList.add("EngineeringProfession");
      return;
}      that.addLine(getLine172());
      that.addLine(getLine173());
     WKEXP904CoopPlanProposedelement.classList.remove("EngineeringProfession");
     WKEXP904CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["WKEXP904CoopPlanProposed", "EngineeringProfession"]);
      WKEXP904CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine172());
      that.removeLine(getLine173());
     WKEXP904CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP904CoopPlanProposedelement.classList.add("EngineeringProfession");
     that.removeFromClicked("WKEXP904CoopPlanProposed");
      WKEXP904CoopPlanProposedflag=false
  }
};
$scope.WKEXP905CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP905CoopPlanProposedTime <= 200) { 
        WKEXP905CoopPlanProposedTime = currentTime;
        return;
    }
WKEXP905CoopPlanProposedTime = currentTime;
  var WKEXP905CoopPlanProposedelement = document.getElementById("WKEXP905CoopPlanProposed");
 if (!WKEXP905CoopPlanProposedflag) {
     if (WKEXP905CoopPlanProposedelement.classList.contains("EngineeringProfession-highlighted")) { 
     WKEXP905CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP905CoopPlanProposedelement.classList.add("EngineeringProfession");
      return;
}      that.addLine(getLine173());
     WKEXP905CoopPlanProposedelement.classList.remove("EngineeringProfession");
     WKEXP905CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["WKEXP905CoopPlanProposed", "EngineeringProfession"]);
      WKEXP905CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine173());
     WKEXP905CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     WKEXP905CoopPlanProposedelement.classList.add("EngineeringProfession");
     that.removeFromClicked("WKEXP905CoopPlanProposed");
      WKEXP905CoopPlanProposedflag=false
  }
};
$scope.ComplementaryElectiveCoopPlanProposed2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlanProposed2Time <= 200) { 
        ComplementaryElectiveCoopPlanProposed2Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlanProposed2Time = currentTime;
  var ComplementaryElectiveCoopPlanProposed2element = document.getElementById("ComplementaryElectiveCoopPlanProposed2");
 if (!ComplementaryElectiveCoopPlanProposed2flag) {
     if (ComplementaryElectiveCoopPlanProposed2element.classList.contains("COMP-highlighted")) { 
     ComplementaryElectiveCoopPlanProposed2element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlanProposed2element.classList.add("COMP");
      return;
}     ComplementaryElectiveCoopPlanProposed2element.classList.remove("COMP");
     ComplementaryElectiveCoopPlanProposed2element.classList.add("COMP-highlighted");
     that.addToClicked(["ComplementaryElectiveCoopPlanProposed2", "COMP"]);
      ComplementaryElectiveCoopPlanProposed2flag=true
  }
 else {
     ComplementaryElectiveCoopPlanProposed2element.classList.remove("COMP-highlighted");
     ComplementaryElectiveCoopPlanProposed2element.classList.add("COMP");
     that.removeFromClicked("ComplementaryElectiveCoopPlanProposed2");
      ComplementaryElectiveCoopPlanProposed2flag=false
  }
};
$scope.ENGG404CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404CoopPlanProposedTime <= 200) { 
        ENGG404CoopPlanProposedTime = currentTime;
        return;
    }
ENGG404CoopPlanProposedTime = currentTime;
  var ENGG404CoopPlanProposedelement = document.getElementById("ENGG404CoopPlanProposed");
 if (!ENGG404CoopPlanProposedflag) {
     if (ENGG404CoopPlanProposedelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG404CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404CoopPlanProposedelement.classList.add("EngineeringProfession");
      return;
}     ENGG404CoopPlanProposedelement.classList.remove("EngineeringProfession");
     ENGG404CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG404CoopPlanProposed", "EngineeringProfession"]);
      ENGG404CoopPlanProposedflag=true
  }
 else {
     ENGG404CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG404CoopPlanProposedelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG404CoopPlanProposed");
      ENGG404CoopPlanProposedflag=false
  }
};
$scope.PETE444CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE444CoopPlanProposedTime <= 200) { 
        PETE444CoopPlanProposedTime = currentTime;
        return;
    }
PETE444CoopPlanProposedTime = currentTime;
  var PETE444CoopPlanProposedelement = document.getElementById("PETE444CoopPlanProposed");
 if (!PETE444CoopPlanProposedflag) {
     if (PETE444CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE444CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE444CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine174());
     PETE444CoopPlanProposedelement.classList.remove("EngineeringSciences");
     PETE444CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE444CoopPlanProposed", "EngineeringSciences"]);
      PETE444CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine174());
     PETE444CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE444CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE444CoopPlanProposed");
      PETE444CoopPlanProposedflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlanProposed0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlanProposed0Time <= 200) { 
        ProgramTechnicalElectiveCoopPlanProposed0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlanProposed0Time = currentTime;
  var ProgramTechnicalElectiveCoopPlanProposed0element = document.getElementById("ProgramTechnicalElectiveCoopPlanProposed0");
 if (!ProgramTechnicalElectiveCoopPlanProposed0flag) {
     if (ProgramTechnicalElectiveCoopPlanProposed0element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlanProposed0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlanProposed0element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlanProposed0element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlanProposed0element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlanProposed0", "PROG"]);
      ProgramTechnicalElectiveCoopPlanProposed0flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlanProposed0element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlanProposed0element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlanProposed0");
      ProgramTechnicalElectiveCoopPlanProposed0flag=false
  }
};
$scope.PETE476CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE476CoopPlanProposedTime <= 200) { 
        PETE476CoopPlanProposedTime = currentTime;
        return;
    }
PETE476CoopPlanProposedTime = currentTime;
  var PETE476CoopPlanProposedelement = document.getElementById("PETE476CoopPlanProposed");
 if (!PETE476CoopPlanProposedflag) {
     if (PETE476CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE476CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE476CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine175());
     PETE476CoopPlanProposedelement.classList.remove("EngineeringSciences");
     PETE476CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE476CoopPlanProposed", "EngineeringSciences"]);
      PETE476CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine175());
     PETE476CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE476CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE476CoopPlanProposed");
      PETE476CoopPlanProposedflag=false
  }
};
$scope.PETE484CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE484CoopPlanProposedTime <= 200) { 
        PETE484CoopPlanProposedTime = currentTime;
        return;
    }
PETE484CoopPlanProposedTime = currentTime;
  var PETE484CoopPlanProposedelement = document.getElementById("PETE484CoopPlanProposed");
 if (!PETE484CoopPlanProposedflag) {
     if (PETE484CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE484CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE484CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine176());
      that.addLine(getLine177());
      that.addLine(getLine180());
     PETE484CoopPlanProposedelement.classList.remove("EngineeringSciences");
     PETE484CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE484CoopPlanProposed", "EngineeringSciences"]);
      PETE484CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine176());
      that.removeLine(getLine177());
      that.removeLine(getLine180());
     PETE484CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE484CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE484CoopPlanProposed");
      PETE484CoopPlanProposedflag=false
  }
};
$scope.ENGG400CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400CoopPlanProposedTime <= 200) { 
        ENGG400CoopPlanProposedTime = currentTime;
        return;
    }
ENGG400CoopPlanProposedTime = currentTime;
  var ENGG400CoopPlanProposedelement = document.getElementById("ENGG400CoopPlanProposed");
 if (!ENGG400CoopPlanProposedflag) {
     if (ENGG400CoopPlanProposedelement.classList.contains("EngineeringProfession-highlighted")) { 
     ENGG400CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400CoopPlanProposedelement.classList.add("EngineeringProfession");
      return;
}     ENGG400CoopPlanProposedelement.classList.remove("EngineeringProfession");
     ENGG400CoopPlanProposedelement.classList.add("EngineeringProfession-highlighted");
     that.addToClicked(["ENGG400CoopPlanProposed", "EngineeringProfession"]);
      ENGG400CoopPlanProposedflag=true
  }
 else {
     ENGG400CoopPlanProposedelement.classList.remove("EngineeringProfession-highlighted");
     ENGG400CoopPlanProposedelement.classList.add("EngineeringProfession");
     that.removeFromClicked("ENGG400CoopPlanProposed");
      ENGG400CoopPlanProposedflag=false
  }
};
$scope.PETE471CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE471CoopPlanProposedTime <= 200) { 
        PETE471CoopPlanProposedTime = currentTime;
        return;
    }
PETE471CoopPlanProposedTime = currentTime;
  var PETE471CoopPlanProposedelement = document.getElementById("PETE471CoopPlanProposed");
 if (!PETE471CoopPlanProposedflag) {
     if (PETE471CoopPlanProposedelement.classList.contains("EngineeringSciences-highlighted")) { 
     PETE471CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE471CoopPlanProposedelement.classList.add("EngineeringSciences");
      return;
}      that.addLine(getLine178());
     PETE471CoopPlanProposedelement.classList.remove("EngineeringSciences");
     PETE471CoopPlanProposedelement.classList.add("EngineeringSciences-highlighted");
     that.addToClicked(["PETE471CoopPlanProposed", "EngineeringSciences"]);
      PETE471CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine178());
     PETE471CoopPlanProposedelement.classList.remove("EngineeringSciences-highlighted");
     PETE471CoopPlanProposedelement.classList.add("EngineeringSciences");
     that.removeFromClicked("PETE471CoopPlanProposed");
      PETE471CoopPlanProposedflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlanProposed1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlanProposed1Time <= 200) { 
        ProgramTechnicalElectiveCoopPlanProposed1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlanProposed1Time = currentTime;
  var ProgramTechnicalElectiveCoopPlanProposed1element = document.getElementById("ProgramTechnicalElectiveCoopPlanProposed1");
 if (!ProgramTechnicalElectiveCoopPlanProposed1flag) {
     if (ProgramTechnicalElectiveCoopPlanProposed1element.classList.contains("PROG-highlighted")) { 
     ProgramTechnicalElectiveCoopPlanProposed1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlanProposed1element.classList.add("PROG");
      return;
}     ProgramTechnicalElectiveCoopPlanProposed1element.classList.remove("PROG");
     ProgramTechnicalElectiveCoopPlanProposed1element.classList.add("PROG-highlighted");
     that.addToClicked(["ProgramTechnicalElectiveCoopPlanProposed1", "PROG"]);
      ProgramTechnicalElectiveCoopPlanProposed1flag=true
  }
 else {
     ProgramTechnicalElectiveCoopPlanProposed1element.classList.remove("PROG-highlighted");
     ProgramTechnicalElectiveCoopPlanProposed1element.classList.add("PROG");
     that.removeFromClicked("ProgramTechnicalElectiveCoopPlanProposed1");
      ProgramTechnicalElectiveCoopPlanProposed1flag=false
  }
};
$scope.PETE478CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE478CoopPlanProposedTime <= 200) { 
        PETE478CoopPlanProposedTime = currentTime;
        return;
    }
PETE478CoopPlanProposedTime = currentTime;
  var PETE478CoopPlanProposedelement = document.getElementById("PETE478CoopPlanProposed");
 if (!PETE478CoopPlanProposedflag) {
     if (PETE478CoopPlanProposedelement.classList.contains("EngineeringDesign-highlighted")) { 
     PETE478CoopPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
     PETE478CoopPlanProposedelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine179());
     PETE478CoopPlanProposedelement.classList.remove("EngineeringDesign");
     PETE478CoopPlanProposedelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["PETE478CoopPlanProposed", "EngineeringDesign"]);
      PETE478CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine179());
     PETE478CoopPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
     PETE478CoopPlanProposedelement.classList.add("EngineeringDesign");
     that.removeFromClicked("PETE478CoopPlanProposed");
      PETE478CoopPlanProposedflag=false
  }
};
$scope.PETE496CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PETE496CoopPlanProposedTime <= 200) { 
        PETE496CoopPlanProposedTime = currentTime;
        return;
    }
PETE496CoopPlanProposedTime = currentTime;
  var PETE496CoopPlanProposedelement = document.getElementById("PETE496CoopPlanProposed");
 if (!PETE496CoopPlanProposedflag) {
     if (PETE496CoopPlanProposedelement.classList.contains("EngineeringDesign-highlighted")) { 
     PETE496CoopPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
     PETE496CoopPlanProposedelement.classList.add("EngineeringDesign");
      return;
}      that.addLine(getLine180());
     PETE496CoopPlanProposedelement.classList.remove("EngineeringDesign");
     PETE496CoopPlanProposedelement.classList.add("EngineeringDesign-highlighted");
     that.addToClicked(["PETE496CoopPlanProposed", "EngineeringDesign"]);
      PETE496CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine180());
     PETE496CoopPlanProposedelement.classList.remove("EngineeringDesign-highlighted");
     PETE496CoopPlanProposedelement.classList.add("EngineeringDesign");
     that.removeFromClicked("PETE496CoopPlanProposed");
      PETE496CoopPlanProposedflag=false
  }
};
$scope.ITSElectiveCoopPlanProposed0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveCoopPlanProposed0Time <= 200) { 
        ITSElectiveCoopPlanProposed0Time = currentTime;
        return;
    }
ITSElectiveCoopPlanProposed0Time = currentTime;
  var ITSElectiveCoopPlanProposed0element = document.getElementById("ITSElectiveCoopPlanProposed0");
 if (!ITSElectiveCoopPlanProposed0flag) {
     if (ITSElectiveCoopPlanProposed0element.classList.contains("ITS-highlighted")) { 
     ITSElectiveCoopPlanProposed0element.classList.remove("ITS-highlighted");
     ITSElectiveCoopPlanProposed0element.classList.add("ITS");
      return;
}     ITSElectiveCoopPlanProposed0element.classList.remove("ITS");
     ITSElectiveCoopPlanProposed0element.classList.add("ITS-highlighted");
     that.addToClicked(["ITSElectiveCoopPlanProposed0", "ITS"]);
      ITSElectiveCoopPlanProposed0flag=true
  }
 else {
     ITSElectiveCoopPlanProposed0element.classList.remove("ITS-highlighted");
     ITSElectiveCoopPlanProposed0element.classList.add("ITS");
     that.removeFromClicked("ITSElectiveCoopPlanProposed0");
      ITSElectiveCoopPlanProposed0flag=false
  }
};
$scope.CHEM103CoopPlanProposedRCListener = function () {
  var element = document.getElementById("CHEM103CoopPlanProposeddesc");
 if (!CHEM103CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103CoopPlanProposedrflag=false
  }
};
$scope.ENGG100CoopPlanProposedRCListener = function () {
  var element = document.getElementById("ENGG100CoopPlanProposeddesc");
 if (!ENGG100CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100CoopPlanProposedrflag=false
  }
};
$scope.ENGG130CoopPlanProposedRCListener = function () {
  var element = document.getElementById("ENGG130CoopPlanProposeddesc");
 if (!ENGG130CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130CoopPlanProposedrflag=false
  }
};
$scope.ENGL199CoopPlanProposedRCListener = function () {
  var element = document.getElementById("ENGL199CoopPlanProposeddesc");
 if (!ENGL199CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199CoopPlanProposedrflag=false
  }
};
$scope.MATH100CoopPlanProposedRCListener = function () {
  var element = document.getElementById("MATH100CoopPlanProposeddesc");
 if (!MATH100CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100CoopPlanProposedrflag=false
  }
};
$scope.PHYS130CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PHYS130CoopPlanProposeddesc");
 if (!PHYS130CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130CoopPlanProposedrflag=false
  }
};
$scope.CHEM105CoopPlanProposedRCListener = function () {
  var element = document.getElementById("CHEM105CoopPlanProposeddesc");
 if (!CHEM105CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105CoopPlanProposedrflag=false
  }
};
$scope.ENCMP100CoopPlanProposedRCListener = function () {
  var element = document.getElementById("ENCMP100CoopPlanProposeddesc");
 if (!ENCMP100CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100CoopPlanProposedrflag=false
  }
};
$scope.ENGG160CoopPlanProposedRCListener = function () {
  var element = document.getElementById("ENGG160CoopPlanProposeddesc");
 if (!ENGG160CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160CoopPlanProposedrflag=false
  }
};
$scope.ENPH131CoopPlanProposedRCListener = function () {
  var element = document.getElementById("ENPH131CoopPlanProposeddesc");
 if (!ENPH131CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131CoopPlanProposedrflag=false
  }
};
$scope.MATH101CoopPlanProposedRCListener = function () {
  var element = document.getElementById("MATH101CoopPlanProposeddesc");
 if (!MATH101CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101CoopPlanProposedrflag=false
  }
};
$scope.MATH102CoopPlanProposedRCListener = function () {
  var element = document.getElementById("MATH102CoopPlanProposeddesc");
 if (!MATH102CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102CoopPlanProposedrflag=false
  }
};
$scope.CHE243CoopPlanProposedRCListener = function () {
  var element = document.getElementById("CHE243CoopPlanProposeddesc");
 if (!CHE243CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243CoopPlanProposedrflag=false
  }
};
$scope.EAS210CoopPlanProposedRCListener = function () {
  var element = document.getElementById("EAS210CoopPlanProposeddesc");
 if (!EAS210CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      EAS210CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      EAS210CoopPlanProposedrflag=false
  }
};
$scope.ECE209CoopPlanProposedRCListener = function () {
  var element = document.getElementById("ECE209CoopPlanProposeddesc");
 if (!ECE209CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE209CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE209CoopPlanProposedrflag=false
  }
};
$scope.ENGG299CoopPlanProposedRCListener = function () {
  var element = document.getElementById("ENGG299CoopPlanProposeddesc");
 if (!ENGG299CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299CoopPlanProposedrflag=false
  }
};
$scope.MATE202CoopPlanProposedRCListener = function () {
  var element = document.getElementById("MATE202CoopPlanProposeddesc");
 if (!MATE202CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE202CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE202CoopPlanProposedrflag=false
  }
};
$scope.MATH209CoopPlanProposedRCListener = function () {
  var element = document.getElementById("MATH209CoopPlanProposeddesc");
 if (!MATH209CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209CoopPlanProposedrflag=false
  }
};
$scope.PETE275CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE275CoopPlanProposeddesc");
 if (!PETE275CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE275CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE275CoopPlanProposedrflag=false
  }
};
$scope.CHE312CoopPlanProposedRCListener = function () {
  var element = document.getElementById("CHE312CoopPlanProposeddesc");
 if (!CHE312CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE312CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE312CoopPlanProposedrflag=false
  }
};
$scope.CIVE270CoopPlanProposedRCListener = function () {
  var element = document.getElementById("CIVE270CoopPlanProposeddesc");
 if (!CIVE270CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270CoopPlanProposedrflag=false
  }
};
$scope.MATH201CoopPlanProposedRCListener = function () {
  var element = document.getElementById("MATH201CoopPlanProposeddesc");
 if (!MATH201CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201CoopPlanProposedrflag=false
  }
};
$scope.PETE295CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE295CoopPlanProposeddesc");
 if (!PETE295CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE295CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE295CoopPlanProposedrflag=false
  }
};
$scope.STAT235CoopPlanProposedRCListener = function () {
  var element = document.getElementById("STAT235CoopPlanProposeddesc");
 if (!STAT235CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      STAT235CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      STAT235CoopPlanProposedrflag=false
  }
};
$scope.ComplementaryElectiveCoopPlanProposed0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlanProposed0desc");
 if (!ComplementaryElectiveCoopPlanProposed0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlanProposed0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlanProposed0rflag=false
  }
};
$scope.WKEXP901CoopPlanProposedRCListener = function () {
  var element = document.getElementById("WKEXP901CoopPlanProposeddesc");
 if (!WKEXP901CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP901CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP901CoopPlanProposedrflag=false
  }
};
$scope.WKEXP902CoopPlanProposedRCListener = function () {
  var element = document.getElementById("WKEXP902CoopPlanProposeddesc");
 if (!WKEXP902CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP902CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP902CoopPlanProposedrflag=false
  }
};
$scope.CHE374CoopPlanProposedRCListener = function () {
  var element = document.getElementById("CHE374CoopPlanProposeddesc");
 if (!CHE374CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE374CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE374CoopPlanProposedrflag=false
  }
};
$scope.EAS222CoopPlanProposedRCListener = function () {
  var element = document.getElementById("EAS222CoopPlanProposeddesc");
 if (!EAS222CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      EAS222CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      EAS222CoopPlanProposedrflag=false
  }
};
$scope.PETE365CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE365CoopPlanProposeddesc");
 if (!PETE365CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE365CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE365CoopPlanProposedrflag=false
  }
};
$scope.PETE366CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE366CoopPlanProposeddesc");
 if (!PETE366CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE366CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE366CoopPlanProposedrflag=false
  }
};
$scope.PETE377CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE377CoopPlanProposeddesc");
 if (!PETE377CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE377CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE377CoopPlanProposedrflag=false
  }
};
$scope.WKEXP903CoopPlanProposedRCListener = function () {
  var element = document.getElementById("WKEXP903CoopPlanProposeddesc");
 if (!WKEXP903CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP903CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP903CoopPlanProposedrflag=false
  }
};
$scope.CHEM371CoopPlanProposedRCListener = function () {
  var element = document.getElementById("CHEM371CoopPlanProposeddesc");
 if (!CHEM371CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM371CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM371CoopPlanProposedrflag=false
  }
};
$scope.ENGM310CoopPlanProposedRCListener = function () {
  var element = document.getElementById("ENGM310CoopPlanProposeddesc");
 if (!ENGM310CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310CoopPlanProposedrflag=false
  }
};
$scope.ENGM401CoopPlanProposedRCListener = function () {
  var element = document.getElementById("ENGM401CoopPlanProposeddesc");
 if (!ENGM401CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401CoopPlanProposedrflag=false
  }
};
$scope.PETE364CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE364CoopPlanProposeddesc");
 if (!PETE364CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE364CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE364CoopPlanProposedrflag=false
  }
};
$scope.PETE373CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE373CoopPlanProposeddesc");
 if (!PETE373CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE373CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE373CoopPlanProposedrflag=false
  }
};
$scope.PETE375CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE375CoopPlanProposeddesc");
 if (!PETE375CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE375CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE375CoopPlanProposedrflag=false
  }
};
$scope.CHE314CoopPlanProposedRCListener = function () {
  var element = document.getElementById("CHE314CoopPlanProposeddesc");
 if (!CHE314CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE314CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE314CoopPlanProposedrflag=false
  }
};
$scope.ComplementaryElectiveCoopPlanProposed1RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlanProposed1desc");
 if (!ComplementaryElectiveCoopPlanProposed1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlanProposed1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlanProposed1rflag=false
  }
};
$scope.WKEXP904CoopPlanProposedRCListener = function () {
  var element = document.getElementById("WKEXP904CoopPlanProposeddesc");
 if (!WKEXP904CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP904CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP904CoopPlanProposedrflag=false
  }
};
$scope.WKEXP905CoopPlanProposedRCListener = function () {
  var element = document.getElementById("WKEXP905CoopPlanProposeddesc");
 if (!WKEXP905CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP905CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP905CoopPlanProposedrflag=false
  }
};
$scope.ComplementaryElectiveCoopPlanProposed2RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlanProposed2desc");
 if (!ComplementaryElectiveCoopPlanProposed2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlanProposed2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlanProposed2rflag=false
  }
};
$scope.ENGG404CoopPlanProposedRCListener = function () {
  var element = document.getElementById("ENGG404CoopPlanProposeddesc");
 if (!ENGG404CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404CoopPlanProposedrflag=false
  }
};
$scope.PETE444CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE444CoopPlanProposeddesc");
 if (!PETE444CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE444CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE444CoopPlanProposedrflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlanProposed0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlanProposed0desc");
 if (!ProgramTechnicalElectiveCoopPlanProposed0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlanProposed0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlanProposed0rflag=false
  }
};
$scope.PETE476CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE476CoopPlanProposeddesc");
 if (!PETE476CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE476CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE476CoopPlanProposedrflag=false
  }
};
$scope.PETE484CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE484CoopPlanProposeddesc");
 if (!PETE484CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE484CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE484CoopPlanProposedrflag=false
  }
};
$scope.ENGG400CoopPlanProposedRCListener = function () {
  var element = document.getElementById("ENGG400CoopPlanProposeddesc");
 if (!ENGG400CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400CoopPlanProposedrflag=false
  }
};
$scope.PETE471CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE471CoopPlanProposeddesc");
 if (!PETE471CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE471CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE471CoopPlanProposedrflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlanProposed1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlanProposed1desc");
 if (!ProgramTechnicalElectiveCoopPlanProposed1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlanProposed1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlanProposed1rflag=false
  }
};
$scope.PETE478CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE478CoopPlanProposeddesc");
 if (!PETE478CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE478CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE478CoopPlanProposedrflag=false
  }
};
$scope.PETE496CoopPlanProposedRCListener = function () {
  var element = document.getElementById("PETE496CoopPlanProposeddesc");
 if (!PETE496CoopPlanProposedrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PETE496CoopPlanProposedrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PETE496CoopPlanProposedrflag=false
  }
};
$scope.ITSElectiveCoopPlanProposed0RCListener = function () {
  var element = document.getElementById("ITSElectiveCoopPlanProposed0desc");
 if (!ITSElectiveCoopPlanProposed0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveCoopPlanProposed0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveCoopPlanProposed0rflag=false
  }
};
});
app.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
    });app.directive('ngChangeRadio', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngChangeRadio);
        element.bind('change', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
    });