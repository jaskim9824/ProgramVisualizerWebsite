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
this.EnvironmentalOptionList = [];
this.EnvironmentalOptionClicked = [];
this.EnvironmentalOptionLegendBtns = [];
this.EnvironmentalOptionLegendBtnsClicked = [];
this.EnvironmentalOptionClickedMap = new Map();
this.EnvironmentalOptionTerms = 8;
this.EnvironmentalOptionMaxCourses = 10;
this.CoopPlanList = [];
this.CoopPlanClicked = [];
this.CoopPlanLegendBtns = [];
this.CoopPlanLegendBtnsClicked = [];
this.CoopPlanClickedMap = new Map();
this.CoopPlanTerms = 13;
this.CoopPlanMaxCourses = 7;
this.CoopEnvironmentalOptionList = [];
this.CoopEnvironmentalOptionClicked = [];
this.CoopEnvironmentalOptionLegendBtns = [];
this.CoopEnvironmentalOptionLegendBtnsClicked = [];
this.CoopEnvironmentalOptionClickedMap = new Map();
this.CoopEnvironmentalOptionTerms = 13;
this.CoopEnvironmentalOptionMaxCourses = 10;
this.previousPlan = $scope.selectedPlan
this.setDefaults = function(plan) { 
  switch(plan) { 
      case "TraditionalPlan": 
          $scope.$apply();
          break;
      case "EnvironmentalOption": 
          $scope.$apply();
          break;
      case "CoopPlan": 
          $scope.$apply();
          break;
      case "CoopEnvironmentalOption": 
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
  case "EnvironmentalOption": 
    for (let i = 0; i < this.EnvironmentalOptionList.length; i++) {
        this.EnvironmentalOptionList[i][0].hide(true);
    }
    break; 
  case "CoopPlan": 
    for (let i = 0; i < this.CoopPlanList.length; i++) {
        this.CoopPlanList[i][0].hide(true);
    }
    break; 
  case "CoopEnvironmentalOption": 
    for (let i = 0; i < this.CoopEnvironmentalOptionList.length; i++) {
        this.CoopEnvironmentalOptionList[i][0].hide(true);
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
  var currbtn = document.getElementById("NaturalSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.EnvironmentalOptionLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopEnvironmentalOptionLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringProfession");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.EnvironmentalOptionLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopEnvironmentalOptionLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Other");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.EnvironmentalOptionLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopEnvironmentalOptionLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Math");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.EnvironmentalOptionLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopEnvironmentalOptionLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringDesign");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.EnvironmentalOptionLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopEnvironmentalOptionLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.EnvironmentalOptionLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopEnvironmentalOptionLegendBtns.push(currbtn);
  var currbtn = document.getElementById("COMP");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.EnvironmentalOptionLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopEnvironmentalOptionLegendBtns.push(currbtn);
  var currbtn = document.getElementById("PROG");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.EnvironmentalOptionLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopEnvironmentalOptionLegendBtns.push(currbtn);
  var currbtn = document.getElementById("ITS");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.EnvironmentalOptionLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.CoopEnvironmentalOptionLegendBtns.push(currbtn);
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
    case "EnvironmentalOption": 
      for (let i = 0; i < this.EnvironmentalOptionList.length; i++) {
          this.EnvironmentalOptionList[i][0].show(true);
      }
      width = this.EnvironmentalOptionTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.EnvironmentalOptionMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.EnvironmentalOptionClicked.length; i++) {
          var element = document.getElementById(this.EnvironmentalOptionClicked[i][0]);
          this.highlightElement(element, this.EnvironmentalOptionClicked[i][1]);
      }
      for (let i = 0; i < this.EnvironmentalOptionLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.EnvironmentalOptionLegendBtnsClicked.length; j++) {
              if (this.EnvironmentalOptionLegendBtnsClicked[j] == this.EnvironmentalOptionLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
            if (this.EnvironmentalOptionLegendBtns[i].classList.contains("legendbutton-pressed")) {
              this.EnvironmentalOptionLegendBtns[i].classList.remove("legendbutton-pressed");
            }
              this.EnvironmentalOptionLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
            if (this.EnvironmentalOptionLegendBtns[i].classList.contains("legendbutton")) {
              this.EnvironmentalOptionLegendBtns[i].classList.remove("legendbutton");
            }
              this.EnvironmentalOptionLegendBtns[i].classList.add("legendbutton-pressed");
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
            if (this.CoopPlanLegendBtns[i].classList.contains("legendbutton-pressed")) {
              this.CoopPlanLegendBtns[i].classList.remove("legendbutton-pressed");
            }
              this.CoopPlanLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
            if (this.CoopPlanLegendBtns[i].classList.contains("legendbutton")) {
              this.CoopPlanLegendBtns[i].classList.remove("legendbutton");
            }
              this.CoopPlanLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    case "CoopEnvironmentalOption": 
      for (let i = 0; i < this.CoopEnvironmentalOptionList.length; i++) {
          this.CoopEnvironmentalOptionList[i][0].show(true);
      }
      width = this.CoopEnvironmentalOptionTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.CoopEnvironmentalOptionMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.CoopEnvironmentalOptionClicked.length; i++) {
          var element = document.getElementById(this.CoopEnvironmentalOptionClicked[i][0]);
          this.highlightElement(element, this.CoopEnvironmentalOptionClicked[i][1]);
      }
      for (let i = 0; i < this.CoopEnvironmentalOptionLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.CoopEnvironmentalOptionLegendBtnsClicked.length; j++) {
              if (this.CoopEnvironmentalOptionLegendBtnsClicked[j] == this.CoopEnvironmentalOptionLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
            if (this.CoopEnvironmentalOptionLegendBtns[i].classList.contains("legendbutton-pressed")) {
              this.CoopEnvironmentalOptionLegendBtns[i].classList.remove("legendbutton-pressed");
            }
              this.CoopEnvironmentalOptionLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
            if (this.CoopEnvironmentalOptionLegendBtns[i].classList.contains("legendbutton")) {
              this.CoopEnvironmentalOptionLegendBtns[i].classList.remove("legendbutton");
            }
              this.CoopEnvironmentalOptionLegendBtns[i].classList.add("legendbutton-pressed");
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
 case "EnvironmentalOption":
    var index = this.EnvironmentalOptionList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.EnvironmentalOptionList.push([line, 1])
    }
    else {
        this.EnvironmentalOptionList[index][1]++;
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
 case "CoopEnvironmentalOption":
    var index = this.CoopEnvironmentalOptionList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.CoopEnvironmentalOptionList.push([line, 1])
    }
    else {
        this.CoopEnvironmentalOptionList[index][1]++;
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
    break; case "EnvironmentalOption":
    var index = this.EnvironmentalOptionList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.EnvironmentalOptionList[index][1]--
        if (this.EnvironmentalOptionList[index][1] <= 0) {
            line.hide(false);
            this.EnvironmentalOptionList.splice(index, 1);
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
    break; case "CoopEnvironmentalOption":
    var index = this.CoopEnvironmentalOptionList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopEnvironmentalOptionList[index][1]--
        if (this.CoopEnvironmentalOptionList[index][1] <= 0) {
            line.hide(false);
            this.CoopEnvironmentalOptionList.splice(index, 1);
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
    break; case "EnvironmentalOption":
    var index = this.EnvironmentalOptionClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.EnvironmentalOptionClicked.push([element, category, 1]);
    }
    else {
        this.EnvironmentalOptionClicked[index][1] = category;
        this.EnvironmentalOptionClicked[index][2]++;
    }
    this.EnvironmentalOptionClickedMap.get(element).push(category);
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
    break; case "CoopEnvironmentalOption":
    var index = this.CoopEnvironmentalOptionClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.CoopEnvironmentalOptionClicked.push([element, category, 1]);
    }
    else {
        this.CoopEnvironmentalOptionClicked[index][1] = category;
        this.CoopEnvironmentalOptionClicked[index][2]++;
    }
    this.CoopEnvironmentalOptionClickedMap.get(element).push(category);
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
    break; case "EnvironmentalOption":
    var index = this.EnvironmentalOptionClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.EnvironmentalOptionClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.EnvironmentalOptionClickedMap.get(element).splice(indexMap, 1);
        }
        this.EnvironmentalOptionClicked[index][2]--;
        if (this.EnvironmentalOptionClicked[index][2] <= 0) {
            this.EnvironmentalOptionClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.EnvironmentalOptionClickedMap.get(element).length - 1
        return this.EnvironmentalOptionClickedMap.get(element)[maxIndex];
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
    break; case "CoopEnvironmentalOption":
    var index = this.CoopEnvironmentalOptionClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.CoopEnvironmentalOptionClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.CoopEnvironmentalOptionClickedMap.get(element).splice(indexMap, 1);
        }
        this.CoopEnvironmentalOptionClicked[index][2]--;
        if (this.CoopEnvironmentalOptionClicked[index][2] <= 0) {
            this.CoopEnvironmentalOptionClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.CoopEnvironmentalOptionClickedMap.get(element).length - 1
        return this.CoopEnvironmentalOptionClickedMap.get(element)[maxIndex];
    }
    return "";
    break;    default:
    console.log("shouldn't be here");
    }
};
var NaturalSciencesTraditionalPlanflag = false;
var NaturalSciencesEnvironmentalOptionflag = false;
var NaturalSciencesCoopPlanflag = false;
var NaturalSciencesCoopEnvironmentalOptionflag = false;
var EngineeringProfessionTraditionalPlanflag = false;
var EngineeringProfessionEnvironmentalOptionflag = false;
var EngineeringProfessionCoopPlanflag = false;
var EngineeringProfessionCoopEnvironmentalOptionflag = false;
var OtherTraditionalPlanflag = false;
var OtherEnvironmentalOptionflag = false;
var OtherCoopPlanflag = false;
var OtherCoopEnvironmentalOptionflag = false;
var MathTraditionalPlanflag = false;
var MathEnvironmentalOptionflag = false;
var MathCoopPlanflag = false;
var MathCoopEnvironmentalOptionflag = false;
var EngineeringDesignTraditionalPlanflag = false;
var EngineeringDesignEnvironmentalOptionflag = false;
var EngineeringDesignCoopPlanflag = false;
var EngineeringDesignCoopEnvironmentalOptionflag = false;
var EngineeringSciencesTraditionalPlanflag = false;
var EngineeringSciencesEnvironmentalOptionflag = false;
var EngineeringSciencesCoopPlanflag = false;
var EngineeringSciencesCoopEnvironmentalOptionflag = false;
var COMPTraditionalPlanflag = false;
var COMPEnvironmentalOptionflag = false;
var COMPCoopPlanflag = false;
var COMPCoopEnvironmentalOptionflag = false;
var PROGTraditionalPlanflag = false;
var PROGCoopPlanflag = false;
var ITSTraditionalPlanflag = false;
var ITSEnvironmentalOptionflag = false;
var ITSCoopPlanflag = false;
var ITSCoopEnvironmentalOptionflag = false;
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
      case "EnvironmentalOption":
 var element = document.getElementById("CHEM103EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CHEM103EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CHEM103EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CHEM103EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103EnvironmentalOption", categoryName);
 var element = document.getElementById("ENGG130EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENGG130EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENGG130EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENGG130EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130EnvironmentalOption", categoryName);
 var element = document.getElementById("PHYS130EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("PHYS130EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("PHYS130EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("PHYS130EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130EnvironmentalOption", categoryName);
 var element = document.getElementById("CHEM105EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CHEM105EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CHEM105EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CHEM105EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105EnvironmentalOption", categoryName);
 var element = document.getElementById("ENCMP100EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENCMP100EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENCMP100EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENCMP100EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100EnvironmentalOption", categoryName);
 var element = document.getElementById("ENPH131EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENPH131EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENPH131EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENPH131EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131EnvironmentalOption", categoryName);
 var element = document.getElementById("EAS210EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("EAS210EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("EAS210EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("EAS210EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("EAS210EnvironmentalOption", categoryName);
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
       break;
      case "CoopEnvironmentalOption":
 var element = document.getElementById("CHEM103CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CHEM103CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CHEM103CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CHEM103CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENGG130CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENGG130CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENGG130CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENGG130CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("PHYS130CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("PHYS130CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("PHYS130CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("PHYS130CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CHEM105CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CHEM105CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CHEM105CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CHEM105CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENCMP100CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENCMP100CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENCMP100CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENCMP100CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENPH131CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENPH131CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENPH131CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENPH131CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("EAS210CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("EAS210CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("EAS210CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("EAS210CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("EAS210CoopEnvironmentalOption", categoryName);
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
 var element = document.getElementById("CIVE240TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE240TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE240TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE240TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE240TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE303TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE303TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE303TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE303TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE303TraditionalPlan", categoryName);
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
 var element = document.getElementById("ENGG420TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ENGG420TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ENGG420TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ENGG420TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG420TraditionalPlan", categoryName);
       break;
      case "EnvironmentalOption":
 var element = document.getElementById("ENGG100EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENGG100EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENGG100EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENGG100EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE240EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE240EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE240EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE240EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE240EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE302EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE302EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE302EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE302EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE302EnvironmentalOption", categoryName);
 var element = document.getElementById("ENGG404EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENGG404EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENGG404EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENGG404EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404EnvironmentalOption", categoryName);
 var element = document.getElementById("ENGG400EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENGG400EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENGG400EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENGG400EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400EnvironmentalOption", categoryName);
 var element = document.getElementById("LAW399EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("LAW399EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("LAW399EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("LAW399EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("LAW399EnvironmentalOption", categoryName);
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
 var element = document.getElementById("CIVE240CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE240CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE240CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE240CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE240CoopPlan", categoryName);
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
 var element = document.getElementById("CIVE303CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE303CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE303CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE303CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE303CoopPlan", categoryName);
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
 var element = document.getElementById("ENGG420CoopPlan");
                            if (this.CoopPlanClickedMap.get("ENGG420CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ENGG420CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ENGG420CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG420CoopPlan", categoryName);
       break;
      case "CoopEnvironmentalOption":
 var element = document.getElementById("ENGG100CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENGG100CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENGG100CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENGG100CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENGG299CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENGG299CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENGG299CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENGG299CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG299CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE240CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE240CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE240CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE240CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE240CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("WKEXP901CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("WKEXP901CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("WKEXP901CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("WKEXP901CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP901CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("WKEXP902CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("WKEXP902CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("WKEXP902CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("WKEXP902CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP902CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE302CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE302CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE302CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE302CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE302CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENGG404CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENGG404CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENGG404CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENGG404CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("WKEXP903CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("WKEXP903CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("WKEXP903CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("WKEXP903CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP903CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("WKEXP904CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("WKEXP904CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("WKEXP904CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("WKEXP904CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP904CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("WKEXP905CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("WKEXP905CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("WKEXP905CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("WKEXP905CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP905CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENGG400CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENGG400CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENGG400CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENGG400CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("LAW399CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("LAW399CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("LAW399CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("LAW399CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("LAW399CoopEnvironmentalOption", categoryName);
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
      case "EnvironmentalOption":
 var element = document.getElementById("ENGL199EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENGL199EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENGL199EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENGL199EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199EnvironmentalOption", categoryName);
 var element = document.getElementById("ENGM310EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENGM310EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENGM310EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENGM310EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM310EnvironmentalOption", categoryName);
 var element = document.getElementById("ENGM401EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENGM401EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENGM401EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENGM401EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401EnvironmentalOption", categoryName);
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
      case "CoopEnvironmentalOption":
 var element = document.getElementById("ENGL199CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENGL199CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENGL199CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENGL199CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENGM310CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENGM310CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENGM310CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENGM310CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM310CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENGM401CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENGM401CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENGM401CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENGM401CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401CoopEnvironmentalOption", categoryName);
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
      case "EnvironmentalOption":
 var element = document.getElementById("MATH100EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("MATH100EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("MATH100EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("MATH100EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100EnvironmentalOption", categoryName);
 var element = document.getElementById("MATH101EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("MATH101EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("MATH101EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("MATH101EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101EnvironmentalOption", categoryName);
 var element = document.getElementById("MATH102EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("MATH102EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("MATH102EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("MATH102EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102EnvironmentalOption", categoryName);
 var element = document.getElementById("MATH209EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("MATH209EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("MATH209EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("MATH209EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209EnvironmentalOption", categoryName);
 var element = document.getElementById("MATH201EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("MATH201EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("MATH201EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("MATH201EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201EnvironmentalOption", categoryName);
 var element = document.getElementById("STAT235EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("STAT235EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("STAT235EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("STAT235EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("STAT235EnvironmentalOption", categoryName);
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
       break;
      case "CoopEnvironmentalOption":
 var element = document.getElementById("MATH100CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("MATH100CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("MATH100CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("MATH100CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("MATH101CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("MATH101CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("MATH101CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("MATH101CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("MATH102CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("MATH102CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("MATH102CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("MATH102CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("MATH209CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("MATH209CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("MATH209CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("MATH209CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("MATH201CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("MATH201CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("MATH201CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("MATH201CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("STAT235CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("STAT235CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("STAT235CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("STAT235CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("STAT235CoopEnvironmentalOption", categoryName);
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
 var element = document.getElementById("CIVE374TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE374TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE374TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE374TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE374TraditionalPlan", categoryName);
       break;
      case "EnvironmentalOption":
 var element = document.getElementById("ENGG160EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENGG160EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENGG160EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENGG160EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE265EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE265EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE265EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE265EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE265EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE374EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE374EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE374EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE374EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE374EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE421EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE421EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE421EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE421EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE421EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE440EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE440EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE440EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE440EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE440EnvironmentalOption", categoryName);
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
 var element = document.getElementById("CIVE265CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE265CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE265CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE265CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE265CoopPlan", categoryName);
 var element = document.getElementById("CIVE374CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE374CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE374CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE374CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE374CoopPlan", categoryName);
       break;
      case "CoopEnvironmentalOption":
 var element = document.getElementById("ENGG160CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENGG160CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENGG160CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENGG160CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE265CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE265CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE265CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE265CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE265CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE374CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE374CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE374CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE374CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE374CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE421CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE421CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE421CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE421CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE421CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE440CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE440CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE440CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE440CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE440CoopEnvironmentalOption", categoryName);
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("CIVE270TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE270TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270TraditionalPlan", categoryName);
 var element = document.getElementById("MATE202TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE202TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE202TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE202TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE202TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE221TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE221TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE221TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE221TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE221TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE250TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE250TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE250TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE250TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE250TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE251TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE251TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE251TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE251TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE251TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE295TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE295TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE295TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE295TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE295TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE330TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE330TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE330TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE330TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE330TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE372TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE372TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE372TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE372TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE372TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE391TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE391TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE391TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE391TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE391TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE395TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE395TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE395TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE395TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE395TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE398TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE398TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE398TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE398TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE398TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE315TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE315TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE315TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE315TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE315TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE321TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE321TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE321TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE321TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE321TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE331TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE331TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE331TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE331TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE331TraditionalPlan", categoryName);
 var element = document.getElementById("CIVE381TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CIVE381TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CIVE381TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CIVE381TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE381TraditionalPlan", categoryName);
 var element = document.getElementById("ECE209TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE209TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE209TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE209TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE209TraditionalPlan", categoryName);
 var element = document.getElementById("MECE250TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MECE250TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MECE250TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MECE250TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE250TraditionalPlan", categoryName);
 var element = document.getElementById("CHE243TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243TraditionalPlan", categoryName);
       break;
      case "EnvironmentalOption":
 var element = document.getElementById("CIVE270EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE270EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE270EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE270EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE220EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE220EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE220EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE220EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE220EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE250EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE250EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE250EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE250EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE250EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE251EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE251EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE251EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE251EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE251EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE295EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE295EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE295EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE295EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE295EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE251EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE251EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE251EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE251EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE251EnvironmentalOption", categoryName);
 var element = document.getElementById("CHE243EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CHE243EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CHE243EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CHE243EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE330EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE330EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE330EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE330EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE330EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE372EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE372EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE372EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE372EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE372EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE395EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE395EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE395EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE395EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE395EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE324EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE324EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE324EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE324EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE324EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE326EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE326EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE326EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE326EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE326EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE331EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE331EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE331EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE331EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE331EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE381EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE381EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE381EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE381EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE381EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE325EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE325EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE325EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE325EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE325EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE320EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE320EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE320EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE320EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE320EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE423EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE423EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE423EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE423EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE423EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE432EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE432EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE432EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE432EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE432EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE524EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE524EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE524EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE524EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE524EnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE526EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("CIVE526EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("CIVE526EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("CIVE526EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE526EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE400EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE400EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE400EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE400EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE400EnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE434EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ENVE434EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ENVE434EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ENVE434EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE434EnvironmentalOption", categoryName);
 var element = document.getElementById("ECE209EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("ECE209EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("ECE209EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("ECE209EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE209EnvironmentalOption", categoryName);
 var element = document.getElementById("MATE202EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("MATE202EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("MATE202EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("MATE202EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE202EnvironmentalOption", categoryName);
 var element = document.getElementById("MECE250EnvironmentalOption");
                            if (this.EnvironmentalOptionClickedMap.get("MECE250EnvironmentalOption").length > 0) {
                                var mapLen = this.EnvironmentalOptionClickedMap.get("MECE250EnvironmentalOption").length - 1
                                var prevCate = this.EnvironmentalOptionClickedMap.get("MECE250EnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE250EnvironmentalOption", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("CIVE270CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE270CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE270CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE270CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270CoopPlan", categoryName);
 var element = document.getElementById("MATE202CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE202CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE202CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE202CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE202CoopPlan", categoryName);
 var element = document.getElementById("CIVE221CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE221CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE221CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE221CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE221CoopPlan", categoryName);
 var element = document.getElementById("CIVE250CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE250CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE250CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE250CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE250CoopPlan", categoryName);
 var element = document.getElementById("CIVE251CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE251CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE251CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE251CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE251CoopPlan", categoryName);
 var element = document.getElementById("CIVE295CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE295CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE295CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE295CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE295CoopPlan", categoryName);
 var element = document.getElementById("CIVE315CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE315CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE315CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE315CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE315CoopPlan", categoryName);
 var element = document.getElementById("CIVE321CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE321CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE321CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE321CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE321CoopPlan", categoryName);
 var element = document.getElementById("CIVE330CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE330CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE330CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE330CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE330CoopPlan", categoryName);
 var element = document.getElementById("CIVE372CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE372CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE372CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE372CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE372CoopPlan", categoryName);
 var element = document.getElementById("CIVE395CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE395CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE395CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE395CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE395CoopPlan", categoryName);
 var element = document.getElementById("CIVE331CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE331CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE331CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE331CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE331CoopPlan", categoryName);
 var element = document.getElementById("CIVE381CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE381CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE381CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE381CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE381CoopPlan", categoryName);
 var element = document.getElementById("CIVE391CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE391CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE391CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE391CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE391CoopPlan", categoryName);
 var element = document.getElementById("CIVE398CoopPlan");
                            if (this.CoopPlanClickedMap.get("CIVE398CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CIVE398CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CIVE398CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE398CoopPlan", categoryName);
 var element = document.getElementById("ECE209CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE209CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE209CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE209CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE209CoopPlan", categoryName);
 var element = document.getElementById("MECE250CoopPlan");
                            if (this.CoopPlanClickedMap.get("MECE250CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MECE250CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MECE250CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE250CoopPlan", categoryName);
 var element = document.getElementById("CHE243CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHE243CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHE243CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHE243CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243CoopPlan", categoryName);
       break;
      case "CoopEnvironmentalOption":
 var element = document.getElementById("CIVE270CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE270CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE270CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE270CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE270CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE220CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE220CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE220CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE220CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE220CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE250CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE250CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE250CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE250CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE250CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE251CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE251CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE251CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE251CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE251CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE295CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE295CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE295CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE295CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE295CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE251CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE251CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE251CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE251CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE251CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE330CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE330CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE330CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE330CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE330CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE395CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE395CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE395CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE395CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE395CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE325CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE325CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE325CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE325CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE325CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CHE243CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CHE243CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CHE243CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CHE243CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE331CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE331CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE331CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE331CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE331CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE372CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE372CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE372CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE372CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE372CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE381CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE381CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE381CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE381CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE381CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE324CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE324CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE324CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE324CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE324CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE326CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE326CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE326CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE326CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE326CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE320CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE320CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE320CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE320CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE320CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE423CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE423CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE423CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE423CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE423CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE432CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE432CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE432CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE432CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE432CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE524CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE524CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE524CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE524CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE524CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("CIVE526CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("CIVE526CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("CIVE526CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("CIVE526CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CIVE526CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE400CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE400CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE400CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE400CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE400CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ENVE434CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ENVE434CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ENVE434CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ENVE434CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENVE434CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("ECE209CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("ECE209CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ECE209CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ECE209CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE209CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("MATE202CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("MATE202CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("MATE202CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("MATE202CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE202CoopEnvironmentalOption", categoryName);
 var element = document.getElementById("MECE250CoopEnvironmentalOption");
                            if (this.CoopEnvironmentalOptionClickedMap.get("MECE250CoopEnvironmentalOption").length > 0) {
                                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("MECE250CoopEnvironmentalOption").length - 1
                                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("MECE250CoopEnvironmentalOption")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MECE250CoopEnvironmentalOption", categoryName);
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
       break;
      case "EnvironmentalOption":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.EnvironmentalOptionClickedMap.get("ComplementaryElectiveEnvironmentalOption" + i).length > 0) {
                var mapLen = this.EnvironmentalOptionClickedMap.get("ComplementaryElectiveEnvironmentalOption" + i).length - 1
                var prevCate = this.EnvironmentalOptionClickedMap.get("ComplementaryElectiveEnvironmentalOption" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveEnvironmentalOption" + i, categoryName);
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
       break;
      case "CoopEnvironmentalOption":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.CoopEnvironmentalOptionClickedMap.get("ComplementaryElectiveCoopEnvironmentalOption" + i).length > 0) {
                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ComplementaryElectiveCoopEnvironmentalOption" + i).length - 1
                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ComplementaryElectiveCoopEnvironmentalOption" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveCoopEnvironmentalOption" + i, categoryName);
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
      case "EnvironmentalOption":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.EnvironmentalOptionClickedMap.get("ITSElectiveEnvironmentalOption" + i).length > 0) {
                var mapLen = this.EnvironmentalOptionClickedMap.get("ITSElectiveEnvironmentalOption" + i).length - 1
                var prevCate = this.EnvironmentalOptionClickedMap.get("ITSElectiveEnvironmentalOption" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveEnvironmentalOption" + i, categoryName);
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
      case "CoopEnvironmentalOption":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.CoopEnvironmentalOptionClickedMap.get("ITSElectiveCoopEnvironmentalOption" + i).length > 0) {
                var mapLen = this.CoopEnvironmentalOptionClickedMap.get("ITSElectiveCoopEnvironmentalOption" + i).length - 1
                var prevCate = this.CoopEnvironmentalOptionClickedMap.get("ITSElectiveCoopEnvironmentalOption" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveCoopEnvironmentalOption" + i, categoryName);
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
      case "EnvironmentalOption":
     var element = document.getElementById("CHEM103EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CHEM103EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGG130EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130EnvironmentalOption");
                            var prevCate = this.removeFromClicked("PHYS130EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CHEM105EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENCMP100EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENPH131EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("EAS210EnvironmentalOption");
                            var prevCate = this.removeFromClicked("EAS210EnvironmentalOption", categoryName);
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
       break;
      case "CoopEnvironmentalOption":
     var element = document.getElementById("CHEM103CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CHEM103CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGG130CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("PHYS130CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CHEM105CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENCMP100CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENPH131CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("EAS210CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("EAS210CoopEnvironmentalOption", categoryName);
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
     var element = document.getElementById("CIVE240TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE240TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE303TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE303TraditionalPlan", categoryName);
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
     var element = document.getElementById("ENGG420TraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG420TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "EnvironmentalOption":
     var element = document.getElementById("ENGG100EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGG100EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE240EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE240EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE302EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE302EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGG404EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGG400EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("LAW399EnvironmentalOption");
                            var prevCate = this.removeFromClicked("LAW399EnvironmentalOption", categoryName);
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
     var element = document.getElementById("CIVE240CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE240CoopPlan", categoryName);
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
     var element = document.getElementById("CIVE303CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE303CoopPlan", categoryName);
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
     var element = document.getElementById("ENGG420CoopPlan");
                            var prevCate = this.removeFromClicked("ENGG420CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopEnvironmentalOption":
     var element = document.getElementById("ENGG100CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGG100CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG299CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGG299CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE240CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE240CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP901CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("WKEXP901CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP902CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("WKEXP902CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE302CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE302CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGG404CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP903CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("WKEXP903CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP904CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("WKEXP904CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP905CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("WKEXP905CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGG400CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("LAW399CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("LAW399CoopEnvironmentalOption", categoryName);
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
      case "EnvironmentalOption":
     var element = document.getElementById("ENGL199EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGL199EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM310EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGM310EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGM401EnvironmentalOption", categoryName);
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
      case "CoopEnvironmentalOption":
     var element = document.getElementById("ENGL199CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGL199CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM310CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGM310CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGM401CoopEnvironmentalOption", categoryName);
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
      case "EnvironmentalOption":
     var element = document.getElementById("MATH100EnvironmentalOption");
                            var prevCate = this.removeFromClicked("MATH100EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101EnvironmentalOption");
                            var prevCate = this.removeFromClicked("MATH101EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102EnvironmentalOption");
                            var prevCate = this.removeFromClicked("MATH102EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209EnvironmentalOption");
                            var prevCate = this.removeFromClicked("MATH209EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201EnvironmentalOption");
                            var prevCate = this.removeFromClicked("MATH201EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("STAT235EnvironmentalOption");
                            var prevCate = this.removeFromClicked("STAT235EnvironmentalOption", categoryName);
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
       break;
      case "CoopEnvironmentalOption":
     var element = document.getElementById("MATH100CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("MATH100CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("MATH101CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("MATH102CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("MATH209CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("MATH201CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("STAT235CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("STAT235CoopEnvironmentalOption", categoryName);
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
     var element = document.getElementById("CIVE374TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE374TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "EnvironmentalOption":
     var element = document.getElementById("ENGG160EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGG160EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE265EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE265EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE374EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE374EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE421EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE421EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE440EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE440EnvironmentalOption", categoryName);
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
     var element = document.getElementById("CIVE265CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE265CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE374CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE374CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopEnvironmentalOption":
     var element = document.getElementById("ENGG160CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENGG160CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE265CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE265CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE374CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE374CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE421CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE421CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE440CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE440CoopEnvironmentalOption", categoryName);
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
     var element = document.getElementById("CIVE270TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE270TraditionalPlan", categoryName);
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
     var element = document.getElementById("CIVE221TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE221TraditionalPlan", categoryName);
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
     var element = document.getElementById("CIVE251TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE251TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE295TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE295TraditionalPlan", categoryName);
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
     var element = document.getElementById("CIVE372TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE372TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE391TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE391TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE395TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE395TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE398TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE398TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE315TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE315TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE321TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE321TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE331TraditionalPlan");
                            var prevCate = this.removeFromClicked("CIVE331TraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE209TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE209TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE250TraditionalPlan");
                            var prevCate = this.removeFromClicked("MECE250TraditionalPlan", categoryName);
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
       break;
      case "EnvironmentalOption":
     var element = document.getElementById("CIVE270EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE270EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE220EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE220EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE250EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE250EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE251EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE251EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE295EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE295EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE251EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE251EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE243EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CHE243EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE330EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE330EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE372EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE372EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE395EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE395EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE324EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE324EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE326EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE326EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE331EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE331EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE381EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE381EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE325EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE325EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE320EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE320EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE423EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE423EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE432EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE432EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE524EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE524EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE526EnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE526EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE400EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE400EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE434EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE434EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE209EnvironmentalOption");
                            var prevCate = this.removeFromClicked("ECE209EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE202EnvironmentalOption");
                            var prevCate = this.removeFromClicked("MATE202EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE250EnvironmentalOption");
                            var prevCate = this.removeFromClicked("MECE250EnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("CIVE270CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE270CoopPlan", categoryName);
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
     var element = document.getElementById("CIVE221CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE221CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE250CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE250CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE251CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE251CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE295CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE295CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE315CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE315CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE321CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE321CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE330CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE330CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE372CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE372CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE395CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE395CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE331CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE331CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE381CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE381CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE391CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE391CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE398CoopPlan");
                            var prevCate = this.removeFromClicked("CIVE398CoopPlan", categoryName);
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
     var element = document.getElementById("MECE250CoopPlan");
                            var prevCate = this.removeFromClicked("MECE250CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE243CoopPlan");
                            var prevCate = this.removeFromClicked("CHE243CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopEnvironmentalOption":
     var element = document.getElementById("CIVE270CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE270CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE220CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE220CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE250CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE250CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE251CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE251CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE295CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE295CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE251CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE251CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE330CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE330CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE395CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE395CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE325CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE325CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE243CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CHE243CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE331CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE331CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE372CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE372CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE381CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE381CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE324CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE324CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE326CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE326CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE320CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE320CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE423CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE423CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE432CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE432CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE524CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE524CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CIVE526CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("CIVE526CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE400CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE400CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENVE434CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ENVE434CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE209CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("ECE209CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE202CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("MATE202CoopEnvironmentalOption", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MECE250CoopEnvironmentalOption");
                            var prevCate = this.removeFromClicked("MECE250CoopEnvironmentalOption", categoryName);
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
       break;
      case "EnvironmentalOption":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveEnvironmentalOption" + i, "COMP");
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
       break;
      case "CoopEnvironmentalOption":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveCoopEnvironmentalOption" + i, "COMP");
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
      case "EnvironmentalOption":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveEnvironmentalOption" + i, "ITS");
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
      case "CoopEnvironmentalOption":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveCoopEnvironmentalOption" + i, "ITS");
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
  var CIVE270TraditionalPlanflag = false;
  var CIVE270TraditionalPlanrflag = false;
 var CIVE270TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE270TraditionalPlan", []);
  var EAS210TraditionalPlanflag = false;
  var EAS210TraditionalPlanrflag = false;
 var EAS210TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("EAS210TraditionalPlan", []);
  var MATE202TraditionalPlanflag = false;
  var MATE202TraditionalPlanrflag = false;
 var MATE202TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE202TraditionalPlan", []);
  var MATH209TraditionalPlanflag = false;
  var MATH209TraditionalPlanrflag = false;
 var MATH209TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH209TraditionalPlan", []);
  var CIVE221TraditionalPlanflag = false;
  var CIVE221TraditionalPlanrflag = false;
 var CIVE221TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE221TraditionalPlan", []);
  var CIVE240TraditionalPlanflag = false;
  var CIVE240TraditionalPlanrflag = false;
 var CIVE240TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE240TraditionalPlan", []);
  var CIVE250TraditionalPlanflag = false;
  var CIVE250TraditionalPlanrflag = false;
 var CIVE250TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE250TraditionalPlan", []);
  var CIVE251TraditionalPlanflag = false;
  var CIVE251TraditionalPlanrflag = false;
 var CIVE251TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE251TraditionalPlan", []);
  var CIVE295TraditionalPlanflag = false;
  var CIVE295TraditionalPlanrflag = false;
 var CIVE295TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE295TraditionalPlan", []);
  var MATH201TraditionalPlanflag = false;
  var MATH201TraditionalPlanrflag = false;
 var MATH201TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH201TraditionalPlan", []);
  var STAT235TraditionalPlanflag = false;
  var STAT235TraditionalPlanrflag = false;
 var STAT235TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("STAT235TraditionalPlan", []);
  var CIVE330TraditionalPlanflag = false;
  var CIVE330TraditionalPlanrflag = false;
 var CIVE330TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE330TraditionalPlan", []);
  var CIVE372TraditionalPlanflag = false;
  var CIVE372TraditionalPlanrflag = false;
 var CIVE372TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE372TraditionalPlan", []);
  var CIVE391TraditionalPlanflag = false;
  var CIVE391TraditionalPlanrflag = false;
 var CIVE391TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE391TraditionalPlan", []);
  var CIVE395TraditionalPlanflag = false;
  var CIVE395TraditionalPlanrflag = false;
 var CIVE395TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE395TraditionalPlan", []);
  var CIVE398TraditionalPlanflag = false;
  var CIVE398TraditionalPlanrflag = false;
 var CIVE398TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE398TraditionalPlan", []);
  var ComplementaryElectiveTraditionalPlan0flag = false;
  var ComplementaryElectiveTraditionalPlan0rflag = false;
 var ComplementaryElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan0", []);
  var CIVE303TraditionalPlanflag = false;
  var CIVE303TraditionalPlanrflag = false;
 var CIVE303TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE303TraditionalPlan", []);
  var CIVE315TraditionalPlanflag = false;
  var CIVE315TraditionalPlanrflag = false;
 var CIVE315TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE315TraditionalPlan", []);
  var CIVE321TraditionalPlanflag = false;
  var CIVE321TraditionalPlanrflag = false;
 var CIVE321TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE321TraditionalPlan", []);
  var CIVE331TraditionalPlanflag = false;
  var CIVE331TraditionalPlanrflag = false;
 var CIVE331TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE331TraditionalPlan", []);
  var CIVE374TraditionalPlanflag = false;
  var CIVE374TraditionalPlanrflag = false;
 var CIVE374TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE374TraditionalPlan", []);
  var CIVE381TraditionalPlanflag = false;
  var CIVE381TraditionalPlanrflag = false;
 var CIVE381TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CIVE381TraditionalPlan", []);
  var ProgramTechnicalElectiveTraditionalPlan0flag = false;
  var ProgramTechnicalElectiveTraditionalPlan0rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan0", []);
  var ProgramTechnicalElectiveTraditionalPlan1flag = false;
  var ProgramTechnicalElectiveTraditionalPlan1rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan1Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan1", []);
  var ProgramTechnicalElectiveTraditionalPlan2flag = false;
  var ProgramTechnicalElectiveTraditionalPlan2rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan2Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan2", []);
  var ENGG404TraditionalPlanflag = false;
  var ENGG404TraditionalPlanrflag = false;
 var ENGG404TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG404TraditionalPlan", []);
  var ECE209TraditionalPlanflag = false;
  var ECE209TraditionalPlanrflag = false;
 var ECE209TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE209TraditionalPlan", []);
  var MECE250TraditionalPlanflag = false;
  var MECE250TraditionalPlanrflag = false;
 var MECE250TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MECE250TraditionalPlan", []);
  var CHE243TraditionalPlanflag = false;
  var CHE243TraditionalPlanrflag = false;
 var CHE243TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHE243TraditionalPlan", []);
  var ENGM310TraditionalPlanflag = false;
  var ENGM310TraditionalPlanrflag = false;
 var ENGM310TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGM310TraditionalPlan", []);
  var ENGM401TraditionalPlanflag = false;
  var ENGM401TraditionalPlanrflag = false;
 var ENGM401TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGM401TraditionalPlan", []);
  var ENGG400TraditionalPlanflag = false;
  var ENGG400TraditionalPlanrflag = false;
 var ENGG400TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG400TraditionalPlan", []);
  var ENGG420TraditionalPlanflag = false;
  var ENGG420TraditionalPlanrflag = false;
 var ENGG420TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG420TraditionalPlan", []);
  var ProgramTechnicalElectiveTraditionalPlan3flag = false;
  var ProgramTechnicalElectiveTraditionalPlan3rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan3Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan3", []);
  var ProgramTechnicalElectiveTraditionalPlan4flag = false;
  var ProgramTechnicalElectiveTraditionalPlan4rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan4Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan4", []);
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
      that.addLine(getLine14());
     that.highlightElement(CHEM103TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM103TraditionalPlan", "NaturalSciences");
      CHEM103TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
      that.removeLine(getLine14());
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
      that.addLine(getLine9());
      that.addLine(getLine40());
     that.highlightElement(ENGG130TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130TraditionalPlan", "NaturalSciences");
      ENGG130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine5());
      that.removeLine(getLine9());
      that.removeLine(getLine40());
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
      that.addLine(getLine22());
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
      that.removeLine(getLine22());
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
      that.addLine(getLine11());
      that.addLine(getLine15());
     that.highlightElement(CHEM105TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105TraditionalPlan", "NaturalSciences");
      CHEM105TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
      that.removeLine(getLine11());
      that.removeLine(getLine15());
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
      that.addLine(getLine19());
     that.highlightElement(ENCMP100TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100TraditionalPlan", "NaturalSciences");
      ENCMP100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine19());
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
      that.addLine(getLine41());
     that.highlightElement(ENPH131TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131TraditionalPlan", "NaturalSciences");
      ENPH131TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine41());
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
      that.addLine(getLine10());
      that.addLine(getLine12());
      that.addLine(getLine16());
      that.addLine(getLine23());
      that.addLine(getLine42());
      that.addLine(getLine43());
     that.highlightElement(MATH101TraditionalPlanelement, "Math");
     that.addToClicked("MATH101TraditionalPlan", "Math");
      MATH101TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine6());
      that.removeLine(getLine7());
      that.removeLine(getLine10());
      that.removeLine(getLine12());
      that.removeLine(getLine16());
      that.removeLine(getLine23());
      that.removeLine(getLine42());
      that.removeLine(getLine43());
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
      that.addLine(getLine13());
      that.addLine(getLine17());
      that.addLine(getLine20());
     that.highlightElement(MATH102TraditionalPlanelement, "Math");
     that.addToClicked("MATH102TraditionalPlan", "Math");
      MATH102TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine13());
      that.removeLine(getLine17());
      that.removeLine(getLine20());
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
     that.highlightElement(CIVE265TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("CIVE265TraditionalPlan", "EngineeringDesign");
      CIVE265TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(CIVE265TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("CIVE265TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(CIVE265TraditionalPlanelement, category);
}
      CIVE265TraditionalPlanflag=false
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
      that.addLine(getLine9());
      that.addLine(getLine10());
      that.addLine(getLine26());
      that.addLine(getLine31());
     that.highlightElement(CIVE270TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE270TraditionalPlan", "EngineeringSciences");
      CIVE270TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine9());
      that.removeLine(getLine10());
      that.removeLine(getLine26());
      that.removeLine(getLine31());
     that.unHighlightElement(CIVE270TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270TraditionalPlanelement, category);
}
      CIVE270TraditionalPlanflag=false
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
      that.addLine(getLine39());
     that.highlightElement(EAS210TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("EAS210TraditionalPlan", "NaturalSciences");
      EAS210TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine39());
     that.unHighlightElement(EAS210TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("EAS210TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS210TraditionalPlanelement, category);
}
      EAS210TraditionalPlanflag=false
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
      that.addLine(getLine11());
      that.addLine(getLine27());
     that.highlightElement(MATE202TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MATE202TraditionalPlan", "EngineeringSciences");
      MATE202TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine27());
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
      that.addLine(getLine12());
      that.addLine(getLine13());
      that.addLine(getLine21());
      that.addLine(getLine24());
      that.addLine(getLine29());
      that.addLine(getLine32());
     that.highlightElement(MATH209TraditionalPlanelement, "Math");
     that.addToClicked("MATH209TraditionalPlan", "Math");
      MATH209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine12());
      that.removeLine(getLine13());
      that.removeLine(getLine21());
      that.removeLine(getLine24());
      that.removeLine(getLine29());
      that.removeLine(getLine32());
     that.unHighlightElement(MATH209TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH209TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209TraditionalPlanelement, category);
}
      MATH209TraditionalPlanflag=false
  }
};
$scope.CIVE221TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE221TraditionalPlanTime <= 200) { 
        CIVE221TraditionalPlanTime = currentTime;
        return;
    }
CIVE221TraditionalPlanTime = currentTime;
  var CIVE221TraditionalPlanelement = document.getElementById("CIVE221TraditionalPlan");
 if (!CIVE221TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE221TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE221TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE221TraditionalPlan")[i];
        if (CIVE221TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE221TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine14());
      that.addLine(getLine15());
      that.addLine(getLine34());
      that.addLine(getLine37());
     that.highlightElement(CIVE221TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE221TraditionalPlan", "EngineeringSciences");
      CIVE221TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine14());
      that.removeLine(getLine15());
      that.removeLine(getLine34());
      that.removeLine(getLine37());
     that.unHighlightElement(CIVE221TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE221TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE221TraditionalPlanelement, category);
}
      CIVE221TraditionalPlanflag=false
  }
};
$scope.CIVE240TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE240TraditionalPlanTime <= 200) { 
        CIVE240TraditionalPlanTime = currentTime;
        return;
    }
CIVE240TraditionalPlanTime = currentTime;
  var CIVE240TraditionalPlanelement = document.getElementById("CIVE240TraditionalPlan");
 if (!CIVE240TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE240TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE240TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE240TraditionalPlan")[i];
        if (CIVE240TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE240TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CIVE240TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("CIVE240TraditionalPlan", "EngineeringProfession");
      CIVE240TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(CIVE240TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("CIVE240TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(CIVE240TraditionalPlanelement, category);
}
      CIVE240TraditionalPlanflag=false
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
      that.addLine(getLine16());
      that.addLine(getLine17());
      that.addLine(getLine18());
      that.addLine(getLine33());
     that.highlightElement(CIVE250TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE250TraditionalPlan", "EngineeringSciences");
      CIVE250TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine16());
      that.removeLine(getLine17());
      that.removeLine(getLine18());
      that.removeLine(getLine33());
     that.unHighlightElement(CIVE250TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE250TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE250TraditionalPlanelement, category);
}
      CIVE250TraditionalPlanflag=false
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
      that.addLine(getLine18());
     that.highlightElement(CIVE251TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE251TraditionalPlan", "EngineeringSciences");
      CIVE251TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine18());
     that.unHighlightElement(CIVE251TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE251TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE251TraditionalPlanelement, category);
}
      CIVE251TraditionalPlanflag=false
  }
};
$scope.CIVE295TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE295TraditionalPlanTime <= 200) { 
        CIVE295TraditionalPlanTime = currentTime;
        return;
    }
CIVE295TraditionalPlanTime = currentTime;
  var CIVE295TraditionalPlanelement = document.getElementById("CIVE295TraditionalPlan");
 if (!CIVE295TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE295TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE295TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE295TraditionalPlan")[i];
        if (CIVE295TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE295TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine19());
      that.addLine(getLine20());
      that.addLine(getLine30());
     that.highlightElement(CIVE295TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE295TraditionalPlan", "EngineeringSciences");
      CIVE295TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine19());
      that.removeLine(getLine20());
      that.removeLine(getLine30());
     that.unHighlightElement(CIVE295TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE295TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE295TraditionalPlanelement, category);
}
      CIVE295TraditionalPlanflag=false
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
      that.addLine(getLine21());
      that.addLine(getLine25());
      that.addLine(getLine28());
     that.highlightElement(MATH201TraditionalPlanelement, "Math");
     that.addToClicked("MATH201TraditionalPlan", "Math");
      MATH201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine25());
      that.removeLine(getLine28());
     that.unHighlightElement(MATH201TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH201TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH201TraditionalPlanelement, category);
}
      MATH201TraditionalPlanflag=false
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
      that.addLine(getLine22());
      that.addLine(getLine23());
     that.highlightElement(STAT235TraditionalPlanelement, "Math");
     that.addToClicked("STAT235TraditionalPlan", "Math");
      STAT235TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine22());
      that.removeLine(getLine23());
     that.unHighlightElement(STAT235TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("STAT235TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(STAT235TraditionalPlanelement, category);
}
      STAT235TraditionalPlanflag=false
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
      that.addLine(getLine24());
      that.addLine(getLine25());
      that.addLine(getLine35());
      that.addLine(getLine36());
     that.highlightElement(CIVE330TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE330TraditionalPlan", "EngineeringSciences");
      CIVE330TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine24());
      that.removeLine(getLine25());
      that.removeLine(getLine35());
      that.removeLine(getLine36());
     that.unHighlightElement(CIVE330TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE330TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE330TraditionalPlanelement, category);
}
      CIVE330TraditionalPlanflag=false
  }
};
$scope.CIVE372TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE372TraditionalPlanTime <= 200) { 
        CIVE372TraditionalPlanTime = currentTime;
        return;
    }
CIVE372TraditionalPlanTime = currentTime;
  var CIVE372TraditionalPlanelement = document.getElementById("CIVE372TraditionalPlan");
 if (!CIVE372TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE372TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE372TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE372TraditionalPlan")[i];
        if (CIVE372TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE372TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine26());
      that.addLine(getLine38());
     that.highlightElement(CIVE372TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE372TraditionalPlan", "EngineeringSciences");
      CIVE372TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine26());
      that.removeLine(getLine38());
     that.unHighlightElement(CIVE372TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE372TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE372TraditionalPlanelement, category);
}
      CIVE372TraditionalPlanflag=false
  }
};
$scope.CIVE391TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE391TraditionalPlanTime <= 200) { 
        CIVE391TraditionalPlanTime = currentTime;
        return;
    }
CIVE391TraditionalPlanTime = currentTime;
  var CIVE391TraditionalPlanelement = document.getElementById("CIVE391TraditionalPlan");
 if (!CIVE391TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE391TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE391TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE391TraditionalPlan")[i];
        if (CIVE391TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE391TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine27());
     that.highlightElement(CIVE391TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE391TraditionalPlan", "EngineeringSciences");
      CIVE391TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine27());
     that.unHighlightElement(CIVE391TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE391TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE391TraditionalPlanelement, category);
}
      CIVE391TraditionalPlanflag=false
  }
};
$scope.CIVE395TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE395TraditionalPlanTime <= 200) { 
        CIVE395TraditionalPlanTime = currentTime;
        return;
    }
CIVE395TraditionalPlanTime = currentTime;
  var CIVE395TraditionalPlanelement = document.getElementById("CIVE395TraditionalPlan");
 if (!CIVE395TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE395TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE395TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE395TraditionalPlan")[i];
        if (CIVE395TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE395TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine28());
      that.addLine(getLine29());
      that.addLine(getLine30());
     that.highlightElement(CIVE395TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE395TraditionalPlan", "EngineeringSciences");
      CIVE395TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine28());
      that.removeLine(getLine29());
      that.removeLine(getLine30());
     that.unHighlightElement(CIVE395TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE395TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE395TraditionalPlanelement, category);
}
      CIVE395TraditionalPlanflag=false
  }
};
$scope.CIVE398TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE398TraditionalPlanTime <= 200) { 
        CIVE398TraditionalPlanTime = currentTime;
        return;
    }
CIVE398TraditionalPlanTime = currentTime;
  var CIVE398TraditionalPlanelement = document.getElementById("CIVE398TraditionalPlan");
 if (!CIVE398TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE398TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE398TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE398TraditionalPlan")[i];
        if (CIVE398TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE398TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine31());
      that.addLine(getLine32());
     that.highlightElement(CIVE398TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE398TraditionalPlan", "EngineeringSciences");
      CIVE398TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine31());
      that.removeLine(getLine32());
     that.unHighlightElement(CIVE398TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE398TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE398TraditionalPlanelement, category);
}
      CIVE398TraditionalPlanflag=false
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
$scope.CIVE303TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE303TraditionalPlanTime <= 200) { 
        CIVE303TraditionalPlanTime = currentTime;
        return;
    }
CIVE303TraditionalPlanTime = currentTime;
  var CIVE303TraditionalPlanelement = document.getElementById("CIVE303TraditionalPlan");
 if (!CIVE303TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE303TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE303TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE303TraditionalPlan")[i];
        if (CIVE303TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE303TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CIVE303TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("CIVE303TraditionalPlan", "EngineeringProfession");
      CIVE303TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(CIVE303TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("CIVE303TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(CIVE303TraditionalPlanelement, category);
}
      CIVE303TraditionalPlanflag=false
  }
};
$scope.CIVE315TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE315TraditionalPlanTime <= 200) { 
        CIVE315TraditionalPlanTime = currentTime;
        return;
    }
CIVE315TraditionalPlanTime = currentTime;
  var CIVE315TraditionalPlanelement = document.getElementById("CIVE315TraditionalPlan");
 if (!CIVE315TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE315TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE315TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE315TraditionalPlan")[i];
        if (CIVE315TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE315TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine33());
     that.highlightElement(CIVE315TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE315TraditionalPlan", "EngineeringSciences");
      CIVE315TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine33());
     that.unHighlightElement(CIVE315TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE315TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE315TraditionalPlanelement, category);
}
      CIVE315TraditionalPlanflag=false
  }
};
$scope.CIVE321TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE321TraditionalPlanTime <= 200) { 
        CIVE321TraditionalPlanTime = currentTime;
        return;
    }
CIVE321TraditionalPlanTime = currentTime;
  var CIVE321TraditionalPlanelement = document.getElementById("CIVE321TraditionalPlan");
 if (!CIVE321TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE321TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE321TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE321TraditionalPlan")[i];
        if (CIVE321TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE321TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine34());
      that.addLine(getLine35());
     that.highlightElement(CIVE321TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE321TraditionalPlan", "EngineeringSciences");
      CIVE321TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine34());
      that.removeLine(getLine35());
     that.unHighlightElement(CIVE321TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE321TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE321TraditionalPlanelement, category);
}
      CIVE321TraditionalPlanflag=false
  }
};
$scope.CIVE331TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE331TraditionalPlanTime <= 200) { 
        CIVE331TraditionalPlanTime = currentTime;
        return;
    }
CIVE331TraditionalPlanTime = currentTime;
  var CIVE331TraditionalPlanelement = document.getElementById("CIVE331TraditionalPlan");
 if (!CIVE331TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE331TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE331TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE331TraditionalPlan")[i];
        if (CIVE331TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE331TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine36());
      that.addLine(getLine37());
     that.highlightElement(CIVE331TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE331TraditionalPlan", "EngineeringSciences");
      CIVE331TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine36());
      that.removeLine(getLine37());
     that.unHighlightElement(CIVE331TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE331TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE331TraditionalPlanelement, category);
}
      CIVE331TraditionalPlanflag=false
  }
};
$scope.CIVE374TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE374TraditionalPlanTime <= 200) { 
        CIVE374TraditionalPlanTime = currentTime;
        return;
    }
CIVE374TraditionalPlanTime = currentTime;
  var CIVE374TraditionalPlanelement = document.getElementById("CIVE374TraditionalPlan");
 if (!CIVE374TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("CIVE374TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("CIVE374TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("CIVE374TraditionalPlan")[i];
        if (CIVE374TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE374TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine38());
     that.highlightElement(CIVE374TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("CIVE374TraditionalPlan", "EngineeringDesign");
      CIVE374TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine38());
     that.unHighlightElement(CIVE374TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("CIVE374TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(CIVE374TraditionalPlanelement, category);
}
      CIVE374TraditionalPlanflag=false
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
      that.addLine(getLine39());
     that.highlightElement(CIVE381TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE381TraditionalPlan", "EngineeringSciences");
      CIVE381TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine39());
     that.unHighlightElement(CIVE381TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE381TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE381TraditionalPlanelement, category);
}
      CIVE381TraditionalPlanflag=false
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
$scope.ProgramTechnicalElectiveTraditionalPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan2Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan2Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan2Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan2element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan2");
 if (!ProgramTechnicalElectiveTraditionalPlan2flag) {
     if (that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan2").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan2")[i];
        if (ProgramTechnicalElectiveTraditionalPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan2element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlan2", "PROG");
      ProgramTechnicalElectiveTraditionalPlan2flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan2element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan2", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan2element, category);
}
      ProgramTechnicalElectiveTraditionalPlan2flag=false
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
$scope.MECE250TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE250TraditionalPlanTime <= 200) { 
        MECE250TraditionalPlanTime = currentTime;
        return;
    }
MECE250TraditionalPlanTime = currentTime;
  var MECE250TraditionalPlanelement = document.getElementById("MECE250TraditionalPlan");
 if (!MECE250TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MECE250TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MECE250TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MECE250TraditionalPlan")[i];
        if (MECE250TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE250TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine40());
      that.addLine(getLine41());
      that.addLine(getLine42());
     that.highlightElement(MECE250TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("MECE250TraditionalPlan", "EngineeringSciences");
      MECE250TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine40());
      that.removeLine(getLine41());
      that.removeLine(getLine42());
     that.unHighlightElement(MECE250TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE250TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE250TraditionalPlanelement, category);
}
      MECE250TraditionalPlanflag=false
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
      that.addLine(getLine43());
     that.highlightElement(CHE243TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CHE243TraditionalPlan", "EngineeringSciences");
      CHE243TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine43());
     that.unHighlightElement(CHE243TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243TraditionalPlanelement, category);
}
      CHE243TraditionalPlanflag=false
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
     that.highlightElement(ENGM310TraditionalPlanelement, "Other");
     that.addToClicked("ENGM310TraditionalPlan", "Other");
      ENGM310TraditionalPlanflag=true
  }
 else {
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
     that.highlightElement(ENGM401TraditionalPlanelement, "Other");
     that.addToClicked("ENGM401TraditionalPlan", "Other");
      ENGM401TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENGM401TraditionalPlanelement, "Other");
     var category = that.removeFromClicked("ENGM401TraditionalPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401TraditionalPlanelement, category);
}
      ENGM401TraditionalPlanflag=false
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
$scope.ENGG420TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG420TraditionalPlanTime <= 200) { 
        ENGG420TraditionalPlanTime = currentTime;
        return;
    }
ENGG420TraditionalPlanTime = currentTime;
  var ENGG420TraditionalPlanelement = document.getElementById("ENGG420TraditionalPlan");
 if (!ENGG420TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ENGG420TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ENGG420TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ENGG420TraditionalPlan")[i];
        if (ENGG420TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG420TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG420TraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG420TraditionalPlan", "EngineeringProfession");
      ENGG420TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG420TraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG420TraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG420TraditionalPlanelement, category);
}
      ENGG420TraditionalPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan3Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan3Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan3Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan3Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan3element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan3");
 if (!ProgramTechnicalElectiveTraditionalPlan3flag) {
     if (that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan3").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan3").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan3")[i];
        if (ProgramTechnicalElectiveTraditionalPlan3element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan3element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan3element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlan3", "PROG");
      ProgramTechnicalElectiveTraditionalPlan3flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan3element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan3", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan3element, category);
}
      ProgramTechnicalElectiveTraditionalPlan3flag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan4Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan4Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan4Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan4Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan4element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan4");
 if (!ProgramTechnicalElectiveTraditionalPlan4flag) {
     if (that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan4").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan4").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan4")[i];
        if (ProgramTechnicalElectiveTraditionalPlan4element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan4element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan4element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlan4", "PROG");
      ProgramTechnicalElectiveTraditionalPlan4flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan4element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan4", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan4element, category);
}
      ProgramTechnicalElectiveTraditionalPlan4flag=false
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
$scope.CIVE221TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE221TraditionalPlandesc");
 if (!CIVE221TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE221TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE221TraditionalPlanrflag=false
  }
};
$scope.CIVE240TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE240TraditionalPlandesc");
 if (!CIVE240TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE240TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE240TraditionalPlanrflag=false
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
$scope.CIVE295TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE295TraditionalPlandesc");
 if (!CIVE295TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE295TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE295TraditionalPlanrflag=false
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
$scope.CIVE372TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE372TraditionalPlandesc");
 if (!CIVE372TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE372TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE372TraditionalPlanrflag=false
  }
};
$scope.CIVE391TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE391TraditionalPlandesc");
 if (!CIVE391TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE391TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE391TraditionalPlanrflag=false
  }
};
$scope.CIVE395TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE395TraditionalPlandesc");
 if (!CIVE395TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE395TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE395TraditionalPlanrflag=false
  }
};
$scope.CIVE398TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE398TraditionalPlandesc");
 if (!CIVE398TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE398TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE398TraditionalPlanrflag=false
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
$scope.CIVE303TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE303TraditionalPlandesc");
 if (!CIVE303TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE303TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE303TraditionalPlanrflag=false
  }
};
$scope.CIVE315TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE315TraditionalPlandesc");
 if (!CIVE315TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE315TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE315TraditionalPlanrflag=false
  }
};
$scope.CIVE321TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE321TraditionalPlandesc");
 if (!CIVE321TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE321TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE321TraditionalPlanrflag=false
  }
};
$scope.CIVE331TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE331TraditionalPlandesc");
 if (!CIVE331TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE331TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE331TraditionalPlanrflag=false
  }
};
$scope.CIVE374TraditionalPlanRCListener = function () {
  var element = document.getElementById("CIVE374TraditionalPlandesc");
 if (!CIVE374TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE374TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE374TraditionalPlanrflag=false
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
$scope.ProgramTechnicalElectiveTraditionalPlan2RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan2desc");
 if (!ProgramTechnicalElectiveTraditionalPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan2rflag=false
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
$scope.MECE250TraditionalPlanRCListener = function () {
  var element = document.getElementById("MECE250TraditionalPlandesc");
 if (!MECE250TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE250TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE250TraditionalPlanrflag=false
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
$scope.ENGG420TraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG420TraditionalPlandesc");
 if (!ENGG420TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG420TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG420TraditionalPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan3RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan3desc");
 if (!ProgramTechnicalElectiveTraditionalPlan3rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan3rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan3rflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan4RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan4desc");
 if (!ProgramTechnicalElectiveTraditionalPlan4rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan4rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan4rflag=false
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
  var CHEM103EnvironmentalOptionflag = false;
  var CHEM103EnvironmentalOptionrflag = false;
 var CHEM103EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CHEM103EnvironmentalOption", []);
  var ENGG100EnvironmentalOptionflag = false;
  var ENGG100EnvironmentalOptionrflag = false;
 var ENGG100EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENGG100EnvironmentalOption", []);
  var ENGG130EnvironmentalOptionflag = false;
  var ENGG130EnvironmentalOptionrflag = false;
 var ENGG130EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENGG130EnvironmentalOption", []);
  var ENGL199EnvironmentalOptionflag = false;
  var ENGL199EnvironmentalOptionrflag = false;
 var ENGL199EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENGL199EnvironmentalOption", []);
  var MATH100EnvironmentalOptionflag = false;
  var MATH100EnvironmentalOptionrflag = false;
 var MATH100EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("MATH100EnvironmentalOption", []);
  var PHYS130EnvironmentalOptionflag = false;
  var PHYS130EnvironmentalOptionrflag = false;
 var PHYS130EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("PHYS130EnvironmentalOption", []);
  var CHEM105EnvironmentalOptionflag = false;
  var CHEM105EnvironmentalOptionrflag = false;
 var CHEM105EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CHEM105EnvironmentalOption", []);
  var ENCMP100EnvironmentalOptionflag = false;
  var ENCMP100EnvironmentalOptionrflag = false;
 var ENCMP100EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENCMP100EnvironmentalOption", []);
  var ENGG160EnvironmentalOptionflag = false;
  var ENGG160EnvironmentalOptionrflag = false;
 var ENGG160EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENGG160EnvironmentalOption", []);
  var ENPH131EnvironmentalOptionflag = false;
  var ENPH131EnvironmentalOptionrflag = false;
 var ENPH131EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENPH131EnvironmentalOption", []);
  var MATH101EnvironmentalOptionflag = false;
  var MATH101EnvironmentalOptionrflag = false;
 var MATH101EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("MATH101EnvironmentalOption", []);
  var MATH102EnvironmentalOptionflag = false;
  var MATH102EnvironmentalOptionrflag = false;
 var MATH102EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("MATH102EnvironmentalOption", []);
  var CIVE265EnvironmentalOptionflag = false;
  var CIVE265EnvironmentalOptionrflag = false;
 var CIVE265EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE265EnvironmentalOption", []);
  var CIVE270EnvironmentalOptionflag = false;
  var CIVE270EnvironmentalOptionrflag = false;
 var CIVE270EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE270EnvironmentalOption", []);
  var EAS210EnvironmentalOptionflag = false;
  var EAS210EnvironmentalOptionrflag = false;
 var EAS210EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("EAS210EnvironmentalOption", []);
  var ENVE220EnvironmentalOptionflag = false;
  var ENVE220EnvironmentalOptionrflag = false;
 var ENVE220EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE220EnvironmentalOption", []);
  var MATH209EnvironmentalOptionflag = false;
  var MATH209EnvironmentalOptionrflag = false;
 var MATH209EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("MATH209EnvironmentalOption", []);
  var CIVE240EnvironmentalOptionflag = false;
  var CIVE240EnvironmentalOptionrflag = false;
 var CIVE240EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE240EnvironmentalOption", []);
  var CIVE250EnvironmentalOptionflag = false;
  var CIVE250EnvironmentalOptionrflag = false;
 var CIVE250EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE250EnvironmentalOption", []);
  var CIVE251EnvironmentalOptionflag = false;
  var CIVE251EnvironmentalOptionrflag = false;
 var CIVE251EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE251EnvironmentalOption", []);
  var CIVE295EnvironmentalOptionflag = false;
  var CIVE295EnvironmentalOptionrflag = false;
 var CIVE295EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE295EnvironmentalOption", []);
  var ENVE251EnvironmentalOptionflag = false;
  var ENVE251EnvironmentalOptionrflag = false;
 var ENVE251EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE251EnvironmentalOption", []);
  var MATH201EnvironmentalOptionflag = false;
  var MATH201EnvironmentalOptionrflag = false;
 var MATH201EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("MATH201EnvironmentalOption", []);
  var STAT235EnvironmentalOptionflag = false;
  var STAT235EnvironmentalOptionrflag = false;
 var STAT235EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("STAT235EnvironmentalOption", []);
  var CHE243EnvironmentalOptionflag = false;
  var CHE243EnvironmentalOptionrflag = false;
 var CHE243EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CHE243EnvironmentalOption", []);
  var CIVE330EnvironmentalOptionflag = false;
  var CIVE330EnvironmentalOptionrflag = false;
 var CIVE330EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE330EnvironmentalOption", []);
  var CIVE372EnvironmentalOptionflag = false;
  var CIVE372EnvironmentalOptionrflag = false;
 var CIVE372EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE372EnvironmentalOption", []);
  var CIVE395EnvironmentalOptionflag = false;
  var CIVE395EnvironmentalOptionrflag = false;
 var CIVE395EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE395EnvironmentalOption", []);
  var ENVE324EnvironmentalOptionflag = false;
  var ENVE324EnvironmentalOptionrflag = false;
 var ENVE324EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE324EnvironmentalOption", []);
  var ENVE326EnvironmentalOptionflag = false;
  var ENVE326EnvironmentalOptionrflag = false;
 var ENVE326EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE326EnvironmentalOption", []);
  var CIVE331EnvironmentalOptionflag = false;
  var CIVE331EnvironmentalOptionrflag = false;
 var CIVE331EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE331EnvironmentalOption", []);
  var CIVE381EnvironmentalOptionflag = false;
  var CIVE381EnvironmentalOptionrflag = false;
 var CIVE381EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE381EnvironmentalOption", []);
  var ENVE302EnvironmentalOptionflag = false;
  var ENVE302EnvironmentalOptionrflag = false;
 var ENVE302EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE302EnvironmentalOption", []);
  var ENVE325EnvironmentalOptionflag = false;
  var ENVE325EnvironmentalOptionrflag = false;
 var ENVE325EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE325EnvironmentalOption", []);
  var ENGG404EnvironmentalOptionflag = false;
  var ENGG404EnvironmentalOptionrflag = false;
 var ENGG404EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENGG404EnvironmentalOption", []);
  var ComplementaryElectiveEnvironmentalOption0flag = false;
  var ComplementaryElectiveEnvironmentalOption0rflag = false;
 var ComplementaryElectiveEnvironmentalOption0Time = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ComplementaryElectiveEnvironmentalOption0", []);
  var CIVE374EnvironmentalOptionflag = false;
  var CIVE374EnvironmentalOptionrflag = false;
 var CIVE374EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE374EnvironmentalOption", []);
  var ENVE320EnvironmentalOptionflag = false;
  var ENVE320EnvironmentalOptionrflag = false;
 var ENVE320EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE320EnvironmentalOption", []);
  var ENVE421EnvironmentalOptionflag = false;
  var ENVE421EnvironmentalOptionrflag = false;
 var ENVE421EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE421EnvironmentalOption", []);
  var ENVE423EnvironmentalOptionflag = false;
  var ENVE423EnvironmentalOptionrflag = false;
 var ENVE423EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE423EnvironmentalOption", []);
  var ENVE432EnvironmentalOptionflag = false;
  var ENVE432EnvironmentalOptionrflag = false;
 var ENVE432EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE432EnvironmentalOption", []);
  var CIVE524EnvironmentalOptionflag = false;
  var CIVE524EnvironmentalOptionrflag = false;
 var CIVE524EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE524EnvironmentalOption", []);
  var CIVE526EnvironmentalOptionflag = false;
  var CIVE526EnvironmentalOptionrflag = false;
 var CIVE526EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("CIVE526EnvironmentalOption", []);
  var ENVE400EnvironmentalOptionflag = false;
  var ENVE400EnvironmentalOptionrflag = false;
 var ENVE400EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE400EnvironmentalOption", []);
  var ENGM310EnvironmentalOptionflag = false;
  var ENGM310EnvironmentalOptionrflag = false;
 var ENGM310EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENGM310EnvironmentalOption", []);
  var ENGM401EnvironmentalOptionflag = false;
  var ENGM401EnvironmentalOptionrflag = false;
 var ENGM401EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENGM401EnvironmentalOption", []);
  var ENGG400EnvironmentalOptionflag = false;
  var ENGG400EnvironmentalOptionrflag = false;
 var ENGG400EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENGG400EnvironmentalOption", []);
  var ENVE434EnvironmentalOptionflag = false;
  var ENVE434EnvironmentalOptionrflag = false;
 var ENVE434EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE434EnvironmentalOption", []);
  var ENVE440EnvironmentalOptionflag = false;
  var ENVE440EnvironmentalOptionrflag = false;
 var ENVE440EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ENVE440EnvironmentalOption", []);
  var LAW399EnvironmentalOptionflag = false;
  var LAW399EnvironmentalOptionrflag = false;
 var LAW399EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("LAW399EnvironmentalOption", []);
  var ITSElectiveEnvironmentalOption0flag = false;
  var ITSElectiveEnvironmentalOption0rflag = false;
 var ITSElectiveEnvironmentalOption0Time = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ITSElectiveEnvironmentalOption0", []);
  var ECE209EnvironmentalOptionflag = false;
  var ECE209EnvironmentalOptionrflag = false;
 var ECE209EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("ECE209EnvironmentalOption", []);
  var MATE202EnvironmentalOptionflag = false;
  var MATE202EnvironmentalOptionrflag = false;
 var MATE202EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("MATE202EnvironmentalOption", []);
  var MECE250EnvironmentalOptionflag = false;
  var MECE250EnvironmentalOptionrflag = false;
 var MECE250EnvironmentalOptionTime = new Date().getTime();
this.EnvironmentalOptionClickedMap.set("MECE250EnvironmentalOption", []);
$scope.CHEM103EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103EnvironmentalOptionTime <= 200) { 
        CHEM103EnvironmentalOptionTime = currentTime;
        return;
    }
CHEM103EnvironmentalOptionTime = currentTime;
  var CHEM103EnvironmentalOptionelement = document.getElementById("CHEM103EnvironmentalOption");
 if (!CHEM103EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CHEM103EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CHEM103EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CHEM103EnvironmentalOption")[i];
        if (CHEM103EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine46());
     that.highlightElement(CHEM103EnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("CHEM103EnvironmentalOption", "NaturalSciences");
      CHEM103EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine46());
     that.unHighlightElement(CHEM103EnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103EnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103EnvironmentalOptionelement, category);
}
      CHEM103EnvironmentalOptionflag=false
  }
};
$scope.ENGG100EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100EnvironmentalOptionTime <= 200) { 
        ENGG100EnvironmentalOptionTime = currentTime;
        return;
    }
ENGG100EnvironmentalOptionTime = currentTime;
  var ENGG100EnvironmentalOptionelement = document.getElementById("ENGG100EnvironmentalOption");
 if (!ENGG100EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENGG100EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENGG100EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENGG100EnvironmentalOption")[i];
        if (ENGG100EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100EnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("ENGG100EnvironmentalOption", "EngineeringProfession");
      ENGG100EnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(ENGG100EnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100EnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100EnvironmentalOptionelement, category);
}
      ENGG100EnvironmentalOptionflag=false
  }
};
$scope.ENGG130EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130EnvironmentalOptionTime <= 200) { 
        ENGG130EnvironmentalOptionTime = currentTime;
        return;
    }
ENGG130EnvironmentalOptionTime = currentTime;
  var ENGG130EnvironmentalOptionelement = document.getElementById("ENGG130EnvironmentalOption");
 if (!ENGG130EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENGG130EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENGG130EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENGG130EnvironmentalOption")[i];
        if (ENGG130EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine44());
      that.addLine(getLine49());
      that.addLine(getLine53());
      that.addLine(getLine99());
     that.highlightElement(ENGG130EnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("ENGG130EnvironmentalOption", "NaturalSciences");
      ENGG130EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine44());
      that.removeLine(getLine49());
      that.removeLine(getLine53());
      that.removeLine(getLine99());
     that.unHighlightElement(ENGG130EnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130EnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130EnvironmentalOptionelement, category);
}
      ENGG130EnvironmentalOptionflag=false
  }
};
$scope.ENGL199EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199EnvironmentalOptionTime <= 200) { 
        ENGL199EnvironmentalOptionTime = currentTime;
        return;
    }
ENGL199EnvironmentalOptionTime = currentTime;
  var ENGL199EnvironmentalOptionelement = document.getElementById("ENGL199EnvironmentalOption");
 if (!ENGL199EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENGL199EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENGL199EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENGL199EnvironmentalOption")[i];
        if (ENGL199EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine47());
     that.highlightElement(ENGL199EnvironmentalOptionelement, "Other");
     that.addToClicked("ENGL199EnvironmentalOption", "Other");
      ENGL199EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine47());
     that.unHighlightElement(ENGL199EnvironmentalOptionelement, "Other");
     var category = that.removeFromClicked("ENGL199EnvironmentalOption", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199EnvironmentalOptionelement, category);
}
      ENGL199EnvironmentalOptionflag=false
  }
};
$scope.MATH100EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100EnvironmentalOptionTime <= 200) { 
        MATH100EnvironmentalOptionTime = currentTime;
        return;
    }
MATH100EnvironmentalOptionTime = currentTime;
  var MATH100EnvironmentalOptionelement = document.getElementById("MATH100EnvironmentalOption");
 if (!MATH100EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("MATH100EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("MATH100EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("MATH100EnvironmentalOption")[i];
        if (MATH100EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100EnvironmentalOptionelement, cate);
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
      that.addLine(getLine67());
     that.highlightElement(MATH100EnvironmentalOptionelement, "Math");
     that.addToClicked("MATH100EnvironmentalOption", "Math");
      MATH100EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine44());
      that.removeLine(getLine45());
      that.removeLine(getLine48());
      that.removeLine(getLine51());
      that.removeLine(getLine52());
      that.removeLine(getLine67());
     that.unHighlightElement(MATH100EnvironmentalOptionelement, "Math");
     var category = that.removeFromClicked("MATH100EnvironmentalOption", "Math");
  if (category != "") { 
     that.highlightElement(MATH100EnvironmentalOptionelement, category);
}
      MATH100EnvironmentalOptionflag=false
  }
};
$scope.PHYS130EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130EnvironmentalOptionTime <= 200) { 
        PHYS130EnvironmentalOptionTime = currentTime;
        return;
    }
PHYS130EnvironmentalOptionTime = currentTime;
  var PHYS130EnvironmentalOptionelement = document.getElementById("PHYS130EnvironmentalOption");
 if (!PHYS130EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("PHYS130EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("PHYS130EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("PHYS130EnvironmentalOption")[i];
        if (PHYS130EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine45());
     that.highlightElement(PHYS130EnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("PHYS130EnvironmentalOption", "NaturalSciences");
      PHYS130EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine45());
     that.unHighlightElement(PHYS130EnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130EnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130EnvironmentalOptionelement, category);
}
      PHYS130EnvironmentalOptionflag=false
  }
};
$scope.CHEM105EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105EnvironmentalOptionTime <= 200) { 
        CHEM105EnvironmentalOptionTime = currentTime;
        return;
    }
CHEM105EnvironmentalOptionTime = currentTime;
  var CHEM105EnvironmentalOptionelement = document.getElementById("CHEM105EnvironmentalOption");
 if (!CHEM105EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CHEM105EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CHEM105EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CHEM105EnvironmentalOption")[i];
        if (CHEM105EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine46());
      that.addLine(getLine55());
      that.addLine(getLine98());
     that.highlightElement(CHEM105EnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("CHEM105EnvironmentalOption", "NaturalSciences");
      CHEM105EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine46());
      that.removeLine(getLine55());
      that.removeLine(getLine98());
     that.unHighlightElement(CHEM105EnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105EnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105EnvironmentalOptionelement, category);
}
      CHEM105EnvironmentalOptionflag=false
  }
};
$scope.ENCMP100EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100EnvironmentalOptionTime <= 200) { 
        ENCMP100EnvironmentalOptionTime = currentTime;
        return;
    }
ENCMP100EnvironmentalOptionTime = currentTime;
  var ENCMP100EnvironmentalOptionelement = document.getElementById("ENCMP100EnvironmentalOption");
 if (!ENCMP100EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENCMP100EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENCMP100EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENCMP100EnvironmentalOption")[i];
        if (ENCMP100EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine61());
     that.highlightElement(ENCMP100EnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("ENCMP100EnvironmentalOption", "NaturalSciences");
      ENCMP100EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine61());
     that.unHighlightElement(ENCMP100EnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100EnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100EnvironmentalOptionelement, category);
}
      ENCMP100EnvironmentalOptionflag=false
  }
};
$scope.ENGG160EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160EnvironmentalOptionTime <= 200) { 
        ENGG160EnvironmentalOptionTime = currentTime;
        return;
    }
ENGG160EnvironmentalOptionTime = currentTime;
  var ENGG160EnvironmentalOptionelement = document.getElementById("ENGG160EnvironmentalOption");
 if (!ENGG160EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENGG160EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENGG160EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENGG160EnvironmentalOption")[i];
        if (ENGG160EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine47());
     that.highlightElement(ENGG160EnvironmentalOptionelement, "EngineeringDesign");
     that.addToClicked("ENGG160EnvironmentalOption", "EngineeringDesign");
      ENGG160EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine47());
     that.unHighlightElement(ENGG160EnvironmentalOptionelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160EnvironmentalOption", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160EnvironmentalOptionelement, category);
}
      ENGG160EnvironmentalOptionflag=false
  }
};
$scope.ENPH131EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131EnvironmentalOptionTime <= 200) { 
        ENPH131EnvironmentalOptionTime = currentTime;
        return;
    }
ENPH131EnvironmentalOptionTime = currentTime;
  var ENPH131EnvironmentalOptionelement = document.getElementById("ENPH131EnvironmentalOption");
 if (!ENPH131EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENPH131EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENPH131EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENPH131EnvironmentalOption")[i];
        if (ENPH131EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine48());
      that.addLine(getLine49());
      that.addLine(getLine50());
      that.addLine(getLine100());
     that.highlightElement(ENPH131EnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("ENPH131EnvironmentalOption", "NaturalSciences");
      ENPH131EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine48());
      that.removeLine(getLine49());
      that.removeLine(getLine50());
      that.removeLine(getLine100());
     that.unHighlightElement(ENPH131EnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131EnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131EnvironmentalOptionelement, category);
}
      ENPH131EnvironmentalOptionflag=false
  }
};
$scope.MATH101EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101EnvironmentalOptionTime <= 200) { 
        MATH101EnvironmentalOptionTime = currentTime;
        return;
    }
MATH101EnvironmentalOptionTime = currentTime;
  var MATH101EnvironmentalOptionelement = document.getElementById("MATH101EnvironmentalOption");
 if (!MATH101EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("MATH101EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("MATH101EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("MATH101EnvironmentalOption")[i];
        if (MATH101EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine50());
      that.addLine(getLine51());
      that.addLine(getLine54());
      that.addLine(getLine56());
      that.addLine(getLine58());
      that.addLine(getLine68());
      that.addLine(getLine69());
      that.addLine(getLine101());
     that.highlightElement(MATH101EnvironmentalOptionelement, "Math");
     that.addToClicked("MATH101EnvironmentalOption", "Math");
      MATH101EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine50());
      that.removeLine(getLine51());
      that.removeLine(getLine54());
      that.removeLine(getLine56());
      that.removeLine(getLine58());
      that.removeLine(getLine68());
      that.removeLine(getLine69());
      that.removeLine(getLine101());
     that.unHighlightElement(MATH101EnvironmentalOptionelement, "Math");
     var category = that.removeFromClicked("MATH101EnvironmentalOption", "Math");
  if (category != "") { 
     that.highlightElement(MATH101EnvironmentalOptionelement, category);
}
      MATH101EnvironmentalOptionflag=false
  }
};
$scope.MATH102EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102EnvironmentalOptionTime <= 200) { 
        MATH102EnvironmentalOptionTime = currentTime;
        return;
    }
MATH102EnvironmentalOptionTime = currentTime;
  var MATH102EnvironmentalOptionelement = document.getElementById("MATH102EnvironmentalOption");
 if (!MATH102EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("MATH102EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("MATH102EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("MATH102EnvironmentalOption")[i];
        if (MATH102EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine52());
      that.addLine(getLine57());
      that.addLine(getLine59());
      that.addLine(getLine62());
     that.highlightElement(MATH102EnvironmentalOptionelement, "Math");
     that.addToClicked("MATH102EnvironmentalOption", "Math");
      MATH102EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine52());
      that.removeLine(getLine57());
      that.removeLine(getLine59());
      that.removeLine(getLine62());
     that.unHighlightElement(MATH102EnvironmentalOptionelement, "Math");
     var category = that.removeFromClicked("MATH102EnvironmentalOption", "Math");
  if (category != "") { 
     that.highlightElement(MATH102EnvironmentalOptionelement, category);
}
      MATH102EnvironmentalOptionflag=false
  }
};
$scope.CIVE265EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE265EnvironmentalOptionTime <= 200) { 
        CIVE265EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE265EnvironmentalOptionTime = currentTime;
  var CIVE265EnvironmentalOptionelement = document.getElementById("CIVE265EnvironmentalOption");
 if (!CIVE265EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE265EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE265EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE265EnvironmentalOption")[i];
        if (CIVE265EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE265EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CIVE265EnvironmentalOptionelement, "EngineeringDesign");
     that.addToClicked("CIVE265EnvironmentalOption", "EngineeringDesign");
      CIVE265EnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(CIVE265EnvironmentalOptionelement, "EngineeringDesign");
     var category = that.removeFromClicked("CIVE265EnvironmentalOption", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(CIVE265EnvironmentalOptionelement, category);
}
      CIVE265EnvironmentalOptionflag=false
  }
};
$scope.CIVE270EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270EnvironmentalOptionTime <= 200) { 
        CIVE270EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE270EnvironmentalOptionTime = currentTime;
  var CIVE270EnvironmentalOptionelement = document.getElementById("CIVE270EnvironmentalOption");
 if (!CIVE270EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE270EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE270EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE270EnvironmentalOption")[i];
        if (CIVE270EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine53());
      that.addLine(getLine54());
      that.addLine(getLine64());
      that.addLine(getLine72());
     that.highlightElement(CIVE270EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE270EnvironmentalOption", "EngineeringSciences");
      CIVE270EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine53());
      that.removeLine(getLine54());
      that.removeLine(getLine64());
      that.removeLine(getLine72());
     that.unHighlightElement(CIVE270EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270EnvironmentalOptionelement, category);
}
      CIVE270EnvironmentalOptionflag=false
  }
};
$scope.EAS210EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - EAS210EnvironmentalOptionTime <= 200) { 
        EAS210EnvironmentalOptionTime = currentTime;
        return;
    }
EAS210EnvironmentalOptionTime = currentTime;
  var EAS210EnvironmentalOptionelement = document.getElementById("EAS210EnvironmentalOption");
 if (!EAS210EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("EAS210EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("EAS210EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("EAS210EnvironmentalOption")[i];
        if (EAS210EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(EAS210EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine63());
      that.addLine(getLine80());
     that.highlightElement(EAS210EnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("EAS210EnvironmentalOption", "NaturalSciences");
      EAS210EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine63());
      that.removeLine(getLine80());
     that.unHighlightElement(EAS210EnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("EAS210EnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS210EnvironmentalOptionelement, category);
}
      EAS210EnvironmentalOptionflag=false
  }
};
$scope.ENVE220EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE220EnvironmentalOptionTime <= 200) { 
        ENVE220EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE220EnvironmentalOptionTime = currentTime;
  var ENVE220EnvironmentalOptionelement = document.getElementById("ENVE220EnvironmentalOption");
 if (!ENVE220EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE220EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE220EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE220EnvironmentalOption")[i];
        if (ENVE220EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE220EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine55());
      that.addLine(getLine76());
      that.addLine(getLine77());
      that.addLine(getLine82());
     that.highlightElement(ENVE220EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE220EnvironmentalOption", "EngineeringSciences");
      ENVE220EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine55());
      that.removeLine(getLine76());
      that.removeLine(getLine77());
      that.removeLine(getLine82());
     that.unHighlightElement(ENVE220EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE220EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE220EnvironmentalOptionelement, category);
}
      ENVE220EnvironmentalOptionflag=false
  }
};
$scope.MATH209EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209EnvironmentalOptionTime <= 200) { 
        MATH209EnvironmentalOptionTime = currentTime;
        return;
    }
MATH209EnvironmentalOptionTime = currentTime;
  var MATH209EnvironmentalOptionelement = document.getElementById("MATH209EnvironmentalOption");
 if (!MATH209EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("MATH209EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("MATH209EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("MATH209EnvironmentalOption")[i];
        if (MATH209EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine56());
      that.addLine(getLine57());
      that.addLine(getLine66());
      that.addLine(getLine70());
      that.addLine(getLine74());
     that.highlightElement(MATH209EnvironmentalOptionelement, "Math");
     that.addToClicked("MATH209EnvironmentalOption", "Math");
      MATH209EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine56());
      that.removeLine(getLine57());
      that.removeLine(getLine66());
      that.removeLine(getLine70());
      that.removeLine(getLine74());
     that.unHighlightElement(MATH209EnvironmentalOptionelement, "Math");
     var category = that.removeFromClicked("MATH209EnvironmentalOption", "Math");
  if (category != "") { 
     that.highlightElement(MATH209EnvironmentalOptionelement, category);
}
      MATH209EnvironmentalOptionflag=false
  }
};
$scope.CIVE240EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE240EnvironmentalOptionTime <= 200) { 
        CIVE240EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE240EnvironmentalOptionTime = currentTime;
  var CIVE240EnvironmentalOptionelement = document.getElementById("CIVE240EnvironmentalOption");
 if (!CIVE240EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE240EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE240EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE240EnvironmentalOption")[i];
        if (CIVE240EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE240EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CIVE240EnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("CIVE240EnvironmentalOption", "EngineeringProfession");
      CIVE240EnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(CIVE240EnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("CIVE240EnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(CIVE240EnvironmentalOptionelement, category);
}
      CIVE240EnvironmentalOptionflag=false
  }
};
$scope.CIVE250EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE250EnvironmentalOptionTime <= 200) { 
        CIVE250EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE250EnvironmentalOptionTime = currentTime;
  var CIVE250EnvironmentalOptionelement = document.getElementById("CIVE250EnvironmentalOption");
 if (!CIVE250EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE250EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE250EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE250EnvironmentalOption")[i];
        if (CIVE250EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE250EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine58());
      that.addLine(getLine59());
      that.addLine(getLine60());
     that.highlightElement(CIVE250EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE250EnvironmentalOption", "EngineeringSciences");
      CIVE250EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine58());
      that.removeLine(getLine59());
      that.removeLine(getLine60());
     that.unHighlightElement(CIVE250EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE250EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE250EnvironmentalOptionelement, category);
}
      CIVE250EnvironmentalOptionflag=false
  }
};
$scope.CIVE251EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE251EnvironmentalOptionTime <= 200) { 
        CIVE251EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE251EnvironmentalOptionTime = currentTime;
  var CIVE251EnvironmentalOptionelement = document.getElementById("CIVE251EnvironmentalOption");
 if (!CIVE251EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE251EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE251EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE251EnvironmentalOption")[i];
        if (CIVE251EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE251EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine60());
     that.highlightElement(CIVE251EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE251EnvironmentalOption", "EngineeringSciences");
      CIVE251EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine60());
     that.unHighlightElement(CIVE251EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE251EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE251EnvironmentalOptionelement, category);
}
      CIVE251EnvironmentalOptionflag=false
  }
};
$scope.CIVE295EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE295EnvironmentalOptionTime <= 200) { 
        CIVE295EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE295EnvironmentalOptionTime = currentTime;
  var CIVE295EnvironmentalOptionelement = document.getElementById("CIVE295EnvironmentalOption");
 if (!CIVE295EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE295EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE295EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE295EnvironmentalOption")[i];
        if (CIVE295EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE295EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine61());
      that.addLine(getLine62());
      that.addLine(getLine75());
      that.addLine(getLine84());
     that.highlightElement(CIVE295EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE295EnvironmentalOption", "EngineeringSciences");
      CIVE295EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine61());
      that.removeLine(getLine62());
      that.removeLine(getLine75());
      that.removeLine(getLine84());
     that.unHighlightElement(CIVE295EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE295EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE295EnvironmentalOptionelement, category);
}
      CIVE295EnvironmentalOptionflag=false
  }
};
$scope.ENVE251EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE251EnvironmentalOptionTime <= 200) { 
        ENVE251EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE251EnvironmentalOptionTime = currentTime;
  var ENVE251EnvironmentalOptionelement = document.getElementById("ENVE251EnvironmentalOption");
 if (!ENVE251EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE251EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE251EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE251EnvironmentalOption")[i];
        if (ENVE251EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE251EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine63());
      that.addLine(getLine64());
      that.addLine(getLine65());
      that.addLine(getLine95());
     that.highlightElement(ENVE251EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE251EnvironmentalOption", "EngineeringSciences");
      ENVE251EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine63());
      that.removeLine(getLine64());
      that.removeLine(getLine65());
      that.removeLine(getLine95());
     that.unHighlightElement(ENVE251EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE251EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE251EnvironmentalOptionelement, category);
}
      ENVE251EnvironmentalOptionflag=false
  }
};
$scope.MATH201EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201EnvironmentalOptionTime <= 200) { 
        MATH201EnvironmentalOptionTime = currentTime;
        return;
    }
MATH201EnvironmentalOptionTime = currentTime;
  var MATH201EnvironmentalOptionelement = document.getElementById("MATH201EnvironmentalOption");
 if (!MATH201EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("MATH201EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("MATH201EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("MATH201EnvironmentalOption")[i];
        if (MATH201EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine66());
      that.addLine(getLine71());
      that.addLine(getLine73());
     that.highlightElement(MATH201EnvironmentalOptionelement, "Math");
     that.addToClicked("MATH201EnvironmentalOption", "Math");
      MATH201EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine66());
      that.removeLine(getLine71());
      that.removeLine(getLine73());
     that.unHighlightElement(MATH201EnvironmentalOptionelement, "Math");
     var category = that.removeFromClicked("MATH201EnvironmentalOption", "Math");
  if (category != "") { 
     that.highlightElement(MATH201EnvironmentalOptionelement, category);
}
      MATH201EnvironmentalOptionflag=false
  }
};
$scope.STAT235EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - STAT235EnvironmentalOptionTime <= 200) { 
        STAT235EnvironmentalOptionTime = currentTime;
        return;
    }
STAT235EnvironmentalOptionTime = currentTime;
  var STAT235EnvironmentalOptionelement = document.getElementById("STAT235EnvironmentalOption");
 if (!STAT235EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("STAT235EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("STAT235EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("STAT235EnvironmentalOption")[i];
        if (STAT235EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(STAT235EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine65());
      that.addLine(getLine67());
      that.addLine(getLine68());
      that.addLine(getLine83());
     that.highlightElement(STAT235EnvironmentalOptionelement, "Math");
     that.addToClicked("STAT235EnvironmentalOption", "Math");
      STAT235EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine65());
      that.removeLine(getLine67());
      that.removeLine(getLine68());
      that.removeLine(getLine83());
     that.unHighlightElement(STAT235EnvironmentalOptionelement, "Math");
     var category = that.removeFromClicked("STAT235EnvironmentalOption", "Math");
  if (category != "") { 
     that.highlightElement(STAT235EnvironmentalOptionelement, category);
}
      STAT235EnvironmentalOptionflag=false
  }
};
$scope.CHE243EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243EnvironmentalOptionTime <= 200) { 
        CHE243EnvironmentalOptionTime = currentTime;
        return;
    }
CHE243EnvironmentalOptionTime = currentTime;
  var CHE243EnvironmentalOptionelement = document.getElementById("CHE243EnvironmentalOption");
 if (!CHE243EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CHE243EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CHE243EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CHE243EnvironmentalOption")[i];
        if (CHE243EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine69());
     that.highlightElement(CHE243EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CHE243EnvironmentalOption", "EngineeringSciences");
      CHE243EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine69());
     that.unHighlightElement(CHE243EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243EnvironmentalOptionelement, category);
}
      CHE243EnvironmentalOptionflag=false
  }
};
$scope.CIVE330EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE330EnvironmentalOptionTime <= 200) { 
        CIVE330EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE330EnvironmentalOptionTime = currentTime;
  var CIVE330EnvironmentalOptionelement = document.getElementById("CIVE330EnvironmentalOption");
 if (!CIVE330EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE330EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE330EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE330EnvironmentalOption")[i];
        if (CIVE330EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE330EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine70());
      that.addLine(getLine71());
      that.addLine(getLine78());
      that.addLine(getLine85());
      that.addLine(getLine87());
     that.highlightElement(CIVE330EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE330EnvironmentalOption", "EngineeringSciences");
      CIVE330EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine70());
      that.removeLine(getLine71());
      that.removeLine(getLine78());
      that.removeLine(getLine85());
      that.removeLine(getLine87());
     that.unHighlightElement(CIVE330EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE330EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE330EnvironmentalOptionelement, category);
}
      CIVE330EnvironmentalOptionflag=false
  }
};
$scope.CIVE372EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE372EnvironmentalOptionTime <= 200) { 
        CIVE372EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE372EnvironmentalOptionTime = currentTime;
  var CIVE372EnvironmentalOptionelement = document.getElementById("CIVE372EnvironmentalOption");
 if (!CIVE372EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE372EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE372EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE372EnvironmentalOption")[i];
        if (CIVE372EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE372EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine72());
      that.addLine(getLine86());
     that.highlightElement(CIVE372EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE372EnvironmentalOption", "EngineeringSciences");
      CIVE372EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine72());
      that.removeLine(getLine86());
     that.unHighlightElement(CIVE372EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE372EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE372EnvironmentalOptionelement, category);
}
      CIVE372EnvironmentalOptionflag=false
  }
};
$scope.CIVE395EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE395EnvironmentalOptionTime <= 200) { 
        CIVE395EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE395EnvironmentalOptionTime = currentTime;
  var CIVE395EnvironmentalOptionelement = document.getElementById("CIVE395EnvironmentalOption");
 if (!CIVE395EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE395EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE395EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE395EnvironmentalOption")[i];
        if (CIVE395EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE395EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine73());
      that.addLine(getLine74());
      that.addLine(getLine75());
     that.highlightElement(CIVE395EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE395EnvironmentalOption", "EngineeringSciences");
      CIVE395EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine73());
      that.removeLine(getLine74());
      that.removeLine(getLine75());
     that.unHighlightElement(CIVE395EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE395EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE395EnvironmentalOptionelement, category);
}
      CIVE395EnvironmentalOptionflag=false
  }
};
$scope.ENVE324EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE324EnvironmentalOptionTime <= 200) { 
        ENVE324EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE324EnvironmentalOptionTime = currentTime;
  var ENVE324EnvironmentalOptionelement = document.getElementById("ENVE324EnvironmentalOption");
 if (!ENVE324EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE324EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE324EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE324EnvironmentalOption")[i];
        if (ENVE324EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE324EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine76());
      that.addLine(getLine91());
      that.addLine(getLine92());
      that.addLine(getLine96());
     that.highlightElement(ENVE324EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE324EnvironmentalOption", "EngineeringSciences");
      ENVE324EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine76());
      that.removeLine(getLine91());
      that.removeLine(getLine92());
      that.removeLine(getLine96());
     that.unHighlightElement(ENVE324EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE324EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE324EnvironmentalOptionelement, category);
}
      ENVE324EnvironmentalOptionflag=false
  }
};
$scope.ENVE326EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE326EnvironmentalOptionTime <= 200) { 
        ENVE326EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE326EnvironmentalOptionTime = currentTime;
  var ENVE326EnvironmentalOptionelement = document.getElementById("ENVE326EnvironmentalOption");
 if (!ENVE326EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE326EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE326EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE326EnvironmentalOption")[i];
        if (ENVE326EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE326EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine77());
     that.highlightElement(ENVE326EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE326EnvironmentalOption", "EngineeringSciences");
      ENVE326EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine77());
     that.unHighlightElement(ENVE326EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE326EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE326EnvironmentalOptionelement, category);
}
      ENVE326EnvironmentalOptionflag=false
  }
};
$scope.CIVE331EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE331EnvironmentalOptionTime <= 200) { 
        CIVE331EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE331EnvironmentalOptionTime = currentTime;
  var CIVE331EnvironmentalOptionelement = document.getElementById("CIVE331EnvironmentalOption");
 if (!CIVE331EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE331EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE331EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE331EnvironmentalOption")[i];
        if (CIVE331EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE331EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine78());
      that.addLine(getLine79());
      that.addLine(getLine88());
      that.addLine(getLine89());
     that.highlightElement(CIVE331EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE331EnvironmentalOption", "EngineeringSciences");
      CIVE331EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine78());
      that.removeLine(getLine79());
      that.removeLine(getLine88());
      that.removeLine(getLine89());
     that.unHighlightElement(CIVE331EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE331EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE331EnvironmentalOptionelement, category);
}
      CIVE331EnvironmentalOptionflag=false
  }
};
$scope.CIVE381EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE381EnvironmentalOptionTime <= 200) { 
        CIVE381EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE381EnvironmentalOptionTime = currentTime;
  var CIVE381EnvironmentalOptionelement = document.getElementById("CIVE381EnvironmentalOption");
 if (!CIVE381EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE381EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE381EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE381EnvironmentalOption")[i];
        if (CIVE381EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE381EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine80());
      that.addLine(getLine94());
     that.highlightElement(CIVE381EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE381EnvironmentalOption", "EngineeringSciences");
      CIVE381EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine80());
      that.removeLine(getLine94());
     that.unHighlightElement(CIVE381EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE381EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE381EnvironmentalOptionelement, category);
}
      CIVE381EnvironmentalOptionflag=false
  }
};
$scope.ENVE302EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE302EnvironmentalOptionTime <= 200) { 
        ENVE302EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE302EnvironmentalOptionTime = currentTime;
  var ENVE302EnvironmentalOptionelement = document.getElementById("ENVE302EnvironmentalOption");
 if (!ENVE302EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE302EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE302EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE302EnvironmentalOption")[i];
        if (ENVE302EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE302EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine81());
     that.highlightElement(ENVE302EnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("ENVE302EnvironmentalOption", "EngineeringProfession");
      ENVE302EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine81());
     that.unHighlightElement(ENVE302EnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENVE302EnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENVE302EnvironmentalOptionelement, category);
}
      ENVE302EnvironmentalOptionflag=false
  }
};
$scope.ENVE325EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE325EnvironmentalOptionTime <= 200) { 
        ENVE325EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE325EnvironmentalOptionTime = currentTime;
  var ENVE325EnvironmentalOptionelement = document.getElementById("ENVE325EnvironmentalOption");
 if (!ENVE325EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE325EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE325EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE325EnvironmentalOption")[i];
        if (ENVE325EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE325EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine79());
      that.addLine(getLine81());
      that.addLine(getLine82());
      that.addLine(getLine83());
      that.addLine(getLine84());
      that.addLine(getLine85());
      that.addLine(getLine90());
      that.addLine(getLine93());
     that.highlightElement(ENVE325EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE325EnvironmentalOption", "EngineeringSciences");
      ENVE325EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine79());
      that.removeLine(getLine81());
      that.removeLine(getLine82());
      that.removeLine(getLine83());
      that.removeLine(getLine84());
      that.removeLine(getLine85());
      that.removeLine(getLine90());
      that.removeLine(getLine93());
     that.unHighlightElement(ENVE325EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE325EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE325EnvironmentalOptionelement, category);
}
      ENVE325EnvironmentalOptionflag=false
  }
};
$scope.ENGG404EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404EnvironmentalOptionTime <= 200) { 
        ENGG404EnvironmentalOptionTime = currentTime;
        return;
    }
