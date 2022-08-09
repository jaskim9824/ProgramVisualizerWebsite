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
this.TraditionalPlanMaxCourses = 8;
this.CoopPlanList = [];
this.CoopPlanClicked = [];
this.CoopPlanLegendBtns = [];
this.CoopPlanLegendBtnsClicked = [];
this.CoopPlanClickedMap = new Map();
this.CoopPlanTerms = 13;
this.CoopPlanMaxCourses = 8;
this.NanoTraditionalPlanList = [];
this.NanoTraditionalPlanClicked = [];
this.NanoTraditionalPlanLegendBtns = [];
this.NanoTraditionalPlanLegendBtnsClicked = [];
this.NanoTraditionalPlanClickedMap = new Map();
this.NanoTraditionalPlanTerms = 8;
this.NanoTraditionalPlanMaxCourses = 8;
this.NanoCoopPlanList = [];
this.NanoCoopPlanClicked = [];
this.NanoCoopPlanLegendBtns = [];
this.NanoCoopPlanLegendBtnsClicked = [];
this.NanoCoopPlanClickedMap = new Map();
this.NanoCoopPlanTerms = 13;
this.NanoCoopPlanMaxCourses = 8;
this.previousPlan = $scope.selectedPlan
this.setDefaults = function(plan) { 
  switch(plan) { 
      case "TraditionalPlan": 
          $scope.$apply();
          break;
      case "CoopPlan": 
          $scope.$apply();
          break;
      case "NanoTraditionalPlan": 
          $scope.$apply();
          break;
      case "NanoCoopPlan": 
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
  case "CoopPlan": 
    for (let i = 0; i < this.CoopPlanList.length; i++) {
        this.CoopPlanList[i][0].hide(true);
    }
    break; 
  case "NanoTraditionalPlan": 
    for (let i = 0; i < this.NanoTraditionalPlanList.length; i++) {
        this.NanoTraditionalPlanList[i][0].hide(true);
    }
    break; 
  case "NanoCoopPlan": 
    for (let i = 0; i < this.NanoCoopPlanList.length; i++) {
        this.NanoCoopPlanList[i][0].hide(true);
    }
    break; 
    default:
    console.log("shouldn't be here");
    }
};
  var currbtn = document.getElementById("NaturalSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringProfession");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Other");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Math");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringDesign");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("COMP");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("PROG");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("ITS");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlanLegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
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
    case "NanoTraditionalPlan": 
      for (let i = 0; i < this.NanoTraditionalPlanList.length; i++) {
          this.NanoTraditionalPlanList[i][0].show(true);
      }
      width = this.NanoTraditionalPlanTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.NanoTraditionalPlanMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.NanoTraditionalPlanClicked.length; i++) {
          var element = document.getElementById(this.NanoTraditionalPlanClicked[i][0]);
          this.highlightElement(element, this.NanoTraditionalPlanClicked[i][1]);
      }
      for (let i = 0; i < this.NanoTraditionalPlanLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.NanoTraditionalPlanLegendBtnsClicked.length; j++) {
              if (this.NanoTraditionalPlanLegendBtnsClicked[j] == this.NanoTraditionalPlanLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
            if (this.NanoTraditionalPlanLegendBtns[i].classList.contains("legendbutton-pressed")) {
              this.NanoTraditionalPlanLegendBtns[i].classList.remove("legendbutton-pressed");
            }
              this.NanoTraditionalPlanLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
            if (this.NanoTraditionalPlanLegendBtns[i].classList.contains("legendbutton")) {
              this.NanoTraditionalPlanLegendBtns[i].classList.remove("legendbutton");
            }
              this.NanoTraditionalPlanLegendBtns[i].classList.add("legendbutton-pressed");
          }
      }
      break; 
    case "NanoCoopPlan": 
      for (let i = 0; i < this.NanoCoopPlanList.length; i++) {
          this.NanoCoopPlanList[i][0].show(true);
      }
      width = this.NanoCoopPlanTerms*220 + 20;
      widthstr = width.toString() + "px";
      document.getElementById("main").style.width = widthstr;
      height = this.NanoCoopPlanMaxCourses*100 + 690;
      heightstr = height.toString() + "px";
      document.getElementById("main").style.height = heightstr;
      for (let i = 0; i < this.NanoCoopPlanClicked.length; i++) {
          var element = document.getElementById(this.NanoCoopPlanClicked[i][0]);
          this.highlightElement(element, this.NanoCoopPlanClicked[i][1]);
      }
      for (let i = 0; i < this.NanoCoopPlanLegendBtns.length; i++) {
          var found = false;
          for (let j = 0; j < this.NanoCoopPlanLegendBtnsClicked.length; j++) {
              if (this.NanoCoopPlanLegendBtnsClicked[j] == this.NanoCoopPlanLegendBtns[i]) {
                  found = true;
              }
          }
          if (found == false) {
            if (this.NanoCoopPlanLegendBtns[i].classList.contains("legendbutton-pressed")) {
              this.NanoCoopPlanLegendBtns[i].classList.remove("legendbutton-pressed");
            }
              this.NanoCoopPlanLegendBtns[i].classList.add("legendbutton");
          }
          if (found == true) {
            if (this.NanoCoopPlanLegendBtns[i].classList.contains("legendbutton")) {
              this.NanoCoopPlanLegendBtns[i].classList.remove("legendbutton");
            }
              this.NanoCoopPlanLegendBtns[i].classList.add("legendbutton-pressed");
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
 case "NanoTraditionalPlan":
    var index = this.NanoTraditionalPlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.NanoTraditionalPlanList.push([line, 1])
    }
    else {
        this.NanoTraditionalPlanList[index][1]++;
    }
    break;
 case "NanoCoopPlan":
    var index = this.NanoCoopPlanList.findIndex((element) => element[0] == line);
    if (index == -1) {
        line.show(false);
        this.NanoCoopPlanList.push([line, 1])
    }
    else {
        this.NanoCoopPlanList[index][1]++;
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
    break; case "CoopPlan":
    var index = this.CoopPlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlanList[index][1]--
        if (this.CoopPlanList[index][1] <= 0) {
            line.hide(false);
            this.CoopPlanList.splice(index, 1);
        }
    }
    break; case "NanoTraditionalPlan":
    var index = this.NanoTraditionalPlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.NanoTraditionalPlanList[index][1]--
        if (this.NanoTraditionalPlanList[index][1] <= 0) {
            line.hide(false);
            this.NanoTraditionalPlanList.splice(index, 1);
        }
    }
    break; case "NanoCoopPlan":
    var index = this.NanoCoopPlanList.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.NanoCoopPlanList[index][1]--
        if (this.NanoCoopPlanList[index][1] <= 0) {
            line.hide(false);
            this.NanoCoopPlanList.splice(index, 1);
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
    break; case "NanoTraditionalPlan":
    var index = this.NanoTraditionalPlanClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.NanoTraditionalPlanClicked.push([element, category, 1]);
    }
    else {
        this.NanoTraditionalPlanClicked[index][1] = category;
        this.NanoTraditionalPlanClicked[index][2]++;
    }
    this.NanoTraditionalPlanClickedMap.get(element).push(category);
    break; case "NanoCoopPlan":
    var index = this.NanoCoopPlanClicked.findIndex((item) => item[0] == element);
    if (index == -1) {
        this.NanoCoopPlanClicked.push([element, category, 1]);
    }
    else {
        this.NanoCoopPlanClicked[index][1] = category;
        this.NanoCoopPlanClicked[index][2]++;
    }
    this.NanoCoopPlanClickedMap.get(element).push(category);
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
    break; case "NanoTraditionalPlan":
    var index = this.NanoTraditionalPlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.NanoTraditionalPlanClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.NanoTraditionalPlanClickedMap.get(element).splice(indexMap, 1);
        }
        this.NanoTraditionalPlanClicked[index][2]--;
        if (this.NanoTraditionalPlanClicked[index][2] <= 0) {
            this.NanoTraditionalPlanClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.NanoTraditionalPlanClickedMap.get(element).length - 1
        return this.NanoTraditionalPlanClickedMap.get(element)[maxIndex];
    }
    return "";
    break; case "NanoCoopPlan":
    var index = this.NanoCoopPlanClicked.findIndex((item) => item[0] == element);
    if (index != -1) {
        var indexMap = this.NanoCoopPlanClickedMap.get(element).lastIndexOf(category);
        if (indexMap != -1) {
            this.NanoCoopPlanClickedMap.get(element).splice(indexMap, 1);
        }
        this.NanoCoopPlanClicked[index][2]--;
        if (this.NanoCoopPlanClicked[index][2] <= 0) {
            this.NanoCoopPlanClicked.splice(index, 1);
            return "";
        }
        var maxIndex = this.NanoCoopPlanClickedMap.get(element).length - 1
        return this.NanoCoopPlanClickedMap.get(element)[maxIndex];
    }
    return "";
    break;    default:
    console.log("shouldn't be here");
    }
};
var NaturalSciencesTraditionalPlanflag = false;
var NaturalSciencesCoopPlanflag = false;
var NaturalSciencesNanoTraditionalPlanflag = false;
var NaturalSciencesNanoCoopPlanflag = false;
var EngineeringProfessionTraditionalPlanflag = false;
var EngineeringProfessionCoopPlanflag = false;
var EngineeringProfessionNanoTraditionalPlanflag = false;
var EngineeringProfessionNanoCoopPlanflag = false;
var OtherTraditionalPlanflag = false;
var OtherCoopPlanflag = false;
var OtherNanoTraditionalPlanflag = false;
var OtherNanoCoopPlanflag = false;
var MathTraditionalPlanflag = false;
var MathCoopPlanflag = false;
var MathNanoTraditionalPlanflag = false;
var MathNanoCoopPlanflag = false;
var EngineeringDesignTraditionalPlanflag = false;
var EngineeringDesignCoopPlanflag = false;
var EngineeringDesignNanoTraditionalPlanflag = false;
var EngineeringDesignNanoCoopPlanflag = false;
var EngineeringSciencesTraditionalPlanflag = false;
var EngineeringSciencesCoopPlanflag = false;
var EngineeringSciencesNanoTraditionalPlanflag = false;
var EngineeringSciencesNanoCoopPlanflag = false;
var COMPTraditionalPlanflag = false;
var COMPCoopPlanflag = false;
var COMPNanoTraditionalPlanflag = false;
var COMPNanoCoopPlanflag = false;
var PROGTraditionalPlanflag = false;
var PROGCoopPlanflag = false;
var PROGNanoTraditionalPlanflag = false;
var PROGNanoCoopPlanflag = false;
var ITSTraditionalPlanflag = false;
var ITSCoopPlanflag = false;
var ITSNanoTraditionalPlanflag = false;
var ITSNanoCoopPlanflag = false;
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
 var element = document.getElementById("MATE201TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATE201TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATE201TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATE201TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE201TraditionalPlan", categoryName);
 var element = document.getElementById("PHYS281TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS281TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS281TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS281TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS281TraditionalPlan", categoryName);
 var element = document.getElementById("PHYS244TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS244TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS244TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS244TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS244TraditionalPlan", categoryName);
 var element = document.getElementById("PHYS271TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS271TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS271TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS271TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS271TraditionalPlan", categoryName);
 var element = document.getElementById("PHYS381TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS381TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS381TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS381TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS381TraditionalPlan", categoryName);
 var element = document.getElementById("PHYS311TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS311TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS311TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS311TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS311TraditionalPlan", categoryName);
 var element = document.getElementById("PHYS372TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS372TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS372TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS372TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS372TraditionalPlan", categoryName);
 var element = document.getElementById("PHYS415TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS415TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS415TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS415TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS415TraditionalPlan", categoryName);
 var element = document.getElementById("PHYS481TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS481TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS481TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS481TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS481TraditionalPlan", categoryName);
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
 var element = document.getElementById("MATE201CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATE201CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATE201CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATE201CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE201CoopPlan", categoryName);
 var element = document.getElementById("PHYS281CoopPlan");
                            if (this.CoopPlanClickedMap.get("PHYS281CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PHYS281CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PHYS281CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS281CoopPlan", categoryName);
 var element = document.getElementById("PHYS271CoopPlan");
                            if (this.CoopPlanClickedMap.get("PHYS271CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PHYS271CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PHYS271CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS271CoopPlan", categoryName);
 var element = document.getElementById("PHYS381CoopPlan");
                            if (this.CoopPlanClickedMap.get("PHYS381CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PHYS381CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PHYS381CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS381CoopPlan", categoryName);
 var element = document.getElementById("PHYS244CoopPlan");
                            if (this.CoopPlanClickedMap.get("PHYS244CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PHYS244CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PHYS244CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS244CoopPlan", categoryName);
 var element = document.getElementById("PHYS311CoopPlan");
                            if (this.CoopPlanClickedMap.get("PHYS311CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PHYS311CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PHYS311CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS311CoopPlan", categoryName);
 var element = document.getElementById("PHYS372CoopPlan");
                            if (this.CoopPlanClickedMap.get("PHYS372CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PHYS372CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PHYS372CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS372CoopPlan", categoryName);
 var element = document.getElementById("PHYS415CoopPlan");
                            if (this.CoopPlanClickedMap.get("PHYS415CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PHYS415CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PHYS415CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS415CoopPlan", categoryName);
 var element = document.getElementById("PHYS481CoopPlan");
                            if (this.CoopPlanClickedMap.get("PHYS481CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PHYS481CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PHYS481CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS481CoopPlan", categoryName);
       break;
      case "NanoTraditionalPlan":
 var element = document.getElementById("CHEM103NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("CHEM103NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("CHEM103NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("CHEM103NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ENGG130NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ENGG130NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ENGG130NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ENGG130NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130NanoTraditionalPlan", categoryName);
 var element = document.getElementById("PHYS130NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("PHYS130NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("PHYS130NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("PHYS130NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130NanoTraditionalPlan", categoryName);
 var element = document.getElementById("CHEM105NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("CHEM105NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("CHEM105NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("CHEM105NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ENCMP100NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ENCMP100NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ENCMP100NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ENCMP100NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ENPH131NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ENPH131NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ENPH131NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ENPH131NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131NanoTraditionalPlan", categoryName);
 var element = document.getElementById("MATE201NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("MATE201NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("MATE201NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("MATE201NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE201NanoTraditionalPlan", categoryName);
 var element = document.getElementById("PHYS281NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("PHYS281NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("PHYS281NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("PHYS281NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS281NanoTraditionalPlan", categoryName);
 var element = document.getElementById("PHYS244NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("PHYS244NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("PHYS244NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("PHYS244NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS244NanoTraditionalPlan", categoryName);
 var element = document.getElementById("PHYS271NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("PHYS271NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("PHYS271NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("PHYS271NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS271NanoTraditionalPlan", categoryName);
 var element = document.getElementById("PHYS381NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("PHYS381NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("PHYS381NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("PHYS381NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS381NanoTraditionalPlan", categoryName);
 var element = document.getElementById("PHYS311NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("PHYS311NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("PHYS311NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("PHYS311NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS311NanoTraditionalPlan", categoryName);
 var element = document.getElementById("PHYS372NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("PHYS372NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("PHYS372NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("PHYS372NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS372NanoTraditionalPlan", categoryName);
 var element = document.getElementById("PHYS415NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("PHYS415NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("PHYS415NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("PHYS415NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS415NanoTraditionalPlan", categoryName);
 var element = document.getElementById("PHYS481NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("PHYS481NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("PHYS481NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("PHYS481NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS481NanoTraditionalPlan", categoryName);
       break;
      case "NanoCoopPlan":
 var element = document.getElementById("CHEM103NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("CHEM103NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("CHEM103NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("CHEM103NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM103NanoCoopPlan", categoryName);
 var element = document.getElementById("ENGG130NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ENGG130NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ENGG130NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ENGG130NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG130NanoCoopPlan", categoryName);
 var element = document.getElementById("PHYS130NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("PHYS130NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("PHYS130NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("PHYS130NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS130NanoCoopPlan", categoryName);
 var element = document.getElementById("CHEM105NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("CHEM105NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("CHEM105NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("CHEM105NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHEM105NanoCoopPlan", categoryName);
 var element = document.getElementById("ENCMP100NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ENCMP100NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ENCMP100NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ENCMP100NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENCMP100NanoCoopPlan", categoryName);
 var element = document.getElementById("ENPH131NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ENPH131NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ENPH131NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ENPH131NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENPH131NanoCoopPlan", categoryName);
 var element = document.getElementById("MATE201NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("MATE201NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("MATE201NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("MATE201NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATE201NanoCoopPlan", categoryName);
 var element = document.getElementById("PHYS281NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("PHYS281NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("PHYS281NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("PHYS281NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS281NanoCoopPlan", categoryName);
 var element = document.getElementById("PHYS244NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("PHYS244NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("PHYS244NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("PHYS244NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS244NanoCoopPlan", categoryName);
 var element = document.getElementById("PHYS271NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("PHYS271NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("PHYS271NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("PHYS271NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS271NanoCoopPlan", categoryName);
 var element = document.getElementById("PHYS381NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("PHYS381NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("PHYS381NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("PHYS381NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS381NanoCoopPlan", categoryName);
 var element = document.getElementById("PHYS311NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("PHYS311NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("PHYS311NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("PHYS311NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS311NanoCoopPlan", categoryName);
 var element = document.getElementById("PHYS372NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("PHYS372NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("PHYS372NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("PHYS372NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS372NanoCoopPlan", categoryName);
 var element = document.getElementById("PHYS415NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("PHYS415NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("PHYS415NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("PHYS415NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS415NanoCoopPlan", categoryName);
 var element = document.getElementById("PHYS481NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("PHYS481NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("PHYS481NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("PHYS481NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS481NanoCoopPlan", categoryName);
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
      case "NanoTraditionalPlan":
 var element = document.getElementById("ENGG100NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ENGG100NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ENGG100NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ENGG100NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ENGG404NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ENGG404NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ENGG404NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ENGG404NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ENGG400NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ENGG400NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ENGG400NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ENGG400NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400NanoTraditionalPlan", categoryName);
       break;
      case "NanoCoopPlan":
 var element = document.getElementById("ENGG100NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ENGG100NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ENGG100NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ENGG100NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG100NanoCoopPlan", categoryName);
 var element = document.getElementById("ENGG299NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ENGG299NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ENGG299NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ENGG299NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG299NanoCoopPlan", categoryName);
 var element = document.getElementById("WKEXP901NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("WKEXP901NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("WKEXP901NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("WKEXP901NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP901NanoCoopPlan", categoryName);
 var element = document.getElementById("WKEXP902NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("WKEXP902NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("WKEXP902NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("WKEXP902NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP902NanoCoopPlan", categoryName);
 var element = document.getElementById("WKEXP903NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("WKEXP903NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("WKEXP903NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("WKEXP903NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP903NanoCoopPlan", categoryName);
 var element = document.getElementById("WKEXP904NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("WKEXP904NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("WKEXP904NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("WKEXP904NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP904NanoCoopPlan", categoryName);
 var element = document.getElementById("WKEXP905NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("WKEXP905NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("WKEXP905NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("WKEXP905NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("WKEXP905NanoCoopPlan", categoryName);
 var element = document.getElementById("ENGG404NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ENGG404NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ENGG404NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ENGG404NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404NanoCoopPlan", categoryName);
 var element = document.getElementById("ENGG400NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ENGG400NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ENGG400NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ENGG400NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400NanoCoopPlan", categoryName);
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
      case "NanoTraditionalPlan":
 var element = document.getElementById("ENGL199NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ENGL199NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ENGL199NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ENGL199NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ENGM310NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ENGM310NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ENGM310NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ENGM310NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM310NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ENGM401NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ENGM401NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ENGM401NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ENGM401NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401NanoTraditionalPlan", categoryName);
       break;
      case "NanoCoopPlan":
 var element = document.getElementById("ENGL199NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ENGL199NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ENGL199NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ENGL199NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGL199NanoCoopPlan", categoryName);
 var element = document.getElementById("ENGM310NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ENGM310NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ENGM310NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ENGM310NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM310NanoCoopPlan", categoryName);
 var element = document.getElementById("ENGM401NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ENGM401NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ENGM401NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ENGM401NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGM401NanoCoopPlan", categoryName);
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
 var element = document.getElementById("MATH201TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH201TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH201TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH201TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201TraditionalPlan", categoryName);
 var element = document.getElementById("MATH209TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH209TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH209TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH209TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209TraditionalPlan", categoryName);
 var element = document.getElementById("MATH311TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH311TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH311TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH311TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH311TraditionalPlan", categoryName);
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
 var element = document.getElementById("MATH201CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH201CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH201CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH201CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201CoopPlan", categoryName);
 var element = document.getElementById("MATH209CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH209CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH209CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH209CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209CoopPlan", categoryName);
 var element = document.getElementById("MATH311CoopPlan");
                            if (this.CoopPlanClickedMap.get("MATH311CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("MATH311CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("MATH311CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH311CoopPlan", categoryName);
       break;
      case "NanoTraditionalPlan":
 var element = document.getElementById("MATH100NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("MATH100NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("MATH100NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("MATH100NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100NanoTraditionalPlan", categoryName);
 var element = document.getElementById("MATH101NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("MATH101NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("MATH101NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("MATH101NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101NanoTraditionalPlan", categoryName);
 var element = document.getElementById("MATH102NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("MATH102NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("MATH102NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("MATH102NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102NanoTraditionalPlan", categoryName);
 var element = document.getElementById("MATH201NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("MATH201NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("MATH201NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("MATH201NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201NanoTraditionalPlan", categoryName);
 var element = document.getElementById("MATH209NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("MATH209NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("MATH209NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("MATH209NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209NanoTraditionalPlan", categoryName);
 var element = document.getElementById("MATH311NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("MATH311NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("MATH311NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("MATH311NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH311NanoTraditionalPlan", categoryName);
       break;
      case "NanoCoopPlan":
 var element = document.getElementById("MATH100NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("MATH100NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("MATH100NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("MATH100NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH100NanoCoopPlan", categoryName);
 var element = document.getElementById("MATH101NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("MATH101NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("MATH101NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("MATH101NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH101NanoCoopPlan", categoryName);
 var element = document.getElementById("MATH102NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("MATH102NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("MATH102NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("MATH102NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH102NanoCoopPlan", categoryName);
 var element = document.getElementById("MATH201NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("MATH201NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("MATH201NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("MATH201NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201NanoCoopPlan", categoryName);
 var element = document.getElementById("MATH209NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("MATH209NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("MATH209NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("MATH209NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209NanoCoopPlan", categoryName);
 var element = document.getElementById("MATH311NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("MATH311NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("MATH311NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("MATH311NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH311NanoCoopPlan", categoryName);
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
 var element = document.getElementById("ECE494TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE494TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE494TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE494TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE494TraditionalPlan", categoryName);
 var element = document.getElementById("ECE495TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE495TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE495TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE495TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE495TraditionalPlan", categoryName);
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
 var element = document.getElementById("ECE494CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE494CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE494CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE494CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE494CoopPlan", categoryName);
 var element = document.getElementById("ECE495CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE495CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE495CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE495CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE495CoopPlan", categoryName);
       break;
      case "NanoTraditionalPlan":
 var element = document.getElementById("ENGG160NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ENGG160NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ENGG160NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ENGG160NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE494NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE494NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE494NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE494NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE494NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE495NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE495NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE495NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE495NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE495NanoTraditionalPlan", categoryName);
       break;
      case "NanoCoopPlan":
 var element = document.getElementById("ENGG160NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ENGG160NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ENGG160NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ENGG160NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG160NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE494NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE494NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE494NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE494NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE494NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE495NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE495NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE495NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE495NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE495NanoCoopPlan", categoryName);
       break;
       }
      break;
  case "EngineeringSciences":
    switch(planName) {
      case "TraditionalPlan":
 var element = document.getElementById("ECE202TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE202TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE202TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE202TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE202TraditionalPlan", categoryName);
 var element = document.getElementById("PHYS292TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS292TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS292TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS292TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS292TraditionalPlan", categoryName);
 var element = document.getElementById("CHE243TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("CHE243TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243TraditionalPlan", categoryName);
 var element = document.getElementById("ECE203TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE203TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE203TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE203TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE203TraditionalPlan", categoryName);
 var element = document.getElementById("ECE240TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE240TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE240TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE240TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE240TraditionalPlan", categoryName);
 var element = document.getElementById("PHYS292TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS292TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS292TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS292TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS292TraditionalPlan", categoryName);
 var element = document.getElementById("ECE210TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE210TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE210TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE210TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE210TraditionalPlan", categoryName);
 var element = document.getElementById("ECE302TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE302TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE302TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE302TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE302TraditionalPlan", categoryName);
 var element = document.getElementById("ECE340TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE340TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE340TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE340TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE340TraditionalPlan", categoryName);
 var element = document.getElementById("ECE471TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE471TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE471TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE471TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE471TraditionalPlan", categoryName);
 var element = document.getElementById("ECE220TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE220TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE220TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE220TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE220TraditionalPlan", categoryName);
 var element = document.getElementById("ECE303TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE303TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE303TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE303TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE303TraditionalPlan", categoryName);
 var element = document.getElementById("ECE341TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE341TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE341TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE341TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE341TraditionalPlan", categoryName);
 var element = document.getElementById("ECE360TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE360TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE360TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE360TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE360TraditionalPlan", categoryName);
       break;
      case "CoopPlan":
 var element = document.getElementById("ECE202CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE202CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE202CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE202CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE202CoopPlan", categoryName);
 var element = document.getElementById("PHYS292CoopPlan");
                            if (this.CoopPlanClickedMap.get("PHYS292CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PHYS292CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PHYS292CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS292CoopPlan", categoryName);
 var element = document.getElementById("CHE243CoopPlan");
                            if (this.CoopPlanClickedMap.get("CHE243CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("CHE243CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("CHE243CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243CoopPlan", categoryName);
 var element = document.getElementById("ECE203CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE203CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE203CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE203CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE203CoopPlan", categoryName);
 var element = document.getElementById("ECE220CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE220CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE220CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE220CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE220CoopPlan", categoryName);
 var element = document.getElementById("ECE240CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE240CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE240CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE240CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE240CoopPlan", categoryName);
 var element = document.getElementById("PHYS292CoopPlan");
                            if (this.CoopPlanClickedMap.get("PHYS292CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("PHYS292CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("PHYS292CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS292CoopPlan", categoryName);
 var element = document.getElementById("ECE210CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE210CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE210CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE210CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE210CoopPlan", categoryName);
 var element = document.getElementById("ECE302CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE302CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE302CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE302CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE302CoopPlan", categoryName);
 var element = document.getElementById("ECE340CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE340CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE340CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE340CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE340CoopPlan", categoryName);
 var element = document.getElementById("ECE471CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE471CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE471CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE471CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE471CoopPlan", categoryName);
 var element = document.getElementById("ECE303CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE303CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE303CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE303CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE303CoopPlan", categoryName);
 var element = document.getElementById("ECE341CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE341CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE341CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE341CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE341CoopPlan", categoryName);
 var element = document.getElementById("ECE360CoopPlan");
                            if (this.CoopPlanClickedMap.get("ECE360CoopPlan").length > 0) {
                                var mapLen = this.CoopPlanClickedMap.get("ECE360CoopPlan").length - 1
                                var prevCate = this.CoopPlanClickedMap.get("ECE360CoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE360CoopPlan", categoryName);
       break;
      case "NanoTraditionalPlan":
 var element = document.getElementById("ECE202NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE202NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE202NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE202NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE202NanoTraditionalPlan", categoryName);
 var element = document.getElementById("PHYS292NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("PHYS292NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("PHYS292NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("PHYS292NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS292NanoTraditionalPlan", categoryName);
 var element = document.getElementById("CHE243NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("CHE243NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("CHE243NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("CHE243NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE203NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE203NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE203NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE203NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE203NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE240NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE240NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE240NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE240NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE240NanoTraditionalPlan", categoryName);
 var element = document.getElementById("PHYS292NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("PHYS292NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("PHYS292NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("PHYS292NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS292NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE210NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE210NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE210NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE210NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE210NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE302NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE302NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE302NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE302NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE302NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE471NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE471NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE471NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE471NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE471NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE303NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE303NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE303NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE303NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE303NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE341NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE341NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE341NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE341NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE341NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE360NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE360NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE360NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE360NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE360NanoTraditionalPlan", categoryName);
       break;
      case "NanoCoopPlan":
 var element = document.getElementById("ECE202NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE202NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE202NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE202NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE202NanoCoopPlan", categoryName);
 var element = document.getElementById("PHYS292NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("PHYS292NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("PHYS292NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("PHYS292NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS292NanoCoopPlan", categoryName);
 var element = document.getElementById("CHE243NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("CHE243NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("CHE243NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("CHE243NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("CHE243NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE203NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE203NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE203NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE203NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE203NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE240NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE240NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE240NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE240NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE240NanoCoopPlan", categoryName);
 var element = document.getElementById("PHYS292NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("PHYS292NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("PHYS292NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("PHYS292NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS292NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE210NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE210NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE210NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE210NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE210NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE302NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE302NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE302NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE302NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE302NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE471NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE471NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE471NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE471NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE471NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE303NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE303NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE303NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE303NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE303NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE341NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE341NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE341NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE341NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE341NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE360NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE360NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE360NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE360NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE360NanoCoopPlan", categoryName);
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
       break;
      case "NanoTraditionalPlan":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.NanoTraditionalPlanClickedMap.get("ComplementaryElectiveNanoTraditionalPlan" + i).length > 0) {
                var mapLen = this.NanoTraditionalPlanClickedMap.get("ComplementaryElectiveNanoTraditionalPlan" + i).length - 1
                var prevCate = this.NanoTraditionalPlanClickedMap.get("ComplementaryElectiveNanoTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveNanoTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.NanoTraditionalPlanClickedMap.get("ComplementaryElectiveNanoTraditionalPlan" + i).length > 0) {
                var mapLen = this.NanoTraditionalPlanClickedMap.get("ComplementaryElectiveNanoTraditionalPlan" + i).length - 1
                var prevCate = this.NanoTraditionalPlanClickedMap.get("ComplementaryElectiveNanoTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveNanoTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
       break;
      case "NanoCoopPlan":
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.NanoCoopPlanClickedMap.get("ComplementaryElectiveNanoCoopPlan" + i).length > 0) {
                var mapLen = this.NanoCoopPlanClickedMap.get("ComplementaryElectiveNanoCoopPlan" + i).length - 1
                var prevCate = this.NanoCoopPlanClickedMap.get("ComplementaryElectiveNanoCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveNanoCoopPlan" + i, categoryName);
          i = i + 1;
        }
        var COMPelements = document.getElementsByClassName("COMP");
        var i = 0;
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          if (this.NanoCoopPlanClickedMap.get("ComplementaryElectiveNanoCoopPlan" + i).length > 0) {
                var mapLen = this.NanoCoopPlanClickedMap.get("ComplementaryElectiveNanoCoopPlan" + i).length - 1
                var prevCate = this.NanoCoopPlanClickedMap.get("ComplementaryElectiveNanoCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ComplementaryElectiveNanoCoopPlan" + i, categoryName);
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
      case "NanoTraditionalPlan":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan" + i).length > 0) {
                var mapLen = this.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan" + i).length - 1
                var prevCate = this.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveNanoTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan" + i).length > 0) {
                var mapLen = this.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan" + i).length - 1
                var prevCate = this.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveNanoTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
       break;
      case "NanoCoopPlan":
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan" + i).length > 0) {
                var mapLen = this.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan" + i).length - 1
                var prevCate = this.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveNanoCoopPlan" + i, categoryName);
          i = i + 1;
        }
        var PROGelements = document.getElementsByClassName("PROG");
        var i = 0;
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          if (this.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan" + i).length > 0) {
                var mapLen = this.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan" + i).length - 1
                var prevCate = this.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ProgramTechnicalElectiveNanoCoopPlan" + i, categoryName);
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
      case "NanoTraditionalPlan":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.NanoTraditionalPlanClickedMap.get("ITSElectiveNanoTraditionalPlan" + i).length > 0) {
                var mapLen = this.NanoTraditionalPlanClickedMap.get("ITSElectiveNanoTraditionalPlan" + i).length - 1
                var prevCate = this.NanoTraditionalPlanClickedMap.get("ITSElectiveNanoTraditionalPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveNanoTraditionalPlan" + i, categoryName);
          i = i + 1;
        }
       break;
      case "NanoCoopPlan":
        var ITSelements = document.getElementsByClassName("ITS");
        var i = 0;
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          if (this.NanoCoopPlanClickedMap.get("ITSElectiveNanoCoopPlan" + i).length > 0) {
                var mapLen = this.NanoCoopPlanClickedMap.get("ITSElectiveNanoCoopPlan" + i).length - 1
                var prevCate = this.NanoCoopPlanClickedMap.get("ITSElectiveNanoCoopPlan" + i)[mapLen];
                this.unHighlightElement(currelement, prevCate);
          }
          this.highlightElement(currelement, categoryName);
          this.addToClicked("ITSElectiveNanoCoopPlan" + i, categoryName);
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
     var element = document.getElementById("MATE201TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE201TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS281TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS281TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS244TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS244TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS271TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS271TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS381TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS381TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS311TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS311TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS372TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS372TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS415TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS415TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS481TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS481TraditionalPlan", categoryName);
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
     var element = document.getElementById("MATE201CoopPlan");
                            var prevCate = this.removeFromClicked("MATE201CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS281CoopPlan");
                            var prevCate = this.removeFromClicked("PHYS281CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS271CoopPlan");
                            var prevCate = this.removeFromClicked("PHYS271CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS381CoopPlan");
                            var prevCate = this.removeFromClicked("PHYS381CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS244CoopPlan");
                            var prevCate = this.removeFromClicked("PHYS244CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS311CoopPlan");
                            var prevCate = this.removeFromClicked("PHYS311CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS372CoopPlan");
                            var prevCate = this.removeFromClicked("PHYS372CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS415CoopPlan");
                            var prevCate = this.removeFromClicked("PHYS415CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS481CoopPlan");
                            var prevCate = this.removeFromClicked("PHYS481CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "NanoTraditionalPlan":
     var element = document.getElementById("CHEM103NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("CHEM103NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG130NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS130NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("CHEM105NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ENCMP100NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ENPH131NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE201NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("MATE201NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS281NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS281NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS244NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS244NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS271NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS271NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS381NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS381NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS311NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS311NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS372NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS372NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS415NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS415NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS481NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS481NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "NanoCoopPlan":
     var element = document.getElementById("CHEM103NanoCoopPlan");
                            var prevCate = this.removeFromClicked("CHEM103NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG130NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ENGG130NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS130NanoCoopPlan");
                            var prevCate = this.removeFromClicked("PHYS130NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHEM105NanoCoopPlan");
                            var prevCate = this.removeFromClicked("CHEM105NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENCMP100NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ENCMP100NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENPH131NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ENPH131NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATE201NanoCoopPlan");
                            var prevCate = this.removeFromClicked("MATE201NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS281NanoCoopPlan");
                            var prevCate = this.removeFromClicked("PHYS281NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS244NanoCoopPlan");
                            var prevCate = this.removeFromClicked("PHYS244NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS271NanoCoopPlan");
                            var prevCate = this.removeFromClicked("PHYS271NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS381NanoCoopPlan");
                            var prevCate = this.removeFromClicked("PHYS381NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS311NanoCoopPlan");
                            var prevCate = this.removeFromClicked("PHYS311NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS372NanoCoopPlan");
                            var prevCate = this.removeFromClicked("PHYS372NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS415NanoCoopPlan");
                            var prevCate = this.removeFromClicked("PHYS415NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS481NanoCoopPlan");
                            var prevCate = this.removeFromClicked("PHYS481NanoCoopPlan", categoryName);
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
      case "NanoTraditionalPlan":
     var element = document.getElementById("ENGG100NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG100NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG404NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG400NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "NanoCoopPlan":
     var element = document.getElementById("ENGG100NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ENGG100NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG299NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ENGG299NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP901NanoCoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP901NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP902NanoCoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP902NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP903NanoCoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP903NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP904NanoCoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP904NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("WKEXP905NanoCoopPlan");
                            var prevCate = this.removeFromClicked("WKEXP905NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG404NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ENGG404NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGG400NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ENGG400NanoCoopPlan", categoryName);
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
      case "NanoTraditionalPlan":
     var element = document.getElementById("ENGL199NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGL199NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM310NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGM310NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGM401NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "NanoCoopPlan":
     var element = document.getElementById("ENGL199NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ENGL199NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM310NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ENGM310NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ENGM401NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ENGM401NanoCoopPlan", categoryName);
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
     var element = document.getElementById("MATH201TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH201TraditionalPlan", categoryName);
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
     var element = document.getElementById("MATH311TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH311TraditionalPlan", categoryName);
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
     var element = document.getElementById("MATH201CoopPlan");
                            var prevCate = this.removeFromClicked("MATH201CoopPlan", categoryName);
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
     var element = document.getElementById("MATH311CoopPlan");
                            var prevCate = this.removeFromClicked("MATH311CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "NanoTraditionalPlan":
     var element = document.getElementById("MATH100NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH100NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH101NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH102NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH201NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH209NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH311NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH311NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "NanoCoopPlan":
     var element = document.getElementById("MATH100NanoCoopPlan");
                            var prevCate = this.removeFromClicked("MATH100NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH101NanoCoopPlan");
                            var prevCate = this.removeFromClicked("MATH101NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH102NanoCoopPlan");
                            var prevCate = this.removeFromClicked("MATH102NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH201NanoCoopPlan");
                            var prevCate = this.removeFromClicked("MATH201NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH209NanoCoopPlan");
                            var prevCate = this.removeFromClicked("MATH209NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("MATH311NanoCoopPlan");
                            var prevCate = this.removeFromClicked("MATH311NanoCoopPlan", categoryName);
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
     var element = document.getElementById("ECE494TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE494TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE495TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE495TraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE494CoopPlan");
                            var prevCate = this.removeFromClicked("ECE494CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE495CoopPlan");
                            var prevCate = this.removeFromClicked("ECE495CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "NanoTraditionalPlan":
     var element = document.getElementById("ENGG160NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ENGG160NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE494NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE494NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE495NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE495NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "NanoCoopPlan":
     var element = document.getElementById("ENGG160NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ENGG160NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE494NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE494NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE495NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE495NanoCoopPlan", categoryName);
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
     var element = document.getElementById("ECE202TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE202TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS292TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS292TraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE203TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE203TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE240TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE240TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS292TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS292TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE210TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE210TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE302TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE302TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE340TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE340TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE471TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE471TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE220TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE220TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE303TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE303TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE341TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE341TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE360TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE360TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan":
     var element = document.getElementById("ECE202CoopPlan");
                            var prevCate = this.removeFromClicked("ECE202CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS292CoopPlan");
                            var prevCate = this.removeFromClicked("PHYS292CoopPlan", categoryName);
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
     var element = document.getElementById("ECE203CoopPlan");
                            var prevCate = this.removeFromClicked("ECE203CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE220CoopPlan");
                            var prevCate = this.removeFromClicked("ECE220CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE240CoopPlan");
                            var prevCate = this.removeFromClicked("ECE240CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS292CoopPlan");
                            var prevCate = this.removeFromClicked("PHYS292CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE210CoopPlan");
                            var prevCate = this.removeFromClicked("ECE210CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE302CoopPlan");
                            var prevCate = this.removeFromClicked("ECE302CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE340CoopPlan");
                            var prevCate = this.removeFromClicked("ECE340CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE471CoopPlan");
                            var prevCate = this.removeFromClicked("ECE471CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE303CoopPlan");
                            var prevCate = this.removeFromClicked("ECE303CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE341CoopPlan");
                            var prevCate = this.removeFromClicked("ECE341CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE360CoopPlan");
                            var prevCate = this.removeFromClicked("ECE360CoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "NanoTraditionalPlan":
     var element = document.getElementById("ECE202NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE202NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS292NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS292NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE243NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("CHE243NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE203NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE203NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE240NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE240NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS292NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS292NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE210NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE210NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE302NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE302NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE471NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE471NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE303NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE303NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE341NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE341NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE360NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE360NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "NanoCoopPlan":
     var element = document.getElementById("ECE202NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE202NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS292NanoCoopPlan");
                            var prevCate = this.removeFromClicked("PHYS292NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("CHE243NanoCoopPlan");
                            var prevCate = this.removeFromClicked("CHE243NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE203NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE203NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE240NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE240NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("PHYS292NanoCoopPlan");
                            var prevCate = this.removeFromClicked("PHYS292NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE210NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE210NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE302NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE302NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE471NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE471NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE303NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE303NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE341NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE341NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE360NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE360NanoCoopPlan", categoryName);
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
       break;
      case "NanoTraditionalPlan":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveNanoTraditionalPlan" + i, "COMP");
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
          var prevCate = this.removeFromClicked("ComplementaryElectiveNanoTraditionalPlan" + i, "COMP");
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
      case "NanoCoopPlan":
        var COMPelements = document.getElementsByClassName("COMP-highlighted");
        var i = 0;        
        while (COMPelements.length > 0) {
          var currelement = document.getElementById(COMPelements.item(0).id);
          var prevCate = this.removeFromClicked("ComplementaryElectiveNanoCoopPlan" + i, "COMP");
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
          var prevCate = this.removeFromClicked("ComplementaryElectiveNanoCoopPlan" + i, "COMP");
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
      case "NanoTraditionalPlan":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveNanoTraditionalPlan" + i, "PROG");
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
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveNanoTraditionalPlan" + i, "PROG");
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
      case "NanoCoopPlan":
        var PROGelements = document.getElementsByClassName("PROG-highlighted");
        var i = 0;        
        while (PROGelements.length > 0) {
          var currelement = document.getElementById(PROGelements.item(0).id);
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveNanoCoopPlan" + i, "PROG");
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
          var prevCate = this.removeFromClicked("ProgramTechnicalElectiveNanoCoopPlan" + i, "PROG");
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
      case "NanoTraditionalPlan":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveNanoTraditionalPlan" + i, "ITS");
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
      case "NanoCoopPlan":
        var ITSelements = document.getElementsByClassName("ITS-highlighted");
        var i = 0;        
        while (ITSelements.length > 0) {
          var currelement = document.getElementById(ITSelements.item(0).id);
          var prevCate = this.removeFromClicked("ITSElectiveNanoCoopPlan" + i, "ITS");
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
  var ECE202TraditionalPlanflag = false;
  var ECE202TraditionalPlanrflag = false;
 var ECE202TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE202TraditionalPlan", []);
  var MATE201TraditionalPlanflag = false;
  var MATE201TraditionalPlanrflag = false;
 var MATE201TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATE201TraditionalPlan", []);
  var MATH201TraditionalPlanflag = false;
  var MATH201TraditionalPlanrflag = false;
 var MATH201TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH201TraditionalPlan", []);
  var MATH209TraditionalPlanflag = false;
  var MATH209TraditionalPlanrflag = false;
 var MATH209TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH209TraditionalPlan", []);
  var PHYS281TraditionalPlanflag = false;
  var PHYS281TraditionalPlanrflag = false;
 var PHYS281TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS281TraditionalPlan", []);
  var PHYS292TraditionalPlanflag = false;
  var PHYS292TraditionalPlanrflag = false;
 var PHYS292TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS292TraditionalPlan", []);
  var ComplementaryElectiveTraditionalPlan0flag = false;
  var ComplementaryElectiveTraditionalPlan0rflag = false;
 var ComplementaryElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan0", []);
  var CHE243TraditionalPlanflag = false;
  var CHE243TraditionalPlanrflag = false;
 var CHE243TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("CHE243TraditionalPlan", []);
  var ECE203TraditionalPlanflag = false;
  var ECE203TraditionalPlanrflag = false;
 var ECE203TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE203TraditionalPlan", []);
  var ECE240TraditionalPlanflag = false;
  var ECE240TraditionalPlanrflag = false;
 var ECE240TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE240TraditionalPlan", []);
  var PHYS244TraditionalPlanflag = false;
  var PHYS244TraditionalPlanrflag = false;
 var PHYS244TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS244TraditionalPlan", []);
  var PHYS271TraditionalPlanflag = false;
  var PHYS271TraditionalPlanrflag = false;
 var PHYS271TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS271TraditionalPlan", []);
  var PHYS292TraditionalPlanflag = false;
  var PHYS292TraditionalPlanrflag = false;
 var PHYS292TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS292TraditionalPlan", []);
  var ComplementaryElectiveTraditionalPlan1flag = false;
  var ComplementaryElectiveTraditionalPlan1rflag = false;
 var ComplementaryElectiveTraditionalPlan1Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan1", []);
  var ECE210TraditionalPlanflag = false;
  var ECE210TraditionalPlanrflag = false;
 var ECE210TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE210TraditionalPlan", []);
  var ECE302TraditionalPlanflag = false;
  var ECE302TraditionalPlanrflag = false;
 var ECE302TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE302TraditionalPlan", []);
  var ECE340TraditionalPlanflag = false;
  var ECE340TraditionalPlanrflag = false;
 var ECE340TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE340TraditionalPlan", []);
  var ECE471TraditionalPlanflag = false;
  var ECE471TraditionalPlanrflag = false;
 var ECE471TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE471TraditionalPlan", []);
  var MATH311TraditionalPlanflag = false;
  var MATH311TraditionalPlanrflag = false;
 var MATH311TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH311TraditionalPlan", []);
  var PHYS381TraditionalPlanflag = false;
  var PHYS381TraditionalPlanrflag = false;
 var PHYS381TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS381TraditionalPlan", []);
  var ECE220TraditionalPlanflag = false;
  var ECE220TraditionalPlanrflag = false;
 var ECE220TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE220TraditionalPlan", []);
  var ECE303TraditionalPlanflag = false;
  var ECE303TraditionalPlanrflag = false;
 var ECE303TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE303TraditionalPlan", []);
  var ECE341TraditionalPlanflag = false;
  var ECE341TraditionalPlanrflag = false;
 var ECE341TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE341TraditionalPlan", []);
  var PHYS311TraditionalPlanflag = false;
  var PHYS311TraditionalPlanrflag = false;
 var PHYS311TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS311TraditionalPlan", []);
  var PHYS372TraditionalPlanflag = false;
  var PHYS372TraditionalPlanrflag = false;
 var PHYS372TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS372TraditionalPlan", []);
  var ProgramTechnicalElectiveTraditionalPlan0flag = false;
  var ProgramTechnicalElectiveTraditionalPlan0rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan0", []);
  var ECE494TraditionalPlanflag = false;
  var ECE494TraditionalPlanrflag = false;
 var ECE494TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE494TraditionalPlan", []);
  var ENGG404TraditionalPlanflag = false;
  var ENGG404TraditionalPlanrflag = false;
 var ENGG404TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG404TraditionalPlan", []);
  var PHYS415TraditionalPlanflag = false;
  var PHYS415TraditionalPlanrflag = false;
 var PHYS415TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS415TraditionalPlan", []);
  var PHYS481TraditionalPlanflag = false;
  var PHYS481TraditionalPlanrflag = false;
 var PHYS481TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS481TraditionalPlan", []);
  var ProgramTechnicalElectiveTraditionalPlan1flag = false;
  var ProgramTechnicalElectiveTraditionalPlan1rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan1Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan1", []);
  var ProgramTechnicalElectiveTraditionalPlan2flag = false;
  var ProgramTechnicalElectiveTraditionalPlan2rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan2Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan2", []);
  var ECE360TraditionalPlanflag = false;
  var ECE360TraditionalPlanrflag = false;
 var ECE360TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE360TraditionalPlan", []);
  var ECE495TraditionalPlanflag = false;
  var ECE495TraditionalPlanrflag = false;
 var ECE495TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE495TraditionalPlan", []);
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
  var ITSElectiveTraditionalPlan0flag = false;
  var ITSElectiveTraditionalPlan0rflag = false;
 var ITSElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ITSElectiveTraditionalPlan0", []);
  var ProgramTechnicalElectiveTraditionalPlan3flag = false;
  var ProgramTechnicalElectiveTraditionalPlan3rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan3Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan3", []);
  var ProgramTechnicalElectiveTraditionalPlan4flag = false;
  var ProgramTechnicalElectiveTraditionalPlan4rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan4Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan4", []);
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
     that.highlightElement(ENGG130TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130TraditionalPlan", "NaturalSciences");
      ENGG130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine0());
      that.removeLine(getLine5());
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
      that.addLine(getLine16());
      that.addLine(getLine26());
      that.addLine(getLine30());
     that.highlightElement(PHYS130TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS130TraditionalPlan", "NaturalSciences");
      PHYS130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine1());
      that.removeLine(getLine16());
      that.removeLine(getLine26());
      that.removeLine(getLine30());
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
     that.highlightElement(CHEM105TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105TraditionalPlan", "NaturalSciences");
      CHEM105TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine2());
      that.removeLine(getLine11());
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
      that.addLine(getLine39());
     that.highlightElement(ENCMP100TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100TraditionalPlan", "NaturalSciences");
      ENCMP100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine39());
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
      that.addLine(getLine15());
      that.addLine(getLine25());
      that.addLine(getLine29());
     that.highlightElement(ENPH131TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131TraditionalPlan", "NaturalSciences");
      ENPH131TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine6());
      that.removeLine(getLine15());
      that.removeLine(getLine25());
      that.removeLine(getLine29());
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
      that.addLine(getLine13());
      that.addLine(getLine20());
     that.highlightElement(MATH101TraditionalPlanelement, "Math");
     that.addToClicked("MATH101TraditionalPlan", "Math");
      MATH101TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine6());
      that.removeLine(getLine7());
      that.removeLine(getLine9());
      that.removeLine(getLine13());
      that.removeLine(getLine20());
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
      that.addLine(getLine14());
      that.addLine(getLine27());
      that.addLine(getLine48());
     that.highlightElement(MATH102TraditionalPlanelement, "Math");
     that.addToClicked("MATH102TraditionalPlan", "Math");
      MATH102TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine10());
      that.removeLine(getLine14());
      that.removeLine(getLine27());
      that.removeLine(getLine48());
     that.unHighlightElement(MATH102TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH102TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH102TraditionalPlanelement, category);
}
      MATH102TraditionalPlanflag=false
  }
};
$scope.ECE202TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE202TraditionalPlanTime <= 200) { 
        ECE202TraditionalPlanTime = currentTime;
        return;
    }
ECE202TraditionalPlanTime = currentTime;
  var ECE202TraditionalPlanelement = document.getElementById("ECE202TraditionalPlan");
 if (!ECE202TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE202TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE202TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE202TraditionalPlan")[i];
        if (ECE202TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE202TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine9());
      that.addLine(getLine10());
      that.addLine(getLine21());
      that.addLine(getLine23());
     that.highlightElement(ECE202TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE202TraditionalPlan", "EngineeringSciences");
      ECE202TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine9());
      that.removeLine(getLine10());
      that.removeLine(getLine21());
      that.removeLine(getLine23());
     that.unHighlightElement(ECE202TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE202TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE202TraditionalPlanelement, category);
}
      ECE202TraditionalPlanflag=false
  }
};
$scope.MATE201TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE201TraditionalPlanTime <= 200) { 
        MATE201TraditionalPlanTime = currentTime;
        return;
    }
MATE201TraditionalPlanTime = currentTime;
  var MATE201TraditionalPlanelement = document.getElementById("MATE201TraditionalPlan");
 if (!MATE201TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATE201TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATE201TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATE201TraditionalPlan")[i];
        if (MATE201TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE201TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine11());
     that.highlightElement(MATE201TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("MATE201TraditionalPlan", "NaturalSciences");
      MATE201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
     that.unHighlightElement(MATE201TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("MATE201TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(MATE201TraditionalPlanelement, category);
}
      MATE201TraditionalPlanflag=false
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
      that.addLine(getLine12());
      that.addLine(getLine24());
      that.addLine(getLine38());
      that.addLine(getLine49());
     that.highlightElement(MATH201TraditionalPlanelement, "Math");
     that.addToClicked("MATH201TraditionalPlan", "Math");
      MATH201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine12());
      that.removeLine(getLine24());
      that.removeLine(getLine38());
      that.removeLine(getLine49());
     that.unHighlightElement(MATH201TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH201TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH201TraditionalPlanelement, category);
}
      MATH201TraditionalPlanflag=false
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
      that.addLine(getLine14());
      that.addLine(getLine17());
      that.addLine(getLine19());
      that.addLine(getLine28());
      that.addLine(getLine31());
      that.addLine(getLine33());
      that.addLine(getLine45());
     that.highlightElement(MATH209TraditionalPlanelement, "Math");
     that.addToClicked("MATH209TraditionalPlan", "Math");
      MATH209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine12());
      that.removeLine(getLine13());
      that.removeLine(getLine14());
      that.removeLine(getLine17());
      that.removeLine(getLine19());
      that.removeLine(getLine28());
      that.removeLine(getLine31());
      that.removeLine(getLine33());
      that.removeLine(getLine45());
     that.unHighlightElement(MATH209TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH209TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209TraditionalPlanelement, category);
}
      MATH209TraditionalPlanflag=false
  }
};
$scope.PHYS281TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS281TraditionalPlanTime <= 200) { 
        PHYS281TraditionalPlanTime = currentTime;
        return;
    }
PHYS281TraditionalPlanTime = currentTime;
  var PHYS281TraditionalPlanelement = document.getElementById("PHYS281TraditionalPlan");
 if (!PHYS281TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("PHYS281TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS281TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS281TraditionalPlan")[i];
        if (PHYS281TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS281TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine15());
      that.addLine(getLine16());
      that.addLine(getLine17());
      that.addLine(getLine18());
      that.addLine(getLine32());
      that.addLine(getLine37());
      that.addLine(getLine47());
     that.highlightElement(PHYS281TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS281TraditionalPlan", "NaturalSciences");
      PHYS281TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine15());
      that.removeLine(getLine16());
      that.removeLine(getLine17());
      that.removeLine(getLine18());
      that.removeLine(getLine32());
      that.removeLine(getLine37());
      that.removeLine(getLine47());
     that.unHighlightElement(PHYS281TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS281TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS281TraditionalPlanelement, category);
}
      PHYS281TraditionalPlanflag=false
  }
};
$scope.PHYS292TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS292TraditionalPlanTime <= 200) { 
        PHYS292TraditionalPlanTime = currentTime;
        return;
    }
PHYS292TraditionalPlanTime = currentTime;
  var PHYS292TraditionalPlanelement = document.getElementById("PHYS292TraditionalPlan");
 if (!PHYS292TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("PHYS292TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS292TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS292TraditionalPlan")[i];
        if (PHYS292TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS292TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine18());
      that.addLine(getLine19());
      that.addLine(getLine32());
      that.addLine(getLine33());
     that.highlightElement(PHYS292TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PHYS292TraditionalPlan", "EngineeringSciences");
      PHYS292TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine18());
      that.removeLine(getLine19());
      that.removeLine(getLine32());
      that.removeLine(getLine33());
     that.unHighlightElement(PHYS292TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PHYS292TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PHYS292TraditionalPlanelement, category);
}
      PHYS292TraditionalPlanflag=false
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
      that.addLine(getLine20());
      that.addLine(getLine43());
     that.highlightElement(CHE243TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CHE243TraditionalPlan", "EngineeringSciences");
      CHE243TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine20());
      that.removeLine(getLine43());
     that.unHighlightElement(CHE243TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243TraditionalPlanelement, category);
}
      CHE243TraditionalPlanflag=false
  }
};
$scope.ECE203TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE203TraditionalPlanTime <= 200) { 
        ECE203TraditionalPlanTime = currentTime;
        return;
    }
ECE203TraditionalPlanTime = currentTime;
  var ECE203TraditionalPlanelement = document.getElementById("ECE203TraditionalPlan");
 if (!ECE203TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE203TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE203TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE203TraditionalPlan")[i];
        if (ECE203TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE203TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine21());
      that.addLine(getLine22());
      that.addLine(getLine34());
      that.addLine(getLine55());
     that.highlightElement(ECE203TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE203TraditionalPlan", "EngineeringSciences");
      ECE203TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine21());
      that.removeLine(getLine22());
      that.removeLine(getLine34());
      that.removeLine(getLine55());
     that.unHighlightElement(ECE203TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE203TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE203TraditionalPlanelement, category);
}
      ECE203TraditionalPlanflag=false
  }
};
$scope.ECE240TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE240TraditionalPlanTime <= 200) { 
        ECE240TraditionalPlanTime = currentTime;
        return;
    }
ECE240TraditionalPlanTime = currentTime;
  var ECE240TraditionalPlanelement = document.getElementById("ECE240TraditionalPlan");
 if (!ECE240TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE240TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE240TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE240TraditionalPlan")[i];
        if (ECE240TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE240TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine22());
      that.addLine(getLine23());
      that.addLine(getLine24());
      that.addLine(getLine35());
      that.addLine(getLine41());
      that.addLine(getLine56());
     that.highlightElement(ECE240TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE240TraditionalPlan", "EngineeringSciences");
      ECE240TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine22());
      that.removeLine(getLine23());
      that.removeLine(getLine24());
      that.removeLine(getLine35());
      that.removeLine(getLine41());
      that.removeLine(getLine56());
     that.unHighlightElement(ECE240TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE240TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE240TraditionalPlanelement, category);
}
      ECE240TraditionalPlanflag=false
  }
};
$scope.PHYS244TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS244TraditionalPlanTime <= 200) { 
        PHYS244TraditionalPlanTime = currentTime;
        return;
    }
PHYS244TraditionalPlanTime = currentTime;
  var PHYS244TraditionalPlanelement = document.getElementById("PHYS244TraditionalPlan");
 if (!PHYS244TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("PHYS244TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS244TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS244TraditionalPlan")[i];
        if (PHYS244TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS244TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine25());
      that.addLine(getLine26());
      that.addLine(getLine27());
      that.addLine(getLine28());
     that.highlightElement(PHYS244TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS244TraditionalPlan", "NaturalSciences");
      PHYS244TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine25());
      that.removeLine(getLine26());
      that.removeLine(getLine27());
      that.removeLine(getLine28());
     that.unHighlightElement(PHYS244TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS244TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS244TraditionalPlanelement, category);
}
      PHYS244TraditionalPlanflag=false
  }
};
$scope.PHYS271TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS271TraditionalPlanTime <= 200) { 
        PHYS271TraditionalPlanTime = currentTime;
        return;
    }
PHYS271TraditionalPlanTime = currentTime;
  var PHYS271TraditionalPlanelement = document.getElementById("PHYS271TraditionalPlan");
 if (!PHYS271TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("PHYS271TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS271TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS271TraditionalPlan")[i];
        if (PHYS271TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS271TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine29());
      that.addLine(getLine30());
      that.addLine(getLine31());
      that.addLine(getLine44());
      that.addLine(getLine46());
     that.highlightElement(PHYS271TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS271TraditionalPlan", "NaturalSciences");
      PHYS271TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine29());
      that.removeLine(getLine30());
      that.removeLine(getLine31());
      that.removeLine(getLine44());
      that.removeLine(getLine46());
     that.unHighlightElement(PHYS271TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS271TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS271TraditionalPlanelement, category);
}
      PHYS271TraditionalPlanflag=false
  }
};
$scope.PHYS292TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS292TraditionalPlanTime <= 200) { 
        PHYS292TraditionalPlanTime = currentTime;
        return;
    }
PHYS292TraditionalPlanTime = currentTime;
  var PHYS292TraditionalPlanelement = document.getElementById("PHYS292TraditionalPlan");
 if (!PHYS292TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("PHYS292TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS292TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS292TraditionalPlan")[i];
        if (PHYS292TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS292TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine18());
      that.addLine(getLine19());
      that.addLine(getLine32());
      that.addLine(getLine33());
     that.highlightElement(PHYS292TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PHYS292TraditionalPlan", "EngineeringSciences");
      PHYS292TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine18());
      that.removeLine(getLine19());
      that.removeLine(getLine32());
      that.removeLine(getLine33());
     that.unHighlightElement(PHYS292TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PHYS292TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PHYS292TraditionalPlanelement, category);
}
      PHYS292TraditionalPlanflag=false
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
$scope.ECE210TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE210TraditionalPlanTime <= 200) { 
        ECE210TraditionalPlanTime = currentTime;
        return;
    }
ECE210TraditionalPlanTime = currentTime;
  var ECE210TraditionalPlanelement = document.getElementById("ECE210TraditionalPlan");
 if (!ECE210TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE210TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE210TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE210TraditionalPlan")[i];
        if (ECE210TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE210TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE210TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE210TraditionalPlan", "EngineeringSciences");
      ECE210TraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ECE210TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE210TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE210TraditionalPlanelement, category);
}
      ECE210TraditionalPlanflag=false
  }
};
$scope.ECE302TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE302TraditionalPlanTime <= 200) { 
        ECE302TraditionalPlanTime = currentTime;
        return;
    }
ECE302TraditionalPlanTime = currentTime;
  var ECE302TraditionalPlanelement = document.getElementById("ECE302TraditionalPlan");
 if (!ECE302TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE302TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE302TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE302TraditionalPlan")[i];
        if (ECE302TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE302TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine34());
      that.addLine(getLine40());
     that.highlightElement(ECE302TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE302TraditionalPlan", "EngineeringSciences");
      ECE302TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine34());
      that.removeLine(getLine40());
     that.unHighlightElement(ECE302TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE302TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE302TraditionalPlanelement, category);
}
      ECE302TraditionalPlanflag=false
  }
};
$scope.ECE340TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE340TraditionalPlanTime <= 200) { 
        ECE340TraditionalPlanTime = currentTime;
        return;
    }
ECE340TraditionalPlanTime = currentTime;
  var ECE340TraditionalPlanelement = document.getElementById("ECE340TraditionalPlan");
 if (!ECE340TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE340TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE340TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE340TraditionalPlan")[i];
        if (ECE340TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE340TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine35());
     that.highlightElement(ECE340TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE340TraditionalPlan", "EngineeringSciences");
      ECE340TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine35());
     that.unHighlightElement(ECE340TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE340TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE340TraditionalPlanelement, category);
}
      ECE340TraditionalPlanflag=false
  }
};
$scope.ECE471TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE471TraditionalPlanTime <= 200) { 
        ECE471TraditionalPlanTime = currentTime;
        return;
    }
ECE471TraditionalPlanTime = currentTime;
  var ECE471TraditionalPlanelement = document.getElementById("ECE471TraditionalPlan");
 if (!ECE471TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE471TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE471TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE471TraditionalPlan")[i];
        if (ECE471TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE471TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine36());
     that.highlightElement(ECE471TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE471TraditionalPlan", "EngineeringSciences");
      ECE471TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine36());
     that.unHighlightElement(ECE471TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE471TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE471TraditionalPlanelement, category);
}
      ECE471TraditionalPlanflag=false
  }
};
$scope.MATH311TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH311TraditionalPlanTime <= 200) { 
        MATH311TraditionalPlanTime = currentTime;
        return;
    }
MATH311TraditionalPlanTime = currentTime;
  var MATH311TraditionalPlanelement = document.getElementById("MATH311TraditionalPlan");
 if (!MATH311TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATH311TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATH311TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATH311TraditionalPlan")[i];
        if (MATH311TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH311TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine42());
     that.highlightElement(MATH311TraditionalPlanelement, "Math");
     that.addToClicked("MATH311TraditionalPlan", "Math");
      MATH311TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine42());
     that.unHighlightElement(MATH311TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH311TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH311TraditionalPlanelement, category);
}
      MATH311TraditionalPlanflag=false
  }
};
$scope.PHYS381TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS381TraditionalPlanTime <= 200) { 
        PHYS381TraditionalPlanTime = currentTime;
        return;
    }
PHYS381TraditionalPlanTime = currentTime;
  var PHYS381TraditionalPlanelement = document.getElementById("PHYS381TraditionalPlan");
 if (!PHYS381TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("PHYS381TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS381TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS381TraditionalPlan")[i];
        if (PHYS381TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS381TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine36());
      that.addLine(getLine37());
      that.addLine(getLine38());
      that.addLine(getLine53());
     that.highlightElement(PHYS381TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS381TraditionalPlan", "NaturalSciences");
      PHYS381TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine36());
      that.removeLine(getLine37());
      that.removeLine(getLine38());
      that.removeLine(getLine53());
     that.unHighlightElement(PHYS381TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS381TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS381TraditionalPlanelement, category);
}
      PHYS381TraditionalPlanflag=false
  }
};
$scope.ECE220TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE220TraditionalPlanTime <= 200) { 
        ECE220TraditionalPlanTime = currentTime;
        return;
    }
ECE220TraditionalPlanTime = currentTime;
  var ECE220TraditionalPlanelement = document.getElementById("ECE220TraditionalPlan");
 if (!ECE220TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE220TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE220TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE220TraditionalPlan")[i];
        if (ECE220TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE220TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine39());
     that.highlightElement(ECE220TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE220TraditionalPlan", "EngineeringSciences");
      ECE220TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine39());
     that.unHighlightElement(ECE220TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE220TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE220TraditionalPlanelement, category);
}
      ECE220TraditionalPlanflag=false
  }
};
$scope.ECE303TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE303TraditionalPlanTime <= 200) { 
        ECE303TraditionalPlanTime = currentTime;
        return;
    }
ECE303TraditionalPlanTime = currentTime;
  var ECE303TraditionalPlanelement = document.getElementById("ECE303TraditionalPlan");
 if (!ECE303TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE303TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE303TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE303TraditionalPlan")[i];
        if (ECE303TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE303TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine40());
     that.highlightElement(ECE303TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE303TraditionalPlan", "EngineeringSciences");
      ECE303TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine40());
     that.unHighlightElement(ECE303TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE303TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE303TraditionalPlanelement, category);
}
      ECE303TraditionalPlanflag=false
  }
};
$scope.ECE341TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE341TraditionalPlanTime <= 200) { 
        ECE341TraditionalPlanTime = currentTime;
        return;
    }
ECE341TraditionalPlanTime = currentTime;
  var ECE341TraditionalPlanelement = document.getElementById("ECE341TraditionalPlan");
 if (!ECE341TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE341TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE341TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE341TraditionalPlan")[i];
        if (ECE341TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE341TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine41());
      that.addLine(getLine42());
      that.addLine(getLine52());
      that.addLine(getLine54());
     that.highlightElement(ECE341TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE341TraditionalPlan", "EngineeringSciences");
      ECE341TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine41());
      that.removeLine(getLine42());
      that.removeLine(getLine52());
      that.removeLine(getLine54());
     that.unHighlightElement(ECE341TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE341TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE341TraditionalPlanelement, category);
}
      ECE341TraditionalPlanflag=false
  }
};
$scope.PHYS311TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS311TraditionalPlanTime <= 200) { 
        PHYS311TraditionalPlanTime = currentTime;
        return;
    }
PHYS311TraditionalPlanTime = currentTime;
  var PHYS311TraditionalPlanelement = document.getElementById("PHYS311TraditionalPlan");
 if (!PHYS311TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("PHYS311TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS311TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS311TraditionalPlan")[i];
        if (PHYS311TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS311TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine43());
      that.addLine(getLine44());
      that.addLine(getLine45());
      that.addLine(getLine50());
     that.highlightElement(PHYS311TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS311TraditionalPlan", "NaturalSciences");
      PHYS311TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine43());
      that.removeLine(getLine44());
      that.removeLine(getLine45());
      that.removeLine(getLine50());
     that.unHighlightElement(PHYS311TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS311TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS311TraditionalPlanelement, category);
}
      PHYS311TraditionalPlanflag=false
  }
};
$scope.PHYS372TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS372TraditionalPlanTime <= 200) { 
        PHYS372TraditionalPlanTime = currentTime;
        return;
    }
PHYS372TraditionalPlanTime = currentTime;
  var PHYS372TraditionalPlanelement = document.getElementById("PHYS372TraditionalPlan");
 if (!PHYS372TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("PHYS372TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS372TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS372TraditionalPlan")[i];
        if (PHYS372TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS372TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine46());
      that.addLine(getLine47());
      that.addLine(getLine48());
      that.addLine(getLine49());
      that.addLine(getLine51());
     that.highlightElement(PHYS372TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS372TraditionalPlan", "NaturalSciences");
      PHYS372TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine46());
      that.removeLine(getLine47());
      that.removeLine(getLine48());
      that.removeLine(getLine49());
      that.removeLine(getLine51());
     that.unHighlightElement(PHYS372TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS372TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS372TraditionalPlanelement, category);
}
      PHYS372TraditionalPlanflag=false
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
$scope.ECE494TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE494TraditionalPlanTime <= 200) { 
        ECE494TraditionalPlanTime = currentTime;
        return;
    }
ECE494TraditionalPlanTime = currentTime;
  var ECE494TraditionalPlanelement = document.getElementById("ECE494TraditionalPlan");
 if (!ECE494TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE494TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE494TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE494TraditionalPlan")[i];
        if (ECE494TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE494TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine57());
     that.highlightElement(ECE494TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ECE494TraditionalPlan", "EngineeringDesign");
      ECE494TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine57());
     that.unHighlightElement(ECE494TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE494TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE494TraditionalPlanelement, category);
}
      ECE494TraditionalPlanflag=false
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
$scope.PHYS415TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS415TraditionalPlanTime <= 200) { 
        PHYS415TraditionalPlanTime = currentTime;
        return;
    }
PHYS415TraditionalPlanTime = currentTime;
  var PHYS415TraditionalPlanelement = document.getElementById("PHYS415TraditionalPlan");
 if (!PHYS415TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("PHYS415TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS415TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS415TraditionalPlan")[i];
        if (PHYS415TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS415TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine50());
      that.addLine(getLine51());
      that.addLine(getLine52());
     that.highlightElement(PHYS415TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS415TraditionalPlan", "NaturalSciences");
      PHYS415TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine50());
      that.removeLine(getLine51());
      that.removeLine(getLine52());
     that.unHighlightElement(PHYS415TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS415TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS415TraditionalPlanelement, category);
}
      PHYS415TraditionalPlanflag=false
  }
};
$scope.PHYS481TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS481TraditionalPlanTime <= 200) { 
        PHYS481TraditionalPlanTime = currentTime;
        return;
    }
PHYS481TraditionalPlanTime = currentTime;
  var PHYS481TraditionalPlanelement = document.getElementById("PHYS481TraditionalPlan");
 if (!PHYS481TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("PHYS481TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS481TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS481TraditionalPlan")[i];
        if (PHYS481TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS481TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine53());
      that.addLine(getLine54());
     that.highlightElement(PHYS481TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS481TraditionalPlan", "NaturalSciences");
      PHYS481TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine53());
      that.removeLine(getLine54());
     that.unHighlightElement(PHYS481TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS481TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS481TraditionalPlanelement, category);
}
      PHYS481TraditionalPlanflag=false
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
$scope.ECE360TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE360TraditionalPlanTime <= 200) { 
        ECE360TraditionalPlanTime = currentTime;
        return;
    }
ECE360TraditionalPlanTime = currentTime;
  var ECE360TraditionalPlanelement = document.getElementById("ECE360TraditionalPlan");
 if (!ECE360TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE360TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE360TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE360TraditionalPlan")[i];
        if (ECE360TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE360TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine55());
      that.addLine(getLine56());
     that.highlightElement(ECE360TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE360TraditionalPlan", "EngineeringSciences");
      ECE360TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine55());
      that.removeLine(getLine56());
     that.unHighlightElement(ECE360TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE360TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE360TraditionalPlanelement, category);
}
      ECE360TraditionalPlanflag=false
  }
};
$scope.ECE495TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE495TraditionalPlanTime <= 200) { 
        ECE495TraditionalPlanTime = currentTime;
        return;
    }
ECE495TraditionalPlanTime = currentTime;
  var ECE495TraditionalPlanelement = document.getElementById("ECE495TraditionalPlan");
 if (!ECE495TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE495TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE495TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE495TraditionalPlan")[i];
        if (ECE495TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE495TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine57());
     that.highlightElement(ECE495TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ECE495TraditionalPlan", "EngineeringDesign");
      ECE495TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine57());
     that.unHighlightElement(ECE495TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE495TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE495TraditionalPlanelement, category);
}
      ECE495TraditionalPlanflag=false
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
$scope.ECE202TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE202TraditionalPlandesc");
 if (!ECE202TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE202TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE202TraditionalPlanrflag=false
  }
};
$scope.MATE201TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE201TraditionalPlandesc");
 if (!MATE201TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE201TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE201TraditionalPlanrflag=false
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
$scope.PHYS281TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS281TraditionalPlandesc");
 if (!PHYS281TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS281TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS281TraditionalPlanrflag=false
  }
};
$scope.PHYS292TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS292TraditionalPlandesc");
 if (!PHYS292TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS292TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS292TraditionalPlanrflag=false
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
$scope.ECE203TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE203TraditionalPlandesc");
 if (!ECE203TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE203TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE203TraditionalPlanrflag=false
  }
};
$scope.ECE240TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE240TraditionalPlandesc");
 if (!ECE240TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE240TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE240TraditionalPlanrflag=false
  }
};
$scope.PHYS244TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS244TraditionalPlandesc");
 if (!PHYS244TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS244TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS244TraditionalPlanrflag=false
  }
};
$scope.PHYS271TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS271TraditionalPlandesc");
 if (!PHYS271TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS271TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS271TraditionalPlanrflag=false
  }
};
$scope.PHYS292TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS292TraditionalPlandesc");
 if (!PHYS292TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS292TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS292TraditionalPlanrflag=false
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
$scope.ECE210TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE210TraditionalPlandesc");
 if (!ECE210TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE210TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE210TraditionalPlanrflag=false
  }
};
$scope.ECE302TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE302TraditionalPlandesc");
 if (!ECE302TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE302TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE302TraditionalPlanrflag=false
  }
};
$scope.ECE340TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE340TraditionalPlandesc");
 if (!ECE340TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE340TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE340TraditionalPlanrflag=false
  }
};
$scope.ECE471TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE471TraditionalPlandesc");
 if (!ECE471TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE471TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE471TraditionalPlanrflag=false
  }
};
$scope.MATH311TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH311TraditionalPlandesc");
 if (!MATH311TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH311TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH311TraditionalPlanrflag=false
  }
};
$scope.PHYS381TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS381TraditionalPlandesc");
 if (!PHYS381TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS381TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS381TraditionalPlanrflag=false
  }
};
$scope.ECE220TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE220TraditionalPlandesc");
 if (!ECE220TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE220TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE220TraditionalPlanrflag=false
  }
};
$scope.ECE303TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE303TraditionalPlandesc");
 if (!ECE303TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE303TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE303TraditionalPlanrflag=false
  }
};
$scope.ECE341TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE341TraditionalPlandesc");
 if (!ECE341TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE341TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE341TraditionalPlanrflag=false
  }
};
$scope.PHYS311TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS311TraditionalPlandesc");
 if (!PHYS311TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS311TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS311TraditionalPlanrflag=false
  }
};
$scope.PHYS372TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS372TraditionalPlandesc");
 if (!PHYS372TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS372TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS372TraditionalPlanrflag=false
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
$scope.ECE494TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE494TraditionalPlandesc");
 if (!ECE494TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE494TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE494TraditionalPlanrflag=false
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
$scope.PHYS415TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS415TraditionalPlandesc");
 if (!PHYS415TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS415TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS415TraditionalPlanrflag=false
  }
};
$scope.PHYS481TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS481TraditionalPlandesc");
 if (!PHYS481TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS481TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS481TraditionalPlanrflag=false
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
$scope.ECE360TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE360TraditionalPlandesc");
 if (!ECE360TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE360TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE360TraditionalPlanrflag=false
  }
};
$scope.ECE495TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE495TraditionalPlandesc");
 if (!ECE495TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE495TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE495TraditionalPlanrflag=false
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
  var ECE202CoopPlanflag = false;
  var ECE202CoopPlanrflag = false;
 var ECE202CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE202CoopPlan", []);
  var ENGG299CoopPlanflag = false;
  var ENGG299CoopPlanrflag = false;
 var ENGG299CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG299CoopPlan", []);
  var MATE201CoopPlanflag = false;
  var MATE201CoopPlanrflag = false;
 var MATE201CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATE201CoopPlan", []);
  var MATH201CoopPlanflag = false;
  var MATH201CoopPlanrflag = false;
 var MATH201CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH201CoopPlan", []);
  var MATH209CoopPlanflag = false;
  var MATH209CoopPlanrflag = false;
 var MATH209CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH209CoopPlan", []);
  var PHYS281CoopPlanflag = false;
  var PHYS281CoopPlanrflag = false;
 var PHYS281CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PHYS281CoopPlan", []);
  var PHYS292CoopPlanflag = false;
  var PHYS292CoopPlanrflag = false;
 var PHYS292CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PHYS292CoopPlan", []);
  var CHE243CoopPlanflag = false;
  var CHE243CoopPlanrflag = false;
 var CHE243CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("CHE243CoopPlan", []);
  var ECE203CoopPlanflag = false;
  var ECE203CoopPlanrflag = false;
 var ECE203CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE203CoopPlan", []);
  var ECE220CoopPlanflag = false;
  var ECE220CoopPlanrflag = false;
 var ECE220CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE220CoopPlan", []);
  var ECE240CoopPlanflag = false;
  var ECE240CoopPlanrflag = false;
 var ECE240CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE240CoopPlan", []);
  var PHYS271CoopPlanflag = false;
  var PHYS271CoopPlanrflag = false;
 var PHYS271CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PHYS271CoopPlan", []);
  var PHYS292CoopPlanflag = false;
  var PHYS292CoopPlanrflag = false;
 var PHYS292CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PHYS292CoopPlan", []);
  var ComplementaryElectiveCoopPlan0flag = false;
  var ComplementaryElectiveCoopPlan0rflag = false;
 var ComplementaryElectiveCoopPlan0Time = new Date().getTime();
this.CoopPlanClickedMap.set("ComplementaryElectiveCoopPlan0", []);
  var WKEXP901CoopPlanflag = false;
  var WKEXP901CoopPlanrflag = false;
 var WKEXP901CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP901CoopPlan", []);
  var ECE210CoopPlanflag = false;
  var ECE210CoopPlanrflag = false;
 var ECE210CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE210CoopPlan", []);
  var ECE302CoopPlanflag = false;
  var ECE302CoopPlanrflag = false;
 var ECE302CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE302CoopPlan", []);
  var ECE340CoopPlanflag = false;
  var ECE340CoopPlanrflag = false;
 var ECE340CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE340CoopPlan", []);
  var ECE471CoopPlanflag = false;
  var ECE471CoopPlanrflag = false;
 var ECE471CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE471CoopPlan", []);
  var MATH311CoopPlanflag = false;
  var MATH311CoopPlanrflag = false;
 var MATH311CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("MATH311CoopPlan", []);
  var PHYS381CoopPlanflag = false;
  var PHYS381CoopPlanrflag = false;
 var PHYS381CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PHYS381CoopPlan", []);
  var WKEXP902CoopPlanflag = false;
  var WKEXP902CoopPlanrflag = false;
 var WKEXP902CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP902CoopPlan", []);
  var WKEXP903CoopPlanflag = false;
  var WKEXP903CoopPlanrflag = false;
 var WKEXP903CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP903CoopPlan", []);
  var WKEXP904CoopPlanflag = false;
  var WKEXP904CoopPlanrflag = false;
 var WKEXP904CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP904CoopPlan", []);
  var ECE303CoopPlanflag = false;
  var ECE303CoopPlanrflag = false;
 var ECE303CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE303CoopPlan", []);
  var ECE341CoopPlanflag = false;
  var ECE341CoopPlanrflag = false;
 var ECE341CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE341CoopPlan", []);
  var PHYS244CoopPlanflag = false;
  var PHYS244CoopPlanrflag = false;
 var PHYS244CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PHYS244CoopPlan", []);
  var PHYS311CoopPlanflag = false;
  var PHYS311CoopPlanrflag = false;
 var PHYS311CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PHYS311CoopPlan", []);
  var PHYS372CoopPlanflag = false;
  var PHYS372CoopPlanrflag = false;
 var PHYS372CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PHYS372CoopPlan", []);
  var ProgramTechnicalElectiveCoopPlan0flag = false;
  var ProgramTechnicalElectiveCoopPlan0rflag = false;
 var ProgramTechnicalElectiveCoopPlan0Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan0", []);
  var WKEXP905CoopPlanflag = false;
  var WKEXP905CoopPlanrflag = false;
 var WKEXP905CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("WKEXP905CoopPlan", []);
  var ECE494CoopPlanflag = false;
  var ECE494CoopPlanrflag = false;
 var ECE494CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE494CoopPlan", []);
  var ENGG404CoopPlanflag = false;
  var ENGG404CoopPlanrflag = false;
 var ENGG404CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ENGG404CoopPlan", []);
  var PHYS415CoopPlanflag = false;
  var PHYS415CoopPlanrflag = false;
 var PHYS415CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PHYS415CoopPlan", []);
  var PHYS481CoopPlanflag = false;
  var PHYS481CoopPlanrflag = false;
 var PHYS481CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("PHYS481CoopPlan", []);
  var ComplementaryElectiveCoopPlan1flag = false;
  var ComplementaryElectiveCoopPlan1rflag = false;
 var ComplementaryElectiveCoopPlan1Time = new Date().getTime();
this.CoopPlanClickedMap.set("ComplementaryElectiveCoopPlan1", []);
  var ProgramTechnicalElectiveCoopPlan1flag = false;
  var ProgramTechnicalElectiveCoopPlan1rflag = false;
 var ProgramTechnicalElectiveCoopPlan1Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan1", []);
  var ProgramTechnicalElectiveCoopPlan2flag = false;
  var ProgramTechnicalElectiveCoopPlan2rflag = false;
 var ProgramTechnicalElectiveCoopPlan2Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan2", []);
  var ECE360CoopPlanflag = false;
  var ECE360CoopPlanrflag = false;
 var ECE360CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE360CoopPlan", []);
  var ECE495CoopPlanflag = false;
  var ECE495CoopPlanrflag = false;
 var ECE495CoopPlanTime = new Date().getTime();
this.CoopPlanClickedMap.set("ECE495CoopPlan", []);
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
  var ITSElectiveCoopPlan0flag = false;
  var ITSElectiveCoopPlan0rflag = false;
 var ITSElectiveCoopPlan0Time = new Date().getTime();
this.CoopPlanClickedMap.set("ITSElectiveCoopPlan0", []);
  var ProgramTechnicalElectiveCoopPlan3flag = false;
  var ProgramTechnicalElectiveCoopPlan3rflag = false;
 var ProgramTechnicalElectiveCoopPlan3Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan3", []);
  var ProgramTechnicalElectiveCoopPlan4flag = false;
  var ProgramTechnicalElectiveCoopPlan4rflag = false;
 var ProgramTechnicalElectiveCoopPlan4Time = new Date().getTime();
this.CoopPlanClickedMap.set("ProgramTechnicalElectiveCoopPlan4", []);
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
      that.addLine(getLine60());
     that.highlightElement(CHEM103CoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM103CoopPlan", "NaturalSciences");
      CHEM103CoopPlanflag=true
  }
 else {
      that.removeLine(getLine60());
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
      that.addLine(getLine58());
      that.addLine(getLine63());
     that.highlightElement(ENGG130CoopPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130CoopPlan", "NaturalSciences");
      ENGG130CoopPlanflag=true
  }
 else {
      that.removeLine(getLine58());
      that.removeLine(getLine63());
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
      that.addLine(getLine61());
     that.highlightElement(ENGL199CoopPlanelement, "Other");
     that.addToClicked("ENGL199CoopPlan", "Other");
      ENGL199CoopPlanflag=true
  }
 else {
      that.removeLine(getLine61());
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
      that.addLine(getLine58());
      that.addLine(getLine59());
      that.addLine(getLine62());
      that.addLine(getLine65());
      that.addLine(getLine66());
     that.highlightElement(MATH100CoopPlanelement, "Math");
     that.addToClicked("MATH100CoopPlan", "Math");
      MATH100CoopPlanflag=true
  }
 else {
      that.removeLine(getLine58());
      that.removeLine(getLine59());
      that.removeLine(getLine62());
      that.removeLine(getLine65());
      that.removeLine(getLine66());
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
      that.addLine(getLine59());
      that.addLine(getLine74());
      that.addLine(getLine85());
      that.addLine(getLine102());
     that.highlightElement(PHYS130CoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS130CoopPlan", "NaturalSciences");
      PHYS130CoopPlanflag=true
  }
 else {
      that.removeLine(getLine59());
      that.removeLine(getLine74());
      that.removeLine(getLine85());
      that.removeLine(getLine102());
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
      that.addLine(getLine60());
      that.addLine(getLine69());
     that.highlightElement(CHEM105CoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105CoopPlan", "NaturalSciences");
      CHEM105CoopPlanflag=true
  }
 else {
      that.removeLine(getLine60());
      that.removeLine(getLine69());
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
      that.addLine(getLine81());
     that.highlightElement(ENCMP100CoopPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100CoopPlan", "NaturalSciences");
      ENCMP100CoopPlanflag=true
  }
 else {
      that.removeLine(getLine81());
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
      that.addLine(getLine61());
     that.highlightElement(ENGG160CoopPlanelement, "EngineeringDesign");
     that.addToClicked("ENGG160CoopPlan", "EngineeringDesign");
      ENGG160CoopPlanflag=true
  }
 else {
      that.removeLine(getLine61());
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
      that.addLine(getLine62());
      that.addLine(getLine63());
      that.addLine(getLine64());
      that.addLine(getLine73());
      that.addLine(getLine84());
      that.addLine(getLine101());
     that.highlightElement(ENPH131CoopPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131CoopPlan", "NaturalSciences");
      ENPH131CoopPlanflag=true
  }
 else {
      that.removeLine(getLine62());
      that.removeLine(getLine63());
      that.removeLine(getLine64());
      that.removeLine(getLine73());
      that.removeLine(getLine84());
      that.removeLine(getLine101());
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
      that.addLine(getLine64());
      that.addLine(getLine65());
      that.addLine(getLine67());
      that.addLine(getLine71());
      that.addLine(getLine78());
     that.highlightElement(MATH101CoopPlanelement, "Math");
     that.addToClicked("MATH101CoopPlan", "Math");
      MATH101CoopPlanflag=true
  }
 else {
      that.removeLine(getLine64());
      that.removeLine(getLine65());
      that.removeLine(getLine67());
      that.removeLine(getLine71());
      that.removeLine(getLine78());
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
      that.addLine(getLine66());
      that.addLine(getLine68());
      that.addLine(getLine72());
      that.addLine(getLine103());
      that.addLine(getLine110());
     that.highlightElement(MATH102CoopPlanelement, "Math");
     that.addToClicked("MATH102CoopPlan", "Math");
      MATH102CoopPlanflag=true
  }
 else {
      that.removeLine(getLine66());
      that.removeLine(getLine68());
      that.removeLine(getLine72());
      that.removeLine(getLine103());
      that.removeLine(getLine110());
     that.unHighlightElement(MATH102CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH102CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH102CoopPlanelement, category);
}
      MATH102CoopPlanflag=false
  }
};
$scope.ECE202CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE202CoopPlanTime <= 200) { 
        ECE202CoopPlanTime = currentTime;
        return;
    }
ECE202CoopPlanTime = currentTime;
  var ECE202CoopPlanelement = document.getElementById("ECE202CoopPlan");
 if (!ECE202CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE202CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE202CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE202CoopPlan")[i];
        if (ECE202CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE202CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine67());
      that.addLine(getLine68());
      that.addLine(getLine79());
      that.addLine(getLine82());
     that.highlightElement(ECE202CoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE202CoopPlan", "EngineeringSciences");
      ECE202CoopPlanflag=true
  }
 else {
      that.removeLine(getLine67());
      that.removeLine(getLine68());
      that.removeLine(getLine79());
      that.removeLine(getLine82());
     that.unHighlightElement(ECE202CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE202CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE202CoopPlanelement, category);
}
      ECE202CoopPlanflag=false
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
      that.addLine(getLine89());
     that.highlightElement(ENGG299CoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG299CoopPlan", "EngineeringProfession");
      ENGG299CoopPlanflag=true
  }
 else {
      that.removeLine(getLine89());
     that.unHighlightElement(ENGG299CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299CoopPlanelement, category);
}
      ENGG299CoopPlanflag=false
  }
};
$scope.MATE201CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE201CoopPlanTime <= 200) { 
        MATE201CoopPlanTime = currentTime;
        return;
    }
MATE201CoopPlanTime = currentTime;
  var MATE201CoopPlanelement = document.getElementById("MATE201CoopPlan");
 if (!MATE201CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATE201CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATE201CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATE201CoopPlan")[i];
        if (MATE201CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE201CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine69());
     that.highlightElement(MATE201CoopPlanelement, "NaturalSciences");
     that.addToClicked("MATE201CoopPlan", "NaturalSciences");
      MATE201CoopPlanflag=true
  }
 else {
      that.removeLine(getLine69());
     that.unHighlightElement(MATE201CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("MATE201CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(MATE201CoopPlanelement, category);
}
      MATE201CoopPlanflag=false
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
      that.addLine(getLine70());
      that.addLine(getLine83());
      that.addLine(getLine94());
      that.addLine(getLine111());
     that.highlightElement(MATH201CoopPlanelement, "Math");
     that.addToClicked("MATH201CoopPlan", "Math");
      MATH201CoopPlanflag=true
  }
 else {
      that.removeLine(getLine70());
      that.removeLine(getLine83());
      that.removeLine(getLine94());
      that.removeLine(getLine111());
     that.unHighlightElement(MATH201CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH201CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH201CoopPlanelement, category);
}
      MATH201CoopPlanflag=false
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
      that.addLine(getLine70());
      that.addLine(getLine71());
      that.addLine(getLine72());
      that.addLine(getLine75());
      that.addLine(getLine77());
      that.addLine(getLine86());
      that.addLine(getLine88());
      that.addLine(getLine104());
      that.addLine(getLine107());
     that.highlightElement(MATH209CoopPlanelement, "Math");
     that.addToClicked("MATH209CoopPlan", "Math");
      MATH209CoopPlanflag=true
  }
 else {
      that.removeLine(getLine70());
      that.removeLine(getLine71());
      that.removeLine(getLine72());
      that.removeLine(getLine75());
      that.removeLine(getLine77());
      that.removeLine(getLine86());
      that.removeLine(getLine88());
      that.removeLine(getLine104());
      that.removeLine(getLine107());
     that.unHighlightElement(MATH209CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH209CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209CoopPlanelement, category);
}
      MATH209CoopPlanflag=false
  }
};
$scope.PHYS281CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS281CoopPlanTime <= 200) { 
        PHYS281CoopPlanTime = currentTime;
        return;
    }
PHYS281CoopPlanTime = currentTime;
  var PHYS281CoopPlanelement = document.getElementById("PHYS281CoopPlan");
 if (!PHYS281CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("PHYS281CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PHYS281CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PHYS281CoopPlan")[i];
        if (PHYS281CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS281CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine73());
      that.addLine(getLine74());
      that.addLine(getLine75());
      that.addLine(getLine76());
      that.addLine(getLine87());
      that.addLine(getLine93());
      that.addLine(getLine109());
     that.highlightElement(PHYS281CoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS281CoopPlan", "NaturalSciences");
      PHYS281CoopPlanflag=true
  }
 else {
      that.removeLine(getLine73());
      that.removeLine(getLine74());
      that.removeLine(getLine75());
      that.removeLine(getLine76());
      that.removeLine(getLine87());
      that.removeLine(getLine93());
      that.removeLine(getLine109());
     that.unHighlightElement(PHYS281CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS281CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS281CoopPlanelement, category);
}
      PHYS281CoopPlanflag=false
  }
};
$scope.PHYS292CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS292CoopPlanTime <= 200) { 
        PHYS292CoopPlanTime = currentTime;
        return;
    }
PHYS292CoopPlanTime = currentTime;
  var PHYS292CoopPlanelement = document.getElementById("PHYS292CoopPlan");
 if (!PHYS292CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("PHYS292CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PHYS292CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PHYS292CoopPlan")[i];
        if (PHYS292CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS292CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine76());
      that.addLine(getLine77());
      that.addLine(getLine87());
      that.addLine(getLine88());
     that.highlightElement(PHYS292CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PHYS292CoopPlan", "EngineeringSciences");
      PHYS292CoopPlanflag=true
  }
 else {
      that.removeLine(getLine76());
      that.removeLine(getLine77());
      that.removeLine(getLine87());
      that.removeLine(getLine88());
     that.unHighlightElement(PHYS292CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PHYS292CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PHYS292CoopPlanelement, category);
}
      PHYS292CoopPlanflag=false
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
      that.addLine(getLine78());
      that.addLine(getLine105());
     that.highlightElement(CHE243CoopPlanelement, "EngineeringSciences");
     that.addToClicked("CHE243CoopPlan", "EngineeringSciences");
      CHE243CoopPlanflag=true
  }
 else {
      that.removeLine(getLine78());
      that.removeLine(getLine105());
     that.unHighlightElement(CHE243CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243CoopPlanelement, category);
}
      CHE243CoopPlanflag=false
  }
};
$scope.ECE203CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE203CoopPlanTime <= 200) { 
        ECE203CoopPlanTime = currentTime;
        return;
    }
ECE203CoopPlanTime = currentTime;
  var ECE203CoopPlanelement = document.getElementById("ECE203CoopPlan");
 if (!ECE203CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE203CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE203CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE203CoopPlan")[i];
        if (ECE203CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE203CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine79());
      that.addLine(getLine80());
      that.addLine(getLine90());
      that.addLine(getLine118());
     that.highlightElement(ECE203CoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE203CoopPlan", "EngineeringSciences");
      ECE203CoopPlanflag=true
  }
 else {
      that.removeLine(getLine79());
      that.removeLine(getLine80());
      that.removeLine(getLine90());
      that.removeLine(getLine118());
     that.unHighlightElement(ECE203CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE203CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE203CoopPlanelement, category);
}
      ECE203CoopPlanflag=false
  }
};
$scope.ECE220CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE220CoopPlanTime <= 200) { 
        ECE220CoopPlanTime = currentTime;
        return;
    }
ECE220CoopPlanTime = currentTime;
  var ECE220CoopPlanelement = document.getElementById("ECE220CoopPlan");
 if (!ECE220CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE220CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE220CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE220CoopPlan")[i];
        if (ECE220CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE220CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine81());
     that.highlightElement(ECE220CoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE220CoopPlan", "EngineeringSciences");
      ECE220CoopPlanflag=true
  }
 else {
      that.removeLine(getLine81());
     that.unHighlightElement(ECE220CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE220CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE220CoopPlanelement, category);
}
      ECE220CoopPlanflag=false
  }
};
$scope.ECE240CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE240CoopPlanTime <= 200) { 
        ECE240CoopPlanTime = currentTime;
        return;
    }
ECE240CoopPlanTime = currentTime;
  var ECE240CoopPlanelement = document.getElementById("ECE240CoopPlan");
 if (!ECE240CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE240CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE240CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE240CoopPlan")[i];
        if (ECE240CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE240CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine80());
      that.addLine(getLine82());
      that.addLine(getLine83());
      that.addLine(getLine91());
      that.addLine(getLine99());
      that.addLine(getLine119());
     that.highlightElement(ECE240CoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE240CoopPlan", "EngineeringSciences");
      ECE240CoopPlanflag=true
  }
 else {
      that.removeLine(getLine80());
      that.removeLine(getLine82());
      that.removeLine(getLine83());
      that.removeLine(getLine91());
      that.removeLine(getLine99());
      that.removeLine(getLine119());
     that.unHighlightElement(ECE240CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE240CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE240CoopPlanelement, category);
}
      ECE240CoopPlanflag=false
  }
};
$scope.PHYS271CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS271CoopPlanTime <= 200) { 
        PHYS271CoopPlanTime = currentTime;
        return;
    }
PHYS271CoopPlanTime = currentTime;
  var PHYS271CoopPlanelement = document.getElementById("PHYS271CoopPlan");
 if (!PHYS271CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("PHYS271CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PHYS271CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PHYS271CoopPlan")[i];
        if (PHYS271CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS271CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine84());
      that.addLine(getLine85());
      that.addLine(getLine86());
      that.addLine(getLine106());
      that.addLine(getLine108());
     that.highlightElement(PHYS271CoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS271CoopPlan", "NaturalSciences");
      PHYS271CoopPlanflag=true
  }
 else {
      that.removeLine(getLine84());
      that.removeLine(getLine85());
      that.removeLine(getLine86());
      that.removeLine(getLine106());
      that.removeLine(getLine108());
     that.unHighlightElement(PHYS271CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS271CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS271CoopPlanelement, category);
}
      PHYS271CoopPlanflag=false
  }
};
$scope.PHYS292CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS292CoopPlanTime <= 200) { 
        PHYS292CoopPlanTime = currentTime;
        return;
    }
PHYS292CoopPlanTime = currentTime;
  var PHYS292CoopPlanelement = document.getElementById("PHYS292CoopPlan");
 if (!PHYS292CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("PHYS292CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PHYS292CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PHYS292CoopPlan")[i];
        if (PHYS292CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS292CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine76());
      that.addLine(getLine77());
      that.addLine(getLine87());
      that.addLine(getLine88());
     that.highlightElement(PHYS292CoopPlanelement, "EngineeringSciences");
     that.addToClicked("PHYS292CoopPlan", "EngineeringSciences");
      PHYS292CoopPlanflag=true
  }
 else {
      that.removeLine(getLine76());
      that.removeLine(getLine77());
      that.removeLine(getLine87());
      that.removeLine(getLine88());
     that.unHighlightElement(PHYS292CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PHYS292CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PHYS292CoopPlanelement, category);
}
      PHYS292CoopPlanflag=false
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
      that.addLine(getLine89());
      that.addLine(getLine95());
     that.highlightElement(WKEXP901CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP901CoopPlan", "EngineeringProfession");
      WKEXP901CoopPlanflag=true
  }
 else {
      that.removeLine(getLine89());
      that.removeLine(getLine95());
     that.unHighlightElement(WKEXP901CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP901CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP901CoopPlanelement, category);
}
      WKEXP901CoopPlanflag=false
  }
};
$scope.ECE210CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE210CoopPlanTime <= 200) { 
        ECE210CoopPlanTime = currentTime;
        return;
    }
ECE210CoopPlanTime = currentTime;
  var ECE210CoopPlanelement = document.getElementById("ECE210CoopPlan");
 if (!ECE210CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE210CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE210CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE210CoopPlan")[i];
        if (ECE210CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE210CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE210CoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE210CoopPlan", "EngineeringSciences");
      ECE210CoopPlanflag=true
  }
 else {
     that.unHighlightElement(ECE210CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE210CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE210CoopPlanelement, category);
}
      ECE210CoopPlanflag=false
  }
};
$scope.ECE302CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE302CoopPlanTime <= 200) { 
        ECE302CoopPlanTime = currentTime;
        return;
    }
ECE302CoopPlanTime = currentTime;
  var ECE302CoopPlanelement = document.getElementById("ECE302CoopPlan");
 if (!ECE302CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE302CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE302CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE302CoopPlan")[i];
        if (ECE302CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE302CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine90());
      that.addLine(getLine98());
     that.highlightElement(ECE302CoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE302CoopPlan", "EngineeringSciences");
      ECE302CoopPlanflag=true
  }
 else {
      that.removeLine(getLine90());
      that.removeLine(getLine98());
     that.unHighlightElement(ECE302CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE302CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE302CoopPlanelement, category);
}
      ECE302CoopPlanflag=false
  }
};
$scope.ECE340CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE340CoopPlanTime <= 200) { 
        ECE340CoopPlanTime = currentTime;
        return;
    }
ECE340CoopPlanTime = currentTime;
  var ECE340CoopPlanelement = document.getElementById("ECE340CoopPlan");
 if (!ECE340CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE340CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE340CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE340CoopPlan")[i];
        if (ECE340CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE340CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine91());
     that.highlightElement(ECE340CoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE340CoopPlan", "EngineeringSciences");
      ECE340CoopPlanflag=true
  }
 else {
      that.removeLine(getLine91());
     that.unHighlightElement(ECE340CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE340CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE340CoopPlanelement, category);
}
      ECE340CoopPlanflag=false
  }
};
$scope.ECE471CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE471CoopPlanTime <= 200) { 
        ECE471CoopPlanTime = currentTime;
        return;
    }
ECE471CoopPlanTime = currentTime;
  var ECE471CoopPlanelement = document.getElementById("ECE471CoopPlan");
 if (!ECE471CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE471CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE471CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE471CoopPlan")[i];
        if (ECE471CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE471CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine92());
     that.highlightElement(ECE471CoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE471CoopPlan", "EngineeringSciences");
      ECE471CoopPlanflag=true
  }
 else {
      that.removeLine(getLine92());
     that.unHighlightElement(ECE471CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE471CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE471CoopPlanelement, category);
}
      ECE471CoopPlanflag=false
  }
};
$scope.MATH311CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH311CoopPlanTime <= 200) { 
        MATH311CoopPlanTime = currentTime;
        return;
    }
MATH311CoopPlanTime = currentTime;
  var MATH311CoopPlanelement = document.getElementById("MATH311CoopPlan");
 if (!MATH311CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("MATH311CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("MATH311CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("MATH311CoopPlan")[i];
        if (MATH311CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH311CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine100());
     that.highlightElement(MATH311CoopPlanelement, "Math");
     that.addToClicked("MATH311CoopPlan", "Math");
      MATH311CoopPlanflag=true
  }
 else {
      that.removeLine(getLine100());
     that.unHighlightElement(MATH311CoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH311CoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH311CoopPlanelement, category);
}
      MATH311CoopPlanflag=false
  }
};
$scope.PHYS381CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS381CoopPlanTime <= 200) { 
        PHYS381CoopPlanTime = currentTime;
        return;
    }
PHYS381CoopPlanTime = currentTime;
  var PHYS381CoopPlanelement = document.getElementById("PHYS381CoopPlan");
 if (!PHYS381CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("PHYS381CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PHYS381CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PHYS381CoopPlan")[i];
        if (PHYS381CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS381CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine92());
      that.addLine(getLine93());
      that.addLine(getLine94());
      that.addLine(getLine116());
     that.highlightElement(PHYS381CoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS381CoopPlan", "NaturalSciences");
      PHYS381CoopPlanflag=true
  }
 else {
      that.removeLine(getLine92());
      that.removeLine(getLine93());
      that.removeLine(getLine94());
      that.removeLine(getLine116());
     that.unHighlightElement(PHYS381CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS381CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS381CoopPlanelement, category);
}
      PHYS381CoopPlanflag=false
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
      that.addLine(getLine95());
      that.addLine(getLine96());
     that.highlightElement(WKEXP902CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP902CoopPlan", "EngineeringProfession");
      WKEXP902CoopPlanflag=true
  }
 else {
      that.removeLine(getLine95());
      that.removeLine(getLine96());
     that.unHighlightElement(WKEXP902CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP902CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP902CoopPlanelement, category);
}
      WKEXP902CoopPlanflag=false
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
      that.addLine(getLine96());
      that.addLine(getLine97());
     that.highlightElement(WKEXP903CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP903CoopPlan", "EngineeringProfession");
      WKEXP903CoopPlanflag=true
  }
 else {
      that.removeLine(getLine96());
      that.removeLine(getLine97());
     that.unHighlightElement(WKEXP903CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP903CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP903CoopPlanelement, category);
}
      WKEXP903CoopPlanflag=false
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
      that.addLine(getLine97());
      that.addLine(getLine112());
     that.highlightElement(WKEXP904CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP904CoopPlan", "EngineeringProfession");
      WKEXP904CoopPlanflag=true
  }
 else {
      that.removeLine(getLine97());
      that.removeLine(getLine112());
     that.unHighlightElement(WKEXP904CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP904CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP904CoopPlanelement, category);
}
      WKEXP904CoopPlanflag=false
  }
};
$scope.ECE303CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE303CoopPlanTime <= 200) { 
        ECE303CoopPlanTime = currentTime;
        return;
    }
ECE303CoopPlanTime = currentTime;
  var ECE303CoopPlanelement = document.getElementById("ECE303CoopPlan");
 if (!ECE303CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE303CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE303CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE303CoopPlan")[i];
        if (ECE303CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE303CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine98());
     that.highlightElement(ECE303CoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE303CoopPlan", "EngineeringSciences");
      ECE303CoopPlanflag=true
  }
 else {
      that.removeLine(getLine98());
     that.unHighlightElement(ECE303CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE303CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE303CoopPlanelement, category);
}
      ECE303CoopPlanflag=false
  }
};
$scope.ECE341CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE341CoopPlanTime <= 200) { 
        ECE341CoopPlanTime = currentTime;
        return;
    }
ECE341CoopPlanTime = currentTime;
  var ECE341CoopPlanelement = document.getElementById("ECE341CoopPlan");
 if (!ECE341CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE341CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE341CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE341CoopPlan")[i];
        if (ECE341CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE341CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine99());
      that.addLine(getLine100());
      that.addLine(getLine115());
      that.addLine(getLine117());
     that.highlightElement(ECE341CoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE341CoopPlan", "EngineeringSciences");
      ECE341CoopPlanflag=true
  }
 else {
      that.removeLine(getLine99());
      that.removeLine(getLine100());
      that.removeLine(getLine115());
      that.removeLine(getLine117());
     that.unHighlightElement(ECE341CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE341CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE341CoopPlanelement, category);
}
      ECE341CoopPlanflag=false
  }
};
$scope.PHYS244CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS244CoopPlanTime <= 200) { 
        PHYS244CoopPlanTime = currentTime;
        return;
    }
PHYS244CoopPlanTime = currentTime;
  var PHYS244CoopPlanelement = document.getElementById("PHYS244CoopPlan");
 if (!PHYS244CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("PHYS244CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PHYS244CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PHYS244CoopPlan")[i];
        if (PHYS244CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS244CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine101());
      that.addLine(getLine102());
      that.addLine(getLine103());
      that.addLine(getLine104());
     that.highlightElement(PHYS244CoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS244CoopPlan", "NaturalSciences");
      PHYS244CoopPlanflag=true
  }
 else {
      that.removeLine(getLine101());
      that.removeLine(getLine102());
      that.removeLine(getLine103());
      that.removeLine(getLine104());
     that.unHighlightElement(PHYS244CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS244CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS244CoopPlanelement, category);
}
      PHYS244CoopPlanflag=false
  }
};
$scope.PHYS311CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS311CoopPlanTime <= 200) { 
        PHYS311CoopPlanTime = currentTime;
        return;
    }
PHYS311CoopPlanTime = currentTime;
  var PHYS311CoopPlanelement = document.getElementById("PHYS311CoopPlan");
 if (!PHYS311CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("PHYS311CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PHYS311CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PHYS311CoopPlan")[i];
        if (PHYS311CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS311CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine105());
      that.addLine(getLine106());
      that.addLine(getLine107());
      that.addLine(getLine113());
     that.highlightElement(PHYS311CoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS311CoopPlan", "NaturalSciences");
      PHYS311CoopPlanflag=true
  }
 else {
      that.removeLine(getLine105());
      that.removeLine(getLine106());
      that.removeLine(getLine107());
      that.removeLine(getLine113());
     that.unHighlightElement(PHYS311CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS311CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS311CoopPlanelement, category);
}
      PHYS311CoopPlanflag=false
  }
};
$scope.PHYS372CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS372CoopPlanTime <= 200) { 
        PHYS372CoopPlanTime = currentTime;
        return;
    }
PHYS372CoopPlanTime = currentTime;
  var PHYS372CoopPlanelement = document.getElementById("PHYS372CoopPlan");
 if (!PHYS372CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("PHYS372CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PHYS372CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PHYS372CoopPlan")[i];
        if (PHYS372CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS372CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine108());
      that.addLine(getLine109());
      that.addLine(getLine110());
      that.addLine(getLine111());
      that.addLine(getLine114());
     that.highlightElement(PHYS372CoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS372CoopPlan", "NaturalSciences");
      PHYS372CoopPlanflag=true
  }
 else {
      that.removeLine(getLine108());
      that.removeLine(getLine109());
      that.removeLine(getLine110());
      that.removeLine(getLine111());
      that.removeLine(getLine114());
     that.unHighlightElement(PHYS372CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS372CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS372CoopPlanelement, category);
}
      PHYS372CoopPlanflag=false
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
      that.addLine(getLine112());
     that.highlightElement(WKEXP905CoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP905CoopPlan", "EngineeringProfession");
      WKEXP905CoopPlanflag=true
  }
 else {
      that.removeLine(getLine112());
     that.unHighlightElement(WKEXP905CoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP905CoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP905CoopPlanelement, category);
}
      WKEXP905CoopPlanflag=false
  }
};
$scope.ECE494CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE494CoopPlanTime <= 200) { 
        ECE494CoopPlanTime = currentTime;
        return;
    }
ECE494CoopPlanTime = currentTime;
  var ECE494CoopPlanelement = document.getElementById("ECE494CoopPlan");
 if (!ECE494CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE494CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE494CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE494CoopPlan")[i];
        if (ECE494CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE494CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine120());
     that.highlightElement(ECE494CoopPlanelement, "EngineeringDesign");
     that.addToClicked("ECE494CoopPlan", "EngineeringDesign");
      ECE494CoopPlanflag=true
  }
 else {
      that.removeLine(getLine120());
     that.unHighlightElement(ECE494CoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE494CoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE494CoopPlanelement, category);
}
      ECE494CoopPlanflag=false
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
$scope.PHYS415CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS415CoopPlanTime <= 200) { 
        PHYS415CoopPlanTime = currentTime;
        return;
    }
PHYS415CoopPlanTime = currentTime;
  var PHYS415CoopPlanelement = document.getElementById("PHYS415CoopPlan");
 if (!PHYS415CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("PHYS415CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PHYS415CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PHYS415CoopPlan")[i];
        if (PHYS415CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS415CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine113());
      that.addLine(getLine114());
      that.addLine(getLine115());
     that.highlightElement(PHYS415CoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS415CoopPlan", "NaturalSciences");
      PHYS415CoopPlanflag=true
  }
 else {
      that.removeLine(getLine113());
      that.removeLine(getLine114());
      that.removeLine(getLine115());
     that.unHighlightElement(PHYS415CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS415CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS415CoopPlanelement, category);
}
      PHYS415CoopPlanflag=false
  }
};
$scope.PHYS481CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS481CoopPlanTime <= 200) { 
        PHYS481CoopPlanTime = currentTime;
        return;
    }
PHYS481CoopPlanTime = currentTime;
  var PHYS481CoopPlanelement = document.getElementById("PHYS481CoopPlan");
 if (!PHYS481CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("PHYS481CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("PHYS481CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("PHYS481CoopPlan")[i];
        if (PHYS481CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS481CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine116());
      that.addLine(getLine117());
     that.highlightElement(PHYS481CoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS481CoopPlan", "NaturalSciences");
      PHYS481CoopPlanflag=true
  }
 else {
      that.removeLine(getLine116());
      that.removeLine(getLine117());
     that.unHighlightElement(PHYS481CoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS481CoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS481CoopPlanelement, category);
}
      PHYS481CoopPlanflag=false
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
$scope.ECE360CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE360CoopPlanTime <= 200) { 
        ECE360CoopPlanTime = currentTime;
        return;
    }
ECE360CoopPlanTime = currentTime;
  var ECE360CoopPlanelement = document.getElementById("ECE360CoopPlan");
 if (!ECE360CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE360CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE360CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE360CoopPlan")[i];
        if (ECE360CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE360CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine118());
      that.addLine(getLine119());
     that.highlightElement(ECE360CoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE360CoopPlan", "EngineeringSciences");
      ECE360CoopPlanflag=true
  }
 else {
      that.removeLine(getLine118());
      that.removeLine(getLine119());
     that.unHighlightElement(ECE360CoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE360CoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE360CoopPlanelement, category);
}
      ECE360CoopPlanflag=false
  }
};
$scope.ECE495CoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE495CoopPlanTime <= 200) { 
        ECE495CoopPlanTime = currentTime;
        return;
    }
ECE495CoopPlanTime = currentTime;
  var ECE495CoopPlanelement = document.getElementById("ECE495CoopPlan");
 if (!ECE495CoopPlanflag) {
     if (that.CoopPlanClickedMap.get("ECE495CoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlanClickedMap.get("ECE495CoopPlan").length; i++) { 
        var cate = that.CoopPlanClickedMap.get("ECE495CoopPlan")[i];
        if (ECE495CoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE495CoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine120());
     that.highlightElement(ECE495CoopPlanelement, "EngineeringDesign");
     that.addToClicked("ECE495CoopPlan", "EngineeringDesign");
      ECE495CoopPlanflag=true
  }
 else {
      that.removeLine(getLine120());
     that.unHighlightElement(ECE495CoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE495CoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE495CoopPlanelement, category);
}
      ECE495CoopPlanflag=false
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
$scope.ECE202CoopPlanRCListener = function () {
  var element = document.getElementById("ECE202CoopPlandesc");
 if (!ECE202CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE202CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE202CoopPlanrflag=false
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
$scope.MATE201CoopPlanRCListener = function () {
  var element = document.getElementById("MATE201CoopPlandesc");
 if (!MATE201CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE201CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE201CoopPlanrflag=false
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
$scope.PHYS281CoopPlanRCListener = function () {
  var element = document.getElementById("PHYS281CoopPlandesc");
 if (!PHYS281CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS281CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS281CoopPlanrflag=false
  }
};
$scope.PHYS292CoopPlanRCListener = function () {
  var element = document.getElementById("PHYS292CoopPlandesc");
 if (!PHYS292CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS292CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS292CoopPlanrflag=false
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
$scope.ECE203CoopPlanRCListener = function () {
  var element = document.getElementById("ECE203CoopPlandesc");
 if (!ECE203CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE203CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE203CoopPlanrflag=false
  }
};
$scope.ECE220CoopPlanRCListener = function () {
  var element = document.getElementById("ECE220CoopPlandesc");
 if (!ECE220CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE220CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE220CoopPlanrflag=false
  }
};
$scope.ECE240CoopPlanRCListener = function () {
  var element = document.getElementById("ECE240CoopPlandesc");
 if (!ECE240CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE240CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE240CoopPlanrflag=false
  }
};
$scope.PHYS271CoopPlanRCListener = function () {
  var element = document.getElementById("PHYS271CoopPlandesc");
 if (!PHYS271CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS271CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS271CoopPlanrflag=false
  }
};
$scope.PHYS292CoopPlanRCListener = function () {
  var element = document.getElementById("PHYS292CoopPlandesc");
 if (!PHYS292CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS292CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS292CoopPlanrflag=false
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
$scope.ECE210CoopPlanRCListener = function () {
  var element = document.getElementById("ECE210CoopPlandesc");
 if (!ECE210CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE210CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE210CoopPlanrflag=false
  }
};
$scope.ECE302CoopPlanRCListener = function () {
  var element = document.getElementById("ECE302CoopPlandesc");
 if (!ECE302CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE302CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE302CoopPlanrflag=false
  }
};
$scope.ECE340CoopPlanRCListener = function () {
  var element = document.getElementById("ECE340CoopPlandesc");
 if (!ECE340CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE340CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE340CoopPlanrflag=false
  }
};
$scope.ECE471CoopPlanRCListener = function () {
  var element = document.getElementById("ECE471CoopPlandesc");
 if (!ECE471CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE471CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE471CoopPlanrflag=false
  }
};
$scope.MATH311CoopPlanRCListener = function () {
  var element = document.getElementById("MATH311CoopPlandesc");
 if (!MATH311CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH311CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH311CoopPlanrflag=false
  }
};
$scope.PHYS381CoopPlanRCListener = function () {
  var element = document.getElementById("PHYS381CoopPlandesc");
 if (!PHYS381CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS381CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS381CoopPlanrflag=false
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
$scope.ECE303CoopPlanRCListener = function () {
  var element = document.getElementById("ECE303CoopPlandesc");
 if (!ECE303CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE303CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE303CoopPlanrflag=false
  }
};
$scope.ECE341CoopPlanRCListener = function () {
  var element = document.getElementById("ECE341CoopPlandesc");
 if (!ECE341CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE341CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE341CoopPlanrflag=false
  }
};
$scope.PHYS244CoopPlanRCListener = function () {
  var element = document.getElementById("PHYS244CoopPlandesc");
 if (!PHYS244CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS244CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS244CoopPlanrflag=false
  }
};
$scope.PHYS311CoopPlanRCListener = function () {
  var element = document.getElementById("PHYS311CoopPlandesc");
 if (!PHYS311CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS311CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS311CoopPlanrflag=false
  }
};
$scope.PHYS372CoopPlanRCListener = function () {
  var element = document.getElementById("PHYS372CoopPlandesc");
 if (!PHYS372CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS372CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS372CoopPlanrflag=false
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
$scope.ECE494CoopPlanRCListener = function () {
  var element = document.getElementById("ECE494CoopPlandesc");
 if (!ECE494CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE494CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE494CoopPlanrflag=false
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
$scope.PHYS415CoopPlanRCListener = function () {
  var element = document.getElementById("PHYS415CoopPlandesc");
 if (!PHYS415CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS415CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS415CoopPlanrflag=false
  }
};
$scope.PHYS481CoopPlanRCListener = function () {
  var element = document.getElementById("PHYS481CoopPlandesc");
 if (!PHYS481CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS481CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS481CoopPlanrflag=false
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
$scope.ECE360CoopPlanRCListener = function () {
  var element = document.getElementById("ECE360CoopPlandesc");
 if (!ECE360CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE360CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE360CoopPlanrflag=false
  }
};
$scope.ECE495CoopPlanRCListener = function () {
  var element = document.getElementById("ECE495CoopPlandesc");
 if (!ECE495CoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE495CoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE495CoopPlanrflag=false
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
  var CHEM103NanoTraditionalPlanflag = false;
  var CHEM103NanoTraditionalPlanrflag = false;
 var CHEM103NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("CHEM103NanoTraditionalPlan", []);
  var ENGG100NanoTraditionalPlanflag = false;
  var ENGG100NanoTraditionalPlanrflag = false;
 var ENGG100NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ENGG100NanoTraditionalPlan", []);
  var ENGG130NanoTraditionalPlanflag = false;
  var ENGG130NanoTraditionalPlanrflag = false;
 var ENGG130NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ENGG130NanoTraditionalPlan", []);
  var ENGL199NanoTraditionalPlanflag = false;
  var ENGL199NanoTraditionalPlanrflag = false;
 var ENGL199NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ENGL199NanoTraditionalPlan", []);
  var MATH100NanoTraditionalPlanflag = false;
  var MATH100NanoTraditionalPlanrflag = false;
 var MATH100NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("MATH100NanoTraditionalPlan", []);
  var PHYS130NanoTraditionalPlanflag = false;
  var PHYS130NanoTraditionalPlanrflag = false;
 var PHYS130NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("PHYS130NanoTraditionalPlan", []);
  var CHEM105NanoTraditionalPlanflag = false;
  var CHEM105NanoTraditionalPlanrflag = false;
 var CHEM105NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("CHEM105NanoTraditionalPlan", []);
  var ENCMP100NanoTraditionalPlanflag = false;
  var ENCMP100NanoTraditionalPlanrflag = false;
 var ENCMP100NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ENCMP100NanoTraditionalPlan", []);
  var ENGG160NanoTraditionalPlanflag = false;
  var ENGG160NanoTraditionalPlanrflag = false;
 var ENGG160NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ENGG160NanoTraditionalPlan", []);
  var ENPH131NanoTraditionalPlanflag = false;
  var ENPH131NanoTraditionalPlanrflag = false;
 var ENPH131NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ENPH131NanoTraditionalPlan", []);
  var MATH101NanoTraditionalPlanflag = false;
  var MATH101NanoTraditionalPlanrflag = false;
 var MATH101NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("MATH101NanoTraditionalPlan", []);
  var MATH102NanoTraditionalPlanflag = false;
  var MATH102NanoTraditionalPlanrflag = false;
 var MATH102NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("MATH102NanoTraditionalPlan", []);
  var ECE202NanoTraditionalPlanflag = false;
  var ECE202NanoTraditionalPlanrflag = false;
 var ECE202NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE202NanoTraditionalPlan", []);
  var MATE201NanoTraditionalPlanflag = false;
  var MATE201NanoTraditionalPlanrflag = false;
 var MATE201NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("MATE201NanoTraditionalPlan", []);
  var MATH201NanoTraditionalPlanflag = false;
  var MATH201NanoTraditionalPlanrflag = false;
 var MATH201NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("MATH201NanoTraditionalPlan", []);
  var MATH209NanoTraditionalPlanflag = false;
  var MATH209NanoTraditionalPlanrflag = false;
 var MATH209NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("MATH209NanoTraditionalPlan", []);
  var PHYS281NanoTraditionalPlanflag = false;
  var PHYS281NanoTraditionalPlanrflag = false;
 var PHYS281NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("PHYS281NanoTraditionalPlan", []);
  var PHYS292NanoTraditionalPlanflag = false;
  var PHYS292NanoTraditionalPlanrflag = false;
 var PHYS292NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("PHYS292NanoTraditionalPlan", []);
  var ComplementaryElectiveNanoTraditionalPlan0flag = false;
  var ComplementaryElectiveNanoTraditionalPlan0rflag = false;
 var ComplementaryElectiveNanoTraditionalPlan0Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ComplementaryElectiveNanoTraditionalPlan0", []);
  var CHE243NanoTraditionalPlanflag = false;
  var CHE243NanoTraditionalPlanrflag = false;
 var CHE243NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("CHE243NanoTraditionalPlan", []);
  var ECE203NanoTraditionalPlanflag = false;
  var ECE203NanoTraditionalPlanrflag = false;
 var ECE203NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE203NanoTraditionalPlan", []);
  var ECE240NanoTraditionalPlanflag = false;
  var ECE240NanoTraditionalPlanrflag = false;
 var ECE240NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE240NanoTraditionalPlan", []);
  var PHYS244NanoTraditionalPlanflag = false;
  var PHYS244NanoTraditionalPlanrflag = false;
 var PHYS244NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("PHYS244NanoTraditionalPlan", []);
  var PHYS271NanoTraditionalPlanflag = false;
  var PHYS271NanoTraditionalPlanrflag = false;
 var PHYS271NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("PHYS271NanoTraditionalPlan", []);
  var PHYS292NanoTraditionalPlanflag = false;
  var PHYS292NanoTraditionalPlanrflag = false;
 var PHYS292NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("PHYS292NanoTraditionalPlan", []);
  var ComplementaryElectiveNanoTraditionalPlan1flag = false;
  var ComplementaryElectiveNanoTraditionalPlan1rflag = false;
 var ComplementaryElectiveNanoTraditionalPlan1Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ComplementaryElectiveNanoTraditionalPlan1", []);
  var ECE210NanoTraditionalPlanflag = false;
  var ECE210NanoTraditionalPlanrflag = false;
 var ECE210NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE210NanoTraditionalPlan", []);
  var ECE302NanoTraditionalPlanflag = false;
  var ECE302NanoTraditionalPlanrflag = false;
 var ECE302NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE302NanoTraditionalPlan", []);
  var ECE457NanoTraditionalPlanflag = false;
  var ECE457NanoTraditionalPlanrflag = false;
 var ECE457NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE457NanoTraditionalPlan", []);
  var ECE471NanoTraditionalPlanflag = false;
  var ECE471NanoTraditionalPlanrflag = false;
 var ECE471NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE471NanoTraditionalPlan", []);
  var MATH311NanoTraditionalPlanflag = false;
  var MATH311NanoTraditionalPlanrflag = false;
 var MATH311NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("MATH311NanoTraditionalPlan", []);
  var PHYS381NanoTraditionalPlanflag = false;
  var PHYS381NanoTraditionalPlanrflag = false;
 var PHYS381NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("PHYS381NanoTraditionalPlan", []);
  var ECE303NanoTraditionalPlanflag = false;
  var ECE303NanoTraditionalPlanrflag = false;
 var ECE303NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE303NanoTraditionalPlan", []);
  var ECE341NanoTraditionalPlanflag = false;
  var ECE341NanoTraditionalPlanrflag = false;
 var ECE341NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE341NanoTraditionalPlan", []);
  var ECE360NanoTraditionalPlanflag = false;
  var ECE360NanoTraditionalPlanrflag = false;
 var ECE360NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE360NanoTraditionalPlan", []);
  var ECE456NanoTraditionalPlanflag = false;
  var ECE456NanoTraditionalPlanrflag = false;
 var ECE456NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE456NanoTraditionalPlan", []);
  var PHYS311NanoTraditionalPlanflag = false;
  var PHYS311NanoTraditionalPlanrflag = false;
 var PHYS311NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("PHYS311NanoTraditionalPlan", []);
  var PHYS372NanoTraditionalPlanflag = false;
  var PHYS372NanoTraditionalPlanrflag = false;
 var PHYS372NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("PHYS372NanoTraditionalPlan", []);
  var CHEM261NanoTraditionalPlanflag = false;
  var CHEM261NanoTraditionalPlanrflag = false;
 var CHEM261NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("CHEM261NanoTraditionalPlan", []);
  var ECE494NanoTraditionalPlanflag = false;
  var ECE494NanoTraditionalPlanrflag = false;
 var ECE494NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE494NanoTraditionalPlan", []);
  var ENGG404NanoTraditionalPlanflag = false;
  var ENGG404NanoTraditionalPlanrflag = false;
 var ENGG404NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ENGG404NanoTraditionalPlan", []);
  var PHYS415NanoTraditionalPlanflag = false;
  var PHYS415NanoTraditionalPlanrflag = false;
 var PHYS415NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("PHYS415NanoTraditionalPlan", []);
  var PHYS481NanoTraditionalPlanflag = false;
  var PHYS481NanoTraditionalPlanrflag = false;
 var PHYS481NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("PHYS481NanoTraditionalPlan", []);
  var ProgramTechnicalElectiveNanoTraditionalPlan0flag = false;
  var ProgramTechnicalElectiveNanoTraditionalPlan0rflag = false;
 var ProgramTechnicalElectiveNanoTraditionalPlan0Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ProgramTechnicalElectiveNanoTraditionalPlan0", []);
  var BIOCH200NanoTraditionalPlanflag = false;
  var BIOCH200NanoTraditionalPlanrflag = false;
 var BIOCH200NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("BIOCH200NanoTraditionalPlan", []);
  var ECE455NanoTraditionalPlanflag = false;
  var ECE455NanoTraditionalPlanrflag = false;
 var ECE455NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE455NanoTraditionalPlan", []);
  var ECE495NanoTraditionalPlanflag = false;
  var ECE495NanoTraditionalPlanrflag = false;
 var ECE495NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE495NanoTraditionalPlan", []);
  var ENGM310NanoTraditionalPlanflag = false;
  var ENGM310NanoTraditionalPlanrflag = false;
 var ENGM310NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ENGM310NanoTraditionalPlan", []);
  var ENGM401NanoTraditionalPlanflag = false;
  var ENGM401NanoTraditionalPlanrflag = false;
 var ENGM401NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ENGM401NanoTraditionalPlan", []);
  var ENGG400NanoTraditionalPlanflag = false;
  var ENGG400NanoTraditionalPlanrflag = false;
 var ENGG400NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ENGG400NanoTraditionalPlan", []);
  var ITSElectiveNanoTraditionalPlan0flag = false;
  var ITSElectiveNanoTraditionalPlan0rflag = false;
 var ITSElectiveNanoTraditionalPlan0Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ITSElectiveNanoTraditionalPlan0", []);
  var ProgramTechnicalElectiveNanoTraditionalPlan1flag = false;
  var ProgramTechnicalElectiveNanoTraditionalPlan1rflag = false;
 var ProgramTechnicalElectiveNanoTraditionalPlan1Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ProgramTechnicalElectiveNanoTraditionalPlan1", []);
$scope.CHEM103NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103NanoTraditionalPlanTime <= 200) { 
        CHEM103NanoTraditionalPlanTime = currentTime;
        return;
    }
CHEM103NanoTraditionalPlanTime = currentTime;
  var CHEM103NanoTraditionalPlanelement = document.getElementById("CHEM103NanoTraditionalPlan");
 if (!CHEM103NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("CHEM103NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("CHEM103NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("CHEM103NanoTraditionalPlan")[i];
        if (CHEM103NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine123());
      that.addLine(getLine172());
     that.highlightElement(CHEM103NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM103NanoTraditionalPlan", "NaturalSciences");
      CHEM103NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine123());
      that.removeLine(getLine172());
     that.unHighlightElement(CHEM103NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103NanoTraditionalPlanelement, category);
}
      CHEM103NanoTraditionalPlanflag=false
  }
};
$scope.ENGG100NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100NanoTraditionalPlanTime <= 200) { 
        ENGG100NanoTraditionalPlanTime = currentTime;
        return;
    }
ENGG100NanoTraditionalPlanTime = currentTime;
  var ENGG100NanoTraditionalPlanelement = document.getElementById("ENGG100NanoTraditionalPlan");
 if (!ENGG100NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ENGG100NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ENGG100NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ENGG100NanoTraditionalPlan")[i];
        if (ENGG100NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100NanoTraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG100NanoTraditionalPlan", "EngineeringProfession");
      ENGG100NanoTraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG100NanoTraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100NanoTraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100NanoTraditionalPlanelement, category);
}
      ENGG100NanoTraditionalPlanflag=false
  }
};
$scope.ENGG130NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130NanoTraditionalPlanTime <= 200) { 
        ENGG130NanoTraditionalPlanTime = currentTime;
        return;
    }
ENGG130NanoTraditionalPlanTime = currentTime;
  var ENGG130NanoTraditionalPlanelement = document.getElementById("ENGG130NanoTraditionalPlan");
 if (!ENGG130NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ENGG130NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ENGG130NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ENGG130NanoTraditionalPlan")[i];
        if (ENGG130NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine121());
      that.addLine(getLine126());
     that.highlightElement(ENGG130NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130NanoTraditionalPlan", "NaturalSciences");
      ENGG130NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine121());
      that.removeLine(getLine126());
     that.unHighlightElement(ENGG130NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130NanoTraditionalPlanelement, category);
}
      ENGG130NanoTraditionalPlanflag=false
  }
};
$scope.ENGL199NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199NanoTraditionalPlanTime <= 200) { 
        ENGL199NanoTraditionalPlanTime = currentTime;
        return;
    }
ENGL199NanoTraditionalPlanTime = currentTime;
  var ENGL199NanoTraditionalPlanelement = document.getElementById("ENGL199NanoTraditionalPlan");
 if (!ENGL199NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ENGL199NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ENGL199NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ENGL199NanoTraditionalPlan")[i];
        if (ENGL199NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine124());
     that.highlightElement(ENGL199NanoTraditionalPlanelement, "Other");
     that.addToClicked("ENGL199NanoTraditionalPlan", "Other");
      ENGL199NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine124());
     that.unHighlightElement(ENGL199NanoTraditionalPlanelement, "Other");
     var category = that.removeFromClicked("ENGL199NanoTraditionalPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199NanoTraditionalPlanelement, category);
}
      ENGL199NanoTraditionalPlanflag=false
  }
};
$scope.MATH100NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100NanoTraditionalPlanTime <= 200) { 
        MATH100NanoTraditionalPlanTime = currentTime;
        return;
    }
MATH100NanoTraditionalPlanTime = currentTime;
  var MATH100NanoTraditionalPlanelement = document.getElementById("MATH100NanoTraditionalPlan");
 if (!MATH100NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("MATH100NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("MATH100NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("MATH100NanoTraditionalPlan")[i];
        if (MATH100NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine121());
      that.addLine(getLine122());
      that.addLine(getLine125());
      that.addLine(getLine128());
      that.addLine(getLine129());
     that.highlightElement(MATH100NanoTraditionalPlanelement, "Math");
     that.addToClicked("MATH100NanoTraditionalPlan", "Math");
      MATH100NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine121());
      that.removeLine(getLine122());
      that.removeLine(getLine125());
      that.removeLine(getLine128());
      that.removeLine(getLine129());
     that.unHighlightElement(MATH100NanoTraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH100NanoTraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH100NanoTraditionalPlanelement, category);
}
      MATH100NanoTraditionalPlanflag=false
  }
};
$scope.PHYS130NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130NanoTraditionalPlanTime <= 200) { 
        PHYS130NanoTraditionalPlanTime = currentTime;
        return;
    }
PHYS130NanoTraditionalPlanTime = currentTime;
  var PHYS130NanoTraditionalPlanelement = document.getElementById("PHYS130NanoTraditionalPlan");
 if (!PHYS130NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("PHYS130NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("PHYS130NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("PHYS130NanoTraditionalPlan")[i];
        if (PHYS130NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine122());
      that.addLine(getLine137());
      that.addLine(getLine147());
      that.addLine(getLine151());
     that.highlightElement(PHYS130NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS130NanoTraditionalPlan", "NaturalSciences");
      PHYS130NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine122());
      that.removeLine(getLine137());
      that.removeLine(getLine147());
      that.removeLine(getLine151());
     that.unHighlightElement(PHYS130NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130NanoTraditionalPlanelement, category);
}
      PHYS130NanoTraditionalPlanflag=false
  }
};
$scope.CHEM105NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105NanoTraditionalPlanTime <= 200) { 
        CHEM105NanoTraditionalPlanTime = currentTime;
        return;
    }
CHEM105NanoTraditionalPlanTime = currentTime;
  var CHEM105NanoTraditionalPlanelement = document.getElementById("CHEM105NanoTraditionalPlan");
 if (!CHEM105NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("CHEM105NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("CHEM105NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("CHEM105NanoTraditionalPlan")[i];
        if (CHEM105NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine123());
      that.addLine(getLine132());
     that.highlightElement(CHEM105NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105NanoTraditionalPlan", "NaturalSciences");
      CHEM105NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine123());
      that.removeLine(getLine132());
     that.unHighlightElement(CHEM105NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105NanoTraditionalPlanelement, category);
}
      CHEM105NanoTraditionalPlanflag=false
  }
};
$scope.ENCMP100NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100NanoTraditionalPlanTime <= 200) { 
        ENCMP100NanoTraditionalPlanTime = currentTime;
        return;
    }
ENCMP100NanoTraditionalPlanTime = currentTime;
  var ENCMP100NanoTraditionalPlanelement = document.getElementById("ENCMP100NanoTraditionalPlan");
 if (!ENCMP100NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ENCMP100NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ENCMP100NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ENCMP100NanoTraditionalPlan")[i];
        if (ENCMP100NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENCMP100NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100NanoTraditionalPlan", "NaturalSciences");
      ENCMP100NanoTraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENCMP100NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100NanoTraditionalPlanelement, category);
}
      ENCMP100NanoTraditionalPlanflag=false
  }
};
$scope.ENGG160NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160NanoTraditionalPlanTime <= 200) { 
        ENGG160NanoTraditionalPlanTime = currentTime;
        return;
    }
