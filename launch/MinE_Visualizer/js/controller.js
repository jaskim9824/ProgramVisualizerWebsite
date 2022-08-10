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
this.TraditionalPlanTerms = 9;
this.TraditionalPlanMaxCourses = 7;
this.CoopPlan1List = [];
this.CoopPlan1Clicked = [];
this.CoopPlan1LegendBtns = [];
this.CoopPlan1LegendBtnsClicked = [];
this.CoopPlan1ClickedMap = new Map();
this.CoopPlan1Terms = 13;
this.CoopPlan1MaxCourses = 7;
this.CoopPlan2List = [];
this.CoopPlan2Clicked = [];
this.CoopPlan2LegendBtns = [];
this.CoopPlan2LegendBtnsClicked = [];
this.CoopPlan2ClickedMap = new Map();
this.CoopPlan2Terms = 13;
this.CoopPlan2MaxCourses = 7;
this.previousPlan = $scope.selectedPlan
this.setDefaults = function(plan) { 
  switch(plan) { 
      case "TraditionalPlan": 
          $scope.$apply();
          break;
      case "CoopPlan1": 
          $scope.$apply();
          break;
      case "CoopPlan2": 
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
  case "CoopPlan1": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
    }
    break; 
  case "CoopPlan2": 
    for (let i = 0; i < this.CoopPlan2List.length; i++) {
        this.CoopPlan2List[i][0].hide(true);
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
  var currbtn = document.getElementById("NaturalSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.CoopPlan2LegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringProfession");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.CoopPlan2LegendBtns.push(currbtn);
  var currbtn = document.getElementById("Other");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.CoopPlan2LegendBtns.push(currbtn);
  var currbtn = document.getElementById("Math");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.CoopPlan2LegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringDesign");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.CoopPlan2LegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.CoopPlan2LegendBtns.push(currbtn);
  var currbtn = document.getElementById("PROG");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.CoopPlan2LegendBtns.push(currbtn);
  var currbtn = document.getElementById("COMP");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.CoopPlan2LegendBtns.push(currbtn);
  var currbtn = document.getElementById("ITS");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.CoopPlan2LegendBtns.push(currbtn);
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
            if (this.TraditionalPlanLegendBtns[i].classList.contains("legendbutton-pressed")) {
              this.TraditionalPlanLegendBtns[i].classList.remove("legendbutton-pressed");
            }
              this.TraditionalPlanLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
            if (this.TraditionalPlanLegendBtns[i].classList.contains("legendbutton")) {
              this.TraditionalPlanLegendBtns[i].classList.remove("legendbutton");
            }
              this.TraditionalPlanLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    case "CoopPlan1": 
      for (let i = 0; i < this.CoopPlan1List.length; i++) {
          this.CoopPlan1List[i][0].show(true);
      }
      width = this.CoopPlan1Terms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan1MaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan1Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan1Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan1Clicked[i][1]);
      }
      for (let i = 0; i < this.CoopPlan1LegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.CoopPlan1LegendBtnsClicked.length; j++) {
              if (this.CoopPlan1LegendBtnsClicked[j] == this.CoopPlan1LegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
            if (this.CoopPlan1LegendBtns[i].classList.contains("legendbutton-pressed")) {
              this.CoopPlan1LegendBtns[i].classList.remove("legendbutton-pressed");
            }
              this.CoopPlan1LegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
            if (this.CoopPlan1LegendBtns[i].classList.contains("legendbutton")) {
              this.CoopPlan1LegendBtns[i].classList.remove("legendbutton");
            }
              this.CoopPlan1LegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    case "CoopPlan2": 
      for (let i = 0; i < this.CoopPlan2List.length; i++) {
          this.CoopPlan2List[i][0].show(true);
      }
      width = this.CoopPlan2Terms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopPlan2MaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopPlan2Clicked.length; i++) {
          var element = document.getElementById(this.CoopPlan2Clicked[i][0]);
          this.highlightElement(element, this.CoopPlan2Clicked[i][1]);
      }
      for (let i = 0; i < this.CoopPlan2LegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.CoopPlan2LegendBtnsClicked.length; j++) {
              if (this.CoopPlan2LegendBtnsClicked[j] == this.CoopPlan2LegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
            if (this.CoopPlan2LegendBtns[i].classList.contains("legendbutton-pressed")) {
              this.CoopPlan2LegendBtns[i].classList.remove("legendbutton-pressed");
            }
              this.CoopPlan2LegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
            if (this.CoopPlan2LegendBtns[i].classList.contains("legendbutton")) {
              this.CoopPlan2LegendBtns[i].classList.remove("legendbutton");
            }
              this.CoopPlan2LegendBtns[i].classList.add("legendbutton-pressed");
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
 case "CoopPlan1":
    var index = this.CoopPlan1List.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan1List.push([line, 1])
    }
    else {
        this.CoopPlan1List[index][1]++;
    }
    break;
 case "CoopPlan2":
    var index = this.CoopPlan2List.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopPlan2List.push([line, 1])
    }
    else {
        this.CoopPlan2List[index][1]++;
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
    break; case "CoopPlan1":
    var index = this.CoopPlan1List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan1List[index][1]--
        if (this.CoopPlan1List[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan1List.splice(index, 1);
        }
    }
    break; case "CoopPlan2":
    var index = this.CoopPlan2List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan2List[index][1]--
        if (this.CoopPlan2List[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan2List.splice(index, 1);
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
    break; case "CoopPlan1":
    var index = this.CoopPlan1Clicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlan1Clicked.push([element, category, 1]);
    }
    else {
        this.CoopPlan1Clicked[index][1] = category;
        this.CoopPlan1Clicked[index][2]++;
    }
    this.CoopPlan1ClickedMap.get(element).push(category);
    break; case "CoopPlan2":
    var index = this.CoopPlan2Clicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopPlan2Clicked.push([element, category, 1]);
    }
    else {
        this.CoopPlan2Clicked[index][1] = category;
        this.CoopPlan2Clicked[index][2]++;
    }
    this.CoopPlan2ClickedMap.get(element).push(category);
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
    break; case "CoopPlan1":
    var index = this.CoopPlan1Clicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlan1ClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlan1ClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlan1Clicked[index][2]--;
        if (this.CoopPlan1Clicked[index][2] <= 0) {
            this.CoopPlan1Clicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlan1ClickedMap.get(element).length - 1
        return this.CoopPlan1ClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "CoopPlan2":
    var index = this.CoopPlan2Clicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopPlan2ClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopPlan2ClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopPlan2Clicked[index][2]--;
        if (this.CoopPlan2Clicked[index][2] <= 0) {
            this.CoopPlan2Clicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopPlan2ClickedMap.get(element).length - 1
        return this.CoopPlan2ClickedMap.get(element)[maxIndex];
    }
    return "";
    break;    default:
    console.log("shouldn't be here");
    }
};
var NaturalSciencesTraditionalPlanflag = false;
var NaturalSciencesCoopPlan1flag = false;
var NaturalSciencesCoopPlan2flag = false;
var EngineeringProfessionTraditionalPlanflag = false;
var EngineeringProfessionCoopPlan1flag = false;
var EngineeringProfessionCoopPlan2flag = false;
var OtherTraditionalPlanflag = false;
var OtherCoopPlan1flag = false;
var OtherCoopPlan2flag = false;
var MathTraditionalPlanflag = false;
var MathCoopPlan1flag = false;
var MathCoopPlan2flag = false;
var EngineeringDesignTraditionalPlanflag = false;
var EngineeringDesignCoopPlan1flag = false;
var EngineeringDesignCoopPlan2flag = false;
var EngineeringSciencesTraditionalPlanflag = false;
var EngineeringSciencesCoopPlan1flag = false;
var EngineeringSciencesCoopPlan2flag = false;
var PROGTraditionalPlanflag = false;
var PROGCoopPlan1flag = false;
var PROGCoopPlan2flag = false;
var COMPTraditionalPlanflag = false;
var COMPCoopPlan1flag = false;
var COMPCoopPlan2flag = false;
var ITSTraditionalPlanflag = false;
var ITSCoopPlan1flag = false;
var ITSCoopPlan2flag = false;
$scope.NaturalSciencesclickListener = function() {
    var planName = $scope.selectedPlan;
    var pressedbtn = document.getElementById("NaturalSciences");
    var checkFlag = "!NaturalSciences" + planName + "flag";
    var flagBool = eval(checkFlag);
    if (flagBool) {
        that.highlightCategory("NaturalSciences", planName);
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "NaturalSciences" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("NaturalSciences", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringProfession" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringProfession", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "Other" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("Other", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "Math" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("Math", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringDesign" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringDesign", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "EngineeringSciences" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("EngineeringSciences", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "EngineeringSciences" + planName + "flag";
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "PROG" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("PROG", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "PROG" + planName + "flag";
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "COMP" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("COMP", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
        pressedbtn.classList.add("legendbutton");
        var findIndex = "var index = that." + planName + "LegendBtnsClicked.findIndex((element) => element[0] == pressedbtn)";
        eval(findIndex);
        var removeClick = "that." + planName + "LegendBtnsClicked.splice(index, 1)";
        eval(removeClick);
        var flagName = "COMP" + planName + "flag";
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
        if (pressedbtn.classList.contains("legendbutton")) {
            pressedbtn.classList.remove("legendbutton");
        }
        pressedbtn.classList.add("legendbutton-pressed");
        var addClick = "that." + planName + "LegendBtnsClicked.push(pressedbtn)";
        eval(addClick);
        var flagName = "ITS" + planName + "flag";
        eval(flagName + " = true");
    }
    else {
        that.unhighlightCategory("ITS", planName);
        if (pressedbtn.classList.contains("legendbutton-pressed")) {
            pressedbtn.classList.remove("legendbutton-pressed");
        }
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
       break;
      case "CoopPlan1":
 var element = document.getElementById("CHEM103CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("CHEM103CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("CHEM103CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("CHEM103CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103CoopPlan1", categoryName);
 var element = document.getElementById("ENGG130CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENGG130CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENGG130CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENGG130CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130CoopPlan1", categoryName);
 var element = document.getElementById("PHYS130CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("PHYS130CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("PHYS130CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("PHYS130CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130CoopPlan1", categoryName);
 var element = document.getElementById("CHEM105CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("CHEM105CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("CHEM105CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("CHEM105CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105CoopPlan1", categoryName);
 var element = document.getElementById("ENCMP100CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENCMP100CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENCMP100CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENCMP100CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100CoopPlan1", categoryName);
 var element = document.getElementById("ENPH131CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENPH131CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENPH131CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENPH131CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131CoopPlan1", categoryName);
 var element = document.getElementById("EAS210CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("EAS210CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("EAS210CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("EAS210CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("EAS210CoopPlan1", categoryName);
       break;
      case "CoopPlan2":
 var element = document.getElementById("CHEM103CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("CHEM103CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("CHEM103CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("CHEM103CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103CoopPlan2", categoryName);
 var element = document.getElementById("ENGG130CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("ENGG130CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("ENGG130CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("ENGG130CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130CoopPlan2", categoryName);
 var element = document.getElementById("PHYS130CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("PHYS130CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("PHYS130CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("PHYS130CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130CoopPlan2", categoryName);
 var element = document.getElementById("CHEM105CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("CHEM105CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("CHEM105CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("CHEM105CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105CoopPlan2", categoryName);
 var element = document.getElementById("ENCMP100CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("ENCMP100CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("ENCMP100CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("ENCMP100CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100CoopPlan2", categoryName);
 var element = document.getElementById("ENPH131CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("ENPH131CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("ENPH131CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("ENPH131CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131CoopPlan2", categoryName);
 var element = document.getElementById("EAS210CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("EAS210CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("EAS210CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("EAS210CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("EAS210CoopPlan2", categoryName);
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
 var element = document.getElementById("MINE408TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE408TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE408TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE408TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE408TraditionalPlan", categoryName);
 var element = document.getElementById("ENGG400TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGG400TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400TraditionalPlan", categoryName);
 var element = document.getElementById("MINE422TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE422TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE422TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE422TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE422TraditionalPlan", categoryName);
       break;
      case "CoopPlan1":
 var element = document.getElementById("ENGG100CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENGG100CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENGG100CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENGG100CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100CoopPlan1", categoryName);
 var element = document.getElementById("ENGG299CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENGG299CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENGG299CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENGG299CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG299CoopPlan1", categoryName);
 var element = document.getElementById("WKEXP901CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("WKEXP901CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("WKEXP901CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("WKEXP901CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP901CoopPlan1", categoryName);
 var element = document.getElementById("WKEXP902CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("WKEXP902CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("WKEXP902CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("WKEXP902CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP902CoopPlan1", categoryName);
 var element = document.getElementById("ENGG404CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENGG404CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENGG404CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENGG404CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404CoopPlan1", categoryName);
 var element = document.getElementById("WKEXP903CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("WKEXP903CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("WKEXP903CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("WKEXP903CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP903CoopPlan1", categoryName);
 var element = document.getElementById("WKEXP904CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("WKEXP904CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("WKEXP904CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("WKEXP904CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP904CoopPlan1", categoryName);
 var element = document.getElementById("WKEXP905CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("WKEXP905CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("WKEXP905CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("WKEXP905CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP905CoopPlan1", categoryName);
 var element = document.getElementById("ENGG400CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENGG400CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENGG400CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENGG400CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400CoopPlan1", categoryName);
 var element = document.getElementById("MINE408CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE408CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE408CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE408CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE408CoopPlan1", categoryName);
 var element = document.getElementById("MINE422CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE422CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE422CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE422CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE422CoopPlan1", categoryName);
       break;
      case "CoopPlan2":
 var element = document.getElementById("ENGG100CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("ENGG100CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("ENGG100CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("ENGG100CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100CoopPlan2", categoryName);
 var element = document.getElementById("ENGG299CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("ENGG299CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("ENGG299CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("ENGG299CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG299CoopPlan2", categoryName);
 var element = document.getElementById("WKEXP901CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("WKEXP901CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("WKEXP901CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("WKEXP901CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP901CoopPlan2", categoryName);
 var element = document.getElementById("WKEXP902CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("WKEXP902CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("WKEXP902CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("WKEXP902CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP902CoopPlan2", categoryName);
 var element = document.getElementById("WKEXP903CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("WKEXP903CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("WKEXP903CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("WKEXP903CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP903CoopPlan2", categoryName);
 var element = document.getElementById("WKEXP904CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("WKEXP904CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("WKEXP904CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("WKEXP904CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP904CoopPlan2", categoryName);
 var element = document.getElementById("WKEXP905CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("WKEXP905CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("WKEXP905CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("WKEXP905CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP905CoopPlan2", categoryName);
 var element = document.getElementById("ENGG404CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("ENGG404CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("ENGG404CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("ENGG404CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404CoopPlan2", categoryName);
 var element = document.getElementById("ENGG400CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("ENGG400CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("ENGG400CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("ENGG400CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400CoopPlan2", categoryName);
 var element = document.getElementById("MINE408CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE408CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE408CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE408CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE408CoopPlan2", categoryName);
 var element = document.getElementById("MINE422CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE422CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE422CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE422CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE422CoopPlan2", categoryName);
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
      case "CoopPlan1":
 var element = document.getElementById("ENGL199CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENGL199CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENGL199CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENGL199CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199CoopPlan1", categoryName);
 var element = document.getElementById("ENGM310CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENGM310CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENGM310CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENGM310CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM310CoopPlan1", categoryName);
 var element = document.getElementById("ENGM401CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENGM401CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENGM401CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENGM401CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401CoopPlan1", categoryName);
       break;
      case "CoopPlan2":
 var element = document.getElementById("ENGL199CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("ENGL199CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("ENGL199CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("ENGL199CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199CoopPlan2", categoryName);
 var element = document.getElementById("ENGM310CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("ENGM310CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("ENGM310CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("ENGM310CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM310CoopPlan2", categoryName);
 var element = document.getElementById("ENGM401CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("ENGM401CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("ENGM401CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("ENGM401CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401CoopPlan2", categoryName);
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
       break;
      case "CoopPlan1":
 var element = document.getElementById("MATH100CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MATH100CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MATH100CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MATH100CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100CoopPlan1", categoryName);
 var element = document.getElementById("MATH101CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MATH101CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MATH101CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MATH101CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101CoopPlan1", categoryName);
 var element = document.getElementById("MATH102CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MATH102CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MATH102CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MATH102CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102CoopPlan1", categoryName);
 var element = document.getElementById("MATH209CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MATH209CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MATH209CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MATH209CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209CoopPlan1", categoryName);
 var element = document.getElementById("STAT235CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("STAT235CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("STAT235CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("STAT235CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("STAT235CoopPlan1", categoryName);
 var element = document.getElementById("MATH201CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MATH201CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MATH201CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MATH201CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201CoopPlan1", categoryName);
       break;
      case "CoopPlan2":
 var element = document.getElementById("MATH100CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MATH100CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MATH100CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MATH100CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100CoopPlan2", categoryName);
 var element = document.getElementById("MATH101CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MATH101CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MATH101CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MATH101CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101CoopPlan2", categoryName);
 var element = document.getElementById("MATH102CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MATH102CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MATH102CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MATH102CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102CoopPlan2", categoryName);
 var element = document.getElementById("MATH209CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MATH209CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MATH209CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MATH209CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209CoopPlan2", categoryName);
 var element = document.getElementById("STAT235CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("STAT235CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("STAT235CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("STAT235CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("STAT235CoopPlan2", categoryName);
 var element = document.getElementById("MATH201CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MATH201CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MATH201CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MATH201CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201CoopPlan2", categoryName);
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
 var element = document.getElementById("CIVE265TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE265TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE265TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE265TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE265TraditionalPlan", categoryName);
 var element = document.getElementById("MINE325TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE325TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE325TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE325TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE325TraditionalPlan", categoryName);
 var element = document.getElementById("MINE402TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE402TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE402TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE402TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE402TraditionalPlan", categoryName);
 var element = document.getElementById("MINE403TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE403TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE403TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE403TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE403TraditionalPlan", categoryName);
       break;
      case "CoopPlan1":
 var element = document.getElementById("ENGG160CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENGG160CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENGG160CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENGG160CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160CoopPlan1", categoryName);
 var element = document.getElementById("CIVE265CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("CIVE265CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("CIVE265CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("CIVE265CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE265CoopPlan1", categoryName);
 var element = document.getElementById("MINE325CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE325CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE325CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE325CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE325CoopPlan1", categoryName);
 var element = document.getElementById("MINE402CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE402CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE402CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE402CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE402CoopPlan1", categoryName);
 var element = document.getElementById("MINE403CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE403CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE403CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE403CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE403CoopPlan1", categoryName);
       break;
      case "CoopPlan2":
 var element = document.getElementById("ENGG160CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("ENGG160CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("ENGG160CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("ENGG160CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160CoopPlan2", categoryName);
 var element = document.getElementById("CIVE265CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("CIVE265CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("CIVE265CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("CIVE265CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE265CoopPlan2", categoryName);
 var element = document.getElementById("MINE325CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE325CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE325CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE325CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE325CoopPlan2", categoryName);
 var element = document.getElementById("MINE402CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE402CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE402CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE402CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE402CoopPlan2", categoryName);
 var element = document.getElementById("MINE403CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE403CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE403CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE403CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE403CoopPlan2", categoryName);
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("ECE209TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE209TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE209TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE209TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE209TraditionalPlan", categoryName);
 var element = document.getElementById("MINE295TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE295TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE295TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE295TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE295TraditionalPlan", categoryName);
 var element = document.getElementById("CHE243TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE250TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE250TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE250TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE250TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE250TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE270TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE251TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE251TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE251TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE251TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE251TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE330TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE330TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE330TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE330TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE330TraditionalPlan", categoryName);
 var element = document.getElementById("CHE312TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHE312TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHE312TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHE312TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE312TraditionalPlan", categoryName);
 var element = document.getElementById("MINE310TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE310TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE310TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE310TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE310TraditionalPlan", categoryName);
 var element = document.getElementById("MINE323TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE323TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE323TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE323TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE323TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE381TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE381TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE381TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE381TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE381TraditionalPlan", categoryName);
 var element = document.getElementById("CME421TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CME421TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CME421TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CME421TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CME421TraditionalPlan", categoryName);
 var element = document.getElementById("MINE324TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE324TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE324TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE324TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE324TraditionalPlan", categoryName);
 var element = document.getElementById("MINE330TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE330TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE330TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE330TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE330TraditionalPlan", categoryName);
 var element = document.getElementById("MINE413TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE413TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE413TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE413TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE413TraditionalPlan", categoryName);
 var element = document.getElementById("MINE414TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE414TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE414TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE414TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE414TraditionalPlan", categoryName);
 var element = document.getElementById("MINE407TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE407TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE407TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE407TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE407TraditionalPlan", categoryName);
 var element = document.getElementById("MINE420TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MINE420TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MINE420TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MINE420TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE420TraditionalPlan", categoryName);
       break;
      case "CoopPlan1":
 var element = document.getElementById("ECE209CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE209CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE209CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE209CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE209CoopPlan1", categoryName);
 var element = document.getElementById("MINE295CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE295CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE295CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE295CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE295CoopPlan1", categoryName);
 var element = document.getElementById("CHE243CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("CHE243CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("CHE243CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("CHE243CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243CoopPlan1", categoryName);
 var element = document.getElementById("CIVE250CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("CIVE250CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("CIVE250CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("CIVE250CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE250CoopPlan1", categoryName);
 var element = document.getElementById("CIVE251CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("CIVE251CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("CIVE251CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("CIVE251CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE251CoopPlan1", categoryName);
 var element = document.getElementById("CIVE270CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("CIVE270CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("CIVE270CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("CIVE270CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270CoopPlan1", categoryName);
 var element = document.getElementById("CIVE381CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("CIVE381CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("CIVE381CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("CIVE381CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE381CoopPlan1", categoryName);
 var element = document.getElementById("MINE324CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE324CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE324CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE324CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE324CoopPlan1", categoryName);
 var element = document.getElementById("MINE330CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE330CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE330CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE330CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE330CoopPlan1", categoryName);
 var element = document.getElementById("CIVE330CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("CIVE330CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("CIVE330CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("CIVE330CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE330CoopPlan1", categoryName);
 var element = document.getElementById("CHE312CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("CHE312CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("CHE312CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("CHE312CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE312CoopPlan1", categoryName);
 var element = document.getElementById("MINE310CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE310CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE310CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE310CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE310CoopPlan1", categoryName);
 var element = document.getElementById("MINE323CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE323CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE323CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE323CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE323CoopPlan1", categoryName);
 var element = document.getElementById("CME421CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("CME421CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("CME421CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("CME421CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CME421CoopPlan1", categoryName);
 var element = document.getElementById("MINE413CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE413CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE413CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE413CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE413CoopPlan1", categoryName);
 var element = document.getElementById("MINE414CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE414CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE414CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE414CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE414CoopPlan1", categoryName);
 var element = document.getElementById("MINE407CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE407CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE407CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE407CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE407CoopPlan1", categoryName);
 var element = document.getElementById("MINE420CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MINE420CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MINE420CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MINE420CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE420CoopPlan1", categoryName);
       break;
      case "CoopPlan2":
 var element = document.getElementById("ECE209CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("ECE209CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("ECE209CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("ECE209CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE209CoopPlan2", categoryName);
 var element = document.getElementById("MINE295CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE295CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE295CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE295CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE295CoopPlan2", categoryName);
 var element = document.getElementById("CHE243CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("CHE243CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("CHE243CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("CHE243CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243CoopPlan2", categoryName);
 var element = document.getElementById("CIVE250CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("CIVE250CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("CIVE250CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("CIVE250CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE250CoopPlan2", categoryName);
 var element = document.getElementById("CIVE251CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("CIVE251CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("CIVE251CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("CIVE251CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE251CoopPlan2", categoryName);
 var element = document.getElementById("CIVE270CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("CIVE270CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("CIVE270CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("CIVE270CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270CoopPlan2", categoryName);
 var element = document.getElementById("CIVE330CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("CIVE330CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("CIVE330CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("CIVE330CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE330CoopPlan2", categoryName);
 var element = document.getElementById("CHE312CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("CHE312CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("CHE312CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("CHE312CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE312CoopPlan2", categoryName);
 var element = document.getElementById("MINE324CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE324CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE324CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE324CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE324CoopPlan2", categoryName);
 var element = document.getElementById("MINE330CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE330CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE330CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE330CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE330CoopPlan2", categoryName);
 var element = document.getElementById("CIVE381CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("CIVE381CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("CIVE381CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("CIVE381CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE381CoopPlan2", categoryName);
 var element = document.getElementById("CME421CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("CME421CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("CME421CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("CME421CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CME421CoopPlan2", categoryName);
 var element = document.getElementById("MINE310CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE310CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE310CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE310CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE310CoopPlan2", categoryName);
 var element = document.getElementById("MINE323CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE323CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE323CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE323CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE323CoopPlan2", categoryName);
 var element = document.getElementById("MINE413CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE413CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE413CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE413CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE413CoopPlan2", categoryName);
 var element = document.getElementById("MINE414CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE414CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE414CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE414CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE414CoopPlan2", categoryName);
 var element = document.getElementById("MINE407CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE407CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE407CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE407CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE407CoopPlan2", categoryName);
 var element = document.getElementById("MINE420CoopPlan2");
                            if (this.CoopPlan2ClickedMap.get("MINE420CoopPlan2").length > 0) {
                                var mapLen = this.CoopPlan2ClickedMap.get("MINE420CoopPlan2").length - 1
                                var prevCate = this.CoopPlan2ClickedMap.get("MINE420CoopPlan2")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MINE420CoopPlan2", categoryName);
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
      case "CoopPlan1":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan1" + i).length > 0) {
                var mapLen = this.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan1" + i).length - 1
                var prevCate = this.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan1" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveCoopPlan1" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan1" + i).length > 0) {
                var mapLen = this.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan1" + i).length - 1
                var prevCate = this.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan1" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveCoopPlan1" + i, categoryName);
          i = i + 1;
        }
       break;
      case "CoopPlan2":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.CoopPlan2ClickedMap.get("ProgramTechnicalElectiveCoopPlan2" + i).length > 0) {
                var mapLen = this.CoopPlan2ClickedMap.get("ProgramTechnicalElectiveCoopPlan2" + i).length - 1
                var prevCate = this.CoopPlan2ClickedMap.get("ProgramTechnicalElectiveCoopPlan2" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveCoopPlan2" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.CoopPlan2ClickedMap.get("ProgramTechnicalElectiveCoopPlan2" + i).length > 0) {
                var mapLen = this.CoopPlan2ClickedMap.get("ProgramTechnicalElectiveCoopPlan2" + i).length - 1
                var prevCate = this.CoopPlan2ClickedMap.get("ProgramTechnicalElectiveCoopPlan2" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveCoopPlan2" + i, categoryName);
          i = i + 1;
        }
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
       break;
      case "CoopPlan1":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlan1ClickedMap.get("ComplementaryElectiveCoopPlan1" + i).length > 0) {
                var mapLen = this.CoopPlan1ClickedMap.get("ComplementaryElectiveCoopPlan1" + i).length - 1
                var prevCate = this.CoopPlan1ClickedMap.get("ComplementaryElectiveCoopPlan1" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlan1" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlan1ClickedMap.get("ComplementaryElectiveCoopPlan1" + i).length > 0) {
                var mapLen = this.CoopPlan1ClickedMap.get("ComplementaryElectiveCoopPlan1" + i).length - 1
                var prevCate = this.CoopPlan1ClickedMap.get("ComplementaryElectiveCoopPlan1" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlan1" + i, categoryName);
          i = i + 1;
        }
       break;
      case "CoopPlan2":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlan2ClickedMap.get("ComplementaryElectiveCoopPlan2" + i).length > 0) {
                var mapLen = this.CoopPlan2ClickedMap.get("ComplementaryElectiveCoopPlan2" + i).length - 1
                var prevCate = this.CoopPlan2ClickedMap.get("ComplementaryElectiveCoopPlan2" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlan2" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopPlan2ClickedMap.get("ComplementaryElectiveCoopPlan2" + i).length > 0) {
                var mapLen = this.CoopPlan2ClickedMap.get("ComplementaryElectiveCoopPlan2" + i).length - 1
                var prevCate = this.CoopPlan2ClickedMap.get("ComplementaryElectiveCoopPlan2" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopPlan2" + i, categoryName);
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
      case "CoopPlan1":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.CoopPlan1ClickedMap.get("ITSElectiveCoopPlan1" + i).length > 0) {
                var mapLen = this.CoopPlan1ClickedMap.get("ITSElectiveCoopPlan1" + i).length - 1
                var prevCate = this.CoopPlan1ClickedMap.get("ITSElectiveCoopPlan1" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveCoopPlan1" + i, categoryName);
          i = i + 1;
        }
       break;
      case "CoopPlan2":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.CoopPlan2ClickedMap.get("ITSElectiveCoopPlan2" + i).length > 0) {
                var mapLen = this.CoopPlan2ClickedMap.get("ITSElectiveCoopPlan2" + i).length - 1
                var prevCate = this.CoopPlan2ClickedMap.get("ITSElectiveCoopPlan2" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveCoopPlan2" + i, categoryName);
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
       break;
      case "CoopPlan1":
     var element = document.getElementById("CHEM103CoopPlan1");
                            var prevCate = this.removeFromClicked("CHEM103CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130CoopPlan1");
                            var prevCate = this.removeFromClicked("ENGG130CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130CoopPlan1");
                            var prevCate = this.removeFromClicked("PHYS130CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105CoopPlan1");
                            var prevCate = this.removeFromClicked("CHEM105CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100CoopPlan1");
                            var prevCate = this.removeFromClicked("ENCMP100CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131CoopPlan1");
                            var prevCate = this.removeFromClicked("ENPH131CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("EAS210CoopPlan1");
                            var prevCate = this.removeFromClicked("EAS210CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan2":
     var element = document.getElementById("CHEM103CoopPlan2");
                            var prevCate = this.removeFromClicked("CHEM103CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130CoopPlan2");
                            var prevCate = this.removeFromClicked("ENGG130CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130CoopPlan2");
                            var prevCate = this.removeFromClicked("PHYS130CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105CoopPlan2");
                            var prevCate = this.removeFromClicked("CHEM105CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100CoopPlan2");
                            var prevCate = this.removeFromClicked("ENCMP100CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131CoopPlan2");
                            var prevCate = this.removeFromClicked("ENPH131CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("EAS210CoopPlan2");
                            var prevCate = this.removeFromClicked("EAS210CoopPlan2", categoryName);
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
     var element = document.getElementById("MINE408TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE408TraditionalPlan", categoryName);
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
     var element = document.getElementById("MINE422TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE422TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan1":
     var element = document.getElementById("ENGG100CoopPlan1");
                            var prevCate = this.removeFromClicked("ENGG100CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG299CoopPlan1");
                            var prevCate = this.removeFromClicked("ENGG299CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP901CoopPlan1");
                            var prevCate = this.removeFromClicked("WKEXP901CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP902CoopPlan1");
                            var prevCate = this.removeFromClicked("WKEXP902CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404CoopPlan1");
                            var prevCate = this.removeFromClicked("ENGG404CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP903CoopPlan1");
                            var prevCate = this.removeFromClicked("WKEXP903CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP904CoopPlan1");
                            var prevCate = this.removeFromClicked("WKEXP904CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP905CoopPlan1");
                            var prevCate = this.removeFromClicked("WKEXP905CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400CoopPlan1");
                            var prevCate = this.removeFromClicked("ENGG400CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE408CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE408CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE422CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE422CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan2":
     var element = document.getElementById("ENGG100CoopPlan2");
                            var prevCate = this.removeFromClicked("ENGG100CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG299CoopPlan2");
                            var prevCate = this.removeFromClicked("ENGG299CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP901CoopPlan2");
                            var prevCate = this.removeFromClicked("WKEXP901CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP902CoopPlan2");
                            var prevCate = this.removeFromClicked("WKEXP902CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP903CoopPlan2");
                            var prevCate = this.removeFromClicked("WKEXP903CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP904CoopPlan2");
                            var prevCate = this.removeFromClicked("WKEXP904CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP905CoopPlan2");
                            var prevCate = this.removeFromClicked("WKEXP905CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404CoopPlan2");
                            var prevCate = this.removeFromClicked("ENGG404CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400CoopPlan2");
                            var prevCate = this.removeFromClicked("ENGG400CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE408CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE408CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE422CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE422CoopPlan2", categoryName);
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
      case "CoopPlan1":
     var element = document.getElementById("ENGL199CoopPlan1");
                            var prevCate = this.removeFromClicked("ENGL199CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM310CoopPlan1");
                            var prevCate = this.removeFromClicked("ENGM310CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401CoopPlan1");
                            var prevCate = this.removeFromClicked("ENGM401CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan2":
     var element = document.getElementById("ENGL199CoopPlan2");
                            var prevCate = this.removeFromClicked("ENGL199CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM310CoopPlan2");
                            var prevCate = this.removeFromClicked("ENGM310CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401CoopPlan2");
                            var prevCate = this.removeFromClicked("ENGM401CoopPlan2", categoryName);
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
       break;
      case "CoopPlan1":
     var element = document.getElementById("MATH100CoopPlan1");
                            var prevCate = this.removeFromClicked("MATH100CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101CoopPlan1");
                            var prevCate = this.removeFromClicked("MATH101CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102CoopPlan1");
                            var prevCate = this.removeFromClicked("MATH102CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209CoopPlan1");
                            var prevCate = this.removeFromClicked("MATH209CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("STAT235CoopPlan1");
                            var prevCate = this.removeFromClicked("STAT235CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201CoopPlan1");
                            var prevCate = this.removeFromClicked("MATH201CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan2":
     var element = document.getElementById("MATH100CoopPlan2");
                            var prevCate = this.removeFromClicked("MATH100CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101CoopPlan2");
                            var prevCate = this.removeFromClicked("MATH101CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102CoopPlan2");
                            var prevCate = this.removeFromClicked("MATH102CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209CoopPlan2");
                            var prevCate = this.removeFromClicked("MATH209CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("STAT235CoopPlan2");
                            var prevCate = this.removeFromClicked("STAT235CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201CoopPlan2");
                            var prevCate = this.removeFromClicked("MATH201CoopPlan2", categoryName);
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
     var element = document.getElementById("CIVE265TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE265TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE325TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE325TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE402TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE402TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE403TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE403TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan1":
     var element = document.getElementById("ENGG160CoopPlan1");
                            var prevCate = this.removeFromClicked("ENGG160CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE265CoopPlan1");
                            var prevCate = this.removeFromClicked("CIVE265CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE325CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE325CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE402CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE402CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE403CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE403CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan2":
     var element = document.getElementById("ENGG160CoopPlan2");
                            var prevCate = this.removeFromClicked("ENGG160CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE265CoopPlan2");
                            var prevCate = this.removeFromClicked("CIVE265CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE325CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE325CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE402CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE402CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE403CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE403CoopPlan2", categoryName);
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
     var element = document.getElementById("ECE209TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE209TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE295TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE295TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE243TraditionalPlan");
                            var prevCate = this.removeFromClicked("CHE243TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE250TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE250TraditionalPlan", categoryName);
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
     var element = document.getElementById("CIVE251TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE251TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE330TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE330TraditionalPlan", categoryName);
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
     var element = document.getElementById("MINE310TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE310TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE323TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE323TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE381TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE381TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CME421TraditionalPlan");
                            var prevCate = this.removeFromClicked("CME421TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE324TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE324TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE330TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE330TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE413TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE413TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE414TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE414TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE407TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE407TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE420TraditionalPlan");
                            var prevCate = this.removeFromClicked("MINE420TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan1":
     var element = document.getElementById("ECE209CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE209CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE295CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE295CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE243CoopPlan1");
                            var prevCate = this.removeFromClicked("CHE243CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE250CoopPlan1");
                            var prevCate = this.removeFromClicked("CIVE250CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE251CoopPlan1");
                            var prevCate = this.removeFromClicked("CIVE251CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE270CoopPlan1");
                            var prevCate = this.removeFromClicked("CIVE270CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE381CoopPlan1");
                            var prevCate = this.removeFromClicked("CIVE381CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE324CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE324CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE330CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE330CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE330CoopPlan1");
                            var prevCate = this.removeFromClicked("CIVE330CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE312CoopPlan1");
                            var prevCate = this.removeFromClicked("CHE312CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE310CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE310CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE323CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE323CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CME421CoopPlan1");
                            var prevCate = this.removeFromClicked("CME421CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE413CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE413CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE414CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE414CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE407CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE407CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE420CoopPlan1");
                            var prevCate = this.removeFromClicked("MINE420CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan2":
     var element = document.getElementById("ECE209CoopPlan2");
                            var prevCate = this.removeFromClicked("ECE209CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE295CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE295CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE243CoopPlan2");
                            var prevCate = this.removeFromClicked("CHE243CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE250CoopPlan2");
                            var prevCate = this.removeFromClicked("CIVE250CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE251CoopPlan2");
                            var prevCate = this.removeFromClicked("CIVE251CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE270CoopPlan2");
                            var prevCate = this.removeFromClicked("CIVE270CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE330CoopPlan2");
                            var prevCate = this.removeFromClicked("CIVE330CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE312CoopPlan2");
                            var prevCate = this.removeFromClicked("CHE312CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE324CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE324CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE330CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE330CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE381CoopPlan2");
                            var prevCate = this.removeFromClicked("CIVE381CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CME421CoopPlan2");
                            var prevCate = this.removeFromClicked("CME421CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE310CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE310CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE323CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE323CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE413CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE413CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE414CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE414CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE407CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE407CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MINE420CoopPlan2");
                            var prevCate = this.removeFromClicked("MINE420CoopPlan2", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
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
      case "CoopPlan1":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveCoopPlan1" + i, "PROG");
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
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveCoopPlan1" + i, "PROG");
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
      case "CoopPlan2":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveCoopPlan2" + i, "PROG");
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
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveCoopPlan2" + i, "PROG");
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
       break;
      case "CoopPlan1":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlan1" + i, "COMP");
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
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlan1" + i, "COMP");
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
      case "CoopPlan2":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlan2" + i, "COMP");
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
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopPlan2" + i, "COMP");
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
      case "CoopPlan1":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveCoopPlan1" + i, "ITS");
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
      case "CoopPlan2":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveCoopPlan2" + i, "ITS");
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
  var CIVE265TraditionalPlanflag = false;
  var CIVE265TraditionalPlanrflag = false;
 var CIVE265TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE265TraditionalPlan", []);
  var EAS210TraditionalPlanflag = false;
  var EAS210TraditionalPlanrflag = false;
 var EAS210TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("EAS210TraditionalPlan", []);
  var ECE209TraditionalPlanflag = false;
  var ECE209TraditionalPlanrflag = false;
 var ECE209TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE209TraditionalPlan", []);
  var MATH209TraditionalPlanflag = false;
  var MATH209TraditionalPlanrflag = false;
 var MATH209TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH209TraditionalPlan", []);
  var MINE295TraditionalPlanflag = false;
  var MINE295TraditionalPlanrflag = false;
 var MINE295TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE295TraditionalPlan", []);
  var CHE243TraditionalPlanflag = false;
  var CHE243TraditionalPlanrflag = false;
 var CHE243TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHE243TraditionalPlan", []);
  var CIVE250TraditionalPlanflag = false;
  var CIVE250TraditionalPlanrflag = false;
 var CIVE250TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE250TraditionalPlan", []);
  var CIVE270TraditionalPlanflag = false;
  var CIVE270TraditionalPlanrflag = false;
 var CIVE270TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE270TraditionalPlan", []);
  var MATH201TraditionalPlanflag = false;
  var MATH201TraditionalPlanrflag = false;
 var MATH201TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH201TraditionalPlan", []);
  var MINE325TraditionalPlanflag = false;
  var MINE325TraditionalPlanrflag = false;
 var MINE325TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE325TraditionalPlan", []);
  var CIVE251TraditionalPlanflag = false;
  var CIVE251TraditionalPlanrflag = false;
 var CIVE251TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE251TraditionalPlan", []);
  var CIVE330TraditionalPlanflag = false;
  var CIVE330TraditionalPlanrflag = false;
 var CIVE330TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE330TraditionalPlan", []);
  var CHE312TraditionalPlanflag = false;
  var CHE312TraditionalPlanrflag = false;
 var CHE312TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHE312TraditionalPlan", []);
  var ENGM310TraditionalPlanflag = false;
  var ENGM310TraditionalPlanrflag = false;
 var ENGM310TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGM310TraditionalPlan", []);
  var ENGM401TraditionalPlanflag = false;
  var ENGM401TraditionalPlanrflag = false;
 var ENGM401TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGM401TraditionalPlan", []);
  var MINE310TraditionalPlanflag = false;
  var MINE310TraditionalPlanrflag = false;
 var MINE310TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE310TraditionalPlan", []);
  var MINE323TraditionalPlanflag = false;
  var MINE323TraditionalPlanrflag = false;
 var MINE323TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE323TraditionalPlan", []);
  var CIVE381TraditionalPlanflag = false;
  var CIVE381TraditionalPlanrflag = false;
 var CIVE381TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE381TraditionalPlan", []);
  var CME421TraditionalPlanflag = false;
  var CME421TraditionalPlanrflag = false;
 var CME421TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CME421TraditionalPlan", []);
  var ENGG404TraditionalPlanflag = false;
  var ENGG404TraditionalPlanrflag = false;
 var ENGG404TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG404TraditionalPlan", []);
  var ProgramTechnicalElectiveTraditionalPlan0flag = false;
  var ProgramTechnicalElectiveTraditionalPlan0rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan0", []);
  var STAT235TraditionalPlanflag = false;
  var STAT235TraditionalPlanrflag = false;
 var STAT235TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("STAT235TraditionalPlan", []);
  var MINE324TraditionalPlanflag = false;
  var MINE324TraditionalPlanrflag = false;
 var MINE324TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE324TraditionalPlan", []);
  var MINE330TraditionalPlanflag = false;
  var MINE330TraditionalPlanrflag = false;
 var MINE330TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE330TraditionalPlan", []);
  var MINE408TraditionalPlanflag = false;
  var MINE408TraditionalPlanrflag = false;
 var MINE408TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE408TraditionalPlan", []);
  var ComplementaryElectiveTraditionalPlan0flag = false;
  var ComplementaryElectiveTraditionalPlan0rflag = false;
 var ComplementaryElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan0", []);
  var ComplementaryElectiveTraditionalPlan1flag = false;
  var ComplementaryElectiveTraditionalPlan1rflag = false;
 var ComplementaryElectiveTraditionalPlan1Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan1", []);
  var MINE402TraditionalPlanflag = false;
  var MINE402TraditionalPlanrflag = false;
 var MINE402TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE402TraditionalPlan", []);
  var MINE413TraditionalPlanflag = false;
  var MINE413TraditionalPlanrflag = false;
 var MINE413TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE413TraditionalPlan", []);
  var MINE414TraditionalPlanflag = false;
  var MINE414TraditionalPlanrflag = false;
 var MINE414TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE414TraditionalPlan", []);
  var ProgramTechnicalElectiveTraditionalPlan1flag = false;
  var ProgramTechnicalElectiveTraditionalPlan1rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan1Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan1", []);
  var ITSElectiveTraditionalPlan0flag = false;
  var ITSElectiveTraditionalPlan0rflag = false;
 var ITSElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ITSElectiveTraditionalPlan0", []);
  var ENGG400TraditionalPlanflag = false;
  var ENGG400TraditionalPlanrflag = false;
 var ENGG400TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG400TraditionalPlan", []);
  var MINE403TraditionalPlanflag = false;
  var MINE403TraditionalPlanrflag = false;
 var MINE403TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE403TraditionalPlan", []);
  var MINE407TraditionalPlanflag = false;
  var MINE407TraditionalPlanrflag = false;
 var MINE407TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE407TraditionalPlan", []);
  var MINE420TraditionalPlanflag = false;
  var MINE420TraditionalPlanrflag = false;
 var MINE420TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE420TraditionalPlan", []);
  var MINE422TraditionalPlanflag = false;
  var MINE422TraditionalPlanrflag = false;
 var MINE422TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MINE422TraditionalPlan", []);
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
      that.addLine(getLine14());
     that.highlightElement(ENGG130TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130TraditionalPlan", "NaturalSciences");
      ENGG130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine5());
      that.removeLine(getLine14());
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
      that.addLine(getLine29());
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
      that.removeLine(getLine29());
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
     that.highlightElement(CHEM105TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105TraditionalPlan", "NaturalSciences");
      CHEM105TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
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
     that.highlightElement(ENCMP100TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100TraditionalPlan", "NaturalSciences");
      ENCMP100TraditionalPlanflag=true
  }
 else {
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
      that.addLine(getLine23());
     that.highlightElement(ENPH131TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131TraditionalPlan", "NaturalSciences");
      ENPH131TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine23());
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
      that.addLine(getLine12());
      that.addLine(getLine15());
      that.addLine(getLine30());
     that.highlightElement(MATH101TraditionalPlanelement, "Math");
     that.addToClicked("MATH101TraditionalPlan", "Math");
      MATH101TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine6());
      that.removeLine(getLine7());
      that.removeLine(getLine9());
      that.removeLine(getLine11());
      that.removeLine(getLine12());
      that.removeLine(getLine15());
      that.removeLine(getLine30());
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
      that.addLine(getLine10());
      that.addLine(getLine13());
     that.highlightElement(MATH102TraditionalPlanelement, "Math");
     that.addToClicked("MATH102TraditionalPlan", "Math");
      MATH102TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine10());
      that.removeLine(getLine13());
     that.unHighlightElement(MATH102TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH102TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH102TraditionalPlanelement, category);
}
      MATH102TraditionalPlanflag=false
  }
};
$scope.CIVE265TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE265TraditionalPlanTime <= 200) { 
        CIVE265TraditionalPlanTime = currentTime;
        return;
    }
CIVE265TraditionalPlanTime = currentTime;
  var CIVE265TraditionalPlanelement = document.getElementById("CIVE265TraditionalPlan");
 if (!CIVE265TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE265TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE265TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE265TraditionalPlan")[i];
        if (CIVE265TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE265TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine18());
     that.highlightElement(CIVE265TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("CIVE265TraditionalPlan", "EngineeringDesign");
      CIVE265TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine18());
     that.unHighlightElement(CIVE265TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("CIVE265TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(CIVE265TraditionalPlanelement, category);
}
      CIVE265TraditionalPlanflag=false
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
      that.addLine(getLine27());
     that.highlightElement(EAS210TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("EAS210TraditionalPlan", "NaturalSciences");
      EAS210TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine27());
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
      that.addLine(getLine33());
     that.highlightElement(ECE209TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE209TraditionalPlan", "EngineeringSciences");
      ECE209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine33());
     that.unHighlightElement(ECE209TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE209TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE209TraditionalPlanelement, category);
}
      ECE209TraditionalPlanflag=false
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
      that.addLine(getLine9());
      that.addLine(getLine10());
      that.addLine(getLine16());
      that.addLine(getLine20());
      that.addLine(getLine24());
     that.highlightElement(MATH209TraditionalPlanelement, "Math");
     that.addToClicked("MATH209TraditionalPlan", "Math");
      MATH209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine9());
      that.removeLine(getLine10());
      that.removeLine(getLine16());
      that.removeLine(getLine20());
      that.removeLine(getLine24());
     that.unHighlightElement(MATH209TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH209TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209TraditionalPlanelement, category);
}
      MATH209TraditionalPlanflag=false
  }
};
$scope.MINE295TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE295TraditionalPlanTime <= 200) { 
        MINE295TraditionalPlanTime = currentTime;
        return;
    }
MINE295TraditionalPlanTime = currentTime;
  var MINE295TraditionalPlanelement = document.getElementById("MINE295TraditionalPlan");
 if (!MINE295TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE295TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE295TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE295TraditionalPlan")[i];
        if (MINE295TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE295TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine17());
      that.addLine(getLine31());
      that.addLine(getLine32());
     that.highlightElement(MINE295TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MINE295TraditionalPlan", "EngineeringSciences");
      MINE295TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine17());
      that.removeLine(getLine31());
      that.removeLine(getLine32());
     that.unHighlightElement(MINE295TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MINE295TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE295TraditionalPlanelement, category);
}
      MINE295TraditionalPlanflag=false
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
      that.addLine(getLine11());
      that.addLine(getLine22());
     that.highlightElement(CHE243TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CHE243TraditionalPlan", "EngineeringSciences");
      CHE243TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine22());
     that.unHighlightElement(CHE243TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243TraditionalPlanelement, category);
}
      CHE243TraditionalPlanflag=false
  }
};
$scope.CIVE250TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE250TraditionalPlanTime <= 200) { 
        CIVE250TraditionalPlanTime = currentTime;
        return;
    }
CIVE250TraditionalPlanTime = currentTime;
  var CIVE250TraditionalPlanelement = document.getElementById("CIVE250TraditionalPlan");
 if (!CIVE250TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE250TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE250TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE250TraditionalPlan")[i];
        if (CIVE250TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE250TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine12());
      that.addLine(getLine13());
      that.addLine(getLine19());
     that.highlightElement(CIVE250TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE250TraditionalPlan", "EngineeringSciences");
      CIVE250TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine12());
      that.removeLine(getLine13());
      that.removeLine(getLine19());
     that.unHighlightElement(CIVE250TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE250TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE250TraditionalPlanelement, category);
}
      CIVE250TraditionalPlanflag=false
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
      that.addLine(getLine14());
      that.addLine(getLine15());
      that.addLine(getLine26());
      that.addLine(getLine51());
     that.highlightElement(CIVE270TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE270TraditionalPlan", "EngineeringSciences");
      CIVE270TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine14());
      that.removeLine(getLine15());
      that.removeLine(getLine26());
      that.removeLine(getLine51());
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
      that.addLine(getLine21());
      that.addLine(getLine25());
     that.highlightElement(MATH201TraditionalPlanelement, "Math");
     that.addToClicked("MATH201TraditionalPlan", "Math");
      MATH201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine16());
      that.removeLine(getLine21());
      that.removeLine(getLine25());
     that.unHighlightElement(MATH201TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH201TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH201TraditionalPlanelement, category);
}
      MATH201TraditionalPlanflag=false
  }
};
$scope.MINE325TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE325TraditionalPlanTime <= 200) { 
        MINE325TraditionalPlanTime = currentTime;
        return;
    }
MINE325TraditionalPlanTime = currentTime;
  var MINE325TraditionalPlanelement = document.getElementById("MINE325TraditionalPlan");
 if (!MINE325TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE325TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE325TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE325TraditionalPlan")[i];
        if (MINE325TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE325TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine17());
      that.addLine(getLine18());
      that.addLine(getLine42());
      that.addLine(getLine45());
     that.highlightElement(MINE325TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("MINE325TraditionalPlan", "EngineeringDesign");
      MINE325TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine17());
      that.removeLine(getLine18());
      that.removeLine(getLine42());
      that.removeLine(getLine45());
     that.unHighlightElement(MINE325TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("MINE325TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MINE325TraditionalPlanelement, category);
}
      MINE325TraditionalPlanflag=false
  }
};
$scope.CIVE251TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE251TraditionalPlanTime <= 200) { 
        CIVE251TraditionalPlanTime = currentTime;
        return;
    }
CIVE251TraditionalPlanTime = currentTime;
  var CIVE251TraditionalPlanelement = document.getElementById("CIVE251TraditionalPlan");
 if (!CIVE251TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE251TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE251TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE251TraditionalPlan")[i];
        if (CIVE251TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE251TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine19());
     that.highlightElement(CIVE251TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE251TraditionalPlan", "EngineeringSciences");
      CIVE251TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine19());
     that.unHighlightElement(CIVE251TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE251TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE251TraditionalPlanelement, category);
}
      CIVE251TraditionalPlanflag=false
  }
};
$scope.CIVE330TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE330TraditionalPlanTime <= 200) { 
        CIVE330TraditionalPlanTime = currentTime;
        return;
    }
CIVE330TraditionalPlanTime = currentTime;
  var CIVE330TraditionalPlanelement = document.getElementById("CIVE330TraditionalPlan");
 if (!CIVE330TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE330TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE330TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE330TraditionalPlan")[i];
        if (CIVE330TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE330TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine20());
      that.addLine(getLine21());
      that.addLine(getLine48());
     that.highlightElement(CIVE330TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE330TraditionalPlan", "EngineeringSciences");
      CIVE330TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine20());
      that.removeLine(getLine21());
      that.removeLine(getLine48());
     that.unHighlightElement(CIVE330TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE330TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE330TraditionalPlanelement, category);
}
      CIVE330TraditionalPlanflag=false
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
      that.addLine(getLine22());
      that.addLine(getLine23());
      that.addLine(getLine24());
      that.addLine(getLine25());
      that.addLine(getLine49());
     that.highlightElement(CHE312TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CHE312TraditionalPlan", "EngineeringSciences");
      CHE312TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine22());
      that.removeLine(getLine23());
      that.removeLine(getLine24());
      that.removeLine(getLine25());
      that.removeLine(getLine49());
     that.unHighlightElement(CHE312TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE312TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE312TraditionalPlanelement, category);
}
      CHE312TraditionalPlanflag=false
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
      that.addLine(getLine34());
     that.highlightElement(ENGM310TraditionalPlanelement, "Other");
     that.addToClicked("ENGM310TraditionalPlan", "Other");
      ENGM310TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine34());
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
      that.addLine(getLine35());
     that.highlightElement(ENGM401TraditionalPlanelement, "Other");
     that.addToClicked("ENGM401TraditionalPlan", "Other");
      ENGM401TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine35());
     that.unHighlightElement(ENGM401TraditionalPlanelement, "Other");
     var category = that.removeFromClicked("ENGM401TraditionalPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401TraditionalPlanelement, category);
}
      ENGM401TraditionalPlanflag=false
  }
};
$scope.MINE310TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE310TraditionalPlanTime <= 200) { 
        MINE310TraditionalPlanTime = currentTime;
        return;
    }
MINE310TraditionalPlanTime = currentTime;
  var MINE310TraditionalPlanelement = document.getElementById("MINE310TraditionalPlan");
 if (!MINE310TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE310TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE310TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE310TraditionalPlan")[i];
        if (MINE310TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE310TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine39());
     that.highlightElement(MINE310TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MINE310TraditionalPlan", "EngineeringSciences");
      MINE310TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine39());
     that.unHighlightElement(MINE310TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MINE310TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE310TraditionalPlanelement, category);
}
      MINE310TraditionalPlanflag=false
  }
};
$scope.MINE323TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE323TraditionalPlanTime <= 200) { 
        MINE323TraditionalPlanTime = currentTime;
        return;
    }
MINE323TraditionalPlanTime = currentTime;
  var MINE323TraditionalPlanelement = document.getElementById("MINE323TraditionalPlan");
 if (!MINE323TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE323TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE323TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE323TraditionalPlan")[i];
        if (MINE323TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE323TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine26());
      that.addLine(getLine41());
      that.addLine(getLine43());
     that.highlightElement(MINE323TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MINE323TraditionalPlan", "EngineeringSciences");
      MINE323TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine26());
      that.removeLine(getLine41());
      that.removeLine(getLine43());
     that.unHighlightElement(MINE323TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MINE323TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE323TraditionalPlanelement, category);
}
      MINE323TraditionalPlanflag=false
  }
};
$scope.CIVE381TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE381TraditionalPlanTime <= 200) { 
        CIVE381TraditionalPlanTime = currentTime;
        return;
    }
CIVE381TraditionalPlanTime = currentTime;
  var CIVE381TraditionalPlanelement = document.getElementById("CIVE381TraditionalPlan");
 if (!CIVE381TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE381TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE381TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE381TraditionalPlan")[i];
        if (CIVE381TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE381TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine27());
     that.highlightElement(CIVE381TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE381TraditionalPlan", "EngineeringSciences");
      CIVE381TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine27());
     that.unHighlightElement(CIVE381TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE381TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE381TraditionalPlanelement, category);
}
      CIVE381TraditionalPlanflag=false
  }
};
$scope.CME421TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CME421TraditionalPlanTime <= 200) { 
        CME421TraditionalPlanTime = currentTime;
        return;
    }
CME421TraditionalPlanTime = currentTime;
  var CME421TraditionalPlanelement = document.getElementById("CME421TraditionalPlan");
 if (!CME421TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CME421TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CME421TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CME421TraditionalPlan")[i];
        if (CME421TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CME421TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine28());
     that.highlightElement(CME421TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CME421TraditionalPlan", "EngineeringSciences");
      CME421TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine28());
     that.unHighlightElement(CME421TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CME421TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CME421TraditionalPlanelement, category);
}
      CME421TraditionalPlanflag=false
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
      that.addLine(getLine28());
      that.addLine(getLine29());
      that.addLine(getLine30());
      that.addLine(getLine36());
     that.highlightElement(STAT235TraditionalPlanelement, "Math");
     that.addToClicked("STAT235TraditionalPlan", "Math");
      STAT235TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine28());
      that.removeLine(getLine29());
      that.removeLine(getLine30());
      that.removeLine(getLine36());
     that.unHighlightElement(STAT235TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("STAT235TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(STAT235TraditionalPlanelement, category);
}
      STAT235TraditionalPlanflag=false
  }
};
$scope.MINE324TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE324TraditionalPlanTime <= 200) { 
        MINE324TraditionalPlanTime = currentTime;
        return;
    }
MINE324TraditionalPlanTime = currentTime;
  var MINE324TraditionalPlanelement = document.getElementById("MINE324TraditionalPlan");
 if (!MINE324TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE324TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE324TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE324TraditionalPlan")[i];
        if (MINE324TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE324TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine31());
      that.addLine(getLine44());
     that.highlightElement(MINE324TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MINE324TraditionalPlan", "EngineeringSciences");
      MINE324TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine31());
      that.removeLine(getLine44());
     that.unHighlightElement(MINE324TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MINE324TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE324TraditionalPlanelement, category);
}
      MINE324TraditionalPlanflag=false
  }
};
$scope.MINE330TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE330TraditionalPlanTime <= 200) { 
        MINE330TraditionalPlanTime = currentTime;
        return;
    }
MINE330TraditionalPlanTime = currentTime;
  var MINE330TraditionalPlanelement = document.getElementById("MINE330TraditionalPlan");
 if (!MINE330TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE330TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE330TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE330TraditionalPlan")[i];
        if (MINE330TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE330TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine32());
      that.addLine(getLine33());
      that.addLine(getLine40());
     that.highlightElement(MINE330TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MINE330TraditionalPlan", "EngineeringSciences");
      MINE330TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine32());
      that.removeLine(getLine33());
      that.removeLine(getLine40());
     that.unHighlightElement(MINE330TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MINE330TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE330TraditionalPlanelement, category);
}
      MINE330TraditionalPlanflag=false
  }
};
$scope.MINE408TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE408TraditionalPlanTime <= 200) { 
        MINE408TraditionalPlanTime = currentTime;
        return;
    }
MINE408TraditionalPlanTime = currentTime;
  var MINE408TraditionalPlanelement = document.getElementById("MINE408TraditionalPlan");
 if (!MINE408TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE408TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE408TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE408TraditionalPlan")[i];
        if (MINE408TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE408TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine34());
      that.addLine(getLine35());
      that.addLine(getLine36());
     that.highlightElement(MINE408TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("MINE408TraditionalPlan", "EngineeringProfession");
      MINE408TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine34());
      that.removeLine(getLine35());
      that.removeLine(getLine36());
     that.unHighlightElement(MINE408TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("MINE408TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(MINE408TraditionalPlanelement, category);
}
      MINE408TraditionalPlanflag=false
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
$scope.MINE402TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE402TraditionalPlanTime <= 200) { 
        MINE402TraditionalPlanTime = currentTime;
        return;
    }
MINE402TraditionalPlanTime = currentTime;
  var MINE402TraditionalPlanelement = document.getElementById("MINE402TraditionalPlan");
 if (!MINE402TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE402TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE402TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE402TraditionalPlan")[i];
        if (MINE402TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE402TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine37());
      that.addLine(getLine38());
      that.addLine(getLine46());
     that.highlightElement(MINE402TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("MINE402TraditionalPlan", "EngineeringDesign");
      MINE402TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine37());
      that.removeLine(getLine38());
      that.removeLine(getLine46());
     that.unHighlightElement(MINE402TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("MINE402TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MINE402TraditionalPlanelement, category);
}
      MINE402TraditionalPlanflag=false
  }
};
$scope.MINE413TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE413TraditionalPlanTime <= 200) { 
        MINE413TraditionalPlanTime = currentTime;
        return;
    }
MINE413TraditionalPlanTime = currentTime;
  var MINE413TraditionalPlanelement = document.getElementById("MINE413TraditionalPlan");
 if (!MINE413TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE413TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE413TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE413TraditionalPlan")[i];
        if (MINE413TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE413TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine37());
      that.addLine(getLine39());
      that.addLine(getLine40());
      that.addLine(getLine41());
      that.addLine(getLine42());
      that.addLine(getLine52());
      that.addLine(getLine54());
     that.highlightElement(MINE413TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MINE413TraditionalPlan", "EngineeringSciences");
      MINE413TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine37());
      that.removeLine(getLine39());
      that.removeLine(getLine40());
      that.removeLine(getLine41());
      that.removeLine(getLine42());
      that.removeLine(getLine52());
      that.removeLine(getLine54());
     that.unHighlightElement(MINE413TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MINE413TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE413TraditionalPlanelement, category);
}
      MINE413TraditionalPlanflag=false
  }
};
$scope.MINE414TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE414TraditionalPlanTime <= 200) { 
        MINE414TraditionalPlanTime = currentTime;
        return;
    }
MINE414TraditionalPlanTime = currentTime;
  var MINE414TraditionalPlanelement = document.getElementById("MINE414TraditionalPlan");
 if (!MINE414TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE414TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE414TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE414TraditionalPlan")[i];
        if (MINE414TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE414TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine38());
      that.addLine(getLine43());
      that.addLine(getLine44());
      that.addLine(getLine45());
      that.addLine(getLine47());
      that.addLine(getLine53());
     that.highlightElement(MINE414TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MINE414TraditionalPlan", "EngineeringSciences");
      MINE414TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine38());
      that.removeLine(getLine43());
      that.removeLine(getLine44());
      that.removeLine(getLine45());
      that.removeLine(getLine47());
      that.removeLine(getLine53());
     that.unHighlightElement(MINE414TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MINE414TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE414TraditionalPlanelement, category);
}
      MINE414TraditionalPlanflag=false
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
$scope.MINE403TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE403TraditionalPlanTime <= 200) { 
        MINE403TraditionalPlanTime = currentTime;
        return;
    }
MINE403TraditionalPlanTime = currentTime;
  var MINE403TraditionalPlanelement = document.getElementById("MINE403TraditionalPlan");
 if (!MINE403TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE403TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE403TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE403TraditionalPlan")[i];
        if (MINE403TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE403TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine46());
     that.highlightElement(MINE403TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("MINE403TraditionalPlan", "EngineeringDesign");
      MINE403TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine46());
     that.unHighlightElement(MINE403TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("MINE403TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MINE403TraditionalPlanelement, category);
}
      MINE403TraditionalPlanflag=false
  }
};
$scope.MINE407TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE407TraditionalPlanTime <= 200) { 
        MINE407TraditionalPlanTime = currentTime;
        return;
    }
MINE407TraditionalPlanTime = currentTime;
  var MINE407TraditionalPlanelement = document.getElementById("MINE407TraditionalPlan");
 if (!MINE407TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE407TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE407TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE407TraditionalPlan")[i];
        if (MINE407TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE407TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine47());
      that.addLine(getLine48());
      that.addLine(getLine49());
      that.addLine(getLine50());
     that.highlightElement(MINE407TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MINE407TraditionalPlan", "EngineeringSciences");
      MINE407TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine47());
      that.removeLine(getLine48());
      that.removeLine(getLine49());
      that.removeLine(getLine50());
     that.unHighlightElement(MINE407TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MINE407TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE407TraditionalPlanelement, category);
}
      MINE407TraditionalPlanflag=false
  }
};
$scope.MINE420TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE420TraditionalPlanTime <= 200) { 
        MINE420TraditionalPlanTime = currentTime;
        return;
    }
MINE420TraditionalPlanTime = currentTime;
  var MINE420TraditionalPlanelement = document.getElementById("MINE420TraditionalPlan");
 if (!MINE420TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE420TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE420TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE420TraditionalPlan")[i];
        if (MINE420TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE420TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine51());
      that.addLine(getLine52());
      that.addLine(getLine53());
     that.highlightElement(MINE420TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MINE420TraditionalPlan", "EngineeringSciences");
      MINE420TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine51());
      that.removeLine(getLine52());
      that.removeLine(getLine53());
     that.unHighlightElement(MINE420TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MINE420TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE420TraditionalPlanelement, category);
}
      MINE420TraditionalPlanflag=false
  }
};
$scope.MINE422TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE422TraditionalPlanTime <= 200) { 
        MINE422TraditionalPlanTime = currentTime;
        return;
    }
MINE422TraditionalPlanTime = currentTime;
  var MINE422TraditionalPlanelement = document.getElementById("MINE422TraditionalPlan");
 if (!MINE422TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MINE422TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MINE422TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MINE422TraditionalPlan")[i];
        if (MINE422TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE422TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine50());
      that.addLine(getLine54());
     that.highlightElement(MINE422TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("MINE422TraditionalPlan", "EngineeringProfession");
      MINE422TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine50());
      that.removeLine(getLine54());
     that.unHighlightElement(MINE422TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("MINE422TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(MINE422TraditionalPlanelement, category);
}
      MINE422TraditionalPlanflag=false
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
$scope.CIVE265TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE265TraditionalPlandesc");
 if (!CIVE265TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE265TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE265TraditionalPlanrflag=false
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
$scope.MINE295TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE295TraditionalPlandesc");
 if (!MINE295TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE295TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE295TraditionalPlanrflag=false
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
$scope.CIVE250TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE250TraditionalPlandesc");
 if (!CIVE250TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE250TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE250TraditionalPlanrflag=false
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
$scope.MINE325TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE325TraditionalPlandesc");
 if (!MINE325TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE325TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE325TraditionalPlanrflag=false
  }
};
$scope.CIVE251TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE251TraditionalPlandesc");
 if (!CIVE251TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE251TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE251TraditionalPlanrflag=false
  }
};
$scope.CIVE330TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE330TraditionalPlandesc");
 if (!CIVE330TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE330TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE330TraditionalPlanrflag=false
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
$scope.MINE310TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE310TraditionalPlandesc");
 if (!MINE310TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE310TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE310TraditionalPlanrflag=false
  }
};
$scope.MINE323TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE323TraditionalPlandesc");
 if (!MINE323TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE323TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE323TraditionalPlanrflag=false
  }
};
$scope.CIVE381TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE381TraditionalPlandesc");
 if (!CIVE381TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE381TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE381TraditionalPlanrflag=false
  }
};
$scope.CME421TraditionalPlanRCListener = function () {
  var element = document.getElementById("CME421TraditionalPlandesc");
 if (!CME421TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CME421TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CME421TraditionalPlanrflag=false
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
$scope.MINE324TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE324TraditionalPlandesc");
 if (!MINE324TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE324TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE324TraditionalPlanrflag=false
  }
};
$scope.MINE330TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE330TraditionalPlandesc");
 if (!MINE330TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE330TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE330TraditionalPlanrflag=false
  }
};
$scope.MINE408TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE408TraditionalPlandesc");
 if (!MINE408TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE408TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE408TraditionalPlanrflag=false
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
$scope.MINE402TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE402TraditionalPlandesc");
 if (!MINE402TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE402TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE402TraditionalPlanrflag=false
  }
};
$scope.MINE413TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE413TraditionalPlandesc");
 if (!MINE413TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE413TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE413TraditionalPlanrflag=false
  }
};
$scope.MINE414TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE414TraditionalPlandesc");
 if (!MINE414TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE414TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE414TraditionalPlanrflag=false
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
$scope.MINE403TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE403TraditionalPlandesc");
 if (!MINE403TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE403TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE403TraditionalPlanrflag=false
  }
};
$scope.MINE407TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE407TraditionalPlandesc");
 if (!MINE407TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE407TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE407TraditionalPlanrflag=false
  }
};
$scope.MINE420TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE420TraditionalPlandesc");
 if (!MINE420TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE420TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE420TraditionalPlanrflag=false
  }
};
$scope.MINE422TraditionalPlanRCListener = function () {
  var element = document.getElementById("MINE422TraditionalPlandesc");
 if (!MINE422TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE422TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE422TraditionalPlanrflag=false
  }
};
  var CHEM103CoopPlan1flag = false;
  var CHEM103CoopPlan1rflag = false;
 var CHEM103CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("CHEM103CoopPlan1", []);
  var ENGG100CoopPlan1flag = false;
  var ENGG100CoopPlan1rflag = false;
 var ENGG100CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGG100CoopPlan1", []);
  var ENGG130CoopPlan1flag = false;
  var ENGG130CoopPlan1rflag = false;
 var ENGG130CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGG130CoopPlan1", []);
  var ENGL199CoopPlan1flag = false;
  var ENGL199CoopPlan1rflag = false;
 var ENGL199CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGL199CoopPlan1", []);
  var MATH100CoopPlan1flag = false;
  var MATH100CoopPlan1rflag = false;
 var MATH100CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MATH100CoopPlan1", []);
  var PHYS130CoopPlan1flag = false;
  var PHYS130CoopPlan1rflag = false;
 var PHYS130CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("PHYS130CoopPlan1", []);
  var CHEM105CoopPlan1flag = false;
  var CHEM105CoopPlan1rflag = false;
 var CHEM105CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("CHEM105CoopPlan1", []);
  var ENCMP100CoopPlan1flag = false;
  var ENCMP100CoopPlan1rflag = false;
 var ENCMP100CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENCMP100CoopPlan1", []);
  var ENGG160CoopPlan1flag = false;
  var ENGG160CoopPlan1rflag = false;
 var ENGG160CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGG160CoopPlan1", []);
  var ENPH131CoopPlan1flag = false;
  var ENPH131CoopPlan1rflag = false;
 var ENPH131CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENPH131CoopPlan1", []);
  var MATH101CoopPlan1flag = false;
  var MATH101CoopPlan1rflag = false;
 var MATH101CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MATH101CoopPlan1", []);
  var MATH102CoopPlan1flag = false;
  var MATH102CoopPlan1rflag = false;
 var MATH102CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MATH102CoopPlan1", []);
  var CIVE265CoopPlan1flag = false;
  var CIVE265CoopPlan1rflag = false;
 var CIVE265CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("CIVE265CoopPlan1", []);
  var EAS210CoopPlan1flag = false;
  var EAS210CoopPlan1rflag = false;
 var EAS210CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("EAS210CoopPlan1", []);
  var ECE209CoopPlan1flag = false;
  var ECE209CoopPlan1rflag = false;
 var ECE209CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE209CoopPlan1", []);
  var ENGG299CoopPlan1flag = false;
  var ENGG299CoopPlan1rflag = false;
 var ENGG299CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGG299CoopPlan1", []);
  var MATH209CoopPlan1flag = false;
  var MATH209CoopPlan1rflag = false;
 var MATH209CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MATH209CoopPlan1", []);
  var MINE295CoopPlan1flag = false;
  var MINE295CoopPlan1rflag = false;
 var MINE295CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE295CoopPlan1", []);
  var STAT235CoopPlan1flag = false;
  var STAT235CoopPlan1rflag = false;
 var STAT235CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("STAT235CoopPlan1", []);
  var CHE243CoopPlan1flag = false;
  var CHE243CoopPlan1rflag = false;
 var CHE243CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("CHE243CoopPlan1", []);
  var CIVE250CoopPlan1flag = false;
  var CIVE250CoopPlan1rflag = false;
 var CIVE250CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("CIVE250CoopPlan1", []);
  var CIVE251CoopPlan1flag = false;
  var CIVE251CoopPlan1rflag = false;
 var CIVE251CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("CIVE251CoopPlan1", []);
  var CIVE270CoopPlan1flag = false;
  var CIVE270CoopPlan1rflag = false;
 var CIVE270CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("CIVE270CoopPlan1", []);
  var MATH201CoopPlan1flag = false;
  var MATH201CoopPlan1rflag = false;
 var MATH201CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MATH201CoopPlan1", []);
  var MINE325CoopPlan1flag = false;
  var MINE325CoopPlan1rflag = false;
 var MINE325CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE325CoopPlan1", []);
  var ITSElectiveCoopPlan10flag = false;
  var ITSElectiveCoopPlan10rflag = false;
 var ITSElectiveCoopPlan10Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ITSElectiveCoopPlan10", []);
  var WKEXP901CoopPlan1flag = false;
  var WKEXP901CoopPlan1rflag = false;
 var WKEXP901CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("WKEXP901CoopPlan1", []);
  var WKEXP902CoopPlan1flag = false;
  var WKEXP902CoopPlan1rflag = false;
 var WKEXP902CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("WKEXP902CoopPlan1", []);
  var CIVE381CoopPlan1flag = false;
  var CIVE381CoopPlan1rflag = false;
 var CIVE381CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("CIVE381CoopPlan1", []);
  var MINE324CoopPlan1flag = false;
  var MINE324CoopPlan1rflag = false;
 var MINE324CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE324CoopPlan1", []);
  var MINE330CoopPlan1flag = false;
  var MINE330CoopPlan1rflag = false;
 var MINE330CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE330CoopPlan1", []);
  var ComplementaryElectiveCoopPlan10flag = false;
  var ComplementaryElectiveCoopPlan10rflag = false;
 var ComplementaryElectiveCoopPlan10Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ComplementaryElectiveCoopPlan10", []);
  var ProgramTechnicalElectiveCoopPlan10flag = false;
  var ProgramTechnicalElectiveCoopPlan10rflag = false;
 var ProgramTechnicalElectiveCoopPlan10Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ProgramTechnicalElectiveCoopPlan10", []);
  var CIVE330CoopPlan1flag = false;
  var CIVE330CoopPlan1rflag = false;
 var CIVE330CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("CIVE330CoopPlan1", []);
  var CHE312CoopPlan1flag = false;
  var CHE312CoopPlan1rflag = false;
 var CHE312CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("CHE312CoopPlan1", []);
  var ENGG404CoopPlan1flag = false;
  var ENGG404CoopPlan1rflag = false;
 var ENGG404CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGG404CoopPlan1", []);
  var ENGM310CoopPlan1flag = false;
  var ENGM310CoopPlan1rflag = false;
 var ENGM310CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGM310CoopPlan1", []);
  var ENGM401CoopPlan1flag = false;
  var ENGM401CoopPlan1rflag = false;
 var ENGM401CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGM401CoopPlan1", []);
  var MINE310CoopPlan1flag = false;
  var MINE310CoopPlan1rflag = false;
 var MINE310CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE310CoopPlan1", []);
  var MINE323CoopPlan1flag = false;
  var MINE323CoopPlan1rflag = false;
 var MINE323CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE323CoopPlan1", []);
  var WKEXP903CoopPlan1flag = false;
  var WKEXP903CoopPlan1rflag = false;
 var WKEXP903CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("WKEXP903CoopPlan1", []);
  var WKEXP904CoopPlan1flag = false;
  var WKEXP904CoopPlan1rflag = false;
 var WKEXP904CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("WKEXP904CoopPlan1", []);
  var WKEXP905CoopPlan1flag = false;
  var WKEXP905CoopPlan1rflag = false;
 var WKEXP905CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("WKEXP905CoopPlan1", []);
  var CME421CoopPlan1flag = false;
  var CME421CoopPlan1rflag = false;
 var CME421CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("CME421CoopPlan1", []);
  var MINE402CoopPlan1flag = false;
  var MINE402CoopPlan1rflag = false;
 var MINE402CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE402CoopPlan1", []);
  var MINE413CoopPlan1flag = false;
  var MINE413CoopPlan1rflag = false;
 var MINE413CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE413CoopPlan1", []);
  var MINE414CoopPlan1flag = false;
  var MINE414CoopPlan1rflag = false;
 var MINE414CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE414CoopPlan1", []);
  var ComplementaryElectiveCoopPlan11flag = false;
  var ComplementaryElectiveCoopPlan11rflag = false;
 var ComplementaryElectiveCoopPlan11Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ComplementaryElectiveCoopPlan11", []);
  var ProgramTechnicalElectiveCoopPlan11flag = false;
  var ProgramTechnicalElectiveCoopPlan11rflag = false;
 var ProgramTechnicalElectiveCoopPlan11Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ProgramTechnicalElectiveCoopPlan11", []);
  var ENGG400CoopPlan1flag = false;
  var ENGG400CoopPlan1rflag = false;
 var ENGG400CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGG400CoopPlan1", []);
  var MINE403CoopPlan1flag = false;
  var MINE403CoopPlan1rflag = false;
 var MINE403CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE403CoopPlan1", []);
  var MINE407CoopPlan1flag = false;
  var MINE407CoopPlan1rflag = false;
 var MINE407CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE407CoopPlan1", []);
  var MINE408CoopPlan1flag = false;
  var MINE408CoopPlan1rflag = false;
 var MINE408CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE408CoopPlan1", []);
  var MINE420CoopPlan1flag = false;
  var MINE420CoopPlan1rflag = false;
 var MINE420CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE420CoopPlan1", []);
  var MINE422CoopPlan1flag = false;
  var MINE422CoopPlan1rflag = false;
 var MINE422CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MINE422CoopPlan1", []);
$scope.CHEM103CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103CoopPlan1Time <= 200) { 
        CHEM103CoopPlan1Time = currentTime;
        return;
    }
CHEM103CoopPlan1Time = currentTime;
  var CHEM103CoopPlan1element = document.getElementById("CHEM103CoopPlan1");
 if (!CHEM103CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("CHEM103CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("CHEM103CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("CHEM103CoopPlan1")[i];
        if (CHEM103CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine57());
     that.highlightElement(CHEM103CoopPlan1element, "NaturalSciences");
     that.addToClicked("CHEM103CoopPlan1", "NaturalSciences");
      CHEM103CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine57());
     that.unHighlightElement(CHEM103CoopPlan1element, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103CoopPlan1", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103CoopPlan1element, category);
}
      CHEM103CoopPlan1flag=false
  }
};
$scope.ENGG100CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100CoopPlan1Time <= 200) { 
        ENGG100CoopPlan1Time = currentTime;
        return;
    }
ENGG100CoopPlan1Time = currentTime;
  var ENGG100CoopPlan1element = document.getElementById("ENGG100CoopPlan1");
 if (!ENGG100CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ENGG100CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ENGG100CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ENGG100CoopPlan1")[i];
        if (ENGG100CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100CoopPlan1element, "EngineeringProfession");
     that.addToClicked("ENGG100CoopPlan1", "EngineeringProfession");
      ENGG100CoopPlan1flag=true
  }
 else {
     that.unHighlightElement(ENGG100CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100CoopPlan1element, category);
}
      ENGG100CoopPlan1flag=false
  }
};
$scope.ENGG130CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130CoopPlan1Time <= 200) { 
        ENGG130CoopPlan1Time = currentTime;
        return;
    }
ENGG130CoopPlan1Time = currentTime;
  var ENGG130CoopPlan1element = document.getElementById("ENGG130CoopPlan1");
 if (!ENGG130CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ENGG130CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ENGG130CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ENGG130CoopPlan1")[i];
        if (ENGG130CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine55());
      that.addLine(getLine60());
      that.addLine(getLine72());
     that.highlightElement(ENGG130CoopPlan1element, "NaturalSciences");
     that.addToClicked("ENGG130CoopPlan1", "NaturalSciences");
      ENGG130CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine55());
      that.removeLine(getLine60());
      that.removeLine(getLine72());
     that.unHighlightElement(ENGG130CoopPlan1element, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130CoopPlan1", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130CoopPlan1element, category);
}
      ENGG130CoopPlan1flag=false
  }
};
$scope.ENGL199CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199CoopPlan1Time <= 200) { 
        ENGL199CoopPlan1Time = currentTime;
        return;
    }
ENGL199CoopPlan1Time = currentTime;
  var ENGL199CoopPlan1element = document.getElementById("ENGL199CoopPlan1");
 if (!ENGL199CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ENGL199CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ENGL199CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ENGL199CoopPlan1")[i];
        if (ENGL199CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine58());
     that.highlightElement(ENGL199CoopPlan1element, "Other");
     that.addToClicked("ENGL199CoopPlan1", "Other");
      ENGL199CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine58());
     that.unHighlightElement(ENGL199CoopPlan1element, "Other");
     var category = that.removeFromClicked("ENGL199CoopPlan1", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199CoopPlan1element, category);
}
      ENGL199CoopPlan1flag=false
  }
};
$scope.MATH100CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100CoopPlan1Time <= 200) { 
        MATH100CoopPlan1Time = currentTime;
        return;
    }
MATH100CoopPlan1Time = currentTime;
  var MATH100CoopPlan1element = document.getElementById("MATH100CoopPlan1");
 if (!MATH100CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MATH100CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MATH100CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MATH100CoopPlan1")[i];
        if (MATH100CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine55());
      that.addLine(getLine56());
      that.addLine(getLine59());
      that.addLine(getLine62());
      that.addLine(getLine63());
      that.addLine(getLine66());
     that.highlightElement(MATH100CoopPlan1element, "Math");
     that.addToClicked("MATH100CoopPlan1", "Math");
      MATH100CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine55());
      that.removeLine(getLine56());
      that.removeLine(getLine59());
      that.removeLine(getLine62());
      that.removeLine(getLine63());
      that.removeLine(getLine66());
     that.unHighlightElement(MATH100CoopPlan1element, "Math");
     var category = that.removeFromClicked("MATH100CoopPlan1", "Math");
  if (category != "") { 
     that.highlightElement(MATH100CoopPlan1element, category);
}
      MATH100CoopPlan1flag=false
  }
};
$scope.PHYS130CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130CoopPlan1Time <= 200) { 
        PHYS130CoopPlan1Time = currentTime;
        return;
    }
PHYS130CoopPlan1Time = currentTime;
  var PHYS130CoopPlan1element = document.getElementById("PHYS130CoopPlan1");
 if (!PHYS130CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("PHYS130CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("PHYS130CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("PHYS130CoopPlan1")[i];
        if (PHYS130CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine56());
     that.highlightElement(PHYS130CoopPlan1element, "NaturalSciences");
     that.addToClicked("PHYS130CoopPlan1", "NaturalSciences");
      PHYS130CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine56());
     that.unHighlightElement(PHYS130CoopPlan1element, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130CoopPlan1", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130CoopPlan1element, category);
}
      PHYS130CoopPlan1flag=false
  }
};
$scope.CHEM105CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105CoopPlan1Time <= 200) { 
        CHEM105CoopPlan1Time = currentTime;
        return;
    }
CHEM105CoopPlan1Time = currentTime;
  var CHEM105CoopPlan1element = document.getElementById("CHEM105CoopPlan1");
 if (!CHEM105CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("CHEM105CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("CHEM105CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("CHEM105CoopPlan1")[i];
        if (CHEM105CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine57());
     that.highlightElement(CHEM105CoopPlan1element, "NaturalSciences");
     that.addToClicked("CHEM105CoopPlan1", "NaturalSciences");
      CHEM105CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine57());
     that.unHighlightElement(CHEM105CoopPlan1element, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105CoopPlan1", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105CoopPlan1element, category);
}
      CHEM105CoopPlan1flag=false
  }
};
$scope.ENCMP100CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100CoopPlan1Time <= 200) { 
        ENCMP100CoopPlan1Time = currentTime;
        return;
    }
ENCMP100CoopPlan1Time = currentTime;
  var ENCMP100CoopPlan1element = document.getElementById("ENCMP100CoopPlan1");
 if (!ENCMP100CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ENCMP100CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ENCMP100CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ENCMP100CoopPlan1")[i];
        if (ENCMP100CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENCMP100CoopPlan1element, "NaturalSciences");
     that.addToClicked("ENCMP100CoopPlan1", "NaturalSciences");
      ENCMP100CoopPlan1flag=true
  }
 else {
     that.unHighlightElement(ENCMP100CoopPlan1element, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100CoopPlan1", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100CoopPlan1element, category);
}
      ENCMP100CoopPlan1flag=false
  }
};
$scope.ENGG160CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160CoopPlan1Time <= 200) { 
        ENGG160CoopPlan1Time = currentTime;
        return;
    }
ENGG160CoopPlan1Time = currentTime;
  var ENGG160CoopPlan1element = document.getElementById("ENGG160CoopPlan1");
 if (!ENGG160CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ENGG160CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ENGG160CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ENGG160CoopPlan1")[i];
        if (ENGG160CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine58());
     that.highlightElement(ENGG160CoopPlan1element, "EngineeringDesign");
     that.addToClicked("ENGG160CoopPlan1", "EngineeringDesign");
      ENGG160CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine58());
     that.unHighlightElement(ENGG160CoopPlan1element, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160CoopPlan1", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160CoopPlan1element, category);
}
      ENGG160CoopPlan1flag=false
  }
};
$scope.ENPH131CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131CoopPlan1Time <= 200) { 
        ENPH131CoopPlan1Time = currentTime;
        return;
    }
ENPH131CoopPlan1Time = currentTime;
  var ENPH131CoopPlan1element = document.getElementById("ENPH131CoopPlan1");
 if (!ENPH131CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ENPH131CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ENPH131CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ENPH131CoopPlan1")[i];
        if (ENPH131CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine59());
      that.addLine(getLine60());
      that.addLine(getLine61());
      that.addLine(getLine86());
     that.highlightElement(ENPH131CoopPlan1element, "NaturalSciences");
     that.addToClicked("ENPH131CoopPlan1", "NaturalSciences");
      ENPH131CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine59());
      that.removeLine(getLine60());
      that.removeLine(getLine61());
      that.removeLine(getLine86());
     that.unHighlightElement(ENPH131CoopPlan1element, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131CoopPlan1", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131CoopPlan1element, category);
}
      ENPH131CoopPlan1flag=false
  }
};
$scope.MATH101CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101CoopPlan1Time <= 200) { 
        MATH101CoopPlan1Time = currentTime;
        return;
    }
MATH101CoopPlan1Time = currentTime;
  var MATH101CoopPlan1element = document.getElementById("MATH101CoopPlan1");
 if (!MATH101CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MATH101CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MATH101CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MATH101CoopPlan1")[i];
        if (MATH101CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine61());
      that.addLine(getLine62());
      that.addLine(getLine64());
      that.addLine(getLine67());
      that.addLine(getLine68());
      that.addLine(getLine69());
      that.addLine(getLine73());
     that.highlightElement(MATH101CoopPlan1element, "Math");
     that.addToClicked("MATH101CoopPlan1", "Math");
      MATH101CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine61());
      that.removeLine(getLine62());
      that.removeLine(getLine64());
      that.removeLine(getLine67());
      that.removeLine(getLine68());
      that.removeLine(getLine69());
      that.removeLine(getLine73());
     that.unHighlightElement(MATH101CoopPlan1element, "Math");
     var category = that.removeFromClicked("MATH101CoopPlan1", "Math");
  if (category != "") { 
     that.highlightElement(MATH101CoopPlan1element, category);
}
      MATH101CoopPlan1flag=false
  }
};
$scope.MATH102CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102CoopPlan1Time <= 200) { 
        MATH102CoopPlan1Time = currentTime;
        return;
    }
MATH102CoopPlan1Time = currentTime;
  var MATH102CoopPlan1element = document.getElementById("MATH102CoopPlan1");
 if (!MATH102CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MATH102CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MATH102CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MATH102CoopPlan1")[i];
        if (MATH102CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine63());
      that.addLine(getLine65());
      that.addLine(getLine70());
     that.highlightElement(MATH102CoopPlan1element, "Math");
     that.addToClicked("MATH102CoopPlan1", "Math");
      MATH102CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine63());
      that.removeLine(getLine65());
      that.removeLine(getLine70());
     that.unHighlightElement(MATH102CoopPlan1element, "Math");
     var category = that.removeFromClicked("MATH102CoopPlan1", "Math");
  if (category != "") { 
     that.highlightElement(MATH102CoopPlan1element, category);
}
      MATH102CoopPlan1flag=false
  }
};
$scope.CIVE265CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE265CoopPlan1Time <= 200) { 
        CIVE265CoopPlan1Time = currentTime;
        return;
    }
CIVE265CoopPlan1Time = currentTime;
  var CIVE265CoopPlan1element = document.getElementById("CIVE265CoopPlan1");
 if (!CIVE265CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("CIVE265CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("CIVE265CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("CIVE265CoopPlan1")[i];
        if (CIVE265CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE265CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine76());
     that.highlightElement(CIVE265CoopPlan1element, "EngineeringDesign");
     that.addToClicked("CIVE265CoopPlan1", "EngineeringDesign");
      CIVE265CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine76());
     that.unHighlightElement(CIVE265CoopPlan1element, "EngineeringDesign");
     var category = that.removeFromClicked("CIVE265CoopPlan1", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(CIVE265CoopPlan1element, category);
}
      CIVE265CoopPlan1flag=false
  }
};
$scope.EAS210CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - EAS210CoopPlan1Time <= 200) { 
        EAS210CoopPlan1Time = currentTime;
        return;
    }
EAS210CoopPlan1Time = currentTime;
  var EAS210CoopPlan1element = document.getElementById("EAS210CoopPlan1");
 if (!EAS210CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("EAS210CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("EAS210CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("EAS210CoopPlan1")[i];
        if (EAS210CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(EAS210CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine79());
     that.highlightElement(EAS210CoopPlan1element, "NaturalSciences");
     that.addToClicked("EAS210CoopPlan1", "NaturalSciences");
      EAS210CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine79());
     that.unHighlightElement(EAS210CoopPlan1element, "NaturalSciences");
     var category = that.removeFromClicked("EAS210CoopPlan1", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS210CoopPlan1element, category);
}
      EAS210CoopPlan1flag=false
  }
};
$scope.ECE209CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE209CoopPlan1Time <= 200) { 
        ECE209CoopPlan1Time = currentTime;
        return;
    }
ECE209CoopPlan1Time = currentTime;
  var ECE209CoopPlan1element = document.getElementById("ECE209CoopPlan1");
 if (!ECE209CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE209CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE209CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE209CoopPlan1")[i];
        if (ECE209CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE209CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine82());
     that.highlightElement(ECE209CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE209CoopPlan1", "EngineeringSciences");
      ECE209CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine82());
     that.unHighlightElement(ECE209CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE209CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE209CoopPlan1element, category);
}
      ECE209CoopPlan1flag=false
  }
};
$scope.ENGG299CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299CoopPlan1Time <= 200) { 
        ENGG299CoopPlan1Time = currentTime;
        return;
    }
ENGG299CoopPlan1Time = currentTime;
  var ENGG299CoopPlan1element = document.getElementById("ENGG299CoopPlan1");
 if (!ENGG299CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ENGG299CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ENGG299CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ENGG299CoopPlan1")[i];
        if (ENGG299CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG299CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine77());
     that.highlightElement(ENGG299CoopPlan1element, "EngineeringProfession");
     that.addToClicked("ENGG299CoopPlan1", "EngineeringProfession");
      ENGG299CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine77());
     that.unHighlightElement(ENGG299CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299CoopPlan1element, category);
}
      ENGG299CoopPlan1flag=false
  }
};
$scope.MATH209CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209CoopPlan1Time <= 200) { 
        MATH209CoopPlan1Time = currentTime;
        return;
    }
MATH209CoopPlan1Time = currentTime;
  var MATH209CoopPlan1element = document.getElementById("MATH209CoopPlan1");
 if (!MATH209CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MATH209CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MATH209CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MATH209CoopPlan1")[i];
        if (MATH209CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine64());
      that.addLine(getLine65());
      that.addLine(getLine74());
      that.addLine(getLine83());
      that.addLine(getLine87());
     that.highlightElement(MATH209CoopPlan1element, "Math");
     that.addToClicked("MATH209CoopPlan1", "Math");
      MATH209CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine64());
      that.removeLine(getLine65());
      that.removeLine(getLine74());
      that.removeLine(getLine83());
      that.removeLine(getLine87());
     that.unHighlightElement(MATH209CoopPlan1element, "Math");
     var category = that.removeFromClicked("MATH209CoopPlan1", "Math");
  if (category != "") { 
     that.highlightElement(MATH209CoopPlan1element, category);
}
      MATH209CoopPlan1flag=false
  }
};
$scope.MINE295CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE295CoopPlan1Time <= 200) { 
        MINE295CoopPlan1Time = currentTime;
        return;
    }
MINE295CoopPlan1Time = currentTime;
  var MINE295CoopPlan1element = document.getElementById("MINE295CoopPlan1");
 if (!MINE295CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE295CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE295CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE295CoopPlan1")[i];
        if (MINE295CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE295CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine75());
      that.addLine(getLine80());
      that.addLine(getLine81());
     that.highlightElement(MINE295CoopPlan1element, "EngineeringSciences");
     that.addToClicked("MINE295CoopPlan1", "EngineeringSciences");
      MINE295CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine75());
      that.removeLine(getLine80());
      that.removeLine(getLine81());
     that.unHighlightElement(MINE295CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE295CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE295CoopPlan1element, category);
}
      MINE295CoopPlan1flag=false
  }
};
$scope.STAT235CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - STAT235CoopPlan1Time <= 200) { 
        STAT235CoopPlan1Time = currentTime;
        return;
    }
STAT235CoopPlan1Time = currentTime;
  var STAT235CoopPlan1element = document.getElementById("STAT235CoopPlan1");
 if (!STAT235CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("STAT235CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("STAT235CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("STAT235CoopPlan1")[i];
        if (STAT235CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(STAT235CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine66());
      that.addLine(getLine67());
      that.addLine(getLine93());
      that.addLine(getLine110());
     that.highlightElement(STAT235CoopPlan1element, "Math");
     that.addToClicked("STAT235CoopPlan1", "Math");
      STAT235CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine66());
      that.removeLine(getLine67());
      that.removeLine(getLine93());
      that.removeLine(getLine110());
     that.unHighlightElement(STAT235CoopPlan1element, "Math");
     var category = that.removeFromClicked("STAT235CoopPlan1", "Math");
  if (category != "") { 
     that.highlightElement(STAT235CoopPlan1element, category);
}
      STAT235CoopPlan1flag=false
  }
};
$scope.CHE243CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243CoopPlan1Time <= 200) { 
        CHE243CoopPlan1Time = currentTime;
        return;
    }
CHE243CoopPlan1Time = currentTime;
  var CHE243CoopPlan1element = document.getElementById("CHE243CoopPlan1");
 if (!CHE243CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("CHE243CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("CHE243CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("CHE243CoopPlan1")[i];
        if (CHE243CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine68());
      that.addLine(getLine85());
     that.highlightElement(CHE243CoopPlan1element, "EngineeringSciences");
     that.addToClicked("CHE243CoopPlan1", "EngineeringSciences");
      CHE243CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine68());
      that.removeLine(getLine85());
     that.unHighlightElement(CHE243CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243CoopPlan1element, category);
}
      CHE243CoopPlan1flag=false
  }
};
$scope.CIVE250CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE250CoopPlan1Time <= 200) { 
        CIVE250CoopPlan1Time = currentTime;
        return;
    }
CIVE250CoopPlan1Time = currentTime;
  var CIVE250CoopPlan1element = document.getElementById("CIVE250CoopPlan1");
 if (!CIVE250CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("CIVE250CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("CIVE250CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("CIVE250CoopPlan1")[i];
        if (CIVE250CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE250CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine69());
      that.addLine(getLine70());
      that.addLine(getLine71());
     that.highlightElement(CIVE250CoopPlan1element, "EngineeringSciences");
     that.addToClicked("CIVE250CoopPlan1", "EngineeringSciences");
      CIVE250CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine69());
      that.removeLine(getLine70());
      that.removeLine(getLine71());
     that.unHighlightElement(CIVE250CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE250CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE250CoopPlan1element, category);
}
      CIVE250CoopPlan1flag=false
  }
};
$scope.CIVE251CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE251CoopPlan1Time <= 200) { 
        CIVE251CoopPlan1Time = currentTime;
        return;
    }
CIVE251CoopPlan1Time = currentTime;
  var CIVE251CoopPlan1element = document.getElementById("CIVE251CoopPlan1");
 if (!CIVE251CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("CIVE251CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("CIVE251CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("CIVE251CoopPlan1")[i];
        if (CIVE251CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE251CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine71());
     that.highlightElement(CIVE251CoopPlan1element, "EngineeringSciences");
     that.addToClicked("CIVE251CoopPlan1", "EngineeringSciences");
      CIVE251CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine71());
     that.unHighlightElement(CIVE251CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE251CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE251CoopPlan1element, category);
}
      CIVE251CoopPlan1flag=false
  }
};
$scope.CIVE270CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270CoopPlan1Time <= 200) { 
        CIVE270CoopPlan1Time = currentTime;
        return;
    }
CIVE270CoopPlan1Time = currentTime;
  var CIVE270CoopPlan1element = document.getElementById("CIVE270CoopPlan1");
 if (!CIVE270CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("CIVE270CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("CIVE270CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("CIVE270CoopPlan1")[i];
        if (CIVE270CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine72());
      that.addLine(getLine73());
      that.addLine(getLine89());
      that.addLine(getLine111());
     that.highlightElement(CIVE270CoopPlan1element, "EngineeringSciences");
     that.addToClicked("CIVE270CoopPlan1", "EngineeringSciences");
      CIVE270CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine72());
      that.removeLine(getLine73());
      that.removeLine(getLine89());
      that.removeLine(getLine111());
     that.unHighlightElement(CIVE270CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270CoopPlan1element, category);
}
      CIVE270CoopPlan1flag=false
  }
};
$scope.MATH201CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201CoopPlan1Time <= 200) { 
        MATH201CoopPlan1Time = currentTime;
        return;
    }
MATH201CoopPlan1Time = currentTime;
  var MATH201CoopPlan1element = document.getElementById("MATH201CoopPlan1");
 if (!MATH201CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MATH201CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MATH201CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MATH201CoopPlan1")[i];
        if (MATH201CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine74());
      that.addLine(getLine84());
      that.addLine(getLine88());
     that.highlightElement(MATH201CoopPlan1element, "Math");
     that.addToClicked("MATH201CoopPlan1", "Math");
      MATH201CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine74());
      that.removeLine(getLine84());
      that.removeLine(getLine88());
     that.unHighlightElement(MATH201CoopPlan1element, "Math");
     var category = that.removeFromClicked("MATH201CoopPlan1", "Math");
  if (category != "") { 
     that.highlightElement(MATH201CoopPlan1element, category);
}
      MATH201CoopPlan1flag=false
  }
};
$scope.MINE325CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE325CoopPlan1Time <= 200) { 
        MINE325CoopPlan1Time = currentTime;
        return;
    }
MINE325CoopPlan1Time = currentTime;
  var MINE325CoopPlan1element = document.getElementById("MINE325CoopPlan1");
 if (!MINE325CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE325CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE325CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE325CoopPlan1")[i];
        if (MINE325CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE325CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine75());
      that.addLine(getLine76());
      that.addLine(getLine99());
      that.addLine(getLine102());
     that.highlightElement(MINE325CoopPlan1element, "EngineeringDesign");
     that.addToClicked("MINE325CoopPlan1", "EngineeringDesign");
      MINE325CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine75());
      that.removeLine(getLine76());
      that.removeLine(getLine99());
      that.removeLine(getLine102());
     that.unHighlightElement(MINE325CoopPlan1element, "EngineeringDesign");
     var category = that.removeFromClicked("MINE325CoopPlan1", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MINE325CoopPlan1element, category);
}
      MINE325CoopPlan1flag=false
  }
};
$scope.ITSElectiveCoopPlan10Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveCoopPlan10Time <= 200) { 
        ITSElectiveCoopPlan10Time = currentTime;
        return;
    }