ENGG404EnvironmentalOptionTime = currentTime;
  var ENGG404EnvironmentalOptionelement = document.getElementById("ENGG404EnvironmentalOption");
 if (!ENGG404EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENGG404EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENGG404EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENGG404EnvironmentalOption")[i];
        if (ENGG404EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404EnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("ENGG404EnvironmentalOption", "EngineeringProfession");
      ENGG404EnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(ENGG404EnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404EnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404EnvironmentalOptionelement, category);
}
      ENGG404EnvironmentalOptionflag=false
  }
};
$scope.ComplementaryElectiveEnvironmentalOption0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveEnvironmentalOption0Time <= 200) { 
        ComplementaryElectiveEnvironmentalOption0Time = currentTime;
        return;
    }
ComplementaryElectiveEnvironmentalOption0Time = currentTime;
  var ComplementaryElectiveEnvironmentalOption0element = document.getElementById("ComplementaryElectiveEnvironmentalOption0");
 if (!ComplementaryElectiveEnvironmentalOption0flag) {
     if (that.EnvironmentalOptionClickedMap.get("ComplementaryElectiveEnvironmentalOption0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ComplementaryElectiveEnvironmentalOption0").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ComplementaryElectiveEnvironmentalOption0")[i];
        if (ComplementaryElectiveEnvironmentalOption0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveEnvironmentalOption0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveEnvironmentalOption0element, "COMP");
     that.addToClicked("ComplementaryElectiveEnvironmentalOption0", "COMP");
      ComplementaryElectiveEnvironmentalOption0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveEnvironmentalOption0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveEnvironmentalOption0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveEnvironmentalOption0element, category);
}
      ComplementaryElectiveEnvironmentalOption0flag=false
  }
};
$scope.CIVE374EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE374EnvironmentalOptionTime <= 200) { 
        CIVE374EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE374EnvironmentalOptionTime = currentTime;
  var CIVE374EnvironmentalOptionelement = document.getElementById("CIVE374EnvironmentalOption");
 if (!CIVE374EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE374EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE374EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE374EnvironmentalOption")[i];
        if (CIVE374EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE374EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine86());
     that.highlightElement(CIVE374EnvironmentalOptionelement, "EngineeringDesign");
     that.addToClicked("CIVE374EnvironmentalOption", "EngineeringDesign");
      CIVE374EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine86());
     that.unHighlightElement(CIVE374EnvironmentalOptionelement, "EngineeringDesign");
     var category = that.removeFromClicked("CIVE374EnvironmentalOption", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(CIVE374EnvironmentalOptionelement, category);
}
      CIVE374EnvironmentalOptionflag=false
  }
};
$scope.ENVE320EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE320EnvironmentalOptionTime <= 200) { 
        ENVE320EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE320EnvironmentalOptionTime = currentTime;
  var ENVE320EnvironmentalOptionelement = document.getElementById("ENVE320EnvironmentalOption");
 if (!ENVE320EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE320EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE320EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE320EnvironmentalOption")[i];
        if (ENVE320EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE320EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine87());
      that.addLine(getLine88());
     that.highlightElement(ENVE320EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE320EnvironmentalOption", "EngineeringSciences");
      ENVE320EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine87());
      that.removeLine(getLine88());
     that.unHighlightElement(ENVE320EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE320EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE320EnvironmentalOptionelement, category);
}
      ENVE320EnvironmentalOptionflag=false
  }
};
$scope.ENVE421EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE421EnvironmentalOptionTime <= 200) { 
        ENVE421EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE421EnvironmentalOptionTime = currentTime;
  var ENVE421EnvironmentalOptionelement = document.getElementById("ENVE421EnvironmentalOption");
 if (!ENVE421EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE421EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE421EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE421EnvironmentalOption")[i];
        if (ENVE421EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE421EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine89());
      that.addLine(getLine97());
     that.highlightElement(ENVE421EnvironmentalOptionelement, "EngineeringDesign");
     that.addToClicked("ENVE421EnvironmentalOption", "EngineeringDesign");
      ENVE421EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine89());
      that.removeLine(getLine97());
     that.unHighlightElement(ENVE421EnvironmentalOptionelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENVE421EnvironmentalOption", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENVE421EnvironmentalOptionelement, category);
}
      ENVE421EnvironmentalOptionflag=false
  }
};
$scope.ENVE423EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE423EnvironmentalOptionTime <= 200) { 
        ENVE423EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE423EnvironmentalOptionTime = currentTime;
  var ENVE423EnvironmentalOptionelement = document.getElementById("ENVE423EnvironmentalOption");
 if (!ENVE423EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE423EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE423EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE423EnvironmentalOption")[i];
        if (ENVE423EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE423EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine90());
     that.highlightElement(ENVE423EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE423EnvironmentalOption", "EngineeringSciences");
      ENVE423EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine90());
     that.unHighlightElement(ENVE423EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE423EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE423EnvironmentalOptionelement, category);
}
      ENVE423EnvironmentalOptionflag=false
  }
};
$scope.ENVE432EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE432EnvironmentalOptionTime <= 200) { 
        ENVE432EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE432EnvironmentalOptionTime = currentTime;
  var ENVE432EnvironmentalOptionelement = document.getElementById("ENVE432EnvironmentalOption");
 if (!ENVE432EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE432EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE432EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE432EnvironmentalOption")[i];
        if (ENVE432EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE432EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine91());
     that.highlightElement(ENVE432EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE432EnvironmentalOption", "EngineeringSciences");
      ENVE432EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine91());
     that.unHighlightElement(ENVE432EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE432EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE432EnvironmentalOptionelement, category);
}
      ENVE432EnvironmentalOptionflag=false
  }
};
$scope.CIVE524EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE524EnvironmentalOptionTime <= 200) { 
        CIVE524EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE524EnvironmentalOptionTime = currentTime;
  var CIVE524EnvironmentalOptionelement = document.getElementById("CIVE524EnvironmentalOption");
 if (!CIVE524EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE524EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE524EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE524EnvironmentalOption")[i];
        if (CIVE524EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE524EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine92());
     that.highlightElement(CIVE524EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE524EnvironmentalOption", "EngineeringSciences");
      CIVE524EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine92());
     that.unHighlightElement(CIVE524EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE524EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE524EnvironmentalOptionelement, category);
}
      CIVE524EnvironmentalOptionflag=false
  }
};
$scope.CIVE526EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE526EnvironmentalOptionTime <= 200) { 
        CIVE526EnvironmentalOptionTime = currentTime;
        return;
    }