ENGG160NanoTraditionalPlanTime = currentTime;
  var ENGG160NanoTraditionalPlanelement = document.getElementById("ENGG160NanoTraditionalPlan");
 if (!ENGG160NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ENGG160NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ENGG160NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ENGG160NanoTraditionalPlan")[i];
        if (ENGG160NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine124());
     that.highlightElement(ENGG160NanoTraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ENGG160NanoTraditionalPlan", "EngineeringDesign");
      ENGG160NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine124());
     that.unHighlightElement(ENGG160NanoTraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160NanoTraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160NanoTraditionalPlanelement, category);
}
      ENGG160NanoTraditionalPlanflag=false
  }
};
$scope.ENPH131NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131NanoTraditionalPlanTime <= 200) { 
        ENPH131NanoTraditionalPlanTime = currentTime;
        return;
    }
ENPH131NanoTraditionalPlanTime = currentTime;
  var ENPH131NanoTraditionalPlanelement = document.getElementById("ENPH131NanoTraditionalPlan");
 if (!ENPH131NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ENPH131NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ENPH131NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ENPH131NanoTraditionalPlan")[i];
        if (ENPH131NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine125());
      that.addLine(getLine126());
      that.addLine(getLine127());
      that.addLine(getLine136());
      that.addLine(getLine146());
      that.addLine(getLine150());
     that.highlightElement(ENPH131NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131NanoTraditionalPlan", "NaturalSciences");
      ENPH131NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine125());
      that.removeLine(getLine126());
      that.removeLine(getLine127());
      that.removeLine(getLine136());
      that.removeLine(getLine146());
      that.removeLine(getLine150());
     that.unHighlightElement(ENPH131NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131NanoTraditionalPlanelement, category);
}
      ENPH131NanoTraditionalPlanflag=false
  }
};
$scope.MATH101NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101NanoTraditionalPlanTime <= 200) { 
        MATH101NanoTraditionalPlanTime = currentTime;
        return;
    }