ITSElectiveCoopPlan10Time = currentTime;
  var ITSElectiveCoopPlan10element = document.getElementById("ITSElectiveCoopPlan10");
 if (!ITSElectiveCoopPlan10flag) {
     if (that.CoopPlan1ClickedMap.get("ITSElectiveCoopPlan10").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ITSElectiveCoopPlan10").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ITSElectiveCoopPlan10")[i];
        if (ITSElectiveCoopPlan10element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveCoopPlan10element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveCoopPlan10element, "ITS");
     that.addToClicked("ITSElectiveCoopPlan10", "ITS");
      ITSElectiveCoopPlan10flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveCoopPlan10element, "ITS");
     var category = that.removeFromClicked("ITSElectiveCoopPlan10", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveCoopPlan10element, category);
}
      ITSElectiveCoopPlan10flag=false
  }
};
$scope.WKEXP901CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP901CoopPlan1Time <= 200) { 
        WKEXP901CoopPlan1Time = currentTime;
        return;
    }
WKEXP901CoopPlan1Time = currentTime;
  var WKEXP901CoopPlan1element = document.getElementById("WKEXP901CoopPlan1");
 if (!WKEXP901CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("WKEXP901CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("WKEXP901CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("WKEXP901CoopPlan1")[i];
        if (WKEXP901CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP901CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine77());
      that.addLine(getLine78());
     that.highlightElement(WKEXP901CoopPlan1element, "EngineeringProfession");
     that.addToClicked("WKEXP901CoopPlan1", "EngineeringProfession");
      WKEXP901CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine77());
      that.removeLine(getLine78());
     that.unHighlightElement(WKEXP901CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP901CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP901CoopPlan1element, category);
}
      WKEXP901CoopPlan1flag=false
  }
};
$scope.WKEXP902CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP902CoopPlan1Time <= 200) { 
        WKEXP902CoopPlan1Time = currentTime;
        return;
    }
