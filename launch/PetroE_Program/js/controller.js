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
this.highlightElement = function(element, category) {
        if (element.classList.contains(category + "-highlighted")) {
            return;
        }
        element.classList.remove(category);
        element.classList.add(category + "-highlighted");
    };
this.unHighlightElement = function(element, category) {
        if (!element.classList.contains(category + "-highlighted")) {
            return;
        }
        element.classList.remove(category + "-highlighted");
        element.classList.add(category);
    };
this.TraditionalPlanList = [];
this.TraditionalPlanClicked = [];
this.TraditionalPlanLegendBtns = [];
this.TraditionalPlanLegendBtnsClicked = [];
this.TraditionalPlanClickedMap = new Map();
this.TraditionalPlanTerms = 8;
this.TraditionalPlanMaxCourses = 7;
this.TraditionalPlanProposedList = [];
this.TraditionalPlanProposedClicked = [];
this.TraditionalPlanProposedLegendBtns = [];
this.TraditionalPlanProposedLegendBtnsClicked = [];
this.TraditionalPlanProposedClickedMap = new Map();
this.TraditionalPlanProposedTerms = 8;
this.TraditionalPlanProposedMaxCourses = 7;
this.CoopPlanList = [];
this.CoopPlanClicked = [];
this.CoopPlanLegendBtns = [];
this.CoopPlanLegendBtnsClicked = [];
this.CoopPlanClickedMap = new Map();
this.CoopPlanTerms = 13;
this.CoopPlanMaxCourses = 7;
this.CoopPlanProposedList = [];
this.CoopPlanProposedClicked = [];
this.CoopPlanProposedLegendBtns = [];
this.CoopPlanProposedLegendBtnsClicked = [];
this.CoopPlanProposedClickedMap = new Map();
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
          this.highlightElement(element, this.TraditionalPlanClicked[i][1]);
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
          this.highlightElement(element, this.TraditionalPlanProposedClicked[i][1]);
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
          this.highlightElement(element, this.CoopPlanClicked[i][1]);
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
          this.highlightElement(element, this.CoopPlanProposedClicked[i][1]);
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
this.addToClicked = function(element, category) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.TraditionalPlanClicked.push([element, category, 1]);
    }
    else {
        this.TraditionalPlanClicked[index][1] = category;
        this.TraditionalPlanClicked[index][2]++;
    }
    this.TraditionalPlanClickedMap.get(element).push(category);
    break; case "TraditionalPlanProposed":
    var index = this.TraditionalPlanProposedClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.TraditionalPlanProposedClicked.push([element, category, 1]);
    }
    else {
        this.TraditionalPlanProposedClicked[index][1] = category;
        this.TraditionalPlanProposedClicked[index][2]++;
    }
    this.TraditionalPlanProposedClickedMap.get(element).push(category);
    break; case "CoopPlan":
    var index = this.CoopPlanClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlanClicked.push([element, category, 1]);
    }
    else {
        this.CoopPlanClicked[index][1] = category;
        this.CoopPlanClicked[index][2]++;
    }
    this.CoopPlanClickedMap.get(element).push(category);
    break; case "CoopPlanProposed":
    var index = this.CoopPlanProposedClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlanProposedClicked.push([element, category, 1]);
    }
    else {
        this.CoopPlanProposedClicked[index][1] = category;
        this.CoopPlanProposedClicked[index][2]++;
    }
    this.CoopPlanProposedClickedMap.get(element).push(category);
    break;    default:
    console.log("shouldn't be here");
    }
};
this.removeFromClicked = function(element, category) {
switch($scope.selectedPlan) { 
 case "TraditionalPlan":
    var index = this.TraditionalPlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.TraditionalPlanClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.TraditionalPlanClickedMap.get(element).splice(indexMap, 1);
        }
        this.TraditionalPlanClicked[index][2]--;
        if (this.TraditionalPlanClicked[index][2] <= 0) {
            this.TraditionalPlanClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.TraditionalPlanClickedMap.get(element).length - 1
        return this.TraditionalPlanClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "TraditionalPlanProposed":
    var index = this.TraditionalPlanProposedClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.TraditionalPlanProposedClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.TraditionalPlanProposedClickedMap.get(element).splice(indexMap, 1);
        }
        this.TraditionalPlanProposedClicked[index][2]--;
        if (this.TraditionalPlanProposedClicked[index][2] <= 0) {
            this.TraditionalPlanProposedClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.TraditionalPlanProposedClickedMap.get(element).length - 1
        return this.TraditionalPlanProposedClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlan":
    var index = this.CoopPlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlanClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlanClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlanClicked[index][2]--;
        if (this.CoopPlanClicked[index][2] <= 0) {
            this.CoopPlanClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlanClickedMap.get(element).length - 1
        return this.CoopPlanClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlanProposed":
    var index = this.CoopPlanProposedClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlanProposedClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlanProposedClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlanProposedClicked[index][2]--;
        if (this.CoopPlanProposedClicked[index][2] <= 0) {
            this.CoopPlanProposedClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlanProposedClickedMap.get(element).length - 1
        return this.CoopPlanProposedClickedMap.get(element)[maxIndex];
    }
    return "";
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
 var element = document.getElementById("CHEM103TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHEM103TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHEM103TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHEM103TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103TraditionalPlan", categoryName);
 var element = document.getElementById("ENGG130TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGG130TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGG130TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGG130TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130TraditionalPlan", categoryName);
 var element = document.getElementById("PHYS130TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS130TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS130TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS130TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130TraditionalPlan", categoryName);
 var element = document.getElementById("CHEM105TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHEM105TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHEM105TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHEM105TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105TraditionalPlan", categoryName);
 var element = document.getElementById("ENCMP100TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENCMP100TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENCMP100TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENCMP100TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100TraditionalPlan", categoryName);
 var element = document.getElementById("ENPH131TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENPH131TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENPH131TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENPH131TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131TraditionalPlan", categoryName);
 var element = document.getElementById("EAS210TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("EAS210TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("EAS210TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("EAS210TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("EAS210TraditionalPlan", categoryName);
 var element = document.getElementById("CHEM371TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHEM371TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHEM371TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHEM371TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM371TraditionalPlan", categoryName);
 var element = document.getElementById("EAS222TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("EAS222TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("EAS222TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("EAS222TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("EAS222TraditionalPlan", categoryName);
 var element = document.getElementById("CHE314TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHE314TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHE314TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHE314TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE314TraditionalPlan", categoryName);
       break;
      case "TraditionalPlanProposed":
 var element = document.getElementById("CHEM103TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("CHEM103TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("CHEM103TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("CHEM103TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103TraditionalPlanProposed", categoryName);
 var element = document.getElementById("ENGG130TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("ENGG130TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("ENGG130TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("ENGG130TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PHYS130TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PHYS130TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PHYS130TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PHYS130TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130TraditionalPlanProposed", categoryName);
 var element = document.getElementById("CHEM105TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("CHEM105TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("CHEM105TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("CHEM105TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105TraditionalPlanProposed", categoryName);
 var element = document.getElementById("ENCMP100TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("ENCMP100TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("ENCMP100TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("ENCMP100TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100TraditionalPlanProposed", categoryName);
 var element = document.getElementById("ENPH131TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("ENPH131TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("ENPH131TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("ENPH131TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131TraditionalPlanProposed", categoryName);
 var element = document.getElementById("EAS210TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("EAS210TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("EAS210TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("EAS210TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("EAS210TraditionalPlanProposed", categoryName);
 var element = document.getElementById("CHEM371TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("CHEM371TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("CHEM371TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("CHEM371TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM371TraditionalPlanProposed", categoryName);
 var element = document.getElementById("CHE314TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("CHE314TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("CHE314TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("CHE314TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE314TraditionalPlanProposed", categoryName);
 var element = document.getElementById("EAS222TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("EAS222TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("EAS222TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("EAS222TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("EAS222TraditionalPlanProposed", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("CHEM103CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHEM103CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHEM103CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHEM103CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103CoopPlan", categoryName);
 var element = document.getElementById("ENGG130CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG130CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG130CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG130CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130CoopPlan", categoryName);
 var element = document.getElementById("PHYS130CoopPlan");
                            if (this.CoopPlanClickedMap.get("PHYS130CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PHYS130CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PHYS130CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130CoopPlan", categoryName);
 var element = document.getElementById("CHEM105CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHEM105CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHEM105CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHEM105CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105CoopPlan", categoryName);
 var element = document.getElementById("ENCMP100CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENCMP100CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENCMP100CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENCMP100CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100CoopPlan", categoryName);
 var element = document.getElementById("ENPH131CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENPH131CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENPH131CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENPH131CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131CoopPlan", categoryName);
 var element = document.getElementById("EAS210CoopPlan");
                            if (this.CoopPlanClickedMap.get("EAS210CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("EAS210CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("EAS210CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("EAS210CoopPlan", categoryName);
 var element = document.getElementById("EAS222CoopPlan");
                            if (this.CoopPlanClickedMap.get("EAS222CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("EAS222CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("EAS222CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("EAS222CoopPlan", categoryName);
 var element = document.getElementById("CHEM371CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHEM371CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHEM371CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHEM371CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM371CoopPlan", categoryName);
 var element = document.getElementById("CHE314CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHE314CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHE314CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHE314CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE314CoopPlan", categoryName);
       break;
      case "CoopPlanProposed":
 var element = document.getElementById("CHEM103CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("CHEM103CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("CHEM103CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("CHEM103CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103CoopPlanProposed", categoryName);
 var element = document.getElementById("ENGG130CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("ENGG130CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("ENGG130CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("ENGG130CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130CoopPlanProposed", categoryName);
 var element = document.getElementById("PHYS130CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PHYS130CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PHYS130CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PHYS130CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130CoopPlanProposed", categoryName);
 var element = document.getElementById("CHEM105CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("CHEM105CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("CHEM105CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("CHEM105CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105CoopPlanProposed", categoryName);
 var element = document.getElementById("ENCMP100CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("ENCMP100CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("ENCMP100CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("ENCMP100CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100CoopPlanProposed", categoryName);
 var element = document.getElementById("ENPH131CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("ENPH131CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("ENPH131CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("ENPH131CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131CoopPlanProposed", categoryName);
 var element = document.getElementById("EAS210CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("EAS210CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("EAS210CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("EAS210CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("EAS210CoopPlanProposed", categoryName);
 var element = document.getElementById("EAS222CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("EAS222CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("EAS222CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("EAS222CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("EAS222CoopPlanProposed", categoryName);
 var element = document.getElementById("CHEM371CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("CHEM371CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("CHEM371CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("CHEM371CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM371CoopPlanProposed", categoryName);
 var element = document.getElementById("CHE314CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("CHE314CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("CHE314CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("CHE314CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE314CoopPlanProposed", categoryName);
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("ENGG100TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGG100TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGG100TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGG100TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100TraditionalPlan", categoryName);
 var element = document.getElementById("ENGG404TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGG404TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGG404TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGG404TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404TraditionalPlan", categoryName);
 var element = document.getElementById("ENGG400TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400TraditionalPlan", categoryName);
       break;
      case "TraditionalPlanProposed":
 var element = document.getElementById("ENGG100TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("ENGG100TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("ENGG100TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("ENGG100TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100TraditionalPlanProposed", categoryName);
 var element = document.getElementById("ENGG404TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("ENGG404TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("ENGG404TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("ENGG404TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404TraditionalPlanProposed", categoryName);
 var element = document.getElementById("ENGG400TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("ENGG400TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("ENGG400TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("ENGG400TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400TraditionalPlanProposed", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("ENGG100CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG100CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG100CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG100CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100CoopPlan", categoryName);
 var element = document.getElementById("ENGG299CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG299CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG299CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG299CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG299CoopPlan", categoryName);
 var element = document.getElementById("WKEXP901CoopPlan");
                            if (this.CoopPlanClickedMap.get("WKEXP901CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("WKEXP901CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("WKEXP901CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP901CoopPlan", categoryName);
 var element = document.getElementById("WKEXP902CoopPlan");
                            if (this.CoopPlanClickedMap.get("WKEXP902CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("WKEXP902CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("WKEXP902CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP902CoopPlan", categoryName);
 var element = document.getElementById("WKEXP903CoopPlan");
                            if (this.CoopPlanClickedMap.get("WKEXP903CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("WKEXP903CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("WKEXP903CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP903CoopPlan", categoryName);
 var element = document.getElementById("WKEXP904CoopPlan");
                            if (this.CoopPlanClickedMap.get("WKEXP904CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("WKEXP904CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("WKEXP904CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP904CoopPlan", categoryName);
 var element = document.getElementById("WKEXP905CoopPlan");
                            if (this.CoopPlanClickedMap.get("WKEXP905CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("WKEXP905CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("WKEXP905CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP905CoopPlan", categoryName);
 var element = document.getElementById("ENGG404CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG404CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG404CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG404CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404CoopPlan", categoryName);
 var element = document.getElementById("ENGG400CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG400CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG400CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG400CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400CoopPlan", categoryName);
       break;
      case "CoopPlanProposed":
 var element = document.getElementById("ENGG100CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("ENGG100CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("ENGG100CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("ENGG100CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100CoopPlanProposed", categoryName);
 var element = document.getElementById("ENGG299CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("ENGG299CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("ENGG299CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("ENGG299CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG299CoopPlanProposed", categoryName);
 var element = document.getElementById("WKEXP901CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("WKEXP901CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("WKEXP901CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("WKEXP901CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP901CoopPlanProposed", categoryName);
 var element = document.getElementById("WKEXP902CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("WKEXP902CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("WKEXP902CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("WKEXP902CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP902CoopPlanProposed", categoryName);
 var element = document.getElementById("WKEXP903CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("WKEXP903CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("WKEXP903CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("WKEXP903CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP903CoopPlanProposed", categoryName);
 var element = document.getElementById("WKEXP904CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("WKEXP904CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("WKEXP904CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("WKEXP904CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP904CoopPlanProposed", categoryName);
 var element = document.getElementById("WKEXP905CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("WKEXP905CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("WKEXP905CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("WKEXP905CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP905CoopPlanProposed", categoryName);
 var element = document.getElementById("ENGG404CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("ENGG404CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("ENGG404CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("ENGG404CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404CoopPlanProposed", categoryName);
 var element = document.getElementById("ENGG400CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("ENGG400CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("ENGG400CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("ENGG400CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400CoopPlanProposed", categoryName);
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("ENGL199TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGL199TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGL199TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGL199TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199TraditionalPlan", categoryName);
 var element = document.getElementById("ENGM310TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGM310TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGM310TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGM310TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM310TraditionalPlan", categoryName);
 var element = document.getElementById("ENGM401TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGM401TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGM401TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGM401TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401TraditionalPlan", categoryName);
       break;
      case "TraditionalPlanProposed":
 var element = document.getElementById("ENGL199TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("ENGL199TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("ENGL199TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("ENGL199TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199TraditionalPlanProposed", categoryName);
 var element = document.getElementById("ENGM310TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("ENGM310TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("ENGM310TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("ENGM310TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM310TraditionalPlanProposed", categoryName);
 var element = document.getElementById("ENGM401TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("ENGM401TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("ENGM401TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("ENGM401TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401TraditionalPlanProposed", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("ENGL199CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGL199CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGL199CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGL199CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199CoopPlan", categoryName);
 var element = document.getElementById("ENGM310CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGM310CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGM310CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGM310CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM310CoopPlan", categoryName);
 var element = document.getElementById("ENGM401CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGM401CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGM401CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGM401CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401CoopPlan", categoryName);
       break;
      case "CoopPlanProposed":
 var element = document.getElementById("ENGL199CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("ENGL199CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("ENGL199CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("ENGL199CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199CoopPlanProposed", categoryName);
 var element = document.getElementById("ENGM310CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("ENGM310CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("ENGM310CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("ENGM310CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM310CoopPlanProposed", categoryName);
 var element = document.getElementById("ENGM401CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("ENGM401CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("ENGM401CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("ENGM401CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401CoopPlanProposed", categoryName);
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("MATH100TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH100TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH100TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH100TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100TraditionalPlan", categoryName);
 var element = document.getElementById("MATH101TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH101TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH101TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH101TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101TraditionalPlan", categoryName);
 var element = document.getElementById("MATH102TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH102TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH102TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH102TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102TraditionalPlan", categoryName);
 var element = document.getElementById("MATH209TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH209TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH209TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH209TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209TraditionalPlan", categoryName);
 var element = document.getElementById("MATH201TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH201TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH201TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH201TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201TraditionalPlan", categoryName);
 var element = document.getElementById("STAT235TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("STAT235TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("STAT235TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("STAT235TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("STAT235TraditionalPlan", categoryName);
 var element = document.getElementById("CHE374TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHE374TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHE374TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHE374TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE374TraditionalPlan", categoryName);
       break;
      case "TraditionalPlanProposed":
 var element = document.getElementById("MATH100TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("MATH100TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("MATH100TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("MATH100TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100TraditionalPlanProposed", categoryName);
 var element = document.getElementById("MATH101TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("MATH101TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("MATH101TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("MATH101TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101TraditionalPlanProposed", categoryName);
 var element = document.getElementById("MATH102TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("MATH102TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("MATH102TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("MATH102TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102TraditionalPlanProposed", categoryName);
 var element = document.getElementById("MATH209TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("MATH209TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("MATH209TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("MATH209TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209TraditionalPlanProposed", categoryName);
 var element = document.getElementById("MATH201TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("MATH201TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("MATH201TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("MATH201TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201TraditionalPlanProposed", categoryName);
 var element = document.getElementById("STAT235TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("STAT235TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("STAT235TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("STAT235TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("STAT235TraditionalPlanProposed", categoryName);
 var element = document.getElementById("CHE374TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("CHE374TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("CHE374TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("CHE374TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE374TraditionalPlanProposed", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("MATH100CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH100CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH100CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH100CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100CoopPlan", categoryName);
 var element = document.getElementById("MATH101CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH101CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH101CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH101CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101CoopPlan", categoryName);
 var element = document.getElementById("MATH102CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH102CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH102CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH102CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102CoopPlan", categoryName);
 var element = document.getElementById("MATH209CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH209CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH209CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH209CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209CoopPlan", categoryName);
 var element = document.getElementById("MATH201CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH201CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH201CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH201CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201CoopPlan", categoryName);
 var element = document.getElementById("STAT235CoopPlan");
                            if (this.CoopPlanClickedMap.get("STAT235CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("STAT235CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("STAT235CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("STAT235CoopPlan", categoryName);
 var element = document.getElementById("CHE374CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHE374CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHE374CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHE374CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE374CoopPlan", categoryName);
       break;
      case "CoopPlanProposed":
 var element = document.getElementById("MATH100CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("MATH100CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("MATH100CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("MATH100CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100CoopPlanProposed", categoryName);
 var element = document.getElementById("MATH101CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("MATH101CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("MATH101CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("MATH101CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101CoopPlanProposed", categoryName);
 var element = document.getElementById("MATH102CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("MATH102CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("MATH102CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("MATH102CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102CoopPlanProposed", categoryName);
 var element = document.getElementById("MATH209CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("MATH209CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("MATH209CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("MATH209CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209CoopPlanProposed", categoryName);
 var element = document.getElementById("MATH201CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("MATH201CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("MATH201CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("MATH201CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201CoopPlanProposed", categoryName);
 var element = document.getElementById("STAT235CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("STAT235CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("STAT235CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("STAT235CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("STAT235CoopPlanProposed", categoryName);
 var element = document.getElementById("CHE374CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("CHE374CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("CHE374CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("CHE374CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE374CoopPlanProposed", categoryName);
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("ENGG160TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGG160TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGG160TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGG160TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160TraditionalPlan", categoryName);
 var element = document.getElementById("PETE478TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE478TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE478TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE478TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE478TraditionalPlan", categoryName);
 var element = document.getElementById("PETE496TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE496TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE496TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE496TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE496TraditionalPlan", categoryName);
       break;
      case "TraditionalPlanProposed":
 var element = document.getElementById("ENGG160TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("ENGG160TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("ENGG160TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("ENGG160TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE478TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE478TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE478TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE478TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE478TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE496TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE496TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE496TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE496TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE496TraditionalPlanProposed", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("ENGG160CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG160CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG160CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG160CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160CoopPlan", categoryName);
 var element = document.getElementById("PETE478CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE478CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE478CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE478CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE478CoopPlan", categoryName);
 var element = document.getElementById("PETE496CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE496CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE496CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE496CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE496CoopPlan", categoryName);
       break;
      case "CoopPlanProposed":
 var element = document.getElementById("ENGG160CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("ENGG160CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("ENGG160CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("ENGG160CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE478CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE478CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE478CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE478CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE478CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE496CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE496CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE496CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE496CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE496CoopPlanProposed", categoryName);
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("CHE243TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243TraditionalPlan", categoryName);
 var element = document.getElementById("ECE209TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE209TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE209TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE209TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE209TraditionalPlan", categoryName);
 var element = document.getElementById("MATE202TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE202TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE202TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE202TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE202TraditionalPlan", categoryName);
 var element = document.getElementById("CHE312TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHE312TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHE312TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHE312TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE312TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE270TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270TraditionalPlan", categoryName);
 var element = document.getElementById("PETE275TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE275TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE275TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE275TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE275TraditionalPlan", categoryName);
 var element = document.getElementById("PETE364TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE364TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE364TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE364TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE364TraditionalPlan", categoryName);
 var element = document.getElementById("PETE373TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE373TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE373TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE373TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE373TraditionalPlan", categoryName);
 var element = document.getElementById("PETE365TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE365TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE365TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE365TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE365TraditionalPlan", categoryName);
 var element = document.getElementById("PETE366TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE366TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE366TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE366TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE366TraditionalPlan", categoryName);
 var element = document.getElementById("PETE444TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE444TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE444TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE444TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE444TraditionalPlan", categoryName);
 var element = document.getElementById("PETE475TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE475TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE475TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE475TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE475TraditionalPlan", categoryName);
 var element = document.getElementById("PETE476TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE476TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE476TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE476TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE476TraditionalPlan", categoryName);
 var element = document.getElementById("PETE484TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE484TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE484TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE484TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE484TraditionalPlan", categoryName);
 var element = document.getElementById("PETE471TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE471TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE471TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE471TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE471TraditionalPlan", categoryName);
 var element = document.getElementById("PETE477TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PETE477TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PETE477TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PETE477TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE477TraditionalPlan", categoryName);
       break;
      case "TraditionalPlanProposed":
 var element = document.getElementById("CHE243TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("CHE243TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("CHE243TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("CHE243TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243TraditionalPlanProposed", categoryName);
 var element = document.getElementById("ECE209TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("ECE209TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("ECE209TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("ECE209TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE209TraditionalPlanProposed", categoryName);
 var element = document.getElementById("MATE202TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("MATE202TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("MATE202TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("MATE202TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE202TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE275TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE275TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE275TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE275TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE275TraditionalPlanProposed", categoryName);
 var element = document.getElementById("CHE312TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("CHE312TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("CHE312TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("CHE312TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE312TraditionalPlanProposed", categoryName);
 var element = document.getElementById("CIVE270TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("CIVE270TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("CIVE270TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("CIVE270TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE295TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE295TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE295TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE295TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE295TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE364TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE364TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE364TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE364TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE364TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE375TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE375TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE375TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE375TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE375TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE365TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE365TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE365TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE365TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE365TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE366TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE366TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE366TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE366TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE366TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE377TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE377TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE377TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE377TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE377TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE444TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE444TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE444TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE444TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE444TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE476TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE476TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE476TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE476TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE476TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE484TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE484TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE484TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE484TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE484TraditionalPlanProposed", categoryName);
 var element = document.getElementById("PETE471TraditionalPlanProposed");
                            if (this.TraditionalPlanProposedClickedMap.get("PETE471TraditionalPlanProposed").length > 0) {
                                var mapLen = this.TraditionalPlanProposedClickedMap.get("PETE471TraditionalPlanProposed").length - 1
                                var prevCate = this.TraditionalPlanProposedClickedMap.get("PETE471TraditionalPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE471TraditionalPlanProposed", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("CHE243CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHE243CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHE243CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHE243CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243CoopPlan", categoryName);
 var element = document.getElementById("ECE209CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE209CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE209CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE209CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE209CoopPlan", categoryName);
 var element = document.getElementById("MATE202CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE202CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE202CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE202CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE202CoopPlan", categoryName);
 var element = document.getElementById("CHE312CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHE312CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHE312CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHE312CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE312CoopPlan", categoryName);
 var element = document.getElementById("CIVE270CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE270CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE270CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE270CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270CoopPlan", categoryName);
 var element = document.getElementById("PETE275CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE275CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE275CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE275CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE275CoopPlan", categoryName);
 var element = document.getElementById("PETE365CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE365CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE365CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE365CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE365CoopPlan", categoryName);
 var element = document.getElementById("PETE366CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE366CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE366CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE366CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE366CoopPlan", categoryName);
 var element = document.getElementById("PETE364CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE364CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE364CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE364CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE364CoopPlan", categoryName);
 var element = document.getElementById("PETE373CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE373CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE373CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE373CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE373CoopPlan", categoryName);
 var element = document.getElementById("PETE444CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE444CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE444CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE444CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE444CoopPlan", categoryName);
 var element = document.getElementById("PETE475CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE475CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE475CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE475CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE475CoopPlan", categoryName);
 var element = document.getElementById("PETE476CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE476CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE476CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE476CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE476CoopPlan", categoryName);
 var element = document.getElementById("PETE484CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE484CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE484CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE484CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE484CoopPlan", categoryName);
 var element = document.getElementById("PETE471CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE471CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE471CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE471CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE471CoopPlan", categoryName);
 var element = document.getElementById("PETE477CoopPlan");
                            if (this.CoopPlanClickedMap.get("PETE477CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PETE477CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PETE477CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE477CoopPlan", categoryName);
       break;
      case "CoopPlanProposed":
 var element = document.getElementById("CHE243CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("CHE243CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("CHE243CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("CHE243CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243CoopPlanProposed", categoryName);
 var element = document.getElementById("ECE209CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("ECE209CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("ECE209CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("ECE209CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE209CoopPlanProposed", categoryName);
 var element = document.getElementById("MATE202CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("MATE202CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("MATE202CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("MATE202CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE202CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE275CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE275CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE275CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE275CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE275CoopPlanProposed", categoryName);
 var element = document.getElementById("CHE312CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("CHE312CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("CHE312CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("CHE312CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE312CoopPlanProposed", categoryName);
 var element = document.getElementById("CIVE270CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("CIVE270CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("CIVE270CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("CIVE270CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE295CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE295CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE295CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE295CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE295CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE365CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE365CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE365CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE365CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE365CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE366CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE366CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE366CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE366CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE366CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE377CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE377CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE377CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE377CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE377CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE364CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE364CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE364CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE364CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE364CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE373CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE373CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE373CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE373CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE373CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE375CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE375CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE375CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE375CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE375CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE444CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE444CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE444CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE444CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE444CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE476CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE476CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE476CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE476CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE476CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE484CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE484CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE484CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE484CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE484CoopPlanProposed", categoryName);
 var element = document.getElementById("PETE471CoopPlanProposed");
                            if (this.CoopPlanProposedClickedMap.get("PETE471CoopPlanProposed").length > 0) {
                                var mapLen = this.CoopPlanProposedClickedMap.get("PETE471CoopPlanProposed").length - 1
                                var prevCate = this.CoopPlanProposedClickedMap.get("PETE471CoopPlanProposed")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PETE471CoopPlanProposed", categoryName);
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
          if (this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
       break;
      case "TraditionalPlanProposed":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed" + i).length > 0) {
                var mapLen = this.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed" + i).length - 1
                var prevCate = this.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveTraditionalPlanProposed" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed" + i).length > 0) {
                var mapLen = this.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed" + i).length - 1
                var prevCate = this.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveTraditionalPlanProposed" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed" + i).length > 0) {
                var mapLen = this.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed" + i).length - 1
                var prevCate = this.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveTraditionalPlanProposed" + i, categoryName);
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlan" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlan" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlan" + i, categoryName);
          i = i + 1;
        }
       break;
      case "CoopPlanProposed":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed" + i).length > 0) {
                var mapLen = this.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed" + i).length - 1
                var prevCate = this.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlanProposed" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed" + i).length > 0) {
                var mapLen = this.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed" + i).length - 1
                var prevCate = this.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlanProposed" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed" + i).length > 0) {
                var mapLen = this.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed" + i).length - 1
                var prevCate = this.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlanProposed" + i, categoryName);
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
          if (this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
       break;
      case "TraditionalPlanProposed":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.TraditionalPlanProposedClickedMap.get("ProgramTechnicalElectiveTraditionalPlanProposed" + i).length > 0) {
                var mapLen = this.TraditionalPlanProposedClickedMap.get("ProgramTechnicalElectiveTraditionalPlanProposed" + i).length - 1
                var prevCate = this.TraditionalPlanProposedClickedMap.get("ProgramTechnicalElectiveTraditionalPlanProposed" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveTraditionalPlanProposed" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.TraditionalPlanProposedClickedMap.get("ProgramTechnicalElectiveTraditionalPlanProposed" + i).length > 0) {
                var mapLen = this.TraditionalPlanProposedClickedMap.get("ProgramTechnicalElectiveTraditionalPlanProposed" + i).length - 1
                var prevCate = this.TraditionalPlanProposedClickedMap.get("ProgramTechnicalElectiveTraditionalPlanProposed" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveTraditionalPlanProposed" + i, categoryName);
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveCoopPlan" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveCoopPlan" + i, categoryName);
          i = i + 1;
        }
       break;
      case "CoopPlanProposed":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.CoopPlanProposedClickedMap.get("ProgramTechnicalElectiveCoopPlanProposed" + i).length > 0) {
                var mapLen = this.CoopPlanProposedClickedMap.get("ProgramTechnicalElectiveCoopPlanProposed" + i).length - 1
                var prevCate = this.CoopPlanProposedClickedMap.get("ProgramTechnicalElectiveCoopPlanProposed" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveCoopPlanProposed" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.CoopPlanProposedClickedMap.get("ProgramTechnicalElectiveCoopPlanProposed" + i).length > 0) {
                var mapLen = this.CoopPlanProposedClickedMap.get("ProgramTechnicalElectiveCoopPlanProposed" + i).length - 1
                var prevCate = this.CoopPlanProposedClickedMap.get("ProgramTechnicalElectiveCoopPlanProposed" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveCoopPlanProposed" + i, categoryName);
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
          if (this.TraditionalPlanClickedMap.get("ITSElectiveTraditionalPlan" + i).length > 0) {
                var mapLen = this.TraditionalPlanClickedMap.get("ITSElectiveTraditionalPlan" + i).length - 1
                var prevCate = this.TraditionalPlanClickedMap.get("ITSElectiveTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
       break;
      case "TraditionalPlanProposed":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.TraditionalPlanProposedClickedMap.get("ITSElectiveTraditionalPlanProposed" + i).length > 0) {
                var mapLen = this.TraditionalPlanProposedClickedMap.get("ITSElectiveTraditionalPlanProposed" + i).length - 1
                var prevCate = this.TraditionalPlanProposedClickedMap.get("ITSElectiveTraditionalPlanProposed" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveTraditionalPlanProposed" + i, categoryName);
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.CoopPlanClickedMap.get("ITSElectiveCoopPlan" + i).length > 0) {
                var mapLen = this.CoopPlanClickedMap.get("ITSElectiveCoopPlan" + i).length - 1
                var prevCate = this.CoopPlanClickedMap.get("ITSElectiveCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveCoopPlan" + i, categoryName);
          i = i + 1;
        }
       break;
      case "CoopPlanProposed":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.CoopPlanProposedClickedMap.get("ITSElectiveCoopPlanProposed" + i).length > 0) {
                var mapLen = this.CoopPlanProposedClickedMap.get("ITSElectiveCoopPlanProposed" + i).length - 1
                var prevCate = this.CoopPlanProposedClickedMap.get("ITSElectiveCoopPlanProposed" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveCoopPlanProposed" + i, categoryName);
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
     var element = document.getElementById("CHEM103TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHEM103TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG130TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS130TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHEM105TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENCMP100TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENPH131TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("EAS210TraditionalPlan");
                            var prevCate = this.removeFromClicked("EAS210TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM371TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHEM371TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("EAS222TraditionalPlan");
                            var prevCate = this.removeFromClicked("EAS222TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE314TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHE314TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "TraditionalPlanProposed":
     var element = document.getElementById("CHEM103TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("CHEM103TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("ENGG130TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PHYS130TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("CHEM105TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("ENCMP100TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("ENPH131TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("EAS210TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("EAS210TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM371TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("CHEM371TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE314TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("CHE314TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("EAS222TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("EAS222TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("CHEM103CoopPlan");
                            var prevCate = this.removeFromClicked("CHEM103CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG130CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130CoopPlan");
                            var prevCate = this.removeFromClicked("PHYS130CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105CoopPlan");
                            var prevCate = this.removeFromClicked("CHEM105CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100CoopPlan");
                            var prevCate = this.removeFromClicked("ENCMP100CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131CoopPlan");
                            var prevCate = this.removeFromClicked("ENPH131CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("EAS210CoopPlan");
                            var prevCate = this.removeFromClicked("EAS210CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("EAS222CoopPlan");
                            var prevCate = this.removeFromClicked("EAS222CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM371CoopPlan");
                            var prevCate = this.removeFromClicked("CHEM371CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE314CoopPlan");
                            var prevCate = this.removeFromClicked("CHE314CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlanProposed":
     var element = document.getElementById("CHEM103CoopPlanProposed");
                            var prevCate = this.removeFromClicked("CHEM103CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130CoopPlanProposed");
                            var prevCate = this.removeFromClicked("ENGG130CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PHYS130CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105CoopPlanProposed");
                            var prevCate = this.removeFromClicked("CHEM105CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100CoopPlanProposed");
                            var prevCate = this.removeFromClicked("ENCMP100CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131CoopPlanProposed");
                            var prevCate = this.removeFromClicked("ENPH131CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("EAS210CoopPlanProposed");
                            var prevCate = this.removeFromClicked("EAS210CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("EAS222CoopPlanProposed");
                            var prevCate = this.removeFromClicked("EAS222CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM371CoopPlanProposed");
                            var prevCate = this.removeFromClicked("CHEM371CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE314CoopPlanProposed");
                            var prevCate = this.removeFromClicked("CHE314CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
       }
      break;
  case "EngineeringProfession":
    switch(planName) {
      case "TraditionalPlan":
     var element = document.getElementById("ENGG100TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG100TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG404TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG400TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "TraditionalPlanProposed":
     var element = document.getElementById("ENGG100TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("ENGG100TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("ENGG404TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("ENGG400TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("ENGG100CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG100CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG299CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG299CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP901CoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP901CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP902CoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP902CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP903CoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP903CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP904CoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP904CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP905CoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP905CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG404CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG400CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlanProposed":
     var element = document.getElementById("ENGG100CoopPlanProposed");
                            var prevCate = this.removeFromClicked("ENGG100CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG299CoopPlanProposed");
                            var prevCate = this.removeFromClicked("ENGG299CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP901CoopPlanProposed");
                            var prevCate = this.removeFromClicked("WKEXP901CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP902CoopPlanProposed");
                            var prevCate = this.removeFromClicked("WKEXP902CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP903CoopPlanProposed");
                            var prevCate = this.removeFromClicked("WKEXP903CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP904CoopPlanProposed");
                            var prevCate = this.removeFromClicked("WKEXP904CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP905CoopPlanProposed");
                            var prevCate = this.removeFromClicked("WKEXP905CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404CoopPlanProposed");
                            var prevCate = this.removeFromClicked("ENGG404CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400CoopPlanProposed");
                            var prevCate = this.removeFromClicked("ENGG400CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
       }
      break;
  case "Other":
    switch(planName) {
      case "TraditionalPlan":
     var element = document.getElementById("ENGL199TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGL199TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM310TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGM310TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGM401TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "TraditionalPlanProposed":
     var element = document.getElementById("ENGL199TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("ENGL199TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM310TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("ENGM310TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("ENGM401TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("ENGL199CoopPlan");
                            var prevCate = this.removeFromClicked("ENGL199CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM310CoopPlan");
                            var prevCate = this.removeFromClicked("ENGM310CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401CoopPlan");
                            var prevCate = this.removeFromClicked("ENGM401CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlanProposed":
     var element = document.getElementById("ENGL199CoopPlanProposed");
                            var prevCate = this.removeFromClicked("ENGL199CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM310CoopPlanProposed");
                            var prevCate = this.removeFromClicked("ENGM310CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401CoopPlanProposed");
                            var prevCate = this.removeFromClicked("ENGM401CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
       }
      break;
  case "Math":
    switch(planName) {
      case "TraditionalPlan":
     var element = document.getElementById("MATH100TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH100TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH101TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH102TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH209TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH201TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("STAT235TraditionalPlan");
                            var prevCate = this.removeFromClicked("STAT235TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE374TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHE374TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "TraditionalPlanProposed":
     var element = document.getElementById("MATH100TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("MATH100TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("MATH101TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("MATH102TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("MATH209TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("MATH201TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("STAT235TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("STAT235TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE374TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("CHE374TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("MATH100CoopPlan");
                            var prevCate = this.removeFromClicked("MATH100CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101CoopPlan");
                            var prevCate = this.removeFromClicked("MATH101CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102CoopPlan");
                            var prevCate = this.removeFromClicked("MATH102CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209CoopPlan");
                            var prevCate = this.removeFromClicked("MATH209CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201CoopPlan");
                            var prevCate = this.removeFromClicked("MATH201CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("STAT235CoopPlan");
                            var prevCate = this.removeFromClicked("STAT235CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE374CoopPlan");
                            var prevCate = this.removeFromClicked("CHE374CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlanProposed":
     var element = document.getElementById("MATH100CoopPlanProposed");
                            var prevCate = this.removeFromClicked("MATH100CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101CoopPlanProposed");
                            var prevCate = this.removeFromClicked("MATH101CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102CoopPlanProposed");
                            var prevCate = this.removeFromClicked("MATH102CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209CoopPlanProposed");
                            var prevCate = this.removeFromClicked("MATH209CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201CoopPlanProposed");
                            var prevCate = this.removeFromClicked("MATH201CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("STAT235CoopPlanProposed");
                            var prevCate = this.removeFromClicked("STAT235CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE374CoopPlanProposed");
                            var prevCate = this.removeFromClicked("CHE374CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
       }
      break;
  case "EngineeringDesign":
    switch(planName) {
      case "TraditionalPlan":
     var element = document.getElementById("ENGG160TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG160TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE478TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE478TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE496TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE496TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "TraditionalPlanProposed":
     var element = document.getElementById("ENGG160TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("ENGG160TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE478TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE478TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE496TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE496TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("ENGG160CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG160CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE478CoopPlan");
                            var prevCate = this.removeFromClicked("PETE478CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE496CoopPlan");
                            var prevCate = this.removeFromClicked("PETE496CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlanProposed":
     var element = document.getElementById("ENGG160CoopPlanProposed");
                            var prevCate = this.removeFromClicked("ENGG160CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE478CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE478CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE496CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE496CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "TraditionalPlan":
     var element = document.getElementById("CHE243TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHE243TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE209TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE209TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE202TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE202TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE312TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHE312TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE270TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE270TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE275TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE275TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE364TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE364TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE373TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE373TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE365TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE365TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE366TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE366TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE444TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE444TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE475TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE475TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE476TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE476TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE484TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE484TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE471TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE471TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE477TraditionalPlan");
                            var prevCate = this.removeFromClicked("PETE477TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "TraditionalPlanProposed":
     var element = document.getElementById("CHE243TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("CHE243TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE209TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("ECE209TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE202TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("MATE202TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE275TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE275TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE312TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("CHE312TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE270TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("CIVE270TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE295TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE295TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE364TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE364TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE375TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE375TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE365TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE365TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE366TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE366TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE377TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE377TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE444TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE444TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE476TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE476TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE484TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE484TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE471TraditionalPlanProposed");
                            var prevCate = this.removeFromClicked("PETE471TraditionalPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("CHE243CoopPlan");
                            var prevCate = this.removeFromClicked("CHE243CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE209CoopPlan");
                            var prevCate = this.removeFromClicked("ECE209CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE202CoopPlan");
                            var prevCate = this.removeFromClicked("MATE202CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE312CoopPlan");
                            var prevCate = this.removeFromClicked("CHE312CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE270CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE270CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE275CoopPlan");
                            var prevCate = this.removeFromClicked("PETE275CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE365CoopPlan");
                            var prevCate = this.removeFromClicked("PETE365CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE366CoopPlan");
                            var prevCate = this.removeFromClicked("PETE366CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE364CoopPlan");
                            var prevCate = this.removeFromClicked("PETE364CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE373CoopPlan");
                            var prevCate = this.removeFromClicked("PETE373CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE444CoopPlan");
                            var prevCate = this.removeFromClicked("PETE444CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE475CoopPlan");
                            var prevCate = this.removeFromClicked("PETE475CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE476CoopPlan");
                            var prevCate = this.removeFromClicked("PETE476CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE484CoopPlan");
                            var prevCate = this.removeFromClicked("PETE484CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE471CoopPlan");
                            var prevCate = this.removeFromClicked("PETE471CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE477CoopPlan");
                            var prevCate = this.removeFromClicked("PETE477CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlanProposed":
     var element = document.getElementById("CHE243CoopPlanProposed");
                            var prevCate = this.removeFromClicked("CHE243CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE209CoopPlanProposed");
                            var prevCate = this.removeFromClicked("ECE209CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE202CoopPlanProposed");
                            var prevCate = this.removeFromClicked("MATE202CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE275CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE275CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE312CoopPlanProposed");
                            var prevCate = this.removeFromClicked("CHE312CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE270CoopPlanProposed");
                            var prevCate = this.removeFromClicked("CIVE270CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE295CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE295CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE365CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE365CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE366CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE366CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE377CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE377CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE364CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE364CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE373CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE373CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE375CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE375CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE444CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE444CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE476CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE476CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE484CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE484CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PETE471CoopPlanProposed");
                            var prevCate = this.removeFromClicked("PETE471CoopPlanProposed", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
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
          var prevCate = this.removeFromClicked("ComplementaryElectiveTraditionalPlan" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveTraditionalPlan" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveTraditionalPlan" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
      case "TraditionalPlanProposed":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveTraditionalPlanProposed" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveTraditionalPlanProposed" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveTraditionalPlanProposed" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlan" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlan" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlan" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
      case "CoopPlanProposed":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlanProposed" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlanProposed" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlanProposed" + i, "COMP");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
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
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
      case "TraditionalPlanProposed":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveTraditionalPlanProposed" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveTraditionalPlanProposed" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveCoopPlan" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveCoopPlan" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
      case "CoopPlanProposed":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveCoopPlanProposed" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveCoopPlanProposed" + i, "PROG");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
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
          var prevCate = this.removeFromClicked("ITSElectiveTraditionalPlan" + i, "ITS");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
      case "TraditionalPlanProposed":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveTraditionalPlanProposed" + i, "ITS");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
      case "CoopPlan":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveCoopPlan" + i, "ITS");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
          i = i + 1;
        }
       break;
      case "CoopPlanProposed":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveCoopPlanProposed" + i, "ITS");
                if (!currelement.classList.contains(categoryName+"-highlighted")) {
                    return;
                }
                else {
                    this.unHighlightElement(currelement, categoryName);
                    if (prevCate != "") {
                        this.highlightElement(currelement, prevCate);
                    }
                }      
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
this.TraditionalPlanClickedMap.set("CHEM103TraditionalPlan", []);
  var ENGG100TraditionalPlanflag = false;
  var ENGG100TraditionalPlanrflag = false;
 var ENGG100TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG100TraditionalPlan", []);
  var ENGG130TraditionalPlanflag = false;
  var ENGG130TraditionalPlanrflag = false;
 var ENGG130TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG130TraditionalPlan", []);
  var ENGL199TraditionalPlanflag = false;
  var ENGL199TraditionalPlanrflag = false;
 var ENGL199TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGL199TraditionalPlan", []);
  var MATH100TraditionalPlanflag = false;
  var MATH100TraditionalPlanrflag = false;
 var MATH100TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH100TraditionalPlan", []);
  var PHYS130TraditionalPlanflag = false;
  var PHYS130TraditionalPlanrflag = false;
 var PHYS130TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS130TraditionalPlan", []);
  var CHEM105TraditionalPlanflag = false;
  var CHEM105TraditionalPlanrflag = false;
 var CHEM105TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHEM105TraditionalPlan", []);
  var ENCMP100TraditionalPlanflag = false;
  var ENCMP100TraditionalPlanrflag = false;
 var ENCMP100TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENCMP100TraditionalPlan", []);
  var ENGG160TraditionalPlanflag = false;
  var ENGG160TraditionalPlanrflag = false;
 var ENGG160TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG160TraditionalPlan", []);
  var ENPH131TraditionalPlanflag = false;
  var ENPH131TraditionalPlanrflag = false;
 var ENPH131TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENPH131TraditionalPlan", []);
  var MATH101TraditionalPlanflag = false;
  var MATH101TraditionalPlanrflag = false;
 var MATH101TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH101TraditionalPlan", []);
  var MATH102TraditionalPlanflag = false;
  var MATH102TraditionalPlanrflag = false;
 var MATH102TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH102TraditionalPlan", []);
  var CHE243TraditionalPlanflag = false;
  var CHE243TraditionalPlanrflag = false;
 var CHE243TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHE243TraditionalPlan", []);
  var EAS210TraditionalPlanflag = false;
  var EAS210TraditionalPlanrflag = false;
 var EAS210TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("EAS210TraditionalPlan", []);
  var ECE209TraditionalPlanflag = false;
  var ECE209TraditionalPlanrflag = false;
 var ECE209TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE209TraditionalPlan", []);
  var MATE202TraditionalPlanflag = false;
  var MATE202TraditionalPlanrflag = false;
 var MATE202TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE202TraditionalPlan", []);
  var MATH209TraditionalPlanflag = false;
  var MATH209TraditionalPlanrflag = false;
 var MATH209TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH209TraditionalPlan", []);
  var ComplementaryElectiveTraditionalPlan0flag = false;
  var ComplementaryElectiveTraditionalPlan0rflag = false;
 var ComplementaryElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan0", []);
  var CHE312TraditionalPlanflag = false;
  var CHE312TraditionalPlanrflag = false;
 var CHE312TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHE312TraditionalPlan", []);
  var CIVE270TraditionalPlanflag = false;
  var CIVE270TraditionalPlanrflag = false;
 var CIVE270TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE270TraditionalPlan", []);
  var MATH201TraditionalPlanflag = false;
  var MATH201TraditionalPlanrflag = false;
 var MATH201TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH201TraditionalPlan", []);
  var PETE275TraditionalPlanflag = false;
  var PETE275TraditionalPlanrflag = false;
 var PETE275TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE275TraditionalPlan", []);
  var STAT235TraditionalPlanflag = false;
  var STAT235TraditionalPlanrflag = false;
 var STAT235TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("STAT235TraditionalPlan", []);
  var ComplementaryElectiveTraditionalPlan1flag = false;
  var ComplementaryElectiveTraditionalPlan1rflag = false;
 var ComplementaryElectiveTraditionalPlan1Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan1", []);
  var CHEM371TraditionalPlanflag = false;
  var CHEM371TraditionalPlanrflag = false;
 var CHEM371TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHEM371TraditionalPlan", []);
  var ENGM310TraditionalPlanflag = false;
  var ENGM310TraditionalPlanrflag = false;
 var ENGM310TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGM310TraditionalPlan", []);
  var ENGM401TraditionalPlanflag = false;
  var ENGM401TraditionalPlanrflag = false;
 var ENGM401TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGM401TraditionalPlan", []);
  var PETE364TraditionalPlanflag = false;
  var PETE364TraditionalPlanrflag = false;
 var PETE364TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE364TraditionalPlan", []);
  var PETE373TraditionalPlanflag = false;
  var PETE373TraditionalPlanrflag = false;
 var PETE373TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE373TraditionalPlan", []);
  var ProgramTechnicalElectiveTraditionalPlan0flag = false;
  var ProgramTechnicalElectiveTraditionalPlan0rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan0", []);
  var ComplementaryElectiveTraditionalPlan2flag = false;
  var ComplementaryElectiveTraditionalPlan2rflag = false;
 var ComplementaryElectiveTraditionalPlan2Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan2", []);
  var CHE374TraditionalPlanflag = false;
  var CHE374TraditionalPlanrflag = false;
 var CHE374TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHE374TraditionalPlan", []);
  var EAS222TraditionalPlanflag = false;
  var EAS222TraditionalPlanrflag = false;
 var EAS222TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("EAS222TraditionalPlan", []);
  var PETE365TraditionalPlanflag = false;
  var PETE365TraditionalPlanrflag = false;
 var PETE365TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE365TraditionalPlan", []);
  var PETE366TraditionalPlanflag = false;
  var PETE366TraditionalPlanrflag = false;
 var PETE366TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE366TraditionalPlan", []);
  var ProgramTechnicalElectiveTraditionalPlan1flag = false;
  var ProgramTechnicalElectiveTraditionalPlan1rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan1Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan1", []);
  var CHE314TraditionalPlanflag = false;
  var CHE314TraditionalPlanrflag = false;
 var CHE314TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHE314TraditionalPlan", []);
  var ENGG404TraditionalPlanflag = false;
  var ENGG404TraditionalPlanrflag = false;
 var ENGG404TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG404TraditionalPlan", []);
  var PETE444TraditionalPlanflag = false;
  var PETE444TraditionalPlanrflag = false;
 var PETE444TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE444TraditionalPlan", []);
  var PETE475TraditionalPlanflag = false;
  var PETE475TraditionalPlanrflag = false;
 var PETE475TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE475TraditionalPlan", []);
  var PETE476TraditionalPlanflag = false;
  var PETE476TraditionalPlanrflag = false;
 var PETE476TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE476TraditionalPlan", []);
  var PETE484TraditionalPlanflag = false;
  var PETE484TraditionalPlanrflag = false;
 var PETE484TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE484TraditionalPlan", []);
  var ENGG400TraditionalPlanflag = false;
  var ENGG400TraditionalPlanrflag = false;
 var ENGG400TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG400TraditionalPlan", []);
  var PETE471TraditionalPlanflag = false;
  var PETE471TraditionalPlanrflag = false;
 var PETE471TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE471TraditionalPlan", []);
  var PETE477TraditionalPlanflag = false;
  var PETE477TraditionalPlanrflag = false;
 var PETE477TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE477TraditionalPlan", []);
  var PETE478TraditionalPlanflag = false;
  var PETE478TraditionalPlanrflag = false;
 var PETE478TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE478TraditionalPlan", []);
  var PETE496TraditionalPlanflag = false;
  var PETE496TraditionalPlanrflag = false;
 var PETE496TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PETE496TraditionalPlan", []);
  var ITSElectiveTraditionalPlan0flag = false;
  var ITSElectiveTraditionalPlan0rflag = false;
 var ITSElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ITSElectiveTraditionalPlan0", []);
$scope.CHEM103TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103TraditionalPlanTime <= 200) { 
        CHEM103TraditionalPlanTime = currentTime;
        return;
    }
CHEM103TraditionalPlanTime = currentTime;
  var CHEM103TraditionalPlanelement = document.getElementById("CHEM103TraditionalPlan");
 if (!CHEM103TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CHEM103TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHEM103TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHEM103TraditionalPlan")[i];
        if (CHEM103TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine2());
     that.highlightElement(CHEM103TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM103TraditionalPlan", "NaturalSciences");
      CHEM103TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
     that.unHighlightElement(CHEM103TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ENGG100TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGG100TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGG100TraditionalPlan")[i];
        if (ENGG100TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG100TraditionalPlan", "EngineeringProfession");
      ENGG100TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG100TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ENGG130TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGG130TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGG130TraditionalPlan")[i];
        if (ENGG130TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine0());
      that.addLine(getLine5());
      that.addLine(getLine17());
     that.highlightElement(ENGG130TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130TraditionalPlan", "NaturalSciences");
      ENGG130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine5());
      that.removeLine(getLine17());
     that.unHighlightElement(ENGG130TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ENGL199TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGL199TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGL199TraditionalPlan")[i];
        if (ENGL199TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine3());
     that.highlightElement(ENGL199TraditionalPlanelement, "Other");
     that.addToClicked("ENGL199TraditionalPlan", "Other");
      ENGL199TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
     that.unHighlightElement(ENGL199TraditionalPlanelement, "Other");
     var category = that.removeFromClicked("ENGL199TraditionalPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("MATH100TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATH100TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATH100TraditionalPlan")[i];
        if (MATH100TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine0());
      that.addLine(getLine1());
      that.addLine(getLine4());
      that.addLine(getLine7());
      that.addLine(getLine8());
      that.addLine(getLine21());
     that.highlightElement(MATH100TraditionalPlanelement, "Math");
     that.addToClicked("MATH100TraditionalPlan", "Math");
      MATH100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine1());
      that.removeLine(getLine4());
      that.removeLine(getLine7());
      that.removeLine(getLine8());
      that.removeLine(getLine21());
     that.unHighlightElement(MATH100TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH100TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH100TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PHYS130TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS130TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS130TraditionalPlan")[i];
        if (PHYS130TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine1());
     that.highlightElement(PHYS130TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS130TraditionalPlan", "NaturalSciences");
      PHYS130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine1());
     that.unHighlightElement(PHYS130TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("CHEM105TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHEM105TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHEM105TraditionalPlan")[i];
        if (CHEM105TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine2());
      that.addLine(getLine10());
      that.addLine(getLine20());
      that.addLine(getLine23());
     that.highlightElement(CHEM105TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105TraditionalPlan", "NaturalSciences");
      CHEM105TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
      that.removeLine(getLine10());
      that.removeLine(getLine20());
      that.removeLine(getLine23());
     that.unHighlightElement(CHEM105TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ENCMP100TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENCMP100TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENCMP100TraditionalPlan")[i];
        if (ENCMP100TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine28());
     that.highlightElement(ENCMP100TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100TraditionalPlan", "NaturalSciences");
      ENCMP100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine28());
     that.unHighlightElement(ENCMP100TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ENGG160TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGG160TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGG160TraditionalPlan")[i];
        if (ENGG160TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine3());
     that.highlightElement(ENGG160TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ENGG160TraditionalPlan", "EngineeringDesign");
      ENGG160TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine3());
     that.unHighlightElement(ENGG160TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ENPH131TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENPH131TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENPH131TraditionalPlan")[i];
        if (ENPH131TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine4());
      that.addLine(getLine5());
      that.addLine(getLine6());
      that.addLine(getLine14());
     that.highlightElement(ENPH131TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131TraditionalPlan", "NaturalSciences");
      ENPH131TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine14());
     that.unHighlightElement(ENPH131TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("MATH101TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATH101TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATH101TraditionalPlan")[i];
        if (MATH101TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine6());
      that.addLine(getLine7());
      that.addLine(getLine9());
      that.addLine(getLine11());
      that.addLine(getLine18());
      that.addLine(getLine22());
      that.addLine(getLine24());
     that.highlightElement(MATH101TraditionalPlanelement, "Math");
     that.addToClicked("MATH101TraditionalPlan", "Math");
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
     that.unHighlightElement(MATH101TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH101TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH101TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("MATH102TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATH102TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATH102TraditionalPlan")[i];
        if (MATH102TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine8());
      that.addLine(getLine12());
     that.highlightElement(MATH102TraditionalPlanelement, "Math");
     that.addToClicked("MATH102TraditionalPlan", "Math");
      MATH102TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine12());
     that.unHighlightElement(MATH102TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH102TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH102TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHE243TraditionalPlan")[i];
        if (CHE243TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine9());
      that.addLine(getLine13());
     that.highlightElement(CHE243TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CHE243TraditionalPlan", "EngineeringSciences");
      CHE243TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine9());
      that.removeLine(getLine13());
     that.unHighlightElement(CHE243TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("EAS210TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("EAS210TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("EAS210TraditionalPlan")[i];
        if (EAS210TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(EAS210TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine29());
     that.highlightElement(EAS210TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("EAS210TraditionalPlan", "NaturalSciences");
      EAS210TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine29());
     that.unHighlightElement(EAS210TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("EAS210TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS210TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ECE209TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE209TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE209TraditionalPlan")[i];
        if (ECE209TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE209TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE209TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE209TraditionalPlan", "EngineeringSciences");
      ECE209TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ECE209TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE209TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE209TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("MATE202TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE202TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE202TraditionalPlan")[i];
        if (MATE202TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE202TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine10());
     that.highlightElement(MATE202TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE202TraditionalPlan", "EngineeringSciences");
      MATE202TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine10());
     that.unHighlightElement(MATE202TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE202TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE202TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("MATH209TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATH209TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATH209TraditionalPlan")[i];
        if (MATH209TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine11());
      that.addLine(getLine12());
      that.addLine(getLine15());
      that.addLine(getLine19());
     that.highlightElement(MATH209TraditionalPlanelement, "Math");
     that.addToClicked("MATH209TraditionalPlan", "Math");
      MATH209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine12());
      that.removeLine(getLine15());
      that.removeLine(getLine19());
     that.unHighlightElement(MATH209TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH209TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan0").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan0")[i];
        if (ComplementaryElectiveTraditionalPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveTraditionalPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveTraditionalPlan0element, "COMP");
     that.addToClicked("ComplementaryElectiveTraditionalPlan0", "COMP");
      ComplementaryElectiveTraditionalPlan0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveTraditionalPlan0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveTraditionalPlan0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveTraditionalPlan0element, category);
}
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
     if (that.TraditionalPlanClickedMap.get("CHE312TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHE312TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHE312TraditionalPlan")[i];
        if (CHE312TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE312TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine13());
      that.addLine(getLine14());
      that.addLine(getLine15());
      that.addLine(getLine16());
      that.addLine(getLine25());
      that.addLine(getLine31());
      that.addLine(getLine33());
     that.highlightElement(CHE312TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CHE312TraditionalPlan", "EngineeringSciences");
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
     that.unHighlightElement(CHE312TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE312TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE312TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan")[i];
        if (CIVE270TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine17());
      that.addLine(getLine18());
      that.addLine(getLine26());
     that.highlightElement(CIVE270TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE270TraditionalPlan", "EngineeringSciences");
      CIVE270TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine17());
      that.removeLine(getLine18());
      that.removeLine(getLine26());
     that.unHighlightElement(CIVE270TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("MATH201TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATH201TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATH201TraditionalPlan")[i];
        if (MATH201TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine16());
      that.addLine(getLine19());
      that.addLine(getLine32());
     that.highlightElement(MATH201TraditionalPlanelement, "Math");
     that.addToClicked("MATH201TraditionalPlan", "Math");
      MATH201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine16());
      that.removeLine(getLine19());
      that.removeLine(getLine32());
     that.unHighlightElement(MATH201TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH201TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH201TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE275TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE275TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE275TraditionalPlan")[i];
        if (PETE275TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE275TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine20());
      that.addLine(getLine27());
      that.addLine(getLine30());
      that.addLine(getLine35());
     that.highlightElement(PETE275TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PETE275TraditionalPlan", "EngineeringSciences");
      PETE275TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine20());
      that.removeLine(getLine27());
      that.removeLine(getLine30());
      that.removeLine(getLine35());
     that.unHighlightElement(PETE275TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE275TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE275TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("STAT235TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("STAT235TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("STAT235TraditionalPlan")[i];
        if (STAT235TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(STAT235TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine21());
      that.addLine(getLine22());
     that.highlightElement(STAT235TraditionalPlanelement, "Math");
     that.addToClicked("STAT235TraditionalPlan", "Math");
      STAT235TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine22());
     that.unHighlightElement(STAT235TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("STAT235TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(STAT235TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan1").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan1")[i];
        if (ComplementaryElectiveTraditionalPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveTraditionalPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveTraditionalPlan1element, "COMP");
     that.addToClicked("ComplementaryElectiveTraditionalPlan1", "COMP");
      ComplementaryElectiveTraditionalPlan1flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveTraditionalPlan1element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveTraditionalPlan1", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveTraditionalPlan1element, category);
}
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
     if (that.TraditionalPlanClickedMap.get("CHEM371TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHEM371TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHEM371TraditionalPlan")[i];
        if (CHEM371TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM371TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine23());
      that.addLine(getLine24());
     that.highlightElement(CHEM371TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM371TraditionalPlan", "NaturalSciences");
      CHEM371TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine23());
      that.removeLine(getLine24());
     that.unHighlightElement(CHEM371TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM371TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM371TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ENGM310TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGM310TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGM310TraditionalPlan")[i];
        if (ENGM310TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM310TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine37());
     that.highlightElement(ENGM310TraditionalPlanelement, "Other");
     that.addToClicked("ENGM310TraditionalPlan", "Other");
      ENGM310TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine37());
     that.unHighlightElement(ENGM310TraditionalPlanelement, "Other");
     var category = that.removeFromClicked("ENGM310TraditionalPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM310TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ENGM401TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGM401TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGM401TraditionalPlan")[i];
        if (ENGM401TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine38());
     that.highlightElement(ENGM401TraditionalPlanelement, "Other");
     that.addToClicked("ENGM401TraditionalPlan", "Other");
      ENGM401TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine38());
     that.unHighlightElement(ENGM401TraditionalPlanelement, "Other");
     var category = that.removeFromClicked("ENGM401TraditionalPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE364TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE364TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE364TraditionalPlan")[i];
        if (PETE364TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE364TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine25());
      that.addLine(getLine26());
     that.highlightElement(PETE364TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PETE364TraditionalPlan", "EngineeringSciences");
      PETE364TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine25());
      that.removeLine(getLine26());
     that.unHighlightElement(PETE364TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE364TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE364TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE373TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE373TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE373TraditionalPlan")[i];
        if (PETE373TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE373TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine27());
      that.addLine(getLine36());
      that.addLine(getLine39());
      that.addLine(getLine40());
      that.addLine(getLine42());
     that.highlightElement(PETE373TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PETE373TraditionalPlan", "EngineeringSciences");
      PETE373TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine27());
      that.removeLine(getLine36());
      that.removeLine(getLine39());
      that.removeLine(getLine40());
      that.removeLine(getLine42());
     that.unHighlightElement(PETE373TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE373TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE373TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan0").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan0")[i];
        if (ProgramTechnicalElectiveTraditionalPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan0element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlan0", "PROG");
      ProgramTechnicalElectiveTraditionalPlan0flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan0element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan0", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan0element, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan2").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ComplementaryElectiveTraditionalPlan2")[i];
        if (ComplementaryElectiveTraditionalPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveTraditionalPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveTraditionalPlan2element, "COMP");
     that.addToClicked("ComplementaryElectiveTraditionalPlan2", "COMP");
      ComplementaryElectiveTraditionalPlan2flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveTraditionalPlan2element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveTraditionalPlan2", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveTraditionalPlan2element, category);
}
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
     if (that.TraditionalPlanClickedMap.get("CHE374TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHE374TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHE374TraditionalPlan")[i];
        if (CHE374TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE374TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine28());
      that.addLine(getLine34());
      that.addLine(getLine41());
     that.highlightElement(CHE374TraditionalPlanelement, "Math");
     that.addToClicked("CHE374TraditionalPlan", "Math");
      CHE374TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine28());
      that.removeLine(getLine34());
      that.removeLine(getLine41());
     that.unHighlightElement(CHE374TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("CHE374TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(CHE374TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("EAS222TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("EAS222TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("EAS222TraditionalPlan")[i];
        if (EAS222TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(EAS222TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine29());
     that.highlightElement(EAS222TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("EAS222TraditionalPlan", "NaturalSciences");
      EAS222TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine29());
     that.unHighlightElement(EAS222TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("EAS222TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS222TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE365TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE365TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE365TraditionalPlan")[i];
        if (PETE365TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE365TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine30());
     that.highlightElement(PETE365TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PETE365TraditionalPlan", "EngineeringSciences");
      PETE365TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine30());
     that.unHighlightElement(PETE365TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE365TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE365TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE366TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE366TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE366TraditionalPlan")[i];
        if (PETE366TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE366TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine31());
     that.highlightElement(PETE366TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PETE366TraditionalPlan", "EngineeringSciences");
      PETE366TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine31());
     that.unHighlightElement(PETE366TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE366TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE366TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan1").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan1")[i];
        if (ProgramTechnicalElectiveTraditionalPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan1element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlan1", "PROG");
      ProgramTechnicalElectiveTraditionalPlan1flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan1element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan1", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan1element, category);
}
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
     if (that.TraditionalPlanClickedMap.get("CHE314TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CHE314TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CHE314TraditionalPlan")[i];
        if (CHE314TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE314TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine32());
      that.addLine(getLine33());
      that.addLine(getLine34());
     that.highlightElement(CHE314TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHE314TraditionalPlan", "NaturalSciences");
      CHE314TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine32());
      that.removeLine(getLine33());
      that.removeLine(getLine34());
     that.unHighlightElement(CHE314TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHE314TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHE314TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ENGG404TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGG404TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGG404TraditionalPlan")[i];
        if (ENGG404TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG404TraditionalPlan", "EngineeringProfession");
      ENGG404TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG404TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE444TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE444TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE444TraditionalPlan")[i];
        if (PETE444TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE444TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine35());
     that.highlightElement(PETE444TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PETE444TraditionalPlan", "EngineeringSciences");
      PETE444TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine35());
     that.unHighlightElement(PETE444TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE444TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE444TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE475TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE475TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE475TraditionalPlan")[i];
        if (PETE475TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE475TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine36());
     that.highlightElement(PETE475TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PETE475TraditionalPlan", "EngineeringSciences");
      PETE475TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine36());
     that.unHighlightElement(PETE475TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE475TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE475TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE476TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE476TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE476TraditionalPlan")[i];
        if (PETE476TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE476TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(PETE476TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PETE476TraditionalPlan", "EngineeringSciences");
      PETE476TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(PETE476TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE476TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE476TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE484TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE484TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE484TraditionalPlan")[i];
        if (PETE484TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE484TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine37());
      that.addLine(getLine38());
      that.addLine(getLine43());
     that.highlightElement(PETE484TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PETE484TraditionalPlan", "EngineeringSciences");
      PETE484TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine37());
      that.removeLine(getLine38());
      that.removeLine(getLine43());
     that.unHighlightElement(PETE484TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE484TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE484TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan")[i];
        if (ENGG400TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG400TraditionalPlan", "EngineeringProfession");
      ENGG400TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG400TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE471TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE471TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE471TraditionalPlan")[i];
        if (PETE471TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE471TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine39());
     that.highlightElement(PETE471TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PETE471TraditionalPlan", "EngineeringSciences");
      PETE471TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine39());
     that.unHighlightElement(PETE471TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE471TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE471TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE477TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE477TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE477TraditionalPlan")[i];
        if (PETE477TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE477TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine40());
      that.addLine(getLine41());
     that.highlightElement(PETE477TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PETE477TraditionalPlan", "EngineeringSciences");
      PETE477TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine40());
      that.removeLine(getLine41());
     that.unHighlightElement(PETE477TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE477TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE477TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE478TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE478TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE478TraditionalPlan")[i];
        if (PETE478TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE478TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine42());
     that.highlightElement(PETE478TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("PETE478TraditionalPlan", "EngineeringDesign");
      PETE478TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine42());
     that.unHighlightElement(PETE478TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("PETE478TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(PETE478TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("PETE496TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PETE496TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PETE496TraditionalPlan")[i];
        if (PETE496TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE496TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine43());
     that.highlightElement(PETE496TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("PETE496TraditionalPlan", "EngineeringDesign");
      PETE496TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine43());
     that.unHighlightElement(PETE496TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("PETE496TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(PETE496TraditionalPlanelement, category);
}
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
     if (that.TraditionalPlanClickedMap.get("ITSElectiveTraditionalPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ITSElectiveTraditionalPlan0").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ITSElectiveTraditionalPlan0")[i];
        if (ITSElectiveTraditionalPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveTraditionalPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveTraditionalPlan0element, "ITS");
     that.addToClicked("ITSElectiveTraditionalPlan0", "ITS");
      ITSElectiveTraditionalPlan0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveTraditionalPlan0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveTraditionalPlan0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveTraditionalPlan0element, category);
}
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
this.TraditionalPlanProposedClickedMap.set("CHEM103TraditionalPlanProposed", []);
  var ENGG100TraditionalPlanProposedflag = false;
  var ENGG100TraditionalPlanProposedrflag = false;
 var ENGG100TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ENGG100TraditionalPlanProposed", []);
  var ENGG130TraditionalPlanProposedflag = false;
  var ENGG130TraditionalPlanProposedrflag = false;
 var ENGG130TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ENGG130TraditionalPlanProposed", []);
  var ENGL199TraditionalPlanProposedflag = false;
  var ENGL199TraditionalPlanProposedrflag = false;
 var ENGL199TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ENGL199TraditionalPlanProposed", []);
  var MATH100TraditionalPlanProposedflag = false;
  var MATH100TraditionalPlanProposedrflag = false;
 var MATH100TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("MATH100TraditionalPlanProposed", []);
  var PHYS130TraditionalPlanProposedflag = false;
  var PHYS130TraditionalPlanProposedrflag = false;
 var PHYS130TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PHYS130TraditionalPlanProposed", []);
  var CHEM105TraditionalPlanProposedflag = false;
  var CHEM105TraditionalPlanProposedrflag = false;
 var CHEM105TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("CHEM105TraditionalPlanProposed", []);
  var ENCMP100TraditionalPlanProposedflag = false;
  var ENCMP100TraditionalPlanProposedrflag = false;
 var ENCMP100TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ENCMP100TraditionalPlanProposed", []);
  var ENGG160TraditionalPlanProposedflag = false;
  var ENGG160TraditionalPlanProposedrflag = false;
 var ENGG160TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ENGG160TraditionalPlanProposed", []);
  var ENPH131TraditionalPlanProposedflag = false;
  var ENPH131TraditionalPlanProposedrflag = false;
 var ENPH131TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ENPH131TraditionalPlanProposed", []);
  var MATH101TraditionalPlanProposedflag = false;
  var MATH101TraditionalPlanProposedrflag = false;
 var MATH101TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("MATH101TraditionalPlanProposed", []);
  var MATH102TraditionalPlanProposedflag = false;
  var MATH102TraditionalPlanProposedrflag = false;
 var MATH102TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("MATH102TraditionalPlanProposed", []);
  var CHE243TraditionalPlanProposedflag = false;
  var CHE243TraditionalPlanProposedrflag = false;
 var CHE243TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("CHE243TraditionalPlanProposed", []);
  var EAS210TraditionalPlanProposedflag = false;
  var EAS210TraditionalPlanProposedrflag = false;
 var EAS210TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("EAS210TraditionalPlanProposed", []);
  var ECE209TraditionalPlanProposedflag = false;
  var ECE209TraditionalPlanProposedrflag = false;
 var ECE209TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ECE209TraditionalPlanProposed", []);
  var MATE202TraditionalPlanProposedflag = false;
  var MATE202TraditionalPlanProposedrflag = false;
 var MATE202TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("MATE202TraditionalPlanProposed", []);
  var MATH209TraditionalPlanProposedflag = false;
  var MATH209TraditionalPlanProposedrflag = false;
 var MATH209TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("MATH209TraditionalPlanProposed", []);
  var PETE275TraditionalPlanProposedflag = false;
  var PETE275TraditionalPlanProposedrflag = false;
 var PETE275TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE275TraditionalPlanProposed", []);
  var CHE312TraditionalPlanProposedflag = false;
  var CHE312TraditionalPlanProposedrflag = false;
 var CHE312TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("CHE312TraditionalPlanProposed", []);
  var CIVE270TraditionalPlanProposedflag = false;
  var CIVE270TraditionalPlanProposedrflag = false;
 var CIVE270TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("CIVE270TraditionalPlanProposed", []);
  var MATH201TraditionalPlanProposedflag = false;
  var MATH201TraditionalPlanProposedrflag = false;
 var MATH201TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("MATH201TraditionalPlanProposed", []);
  var PETE295TraditionalPlanProposedflag = false;
  var PETE295TraditionalPlanProposedrflag = false;
 var PETE295TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE295TraditionalPlanProposed", []);
  var STAT235TraditionalPlanProposedflag = false;
  var STAT235TraditionalPlanProposedrflag = false;
 var STAT235TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("STAT235TraditionalPlanProposed", []);
  var ComplementaryElectiveTraditionalPlanProposed0flag = false;
  var ComplementaryElectiveTraditionalPlanProposed0rflag = false;
 var ComplementaryElectiveTraditionalPlanProposed0Time = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ComplementaryElectiveTraditionalPlanProposed0", []);
  var CHEM371TraditionalPlanProposedflag = false;
  var CHEM371TraditionalPlanProposedrflag = false;
 var CHEM371TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("CHEM371TraditionalPlanProposed", []);
  var ENGM310TraditionalPlanProposedflag = false;
  var ENGM310TraditionalPlanProposedrflag = false;
 var ENGM310TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ENGM310TraditionalPlanProposed", []);
  var ENGM401TraditionalPlanProposedflag = false;
  var ENGM401TraditionalPlanProposedrflag = false;
 var ENGM401TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ENGM401TraditionalPlanProposed", []);
  var PETE364TraditionalPlanProposedflag = false;
  var PETE364TraditionalPlanProposedrflag = false;
 var PETE364TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE364TraditionalPlanProposed", []);
  var CHE314TraditionalPlanProposedflag = false;
  var CHE314TraditionalPlanProposedrflag = false;
 var CHE314TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("CHE314TraditionalPlanProposed", []);
  var PETE375TraditionalPlanProposedflag = false;
  var PETE375TraditionalPlanProposedrflag = false;
 var PETE375TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE375TraditionalPlanProposed", []);
  var ComplementaryElectiveTraditionalPlanProposed1flag = false;
  var ComplementaryElectiveTraditionalPlanProposed1rflag = false;
 var ComplementaryElectiveTraditionalPlanProposed1Time = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ComplementaryElectiveTraditionalPlanProposed1", []);
  var CHE374TraditionalPlanProposedflag = false;
  var CHE374TraditionalPlanProposedrflag = false;
 var CHE374TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("CHE374TraditionalPlanProposed", []);
  var EAS222TraditionalPlanProposedflag = false;
  var EAS222TraditionalPlanProposedrflag = false;
 var EAS222TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("EAS222TraditionalPlanProposed", []);
  var PETE365TraditionalPlanProposedflag = false;
  var PETE365TraditionalPlanProposedrflag = false;
 var PETE365TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE365TraditionalPlanProposed", []);
  var PETE366TraditionalPlanProposedflag = false;
  var PETE366TraditionalPlanProposedrflag = false;
 var PETE366TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE366TraditionalPlanProposed", []);
  var PETE377TraditionalPlanProposedflag = false;
  var PETE377TraditionalPlanProposedrflag = false;
 var PETE377TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE377TraditionalPlanProposed", []);
  var ProgramTechnicalElectiveTraditionalPlanProposed0flag = false;
  var ProgramTechnicalElectiveTraditionalPlanProposed0rflag = false;
 var ProgramTechnicalElectiveTraditionalPlanProposed0Time = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ProgramTechnicalElectiveTraditionalPlanProposed0", []);
  var ENGG404TraditionalPlanProposedflag = false;
  var ENGG404TraditionalPlanProposedrflag = false;
 var ENGG404TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ENGG404TraditionalPlanProposed", []);
  var PETE444TraditionalPlanProposedflag = false;
  var PETE444TraditionalPlanProposedrflag = false;
 var PETE444TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE444TraditionalPlanProposed", []);
  var ComplementaryElectiveTraditionalPlanProposed2flag = false;
  var ComplementaryElectiveTraditionalPlanProposed2rflag = false;
 var ComplementaryElectiveTraditionalPlanProposed2Time = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ComplementaryElectiveTraditionalPlanProposed2", []);
  var PETE476TraditionalPlanProposedflag = false;
  var PETE476TraditionalPlanProposedrflag = false;
 var PETE476TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE476TraditionalPlanProposed", []);
  var PETE484TraditionalPlanProposedflag = false;
  var PETE484TraditionalPlanProposedrflag = false;
 var PETE484TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE484TraditionalPlanProposed", []);
  var ENGG400TraditionalPlanProposedflag = false;
  var ENGG400TraditionalPlanProposedrflag = false;
 var ENGG400TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ENGG400TraditionalPlanProposed", []);
  var PETE471TraditionalPlanProposedflag = false;
  var PETE471TraditionalPlanProposedrflag = false;
 var PETE471TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE471TraditionalPlanProposed", []);
  var ProgramTechnicalElectiveTraditionalPlanProposed1flag = false;
  var ProgramTechnicalElectiveTraditionalPlanProposed1rflag = false;
 var ProgramTechnicalElectiveTraditionalPlanProposed1Time = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ProgramTechnicalElectiveTraditionalPlanProposed1", []);
  var PETE478TraditionalPlanProposedflag = false;
  var PETE478TraditionalPlanProposedrflag = false;
 var PETE478TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE478TraditionalPlanProposed", []);
  var PETE496TraditionalPlanProposedflag = false;
  var PETE496TraditionalPlanProposedrflag = false;
 var PETE496TraditionalPlanProposedTime = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("PETE496TraditionalPlanProposed", []);
  var ITSElectiveTraditionalPlanProposed0flag = false;
  var ITSElectiveTraditionalPlanProposed0rflag = false;
 var ITSElectiveTraditionalPlanProposed0Time = new Date().getTime();
this.TraditionalPlanProposedClickedMap.set("ITSElectiveTraditionalPlanProposed0", []);
$scope.CHEM103TraditionalPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103TraditionalPlanProposedTime <= 200) { 
        CHEM103TraditionalPlanProposedTime = currentTime;
        return;
    }
CHEM103TraditionalPlanProposedTime = currentTime;
  var CHEM103TraditionalPlanProposedelement = document.getElementById("CHEM103TraditionalPlanProposed");
 if (!CHEM103TraditionalPlanProposedflag) {
     if (that.TraditionalPlanProposedClickedMap.get("CHEM103TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("CHEM103TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("CHEM103TraditionalPlanProposed")[i];
        if (CHEM103TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine46());
     that.highlightElement(CHEM103TraditionalPlanProposedelement, "NaturalSciences");
     that.addToClicked("CHEM103TraditionalPlanProposed", "NaturalSciences");
      CHEM103TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine46());
     that.unHighlightElement(CHEM103TraditionalPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103TraditionalPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ENGG100TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ENGG100TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ENGG100TraditionalPlanProposed")[i];
        if (ENGG100TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100TraditionalPlanProposedelement, "EngineeringProfession");
     that.addToClicked("ENGG100TraditionalPlanProposed", "EngineeringProfession");
      ENGG100TraditionalPlanProposedflag=true
  }
 else {
     that.unHighlightElement(ENGG100TraditionalPlanProposedelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100TraditionalPlanProposed", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ENGG130TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ENGG130TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ENGG130TraditionalPlanProposed")[i];
        if (ENGG130TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine44());
      that.addLine(getLine49());
      that.addLine(getLine62());
     that.highlightElement(ENGG130TraditionalPlanProposedelement, "NaturalSciences");
     that.addToClicked("ENGG130TraditionalPlanProposed", "NaturalSciences");
      ENGG130TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine44());
      that.removeLine(getLine49());
      that.removeLine(getLine62());
     that.unHighlightElement(ENGG130TraditionalPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130TraditionalPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ENGL199TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ENGL199TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ENGL199TraditionalPlanProposed")[i];
        if (ENGL199TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine47());
     that.highlightElement(ENGL199TraditionalPlanProposedelement, "Other");
     that.addToClicked("ENGL199TraditionalPlanProposed", "Other");
      ENGL199TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine47());
     that.unHighlightElement(ENGL199TraditionalPlanProposedelement, "Other");
     var category = that.removeFromClicked("ENGL199TraditionalPlanProposed", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("MATH100TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("MATH100TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("MATH100TraditionalPlanProposed")[i];
        if (MATH100TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine44());
      that.addLine(getLine45());
      that.addLine(getLine48());
      that.addLine(getLine51());
      that.addLine(getLine52());
      that.addLine(getLine65());
     that.highlightElement(MATH100TraditionalPlanProposedelement, "Math");
     that.addToClicked("MATH100TraditionalPlanProposed", "Math");
      MATH100TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine44());
      that.removeLine(getLine45());
      that.removeLine(getLine48());
      that.removeLine(getLine51());
      that.removeLine(getLine52());
      that.removeLine(getLine65());
     that.unHighlightElement(MATH100TraditionalPlanProposedelement, "Math");
     var category = that.removeFromClicked("MATH100TraditionalPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(MATH100TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PHYS130TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PHYS130TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PHYS130TraditionalPlanProposed")[i];
        if (PHYS130TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine45());
     that.highlightElement(PHYS130TraditionalPlanProposedelement, "NaturalSciences");
     that.addToClicked("PHYS130TraditionalPlanProposed", "NaturalSciences");
      PHYS130TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine45());
     that.unHighlightElement(PHYS130TraditionalPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130TraditionalPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("CHEM105TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("CHEM105TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("CHEM105TraditionalPlanProposed")[i];
        if (CHEM105TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine46());
      that.addLine(getLine54());
      that.addLine(getLine57());
      that.addLine(getLine67());
     that.highlightElement(CHEM105TraditionalPlanProposedelement, "NaturalSciences");
     that.addToClicked("CHEM105TraditionalPlanProposed", "NaturalSciences");
      CHEM105TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine46());
      that.removeLine(getLine54());
      that.removeLine(getLine57());
      that.removeLine(getLine67());
     that.unHighlightElement(CHEM105TraditionalPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105TraditionalPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ENCMP100TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ENCMP100TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ENCMP100TraditionalPlanProposed")[i];
        if (ENCMP100TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine74());
     that.highlightElement(ENCMP100TraditionalPlanProposedelement, "NaturalSciences");
     that.addToClicked("ENCMP100TraditionalPlanProposed", "NaturalSciences");
      ENCMP100TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine74());
     that.unHighlightElement(ENCMP100TraditionalPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100TraditionalPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ENGG160TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ENGG160TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ENGG160TraditionalPlanProposed")[i];
        if (ENGG160TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine47());
     that.highlightElement(ENGG160TraditionalPlanProposedelement, "EngineeringDesign");
     that.addToClicked("ENGG160TraditionalPlanProposed", "EngineeringDesign");
      ENGG160TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine47());
     that.unHighlightElement(ENGG160TraditionalPlanProposedelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160TraditionalPlanProposed", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ENPH131TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ENPH131TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ENPH131TraditionalPlanProposed")[i];
        if (ENPH131TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine48());
      that.addLine(getLine49());
      that.addLine(getLine50());
      that.addLine(getLine59());
     that.highlightElement(ENPH131TraditionalPlanProposedelement, "NaturalSciences");
     that.addToClicked("ENPH131TraditionalPlanProposed", "NaturalSciences");
      ENPH131TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine48());
      that.removeLine(getLine49());
      that.removeLine(getLine50());
      that.removeLine(getLine59());
     that.unHighlightElement(ENPH131TraditionalPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131TraditionalPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("MATH101TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("MATH101TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("MATH101TraditionalPlanProposed")[i];
        if (MATH101TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine50());
      that.addLine(getLine51());
      that.addLine(getLine53());
      that.addLine(getLine55());
      that.addLine(getLine63());
      that.addLine(getLine66());
      that.addLine(getLine68());
     that.highlightElement(MATH101TraditionalPlanProposedelement, "Math");
     that.addToClicked("MATH101TraditionalPlanProposed", "Math");
      MATH101TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine50());
      that.removeLine(getLine51());
      that.removeLine(getLine53());
      that.removeLine(getLine55());
      that.removeLine(getLine63());
      that.removeLine(getLine66());
      that.removeLine(getLine68());
     that.unHighlightElement(MATH101TraditionalPlanProposedelement, "Math");
     var category = that.removeFromClicked("MATH101TraditionalPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(MATH101TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("MATH102TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("MATH102TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("MATH102TraditionalPlanProposed")[i];
        if (MATH102TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine52());
      that.addLine(getLine56());
     that.highlightElement(MATH102TraditionalPlanProposedelement, "Math");
     that.addToClicked("MATH102TraditionalPlanProposed", "Math");
      MATH102TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine52());
      that.removeLine(getLine56());
     that.unHighlightElement(MATH102TraditionalPlanProposedelement, "Math");
     var category = that.removeFromClicked("MATH102TraditionalPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(MATH102TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("CHE243TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("CHE243TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("CHE243TraditionalPlanProposed")[i];
        if (CHE243TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine53());
      that.addLine(getLine58());
     that.highlightElement(CHE243TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("CHE243TraditionalPlanProposed", "EngineeringSciences");
      CHE243TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine53());
      that.removeLine(getLine58());
     that.unHighlightElement(CHE243TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("EAS210TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("EAS210TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("EAS210TraditionalPlanProposed")[i];
        if (EAS210TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(EAS210TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine75());
     that.highlightElement(EAS210TraditionalPlanProposedelement, "NaturalSciences");
     that.addToClicked("EAS210TraditionalPlanProposed", "NaturalSciences");
      EAS210TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine75());
     that.unHighlightElement(EAS210TraditionalPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("EAS210TraditionalPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS210TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ECE209TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ECE209TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ECE209TraditionalPlanProposed")[i];
        if (ECE209TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE209TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE209TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("ECE209TraditionalPlanProposed", "EngineeringSciences");
      ECE209TraditionalPlanProposedflag=true
  }
 else {
     that.unHighlightElement(ECE209TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE209TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE209TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("MATE202TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("MATE202TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("MATE202TraditionalPlanProposed")[i];
        if (MATE202TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE202TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine54());
     that.highlightElement(MATE202TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("MATE202TraditionalPlanProposed", "EngineeringSciences");
      MATE202TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine54());
     that.unHighlightElement(MATE202TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE202TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE202TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("MATH209TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("MATH209TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("MATH209TraditionalPlanProposed")[i];
        if (MATH209TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine55());
      that.addLine(getLine56());
      that.addLine(getLine60());
      that.addLine(getLine64());
     that.highlightElement(MATH209TraditionalPlanProposedelement, "Math");
     that.addToClicked("MATH209TraditionalPlanProposed", "Math");
      MATH209TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine55());
      that.removeLine(getLine56());
      that.removeLine(getLine60());
      that.removeLine(getLine64());
     that.unHighlightElement(MATH209TraditionalPlanProposedelement, "Math");
     var category = that.removeFromClicked("MATH209TraditionalPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(MATH209TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE275TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE275TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE275TraditionalPlanProposed")[i];
        if (PETE275TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE275TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine57());
      that.addLine(getLine76());
      that.addLine(getLine78());
     that.highlightElement(PETE275TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE275TraditionalPlanProposed", "EngineeringSciences");
      PETE275TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine57());
      that.removeLine(getLine76());
      that.removeLine(getLine78());
     that.unHighlightElement(PETE275TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE275TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE275TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("CHE312TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("CHE312TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("CHE312TraditionalPlanProposed")[i];
        if (CHE312TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE312TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine58());
      that.addLine(getLine59());
      that.addLine(getLine60());
      that.addLine(getLine61());
      that.addLine(getLine69());
      that.addLine(getLine72());
      that.addLine(getLine77());
     that.highlightElement(CHE312TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("CHE312TraditionalPlanProposed", "EngineeringSciences");
      CHE312TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine58());
      that.removeLine(getLine59());
      that.removeLine(getLine60());
      that.removeLine(getLine61());
      that.removeLine(getLine69());
      that.removeLine(getLine72());
      that.removeLine(getLine77());
     that.unHighlightElement(CHE312TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE312TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE312TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("CIVE270TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("CIVE270TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("CIVE270TraditionalPlanProposed")[i];
        if (CIVE270TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine62());
      that.addLine(getLine63());
      that.addLine(getLine70());
     that.highlightElement(CIVE270TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("CIVE270TraditionalPlanProposed", "EngineeringSciences");
      CIVE270TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine62());
      that.removeLine(getLine63());
      that.removeLine(getLine70());
     that.unHighlightElement(CIVE270TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("MATH201TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("MATH201TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("MATH201TraditionalPlanProposed")[i];
        if (MATH201TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine61());
      that.addLine(getLine64());
      that.addLine(getLine71());
     that.highlightElement(MATH201TraditionalPlanProposedelement, "Math");
     that.addToClicked("MATH201TraditionalPlanProposed", "Math");
      MATH201TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine61());
      that.removeLine(getLine64());
      that.removeLine(getLine71());
     that.unHighlightElement(MATH201TraditionalPlanProposedelement, "Math");
     var category = that.removeFromClicked("MATH201TraditionalPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(MATH201TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE295TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE295TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE295TraditionalPlanProposed")[i];
        if (PETE295TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE295TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(PETE295TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE295TraditionalPlanProposed", "EngineeringSciences");
      PETE295TraditionalPlanProposedflag=true
  }
 else {
     that.unHighlightElement(PETE295TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE295TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE295TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("STAT235TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("STAT235TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("STAT235TraditionalPlanProposed")[i];
        if (STAT235TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(STAT235TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine65());
      that.addLine(getLine66());
     that.highlightElement(STAT235TraditionalPlanProposedelement, "Math");
     that.addToClicked("STAT235TraditionalPlanProposed", "Math");
      STAT235TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine65());
      that.removeLine(getLine66());
     that.unHighlightElement(STAT235TraditionalPlanProposedelement, "Math");
     var category = that.removeFromClicked("STAT235TraditionalPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(STAT235TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed0").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed0")[i];
        if (ComplementaryElectiveTraditionalPlanProposed0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveTraditionalPlanProposed0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveTraditionalPlanProposed0element, "COMP");
     that.addToClicked("ComplementaryElectiveTraditionalPlanProposed0", "COMP");
      ComplementaryElectiveTraditionalPlanProposed0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveTraditionalPlanProposed0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveTraditionalPlanProposed0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveTraditionalPlanProposed0element, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("CHEM371TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("CHEM371TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("CHEM371TraditionalPlanProposed")[i];
        if (CHEM371TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM371TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine67());
      that.addLine(getLine68());
     that.highlightElement(CHEM371TraditionalPlanProposedelement, "NaturalSciences");
     that.addToClicked("CHEM371TraditionalPlanProposed", "NaturalSciences");
      CHEM371TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine67());
      that.removeLine(getLine68());
     that.unHighlightElement(CHEM371TraditionalPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM371TraditionalPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM371TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ENGM310TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ENGM310TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ENGM310TraditionalPlanProposed")[i];
        if (ENGM310TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM310TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine79());
     that.highlightElement(ENGM310TraditionalPlanProposedelement, "Other");
     that.addToClicked("ENGM310TraditionalPlanProposed", "Other");
      ENGM310TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine79());
     that.unHighlightElement(ENGM310TraditionalPlanProposedelement, "Other");
     var category = that.removeFromClicked("ENGM310TraditionalPlanProposed", "Other");
  if (category != "") { 
     that.highlightElement(ENGM310TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ENGM401TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ENGM401TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ENGM401TraditionalPlanProposed")[i];
        if (ENGM401TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine80());
     that.highlightElement(ENGM401TraditionalPlanProposedelement, "Other");
     that.addToClicked("ENGM401TraditionalPlanProposed", "Other");
      ENGM401TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine80());
     that.unHighlightElement(ENGM401TraditionalPlanProposedelement, "Other");
     var category = that.removeFromClicked("ENGM401TraditionalPlanProposed", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE364TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE364TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE364TraditionalPlanProposed")[i];
        if (PETE364TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE364TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine69());
      that.addLine(getLine70());
     that.highlightElement(PETE364TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE364TraditionalPlanProposed", "EngineeringSciences");
      PETE364TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine69());
      that.removeLine(getLine70());
     that.unHighlightElement(PETE364TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE364TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE364TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("CHE314TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("CHE314TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("CHE314TraditionalPlanProposed")[i];
        if (CHE314TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE314TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine71());
      that.addLine(getLine72());
      that.addLine(getLine73());
     that.highlightElement(CHE314TraditionalPlanProposedelement, "NaturalSciences");
     that.addToClicked("CHE314TraditionalPlanProposed", "NaturalSciences");
      CHE314TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine71());
      that.removeLine(getLine72());
      that.removeLine(getLine73());
     that.unHighlightElement(CHE314TraditionalPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("CHE314TraditionalPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHE314TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE375TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE375TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE375TraditionalPlanProposed")[i];
        if (PETE375TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE375TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(PETE375TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE375TraditionalPlanProposed", "EngineeringSciences");
      PETE375TraditionalPlanProposedflag=true
  }
 else {
     that.unHighlightElement(PETE375TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE375TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE375TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed1").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed1")[i];
        if (ComplementaryElectiveTraditionalPlanProposed1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveTraditionalPlanProposed1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveTraditionalPlanProposed1element, "COMP");
     that.addToClicked("ComplementaryElectiveTraditionalPlanProposed1", "COMP");
      ComplementaryElectiveTraditionalPlanProposed1flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveTraditionalPlanProposed1element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveTraditionalPlanProposed1", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveTraditionalPlanProposed1element, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("CHE374TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("CHE374TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("CHE374TraditionalPlanProposed")[i];
        if (CHE374TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE374TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine73());
      that.addLine(getLine74());
     that.highlightElement(CHE374TraditionalPlanProposedelement, "Math");
     that.addToClicked("CHE374TraditionalPlanProposed", "Math");
      CHE374TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine73());
      that.removeLine(getLine74());
     that.unHighlightElement(CHE374TraditionalPlanProposedelement, "Math");
     var category = that.removeFromClicked("CHE374TraditionalPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(CHE374TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("EAS222TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("EAS222TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("EAS222TraditionalPlanProposed")[i];
        if (EAS222TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(EAS222TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine75());
     that.highlightElement(EAS222TraditionalPlanProposedelement, "NaturalSciences");
     that.addToClicked("EAS222TraditionalPlanProposed", "NaturalSciences");
      EAS222TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine75());
     that.unHighlightElement(EAS222TraditionalPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("EAS222TraditionalPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS222TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE365TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE365TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE365TraditionalPlanProposed")[i];
        if (PETE365TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE365TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine76());
     that.highlightElement(PETE365TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE365TraditionalPlanProposed", "EngineeringSciences");
      PETE365TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine76());
     that.unHighlightElement(PETE365TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE365TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE365TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE366TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE366TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE366TraditionalPlanProposed")[i];
        if (PETE366TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE366TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine77());
     that.highlightElement(PETE366TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE366TraditionalPlanProposed", "EngineeringSciences");
      PETE366TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine77());
     that.unHighlightElement(PETE366TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE366TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE366TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE377TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE377TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE377TraditionalPlanProposed")[i];
        if (PETE377TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE377TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(PETE377TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE377TraditionalPlanProposed", "EngineeringSciences");
      PETE377TraditionalPlanProposedflag=true
  }
 else {
     that.unHighlightElement(PETE377TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE377TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE377TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ProgramTechnicalElectiveTraditionalPlanProposed0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ProgramTechnicalElectiveTraditionalPlanProposed0").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ProgramTechnicalElectiveTraditionalPlanProposed0")[i];
        if (ProgramTechnicalElectiveTraditionalPlanProposed0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlanProposed0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlanProposed0element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlanProposed0", "PROG");
      ProgramTechnicalElectiveTraditionalPlanProposed0flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlanProposed0element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlanProposed0", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlanProposed0element, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ENGG404TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ENGG404TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ENGG404TraditionalPlanProposed")[i];
        if (ENGG404TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404TraditionalPlanProposedelement, "EngineeringProfession");
     that.addToClicked("ENGG404TraditionalPlanProposed", "EngineeringProfession");
      ENGG404TraditionalPlanProposedflag=true
  }
 else {
     that.unHighlightElement(ENGG404TraditionalPlanProposedelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404TraditionalPlanProposed", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE444TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE444TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE444TraditionalPlanProposed")[i];
        if (PETE444TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE444TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine78());
     that.highlightElement(PETE444TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE444TraditionalPlanProposed", "EngineeringSciences");
      PETE444TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine78());
     that.unHighlightElement(PETE444TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE444TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE444TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed2").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ComplementaryElectiveTraditionalPlanProposed2")[i];
        if (ComplementaryElectiveTraditionalPlanProposed2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveTraditionalPlanProposed2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveTraditionalPlanProposed2element, "COMP");
     that.addToClicked("ComplementaryElectiveTraditionalPlanProposed2", "COMP");
      ComplementaryElectiveTraditionalPlanProposed2flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveTraditionalPlanProposed2element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveTraditionalPlanProposed2", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveTraditionalPlanProposed2element, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE476TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE476TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE476TraditionalPlanProposed")[i];
        if (PETE476TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE476TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(PETE476TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE476TraditionalPlanProposed", "EngineeringSciences");
      PETE476TraditionalPlanProposedflag=true
  }
 else {
     that.unHighlightElement(PETE476TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE476TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE476TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE484TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE484TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE484TraditionalPlanProposed")[i];
        if (PETE484TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE484TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine79());
      that.addLine(getLine80());
      that.addLine(getLine81());
     that.highlightElement(PETE484TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE484TraditionalPlanProposed", "EngineeringSciences");
      PETE484TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine79());
      that.removeLine(getLine80());
      that.removeLine(getLine81());
     that.unHighlightElement(PETE484TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE484TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE484TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ENGG400TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ENGG400TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ENGG400TraditionalPlanProposed")[i];
        if (ENGG400TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400TraditionalPlanProposedelement, "EngineeringProfession");
     that.addToClicked("ENGG400TraditionalPlanProposed", "EngineeringProfession");
      ENGG400TraditionalPlanProposedflag=true
  }
 else {
     that.unHighlightElement(ENGG400TraditionalPlanProposedelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400TraditionalPlanProposed", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE471TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE471TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE471TraditionalPlanProposed")[i];
        if (PETE471TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE471TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(PETE471TraditionalPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE471TraditionalPlanProposed", "EngineeringSciences");
      PETE471TraditionalPlanProposedflag=true
  }
 else {
     that.unHighlightElement(PETE471TraditionalPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE471TraditionalPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE471TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ProgramTechnicalElectiveTraditionalPlanProposed1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ProgramTechnicalElectiveTraditionalPlanProposed1").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ProgramTechnicalElectiveTraditionalPlanProposed1")[i];
        if (ProgramTechnicalElectiveTraditionalPlanProposed1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlanProposed1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlanProposed1element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlanProposed1", "PROG");
      ProgramTechnicalElectiveTraditionalPlanProposed1flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlanProposed1element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlanProposed1", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlanProposed1element, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE478TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE478TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE478TraditionalPlanProposed")[i];
        if (PETE478TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE478TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(PETE478TraditionalPlanProposedelement, "EngineeringDesign");
     that.addToClicked("PETE478TraditionalPlanProposed", "EngineeringDesign");
      PETE478TraditionalPlanProposedflag=true
  }
 else {
     that.unHighlightElement(PETE478TraditionalPlanProposedelement, "EngineeringDesign");
     var category = that.removeFromClicked("PETE478TraditionalPlanProposed", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(PETE478TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("PETE496TraditionalPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("PETE496TraditionalPlanProposed").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("PETE496TraditionalPlanProposed")[i];
        if (PETE496TraditionalPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE496TraditionalPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine81());
     that.highlightElement(PETE496TraditionalPlanProposedelement, "EngineeringDesign");
     that.addToClicked("PETE496TraditionalPlanProposed", "EngineeringDesign");
      PETE496TraditionalPlanProposedflag=true
  }
 else {
      that.removeLine(getLine81());
     that.unHighlightElement(PETE496TraditionalPlanProposedelement, "EngineeringDesign");
     var category = that.removeFromClicked("PETE496TraditionalPlanProposed", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(PETE496TraditionalPlanProposedelement, category);
}
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
     if (that.TraditionalPlanProposedClickedMap.get("ITSElectiveTraditionalPlanProposed0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanProposedClickedMap.get("ITSElectiveTraditionalPlanProposed0").length; i++) { 
        var cate = that.TraditionalPlanProposedClickedMap.get("ITSElectiveTraditionalPlanProposed0")[i];
        if (ITSElectiveTraditionalPlanProposed0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveTraditionalPlanProposed0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveTraditionalPlanProposed0element, "ITS");
     that.addToClicked("ITSElectiveTraditionalPlanProposed0", "ITS");
      ITSElectiveTraditionalPlanProposed0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveTraditionalPlanProposed0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveTraditionalPlanProposed0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveTraditionalPlanProposed0element, category);
}
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
this.CoopPlanClickedMap.set("CHEM103CoopPlan", []);
  var ENGG100CoopPlanflag = false;
  var ENGG100CoopPlanrflag = false;
 var ENGG100CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG100CoopPlan", []);
  var ENGG130CoopPlanflag = false;
  var ENGG130CoopPlanrflag = false;
 var ENGG130CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG130CoopPlan", []);
  var ENGL199CoopPlanflag = false;
  var ENGL199CoopPlanrflag = false;
 var ENGL199CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGL199CoopPlan", []);
  var MATH100CoopPlanflag = false;
  var MATH100CoopPlanrflag = false;
 var MATH100CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH100CoopPlan", []);
  var PHYS130CoopPlanflag = false;
  var PHYS130CoopPlanrflag = false;
 var PHYS130CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PHYS130CoopPlan", []);
  var CHEM105CoopPlanflag = false;
  var CHEM105CoopPlanrflag = false;
 var CHEM105CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHEM105CoopPlan", []);
  var ENCMP100CoopPlanflag = false;
  var ENCMP100CoopPlanrflag = false;
 var ENCMP100CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENCMP100CoopPlan", []);
  var ENGG160CoopPlanflag = false;
  var ENGG160CoopPlanrflag = false;
 var ENGG160CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG160CoopPlan", []);
  var ENPH131CoopPlanflag = false;
  var ENPH131CoopPlanrflag = false;
 var ENPH131CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENPH131CoopPlan", []);
  var MATH101CoopPlanflag = false;
  var MATH101CoopPlanrflag = false;
 var MATH101CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH101CoopPlan", []);
  var MATH102CoopPlanflag = false;
  var MATH102CoopPlanrflag = false;
 var MATH102CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH102CoopPlan", []);
  var CHE243CoopPlanflag = false;
  var CHE243CoopPlanrflag = false;
 var CHE243CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHE243CoopPlan", []);
  var EAS210CoopPlanflag = false;
  var EAS210CoopPlanrflag = false;
 var EAS210CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("EAS210CoopPlan", []);
  var ECE209CoopPlanflag = false;
  var ECE209CoopPlanrflag = false;
 var ECE209CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE209CoopPlan", []);
  var ENGG299CoopPlanflag = false;
  var ENGG299CoopPlanrflag = false;
 var ENGG299CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG299CoopPlan", []);
  var MATE202CoopPlanflag = false;
  var MATE202CoopPlanrflag = false;
 var MATE202CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE202CoopPlan", []);
  var MATH209CoopPlanflag = false;
  var MATH209CoopPlanrflag = false;
 var MATH209CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH209CoopPlan", []);
  var ComplementaryElectiveCoopPlan0flag = false;
  var ComplementaryElectiveCoopPlan0rflag = false;
 var ComplementaryElectiveCoopPlan0Time = new Date().getTime();
this.CoopPlanClickedMap.set("ComplementaryElectiveCoopPlan0", []);
  var CHE312CoopPlanflag = false;
  var CHE312CoopPlanrflag = false;
 var CHE312CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHE312CoopPlan", []);
  var CIVE270CoopPlanflag = false;
  var CIVE270CoopPlanrflag = false;
 var CIVE270CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE270CoopPlan", []);
  var MATH201CoopPlanflag = false;
  var MATH201CoopPlanrflag = false;
 var MATH201CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH201CoopPlan", []);
  var PETE275CoopPlanflag = false;
  var PETE275CoopPlanrflag = false;
 var PETE275CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE275CoopPlan", []);
  var STAT235CoopPlanflag = false;
  var STAT235CoopPlanrflag = false;
 var STAT235CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("STAT235CoopPlan", []);
  var ComplementaryElectiveCoopPlan1flag = false;
  var ComplementaryElectiveCoopPlan1rflag = false;
 var ComplementaryElectiveCoopPlan1Time = new Date().getTime();
this.CoopPlanClickedMap.set("ComplementaryElectiveCoopPlan1", []);
  var WKEXP901CoopPlanflag = false;
  var WKEXP901CoopPlanrflag = false;
 var WKEXP901CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP901CoopPlan", []);
  var WKEXP902CoopPlanflag = false;
  var WKEXP902CoopPlanrflag = false;
 var WKEXP902CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP902CoopPlan", []);
  var CHE374CoopPlanflag = false;
  var CHE374CoopPlanrflag = false;
 var CHE374CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHE374CoopPlan", []);
  var EAS222CoopPlanflag = false;
  var EAS222CoopPlanrflag = false;
 var EAS222CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("EAS222CoopPlan", []);
  var PETE365CoopPlanflag = false;
  var PETE365CoopPlanrflag = false;
 var PETE365CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE365CoopPlan", []);
  var PETE366CoopPlanflag = false;
  var PETE366CoopPlanrflag = false;
 var PETE366CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE366CoopPlan", []);
  var ProgramTechnicalElectiveCoopPlan0flag = false;
  var ProgramTechnicalElectiveCoopPlan0rflag = false;
 var ProgramTechnicalElectiveCoopPlan0Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan0", []);
  var WKEXP903CoopPlanflag = false;
  var WKEXP903CoopPlanrflag = false;
 var WKEXP903CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP903CoopPlan", []);
  var CHEM371CoopPlanflag = false;
  var CHEM371CoopPlanrflag = false;
 var CHEM371CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHEM371CoopPlan", []);
  var ENGM310CoopPlanflag = false;
  var ENGM310CoopPlanrflag = false;
 var ENGM310CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGM310CoopPlan", []);
  var ENGM401CoopPlanflag = false;
  var ENGM401CoopPlanrflag = false;
 var ENGM401CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGM401CoopPlan", []);
  var PETE364CoopPlanflag = false;
  var PETE364CoopPlanrflag = false;
 var PETE364CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE364CoopPlan", []);
  var PETE373CoopPlanflag = false;
  var PETE373CoopPlanrflag = false;
 var PETE373CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE373CoopPlan", []);
  var ProgramTechnicalElectiveCoopPlan1flag = false;
  var ProgramTechnicalElectiveCoopPlan1rflag = false;
 var ProgramTechnicalElectiveCoopPlan1Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan1", []);
  var ComplementaryElectiveCoopPlan2flag = false;
  var ComplementaryElectiveCoopPlan2rflag = false;
 var ComplementaryElectiveCoopPlan2Time = new Date().getTime();
this.CoopPlanClickedMap.set("ComplementaryElectiveCoopPlan2", []);
  var WKEXP904CoopPlanflag = false;
  var WKEXP904CoopPlanrflag = false;
 var WKEXP904CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP904CoopPlan", []);
  var WKEXP905CoopPlanflag = false;
  var WKEXP905CoopPlanrflag = false;
 var WKEXP905CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP905CoopPlan", []);
  var CHE314CoopPlanflag = false;
  var CHE314CoopPlanrflag = false;
 var CHE314CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHE314CoopPlan", []);
  var ENGG404CoopPlanflag = false;
  var ENGG404CoopPlanrflag = false;
 var ENGG404CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG404CoopPlan", []);
  var PETE444CoopPlanflag = false;
  var PETE444CoopPlanrflag = false;
 var PETE444CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE444CoopPlan", []);
  var PETE475CoopPlanflag = false;
  var PETE475CoopPlanrflag = false;
 var PETE475CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE475CoopPlan", []);
  var PETE476CoopPlanflag = false;
  var PETE476CoopPlanrflag = false;
 var PETE476CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE476CoopPlan", []);
  var PETE484CoopPlanflag = false;
  var PETE484CoopPlanrflag = false;
 var PETE484CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE484CoopPlan", []);
  var ENGG400CoopPlanflag = false;
  var ENGG400CoopPlanrflag = false;
 var ENGG400CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG400CoopPlan", []);
  var PETE471CoopPlanflag = false;
  var PETE471CoopPlanrflag = false;
 var PETE471CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE471CoopPlan", []);
  var PETE477CoopPlanflag = false;
  var PETE477CoopPlanrflag = false;
 var PETE477CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE477CoopPlan", []);
  var PETE478CoopPlanflag = false;
  var PETE478CoopPlanrflag = false;
 var PETE478CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE478CoopPlan", []);
  var PETE496CoopPlanflag = false;
  var PETE496CoopPlanrflag = false;
 var PETE496CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PETE496CoopPlan", []);
  var ITSElectiveCoopPlan0flag = false;
  var ITSElectiveCoopPlan0rflag = false;
 var ITSElectiveCoopPlan0Time = new Date().getTime();
this.CoopPlanClickedMap.set("ITSElectiveCoopPlan0", []);
$scope.CHEM103CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103CoopPlanTime <= 200) { 
        CHEM103CoopPlanTime = currentTime;
        return;
    }
CHEM103CoopPlanTime = currentTime;
  var CHEM103CoopPlanelement = document.getElementById("CHEM103CoopPlan");
 if (!CHEM103CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CHEM103CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHEM103CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHEM103CoopPlan")[i];
        if (CHEM103CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine84());
     that.highlightElement(CHEM103CoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM103CoopPlan", "NaturalSciences");
      CHEM103CoopPlanflag=true
  }
 else {
      that.removeLine(getLine84());
     that.unHighlightElement(CHEM103CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ENGG100CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG100CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG100CoopPlan")[i];
        if (ENGG100CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100CoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG100CoopPlan", "EngineeringProfession");
      ENGG100CoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG100CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ENGG130CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG130CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG130CoopPlan")[i];
        if (ENGG130CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine82());
      that.addLine(getLine87());
      that.addLine(getLine99());
     that.highlightElement(ENGG130CoopPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130CoopPlan", "NaturalSciences");
      ENGG130CoopPlanflag=true
  }
 else {
      that.removeLine(getLine82());
      that.removeLine(getLine87());
      that.removeLine(getLine99());
     that.unHighlightElement(ENGG130CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ENGL199CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGL199CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGL199CoopPlan")[i];
        if (ENGL199CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine85());
     that.highlightElement(ENGL199CoopPlanelement, "Other");
     that.addToClicked("ENGL199CoopPlan", "Other");
      ENGL199CoopPlanflag=true
  }
 else {
      that.removeLine(getLine85());
     that.unHighlightElement(ENGL199CoopPlanelement, "Other");
     var category = that.removeFromClicked("ENGL199CoopPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("MATH100CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATH100CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATH100CoopPlan")[i];
        if (MATH100CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine82());
      that.addLine(getLine83());
      that.addLine(getLine86());
      that.addLine(getLine89());
      that.addLine(getLine90());
      that.addLine(getLine103());
     that.highlightElement(MATH100CoopPlanelement, "Math");
     that.addToClicked("MATH100CoopPlan", "Math");
      MATH100CoopPlanflag=true
  }
 else {
      that.removeLine(getLine82());
      that.removeLine(getLine83());
      that.removeLine(getLine86());
      that.removeLine(getLine89());
      that.removeLine(getLine90());
      that.removeLine(getLine103());
     that.unHighlightElement(MATH100CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH100CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH100CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PHYS130CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PHYS130CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PHYS130CoopPlan")[i];
        if (PHYS130CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine83());
     that.highlightElement(PHYS130CoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS130CoopPlan", "NaturalSciences");
      PHYS130CoopPlanflag=true
  }
 else {
      that.removeLine(getLine83());
     that.unHighlightElement(PHYS130CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("CHEM105CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHEM105CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHEM105CoopPlan")[i];
        if (CHEM105CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine84());
      that.addLine(getLine92());
      that.addLine(getLine102());
      that.addLine(getLine112());
     that.highlightElement(CHEM105CoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105CoopPlan", "NaturalSciences");
      CHEM105CoopPlanflag=true
  }
 else {
      that.removeLine(getLine84());
      that.removeLine(getLine92());
      that.removeLine(getLine102());
      that.removeLine(getLine112());
     that.unHighlightElement(CHEM105CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ENCMP100CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENCMP100CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENCMP100CoopPlan")[i];
        if (ENCMP100CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine107());
     that.highlightElement(ENCMP100CoopPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100CoopPlan", "NaturalSciences");
      ENCMP100CoopPlanflag=true
  }
 else {
      that.removeLine(getLine107());
     that.unHighlightElement(ENCMP100CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ENGG160CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG160CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG160CoopPlan")[i];
        if (ENGG160CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine85());
     that.highlightElement(ENGG160CoopPlanelement, "EngineeringDesign");
     that.addToClicked("ENGG160CoopPlan", "EngineeringDesign");
      ENGG160CoopPlanflag=true
  }
 else {
      that.removeLine(getLine85());
     that.unHighlightElement(ENGG160CoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160CoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ENPH131CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENPH131CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENPH131CoopPlan")[i];
        if (ENPH131CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine86());
      that.addLine(getLine87());
      that.addLine(getLine88());
      that.addLine(getLine96());
     that.highlightElement(ENPH131CoopPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131CoopPlan", "NaturalSciences");
      ENPH131CoopPlanflag=true
  }
 else {
      that.removeLine(getLine86());
      that.removeLine(getLine87());
      that.removeLine(getLine88());
      that.removeLine(getLine96());
     that.unHighlightElement(ENPH131CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("MATH101CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATH101CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATH101CoopPlan")[i];
        if (MATH101CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine88());
      that.addLine(getLine89());
      that.addLine(getLine91());
      that.addLine(getLine93());
      that.addLine(getLine100());
      that.addLine(getLine104());
      that.addLine(getLine113());
     that.highlightElement(MATH101CoopPlanelement, "Math");
     that.addToClicked("MATH101CoopPlan", "Math");
      MATH101CoopPlanflag=true
  }
 else {
      that.removeLine(getLine88());
      that.removeLine(getLine89());
      that.removeLine(getLine91());
      that.removeLine(getLine93());
      that.removeLine(getLine100());
      that.removeLine(getLine104());
      that.removeLine(getLine113());
     that.unHighlightElement(MATH101CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH101CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH101CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("MATH102CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATH102CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATH102CoopPlan")[i];
        if (MATH102CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine90());
      that.addLine(getLine94());
     that.highlightElement(MATH102CoopPlanelement, "Math");
     that.addToClicked("MATH102CoopPlan", "Math");
      MATH102CoopPlanflag=true
  }
 else {
      that.removeLine(getLine90());
      that.removeLine(getLine94());
     that.unHighlightElement(MATH102CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH102CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH102CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("CHE243CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHE243CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHE243CoopPlan")[i];
        if (CHE243CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine91());
      that.addLine(getLine95());
     that.highlightElement(CHE243CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CHE243CoopPlan", "EngineeringSciences");
      CHE243CoopPlanflag=true
  }
 else {
      that.removeLine(getLine91());
      that.removeLine(getLine95());
     that.unHighlightElement(CHE243CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("EAS210CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("EAS210CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("EAS210CoopPlan")[i];
        if (EAS210CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(EAS210CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine108());
     that.highlightElement(EAS210CoopPlanelement, "NaturalSciences");
     that.addToClicked("EAS210CoopPlan", "NaturalSciences");
      EAS210CoopPlanflag=true
  }
 else {
      that.removeLine(getLine108());
     that.unHighlightElement(EAS210CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("EAS210CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS210CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ECE209CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE209CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE209CoopPlan")[i];
        if (ECE209CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE209CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE209CoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE209CoopPlan", "EngineeringSciences");
      ECE209CoopPlanflag=true
  }
 else {
     that.unHighlightElement(ECE209CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE209CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE209CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ENGG299CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG299CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG299CoopPlan")[i];
        if (ENGG299CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG299CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine105());
     that.highlightElement(ENGG299CoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG299CoopPlan", "EngineeringProfession");
      ENGG299CoopPlanflag=true
  }
 else {
      that.removeLine(getLine105());
     that.unHighlightElement(ENGG299CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("MATE202CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE202CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE202CoopPlan")[i];
        if (MATE202CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE202CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine92());
     that.highlightElement(MATE202CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE202CoopPlan", "EngineeringSciences");
      MATE202CoopPlanflag=true
  }
 else {
      that.removeLine(getLine92());
     that.unHighlightElement(MATE202CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE202CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE202CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("MATH209CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATH209CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATH209CoopPlan")[i];
        if (MATH209CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine93());
      that.addLine(getLine94());
      that.addLine(getLine97());
      that.addLine(getLine101());
     that.highlightElement(MATH209CoopPlanelement, "Math");
     that.addToClicked("MATH209CoopPlan", "Math");
      MATH209CoopPlanflag=true
  }
 else {
      that.removeLine(getLine93());
      that.removeLine(getLine94());
      that.removeLine(getLine97());
      that.removeLine(getLine101());
     that.unHighlightElement(MATH209CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH209CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan0").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan0")[i];
        if (ComplementaryElectiveCoopPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlan0element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlan0", "COMP");
      ComplementaryElectiveCoopPlan0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlan0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlan0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlan0element, category);
}
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
     if (that.CoopPlanClickedMap.get("CHE312CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHE312CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHE312CoopPlan")[i];
        if (CHE312CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE312CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine95());
      that.addLine(getLine96());
      that.addLine(getLine97());
      that.addLine(getLine98());
      that.addLine(getLine110());
      that.addLine(getLine114());
      that.addLine(getLine120());
     that.highlightElement(CHE312CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CHE312CoopPlan", "EngineeringSciences");
      CHE312CoopPlanflag=true
  }
 else {
      that.removeLine(getLine95());
      that.removeLine(getLine96());
      that.removeLine(getLine97());
      that.removeLine(getLine98());
      that.removeLine(getLine110());
      that.removeLine(getLine114());
      that.removeLine(getLine120());
     that.unHighlightElement(CHE312CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE312CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE312CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("CIVE270CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE270CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE270CoopPlan")[i];
        if (CIVE270CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine99());
      that.addLine(getLine100());
      that.addLine(getLine115());
     that.highlightElement(CIVE270CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE270CoopPlan", "EngineeringSciences");
      CIVE270CoopPlanflag=true
  }
 else {
      that.removeLine(getLine99());
      that.removeLine(getLine100());
      that.removeLine(getLine115());
     that.unHighlightElement(CIVE270CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("MATH201CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATH201CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATH201CoopPlan")[i];
        if (MATH201CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine98());
      that.addLine(getLine101());
      that.addLine(getLine119());
     that.highlightElement(MATH201CoopPlanelement, "Math");
     that.addToClicked("MATH201CoopPlan", "Math");
      MATH201CoopPlanflag=true
  }
 else {
      that.removeLine(getLine98());
      that.removeLine(getLine101());
      that.removeLine(getLine119());
     that.unHighlightElement(MATH201CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH201CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH201CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE275CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE275CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE275CoopPlan")[i];
        if (PETE275CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE275CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine102());
      that.addLine(getLine109());
      that.addLine(getLine116());
      that.addLine(getLine122());
     that.highlightElement(PETE275CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PETE275CoopPlan", "EngineeringSciences");
      PETE275CoopPlanflag=true
  }
 else {
      that.removeLine(getLine102());
      that.removeLine(getLine109());
      that.removeLine(getLine116());
      that.removeLine(getLine122());
     that.unHighlightElement(PETE275CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE275CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE275CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("STAT235CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("STAT235CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("STAT235CoopPlan")[i];
        if (STAT235CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(STAT235CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine103());
      that.addLine(getLine104());
     that.highlightElement(STAT235CoopPlanelement, "Math");
     that.addToClicked("STAT235CoopPlan", "Math");
      STAT235CoopPlanflag=true
  }
 else {
      that.removeLine(getLine103());
      that.removeLine(getLine104());
     that.unHighlightElement(STAT235CoopPlanelement, "Math");
     var category = that.removeFromClicked("STAT235CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(STAT235CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan1").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan1")[i];
        if (ComplementaryElectiveCoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlan1element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlan1", "COMP");
      ComplementaryElectiveCoopPlan1flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlan1element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlan1", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlan1element, category);
}
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
     if (that.CoopPlanClickedMap.get("WKEXP901CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("WKEXP901CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("WKEXP901CoopPlan")[i];
        if (WKEXP901CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP901CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine105());
      that.addLine(getLine106());
     that.highlightElement(WKEXP901CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP901CoopPlan", "EngineeringProfession");
      WKEXP901CoopPlanflag=true
  }
 else {
      that.removeLine(getLine105());
      that.removeLine(getLine106());
     that.unHighlightElement(WKEXP901CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP901CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP901CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("WKEXP902CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("WKEXP902CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("WKEXP902CoopPlan")[i];
        if (WKEXP902CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP902CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine106());
      that.addLine(getLine111());
     that.highlightElement(WKEXP902CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP902CoopPlan", "EngineeringProfession");
      WKEXP902CoopPlanflag=true
  }
 else {
      that.removeLine(getLine106());
      that.removeLine(getLine111());
     that.unHighlightElement(WKEXP902CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP902CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP902CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("CHE374CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHE374CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHE374CoopPlan")[i];
        if (CHE374CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE374CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine107());
      that.addLine(getLine121());
      that.addLine(getLine128());
     that.highlightElement(CHE374CoopPlanelement, "Math");
     that.addToClicked("CHE374CoopPlan", "Math");
      CHE374CoopPlanflag=true
  }
 else {
      that.removeLine(getLine107());
      that.removeLine(getLine121());
      that.removeLine(getLine128());
     that.unHighlightElement(CHE374CoopPlanelement, "Math");
     var category = that.removeFromClicked("CHE374CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(CHE374CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("EAS222CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("EAS222CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("EAS222CoopPlan")[i];
        if (EAS222CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(EAS222CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine108());
     that.highlightElement(EAS222CoopPlanelement, "NaturalSciences");
     that.addToClicked("EAS222CoopPlan", "NaturalSciences");
      EAS222CoopPlanflag=true
  }
 else {
      that.removeLine(getLine108());
     that.unHighlightElement(EAS222CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("EAS222CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS222CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE365CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE365CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE365CoopPlan")[i];
        if (PETE365CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE365CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine109());
     that.highlightElement(PETE365CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PETE365CoopPlan", "EngineeringSciences");
      PETE365CoopPlanflag=true
  }
 else {
      that.removeLine(getLine109());
     that.unHighlightElement(PETE365CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE365CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE365CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE366CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE366CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE366CoopPlan")[i];
        if (PETE366CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE366CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine110());
     that.highlightElement(PETE366CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PETE366CoopPlan", "EngineeringSciences");
      PETE366CoopPlanflag=true
  }
 else {
      that.removeLine(getLine110());
     that.unHighlightElement(PETE366CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE366CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE366CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan0").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan0")[i];
        if (ProgramTechnicalElectiveCoopPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan0element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan0", "PROG");
      ProgramTechnicalElectiveCoopPlan0flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan0element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan0", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan0element, category);
}
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
     if (that.CoopPlanClickedMap.get("WKEXP903CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("WKEXP903CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("WKEXP903CoopPlan")[i];
        if (WKEXP903CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP903CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine111());
      that.addLine(getLine117());
     that.highlightElement(WKEXP903CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP903CoopPlan", "EngineeringProfession");
      WKEXP903CoopPlanflag=true
  }
 else {
      that.removeLine(getLine111());
      that.removeLine(getLine117());
     that.unHighlightElement(WKEXP903CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP903CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP903CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("CHEM371CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHEM371CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHEM371CoopPlan")[i];
        if (CHEM371CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM371CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine112());
      that.addLine(getLine113());
     that.highlightElement(CHEM371CoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM371CoopPlan", "NaturalSciences");
      CHEM371CoopPlanflag=true
  }
 else {
      that.removeLine(getLine112());
      that.removeLine(getLine113());
     that.unHighlightElement(CHEM371CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM371CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM371CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ENGM310CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGM310CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGM310CoopPlan")[i];
        if (ENGM310CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM310CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine124());
     that.highlightElement(ENGM310CoopPlanelement, "Other");
     that.addToClicked("ENGM310CoopPlan", "Other");
      ENGM310CoopPlanflag=true
  }
 else {
      that.removeLine(getLine124());
     that.unHighlightElement(ENGM310CoopPlanelement, "Other");
     var category = that.removeFromClicked("ENGM310CoopPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM310CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ENGM401CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGM401CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGM401CoopPlan")[i];
        if (ENGM401CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine125());
     that.highlightElement(ENGM401CoopPlanelement, "Other");
     that.addToClicked("ENGM401CoopPlan", "Other");
      ENGM401CoopPlanflag=true
  }
 else {
      that.removeLine(getLine125());
     that.unHighlightElement(ENGM401CoopPlanelement, "Other");
     var category = that.removeFromClicked("ENGM401CoopPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE364CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE364CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE364CoopPlan")[i];
        if (PETE364CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE364CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine114());
      that.addLine(getLine115());
     that.highlightElement(PETE364CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PETE364CoopPlan", "EngineeringSciences");
      PETE364CoopPlanflag=true
  }
 else {
      that.removeLine(getLine114());
      that.removeLine(getLine115());
     that.unHighlightElement(PETE364CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE364CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE364CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE373CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE373CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE373CoopPlan")[i];
        if (PETE373CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE373CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine116());
      that.addLine(getLine123());
      that.addLine(getLine126());
      that.addLine(getLine127());
      that.addLine(getLine129());
     that.highlightElement(PETE373CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PETE373CoopPlan", "EngineeringSciences");
      PETE373CoopPlanflag=true
  }
 else {
      that.removeLine(getLine116());
      that.removeLine(getLine123());
      that.removeLine(getLine126());
      that.removeLine(getLine127());
      that.removeLine(getLine129());
     that.unHighlightElement(PETE373CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE373CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE373CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan1").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan1")[i];
        if (ProgramTechnicalElectiveCoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan1element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan1", "PROG");
      ProgramTechnicalElectiveCoopPlan1flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan1element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan1", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan1element, category);
}
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
     if (that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan2").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ComplementaryElectiveCoopPlan2")[i];
        if (ComplementaryElectiveCoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlan2element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlan2", "COMP");
      ComplementaryElectiveCoopPlan2flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlan2element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlan2", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlan2element, category);
}
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
     if (that.CoopPlanClickedMap.get("WKEXP904CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("WKEXP904CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("WKEXP904CoopPlan")[i];
        if (WKEXP904CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP904CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine117());
      that.addLine(getLine118());
     that.highlightElement(WKEXP904CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP904CoopPlan", "EngineeringProfession");
      WKEXP904CoopPlanflag=true
  }
 else {
      that.removeLine(getLine117());
      that.removeLine(getLine118());
     that.unHighlightElement(WKEXP904CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP904CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP904CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("WKEXP905CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("WKEXP905CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("WKEXP905CoopPlan")[i];
        if (WKEXP905CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP905CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine118());
     that.highlightElement(WKEXP905CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP905CoopPlan", "EngineeringProfession");
      WKEXP905CoopPlanflag=true
  }
 else {
      that.removeLine(getLine118());
     that.unHighlightElement(WKEXP905CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP905CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP905CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("CHE314CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CHE314CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CHE314CoopPlan")[i];
        if (CHE314CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE314CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine119());
      that.addLine(getLine120());
      that.addLine(getLine121());
     that.highlightElement(CHE314CoopPlanelement, "NaturalSciences");
     that.addToClicked("CHE314CoopPlan", "NaturalSciences");
      CHE314CoopPlanflag=true
  }
 else {
      that.removeLine(getLine119());
      that.removeLine(getLine120());
      that.removeLine(getLine121());
     that.unHighlightElement(CHE314CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHE314CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHE314CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ENGG404CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG404CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG404CoopPlan")[i];
        if (ENGG404CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404CoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG404CoopPlan", "EngineeringProfession");
      ENGG404CoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG404CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE444CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE444CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE444CoopPlan")[i];
        if (PETE444CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE444CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine122());
     that.highlightElement(PETE444CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PETE444CoopPlan", "EngineeringSciences");
      PETE444CoopPlanflag=true
  }
 else {
      that.removeLine(getLine122());
     that.unHighlightElement(PETE444CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE444CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE444CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE475CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE475CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE475CoopPlan")[i];
        if (PETE475CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE475CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine123());
     that.highlightElement(PETE475CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PETE475CoopPlan", "EngineeringSciences");
      PETE475CoopPlanflag=true
  }
 else {
      that.removeLine(getLine123());
     that.unHighlightElement(PETE475CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE475CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE475CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE476CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE476CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE476CoopPlan")[i];
        if (PETE476CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE476CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(PETE476CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PETE476CoopPlan", "EngineeringSciences");
      PETE476CoopPlanflag=true
  }
 else {
     that.unHighlightElement(PETE476CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE476CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE476CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE484CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE484CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE484CoopPlan")[i];
        if (PETE484CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE484CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine124());
      that.addLine(getLine125());
      that.addLine(getLine130());
     that.highlightElement(PETE484CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PETE484CoopPlan", "EngineeringSciences");
      PETE484CoopPlanflag=true
  }
 else {
      that.removeLine(getLine124());
      that.removeLine(getLine125());
      that.removeLine(getLine130());
     that.unHighlightElement(PETE484CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE484CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE484CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ENGG400CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG400CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG400CoopPlan")[i];
        if (ENGG400CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400CoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG400CoopPlan", "EngineeringProfession");
      ENGG400CoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG400CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE471CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE471CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE471CoopPlan")[i];
        if (PETE471CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE471CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine126());
     that.highlightElement(PETE471CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PETE471CoopPlan", "EngineeringSciences");
      PETE471CoopPlanflag=true
  }
 else {
      that.removeLine(getLine126());
     that.unHighlightElement(PETE471CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE471CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE471CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE477CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE477CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE477CoopPlan")[i];
        if (PETE477CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE477CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine127());
      that.addLine(getLine128());
     that.highlightElement(PETE477CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PETE477CoopPlan", "EngineeringSciences");
      PETE477CoopPlanflag=true
  }
 else {
      that.removeLine(getLine127());
      that.removeLine(getLine128());
     that.unHighlightElement(PETE477CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE477CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE477CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE478CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE478CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE478CoopPlan")[i];
        if (PETE478CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE478CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine129());
     that.highlightElement(PETE478CoopPlanelement, "EngineeringDesign");
     that.addToClicked("PETE478CoopPlan", "EngineeringDesign");
      PETE478CoopPlanflag=true
  }
 else {
      that.removeLine(getLine129());
     that.unHighlightElement(PETE478CoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("PETE478CoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(PETE478CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("PETE496CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PETE496CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PETE496CoopPlan")[i];
        if (PETE496CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE496CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine130());
     that.highlightElement(PETE496CoopPlanelement, "EngineeringDesign");
     that.addToClicked("PETE496CoopPlan", "EngineeringDesign");
      PETE496CoopPlanflag=true
  }
 else {
      that.removeLine(getLine130());
     that.unHighlightElement(PETE496CoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("PETE496CoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(PETE496CoopPlanelement, category);
}
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
     if (that.CoopPlanClickedMap.get("ITSElectiveCoopPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ITSElectiveCoopPlan0").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ITSElectiveCoopPlan0")[i];
        if (ITSElectiveCoopPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveCoopPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveCoopPlan0element, "ITS");
     that.addToClicked("ITSElectiveCoopPlan0", "ITS");
      ITSElectiveCoopPlan0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveCoopPlan0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveCoopPlan0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveCoopPlan0element, category);
}
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
this.CoopPlanProposedClickedMap.set("CHEM103CoopPlanProposed", []);
  var ENGG100CoopPlanProposedflag = false;
  var ENGG100CoopPlanProposedrflag = false;
 var ENGG100CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ENGG100CoopPlanProposed", []);
  var ENGG130CoopPlanProposedflag = false;
  var ENGG130CoopPlanProposedrflag = false;
 var ENGG130CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ENGG130CoopPlanProposed", []);
  var ENGL199CoopPlanProposedflag = false;
  var ENGL199CoopPlanProposedrflag = false;
 var ENGL199CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ENGL199CoopPlanProposed", []);
  var MATH100CoopPlanProposedflag = false;
  var MATH100CoopPlanProposedrflag = false;
 var MATH100CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("MATH100CoopPlanProposed", []);
  var PHYS130CoopPlanProposedflag = false;
  var PHYS130CoopPlanProposedrflag = false;
 var PHYS130CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PHYS130CoopPlanProposed", []);
  var CHEM105CoopPlanProposedflag = false;
  var CHEM105CoopPlanProposedrflag = false;
 var CHEM105CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("CHEM105CoopPlanProposed", []);
  var ENCMP100CoopPlanProposedflag = false;
  var ENCMP100CoopPlanProposedrflag = false;
 var ENCMP100CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ENCMP100CoopPlanProposed", []);
  var ENGG160CoopPlanProposedflag = false;
  var ENGG160CoopPlanProposedrflag = false;
 var ENGG160CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ENGG160CoopPlanProposed", []);
  var ENPH131CoopPlanProposedflag = false;
  var ENPH131CoopPlanProposedrflag = false;
 var ENPH131CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ENPH131CoopPlanProposed", []);
  var MATH101CoopPlanProposedflag = false;
  var MATH101CoopPlanProposedrflag = false;
 var MATH101CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("MATH101CoopPlanProposed", []);
  var MATH102CoopPlanProposedflag = false;
  var MATH102CoopPlanProposedrflag = false;
 var MATH102CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("MATH102CoopPlanProposed", []);
  var CHE243CoopPlanProposedflag = false;
  var CHE243CoopPlanProposedrflag = false;
 var CHE243CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("CHE243CoopPlanProposed", []);
  var EAS210CoopPlanProposedflag = false;
  var EAS210CoopPlanProposedrflag = false;
 var EAS210CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("EAS210CoopPlanProposed", []);
  var ECE209CoopPlanProposedflag = false;
  var ECE209CoopPlanProposedrflag = false;
 var ECE209CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ECE209CoopPlanProposed", []);
  var ENGG299CoopPlanProposedflag = false;
  var ENGG299CoopPlanProposedrflag = false;
 var ENGG299CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ENGG299CoopPlanProposed", []);
  var MATE202CoopPlanProposedflag = false;
  var MATE202CoopPlanProposedrflag = false;
 var MATE202CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("MATE202CoopPlanProposed", []);
  var MATH209CoopPlanProposedflag = false;
  var MATH209CoopPlanProposedrflag = false;
 var MATH209CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("MATH209CoopPlanProposed", []);
  var PETE275CoopPlanProposedflag = false;
  var PETE275CoopPlanProposedrflag = false;
 var PETE275CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE275CoopPlanProposed", []);
  var CHE312CoopPlanProposedflag = false;
  var CHE312CoopPlanProposedrflag = false;
 var CHE312CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("CHE312CoopPlanProposed", []);
  var CIVE270CoopPlanProposedflag = false;
  var CIVE270CoopPlanProposedrflag = false;
 var CIVE270CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("CIVE270CoopPlanProposed", []);
  var MATH201CoopPlanProposedflag = false;
  var MATH201CoopPlanProposedrflag = false;
 var MATH201CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("MATH201CoopPlanProposed", []);
  var PETE295CoopPlanProposedflag = false;
  var PETE295CoopPlanProposedrflag = false;
 var PETE295CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE295CoopPlanProposed", []);
  var STAT235CoopPlanProposedflag = false;
  var STAT235CoopPlanProposedrflag = false;
 var STAT235CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("STAT235CoopPlanProposed", []);
  var ComplementaryElectiveCoopPlanProposed0flag = false;
  var ComplementaryElectiveCoopPlanProposed0rflag = false;
 var ComplementaryElectiveCoopPlanProposed0Time = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ComplementaryElectiveCoopPlanProposed0", []);
  var WKEXP901CoopPlanProposedflag = false;
  var WKEXP901CoopPlanProposedrflag = false;
 var WKEXP901CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("WKEXP901CoopPlanProposed", []);
  var WKEXP902CoopPlanProposedflag = false;
  var WKEXP902CoopPlanProposedrflag = false;
 var WKEXP902CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("WKEXP902CoopPlanProposed", []);
  var CHE374CoopPlanProposedflag = false;
  var CHE374CoopPlanProposedrflag = false;
 var CHE374CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("CHE374CoopPlanProposed", []);
  var EAS222CoopPlanProposedflag = false;
  var EAS222CoopPlanProposedrflag = false;
 var EAS222CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("EAS222CoopPlanProposed", []);
  var PETE365CoopPlanProposedflag = false;
  var PETE365CoopPlanProposedrflag = false;
 var PETE365CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE365CoopPlanProposed", []);
  var PETE366CoopPlanProposedflag = false;
  var PETE366CoopPlanProposedrflag = false;
 var PETE366CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE366CoopPlanProposed", []);
  var PETE377CoopPlanProposedflag = false;
  var PETE377CoopPlanProposedrflag = false;
 var PETE377CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE377CoopPlanProposed", []);
  var WKEXP903CoopPlanProposedflag = false;
  var WKEXP903CoopPlanProposedrflag = false;
 var WKEXP903CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("WKEXP903CoopPlanProposed", []);
  var CHEM371CoopPlanProposedflag = false;
  var CHEM371CoopPlanProposedrflag = false;
 var CHEM371CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("CHEM371CoopPlanProposed", []);
  var ENGM310CoopPlanProposedflag = false;
  var ENGM310CoopPlanProposedrflag = false;
 var ENGM310CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ENGM310CoopPlanProposed", []);
  var ENGM401CoopPlanProposedflag = false;
  var ENGM401CoopPlanProposedrflag = false;
 var ENGM401CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ENGM401CoopPlanProposed", []);
  var PETE364CoopPlanProposedflag = false;
  var PETE364CoopPlanProposedrflag = false;
 var PETE364CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE364CoopPlanProposed", []);
  var PETE373CoopPlanProposedflag = false;
  var PETE373CoopPlanProposedrflag = false;
 var PETE373CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE373CoopPlanProposed", []);
  var PETE375CoopPlanProposedflag = false;
  var PETE375CoopPlanProposedrflag = false;
 var PETE375CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE375CoopPlanProposed", []);
  var CHE314CoopPlanProposedflag = false;
  var CHE314CoopPlanProposedrflag = false;
 var CHE314CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("CHE314CoopPlanProposed", []);
  var ComplementaryElectiveCoopPlanProposed1flag = false;
  var ComplementaryElectiveCoopPlanProposed1rflag = false;
 var ComplementaryElectiveCoopPlanProposed1Time = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ComplementaryElectiveCoopPlanProposed1", []);
  var WKEXP904CoopPlanProposedflag = false;
  var WKEXP904CoopPlanProposedrflag = false;
 var WKEXP904CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("WKEXP904CoopPlanProposed", []);
  var WKEXP905CoopPlanProposedflag = false;
  var WKEXP905CoopPlanProposedrflag = false;
 var WKEXP905CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("WKEXP905CoopPlanProposed", []);
  var ComplementaryElectiveCoopPlanProposed2flag = false;
  var ComplementaryElectiveCoopPlanProposed2rflag = false;
 var ComplementaryElectiveCoopPlanProposed2Time = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ComplementaryElectiveCoopPlanProposed2", []);
  var ENGG404CoopPlanProposedflag = false;
  var ENGG404CoopPlanProposedrflag = false;
 var ENGG404CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ENGG404CoopPlanProposed", []);
  var PETE444CoopPlanProposedflag = false;
  var PETE444CoopPlanProposedrflag = false;
 var PETE444CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE444CoopPlanProposed", []);
  var ProgramTechnicalElectiveCoopPlanProposed0flag = false;
  var ProgramTechnicalElectiveCoopPlanProposed0rflag = false;
 var ProgramTechnicalElectiveCoopPlanProposed0Time = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ProgramTechnicalElectiveCoopPlanProposed0", []);
  var PETE476CoopPlanProposedflag = false;
  var PETE476CoopPlanProposedrflag = false;
 var PETE476CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE476CoopPlanProposed", []);
  var PETE484CoopPlanProposedflag = false;
  var PETE484CoopPlanProposedrflag = false;
 var PETE484CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE484CoopPlanProposed", []);
  var ENGG400CoopPlanProposedflag = false;
  var ENGG400CoopPlanProposedrflag = false;
 var ENGG400CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ENGG400CoopPlanProposed", []);
  var PETE471CoopPlanProposedflag = false;
  var PETE471CoopPlanProposedrflag = false;
 var PETE471CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE471CoopPlanProposed", []);
  var ProgramTechnicalElectiveCoopPlanProposed1flag = false;
  var ProgramTechnicalElectiveCoopPlanProposed1rflag = false;
 var ProgramTechnicalElectiveCoopPlanProposed1Time = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ProgramTechnicalElectiveCoopPlanProposed1", []);
  var PETE478CoopPlanProposedflag = false;
  var PETE478CoopPlanProposedrflag = false;
 var PETE478CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE478CoopPlanProposed", []);
  var PETE496CoopPlanProposedflag = false;
  var PETE496CoopPlanProposedrflag = false;
 var PETE496CoopPlanProposedTime = new Date().getTime();
this.CoopPlanProposedClickedMap.set("PETE496CoopPlanProposed", []);
  var ITSElectiveCoopPlanProposed0flag = false;
  var ITSElectiveCoopPlanProposed0rflag = false;
 var ITSElectiveCoopPlanProposed0Time = new Date().getTime();
this.CoopPlanProposedClickedMap.set("ITSElectiveCoopPlanProposed0", []);
$scope.CHEM103CoopPlanProposedListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103CoopPlanProposedTime <= 200) { 
        CHEM103CoopPlanProposedTime = currentTime;
        return;
    }
CHEM103CoopPlanProposedTime = currentTime;
  var CHEM103CoopPlanProposedelement = document.getElementById("CHEM103CoopPlanProposed");
 if (!CHEM103CoopPlanProposedflag) {
     if (that.CoopPlanProposedClickedMap.get("CHEM103CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("CHEM103CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("CHEM103CoopPlanProposed")[i];
        if (CHEM103CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine133());
     that.highlightElement(CHEM103CoopPlanProposedelement, "NaturalSciences");
     that.addToClicked("CHEM103CoopPlanProposed", "NaturalSciences");
      CHEM103CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine133());
     that.unHighlightElement(CHEM103CoopPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103CoopPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ENGG100CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ENGG100CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ENGG100CoopPlanProposed")[i];
        if (ENGG100CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100CoopPlanProposedelement, "EngineeringProfession");
     that.addToClicked("ENGG100CoopPlanProposed", "EngineeringProfession");
      ENGG100CoopPlanProposedflag=true
  }
 else {
     that.unHighlightElement(ENGG100CoopPlanProposedelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100CoopPlanProposed", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ENGG130CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ENGG130CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ENGG130CoopPlanProposed")[i];
        if (ENGG130CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine131());
      that.addLine(getLine136());
      that.addLine(getLine149());
     that.highlightElement(ENGG130CoopPlanProposedelement, "NaturalSciences");
     that.addToClicked("ENGG130CoopPlanProposed", "NaturalSciences");
      ENGG130CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine131());
      that.removeLine(getLine136());
      that.removeLine(getLine149());
     that.unHighlightElement(ENGG130CoopPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130CoopPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ENGL199CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ENGL199CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ENGL199CoopPlanProposed")[i];
        if (ENGL199CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine134());
     that.highlightElement(ENGL199CoopPlanProposedelement, "Other");
     that.addToClicked("ENGL199CoopPlanProposed", "Other");
      ENGL199CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine134());
     that.unHighlightElement(ENGL199CoopPlanProposedelement, "Other");
     var category = that.removeFromClicked("ENGL199CoopPlanProposed", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("MATH100CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("MATH100CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("MATH100CoopPlanProposed")[i];
        if (MATH100CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine131());
      that.addLine(getLine132());
      that.addLine(getLine135());
      that.addLine(getLine138());
      that.addLine(getLine139());
      that.addLine(getLine152());
     that.highlightElement(MATH100CoopPlanProposedelement, "Math");
     that.addToClicked("MATH100CoopPlanProposed", "Math");
      MATH100CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine131());
      that.removeLine(getLine132());
      that.removeLine(getLine135());
      that.removeLine(getLine138());
      that.removeLine(getLine139());
      that.removeLine(getLine152());
     that.unHighlightElement(MATH100CoopPlanProposedelement, "Math");
     var category = that.removeFromClicked("MATH100CoopPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(MATH100CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PHYS130CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PHYS130CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PHYS130CoopPlanProposed")[i];
        if (PHYS130CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine132());
     that.highlightElement(PHYS130CoopPlanProposedelement, "NaturalSciences");
     that.addToClicked("PHYS130CoopPlanProposed", "NaturalSciences");
      PHYS130CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine132());
     that.unHighlightElement(PHYS130CoopPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130CoopPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("CHEM105CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("CHEM105CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("CHEM105CoopPlanProposed")[i];
        if (CHEM105CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine133());
      that.addLine(getLine141());
      that.addLine(getLine144());
      that.addLine(getLine161());
     that.highlightElement(CHEM105CoopPlanProposedelement, "NaturalSciences");
     that.addToClicked("CHEM105CoopPlanProposed", "NaturalSciences");
      CHEM105CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine133());
      that.removeLine(getLine141());
      that.removeLine(getLine144());
      that.removeLine(getLine161());
     that.unHighlightElement(CHEM105CoopPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105CoopPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ENCMP100CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ENCMP100CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ENCMP100CoopPlanProposed")[i];
        if (ENCMP100CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine156());
     that.highlightElement(ENCMP100CoopPlanProposedelement, "NaturalSciences");
     that.addToClicked("ENCMP100CoopPlanProposed", "NaturalSciences");
      ENCMP100CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine156());
     that.unHighlightElement(ENCMP100CoopPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100CoopPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ENGG160CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ENGG160CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ENGG160CoopPlanProposed")[i];
        if (ENGG160CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine134());
     that.highlightElement(ENGG160CoopPlanProposedelement, "EngineeringDesign");
     that.addToClicked("ENGG160CoopPlanProposed", "EngineeringDesign");
      ENGG160CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine134());
     that.unHighlightElement(ENGG160CoopPlanProposedelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160CoopPlanProposed", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ENPH131CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ENPH131CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ENPH131CoopPlanProposed")[i];
        if (ENPH131CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine135());
      that.addLine(getLine136());
      that.addLine(getLine137());
      that.addLine(getLine146());
     that.highlightElement(ENPH131CoopPlanProposedelement, "NaturalSciences");
     that.addToClicked("ENPH131CoopPlanProposed", "NaturalSciences");
      ENPH131CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine135());
      that.removeLine(getLine136());
      that.removeLine(getLine137());
      that.removeLine(getLine146());
     that.unHighlightElement(ENPH131CoopPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131CoopPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("MATH101CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("MATH101CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("MATH101CoopPlanProposed")[i];
        if (MATH101CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine137());
      that.addLine(getLine138());
      that.addLine(getLine140());
      that.addLine(getLine142());
      that.addLine(getLine150());
      that.addLine(getLine153());
      that.addLine(getLine162());
     that.highlightElement(MATH101CoopPlanProposedelement, "Math");
     that.addToClicked("MATH101CoopPlanProposed", "Math");
      MATH101CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine137());
      that.removeLine(getLine138());
      that.removeLine(getLine140());
      that.removeLine(getLine142());
      that.removeLine(getLine150());
      that.removeLine(getLine153());
      that.removeLine(getLine162());
     that.unHighlightElement(MATH101CoopPlanProposedelement, "Math");
     var category = that.removeFromClicked("MATH101CoopPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(MATH101CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("MATH102CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("MATH102CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("MATH102CoopPlanProposed")[i];
        if (MATH102CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine139());
      that.addLine(getLine143());
     that.highlightElement(MATH102CoopPlanProposedelement, "Math");
     that.addToClicked("MATH102CoopPlanProposed", "Math");
      MATH102CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine139());
      that.removeLine(getLine143());
     that.unHighlightElement(MATH102CoopPlanProposedelement, "Math");
     var category = that.removeFromClicked("MATH102CoopPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(MATH102CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("CHE243CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("CHE243CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("CHE243CoopPlanProposed")[i];
        if (CHE243CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine140());
      that.addLine(getLine145());
     that.highlightElement(CHE243CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("CHE243CoopPlanProposed", "EngineeringSciences");
      CHE243CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine140());
      that.removeLine(getLine145());
     that.unHighlightElement(CHE243CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("EAS210CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("EAS210CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("EAS210CoopPlanProposed")[i];
        if (EAS210CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(EAS210CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine157());
     that.highlightElement(EAS210CoopPlanProposedelement, "NaturalSciences");
     that.addToClicked("EAS210CoopPlanProposed", "NaturalSciences");
      EAS210CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine157());
     that.unHighlightElement(EAS210CoopPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("EAS210CoopPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS210CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ECE209CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ECE209CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ECE209CoopPlanProposed")[i];
        if (ECE209CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE209CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE209CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("ECE209CoopPlanProposed", "EngineeringSciences");
      ECE209CoopPlanProposedflag=true
  }
 else {
     that.unHighlightElement(ECE209CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE209CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE209CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ENGG299CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ENGG299CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ENGG299CoopPlanProposed")[i];
        if (ENGG299CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG299CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine154());
     that.highlightElement(ENGG299CoopPlanProposedelement, "EngineeringProfession");
     that.addToClicked("ENGG299CoopPlanProposed", "EngineeringProfession");
      ENGG299CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine154());
     that.unHighlightElement(ENGG299CoopPlanProposedelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299CoopPlanProposed", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("MATE202CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("MATE202CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("MATE202CoopPlanProposed")[i];
        if (MATE202CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE202CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine141());
     that.highlightElement(MATE202CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("MATE202CoopPlanProposed", "EngineeringSciences");
      MATE202CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine141());
     that.unHighlightElement(MATE202CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE202CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE202CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("MATH209CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("MATH209CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("MATH209CoopPlanProposed")[i];
        if (MATH209CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine142());
      that.addLine(getLine143());
      that.addLine(getLine147());
      that.addLine(getLine151());
     that.highlightElement(MATH209CoopPlanProposedelement, "Math");
     that.addToClicked("MATH209CoopPlanProposed", "Math");
      MATH209CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine142());
      that.removeLine(getLine143());
      that.removeLine(getLine147());
      that.removeLine(getLine151());
     that.unHighlightElement(MATH209CoopPlanProposedelement, "Math");
     var category = that.removeFromClicked("MATH209CoopPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(MATH209CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE275CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE275CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE275CoopPlanProposed")[i];
        if (PETE275CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE275CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine144());
      that.addLine(getLine158());
      that.addLine(getLine165());
      that.addLine(getLine171());
     that.highlightElement(PETE275CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE275CoopPlanProposed", "EngineeringSciences");
      PETE275CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine144());
      that.removeLine(getLine158());
      that.removeLine(getLine165());
      that.removeLine(getLine171());
     that.unHighlightElement(PETE275CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE275CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE275CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("CHE312CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("CHE312CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("CHE312CoopPlanProposed")[i];
        if (CHE312CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE312CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine145());
      that.addLine(getLine146());
      that.addLine(getLine147());
      that.addLine(getLine148());
      that.addLine(getLine159());
      that.addLine(getLine163());
      that.addLine(getLine167());
     that.highlightElement(CHE312CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("CHE312CoopPlanProposed", "EngineeringSciences");
      CHE312CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine145());
      that.removeLine(getLine146());
      that.removeLine(getLine147());
      that.removeLine(getLine148());
      that.removeLine(getLine159());
      that.removeLine(getLine163());
      that.removeLine(getLine167());
     that.unHighlightElement(CHE312CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE312CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE312CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("CIVE270CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("CIVE270CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("CIVE270CoopPlanProposed")[i];
        if (CIVE270CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine149());
      that.addLine(getLine150());
      that.addLine(getLine164());
     that.highlightElement(CIVE270CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("CIVE270CoopPlanProposed", "EngineeringSciences");
      CIVE270CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine149());
      that.removeLine(getLine150());
      that.removeLine(getLine164());
     that.unHighlightElement(CIVE270CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("MATH201CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("MATH201CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("MATH201CoopPlanProposed")[i];
        if (MATH201CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine148());
      that.addLine(getLine151());
      that.addLine(getLine166());
     that.highlightElement(MATH201CoopPlanProposedelement, "Math");
     that.addToClicked("MATH201CoopPlanProposed", "Math");
      MATH201CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine148());
      that.removeLine(getLine151());
      that.removeLine(getLine166());
     that.unHighlightElement(MATH201CoopPlanProposedelement, "Math");
     var category = that.removeFromClicked("MATH201CoopPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(MATH201CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE295CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE295CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE295CoopPlanProposed")[i];
        if (PETE295CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE295CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(PETE295CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE295CoopPlanProposed", "EngineeringSciences");
      PETE295CoopPlanProposedflag=true
  }
 else {
     that.unHighlightElement(PETE295CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE295CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE295CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("STAT235CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("STAT235CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("STAT235CoopPlanProposed")[i];
        if (STAT235CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(STAT235CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine152());
      that.addLine(getLine153());
     that.highlightElement(STAT235CoopPlanProposedelement, "Math");
     that.addToClicked("STAT235CoopPlanProposed", "Math");
      STAT235CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine152());
      that.removeLine(getLine153());
     that.unHighlightElement(STAT235CoopPlanProposedelement, "Math");
     var category = that.removeFromClicked("STAT235CoopPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(STAT235CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed0").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed0")[i];
        if (ComplementaryElectiveCoopPlanProposed0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlanProposed0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlanProposed0element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlanProposed0", "COMP");
      ComplementaryElectiveCoopPlanProposed0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlanProposed0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlanProposed0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlanProposed0element, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("WKEXP901CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("WKEXP901CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("WKEXP901CoopPlanProposed")[i];
        if (WKEXP901CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP901CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine154());
      that.addLine(getLine155());
     that.highlightElement(WKEXP901CoopPlanProposedelement, "EngineeringProfession");
     that.addToClicked("WKEXP901CoopPlanProposed", "EngineeringProfession");
      WKEXP901CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine154());
      that.removeLine(getLine155());
     that.unHighlightElement(WKEXP901CoopPlanProposedelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP901CoopPlanProposed", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP901CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("WKEXP902CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("WKEXP902CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("WKEXP902CoopPlanProposed")[i];
        if (WKEXP902CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP902CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine155());
      that.addLine(getLine160());
     that.highlightElement(WKEXP902CoopPlanProposedelement, "EngineeringProfession");
     that.addToClicked("WKEXP902CoopPlanProposed", "EngineeringProfession");
      WKEXP902CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine155());
      that.removeLine(getLine160());
     that.unHighlightElement(WKEXP902CoopPlanProposedelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP902CoopPlanProposed", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP902CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("CHE374CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("CHE374CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("CHE374CoopPlanProposed")[i];
        if (CHE374CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE374CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine156());
      that.addLine(getLine168());
     that.highlightElement(CHE374CoopPlanProposedelement, "Math");
     that.addToClicked("CHE374CoopPlanProposed", "Math");
      CHE374CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine156());
      that.removeLine(getLine168());
     that.unHighlightElement(CHE374CoopPlanProposedelement, "Math");
     var category = that.removeFromClicked("CHE374CoopPlanProposed", "Math");
  if (category != "") { 
     that.highlightElement(CHE374CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("EAS222CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("EAS222CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("EAS222CoopPlanProposed")[i];
        if (EAS222CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(EAS222CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine157());
     that.highlightElement(EAS222CoopPlanProposedelement, "NaturalSciences");
     that.addToClicked("EAS222CoopPlanProposed", "NaturalSciences");
      EAS222CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine157());
     that.unHighlightElement(EAS222CoopPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("EAS222CoopPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS222CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE365CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE365CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE365CoopPlanProposed")[i];
        if (PETE365CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE365CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine158());
     that.highlightElement(PETE365CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE365CoopPlanProposed", "EngineeringSciences");
      PETE365CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine158());
     that.unHighlightElement(PETE365CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE365CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE365CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE366CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE366CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE366CoopPlanProposed")[i];
        if (PETE366CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE366CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine159());
     that.highlightElement(PETE366CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE366CoopPlanProposed", "EngineeringSciences");
      PETE366CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine159());
     that.unHighlightElement(PETE366CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE366CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE366CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE377CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE377CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE377CoopPlanProposed")[i];
        if (PETE377CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE377CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(PETE377CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE377CoopPlanProposed", "EngineeringSciences");
      PETE377CoopPlanProposedflag=true
  }
 else {
     that.unHighlightElement(PETE377CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE377CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE377CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("WKEXP903CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("WKEXP903CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("WKEXP903CoopPlanProposed")[i];
        if (WKEXP903CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP903CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine160());
      that.addLine(getLine169());
     that.highlightElement(WKEXP903CoopPlanProposedelement, "EngineeringProfession");
     that.addToClicked("WKEXP903CoopPlanProposed", "EngineeringProfession");
      WKEXP903CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine160());
      that.removeLine(getLine169());
     that.unHighlightElement(WKEXP903CoopPlanProposedelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP903CoopPlanProposed", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP903CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("CHEM371CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("CHEM371CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("CHEM371CoopPlanProposed")[i];
        if (CHEM371CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM371CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine161());
      that.addLine(getLine162());
     that.highlightElement(CHEM371CoopPlanProposedelement, "NaturalSciences");
     that.addToClicked("CHEM371CoopPlanProposed", "NaturalSciences");
      CHEM371CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine161());
      that.removeLine(getLine162());
     that.unHighlightElement(CHEM371CoopPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM371CoopPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM371CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ENGM310CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ENGM310CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ENGM310CoopPlanProposed")[i];
        if (ENGM310CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM310CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine172());
     that.highlightElement(ENGM310CoopPlanProposedelement, "Other");
     that.addToClicked("ENGM310CoopPlanProposed", "Other");
      ENGM310CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine172());
     that.unHighlightElement(ENGM310CoopPlanProposedelement, "Other");
     var category = that.removeFromClicked("ENGM310CoopPlanProposed", "Other");
  if (category != "") { 
     that.highlightElement(ENGM310CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ENGM401CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ENGM401CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ENGM401CoopPlanProposed")[i];
        if (ENGM401CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine173());
     that.highlightElement(ENGM401CoopPlanProposedelement, "Other");
     that.addToClicked("ENGM401CoopPlanProposed", "Other");
      ENGM401CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine173());
     that.unHighlightElement(ENGM401CoopPlanProposedelement, "Other");
     var category = that.removeFromClicked("ENGM401CoopPlanProposed", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE364CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE364CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE364CoopPlanProposed")[i];
        if (PETE364CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE364CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine163());
      that.addLine(getLine164());
     that.highlightElement(PETE364CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE364CoopPlanProposed", "EngineeringSciences");
      PETE364CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine163());
      that.removeLine(getLine164());
     that.unHighlightElement(PETE364CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE364CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE364CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE373CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE373CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE373CoopPlanProposed")[i];
        if (PETE373CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE373CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine165());
      that.addLine(getLine174());
      that.addLine(getLine175());
     that.highlightElement(PETE373CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE373CoopPlanProposed", "EngineeringSciences");
      PETE373CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine165());
      that.removeLine(getLine174());
      that.removeLine(getLine175());
     that.unHighlightElement(PETE373CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE373CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE373CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE375CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE375CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE375CoopPlanProposed")[i];
        if (PETE375CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE375CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(PETE375CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE375CoopPlanProposed", "EngineeringSciences");
      PETE375CoopPlanProposedflag=true
  }
 else {
     that.unHighlightElement(PETE375CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE375CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE375CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("CHE314CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("CHE314CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("CHE314CoopPlanProposed")[i];
        if (CHE314CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE314CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine166());
      that.addLine(getLine167());
      that.addLine(getLine168());
     that.highlightElement(CHE314CoopPlanProposedelement, "NaturalSciences");
     that.addToClicked("CHE314CoopPlanProposed", "NaturalSciences");
      CHE314CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine166());
      that.removeLine(getLine167());
      that.removeLine(getLine168());
     that.unHighlightElement(CHE314CoopPlanProposedelement, "NaturalSciences");
     var category = that.removeFromClicked("CHE314CoopPlanProposed", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHE314CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed1").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed1")[i];
        if (ComplementaryElectiveCoopPlanProposed1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlanProposed1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlanProposed1element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlanProposed1", "COMP");
      ComplementaryElectiveCoopPlanProposed1flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlanProposed1element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlanProposed1", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlanProposed1element, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("WKEXP904CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("WKEXP904CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("WKEXP904CoopPlanProposed")[i];
        if (WKEXP904CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP904CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine169());
      that.addLine(getLine170());
     that.highlightElement(WKEXP904CoopPlanProposedelement, "EngineeringProfession");
     that.addToClicked("WKEXP904CoopPlanProposed", "EngineeringProfession");
      WKEXP904CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine169());
      that.removeLine(getLine170());
     that.unHighlightElement(WKEXP904CoopPlanProposedelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP904CoopPlanProposed", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP904CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("WKEXP905CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("WKEXP905CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("WKEXP905CoopPlanProposed")[i];
        if (WKEXP905CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP905CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine170());
     that.highlightElement(WKEXP905CoopPlanProposedelement, "EngineeringProfession");
     that.addToClicked("WKEXP905CoopPlanProposed", "EngineeringProfession");
      WKEXP905CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine170());
     that.unHighlightElement(WKEXP905CoopPlanProposedelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP905CoopPlanProposed", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP905CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed2").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ComplementaryElectiveCoopPlanProposed2")[i];
        if (ComplementaryElectiveCoopPlanProposed2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlanProposed2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlanProposed2element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlanProposed2", "COMP");
      ComplementaryElectiveCoopPlanProposed2flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlanProposed2element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlanProposed2", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlanProposed2element, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ENGG404CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ENGG404CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ENGG404CoopPlanProposed")[i];
        if (ENGG404CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404CoopPlanProposedelement, "EngineeringProfession");
     that.addToClicked("ENGG404CoopPlanProposed", "EngineeringProfession");
      ENGG404CoopPlanProposedflag=true
  }
 else {
     that.unHighlightElement(ENGG404CoopPlanProposedelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404CoopPlanProposed", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE444CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE444CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE444CoopPlanProposed")[i];
        if (PETE444CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE444CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine171());
     that.highlightElement(PETE444CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE444CoopPlanProposed", "EngineeringSciences");
      PETE444CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine171());
     that.unHighlightElement(PETE444CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE444CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE444CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ProgramTechnicalElectiveCoopPlanProposed0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ProgramTechnicalElectiveCoopPlanProposed0").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ProgramTechnicalElectiveCoopPlanProposed0")[i];
        if (ProgramTechnicalElectiveCoopPlanProposed0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlanProposed0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlanProposed0element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlanProposed0", "PROG");
      ProgramTechnicalElectiveCoopPlanProposed0flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlanProposed0element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlanProposed0", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlanProposed0element, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE476CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE476CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE476CoopPlanProposed")[i];
        if (PETE476CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE476CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(PETE476CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE476CoopPlanProposed", "EngineeringSciences");
      PETE476CoopPlanProposedflag=true
  }
 else {
     that.unHighlightElement(PETE476CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE476CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE476CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE484CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE484CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE484CoopPlanProposed")[i];
        if (PETE484CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE484CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine172());
      that.addLine(getLine173());
      that.addLine(getLine176());
     that.highlightElement(PETE484CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE484CoopPlanProposed", "EngineeringSciences");
      PETE484CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine172());
      that.removeLine(getLine173());
      that.removeLine(getLine176());
     that.unHighlightElement(PETE484CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE484CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE484CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ENGG400CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ENGG400CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ENGG400CoopPlanProposed")[i];
        if (ENGG400CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400CoopPlanProposedelement, "EngineeringProfession");
     that.addToClicked("ENGG400CoopPlanProposed", "EngineeringProfession");
      ENGG400CoopPlanProposedflag=true
  }
 else {
     that.unHighlightElement(ENGG400CoopPlanProposedelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400CoopPlanProposed", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE471CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE471CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE471CoopPlanProposed")[i];
        if (PETE471CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE471CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine174());
     that.highlightElement(PETE471CoopPlanProposedelement, "EngineeringSciences");
     that.addToClicked("PETE471CoopPlanProposed", "EngineeringSciences");
      PETE471CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine174());
     that.unHighlightElement(PETE471CoopPlanProposedelement, "EngineeringSciences");
     var category = that.removeFromClicked("PETE471CoopPlanProposed", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PETE471CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ProgramTechnicalElectiveCoopPlanProposed1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ProgramTechnicalElectiveCoopPlanProposed1").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ProgramTechnicalElectiveCoopPlanProposed1")[i];
        if (ProgramTechnicalElectiveCoopPlanProposed1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlanProposed1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlanProposed1element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlanProposed1", "PROG");
      ProgramTechnicalElectiveCoopPlanProposed1flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlanProposed1element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlanProposed1", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlanProposed1element, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE478CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE478CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE478CoopPlanProposed")[i];
        if (PETE478CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE478CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine175());
     that.highlightElement(PETE478CoopPlanProposedelement, "EngineeringDesign");
     that.addToClicked("PETE478CoopPlanProposed", "EngineeringDesign");
      PETE478CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine175());
     that.unHighlightElement(PETE478CoopPlanProposedelement, "EngineeringDesign");
     var category = that.removeFromClicked("PETE478CoopPlanProposed", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(PETE478CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("PETE496CoopPlanProposed").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("PETE496CoopPlanProposed").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("PETE496CoopPlanProposed")[i];
        if (PETE496CoopPlanProposedelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PETE496CoopPlanProposedelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine176());
     that.highlightElement(PETE496CoopPlanProposedelement, "EngineeringDesign");
     that.addToClicked("PETE496CoopPlanProposed", "EngineeringDesign");
      PETE496CoopPlanProposedflag=true
  }
 else {
      that.removeLine(getLine176());
     that.unHighlightElement(PETE496CoopPlanProposedelement, "EngineeringDesign");
     var category = that.removeFromClicked("PETE496CoopPlanProposed", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(PETE496CoopPlanProposedelement, category);
}
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
     if (that.CoopPlanProposedClickedMap.get("ITSElectiveCoopPlanProposed0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanProposedClickedMap.get("ITSElectiveCoopPlanProposed0").length; i++) { 
        var cate = that.CoopPlanProposedClickedMap.get("ITSElectiveCoopPlanProposed0")[i];
        if (ITSElectiveCoopPlanProposed0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveCoopPlanProposed0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveCoopPlanProposed0element, "ITS");
     that.addToClicked("ITSElectiveCoopPlanProposed0", "ITS");
      ITSElectiveCoopPlanProposed0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveCoopPlanProposed0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveCoopPlanProposed0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveCoopPlanProposed0element, category);
}
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