MATH101NanoTraditionalPlanTime = currentTime;
  var MATH101NanoTraditionalPlanelement = document.getElementById("MATH101NanoTraditionalPlan");
 if (!MATH101NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("MATH101NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("MATH101NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("MATH101NanoTraditionalPlan")[i];
        if (MATH101NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine127());
      that.addLine(getLine128());
      that.addLine(getLine130());
      that.addLine(getLine134());
      that.addLine(getLine141());
     that.highlightElement(MATH101NanoTraditionalPlanelement, "Math");
     that.addToClicked("MATH101NanoTraditionalPlan", "Math");
      MATH101NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine127());
      that.removeLine(getLine128());
      that.removeLine(getLine130());
      that.removeLine(getLine134());
      that.removeLine(getLine141());
     that.unHighlightElement(MATH101NanoTraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH101NanoTraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH101NanoTraditionalPlanelement, category);
}
      MATH101NanoTraditionalPlanflag=false
  }
};
$scope.MATH102NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102NanoTraditionalPlanTime <= 200) { 
        MATH102NanoTraditionalPlanTime = currentTime;
        return;
    }
MATH102NanoTraditionalPlanTime = currentTime;
  var MATH102NanoTraditionalPlanelement = document.getElementById("MATH102NanoTraditionalPlan");
 if (!MATH102NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("MATH102NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("MATH102NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("MATH102NanoTraditionalPlan")[i];
        if (MATH102NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine129());
      that.addLine(getLine131());
      that.addLine(getLine135());
      that.addLine(getLine148());
      that.addLine(getLine170());
     that.highlightElement(MATH102NanoTraditionalPlanelement, "Math");
     that.addToClicked("MATH102NanoTraditionalPlan", "Math");
      MATH102NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine129());
      that.removeLine(getLine131());
      that.removeLine(getLine135());
      that.removeLine(getLine148());
      that.removeLine(getLine170());
     that.unHighlightElement(MATH102NanoTraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH102NanoTraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH102NanoTraditionalPlanelement, category);
}
      MATH102NanoTraditionalPlanflag=false
  }
};
$scope.ECE202NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE202NanoTraditionalPlanTime <= 200) { 
        ECE202NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE202NanoTraditionalPlanTime = currentTime;
  var ECE202NanoTraditionalPlanelement = document.getElementById("ECE202NanoTraditionalPlan");
 if (!ECE202NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE202NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE202NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE202NanoTraditionalPlan")[i];
        if (ECE202NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE202NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine130());
      that.addLine(getLine131());
      that.addLine(getLine142());
      that.addLine(getLine144());
     that.highlightElement(ECE202NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE202NanoTraditionalPlan", "EngineeringSciences");
      ECE202NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine130());
      that.removeLine(getLine131());
      that.removeLine(getLine142());
      that.removeLine(getLine144());
     that.unHighlightElement(ECE202NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE202NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE202NanoTraditionalPlanelement, category);
}
      ECE202NanoTraditionalPlanflag=false
  }
};
$scope.MATE201NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE201NanoTraditionalPlanTime <= 200) { 
        MATE201NanoTraditionalPlanTime = currentTime;
        return;
    }