WKEXP902CoopPlan1Time = currentTime;
  var WKEXP902CoopPlan1element = document.getElementById("WKEXP902CoopPlan1");
 if (!WKEXP902CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("WKEXP902CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("WKEXP902CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("WKEXP902CoopPlan1")[i];
        if (WKEXP902CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP902CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine78());
      that.addLine(getLine90());
     that.highlightElement(WKEXP902CoopPlan1element, "EngineeringProfession");
     that.addToClicked("WKEXP902CoopPlan1", "EngineeringProfession");
      WKEXP902CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine78());
      that.removeLine(getLine90());
     that.unHighlightElement(WKEXP902CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP902CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP902CoopPlan1element, category);
}
      WKEXP902CoopPlan1flag=false
  }
};
$scope.CIVE381CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE381CoopPlan1Time <= 200) { 
        CIVE381CoopPlan1Time = currentTime;
        return;
    }
CIVE381CoopPlan1Time = currentTime;
  var CIVE381CoopPlan1element = document.getElementById("CIVE381CoopPlan1");
 if (!CIVE381CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("CIVE381CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("CIVE381CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("CIVE381CoopPlan1")[i];
        if (CIVE381CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE381CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine79());
     that.highlightElement(CIVE381CoopPlan1element, "EngineeringSciences");
     that.addToClicked("CIVE381CoopPlan1", "EngineeringSciences");
      CIVE381CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine79());
     that.unHighlightElement(CIVE381CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE381CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE381CoopPlan1element, category);
}
      CIVE381CoopPlan1flag=false
  }
};
$scope.MINE324CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE324CoopPlan1Time <= 200) { 
        MINE324CoopPlan1Time = currentTime;
        return;
    }