CIVE526EnvironmentalOptionTime = currentTime;
  var CIVE526EnvironmentalOptionelement = document.getElementById("CIVE526EnvironmentalOption");
 if (!CIVE526EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("CIVE526EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("CIVE526EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("CIVE526EnvironmentalOption")[i];
        if (CIVE526EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE526EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CIVE526EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE526EnvironmentalOption", "EngineeringSciences");
      CIVE526EnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(CIVE526EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE526EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE526EnvironmentalOptionelement, category);
}
      CIVE526EnvironmentalOptionflag=false
  }
};
$scope.ENVE400EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE400EnvironmentalOptionTime <= 200) { 
        ENVE400EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE400EnvironmentalOptionTime = currentTime;
  var ENVE400EnvironmentalOptionelement = document.getElementById("ENVE400EnvironmentalOption");
 if (!ENVE400EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE400EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE400EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE400EnvironmentalOption")[i];
        if (ENVE400EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE400EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine93());
     that.highlightElement(ENVE400EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE400EnvironmentalOption", "EngineeringSciences");
      ENVE400EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine93());
     that.unHighlightElement(ENVE400EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE400EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE400EnvironmentalOptionelement, category);
}
      ENVE400EnvironmentalOptionflag=false
  }
};
$scope.ENGM310EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310EnvironmentalOptionTime <= 200) { 
        ENGM310EnvironmentalOptionTime = currentTime;
        return;
    }