MATE201NanoTraditionalPlanTime = currentTime;
  var MATE201NanoTraditionalPlanelement = document.getElementById("MATE201NanoTraditionalPlan");
 if (!MATE201NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("MATE201NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("MATE201NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("MATE201NanoTraditionalPlan")[i];
        if (MATE201NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE201NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine132());
     that.highlightElement(MATE201NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("MATE201NanoTraditionalPlan", "NaturalSciences");
      MATE201NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine132());
     that.unHighlightElement(MATE201NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("MATE201NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(MATE201NanoTraditionalPlanelement, category);
}
      MATE201NanoTraditionalPlanflag=false
  }
};
$scope.MATH201NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201NanoTraditionalPlanTime <= 200) { 
        MATH201NanoTraditionalPlanTime = currentTime;
        return;
    }
MATH201NanoTraditionalPlanTime = currentTime;
  var MATH201NanoTraditionalPlanelement = document.getElementById("MATH201NanoTraditionalPlan");
 if (!MATH201NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("MATH201NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("MATH201NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("MATH201NanoTraditionalPlan")[i];
        if (MATH201NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine133());
      that.addLine(getLine145());
      that.addLine(getLine158());
      that.addLine(getLine171());
      that.addLine(getLine179());
     that.highlightElement(MATH201NanoTraditionalPlanelement, "Math");
     that.addToClicked("MATH201NanoTraditionalPlan", "Math");
      MATH201NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine133());
      that.removeLine(getLine145());
      that.removeLine(getLine158());
      that.removeLine(getLine171());
      that.removeLine(getLine179());
     that.unHighlightElement(MATH201NanoTraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH201NanoTraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH201NanoTraditionalPlanelement, category);
}
      MATH201NanoTraditionalPlanflag=false
  }
};
$scope.MATH209NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209NanoTraditionalPlanTime <= 200) { 
        MATH209NanoTraditionalPlanTime = currentTime;
        return;
    }