MINE324CoopPlan1Time = currentTime;
  var MINE324CoopPlan1element = document.getElementById("MINE324CoopPlan1");
 if (!MINE324CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE324CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE324CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE324CoopPlan1")[i];
        if (MINE324CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE324CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine80());
      that.addLine(getLine101());
     that.highlightElement(MINE324CoopPlan1element, "EngineeringSciences");
     that.addToClicked("MINE324CoopPlan1", "EngineeringSciences");
      MINE324CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine80());
      that.removeLine(getLine101());
     that.unHighlightElement(MINE324CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE324CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE324CoopPlan1element, category);
}
      MINE324CoopPlan1flag=false
  }
};
$scope.MINE330CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE330CoopPlan1Time <= 200) { 
        MINE330CoopPlan1Time = currentTime;
        return;
    }
MINE330CoopPlan1Time = currentTime;
  var MINE330CoopPlan1element = document.getElementById("MINE330CoopPlan1");
 if (!MINE330CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE330CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE330CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE330CoopPlan1")[i];
        if (MINE330CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE330CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine81());
      that.addLine(getLine82());
      that.addLine(getLine97());
     that.highlightElement(MINE330CoopPlan1element, "EngineeringSciences");
     that.addToClicked("MINE330CoopPlan1", "EngineeringSciences");
      MINE330CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine81());
      that.removeLine(getLine82());
      that.removeLine(getLine97());
     that.unHighlightElement(MINE330CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE330CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE330CoopPlan1element, category);
}
      MINE330CoopPlan1flag=false
  }
};
$scope.ComplementaryElectiveCoopPlan10Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlan10Time <= 200) { 
        ComplementaryElectiveCoopPlan10Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlan10Time = currentTime;
  var ComplementaryElectiveCoopPlan10element = document.getElementById("ComplementaryElectiveCoopPlan10");
 if (!ComplementaryElectiveCoopPlan10flag) {
     if (that.CoopPlan1ClickedMap.get("ComplementaryElectiveCoopPlan10").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ComplementaryElectiveCoopPlan10").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ComplementaryElectiveCoopPlan10")[i];
        if (ComplementaryElectiveCoopPlan10element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlan10element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlan10element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlan10", "COMP");
      ComplementaryElectiveCoopPlan10flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlan10element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlan10", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlan10element, category);
}
      ComplementaryElectiveCoopPlan10flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan10Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan10Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan10Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan10Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan10element = document.getElementById("ProgramTechnicalElectiveCoopPlan10");
 if (!ProgramTechnicalElectiveCoopPlan10flag) {
     if (that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan10").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan10").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan10")[i];
        if (ProgramTechnicalElectiveCoopPlan10element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan10element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan10element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan10", "PROG");
      ProgramTechnicalElectiveCoopPlan10flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan10element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan10", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan10element, category);
}
      ProgramTechnicalElectiveCoopPlan10flag=false
  }
};
$scope.CIVE330CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE330CoopPlan1Time <= 200) { 
        CIVE330CoopPlan1Time = currentTime;
        return;
    }