ENGM310EnvironmentalOptionTime = currentTime;
  var ENGM310EnvironmentalOptionelement = document.getElementById("ENGM310EnvironmentalOption");
 if (!ENGM310EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENGM310EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENGM310EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENGM310EnvironmentalOption")[i];
        if (ENGM310EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM310EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGM310EnvironmentalOptionelement, "Other");
     that.addToClicked("ENGM310EnvironmentalOption", "Other");
      ENGM310EnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(ENGM310EnvironmentalOptionelement, "Other");
     var category = that.removeFromClicked("ENGM310EnvironmentalOption", "Other");
  if (category != "") { 
     that.highlightElement(ENGM310EnvironmentalOptionelement, category);
}
      ENGM310EnvironmentalOptionflag=false
  }
};
$scope.ENGM401EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401EnvironmentalOptionTime <= 200) { 
        ENGM401EnvironmentalOptionTime = currentTime;
        return;
    }
ENGM401EnvironmentalOptionTime = currentTime;
  var ENGM401EnvironmentalOptionelement = document.getElementById("ENGM401EnvironmentalOption");
 if (!ENGM401EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENGM401EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENGM401EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENGM401EnvironmentalOption")[i];
        if (ENGM401EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGM401EnvironmentalOptionelement, "Other");
     that.addToClicked("ENGM401EnvironmentalOption", "Other");
      ENGM401EnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(ENGM401EnvironmentalOptionelement, "Other");
     var category = that.removeFromClicked("ENGM401EnvironmentalOption", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401EnvironmentalOptionelement, category);
}
      ENGM401EnvironmentalOptionflag=false
  }
};
$scope.ENGG400EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400EnvironmentalOptionTime <= 200) { 
        ENGG400EnvironmentalOptionTime = currentTime;
        return;
    }
ENGG400EnvironmentalOptionTime = currentTime;
  var ENGG400EnvironmentalOptionelement = document.getElementById("ENGG400EnvironmentalOption");
 if (!ENGG400EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENGG400EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENGG400EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENGG400EnvironmentalOption")[i];
        if (ENGG400EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400EnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("ENGG400EnvironmentalOption", "EngineeringProfession");
      ENGG400EnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(ENGG400EnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400EnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400EnvironmentalOptionelement, category);
}
      ENGG400EnvironmentalOptionflag=false
  }
};
$scope.ENVE434EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE434EnvironmentalOptionTime <= 200) { 
        ENVE434EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE434EnvironmentalOptionTime = currentTime;
  var ENVE434EnvironmentalOptionelement = document.getElementById("ENVE434EnvironmentalOption");
 if (!ENVE434EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE434EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE434EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE434EnvironmentalOption")[i];
        if (ENVE434EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE434EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine94());
      that.addLine(getLine95());
     that.highlightElement(ENVE434EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE434EnvironmentalOption", "EngineeringSciences");
      ENVE434EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine94());
      that.removeLine(getLine95());
     that.unHighlightElement(ENVE434EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE434EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE434EnvironmentalOptionelement, category);
}
      ENVE434EnvironmentalOptionflag=false
  }
};
$scope.ENVE440EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE440EnvironmentalOptionTime <= 200) { 
        ENVE440EnvironmentalOptionTime = currentTime;
        return;
    }
ENVE440EnvironmentalOptionTime = currentTime;
  var ENVE440EnvironmentalOptionelement = document.getElementById("ENVE440EnvironmentalOption");
 if (!ENVE440EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ENVE440EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ENVE440EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ENVE440EnvironmentalOption")[i];
        if (ENVE440EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE440EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine96());
      that.addLine(getLine97());
     that.highlightElement(ENVE440EnvironmentalOptionelement, "EngineeringDesign");
     that.addToClicked("ENVE440EnvironmentalOption", "EngineeringDesign");
      ENVE440EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine96());
      that.removeLine(getLine97());
     that.unHighlightElement(ENVE440EnvironmentalOptionelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENVE440EnvironmentalOption", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENVE440EnvironmentalOptionelement, category);
}
      ENVE440EnvironmentalOptionflag=false
  }
};
$scope.LAW399EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - LAW399EnvironmentalOptionTime <= 200) { 
        LAW399EnvironmentalOptionTime = currentTime;
        return;
    }
LAW399EnvironmentalOptionTime = currentTime;
  var LAW399EnvironmentalOptionelement = document.getElementById("LAW399EnvironmentalOption");
 if (!LAW399EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("LAW399EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("LAW399EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("LAW399EnvironmentalOption")[i];
        if (LAW399EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(LAW399EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(LAW399EnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("LAW399EnvironmentalOption", "EngineeringProfession");
      LAW399EnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(LAW399EnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("LAW399EnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(LAW399EnvironmentalOptionelement, category);
}
      LAW399EnvironmentalOptionflag=false
  }
};
$scope.ITSElectiveEnvironmentalOption0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveEnvironmentalOption0Time <= 200) { 
        ITSElectiveEnvironmentalOption0Time = currentTime;
        return;
    }
ITSElectiveEnvironmentalOption0Time = currentTime;
  var ITSElectiveEnvironmentalOption0element = document.getElementById("ITSElectiveEnvironmentalOption0");
 if (!ITSElectiveEnvironmentalOption0flag) {
     if (that.EnvironmentalOptionClickedMap.get("ITSElectiveEnvironmentalOption0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ITSElectiveEnvironmentalOption0").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ITSElectiveEnvironmentalOption0")[i];
        if (ITSElectiveEnvironmentalOption0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveEnvironmentalOption0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveEnvironmentalOption0element, "ITS");
     that.addToClicked("ITSElectiveEnvironmentalOption0", "ITS");
      ITSElectiveEnvironmentalOption0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveEnvironmentalOption0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveEnvironmentalOption0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveEnvironmentalOption0element, category);
}
      ITSElectiveEnvironmentalOption0flag=false
  }
};
$scope.ECE209EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE209EnvironmentalOptionTime <= 200) { 
        ECE209EnvironmentalOptionTime = currentTime;
        return;
    }
ECE209EnvironmentalOptionTime = currentTime;
  var ECE209EnvironmentalOptionelement = document.getElementById("ECE209EnvironmentalOption");
 if (!ECE209EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("ECE209EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("ECE209EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("ECE209EnvironmentalOption")[i];
        if (ECE209EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE209EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE209EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ECE209EnvironmentalOption", "EngineeringSciences");
      ECE209EnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(ECE209EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE209EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE209EnvironmentalOptionelement, category);
}
      ECE209EnvironmentalOptionflag=false
  }
};
$scope.MATE202EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE202EnvironmentalOptionTime <= 200) { 
        MATE202EnvironmentalOptionTime = currentTime;
        return;
    }
MATE202EnvironmentalOptionTime = currentTime;
  var MATE202EnvironmentalOptionelement = document.getElementById("MATE202EnvironmentalOption");
 if (!MATE202EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("MATE202EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("MATE202EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("MATE202EnvironmentalOption")[i];
        if (MATE202EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE202EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine98());
     that.highlightElement(MATE202EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("MATE202EnvironmentalOption", "EngineeringSciences");
      MATE202EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine98());
     that.unHighlightElement(MATE202EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE202EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE202EnvironmentalOptionelement, category);
}
      MATE202EnvironmentalOptionflag=false
  }
};
$scope.MECE250EnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE250EnvironmentalOptionTime <= 200) { 
        MECE250EnvironmentalOptionTime = currentTime;
        return;
    }