MATH209NanoTraditionalPlanTime = currentTime;
  var MATH209NanoTraditionalPlanelement = document.getElementById("MATH209NanoTraditionalPlan");
 if (!MATH209NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("MATH209NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("MATH209NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("MATH209NanoTraditionalPlan")[i];
        if (MATH209NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine133());
      that.addLine(getLine134());
      that.addLine(getLine135());
      that.addLine(getLine138());
      that.addLine(getLine140());
      that.addLine(getLine149());
      that.addLine(getLine152());
      that.addLine(getLine154());
      that.addLine(getLine167());
     that.highlightElement(MATH209NanoTraditionalPlanelement, "Math");
     that.addToClicked("MATH209NanoTraditionalPlan", "Math");
      MATH209NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine133());
      that.removeLine(getLine134());
      that.removeLine(getLine135());
      that.removeLine(getLine138());
      that.removeLine(getLine140());
      that.removeLine(getLine149());
      that.removeLine(getLine152());
      that.removeLine(getLine154());
      that.removeLine(getLine167());
     that.unHighlightElement(MATH209NanoTraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH209NanoTraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209NanoTraditionalPlanelement, category);
}
      MATH209NanoTraditionalPlanflag=false
  }
};
$scope.PHYS281NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS281NanoTraditionalPlanTime <= 200) { 
        PHYS281NanoTraditionalPlanTime = currentTime;
        return;
    }
PHYS281NanoTraditionalPlanTime = currentTime;
  var PHYS281NanoTraditionalPlanelement = document.getElementById("PHYS281NanoTraditionalPlan");
 if (!PHYS281NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("PHYS281NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("PHYS281NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("PHYS281NanoTraditionalPlan")[i];
        if (PHYS281NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS281NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine136());
      that.addLine(getLine137());
      that.addLine(getLine138());
      that.addLine(getLine139());
      that.addLine(getLine153());
      that.addLine(getLine157());
      that.addLine(getLine169());
     that.highlightElement(PHYS281NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS281NanoTraditionalPlan", "NaturalSciences");
      PHYS281NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine136());
      that.removeLine(getLine137());
      that.removeLine(getLine138());
      that.removeLine(getLine139());
      that.removeLine(getLine153());
      that.removeLine(getLine157());
      that.removeLine(getLine169());
     that.unHighlightElement(PHYS281NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS281NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS281NanoTraditionalPlanelement, category);
}
      PHYS281NanoTraditionalPlanflag=false
  }
};
$scope.PHYS292NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS292NanoTraditionalPlanTime <= 200) { 
        PHYS292NanoTraditionalPlanTime = currentTime;
        return;
    }
PHYS292NanoTraditionalPlanTime = currentTime;
  var PHYS292NanoTraditionalPlanelement = document.getElementById("PHYS292NanoTraditionalPlan");
 if (!PHYS292NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("PHYS292NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("PHYS292NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("PHYS292NanoTraditionalPlan")[i];
        if (PHYS292NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS292NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine139());
      that.addLine(getLine140());
      that.addLine(getLine153());
      that.addLine(getLine154());
     that.highlightElement(PHYS292NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PHYS292NanoTraditionalPlan", "EngineeringSciences");
      PHYS292NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine139());
      that.removeLine(getLine140());
      that.removeLine(getLine153());
      that.removeLine(getLine154());
     that.unHighlightElement(PHYS292NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PHYS292NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PHYS292NanoTraditionalPlanelement, category);
}
      PHYS292NanoTraditionalPlanflag=false
  }
};
$scope.ComplementaryElectiveNanoTraditionalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveNanoTraditionalPlan0Time <= 200) { 
        ComplementaryElectiveNanoTraditionalPlan0Time = currentTime;
        return;
    }
ComplementaryElectiveNanoTraditionalPlan0Time = currentTime;
  var ComplementaryElectiveNanoTraditionalPlan0element = document.getElementById("ComplementaryElectiveNanoTraditionalPlan0");
 if (!ComplementaryElectiveNanoTraditionalPlan0flag) {
     if (that.NanoTraditionalPlanClickedMap.get("ComplementaryElectiveNanoTraditionalPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ComplementaryElectiveNanoTraditionalPlan0").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ComplementaryElectiveNanoTraditionalPlan0")[i];
        if (ComplementaryElectiveNanoTraditionalPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveNanoTraditionalPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveNanoTraditionalPlan0element, "COMP");
     that.addToClicked("ComplementaryElectiveNanoTraditionalPlan0", "COMP");
      ComplementaryElectiveNanoTraditionalPlan0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveNanoTraditionalPlan0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveNanoTraditionalPlan0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveNanoTraditionalPlan0element, category);
}
      ComplementaryElectiveNanoTraditionalPlan0flag=false
  }
};
$scope.CHE243NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243NanoTraditionalPlanTime <= 200) { 
        CHE243NanoTraditionalPlanTime = currentTime;
        return;
    }
CHE243NanoTraditionalPlanTime = currentTime;
  var CHE243NanoTraditionalPlanelement = document.getElementById("CHE243NanoTraditionalPlan");
 if (!CHE243NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("CHE243NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("CHE243NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("CHE243NanoTraditionalPlan")[i];
        if (CHE243NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine141());
      that.addLine(getLine165());
     that.highlightElement(CHE243NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("CHE243NanoTraditionalPlan", "EngineeringSciences");
      CHE243NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine141());
      that.removeLine(getLine165());
     that.unHighlightElement(CHE243NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243NanoTraditionalPlanelement, category);
}
      CHE243NanoTraditionalPlanflag=false
  }
};
$scope.ECE203NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE203NanoTraditionalPlanTime <= 200) { 
        ECE203NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE203NanoTraditionalPlanTime = currentTime;
  var ECE203NanoTraditionalPlanelement = document.getElementById("ECE203NanoTraditionalPlan");
 if (!ECE203NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE203NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE203NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE203NanoTraditionalPlan")[i];
        if (ECE203NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE203NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine142());
      that.addLine(getLine143());
      that.addLine(getLine155());
      that.addLine(getLine162());
     that.highlightElement(ECE203NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE203NanoTraditionalPlan", "EngineeringSciences");
      ECE203NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine142());
      that.removeLine(getLine143());
      that.removeLine(getLine155());
      that.removeLine(getLine162());
     that.unHighlightElement(ECE203NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE203NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE203NanoTraditionalPlanelement, category);
}
      ECE203NanoTraditionalPlanflag=false
  }
};
$scope.ECE240NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE240NanoTraditionalPlanTime <= 200) { 
        ECE240NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE240NanoTraditionalPlanTime = currentTime;
  var ECE240NanoTraditionalPlanelement = document.getElementById("ECE240NanoTraditionalPlan");
 if (!ECE240NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE240NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE240NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE240NanoTraditionalPlan")[i];
        if (ECE240NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE240NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine143());
      that.addLine(getLine144());
      that.addLine(getLine145());
      that.addLine(getLine160());
      that.addLine(getLine163());
     that.highlightElement(ECE240NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE240NanoTraditionalPlan", "EngineeringSciences");
      ECE240NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine143());
      that.removeLine(getLine144());
      that.removeLine(getLine145());
      that.removeLine(getLine160());
      that.removeLine(getLine163());
     that.unHighlightElement(ECE240NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE240NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE240NanoTraditionalPlanelement, category);
}
      ECE240NanoTraditionalPlanflag=false
  }
};
$scope.PHYS244NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS244NanoTraditionalPlanTime <= 200) { 
        PHYS244NanoTraditionalPlanTime = currentTime;
        return;
    }
PHYS244NanoTraditionalPlanTime = currentTime;
  var PHYS244NanoTraditionalPlanelement = document.getElementById("PHYS244NanoTraditionalPlan");
 if (!PHYS244NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("PHYS244NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("PHYS244NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("PHYS244NanoTraditionalPlan")[i];
        if (PHYS244NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS244NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine146());
      that.addLine(getLine147());
      that.addLine(getLine148());
      that.addLine(getLine149());
     that.highlightElement(PHYS244NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS244NanoTraditionalPlan", "NaturalSciences");
      PHYS244NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine146());
      that.removeLine(getLine147());
      that.removeLine(getLine148());
      that.removeLine(getLine149());
     that.unHighlightElement(PHYS244NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS244NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS244NanoTraditionalPlanelement, category);
}
      PHYS244NanoTraditionalPlanflag=false
  }
};
$scope.PHYS271NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS271NanoTraditionalPlanTime <= 200) { 
        PHYS271NanoTraditionalPlanTime = currentTime;
        return;
    }
PHYS271NanoTraditionalPlanTime = currentTime;
  var PHYS271NanoTraditionalPlanelement = document.getElementById("PHYS271NanoTraditionalPlan");
 if (!PHYS271NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("PHYS271NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("PHYS271NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("PHYS271NanoTraditionalPlan")[i];
        if (PHYS271NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS271NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine150());
      that.addLine(getLine151());
      that.addLine(getLine152());
      that.addLine(getLine166());
      that.addLine(getLine168());
     that.highlightElement(PHYS271NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS271NanoTraditionalPlan", "NaturalSciences");
      PHYS271NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine150());
      that.removeLine(getLine151());
      that.removeLine(getLine152());
      that.removeLine(getLine166());
      that.removeLine(getLine168());
     that.unHighlightElement(PHYS271NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS271NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS271NanoTraditionalPlanelement, category);
}
      PHYS271NanoTraditionalPlanflag=false
  }
};
$scope.PHYS292NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS292NanoTraditionalPlanTime <= 200) { 
        PHYS292NanoTraditionalPlanTime = currentTime;
        return;
    }
PHYS292NanoTraditionalPlanTime = currentTime;
  var PHYS292NanoTraditionalPlanelement = document.getElementById("PHYS292NanoTraditionalPlan");
 if (!PHYS292NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("PHYS292NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("PHYS292NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("PHYS292NanoTraditionalPlan")[i];
        if (PHYS292NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS292NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine139());
      that.addLine(getLine140());
      that.addLine(getLine153());
      that.addLine(getLine154());
     that.highlightElement(PHYS292NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("PHYS292NanoTraditionalPlan", "EngineeringSciences");
      PHYS292NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine139());
      that.removeLine(getLine140());
      that.removeLine(getLine153());
      that.removeLine(getLine154());
     that.unHighlightElement(PHYS292NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PHYS292NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PHYS292NanoTraditionalPlanelement, category);
}
      PHYS292NanoTraditionalPlanflag=false
  }
};
$scope.ComplementaryElectiveNanoTraditionalPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveNanoTraditionalPlan1Time <= 200) { 
        ComplementaryElectiveNanoTraditionalPlan1Time = currentTime;
        return;
    }
ComplementaryElectiveNanoTraditionalPlan1Time = currentTime;
  var ComplementaryElectiveNanoTraditionalPlan1element = document.getElementById("ComplementaryElectiveNanoTraditionalPlan1");
 if (!ComplementaryElectiveNanoTraditionalPlan1flag) {
     if (that.NanoTraditionalPlanClickedMap.get("ComplementaryElectiveNanoTraditionalPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ComplementaryElectiveNanoTraditionalPlan1").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ComplementaryElectiveNanoTraditionalPlan1")[i];
        if (ComplementaryElectiveNanoTraditionalPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveNanoTraditionalPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveNanoTraditionalPlan1element, "COMP");
     that.addToClicked("ComplementaryElectiveNanoTraditionalPlan1", "COMP");
      ComplementaryElectiveNanoTraditionalPlan1flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveNanoTraditionalPlan1element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveNanoTraditionalPlan1", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveNanoTraditionalPlan1element, category);
}
      ComplementaryElectiveNanoTraditionalPlan1flag=false
  }
};
$scope.ECE210NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE210NanoTraditionalPlanTime <= 200) { 
        ECE210NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE210NanoTraditionalPlanTime = currentTime;
  var ECE210NanoTraditionalPlanelement = document.getElementById("ECE210NanoTraditionalPlan");
 if (!ECE210NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE210NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE210NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE210NanoTraditionalPlan")[i];
        if (ECE210NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE210NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE210NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE210NanoTraditionalPlan", "EngineeringSciences");
      ECE210NanoTraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ECE210NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE210NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE210NanoTraditionalPlanelement, category);
}
      ECE210NanoTraditionalPlanflag=false
  }
};
$scope.ECE302NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE302NanoTraditionalPlanTime <= 200) { 
        ECE302NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE302NanoTraditionalPlanTime = currentTime;
  var ECE302NanoTraditionalPlanelement = document.getElementById("ECE302NanoTraditionalPlan");
 if (!ECE302NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE302NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE302NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE302NanoTraditionalPlan")[i];
        if (ECE302NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE302NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine155());
      that.addLine(getLine159());
      that.addLine(getLine164());
     that.highlightElement(ECE302NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE302NanoTraditionalPlan", "EngineeringSciences");
      ECE302NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine155());
      that.removeLine(getLine159());
      that.removeLine(getLine164());
     that.unHighlightElement(ECE302NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE302NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE302NanoTraditionalPlanelement, category);
}
      ECE302NanoTraditionalPlanflag=false
  }
};
$scope.ECE457NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE457NanoTraditionalPlanTime <= 200) { 
        ECE457NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE457NanoTraditionalPlanTime = currentTime;
  var ECE457NanoTraditionalPlanelement = document.getElementById("ECE457NanoTraditionalPlan");
 if (!ECE457NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE457NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE457NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE457NanoTraditionalPlan")[i];
        if (ECE457NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE457NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE457NanoTraditionalPlanelement, "course");
     that.addToClicked("ECE457NanoTraditionalPlan", "course");
      ECE457NanoTraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ECE457NanoTraditionalPlanelement, "course");
     var category = that.removeFromClicked("ECE457NanoTraditionalPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE457NanoTraditionalPlanelement, category);
}
      ECE457NanoTraditionalPlanflag=false
  }
};
$scope.ECE471NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE471NanoTraditionalPlanTime <= 200) { 
        ECE471NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE471NanoTraditionalPlanTime = currentTime;
  var ECE471NanoTraditionalPlanelement = document.getElementById("ECE471NanoTraditionalPlan");
 if (!ECE471NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE471NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE471NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE471NanoTraditionalPlan")[i];
        if (ECE471NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE471NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine156());
     that.highlightElement(ECE471NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE471NanoTraditionalPlan", "EngineeringSciences");
      ECE471NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine156());
     that.unHighlightElement(ECE471NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE471NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE471NanoTraditionalPlanelement, category);
}
      ECE471NanoTraditionalPlanflag=false
  }
};
$scope.MATH311NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH311NanoTraditionalPlanTime <= 200) { 
        MATH311NanoTraditionalPlanTime = currentTime;
        return;
    }
MATH311NanoTraditionalPlanTime = currentTime;
  var MATH311NanoTraditionalPlanelement = document.getElementById("MATH311NanoTraditionalPlan");
 if (!MATH311NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("MATH311NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("MATH311NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("MATH311NanoTraditionalPlan")[i];
        if (MATH311NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH311NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine161());
     that.highlightElement(MATH311NanoTraditionalPlanelement, "Math");
     that.addToClicked("MATH311NanoTraditionalPlan", "Math");
      MATH311NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine161());
     that.unHighlightElement(MATH311NanoTraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH311NanoTraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH311NanoTraditionalPlanelement, category);
}
      MATH311NanoTraditionalPlanflag=false
  }
};
$scope.PHYS381NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS381NanoTraditionalPlanTime <= 200) { 
        PHYS381NanoTraditionalPlanTime = currentTime;
        return;
    }
PHYS381NanoTraditionalPlanTime = currentTime;
  var PHYS381NanoTraditionalPlanelement = document.getElementById("PHYS381NanoTraditionalPlan");
 if (!PHYS381NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("PHYS381NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("PHYS381NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("PHYS381NanoTraditionalPlan")[i];
        if (PHYS381NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS381NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine156());
      that.addLine(getLine157());
      that.addLine(getLine158());
      that.addLine(getLine176());
     that.highlightElement(PHYS381NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS381NanoTraditionalPlan", "NaturalSciences");
      PHYS381NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine156());
      that.removeLine(getLine157());
      that.removeLine(getLine158());
      that.removeLine(getLine176());
     that.unHighlightElement(PHYS381NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS381NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS381NanoTraditionalPlanelement, category);
}
      PHYS381NanoTraditionalPlanflag=false
  }
};
$scope.ECE303NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE303NanoTraditionalPlanTime <= 200) { 
        ECE303NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE303NanoTraditionalPlanTime = currentTime;
  var ECE303NanoTraditionalPlanelement = document.getElementById("ECE303NanoTraditionalPlan");
 if (!ECE303NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE303NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE303NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE303NanoTraditionalPlan")[i];
        if (ECE303NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE303NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine159());
     that.highlightElement(ECE303NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE303NanoTraditionalPlan", "EngineeringSciences");
      ECE303NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine159());
     that.unHighlightElement(ECE303NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE303NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE303NanoTraditionalPlanelement, category);
}
      ECE303NanoTraditionalPlanflag=false
  }
};
$scope.ECE341NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE341NanoTraditionalPlanTime <= 200) { 
        ECE341NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE341NanoTraditionalPlanTime = currentTime;
  var ECE341NanoTraditionalPlanelement = document.getElementById("ECE341NanoTraditionalPlan");
 if (!ECE341NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE341NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE341NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE341NanoTraditionalPlan")[i];
        if (ECE341NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE341NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine160());
      that.addLine(getLine161());
      that.addLine(getLine175());
      that.addLine(getLine177());
     that.highlightElement(ECE341NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE341NanoTraditionalPlan", "EngineeringSciences");
      ECE341NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine160());
      that.removeLine(getLine161());
      that.removeLine(getLine175());
      that.removeLine(getLine177());
     that.unHighlightElement(ECE341NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE341NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE341NanoTraditionalPlanelement, category);
}
      ECE341NanoTraditionalPlanflag=false
  }
};
$scope.ECE360NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE360NanoTraditionalPlanTime <= 200) { 
        ECE360NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE360NanoTraditionalPlanTime = currentTime;
  var ECE360NanoTraditionalPlanelement = document.getElementById("ECE360NanoTraditionalPlan");
 if (!ECE360NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE360NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE360NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE360NanoTraditionalPlan")[i];
        if (ECE360NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE360NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine162());
      that.addLine(getLine163());
     that.highlightElement(ECE360NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE360NanoTraditionalPlan", "EngineeringSciences");
      ECE360NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine162());
      that.removeLine(getLine163());
     that.unHighlightElement(ECE360NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE360NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE360NanoTraditionalPlanelement, category);
}
      ECE360NanoTraditionalPlanflag=false
  }
};
$scope.ECE456NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE456NanoTraditionalPlanTime <= 200) { 
        ECE456NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE456NanoTraditionalPlanTime = currentTime;
  var ECE456NanoTraditionalPlanelement = document.getElementById("ECE456NanoTraditionalPlan");
 if (!ECE456NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE456NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE456NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE456NanoTraditionalPlan")[i];
        if (ECE456NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE456NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine164());
     that.highlightElement(ECE456NanoTraditionalPlanelement, "course");
     that.addToClicked("ECE456NanoTraditionalPlan", "course");
      ECE456NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine164());
     that.unHighlightElement(ECE456NanoTraditionalPlanelement, "course");
     var category = that.removeFromClicked("ECE456NanoTraditionalPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE456NanoTraditionalPlanelement, category);
}
      ECE456NanoTraditionalPlanflag=false
  }
};
$scope.PHYS311NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS311NanoTraditionalPlanTime <= 200) { 
        PHYS311NanoTraditionalPlanTime = currentTime;
        return;
    }