CIVE330CoopPlan1Time = currentTime;
  var CIVE330CoopPlan1element = document.getElementById("CIVE330CoopPlan1");
 if (!CIVE330CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("CIVE330CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("CIVE330CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("CIVE330CoopPlan1")[i];
        if (CIVE330CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE330CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine83());
      that.addLine(getLine84());
      that.addLine(getLine105());
     that.highlightElement(CIVE330CoopPlan1element, "EngineeringSciences");
     that.addToClicked("CIVE330CoopPlan1", "EngineeringSciences");
      CIVE330CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine83());
      that.removeLine(getLine84());
      that.removeLine(getLine105());
     that.unHighlightElement(CIVE330CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE330CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE330CoopPlan1element, category);
}
      CIVE330CoopPlan1flag=false
  }
};
$scope.CHE312CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE312CoopPlan1Time <= 200) { 
        CHE312CoopPlan1Time = currentTime;
        return;
    }
CHE312CoopPlan1Time = currentTime;
  var CHE312CoopPlan1element = document.getElementById("CHE312CoopPlan1");
 if (!CHE312CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("CHE312CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("CHE312CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("CHE312CoopPlan1")[i];
        if (CHE312CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE312CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine85());
      that.addLine(getLine86());
      that.addLine(getLine87());
      that.addLine(getLine88());
      that.addLine(getLine106());
     that.highlightElement(CHE312CoopPlan1element, "EngineeringSciences");
     that.addToClicked("CHE312CoopPlan1", "EngineeringSciences");
      CHE312CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine85());
      that.removeLine(getLine86());
      that.removeLine(getLine87());
      that.removeLine(getLine88());
      that.removeLine(getLine106());
     that.unHighlightElement(CHE312CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("CHE312CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE312CoopPlan1element, category);
}
      CHE312CoopPlan1flag=false
  }
};
$scope.ENGG404CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404CoopPlan1Time <= 200) { 
        ENGG404CoopPlan1Time = currentTime;
        return;
    }
ENGG404CoopPlan1Time = currentTime;
  var ENGG404CoopPlan1element = document.getElementById("ENGG404CoopPlan1");
 if (!ENGG404CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ENGG404CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ENGG404CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ENGG404CoopPlan1")[i];
        if (ENGG404CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404CoopPlan1element, "EngineeringProfession");
     that.addToClicked("ENGG404CoopPlan1", "EngineeringProfession");
      ENGG404CoopPlan1flag=true
  }
 else {
     that.unHighlightElement(ENGG404CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404CoopPlan1element, category);
}
      ENGG404CoopPlan1flag=false
  }
};
$scope.ENGM310CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310CoopPlan1Time <= 200) { 
        ENGM310CoopPlan1Time = currentTime;
        return;
    }
ENGM310CoopPlan1Time = currentTime;
  var ENGM310CoopPlan1element = document.getElementById("ENGM310CoopPlan1");
 if (!ENGM310CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ENGM310CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ENGM310CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ENGM310CoopPlan1")[i];
        if (ENGM310CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM310CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine108());
     that.highlightElement(ENGM310CoopPlan1element, "Other");
     that.addToClicked("ENGM310CoopPlan1", "Other");
      ENGM310CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine108());
     that.unHighlightElement(ENGM310CoopPlan1element, "Other");
     var category = that.removeFromClicked("ENGM310CoopPlan1", "Other");
  if (category != "") { 
     that.highlightElement(ENGM310CoopPlan1element, category);
}
      ENGM310CoopPlan1flag=false
  }
};
$scope.ENGM401CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401CoopPlan1Time <= 200) { 
        ENGM401CoopPlan1Time = currentTime;
        return;
    }
ENGM401CoopPlan1Time = currentTime;
  var ENGM401CoopPlan1element = document.getElementById("ENGM401CoopPlan1");
 if (!ENGM401CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ENGM401CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ENGM401CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ENGM401CoopPlan1")[i];
        if (ENGM401CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine109());
     that.highlightElement(ENGM401CoopPlan1element, "Other");
     that.addToClicked("ENGM401CoopPlan1", "Other");
      ENGM401CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine109());
     that.unHighlightElement(ENGM401CoopPlan1element, "Other");
     var category = that.removeFromClicked("ENGM401CoopPlan1", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401CoopPlan1element, category);
}
      ENGM401CoopPlan1flag=false
  }
};
$scope.MINE310CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE310CoopPlan1Time <= 200) { 
        MINE310CoopPlan1Time = currentTime;
        return;
    }
MINE310CoopPlan1Time = currentTime;
  var MINE310CoopPlan1element = document.getElementById("MINE310CoopPlan1");
 if (!MINE310CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE310CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE310CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE310CoopPlan1")[i];
        if (MINE310CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE310CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine96());
     that.highlightElement(MINE310CoopPlan1element, "EngineeringSciences");
     that.addToClicked("MINE310CoopPlan1", "EngineeringSciences");
      MINE310CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine96());
     that.unHighlightElement(MINE310CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE310CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE310CoopPlan1element, category);
}
      MINE310CoopPlan1flag=false
  }
};
$scope.MINE323CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE323CoopPlan1Time <= 200) { 
        MINE323CoopPlan1Time = currentTime;
        return;
    }
MINE323CoopPlan1Time = currentTime;
  var MINE323CoopPlan1element = document.getElementById("MINE323CoopPlan1");
 if (!MINE323CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE323CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE323CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE323CoopPlan1")[i];
        if (MINE323CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE323CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine89());
      that.addLine(getLine98());
      that.addLine(getLine100());
     that.highlightElement(MINE323CoopPlan1element, "EngineeringSciences");
     that.addToClicked("MINE323CoopPlan1", "EngineeringSciences");
      MINE323CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine89());
      that.removeLine(getLine98());
      that.removeLine(getLine100());
     that.unHighlightElement(MINE323CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE323CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE323CoopPlan1element, category);
}
      MINE323CoopPlan1flag=false
  }
};
$scope.WKEXP903CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP903CoopPlan1Time <= 200) { 
        WKEXP903CoopPlan1Time = currentTime;
        return;
    }
WKEXP903CoopPlan1Time = currentTime;
  var WKEXP903CoopPlan1element = document.getElementById("WKEXP903CoopPlan1");
 if (!WKEXP903CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("WKEXP903CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("WKEXP903CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("WKEXP903CoopPlan1")[i];
        if (WKEXP903CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP903CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine90());
      that.addLine(getLine91());
     that.highlightElement(WKEXP903CoopPlan1element, "EngineeringProfession");
     that.addToClicked("WKEXP903CoopPlan1", "EngineeringProfession");
      WKEXP903CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine90());
      that.removeLine(getLine91());
     that.unHighlightElement(WKEXP903CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP903CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP903CoopPlan1element, category);
}
      WKEXP903CoopPlan1flag=false
  }
};
$scope.WKEXP904CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP904CoopPlan1Time <= 200) { 
        WKEXP904CoopPlan1Time = currentTime;
        return;
    }
WKEXP904CoopPlan1Time = currentTime;
  var WKEXP904CoopPlan1element = document.getElementById("WKEXP904CoopPlan1");
 if (!WKEXP904CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("WKEXP904CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("WKEXP904CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("WKEXP904CoopPlan1")[i];
        if (WKEXP904CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP904CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine91());
      that.addLine(getLine92());
     that.highlightElement(WKEXP904CoopPlan1element, "EngineeringProfession");
     that.addToClicked("WKEXP904CoopPlan1", "EngineeringProfession");
      WKEXP904CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine91());
      that.removeLine(getLine92());
     that.unHighlightElement(WKEXP904CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP904CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP904CoopPlan1element, category);
}
      WKEXP904CoopPlan1flag=false
  }
};
$scope.WKEXP905CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP905CoopPlan1Time <= 200) { 
        WKEXP905CoopPlan1Time = currentTime;
        return;
    }
WKEXP905CoopPlan1Time = currentTime;
  var WKEXP905CoopPlan1element = document.getElementById("WKEXP905CoopPlan1");
 if (!WKEXP905CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("WKEXP905CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("WKEXP905CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("WKEXP905CoopPlan1")[i];
        if (WKEXP905CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP905CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine92());
     that.highlightElement(WKEXP905CoopPlan1element, "EngineeringProfession");
     that.addToClicked("WKEXP905CoopPlan1", "EngineeringProfession");
      WKEXP905CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine92());
     that.unHighlightElement(WKEXP905CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP905CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP905CoopPlan1element, category);
}
      WKEXP905CoopPlan1flag=false
  }
};
$scope.CME421CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CME421CoopPlan1Time <= 200) { 
        CME421CoopPlan1Time = currentTime;
        return;
    }
CME421CoopPlan1Time = currentTime;
  var CME421CoopPlan1element = document.getElementById("CME421CoopPlan1");
 if (!CME421CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("CME421CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("CME421CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("CME421CoopPlan1")[i];
        if (CME421CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CME421CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine93());
     that.highlightElement(CME421CoopPlan1element, "EngineeringSciences");
     that.addToClicked("CME421CoopPlan1", "EngineeringSciences");
      CME421CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine93());
     that.unHighlightElement(CME421CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("CME421CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CME421CoopPlan1element, category);
}
      CME421CoopPlan1flag=false
  }
};
$scope.MINE402CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE402CoopPlan1Time <= 200) { 
        MINE402CoopPlan1Time = currentTime;
        return;
    }
MINE402CoopPlan1Time = currentTime;
  var MINE402CoopPlan1element = document.getElementById("MINE402CoopPlan1");
 if (!MINE402CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE402CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE402CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE402CoopPlan1")[i];
        if (MINE402CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE402CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine94());
      that.addLine(getLine95());
      that.addLine(getLine103());
     that.highlightElement(MINE402CoopPlan1element, "EngineeringDesign");
     that.addToClicked("MINE402CoopPlan1", "EngineeringDesign");
      MINE402CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine94());
      that.removeLine(getLine95());
      that.removeLine(getLine103());
     that.unHighlightElement(MINE402CoopPlan1element, "EngineeringDesign");
     var category = that.removeFromClicked("MINE402CoopPlan1", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MINE402CoopPlan1element, category);
}
      MINE402CoopPlan1flag=false
  }
};
$scope.MINE413CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE413CoopPlan1Time <= 200) { 
        MINE413CoopPlan1Time = currentTime;
        return;
    }
MINE413CoopPlan1Time = currentTime;
  var MINE413CoopPlan1element = document.getElementById("MINE413CoopPlan1");
 if (!MINE413CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE413CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE413CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE413CoopPlan1")[i];
        if (MINE413CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE413CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine94());
      that.addLine(getLine96());
      that.addLine(getLine97());
      that.addLine(getLine98());
      that.addLine(getLine99());
      that.addLine(getLine112());
      that.addLine(getLine114());
     that.highlightElement(MINE413CoopPlan1element, "EngineeringSciences");
     that.addToClicked("MINE413CoopPlan1", "EngineeringSciences");
      MINE413CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine94());
      that.removeLine(getLine96());
      that.removeLine(getLine97());
      that.removeLine(getLine98());
      that.removeLine(getLine99());
      that.removeLine(getLine112());
      that.removeLine(getLine114());
     that.unHighlightElement(MINE413CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE413CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE413CoopPlan1element, category);
}
      MINE413CoopPlan1flag=false
  }
};
$scope.MINE414CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE414CoopPlan1Time <= 200) { 
        MINE414CoopPlan1Time = currentTime;
        return;
    }
MINE414CoopPlan1Time = currentTime;
  var MINE414CoopPlan1element = document.getElementById("MINE414CoopPlan1");
 if (!MINE414CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE414CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE414CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE414CoopPlan1")[i];
        if (MINE414CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE414CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine95());
      that.addLine(getLine100());
      that.addLine(getLine101());
      that.addLine(getLine102());
      that.addLine(getLine104());
      that.addLine(getLine113());
     that.highlightElement(MINE414CoopPlan1element, "EngineeringSciences");
     that.addToClicked("MINE414CoopPlan1", "EngineeringSciences");
      MINE414CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine95());
      that.removeLine(getLine100());
      that.removeLine(getLine101());
      that.removeLine(getLine102());
      that.removeLine(getLine104());
      that.removeLine(getLine113());
     that.unHighlightElement(MINE414CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE414CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE414CoopPlan1element, category);
}
      MINE414CoopPlan1flag=false
  }
};
$scope.ComplementaryElectiveCoopPlan11Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlan11Time <= 200) { 
        ComplementaryElectiveCoopPlan11Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlan11Time = currentTime;
  var ComplementaryElectiveCoopPlan11element = document.getElementById("ComplementaryElectiveCoopPlan11");
 if (!ComplementaryElectiveCoopPlan11flag) {
     if (that.CoopPlan1ClickedMap.get("ComplementaryElectiveCoopPlan11").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ComplementaryElectiveCoopPlan11").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ComplementaryElectiveCoopPlan11")[i];
        if (ComplementaryElectiveCoopPlan11element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlan11element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlan11element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlan11", "COMP");
      ComplementaryElectiveCoopPlan11flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlan11element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlan11", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlan11element, category);
}
      ComplementaryElectiveCoopPlan11flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan11Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan11Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan11Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan11Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan11element = document.getElementById("ProgramTechnicalElectiveCoopPlan11");
 if (!ProgramTechnicalElectiveCoopPlan11flag) {
     if (that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan11").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan11").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan11")[i];
        if (ProgramTechnicalElectiveCoopPlan11element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan11element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan11element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan11", "PROG");
      ProgramTechnicalElectiveCoopPlan11flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan11element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan11", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan11element, category);
}
      ProgramTechnicalElectiveCoopPlan11flag=false
  }
};
$scope.ENGG400CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400CoopPlan1Time <= 200) { 
        ENGG400CoopPlan1Time = currentTime;
        return;
    }
ENGG400CoopPlan1Time = currentTime;
  var ENGG400CoopPlan1element = document.getElementById("ENGG400CoopPlan1");
 if (!ENGG400CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ENGG400CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ENGG400CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ENGG400CoopPlan1")[i];
        if (ENGG400CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400CoopPlan1element, "EngineeringProfession");
     that.addToClicked("ENGG400CoopPlan1", "EngineeringProfession");
      ENGG400CoopPlan1flag=true
  }
 else {
     that.unHighlightElement(ENGG400CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400CoopPlan1element, category);
}
      ENGG400CoopPlan1flag=false
  }
};
$scope.MINE403CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE403CoopPlan1Time <= 200) { 
        MINE403CoopPlan1Time = currentTime;
        return;
    }
MINE403CoopPlan1Time = currentTime;
  var MINE403CoopPlan1element = document.getElementById("MINE403CoopPlan1");
 if (!MINE403CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE403CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE403CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE403CoopPlan1")[i];
        if (MINE403CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE403CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine103());
     that.highlightElement(MINE403CoopPlan1element, "EngineeringDesign");
     that.addToClicked("MINE403CoopPlan1", "EngineeringDesign");
      MINE403CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine103());
     that.unHighlightElement(MINE403CoopPlan1element, "EngineeringDesign");
     var category = that.removeFromClicked("MINE403CoopPlan1", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MINE403CoopPlan1element, category);
}
      MINE403CoopPlan1flag=false
  }
};
$scope.MINE407CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE407CoopPlan1Time <= 200) { 
        MINE407CoopPlan1Time = currentTime;
        return;
    }
MINE407CoopPlan1Time = currentTime;
  var MINE407CoopPlan1element = document.getElementById("MINE407CoopPlan1");
 if (!MINE407CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE407CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE407CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE407CoopPlan1")[i];
        if (MINE407CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE407CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine104());
      that.addLine(getLine105());
      that.addLine(getLine106());
      that.addLine(getLine107());
     that.highlightElement(MINE407CoopPlan1element, "EngineeringSciences");
     that.addToClicked("MINE407CoopPlan1", "EngineeringSciences");
      MINE407CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine104());
      that.removeLine(getLine105());
      that.removeLine(getLine106());
      that.removeLine(getLine107());
     that.unHighlightElement(MINE407CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE407CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE407CoopPlan1element, category);
}
      MINE407CoopPlan1flag=false
  }
};
$scope.MINE408CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE408CoopPlan1Time <= 200) { 
        MINE408CoopPlan1Time = currentTime;
        return;
    }
MINE408CoopPlan1Time = currentTime;
  var MINE408CoopPlan1element = document.getElementById("MINE408CoopPlan1");
 if (!MINE408CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE408CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE408CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE408CoopPlan1")[i];
        if (MINE408CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE408CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine108());
      that.addLine(getLine109());
      that.addLine(getLine110());
     that.highlightElement(MINE408CoopPlan1element, "EngineeringProfession");
     that.addToClicked("MINE408CoopPlan1", "EngineeringProfession");
      MINE408CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine108());
      that.removeLine(getLine109());
      that.removeLine(getLine110());
     that.unHighlightElement(MINE408CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("MINE408CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(MINE408CoopPlan1element, category);
}
      MINE408CoopPlan1flag=false
  }
};
$scope.MINE420CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE420CoopPlan1Time <= 200) { 
        MINE420CoopPlan1Time = currentTime;
        return;
    }
MINE420CoopPlan1Time = currentTime;
  var MINE420CoopPlan1element = document.getElementById("MINE420CoopPlan1");
 if (!MINE420CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE420CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE420CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE420CoopPlan1")[i];
        if (MINE420CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE420CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine111());
      that.addLine(getLine112());
      that.addLine(getLine113());
     that.highlightElement(MINE420CoopPlan1element, "EngineeringSciences");
     that.addToClicked("MINE420CoopPlan1", "EngineeringSciences");
      MINE420CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine111());
      that.removeLine(getLine112());
      that.removeLine(getLine113());
     that.unHighlightElement(MINE420CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE420CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE420CoopPlan1element, category);
}
      MINE420CoopPlan1flag=false
  }
};
$scope.MINE422CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE422CoopPlan1Time <= 200) { 
        MINE422CoopPlan1Time = currentTime;
        return;
    }