MECE250EnvironmentalOptionTime = currentTime;
  var MECE250EnvironmentalOptionelement = document.getElementById("MECE250EnvironmentalOption");
 if (!MECE250EnvironmentalOptionflag) {
     if (that.EnvironmentalOptionClickedMap.get("MECE250EnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.EnvironmentalOptionClickedMap.get("MECE250EnvironmentalOption").length; i++) { 
        var cate = that.EnvironmentalOptionClickedMap.get("MECE250EnvironmentalOption")[i];
        if (MECE250EnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE250EnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine99());
      that.addLine(getLine100());
      that.addLine(getLine101());
     that.highlightElement(MECE250EnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("MECE250EnvironmentalOption", "EngineeringSciences");
      MECE250EnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine99());
      that.removeLine(getLine100());
      that.removeLine(getLine101());
     that.unHighlightElement(MECE250EnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE250EnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE250EnvironmentalOptionelement, category);
}
      MECE250EnvironmentalOptionflag=false
  }
};
$scope.CHEM103EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CHEM103EnvironmentalOptiondesc");
 if (!CHEM103EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103EnvironmentalOptionrflag=false
  }
};
$scope.ENGG100EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGG100EnvironmentalOptiondesc");
 if (!ENGG100EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100EnvironmentalOptionrflag=false
  }
};
$scope.ENGG130EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGG130EnvironmentalOptiondesc");
 if (!ENGG130EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130EnvironmentalOptionrflag=false
  }
};
$scope.ENGL199EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGL199EnvironmentalOptiondesc");
 if (!ENGL199EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199EnvironmentalOptionrflag=false
  }
};
$scope.MATH100EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MATH100EnvironmentalOptiondesc");
 if (!MATH100EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100EnvironmentalOptionrflag=false
  }
};
$scope.PHYS130EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("PHYS130EnvironmentalOptiondesc");
 if (!PHYS130EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130EnvironmentalOptionrflag=false
  }
};
$scope.CHEM105EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CHEM105EnvironmentalOptiondesc");
 if (!CHEM105EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105EnvironmentalOptionrflag=false
  }
};
$scope.ENCMP100EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENCMP100EnvironmentalOptiondesc");
 if (!ENCMP100EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100EnvironmentalOptionrflag=false
  }
};
$scope.ENGG160EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGG160EnvironmentalOptiondesc");
 if (!ENGG160EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160EnvironmentalOptionrflag=false
  }
};
$scope.ENPH131EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENPH131EnvironmentalOptiondesc");
 if (!ENPH131EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131EnvironmentalOptionrflag=false
  }
};
$scope.MATH101EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MATH101EnvironmentalOptiondesc");
 if (!MATH101EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101EnvironmentalOptionrflag=false
  }
};
$scope.MATH102EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MATH102EnvironmentalOptiondesc");
 if (!MATH102EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102EnvironmentalOptionrflag=false
  }
};
$scope.CIVE265EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE265EnvironmentalOptiondesc");
 if (!CIVE265EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE265EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE265EnvironmentalOptionrflag=false
  }
};
$scope.CIVE270EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE270EnvironmentalOptiondesc");
 if (!CIVE270EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270EnvironmentalOptionrflag=false
  }
};
$scope.EAS210EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("EAS210EnvironmentalOptiondesc");
 if (!EAS210EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      EAS210EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      EAS210EnvironmentalOptionrflag=false
  }
};
$scope.ENVE220EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE220EnvironmentalOptiondesc");
 if (!ENVE220EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE220EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE220EnvironmentalOptionrflag=false
  }
};
$scope.MATH209EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MATH209EnvironmentalOptiondesc");
 if (!MATH209EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209EnvironmentalOptionrflag=false
  }
};
$scope.CIVE240EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE240EnvironmentalOptiondesc");
 if (!CIVE240EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE240EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE240EnvironmentalOptionrflag=false
  }
};
$scope.CIVE250EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE250EnvironmentalOptiondesc");
 if (!CIVE250EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE250EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE250EnvironmentalOptionrflag=false
  }
};
$scope.CIVE251EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE251EnvironmentalOptiondesc");
 if (!CIVE251EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE251EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE251EnvironmentalOptionrflag=false
  }
};
$scope.CIVE295EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE295EnvironmentalOptiondesc");
 if (!CIVE295EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE295EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE295EnvironmentalOptionrflag=false
  }
};
$scope.ENVE251EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE251EnvironmentalOptiondesc");
 if (!ENVE251EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE251EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE251EnvironmentalOptionrflag=false
  }
};
$scope.MATH201EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MATH201EnvironmentalOptiondesc");
 if (!MATH201EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201EnvironmentalOptionrflag=false
  }
};
$scope.STAT235EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("STAT235EnvironmentalOptiondesc");
 if (!STAT235EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      STAT235EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      STAT235EnvironmentalOptionrflag=false
  }
};
$scope.CHE243EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CHE243EnvironmentalOptiondesc");
 if (!CHE243EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243EnvironmentalOptionrflag=false
  }
};
$scope.CIVE330EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE330EnvironmentalOptiondesc");
 if (!CIVE330EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE330EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE330EnvironmentalOptionrflag=false
  }
};
$scope.CIVE372EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE372EnvironmentalOptiondesc");
 if (!CIVE372EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE372EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE372EnvironmentalOptionrflag=false
  }
};
$scope.CIVE395EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE395EnvironmentalOptiondesc");
 if (!CIVE395EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE395EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE395EnvironmentalOptionrflag=false
  }
};
$scope.ENVE324EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE324EnvironmentalOptiondesc");
 if (!ENVE324EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE324EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE324EnvironmentalOptionrflag=false
  }
};
$scope.ENVE326EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE326EnvironmentalOptiondesc");
 if (!ENVE326EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE326EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE326EnvironmentalOptionrflag=false
  }
};
$scope.CIVE331EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE331EnvironmentalOptiondesc");
 if (!CIVE331EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE331EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE331EnvironmentalOptionrflag=false
  }
};
$scope.CIVE381EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE381EnvironmentalOptiondesc");
 if (!CIVE381EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE381EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE381EnvironmentalOptionrflag=false
  }
};
$scope.ENVE302EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE302EnvironmentalOptiondesc");
 if (!ENVE302EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE302EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE302EnvironmentalOptionrflag=false
  }
};
$scope.ENVE325EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE325EnvironmentalOptiondesc");
 if (!ENVE325EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE325EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE325EnvironmentalOptionrflag=false
  }
};
$scope.ENGG404EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGG404EnvironmentalOptiondesc");
 if (!ENGG404EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404EnvironmentalOptionrflag=false
  }
};
$scope.ComplementaryElectiveEnvironmentalOption0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveEnvironmentalOption0desc");
 if (!ComplementaryElectiveEnvironmentalOption0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveEnvironmentalOption0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveEnvironmentalOption0rflag=false
  }
};
$scope.CIVE374EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE374EnvironmentalOptiondesc");
 if (!CIVE374EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE374EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE374EnvironmentalOptionrflag=false
  }
};
$scope.ENVE320EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE320EnvironmentalOptiondesc");
 if (!ENVE320EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE320EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE320EnvironmentalOptionrflag=false
  }
};
$scope.ENVE421EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE421EnvironmentalOptiondesc");
 if (!ENVE421EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE421EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE421EnvironmentalOptionrflag=false
  }
};
$scope.ENVE423EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE423EnvironmentalOptiondesc");
 if (!ENVE423EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE423EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE423EnvironmentalOptionrflag=false
  }
};
$scope.ENVE432EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE432EnvironmentalOptiondesc");
 if (!ENVE432EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE432EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE432EnvironmentalOptionrflag=false
  }
};
$scope.CIVE524EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE524EnvironmentalOptiondesc");
 if (!CIVE524EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE524EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE524EnvironmentalOptionrflag=false
  }
};
$scope.CIVE526EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE526EnvironmentalOptiondesc");
 if (!CIVE526EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE526EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE526EnvironmentalOptionrflag=false
  }
};
$scope.ENVE400EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE400EnvironmentalOptiondesc");
 if (!ENVE400EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE400EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE400EnvironmentalOptionrflag=false
  }
};
$scope.ENGM310EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGM310EnvironmentalOptiondesc");
 if (!ENGM310EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310EnvironmentalOptionrflag=false
  }
};
$scope.ENGM401EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGM401EnvironmentalOptiondesc");
 if (!ENGM401EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401EnvironmentalOptionrflag=false
  }
};
$scope.ENGG400EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGG400EnvironmentalOptiondesc");
 if (!ENGG400EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400EnvironmentalOptionrflag=false
  }
};
$scope.ENVE434EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE434EnvironmentalOptiondesc");
 if (!ENVE434EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE434EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE434EnvironmentalOptionrflag=false
  }
};
$scope.ENVE440EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE440EnvironmentalOptiondesc");
 if (!ENVE440EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE440EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE440EnvironmentalOptionrflag=false
  }
};
$scope.LAW399EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("LAW399EnvironmentalOptiondesc");
 if (!LAW399EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      LAW399EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      LAW399EnvironmentalOptionrflag=false
  }
};
$scope.ITSElectiveEnvironmentalOption0RCListener = function () {
  var element = document.getElementById("ITSElectiveEnvironmentalOption0desc");
 if (!ITSElectiveEnvironmentalOption0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveEnvironmentalOption0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveEnvironmentalOption0rflag=false
  }
};
$scope.ECE209EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ECE209EnvironmentalOptiondesc");
 if (!ECE209EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE209EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE209EnvironmentalOptionrflag=false
  }
};
$scope.MATE202EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MATE202EnvironmentalOptiondesc");
 if (!MATE202EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE202EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE202EnvironmentalOptionrflag=false
  }
};
$scope.MECE250EnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MECE250EnvironmentalOptiondesc");
 if (!MECE250EnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE250EnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE250EnvironmentalOptionrflag=false
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
  var CIVE265CoopPlanflag = false;
  var CIVE265CoopPlanrflag = false;
 var CIVE265CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE265CoopPlan", []);
  var CIVE270CoopPlanflag = false;
  var CIVE270CoopPlanrflag = false;
 var CIVE270CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE270CoopPlan", []);
  var ENGG299CoopPlanflag = false;
  var ENGG299CoopPlanrflag = false;
 var ENGG299CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG299CoopPlan", []);
  var EAS210CoopPlanflag = false;
  var EAS210CoopPlanrflag = false;
 var EAS210CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("EAS210CoopPlan", []);
  var MATE202CoopPlanflag = false;
  var MATE202CoopPlanrflag = false;
 var MATE202CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE202CoopPlan", []);
  var MATH209CoopPlanflag = false;
  var MATH209CoopPlanrflag = false;
 var MATH209CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH209CoopPlan", []);
  var CIVE221CoopPlanflag = false;
  var CIVE221CoopPlanrflag = false;
 var CIVE221CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE221CoopPlan", []);
  var CIVE240CoopPlanflag = false;
  var CIVE240CoopPlanrflag = false;
 var CIVE240CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE240CoopPlan", []);
  var CIVE250CoopPlanflag = false;
  var CIVE250CoopPlanrflag = false;
 var CIVE250CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE250CoopPlan", []);
  var CIVE251CoopPlanflag = false;
  var CIVE251CoopPlanrflag = false;
 var CIVE251CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE251CoopPlan", []);
  var CIVE295CoopPlanflag = false;
  var CIVE295CoopPlanrflag = false;
 var CIVE295CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE295CoopPlan", []);
  var MATH201CoopPlanflag = false;
  var MATH201CoopPlanrflag = false;
 var MATH201CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH201CoopPlan", []);
  var STAT235CoopPlanflag = false;
  var STAT235CoopPlanrflag = false;
 var STAT235CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("STAT235CoopPlan", []);
  var WKEXP901CoopPlanflag = false;
  var WKEXP901CoopPlanrflag = false;
 var WKEXP901CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP901CoopPlan", []);
  var WKEXP902CoopPlanflag = false;
  var WKEXP902CoopPlanrflag = false;
 var WKEXP902CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP902CoopPlan", []);
  var CIVE303CoopPlanflag = false;
  var CIVE303CoopPlanrflag = false;
 var CIVE303CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE303CoopPlan", []);
  var CIVE315CoopPlanflag = false;
  var CIVE315CoopPlanrflag = false;
 var CIVE315CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE315CoopPlan", []);
  var CIVE321CoopPlanflag = false;
  var CIVE321CoopPlanrflag = false;
 var CIVE321CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE321CoopPlan", []);
  var CIVE330CoopPlanflag = false;
  var CIVE330CoopPlanrflag = false;
 var CIVE330CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE330CoopPlan", []);
  var CIVE372CoopPlanflag = false;
  var CIVE372CoopPlanrflag = false;
 var CIVE372CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE372CoopPlan", []);
  var CIVE395CoopPlanflag = false;
  var CIVE395CoopPlanrflag = false;
 var CIVE395CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE395CoopPlan", []);
  var WKEXP903CoopPlanflag = false;
  var WKEXP903CoopPlanrflag = false;
 var WKEXP903CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP903CoopPlan", []);
  var CIVE331CoopPlanflag = false;
  var CIVE331CoopPlanrflag = false;
 var CIVE331CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE331CoopPlan", []);
  var CIVE374CoopPlanflag = false;
  var CIVE374CoopPlanrflag = false;
 var CIVE374CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE374CoopPlan", []);
  var CIVE381CoopPlanflag = false;
  var CIVE381CoopPlanrflag = false;
 var CIVE381CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE381CoopPlan", []);
  var CIVE391CoopPlanflag = false;
  var CIVE391CoopPlanrflag = false;
 var CIVE391CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE391CoopPlan", []);
  var CIVE398CoopPlanflag = false;
  var CIVE398CoopPlanrflag = false;
 var CIVE398CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CIVE398CoopPlan", []);
  var ComplementaryElectiveCoopPlan0flag = false;
  var ComplementaryElectiveCoopPlan0rflag = false;
 var ComplementaryElectiveCoopPlan0Time = new Date().getTime();
this.CoopPlanClickedMap.set("ComplementaryElectiveCoopPlan0", []);
  var WKEXP904CoopPlanflag = false;
  var WKEXP904CoopPlanrflag = false;
 var WKEXP904CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP904CoopPlan", []);
  var WKEXP905CoopPlanflag = false;
  var WKEXP905CoopPlanrflag = false;
 var WKEXP905CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP905CoopPlan", []);
  var ENGG404CoopPlanflag = false;
  var ENGG404CoopPlanrflag = false;
 var ENGG404CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG404CoopPlan", []);
  var ProgramTechnicalElectiveCoopPlan0flag = false;
  var ProgramTechnicalElectiveCoopPlan0rflag = false;
 var ProgramTechnicalElectiveCoopPlan0Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan0", []);
  var ProgramTechnicalElectiveCoopPlan1flag = false;
  var ProgramTechnicalElectiveCoopPlan1rflag = false;
 var ProgramTechnicalElectiveCoopPlan1Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan1", []);
  var ProgramTechnicalElectiveCoopPlan2flag = false;
  var ProgramTechnicalElectiveCoopPlan2rflag = false;
 var ProgramTechnicalElectiveCoopPlan2Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan2", []);
  var ECE209CoopPlanflag = false;
  var ECE209CoopPlanrflag = false;
 var ECE209CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE209CoopPlan", []);
  var MECE250CoopPlanflag = false;
  var MECE250CoopPlanrflag = false;
 var MECE250CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MECE250CoopPlan", []);
  var CHE243CoopPlanflag = false;
  var CHE243CoopPlanrflag = false;
 var CHE243CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHE243CoopPlan", []);
  var ENGM310CoopPlanflag = false;
  var ENGM310CoopPlanrflag = false;
 var ENGM310CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGM310CoopPlan", []);
  var ENGM401CoopPlanflag = false;
  var ENGM401CoopPlanrflag = false;
 var ENGM401CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGM401CoopPlan", []);
  var ENGG400CoopPlanflag = false;
  var ENGG400CoopPlanrflag = false;
 var ENGG400CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG400CoopPlan", []);
  var ENGG420CoopPlanflag = false;
  var ENGG420CoopPlanrflag = false;
 var ENGG420CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG420CoopPlan", []);
  var ProgramTechnicalElectiveCoopPlan3flag = false;
  var ProgramTechnicalElectiveCoopPlan3rflag = false;
 var ProgramTechnicalElectiveCoopPlan3Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan3", []);
  var ProgramTechnicalElectiveCoopPlan4flag = false;
  var ProgramTechnicalElectiveCoopPlan4rflag = false;
 var ProgramTechnicalElectiveCoopPlan4Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan4", []);
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
      that.addLine(getLine104());
      that.addLine(getLine116());
     that.highlightElement(CHEM103CoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM103CoopPlan", "NaturalSciences");
      CHEM103CoopPlanflag=true
  }
 else {
      that.removeLine(getLine104());
      that.removeLine(getLine116());
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
      that.addLine(getLine102());
      that.addLine(getLine107());
      that.addLine(getLine111());
      that.addLine(getLine147());
     that.highlightElement(ENGG130CoopPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130CoopPlan", "NaturalSciences");
      ENGG130CoopPlanflag=true
  }
 else {
      that.removeLine(getLine102());
      that.removeLine(getLine107());
      that.removeLine(getLine111());
      that.removeLine(getLine147());
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
      that.addLine(getLine105());
     that.highlightElement(ENGL199CoopPlanelement, "Other");
     that.addToClicked("ENGL199CoopPlan", "Other");
      ENGL199CoopPlanflag=true
  }
 else {
      that.removeLine(getLine105());
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
      that.addLine(getLine102());
      that.addLine(getLine103());
      that.addLine(getLine106());
      that.addLine(getLine109());
      that.addLine(getLine110());
      that.addLine(getLine124());
     that.highlightElement(MATH100CoopPlanelement, "Math");
     that.addToClicked("MATH100CoopPlan", "Math");
      MATH100CoopPlanflag=true
  }
 else {
      that.removeLine(getLine102());
      that.removeLine(getLine103());
      that.removeLine(getLine106());
      that.removeLine(getLine109());
      that.removeLine(getLine110());
      that.removeLine(getLine124());
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
      that.addLine(getLine103());
     that.highlightElement(PHYS130CoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS130CoopPlan", "NaturalSciences");
      PHYS130CoopPlanflag=true
  }
 else {
      that.removeLine(getLine103());
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
      that.addLine(getLine104());
      that.addLine(getLine113());
      that.addLine(getLine117());
     that.highlightElement(CHEM105CoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105CoopPlan", "NaturalSciences");
      CHEM105CoopPlanflag=true
  }
 else {
      that.removeLine(getLine104());
      that.removeLine(getLine113());
      that.removeLine(getLine117());
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
      that.addLine(getLine121());
     that.highlightElement(ENCMP100CoopPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100CoopPlan", "NaturalSciences");
      ENCMP100CoopPlanflag=true
  }
 else {
      that.removeLine(getLine121());
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
      that.addLine(getLine105());
     that.highlightElement(ENGG160CoopPlanelement, "EngineeringDesign");
     that.addToClicked("ENGG160CoopPlan", "EngineeringDesign");
      ENGG160CoopPlanflag=true
  }
 else {
      that.removeLine(getLine105());
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
      that.addLine(getLine106());
      that.addLine(getLine107());
      that.addLine(getLine108());
      that.addLine(getLine148());
     that.highlightElement(ENPH131CoopPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131CoopPlan", "NaturalSciences");
      ENPH131CoopPlanflag=true
  }
 else {
      that.removeLine(getLine106());
      that.removeLine(getLine107());
      that.removeLine(getLine108());
      that.removeLine(getLine148());
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
      that.addLine(getLine108());
      that.addLine(getLine109());
      that.addLine(getLine112());
      that.addLine(getLine114());
      that.addLine(getLine118());
      that.addLine(getLine125());
      that.addLine(getLine149());
      that.addLine(getLine150());
     that.highlightElement(MATH101CoopPlanelement, "Math");
     that.addToClicked("MATH101CoopPlan", "Math");
      MATH101CoopPlanflag=true
  }
 else {
      that.removeLine(getLine108());
      that.removeLine(getLine109());
      that.removeLine(getLine112());
      that.removeLine(getLine114());
      that.removeLine(getLine118());
      that.removeLine(getLine125());
      that.removeLine(getLine149());
      that.removeLine(getLine150());
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
      that.addLine(getLine110());
      that.addLine(getLine115());
      that.addLine(getLine119());
      that.addLine(getLine122());
     that.highlightElement(MATH102CoopPlanelement, "Math");
     that.addToClicked("MATH102CoopPlan", "Math");
      MATH102CoopPlanflag=true
  }
 else {
      that.removeLine(getLine110());
      that.removeLine(getLine115());
      that.removeLine(getLine119());
      that.removeLine(getLine122());
     that.unHighlightElement(MATH102CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH102CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH102CoopPlanelement, category);
}
      MATH102CoopPlanflag=false
  }
};
$scope.CIVE265CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE265CoopPlanTime <= 200) { 
        CIVE265CoopPlanTime = currentTime;
        return;
    }
CIVE265CoopPlanTime = currentTime;
  var CIVE265CoopPlanelement = document.getElementById("CIVE265CoopPlan");
 if (!CIVE265CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE265CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE265CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE265CoopPlan")[i];
        if (CIVE265CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE265CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CIVE265CoopPlanelement, "EngineeringDesign");
     that.addToClicked("CIVE265CoopPlan", "EngineeringDesign");
      CIVE265CoopPlanflag=true
  }
 else {
     that.unHighlightElement(CIVE265CoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("CIVE265CoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(CIVE265CoopPlanelement, category);
}
      CIVE265CoopPlanflag=false
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
      that.addLine(getLine111());
      that.addLine(getLine112());
      that.addLine(getLine133());
      that.addLine(getLine143());
     that.highlightElement(CIVE270CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE270CoopPlan", "EngineeringSciences");
      CIVE270CoopPlanflag=true
  }
 else {
      that.removeLine(getLine111());
      that.removeLine(getLine112());
      that.removeLine(getLine133());
      that.removeLine(getLine143());
     that.unHighlightElement(CIVE270CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270CoopPlanelement, category);
}
      CIVE270CoopPlanflag=false
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
      that.addLine(getLine126());
     that.highlightElement(ENGG299CoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG299CoopPlan", "EngineeringProfession");
      ENGG299CoopPlanflag=true
  }
 else {
      that.removeLine(getLine126());
     that.unHighlightElement(ENGG299CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299CoopPlanelement, category);
}
      ENGG299CoopPlanflag=false
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
      that.addLine(getLine141());
     that.highlightElement(EAS210CoopPlanelement, "NaturalSciences");
     that.addToClicked("EAS210CoopPlan", "NaturalSciences");
      EAS210CoopPlanflag=true
  }
 else {
      that.removeLine(getLine141());
     that.unHighlightElement(EAS210CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("EAS210CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS210CoopPlanelement, category);
}
      EAS210CoopPlanflag=false
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
      that.addLine(getLine113());
      that.addLine(getLine142());
     that.highlightElement(MATE202CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MATE202CoopPlan", "EngineeringSciences");
      MATE202CoopPlanflag=true
  }
 else {
      that.removeLine(getLine113());
      that.removeLine(getLine142());
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
      that.addLine(getLine114());
      that.addLine(getLine115());
      that.addLine(getLine123());
      that.addLine(getLine131());
      that.addLine(getLine135());
      that.addLine(getLine144());
     that.highlightElement(MATH209CoopPlanelement, "Math");
     that.addToClicked("MATH209CoopPlan", "Math");
      MATH209CoopPlanflag=true
  }
 else {
      that.removeLine(getLine114());
      that.removeLine(getLine115());
      that.removeLine(getLine123());
      that.removeLine(getLine131());
      that.removeLine(getLine135());
      that.removeLine(getLine144());
     that.unHighlightElement(MATH209CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH209CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209CoopPlanelement, category);
}
      MATH209CoopPlanflag=false
  }
};
$scope.CIVE221CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE221CoopPlanTime <= 200) { 
        CIVE221CoopPlanTime = currentTime;
        return;
    }
CIVE221CoopPlanTime = currentTime;
  var CIVE221CoopPlanelement = document.getElementById("CIVE221CoopPlan");
 if (!CIVE221CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE221CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE221CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE221CoopPlan")[i];
        if (CIVE221CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE221CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine116());
      that.addLine(getLine117());
      that.addLine(getLine129());
      that.addLine(getLine139());
     that.highlightElement(CIVE221CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE221CoopPlan", "EngineeringSciences");
      CIVE221CoopPlanflag=true
  }
 else {
      that.removeLine(getLine116());
      that.removeLine(getLine117());
      that.removeLine(getLine129());
      that.removeLine(getLine139());
     that.unHighlightElement(CIVE221CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE221CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE221CoopPlanelement, category);
}
      CIVE221CoopPlanflag=false
  }
};
$scope.CIVE240CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE240CoopPlanTime <= 200) { 
        CIVE240CoopPlanTime = currentTime;
        return;
    }
CIVE240CoopPlanTime = currentTime;
  var CIVE240CoopPlanelement = document.getElementById("CIVE240CoopPlan");
 if (!CIVE240CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE240CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE240CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE240CoopPlan")[i];
        if (CIVE240CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE240CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CIVE240CoopPlanelement, "EngineeringProfession");
     that.addToClicked("CIVE240CoopPlan", "EngineeringProfession");
      CIVE240CoopPlanflag=true
  }
 else {
     that.unHighlightElement(CIVE240CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("CIVE240CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(CIVE240CoopPlanelement, category);
}
      CIVE240CoopPlanflag=false
  }
};
$scope.CIVE250CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE250CoopPlanTime <= 200) { 
        CIVE250CoopPlanTime = currentTime;
        return;
    }
CIVE250CoopPlanTime = currentTime;
  var CIVE250CoopPlanelement = document.getElementById("CIVE250CoopPlan");
 if (!CIVE250CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE250CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE250CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE250CoopPlan")[i];
        if (CIVE250CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE250CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine118());
      that.addLine(getLine119());
      that.addLine(getLine120());
      that.addLine(getLine128());
     that.highlightElement(CIVE250CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE250CoopPlan", "EngineeringSciences");
      CIVE250CoopPlanflag=true
  }
 else {
      that.removeLine(getLine118());
      that.removeLine(getLine119());
      that.removeLine(getLine120());
      that.removeLine(getLine128());
     that.unHighlightElement(CIVE250CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE250CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE250CoopPlanelement, category);
}
      CIVE250CoopPlanflag=false
  }
};
$scope.CIVE251CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE251CoopPlanTime <= 200) { 
        CIVE251CoopPlanTime = currentTime;
        return;
    }
CIVE251CoopPlanTime = currentTime;
  var CIVE251CoopPlanelement = document.getElementById("CIVE251CoopPlan");
 if (!CIVE251CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE251CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE251CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE251CoopPlan")[i];
        if (CIVE251CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE251CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine120());
     that.highlightElement(CIVE251CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE251CoopPlan", "EngineeringSciences");
      CIVE251CoopPlanflag=true
  }
 else {
      that.removeLine(getLine120());
     that.unHighlightElement(CIVE251CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE251CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE251CoopPlanelement, category);
}
      CIVE251CoopPlanflag=false
  }
};
$scope.CIVE295CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE295CoopPlanTime <= 200) { 
        CIVE295CoopPlanTime = currentTime;
        return;
    }
CIVE295CoopPlanTime = currentTime;
  var CIVE295CoopPlanelement = document.getElementById("CIVE295CoopPlan");
 if (!CIVE295CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE295CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE295CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE295CoopPlan")[i];
        if (CIVE295CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE295CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine121());
      that.addLine(getLine122());
      that.addLine(getLine136());
     that.highlightElement(CIVE295CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE295CoopPlan", "EngineeringSciences");
      CIVE295CoopPlanflag=true
  }
 else {
      that.removeLine(getLine121());
      that.removeLine(getLine122());
      that.removeLine(getLine136());
     that.unHighlightElement(CIVE295CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE295CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE295CoopPlanelement, category);
}
      CIVE295CoopPlanflag=false
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
      that.addLine(getLine123());
      that.addLine(getLine132());
      that.addLine(getLine134());
     that.highlightElement(MATH201CoopPlanelement, "Math");
     that.addToClicked("MATH201CoopPlan", "Math");
      MATH201CoopPlanflag=true
  }
 else {
      that.removeLine(getLine123());
      that.removeLine(getLine132());
      that.removeLine(getLine134());
     that.unHighlightElement(MATH201CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH201CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH201CoopPlanelement, category);
}
      MATH201CoopPlanflag=false
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
      that.addLine(getLine124());
      that.addLine(getLine125());
     that.highlightElement(STAT235CoopPlanelement, "Math");
     that.addToClicked("STAT235CoopPlan", "Math");
      STAT235CoopPlanflag=true
  }
 else {
      that.removeLine(getLine124());
      that.removeLine(getLine125());
     that.unHighlightElement(STAT235CoopPlanelement, "Math");
     var category = that.removeFromClicked("STAT235CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(STAT235CoopPlanelement, category);
}
      STAT235CoopPlanflag=false
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
      that.addLine(getLine126());
      that.addLine(getLine127());
     that.highlightElement(WKEXP901CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP901CoopPlan", "EngineeringProfession");
      WKEXP901CoopPlanflag=true
  }
 else {
      that.removeLine(getLine126());
      that.removeLine(getLine127());
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
      that.addLine(getLine127());
      that.addLine(getLine137());
     that.highlightElement(WKEXP902CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP902CoopPlan", "EngineeringProfession");
      WKEXP902CoopPlanflag=true
  }
 else {
      that.removeLine(getLine127());
      that.removeLine(getLine137());
     that.unHighlightElement(WKEXP902CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP902CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP902CoopPlanelement, category);
}
      WKEXP902CoopPlanflag=false
  }
};
$scope.CIVE303CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE303CoopPlanTime <= 200) { 
        CIVE303CoopPlanTime = currentTime;
        return;
    }
CIVE303CoopPlanTime = currentTime;
  var CIVE303CoopPlanelement = document.getElementById("CIVE303CoopPlan");
 if (!CIVE303CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE303CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE303CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE303CoopPlan")[i];
        if (CIVE303CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE303CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CIVE303CoopPlanelement, "EngineeringProfession");
     that.addToClicked("CIVE303CoopPlan", "EngineeringProfession");
      CIVE303CoopPlanflag=true
  }
 else {
     that.unHighlightElement(CIVE303CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("CIVE303CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(CIVE303CoopPlanelement, category);
}
      CIVE303CoopPlanflag=false
  }
};
$scope.CIVE315CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE315CoopPlanTime <= 200) { 
        CIVE315CoopPlanTime = currentTime;
        return;
    }
CIVE315CoopPlanTime = currentTime;
  var CIVE315CoopPlanelement = document.getElementById("CIVE315CoopPlan");
 if (!CIVE315CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE315CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE315CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE315CoopPlan")[i];
        if (CIVE315CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE315CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine128());
     that.highlightElement(CIVE315CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE315CoopPlan", "EngineeringSciences");
      CIVE315CoopPlanflag=true
  }
 else {
      that.removeLine(getLine128());
     that.unHighlightElement(CIVE315CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE315CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE315CoopPlanelement, category);
}
      CIVE315CoopPlanflag=false
  }
};
$scope.CIVE321CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE321CoopPlanTime <= 200) { 
        CIVE321CoopPlanTime = currentTime;
        return;
    }
CIVE321CoopPlanTime = currentTime;
  var CIVE321CoopPlanelement = document.getElementById("CIVE321CoopPlan");
 if (!CIVE321CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE321CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE321CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE321CoopPlan")[i];
        if (CIVE321CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE321CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine129());
      that.addLine(getLine130());
     that.highlightElement(CIVE321CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE321CoopPlan", "EngineeringSciences");
      CIVE321CoopPlanflag=true
  }
 else {
      that.removeLine(getLine129());
      that.removeLine(getLine130());
     that.unHighlightElement(CIVE321CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE321CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE321CoopPlanelement, category);
}
      CIVE321CoopPlanflag=false
  }
};
$scope.CIVE330CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE330CoopPlanTime <= 200) { 
        CIVE330CoopPlanTime = currentTime;
        return;
    }