PHYS311NanoTraditionalPlanTime = currentTime;
  var PHYS311NanoTraditionalPlanelement = document.getElementById("PHYS311NanoTraditionalPlan");
 if (!PHYS311NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("PHYS311NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("PHYS311NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("PHYS311NanoTraditionalPlan")[i];
        if (PHYS311NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS311NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine165());
      that.addLine(getLine166());
      that.addLine(getLine167());
      that.addLine(getLine173());
     that.highlightElement(PHYS311NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS311NanoTraditionalPlan", "NaturalSciences");
      PHYS311NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine165());
      that.removeLine(getLine166());
      that.removeLine(getLine167());
      that.removeLine(getLine173());
     that.unHighlightElement(PHYS311NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS311NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS311NanoTraditionalPlanelement, category);
}
      PHYS311NanoTraditionalPlanflag=false
  }
};
$scope.PHYS372NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS372NanoTraditionalPlanTime <= 200) { 
        PHYS372NanoTraditionalPlanTime = currentTime;
        return;
    }
PHYS372NanoTraditionalPlanTime = currentTime;
  var PHYS372NanoTraditionalPlanelement = document.getElementById("PHYS372NanoTraditionalPlan");
 if (!PHYS372NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("PHYS372NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("PHYS372NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("PHYS372NanoTraditionalPlan")[i];
        if (PHYS372NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS372NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine168());
      that.addLine(getLine169());
      that.addLine(getLine170());
      that.addLine(getLine171());
      that.addLine(getLine174());
     that.highlightElement(PHYS372NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS372NanoTraditionalPlan", "NaturalSciences");
      PHYS372NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine168());
      that.removeLine(getLine169());
      that.removeLine(getLine170());
      that.removeLine(getLine171());
      that.removeLine(getLine174());
     that.unHighlightElement(PHYS372NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS372NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS372NanoTraditionalPlanelement, category);
}
      PHYS372NanoTraditionalPlanflag=false
  }
};
$scope.CHEM261NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM261NanoTraditionalPlanTime <= 200) { 
        CHEM261NanoTraditionalPlanTime = currentTime;
        return;
    }
CHEM261NanoTraditionalPlanTime = currentTime;
  var CHEM261NanoTraditionalPlanelement = document.getElementById("CHEM261NanoTraditionalPlan");
 if (!CHEM261NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("CHEM261NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("CHEM261NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("CHEM261NanoTraditionalPlan")[i];
        if (CHEM261NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM261NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine172());
      that.addLine(getLine178());
     that.highlightElement(CHEM261NanoTraditionalPlanelement, "course");
     that.addToClicked("CHEM261NanoTraditionalPlan", "course");
      CHEM261NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine172());
      that.removeLine(getLine178());
     that.unHighlightElement(CHEM261NanoTraditionalPlanelement, "course");
     var category = that.removeFromClicked("CHEM261NanoTraditionalPlan", "course");
  if (category != "") { 
     that.highlightElement(CHEM261NanoTraditionalPlanelement, category);
}
      CHEM261NanoTraditionalPlanflag=false
  }
};
$scope.ECE494NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE494NanoTraditionalPlanTime <= 200) { 
        ECE494NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE494NanoTraditionalPlanTime = currentTime;
  var ECE494NanoTraditionalPlanelement = document.getElementById("ECE494NanoTraditionalPlan");
 if (!ECE494NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE494NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE494NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE494NanoTraditionalPlan")[i];
        if (ECE494NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE494NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine180());
     that.highlightElement(ECE494NanoTraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ECE494NanoTraditionalPlan", "EngineeringDesign");
      ECE494NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine180());
     that.unHighlightElement(ECE494NanoTraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE494NanoTraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE494NanoTraditionalPlanelement, category);
}
      ECE494NanoTraditionalPlanflag=false
  }
};
$scope.ENGG404NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404NanoTraditionalPlanTime <= 200) { 
        ENGG404NanoTraditionalPlanTime = currentTime;
        return;
    }
ENGG404NanoTraditionalPlanTime = currentTime;
  var ENGG404NanoTraditionalPlanelement = document.getElementById("ENGG404NanoTraditionalPlan");
 if (!ENGG404NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ENGG404NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ENGG404NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ENGG404NanoTraditionalPlan")[i];
        if (ENGG404NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404NanoTraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG404NanoTraditionalPlan", "EngineeringProfession");
      ENGG404NanoTraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG404NanoTraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404NanoTraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404NanoTraditionalPlanelement, category);
}
      ENGG404NanoTraditionalPlanflag=false
  }
};
$scope.PHYS415NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS415NanoTraditionalPlanTime <= 200) { 
        PHYS415NanoTraditionalPlanTime = currentTime;
        return;
    }
PHYS415NanoTraditionalPlanTime = currentTime;
  var PHYS415NanoTraditionalPlanelement = document.getElementById("PHYS415NanoTraditionalPlan");
 if (!PHYS415NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("PHYS415NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("PHYS415NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("PHYS415NanoTraditionalPlan")[i];
        if (PHYS415NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS415NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine173());
      that.addLine(getLine174());
      that.addLine(getLine175());
     that.highlightElement(PHYS415NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS415NanoTraditionalPlan", "NaturalSciences");
      PHYS415NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine173());
      that.removeLine(getLine174());
      that.removeLine(getLine175());
     that.unHighlightElement(PHYS415NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS415NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS415NanoTraditionalPlanelement, category);
}
      PHYS415NanoTraditionalPlanflag=false
  }
};
$scope.PHYS481NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS481NanoTraditionalPlanTime <= 200) { 
        PHYS481NanoTraditionalPlanTime = currentTime;
        return;
    }
PHYS481NanoTraditionalPlanTime = currentTime;
  var PHYS481NanoTraditionalPlanelement = document.getElementById("PHYS481NanoTraditionalPlan");
 if (!PHYS481NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("PHYS481NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("PHYS481NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("PHYS481NanoTraditionalPlan")[i];
        if (PHYS481NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS481NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine176());
      that.addLine(getLine177());
     that.highlightElement(PHYS481NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS481NanoTraditionalPlan", "NaturalSciences");
      PHYS481NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine176());
      that.removeLine(getLine177());
     that.unHighlightElement(PHYS481NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS481NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS481NanoTraditionalPlanelement, category);
}
      PHYS481NanoTraditionalPlanflag=false
  }
};
$scope.ProgramTechnicalElectiveNanoTraditionalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveNanoTraditionalPlan0Time <= 200) { 
        ProgramTechnicalElectiveNanoTraditionalPlan0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveNanoTraditionalPlan0Time = currentTime;
  var ProgramTechnicalElectiveNanoTraditionalPlan0element = document.getElementById("ProgramTechnicalElectiveNanoTraditionalPlan0");
 if (!ProgramTechnicalElectiveNanoTraditionalPlan0flag) {
     if (that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan0").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan0")[i];
        if (ProgramTechnicalElectiveNanoTraditionalPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveNanoTraditionalPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveNanoTraditionalPlan0element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveNanoTraditionalPlan0", "PROG");
      ProgramTechnicalElectiveNanoTraditionalPlan0flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveNanoTraditionalPlan0element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveNanoTraditionalPlan0", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveNanoTraditionalPlan0element, category);
}
      ProgramTechnicalElectiveNanoTraditionalPlan0flag=false
  }
};
$scope.BIOCH200NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - BIOCH200NanoTraditionalPlanTime <= 200) { 
        BIOCH200NanoTraditionalPlanTime = currentTime;
        return;
    }
BIOCH200NanoTraditionalPlanTime = currentTime;
  var BIOCH200NanoTraditionalPlanelement = document.getElementById("BIOCH200NanoTraditionalPlan");
 if (!BIOCH200NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("BIOCH200NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("BIOCH200NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("BIOCH200NanoTraditionalPlan")[i];
        if (BIOCH200NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(BIOCH200NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine178());
     that.highlightElement(BIOCH200NanoTraditionalPlanelement, "course");
     that.addToClicked("BIOCH200NanoTraditionalPlan", "course");
      BIOCH200NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine178());
     that.unHighlightElement(BIOCH200NanoTraditionalPlanelement, "course");
     var category = that.removeFromClicked("BIOCH200NanoTraditionalPlan", "course");
  if (category != "") { 
     that.highlightElement(BIOCH200NanoTraditionalPlanelement, category);
}
      BIOCH200NanoTraditionalPlanflag=false
  }
};
$scope.ECE455NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE455NanoTraditionalPlanTime <= 200) { 
        ECE455NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE455NanoTraditionalPlanTime = currentTime;
  var ECE455NanoTraditionalPlanelement = document.getElementById("ECE455NanoTraditionalPlan");
 if (!ECE455NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE455NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE455NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE455NanoTraditionalPlan")[i];
        if (ECE455NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE455NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine179());
     that.highlightElement(ECE455NanoTraditionalPlanelement, "course");
     that.addToClicked("ECE455NanoTraditionalPlan", "course");
      ECE455NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine179());
     that.unHighlightElement(ECE455NanoTraditionalPlanelement, "course");
     var category = that.removeFromClicked("ECE455NanoTraditionalPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE455NanoTraditionalPlanelement, category);
}
      ECE455NanoTraditionalPlanflag=false
  }
};
$scope.ECE495NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE495NanoTraditionalPlanTime <= 200) { 
        ECE495NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE495NanoTraditionalPlanTime = currentTime;
  var ECE495NanoTraditionalPlanelement = document.getElementById("ECE495NanoTraditionalPlan");
 if (!ECE495NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE495NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE495NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE495NanoTraditionalPlan")[i];
        if (ECE495NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE495NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine180());
     that.highlightElement(ECE495NanoTraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ECE495NanoTraditionalPlan", "EngineeringDesign");
      ECE495NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine180());
     that.unHighlightElement(ECE495NanoTraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE495NanoTraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE495NanoTraditionalPlanelement, category);
}
      ECE495NanoTraditionalPlanflag=false
  }
};
$scope.ENGM310NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310NanoTraditionalPlanTime <= 200) { 
        ENGM310NanoTraditionalPlanTime = currentTime;
        return;
    }
ENGM310NanoTraditionalPlanTime = currentTime;
  var ENGM310NanoTraditionalPlanelement = document.getElementById("ENGM310NanoTraditionalPlan");
 if (!ENGM310NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ENGM310NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ENGM310NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ENGM310NanoTraditionalPlan")[i];
        if (ENGM310NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM310NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGM310NanoTraditionalPlanelement, "Other");
     that.addToClicked("ENGM310NanoTraditionalPlan", "Other");
      ENGM310NanoTraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENGM310NanoTraditionalPlanelement, "Other");
     var category = that.removeFromClicked("ENGM310NanoTraditionalPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM310NanoTraditionalPlanelement, category);
}
      ENGM310NanoTraditionalPlanflag=false
  }
};
$scope.ENGM401NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401NanoTraditionalPlanTime <= 200) { 
        ENGM401NanoTraditionalPlanTime = currentTime;
        return;
    }
ENGM401NanoTraditionalPlanTime = currentTime;
  var ENGM401NanoTraditionalPlanelement = document.getElementById("ENGM401NanoTraditionalPlan");
 if (!ENGM401NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ENGM401NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ENGM401NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ENGM401NanoTraditionalPlan")[i];
        if (ENGM401NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGM401NanoTraditionalPlanelement, "Other");
     that.addToClicked("ENGM401NanoTraditionalPlan", "Other");
      ENGM401NanoTraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENGM401NanoTraditionalPlanelement, "Other");
     var category = that.removeFromClicked("ENGM401NanoTraditionalPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401NanoTraditionalPlanelement, category);
}
      ENGM401NanoTraditionalPlanflag=false
  }
};
$scope.ENGG400NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400NanoTraditionalPlanTime <= 200) { 
        ENGG400NanoTraditionalPlanTime = currentTime;
        return;
    }
ENGG400NanoTraditionalPlanTime = currentTime;
  var ENGG400NanoTraditionalPlanelement = document.getElementById("ENGG400NanoTraditionalPlan");
 if (!ENGG400NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ENGG400NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ENGG400NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ENGG400NanoTraditionalPlan")[i];
        if (ENGG400NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400NanoTraditionalPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG400NanoTraditionalPlan", "EngineeringProfession");
      ENGG400NanoTraditionalPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG400NanoTraditionalPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400NanoTraditionalPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400NanoTraditionalPlanelement, category);
}
      ENGG400NanoTraditionalPlanflag=false
  }
};
$scope.ITSElectiveNanoTraditionalPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveNanoTraditionalPlan0Time <= 200) { 
        ITSElectiveNanoTraditionalPlan0Time = currentTime;
        return;
    }
ITSElectiveNanoTraditionalPlan0Time = currentTime;
  var ITSElectiveNanoTraditionalPlan0element = document.getElementById("ITSElectiveNanoTraditionalPlan0");
 if (!ITSElectiveNanoTraditionalPlan0flag) {
     if (that.NanoTraditionalPlanClickedMap.get("ITSElectiveNanoTraditionalPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ITSElectiveNanoTraditionalPlan0").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ITSElectiveNanoTraditionalPlan0")[i];
        if (ITSElectiveNanoTraditionalPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveNanoTraditionalPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveNanoTraditionalPlan0element, "ITS");
     that.addToClicked("ITSElectiveNanoTraditionalPlan0", "ITS");
      ITSElectiveNanoTraditionalPlan0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveNanoTraditionalPlan0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveNanoTraditionalPlan0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveNanoTraditionalPlan0element, category);
}
      ITSElectiveNanoTraditionalPlan0flag=false
  }
};
$scope.ProgramTechnicalElectiveNanoTraditionalPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveNanoTraditionalPlan1Time <= 200) { 
        ProgramTechnicalElectiveNanoTraditionalPlan1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveNanoTraditionalPlan1Time = currentTime;
  var ProgramTechnicalElectiveNanoTraditionalPlan1element = document.getElementById("ProgramTechnicalElectiveNanoTraditionalPlan1");
 if (!ProgramTechnicalElectiveNanoTraditionalPlan1flag) {
     if (that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan1").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan1")[i];
        if (ProgramTechnicalElectiveNanoTraditionalPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveNanoTraditionalPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveNanoTraditionalPlan1element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveNanoTraditionalPlan1", "PROG");
      ProgramTechnicalElectiveNanoTraditionalPlan1flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveNanoTraditionalPlan1element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveNanoTraditionalPlan1", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveNanoTraditionalPlan1element, category);
}
      ProgramTechnicalElectiveNanoTraditionalPlan1flag=false
  }
};
$scope.CHEM103NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("CHEM103NanoTraditionalPlandesc");
 if (!CHEM103NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103NanoTraditionalPlanrflag=false
  }
};
$scope.ENGG100NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG100NanoTraditionalPlandesc");
 if (!ENGG100NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100NanoTraditionalPlanrflag=false
  }
};
$scope.ENGG130NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG130NanoTraditionalPlandesc");
 if (!ENGG130NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130NanoTraditionalPlanrflag=false
  }
};
$scope.ENGL199NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGL199NanoTraditionalPlandesc");
 if (!ENGL199NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199NanoTraditionalPlanrflag=false
  }
};
$scope.MATH100NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH100NanoTraditionalPlandesc");
 if (!MATH100NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100NanoTraditionalPlanrflag=false
  }
};
$scope.PHYS130NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS130NanoTraditionalPlandesc");
 if (!PHYS130NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130NanoTraditionalPlanrflag=false
  }
};
$scope.CHEM105NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("CHEM105NanoTraditionalPlandesc");
 if (!CHEM105NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105NanoTraditionalPlanrflag=false
  }
};
$scope.ENCMP100NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ENCMP100NanoTraditionalPlandesc");
 if (!ENCMP100NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100NanoTraditionalPlanrflag=false
  }
};
$scope.ENGG160NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG160NanoTraditionalPlandesc");
 if (!ENGG160NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160NanoTraditionalPlanrflag=false
  }
};
$scope.ENPH131NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ENPH131NanoTraditionalPlandesc");
 if (!ENPH131NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131NanoTraditionalPlanrflag=false
  }
};
$scope.MATH101NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH101NanoTraditionalPlandesc");
 if (!MATH101NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101NanoTraditionalPlanrflag=false
  }
};
$scope.MATH102NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH102NanoTraditionalPlandesc");
 if (!MATH102NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102NanoTraditionalPlanrflag=false
  }
};
$scope.ECE202NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE202NanoTraditionalPlandesc");
 if (!ECE202NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE202NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE202NanoTraditionalPlanrflag=false
  }
};
$scope.MATE201NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("MATE201NanoTraditionalPlandesc");
 if (!MATE201NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE201NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE201NanoTraditionalPlanrflag=false
  }
};
$scope.MATH201NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH201NanoTraditionalPlandesc");
 if (!MATH201NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201NanoTraditionalPlanrflag=false
  }
};
$scope.MATH209NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH209NanoTraditionalPlandesc");
 if (!MATH209NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209NanoTraditionalPlanrflag=false
  }
};
$scope.PHYS281NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS281NanoTraditionalPlandesc");
 if (!PHYS281NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS281NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS281NanoTraditionalPlanrflag=false
  }
};
$scope.PHYS292NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS292NanoTraditionalPlandesc");
 if (!PHYS292NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS292NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS292NanoTraditionalPlanrflag=false
  }
};
$scope.ComplementaryElectiveNanoTraditionalPlan0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveNanoTraditionalPlan0desc");
 if (!ComplementaryElectiveNanoTraditionalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveNanoTraditionalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveNanoTraditionalPlan0rflag=false
  }
};
$scope.CHE243NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("CHE243NanoTraditionalPlandesc");
 if (!CHE243NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243NanoTraditionalPlanrflag=false
  }
};
$scope.ECE203NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE203NanoTraditionalPlandesc");
 if (!ECE203NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE203NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE203NanoTraditionalPlanrflag=false
  }
};
$scope.ECE240NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE240NanoTraditionalPlandesc");
 if (!ECE240NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE240NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE240NanoTraditionalPlanrflag=false
  }
};
$scope.PHYS244NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS244NanoTraditionalPlandesc");
 if (!PHYS244NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS244NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS244NanoTraditionalPlanrflag=false
  }
};
$scope.PHYS271NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS271NanoTraditionalPlandesc");
 if (!PHYS271NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS271NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS271NanoTraditionalPlanrflag=false
  }
};
$scope.PHYS292NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS292NanoTraditionalPlandesc");
 if (!PHYS292NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS292NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS292NanoTraditionalPlanrflag=false
  }
};
$scope.ComplementaryElectiveNanoTraditionalPlan1RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveNanoTraditionalPlan1desc");
 if (!ComplementaryElectiveNanoTraditionalPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveNanoTraditionalPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveNanoTraditionalPlan1rflag=false
  }
};
$scope.ECE210NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE210NanoTraditionalPlandesc");
 if (!ECE210NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE210NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE210NanoTraditionalPlanrflag=false
  }
};
$scope.ECE302NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE302NanoTraditionalPlandesc");
 if (!ECE302NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE302NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE302NanoTraditionalPlanrflag=false
  }
};
$scope.ECE457NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE457NanoTraditionalPlandesc");
 if (!ECE457NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE457NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE457NanoTraditionalPlanrflag=false
  }
};
$scope.ECE471NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE471NanoTraditionalPlandesc");
 if (!ECE471NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE471NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE471NanoTraditionalPlanrflag=false
  }
};
$scope.MATH311NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH311NanoTraditionalPlandesc");
 if (!MATH311NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH311NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH311NanoTraditionalPlanrflag=false
  }
};
$scope.PHYS381NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS381NanoTraditionalPlandesc");
 if (!PHYS381NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS381NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS381NanoTraditionalPlanrflag=false
  }
};
$scope.ECE303NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE303NanoTraditionalPlandesc");
 if (!ECE303NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE303NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE303NanoTraditionalPlanrflag=false
  }
};
$scope.ECE341NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE341NanoTraditionalPlandesc");
 if (!ECE341NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE341NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE341NanoTraditionalPlanrflag=false
  }
};
$scope.ECE360NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE360NanoTraditionalPlandesc");
 if (!ECE360NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE360NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE360NanoTraditionalPlanrflag=false
  }
};
$scope.ECE456NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE456NanoTraditionalPlandesc");
 if (!ECE456NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE456NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE456NanoTraditionalPlanrflag=false
  }
};
$scope.PHYS311NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS311NanoTraditionalPlandesc");
 if (!PHYS311NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS311NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS311NanoTraditionalPlanrflag=false
  }
};
$scope.PHYS372NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS372NanoTraditionalPlandesc");
 if (!PHYS372NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS372NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS372NanoTraditionalPlanrflag=false
  }
};
$scope.CHEM261NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("CHEM261NanoTraditionalPlandesc");
 if (!CHEM261NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM261NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM261NanoTraditionalPlanrflag=false
  }
};
$scope.ECE494NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE494NanoTraditionalPlandesc");
 if (!ECE494NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE494NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE494NanoTraditionalPlanrflag=false
  }
};
$scope.ENGG404NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG404NanoTraditionalPlandesc");
 if (!ENGG404NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404NanoTraditionalPlanrflag=false
  }
};
$scope.PHYS415NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS415NanoTraditionalPlandesc");
 if (!PHYS415NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS415NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS415NanoTraditionalPlanrflag=false
  }
};
$scope.PHYS481NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS481NanoTraditionalPlandesc");
 if (!PHYS481NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS481NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS481NanoTraditionalPlanrflag=false
  }
};
$scope.ProgramTechnicalElectiveNanoTraditionalPlan0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveNanoTraditionalPlan0desc");
 if (!ProgramTechnicalElectiveNanoTraditionalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveNanoTraditionalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveNanoTraditionalPlan0rflag=false
  }
};
$scope.BIOCH200NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("BIOCH200NanoTraditionalPlandesc");
 if (!BIOCH200NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      BIOCH200NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      BIOCH200NanoTraditionalPlanrflag=false
  }
};
$scope.ECE455NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE455NanoTraditionalPlandesc");
 if (!ECE455NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE455NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE455NanoTraditionalPlanrflag=false
  }
};
$scope.ECE495NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE495NanoTraditionalPlandesc");
 if (!ECE495NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE495NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE495NanoTraditionalPlanrflag=false
  }
};
$scope.ENGM310NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGM310NanoTraditionalPlandesc");
 if (!ENGM310NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310NanoTraditionalPlanrflag=false
  }
};
$scope.ENGM401NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGM401NanoTraditionalPlandesc");
 if (!ENGM401NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401NanoTraditionalPlanrflag=false
  }
};
$scope.ENGG400NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ENGG400NanoTraditionalPlandesc");
 if (!ENGG400NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400NanoTraditionalPlanrflag=false
  }
};
$scope.ITSElectiveNanoTraditionalPlan0RCListener = function () {
  var element = document.getElementById("ITSElectiveNanoTraditionalPlan0desc");
 if (!ITSElectiveNanoTraditionalPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveNanoTraditionalPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveNanoTraditionalPlan0rflag=false
  }
};
$scope.ProgramTechnicalElectiveNanoTraditionalPlan1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveNanoTraditionalPlan1desc");
 if (!ProgramTechnicalElectiveNanoTraditionalPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveNanoTraditionalPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveNanoTraditionalPlan1rflag=false
  }
};
  var CHEM103NanoCoopPlanflag = false;
  var CHEM103NanoCoopPlanrflag = false;
 var CHEM103NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("CHEM103NanoCoopPlan", []);
  var ENGG100NanoCoopPlanflag = false;
  var ENGG100NanoCoopPlanrflag = false;
 var ENGG100NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENGG100NanoCoopPlan", []);
  var ENGG130NanoCoopPlanflag = false;
  var ENGG130NanoCoopPlanrflag = false;
 var ENGG130NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENGG130NanoCoopPlan", []);
  var ENGL199NanoCoopPlanflag = false;
  var ENGL199NanoCoopPlanrflag = false;
 var ENGL199NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENGL199NanoCoopPlan", []);
  var MATH100NanoCoopPlanflag = false;
  var MATH100NanoCoopPlanrflag = false;
 var MATH100NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("MATH100NanoCoopPlan", []);
  var PHYS130NanoCoopPlanflag = false;
  var PHYS130NanoCoopPlanrflag = false;
 var PHYS130NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("PHYS130NanoCoopPlan", []);
  var CHEM105NanoCoopPlanflag = false;
  var CHEM105NanoCoopPlanrflag = false;
 var CHEM105NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("CHEM105NanoCoopPlan", []);
  var ENCMP100NanoCoopPlanflag = false;
  var ENCMP100NanoCoopPlanrflag = false;
 var ENCMP100NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENCMP100NanoCoopPlan", []);
  var ENGG160NanoCoopPlanflag = false;
  var ENGG160NanoCoopPlanrflag = false;
 var ENGG160NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENGG160NanoCoopPlan", []);
  var ENPH131NanoCoopPlanflag = false;
  var ENPH131NanoCoopPlanrflag = false;
 var ENPH131NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENPH131NanoCoopPlan", []);
  var MATH101NanoCoopPlanflag = false;
  var MATH101NanoCoopPlanrflag = false;
 var MATH101NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("MATH101NanoCoopPlan", []);
  var MATH102NanoCoopPlanflag = false;
  var MATH102NanoCoopPlanrflag = false;
 var MATH102NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("MATH102NanoCoopPlan", []);
  var ECE202NanoCoopPlanflag = false;
  var ECE202NanoCoopPlanrflag = false;
 var ECE202NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE202NanoCoopPlan", []);
  var ENGG299NanoCoopPlanflag = false;
  var ENGG299NanoCoopPlanrflag = false;
 var ENGG299NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENGG299NanoCoopPlan", []);
  var MATE201NanoCoopPlanflag = false;
  var MATE201NanoCoopPlanrflag = false;
 var MATE201NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("MATE201NanoCoopPlan", []);
  var MATH201NanoCoopPlanflag = false;
  var MATH201NanoCoopPlanrflag = false;
 var MATH201NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("MATH201NanoCoopPlan", []);
  var MATH209NanoCoopPlanflag = false;
  var MATH209NanoCoopPlanrflag = false;
 var MATH209NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("MATH209NanoCoopPlan", []);
  var PHYS281NanoCoopPlanflag = false;
  var PHYS281NanoCoopPlanrflag = false;
 var PHYS281NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("PHYS281NanoCoopPlan", []);
  var PHYS292NanoCoopPlanflag = false;
  var PHYS292NanoCoopPlanrflag = false;
 var PHYS292NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("PHYS292NanoCoopPlan", []);
  var CHE243NanoCoopPlanflag = false;
  var CHE243NanoCoopPlanrflag = false;
 var CHE243NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("CHE243NanoCoopPlan", []);
  var ECE203NanoCoopPlanflag = false;
  var ECE203NanoCoopPlanrflag = false;
 var ECE203NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE203NanoCoopPlan", []);
  var ECE240NanoCoopPlanflag = false;
  var ECE240NanoCoopPlanrflag = false;
 var ECE240NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE240NanoCoopPlan", []);
  var PHYS244NanoCoopPlanflag = false;
  var PHYS244NanoCoopPlanrflag = false;
 var PHYS244NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("PHYS244NanoCoopPlan", []);
  var PHYS271NanoCoopPlanflag = false;
  var PHYS271NanoCoopPlanrflag = false;
 var PHYS271NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("PHYS271NanoCoopPlan", []);
  var PHYS292NanoCoopPlanflag = false;
  var PHYS292NanoCoopPlanrflag = false;
 var PHYS292NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("PHYS292NanoCoopPlan", []);
  var ComplementaryElectiveNanoCoopPlan0flag = false;
  var ComplementaryElectiveNanoCoopPlan0rflag = false;
 var ComplementaryElectiveNanoCoopPlan0Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ComplementaryElectiveNanoCoopPlan0", []);
  var WKEXP901NanoCoopPlanflag = false;
  var WKEXP901NanoCoopPlanrflag = false;
 var WKEXP901NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("WKEXP901NanoCoopPlan", []);
  var ECE210NanoCoopPlanflag = false;
  var ECE210NanoCoopPlanrflag = false;
 var ECE210NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE210NanoCoopPlan", []);
  var ECE302NanoCoopPlanflag = false;
  var ECE302NanoCoopPlanrflag = false;
 var ECE302NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE302NanoCoopPlan", []);
  var ECE457NanoCoopPlanflag = false;
  var ECE457NanoCoopPlanrflag = false;
 var ECE457NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE457NanoCoopPlan", []);
  var ECE471NanoCoopPlanflag = false;
  var ECE471NanoCoopPlanrflag = false;
 var ECE471NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE471NanoCoopPlan", []);
  var MATH311NanoCoopPlanflag = false;
  var MATH311NanoCoopPlanrflag = false;
 var MATH311NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("MATH311NanoCoopPlan", []);
  var PHYS381NanoCoopPlanflag = false;
  var PHYS381NanoCoopPlanrflag = false;
 var PHYS381NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("PHYS381NanoCoopPlan", []);
  var WKEXP902NanoCoopPlanflag = false;
  var WKEXP902NanoCoopPlanrflag = false;
 var WKEXP902NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("WKEXP902NanoCoopPlan", []);
  var WKEXP903NanoCoopPlanflag = false;
  var WKEXP903NanoCoopPlanrflag = false;
 var WKEXP903NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("WKEXP903NanoCoopPlan", []);
  var WKEXP904NanoCoopPlanflag = false;
  var WKEXP904NanoCoopPlanrflag = false;
 var WKEXP904NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("WKEXP904NanoCoopPlan", []);
  var ECE303NanoCoopPlanflag = false;
  var ECE303NanoCoopPlanrflag = false;
 var ECE303NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE303NanoCoopPlan", []);
  var ECE341NanoCoopPlanflag = false;
  var ECE341NanoCoopPlanrflag = false;
 var ECE341NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE341NanoCoopPlan", []);
  var ECE360NanoCoopPlanflag = false;
  var ECE360NanoCoopPlanrflag = false;
 var ECE360NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE360NanoCoopPlan", []);
  var ECE456NanoCoopPlanflag = false;
  var ECE456NanoCoopPlanrflag = false;
 var ECE456NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE456NanoCoopPlan", []);
  var PHYS311NanoCoopPlanflag = false;
  var PHYS311NanoCoopPlanrflag = false;
 var PHYS311NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("PHYS311NanoCoopPlan", []);
  var PHYS372NanoCoopPlanflag = false;
  var PHYS372NanoCoopPlanrflag = false;
 var PHYS372NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("PHYS372NanoCoopPlan", []);
  var WKEXP905NanoCoopPlanflag = false;
  var WKEXP905NanoCoopPlanrflag = false;
 var WKEXP905NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("WKEXP905NanoCoopPlan", []);
  var CHEM261NanoCoopPlanflag = false;
  var CHEM261NanoCoopPlanrflag = false;
 var CHEM261NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("CHEM261NanoCoopPlan", []);
  var ECE494NanoCoopPlanflag = false;
  var ECE494NanoCoopPlanrflag = false;
 var ECE494NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE494NanoCoopPlan", []);
  var ENGG404NanoCoopPlanflag = false;
  var ENGG404NanoCoopPlanrflag = false;
 var ENGG404NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENGG404NanoCoopPlan", []);
  var PHYS415NanoCoopPlanflag = false;
  var PHYS415NanoCoopPlanrflag = false;
 var PHYS415NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("PHYS415NanoCoopPlan", []);
  var PHYS481NanoCoopPlanflag = false;
  var PHYS481NanoCoopPlanrflag = false;
 var PHYS481NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("PHYS481NanoCoopPlan", []);
  var ComplementaryElectiveNanoCoopPlan1flag = false;
  var ComplementaryElectiveNanoCoopPlan1rflag = false;
 var ComplementaryElectiveNanoCoopPlan1Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ComplementaryElectiveNanoCoopPlan1", []);
  var ProgramTechnicalElectiveNanoCoopPlan0flag = false;
  var ProgramTechnicalElectiveNanoCoopPlan0rflag = false;
 var ProgramTechnicalElectiveNanoCoopPlan0Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ProgramTechnicalElectiveNanoCoopPlan0", []);
  var BIOCH200NanoCoopPlanflag = false;
  var BIOCH200NanoCoopPlanrflag = false;
 var BIOCH200NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("BIOCH200NanoCoopPlan", []);
  var ECE455NanoCoopPlanflag = false;
  var ECE455NanoCoopPlanrflag = false;
 var ECE455NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE455NanoCoopPlan", []);
  var ECE495NanoCoopPlanflag = false;
  var ECE495NanoCoopPlanrflag = false;
 var ECE495NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE495NanoCoopPlan", []);
  var ENGM310NanoCoopPlanflag = false;
  var ENGM310NanoCoopPlanrflag = false;
 var ENGM310NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENGM310NanoCoopPlan", []);
  var ENGM401NanoCoopPlanflag = false;
  var ENGM401NanoCoopPlanrflag = false;
 var ENGM401NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENGM401NanoCoopPlan", []);
  var ENGG400NanoCoopPlanflag = false;
  var ENGG400NanoCoopPlanrflag = false;
 var ENGG400NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENGG400NanoCoopPlan", []);
  var ITSElectiveNanoCoopPlan0flag = false;
  var ITSElectiveNanoCoopPlan0rflag = false;
 var ITSElectiveNanoCoopPlan0Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ITSElectiveNanoCoopPlan0", []);
  var ProgramTechnicalElectiveNanoCoopPlan1flag = false;
  var ProgramTechnicalElectiveNanoCoopPlan1rflag = false;
 var ProgramTechnicalElectiveNanoCoopPlan1Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ProgramTechnicalElectiveNanoCoopPlan1", []);