MINE422CoopPlan1Time = currentTime;
  var MINE422CoopPlan1element = document.getElementById("MINE422CoopPlan1");
 if (!MINE422CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MINE422CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MINE422CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MINE422CoopPlan1")[i];
        if (MINE422CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE422CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine107());
      that.addLine(getLine114());
     that.highlightElement(MINE422CoopPlan1element, "EngineeringProfession");
     that.addToClicked("MINE422CoopPlan1", "EngineeringProfession");
      MINE422CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine107());
      that.removeLine(getLine114());
     that.unHighlightElement(MINE422CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("MINE422CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(MINE422CoopPlan1element, category);
}
      MINE422CoopPlan1flag=false
  }
};
$scope.CHEM103CoopPlan1RCListener = function () {
  var element = document.getElementById("CHEM103CoopPlan1desc");
 if (!CHEM103CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103CoopPlan1rflag=false
  }
};
$scope.ENGG100CoopPlan1RCListener = function () {
  var element = document.getElementById("ENGG100CoopPlan1desc");
 if (!ENGG100CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100CoopPlan1rflag=false
  }
};
$scope.ENGG130CoopPlan1RCListener = function () {
  var element = document.getElementById("ENGG130CoopPlan1desc");
 if (!ENGG130CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130CoopPlan1rflag=false
  }
};
$scope.ENGL199CoopPlan1RCListener = function () {
  var element = document.getElementById("ENGL199CoopPlan1desc");
 if (!ENGL199CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199CoopPlan1rflag=false
  }
};
$scope.MATH100CoopPlan1RCListener = function () {
  var element = document.getElementById("MATH100CoopPlan1desc");
 if (!MATH100CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100CoopPlan1rflag=false
  }
};
$scope.PHYS130CoopPlan1RCListener = function () {
  var element = document.getElementById("PHYS130CoopPlan1desc");
 if (!PHYS130CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130CoopPlan1rflag=false
  }
};
$scope.CHEM105CoopPlan1RCListener = function () {
  var element = document.getElementById("CHEM105CoopPlan1desc");
 if (!CHEM105CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105CoopPlan1rflag=false
  }
};
$scope.ENCMP100CoopPlan1RCListener = function () {
  var element = document.getElementById("ENCMP100CoopPlan1desc");
 if (!ENCMP100CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100CoopPlan1rflag=false
  }
};
$scope.ENGG160CoopPlan1RCListener = function () {
  var element = document.getElementById("ENGG160CoopPlan1desc");
 if (!ENGG160CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160CoopPlan1rflag=false
  }
};
$scope.ENPH131CoopPlan1RCListener = function () {
  var element = document.getElementById("ENPH131CoopPlan1desc");
 if (!ENPH131CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131CoopPlan1rflag=false
  }
};
$scope.MATH101CoopPlan1RCListener = function () {
  var element = document.getElementById("MATH101CoopPlan1desc");
 if (!MATH101CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101CoopPlan1rflag=false
  }
};
$scope.MATH102CoopPlan1RCListener = function () {
  var element = document.getElementById("MATH102CoopPlan1desc");
 if (!MATH102CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102CoopPlan1rflag=false
  }
};
$scope.CIVE265CoopPlan1RCListener = function () {
  var element = document.getElementById("CIVE265CoopPlan1desc");
 if (!CIVE265CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE265CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE265CoopPlan1rflag=false
  }
};
$scope.EAS210CoopPlan1RCListener = function () {
  var element = document.getElementById("EAS210CoopPlan1desc");
 if (!EAS210CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      EAS210CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      EAS210CoopPlan1rflag=false
  }
};
$scope.ECE209CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE209CoopPlan1desc");
 if (!ECE209CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE209CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE209CoopPlan1rflag=false
  }
};
$scope.ENGG299CoopPlan1RCListener = function () {
  var element = document.getElementById("ENGG299CoopPlan1desc");
 if (!ENGG299CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299CoopPlan1rflag=false
  }
};
$scope.MATH209CoopPlan1RCListener = function () {
  var element = document.getElementById("MATH209CoopPlan1desc");
 if (!MATH209CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209CoopPlan1rflag=false
  }
};
$scope.MINE295CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE295CoopPlan1desc");
 if (!MINE295CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE295CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE295CoopPlan1rflag=false
  }
};
$scope.STAT235CoopPlan1RCListener = function () {
  var element = document.getElementById("STAT235CoopPlan1desc");
 if (!STAT235CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      STAT235CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      STAT235CoopPlan1rflag=false
  }
};
$scope.CHE243CoopPlan1RCListener = function () {
  var element = document.getElementById("CHE243CoopPlan1desc");
 if (!CHE243CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243CoopPlan1rflag=false
  }
};
$scope.CIVE250CoopPlan1RCListener = function () {
  var element = document.getElementById("CIVE250CoopPlan1desc");
 if (!CIVE250CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE250CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE250CoopPlan1rflag=false
  }
};
$scope.CIVE251CoopPlan1RCListener = function () {
  var element = document.getElementById("CIVE251CoopPlan1desc");
 if (!CIVE251CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE251CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE251CoopPlan1rflag=false
  }
};
$scope.CIVE270CoopPlan1RCListener = function () {
  var element = document.getElementById("CIVE270CoopPlan1desc");
 if (!CIVE270CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270CoopPlan1rflag=false
  }
};
$scope.MATH201CoopPlan1RCListener = function () {
  var element = document.getElementById("MATH201CoopPlan1desc");
 if (!MATH201CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201CoopPlan1rflag=false
  }
};
$scope.MINE325CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE325CoopPlan1desc");
 if (!MINE325CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE325CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE325CoopPlan1rflag=false
  }
};
$scope.ITSElectiveCoopPlan10RCListener = function () {
  var element = document.getElementById("ITSElectiveCoopPlan10desc");
 if (!ITSElectiveCoopPlan10rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveCoopPlan10rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveCoopPlan10rflag=false
  }
};
$scope.WKEXP901CoopPlan1RCListener = function () {
  var element = document.getElementById("WKEXP901CoopPlan1desc");
 if (!WKEXP901CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP901CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP901CoopPlan1rflag=false
  }
};
$scope.WKEXP902CoopPlan1RCListener = function () {
  var element = document.getElementById("WKEXP902CoopPlan1desc");
 if (!WKEXP902CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP902CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP902CoopPlan1rflag=false
  }
};
$scope.CIVE381CoopPlan1RCListener = function () {
  var element = document.getElementById("CIVE381CoopPlan1desc");
 if (!CIVE381CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE381CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE381CoopPlan1rflag=false
  }
};
$scope.MINE324CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE324CoopPlan1desc");
 if (!MINE324CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE324CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE324CoopPlan1rflag=false
  }
};
$scope.MINE330CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE330CoopPlan1desc");
 if (!MINE330CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE330CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE330CoopPlan1rflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan10RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlan10desc");
 if (!ComplementaryElectiveCoopPlan10rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlan10rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlan10rflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan10RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan10desc");
 if (!ProgramTechnicalElectiveCoopPlan10rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan10rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan10rflag=false
  }
};
$scope.CIVE330CoopPlan1RCListener = function () {
  var element = document.getElementById("CIVE330CoopPlan1desc");
 if (!CIVE330CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE330CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE330CoopPlan1rflag=false
  }
};
$scope.CHE312CoopPlan1RCListener = function () {
  var element = document.getElementById("CHE312CoopPlan1desc");
 if (!CHE312CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE312CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE312CoopPlan1rflag=false
  }
};
$scope.ENGG404CoopPlan1RCListener = function () {
  var element = document.getElementById("ENGG404CoopPlan1desc");
 if (!ENGG404CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404CoopPlan1rflag=false
  }
};
$scope.ENGM310CoopPlan1RCListener = function () {
  var element = document.getElementById("ENGM310CoopPlan1desc");
 if (!ENGM310CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310CoopPlan1rflag=false
  }
};
$scope.ENGM401CoopPlan1RCListener = function () {
  var element = document.getElementById("ENGM401CoopPlan1desc");
 if (!ENGM401CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401CoopPlan1rflag=false
  }
};
$scope.MINE310CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE310CoopPlan1desc");
 if (!MINE310CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE310CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE310CoopPlan1rflag=false
  }
};
$scope.MINE323CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE323CoopPlan1desc");
 if (!MINE323CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE323CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE323CoopPlan1rflag=false
  }
};
$scope.WKEXP903CoopPlan1RCListener = function () {
  var element = document.getElementById("WKEXP903CoopPlan1desc");
 if (!WKEXP903CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP903CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP903CoopPlan1rflag=false
  }
};
$scope.WKEXP904CoopPlan1RCListener = function () {
  var element = document.getElementById("WKEXP904CoopPlan1desc");
 if (!WKEXP904CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP904CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP904CoopPlan1rflag=false
  }
};
$scope.WKEXP905CoopPlan1RCListener = function () {
  var element = document.getElementById("WKEXP905CoopPlan1desc");
 if (!WKEXP905CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP905CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP905CoopPlan1rflag=false
  }
};
$scope.CME421CoopPlan1RCListener = function () {
  var element = document.getElementById("CME421CoopPlan1desc");
 if (!CME421CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CME421CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CME421CoopPlan1rflag=false
  }
};
$scope.MINE402CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE402CoopPlan1desc");
 if (!MINE402CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE402CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE402CoopPlan1rflag=false
  }
};
$scope.MINE413CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE413CoopPlan1desc");
 if (!MINE413CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE413CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE413CoopPlan1rflag=false
  }
};
$scope.MINE414CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE414CoopPlan1desc");
 if (!MINE414CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE414CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE414CoopPlan1rflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan11RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlan11desc");
 if (!ComplementaryElectiveCoopPlan11rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlan11rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlan11rflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan11RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan11desc");
 if (!ProgramTechnicalElectiveCoopPlan11rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan11rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan11rflag=false
  }
};
$scope.ENGG400CoopPlan1RCListener = function () {
  var element = document.getElementById("ENGG400CoopPlan1desc");
 if (!ENGG400CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400CoopPlan1rflag=false
  }
};
$scope.MINE403CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE403CoopPlan1desc");
 if (!MINE403CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE403CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE403CoopPlan1rflag=false
  }
};
$scope.MINE407CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE407CoopPlan1desc");
 if (!MINE407CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE407CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE407CoopPlan1rflag=false
  }
};
$scope.MINE408CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE408CoopPlan1desc");
 if (!MINE408CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE408CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE408CoopPlan1rflag=false
  }
};
$scope.MINE420CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE420CoopPlan1desc");
 if (!MINE420CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE420CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE420CoopPlan1rflag=false
  }
};
$scope.MINE422CoopPlan1RCListener = function () {
  var element = document.getElementById("MINE422CoopPlan1desc");
 if (!MINE422CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE422CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE422CoopPlan1rflag=false
  }
};
  var CHEM103CoopPlan2flag = false;
  var CHEM103CoopPlan2rflag = false;
 var CHEM103CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("CHEM103CoopPlan2", []);
  var ENGG100CoopPlan2flag = false;
  var ENGG100CoopPlan2rflag = false;
 var ENGG100CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ENGG100CoopPlan2", []);
  var ENGG130CoopPlan2flag = false;
  var ENGG130CoopPlan2rflag = false;
 var ENGG130CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ENGG130CoopPlan2", []);
  var ENGL199CoopPlan2flag = false;
  var ENGL199CoopPlan2rflag = false;
 var ENGL199CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ENGL199CoopPlan2", []);
  var MATH100CoopPlan2flag = false;
  var MATH100CoopPlan2rflag = false;
 var MATH100CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MATH100CoopPlan2", []);
  var PHYS130CoopPlan2flag = false;
  var PHYS130CoopPlan2rflag = false;
 var PHYS130CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("PHYS130CoopPlan2", []);
  var CHEM105CoopPlan2flag = false;
  var CHEM105CoopPlan2rflag = false;
 var CHEM105CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("CHEM105CoopPlan2", []);
  var ENCMP100CoopPlan2flag = false;
  var ENCMP100CoopPlan2rflag = false;
 var ENCMP100CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ENCMP100CoopPlan2", []);
  var ENGG160CoopPlan2flag = false;
  var ENGG160CoopPlan2rflag = false;
 var ENGG160CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ENGG160CoopPlan2", []);
  var ENPH131CoopPlan2flag = false;
  var ENPH131CoopPlan2rflag = false;
 var ENPH131CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ENPH131CoopPlan2", []);
  var MATH101CoopPlan2flag = false;
  var MATH101CoopPlan2rflag = false;
 var MATH101CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MATH101CoopPlan2", []);
  var MATH102CoopPlan2flag = false;
  var MATH102CoopPlan2rflag = false;
 var MATH102CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MATH102CoopPlan2", []);
  var CIVE265CoopPlan2flag = false;
  var CIVE265CoopPlan2rflag = false;
 var CIVE265CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("CIVE265CoopPlan2", []);
  var EAS210CoopPlan2flag = false;
  var EAS210CoopPlan2rflag = false;
 var EAS210CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("EAS210CoopPlan2", []);
  var ECE209CoopPlan2flag = false;
  var ECE209CoopPlan2rflag = false;
 var ECE209CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ECE209CoopPlan2", []);
  var ENGG299CoopPlan2flag = false;
  var ENGG299CoopPlan2rflag = false;
 var ENGG299CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ENGG299CoopPlan2", []);
  var MATH209CoopPlan2flag = false;
  var MATH209CoopPlan2rflag = false;
 var MATH209CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MATH209CoopPlan2", []);
  var MINE295CoopPlan2flag = false;
  var MINE295CoopPlan2rflag = false;
 var MINE295CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE295CoopPlan2", []);
  var STAT235CoopPlan2flag = false;
  var STAT235CoopPlan2rflag = false;
 var STAT235CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("STAT235CoopPlan2", []);
  var WKEXP901CoopPlan2flag = false;
  var WKEXP901CoopPlan2rflag = false;
 var WKEXP901CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("WKEXP901CoopPlan2", []);
  var CHE243CoopPlan2flag = false;
  var CHE243CoopPlan2rflag = false;
 var CHE243CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("CHE243CoopPlan2", []);
  var CIVE250CoopPlan2flag = false;
  var CIVE250CoopPlan2rflag = false;
 var CIVE250CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("CIVE250CoopPlan2", []);
  var CIVE251CoopPlan2flag = false;
  var CIVE251CoopPlan2rflag = false;
 var CIVE251CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("CIVE251CoopPlan2", []);
  var CIVE270CoopPlan2flag = false;
  var CIVE270CoopPlan2rflag = false;
 var CIVE270CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("CIVE270CoopPlan2", []);
  var MATH201CoopPlan2flag = false;
  var MATH201CoopPlan2rflag = false;
 var MATH201CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MATH201CoopPlan2", []);
  var MINE325CoopPlan2flag = false;
  var MINE325CoopPlan2rflag = false;
 var MINE325CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE325CoopPlan2", []);
  var ITSElectiveCoopPlan20flag = false;
  var ITSElectiveCoopPlan20rflag = false;
 var ITSElectiveCoopPlan20Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ITSElectiveCoopPlan20", []);
  var CIVE330CoopPlan2flag = false;
  var CIVE330CoopPlan2rflag = false;
 var CIVE330CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("CIVE330CoopPlan2", []);
  var CHE312CoopPlan2flag = false;
  var CHE312CoopPlan2rflag = false;
 var CHE312CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("CHE312CoopPlan2", []);
  var MINE324CoopPlan2flag = false;
  var MINE324CoopPlan2rflag = false;
 var MINE324CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE324CoopPlan2", []);
  var MINE330CoopPlan2flag = false;
  var MINE330CoopPlan2rflag = false;
 var MINE330CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE330CoopPlan2", []);
  var ComplementaryElectiveCoopPlan20flag = false;
  var ComplementaryElectiveCoopPlan20rflag = false;
 var ComplementaryElectiveCoopPlan20Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ComplementaryElectiveCoopPlan20", []);
  var ProgramTechnicalElectiveCoopPlan20flag = false;
  var ProgramTechnicalElectiveCoopPlan20rflag = false;
 var ProgramTechnicalElectiveCoopPlan20Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ProgramTechnicalElectiveCoopPlan20", []);
  var WKEXP902CoopPlan2flag = false;
  var WKEXP902CoopPlan2rflag = false;
 var WKEXP902CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("WKEXP902CoopPlan2", []);
  var WKEXP903CoopPlan2flag = false;
  var WKEXP903CoopPlan2rflag = false;
 var WKEXP903CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("WKEXP903CoopPlan2", []);
  var CIVE381CoopPlan2flag = false;
  var CIVE381CoopPlan2rflag = false;
 var CIVE381CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("CIVE381CoopPlan2", []);
  var CME421CoopPlan2flag = false;
  var CME421CoopPlan2rflag = false;
 var CME421CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("CME421CoopPlan2", []);
  var ENGM310CoopPlan2flag = false;
  var ENGM310CoopPlan2rflag = false;
 var ENGM310CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ENGM310CoopPlan2", []);
  var ENGM401CoopPlan2flag = false;
  var ENGM401CoopPlan2rflag = false;
 var ENGM401CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ENGM401CoopPlan2", []);
  var MINE310CoopPlan2flag = false;
  var MINE310CoopPlan2rflag = false;
 var MINE310CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE310CoopPlan2", []);
  var MINE323CoopPlan2flag = false;
  var MINE323CoopPlan2rflag = false;
 var MINE323CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE323CoopPlan2", []);
  var WKEXP904CoopPlan2flag = false;
  var WKEXP904CoopPlan2rflag = false;
 var WKEXP904CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("WKEXP904CoopPlan2", []);
  var WKEXP905CoopPlan2flag = false;
  var WKEXP905CoopPlan2rflag = false;
 var WKEXP905CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("WKEXP905CoopPlan2", []);
  var ENGG404CoopPlan2flag = false;
  var ENGG404CoopPlan2rflag = false;
 var ENGG404CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ENGG404CoopPlan2", []);
  var MINE402CoopPlan2flag = false;
  var MINE402CoopPlan2rflag = false;
 var MINE402CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE402CoopPlan2", []);
  var MINE413CoopPlan2flag = false;
  var MINE413CoopPlan2rflag = false;
 var MINE413CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE413CoopPlan2", []);
  var MINE414CoopPlan2flag = false;
  var MINE414CoopPlan2rflag = false;
 var MINE414CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE414CoopPlan2", []);
  var ComplementaryElectiveCoopPlan21flag = false;
  var ComplementaryElectiveCoopPlan21rflag = false;
 var ComplementaryElectiveCoopPlan21Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ComplementaryElectiveCoopPlan21", []);
  var ProgramTechnicalElectiveCoopPlan21flag = false;
  var ProgramTechnicalElectiveCoopPlan21rflag = false;
 var ProgramTechnicalElectiveCoopPlan21Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ProgramTechnicalElectiveCoopPlan21", []);
  var ENGG400CoopPlan2flag = false;
  var ENGG400CoopPlan2rflag = false;
 var ENGG400CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("ENGG400CoopPlan2", []);
  var MINE403CoopPlan2flag = false;
  var MINE403CoopPlan2rflag = false;
 var MINE403CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE403CoopPlan2", []);
  var MINE407CoopPlan2flag = false;
  var MINE407CoopPlan2rflag = false;
 var MINE407CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE407CoopPlan2", []);
  var MINE408CoopPlan2flag = false;
  var MINE408CoopPlan2rflag = false;
 var MINE408CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE408CoopPlan2", []);
  var MINE420CoopPlan2flag = false;
  var MINE420CoopPlan2rflag = false;
 var MINE420CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE420CoopPlan2", []);
  var MINE422CoopPlan2flag = false;
  var MINE422CoopPlan2rflag = false;
 var MINE422CoopPlan2Time = new Date().getTime();
this.CoopPlan2ClickedMap.set("MINE422CoopPlan2", []);
$scope.CHEM103CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103CoopPlan2Time <= 200) { 
        CHEM103CoopPlan2Time = currentTime;
        return;
    }
CHEM103CoopPlan2Time = currentTime;
  var CHEM103CoopPlan2element = document.getElementById("CHEM103CoopPlan2");
 if (!CHEM103CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("CHEM103CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("CHEM103CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("CHEM103CoopPlan2")[i];
        if (CHEM103CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine117());
     that.highlightElement(CHEM103CoopPlan2element, "NaturalSciences");
     that.addToClicked("CHEM103CoopPlan2", "NaturalSciences");
      CHEM103CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine117());
     that.unHighlightElement(CHEM103CoopPlan2element, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103CoopPlan2", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103CoopPlan2element, category);
}
      CHEM103CoopPlan2flag=false
  }
};
$scope.ENGG100CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100CoopPlan2Time <= 200) { 
        ENGG100CoopPlan2Time = currentTime;
        return;
    }
ENGG100CoopPlan2Time = currentTime;
  var ENGG100CoopPlan2element = document.getElementById("ENGG100CoopPlan2");
 if (!ENGG100CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("ENGG100CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ENGG100CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ENGG100CoopPlan2")[i];
        if (ENGG100CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100CoopPlan2element, "EngineeringProfession");
     that.addToClicked("ENGG100CoopPlan2", "EngineeringProfession");
      ENGG100CoopPlan2flag=true
  }
 else {
     that.unHighlightElement(ENGG100CoopPlan2element, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100CoopPlan2", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100CoopPlan2element, category);
}
      ENGG100CoopPlan2flag=false
  }
};
$scope.ENGG130CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130CoopPlan2Time <= 200) { 
        ENGG130CoopPlan2Time = currentTime;
        return;
    }
ENGG130CoopPlan2Time = currentTime;
  var ENGG130CoopPlan2element = document.getElementById("ENGG130CoopPlan2");
 if (!ENGG130CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("ENGG130CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ENGG130CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ENGG130CoopPlan2")[i];
        if (ENGG130CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine115());
      that.addLine(getLine120());
      that.addLine(getLine133());
     that.highlightElement(ENGG130CoopPlan2element, "NaturalSciences");
     that.addToClicked("ENGG130CoopPlan2", "NaturalSciences");
      ENGG130CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine115());
      that.removeLine(getLine120());
      that.removeLine(getLine133());
     that.unHighlightElement(ENGG130CoopPlan2element, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130CoopPlan2", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130CoopPlan2element, category);
}
      ENGG130CoopPlan2flag=false
  }
};
$scope.ENGL199CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199CoopPlan2Time <= 200) { 
        ENGL199CoopPlan2Time = currentTime;
        return;
    }
ENGL199CoopPlan2Time = currentTime;
  var ENGL199CoopPlan2element = document.getElementById("ENGL199CoopPlan2");
 if (!ENGL199CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("ENGL199CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ENGL199CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ENGL199CoopPlan2")[i];
        if (ENGL199CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine118());
     that.highlightElement(ENGL199CoopPlan2element, "Other");
     that.addToClicked("ENGL199CoopPlan2", "Other");
      ENGL199CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine118());
     that.unHighlightElement(ENGL199CoopPlan2element, "Other");
     var category = that.removeFromClicked("ENGL199CoopPlan2", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199CoopPlan2element, category);
}
      ENGL199CoopPlan2flag=false
  }
};
$scope.MATH100CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100CoopPlan2Time <= 200) { 
        MATH100CoopPlan2Time = currentTime;
        return;
    }
MATH100CoopPlan2Time = currentTime;
  var MATH100CoopPlan2element = document.getElementById("MATH100CoopPlan2");
 if (!MATH100CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MATH100CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MATH100CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MATH100CoopPlan2")[i];
        if (MATH100CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine115());
      that.addLine(getLine116());
      that.addLine(getLine119());
      that.addLine(getLine122());
      that.addLine(getLine123());
      that.addLine(getLine126());
     that.highlightElement(MATH100CoopPlan2element, "Math");
     that.addToClicked("MATH100CoopPlan2", "Math");
      MATH100CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine115());
      that.removeLine(getLine116());
      that.removeLine(getLine119());
      that.removeLine(getLine122());
      that.removeLine(getLine123());
      that.removeLine(getLine126());
     that.unHighlightElement(MATH100CoopPlan2element, "Math");
     var category = that.removeFromClicked("MATH100CoopPlan2", "Math");
  if (category != "") { 
     that.highlightElement(MATH100CoopPlan2element, category);
}
      MATH100CoopPlan2flag=false
  }
};
$scope.PHYS130CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130CoopPlan2Time <= 200) { 
        PHYS130CoopPlan2Time = currentTime;
        return;
    }
PHYS130CoopPlan2Time = currentTime;
  var PHYS130CoopPlan2element = document.getElementById("PHYS130CoopPlan2");
 if (!PHYS130CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("PHYS130CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("PHYS130CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("PHYS130CoopPlan2")[i];
        if (PHYS130CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine116());
     that.highlightElement(PHYS130CoopPlan2element, "NaturalSciences");
     that.addToClicked("PHYS130CoopPlan2", "NaturalSciences");
      PHYS130CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine116());
     that.unHighlightElement(PHYS130CoopPlan2element, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130CoopPlan2", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130CoopPlan2element, category);
}
      PHYS130CoopPlan2flag=false
  }
};
$scope.CHEM105CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105CoopPlan2Time <= 200) { 
        CHEM105CoopPlan2Time = currentTime;
        return;
    }
CHEM105CoopPlan2Time = currentTime;
  var CHEM105CoopPlan2element = document.getElementById("CHEM105CoopPlan2");
 if (!CHEM105CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("CHEM105CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("CHEM105CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("CHEM105CoopPlan2")[i];
        if (CHEM105CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine117());
     that.highlightElement(CHEM105CoopPlan2element, "NaturalSciences");
     that.addToClicked("CHEM105CoopPlan2", "NaturalSciences");
      CHEM105CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine117());
     that.unHighlightElement(CHEM105CoopPlan2element, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105CoopPlan2", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105CoopPlan2element, category);
}
      CHEM105CoopPlan2flag=false
  }
};
$scope.ENCMP100CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100CoopPlan2Time <= 200) { 
        ENCMP100CoopPlan2Time = currentTime;
        return;
    }
ENCMP100CoopPlan2Time = currentTime;
  var ENCMP100CoopPlan2element = document.getElementById("ENCMP100CoopPlan2");
 if (!ENCMP100CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("ENCMP100CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ENCMP100CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ENCMP100CoopPlan2")[i];
        if (ENCMP100CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENCMP100CoopPlan2element, "NaturalSciences");
     that.addToClicked("ENCMP100CoopPlan2", "NaturalSciences");
      ENCMP100CoopPlan2flag=true
  }
 else {
     that.unHighlightElement(ENCMP100CoopPlan2element, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100CoopPlan2", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100CoopPlan2element, category);
}
      ENCMP100CoopPlan2flag=false
  }
};
$scope.ENGG160CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160CoopPlan2Time <= 200) { 
        ENGG160CoopPlan2Time = currentTime;
        return;
    }
ENGG160CoopPlan2Time = currentTime;
  var ENGG160CoopPlan2element = document.getElementById("ENGG160CoopPlan2");
 if (!ENGG160CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("ENGG160CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ENGG160CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ENGG160CoopPlan2")[i];
        if (ENGG160CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine118());
     that.highlightElement(ENGG160CoopPlan2element, "EngineeringDesign");
     that.addToClicked("ENGG160CoopPlan2", "EngineeringDesign");
      ENGG160CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine118());
     that.unHighlightElement(ENGG160CoopPlan2element, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160CoopPlan2", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160CoopPlan2element, category);
}
      ENGG160CoopPlan2flag=false
  }
};
$scope.ENPH131CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131CoopPlan2Time <= 200) { 
        ENPH131CoopPlan2Time = currentTime;
        return;
    }