CIVE330CoopPlanTime = currentTime;
  var CIVE330CoopPlanelement = document.getElementById("CIVE330CoopPlan");
 if (!CIVE330CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE330CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE330CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE330CoopPlan")[i];
        if (CIVE330CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE330CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine130());
      that.addLine(getLine131());
      that.addLine(getLine132());
      that.addLine(getLine138());
     that.highlightElement(CIVE330CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE330CoopPlan", "EngineeringSciences");
      CIVE330CoopPlanflag=true
  }
 else {
      that.removeLine(getLine130());
      that.removeLine(getLine131());
      that.removeLine(getLine132());
      that.removeLine(getLine138());
     that.unHighlightElement(CIVE330CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE330CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE330CoopPlanelement, category);
}
      CIVE330CoopPlanflag=false
  }
};
$scope.CIVE372CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE372CoopPlanTime <= 200) { 
        CIVE372CoopPlanTime = currentTime;
        return;
    }
CIVE372CoopPlanTime = currentTime;
  var CIVE372CoopPlanelement = document.getElementById("CIVE372CoopPlan");
 if (!CIVE372CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE372CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE372CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE372CoopPlan")[i];
        if (CIVE372CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE372CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine133());
      that.addLine(getLine140());
     that.highlightElement(CIVE372CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE372CoopPlan", "EngineeringSciences");
      CIVE372CoopPlanflag=true
  }
 else {
      that.removeLine(getLine133());
      that.removeLine(getLine140());
     that.unHighlightElement(CIVE372CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE372CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE372CoopPlanelement, category);
}
      CIVE372CoopPlanflag=false
  }
};
$scope.CIVE395CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE395CoopPlanTime <= 200) { 
        CIVE395CoopPlanTime = currentTime;
        return;
    }
CIVE395CoopPlanTime = currentTime;
  var CIVE395CoopPlanelement = document.getElementById("CIVE395CoopPlan");
 if (!CIVE395CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE395CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE395CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE395CoopPlan")[i];
        if (CIVE395CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE395CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine134());
      that.addLine(getLine135());
      that.addLine(getLine136());
     that.highlightElement(CIVE395CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE395CoopPlan", "EngineeringSciences");
      CIVE395CoopPlanflag=true
  }
 else {
      that.removeLine(getLine134());
      that.removeLine(getLine135());
      that.removeLine(getLine136());
     that.unHighlightElement(CIVE395CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE395CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE395CoopPlanelement, category);
}
      CIVE395CoopPlanflag=false
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
      that.addLine(getLine137());
      that.addLine(getLine145());
     that.highlightElement(WKEXP903CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP903CoopPlan", "EngineeringProfession");
      WKEXP903CoopPlanflag=true
  }
 else {
      that.removeLine(getLine137());
      that.removeLine(getLine145());
     that.unHighlightElement(WKEXP903CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP903CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP903CoopPlanelement, category);
}
      WKEXP903CoopPlanflag=false
  }
};
$scope.CIVE331CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE331CoopPlanTime <= 200) { 
        CIVE331CoopPlanTime = currentTime;
        return;
    }
CIVE331CoopPlanTime = currentTime;
  var CIVE331CoopPlanelement = document.getElementById("CIVE331CoopPlan");
 if (!CIVE331CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE331CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE331CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE331CoopPlan")[i];
        if (CIVE331CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE331CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine138());
      that.addLine(getLine139());
     that.highlightElement(CIVE331CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE331CoopPlan", "EngineeringSciences");
      CIVE331CoopPlanflag=true
  }
 else {
      that.removeLine(getLine138());
      that.removeLine(getLine139());
     that.unHighlightElement(CIVE331CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE331CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE331CoopPlanelement, category);
}
      CIVE331CoopPlanflag=false
  }
};
$scope.CIVE374CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE374CoopPlanTime <= 200) { 
        CIVE374CoopPlanTime = currentTime;
        return;
    }
CIVE374CoopPlanTime = currentTime;
  var CIVE374CoopPlanelement = document.getElementById("CIVE374CoopPlan");
 if (!CIVE374CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE374CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE374CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE374CoopPlan")[i];
        if (CIVE374CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE374CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine140());
     that.highlightElement(CIVE374CoopPlanelement, "EngineeringDesign");
     that.addToClicked("CIVE374CoopPlan", "EngineeringDesign");
      CIVE374CoopPlanflag=true
  }
 else {
      that.removeLine(getLine140());
     that.unHighlightElement(CIVE374CoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("CIVE374CoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(CIVE374CoopPlanelement, category);
}
      CIVE374CoopPlanflag=false
  }
};
$scope.CIVE381CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE381CoopPlanTime <= 200) { 
        CIVE381CoopPlanTime = currentTime;
        return;
    }
CIVE381CoopPlanTime = currentTime;
  var CIVE381CoopPlanelement = document.getElementById("CIVE381CoopPlan");
 if (!CIVE381CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE381CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE381CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE381CoopPlan")[i];
        if (CIVE381CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE381CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine141());
     that.highlightElement(CIVE381CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE381CoopPlan", "EngineeringSciences");
      CIVE381CoopPlanflag=true
  }
 else {
      that.removeLine(getLine141());
     that.unHighlightElement(CIVE381CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE381CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE381CoopPlanelement, category);
}
      CIVE381CoopPlanflag=false
  }
};
$scope.CIVE391CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE391CoopPlanTime <= 200) { 
        CIVE391CoopPlanTime = currentTime;
        return;
    }
CIVE391CoopPlanTime = currentTime;
  var CIVE391CoopPlanelement = document.getElementById("CIVE391CoopPlan");
 if (!CIVE391CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE391CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE391CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE391CoopPlan")[i];
        if (CIVE391CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE391CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine142());
     that.highlightElement(CIVE391CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE391CoopPlan", "EngineeringSciences");
      CIVE391CoopPlanflag=true
  }
 else {
      that.removeLine(getLine142());
     that.unHighlightElement(CIVE391CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE391CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE391CoopPlanelement, category);
}
      CIVE391CoopPlanflag=false
  }
};
$scope.CIVE398CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE398CoopPlanTime <= 200) { 
        CIVE398CoopPlanTime = currentTime;
        return;
    }
CIVE398CoopPlanTime = currentTime;
  var CIVE398CoopPlanelement = document.getElementById("CIVE398CoopPlan");
 if (!CIVE398CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("CIVE398CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("CIVE398CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("CIVE398CoopPlan")[i];
        if (CIVE398CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE398CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine143());
      that.addLine(getLine144());
     that.highlightElement(CIVE398CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CIVE398CoopPlan", "EngineeringSciences");
      CIVE398CoopPlanflag=true
  }
 else {
      that.removeLine(getLine143());
      that.removeLine(getLine144());
     that.unHighlightElement(CIVE398CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE398CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE398CoopPlanelement, category);
}
      CIVE398CoopPlanflag=false
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
      that.addLine(getLine145());
      that.addLine(getLine146());
     that.highlightElement(WKEXP904CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP904CoopPlan", "EngineeringProfession");
      WKEXP904CoopPlanflag=true
  }
 else {
      that.removeLine(getLine145());
      that.removeLine(getLine146());
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
      that.addLine(getLine146());
     that.highlightElement(WKEXP905CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP905CoopPlan", "EngineeringProfession");
      WKEXP905CoopPlanflag=true
  }
 else {
      that.removeLine(getLine146());
     that.unHighlightElement(WKEXP905CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP905CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP905CoopPlanelement, category);
}
      WKEXP905CoopPlanflag=false
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
$scope.ProgramTechnicalElectiveCoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan2Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan2Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan2Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan2element = document.getElementById("ProgramTechnicalElectiveCoopPlan2");
 if (!ProgramTechnicalElectiveCoopPlan2flag) {
     if (that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan2").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan2")[i];
        if (ProgramTechnicalElectiveCoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan2element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan2", "PROG");
      ProgramTechnicalElectiveCoopPlan2flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan2element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan2", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan2element, category);
}
      ProgramTechnicalElectiveCoopPlan2flag=false
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
$scope.MECE250CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE250CoopPlanTime <= 200) { 
        MECE250CoopPlanTime = currentTime;
        return;
    }
MECE250CoopPlanTime = currentTime;
  var MECE250CoopPlanelement = document.getElementById("MECE250CoopPlan");
 if (!MECE250CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MECE250CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MECE250CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MECE250CoopPlan")[i];
        if (MECE250CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE250CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine147());
      that.addLine(getLine148());
      that.addLine(getLine149());
     that.highlightElement(MECE250CoopPlanelement, "EngineeringSciences");
     that.addToClicked("MECE250CoopPlan", "EngineeringSciences");
      MECE250CoopPlanflag=true
  }
 else {
      that.removeLine(getLine147());
      that.removeLine(getLine148());
      that.removeLine(getLine149());
     that.unHighlightElement(MECE250CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE250CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE250CoopPlanelement, category);
}
      MECE250CoopPlanflag=false
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
      that.addLine(getLine150());
     that.highlightElement(CHE243CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CHE243CoopPlan", "EngineeringSciences");
      CHE243CoopPlanflag=true
  }
 else {
      that.removeLine(getLine150());
     that.unHighlightElement(CHE243CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243CoopPlanelement, category);
}
      CHE243CoopPlanflag=false
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
     that.highlightElement(ENGM310CoopPlanelement, "Other");
     that.addToClicked("ENGM310CoopPlan", "Other");
      ENGM310CoopPlanflag=true
  }
 else {
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
     that.highlightElement(ENGM401CoopPlanelement, "Other");
     that.addToClicked("ENGM401CoopPlan", "Other");
      ENGM401CoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENGM401CoopPlanelement, "Other");
     var category = that.removeFromClicked("ENGM401CoopPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401CoopPlanelement, category);
}
      ENGM401CoopPlanflag=false
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
$scope.ENGG420CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG420CoopPlanTime <= 200) { 
        ENGG420CoopPlanTime = currentTime;
        return;
    }
ENGG420CoopPlanTime = currentTime;
  var ENGG420CoopPlanelement = document.getElementById("ENGG420CoopPlan");
 if (!ENGG420CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ENGG420CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ENGG420CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ENGG420CoopPlan")[i];
        if (ENGG420CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG420CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG420CoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG420CoopPlan", "EngineeringProfession");
      ENGG420CoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG420CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG420CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG420CoopPlanelement, category);
}
      ENGG420CoopPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan3Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan3Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan3Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan3Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan3element = document.getElementById("ProgramTechnicalElectiveCoopPlan3");
 if (!ProgramTechnicalElectiveCoopPlan3flag) {
     if (that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan3").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan3").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan3")[i];
        if (ProgramTechnicalElectiveCoopPlan3element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan3element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan3element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan3", "PROG");
      ProgramTechnicalElectiveCoopPlan3flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan3element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan3", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan3element, category);
}
      ProgramTechnicalElectiveCoopPlan3flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan4Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan4Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan4Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan4Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan4element = document.getElementById("ProgramTechnicalElectiveCoopPlan4");
 if (!ProgramTechnicalElectiveCoopPlan4flag) {
     if (that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan4").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan4").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ProgramTechnicalElectiveCoopPlan4")[i];
        if (ProgramTechnicalElectiveCoopPlan4element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan4element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan4element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan4", "PROG");
      ProgramTechnicalElectiveCoopPlan4flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan4element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan4", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan4element, category);
}
      ProgramTechnicalElectiveCoopPlan4flag=false
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
$scope.CIVE265CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE265CoopPlandesc");
 if (!CIVE265CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE265CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE265CoopPlanrflag=false
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
$scope.CIVE221CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE221CoopPlandesc");
 if (!CIVE221CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE221CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE221CoopPlanrflag=false
  }
};
$scope.CIVE240CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE240CoopPlandesc");
 if (!CIVE240CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE240CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE240CoopPlanrflag=false
  }
};
$scope.CIVE250CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE250CoopPlandesc");
 if (!CIVE250CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE250CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE250CoopPlanrflag=false
  }
};
$scope.CIVE251CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE251CoopPlandesc");
 if (!CIVE251CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE251CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE251CoopPlanrflag=false
  }
};
$scope.CIVE295CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE295CoopPlandesc");
 if (!CIVE295CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE295CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE295CoopPlanrflag=false
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
$scope.CIVE303CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE303CoopPlandesc");
 if (!CIVE303CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE303CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE303CoopPlanrflag=false
  }
};
$scope.CIVE315CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE315CoopPlandesc");
 if (!CIVE315CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE315CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE315CoopPlanrflag=false
  }
};
$scope.CIVE321CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE321CoopPlandesc");
 if (!CIVE321CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE321CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE321CoopPlanrflag=false
  }
};
$scope.CIVE330CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE330CoopPlandesc");
 if (!CIVE330CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE330CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE330CoopPlanrflag=false
  }
};
$scope.CIVE372CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE372CoopPlandesc");
 if (!CIVE372CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE372CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE372CoopPlanrflag=false
  }
};
$scope.CIVE395CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE395CoopPlandesc");
 if (!CIVE395CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE395CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE395CoopPlanrflag=false
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
$scope.CIVE331CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE331CoopPlandesc");
 if (!CIVE331CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE331CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE331CoopPlanrflag=false
  }
};
$scope.CIVE374CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE374CoopPlandesc");
 if (!CIVE374CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE374CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE374CoopPlanrflag=false
  }
};
$scope.CIVE381CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE381CoopPlandesc");
 if (!CIVE381CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE381CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE381CoopPlanrflag=false
  }
};
$scope.CIVE391CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE391CoopPlandesc");
 if (!CIVE391CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE391CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE391CoopPlanrflag=false
  }
};
$scope.CIVE398CoopPlanRCListener = function () {
  var element = document.getElementById("CIVE398CoopPlandesc");
 if (!CIVE398CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE398CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE398CoopPlanrflag=false
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
$scope.ProgramTechnicalElectiveCoopPlan2RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan2desc");
 if (!ProgramTechnicalElectiveCoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan2rflag=false
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
$scope.MECE250CoopPlanRCListener = function () {
  var element = document.getElementById("MECE250CoopPlandesc");
 if (!MECE250CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE250CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE250CoopPlanrflag=false
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
$scope.ENGG420CoopPlanRCListener = function () {
  var element = document.getElementById("ENGG420CoopPlandesc");
 if (!ENGG420CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG420CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG420CoopPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan3RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan3desc");
 if (!ProgramTechnicalElectiveCoopPlan3rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan3rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan3rflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan4RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan4desc");
 if (!ProgramTechnicalElectiveCoopPlan4rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan4rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan4rflag=false
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
  var CHEM103CoopEnvironmentalOptionflag = false;
  var CHEM103CoopEnvironmentalOptionrflag = false;
 var CHEM103CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CHEM103CoopEnvironmentalOption", []);
  var ENGG100CoopEnvironmentalOptionflag = false;
  var ENGG100CoopEnvironmentalOptionrflag = false;
 var ENGG100CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENGG100CoopEnvironmentalOption", []);
  var ENGG130CoopEnvironmentalOptionflag = false;
  var ENGG130CoopEnvironmentalOptionrflag = false;
 var ENGG130CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENGG130CoopEnvironmentalOption", []);
  var ENGL199CoopEnvironmentalOptionflag = false;
  var ENGL199CoopEnvironmentalOptionrflag = false;
 var ENGL199CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENGL199CoopEnvironmentalOption", []);
  var MATH100CoopEnvironmentalOptionflag = false;
  var MATH100CoopEnvironmentalOptionrflag = false;
 var MATH100CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("MATH100CoopEnvironmentalOption", []);
  var PHYS130CoopEnvironmentalOptionflag = false;
  var PHYS130CoopEnvironmentalOptionrflag = false;
 var PHYS130CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("PHYS130CoopEnvironmentalOption", []);
  var CHEM105CoopEnvironmentalOptionflag = false;
  var CHEM105CoopEnvironmentalOptionrflag = false;
 var CHEM105CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CHEM105CoopEnvironmentalOption", []);
  var ENCMP100CoopEnvironmentalOptionflag = false;
  var ENCMP100CoopEnvironmentalOptionrflag = false;
 var ENCMP100CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENCMP100CoopEnvironmentalOption", []);
  var ENGG160CoopEnvironmentalOptionflag = false;
  var ENGG160CoopEnvironmentalOptionrflag = false;
 var ENGG160CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENGG160CoopEnvironmentalOption", []);
  var ENPH131CoopEnvironmentalOptionflag = false;
  var ENPH131CoopEnvironmentalOptionrflag = false;
 var ENPH131CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENPH131CoopEnvironmentalOption", []);
  var MATH101CoopEnvironmentalOptionflag = false;
  var MATH101CoopEnvironmentalOptionrflag = false;
 var MATH101CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("MATH101CoopEnvironmentalOption", []);
  var MATH102CoopEnvironmentalOptionflag = false;
  var MATH102CoopEnvironmentalOptionrflag = false;
 var MATH102CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("MATH102CoopEnvironmentalOption", []);
  var CIVE265CoopEnvironmentalOptionflag = false;
  var CIVE265CoopEnvironmentalOptionrflag = false;
 var CIVE265CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE265CoopEnvironmentalOption", []);
  var CIVE270CoopEnvironmentalOptionflag = false;
  var CIVE270CoopEnvironmentalOptionrflag = false;
 var CIVE270CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE270CoopEnvironmentalOption", []);
  var ENGG299CoopEnvironmentalOptionflag = false;
  var ENGG299CoopEnvironmentalOptionrflag = false;
 var ENGG299CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENGG299CoopEnvironmentalOption", []);
  var ENVE220CoopEnvironmentalOptionflag = false;
  var ENVE220CoopEnvironmentalOptionrflag = false;
 var ENVE220CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE220CoopEnvironmentalOption", []);
  var EAS210CoopEnvironmentalOptionflag = false;
  var EAS210CoopEnvironmentalOptionrflag = false;
 var EAS210CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("EAS210CoopEnvironmentalOption", []);
  var MATH209CoopEnvironmentalOptionflag = false;
  var MATH209CoopEnvironmentalOptionrflag = false;
 var MATH209CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("MATH209CoopEnvironmentalOption", []);
  var CIVE240CoopEnvironmentalOptionflag = false;
  var CIVE240CoopEnvironmentalOptionrflag = false;
 var CIVE240CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE240CoopEnvironmentalOption", []);
  var CIVE250CoopEnvironmentalOptionflag = false;
  var CIVE250CoopEnvironmentalOptionrflag = false;
 var CIVE250CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE250CoopEnvironmentalOption", []);
  var CIVE251CoopEnvironmentalOptionflag = false;
  var CIVE251CoopEnvironmentalOptionrflag = false;
 var CIVE251CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE251CoopEnvironmentalOption", []);
  var CIVE295CoopEnvironmentalOptionflag = false;
  var CIVE295CoopEnvironmentalOptionrflag = false;
 var CIVE295CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE295CoopEnvironmentalOption", []);
  var ENVE251CoopEnvironmentalOptionflag = false;
  var ENVE251CoopEnvironmentalOptionrflag = false;
 var ENVE251CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE251CoopEnvironmentalOption", []);
  var MATH201CoopEnvironmentalOptionflag = false;
  var MATH201CoopEnvironmentalOptionrflag = false;
 var MATH201CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("MATH201CoopEnvironmentalOption", []);
  var STAT235CoopEnvironmentalOptionflag = false;
  var STAT235CoopEnvironmentalOptionrflag = false;
 var STAT235CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("STAT235CoopEnvironmentalOption", []);
  var WKEXP901CoopEnvironmentalOptionflag = false;
  var WKEXP901CoopEnvironmentalOptionrflag = false;
 var WKEXP901CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("WKEXP901CoopEnvironmentalOption", []);
  var WKEXP902CoopEnvironmentalOptionflag = false;
  var WKEXP902CoopEnvironmentalOptionrflag = false;
 var WKEXP902CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("WKEXP902CoopEnvironmentalOption", []);
  var CIVE330CoopEnvironmentalOptionflag = false;
  var CIVE330CoopEnvironmentalOptionrflag = false;
 var CIVE330CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE330CoopEnvironmentalOption", []);
  var CIVE395CoopEnvironmentalOptionflag = false;
  var CIVE395CoopEnvironmentalOptionrflag = false;
 var CIVE395CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE395CoopEnvironmentalOption", []);
  var ENVE302CoopEnvironmentalOptionflag = false;
  var ENVE302CoopEnvironmentalOptionrflag = false;
 var ENVE302CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE302CoopEnvironmentalOption", []);
  var ENVE325CoopEnvironmentalOptionflag = false;
  var ENVE325CoopEnvironmentalOptionrflag = false;
 var ENVE325CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE325CoopEnvironmentalOption", []);
  var ENGG404CoopEnvironmentalOptionflag = false;
  var ENGG404CoopEnvironmentalOptionrflag = false;
 var ENGG404CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENGG404CoopEnvironmentalOption", []);
  var ComplementaryElectiveCoopEnvironmentalOption0flag = false;
  var ComplementaryElectiveCoopEnvironmentalOption0rflag = false;
 var ComplementaryElectiveCoopEnvironmentalOption0Time = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ComplementaryElectiveCoopEnvironmentalOption0", []);
  var WKEXP903CoopEnvironmentalOptionflag = false;
  var WKEXP903CoopEnvironmentalOptionrflag = false;
 var WKEXP903CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("WKEXP903CoopEnvironmentalOption", []);
  var CHE243CoopEnvironmentalOptionflag = false;
  var CHE243CoopEnvironmentalOptionrflag = false;
 var CHE243CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CHE243CoopEnvironmentalOption", []);
  var CIVE331CoopEnvironmentalOptionflag = false;
  var CIVE331CoopEnvironmentalOptionrflag = false;
 var CIVE331CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE331CoopEnvironmentalOption", []);
  var CIVE372CoopEnvironmentalOptionflag = false;
  var CIVE372CoopEnvironmentalOptionrflag = false;
 var CIVE372CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE372CoopEnvironmentalOption", []);
  var CIVE381CoopEnvironmentalOptionflag = false;
  var CIVE381CoopEnvironmentalOptionrflag = false;
 var CIVE381CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE381CoopEnvironmentalOption", []);
  var ENVE324CoopEnvironmentalOptionflag = false;
  var ENVE324CoopEnvironmentalOptionrflag = false;
 var ENVE324CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE324CoopEnvironmentalOption", []);
  var ENVE326CoopEnvironmentalOptionflag = false;
  var ENVE326CoopEnvironmentalOptionrflag = false;
 var ENVE326CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE326CoopEnvironmentalOption", []);
  var WKEXP904CoopEnvironmentalOptionflag = false;
  var WKEXP904CoopEnvironmentalOptionrflag = false;
 var WKEXP904CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("WKEXP904CoopEnvironmentalOption", []);
  var WKEXP905CoopEnvironmentalOptionflag = false;
  var WKEXP905CoopEnvironmentalOptionrflag = false;
 var WKEXP905CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("WKEXP905CoopEnvironmentalOption", []);
  var CIVE374CoopEnvironmentalOptionflag = false;
  var CIVE374CoopEnvironmentalOptionrflag = false;
 var CIVE374CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE374CoopEnvironmentalOption", []);
  var ENVE320CoopEnvironmentalOptionflag = false;
  var ENVE320CoopEnvironmentalOptionrflag = false;
 var ENVE320CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE320CoopEnvironmentalOption", []);
  var ENVE421CoopEnvironmentalOptionflag = false;
  var ENVE421CoopEnvironmentalOptionrflag = false;
 var ENVE421CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE421CoopEnvironmentalOption", []);
  var ENVE423CoopEnvironmentalOptionflag = false;
  var ENVE423CoopEnvironmentalOptionrflag = false;
 var ENVE423CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE423CoopEnvironmentalOption", []);
  var ENVE432CoopEnvironmentalOptionflag = false;
  var ENVE432CoopEnvironmentalOptionrflag = false;
 var ENVE432CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE432CoopEnvironmentalOption", []);
  var CIVE524CoopEnvironmentalOptionflag = false;
  var CIVE524CoopEnvironmentalOptionrflag = false;
 var CIVE524CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE524CoopEnvironmentalOption", []);
  var CIVE526CoopEnvironmentalOptionflag = false;
  var CIVE526CoopEnvironmentalOptionrflag = false;
 var CIVE526CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("CIVE526CoopEnvironmentalOption", []);
  var ENVE400CoopEnvironmentalOptionflag = false;
  var ENVE400CoopEnvironmentalOptionrflag = false;
 var ENVE400CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE400CoopEnvironmentalOption", []);
  var ENGM310CoopEnvironmentalOptionflag = false;
  var ENGM310CoopEnvironmentalOptionrflag = false;
 var ENGM310CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENGM310CoopEnvironmentalOption", []);
  var ENGM401CoopEnvironmentalOptionflag = false;
  var ENGM401CoopEnvironmentalOptionrflag = false;
 var ENGM401CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENGM401CoopEnvironmentalOption", []);
  var ENGG400CoopEnvironmentalOptionflag = false;
  var ENGG400CoopEnvironmentalOptionrflag = false;
 var ENGG400CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENGG400CoopEnvironmentalOption", []);
  var ENVE434CoopEnvironmentalOptionflag = false;
  var ENVE434CoopEnvironmentalOptionrflag = false;
 var ENVE434CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE434CoopEnvironmentalOption", []);
  var ENVE440CoopEnvironmentalOptionflag = false;
  var ENVE440CoopEnvironmentalOptionrflag = false;
 var ENVE440CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ENVE440CoopEnvironmentalOption", []);
  var LAW399CoopEnvironmentalOptionflag = false;
  var LAW399CoopEnvironmentalOptionrflag = false;
 var LAW399CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("LAW399CoopEnvironmentalOption", []);
  var ITSElectiveCoopEnvironmentalOption0flag = false;
  var ITSElectiveCoopEnvironmentalOption0rflag = false;
 var ITSElectiveCoopEnvironmentalOption0Time = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ITSElectiveCoopEnvironmentalOption0", []);
  var ECE209CoopEnvironmentalOptionflag = false;
  var ECE209CoopEnvironmentalOptionrflag = false;
 var ECE209CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("ECE209CoopEnvironmentalOption", []);
  var MATE202CoopEnvironmentalOptionflag = false;
  var MATE202CoopEnvironmentalOptionrflag = false;
 var MATE202CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("MATE202CoopEnvironmentalOption", []);
  var MECE250CoopEnvironmentalOptionflag = false;
  var MECE250CoopEnvironmentalOptionrflag = false;
 var MECE250CoopEnvironmentalOptionTime = new Date().getTime();
this.CoopEnvironmentalOptionClickedMap.set("MECE250CoopEnvironmentalOption", []);
$scope.CHEM103CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103CoopEnvironmentalOptionTime <= 200) { 
        CHEM103CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CHEM103CoopEnvironmentalOptionTime = currentTime;
  var CHEM103CoopEnvironmentalOptionelement = document.getElementById("CHEM103CoopEnvironmentalOption");
 if (!CHEM103CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CHEM103CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CHEM103CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CHEM103CoopEnvironmentalOption")[i];
        if (CHEM103CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine153());
     that.highlightElement(CHEM103CoopEnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("CHEM103CoopEnvironmentalOption", "NaturalSciences");
      CHEM103CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine153());
     that.unHighlightElement(CHEM103CoopEnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103CoopEnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103CoopEnvironmentalOptionelement, category);
}
      CHEM103CoopEnvironmentalOptionflag=false
  }
};
$scope.ENGG100CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100CoopEnvironmentalOptionTime <= 200) { 
        ENGG100CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENGG100CoopEnvironmentalOptionTime = currentTime;
  var ENGG100CoopEnvironmentalOptionelement = document.getElementById("ENGG100CoopEnvironmentalOption");
 if (!ENGG100CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENGG100CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENGG100CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENGG100CoopEnvironmentalOption")[i];
        if (ENGG100CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100CoopEnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("ENGG100CoopEnvironmentalOption", "EngineeringProfession");
      ENGG100CoopEnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(ENGG100CoopEnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100CoopEnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100CoopEnvironmentalOptionelement, category);
}
      ENGG100CoopEnvironmentalOptionflag=false
  }
};
$scope.ENGG130CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130CoopEnvironmentalOptionTime <= 200) { 
        ENGG130CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENGG130CoopEnvironmentalOptionTime = currentTime;
  var ENGG130CoopEnvironmentalOptionelement = document.getElementById("ENGG130CoopEnvironmentalOption");
 if (!ENGG130CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENGG130CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENGG130CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENGG130CoopEnvironmentalOption")[i];
        if (ENGG130CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine151());
      that.addLine(getLine156());
      that.addLine(getLine160());
      that.addLine(getLine211());
     that.highlightElement(ENGG130CoopEnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("ENGG130CoopEnvironmentalOption", "NaturalSciences");
      ENGG130CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine151());
      that.removeLine(getLine156());
      that.removeLine(getLine160());
      that.removeLine(getLine211());
     that.unHighlightElement(ENGG130CoopEnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130CoopEnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130CoopEnvironmentalOptionelement, category);
}
      ENGG130CoopEnvironmentalOptionflag=false
  }
};
$scope.ENGL199CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199CoopEnvironmentalOptionTime <= 200) { 
        ENGL199CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENGL199CoopEnvironmentalOptionTime = currentTime;
  var ENGL199CoopEnvironmentalOptionelement = document.getElementById("ENGL199CoopEnvironmentalOption");
 if (!ENGL199CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENGL199CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENGL199CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENGL199CoopEnvironmentalOption")[i];
        if (ENGL199CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine154());
     that.highlightElement(ENGL199CoopEnvironmentalOptionelement, "Other");
     that.addToClicked("ENGL199CoopEnvironmentalOption", "Other");
      ENGL199CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine154());
     that.unHighlightElement(ENGL199CoopEnvironmentalOptionelement, "Other");
     var category = that.removeFromClicked("ENGL199CoopEnvironmentalOption", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199CoopEnvironmentalOptionelement, category);
}
      ENGL199CoopEnvironmentalOptionflag=false
  }
};
$scope.MATH100CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100CoopEnvironmentalOptionTime <= 200) { 
        MATH100CoopEnvironmentalOptionTime = currentTime;
        return;
    }