$scope.CHEM103NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM103NanoCoopPlanTime <= 200) { 
        CHEM103NanoCoopPlanTime = currentTime;
        return;
    }
CHEM103NanoCoopPlanTime = currentTime;
  var CHEM103NanoCoopPlanelement = document.getElementById("CHEM103NanoCoopPlan");
 if (!CHEM103NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("CHEM103NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("CHEM103NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("CHEM103NanoCoopPlan")[i];
        if (CHEM103NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM103NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine183());
      that.addLine(getLine237());
     that.highlightElement(CHEM103NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM103NanoCoopPlan", "NaturalSciences");
      CHEM103NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine183());
      that.removeLine(getLine237());
     that.unHighlightElement(CHEM103NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM103NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM103NanoCoopPlanelement, category);
}
      CHEM103NanoCoopPlanflag=false
  }
};
$scope.ENGG100NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG100NanoCoopPlanTime <= 200) { 
        ENGG100NanoCoopPlanTime = currentTime;
        return;
    }
ENGG100NanoCoopPlanTime = currentTime;
  var ENGG100NanoCoopPlanelement = document.getElementById("ENGG100NanoCoopPlan");
 if (!ENGG100NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ENGG100NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ENGG100NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ENGG100NanoCoopPlan")[i];
        if (ENGG100NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG100NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG100NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG100NanoCoopPlan", "EngineeringProfession");
      ENGG100NanoCoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG100NanoCoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG100NanoCoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG100NanoCoopPlanelement, category);
}
      ENGG100NanoCoopPlanflag=false
  }
};
$scope.ENGG130NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG130NanoCoopPlanTime <= 200) { 
        ENGG130NanoCoopPlanTime = currentTime;
        return;
    }
ENGG130NanoCoopPlanTime = currentTime;
  var ENGG130NanoCoopPlanelement = document.getElementById("ENGG130NanoCoopPlan");
 if (!ENGG130NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ENGG130NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ENGG130NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ENGG130NanoCoopPlan")[i];
        if (ENGG130NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG130NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine181());
      that.addLine(getLine186());
     that.highlightElement(ENGG130NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130NanoCoopPlan", "NaturalSciences");
      ENGG130NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine181());
      that.removeLine(getLine186());
     that.unHighlightElement(ENGG130NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENGG130NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENGG130NanoCoopPlanelement, category);
}
      ENGG130NanoCoopPlanflag=false
  }
};
$scope.ENGL199NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGL199NanoCoopPlanTime <= 200) { 
        ENGL199NanoCoopPlanTime = currentTime;
        return;
    }
ENGL199NanoCoopPlanTime = currentTime;
  var ENGL199NanoCoopPlanelement = document.getElementById("ENGL199NanoCoopPlan");
 if (!ENGL199NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ENGL199NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ENGL199NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ENGL199NanoCoopPlan")[i];
        if (ENGL199NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGL199NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine184());
     that.highlightElement(ENGL199NanoCoopPlanelement, "Other");
     that.addToClicked("ENGL199NanoCoopPlan", "Other");
      ENGL199NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine184());
     that.unHighlightElement(ENGL199NanoCoopPlanelement, "Other");
     var category = that.removeFromClicked("ENGL199NanoCoopPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGL199NanoCoopPlanelement, category);
}
      ENGL199NanoCoopPlanflag=false
  }
};
$scope.MATH100NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH100NanoCoopPlanTime <= 200) { 
        MATH100NanoCoopPlanTime = currentTime;
        return;
    }
MATH100NanoCoopPlanTime = currentTime;
  var MATH100NanoCoopPlanelement = document.getElementById("MATH100NanoCoopPlan");
 if (!MATH100NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("MATH100NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("MATH100NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("MATH100NanoCoopPlan")[i];
        if (MATH100NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH100NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine181());
      that.addLine(getLine182());
      that.addLine(getLine185());
      that.addLine(getLine188());
      that.addLine(getLine189());
     that.highlightElement(MATH100NanoCoopPlanelement, "Math");
     that.addToClicked("MATH100NanoCoopPlan", "Math");
      MATH100NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine181());
      that.removeLine(getLine182());
      that.removeLine(getLine185());
      that.removeLine(getLine188());
      that.removeLine(getLine189());
     that.unHighlightElement(MATH100NanoCoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH100NanoCoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH100NanoCoopPlanelement, category);
}
      MATH100NanoCoopPlanflag=false
  }
};
$scope.PHYS130NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS130NanoCoopPlanTime <= 200) { 
        PHYS130NanoCoopPlanTime = currentTime;
        return;
    }
PHYS130NanoCoopPlanTime = currentTime;
  var PHYS130NanoCoopPlanelement = document.getElementById("PHYS130NanoCoopPlan");
 if (!PHYS130NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("PHYS130NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("PHYS130NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("PHYS130NanoCoopPlan")[i];
        if (PHYS130NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS130NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine182());
      that.addLine(getLine197());
      that.addLine(getLine207());
      that.addLine(getLine211());
     that.highlightElement(PHYS130NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS130NanoCoopPlan", "NaturalSciences");
      PHYS130NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine182());
      that.removeLine(getLine197());
      that.removeLine(getLine207());
      that.removeLine(getLine211());
     that.unHighlightElement(PHYS130NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS130NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS130NanoCoopPlanelement, category);
}
      PHYS130NanoCoopPlanflag=false
  }
};
$scope.CHEM105NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM105NanoCoopPlanTime <= 200) { 
        CHEM105NanoCoopPlanTime = currentTime;
        return;
    }
CHEM105NanoCoopPlanTime = currentTime;
  var CHEM105NanoCoopPlanelement = document.getElementById("CHEM105NanoCoopPlan");
 if (!CHEM105NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("CHEM105NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("CHEM105NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("CHEM105NanoCoopPlan")[i];
        if (CHEM105NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM105NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine183());
      that.addLine(getLine192());
     that.highlightElement(CHEM105NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105NanoCoopPlan", "NaturalSciences");
      CHEM105NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine183());
      that.removeLine(getLine192());
     that.unHighlightElement(CHEM105NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("CHEM105NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(CHEM105NanoCoopPlanelement, category);
}
      CHEM105NanoCoopPlanflag=false
  }
};
$scope.ENCMP100NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENCMP100NanoCoopPlanTime <= 200) { 
        ENCMP100NanoCoopPlanTime = currentTime;
        return;
    }
ENCMP100NanoCoopPlanTime = currentTime;
  var ENCMP100NanoCoopPlanelement = document.getElementById("ENCMP100NanoCoopPlan");
 if (!ENCMP100NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ENCMP100NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ENCMP100NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ENCMP100NanoCoopPlan")[i];
        if (ENCMP100NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENCMP100NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENCMP100NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100NanoCoopPlan", "NaturalSciences");
      ENCMP100NanoCoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENCMP100NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENCMP100NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENCMP100NanoCoopPlanelement, category);
}
      ENCMP100NanoCoopPlanflag=false
  }
};
$scope.ENGG160NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG160NanoCoopPlanTime <= 200) { 
        ENGG160NanoCoopPlanTime = currentTime;
        return;
    }
ENGG160NanoCoopPlanTime = currentTime;
  var ENGG160NanoCoopPlanelement = document.getElementById("ENGG160NanoCoopPlan");
 if (!ENGG160NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ENGG160NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ENGG160NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ENGG160NanoCoopPlan")[i];
        if (ENGG160NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG160NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine184());
     that.highlightElement(ENGG160NanoCoopPlanelement, "EngineeringDesign");
     that.addToClicked("ENGG160NanoCoopPlan", "EngineeringDesign");
      ENGG160NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine184());
     that.unHighlightElement(ENGG160NanoCoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ENGG160NanoCoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ENGG160NanoCoopPlanelement, category);
}
      ENGG160NanoCoopPlanflag=false
  }
};
$scope.ENPH131NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENPH131NanoCoopPlanTime <= 200) { 
        ENPH131NanoCoopPlanTime = currentTime;
        return;
    }
ENPH131NanoCoopPlanTime = currentTime;
  var ENPH131NanoCoopPlanelement = document.getElementById("ENPH131NanoCoopPlan");
 if (!ENPH131NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ENPH131NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ENPH131NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ENPH131NanoCoopPlan")[i];
        if (ENPH131NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENPH131NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine185());
      that.addLine(getLine186());
      that.addLine(getLine187());
      that.addLine(getLine196());
      that.addLine(getLine206());
      that.addLine(getLine210());
     that.highlightElement(ENPH131NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131NanoCoopPlan", "NaturalSciences");
      ENPH131NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine185());
      that.removeLine(getLine186());
      that.removeLine(getLine187());
      that.removeLine(getLine196());
      that.removeLine(getLine206());
      that.removeLine(getLine210());
     that.unHighlightElement(ENPH131NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("ENPH131NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(ENPH131NanoCoopPlanelement, category);
}
      ENPH131NanoCoopPlanflag=false
  }
};
$scope.MATH101NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH101NanoCoopPlanTime <= 200) { 
        MATH101NanoCoopPlanTime = currentTime;
        return;
    }
MATH101NanoCoopPlanTime = currentTime;
  var MATH101NanoCoopPlanelement = document.getElementById("MATH101NanoCoopPlan");
 if (!MATH101NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("MATH101NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("MATH101NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("MATH101NanoCoopPlan")[i];
        if (MATH101NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH101NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine187());
      that.addLine(getLine188());
      that.addLine(getLine190());
      that.addLine(getLine194());
      that.addLine(getLine201());
     that.highlightElement(MATH101NanoCoopPlanelement, "Math");
     that.addToClicked("MATH101NanoCoopPlan", "Math");
      MATH101NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine187());
      that.removeLine(getLine188());
      that.removeLine(getLine190());
      that.removeLine(getLine194());
      that.removeLine(getLine201());
     that.unHighlightElement(MATH101NanoCoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH101NanoCoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH101NanoCoopPlanelement, category);
}
      MATH101NanoCoopPlanflag=false
  }
};
$scope.MATH102NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH102NanoCoopPlanTime <= 200) { 
        MATH102NanoCoopPlanTime = currentTime;
        return;
    }
MATH102NanoCoopPlanTime = currentTime;
  var MATH102NanoCoopPlanelement = document.getElementById("MATH102NanoCoopPlan");
 if (!MATH102NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("MATH102NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("MATH102NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("MATH102NanoCoopPlan")[i];
        if (MATH102NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH102NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine189());
      that.addLine(getLine191());
      that.addLine(getLine195());
      that.addLine(getLine208());
      that.addLine(getLine234());
     that.highlightElement(MATH102NanoCoopPlanelement, "Math");
     that.addToClicked("MATH102NanoCoopPlan", "Math");
      MATH102NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine189());
      that.removeLine(getLine191());
      that.removeLine(getLine195());
      that.removeLine(getLine208());
      that.removeLine(getLine234());
     that.unHighlightElement(MATH102NanoCoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH102NanoCoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH102NanoCoopPlanelement, category);
}
      MATH102NanoCoopPlanflag=false
  }
};
$scope.ECE202NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE202NanoCoopPlanTime <= 200) { 
        ECE202NanoCoopPlanTime = currentTime;
        return;
    }
ECE202NanoCoopPlanTime = currentTime;
  var ECE202NanoCoopPlanelement = document.getElementById("ECE202NanoCoopPlan");
 if (!ECE202NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE202NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE202NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE202NanoCoopPlan")[i];
        if (ECE202NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE202NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine190());
      that.addLine(getLine191());
      that.addLine(getLine202());
      that.addLine(getLine204());
     that.highlightElement(ECE202NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE202NanoCoopPlan", "EngineeringSciences");
      ECE202NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine190());
      that.removeLine(getLine191());
      that.removeLine(getLine202());
      that.removeLine(getLine204());
     that.unHighlightElement(ECE202NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE202NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE202NanoCoopPlanelement, category);
}
      ECE202NanoCoopPlanflag=false
  }
};
$scope.ENGG299NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG299NanoCoopPlanTime <= 200) { 
        ENGG299NanoCoopPlanTime = currentTime;
        return;
    }
ENGG299NanoCoopPlanTime = currentTime;
  var ENGG299NanoCoopPlanelement = document.getElementById("ENGG299NanoCoopPlan");
 if (!ENGG299NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ENGG299NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ENGG299NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ENGG299NanoCoopPlan")[i];
        if (ENGG299NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG299NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine215());
     that.highlightElement(ENGG299NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG299NanoCoopPlan", "EngineeringProfession");
      ENGG299NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine215());
     that.unHighlightElement(ENGG299NanoCoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299NanoCoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299NanoCoopPlanelement, category);
}
      ENGG299NanoCoopPlanflag=false
  }
};
$scope.MATE201NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATE201NanoCoopPlanTime <= 200) { 
        MATE201NanoCoopPlanTime = currentTime;
        return;
    }
MATE201NanoCoopPlanTime = currentTime;
  var MATE201NanoCoopPlanelement = document.getElementById("MATE201NanoCoopPlan");
 if (!MATE201NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("MATE201NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("MATE201NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("MATE201NanoCoopPlan")[i];
        if (MATE201NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATE201NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine192());
     that.highlightElement(MATE201NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("MATE201NanoCoopPlan", "NaturalSciences");
      MATE201NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine192());
     that.unHighlightElement(MATE201NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("MATE201NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(MATE201NanoCoopPlanelement, category);
}
      MATE201NanoCoopPlanflag=false
  }
};
$scope.MATH201NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH201NanoCoopPlanTime <= 200) { 
        MATH201NanoCoopPlanTime = currentTime;
        return;
    }
MATH201NanoCoopPlanTime = currentTime;
  var MATH201NanoCoopPlanelement = document.getElementById("MATH201NanoCoopPlan");
 if (!MATH201NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("MATH201NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("MATH201NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("MATH201NanoCoopPlan")[i];
        if (MATH201NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH201NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine193());
      that.addLine(getLine205());
      that.addLine(getLine219());
      that.addLine(getLine235());
      that.addLine(getLine244());
     that.highlightElement(MATH201NanoCoopPlanelement, "Math");
     that.addToClicked("MATH201NanoCoopPlan", "Math");
      MATH201NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine193());
      that.removeLine(getLine205());
      that.removeLine(getLine219());
      that.removeLine(getLine235());
      that.removeLine(getLine244());
     that.unHighlightElement(MATH201NanoCoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH201NanoCoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH201NanoCoopPlanelement, category);
}
      MATH201NanoCoopPlanflag=false
  }
};
$scope.MATH209NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH209NanoCoopPlanTime <= 200) { 
        MATH209NanoCoopPlanTime = currentTime;
        return;
    }
MATH209NanoCoopPlanTime = currentTime;
  var MATH209NanoCoopPlanelement = document.getElementById("MATH209NanoCoopPlan");
 if (!MATH209NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("MATH209NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("MATH209NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("MATH209NanoCoopPlan")[i];
        if (MATH209NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH209NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine193());
      that.addLine(getLine194());
      that.addLine(getLine195());
      that.addLine(getLine198());
      that.addLine(getLine200());
      that.addLine(getLine209());
      that.addLine(getLine212());
      that.addLine(getLine214());
      that.addLine(getLine231());
     that.highlightElement(MATH209NanoCoopPlanelement, "Math");
     that.addToClicked("MATH209NanoCoopPlan", "Math");
      MATH209NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine193());
      that.removeLine(getLine194());
      that.removeLine(getLine195());
      that.removeLine(getLine198());
      that.removeLine(getLine200());
      that.removeLine(getLine209());
      that.removeLine(getLine212());
      that.removeLine(getLine214());
      that.removeLine(getLine231());
     that.unHighlightElement(MATH209NanoCoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH209NanoCoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209NanoCoopPlanelement, category);
}
      MATH209NanoCoopPlanflag=false
  }
};
$scope.PHYS281NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS281NanoCoopPlanTime <= 200) { 
        PHYS281NanoCoopPlanTime = currentTime;
        return;
    }
PHYS281NanoCoopPlanTime = currentTime;
  var PHYS281NanoCoopPlanelement = document.getElementById("PHYS281NanoCoopPlan");
 if (!PHYS281NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("PHYS281NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("PHYS281NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("PHYS281NanoCoopPlan")[i];
        if (PHYS281NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS281NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine196());
      that.addLine(getLine197());
      that.addLine(getLine198());
      that.addLine(getLine199());
      that.addLine(getLine213());
      that.addLine(getLine218());
      that.addLine(getLine233());
     that.highlightElement(PHYS281NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS281NanoCoopPlan", "NaturalSciences");
      PHYS281NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine196());
      that.removeLine(getLine197());
      that.removeLine(getLine198());
      that.removeLine(getLine199());
      that.removeLine(getLine213());
      that.removeLine(getLine218());
      that.removeLine(getLine233());
     that.unHighlightElement(PHYS281NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS281NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS281NanoCoopPlanelement, category);
}
      PHYS281NanoCoopPlanflag=false
  }
};
$scope.PHYS292NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS292NanoCoopPlanTime <= 200) { 
        PHYS292NanoCoopPlanTime = currentTime;
        return;
    }
PHYS292NanoCoopPlanTime = currentTime;
  var PHYS292NanoCoopPlanelement = document.getElementById("PHYS292NanoCoopPlan");
 if (!PHYS292NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("PHYS292NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("PHYS292NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("PHYS292NanoCoopPlan")[i];
        if (PHYS292NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS292NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine199());
      that.addLine(getLine200());
      that.addLine(getLine213());
      that.addLine(getLine214());
     that.highlightElement(PHYS292NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("PHYS292NanoCoopPlan", "EngineeringSciences");
      PHYS292NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine199());
      that.removeLine(getLine200());
      that.removeLine(getLine213());
      that.removeLine(getLine214());
     that.unHighlightElement(PHYS292NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PHYS292NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PHYS292NanoCoopPlanelement, category);
}
      PHYS292NanoCoopPlanflag=false
  }
};
$scope.CHE243NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHE243NanoCoopPlanTime <= 200) { 
        CHE243NanoCoopPlanTime = currentTime;
        return;
    }
CHE243NanoCoopPlanTime = currentTime;
  var CHE243NanoCoopPlanelement = document.getElementById("CHE243NanoCoopPlan");
 if (!CHE243NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("CHE243NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("CHE243NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("CHE243NanoCoopPlan")[i];
        if (CHE243NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHE243NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine201());
      that.addLine(getLine229());
     that.highlightElement(CHE243NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("CHE243NanoCoopPlan", "EngineeringSciences");
      CHE243NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine201());
      that.removeLine(getLine229());
     that.unHighlightElement(CHE243NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("CHE243NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(CHE243NanoCoopPlanelement, category);
}
      CHE243NanoCoopPlanflag=false
  }
};
$scope.ECE203NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE203NanoCoopPlanTime <= 200) { 
        ECE203NanoCoopPlanTime = currentTime;
        return;
    }
ECE203NanoCoopPlanTime = currentTime;
  var ECE203NanoCoopPlanelement = document.getElementById("ECE203NanoCoopPlan");
 if (!ECE203NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE203NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE203NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE203NanoCoopPlan")[i];
        if (ECE203NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE203NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine202());
      that.addLine(getLine203());
      that.addLine(getLine216());
      that.addLine(getLine226());
     that.highlightElement(ECE203NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE203NanoCoopPlan", "EngineeringSciences");
      ECE203NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine202());
      that.removeLine(getLine203());
      that.removeLine(getLine216());
      that.removeLine(getLine226());
     that.unHighlightElement(ECE203NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE203NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE203NanoCoopPlanelement, category);
}
      ECE203NanoCoopPlanflag=false
  }
};
$scope.ECE240NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE240NanoCoopPlanTime <= 200) { 
        ECE240NanoCoopPlanTime = currentTime;
        return;
    }
ECE240NanoCoopPlanTime = currentTime;
  var ECE240NanoCoopPlanelement = document.getElementById("ECE240NanoCoopPlan");
 if (!ECE240NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE240NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE240NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE240NanoCoopPlan")[i];
        if (ECE240NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE240NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine203());
      that.addLine(getLine204());
      that.addLine(getLine205());
      that.addLine(getLine224());
      that.addLine(getLine227());
     that.highlightElement(ECE240NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE240NanoCoopPlan", "EngineeringSciences");
      ECE240NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine203());
      that.removeLine(getLine204());
      that.removeLine(getLine205());
      that.removeLine(getLine224());
      that.removeLine(getLine227());
     that.unHighlightElement(ECE240NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE240NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE240NanoCoopPlanelement, category);
}
      ECE240NanoCoopPlanflag=false
  }
};
$scope.PHYS244NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS244NanoCoopPlanTime <= 200) { 
        PHYS244NanoCoopPlanTime = currentTime;
        return;
    }
PHYS244NanoCoopPlanTime = currentTime;
  var PHYS244NanoCoopPlanelement = document.getElementById("PHYS244NanoCoopPlan");
 if (!PHYS244NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("PHYS244NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("PHYS244NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("PHYS244NanoCoopPlan")[i];
        if (PHYS244NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS244NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine206());
      that.addLine(getLine207());
      that.addLine(getLine208());
      that.addLine(getLine209());
     that.highlightElement(PHYS244NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS244NanoCoopPlan", "NaturalSciences");
      PHYS244NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine206());
      that.removeLine(getLine207());
      that.removeLine(getLine208());
      that.removeLine(getLine209());
     that.unHighlightElement(PHYS244NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS244NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS244NanoCoopPlanelement, category);
}
      PHYS244NanoCoopPlanflag=false
  }
};
$scope.PHYS271NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS271NanoCoopPlanTime <= 200) { 
        PHYS271NanoCoopPlanTime = currentTime;
        return;
    }
PHYS271NanoCoopPlanTime = currentTime;
  var PHYS271NanoCoopPlanelement = document.getElementById("PHYS271NanoCoopPlan");
 if (!PHYS271NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("PHYS271NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("PHYS271NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("PHYS271NanoCoopPlan")[i];
        if (PHYS271NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS271NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine210());
      that.addLine(getLine211());
      that.addLine(getLine212());
      that.addLine(getLine230());
      that.addLine(getLine232());
     that.highlightElement(PHYS271NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS271NanoCoopPlan", "NaturalSciences");
      PHYS271NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine210());
      that.removeLine(getLine211());
      that.removeLine(getLine212());
      that.removeLine(getLine230());
      that.removeLine(getLine232());
     that.unHighlightElement(PHYS271NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS271NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS271NanoCoopPlanelement, category);
}
      PHYS271NanoCoopPlanflag=false
  }
};
$scope.PHYS292NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS292NanoCoopPlanTime <= 200) { 
        PHYS292NanoCoopPlanTime = currentTime;
        return;
    }
PHYS292NanoCoopPlanTime = currentTime;
  var PHYS292NanoCoopPlanelement = document.getElementById("PHYS292NanoCoopPlan");
 if (!PHYS292NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("PHYS292NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("PHYS292NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("PHYS292NanoCoopPlan")[i];
        if (PHYS292NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS292NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine199());
      that.addLine(getLine200());
      that.addLine(getLine213());
      that.addLine(getLine214());
     that.highlightElement(PHYS292NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("PHYS292NanoCoopPlan", "EngineeringSciences");
      PHYS292NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine199());
      that.removeLine(getLine200());
      that.removeLine(getLine213());
      that.removeLine(getLine214());
     that.unHighlightElement(PHYS292NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("PHYS292NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(PHYS292NanoCoopPlanelement, category);
}
      PHYS292NanoCoopPlanflag=false
  }
};
$scope.ComplementaryElectiveNanoCoopPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveNanoCoopPlan0Time <= 200) { 
        ComplementaryElectiveNanoCoopPlan0Time = currentTime;
        return;
    }
ComplementaryElectiveNanoCoopPlan0Time = currentTime;
  var ComplementaryElectiveNanoCoopPlan0element = document.getElementById("ComplementaryElectiveNanoCoopPlan0");
 if (!ComplementaryElectiveNanoCoopPlan0flag) {
     if (that.NanoCoopPlanClickedMap.get("ComplementaryElectiveNanoCoopPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ComplementaryElectiveNanoCoopPlan0").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ComplementaryElectiveNanoCoopPlan0")[i];
        if (ComplementaryElectiveNanoCoopPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveNanoCoopPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveNanoCoopPlan0element, "COMP");
     that.addToClicked("ComplementaryElectiveNanoCoopPlan0", "COMP");
      ComplementaryElectiveNanoCoopPlan0flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveNanoCoopPlan0element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveNanoCoopPlan0", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveNanoCoopPlan0element, category);
}
      ComplementaryElectiveNanoCoopPlan0flag=false
  }
};
$scope.WKEXP901NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP901NanoCoopPlanTime <= 200) { 
        WKEXP901NanoCoopPlanTime = currentTime;
        return;
    }
WKEXP901NanoCoopPlanTime = currentTime;
  var WKEXP901NanoCoopPlanelement = document.getElementById("WKEXP901NanoCoopPlan");
 if (!WKEXP901NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("WKEXP901NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("WKEXP901NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("WKEXP901NanoCoopPlan")[i];
        if (WKEXP901NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP901NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine215());
      that.addLine(getLine220());
     that.highlightElement(WKEXP901NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP901NanoCoopPlan", "EngineeringProfession");
      WKEXP901NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine215());
      that.removeLine(getLine220());
     that.unHighlightElement(WKEXP901NanoCoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP901NanoCoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP901NanoCoopPlanelement, category);
}
      WKEXP901NanoCoopPlanflag=false
  }
};
$scope.ECE210NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE210NanoCoopPlanTime <= 200) { 
        ECE210NanoCoopPlanTime = currentTime;
        return;
    }
ECE210NanoCoopPlanTime = currentTime;
  var ECE210NanoCoopPlanelement = document.getElementById("ECE210NanoCoopPlan");
 if (!ECE210NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE210NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE210NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE210NanoCoopPlan")[i];
        if (ECE210NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE210NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE210NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE210NanoCoopPlan", "EngineeringSciences");
      ECE210NanoCoopPlanflag=true
  }
 else {
     that.unHighlightElement(ECE210NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE210NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE210NanoCoopPlanelement, category);
}
      ECE210NanoCoopPlanflag=false
  }
};
$scope.ECE302NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE302NanoCoopPlanTime <= 200) { 
        ECE302NanoCoopPlanTime = currentTime;
        return;
    }
ECE302NanoCoopPlanTime = currentTime;
  var ECE302NanoCoopPlanelement = document.getElementById("ECE302NanoCoopPlan");
 if (!ECE302NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE302NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE302NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE302NanoCoopPlan")[i];
        if (ECE302NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE302NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine216());
      that.addLine(getLine223());
      that.addLine(getLine228());
     that.highlightElement(ECE302NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE302NanoCoopPlan", "EngineeringSciences");
      ECE302NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine216());
      that.removeLine(getLine223());
      that.removeLine(getLine228());
     that.unHighlightElement(ECE302NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE302NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE302NanoCoopPlanelement, category);
}
      ECE302NanoCoopPlanflag=false
  }
};
$scope.ECE457NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE457NanoCoopPlanTime <= 200) { 
        ECE457NanoCoopPlanTime = currentTime;
        return;
    }
ECE457NanoCoopPlanTime = currentTime;
  var ECE457NanoCoopPlanelement = document.getElementById("ECE457NanoCoopPlan");
 if (!ECE457NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE457NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE457NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE457NanoCoopPlan")[i];
        if (ECE457NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE457NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ECE457NanoCoopPlanelement, "course");
     that.addToClicked("ECE457NanoCoopPlan", "course");
      ECE457NanoCoopPlanflag=true
  }
 else {
     that.unHighlightElement(ECE457NanoCoopPlanelement, "course");
     var category = that.removeFromClicked("ECE457NanoCoopPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE457NanoCoopPlanelement, category);
}
      ECE457NanoCoopPlanflag=false
  }
};
$scope.ECE471NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE471NanoCoopPlanTime <= 200) { 
        ECE471NanoCoopPlanTime = currentTime;
        return;
    }
ECE471NanoCoopPlanTime = currentTime;
  var ECE471NanoCoopPlanelement = document.getElementById("ECE471NanoCoopPlan");
 if (!ECE471NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE471NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE471NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE471NanoCoopPlan")[i];
        if (ECE471NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE471NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine217());
     that.highlightElement(ECE471NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE471NanoCoopPlan", "EngineeringSciences");
      ECE471NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine217());
     that.unHighlightElement(ECE471NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE471NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE471NanoCoopPlanelement, category);
}
      ECE471NanoCoopPlanflag=false
  }
};
$scope.MATH311NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH311NanoCoopPlanTime <= 200) { 
        MATH311NanoCoopPlanTime = currentTime;
        return;
    }
MATH311NanoCoopPlanTime = currentTime;
  var MATH311NanoCoopPlanelement = document.getElementById("MATH311NanoCoopPlan");
 if (!MATH311NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("MATH311NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("MATH311NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("MATH311NanoCoopPlan")[i];
        if (MATH311NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH311NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine225());
     that.highlightElement(MATH311NanoCoopPlanelement, "Math");
     that.addToClicked("MATH311NanoCoopPlan", "Math");
      MATH311NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine225());
     that.unHighlightElement(MATH311NanoCoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH311NanoCoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH311NanoCoopPlanelement, category);
}
      MATH311NanoCoopPlanflag=false
  }
};
$scope.PHYS381NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS381NanoCoopPlanTime <= 200) { 
        PHYS381NanoCoopPlanTime = currentTime;
        return;
    }
PHYS381NanoCoopPlanTime = currentTime;
  var PHYS381NanoCoopPlanelement = document.getElementById("PHYS381NanoCoopPlan");
 if (!PHYS381NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("PHYS381NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("PHYS381NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("PHYS381NanoCoopPlan")[i];
        if (PHYS381NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS381NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine217());
      that.addLine(getLine218());
      that.addLine(getLine219());
      that.addLine(getLine241());
     that.highlightElement(PHYS381NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS381NanoCoopPlan", "NaturalSciences");
      PHYS381NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine217());
      that.removeLine(getLine218());
      that.removeLine(getLine219());
      that.removeLine(getLine241());
     that.unHighlightElement(PHYS381NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS381NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS381NanoCoopPlanelement, category);
}
      PHYS381NanoCoopPlanflag=false
  }
};
$scope.WKEXP902NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP902NanoCoopPlanTime <= 200) { 
        WKEXP902NanoCoopPlanTime = currentTime;
        return;
    }
WKEXP902NanoCoopPlanTime = currentTime;
  var WKEXP902NanoCoopPlanelement = document.getElementById("WKEXP902NanoCoopPlan");
 if (!WKEXP902NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("WKEXP902NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("WKEXP902NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("WKEXP902NanoCoopPlan")[i];
        if (WKEXP902NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP902NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine220());
      that.addLine(getLine221());
     that.highlightElement(WKEXP902NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP902NanoCoopPlan", "EngineeringProfession");
      WKEXP902NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine220());
      that.removeLine(getLine221());
     that.unHighlightElement(WKEXP902NanoCoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP902NanoCoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP902NanoCoopPlanelement, category);
}
      WKEXP902NanoCoopPlanflag=false
  }
};
$scope.WKEXP903NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP903NanoCoopPlanTime <= 200) { 
        WKEXP903NanoCoopPlanTime = currentTime;
        return;
    }
WKEXP903NanoCoopPlanTime = currentTime;
  var WKEXP903NanoCoopPlanelement = document.getElementById("WKEXP903NanoCoopPlan");
 if (!WKEXP903NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("WKEXP903NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("WKEXP903NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("WKEXP903NanoCoopPlan")[i];
        if (WKEXP903NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP903NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine221());
      that.addLine(getLine222());
     that.highlightElement(WKEXP903NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP903NanoCoopPlan", "EngineeringProfession");
      WKEXP903NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine221());
      that.removeLine(getLine222());
     that.unHighlightElement(WKEXP903NanoCoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP903NanoCoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP903NanoCoopPlanelement, category);
}
      WKEXP903NanoCoopPlanflag=false
  }
};
$scope.WKEXP904NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP904NanoCoopPlanTime <= 200) { 
        WKEXP904NanoCoopPlanTime = currentTime;
        return;
    }