ENPH131CoopPlan2Time = currentTime;
  var ENPH131CoopPlan2element = document.getElementById("ENPH131CoopPlan2");
 if (!ENPH131CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("ENPH131CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ENPH131CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ENPH131CoopPlan2")[i];
        if (ENPH131CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine119());
      that.addLine(getLine120());
      that.addLine(getLine121());
      that.addLine(getLine141());
     that.highlightElement(ENPH131CoopPlan2element, "NaturalSciences");
     that.addToClicked("ENPH131CoopPlan2", "NaturalSciences");
      ENPH131CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine119());
      that.removeLine(getLine120());
      that.removeLine(getLine121());
      that.removeLine(getLine141());
     that.unHighlightElement(ENPH131CoopPlan2element, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131CoopPlan2", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131CoopPlan2element, category);
}
      ENPH131CoopPlan2flag=false
  }
};
$scope.MATH101CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101CoopPlan2Time <= 200) { 
        MATH101CoopPlan2Time = currentTime;
        return;
    }
MATH101CoopPlan2Time = currentTime;
  var MATH101CoopPlan2element = document.getElementById("MATH101CoopPlan2");
 if (!MATH101CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MATH101CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MATH101CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MATH101CoopPlan2")[i];
        if (MATH101CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine121());
      that.addLine(getLine122());
      that.addLine(getLine124());
      that.addLine(getLine127());
      that.addLine(getLine129());
      that.addLine(getLine130());
      that.addLine(getLine134());
     that.highlightElement(MATH101CoopPlan2element, "Math");
     that.addToClicked("MATH101CoopPlan2", "Math");
      MATH101CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine121());
      that.removeLine(getLine122());
      that.removeLine(getLine124());
      that.removeLine(getLine127());
      that.removeLine(getLine129());
      that.removeLine(getLine130());
      that.removeLine(getLine134());
     that.unHighlightElement(MATH101CoopPlan2element, "Math");
     var category = that.removeFromClicked("MATH101CoopPlan2", "Math");
  if (category != "") { 
     that.highlightElement(MATH101CoopPlan2element, category);
}
      MATH101CoopPlan2flag=false
  }
};
$scope.MATH102CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102CoopPlan2Time <= 200) { 
        MATH102CoopPlan2Time = currentTime;
        return;
    }
MATH102CoopPlan2Time = currentTime;
  var MATH102CoopPlan2element = document.getElementById("MATH102CoopPlan2");
 if (!MATH102CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MATH102CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MATH102CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MATH102CoopPlan2")[i];
        if (MATH102CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine123());
      that.addLine(getLine125());
      that.addLine(getLine131());
     that.highlightElement(MATH102CoopPlan2element, "Math");
     that.addToClicked("MATH102CoopPlan2", "Math");
      MATH102CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine123());
      that.removeLine(getLine125());
      that.removeLine(getLine131());
     that.unHighlightElement(MATH102CoopPlan2element, "Math");
     var category = that.removeFromClicked("MATH102CoopPlan2", "Math");
  if (category != "") { 
     that.highlightElement(MATH102CoopPlan2element, category);
}
      MATH102CoopPlan2flag=false
  }
};
$scope.CIVE265CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE265CoopPlan2Time <= 200) { 
        CIVE265CoopPlan2Time = currentTime;
        return;
    }
CIVE265CoopPlan2Time = currentTime;
  var CIVE265CoopPlan2element = document.getElementById("CIVE265CoopPlan2");
 if (!CIVE265CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("CIVE265CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("CIVE265CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("CIVE265CoopPlan2")[i];
        if (CIVE265CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE265CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine137());
     that.highlightElement(CIVE265CoopPlan2element, "EngineeringDesign");
     that.addToClicked("CIVE265CoopPlan2", "EngineeringDesign");
      CIVE265CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine137());
     that.unHighlightElement(CIVE265CoopPlan2element, "EngineeringDesign");
     var category = that.removeFromClicked("CIVE265CoopPlan2", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(CIVE265CoopPlan2element, category);
}
      CIVE265CoopPlan2flag=false
  }
};
$scope.EAS210CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - EAS210CoopPlan2Time <= 200) { 
        EAS210CoopPlan2Time = currentTime;
        return;
    }
EAS210CoopPlan2Time = currentTime;
  var EAS210CoopPlan2element = document.getElementById("EAS210CoopPlan2");
 if (!EAS210CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("EAS210CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("EAS210CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("EAS210CoopPlan2")[i];
        if (EAS210CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(EAS210CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine149());
     that.highlightElement(EAS210CoopPlan2element, "NaturalSciences");
     that.addToClicked("EAS210CoopPlan2", "NaturalSciences");
      EAS210CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine149());
     that.unHighlightElement(EAS210CoopPlan2element, "NaturalSciences");
     var category = that.removeFromClicked("EAS210CoopPlan2", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS210CoopPlan2element, category);
}
      EAS210CoopPlan2flag=false
  }
};
$scope.ECE209CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE209CoopPlan2Time <= 200) { 
        ECE209CoopPlan2Time = currentTime;
        return;
    }
ECE209CoopPlan2Time = currentTime;
  var ECE209CoopPlan2element = document.getElementById("ECE209CoopPlan2");
 if (!ECE209CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("ECE209CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ECE209CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ECE209CoopPlan2")[i];
        if (ECE209CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE209CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine146());
     that.highlightElement(ECE209CoopPlan2element, "EngineeringSciences");
     that.addToClicked("ECE209CoopPlan2", "EngineeringSciences");
      ECE209CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine146());
     that.unHighlightElement(ECE209CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE209CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE209CoopPlan2element, category);
}
      ECE209CoopPlan2flag=false
  }
};
$scope.ENGG299CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299CoopPlan2Time <= 200) { 
        ENGG299CoopPlan2Time = currentTime;
        return;
    }
ENGG299CoopPlan2Time = currentTime;
  var ENGG299CoopPlan2element = document.getElementById("ENGG299CoopPlan2");
 if (!ENGG299CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("ENGG299CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ENGG299CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ENGG299CoopPlan2")[i];
        if (ENGG299CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG299CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine128());
     that.highlightElement(ENGG299CoopPlan2element, "EngineeringProfession");
     that.addToClicked("ENGG299CoopPlan2", "EngineeringProfession");
      ENGG299CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine128());
     that.unHighlightElement(ENGG299CoopPlan2element, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299CoopPlan2", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299CoopPlan2element, category);
}
      ENGG299CoopPlan2flag=false
  }
};
$scope.MATH209CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209CoopPlan2Time <= 200) { 
        MATH209CoopPlan2Time = currentTime;
        return;
    }
MATH209CoopPlan2Time = currentTime;
  var MATH209CoopPlan2element = document.getElementById("MATH209CoopPlan2");
 if (!MATH209CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MATH209CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MATH209CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MATH209CoopPlan2")[i];
        if (MATH209CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine124());
      that.addLine(getLine125());
      that.addLine(getLine135());
      that.addLine(getLine138());
      that.addLine(getLine142());
     that.highlightElement(MATH209CoopPlan2element, "Math");
     that.addToClicked("MATH209CoopPlan2", "Math");
      MATH209CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine124());
      that.removeLine(getLine125());
      that.removeLine(getLine135());
      that.removeLine(getLine138());
      that.removeLine(getLine142());
     that.unHighlightElement(MATH209CoopPlan2element, "Math");
     var category = that.removeFromClicked("MATH209CoopPlan2", "Math");
  if (category != "") { 
     that.highlightElement(MATH209CoopPlan2element, category);
}
      MATH209CoopPlan2flag=false
  }
};
$scope.MINE295CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE295CoopPlan2Time <= 200) { 
        MINE295CoopPlan2Time = currentTime;
        return;
    }
MINE295CoopPlan2Time = currentTime;
  var MINE295CoopPlan2element = document.getElementById("MINE295CoopPlan2");
 if (!MINE295CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE295CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE295CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE295CoopPlan2")[i];
        if (MINE295CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE295CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine136());
      that.addLine(getLine144());
      that.addLine(getLine145());
     that.highlightElement(MINE295CoopPlan2element, "EngineeringSciences");
     that.addToClicked("MINE295CoopPlan2", "EngineeringSciences");
      MINE295CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine136());
      that.removeLine(getLine144());
      that.removeLine(getLine145());
     that.unHighlightElement(MINE295CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE295CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE295CoopPlan2element, category);
}
      MINE295CoopPlan2flag=false
  }
};
$scope.STAT235CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - STAT235CoopPlan2Time <= 200) { 
        STAT235CoopPlan2Time = currentTime;
        return;
    }
STAT235CoopPlan2Time = currentTime;
  var STAT235CoopPlan2element = document.getElementById("STAT235CoopPlan2");
 if (!STAT235CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("STAT235CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("STAT235CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("STAT235CoopPlan2")[i];
        if (STAT235CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(STAT235CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine126());
      that.addLine(getLine127());
      that.addLine(getLine150());
      that.addLine(getLine170());
     that.highlightElement(STAT235CoopPlan2element, "Math");
     that.addToClicked("STAT235CoopPlan2", "Math");
      STAT235CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine126());
      that.removeLine(getLine127());
      that.removeLine(getLine150());
      that.removeLine(getLine170());
     that.unHighlightElement(STAT235CoopPlan2element, "Math");
     var category = that.removeFromClicked("STAT235CoopPlan2", "Math");
  if (category != "") { 
     that.highlightElement(STAT235CoopPlan2element, category);
}
      STAT235CoopPlan2flag=false
  }
};
$scope.WKEXP901CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP901CoopPlan2Time <= 200) { 
        WKEXP901CoopPlan2Time = currentTime;
        return;
    }
WKEXP901CoopPlan2Time = currentTime;
  var WKEXP901CoopPlan2element = document.getElementById("WKEXP901CoopPlan2");
 if (!WKEXP901CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("WKEXP901CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("WKEXP901CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("WKEXP901CoopPlan2")[i];
        if (WKEXP901CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP901CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine128());
      that.addLine(getLine147());
     that.highlightElement(WKEXP901CoopPlan2element, "EngineeringProfession");
     that.addToClicked("WKEXP901CoopPlan2", "EngineeringProfession");
      WKEXP901CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine128());
      that.removeLine(getLine147());
     that.unHighlightElement(WKEXP901CoopPlan2element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP901CoopPlan2", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP901CoopPlan2element, category);
}
      WKEXP901CoopPlan2flag=false
  }
};
$scope.CHE243CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243CoopPlan2Time <= 200) { 
        CHE243CoopPlan2Time = currentTime;
        return;
    }
CHE243CoopPlan2Time = currentTime;
  var CHE243CoopPlan2element = document.getElementById("CHE243CoopPlan2");
 if (!CHE243CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("CHE243CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("CHE243CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("CHE243CoopPlan2")[i];
        if (CHE243CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine129());
      that.addLine(getLine140());
     that.highlightElement(CHE243CoopPlan2element, "EngineeringSciences");
     that.addToClicked("CHE243CoopPlan2", "EngineeringSciences");
      CHE243CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine129());
      that.removeLine(getLine140());
     that.unHighlightElement(CHE243CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243CoopPlan2element, category);
}
      CHE243CoopPlan2flag=false
  }
};
$scope.CIVE250CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE250CoopPlan2Time <= 200) { 
        CIVE250CoopPlan2Time = currentTime;
        return;
    }
CIVE250CoopPlan2Time = currentTime;
  var CIVE250CoopPlan2element = document.getElementById("CIVE250CoopPlan2");
 if (!CIVE250CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("CIVE250CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("CIVE250CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("CIVE250CoopPlan2")[i];
        if (CIVE250CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE250CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine130());
      that.addLine(getLine131());
      that.addLine(getLine132());
     that.highlightElement(CIVE250CoopPlan2element, "EngineeringSciences");
     that.addToClicked("CIVE250CoopPlan2", "EngineeringSciences");
      CIVE250CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine130());
      that.removeLine(getLine131());
      that.removeLine(getLine132());
     that.unHighlightElement(CIVE250CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE250CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE250CoopPlan2element, category);
}
      CIVE250CoopPlan2flag=false
  }
};
$scope.CIVE251CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE251CoopPlan2Time <= 200) { 
        CIVE251CoopPlan2Time = currentTime;
        return;
    }
CIVE251CoopPlan2Time = currentTime;
  var CIVE251CoopPlan2element = document.getElementById("CIVE251CoopPlan2");
 if (!CIVE251CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("CIVE251CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("CIVE251CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("CIVE251CoopPlan2")[i];
        if (CIVE251CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE251CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine132());
     that.highlightElement(CIVE251CoopPlan2element, "EngineeringSciences");
     that.addToClicked("CIVE251CoopPlan2", "EngineeringSciences");
      CIVE251CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine132());
     that.unHighlightElement(CIVE251CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE251CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE251CoopPlan2element, category);
}
      CIVE251CoopPlan2flag=false
  }
};
$scope.CIVE270CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270CoopPlan2Time <= 200) { 
        CIVE270CoopPlan2Time = currentTime;
        return;
    }
CIVE270CoopPlan2Time = currentTime;
  var CIVE270CoopPlan2element = document.getElementById("CIVE270CoopPlan2");
 if (!CIVE270CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("CIVE270CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("CIVE270CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("CIVE270CoopPlan2")[i];
        if (CIVE270CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine133());
      that.addLine(getLine134());
      that.addLine(getLine151());
      that.addLine(getLine171());
     that.highlightElement(CIVE270CoopPlan2element, "EngineeringSciences");
     that.addToClicked("CIVE270CoopPlan2", "EngineeringSciences");
      CIVE270CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine133());
      that.removeLine(getLine134());
      that.removeLine(getLine151());
      that.removeLine(getLine171());
     that.unHighlightElement(CIVE270CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270CoopPlan2element, category);
}
      CIVE270CoopPlan2flag=false
  }
};
$scope.MATH201CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201CoopPlan2Time <= 200) { 
        MATH201CoopPlan2Time = currentTime;
        return;
    }
MATH201CoopPlan2Time = currentTime;
  var MATH201CoopPlan2element = document.getElementById("MATH201CoopPlan2");
 if (!MATH201CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MATH201CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MATH201CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MATH201CoopPlan2")[i];
        if (MATH201CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine135());
      that.addLine(getLine139());
      that.addLine(getLine143());
     that.highlightElement(MATH201CoopPlan2element, "Math");
     that.addToClicked("MATH201CoopPlan2", "Math");
      MATH201CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine135());
      that.removeLine(getLine139());
      that.removeLine(getLine143());
     that.unHighlightElement(MATH201CoopPlan2element, "Math");
     var category = that.removeFromClicked("MATH201CoopPlan2", "Math");
  if (category != "") { 
     that.highlightElement(MATH201CoopPlan2element, category);
}
      MATH201CoopPlan2flag=false
  }
};
$scope.MINE325CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE325CoopPlan2Time <= 200) { 
        MINE325CoopPlan2Time = currentTime;
        return;
    }
MINE325CoopPlan2Time = currentTime;
  var MINE325CoopPlan2element = document.getElementById("MINE325CoopPlan2");
 if (!MINE325CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE325CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE325CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE325CoopPlan2")[i];
        if (MINE325CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE325CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine136());
      that.addLine(getLine137());
      that.addLine(getLine159());
      that.addLine(getLine162());
     that.highlightElement(MINE325CoopPlan2element, "EngineeringDesign");
     that.addToClicked("MINE325CoopPlan2", "EngineeringDesign");
      MINE325CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine136());
      that.removeLine(getLine137());
      that.removeLine(getLine159());
      that.removeLine(getLine162());
     that.unHighlightElement(MINE325CoopPlan2element, "EngineeringDesign");
     var category = that.removeFromClicked("MINE325CoopPlan2", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MINE325CoopPlan2element, category);
}
      MINE325CoopPlan2flag=false
  }
};
$scope.ITSElectiveCoopPlan20Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveCoopPlan20Time <= 200) { 
        ITSElectiveCoopPlan20Time = currentTime;
        return;
    }
ITSElectiveCoopPlan20Time = currentTime;
  var ITSElectiveCoopPlan20element = document.getElementById("ITSElectiveCoopPlan20");
 if (!ITSElectiveCoopPlan20flag) {
     if (that.CoopPlan2ClickedMap.get("ITSElectiveCoopPlan20").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ITSElectiveCoopPlan20").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ITSElectiveCoopPlan20")[i];
        if (ITSElectiveCoopPlan20element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveCoopPlan20element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveCoopPlan20element, "ITS");
     that.addToClicked("ITSElectiveCoopPlan20", "ITS");
      ITSElectiveCoopPlan20flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveCoopPlan20element, "ITS");
     var category = that.removeFromClicked("ITSElectiveCoopPlan20", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveCoopPlan20element, category);
}
      ITSElectiveCoopPlan20flag=false
  }
};
$scope.CIVE330CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE330CoopPlan2Time <= 200) { 
        CIVE330CoopPlan2Time = currentTime;
        return;
    }
CIVE330CoopPlan2Time = currentTime;
  var CIVE330CoopPlan2element = document.getElementById("CIVE330CoopPlan2");
 if (!CIVE330CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("CIVE330CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("CIVE330CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("CIVE330CoopPlan2")[i];
        if (CIVE330CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE330CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine138());
      that.addLine(getLine139());
      that.addLine(getLine165());
     that.highlightElement(CIVE330CoopPlan2element, "EngineeringSciences");
     that.addToClicked("CIVE330CoopPlan2", "EngineeringSciences");
      CIVE330CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine138());
      that.removeLine(getLine139());
      that.removeLine(getLine165());
     that.unHighlightElement(CIVE330CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE330CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE330CoopPlan2element, category);
}
      CIVE330CoopPlan2flag=false
  }
};
$scope.CHE312CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE312CoopPlan2Time <= 200) { 
        CHE312CoopPlan2Time = currentTime;
        return;
    }
CHE312CoopPlan2Time = currentTime;
  var CHE312CoopPlan2element = document.getElementById("CHE312CoopPlan2");
 if (!CHE312CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("CHE312CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("CHE312CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("CHE312CoopPlan2")[i];
        if (CHE312CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE312CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine140());
      that.addLine(getLine141());
      that.addLine(getLine142());
      that.addLine(getLine143());
      that.addLine(getLine166());
     that.highlightElement(CHE312CoopPlan2element, "EngineeringSciences");
     that.addToClicked("CHE312CoopPlan2", "EngineeringSciences");
      CHE312CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine140());
      that.removeLine(getLine141());
      that.removeLine(getLine142());
      that.removeLine(getLine143());
      that.removeLine(getLine166());
     that.unHighlightElement(CHE312CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("CHE312CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE312CoopPlan2element, category);
}
      CHE312CoopPlan2flag=false
  }
};
$scope.MINE324CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE324CoopPlan2Time <= 200) { 
        MINE324CoopPlan2Time = currentTime;
        return;
    }
MINE324CoopPlan2Time = currentTime;
  var MINE324CoopPlan2element = document.getElementById("MINE324CoopPlan2");
 if (!MINE324CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE324CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE324CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE324CoopPlan2")[i];
        if (MINE324CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE324CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine144());
      that.addLine(getLine161());
     that.highlightElement(MINE324CoopPlan2element, "EngineeringSciences");
     that.addToClicked("MINE324CoopPlan2", "EngineeringSciences");
      MINE324CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine144());
      that.removeLine(getLine161());
     that.unHighlightElement(MINE324CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE324CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE324CoopPlan2element, category);
}
      MINE324CoopPlan2flag=false
  }
};
$scope.MINE330CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE330CoopPlan2Time <= 200) { 
        MINE330CoopPlan2Time = currentTime;
        return;
    }
MINE330CoopPlan2Time = currentTime;
  var MINE330CoopPlan2element = document.getElementById("MINE330CoopPlan2");
 if (!MINE330CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE330CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE330CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE330CoopPlan2")[i];
        if (MINE330CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE330CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine145());
      that.addLine(getLine146());
      that.addLine(getLine157());
     that.highlightElement(MINE330CoopPlan2element, "EngineeringSciences");
     that.addToClicked("MINE330CoopPlan2", "EngineeringSciences");
      MINE330CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine145());
      that.removeLine(getLine146());
      that.removeLine(getLine157());
     that.unHighlightElement(MINE330CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE330CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE330CoopPlan2element, category);
}
      MINE330CoopPlan2flag=false
  }
};
$scope.ComplementaryElectiveCoopPlan20Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlan20Time <= 200) { 
        ComplementaryElectiveCoopPlan20Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlan20Time = currentTime;
  var ComplementaryElectiveCoopPlan20element = document.getElementById("ComplementaryElectiveCoopPlan20");
 if (!ComplementaryElectiveCoopPlan20flag) {
     if (that.CoopPlan2ClickedMap.get("ComplementaryElectiveCoopPlan20").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ComplementaryElectiveCoopPlan20").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ComplementaryElectiveCoopPlan20")[i];
        if (ComplementaryElectiveCoopPlan20element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlan20element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlan20element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlan20", "COMP");
      ComplementaryElectiveCoopPlan20flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlan20element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlan20", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlan20element, category);
}
      ComplementaryElectiveCoopPlan20flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan20Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan20Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan20Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan20Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan20element = document.getElementById("ProgramTechnicalElectiveCoopPlan20");
 if (!ProgramTechnicalElectiveCoopPlan20flag) {
     if (that.CoopPlan2ClickedMap.get("ProgramTechnicalElectiveCoopPlan20").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ProgramTechnicalElectiveCoopPlan20").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ProgramTechnicalElectiveCoopPlan20")[i];
        if (ProgramTechnicalElectiveCoopPlan20element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan20element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan20element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan20", "PROG");
      ProgramTechnicalElectiveCoopPlan20flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan20element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan20", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan20element, category);
}
      ProgramTechnicalElectiveCoopPlan20flag=false
  }
};
$scope.WKEXP902CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP902CoopPlan2Time <= 200) { 
        WKEXP902CoopPlan2Time = currentTime;
        return;
    }
WKEXP902CoopPlan2Time = currentTime;
  var WKEXP902CoopPlan2element = document.getElementById("WKEXP902CoopPlan2");
 if (!WKEXP902CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("WKEXP902CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("WKEXP902CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("WKEXP902CoopPlan2")[i];
        if (WKEXP902CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP902CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine147());
      that.addLine(getLine148());
     that.highlightElement(WKEXP902CoopPlan2element, "EngineeringProfession");
     that.addToClicked("WKEXP902CoopPlan2", "EngineeringProfession");
      WKEXP902CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine147());
      that.removeLine(getLine148());
     that.unHighlightElement(WKEXP902CoopPlan2element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP902CoopPlan2", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP902CoopPlan2element, category);
}
      WKEXP902CoopPlan2flag=false
  }
};
$scope.WKEXP903CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP903CoopPlan2Time <= 200) { 
        WKEXP903CoopPlan2Time = currentTime;
        return;
    }
WKEXP903CoopPlan2Time = currentTime;
  var WKEXP903CoopPlan2element = document.getElementById("WKEXP903CoopPlan2");
 if (!WKEXP903CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("WKEXP903CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("WKEXP903CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("WKEXP903CoopPlan2")[i];
        if (WKEXP903CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP903CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine148());
      that.addLine(getLine152());
     that.highlightElement(WKEXP903CoopPlan2element, "EngineeringProfession");
     that.addToClicked("WKEXP903CoopPlan2", "EngineeringProfession");
      WKEXP903CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine148());
      that.removeLine(getLine152());
     that.unHighlightElement(WKEXP903CoopPlan2element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP903CoopPlan2", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP903CoopPlan2element, category);
}
      WKEXP903CoopPlan2flag=false
  }
};
$scope.CIVE381CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE381CoopPlan2Time <= 200) { 
        CIVE381CoopPlan2Time = currentTime;
        return;
    }
CIVE381CoopPlan2Time = currentTime;
  var CIVE381CoopPlan2element = document.getElementById("CIVE381CoopPlan2");
 if (!CIVE381CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("CIVE381CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("CIVE381CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("CIVE381CoopPlan2")[i];
        if (CIVE381CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE381CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine149());
     that.highlightElement(CIVE381CoopPlan2element, "EngineeringSciences");
     that.addToClicked("CIVE381CoopPlan2", "EngineeringSciences");
      CIVE381CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine149());
     that.unHighlightElement(CIVE381CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE381CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE381CoopPlan2element, category);
}
      CIVE381CoopPlan2flag=false
  }
};
$scope.CME421CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - CME421CoopPlan2Time <= 200) { 
        CME421CoopPlan2Time = currentTime;
        return;
    }
CME421CoopPlan2Time = currentTime;
  var CME421CoopPlan2element = document.getElementById("CME421CoopPlan2");
 if (!CME421CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("CME421CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("CME421CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("CME421CoopPlan2")[i];
        if (CME421CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CME421CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine150());
     that.highlightElement(CME421CoopPlan2element, "EngineeringSciences");
     that.addToClicked("CME421CoopPlan2", "EngineeringSciences");
      CME421CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine150());
     that.unHighlightElement(CME421CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("CME421CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CME421CoopPlan2element, category);
}
      CME421CoopPlan2flag=false
  }
};
$scope.ENGM310CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310CoopPlan2Time <= 200) { 
        ENGM310CoopPlan2Time = currentTime;
        return;
    }
ENGM310CoopPlan2Time = currentTime;
  var ENGM310CoopPlan2element = document.getElementById("ENGM310CoopPlan2");
 if (!ENGM310CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("ENGM310CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ENGM310CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ENGM310CoopPlan2")[i];
        if (ENGM310CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM310CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine168());
     that.highlightElement(ENGM310CoopPlan2element, "Other");
     that.addToClicked("ENGM310CoopPlan2", "Other");
      ENGM310CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine168());
     that.unHighlightElement(ENGM310CoopPlan2element, "Other");
     var category = that.removeFromClicked("ENGM310CoopPlan2", "Other");
  if (category != "") { 
     that.highlightElement(ENGM310CoopPlan2element, category);
}
      ENGM310CoopPlan2flag=false
  }
};
$scope.ENGM401CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401CoopPlan2Time <= 200) { 
        ENGM401CoopPlan2Time = currentTime;
        return;
    }