MATH100CoopEnvironmentalOptionTime = currentTime;
  var MATH100CoopEnvironmentalOptionelement = document.getElementById("MATH100CoopEnvironmentalOption");
 if (!MATH100CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("MATH100CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("MATH100CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("MATH100CoopEnvironmentalOption")[i];
        if (MATH100CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine151());
      that.addLine(getLine152());
      that.addLine(getLine155());
      that.addLine(getLine158());
      that.addLine(getLine159());
      that.addLine(getLine174());
     that.highlightElement(MATH100CoopEnvironmentalOptionelement, "Math");
     that.addToClicked("MATH100CoopEnvironmentalOption", "Math");
      MATH100CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine151());
      that.removeLine(getLine152());
      that.removeLine(getLine155());
      that.removeLine(getLine158());
      that.removeLine(getLine159());
      that.removeLine(getLine174());
     that.unHighlightElement(MATH100CoopEnvironmentalOptionelement, "Math");
     var category = that.removeFromClicked("MATH100CoopEnvironmentalOption", "Math");
  if (category != "") { 
     that.highlightElement(MATH100CoopEnvironmentalOptionelement, category);
}
      MATH100CoopEnvironmentalOptionflag=false
  }
};
$scope.PHYS130CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130CoopEnvironmentalOptionTime <= 200) { 
        PHYS130CoopEnvironmentalOptionTime = currentTime;
        return;
    }
PHYS130CoopEnvironmentalOptionTime = currentTime;
  var PHYS130CoopEnvironmentalOptionelement = document.getElementById("PHYS130CoopEnvironmentalOption");
 if (!PHYS130CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("PHYS130CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("PHYS130CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("PHYS130CoopEnvironmentalOption")[i];
        if (PHYS130CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine152());
     that.highlightElement(PHYS130CoopEnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("PHYS130CoopEnvironmentalOption", "NaturalSciences");
      PHYS130CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine152());
     that.unHighlightElement(PHYS130CoopEnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130CoopEnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130CoopEnvironmentalOptionelement, category);
}
      PHYS130CoopEnvironmentalOptionflag=false
  }
};
$scope.CHEM105CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105CoopEnvironmentalOptionTime <= 200) { 
        CHEM105CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CHEM105CoopEnvironmentalOptionTime = currentTime;
  var CHEM105CoopEnvironmentalOptionelement = document.getElementById("CHEM105CoopEnvironmentalOption");
 if (!CHEM105CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CHEM105CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CHEM105CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CHEM105CoopEnvironmentalOption")[i];
        if (CHEM105CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine153());
      that.addLine(getLine162());
      that.addLine(getLine210());
     that.highlightElement(CHEM105CoopEnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("CHEM105CoopEnvironmentalOption", "NaturalSciences");
      CHEM105CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine153());
      that.removeLine(getLine162());
      that.removeLine(getLine210());
     that.unHighlightElement(CHEM105CoopEnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105CoopEnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105CoopEnvironmentalOptionelement, category);
}
      CHEM105CoopEnvironmentalOptionflag=false
  }
};
$scope.ENCMP100CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100CoopEnvironmentalOptionTime <= 200) { 
        ENCMP100CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENCMP100CoopEnvironmentalOptionTime = currentTime;
  var ENCMP100CoopEnvironmentalOptionelement = document.getElementById("ENCMP100CoopEnvironmentalOption");
 if (!ENCMP100CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENCMP100CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENCMP100CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENCMP100CoopEnvironmentalOption")[i];
        if (ENCMP100CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine168());
     that.highlightElement(ENCMP100CoopEnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("ENCMP100CoopEnvironmentalOption", "NaturalSciences");
      ENCMP100CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine168());
     that.unHighlightElement(ENCMP100CoopEnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100CoopEnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100CoopEnvironmentalOptionelement, category);
}
      ENCMP100CoopEnvironmentalOptionflag=false
  }
};
$scope.ENGG160CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160CoopEnvironmentalOptionTime <= 200) { 
        ENGG160CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENGG160CoopEnvironmentalOptionTime = currentTime;
  var ENGG160CoopEnvironmentalOptionelement = document.getElementById("ENGG160CoopEnvironmentalOption");
 if (!ENGG160CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENGG160CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENGG160CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENGG160CoopEnvironmentalOption")[i];
        if (ENGG160CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine154());
     that.highlightElement(ENGG160CoopEnvironmentalOptionelement, "EngineeringDesign");
     that.addToClicked("ENGG160CoopEnvironmentalOption", "EngineeringDesign");
      ENGG160CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine154());
     that.unHighlightElement(ENGG160CoopEnvironmentalOptionelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160CoopEnvironmentalOption", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160CoopEnvironmentalOptionelement, category);
}
      ENGG160CoopEnvironmentalOptionflag=false
  }
};
$scope.ENPH131CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131CoopEnvironmentalOptionTime <= 200) { 
        ENPH131CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENPH131CoopEnvironmentalOptionTime = currentTime;
  var ENPH131CoopEnvironmentalOptionelement = document.getElementById("ENPH131CoopEnvironmentalOption");
 if (!ENPH131CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENPH131CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENPH131CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENPH131CoopEnvironmentalOption")[i];
        if (ENPH131CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine155());
      that.addLine(getLine156());
      that.addLine(getLine157());
      that.addLine(getLine212());
     that.highlightElement(ENPH131CoopEnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("ENPH131CoopEnvironmentalOption", "NaturalSciences");
      ENPH131CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine155());
      that.removeLine(getLine156());
      that.removeLine(getLine157());
      that.removeLine(getLine212());
     that.unHighlightElement(ENPH131CoopEnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131CoopEnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131CoopEnvironmentalOptionelement, category);
}
      ENPH131CoopEnvironmentalOptionflag=false
  }
};
$scope.MATH101CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101CoopEnvironmentalOptionTime <= 200) { 
        MATH101CoopEnvironmentalOptionTime = currentTime;
        return;
    }
MATH101CoopEnvironmentalOptionTime = currentTime;
  var MATH101CoopEnvironmentalOptionelement = document.getElementById("MATH101CoopEnvironmentalOption");
 if (!MATH101CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("MATH101CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("MATH101CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("MATH101CoopEnvironmentalOption")[i];
        if (MATH101CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine157());
      that.addLine(getLine158());
      that.addLine(getLine161());
      that.addLine(getLine163());
      that.addLine(getLine165());
      that.addLine(getLine175());
      that.addLine(getLine189());
      that.addLine(getLine213());
     that.highlightElement(MATH101CoopEnvironmentalOptionelement, "Math");
     that.addToClicked("MATH101CoopEnvironmentalOption", "Math");
      MATH101CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine157());
      that.removeLine(getLine158());
      that.removeLine(getLine161());
      that.removeLine(getLine163());
      that.removeLine(getLine165());
      that.removeLine(getLine175());
      that.removeLine(getLine189());
      that.removeLine(getLine213());
     that.unHighlightElement(MATH101CoopEnvironmentalOptionelement, "Math");
     var category = that.removeFromClicked("MATH101CoopEnvironmentalOption", "Math");
  if (category != "") { 
     that.highlightElement(MATH101CoopEnvironmentalOptionelement, category);
}
      MATH101CoopEnvironmentalOptionflag=false
  }
};
$scope.MATH102CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102CoopEnvironmentalOptionTime <= 200) { 
        MATH102CoopEnvironmentalOptionTime = currentTime;
        return;
    }
MATH102CoopEnvironmentalOptionTime = currentTime;
  var MATH102CoopEnvironmentalOptionelement = document.getElementById("MATH102CoopEnvironmentalOption");
 if (!MATH102CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("MATH102CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("MATH102CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("MATH102CoopEnvironmentalOption")[i];
        if (MATH102CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine159());
      that.addLine(getLine164());
      that.addLine(getLine166());
      that.addLine(getLine169());
     that.highlightElement(MATH102CoopEnvironmentalOptionelement, "Math");
     that.addToClicked("MATH102CoopEnvironmentalOption", "Math");
      MATH102CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine159());
      that.removeLine(getLine164());
      that.removeLine(getLine166());
      that.removeLine(getLine169());
     that.unHighlightElement(MATH102CoopEnvironmentalOptionelement, "Math");
     var category = that.removeFromClicked("MATH102CoopEnvironmentalOption", "Math");
  if (category != "") { 
     that.highlightElement(MATH102CoopEnvironmentalOptionelement, category);
}
      MATH102CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE265CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE265CoopEnvironmentalOptionTime <= 200) { 
        CIVE265CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE265CoopEnvironmentalOptionTime = currentTime;
  var CIVE265CoopEnvironmentalOptionelement = document.getElementById("CIVE265CoopEnvironmentalOption");
 if (!CIVE265CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE265CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE265CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE265CoopEnvironmentalOption")[i];
        if (CIVE265CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE265CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CIVE265CoopEnvironmentalOptionelement, "EngineeringDesign");
     that.addToClicked("CIVE265CoopEnvironmentalOption", "EngineeringDesign");
      CIVE265CoopEnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(CIVE265CoopEnvironmentalOptionelement, "EngineeringDesign");
     var category = that.removeFromClicked("CIVE265CoopEnvironmentalOption", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(CIVE265CoopEnvironmentalOptionelement, category);
}
      CIVE265CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE270CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE270CoopEnvironmentalOptionTime <= 200) { 
        CIVE270CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE270CoopEnvironmentalOptionTime = currentTime;
  var CIVE270CoopEnvironmentalOptionelement = document.getElementById("CIVE270CoopEnvironmentalOption");
 if (!CIVE270CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE270CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE270CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE270CoopEnvironmentalOption")[i];
        if (CIVE270CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE270CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine160());
      that.addLine(getLine161());
      that.addLine(getLine171());
      that.addLine(getLine192());
     that.highlightElement(CIVE270CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE270CoopEnvironmentalOption", "EngineeringSciences");
      CIVE270CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine160());
      that.removeLine(getLine161());
      that.removeLine(getLine171());
      that.removeLine(getLine192());
     that.unHighlightElement(CIVE270CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE270CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE270CoopEnvironmentalOptionelement, category);
}
      CIVE270CoopEnvironmentalOptionflag=false
  }
};
$scope.ENGG299CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299CoopEnvironmentalOptionTime <= 200) { 
        ENGG299CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENGG299CoopEnvironmentalOptionTime = currentTime;
  var ENGG299CoopEnvironmentalOptionelement = document.getElementById("ENGG299CoopEnvironmentalOption");
 if (!ENGG299CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENGG299CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENGG299CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENGG299CoopEnvironmentalOption")[i];
        if (ENGG299CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG299CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine176());
     that.highlightElement(ENGG299CoopEnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("ENGG299CoopEnvironmentalOption", "EngineeringProfession");
      ENGG299CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine176());
     that.unHighlightElement(ENGG299CoopEnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299CoopEnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299CoopEnvironmentalOptionelement, category);
}
      ENGG299CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE220CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE220CoopEnvironmentalOptionTime <= 200) { 
        ENVE220CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE220CoopEnvironmentalOptionTime = currentTime;
  var ENVE220CoopEnvironmentalOptionelement = document.getElementById("ENVE220CoopEnvironmentalOption");
 if (!ENVE220CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE220CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE220CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE220CoopEnvironmentalOption")[i];
        if (ENVE220CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE220CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine162());
      that.addLine(getLine184());
      that.addLine(getLine194());
      that.addLine(getLine195());
     that.highlightElement(ENVE220CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE220CoopEnvironmentalOption", "EngineeringSciences");
      ENVE220CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine162());
      that.removeLine(getLine184());
      that.removeLine(getLine194());
      that.removeLine(getLine195());
     that.unHighlightElement(ENVE220CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE220CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE220CoopEnvironmentalOptionelement, category);
}
      ENVE220CoopEnvironmentalOptionflag=false
  }
};
$scope.EAS210CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - EAS210CoopEnvironmentalOptionTime <= 200) { 
        EAS210CoopEnvironmentalOptionTime = currentTime;
        return;
    }
EAS210CoopEnvironmentalOptionTime = currentTime;
  var EAS210CoopEnvironmentalOptionelement = document.getElementById("EAS210CoopEnvironmentalOption");
 if (!EAS210CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("EAS210CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("EAS210CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("EAS210CoopEnvironmentalOption")[i];
        if (EAS210CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(EAS210CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine170());
      that.addLine(getLine193());
     that.highlightElement(EAS210CoopEnvironmentalOptionelement, "NaturalSciences");
     that.addToClicked("EAS210CoopEnvironmentalOption", "NaturalSciences");
      EAS210CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine170());
      that.removeLine(getLine193());
     that.unHighlightElement(EAS210CoopEnvironmentalOptionelement, "NaturalSciences");
     var category = that.removeFromClicked("EAS210CoopEnvironmentalOption", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(EAS210CoopEnvironmentalOptionelement, category);
}
      EAS210CoopEnvironmentalOptionflag=false
  }
};
$scope.MATH209CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209CoopEnvironmentalOptionTime <= 200) { 
        MATH209CoopEnvironmentalOptionTime = currentTime;
        return;
    }
MATH209CoopEnvironmentalOptionTime = currentTime;
  var MATH209CoopEnvironmentalOptionelement = document.getElementById("MATH209CoopEnvironmentalOption");
 if (!MATH209CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("MATH209CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("MATH209CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("MATH209CoopEnvironmentalOption")[i];
        if (MATH209CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine163());
      that.addLine(getLine164());
      that.addLine(getLine173());
      that.addLine(getLine178());
      that.addLine(getLine181());
     that.highlightElement(MATH209CoopEnvironmentalOptionelement, "Math");
     that.addToClicked("MATH209CoopEnvironmentalOption", "Math");
      MATH209CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine163());
      that.removeLine(getLine164());
      that.removeLine(getLine173());
      that.removeLine(getLine178());
      that.removeLine(getLine181());
     that.unHighlightElement(MATH209CoopEnvironmentalOptionelement, "Math");
     var category = that.removeFromClicked("MATH209CoopEnvironmentalOption", "Math");
  if (category != "") { 
     that.highlightElement(MATH209CoopEnvironmentalOptionelement, category);
}
      MATH209CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE240CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE240CoopEnvironmentalOptionTime <= 200) { 
        CIVE240CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE240CoopEnvironmentalOptionTime = currentTime;
  var CIVE240CoopEnvironmentalOptionelement = document.getElementById("CIVE240CoopEnvironmentalOption");
 if (!CIVE240CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE240CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE240CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE240CoopEnvironmentalOption")[i];
        if (CIVE240CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE240CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CIVE240CoopEnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("CIVE240CoopEnvironmentalOption", "EngineeringProfession");
      CIVE240CoopEnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(CIVE240CoopEnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("CIVE240CoopEnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(CIVE240CoopEnvironmentalOptionelement, category);
}
      CIVE240CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE250CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE250CoopEnvironmentalOptionTime <= 200) { 
        CIVE250CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE250CoopEnvironmentalOptionTime = currentTime;
  var CIVE250CoopEnvironmentalOptionelement = document.getElementById("CIVE250CoopEnvironmentalOption");
 if (!CIVE250CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE250CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE250CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE250CoopEnvironmentalOption")[i];
        if (CIVE250CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE250CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine165());
      that.addLine(getLine166());
      that.addLine(getLine167());
     that.highlightElement(CIVE250CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE250CoopEnvironmentalOption", "EngineeringSciences");
      CIVE250CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine165());
      that.removeLine(getLine166());
      that.removeLine(getLine167());
     that.unHighlightElement(CIVE250CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE250CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE250CoopEnvironmentalOptionelement, category);
}
      CIVE250CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE251CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE251CoopEnvironmentalOptionTime <= 200) { 
        CIVE251CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE251CoopEnvironmentalOptionTime = currentTime;
  var CIVE251CoopEnvironmentalOptionelement = document.getElementById("CIVE251CoopEnvironmentalOption");
 if (!CIVE251CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE251CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE251CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE251CoopEnvironmentalOption")[i];
        if (CIVE251CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE251CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine167());
     that.highlightElement(CIVE251CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE251CoopEnvironmentalOption", "EngineeringSciences");
      CIVE251CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine167());
     that.unHighlightElement(CIVE251CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE251CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE251CoopEnvironmentalOptionelement, category);
}
      CIVE251CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE295CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE295CoopEnvironmentalOptionTime <= 200) { 
        CIVE295CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE295CoopEnvironmentalOptionTime = currentTime;
  var CIVE295CoopEnvironmentalOptionelement = document.getElementById("CIVE295CoopEnvironmentalOption");
 if (!CIVE295CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE295CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE295CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE295CoopEnvironmentalOption")[i];
        if (CIVE295CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE295CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine168());
      that.addLine(getLine169());
      that.addLine(getLine182());
      that.addLine(getLine186());
     that.highlightElement(CIVE295CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE295CoopEnvironmentalOption", "EngineeringSciences");
      CIVE295CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine168());
      that.removeLine(getLine169());
      that.removeLine(getLine182());
      that.removeLine(getLine186());
     that.unHighlightElement(CIVE295CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE295CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE295CoopEnvironmentalOptionelement, category);
}
      CIVE295CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE251CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE251CoopEnvironmentalOptionTime <= 200) { 
        ENVE251CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE251CoopEnvironmentalOptionTime = currentTime;
  var ENVE251CoopEnvironmentalOptionelement = document.getElementById("ENVE251CoopEnvironmentalOption");
 if (!ENVE251CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE251CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE251CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE251CoopEnvironmentalOption")[i];
        if (ENVE251CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE251CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine170());
      that.addLine(getLine171());
      that.addLine(getLine172());
      that.addLine(getLine207());
     that.highlightElement(ENVE251CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE251CoopEnvironmentalOption", "EngineeringSciences");
      ENVE251CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine170());
      that.removeLine(getLine171());
      that.removeLine(getLine172());
      that.removeLine(getLine207());
     that.unHighlightElement(ENVE251CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE251CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE251CoopEnvironmentalOptionelement, category);
}
      ENVE251CoopEnvironmentalOptionflag=false
  }
};
$scope.MATH201CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201CoopEnvironmentalOptionTime <= 200) { 
        MATH201CoopEnvironmentalOptionTime = currentTime;
        return;
    }
MATH201CoopEnvironmentalOptionTime = currentTime;
  var MATH201CoopEnvironmentalOptionelement = document.getElementById("MATH201CoopEnvironmentalOption");
 if (!MATH201CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("MATH201CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("MATH201CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("MATH201CoopEnvironmentalOption")[i];
        if (MATH201CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine173());
      that.addLine(getLine179());
      that.addLine(getLine180());
     that.highlightElement(MATH201CoopEnvironmentalOptionelement, "Math");
     that.addToClicked("MATH201CoopEnvironmentalOption", "Math");
      MATH201CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine173());
      that.removeLine(getLine179());
      that.removeLine(getLine180());
     that.unHighlightElement(MATH201CoopEnvironmentalOptionelement, "Math");
     var category = that.removeFromClicked("MATH201CoopEnvironmentalOption", "Math");
  if (category != "") { 
     that.highlightElement(MATH201CoopEnvironmentalOptionelement, category);
}
      MATH201CoopEnvironmentalOptionflag=false
  }
};
$scope.STAT235CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - STAT235CoopEnvironmentalOptionTime <= 200) { 
        STAT235CoopEnvironmentalOptionTime = currentTime;
        return;
    }
STAT235CoopEnvironmentalOptionTime = currentTime;
  var STAT235CoopEnvironmentalOptionelement = document.getElementById("STAT235CoopEnvironmentalOption");
 if (!STAT235CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("STAT235CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("STAT235CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("STAT235CoopEnvironmentalOption")[i];
        if (STAT235CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(STAT235CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine172());
      that.addLine(getLine174());
      that.addLine(getLine175());
      that.addLine(getLine185());
     that.highlightElement(STAT235CoopEnvironmentalOptionelement, "Math");
     that.addToClicked("STAT235CoopEnvironmentalOption", "Math");
      STAT235CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine172());
      that.removeLine(getLine174());
      that.removeLine(getLine175());
      that.removeLine(getLine185());
     that.unHighlightElement(STAT235CoopEnvironmentalOptionelement, "Math");
     var category = that.removeFromClicked("STAT235CoopEnvironmentalOption", "Math");
  if (category != "") { 
     that.highlightElement(STAT235CoopEnvironmentalOptionelement, category);
}
      STAT235CoopEnvironmentalOptionflag=false
  }
};
$scope.WKEXP901CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP901CoopEnvironmentalOptionTime <= 200) { 
        WKEXP901CoopEnvironmentalOptionTime = currentTime;
        return;
    }
WKEXP901CoopEnvironmentalOptionTime = currentTime;
  var WKEXP901CoopEnvironmentalOptionelement = document.getElementById("WKEXP901CoopEnvironmentalOption");
 if (!WKEXP901CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("WKEXP901CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("WKEXP901CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("WKEXP901CoopEnvironmentalOption")[i];
        if (WKEXP901CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP901CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine176());
      that.addLine(getLine177());
     that.highlightElement(WKEXP901CoopEnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("WKEXP901CoopEnvironmentalOption", "EngineeringProfession");
      WKEXP901CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine176());
      that.removeLine(getLine177());
     that.unHighlightElement(WKEXP901CoopEnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP901CoopEnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP901CoopEnvironmentalOptionelement, category);
}
      WKEXP901CoopEnvironmentalOptionflag=false
  }
};
$scope.WKEXP902CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP902CoopEnvironmentalOptionTime <= 200) { 
        WKEXP902CoopEnvironmentalOptionTime = currentTime;
        return;
    }
WKEXP902CoopEnvironmentalOptionTime = currentTime;
  var WKEXP902CoopEnvironmentalOptionelement = document.getElementById("WKEXP902CoopEnvironmentalOption");
 if (!WKEXP902CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("WKEXP902CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("WKEXP902CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("WKEXP902CoopEnvironmentalOption")[i];
        if (WKEXP902CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP902CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine177());
      that.addLine(getLine188());
     that.highlightElement(WKEXP902CoopEnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("WKEXP902CoopEnvironmentalOption", "EngineeringProfession");
      WKEXP902CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine177());
      that.removeLine(getLine188());
     that.unHighlightElement(WKEXP902CoopEnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP902CoopEnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP902CoopEnvironmentalOptionelement, category);
}
      WKEXP902CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE330CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE330CoopEnvironmentalOptionTime <= 200) { 
        CIVE330CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE330CoopEnvironmentalOptionTime = currentTime;
  var CIVE330CoopEnvironmentalOptionelement = document.getElementById("CIVE330CoopEnvironmentalOption");
 if (!CIVE330CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE330CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE330CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE330CoopEnvironmentalOption")[i];
        if (CIVE330CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE330CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine178());
      that.addLine(getLine179());
      that.addLine(getLine187());
      that.addLine(getLine190());
      that.addLine(getLine199());
     that.highlightElement(CIVE330CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE330CoopEnvironmentalOption", "EngineeringSciences");
      CIVE330CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine178());
      that.removeLine(getLine179());
      that.removeLine(getLine187());
      that.removeLine(getLine190());
      that.removeLine(getLine199());
     that.unHighlightElement(CIVE330CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE330CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE330CoopEnvironmentalOptionelement, category);
}
      CIVE330CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE395CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE395CoopEnvironmentalOptionTime <= 200) { 
        CIVE395CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE395CoopEnvironmentalOptionTime = currentTime;
  var CIVE395CoopEnvironmentalOptionelement = document.getElementById("CIVE395CoopEnvironmentalOption");
 if (!CIVE395CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE395CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE395CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE395CoopEnvironmentalOption")[i];
        if (CIVE395CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE395CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine180());
      that.addLine(getLine181());
      that.addLine(getLine182());
     that.highlightElement(CIVE395CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE395CoopEnvironmentalOption", "EngineeringSciences");
      CIVE395CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine180());
      that.removeLine(getLine181());
      that.removeLine(getLine182());
     that.unHighlightElement(CIVE395CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE395CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE395CoopEnvironmentalOptionelement, category);
}
      CIVE395CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE302CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE302CoopEnvironmentalOptionTime <= 200) { 
        ENVE302CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE302CoopEnvironmentalOptionTime = currentTime;
  var ENVE302CoopEnvironmentalOptionelement = document.getElementById("ENVE302CoopEnvironmentalOption");
 if (!ENVE302CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE302CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE302CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE302CoopEnvironmentalOption")[i];
        if (ENVE302CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE302CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine183());
     that.highlightElement(ENVE302CoopEnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("ENVE302CoopEnvironmentalOption", "EngineeringProfession");
      ENVE302CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine183());
     that.unHighlightElement(ENVE302CoopEnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENVE302CoopEnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENVE302CoopEnvironmentalOptionelement, category);
}
      ENVE302CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE325CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE325CoopEnvironmentalOptionTime <= 200) { 
        ENVE325CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE325CoopEnvironmentalOptionTime = currentTime;
  var ENVE325CoopEnvironmentalOptionelement = document.getElementById("ENVE325CoopEnvironmentalOption");
 if (!ENVE325CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE325CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE325CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE325CoopEnvironmentalOption")[i];
        if (ENVE325CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE325CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine183());
      that.addLine(getLine184());
      that.addLine(getLine185());
      that.addLine(getLine186());
      that.addLine(getLine187());
      that.addLine(getLine191());
      that.addLine(getLine202());
      that.addLine(getLine205());
     that.highlightElement(ENVE325CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE325CoopEnvironmentalOption", "EngineeringSciences");
      ENVE325CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine183());
      that.removeLine(getLine184());
      that.removeLine(getLine185());
      that.removeLine(getLine186());
      that.removeLine(getLine187());
      that.removeLine(getLine191());
      that.removeLine(getLine202());
      that.removeLine(getLine205());
     that.unHighlightElement(ENVE325CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE325CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE325CoopEnvironmentalOptionelement, category);
}
      ENVE325CoopEnvironmentalOptionflag=false
  }
};
$scope.ENGG404CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404CoopEnvironmentalOptionTime <= 200) { 
        ENGG404CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENGG404CoopEnvironmentalOptionTime = currentTime;
  var ENGG404CoopEnvironmentalOptionelement = document.getElementById("ENGG404CoopEnvironmentalOption");
 if (!ENGG404CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENGG404CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENGG404CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENGG404CoopEnvironmentalOption")[i];
        if (ENGG404CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404CoopEnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("ENGG404CoopEnvironmentalOption", "EngineeringProfession");
      ENGG404CoopEnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(ENGG404CoopEnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404CoopEnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404CoopEnvironmentalOptionelement, category);
}
      ENGG404CoopEnvironmentalOptionflag=false
  }
};
$scope.ComplementaryElectiveCoopEnvironmentalOption0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveCoopEnvironmentalOption0Time <= 200) { 
        ComplementaryElectiveCoopEnvironmentalOption0Time = currentTime;
        return;
    }
ComplementaryElectiveCoopEnvironmentalOption0Time = currentTime;
  var ComplementaryElectiveCoopEnvironmentalOption0element = document.getElementById("ComplementaryElectiveCoopEnvironmentalOption0");
 if (!ComplementaryElectiveCoopEnvironmentalOption0flag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ComplementaryElectiveCoopEnvironmentalOption0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ComplementaryElectiveCoopEnvironmentalOption0").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ComplementaryElectiveCoopEnvironmentalOption0")[i];
        if (ComplementaryElectiveCoopEnvironmentalOption0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveCoopEnvironmentalOption0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveCoopEnvironmentalOption0element, "COMP");
     that.addToClicked("ComplementaryElectiveCoopEnvironmentalOption0", "COMP");
      ComplementaryElectiveCoopEnvironmentalOption0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveCoopEnvironmentalOption0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveCoopEnvironmentalOption0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveCoopEnvironmentalOption0element, category);
}
      ComplementaryElectiveCoopEnvironmentalOption0flag=false
  }
};
$scope.WKEXP903CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP903CoopEnvironmentalOptionTime <= 200) { 
        WKEXP903CoopEnvironmentalOptionTime = currentTime;
        return;
    }