WKEXP904NanoCoopPlanTime = currentTime;
  var WKEXP904NanoCoopPlanelement = document.getElementById("WKEXP904NanoCoopPlan");
 if (!WKEXP904NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("WKEXP904NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("WKEXP904NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("WKEXP904NanoCoopPlan")[i];
        if (WKEXP904NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP904NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine222());
      that.addLine(getLine236());
     that.highlightElement(WKEXP904NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP904NanoCoopPlan", "EngineeringProfession");
      WKEXP904NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine222());
      that.removeLine(getLine236());
     that.unHighlightElement(WKEXP904NanoCoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP904NanoCoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP904NanoCoopPlanelement, category);
}
      WKEXP904NanoCoopPlanflag=false
  }
};
$scope.ECE303NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE303NanoCoopPlanTime <= 200) { 
        ECE303NanoCoopPlanTime = currentTime;
        return;
    }
ECE303NanoCoopPlanTime = currentTime;
  var ECE303NanoCoopPlanelement = document.getElementById("ECE303NanoCoopPlan");
 if (!ECE303NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE303NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE303NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE303NanoCoopPlan")[i];
        if (ECE303NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE303NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine223());
     that.highlightElement(ECE303NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE303NanoCoopPlan", "EngineeringSciences");
      ECE303NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine223());
     that.unHighlightElement(ECE303NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE303NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE303NanoCoopPlanelement, category);
}
      ECE303NanoCoopPlanflag=false
  }
};
$scope.ECE341NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE341NanoCoopPlanTime <= 200) { 
        ECE341NanoCoopPlanTime = currentTime;
        return;
    }
ECE341NanoCoopPlanTime = currentTime;
  var ECE341NanoCoopPlanelement = document.getElementById("ECE341NanoCoopPlan");
 if (!ECE341NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE341NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE341NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE341NanoCoopPlan")[i];
        if (ECE341NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE341NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine224());
      that.addLine(getLine225());
      that.addLine(getLine240());
      that.addLine(getLine242());
     that.highlightElement(ECE341NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE341NanoCoopPlan", "EngineeringSciences");
      ECE341NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine224());
      that.removeLine(getLine225());
      that.removeLine(getLine240());
      that.removeLine(getLine242());
     that.unHighlightElement(ECE341NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE341NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE341NanoCoopPlanelement, category);
}
      ECE341NanoCoopPlanflag=false
  }
};
$scope.ECE360NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE360NanoCoopPlanTime <= 200) { 
        ECE360NanoCoopPlanTime = currentTime;
        return;
    }
ECE360NanoCoopPlanTime = currentTime;
  var ECE360NanoCoopPlanelement = document.getElementById("ECE360NanoCoopPlan");
 if (!ECE360NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE360NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE360NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE360NanoCoopPlan")[i];
        if (ECE360NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE360NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine226());
      that.addLine(getLine227());
     that.highlightElement(ECE360NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE360NanoCoopPlan", "EngineeringSciences");
      ECE360NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine226());
      that.removeLine(getLine227());
     that.unHighlightElement(ECE360NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE360NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE360NanoCoopPlanelement, category);
}
      ECE360NanoCoopPlanflag=false
  }
};
$scope.ECE456NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE456NanoCoopPlanTime <= 200) { 
        ECE456NanoCoopPlanTime = currentTime;
        return;
    }
ECE456NanoCoopPlanTime = currentTime;
  var ECE456NanoCoopPlanelement = document.getElementById("ECE456NanoCoopPlan");
 if (!ECE456NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE456NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE456NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE456NanoCoopPlan")[i];
        if (ECE456NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE456NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine228());
     that.highlightElement(ECE456NanoCoopPlanelement, "course");
     that.addToClicked("ECE456NanoCoopPlan", "course");
      ECE456NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine228());
     that.unHighlightElement(ECE456NanoCoopPlanelement, "course");
     var category = that.removeFromClicked("ECE456NanoCoopPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE456NanoCoopPlanelement, category);
}
      ECE456NanoCoopPlanflag=false
  }
};
$scope.PHYS311NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS311NanoCoopPlanTime <= 200) { 
        PHYS311NanoCoopPlanTime = currentTime;
        return;
    }
PHYS311NanoCoopPlanTime = currentTime;
  var PHYS311NanoCoopPlanelement = document.getElementById("PHYS311NanoCoopPlan");
 if (!PHYS311NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("PHYS311NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("PHYS311NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("PHYS311NanoCoopPlan")[i];
        if (PHYS311NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS311NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine229());
      that.addLine(getLine230());
      that.addLine(getLine231());
      that.addLine(getLine238());
     that.highlightElement(PHYS311NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS311NanoCoopPlan", "NaturalSciences");
      PHYS311NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine229());
      that.removeLine(getLine230());
      that.removeLine(getLine231());
      that.removeLine(getLine238());
     that.unHighlightElement(PHYS311NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS311NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS311NanoCoopPlanelement, category);
}
      PHYS311NanoCoopPlanflag=false
  }
};
$scope.PHYS372NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS372NanoCoopPlanTime <= 200) { 
        PHYS372NanoCoopPlanTime = currentTime;
        return;
    }
PHYS372NanoCoopPlanTime = currentTime;
  var PHYS372NanoCoopPlanelement = document.getElementById("PHYS372NanoCoopPlan");
 if (!PHYS372NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("PHYS372NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("PHYS372NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("PHYS372NanoCoopPlan")[i];
        if (PHYS372NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS372NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine232());
      that.addLine(getLine233());
      that.addLine(getLine234());
      that.addLine(getLine235());
      that.addLine(getLine239());
     that.highlightElement(PHYS372NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS372NanoCoopPlan", "NaturalSciences");
      PHYS372NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine232());
      that.removeLine(getLine233());
      that.removeLine(getLine234());
      that.removeLine(getLine235());
      that.removeLine(getLine239());
     that.unHighlightElement(PHYS372NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS372NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS372NanoCoopPlanelement, category);
}
      PHYS372NanoCoopPlanflag=false
  }
};
$scope.WKEXP905NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - WKEXP905NanoCoopPlanTime <= 200) { 
        WKEXP905NanoCoopPlanTime = currentTime;
        return;
    }
WKEXP905NanoCoopPlanTime = currentTime;
  var WKEXP905NanoCoopPlanelement = document.getElementById("WKEXP905NanoCoopPlan");
 if (!WKEXP905NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("WKEXP905NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("WKEXP905NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("WKEXP905NanoCoopPlan")[i];
        if (WKEXP905NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(WKEXP905NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine236());
     that.highlightElement(WKEXP905NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP905NanoCoopPlan", "EngineeringProfession");
      WKEXP905NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine236());
     that.unHighlightElement(WKEXP905NanoCoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP905NanoCoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP905NanoCoopPlanelement, category);
}
      WKEXP905NanoCoopPlanflag=false
  }
};
$scope.CHEM261NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - CHEM261NanoCoopPlanTime <= 200) { 
        CHEM261NanoCoopPlanTime = currentTime;
        return;
    }
CHEM261NanoCoopPlanTime = currentTime;
  var CHEM261NanoCoopPlanelement = document.getElementById("CHEM261NanoCoopPlan");
 if (!CHEM261NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("CHEM261NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("CHEM261NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("CHEM261NanoCoopPlan")[i];
        if (CHEM261NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(CHEM261NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine237());
      that.addLine(getLine243());
     that.highlightElement(CHEM261NanoCoopPlanelement, "course");
     that.addToClicked("CHEM261NanoCoopPlan", "course");
      CHEM261NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine237());
      that.removeLine(getLine243());
     that.unHighlightElement(CHEM261NanoCoopPlanelement, "course");
     var category = that.removeFromClicked("CHEM261NanoCoopPlan", "course");
  if (category != "") { 
     that.highlightElement(CHEM261NanoCoopPlanelement, category);
}
      CHEM261NanoCoopPlanflag=false
  }
};
$scope.ECE494NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE494NanoCoopPlanTime <= 200) { 
        ECE494NanoCoopPlanTime = currentTime;
        return;
    }
ECE494NanoCoopPlanTime = currentTime;
  var ECE494NanoCoopPlanelement = document.getElementById("ECE494NanoCoopPlan");
 if (!ECE494NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE494NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE494NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE494NanoCoopPlan")[i];
        if (ECE494NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE494NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine245());
     that.highlightElement(ECE494NanoCoopPlanelement, "EngineeringDesign");
     that.addToClicked("ECE494NanoCoopPlan", "EngineeringDesign");
      ECE494NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine245());
     that.unHighlightElement(ECE494NanoCoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE494NanoCoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE494NanoCoopPlanelement, category);
}
      ECE494NanoCoopPlanflag=false
  }
};
$scope.ENGG404NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG404NanoCoopPlanTime <= 200) { 
        ENGG404NanoCoopPlanTime = currentTime;
        return;
    }
ENGG404NanoCoopPlanTime = currentTime;
  var ENGG404NanoCoopPlanelement = document.getElementById("ENGG404NanoCoopPlan");
 if (!ENGG404NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ENGG404NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ENGG404NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ENGG404NanoCoopPlan")[i];
        if (ENGG404NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG404NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG404NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG404NanoCoopPlan", "EngineeringProfession");
      ENGG404NanoCoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG404NanoCoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG404NanoCoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG404NanoCoopPlanelement, category);
}
      ENGG404NanoCoopPlanflag=false
  }
};
$scope.PHYS415NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS415NanoCoopPlanTime <= 200) { 
        PHYS415NanoCoopPlanTime = currentTime;
        return;
    }
PHYS415NanoCoopPlanTime = currentTime;
  var PHYS415NanoCoopPlanelement = document.getElementById("PHYS415NanoCoopPlan");
 if (!PHYS415NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("PHYS415NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("PHYS415NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("PHYS415NanoCoopPlan")[i];
        if (PHYS415NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS415NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine238());
      that.addLine(getLine239());
      that.addLine(getLine240());
     that.highlightElement(PHYS415NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS415NanoCoopPlan", "NaturalSciences");
      PHYS415NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine238());
      that.removeLine(getLine239());
      that.removeLine(getLine240());
     that.unHighlightElement(PHYS415NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS415NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS415NanoCoopPlanelement, category);
}
      PHYS415NanoCoopPlanflag=false
  }
};
$scope.PHYS481NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS481NanoCoopPlanTime <= 200) { 
        PHYS481NanoCoopPlanTime = currentTime;
        return;
    }
PHYS481NanoCoopPlanTime = currentTime;
  var PHYS481NanoCoopPlanelement = document.getElementById("PHYS481NanoCoopPlan");
 if (!PHYS481NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("PHYS481NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("PHYS481NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("PHYS481NanoCoopPlan")[i];
        if (PHYS481NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS481NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine241());
      that.addLine(getLine242());
     that.highlightElement(PHYS481NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS481NanoCoopPlan", "NaturalSciences");
      PHYS481NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine241());
      that.removeLine(getLine242());
     that.unHighlightElement(PHYS481NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS481NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS481NanoCoopPlanelement, category);
}
      PHYS481NanoCoopPlanflag=false
  }
};
$scope.ComplementaryElectiveNanoCoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ComplementaryElectiveNanoCoopPlan1Time <= 200) { 
        ComplementaryElectiveNanoCoopPlan1Time = currentTime;
        return;
    }
ComplementaryElectiveNanoCoopPlan1Time = currentTime;
  var ComplementaryElectiveNanoCoopPlan1element = document.getElementById("ComplementaryElectiveNanoCoopPlan1");
 if (!ComplementaryElectiveNanoCoopPlan1flag) {
     if (that.NanoCoopPlanClickedMap.get("ComplementaryElectiveNanoCoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ComplementaryElectiveNanoCoopPlan1").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ComplementaryElectiveNanoCoopPlan1")[i];
        if (ComplementaryElectiveNanoCoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ComplementaryElectiveNanoCoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ComplementaryElectiveNanoCoopPlan1element, "COMP");
     that.addToClicked("ComplementaryElectiveNanoCoopPlan1", "COMP");
      ComplementaryElectiveNanoCoopPlan1flag=true
  }
 else {
     that.unHighlightElement(ComplementaryElectiveNanoCoopPlan1element, "COMP");
     var category = that.removeFromClicked("ComplementaryElectiveNanoCoopPlan1", "COMP");
  if (category != "") { 
     that.highlightElement(ComplementaryElectiveNanoCoopPlan1element, category);
}
      ComplementaryElectiveNanoCoopPlan1flag=false
  }
};
$scope.ProgramTechnicalElectiveNanoCoopPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveNanoCoopPlan0Time <= 200) { 
        ProgramTechnicalElectiveNanoCoopPlan0Time = currentTime;
        return;
    }
ProgramTechnicalElectiveNanoCoopPlan0Time = currentTime;
  var ProgramTechnicalElectiveNanoCoopPlan0element = document.getElementById("ProgramTechnicalElectiveNanoCoopPlan0");
 if (!ProgramTechnicalElectiveNanoCoopPlan0flag) {
     if (that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan0").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan0")[i];
        if (ProgramTechnicalElectiveNanoCoopPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveNanoCoopPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveNanoCoopPlan0element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveNanoCoopPlan0", "PROG");
      ProgramTechnicalElectiveNanoCoopPlan0flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveNanoCoopPlan0element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveNanoCoopPlan0", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveNanoCoopPlan0element, category);
}
      ProgramTechnicalElectiveNanoCoopPlan0flag=false
  }
};
$scope.BIOCH200NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - BIOCH200NanoCoopPlanTime <= 200) { 
        BIOCH200NanoCoopPlanTime = currentTime;
        return;
    }
BIOCH200NanoCoopPlanTime = currentTime;
  var BIOCH200NanoCoopPlanelement = document.getElementById("BIOCH200NanoCoopPlan");
 if (!BIOCH200NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("BIOCH200NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("BIOCH200NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("BIOCH200NanoCoopPlan")[i];
        if (BIOCH200NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(BIOCH200NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine243());
     that.highlightElement(BIOCH200NanoCoopPlanelement, "course");
     that.addToClicked("BIOCH200NanoCoopPlan", "course");
      BIOCH200NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine243());
     that.unHighlightElement(BIOCH200NanoCoopPlanelement, "course");
     var category = that.removeFromClicked("BIOCH200NanoCoopPlan", "course");
  if (category != "") { 
     that.highlightElement(BIOCH200NanoCoopPlanelement, category);
}
      BIOCH200NanoCoopPlanflag=false
  }
};
$scope.ECE455NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE455NanoCoopPlanTime <= 200) { 
        ECE455NanoCoopPlanTime = currentTime;
        return;
    }
ECE455NanoCoopPlanTime = currentTime;
  var ECE455NanoCoopPlanelement = document.getElementById("ECE455NanoCoopPlan");
 if (!ECE455NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE455NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE455NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE455NanoCoopPlan")[i];
        if (ECE455NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE455NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine244());
     that.highlightElement(ECE455NanoCoopPlanelement, "course");
     that.addToClicked("ECE455NanoCoopPlan", "course");
      ECE455NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine244());
     that.unHighlightElement(ECE455NanoCoopPlanelement, "course");
     var category = that.removeFromClicked("ECE455NanoCoopPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE455NanoCoopPlanelement, category);
}
      ECE455NanoCoopPlanflag=false
  }
};
$scope.ECE495NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE495NanoCoopPlanTime <= 200) { 
        ECE495NanoCoopPlanTime = currentTime;
        return;
    }
ECE495NanoCoopPlanTime = currentTime;
  var ECE495NanoCoopPlanelement = document.getElementById("ECE495NanoCoopPlan");
 if (!ECE495NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE495NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE495NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE495NanoCoopPlan")[i];
        if (ECE495NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE495NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine245());
     that.highlightElement(ECE495NanoCoopPlanelement, "EngineeringDesign");
     that.addToClicked("ECE495NanoCoopPlan", "EngineeringDesign");
      ECE495NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine245());
     that.unHighlightElement(ECE495NanoCoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE495NanoCoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE495NanoCoopPlanelement, category);
}
      ECE495NanoCoopPlanflag=false
  }
};
$scope.ENGM310NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM310NanoCoopPlanTime <= 200) { 
        ENGM310NanoCoopPlanTime = currentTime;
        return;
    }
ENGM310NanoCoopPlanTime = currentTime;
  var ENGM310NanoCoopPlanelement = document.getElementById("ENGM310NanoCoopPlan");
 if (!ENGM310NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ENGM310NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ENGM310NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ENGM310NanoCoopPlan")[i];
        if (ENGM310NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM310NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGM310NanoCoopPlanelement, "Other");
     that.addToClicked("ENGM310NanoCoopPlan", "Other");
      ENGM310NanoCoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENGM310NanoCoopPlanelement, "Other");
     var category = that.removeFromClicked("ENGM310NanoCoopPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM310NanoCoopPlanelement, category);
}
      ENGM310NanoCoopPlanflag=false
  }
};
$scope.ENGM401NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGM401NanoCoopPlanTime <= 200) { 
        ENGM401NanoCoopPlanTime = currentTime;
        return;
    }
ENGM401NanoCoopPlanTime = currentTime;
  var ENGM401NanoCoopPlanelement = document.getElementById("ENGM401NanoCoopPlan");
 if (!ENGM401NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ENGM401NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ENGM401NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ENGM401NanoCoopPlan")[i];
        if (ENGM401NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGM401NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGM401NanoCoopPlanelement, "Other");
     that.addToClicked("ENGM401NanoCoopPlan", "Other");
      ENGM401NanoCoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENGM401NanoCoopPlanelement, "Other");
     var category = that.removeFromClicked("ENGM401NanoCoopPlan", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401NanoCoopPlanelement, category);
}
      ENGM401NanoCoopPlanflag=false
  }
};
$scope.ENGG400NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ENGG400NanoCoopPlanTime <= 200) { 
        ENGG400NanoCoopPlanTime = currentTime;
        return;
    }
ENGG400NanoCoopPlanTime = currentTime;
  var ENGG400NanoCoopPlanelement = document.getElementById("ENGG400NanoCoopPlan");
 if (!ENGG400NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ENGG400NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ENGG400NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ENGG400NanoCoopPlan")[i];
        if (ENGG400NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ENGG400NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ENGG400NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG400NanoCoopPlan", "EngineeringProfession");
      ENGG400NanoCoopPlanflag=true
  }
 else {
     that.unHighlightElement(ENGG400NanoCoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG400NanoCoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG400NanoCoopPlanelement, category);
}
      ENGG400NanoCoopPlanflag=false
  }
};
$scope.ITSElectiveNanoCoopPlan0Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ITSElectiveNanoCoopPlan0Time <= 200) { 
        ITSElectiveNanoCoopPlan0Time = currentTime;
        return;
    }
ITSElectiveNanoCoopPlan0Time = currentTime;
  var ITSElectiveNanoCoopPlan0element = document.getElementById("ITSElectiveNanoCoopPlan0");
 if (!ITSElectiveNanoCoopPlan0flag) {
     if (that.NanoCoopPlanClickedMap.get("ITSElectiveNanoCoopPlan0").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ITSElectiveNanoCoopPlan0").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ITSElectiveNanoCoopPlan0")[i];
        if (ITSElectiveNanoCoopPlan0element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ITSElectiveNanoCoopPlan0element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ITSElectiveNanoCoopPlan0element, "ITS");
     that.addToClicked("ITSElectiveNanoCoopPlan0", "ITS");
      ITSElectiveNanoCoopPlan0flag=true
  }
 else {
     that.unHighlightElement(ITSElectiveNanoCoopPlan0element, "ITS");
     var category = that.removeFromClicked("ITSElectiveNanoCoopPlan0", "ITS");
  if (category != "") { 
     that.highlightElement(ITSElectiveNanoCoopPlan0element, category);
}
      ITSElectiveNanoCoopPlan0flag=false
  }
};
$scope.ProgramTechnicalElectiveNanoCoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveNanoCoopPlan1Time <= 200) { 
        ProgramTechnicalElectiveNanoCoopPlan1Time = currentTime;
        return;
    }
ProgramTechnicalElectiveNanoCoopPlan1Time = currentTime;
  var ProgramTechnicalElectiveNanoCoopPlan1element = document.getElementById("ProgramTechnicalElectiveNanoCoopPlan1");
 if (!ProgramTechnicalElectiveNanoCoopPlan1flag) {
     if (that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan1").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan1")[i];
        if (ProgramTechnicalElectiveNanoCoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveNanoCoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveNanoCoopPlan1element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveNanoCoopPlan1", "PROG");
      ProgramTechnicalElectiveNanoCoopPlan1flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveNanoCoopPlan1element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveNanoCoopPlan1", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveNanoCoopPlan1element, category);
}
      ProgramTechnicalElectiveNanoCoopPlan1flag=false
  }
};
$scope.CHEM103NanoCoopPlanRCListener = function () {
  var element = document.getElementById("CHEM103NanoCoopPlandesc");
 if (!CHEM103NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM103NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM103NanoCoopPlanrflag=false
  }
};
$scope.ENGG100NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ENGG100NanoCoopPlandesc");
 if (!ENGG100NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG100NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG100NanoCoopPlanrflag=false
  }
};
$scope.ENGG130NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ENGG130NanoCoopPlandesc");
 if (!ENGG130NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG130NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG130NanoCoopPlanrflag=false
  }
};
$scope.ENGL199NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ENGL199NanoCoopPlandesc");
 if (!ENGL199NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGL199NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGL199NanoCoopPlanrflag=false
  }
};
$scope.MATH100NanoCoopPlanRCListener = function () {
  var element = document.getElementById("MATH100NanoCoopPlandesc");
 if (!MATH100NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH100NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH100NanoCoopPlanrflag=false
  }
};
$scope.PHYS130NanoCoopPlanRCListener = function () {
  var element = document.getElementById("PHYS130NanoCoopPlandesc");
 if (!PHYS130NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS130NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS130NanoCoopPlanrflag=false
  }
};
$scope.CHEM105NanoCoopPlanRCListener = function () {
  var element = document.getElementById("CHEM105NanoCoopPlandesc");
 if (!CHEM105NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM105NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM105NanoCoopPlanrflag=false
  }
};
$scope.ENCMP100NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ENCMP100NanoCoopPlandesc");
 if (!ENCMP100NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENCMP100NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENCMP100NanoCoopPlanrflag=false
  }
};
$scope.ENGG160NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ENGG160NanoCoopPlandesc");
 if (!ENGG160NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG160NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG160NanoCoopPlanrflag=false
  }
};
$scope.ENPH131NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ENPH131NanoCoopPlandesc");
 if (!ENPH131NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENPH131NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENPH131NanoCoopPlanrflag=false
  }
};
$scope.MATH101NanoCoopPlanRCListener = function () {
  var element = document.getElementById("MATH101NanoCoopPlandesc");
 if (!MATH101NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH101NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH101NanoCoopPlanrflag=false
  }
};
$scope.MATH102NanoCoopPlanRCListener = function () {
  var element = document.getElementById("MATH102NanoCoopPlandesc");
 if (!MATH102NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH102NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH102NanoCoopPlanrflag=false
  }
};
$scope.ECE202NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE202NanoCoopPlandesc");
 if (!ECE202NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE202NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE202NanoCoopPlanrflag=false
  }
};
$scope.ENGG299NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ENGG299NanoCoopPlandesc");
 if (!ENGG299NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG299NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG299NanoCoopPlanrflag=false
  }
};
$scope.MATE201NanoCoopPlanRCListener = function () {
  var element = document.getElementById("MATE201NanoCoopPlandesc");
 if (!MATE201NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATE201NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATE201NanoCoopPlanrflag=false
  }
};
$scope.MATH201NanoCoopPlanRCListener = function () {
  var element = document.getElementById("MATH201NanoCoopPlandesc");
 if (!MATH201NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH201NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH201NanoCoopPlanrflag=false
  }
};
$scope.MATH209NanoCoopPlanRCListener = function () {
  var element = document.getElementById("MATH209NanoCoopPlandesc");
 if (!MATH209NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH209NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH209NanoCoopPlanrflag=false
  }
};
$scope.PHYS281NanoCoopPlanRCListener = function () {
  var element = document.getElementById("PHYS281NanoCoopPlandesc");
 if (!PHYS281NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS281NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS281NanoCoopPlanrflag=false
  }
};
$scope.PHYS292NanoCoopPlanRCListener = function () {
  var element = document.getElementById("PHYS292NanoCoopPlandesc");
 if (!PHYS292NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS292NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS292NanoCoopPlanrflag=false
  }
};
$scope.CHE243NanoCoopPlanRCListener = function () {
  var element = document.getElementById("CHE243NanoCoopPlandesc");
 if (!CHE243NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHE243NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHE243NanoCoopPlanrflag=false
  }
};
$scope.ECE203NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE203NanoCoopPlandesc");
 if (!ECE203NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE203NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE203NanoCoopPlanrflag=false
  }
};
$scope.ECE240NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE240NanoCoopPlandesc");
 if (!ECE240NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE240NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE240NanoCoopPlanrflag=false
  }
};
$scope.PHYS244NanoCoopPlanRCListener = function () {
  var element = document.getElementById("PHYS244NanoCoopPlandesc");
 if (!PHYS244NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS244NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS244NanoCoopPlanrflag=false
  }
};
$scope.PHYS271NanoCoopPlanRCListener = function () {
  var element = document.getElementById("PHYS271NanoCoopPlandesc");
 if (!PHYS271NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS271NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS271NanoCoopPlanrflag=false
  }
};
$scope.PHYS292NanoCoopPlanRCListener = function () {
  var element = document.getElementById("PHYS292NanoCoopPlandesc");
 if (!PHYS292NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS292NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS292NanoCoopPlanrflag=false
  }
};
$scope.ComplementaryElectiveNanoCoopPlan0RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveNanoCoopPlan0desc");
 if (!ComplementaryElectiveNanoCoopPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveNanoCoopPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveNanoCoopPlan0rflag=false
  }
};
$scope.WKEXP901NanoCoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP901NanoCoopPlandesc");
 if (!WKEXP901NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP901NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP901NanoCoopPlanrflag=false
  }
};
$scope.ECE210NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE210NanoCoopPlandesc");
 if (!ECE210NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE210NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE210NanoCoopPlanrflag=false
  }
};
$scope.ECE302NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE302NanoCoopPlandesc");
 if (!ECE302NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE302NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE302NanoCoopPlanrflag=false
  }
};
$scope.ECE457NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE457NanoCoopPlandesc");
 if (!ECE457NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE457NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE457NanoCoopPlanrflag=false
  }
};
$scope.ECE471NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE471NanoCoopPlandesc");
 if (!ECE471NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE471NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE471NanoCoopPlanrflag=false
  }
};
$scope.MATH311NanoCoopPlanRCListener = function () {
  var element = document.getElementById("MATH311NanoCoopPlandesc");
 if (!MATH311NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH311NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH311NanoCoopPlanrflag=false
  }
};
$scope.PHYS381NanoCoopPlanRCListener = function () {
  var element = document.getElementById("PHYS381NanoCoopPlandesc");
 if (!PHYS381NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS381NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS381NanoCoopPlanrflag=false
  }
};
$scope.WKEXP902NanoCoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP902NanoCoopPlandesc");
 if (!WKEXP902NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP902NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP902NanoCoopPlanrflag=false
  }
};
$scope.WKEXP903NanoCoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP903NanoCoopPlandesc");
 if (!WKEXP903NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP903NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP903NanoCoopPlanrflag=false
  }
};
$scope.WKEXP904NanoCoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP904NanoCoopPlandesc");
 if (!WKEXP904NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP904NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP904NanoCoopPlanrflag=false
  }
};
$scope.ECE303NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE303NanoCoopPlandesc");
 if (!ECE303NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE303NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE303NanoCoopPlanrflag=false
  }
};
$scope.ECE341NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE341NanoCoopPlandesc");
 if (!ECE341NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE341NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE341NanoCoopPlanrflag=false
  }
};
$scope.ECE360NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE360NanoCoopPlandesc");
 if (!ECE360NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE360NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE360NanoCoopPlanrflag=false
  }
};
$scope.ECE456NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE456NanoCoopPlandesc");
 if (!ECE456NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE456NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE456NanoCoopPlanrflag=false
  }
};
$scope.PHYS311NanoCoopPlanRCListener = function () {
  var element = document.getElementById("PHYS311NanoCoopPlandesc");
 if (!PHYS311NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS311NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS311NanoCoopPlanrflag=false
  }
};
$scope.PHYS372NanoCoopPlanRCListener = function () {
  var element = document.getElementById("PHYS372NanoCoopPlandesc");
 if (!PHYS372NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS372NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS372NanoCoopPlanrflag=false
  }
};
$scope.WKEXP905NanoCoopPlanRCListener = function () {
  var element = document.getElementById("WKEXP905NanoCoopPlandesc");
 if (!WKEXP905NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      WKEXP905NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      WKEXP905NanoCoopPlanrflag=false
  }
};
$scope.CHEM261NanoCoopPlanRCListener = function () {
  var element = document.getElementById("CHEM261NanoCoopPlandesc");
 if (!CHEM261NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      CHEM261NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      CHEM261NanoCoopPlanrflag=false
  }
};
$scope.ECE494NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE494NanoCoopPlandesc");
 if (!ECE494NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE494NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE494NanoCoopPlanrflag=false
  }
};
$scope.ENGG404NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ENGG404NanoCoopPlandesc");
 if (!ENGG404NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG404NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG404NanoCoopPlanrflag=false
  }
};
$scope.PHYS415NanoCoopPlanRCListener = function () {
  var element = document.getElementById("PHYS415NanoCoopPlandesc");
 if (!PHYS415NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS415NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS415NanoCoopPlanrflag=false
  }
};
$scope.PHYS481NanoCoopPlanRCListener = function () {
  var element = document.getElementById("PHYS481NanoCoopPlandesc");
 if (!PHYS481NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS481NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS481NanoCoopPlanrflag=false
  }
};
$scope.ComplementaryElectiveNanoCoopPlan1RCListener = function () {
  var element = document.getElementById("ComplementaryElectiveNanoCoopPlan1desc");
 if (!ComplementaryElectiveNanoCoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ComplementaryElectiveNanoCoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ComplementaryElectiveNanoCoopPlan1rflag=false
  }
};
$scope.ProgramTechnicalElectiveNanoCoopPlan0RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveNanoCoopPlan0desc");
 if (!ProgramTechnicalElectiveNanoCoopPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveNanoCoopPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveNanoCoopPlan0rflag=false
  }
};
$scope.BIOCH200NanoCoopPlanRCListener = function () {
  var element = document.getElementById("BIOCH200NanoCoopPlandesc");
 if (!BIOCH200NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      BIOCH200NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      BIOCH200NanoCoopPlanrflag=false
  }
};
$scope.ECE455NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE455NanoCoopPlandesc");
 if (!ECE455NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE455NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE455NanoCoopPlanrflag=false
  }
};
$scope.ECE495NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE495NanoCoopPlandesc");
 if (!ECE495NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE495NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE495NanoCoopPlanrflag=false
  }
};
$scope.ENGM310NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ENGM310NanoCoopPlandesc");
 if (!ENGM310NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM310NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM310NanoCoopPlanrflag=false
  }
};
$scope.ENGM401NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ENGM401NanoCoopPlandesc");
 if (!ENGM401NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGM401NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGM401NanoCoopPlanrflag=false
  }
};
$scope.ENGG400NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ENGG400NanoCoopPlandesc");
 if (!ENGG400NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ENGG400NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ENGG400NanoCoopPlanrflag=false
  }
};
$scope.ITSElectiveNanoCoopPlan0RCListener = function () {
  var element = document.getElementById("ITSElectiveNanoCoopPlan0desc");
 if (!ITSElectiveNanoCoopPlan0rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ITSElectiveNanoCoopPlan0rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ITSElectiveNanoCoopPlan0rflag=false
  }
};
$scope.ProgramTechnicalElectiveNanoCoopPlan1RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveNanoCoopPlan1desc");
 if (!ProgramTechnicalElectiveNanoCoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveNanoCoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveNanoCoopPlan1rflag=false
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