ENGM401CoopPlan2Time = currentTime;
  var ENGM401CoopPlan2element = document.getElementById("ENGM401CoopPlan2");
 if (!ENGM401CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("ENGM401CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ENGM401CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ENGM401CoopPlan2")[i];
        if (ENGM401CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine169());
     that.highlightElement(ENGM401CoopPlan2element, "Other");
     that.addToClicked("ENGM401CoopPlan2", "Other");
      ENGM401CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine169());
     that.unHighlightElement(ENGM401CoopPlan2element, "Other");
     var category = that.removeFromClicked("ENGM401CoopPlan2", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401CoopPlan2element, category);
}
      ENGM401CoopPlan2flag=false
  }
};
$scope.MINE310CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE310CoopPlan2Time <= 200) { 
        MINE310CoopPlan2Time = currentTime;
        return;
    }
MINE310CoopPlan2Time = currentTime;
  var MINE310CoopPlan2element = document.getElementById("MINE310CoopPlan2");
 if (!MINE310CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE310CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE310CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE310CoopPlan2")[i];
        if (MINE310CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE310CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine156());
     that.highlightElement(MINE310CoopPlan2element, "EngineeringSciences");
     that.addToClicked("MINE310CoopPlan2", "EngineeringSciences");
      MINE310CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine156());
     that.unHighlightElement(MINE310CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE310CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE310CoopPlan2element, category);
}
      MINE310CoopPlan2flag=false
  }
};
$scope.MINE323CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE323CoopPlan2Time <= 200) { 
        MINE323CoopPlan2Time = currentTime;
        return;
    }
MINE323CoopPlan2Time = currentTime;
  var MINE323CoopPlan2element = document.getElementById("MINE323CoopPlan2");
 if (!MINE323CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE323CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE323CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE323CoopPlan2")[i];
        if (MINE323CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE323CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine151());
      that.addLine(getLine158());
      that.addLine(getLine160());
     that.highlightElement(MINE323CoopPlan2element, "EngineeringSciences");
     that.addToClicked("MINE323CoopPlan2", "EngineeringSciences");
      MINE323CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine151());
      that.removeLine(getLine158());
      that.removeLine(getLine160());
     that.unHighlightElement(MINE323CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE323CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE323CoopPlan2element, category);
}
      MINE323CoopPlan2flag=false
  }
};
$scope.WKEXP904CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP904CoopPlan2Time <= 200) { 
        WKEXP904CoopPlan2Time = currentTime;
        return;
    }
WKEXP904CoopPlan2Time = currentTime;
  var WKEXP904CoopPlan2element = document.getElementById("WKEXP904CoopPlan2");
 if (!WKEXP904CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("WKEXP904CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("WKEXP904CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("WKEXP904CoopPlan2")[i];
        if (WKEXP904CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP904CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine152());
      that.addLine(getLine153());
     that.highlightElement(WKEXP904CoopPlan2element, "EngineeringProfession");
     that.addToClicked("WKEXP904CoopPlan2", "EngineeringProfession");
      WKEXP904CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine152());
      that.removeLine(getLine153());
     that.unHighlightElement(WKEXP904CoopPlan2element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP904CoopPlan2", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP904CoopPlan2element, category);
}
      WKEXP904CoopPlan2flag=false
  }
};
$scope.WKEXP905CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP905CoopPlan2Time <= 200) { 
        WKEXP905CoopPlan2Time = currentTime;
        return;
    }
WKEXP905CoopPlan2Time = currentTime;
  var WKEXP905CoopPlan2element = document.getElementById("WKEXP905CoopPlan2");
 if (!WKEXP905CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("WKEXP905CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("WKEXP905CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("WKEXP905CoopPlan2")[i];
        if (WKEXP905CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP905CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine153());
     that.highlightElement(WKEXP905CoopPlan2element, "EngineeringProfession");
     that.addToClicked("WKEXP905CoopPlan2", "EngineeringProfession");
      WKEXP905CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine153());
     that.unHighlightElement(WKEXP905CoopPlan2element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP905CoopPlan2", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP905CoopPlan2element, category);
}
      WKEXP905CoopPlan2flag=false
  }
};
$scope.ENGG404CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404CoopPlan2Time <= 200) { 
        ENGG404CoopPlan2Time = currentTime;
        return;
    }
ENGG404CoopPlan2Time = currentTime;
  var ENGG404CoopPlan2element = document.getElementById("ENGG404CoopPlan2");
 if (!ENGG404CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("ENGG404CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ENGG404CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ENGG404CoopPlan2")[i];
        if (ENGG404CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404CoopPlan2element, "EngineeringProfession");
     that.addToClicked("ENGG404CoopPlan2", "EngineeringProfession");
      ENGG404CoopPlan2flag=true
  }
 else {
     that.unHighlightElement(ENGG404CoopPlan2element, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404CoopPlan2", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404CoopPlan2element, category);
}
      ENGG404CoopPlan2flag=false
  }
};
$scope.MINE402CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE402CoopPlan2Time <= 200) { 
        MINE402CoopPlan2Time = currentTime;
        return;
    }
MINE402CoopPlan2Time = currentTime;
  var MINE402CoopPlan2element = document.getElementById("MINE402CoopPlan2");
 if (!MINE402CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE402CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE402CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE402CoopPlan2")[i];
        if (MINE402CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE402CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine154());
      that.addLine(getLine155());
      that.addLine(getLine163());
     that.highlightElement(MINE402CoopPlan2element, "EngineeringDesign");
     that.addToClicked("MINE402CoopPlan2", "EngineeringDesign");
      MINE402CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine154());
      that.removeLine(getLine155());
      that.removeLine(getLine163());
     that.unHighlightElement(MINE402CoopPlan2element, "EngineeringDesign");
     var category = that.removeFromClicked("MINE402CoopPlan2", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MINE402CoopPlan2element, category);
}
      MINE402CoopPlan2flag=false
  }
};
$scope.MINE413CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE413CoopPlan2Time <= 200) { 
        MINE413CoopPlan2Time = currentTime;
        return;
    }
MINE413CoopPlan2Time = currentTime;
  var MINE413CoopPlan2element = document.getElementById("MINE413CoopPlan2");
 if (!MINE413CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE413CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE413CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE413CoopPlan2")[i];
        if (MINE413CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE413CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine154());
      that.addLine(getLine156());
      that.addLine(getLine157());
      that.addLine(getLine158());
      that.addLine(getLine159());
      that.addLine(getLine172());
      that.addLine(getLine174());
     that.highlightElement(MINE413CoopPlan2element, "EngineeringSciences");
     that.addToClicked("MINE413CoopPlan2", "EngineeringSciences");
      MINE413CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine154());
      that.removeLine(getLine156());
      that.removeLine(getLine157());
      that.removeLine(getLine158());
      that.removeLine(getLine159());
      that.removeLine(getLine172());
      that.removeLine(getLine174());
     that.unHighlightElement(MINE413CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE413CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE413CoopPlan2element, category);
}
      MINE413CoopPlan2flag=false
  }
};
$scope.MINE414CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE414CoopPlan2Time <= 200) { 
        MINE414CoopPlan2Time = currentTime;
        return;
    }
MINE414CoopPlan2Time = currentTime;
  var MINE414CoopPlan2element = document.getElementById("MINE414CoopPlan2");
 if (!MINE414CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE414CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE414CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE414CoopPlan2")[i];
        if (MINE414CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE414CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine155());
      that.addLine(getLine160());
      that.addLine(getLine161());
      that.addLine(getLine162());
      that.addLine(getLine164());
      that.addLine(getLine173());
     that.highlightElement(MINE414CoopPlan2element, "EngineeringSciences");
     that.addToClicked("MINE414CoopPlan2", "EngineeringSciences");
      MINE414CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine155());
      that.removeLine(getLine160());
      that.removeLine(getLine161());
      that.removeLine(getLine162());
      that.removeLine(getLine164());
      that.removeLine(getLine173());
     that.unHighlightElement(MINE414CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE414CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE414CoopPlan2element, category);
}
      MINE414CoopPlan2flag=false
  }
};
$scope.ComplementaryElectiveCoopPlan21Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopPlan21Time <= 200) { 
        ComplementaryElectiveCoopPlan21Time = currentTime;
        return;
    }
ComplementaryElectiveCoopPlan21Time = currentTime;
  var ComplementaryElectiveCoopPlan21element = document.getElementById("ComplementaryElectiveCoopPlan21");
 if (!ComplementaryElectiveCoopPlan21flag) {
     if (that.CoopPlan2ClickedMap.get("ComplementaryElectiveCoopPlan21").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ComplementaryElectiveCoopPlan21").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ComplementaryElectiveCoopPlan21")[i];
        if (ComplementaryElectiveCoopPlan21element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopPlan21element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopPlan21element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopPlan21", "COMP");
      ComplementaryElectiveCoopPlan21flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopPlan21element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopPlan21", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopPlan21element, category);
}
      ComplementaryElectiveCoopPlan21flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan21Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan21Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan21Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan21Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan21element = document.getElementById("ProgramTechnicalElectiveCoopPlan21");
 if (!ProgramTechnicalElectiveCoopPlan21flag) {
     if (that.CoopPlan2ClickedMap.get("ProgramTechnicalElectiveCoopPlan21").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ProgramTechnicalElectiveCoopPlan21").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ProgramTechnicalElectiveCoopPlan21")[i];
        if (ProgramTechnicalElectiveCoopPlan21element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan21element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan21element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan21", "PROG");
      ProgramTechnicalElectiveCoopPlan21flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan21element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan21", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan21element, category);
}
      ProgramTechnicalElectiveCoopPlan21flag=false
  }
};
$scope.ENGG400CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400CoopPlan2Time <= 200) { 
        ENGG400CoopPlan2Time = currentTime;
        return;
    }
ENGG400CoopPlan2Time = currentTime;
  var ENGG400CoopPlan2element = document.getElementById("ENGG400CoopPlan2");
 if (!ENGG400CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("ENGG400CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("ENGG400CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("ENGG400CoopPlan2")[i];
        if (ENGG400CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400CoopPlan2element, "EngineeringProfession");
     that.addToClicked("ENGG400CoopPlan2", "EngineeringProfession");
      ENGG400CoopPlan2flag=true
  }
 else {
     that.unHighlightElement(ENGG400CoopPlan2element, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400CoopPlan2", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400CoopPlan2element, category);
}
      ENGG400CoopPlan2flag=false
  }
};
$scope.MINE403CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE403CoopPlan2Time <= 200) { 
        MINE403CoopPlan2Time = currentTime;
        return;
    }
MINE403CoopPlan2Time = currentTime;
  var MINE403CoopPlan2element = document.getElementById("MINE403CoopPlan2");
 if (!MINE403CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE403CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE403CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE403CoopPlan2")[i];
        if (MINE403CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE403CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine163());
     that.highlightElement(MINE403CoopPlan2element, "EngineeringDesign");
     that.addToClicked("MINE403CoopPlan2", "EngineeringDesign");
      MINE403CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine163());
     that.unHighlightElement(MINE403CoopPlan2element, "EngineeringDesign");
     var category = that.removeFromClicked("MINE403CoopPlan2", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(MINE403CoopPlan2element, category);
}
      MINE403CoopPlan2flag=false
  }
};
$scope.MINE407CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE407CoopPlan2Time <= 200) { 
        MINE407CoopPlan2Time = currentTime;
        return;
    }
MINE407CoopPlan2Time = currentTime;
  var MINE407CoopPlan2element = document.getElementById("MINE407CoopPlan2");
 if (!MINE407CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE407CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE407CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE407CoopPlan2")[i];
        if (MINE407CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE407CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine164());
      that.addLine(getLine165());
      that.addLine(getLine166());
      that.addLine(getLine167());
     that.highlightElement(MINE407CoopPlan2element, "EngineeringSciences");
     that.addToClicked("MINE407CoopPlan2", "EngineeringSciences");
      MINE407CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine164());
      that.removeLine(getLine165());
      that.removeLine(getLine166());
      that.removeLine(getLine167());
     that.unHighlightElement(MINE407CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE407CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE407CoopPlan2element, category);
}
      MINE407CoopPlan2flag=false
  }
};
$scope.MINE408CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE408CoopPlan2Time <= 200) { 
        MINE408CoopPlan2Time = currentTime;
        return;
    }
MINE408CoopPlan2Time = currentTime;
  var MINE408CoopPlan2element = document.getElementById("MINE408CoopPlan2");
 if (!MINE408CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE408CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE408CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE408CoopPlan2")[i];
        if (MINE408CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE408CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine168());
      that.addLine(getLine169());
      that.addLine(getLine170());
     that.highlightElement(MINE408CoopPlan2element, "EngineeringProfession");
     that.addToClicked("MINE408CoopPlan2", "EngineeringProfession");
      MINE408CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine168());
      that.removeLine(getLine169());
      that.removeLine(getLine170());
     that.unHighlightElement(MINE408CoopPlan2element, "EngineeringProfession");
     var category = that.removeFromClicked("MINE408CoopPlan2", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(MINE408CoopPlan2element, category);
}
      MINE408CoopPlan2flag=false
  }
};
$scope.MINE420CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE420CoopPlan2Time <= 200) { 
        MINE420CoopPlan2Time = currentTime;
        return;
    }
MINE420CoopPlan2Time = currentTime;
  var MINE420CoopPlan2element = document.getElementById("MINE420CoopPlan2");
 if (!MINE420CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE420CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE420CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE420CoopPlan2")[i];
        if (MINE420CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE420CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine171());
      that.addLine(getLine172());
      that.addLine(getLine173());
     that.highlightElement(MINE420CoopPlan2element, "EngineeringSciences");
     that.addToClicked("MINE420CoopPlan2", "EngineeringSciences");
      MINE420CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine171());
      that.removeLine(getLine172());
      that.removeLine(getLine173());
     that.unHighlightElement(MINE420CoopPlan2element, "EngineeringSciences");
     var category = that.removeFromClicked("MINE420CoopPlan2", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MINE420CoopPlan2element, category);
}
      MINE420CoopPlan2flag=false
  }
};
$scope.MINE422CoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MINE422CoopPlan2Time <= 200) { 
        MINE422CoopPlan2Time = currentTime;
        return;
    }
MINE422CoopPlan2Time = currentTime;
  var MINE422CoopPlan2element = document.getElementById("MINE422CoopPlan2");
 if (!MINE422CoopPlan2flag) {
     if (that.CoopPlan2ClickedMap.get("MINE422CoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan2ClickedMap.get("MINE422CoopPlan2").length; i++) { 
        var cate = that.CoopPlan2ClickedMap.get("MINE422CoopPlan2")[i];
        if (MINE422CoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MINE422CoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine167());
      that.addLine(getLine174());
     that.highlightElement(MINE422CoopPlan2element, "EngineeringProfession");
     that.addToClicked("MINE422CoopPlan2", "EngineeringProfession");
      MINE422CoopPlan2flag=true
  }
 else {
      that.removeLine(getLine167());
      that.removeLine(getLine174());
     that.unHighlightElement(MINE422CoopPlan2element, "EngineeringProfession");
     var category = that.removeFromClicked("MINE422CoopPlan2", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(MINE422CoopPlan2element, category);
}
      MINE422CoopPlan2flag=false
  }
};
$scope.CHEM103CoopPlan2RCListener = function () {
  var element = document.getElementById("CHEM103CoopPlan2desc");
 if (!CHEM103CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103CoopPlan2rflag=false
  }
};
$scope.ENGG100CoopPlan2RCListener = function () {
  var element = document.getElementById("ENGG100CoopPlan2desc");
 if (!ENGG100CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100CoopPlan2rflag=false
  }
};
$scope.ENGG130CoopPlan2RCListener = function () {
  var element = document.getElementById("ENGG130CoopPlan2desc");
 if (!ENGG130CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130CoopPlan2rflag=false
  }
};
$scope.ENGL199CoopPlan2RCListener = function () {
  var element = document.getElementById("ENGL199CoopPlan2desc");
 if (!ENGL199CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199CoopPlan2rflag=false
  }
};
$scope.MATH100CoopPlan2RCListener = function () {
  var element = document.getElementById("MATH100CoopPlan2desc");
 if (!MATH100CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100CoopPlan2rflag=false
  }
};
$scope.PHYS130CoopPlan2RCListener = function () {
  var element = document.getElementById("PHYS130CoopPlan2desc");
 if (!PHYS130CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130CoopPlan2rflag=false
  }
};
$scope.CHEM105CoopPlan2RCListener = function () {
  var element = document.getElementById("CHEM105CoopPlan2desc");
 if (!CHEM105CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105CoopPlan2rflag=false
  }
};
$scope.ENCMP100CoopPlan2RCListener = function () {
  var element = document.getElementById("ENCMP100CoopPlan2desc");
 if (!ENCMP100CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100CoopPlan2rflag=false
  }
};
$scope.ENGG160CoopPlan2RCListener = function () {
  var element = document.getElementById("ENGG160CoopPlan2desc");
 if (!ENGG160CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160CoopPlan2rflag=false
  }
};
$scope.ENPH131CoopPlan2RCListener = function () {
  var element = document.getElementById("ENPH131CoopPlan2desc");
 if (!ENPH131CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131CoopPlan2rflag=false
  }
};
$scope.MATH101CoopPlan2RCListener = function () {
  var element = document.getElementById("MATH101CoopPlan2desc");
 if (!MATH101CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101CoopPlan2rflag=false
  }
};
$scope.MATH102CoopPlan2RCListener = function () {
  var element = document.getElementById("MATH102CoopPlan2desc");
 if (!MATH102CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102CoopPlan2rflag=false
  }
};
$scope.CIVE265CoopPlan2RCListener = function () {
  var element = document.getElementById("CIVE265CoopPlan2desc");
 if (!CIVE265CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE265CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE265CoopPlan2rflag=false
  }
};
$scope.EAS210CoopPlan2RCListener = function () {
  var element = document.getElementById("EAS210CoopPlan2desc");
 if (!EAS210CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      EAS210CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      EAS210CoopPlan2rflag=false
  }
};
$scope.ECE209CoopPlan2RCListener = function () {
  var element = document.getElementById("ECE209CoopPlan2desc");
 if (!ECE209CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE209CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE209CoopPlan2rflag=false
  }
};
$scope.ENGG299CoopPlan2RCListener = function () {
  var element = document.getElementById("ENGG299CoopPlan2desc");
 if (!ENGG299CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299CoopPlan2rflag=false
  }
};
$scope.MATH209CoopPlan2RCListener = function () {
  var element = document.getElementById("MATH209CoopPlan2desc");
 if (!MATH209CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209CoopPlan2rflag=false
  }
};
$scope.MINE295CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE295CoopPlan2desc");
 if (!MINE295CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE295CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE295CoopPlan2rflag=false
  }
};
$scope.STAT235CoopPlan2RCListener = function () {
  var element = document.getElementById("STAT235CoopPlan2desc");
 if (!STAT235CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      STAT235CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      STAT235CoopPlan2rflag=false
  }
};
$scope.WKEXP901CoopPlan2RCListener = function () {
  var element = document.getElementById("WKEXP901CoopPlan2desc");
 if (!WKEXP901CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP901CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP901CoopPlan2rflag=false
  }
};
$scope.CHE243CoopPlan2RCListener = function () {
  var element = document.getElementById("CHE243CoopPlan2desc");
 if (!CHE243CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243CoopPlan2rflag=false
  }
};
$scope.CIVE250CoopPlan2RCListener = function () {
  var element = document.getElementById("CIVE250CoopPlan2desc");
 if (!CIVE250CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE250CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE250CoopPlan2rflag=false
  }
};
$scope.CIVE251CoopPlan2RCListener = function () {
  var element = document.getElementById("CIVE251CoopPlan2desc");
 if (!CIVE251CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE251CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE251CoopPlan2rflag=false
  }
};
$scope.CIVE270CoopPlan2RCListener = function () {
  var element = document.getElementById("CIVE270CoopPlan2desc");
 if (!CIVE270CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270CoopPlan2rflag=false
  }
};
$scope.MATH201CoopPlan2RCListener = function () {
  var element = document.getElementById("MATH201CoopPlan2desc");
 if (!MATH201CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201CoopPlan2rflag=false
  }
};
$scope.MINE325CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE325CoopPlan2desc");
 if (!MINE325CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE325CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE325CoopPlan2rflag=false
  }
};
$scope.ITSElectiveCoopPlan20RCListener = function () {
  var element = document.getElementById("ITSElectiveCoopPlan20desc");
 if (!ITSElectiveCoopPlan20rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveCoopPlan20rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveCoopPlan20rflag=false
  }
};
$scope.CIVE330CoopPlan2RCListener = function () {
  var element = document.getElementById("CIVE330CoopPlan2desc");
 if (!CIVE330CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE330CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE330CoopPlan2rflag=false
  }
};
$scope.CHE312CoopPlan2RCListener = function () {
  var element = document.getElementById("CHE312CoopPlan2desc");
 if (!CHE312CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE312CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE312CoopPlan2rflag=false
  }
};
$scope.MINE324CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE324CoopPlan2desc");
 if (!MINE324CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE324CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE324CoopPlan2rflag=false
  }
};
$scope.MINE330CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE330CoopPlan2desc");
 if (!MINE330CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE330CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE330CoopPlan2rflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan20RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlan20desc");
 if (!ComplementaryElectiveCoopPlan20rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlan20rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlan20rflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan20RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan20desc");
 if (!ProgramTechnicalElectiveCoopPlan20rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan20rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan20rflag=false
  }
};
$scope.WKEXP902CoopPlan2RCListener = function () {
  var element = document.getElementById("WKEXP902CoopPlan2desc");
 if (!WKEXP902CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP902CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP902CoopPlan2rflag=false
  }
};
$scope.WKEXP903CoopPlan2RCListener = function () {
  var element = document.getElementById("WKEXP903CoopPlan2desc");
 if (!WKEXP903CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP903CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP903CoopPlan2rflag=false
  }
};
$scope.CIVE381CoopPlan2RCListener = function () {
  var element = document.getElementById("CIVE381CoopPlan2desc");
 if (!CIVE381CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE381CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE381CoopPlan2rflag=false
  }
};
$scope.CME421CoopPlan2RCListener = function () {
  var element = document.getElementById("CME421CoopPlan2desc");
 if (!CME421CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CME421CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CME421CoopPlan2rflag=false
  }
};
$scope.ENGM310CoopPlan2RCListener = function () {
  var element = document.getElementById("ENGM310CoopPlan2desc");
 if (!ENGM310CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310CoopPlan2rflag=false
  }
};
$scope.ENGM401CoopPlan2RCListener = function () {
  var element = document.getElementById("ENGM401CoopPlan2desc");
 if (!ENGM401CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401CoopPlan2rflag=false
  }
};
$scope.MINE310CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE310CoopPlan2desc");
 if (!MINE310CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE310CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE310CoopPlan2rflag=false
  }
};
$scope.MINE323CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE323CoopPlan2desc");
 if (!MINE323CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE323CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE323CoopPlan2rflag=false
  }
};
$scope.WKEXP904CoopPlan2RCListener = function () {
  var element = document.getElementById("WKEXP904CoopPlan2desc");
 if (!WKEXP904CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP904CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP904CoopPlan2rflag=false
  }
};
$scope.WKEXP905CoopPlan2RCListener = function () {
  var element = document.getElementById("WKEXP905CoopPlan2desc");
 if (!WKEXP905CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP905CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP905CoopPlan2rflag=false
  }
};
$scope.ENGG404CoopPlan2RCListener = function () {
  var element = document.getElementById("ENGG404CoopPlan2desc");
 if (!ENGG404CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404CoopPlan2rflag=false
  }
};
$scope.MINE402CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE402CoopPlan2desc");
 if (!MINE402CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE402CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE402CoopPlan2rflag=false
  }
};
$scope.MINE413CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE413CoopPlan2desc");
 if (!MINE413CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE413CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE413CoopPlan2rflag=false
  }
};
$scope.MINE414CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE414CoopPlan2desc");
 if (!MINE414CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE414CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE414CoopPlan2rflag=false
  }
};
$scope.ComplementaryElectiveCoopPlan21RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopPlan21desc");
 if (!ComplementaryElectiveCoopPlan21rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopPlan21rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopPlan21rflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan21RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan21desc");
 if (!ProgramTechnicalElectiveCoopPlan21rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan21rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan21rflag=false
  }
};
$scope.ENGG400CoopPlan2RCListener = function () {
  var element = document.getElementById("ENGG400CoopPlan2desc");
 if (!ENGG400CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400CoopPlan2rflag=false
  }
};
$scope.MINE403CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE403CoopPlan2desc");
 if (!MINE403CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE403CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE403CoopPlan2rflag=false
  }
};
$scope.MINE407CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE407CoopPlan2desc");
 if (!MINE407CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE407CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE407CoopPlan2rflag=false
  }
};
$scope.MINE408CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE408CoopPlan2desc");
 if (!MINE408CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE408CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE408CoopPlan2rflag=false
  }
};
$scope.MINE420CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE420CoopPlan2desc");
 if (!MINE420CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE420CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE420CoopPlan2rflag=false
  }
};
$scope.MINE422CoopPlan2RCListener = function () {
  var element = document.getElementById("MINE422CoopPlan2desc");
 if (!MINE422CoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MINE422CoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MINE422CoopPlan2rflag=false
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