WKEXP903CoopEnvironmentalOptionTime = currentTime;
  var WKEXP903CoopEnvironmentalOptionelement = document.getElementById("WKEXP903CoopEnvironmentalOption");
 if (!WKEXP903CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("WKEXP903CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("WKEXP903CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("WKEXP903CoopEnvironmentalOption")[i];
        if (WKEXP903CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP903CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine188());
      that.addLine(getLine196());
     that.highlightElement(WKEXP903CoopEnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("WKEXP903CoopEnvironmentalOption", "EngineeringProfession");
      WKEXP903CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine188());
      that.removeLine(getLine196());
     that.unHighlightElement(WKEXP903CoopEnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP903CoopEnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP903CoopEnvironmentalOptionelement, category);
}
      WKEXP903CoopEnvironmentalOptionflag=false
  }
};
$scope.CHE243CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243CoopEnvironmentalOptionTime <= 200) { 
        CHE243CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CHE243CoopEnvironmentalOptionTime = currentTime;
  var CHE243CoopEnvironmentalOptionelement = document.getElementById("CHE243CoopEnvironmentalOption");
 if (!CHE243CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CHE243CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CHE243CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CHE243CoopEnvironmentalOption")[i];
        if (CHE243CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine189());
     that.highlightElement(CHE243CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CHE243CoopEnvironmentalOption", "EngineeringSciences");
      CHE243CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine189());
     that.unHighlightElement(CHE243CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243CoopEnvironmentalOptionelement, category);
}
      CHE243CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE331CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE331CoopEnvironmentalOptionTime <= 200) { 
        CIVE331CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE331CoopEnvironmentalOptionTime = currentTime;
  var CIVE331CoopEnvironmentalOptionelement = document.getElementById("CIVE331CoopEnvironmentalOption");
 if (!CIVE331CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE331CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE331CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE331CoopEnvironmentalOption")[i];
        if (CIVE331CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE331CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine190());
      that.addLine(getLine191());
      that.addLine(getLine200());
      that.addLine(getLine201());
     that.highlightElement(CIVE331CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE331CoopEnvironmentalOption", "EngineeringSciences");
      CIVE331CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine190());
      that.removeLine(getLine191());
      that.removeLine(getLine200());
      that.removeLine(getLine201());
     that.unHighlightElement(CIVE331CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE331CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE331CoopEnvironmentalOptionelement, category);
}
      CIVE331CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE372CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE372CoopEnvironmentalOptionTime <= 200) { 
        CIVE372CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE372CoopEnvironmentalOptionTime = currentTime;
  var CIVE372CoopEnvironmentalOptionelement = document.getElementById("CIVE372CoopEnvironmentalOption");
 if (!CIVE372CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE372CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE372CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE372CoopEnvironmentalOption")[i];
        if (CIVE372CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE372CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine192());
      that.addLine(getLine198());
     that.highlightElement(CIVE372CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE372CoopEnvironmentalOption", "EngineeringSciences");
      CIVE372CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine192());
      that.removeLine(getLine198());
     that.unHighlightElement(CIVE372CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE372CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE372CoopEnvironmentalOptionelement, category);
}
      CIVE372CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE381CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE381CoopEnvironmentalOptionTime <= 200) { 
        CIVE381CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE381CoopEnvironmentalOptionTime = currentTime;
  var CIVE381CoopEnvironmentalOptionelement = document.getElementById("CIVE381CoopEnvironmentalOption");
 if (!CIVE381CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE381CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE381CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE381CoopEnvironmentalOption")[i];
        if (CIVE381CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE381CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine193());
      that.addLine(getLine206());
     that.highlightElement(CIVE381CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE381CoopEnvironmentalOption", "EngineeringSciences");
      CIVE381CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine193());
      that.removeLine(getLine206());
     that.unHighlightElement(CIVE381CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE381CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE381CoopEnvironmentalOptionelement, category);
}
      CIVE381CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE324CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE324CoopEnvironmentalOptionTime <= 200) { 
        ENVE324CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE324CoopEnvironmentalOptionTime = currentTime;
  var ENVE324CoopEnvironmentalOptionelement = document.getElementById("ENVE324CoopEnvironmentalOption");
 if (!ENVE324CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE324CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE324CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE324CoopEnvironmentalOption")[i];
        if (ENVE324CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE324CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine194());
      that.addLine(getLine203());
      that.addLine(getLine204());
      that.addLine(getLine208());
     that.highlightElement(ENVE324CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE324CoopEnvironmentalOption", "EngineeringSciences");
      ENVE324CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine194());
      that.removeLine(getLine203());
      that.removeLine(getLine204());
      that.removeLine(getLine208());
     that.unHighlightElement(ENVE324CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE324CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE324CoopEnvironmentalOptionelement, category);
}
      ENVE324CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE326CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE326CoopEnvironmentalOptionTime <= 200) { 
        ENVE326CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE326CoopEnvironmentalOptionTime = currentTime;
  var ENVE326CoopEnvironmentalOptionelement = document.getElementById("ENVE326CoopEnvironmentalOption");
 if (!ENVE326CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE326CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE326CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE326CoopEnvironmentalOption")[i];
        if (ENVE326CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE326CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine195());
     that.highlightElement(ENVE326CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE326CoopEnvironmentalOption", "EngineeringSciences");
      ENVE326CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine195());
     that.unHighlightElement(ENVE326CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE326CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE326CoopEnvironmentalOptionelement, category);
}
      ENVE326CoopEnvironmentalOptionflag=false
  }
};
$scope.WKEXP904CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP904CoopEnvironmentalOptionTime <= 200) { 
        WKEXP904CoopEnvironmentalOptionTime = currentTime;
        return;
    }
WKEXP904CoopEnvironmentalOptionTime = currentTime;
  var WKEXP904CoopEnvironmentalOptionelement = document.getElementById("WKEXP904CoopEnvironmentalOption");
 if (!WKEXP904CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("WKEXP904CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("WKEXP904CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("WKEXP904CoopEnvironmentalOption")[i];
        if (WKEXP904CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP904CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine196());
      that.addLine(getLine197());
     that.highlightElement(WKEXP904CoopEnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("WKEXP904CoopEnvironmentalOption", "EngineeringProfession");
      WKEXP904CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine196());
      that.removeLine(getLine197());
     that.unHighlightElement(WKEXP904CoopEnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP904CoopEnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP904CoopEnvironmentalOptionelement, category);
}
      WKEXP904CoopEnvironmentalOptionflag=false
  }
};
$scope.WKEXP905CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP905CoopEnvironmentalOptionTime <= 200) { 
        WKEXP905CoopEnvironmentalOptionTime = currentTime;
        return;
    }
WKEXP905CoopEnvironmentalOptionTime = currentTime;
  var WKEXP905CoopEnvironmentalOptionelement = document.getElementById("WKEXP905CoopEnvironmentalOption");
 if (!WKEXP905CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("WKEXP905CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("WKEXP905CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("WKEXP905CoopEnvironmentalOption")[i];
        if (WKEXP905CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP905CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine197());
     that.highlightElement(WKEXP905CoopEnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("WKEXP905CoopEnvironmentalOption", "EngineeringProfession");
      WKEXP905CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine197());
     that.unHighlightElement(WKEXP905CoopEnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP905CoopEnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP905CoopEnvironmentalOptionelement, category);
}
      WKEXP905CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE374CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE374CoopEnvironmentalOptionTime <= 200) { 
        CIVE374CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE374CoopEnvironmentalOptionTime = currentTime;
  var CIVE374CoopEnvironmentalOptionelement = document.getElementById("CIVE374CoopEnvironmentalOption");
 if (!CIVE374CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE374CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE374CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE374CoopEnvironmentalOption")[i];
        if (CIVE374CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE374CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine198());
     that.highlightElement(CIVE374CoopEnvironmentalOptionelement, "EngineeringDesign");
     that.addToClicked("CIVE374CoopEnvironmentalOption", "EngineeringDesign");
      CIVE374CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine198());
     that.unHighlightElement(CIVE374CoopEnvironmentalOptionelement, "EngineeringDesign");
     var category = that.removeFromClicked("CIVE374CoopEnvironmentalOption", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(CIVE374CoopEnvironmentalOptionelement, category);
}
      CIVE374CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE320CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE320CoopEnvironmentalOptionTime <= 200) { 
        ENVE320CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE320CoopEnvironmentalOptionTime = currentTime;
  var ENVE320CoopEnvironmentalOptionelement = document.getElementById("ENVE320CoopEnvironmentalOption");
 if (!ENVE320CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE320CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE320CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE320CoopEnvironmentalOption")[i];
        if (ENVE320CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE320CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine199());
      that.addLine(getLine200());
     that.highlightElement(ENVE320CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE320CoopEnvironmentalOption", "EngineeringSciences");
      ENVE320CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine199());
      that.removeLine(getLine200());
     that.unHighlightElement(ENVE320CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE320CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE320CoopEnvironmentalOptionelement, category);
}
      ENVE320CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE421CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE421CoopEnvironmentalOptionTime <= 200) { 
        ENVE421CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE421CoopEnvironmentalOptionTime = currentTime;
  var ENVE421CoopEnvironmentalOptionelement = document.getElementById("ENVE421CoopEnvironmentalOption");
 if (!ENVE421CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE421CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE421CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE421CoopEnvironmentalOption")[i];
        if (ENVE421CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE421CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine201());
      that.addLine(getLine209());
     that.highlightElement(ENVE421CoopEnvironmentalOptionelement, "EngineeringDesign");
     that.addToClicked("ENVE421CoopEnvironmentalOption", "EngineeringDesign");
      ENVE421CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine201());
      that.removeLine(getLine209());
     that.unHighlightElement(ENVE421CoopEnvironmentalOptionelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENVE421CoopEnvironmentalOption", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENVE421CoopEnvironmentalOptionelement, category);
}
      ENVE421CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE423CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE423CoopEnvironmentalOptionTime <= 200) { 
        ENVE423CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE423CoopEnvironmentalOptionTime = currentTime;
  var ENVE423CoopEnvironmentalOptionelement = document.getElementById("ENVE423CoopEnvironmentalOption");
 if (!ENVE423CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE423CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE423CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE423CoopEnvironmentalOption")[i];
        if (ENVE423CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE423CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine202());
     that.highlightElement(ENVE423CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE423CoopEnvironmentalOption", "EngineeringSciences");
      ENVE423CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine202());
     that.unHighlightElement(ENVE423CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE423CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE423CoopEnvironmentalOptionelement, category);
}
      ENVE423CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE432CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE432CoopEnvironmentalOptionTime <= 200) { 
        ENVE432CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE432CoopEnvironmentalOptionTime = currentTime;
  var ENVE432CoopEnvironmentalOptionelement = document.getElementById("ENVE432CoopEnvironmentalOption");
 if (!ENVE432CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE432CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE432CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE432CoopEnvironmentalOption")[i];
        if (ENVE432CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE432CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine203());
     that.highlightElement(ENVE432CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE432CoopEnvironmentalOption", "EngineeringSciences");
      ENVE432CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine203());
     that.unHighlightElement(ENVE432CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE432CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE432CoopEnvironmentalOptionelement, category);
}
      ENVE432CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE524CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE524CoopEnvironmentalOptionTime <= 200) { 
        CIVE524CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE524CoopEnvironmentalOptionTime = currentTime;
  var CIVE524CoopEnvironmentalOptionelement = document.getElementById("CIVE524CoopEnvironmentalOption");
 if (!CIVE524CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE524CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE524CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE524CoopEnvironmentalOption")[i];
        if (CIVE524CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE524CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine204());
     that.highlightElement(CIVE524CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE524CoopEnvironmentalOption", "EngineeringSciences");
      CIVE524CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine204());
     that.unHighlightElement(CIVE524CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE524CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE524CoopEnvironmentalOptionelement, category);
}
      CIVE524CoopEnvironmentalOptionflag=false
  }
};
$scope.CIVE526CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CIVE526CoopEnvironmentalOptionTime <= 200) { 
        CIVE526CoopEnvironmentalOptionTime = currentTime;
        return;
    }
CIVE526CoopEnvironmentalOptionTime = currentTime;
  var CIVE526CoopEnvironmentalOptionelement = document.getElementById("CIVE526CoopEnvironmentalOption");
 if (!CIVE526CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("CIVE526CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("CIVE526CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("CIVE526CoopEnvironmentalOption")[i];
        if (CIVE526CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CIVE526CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(CIVE526CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("CIVE526CoopEnvironmentalOption", "EngineeringSciences");
      CIVE526CoopEnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(CIVE526CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("CIVE526CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CIVE526CoopEnvironmentalOptionelement, category);
}
      CIVE526CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE400CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE400CoopEnvironmentalOptionTime <= 200) { 
        ENVE400CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE400CoopEnvironmentalOptionTime = currentTime;
  var ENVE400CoopEnvironmentalOptionelement = document.getElementById("ENVE400CoopEnvironmentalOption");
 if (!ENVE400CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE400CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE400CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE400CoopEnvironmentalOption")[i];
        if (ENVE400CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE400CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine205());
     that.highlightElement(ENVE400CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE400CoopEnvironmentalOption", "EngineeringSciences");
      ENVE400CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine205());
     that.unHighlightElement(ENVE400CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE400CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE400CoopEnvironmentalOptionelement, category);
}
      ENVE400CoopEnvironmentalOptionflag=false
  }
};
$scope.ENGM310CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310CoopEnvironmentalOptionTime <= 200) { 
        ENGM310CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENGM310CoopEnvironmentalOptionTime = currentTime;
  var ENGM310CoopEnvironmentalOptionelement = document.getElementById("ENGM310CoopEnvironmentalOption");
 if (!ENGM310CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENGM310CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENGM310CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENGM310CoopEnvironmentalOption")[i];
        if (ENGM310CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM310CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGM310CoopEnvironmentalOptionelement, "Other");
     that.addToClicked("ENGM310CoopEnvironmentalOption", "Other");
      ENGM310CoopEnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(ENGM310CoopEnvironmentalOptionelement, "Other");
     var category = that.removeFromClicked("ENGM310CoopEnvironmentalOption", "Other");
  if (category != "") { 
     that.highlightElement(ENGM310CoopEnvironmentalOptionelement, category);
}
      ENGM310CoopEnvironmentalOptionflag=false
  }
};
$scope.ENGM401CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401CoopEnvironmentalOptionTime <= 200) { 
        ENGM401CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENGM401CoopEnvironmentalOptionTime = currentTime;
  var ENGM401CoopEnvironmentalOptionelement = document.getElementById("ENGM401CoopEnvironmentalOption");
 if (!ENGM401CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENGM401CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENGM401CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENGM401CoopEnvironmentalOption")[i];
        if (ENGM401CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGM401CoopEnvironmentalOptionelement, "Other");
     that.addToClicked("ENGM401CoopEnvironmentalOption", "Other");
      ENGM401CoopEnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(ENGM401CoopEnvironmentalOptionelement, "Other");
     var category = that.removeFromClicked("ENGM401CoopEnvironmentalOption", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401CoopEnvironmentalOptionelement, category);
}
      ENGM401CoopEnvironmentalOptionflag=false
  }
};
$scope.ENGG400CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400CoopEnvironmentalOptionTime <= 200) { 
        ENGG400CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENGG400CoopEnvironmentalOptionTime = currentTime;
  var ENGG400CoopEnvironmentalOptionelement = document.getElementById("ENGG400CoopEnvironmentalOption");
 if (!ENGG400CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENGG400CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENGG400CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENGG400CoopEnvironmentalOption")[i];
        if (ENGG400CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400CoopEnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("ENGG400CoopEnvironmentalOption", "EngineeringProfession");
      ENGG400CoopEnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(ENGG400CoopEnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400CoopEnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400CoopEnvironmentalOptionelement, category);
}
      ENGG400CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE434CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE434CoopEnvironmentalOptionTime <= 200) { 
        ENVE434CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE434CoopEnvironmentalOptionTime = currentTime;
  var ENVE434CoopEnvironmentalOptionelement = document.getElementById("ENVE434CoopEnvironmentalOption");
 if (!ENVE434CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE434CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE434CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE434CoopEnvironmentalOption")[i];
        if (ENVE434CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE434CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine206());
      that.addLine(getLine207());
     that.highlightElement(ENVE434CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ENVE434CoopEnvironmentalOption", "EngineeringSciences");
      ENVE434CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine206());
      that.removeLine(getLine207());
     that.unHighlightElement(ENVE434CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ENVE434CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ENVE434CoopEnvironmentalOptionelement, category);
}
      ENVE434CoopEnvironmentalOptionflag=false
  }
};
$scope.ENVE440CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENVE440CoopEnvironmentalOptionTime <= 200) { 
        ENVE440CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ENVE440CoopEnvironmentalOptionTime = currentTime;
  var ENVE440CoopEnvironmentalOptionelement = document.getElementById("ENVE440CoopEnvironmentalOption");
 if (!ENVE440CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ENVE440CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ENVE440CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ENVE440CoopEnvironmentalOption")[i];
        if (ENVE440CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENVE440CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine208());
      that.addLine(getLine209());
     that.highlightElement(ENVE440CoopEnvironmentalOptionelement, "EngineeringDesign");
     that.addToClicked("ENVE440CoopEnvironmentalOption", "EngineeringDesign");
      ENVE440CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine208());
      that.removeLine(getLine209());
     that.unHighlightElement(ENVE440CoopEnvironmentalOptionelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENVE440CoopEnvironmentalOption", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENVE440CoopEnvironmentalOptionelement, category);
}
      ENVE440CoopEnvironmentalOptionflag=false
  }
};
$scope.LAW399CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - LAW399CoopEnvironmentalOptionTime <= 200) { 
        LAW399CoopEnvironmentalOptionTime = currentTime;
        return;
    }
LAW399CoopEnvironmentalOptionTime = currentTime;
  var LAW399CoopEnvironmentalOptionelement = document.getElementById("LAW399CoopEnvironmentalOption");
 if (!LAW399CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("LAW399CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("LAW399CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("LAW399CoopEnvironmentalOption")[i];
        if (LAW399CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(LAW399CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(LAW399CoopEnvironmentalOptionelement, "EngineeringProfession");
     that.addToClicked("LAW399CoopEnvironmentalOption", "EngineeringProfession");
      LAW399CoopEnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(LAW399CoopEnvironmentalOptionelement, "EngineeringProfession");
     var category = that.removeFromClicked("LAW399CoopEnvironmentalOption", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(LAW399CoopEnvironmentalOptionelement, category);
}
      LAW399CoopEnvironmentalOptionflag=false
  }
};
$scope.ITSElectiveCoopEnvironmentalOption0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveCoopEnvironmentalOption0Time <= 200) { 
        ITSElectiveCoopEnvironmentalOption0Time = currentTime;
        return;
    }
ITSElectiveCoopEnvironmentalOption0Time = currentTime;
  var ITSElectiveCoopEnvironmentalOption0element = document.getElementById("ITSElectiveCoopEnvironmentalOption0");
 if (!ITSElectiveCoopEnvironmentalOption0flag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ITSElectiveCoopEnvironmentalOption0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ITSElectiveCoopEnvironmentalOption0").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ITSElectiveCoopEnvironmentalOption0")[i];
        if (ITSElectiveCoopEnvironmentalOption0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveCoopEnvironmentalOption0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveCoopEnvironmentalOption0element, "ITS");
     that.addToClicked("ITSElectiveCoopEnvironmentalOption0", "ITS");
      ITSElectiveCoopEnvironmentalOption0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveCoopEnvironmentalOption0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveCoopEnvironmentalOption0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveCoopEnvironmentalOption0element, category);
}
      ITSElectiveCoopEnvironmentalOption0flag=false
  }
};
$scope.ECE209CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE209CoopEnvironmentalOptionTime <= 200) { 
        ECE209CoopEnvironmentalOptionTime = currentTime;
        return;
    }
ECE209CoopEnvironmentalOptionTime = currentTime;
  var ECE209CoopEnvironmentalOptionelement = document.getElementById("ECE209CoopEnvironmentalOption");
 if (!ECE209CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("ECE209CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("ECE209CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("ECE209CoopEnvironmentalOption")[i];
        if (ECE209CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE209CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE209CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("ECE209CoopEnvironmentalOption", "EngineeringSciences");
      ECE209CoopEnvironmentalOptionflag=true
  }
 else {
     that.unHighlightElement(ECE209CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE209CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE209CoopEnvironmentalOptionelement, category);
}
      ECE209CoopEnvironmentalOptionflag=false
  }
};
$scope.MATE202CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE202CoopEnvironmentalOptionTime <= 200) { 
        MATE202CoopEnvironmentalOptionTime = currentTime;
        return;
    }
MATE202CoopEnvironmentalOptionTime = currentTime;
  var MATE202CoopEnvironmentalOptionelement = document.getElementById("MATE202CoopEnvironmentalOption");
 if (!MATE202CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("MATE202CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("MATE202CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("MATE202CoopEnvironmentalOption")[i];
        if (MATE202CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE202CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine210());
     that.highlightElement(MATE202CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("MATE202CoopEnvironmentalOption", "EngineeringSciences");
      MATE202CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine210());
     that.unHighlightElement(MATE202CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("MATE202CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MATE202CoopEnvironmentalOptionelement, category);
}
      MATE202CoopEnvironmentalOptionflag=false
  }
};
$scope.MECE250CoopEnvironmentalOptionListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MECE250CoopEnvironmentalOptionTime <= 200) { 
        MECE250CoopEnvironmentalOptionTime = currentTime;
        return;
    }
MECE250CoopEnvironmentalOptionTime = currentTime;
  var MECE250CoopEnvironmentalOptionelement = document.getElementById("MECE250CoopEnvironmentalOption");
 if (!MECE250CoopEnvironmentalOptionflag) {
     if (that.CoopEnvironmentalOptionClickedMap.get("MECE250CoopEnvironmentalOption").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopEnvironmentalOptionClickedMap.get("MECE250CoopEnvironmentalOption").length; i++) { 
        var cate = that.CoopEnvironmentalOptionClickedMap.get("MECE250CoopEnvironmentalOption")[i];
        if (MECE250CoopEnvironmentalOptionelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MECE250CoopEnvironmentalOptionelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine211());
      that.addLine(getLine212());
      that.addLine(getLine213());
     that.highlightElement(MECE250CoopEnvironmentalOptionelement, "EngineeringSciences");
     that.addToClicked("MECE250CoopEnvironmentalOption", "EngineeringSciences");
      MECE250CoopEnvironmentalOptionflag=true
  }
 else {
      that.removeLine(getLine211());
      that.removeLine(getLine212());
      that.removeLine(getLine213());
     that.unHighlightElement(MECE250CoopEnvironmentalOptionelement, "EngineeringSciences");
     var category = that.removeFromClicked("MECE250CoopEnvironmentalOption", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(MECE250CoopEnvironmentalOptionelement, category);
}
      MECE250CoopEnvironmentalOptionflag=false
  }
};
$scope.CHEM103CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CHEM103CoopEnvironmentalOptiondesc");
 if (!CHEM103CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENGG100CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGG100CoopEnvironmentalOptiondesc");
 if (!ENGG100CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENGG130CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGG130CoopEnvironmentalOptiondesc");
 if (!ENGG130CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENGL199CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGL199CoopEnvironmentalOptiondesc");
 if (!ENGL199CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199CoopEnvironmentalOptionrflag=false
  }
};
$scope.MATH100CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MATH100CoopEnvironmentalOptiondesc");
 if (!MATH100CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100CoopEnvironmentalOptionrflag=false
  }
};
$scope.PHYS130CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("PHYS130CoopEnvironmentalOptiondesc");
 if (!PHYS130CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130CoopEnvironmentalOptionrflag=false
  }
};
$scope.CHEM105CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CHEM105CoopEnvironmentalOptiondesc");
 if (!CHEM105CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENCMP100CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENCMP100CoopEnvironmentalOptiondesc");
 if (!ENCMP100CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENGG160CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGG160CoopEnvironmentalOptiondesc");
 if (!ENGG160CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENPH131CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENPH131CoopEnvironmentalOptiondesc");
 if (!ENPH131CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131CoopEnvironmentalOptionrflag=false
  }
};
$scope.MATH101CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MATH101CoopEnvironmentalOptiondesc");
 if (!MATH101CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101CoopEnvironmentalOptionrflag=false
  }
};
$scope.MATH102CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MATH102CoopEnvironmentalOptiondesc");
 if (!MATH102CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE265CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE265CoopEnvironmentalOptiondesc");
 if (!CIVE265CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE265CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE265CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE270CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE270CoopEnvironmentalOptiondesc");
 if (!CIVE270CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE270CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE270CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENGG299CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGG299CoopEnvironmentalOptiondesc");
 if (!ENGG299CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE220CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE220CoopEnvironmentalOptiondesc");
 if (!ENVE220CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE220CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE220CoopEnvironmentalOptionrflag=false
  }
};
$scope.EAS210CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("EAS210CoopEnvironmentalOptiondesc");
 if (!EAS210CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      EAS210CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      EAS210CoopEnvironmentalOptionrflag=false
  }
};
$scope.MATH209CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MATH209CoopEnvironmentalOptiondesc");
 if (!MATH209CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE240CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE240CoopEnvironmentalOptiondesc");
 if (!CIVE240CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE240CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE240CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE250CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE250CoopEnvironmentalOptiondesc");
 if (!CIVE250CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE250CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE250CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE251CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE251CoopEnvironmentalOptiondesc");
 if (!CIVE251CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE251CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE251CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE295CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE295CoopEnvironmentalOptiondesc");
 if (!CIVE295CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE295CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE295CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE251CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE251CoopEnvironmentalOptiondesc");
 if (!ENVE251CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE251CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE251CoopEnvironmentalOptionrflag=false
  }
};
$scope.MATH201CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MATH201CoopEnvironmentalOptiondesc");
 if (!MATH201CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201CoopEnvironmentalOptionrflag=false
  }
};
$scope.STAT235CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("STAT235CoopEnvironmentalOptiondesc");
 if (!STAT235CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      STAT235CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      STAT235CoopEnvironmentalOptionrflag=false
  }
};
$scope.WKEXP901CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("WKEXP901CoopEnvironmentalOptiondesc");
 if (!WKEXP901CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP901CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP901CoopEnvironmentalOptionrflag=false
  }
};
$scope.WKEXP902CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("WKEXP902CoopEnvironmentalOptiondesc");
 if (!WKEXP902CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP902CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP902CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE330CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE330CoopEnvironmentalOptiondesc");
 if (!CIVE330CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE330CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE330CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE395CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE395CoopEnvironmentalOptiondesc");
 if (!CIVE395CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE395CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE395CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE302CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE302CoopEnvironmentalOptiondesc");
 if (!ENVE302CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE302CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE302CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE325CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE325CoopEnvironmentalOptiondesc");
 if (!ENVE325CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE325CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE325CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENGG404CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGG404CoopEnvironmentalOptiondesc");
 if (!ENGG404CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404CoopEnvironmentalOptionrflag=false
  }
};
$scope.ComplementaryElectiveCoopEnvironmentalOption0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveCoopEnvironmentalOption0desc");
 if (!ComplementaryElectiveCoopEnvironmentalOption0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveCoopEnvironmentalOption0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveCoopEnvironmentalOption0rflag=false
  }
};
$scope.WKEXP903CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("WKEXP903CoopEnvironmentalOptiondesc");
 if (!WKEXP903CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP903CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP903CoopEnvironmentalOptionrflag=false
  }
};
$scope.CHE243CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CHE243CoopEnvironmentalOptiondesc");
 if (!CHE243CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE331CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE331CoopEnvironmentalOptiondesc");
 if (!CIVE331CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE331CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE331CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE372CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE372CoopEnvironmentalOptiondesc");
 if (!CIVE372CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE372CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE372CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE381CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE381CoopEnvironmentalOptiondesc");
 if (!CIVE381CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE381CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE381CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE324CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE324CoopEnvironmentalOptiondesc");
 if (!ENVE324CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE324CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE324CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE326CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE326CoopEnvironmentalOptiondesc");
 if (!ENVE326CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE326CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE326CoopEnvironmentalOptionrflag=false
  }
};
$scope.WKEXP904CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("WKEXP904CoopEnvironmentalOptiondesc");
 if (!WKEXP904CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP904CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP904CoopEnvironmentalOptionrflag=false
  }
};
$scope.WKEXP905CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("WKEXP905CoopEnvironmentalOptiondesc");
 if (!WKEXP905CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP905CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP905CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE374CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE374CoopEnvironmentalOptiondesc");
 if (!CIVE374CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE374CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE374CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE320CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE320CoopEnvironmentalOptiondesc");
 if (!ENVE320CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE320CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE320CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE421CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE421CoopEnvironmentalOptiondesc");
 if (!ENVE421CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE421CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE421CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE423CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE423CoopEnvironmentalOptiondesc");
 if (!ENVE423CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE423CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE423CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE432CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE432CoopEnvironmentalOptiondesc");
 if (!ENVE432CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE432CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE432CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE524CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE524CoopEnvironmentalOptiondesc");
 if (!CIVE524CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE524CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE524CoopEnvironmentalOptionrflag=false
  }
};
$scope.CIVE526CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("CIVE526CoopEnvironmentalOptiondesc");
 if (!CIVE526CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CIVE526CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CIVE526CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE400CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE400CoopEnvironmentalOptiondesc");
 if (!ENVE400CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE400CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE400CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENGM310CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGM310CoopEnvironmentalOptiondesc");
 if (!ENGM310CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENGM401CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGM401CoopEnvironmentalOptiondesc");
 if (!ENGM401CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENGG400CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENGG400CoopEnvironmentalOptiondesc");
 if (!ENGG400CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE434CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE434CoopEnvironmentalOptiondesc");
 if (!ENVE434CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE434CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE434CoopEnvironmentalOptionrflag=false
  }
};
$scope.ENVE440CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ENVE440CoopEnvironmentalOptiondesc");
 if (!ENVE440CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENVE440CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENVE440CoopEnvironmentalOptionrflag=false
  }
};
$scope.LAW399CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("LAW399CoopEnvironmentalOptiondesc");
 if (!LAW399CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      LAW399CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      LAW399CoopEnvironmentalOptionrflag=false
  }
};
$scope.ITSElectiveCoopEnvironmentalOption0RCListener = function () {
  var element = document.getElementById("ITSElectiveCoopEnvironmentalOption0desc");
 if (!ITSElectiveCoopEnvironmentalOption0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveCoopEnvironmentalOption0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveCoopEnvironmentalOption0rflag=false
  }
};
$scope.ECE209CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("ECE209CoopEnvironmentalOptiondesc");
 if (!ECE209CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE209CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE209CoopEnvironmentalOptionrflag=false
  }
};
$scope.MATE202CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MATE202CoopEnvironmentalOptiondesc");
 if (!MATE202CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE202CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE202CoopEnvironmentalOptionrflag=false
  }
};
$scope.MECE250CoopEnvironmentalOptionRCListener = function () {
  var element = document.getElementById("MECE250CoopEnvironmentalOptiondesc");
 if (!MECE250CoopEnvironmentalOptionrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MECE250CoopEnvironmentalOptionrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MECE250CoopEnvironmentalOptionrflag=false
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