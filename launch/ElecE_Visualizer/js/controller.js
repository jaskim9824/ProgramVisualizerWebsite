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
this.CoopPlan1List = [];
this.CoopPlan1Clicked = [];
this.CoopPlan1LegendBtns = [];
this.CoopPlan1LegendBtnsClicked = [];
this.CoopPlan1ClickedMap = new Map();
this.CoopPlan1Terms = 13;
this.CoopPlan1MaxCourses = 8;
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
      case "CoopPlan1": 
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
  case "CoopPlan1": 
    for (let i = 0; i < this.CoopPlan1List.length; i++) {
        this.CoopPlan1List[i][0].hide(true);
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
  that.CoopPlan1LegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringProfession");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Other");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("Math");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringDesign");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("EngineeringSciences");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("PROG");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("COMP");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
  that.NanoTraditionalPlanLegendBtns.push(currbtn);
  that.NanoCoopPlanLegendBtns.push(currbtn);
  var currbtn = document.getElementById("ITS");
  that.TraditionalPlanLegendBtns.push(currbtn);
  that.CoopPlan1LegendBtns.push(currbtn);
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
    break; case "CoopPlan1":
    var index = this.CoopPlan1List.findIndex((element) => element[0] == line);
    if (index != -1) {
        this.CoopPlan1List[index][1]--
        if (this.CoopPlan1List[index][1] <= 0) {
            line.hide(false);
            this.CoopPlan1List.splice(index, 1);
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
var NaturalSciencesCoopPlan1flag = false;
var NaturalSciencesNanoTraditionalPlanflag = false;
var NaturalSciencesNanoCoopPlanflag = false;
var EngineeringProfessionTraditionalPlanflag = false;
var EngineeringProfessionCoopPlan1flag = false;
var EngineeringProfessionNanoTraditionalPlanflag = false;
var EngineeringProfessionNanoCoopPlanflag = false;
var OtherTraditionalPlanflag = false;
var OtherCoopPlan1flag = false;
var OtherNanoTraditionalPlanflag = false;
var OtherNanoCoopPlanflag = false;
var MathTraditionalPlanflag = false;
var MathCoopPlan1flag = false;
var MathNanoTraditionalPlanflag = false;
var MathNanoCoopPlanflag = false;
var EngineeringDesignTraditionalPlanflag = false;
var EngineeringDesignCoopPlan1flag = false;
var EngineeringDesignNanoTraditionalPlanflag = false;
var EngineeringDesignNanoCoopPlanflag = false;
var EngineeringSciencesTraditionalPlanflag = false;
var EngineeringSciencesCoopPlan1flag = false;
var EngineeringSciencesNanoTraditionalPlanflag = false;
var EngineeringSciencesNanoCoopPlanflag = false;
var PROGTraditionalPlanflag = false;
var PROGCoopPlan1flag = false;
var PROGNanoTraditionalPlanflag = false;
var PROGNanoCoopPlanflag = false;
var COMPTraditionalPlanflag = false;
var COMPCoopPlan1flag = false;
var COMPNanoTraditionalPlanflag = false;
var COMPNanoCoopPlanflag = false;
var ITSTraditionalPlanflag = false;
var ITSCoopPlan1flag = false;
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
 var element = document.getElementById("PHYS230TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("PHYS230TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("PHYS230TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("PHYS230TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS230TraditionalPlan", categoryName);
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
 var element = document.getElementById("PHYS230CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("PHYS230CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("PHYS230CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("PHYS230CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS230CoopPlan1", categoryName);
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
 var element = document.getElementById("PHYS230NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("PHYS230NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("PHYS230NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("PHYS230NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS230NanoTraditionalPlan", categoryName);
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
 var element = document.getElementById("PHYS230NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("PHYS230NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("PHYS230NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("PHYS230NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("PHYS230NanoCoopPlan", categoryName);
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
 var element = document.getElementById("ENGG404CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENGG404CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENGG404CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENGG404CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG404CoopPlan1", categoryName);
 var element = document.getElementById("ENGG400CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ENGG400CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ENGG400CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ENGG400CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ENGG400CoopPlan1", categoryName);
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
 var element = document.getElementById("MATH309TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("MATH309TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("MATH309TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("MATH309TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH309TraditionalPlan", categoryName);
 var element = document.getElementById("ECE342TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE342TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE342TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE342TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE342TraditionalPlan", categoryName);
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
 var element = document.getElementById("MATH201CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MATH201CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MATH201CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MATH201CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH201CoopPlan1", categoryName);
 var element = document.getElementById("MATH209CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MATH209CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MATH209CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MATH209CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH209CoopPlan1", categoryName);
 var element = document.getElementById("MATH309CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("MATH309CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("MATH309CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("MATH309CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH309CoopPlan1", categoryName);
 var element = document.getElementById("ECE342CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE342CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE342CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE342CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE342CoopPlan1", categoryName);
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
 var element = document.getElementById("MATH309NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("MATH309NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("MATH309NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("MATH309NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH309NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE342NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE342NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE342NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE342NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE342NanoTraditionalPlan", categoryName);
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
 var element = document.getElementById("MATH309NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("MATH309NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("MATH309NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("MATH309NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("MATH309NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE342NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE342NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE342NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE342NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE342NanoCoopPlan", categoryName);
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
 var element = document.getElementById("ECE312TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE312TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE312TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE312TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE312TraditionalPlan", categoryName);
 var element = document.getElementById("ECE490TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE490TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE490TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE490TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE490TraditionalPlan", categoryName);
 var element = document.getElementById("ECE491TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE491TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE491TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE491TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE491TraditionalPlan", categoryName);
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
 var element = document.getElementById("ECE312CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE312CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE312CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE312CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE312CoopPlan1", categoryName);
 var element = document.getElementById("ECE490CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE490CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE490CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE490CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE490CoopPlan1", categoryName);
 var element = document.getElementById("ECE491CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE491CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE491CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE491CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE491CoopPlan1", categoryName);
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
 var element = document.getElementById("ECE312NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE312NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE312NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE312NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE312NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE490NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE490NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE490NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE490NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE490NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE491NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE491NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE491NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE491NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE491NanoTraditionalPlan", categoryName);
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
 var element = document.getElementById("ECE312NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE312NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE312NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE312NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE312NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE490NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE490NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE490NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE490NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE490NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE491NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE491NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE491NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE491NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE491NanoCoopPlan", categoryName);
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
 var element = document.getElementById("ECE210TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE210TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE210TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE210TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE210TraditionalPlan", categoryName);
 var element = document.getElementById("ECE203TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE203TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE203TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE203TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE203TraditionalPlan", categoryName);
 var element = document.getElementById("ECE212TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE212TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE212TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE212TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE212TraditionalPlan", categoryName);
 var element = document.getElementById("ECE220TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE220TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE220TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE220TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE220TraditionalPlan", categoryName);
 var element = document.getElementById("ECE240TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE240TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE240TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE240TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE240TraditionalPlan", categoryName);
 var element = document.getElementById("ECE302TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE302TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE302TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE302TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE302TraditionalPlan", categoryName);
 var element = document.getElementById("ECE330TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE330TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE330TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE330TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE330TraditionalPlan", categoryName);
 var element = document.getElementById("ECE340TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE340TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE340TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE340TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE340TraditionalPlan", categoryName);
 var element = document.getElementById("ECE370TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE370TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE370TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE370TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE370TraditionalPlan", categoryName);
 var element = document.getElementById("ECE303TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE303TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE303TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE303TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE303TraditionalPlan", categoryName);
 var element = document.getElementById("ECE332TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE332TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE332TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE332TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE332TraditionalPlan", categoryName);
 var element = document.getElementById("ECE360TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE360TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE360TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE360TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE360TraditionalPlan", categoryName);
 var element = document.getElementById("ECE380TraditionalPlan");
                            if (this.TraditionalPlanClickedMap.get("ECE380TraditionalPlan").length > 0) {
                                var mapLen = this.TraditionalPlanClickedMap.get("ECE380TraditionalPlan").length - 1
                                var prevCate = this.TraditionalPlanClickedMap.get("ECE380TraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE380TraditionalPlan", categoryName);
       break;
      case "CoopPlan1":
 var element = document.getElementById("ECE202CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE202CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE202CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE202CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE202CoopPlan1", categoryName);
 var element = document.getElementById("ECE210CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE210CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE210CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE210CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE210CoopPlan1", categoryName);
 var element = document.getElementById("ECE203CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE203CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE203CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE203CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE203CoopPlan1", categoryName);
 var element = document.getElementById("ECE212CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE212CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE212CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE212CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE212CoopPlan1", categoryName);
 var element = document.getElementById("ECE220CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE220CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE220CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE220CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE220CoopPlan1", categoryName);
 var element = document.getElementById("ECE240CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE240CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE240CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE240CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE240CoopPlan1", categoryName);
 var element = document.getElementById("ECE302CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE302CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE302CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE302CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE302CoopPlan1", categoryName);
 var element = document.getElementById("ECE330CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE330CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE330CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE330CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE330CoopPlan1", categoryName);
 var element = document.getElementById("ECE340CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE340CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE340CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE340CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE340CoopPlan1", categoryName);
 var element = document.getElementById("ECE370CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE370CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE370CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE370CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE370CoopPlan1", categoryName);
 var element = document.getElementById("ECE303CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE303CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE303CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE303CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE303CoopPlan1", categoryName);
 var element = document.getElementById("ECE332CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE332CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE332CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE332CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE332CoopPlan1", categoryName);
 var element = document.getElementById("ECE360CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE360CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE360CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE360CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE360CoopPlan1", categoryName);
 var element = document.getElementById("ECE380CoopPlan1");
                            if (this.CoopPlan1ClickedMap.get("ECE380CoopPlan1").length > 0) {
                                var mapLen = this.CoopPlan1ClickedMap.get("ECE380CoopPlan1").length - 1
                                var prevCate = this.CoopPlan1ClickedMap.get("ECE380CoopPlan1")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE380CoopPlan1", categoryName);
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
 var element = document.getElementById("ECE210NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE210NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE210NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE210NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE210NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE203NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE203NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE203NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE203NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE203NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE212NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE212NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE212NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE212NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE212NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE220NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE220NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE220NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE220NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE220NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE240NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE240NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE240NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE240NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE240NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE302NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE302NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE302NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE302NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE302NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE340NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE340NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE340NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE340NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE340NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE370NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE370NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE370NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE370NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE370NanoTraditionalPlan", categoryName);
 var element = document.getElementById("ECE303NanoTraditionalPlan");
                            if (this.NanoTraditionalPlanClickedMap.get("ECE303NanoTraditionalPlan").length > 0) {
                                var mapLen = this.NanoTraditionalPlanClickedMap.get("ECE303NanoTraditionalPlan").length - 1
                                var prevCate = this.NanoTraditionalPlanClickedMap.get("ECE303NanoTraditionalPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE303NanoTraditionalPlan", categoryName);
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
 var element = document.getElementById("ECE210NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE210NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE210NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE210NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE210NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE203NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE203NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE203NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE203NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE203NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE212NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE212NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE212NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE212NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE212NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE220NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE220NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE220NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE220NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE220NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE240NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE240NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE240NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE240NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE240NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE302NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE302NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE302NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE302NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE302NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE340NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE340NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE340NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE340NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE340NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE370NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE370NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE370NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE370NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE370NanoCoopPlan", categoryName);
 var element = document.getElementById("ECE303NanoCoopPlan");
                            if (this.NanoCoopPlanClickedMap.get("ECE303NanoCoopPlan").length > 0) {
                                var mapLen = this.NanoCoopPlanClickedMap.get("ECE303NanoCoopPlan").length - 1
                                var prevCate = this.NanoCoopPlanClickedMap.get("ECE303NanoCoopPlan")[mapLen];
                                this.unHighlightElement(element, prevCate);
                            }
                            this.highlightElement(element, categoryName);
                            this.addToClicked("ECE303NanoCoopPlan", categoryName);
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
     var element = document.getElementById("PHYS230TraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS230TraditionalPlan", categoryName);
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
     var element = document.getElementById("PHYS230CoopPlan1");
                            var prevCate = this.removeFromClicked("PHYS230CoopPlan1", categoryName);
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
     var element = document.getElementById("PHYS230NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("PHYS230NanoTraditionalPlan", categoryName);
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
     var element = document.getElementById("PHYS230NanoCoopPlan");
                            var prevCate = this.removeFromClicked("PHYS230NanoCoopPlan", categoryName);
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
     var element = document.getElementById("ENGG404CoopPlan1");
                            var prevCate = this.removeFromClicked("ENGG404CoopPlan1", categoryName);
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
     var element = document.getElementById("MATH309TraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH309TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE342TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE342TraditionalPlan", categoryName);
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
     var element = document.getElementById("MATH201CoopPlan1");
                            var prevCate = this.removeFromClicked("MATH201CoopPlan1", categoryName);
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
     var element = document.getElementById("MATH309CoopPlan1");
                            var prevCate = this.removeFromClicked("MATH309CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE342CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE342CoopPlan1", categoryName);
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
     var element = document.getElementById("MATH309NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("MATH309NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE342NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE342NanoTraditionalPlan", categoryName);
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
     var element = document.getElementById("MATH309NanoCoopPlan");
                            var prevCate = this.removeFromClicked("MATH309NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE342NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE342NanoCoopPlan", categoryName);
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
     var element = document.getElementById("ECE312TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE312TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE490TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE490TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE491TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE491TraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE312CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE312CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE490CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE490CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE491CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE491CoopPlan1", categoryName);
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
     var element = document.getElementById("ECE312NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE312NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE490NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE490NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE491NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE491NanoTraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE312NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE312NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE490NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE490NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE491NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE491NanoCoopPlan", categoryName);
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
     var element = document.getElementById("ECE210TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE210TraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE212TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE212TraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE240TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE240TraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE330TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE330TraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE370TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE370TraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE332TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE332TraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE380TraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE380TraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
       break;
      case "CoopPlan1":
     var element = document.getElementById("ECE202CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE202CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE210CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE210CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE203CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE203CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE212CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE212CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE220CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE220CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE240CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE240CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE302CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE302CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE330CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE330CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE340CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE340CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE370CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE370CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE303CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE303CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE332CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE332CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE360CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE360CoopPlan1", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE380CoopPlan1");
                            var prevCate = this.removeFromClicked("ECE380CoopPlan1", categoryName);
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
     var element = document.getElementById("ECE210NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE210NanoTraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE212NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE212NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE220NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE220NanoTraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE302NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE302NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE340NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE340NanoTraditionalPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE370NanoTraditionalPlan");
                            var prevCate = this.removeFromClicked("ECE370NanoTraditionalPlan", categoryName);
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
     var element = document.getElementById("ECE210NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE210NanoCoopPlan", categoryName);
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
     var element = document.getElementById("ECE212NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE212NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE220NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE220NanoCoopPlan", categoryName);
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
     var element = document.getElementById("ECE302NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE302NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE340NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE340NanoCoopPlan", categoryName);
                                if (element.classList.contains(categoryName+"-highlighted")) {
                                    this.unHighlightElement(element, categoryName);
                                    if (prevCate != "") {
                                        this.highlightElement(element, prevCate);
                                    }
                                }
     var element = document.getElementById("ECE370NanoCoopPlan");
                            var prevCate = this.removeFromClicked("ECE370NanoCoopPlan", categoryName);
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
  var ECE210TraditionalPlanflag = false;
  var ECE210TraditionalPlanrflag = false;
 var ECE210TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE210TraditionalPlan", []);
  var MATH201TraditionalPlanflag = false;
  var MATH201TraditionalPlanrflag = false;
 var MATH201TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH201TraditionalPlan", []);
  var MATH209TraditionalPlanflag = false;
  var MATH209TraditionalPlanrflag = false;
 var MATH209TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH209TraditionalPlan", []);
  var ProgramTechnicalElectiveTraditionalPlan0flag = false;
  var ProgramTechnicalElectiveTraditionalPlan0rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan0", []);
  var ComplementaryElectiveTraditionalPlan0flag = false;
  var ComplementaryElectiveTraditionalPlan0rflag = false;
 var ComplementaryElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan0", []);
  var ECE203TraditionalPlanflag = false;
  var ECE203TraditionalPlanrflag = false;
 var ECE203TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE203TraditionalPlan", []);
  var ECE212TraditionalPlanflag = false;
  var ECE212TraditionalPlanrflag = false;
 var ECE212TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE212TraditionalPlan", []);
  var ECE220TraditionalPlanflag = false;
  var ECE220TraditionalPlanrflag = false;
 var ECE220TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE220TraditionalPlan", []);
  var ECE240TraditionalPlanflag = false;
  var ECE240TraditionalPlanrflag = false;
 var ECE240TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE240TraditionalPlan", []);
  var PHYS230TraditionalPlanflag = false;
  var PHYS230TraditionalPlanrflag = false;
 var PHYS230TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("PHYS230TraditionalPlan", []);
  var ComplementaryElectiveTraditionalPlan1flag = false;
  var ComplementaryElectiveTraditionalPlan1rflag = false;
 var ComplementaryElectiveTraditionalPlan1Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ComplementaryElectiveTraditionalPlan1", []);
  var ECE302TraditionalPlanflag = false;
  var ECE302TraditionalPlanrflag = false;
 var ECE302TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE302TraditionalPlan", []);
  var ECE312TraditionalPlanflag = false;
  var ECE312TraditionalPlanrflag = false;
 var ECE312TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE312TraditionalPlan", []);
  var ECE330TraditionalPlanflag = false;
  var ECE330TraditionalPlanrflag = false;
 var ECE330TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE330TraditionalPlan", []);
  var ECE340TraditionalPlanflag = false;
  var ECE340TraditionalPlanrflag = false;
 var ECE340TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE340TraditionalPlan", []);
  var ECE370TraditionalPlanflag = false;
  var ECE370TraditionalPlanrflag = false;
 var ECE370TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE370TraditionalPlan", []);
  var MATH309TraditionalPlanflag = false;
  var MATH309TraditionalPlanrflag = false;
 var MATH309TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("MATH309TraditionalPlan", []);
  var ECE303TraditionalPlanflag = false;
  var ECE303TraditionalPlanrflag = false;
 var ECE303TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE303TraditionalPlan", []);
  var ECE332TraditionalPlanflag = false;
  var ECE332TraditionalPlanrflag = false;
 var ECE332TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE332TraditionalPlan", []);
  var ECE342TraditionalPlanflag = false;
  var ECE342TraditionalPlanrflag = false;
 var ECE342TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE342TraditionalPlan", []);
  var ECE360TraditionalPlanflag = false;
  var ECE360TraditionalPlanrflag = false;
 var ECE360TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE360TraditionalPlan", []);
  var ECE380TraditionalPlanflag = false;
  var ECE380TraditionalPlanrflag = false;
 var ECE380TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE380TraditionalPlan", []);
  var ECE490TraditionalPlanflag = false;
  var ECE490TraditionalPlanrflag = false;
 var ECE490TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE490TraditionalPlan", []);
  var ENGG404TraditionalPlanflag = false;
  var ENGG404TraditionalPlanrflag = false;
 var ENGG404TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ENGG404TraditionalPlan", []);
  var ProgramTechnicalElectiveTraditionalPlan1flag = false;
  var ProgramTechnicalElectiveTraditionalPlan1rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan1Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan1", []);
  var ProgramTechnicalElectiveTraditionalPlan2flag = false;
  var ProgramTechnicalElectiveTraditionalPlan2rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan2Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan2", []);
  var ProgramTechnicalElectiveTraditionalPlan3flag = false;
  var ProgramTechnicalElectiveTraditionalPlan3rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan3Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan3", []);
  var ProgramTechnicalElectiveTraditionalPlan4flag = false;
  var ProgramTechnicalElectiveTraditionalPlan4rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan4Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan4", []);
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
  var ECE491TraditionalPlanflag = false;
  var ECE491TraditionalPlanrflag = false;
 var ECE491TraditionalPlanTime = new Date().getTime();
this.TraditionalPlanClickedMap.set("ECE491TraditionalPlan", []);
  var ITSElectiveTraditionalPlan0flag = false;
  var ITSElectiveTraditionalPlan0rflag = false;
 var ITSElectiveTraditionalPlan0Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ITSElectiveTraditionalPlan0", []);
  var ProgramTechnicalElectiveTraditionalPlan5flag = false;
  var ProgramTechnicalElectiveTraditionalPlan5rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan5Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan5", []);
  var ProgramTechnicalElectiveTraditionalPlan6flag = false;
  var ProgramTechnicalElectiveTraditionalPlan6rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan6Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan6", []);
  var ProgramTechnicalElectiveTraditionalPlan7flag = false;
  var ProgramTechnicalElectiveTraditionalPlan7rflag = false;
 var ProgramTechnicalElectiveTraditionalPlan7Time = new Date().getTime();
this.TraditionalPlanClickedMap.set("ProgramTechnicalElectiveTraditionalPlan7", []);
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
      that.addLine(getLine20());
     that.highlightElement(PHYS130TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS130TraditionalPlan", "NaturalSciences");
      PHYS130TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine1());
      that.removeLine(getLine20());
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
      that.addLine(getLine17());
     that.highlightElement(ENCMP100TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100TraditionalPlan", "NaturalSciences");
      ENCMP100TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine17());
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
     that.highlightElement(ENPH131TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131TraditionalPlan", "NaturalSciences");
      ENPH131TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine4());
      that.removeLine(getLine5());
      that.removeLine(getLine6());
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
      that.addLine(getLine12());
      that.addLine(getLine22());
     that.highlightElement(MATH101TraditionalPlanelement, "Math");
     that.addToClicked("MATH101TraditionalPlan", "Math");
      MATH101TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine6());
      that.removeLine(getLine7());
      that.removeLine(getLine9());
      that.removeLine(getLine12());
      that.removeLine(getLine22());
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
      that.addLine(getLine29());
     that.highlightElement(MATH102TraditionalPlanelement, "Math");
     that.addToClicked("MATH102TraditionalPlan", "Math");
      MATH102TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine8());
      that.removeLine(getLine10());
      that.removeLine(getLine13());
      that.removeLine(getLine29());
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
      that.addLine(getLine14());
      that.addLine(getLine18());
     that.highlightElement(ECE202TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE202TraditionalPlan", "EngineeringSciences");
      ECE202TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine9());
      that.removeLine(getLine10());
      that.removeLine(getLine14());
      that.removeLine(getLine18());
     that.unHighlightElement(ECE202TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE202TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE202TraditionalPlanelement, category);
}
      ECE202TraditionalPlanflag=false
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
      that.addLine(getLine16());
     that.highlightElement(ECE210TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE210TraditionalPlan", "EngineeringSciences");
      ECE210TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine16());
     that.unHighlightElement(ECE210TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE210TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE210TraditionalPlanelement, category);
}
      ECE210TraditionalPlanflag=false
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
      that.addLine(getLine11());
      that.addLine(getLine19());
     that.highlightElement(MATH201TraditionalPlanelement, "Math");
     that.addToClicked("MATH201TraditionalPlan", "Math");
      MATH201TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine19());
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
      that.addLine(getLine11());
      that.addLine(getLine12());
      that.addLine(getLine13());
      that.addLine(getLine30());
      that.addLine(getLine32());
      that.addLine(getLine35());
     that.highlightElement(MATH209TraditionalPlanelement, "Math");
     that.addToClicked("MATH209TraditionalPlan", "Math");
      MATH209TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine11());
      that.removeLine(getLine12());
      that.removeLine(getLine13());
      that.removeLine(getLine30());
      that.removeLine(getLine32());
      that.removeLine(getLine35());
     that.unHighlightElement(MATH209TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH209TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209TraditionalPlanelement, category);
}
      MATH209TraditionalPlanflag=false
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
      that.addLine(getLine14());
      that.addLine(getLine15());
      that.addLine(getLine23());
      that.addLine(getLine27());
      that.addLine(getLine36());
     that.highlightElement(ECE203TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE203TraditionalPlan", "EngineeringSciences");
      ECE203TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine14());
      that.removeLine(getLine15());
      that.removeLine(getLine23());
      that.removeLine(getLine27());
      that.removeLine(getLine36());
     that.unHighlightElement(ECE203TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE203TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE203TraditionalPlanelement, category);
}
      ECE203TraditionalPlanflag=false
  }
};
$scope.ECE212TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE212TraditionalPlanTime <= 200) { 
        ECE212TraditionalPlanTime = currentTime;
        return;
    }
ECE212TraditionalPlanTime = currentTime;
  var ECE212TraditionalPlanelement = document.getElementById("ECE212TraditionalPlan");
 if (!ECE212TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE212TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE212TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE212TraditionalPlan")[i];
        if (ECE212TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE212TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine16());
      that.addLine(getLine25());
     that.highlightElement(ECE212TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE212TraditionalPlan", "EngineeringSciences");
      ECE212TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine16());
      that.removeLine(getLine25());
     that.unHighlightElement(ECE212TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE212TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE212TraditionalPlanelement, category);
}
      ECE212TraditionalPlanflag=false
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
      that.addLine(getLine17());
      that.addLine(getLine24());
     that.highlightElement(ECE220TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE220TraditionalPlan", "EngineeringSciences");
      ECE220TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine17());
      that.removeLine(getLine24());
     that.unHighlightElement(ECE220TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE220TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE220TraditionalPlanelement, category);
}
      ECE220TraditionalPlanflag=false
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
      that.addLine(getLine15());
      that.addLine(getLine18());
      that.addLine(getLine19());
      that.addLine(getLine28());
      that.addLine(getLine37());
      that.addLine(getLine38());
     that.highlightElement(ECE240TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE240TraditionalPlan", "EngineeringSciences");
      ECE240TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine15());
      that.removeLine(getLine18());
      that.removeLine(getLine19());
      that.removeLine(getLine28());
      that.removeLine(getLine37());
      that.removeLine(getLine38());
     that.unHighlightElement(ECE240TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE240TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE240TraditionalPlanelement, category);
}
      ECE240TraditionalPlanflag=false
  }
};
$scope.PHYS230TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS230TraditionalPlanTime <= 200) { 
        PHYS230TraditionalPlanTime = currentTime;
        return;
    }
PHYS230TraditionalPlanTime = currentTime;
  var PHYS230TraditionalPlanelement = document.getElementById("PHYS230TraditionalPlan");
 if (!PHYS230TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("PHYS230TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("PHYS230TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("PHYS230TraditionalPlan")[i];
        if (PHYS230TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS230TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine20());
      that.addLine(getLine21());
      that.addLine(getLine22());
      that.addLine(getLine31());
     that.highlightElement(PHYS230TraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS230TraditionalPlan", "NaturalSciences");
      PHYS230TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine20());
      that.removeLine(getLine21());
      that.removeLine(getLine22());
      that.removeLine(getLine31());
     that.unHighlightElement(PHYS230TraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS230TraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS230TraditionalPlanelement, category);
}
      PHYS230TraditionalPlanflag=false
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
      that.addLine(getLine23());
      that.addLine(getLine33());
     that.highlightElement(ECE302TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE302TraditionalPlan", "EngineeringSciences");
      ECE302TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine23());
      that.removeLine(getLine33());
     that.unHighlightElement(ECE302TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE302TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE302TraditionalPlanelement, category);
}
      ECE302TraditionalPlanflag=false
  }
};
$scope.ECE312TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE312TraditionalPlanTime <= 200) { 
        ECE312TraditionalPlanTime = currentTime;
        return;
    }
ECE312TraditionalPlanTime = currentTime;
  var ECE312TraditionalPlanelement = document.getElementById("ECE312TraditionalPlan");
 if (!ECE312TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE312TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE312TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE312TraditionalPlan")[i];
        if (ECE312TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE312TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine24());
      that.addLine(getLine25());
      that.addLine(getLine26());
      that.addLine(getLine39());
     that.highlightElement(ECE312TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ECE312TraditionalPlan", "EngineeringDesign");
      ECE312TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine24());
      that.removeLine(getLine25());
      that.removeLine(getLine26());
      that.removeLine(getLine39());
     that.unHighlightElement(ECE312TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE312TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE312TraditionalPlanelement, category);
}
      ECE312TraditionalPlanflag=false
  }
};
$scope.ECE330TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE330TraditionalPlanTime <= 200) { 
        ECE330TraditionalPlanTime = currentTime;
        return;
    }
ECE330TraditionalPlanTime = currentTime;
  var ECE330TraditionalPlanelement = document.getElementById("ECE330TraditionalPlan");
 if (!ECE330TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE330TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE330TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE330TraditionalPlan")[i];
        if (ECE330TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE330TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine27());
      that.addLine(getLine34());
     that.highlightElement(ECE330TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE330TraditionalPlan", "EngineeringSciences");
      ECE330TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine27());
      that.removeLine(getLine34());
     that.unHighlightElement(ECE330TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE330TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE330TraditionalPlanelement, category);
}
      ECE330TraditionalPlanflag=false
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
      that.addLine(getLine26());
      that.addLine(getLine28());
     that.highlightElement(ECE340TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE340TraditionalPlan", "EngineeringSciences");
      ECE340TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine26());
      that.removeLine(getLine28());
     that.unHighlightElement(ECE340TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE340TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE340TraditionalPlanelement, category);
}
      ECE340TraditionalPlanflag=false
  }
};
$scope.ECE370TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE370TraditionalPlanTime <= 200) { 
        ECE370TraditionalPlanTime = currentTime;
        return;
    }
ECE370TraditionalPlanTime = currentTime;
  var ECE370TraditionalPlanelement = document.getElementById("ECE370TraditionalPlan");
 if (!ECE370TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE370TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE370TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE370TraditionalPlan")[i];
        if (ECE370TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE370TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine29());
      that.addLine(getLine30());
      that.addLine(getLine31());
     that.highlightElement(ECE370TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE370TraditionalPlan", "EngineeringSciences");
      ECE370TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine29());
      that.removeLine(getLine30());
      that.removeLine(getLine31());
     that.unHighlightElement(ECE370TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE370TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE370TraditionalPlanelement, category);
}
      ECE370TraditionalPlanflag=false
  }
};
$scope.MATH309TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH309TraditionalPlanTime <= 200) { 
        MATH309TraditionalPlanTime = currentTime;
        return;
    }
MATH309TraditionalPlanTime = currentTime;
  var MATH309TraditionalPlanelement = document.getElementById("MATH309TraditionalPlan");
 if (!MATH309TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("MATH309TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("MATH309TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("MATH309TraditionalPlan")[i];
        if (MATH309TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH309TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine32());
     that.highlightElement(MATH309TraditionalPlanelement, "Math");
     that.addToClicked("MATH309TraditionalPlan", "Math");
      MATH309TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine32());
     that.unHighlightElement(MATH309TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH309TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH309TraditionalPlanelement, category);
}
      MATH309TraditionalPlanflag=false
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
      that.addLine(getLine33());
     that.highlightElement(ECE303TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE303TraditionalPlan", "EngineeringSciences");
      ECE303TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine33());
     that.unHighlightElement(ECE303TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE303TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE303TraditionalPlanelement, category);
}
      ECE303TraditionalPlanflag=false
  }
};
$scope.ECE332TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE332TraditionalPlanTime <= 200) { 
        ECE332TraditionalPlanTime = currentTime;
        return;
    }
ECE332TraditionalPlanTime = currentTime;
  var ECE332TraditionalPlanelement = document.getElementById("ECE332TraditionalPlan");
 if (!ECE332TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE332TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE332TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE332TraditionalPlan")[i];
        if (ECE332TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE332TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine34());
     that.highlightElement(ECE332TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE332TraditionalPlan", "EngineeringSciences");
      ECE332TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine34());
     that.unHighlightElement(ECE332TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE332TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE332TraditionalPlanelement, category);
}
      ECE332TraditionalPlanflag=false
  }
};
$scope.ECE342TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE342TraditionalPlanTime <= 200) { 
        ECE342TraditionalPlanTime = currentTime;
        return;
    }
ECE342TraditionalPlanTime = currentTime;
  var ECE342TraditionalPlanelement = document.getElementById("ECE342TraditionalPlan");
 if (!ECE342TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE342TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE342TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE342TraditionalPlan")[i];
        if (ECE342TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE342TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine35());
     that.highlightElement(ECE342TraditionalPlanelement, "Math");
     that.addToClicked("ECE342TraditionalPlan", "Math");
      ECE342TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine35());
     that.unHighlightElement(ECE342TraditionalPlanelement, "Math");
     var category = that.removeFromClicked("ECE342TraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(ECE342TraditionalPlanelement, category);
}
      ECE342TraditionalPlanflag=false
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
      that.addLine(getLine36());
      that.addLine(getLine37());
     that.highlightElement(ECE360TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE360TraditionalPlan", "EngineeringSciences");
      ECE360TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine36());
      that.removeLine(getLine37());
     that.unHighlightElement(ECE360TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE360TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE360TraditionalPlanelement, category);
}
      ECE360TraditionalPlanflag=false
  }
};
$scope.ECE380TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE380TraditionalPlanTime <= 200) { 
        ECE380TraditionalPlanTime = currentTime;
        return;
    }
ECE380TraditionalPlanTime = currentTime;
  var ECE380TraditionalPlanelement = document.getElementById("ECE380TraditionalPlan");
 if (!ECE380TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE380TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE380TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE380TraditionalPlan")[i];
        if (ECE380TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE380TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine38());
     that.highlightElement(ECE380TraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE380TraditionalPlan", "EngineeringSciences");
      ECE380TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine38());
     that.unHighlightElement(ECE380TraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE380TraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE380TraditionalPlanelement, category);
}
      ECE380TraditionalPlanflag=false
  }
};
$scope.ECE490TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE490TraditionalPlanTime <= 200) { 
        ECE490TraditionalPlanTime = currentTime;
        return;
    }
ECE490TraditionalPlanTime = currentTime;
  var ECE490TraditionalPlanelement = document.getElementById("ECE490TraditionalPlan");
 if (!ECE490TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE490TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE490TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE490TraditionalPlan")[i];
        if (ECE490TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE490TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine39());
      that.addLine(getLine40());
     that.highlightElement(ECE490TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ECE490TraditionalPlan", "EngineeringDesign");
      ECE490TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine39());
      that.removeLine(getLine40());
     that.unHighlightElement(ECE490TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE490TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE490TraditionalPlanelement, category);
}
      ECE490TraditionalPlanflag=false
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
$scope.ECE491TraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE491TraditionalPlanTime <= 200) { 
        ECE491TraditionalPlanTime = currentTime;
        return;
    }
ECE491TraditionalPlanTime = currentTime;
  var ECE491TraditionalPlanelement = document.getElementById("ECE491TraditionalPlan");
 if (!ECE491TraditionalPlanflag) {
     if (that.TraditionalPlanClickedMap.get("ECE491TraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ECE491TraditionalPlan").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ECE491TraditionalPlan")[i];
        if (ECE491TraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE491TraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine40());
     that.highlightElement(ECE491TraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ECE491TraditionalPlan", "EngineeringDesign");
      ECE491TraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine40());
     that.unHighlightElement(ECE491TraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE491TraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE491TraditionalPlanelement, category);
}
      ECE491TraditionalPlanflag=false
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
$scope.ProgramTechnicalElectiveTraditionalPlan5Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan5Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan5Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan5Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan5element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan5");
 if (!ProgramTechnicalElectiveTraditionalPlan5flag) {
     if (that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan5").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan5").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan5")[i];
        if (ProgramTechnicalElectiveTraditionalPlan5element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan5element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan5element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlan5", "PROG");
      ProgramTechnicalElectiveTraditionalPlan5flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan5element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan5", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan5element, category);
}
      ProgramTechnicalElectiveTraditionalPlan5flag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan6Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan6Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan6Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan6Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan6element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan6");
 if (!ProgramTechnicalElectiveTraditionalPlan6flag) {
     if (that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan6").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan6").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan6")[i];
        if (ProgramTechnicalElectiveTraditionalPlan6element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan6element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan6element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlan6", "PROG");
      ProgramTechnicalElectiveTraditionalPlan6flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan6element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan6", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan6element, category);
}
      ProgramTechnicalElectiveTraditionalPlan6flag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan7Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveTraditionalPlan7Time <= 200) { 
        ProgramTechnicalElectiveTraditionalPlan7Time = currentTime;
        return;
    }
ProgramTechnicalElectiveTraditionalPlan7Time = currentTime;
  var ProgramTechnicalElectiveTraditionalPlan7element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan7");
 if (!ProgramTechnicalElectiveTraditionalPlan7flag) {
     if (that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan7").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan7").length; i++) { 
        var cate = that.TraditionalPlanClickedMap.get("ProgramTechnicalElectiveTraditionalPlan7")[i];
        if (ProgramTechnicalElectiveTraditionalPlan7element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan7element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan7element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveTraditionalPlan7", "PROG");
      ProgramTechnicalElectiveTraditionalPlan7flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveTraditionalPlan7element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveTraditionalPlan7", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveTraditionalPlan7element, category);
}
      ProgramTechnicalElectiveTraditionalPlan7flag=false
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
$scope.ECE212TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE212TraditionalPlandesc");
 if (!ECE212TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE212TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE212TraditionalPlanrflag=false
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
$scope.PHYS230TraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS230TraditionalPlandesc");
 if (!PHYS230TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS230TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS230TraditionalPlanrflag=false
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
$scope.ECE312TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE312TraditionalPlandesc");
 if (!ECE312TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE312TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE312TraditionalPlanrflag=false
  }
};
$scope.ECE330TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE330TraditionalPlandesc");
 if (!ECE330TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE330TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE330TraditionalPlanrflag=false
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
$scope.ECE370TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE370TraditionalPlandesc");
 if (!ECE370TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE370TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE370TraditionalPlanrflag=false
  }
};
$scope.MATH309TraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH309TraditionalPlandesc");
 if (!MATH309TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH309TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH309TraditionalPlanrflag=false
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
$scope.ECE332TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE332TraditionalPlandesc");
 if (!ECE332TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE332TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE332TraditionalPlanrflag=false
  }
};
$scope.ECE342TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE342TraditionalPlandesc");
 if (!ECE342TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE342TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE342TraditionalPlanrflag=false
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
$scope.ECE380TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE380TraditionalPlandesc");
 if (!ECE380TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE380TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE380TraditionalPlanrflag=false
  }
};
$scope.ECE490TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE490TraditionalPlandesc");
 if (!ECE490TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE490TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE490TraditionalPlanrflag=false
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
$scope.ECE491TraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE491TraditionalPlandesc");
 if (!ECE491TraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE491TraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE491TraditionalPlanrflag=false
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
$scope.ProgramTechnicalElectiveTraditionalPlan5RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan5desc");
 if (!ProgramTechnicalElectiveTraditionalPlan5rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan5rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan5rflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan6RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan6desc");
 if (!ProgramTechnicalElectiveTraditionalPlan6rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan6rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan6rflag=false
  }
};
$scope.ProgramTechnicalElectiveTraditionalPlan7RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveTraditionalPlan7desc");
 if (!ProgramTechnicalElectiveTraditionalPlan7rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveTraditionalPlan7rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveTraditionalPlan7rflag=false
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
  var ECE202CoopPlan1flag = false;
  var ECE202CoopPlan1rflag = false;
 var ECE202CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE202CoopPlan1", []);
  var ECE210CoopPlan1flag = false;
  var ECE210CoopPlan1rflag = false;
 var ECE210CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE210CoopPlan1", []);
  var ENGG299CoopPlan1flag = false;
  var ENGG299CoopPlan1rflag = false;
 var ENGG299CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGG299CoopPlan1", []);
  var MATH201CoopPlan1flag = false;
  var MATH201CoopPlan1rflag = false;
 var MATH201CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MATH201CoopPlan1", []);
  var MATH209CoopPlan1flag = false;
  var MATH209CoopPlan1rflag = false;
 var MATH209CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MATH209CoopPlan1", []);
  var ProgramTechnicalElectiveCoopPlan10flag = false;
  var ProgramTechnicalElectiveCoopPlan10rflag = false;
 var ProgramTechnicalElectiveCoopPlan10Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ProgramTechnicalElectiveCoopPlan10", []);
  var ECE203CoopPlan1flag = false;
  var ECE203CoopPlan1rflag = false;
 var ECE203CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE203CoopPlan1", []);
  var ECE212CoopPlan1flag = false;
  var ECE212CoopPlan1rflag = false;
 var ECE212CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE212CoopPlan1", []);
  var ECE220CoopPlan1flag = false;
  var ECE220CoopPlan1rflag = false;
 var ECE220CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE220CoopPlan1", []);
  var ECE240CoopPlan1flag = false;
  var ECE240CoopPlan1rflag = false;
 var ECE240CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE240CoopPlan1", []);
  var PHYS230CoopPlan1flag = false;
  var PHYS230CoopPlan1rflag = false;
 var PHYS230CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("PHYS230CoopPlan1", []);
  var ComplementaryElectiveCoopPlan10flag = false;
  var ComplementaryElectiveCoopPlan10rflag = false;
 var ComplementaryElectiveCoopPlan10Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ComplementaryElectiveCoopPlan10", []);
  var WKEXP901CoopPlan1flag = false;
  var WKEXP901CoopPlan1rflag = false;
 var WKEXP901CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("WKEXP901CoopPlan1", []);
  var ECE302CoopPlan1flag = false;
  var ECE302CoopPlan1rflag = false;
 var ECE302CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE302CoopPlan1", []);
  var ECE312CoopPlan1flag = false;
  var ECE312CoopPlan1rflag = false;
 var ECE312CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE312CoopPlan1", []);
  var ECE330CoopPlan1flag = false;
  var ECE330CoopPlan1rflag = false;
 var ECE330CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE330CoopPlan1", []);
  var ECE340CoopPlan1flag = false;
  var ECE340CoopPlan1rflag = false;
 var ECE340CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE340CoopPlan1", []);
  var ECE370CoopPlan1flag = false;
  var ECE370CoopPlan1rflag = false;
 var ECE370CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE370CoopPlan1", []);
  var MATH309CoopPlan1flag = false;
  var MATH309CoopPlan1rflag = false;
 var MATH309CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("MATH309CoopPlan1", []);
  var WKEXP902CoopPlan1flag = false;
  var WKEXP902CoopPlan1rflag = false;
 var WKEXP902CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("WKEXP902CoopPlan1", []);
  var WKEXP903CoopPlan1flag = false;
  var WKEXP903CoopPlan1rflag = false;
 var WKEXP903CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("WKEXP903CoopPlan1", []);
  var ECE303CoopPlan1flag = false;
  var ECE303CoopPlan1rflag = false;
 var ECE303CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE303CoopPlan1", []);
  var ECE332CoopPlan1flag = false;
  var ECE332CoopPlan1rflag = false;
 var ECE332CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE332CoopPlan1", []);
  var ECE342CoopPlan1flag = false;
  var ECE342CoopPlan1rflag = false;
 var ECE342CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE342CoopPlan1", []);
  var ECE360CoopPlan1flag = false;
  var ECE360CoopPlan1rflag = false;
 var ECE360CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE360CoopPlan1", []);
  var ECE380CoopPlan1flag = false;
  var ECE380CoopPlan1rflag = false;
 var ECE380CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE380CoopPlan1", []);
  var ComplementaryElectiveCoopPlan11flag = false;
  var ComplementaryElectiveCoopPlan11rflag = false;
 var ComplementaryElectiveCoopPlan11Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ComplementaryElectiveCoopPlan11", []);
  var WKEXP904CoopPlan1flag = false;
  var WKEXP904CoopPlan1rflag = false;
 var WKEXP904CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("WKEXP904CoopPlan1", []);
  var WKEXP905CoopPlan1flag = false;
  var WKEXP905CoopPlan1rflag = false;
 var WKEXP905CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("WKEXP905CoopPlan1", []);
  var ECE490CoopPlan1flag = false;
  var ECE490CoopPlan1rflag = false;
 var ECE490CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE490CoopPlan1", []);
  var ENGG404CoopPlan1flag = false;
  var ENGG404CoopPlan1rflag = false;
 var ENGG404CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGG404CoopPlan1", []);
  var ProgramTechnicalElectiveCoopPlan11flag = false;
  var ProgramTechnicalElectiveCoopPlan11rflag = false;
 var ProgramTechnicalElectiveCoopPlan11Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ProgramTechnicalElectiveCoopPlan11", []);
  var ProgramTechnicalElectiveCoopPlan12flag = false;
  var ProgramTechnicalElectiveCoopPlan12rflag = false;
 var ProgramTechnicalElectiveCoopPlan12Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ProgramTechnicalElectiveCoopPlan12", []);
  var ProgramTechnicalElectiveCoopPlan13flag = false;
  var ProgramTechnicalElectiveCoopPlan13rflag = false;
 var ProgramTechnicalElectiveCoopPlan13Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ProgramTechnicalElectiveCoopPlan13", []);
  var ProgramTechnicalElectiveCoopPlan14flag = false;
  var ProgramTechnicalElectiveCoopPlan14rflag = false;
 var ProgramTechnicalElectiveCoopPlan14Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ProgramTechnicalElectiveCoopPlan14", []);
  var ECE491CoopPlan1flag = false;
  var ECE491CoopPlan1rflag = false;
 var ECE491CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ECE491CoopPlan1", []);
  var ENGM310CoopPlan1flag = false;
  var ENGM310CoopPlan1rflag = false;
 var ENGM310CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGM310CoopPlan1", []);
  var ENGM401CoopPlan1flag = false;
  var ENGM401CoopPlan1rflag = false;
 var ENGM401CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGM401CoopPlan1", []);
  var ENGG400CoopPlan1flag = false;
  var ENGG400CoopPlan1rflag = false;
 var ENGG400CoopPlan1Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ENGG400CoopPlan1", []);
  var ProgramTechnicalElectiveCoopPlan15flag = false;
  var ProgramTechnicalElectiveCoopPlan15rflag = false;
 var ProgramTechnicalElectiveCoopPlan15Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ProgramTechnicalElectiveCoopPlan15", []);
  var ProgramTechnicalElectiveCoopPlan16flag = false;
  var ProgramTechnicalElectiveCoopPlan16rflag = false;
 var ProgramTechnicalElectiveCoopPlan16Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ProgramTechnicalElectiveCoopPlan16", []);
  var ProgramTechnicalElectiveCoopPlan17flag = false;
  var ProgramTechnicalElectiveCoopPlan17rflag = false;
 var ProgramTechnicalElectiveCoopPlan17Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ProgramTechnicalElectiveCoopPlan17", []);
  var ITSElectiveCoopPlan10flag = false;
  var ITSElectiveCoopPlan10rflag = false;
 var ITSElectiveCoopPlan10Time = new Date().getTime();
this.CoopPlan1ClickedMap.set("ITSElectiveCoopPlan10", []);
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
      that.addLine(getLine43());
     that.highlightElement(CHEM103CoopPlan1element, "NaturalSciences");
     that.addToClicked("CHEM103CoopPlan1", "NaturalSciences");
      CHEM103CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine43());
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
      that.addLine(getLine41());
      that.addLine(getLine46());
     that.highlightElement(ENGG130CoopPlan1element, "NaturalSciences");
     that.addToClicked("ENGG130CoopPlan1", "NaturalSciences");
      ENGG130CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine41());
      that.removeLine(getLine46());
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
      that.addLine(getLine44());
     that.highlightElement(ENGL199CoopPlan1element, "Other");
     that.addToClicked("ENGL199CoopPlan1", "Other");
      ENGL199CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine44());
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
      that.addLine(getLine41());
      that.addLine(getLine42());
      that.addLine(getLine45());
      that.addLine(getLine48());
      that.addLine(getLine49());
      that.addLine(getLine62());
     that.highlightElement(MATH100CoopPlan1element, "Math");
     that.addToClicked("MATH100CoopPlan1", "Math");
      MATH100CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine41());
      that.removeLine(getLine42());
      that.removeLine(getLine45());
      that.removeLine(getLine48());
      that.removeLine(getLine49());
      that.removeLine(getLine62());
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
      that.addLine(getLine42());
      that.addLine(getLine61());
     that.highlightElement(PHYS130CoopPlan1element, "NaturalSciences");
     that.addToClicked("PHYS130CoopPlan1", "NaturalSciences");
      PHYS130CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine42());
      that.removeLine(getLine61());
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
      that.addLine(getLine43());
     that.highlightElement(CHEM105CoopPlan1element, "NaturalSciences");
     that.addToClicked("CHEM105CoopPlan1", "NaturalSciences");
      CHEM105CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine43());
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
      that.addLine(getLine58());
     that.highlightElement(ENCMP100CoopPlan1element, "NaturalSciences");
     that.addToClicked("ENCMP100CoopPlan1", "NaturalSciences");
      ENCMP100CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine58());
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
      that.addLine(getLine44());
     that.highlightElement(ENGG160CoopPlan1element, "EngineeringDesign");
     that.addToClicked("ENGG160CoopPlan1", "EngineeringDesign");
      ENGG160CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine44());
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
      that.addLine(getLine45());
      that.addLine(getLine46());
      that.addLine(getLine47());
     that.highlightElement(ENPH131CoopPlan1element, "NaturalSciences");
     that.addToClicked("ENPH131CoopPlan1", "NaturalSciences");
      ENPH131CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine45());
      that.removeLine(getLine46());
      that.removeLine(getLine47());
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
      that.addLine(getLine47());
      that.addLine(getLine48());
      that.addLine(getLine50());
      that.addLine(getLine53());
      that.addLine(getLine63());
     that.highlightElement(MATH101CoopPlan1element, "Math");
     that.addToClicked("MATH101CoopPlan1", "Math");
      MATH101CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine47());
      that.removeLine(getLine48());
      that.removeLine(getLine50());
      that.removeLine(getLine53());
      that.removeLine(getLine63());
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
      that.addLine(getLine49());
      that.addLine(getLine51());
      that.addLine(getLine54());
      that.addLine(getLine71());
     that.highlightElement(MATH102CoopPlan1element, "Math");
     that.addToClicked("MATH102CoopPlan1", "Math");
      MATH102CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine49());
      that.removeLine(getLine51());
      that.removeLine(getLine54());
      that.removeLine(getLine71());
     that.unHighlightElement(MATH102CoopPlan1element, "Math");
     var category = that.removeFromClicked("MATH102CoopPlan1", "Math");
  if (category != "") { 
     that.highlightElement(MATH102CoopPlan1element, category);
}
      MATH102CoopPlan1flag=false
  }
};
$scope.ECE202CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE202CoopPlan1Time <= 200) { 
        ECE202CoopPlan1Time = currentTime;
        return;
    }
ECE202CoopPlan1Time = currentTime;
  var ECE202CoopPlan1element = document.getElementById("ECE202CoopPlan1");
 if (!ECE202CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE202CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE202CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE202CoopPlan1")[i];
        if (ECE202CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE202CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine50());
      that.addLine(getLine51());
      that.addLine(getLine55());
      that.addLine(getLine59());
     that.highlightElement(ECE202CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE202CoopPlan1", "EngineeringSciences");
      ECE202CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine50());
      that.removeLine(getLine51());
      that.removeLine(getLine55());
      that.removeLine(getLine59());
     that.unHighlightElement(ECE202CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE202CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE202CoopPlan1element, category);
}
      ECE202CoopPlan1flag=false
  }
};
$scope.ECE210CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE210CoopPlan1Time <= 200) { 
        ECE210CoopPlan1Time = currentTime;
        return;
    }
ECE210CoopPlan1Time = currentTime;
  var ECE210CoopPlan1element = document.getElementById("ECE210CoopPlan1");
 if (!ECE210CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE210CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE210CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE210CoopPlan1")[i];
        if (ECE210CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE210CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine57());
     that.highlightElement(ECE210CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE210CoopPlan1", "EngineeringSciences");
      ECE210CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine57());
     that.unHighlightElement(ECE210CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE210CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE210CoopPlan1element, category);
}
      ECE210CoopPlan1flag=false
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
      that.addLine(getLine64());
     that.highlightElement(ENGG299CoopPlan1element, "EngineeringProfession");
     that.addToClicked("ENGG299CoopPlan1", "EngineeringProfession");
      ENGG299CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine64());
     that.unHighlightElement(ENGG299CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299CoopPlan1element, category);
}
      ENGG299CoopPlan1flag=false
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
      that.addLine(getLine52());
      that.addLine(getLine60());
     that.highlightElement(MATH201CoopPlan1element, "Math");
     that.addToClicked("MATH201CoopPlan1", "Math");
      MATH201CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine52());
      that.removeLine(getLine60());
     that.unHighlightElement(MATH201CoopPlan1element, "Math");
     var category = that.removeFromClicked("MATH201CoopPlan1", "Math");
  if (category != "") { 
     that.highlightElement(MATH201CoopPlan1element, category);
}
      MATH201CoopPlan1flag=false
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
      that.addLine(getLine52());
      that.addLine(getLine53());
      that.addLine(getLine54());
      that.addLine(getLine72());
      that.addLine(getLine74());
      that.addLine(getLine79());
     that.highlightElement(MATH209CoopPlan1element, "Math");
     that.addToClicked("MATH209CoopPlan1", "Math");
      MATH209CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine52());
      that.removeLine(getLine53());
      that.removeLine(getLine54());
      that.removeLine(getLine72());
      that.removeLine(getLine74());
      that.removeLine(getLine79());
     that.unHighlightElement(MATH209CoopPlan1element, "Math");
     var category = that.removeFromClicked("MATH209CoopPlan1", "Math");
  if (category != "") { 
     that.highlightElement(MATH209CoopPlan1element, category);
}
      MATH209CoopPlan1flag=false
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
$scope.ECE203CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE203CoopPlan1Time <= 200) { 
        ECE203CoopPlan1Time = currentTime;
        return;
    }
ECE203CoopPlan1Time = currentTime;
  var ECE203CoopPlan1element = document.getElementById("ECE203CoopPlan1");
 if (!ECE203CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE203CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE203CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE203CoopPlan1")[i];
        if (ECE203CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE203CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine55());
      that.addLine(getLine56());
      that.addLine(getLine65());
      that.addLine(getLine69());
      that.addLine(getLine80());
     that.highlightElement(ECE203CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE203CoopPlan1", "EngineeringSciences");
      ECE203CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine55());
      that.removeLine(getLine56());
      that.removeLine(getLine65());
      that.removeLine(getLine69());
      that.removeLine(getLine80());
     that.unHighlightElement(ECE203CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE203CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE203CoopPlan1element, category);
}
      ECE203CoopPlan1flag=false
  }
};
$scope.ECE212CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE212CoopPlan1Time <= 200) { 
        ECE212CoopPlan1Time = currentTime;
        return;
    }
ECE212CoopPlan1Time = currentTime;
  var ECE212CoopPlan1element = document.getElementById("ECE212CoopPlan1");
 if (!ECE212CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE212CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE212CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE212CoopPlan1")[i];
        if (ECE212CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE212CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine57());
      that.addLine(getLine67());
     that.highlightElement(ECE212CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE212CoopPlan1", "EngineeringSciences");
      ECE212CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine57());
      that.removeLine(getLine67());
     that.unHighlightElement(ECE212CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE212CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE212CoopPlan1element, category);
}
      ECE212CoopPlan1flag=false
  }
};
$scope.ECE220CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE220CoopPlan1Time <= 200) { 
        ECE220CoopPlan1Time = currentTime;
        return;
    }
ECE220CoopPlan1Time = currentTime;
  var ECE220CoopPlan1element = document.getElementById("ECE220CoopPlan1");
 if (!ECE220CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE220CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE220CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE220CoopPlan1")[i];
        if (ECE220CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE220CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine58());
      that.addLine(getLine66());
     that.highlightElement(ECE220CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE220CoopPlan1", "EngineeringSciences");
      ECE220CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine58());
      that.removeLine(getLine66());
     that.unHighlightElement(ECE220CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE220CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE220CoopPlan1element, category);
}
      ECE220CoopPlan1flag=false
  }
};
$scope.ECE240CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE240CoopPlan1Time <= 200) { 
        ECE240CoopPlan1Time = currentTime;
        return;
    }
ECE240CoopPlan1Time = currentTime;
  var ECE240CoopPlan1element = document.getElementById("ECE240CoopPlan1");
 if (!ECE240CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE240CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE240CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE240CoopPlan1")[i];
        if (ECE240CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE240CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine56());
      that.addLine(getLine59());
      that.addLine(getLine60());
      that.addLine(getLine70());
      that.addLine(getLine81());
      that.addLine(getLine82());
     that.highlightElement(ECE240CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE240CoopPlan1", "EngineeringSciences");
      ECE240CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine56());
      that.removeLine(getLine59());
      that.removeLine(getLine60());
      that.removeLine(getLine70());
      that.removeLine(getLine81());
      that.removeLine(getLine82());
     that.unHighlightElement(ECE240CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE240CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE240CoopPlan1element, category);
}
      ECE240CoopPlan1flag=false
  }
};
$scope.PHYS230CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS230CoopPlan1Time <= 200) { 
        PHYS230CoopPlan1Time = currentTime;
        return;
    }
PHYS230CoopPlan1Time = currentTime;
  var PHYS230CoopPlan1element = document.getElementById("PHYS230CoopPlan1");
 if (!PHYS230CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("PHYS230CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("PHYS230CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("PHYS230CoopPlan1")[i];
        if (PHYS230CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS230CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine61());
      that.addLine(getLine62());
      that.addLine(getLine63());
      that.addLine(getLine73());
     that.highlightElement(PHYS230CoopPlan1element, "NaturalSciences");
     that.addToClicked("PHYS230CoopPlan1", "NaturalSciences");
      PHYS230CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine61());
      that.removeLine(getLine62());
      that.removeLine(getLine63());
      that.removeLine(getLine73());
     that.unHighlightElement(PHYS230CoopPlan1element, "NaturalSciences");
     var category = that.removeFromClicked("PHYS230CoopPlan1", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS230CoopPlan1element, category);
}
      PHYS230CoopPlan1flag=false
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
      that.addLine(getLine64());
      that.addLine(getLine75());
     that.highlightElement(WKEXP901CoopPlan1element, "EngineeringProfession");
     that.addToClicked("WKEXP901CoopPlan1", "EngineeringProfession");
      WKEXP901CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine64());
      that.removeLine(getLine75());
     that.unHighlightElement(WKEXP901CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP901CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP901CoopPlan1element, category);
}
      WKEXP901CoopPlan1flag=false
  }
};
$scope.ECE302CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE302CoopPlan1Time <= 200) { 
        ECE302CoopPlan1Time = currentTime;
        return;
    }
ECE302CoopPlan1Time = currentTime;
  var ECE302CoopPlan1element = document.getElementById("ECE302CoopPlan1");
 if (!ECE302CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE302CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE302CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE302CoopPlan1")[i];
        if (ECE302CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE302CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine65());
      that.addLine(getLine77());
     that.highlightElement(ECE302CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE302CoopPlan1", "EngineeringSciences");
      ECE302CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine65());
      that.removeLine(getLine77());
     that.unHighlightElement(ECE302CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE302CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE302CoopPlan1element, category);
}
      ECE302CoopPlan1flag=false
  }
};
$scope.ECE312CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE312CoopPlan1Time <= 200) { 
        ECE312CoopPlan1Time = currentTime;
        return;
    }
ECE312CoopPlan1Time = currentTime;
  var ECE312CoopPlan1element = document.getElementById("ECE312CoopPlan1");
 if (!ECE312CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE312CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE312CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE312CoopPlan1")[i];
        if (ECE312CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE312CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine66());
      that.addLine(getLine67());
      that.addLine(getLine68());
      that.addLine(getLine85());
     that.highlightElement(ECE312CoopPlan1element, "EngineeringDesign");
     that.addToClicked("ECE312CoopPlan1", "EngineeringDesign");
      ECE312CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine66());
      that.removeLine(getLine67());
      that.removeLine(getLine68());
      that.removeLine(getLine85());
     that.unHighlightElement(ECE312CoopPlan1element, "EngineeringDesign");
     var category = that.removeFromClicked("ECE312CoopPlan1", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE312CoopPlan1element, category);
}
      ECE312CoopPlan1flag=false
  }
};
$scope.ECE330CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE330CoopPlan1Time <= 200) { 
        ECE330CoopPlan1Time = currentTime;
        return;
    }
ECE330CoopPlan1Time = currentTime;
  var ECE330CoopPlan1element = document.getElementById("ECE330CoopPlan1");
 if (!ECE330CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE330CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE330CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE330CoopPlan1")[i];
        if (ECE330CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE330CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine69());
      that.addLine(getLine78());
     that.highlightElement(ECE330CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE330CoopPlan1", "EngineeringSciences");
      ECE330CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine69());
      that.removeLine(getLine78());
     that.unHighlightElement(ECE330CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE330CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE330CoopPlan1element, category);
}
      ECE330CoopPlan1flag=false
  }
};
$scope.ECE340CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE340CoopPlan1Time <= 200) { 
        ECE340CoopPlan1Time = currentTime;
        return;
    }
ECE340CoopPlan1Time = currentTime;
  var ECE340CoopPlan1element = document.getElementById("ECE340CoopPlan1");
 if (!ECE340CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE340CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE340CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE340CoopPlan1")[i];
        if (ECE340CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE340CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine68());
      that.addLine(getLine70());
     that.highlightElement(ECE340CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE340CoopPlan1", "EngineeringSciences");
      ECE340CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine68());
      that.removeLine(getLine70());
     that.unHighlightElement(ECE340CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE340CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE340CoopPlan1element, category);
}
      ECE340CoopPlan1flag=false
  }
};
$scope.ECE370CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE370CoopPlan1Time <= 200) { 
        ECE370CoopPlan1Time = currentTime;
        return;
    }
ECE370CoopPlan1Time = currentTime;
  var ECE370CoopPlan1element = document.getElementById("ECE370CoopPlan1");
 if (!ECE370CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE370CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE370CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE370CoopPlan1")[i];
        if (ECE370CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE370CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine71());
      that.addLine(getLine72());
      that.addLine(getLine73());
     that.highlightElement(ECE370CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE370CoopPlan1", "EngineeringSciences");
      ECE370CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine71());
      that.removeLine(getLine72());
      that.removeLine(getLine73());
     that.unHighlightElement(ECE370CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE370CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE370CoopPlan1element, category);
}
      ECE370CoopPlan1flag=false
  }
};
$scope.MATH309CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH309CoopPlan1Time <= 200) { 
        MATH309CoopPlan1Time = currentTime;
        return;
    }
MATH309CoopPlan1Time = currentTime;
  var MATH309CoopPlan1element = document.getElementById("MATH309CoopPlan1");
 if (!MATH309CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("MATH309CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("MATH309CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("MATH309CoopPlan1")[i];
        if (MATH309CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH309CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine74());
     that.highlightElement(MATH309CoopPlan1element, "Math");
     that.addToClicked("MATH309CoopPlan1", "Math");
      MATH309CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine74());
     that.unHighlightElement(MATH309CoopPlan1element, "Math");
     var category = that.removeFromClicked("MATH309CoopPlan1", "Math");
  if (category != "") { 
     that.highlightElement(MATH309CoopPlan1element, category);
}
      MATH309CoopPlan1flag=false
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
      that.addLine(getLine75());
      that.addLine(getLine76());
     that.highlightElement(WKEXP902CoopPlan1element, "EngineeringProfession");
     that.addToClicked("WKEXP902CoopPlan1", "EngineeringProfession");
      WKEXP902CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine75());
      that.removeLine(getLine76());
     that.unHighlightElement(WKEXP902CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP902CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP902CoopPlan1element, category);
}
      WKEXP902CoopPlan1flag=false
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
      that.addLine(getLine76());
      that.addLine(getLine83());
     that.highlightElement(WKEXP903CoopPlan1element, "EngineeringProfession");
     that.addToClicked("WKEXP903CoopPlan1", "EngineeringProfession");
      WKEXP903CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine76());
      that.removeLine(getLine83());
     that.unHighlightElement(WKEXP903CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP903CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP903CoopPlan1element, category);
}
      WKEXP903CoopPlan1flag=false
  }
};
$scope.ECE303CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE303CoopPlan1Time <= 200) { 
        ECE303CoopPlan1Time = currentTime;
        return;
    }
ECE303CoopPlan1Time = currentTime;
  var ECE303CoopPlan1element = document.getElementById("ECE303CoopPlan1");
 if (!ECE303CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE303CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE303CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE303CoopPlan1")[i];
        if (ECE303CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE303CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine77());
     that.highlightElement(ECE303CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE303CoopPlan1", "EngineeringSciences");
      ECE303CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine77());
     that.unHighlightElement(ECE303CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE303CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE303CoopPlan1element, category);
}
      ECE303CoopPlan1flag=false
  }
};
$scope.ECE332CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE332CoopPlan1Time <= 200) { 
        ECE332CoopPlan1Time = currentTime;
        return;
    }
ECE332CoopPlan1Time = currentTime;
  var ECE332CoopPlan1element = document.getElementById("ECE332CoopPlan1");
 if (!ECE332CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE332CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE332CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE332CoopPlan1")[i];
        if (ECE332CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE332CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine78());
     that.highlightElement(ECE332CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE332CoopPlan1", "EngineeringSciences");
      ECE332CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine78());
     that.unHighlightElement(ECE332CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE332CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE332CoopPlan1element, category);
}
      ECE332CoopPlan1flag=false
  }
};
$scope.ECE342CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE342CoopPlan1Time <= 200) { 
        ECE342CoopPlan1Time = currentTime;
        return;
    }
ECE342CoopPlan1Time = currentTime;
  var ECE342CoopPlan1element = document.getElementById("ECE342CoopPlan1");
 if (!ECE342CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE342CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE342CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE342CoopPlan1")[i];
        if (ECE342CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE342CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine79());
     that.highlightElement(ECE342CoopPlan1element, "Math");
     that.addToClicked("ECE342CoopPlan1", "Math");
      ECE342CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine79());
     that.unHighlightElement(ECE342CoopPlan1element, "Math");
     var category = that.removeFromClicked("ECE342CoopPlan1", "Math");
  if (category != "") { 
     that.highlightElement(ECE342CoopPlan1element, category);
}
      ECE342CoopPlan1flag=false
  }
};
$scope.ECE360CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE360CoopPlan1Time <= 200) { 
        ECE360CoopPlan1Time = currentTime;
        return;
    }
ECE360CoopPlan1Time = currentTime;
  var ECE360CoopPlan1element = document.getElementById("ECE360CoopPlan1");
 if (!ECE360CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE360CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE360CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE360CoopPlan1")[i];
        if (ECE360CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE360CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine80());
      that.addLine(getLine81());
     that.highlightElement(ECE360CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE360CoopPlan1", "EngineeringSciences");
      ECE360CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine80());
      that.removeLine(getLine81());
     that.unHighlightElement(ECE360CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE360CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE360CoopPlan1element, category);
}
      ECE360CoopPlan1flag=false
  }
};
$scope.ECE380CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE380CoopPlan1Time <= 200) { 
        ECE380CoopPlan1Time = currentTime;
        return;
    }
ECE380CoopPlan1Time = currentTime;
  var ECE380CoopPlan1element = document.getElementById("ECE380CoopPlan1");
 if (!ECE380CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE380CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE380CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE380CoopPlan1")[i];
        if (ECE380CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE380CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine82());
     that.highlightElement(ECE380CoopPlan1element, "EngineeringSciences");
     that.addToClicked("ECE380CoopPlan1", "EngineeringSciences");
      ECE380CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine82());
     that.unHighlightElement(ECE380CoopPlan1element, "EngineeringSciences");
     var category = that.removeFromClicked("ECE380CoopPlan1", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE380CoopPlan1element, category);
}
      ECE380CoopPlan1flag=false
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
      that.addLine(getLine83());
      that.addLine(getLine84());
     that.highlightElement(WKEXP904CoopPlan1element, "EngineeringProfession");
     that.addToClicked("WKEXP904CoopPlan1", "EngineeringProfession");
      WKEXP904CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine83());
      that.removeLine(getLine84());
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
      that.addLine(getLine84());
     that.highlightElement(WKEXP905CoopPlan1element, "EngineeringProfession");
     that.addToClicked("WKEXP905CoopPlan1", "EngineeringProfession");
      WKEXP905CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine84());
     that.unHighlightElement(WKEXP905CoopPlan1element, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP905CoopPlan1", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP905CoopPlan1element, category);
}
      WKEXP905CoopPlan1flag=false
  }
};
$scope.ECE490CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE490CoopPlan1Time <= 200) { 
        ECE490CoopPlan1Time = currentTime;
        return;
    }
ECE490CoopPlan1Time = currentTime;
  var ECE490CoopPlan1element = document.getElementById("ECE490CoopPlan1");
 if (!ECE490CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE490CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE490CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE490CoopPlan1")[i];
        if (ECE490CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE490CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine85());
      that.addLine(getLine86());
     that.highlightElement(ECE490CoopPlan1element, "EngineeringDesign");
     that.addToClicked("ECE490CoopPlan1", "EngineeringDesign");
      ECE490CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine85());
      that.removeLine(getLine86());
     that.unHighlightElement(ECE490CoopPlan1element, "EngineeringDesign");
     var category = that.removeFromClicked("ECE490CoopPlan1", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE490CoopPlan1element, category);
}
      ECE490CoopPlan1flag=false
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
$scope.ProgramTechnicalElectiveCoopPlan12Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan12Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan12Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan12Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan12element = document.getElementById("ProgramTechnicalElectiveCoopPlan12");
 if (!ProgramTechnicalElectiveCoopPlan12flag) {
     if (that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan12").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan12").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan12")[i];
        if (ProgramTechnicalElectiveCoopPlan12element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan12element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan12element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan12", "PROG");
      ProgramTechnicalElectiveCoopPlan12flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan12element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan12", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan12element, category);
}
      ProgramTechnicalElectiveCoopPlan12flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan13Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan13Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan13Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan13Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan13element = document.getElementById("ProgramTechnicalElectiveCoopPlan13");
 if (!ProgramTechnicalElectiveCoopPlan13flag) {
     if (that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan13").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan13").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan13")[i];
        if (ProgramTechnicalElectiveCoopPlan13element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan13element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan13element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan13", "PROG");
      ProgramTechnicalElectiveCoopPlan13flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan13element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan13", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan13element, category);
}
      ProgramTechnicalElectiveCoopPlan13flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan14Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan14Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan14Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan14Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan14element = document.getElementById("ProgramTechnicalElectiveCoopPlan14");
 if (!ProgramTechnicalElectiveCoopPlan14flag) {
     if (that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan14").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan14").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan14")[i];
        if (ProgramTechnicalElectiveCoopPlan14element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan14element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan14element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan14", "PROG");
      ProgramTechnicalElectiveCoopPlan14flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan14element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan14", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan14element, category);
}
      ProgramTechnicalElectiveCoopPlan14flag=false
  }
};
$scope.ECE491CoopPlan1Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE491CoopPlan1Time <= 200) { 
        ECE491CoopPlan1Time = currentTime;
        return;
    }
ECE491CoopPlan1Time = currentTime;
  var ECE491CoopPlan1element = document.getElementById("ECE491CoopPlan1");
 if (!ECE491CoopPlan1flag) {
     if (that.CoopPlan1ClickedMap.get("ECE491CoopPlan1").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ECE491CoopPlan1").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ECE491CoopPlan1")[i];
        if (ECE491CoopPlan1element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE491CoopPlan1element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine86());
     that.highlightElement(ECE491CoopPlan1element, "EngineeringDesign");
     that.addToClicked("ECE491CoopPlan1", "EngineeringDesign");
      ECE491CoopPlan1flag=true
  }
 else {
      that.removeLine(getLine86());
     that.unHighlightElement(ECE491CoopPlan1element, "EngineeringDesign");
     var category = that.removeFromClicked("ECE491CoopPlan1", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE491CoopPlan1element, category);
}
      ECE491CoopPlan1flag=false
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
     that.highlightElement(ENGM310CoopPlan1element, "Other");
     that.addToClicked("ENGM310CoopPlan1", "Other");
      ENGM310CoopPlan1flag=true
  }
 else {
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
     that.highlightElement(ENGM401CoopPlan1element, "Other");
     that.addToClicked("ENGM401CoopPlan1", "Other");
      ENGM401CoopPlan1flag=true
  }
 else {
     that.unHighlightElement(ENGM401CoopPlan1element, "Other");
     var category = that.removeFromClicked("ENGM401CoopPlan1", "Other");
  if (category != "") { 
     that.highlightElement(ENGM401CoopPlan1element, category);
}
      ENGM401CoopPlan1flag=false
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
$scope.ProgramTechnicalElectiveCoopPlan15Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan15Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan15Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan15Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan15element = document.getElementById("ProgramTechnicalElectiveCoopPlan15");
 if (!ProgramTechnicalElectiveCoopPlan15flag) {
     if (that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan15").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan15").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan15")[i];
        if (ProgramTechnicalElectiveCoopPlan15element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan15element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan15element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan15", "PROG");
      ProgramTechnicalElectiveCoopPlan15flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan15element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan15", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan15element, category);
}
      ProgramTechnicalElectiveCoopPlan15flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan16Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan16Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan16Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan16Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan16element = document.getElementById("ProgramTechnicalElectiveCoopPlan16");
 if (!ProgramTechnicalElectiveCoopPlan16flag) {
     if (that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan16").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan16").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan16")[i];
        if (ProgramTechnicalElectiveCoopPlan16element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan16element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan16element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan16", "PROG");
      ProgramTechnicalElectiveCoopPlan16flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan16element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan16", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan16element, category);
}
      ProgramTechnicalElectiveCoopPlan16flag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan17Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveCoopPlan17Time <= 200) { 
        ProgramTechnicalElectiveCoopPlan17Time = currentTime;
        return;
    }
ProgramTechnicalElectiveCoopPlan17Time = currentTime;
  var ProgramTechnicalElectiveCoopPlan17element = document.getElementById("ProgramTechnicalElectiveCoopPlan17");
 if (!ProgramTechnicalElectiveCoopPlan17flag) {
     if (that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan17").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan17").length; i++) { 
        var cate = that.CoopPlan1ClickedMap.get("ProgramTechnicalElectiveCoopPlan17")[i];
        if (ProgramTechnicalElectiveCoopPlan17element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveCoopPlan17element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveCoopPlan17element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveCoopPlan17", "PROG");
      ProgramTechnicalElectiveCoopPlan17flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveCoopPlan17element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveCoopPlan17", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveCoopPlan17element, category);
}
      ProgramTechnicalElectiveCoopPlan17flag=false
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
$scope.ECE202CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE202CoopPlan1desc");
 if (!ECE202CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE202CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE202CoopPlan1rflag=false
  }
};
$scope.ECE210CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE210CoopPlan1desc");
 if (!ECE210CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE210CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE210CoopPlan1rflag=false
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
$scope.ECE203CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE203CoopPlan1desc");
 if (!ECE203CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE203CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE203CoopPlan1rflag=false
  }
};
$scope.ECE212CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE212CoopPlan1desc");
 if (!ECE212CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE212CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE212CoopPlan1rflag=false
  }
};
$scope.ECE220CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE220CoopPlan1desc");
 if (!ECE220CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE220CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE220CoopPlan1rflag=false
  }
};
$scope.ECE240CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE240CoopPlan1desc");
 if (!ECE240CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE240CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE240CoopPlan1rflag=false
  }
};
$scope.PHYS230CoopPlan1RCListener = function () {
  var element = document.getElementById("PHYS230CoopPlan1desc");
 if (!PHYS230CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS230CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS230CoopPlan1rflag=false
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
$scope.ECE302CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE302CoopPlan1desc");
 if (!ECE302CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE302CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE302CoopPlan1rflag=false
  }
};
$scope.ECE312CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE312CoopPlan1desc");
 if (!ECE312CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE312CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE312CoopPlan1rflag=false
  }
};
$scope.ECE330CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE330CoopPlan1desc");
 if (!ECE330CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE330CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE330CoopPlan1rflag=false
  }
};
$scope.ECE340CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE340CoopPlan1desc");
 if (!ECE340CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE340CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE340CoopPlan1rflag=false
  }
};
$scope.ECE370CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE370CoopPlan1desc");
 if (!ECE370CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE370CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE370CoopPlan1rflag=false
  }
};
$scope.MATH309CoopPlan1RCListener = function () {
  var element = document.getElementById("MATH309CoopPlan1desc");
 if (!MATH309CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH309CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH309CoopPlan1rflag=false
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
$scope.ECE303CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE303CoopPlan1desc");
 if (!ECE303CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE303CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE303CoopPlan1rflag=false
  }
};
$scope.ECE332CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE332CoopPlan1desc");
 if (!ECE332CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE332CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE332CoopPlan1rflag=false
  }
};
$scope.ECE342CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE342CoopPlan1desc");
 if (!ECE342CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE342CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE342CoopPlan1rflag=false
  }
};
$scope.ECE360CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE360CoopPlan1desc");
 if (!ECE360CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE360CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE360CoopPlan1rflag=false
  }
};
$scope.ECE380CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE380CoopPlan1desc");
 if (!ECE380CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE380CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE380CoopPlan1rflag=false
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
$scope.ECE490CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE490CoopPlan1desc");
 if (!ECE490CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE490CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE490CoopPlan1rflag=false
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
$scope.ProgramTechnicalElectiveCoopPlan12RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan12desc");
 if (!ProgramTechnicalElectiveCoopPlan12rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan12rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan12rflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan13RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan13desc");
 if (!ProgramTechnicalElectiveCoopPlan13rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan13rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan13rflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan14RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan14desc");
 if (!ProgramTechnicalElectiveCoopPlan14rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan14rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan14rflag=false
  }
};
$scope.ECE491CoopPlan1RCListener = function () {
  var element = document.getElementById("ECE491CoopPlan1desc");
 if (!ECE491CoopPlan1rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE491CoopPlan1rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE491CoopPlan1rflag=false
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
$scope.ProgramTechnicalElectiveCoopPlan15RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan15desc");
 if (!ProgramTechnicalElectiveCoopPlan15rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan15rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan15rflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan16RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan16desc");
 if (!ProgramTechnicalElectiveCoopPlan16rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan16rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan16rflag=false
  }
};
$scope.ProgramTechnicalElectiveCoopPlan17RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveCoopPlan17desc");
 if (!ProgramTechnicalElectiveCoopPlan17rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveCoopPlan17rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveCoopPlan17rflag=false
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
  var ECE210NanoTraditionalPlanflag = false;
  var ECE210NanoTraditionalPlanrflag = false;
 var ECE210NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE210NanoTraditionalPlan", []);
  var MATH201NanoTraditionalPlanflag = false;
  var MATH201NanoTraditionalPlanrflag = false;
 var MATH201NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("MATH201NanoTraditionalPlan", []);
  var MATH209NanoTraditionalPlanflag = false;
  var MATH209NanoTraditionalPlanrflag = false;
 var MATH209NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("MATH209NanoTraditionalPlan", []);
  var ProgramTechnicalElectiveNanoTraditionalPlan0flag = false;
  var ProgramTechnicalElectiveNanoTraditionalPlan0rflag = false;
 var ProgramTechnicalElectiveNanoTraditionalPlan0Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ProgramTechnicalElectiveNanoTraditionalPlan0", []);
  var ComplementaryElectiveNanoTraditionalPlan0flag = false;
  var ComplementaryElectiveNanoTraditionalPlan0rflag = false;
 var ComplementaryElectiveNanoTraditionalPlan0Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ComplementaryElectiveNanoTraditionalPlan0", []);
  var ECE203NanoTraditionalPlanflag = false;
  var ECE203NanoTraditionalPlanrflag = false;
 var ECE203NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE203NanoTraditionalPlan", []);
  var ECE212NanoTraditionalPlanflag = false;
  var ECE212NanoTraditionalPlanrflag = false;
 var ECE212NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE212NanoTraditionalPlan", []);
  var ECE220NanoTraditionalPlanflag = false;
  var ECE220NanoTraditionalPlanrflag = false;
 var ECE220NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE220NanoTraditionalPlan", []);
  var ECE240NanoTraditionalPlanflag = false;
  var ECE240NanoTraditionalPlanrflag = false;
 var ECE240NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE240NanoTraditionalPlan", []);
  var PHYS230NanoTraditionalPlanflag = false;
  var PHYS230NanoTraditionalPlanrflag = false;
 var PHYS230NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("PHYS230NanoTraditionalPlan", []);
  var ComplementaryElectiveNanoTraditionalPlan1flag = false;
  var ComplementaryElectiveNanoTraditionalPlan1rflag = false;
 var ComplementaryElectiveNanoTraditionalPlan1Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ComplementaryElectiveNanoTraditionalPlan1", []);
  var ECE302NanoTraditionalPlanflag = false;
  var ECE302NanoTraditionalPlanrflag = false;
 var ECE302NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE302NanoTraditionalPlan", []);
  var ECE312NanoTraditionalPlanflag = false;
  var ECE312NanoTraditionalPlanrflag = false;
 var ECE312NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE312NanoTraditionalPlan", []);
  var ECE340NanoTraditionalPlanflag = false;
  var ECE340NanoTraditionalPlanrflag = false;
 var ECE340NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE340NanoTraditionalPlan", []);
  var ECE370NanoTraditionalPlanflag = false;
  var ECE370NanoTraditionalPlanrflag = false;
 var ECE370NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE370NanoTraditionalPlan", []);
  var ECE471NanoTraditionalPlanflag = false;
  var ECE471NanoTraditionalPlanrflag = false;
 var ECE471NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE471NanoTraditionalPlan", []);
  var MATH309NanoTraditionalPlanflag = false;
  var MATH309NanoTraditionalPlanrflag = false;
 var MATH309NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("MATH309NanoTraditionalPlan", []);
  var ECE303NanoTraditionalPlanflag = false;
  var ECE303NanoTraditionalPlanrflag = false;
 var ECE303NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE303NanoTraditionalPlan", []);
  var ECE341NanoTraditionalPlanflag = false;
  var ECE341NanoTraditionalPlanrflag = false;
 var ECE341NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE341NanoTraditionalPlan", []);
  var ECE342NanoTraditionalPlanflag = false;
  var ECE342NanoTraditionalPlanrflag = false;
 var ECE342NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE342NanoTraditionalPlan", []);
  var ECE456NanoTraditionalPlanflag = false;
  var ECE456NanoTraditionalPlanrflag = false;
 var ECE456NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE456NanoTraditionalPlan", []);
  var ITSElectiveNanoTraditionalPlan0flag = false;
  var ITSElectiveNanoTraditionalPlan0rflag = false;
 var ITSElectiveNanoTraditionalPlan0Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ITSElectiveNanoTraditionalPlan0", []);
  var ECE360NanoTraditionalPlanflag = false;
  var ECE360NanoTraditionalPlanrflag = false;
 var ECE360NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE360NanoTraditionalPlan", []);
  var ECE457NanoTraditionalPlanflag = false;
  var ECE457NanoTraditionalPlanrflag = false;
 var ECE457NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE457NanoTraditionalPlan", []);
  var ECE490NanoTraditionalPlanflag = false;
  var ECE490NanoTraditionalPlanrflag = false;
 var ECE490NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE490NanoTraditionalPlan", []);
  var ENGG404NanoTraditionalPlanflag = false;
  var ENGG404NanoTraditionalPlanrflag = false;
 var ENGG404NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ENGG404NanoTraditionalPlan", []);
  var ProgramTechnicalElectiveNanoTraditionalPlan1flag = false;
  var ProgramTechnicalElectiveNanoTraditionalPlan1rflag = false;
 var ProgramTechnicalElectiveNanoTraditionalPlan1Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ProgramTechnicalElectiveNanoTraditionalPlan1", []);
  var ProgramTechnicalElectiveNanoTraditionalPlan2flag = false;
  var ProgramTechnicalElectiveNanoTraditionalPlan2rflag = false;
 var ProgramTechnicalElectiveNanoTraditionalPlan2Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ProgramTechnicalElectiveNanoTraditionalPlan2", []);
  var ECE450NanoTraditionalPlanflag = false;
  var ECE450NanoTraditionalPlanrflag = false;
 var ECE450NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE450NanoTraditionalPlan", []);
  var ECE475NanoTraditionalPlanflag = false;
  var ECE475NanoTraditionalPlanrflag = false;
 var ECE475NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE475NanoTraditionalPlan", []);
  var ECE491NanoTraditionalPlanflag = false;
  var ECE491NanoTraditionalPlanrflag = false;
 var ECE491NanoTraditionalPlanTime = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ECE491NanoTraditionalPlan", []);
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
  var ProgramTechnicalElectiveNanoTraditionalPlan3flag = false;
  var ProgramTechnicalElectiveNanoTraditionalPlan3rflag = false;
 var ProgramTechnicalElectiveNanoTraditionalPlan3Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ProgramTechnicalElectiveNanoTraditionalPlan3", []);
  var ProgramTechnicalElectiveNanoTraditionalPlan4flag = false;
  var ProgramTechnicalElectiveNanoTraditionalPlan4rflag = false;
 var ProgramTechnicalElectiveNanoTraditionalPlan4Time = new Date().getTime();
this.NanoTraditionalPlanClickedMap.set("ProgramTechnicalElectiveNanoTraditionalPlan4", []);
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
      that.addLine(getLine89());
     that.highlightElement(CHEM103NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM103NanoTraditionalPlan", "NaturalSciences");
      CHEM103NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine89());
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
      that.addLine(getLine87());
      that.addLine(getLine92());
     that.highlightElement(ENGG130NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130NanoTraditionalPlan", "NaturalSciences");
      ENGG130NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine87());
      that.removeLine(getLine92());
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
      that.addLine(getLine90());
     that.highlightElement(ENGL199NanoTraditionalPlanelement, "Other");
     that.addToClicked("ENGL199NanoTraditionalPlan", "Other");
      ENGL199NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine90());
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
      that.addLine(getLine87());
      that.addLine(getLine88());
      that.addLine(getLine91());
      that.addLine(getLine94());
      that.addLine(getLine95());
      that.addLine(getLine108());
     that.highlightElement(MATH100NanoTraditionalPlanelement, "Math");
     that.addToClicked("MATH100NanoTraditionalPlan", "Math");
      MATH100NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine87());
      that.removeLine(getLine88());
      that.removeLine(getLine91());
      that.removeLine(getLine94());
      that.removeLine(getLine95());
      that.removeLine(getLine108());
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
      that.addLine(getLine88());
      that.addLine(getLine107());
     that.highlightElement(PHYS130NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS130NanoTraditionalPlan", "NaturalSciences");
      PHYS130NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine88());
      that.removeLine(getLine107());
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
      that.addLine(getLine89());
     that.highlightElement(CHEM105NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105NanoTraditionalPlan", "NaturalSciences");
      CHEM105NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine89());
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
      that.addLine(getLine104());
     that.highlightElement(ENCMP100NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100NanoTraditionalPlan", "NaturalSciences");
      ENCMP100NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine104());
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
      that.addLine(getLine90());
     that.highlightElement(ENGG160NanoTraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ENGG160NanoTraditionalPlan", "EngineeringDesign");
      ENGG160NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine90());
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
      that.addLine(getLine91());
      that.addLine(getLine92());
      that.addLine(getLine93());
     that.highlightElement(ENPH131NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131NanoTraditionalPlan", "NaturalSciences");
      ENPH131NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine91());
      that.removeLine(getLine92());
      that.removeLine(getLine93());
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
      that.addLine(getLine93());
      that.addLine(getLine94());
      that.addLine(getLine96());
      that.addLine(getLine99());
      that.addLine(getLine109());
     that.highlightElement(MATH101NanoTraditionalPlanelement, "Math");
     that.addToClicked("MATH101NanoTraditionalPlan", "Math");
      MATH101NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine93());
      that.removeLine(getLine94());
      that.removeLine(getLine96());
      that.removeLine(getLine99());
      that.removeLine(getLine109());
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
      that.addLine(getLine95());
      that.addLine(getLine97());
      that.addLine(getLine100());
      that.addLine(getLine115());
     that.highlightElement(MATH102NanoTraditionalPlanelement, "Math");
     that.addToClicked("MATH102NanoTraditionalPlan", "Math");
      MATH102NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine95());
      that.removeLine(getLine97());
      that.removeLine(getLine100());
      that.removeLine(getLine115());
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
      that.addLine(getLine96());
      that.addLine(getLine97());
      that.addLine(getLine101());
      that.addLine(getLine105());
     that.highlightElement(ECE202NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE202NanoTraditionalPlan", "EngineeringSciences");
      ECE202NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine96());
      that.removeLine(getLine97());
      that.removeLine(getLine101());
      that.removeLine(getLine105());
     that.unHighlightElement(ECE202NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE202NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE202NanoTraditionalPlanelement, category);
}
      ECE202NanoTraditionalPlanflag=false
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
      that.addLine(getLine103());
     that.highlightElement(ECE210NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE210NanoTraditionalPlan", "EngineeringSciences");
      ECE210NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine103());
     that.unHighlightElement(ECE210NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE210NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE210NanoTraditionalPlanelement, category);
}
      ECE210NanoTraditionalPlanflag=false
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
      that.addLine(getLine98());
      that.addLine(getLine106());
     that.highlightElement(MATH201NanoTraditionalPlanelement, "Math");
     that.addToClicked("MATH201NanoTraditionalPlan", "Math");
      MATH201NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine98());
      that.removeLine(getLine106());
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
      that.addLine(getLine98());
      that.addLine(getLine99());
      that.addLine(getLine100());
      that.addLine(getLine116());
      that.addLine(getLine119());
      that.addLine(getLine123());
     that.highlightElement(MATH209NanoTraditionalPlanelement, "Math");
     that.addToClicked("MATH209NanoTraditionalPlan", "Math");
      MATH209NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine98());
      that.removeLine(getLine99());
      that.removeLine(getLine100());
      that.removeLine(getLine116());
      that.removeLine(getLine119());
      that.removeLine(getLine123());
     that.unHighlightElement(MATH209NanoTraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH209NanoTraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209NanoTraditionalPlanelement, category);
}
      MATH209NanoTraditionalPlanflag=false
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
      that.addLine(getLine101());
      that.addLine(getLine102());
      that.addLine(getLine110());
      that.addLine(getLine125());
     that.highlightElement(ECE203NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE203NanoTraditionalPlan", "EngineeringSciences");
      ECE203NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine101());
      that.removeLine(getLine102());
      that.removeLine(getLine110());
      that.removeLine(getLine125());
     that.unHighlightElement(ECE203NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE203NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE203NanoTraditionalPlanelement, category);
}
      ECE203NanoTraditionalPlanflag=false
  }
};
$scope.ECE212NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE212NanoTraditionalPlanTime <= 200) { 
        ECE212NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE212NanoTraditionalPlanTime = currentTime;
  var ECE212NanoTraditionalPlanelement = document.getElementById("ECE212NanoTraditionalPlan");
 if (!ECE212NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE212NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE212NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE212NanoTraditionalPlan")[i];
        if (ECE212NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE212NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine103());
      that.addLine(getLine112());
     that.highlightElement(ECE212NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE212NanoTraditionalPlan", "EngineeringSciences");
      ECE212NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine103());
      that.removeLine(getLine112());
     that.unHighlightElement(ECE212NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE212NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE212NanoTraditionalPlanelement, category);
}
      ECE212NanoTraditionalPlanflag=false
  }
};
$scope.ECE220NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE220NanoTraditionalPlanTime <= 200) { 
        ECE220NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE220NanoTraditionalPlanTime = currentTime;
  var ECE220NanoTraditionalPlanelement = document.getElementById("ECE220NanoTraditionalPlan");
 if (!ECE220NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE220NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE220NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE220NanoTraditionalPlan")[i];
        if (ECE220NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE220NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine104());
      that.addLine(getLine111());
     that.highlightElement(ECE220NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE220NanoTraditionalPlan", "EngineeringSciences");
      ECE220NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine104());
      that.removeLine(getLine111());
     that.unHighlightElement(ECE220NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE220NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE220NanoTraditionalPlanelement, category);
}
      ECE220NanoTraditionalPlanflag=false
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
      that.addLine(getLine102());
      that.addLine(getLine105());
      that.addLine(getLine106());
      that.addLine(getLine114());
      that.addLine(getLine121());
      that.addLine(getLine126());
     that.highlightElement(ECE240NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE240NanoTraditionalPlan", "EngineeringSciences");
      ECE240NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine102());
      that.removeLine(getLine105());
      that.removeLine(getLine106());
      that.removeLine(getLine114());
      that.removeLine(getLine121());
      that.removeLine(getLine126());
     that.unHighlightElement(ECE240NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE240NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE240NanoTraditionalPlanelement, category);
}
      ECE240NanoTraditionalPlanflag=false
  }
};
$scope.PHYS230NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS230NanoTraditionalPlanTime <= 200) { 
        PHYS230NanoTraditionalPlanTime = currentTime;
        return;
    }
PHYS230NanoTraditionalPlanTime = currentTime;
  var PHYS230NanoTraditionalPlanelement = document.getElementById("PHYS230NanoTraditionalPlan");
 if (!PHYS230NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("PHYS230NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("PHYS230NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("PHYS230NanoTraditionalPlan")[i];
        if (PHYS230NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS230NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine107());
      that.addLine(getLine108());
      that.addLine(getLine109());
      that.addLine(getLine117());
     that.highlightElement(PHYS230NanoTraditionalPlanelement, "NaturalSciences");
     that.addToClicked("PHYS230NanoTraditionalPlan", "NaturalSciences");
      PHYS230NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine107());
      that.removeLine(getLine108());
      that.removeLine(getLine109());
      that.removeLine(getLine117());
     that.unHighlightElement(PHYS230NanoTraditionalPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS230NanoTraditionalPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS230NanoTraditionalPlanelement, category);
}
      PHYS230NanoTraditionalPlanflag=false
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
      that.addLine(getLine110());
      that.addLine(getLine120());
      that.addLine(getLine124());
      that.addLine(getLine128());
      that.addLine(getLine129());
     that.highlightElement(ECE302NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE302NanoTraditionalPlan", "EngineeringSciences");
      ECE302NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine110());
      that.removeLine(getLine120());
      that.removeLine(getLine124());
      that.removeLine(getLine128());
      that.removeLine(getLine129());
     that.unHighlightElement(ECE302NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE302NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE302NanoTraditionalPlanelement, category);
}
      ECE302NanoTraditionalPlanflag=false
  }
};
$scope.ECE312NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE312NanoTraditionalPlanTime <= 200) { 
        ECE312NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE312NanoTraditionalPlanTime = currentTime;
  var ECE312NanoTraditionalPlanelement = document.getElementById("ECE312NanoTraditionalPlan");
 if (!ECE312NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE312NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE312NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE312NanoTraditionalPlan")[i];
        if (ECE312NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE312NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine111());
      that.addLine(getLine112());
      that.addLine(getLine113());
      that.addLine(getLine127());
     that.highlightElement(ECE312NanoTraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ECE312NanoTraditionalPlan", "EngineeringDesign");
      ECE312NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine111());
      that.removeLine(getLine112());
      that.removeLine(getLine113());
      that.removeLine(getLine127());
     that.unHighlightElement(ECE312NanoTraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE312NanoTraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE312NanoTraditionalPlanelement, category);
}
      ECE312NanoTraditionalPlanflag=false
  }
};
$scope.ECE340NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE340NanoTraditionalPlanTime <= 200) { 
        ECE340NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE340NanoTraditionalPlanTime = currentTime;
  var ECE340NanoTraditionalPlanelement = document.getElementById("ECE340NanoTraditionalPlan");
 if (!ECE340NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE340NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE340NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE340NanoTraditionalPlan")[i];
        if (ECE340NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE340NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine113());
      that.addLine(getLine114());
     that.highlightElement(ECE340NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE340NanoTraditionalPlan", "EngineeringSciences");
      ECE340NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine113());
      that.removeLine(getLine114());
     that.unHighlightElement(ECE340NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE340NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE340NanoTraditionalPlanelement, category);
}
      ECE340NanoTraditionalPlanflag=false
  }
};
$scope.ECE370NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE370NanoTraditionalPlanTime <= 200) { 
        ECE370NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE370NanoTraditionalPlanTime = currentTime;
  var ECE370NanoTraditionalPlanelement = document.getElementById("ECE370NanoTraditionalPlan");
 if (!ECE370NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE370NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE370NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE370NanoTraditionalPlan")[i];
        if (ECE370NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE370NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine115());
      that.addLine(getLine116());
      that.addLine(getLine117());
      that.addLine(getLine118());
     that.highlightElement(ECE370NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE370NanoTraditionalPlan", "EngineeringSciences");
      ECE370NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine115());
      that.removeLine(getLine116());
      that.removeLine(getLine117());
      that.removeLine(getLine118());
     that.unHighlightElement(ECE370NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE370NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE370NanoTraditionalPlanelement, category);
}
      ECE370NanoTraditionalPlanflag=false
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
      that.addLine(getLine118());
     that.highlightElement(ECE471NanoTraditionalPlanelement, "course");
     that.addToClicked("ECE471NanoTraditionalPlan", "course");
      ECE471NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine118());
     that.unHighlightElement(ECE471NanoTraditionalPlanelement, "course");
     var category = that.removeFromClicked("ECE471NanoTraditionalPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE471NanoTraditionalPlanelement, category);
}
      ECE471NanoTraditionalPlanflag=false
  }
};
$scope.MATH309NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH309NanoTraditionalPlanTime <= 200) { 
        MATH309NanoTraditionalPlanTime = currentTime;
        return;
    }
MATH309NanoTraditionalPlanTime = currentTime;
  var MATH309NanoTraditionalPlanelement = document.getElementById("MATH309NanoTraditionalPlan");
 if (!MATH309NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("MATH309NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("MATH309NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("MATH309NanoTraditionalPlan")[i];
        if (MATH309NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH309NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine119());
      that.addLine(getLine122());
     that.highlightElement(MATH309NanoTraditionalPlanelement, "Math");
     that.addToClicked("MATH309NanoTraditionalPlan", "Math");
      MATH309NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine119());
      that.removeLine(getLine122());
     that.unHighlightElement(MATH309NanoTraditionalPlanelement, "Math");
     var category = that.removeFromClicked("MATH309NanoTraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH309NanoTraditionalPlanelement, category);
}
      MATH309NanoTraditionalPlanflag=false
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
      that.addLine(getLine120());
     that.highlightElement(ECE303NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE303NanoTraditionalPlan", "EngineeringSciences");
      ECE303NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine120());
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
      that.addLine(getLine121());
      that.addLine(getLine122());
     that.highlightElement(ECE341NanoTraditionalPlanelement, "course");
     that.addToClicked("ECE341NanoTraditionalPlan", "course");
      ECE341NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine121());
      that.removeLine(getLine122());
     that.unHighlightElement(ECE341NanoTraditionalPlanelement, "course");
     var category = that.removeFromClicked("ECE341NanoTraditionalPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE341NanoTraditionalPlanelement, category);
}
      ECE341NanoTraditionalPlanflag=false
  }
};
$scope.ECE342NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE342NanoTraditionalPlanTime <= 200) { 
        ECE342NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE342NanoTraditionalPlanTime = currentTime;
  var ECE342NanoTraditionalPlanelement = document.getElementById("ECE342NanoTraditionalPlan");
 if (!ECE342NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE342NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE342NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE342NanoTraditionalPlan")[i];
        if (ECE342NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE342NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine123());
     that.highlightElement(ECE342NanoTraditionalPlanelement, "Math");
     that.addToClicked("ECE342NanoTraditionalPlan", "Math");
      ECE342NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine123());
     that.unHighlightElement(ECE342NanoTraditionalPlanelement, "Math");
     var category = that.removeFromClicked("ECE342NanoTraditionalPlan", "Math");
  if (category != "") { 
     that.highlightElement(ECE342NanoTraditionalPlanelement, category);
}
      ECE342NanoTraditionalPlanflag=false
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
      that.addLine(getLine124());
     that.highlightElement(ECE456NanoTraditionalPlanelement, "course");
     that.addToClicked("ECE456NanoTraditionalPlan", "course");
      ECE456NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine124());
     that.unHighlightElement(ECE456NanoTraditionalPlanelement, "course");
     var category = that.removeFromClicked("ECE456NanoTraditionalPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE456NanoTraditionalPlanelement, category);
}
      ECE456NanoTraditionalPlanflag=false
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
      that.addLine(getLine125());
      that.addLine(getLine126());
     that.highlightElement(ECE360NanoTraditionalPlanelement, "EngineeringSciences");
     that.addToClicked("ECE360NanoTraditionalPlan", "EngineeringSciences");
      ECE360NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine125());
      that.removeLine(getLine126());
     that.unHighlightElement(ECE360NanoTraditionalPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE360NanoTraditionalPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE360NanoTraditionalPlanelement, category);
}
      ECE360NanoTraditionalPlanflag=false
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
$scope.ECE490NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE490NanoTraditionalPlanTime <= 200) { 
        ECE490NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE490NanoTraditionalPlanTime = currentTime;
  var ECE490NanoTraditionalPlanelement = document.getElementById("ECE490NanoTraditionalPlan");
 if (!ECE490NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE490NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE490NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE490NanoTraditionalPlan")[i];
        if (ECE490NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE490NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine127());
      that.addLine(getLine130());
     that.highlightElement(ECE490NanoTraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ECE490NanoTraditionalPlan", "EngineeringDesign");
      ECE490NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine127());
      that.removeLine(getLine130());
     that.unHighlightElement(ECE490NanoTraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE490NanoTraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE490NanoTraditionalPlanelement, category);
}
      ECE490NanoTraditionalPlanflag=false
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
$scope.ProgramTechnicalElectiveNanoTraditionalPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveNanoTraditionalPlan2Time <= 200) { 
        ProgramTechnicalElectiveNanoTraditionalPlan2Time = currentTime;
        return;
    }
ProgramTechnicalElectiveNanoTraditionalPlan2Time = currentTime;
  var ProgramTechnicalElectiveNanoTraditionalPlan2element = document.getElementById("ProgramTechnicalElectiveNanoTraditionalPlan2");
 if (!ProgramTechnicalElectiveNanoTraditionalPlan2flag) {
     if (that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan2").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan2")[i];
        if (ProgramTechnicalElectiveNanoTraditionalPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveNanoTraditionalPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveNanoTraditionalPlan2element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveNanoTraditionalPlan2", "PROG");
      ProgramTechnicalElectiveNanoTraditionalPlan2flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveNanoTraditionalPlan2element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveNanoTraditionalPlan2", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveNanoTraditionalPlan2element, category);
}
      ProgramTechnicalElectiveNanoTraditionalPlan2flag=false
  }
};
$scope.ECE450NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE450NanoTraditionalPlanTime <= 200) { 
        ECE450NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE450NanoTraditionalPlanTime = currentTime;
  var ECE450NanoTraditionalPlanelement = document.getElementById("ECE450NanoTraditionalPlan");
 if (!ECE450NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE450NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE450NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE450NanoTraditionalPlan")[i];
        if (ECE450NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE450NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine128());
     that.highlightElement(ECE450NanoTraditionalPlanelement, "course");
     that.addToClicked("ECE450NanoTraditionalPlan", "course");
      ECE450NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine128());
     that.unHighlightElement(ECE450NanoTraditionalPlanelement, "course");
     var category = that.removeFromClicked("ECE450NanoTraditionalPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE450NanoTraditionalPlanelement, category);
}
      ECE450NanoTraditionalPlanflag=false
  }
};
$scope.ECE475NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE475NanoTraditionalPlanTime <= 200) { 
        ECE475NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE475NanoTraditionalPlanTime = currentTime;
  var ECE475NanoTraditionalPlanelement = document.getElementById("ECE475NanoTraditionalPlan");
 if (!ECE475NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE475NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE475NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE475NanoTraditionalPlan")[i];
        if (ECE475NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE475NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine129());
     that.highlightElement(ECE475NanoTraditionalPlanelement, "course");
     that.addToClicked("ECE475NanoTraditionalPlan", "course");
      ECE475NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine129());
     that.unHighlightElement(ECE475NanoTraditionalPlanelement, "course");
     var category = that.removeFromClicked("ECE475NanoTraditionalPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE475NanoTraditionalPlanelement, category);
}
      ECE475NanoTraditionalPlanflag=false
  }
};
$scope.ECE491NanoTraditionalPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE491NanoTraditionalPlanTime <= 200) { 
        ECE491NanoTraditionalPlanTime = currentTime;
        return;
    }
ECE491NanoTraditionalPlanTime = currentTime;
  var ECE491NanoTraditionalPlanelement = document.getElementById("ECE491NanoTraditionalPlan");
 if (!ECE491NanoTraditionalPlanflag) {
     if (that.NanoTraditionalPlanClickedMap.get("ECE491NanoTraditionalPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ECE491NanoTraditionalPlan").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ECE491NanoTraditionalPlan")[i];
        if (ECE491NanoTraditionalPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE491NanoTraditionalPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine130());
     that.highlightElement(ECE491NanoTraditionalPlanelement, "EngineeringDesign");
     that.addToClicked("ECE491NanoTraditionalPlan", "EngineeringDesign");
      ECE491NanoTraditionalPlanflag=true
  }
 else {
      that.removeLine(getLine130());
     that.unHighlightElement(ECE491NanoTraditionalPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE491NanoTraditionalPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE491NanoTraditionalPlanelement, category);
}
      ECE491NanoTraditionalPlanflag=false
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
$scope.ProgramTechnicalElectiveNanoTraditionalPlan3Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveNanoTraditionalPlan3Time <= 200) { 
        ProgramTechnicalElectiveNanoTraditionalPlan3Time = currentTime;
        return;
    }
ProgramTechnicalElectiveNanoTraditionalPlan3Time = currentTime;
  var ProgramTechnicalElectiveNanoTraditionalPlan3element = document.getElementById("ProgramTechnicalElectiveNanoTraditionalPlan3");
 if (!ProgramTechnicalElectiveNanoTraditionalPlan3flag) {
     if (that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan3").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan3").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan3")[i];
        if (ProgramTechnicalElectiveNanoTraditionalPlan3element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveNanoTraditionalPlan3element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveNanoTraditionalPlan3element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveNanoTraditionalPlan3", "PROG");
      ProgramTechnicalElectiveNanoTraditionalPlan3flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveNanoTraditionalPlan3element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveNanoTraditionalPlan3", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveNanoTraditionalPlan3element, category);
}
      ProgramTechnicalElectiveNanoTraditionalPlan3flag=false
  }
};
$scope.ProgramTechnicalElectiveNanoTraditionalPlan4Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveNanoTraditionalPlan4Time <= 200) { 
        ProgramTechnicalElectiveNanoTraditionalPlan4Time = currentTime;
        return;
    }
ProgramTechnicalElectiveNanoTraditionalPlan4Time = currentTime;
  var ProgramTechnicalElectiveNanoTraditionalPlan4element = document.getElementById("ProgramTechnicalElectiveNanoTraditionalPlan4");
 if (!ProgramTechnicalElectiveNanoTraditionalPlan4flag) {
     if (that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan4").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan4").length; i++) { 
        var cate = that.NanoTraditionalPlanClickedMap.get("ProgramTechnicalElectiveNanoTraditionalPlan4")[i];
        if (ProgramTechnicalElectiveNanoTraditionalPlan4element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveNanoTraditionalPlan4element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveNanoTraditionalPlan4element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveNanoTraditionalPlan4", "PROG");
      ProgramTechnicalElectiveNanoTraditionalPlan4flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveNanoTraditionalPlan4element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveNanoTraditionalPlan4", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveNanoTraditionalPlan4element, category);
}
      ProgramTechnicalElectiveNanoTraditionalPlan4flag=false
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
$scope.ECE212NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE212NanoTraditionalPlandesc");
 if (!ECE212NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE212NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE212NanoTraditionalPlanrflag=false
  }
};
$scope.ECE220NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE220NanoTraditionalPlandesc");
 if (!ECE220NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE220NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE220NanoTraditionalPlanrflag=false
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
$scope.PHYS230NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("PHYS230NanoTraditionalPlandesc");
 if (!PHYS230NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS230NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS230NanoTraditionalPlanrflag=false
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
$scope.ECE312NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE312NanoTraditionalPlandesc");
 if (!ECE312NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE312NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE312NanoTraditionalPlanrflag=false
  }
};
$scope.ECE340NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE340NanoTraditionalPlandesc");
 if (!ECE340NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE340NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE340NanoTraditionalPlanrflag=false
  }
};
$scope.ECE370NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE370NanoTraditionalPlandesc");
 if (!ECE370NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE370NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE370NanoTraditionalPlanrflag=false
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
$scope.MATH309NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("MATH309NanoTraditionalPlandesc");
 if (!MATH309NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH309NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH309NanoTraditionalPlanrflag=false
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
$scope.ECE342NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE342NanoTraditionalPlandesc");
 if (!ECE342NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE342NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE342NanoTraditionalPlanrflag=false
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
$scope.ECE490NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE490NanoTraditionalPlandesc");
 if (!ECE490NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE490NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE490NanoTraditionalPlanrflag=false
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
$scope.ProgramTechnicalElectiveNanoTraditionalPlan2RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveNanoTraditionalPlan2desc");
 if (!ProgramTechnicalElectiveNanoTraditionalPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveNanoTraditionalPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveNanoTraditionalPlan2rflag=false
  }
};
$scope.ECE450NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE450NanoTraditionalPlandesc");
 if (!ECE450NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE450NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE450NanoTraditionalPlanrflag=false
  }
};
$scope.ECE475NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE475NanoTraditionalPlandesc");
 if (!ECE475NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE475NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE475NanoTraditionalPlanrflag=false
  }
};
$scope.ECE491NanoTraditionalPlanRCListener = function () {
  var element = document.getElementById("ECE491NanoTraditionalPlandesc");
 if (!ECE491NanoTraditionalPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE491NanoTraditionalPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE491NanoTraditionalPlanrflag=false
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
$scope.ProgramTechnicalElectiveNanoTraditionalPlan3RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveNanoTraditionalPlan3desc");
 if (!ProgramTechnicalElectiveNanoTraditionalPlan3rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveNanoTraditionalPlan3rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveNanoTraditionalPlan3rflag=false
  }
};
$scope.ProgramTechnicalElectiveNanoTraditionalPlan4RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveNanoTraditionalPlan4desc");
 if (!ProgramTechnicalElectiveNanoTraditionalPlan4rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveNanoTraditionalPlan4rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveNanoTraditionalPlan4rflag=false
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
  var ECE210NanoCoopPlanflag = false;
  var ECE210NanoCoopPlanrflag = false;
 var ECE210NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE210NanoCoopPlan", []);
  var ENGG299NanoCoopPlanflag = false;
  var ENGG299NanoCoopPlanrflag = false;
 var ENGG299NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENGG299NanoCoopPlan", []);
  var MATH201NanoCoopPlanflag = false;
  var MATH201NanoCoopPlanrflag = false;
 var MATH201NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("MATH201NanoCoopPlan", []);
  var MATH209NanoCoopPlanflag = false;
  var MATH209NanoCoopPlanrflag = false;
 var MATH209NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("MATH209NanoCoopPlan", []);
  var ProgramTechnicalElectiveNanoCoopPlan0flag = false;
  var ProgramTechnicalElectiveNanoCoopPlan0rflag = false;
 var ProgramTechnicalElectiveNanoCoopPlan0Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ProgramTechnicalElectiveNanoCoopPlan0", []);
  var ECE203NanoCoopPlanflag = false;
  var ECE203NanoCoopPlanrflag = false;
 var ECE203NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE203NanoCoopPlan", []);
  var ECE212NanoCoopPlanflag = false;
  var ECE212NanoCoopPlanrflag = false;
 var ECE212NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE212NanoCoopPlan", []);
  var ECE220NanoCoopPlanflag = false;
  var ECE220NanoCoopPlanrflag = false;
 var ECE220NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE220NanoCoopPlan", []);
  var ECE240NanoCoopPlanflag = false;
  var ECE240NanoCoopPlanrflag = false;
 var ECE240NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE240NanoCoopPlan", []);
  var PHYS230NanoCoopPlanflag = false;
  var PHYS230NanoCoopPlanrflag = false;
 var PHYS230NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("PHYS230NanoCoopPlan", []);
  var ComplementaryElectiveNanoCoopPlan0flag = false;
  var ComplementaryElectiveNanoCoopPlan0rflag = false;
 var ComplementaryElectiveNanoCoopPlan0Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ComplementaryElectiveNanoCoopPlan0", []);
  var WKEXP901NanoCoopPlanflag = false;
  var WKEXP901NanoCoopPlanrflag = false;
 var WKEXP901NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("WKEXP901NanoCoopPlan", []);
  var ECE302NanoCoopPlanflag = false;
  var ECE302NanoCoopPlanrflag = false;
 var ECE302NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE302NanoCoopPlan", []);
  var ECE312NanoCoopPlanflag = false;
  var ECE312NanoCoopPlanrflag = false;
 var ECE312NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE312NanoCoopPlan", []);
  var ECE340NanoCoopPlanflag = false;
  var ECE340NanoCoopPlanrflag = false;
 var ECE340NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE340NanoCoopPlan", []);
  var ECE370NanoCoopPlanflag = false;
  var ECE370NanoCoopPlanrflag = false;
 var ECE370NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE370NanoCoopPlan", []);
  var ECE471NanoCoopPlanflag = false;
  var ECE471NanoCoopPlanrflag = false;
 var ECE471NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE471NanoCoopPlan", []);
  var MATH309NanoCoopPlanflag = false;
  var MATH309NanoCoopPlanrflag = false;
 var MATH309NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("MATH309NanoCoopPlan", []);
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
  var ECE342NanoCoopPlanflag = false;
  var ECE342NanoCoopPlanrflag = false;
 var ECE342NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE342NanoCoopPlan", []);
  var ECE456NanoCoopPlanflag = false;
  var ECE456NanoCoopPlanrflag = false;
 var ECE456NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE456NanoCoopPlan", []);
  var ITSElectiveNanoCoopPlan0flag = false;
  var ITSElectiveNanoCoopPlan0rflag = false;
 var ITSElectiveNanoCoopPlan0Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ITSElectiveNanoCoopPlan0", []);
  var ComplementaryElectiveNanoCoopPlan1flag = false;
  var ComplementaryElectiveNanoCoopPlan1rflag = false;
 var ComplementaryElectiveNanoCoopPlan1Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ComplementaryElectiveNanoCoopPlan1", []);
  var WKEXP905NanoCoopPlanflag = false;
  var WKEXP905NanoCoopPlanrflag = false;
 var WKEXP905NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("WKEXP905NanoCoopPlan", []);
  var ECE360NanoCoopPlanflag = false;
  var ECE360NanoCoopPlanrflag = false;
 var ECE360NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE360NanoCoopPlan", []);
  var ECE457NanoCoopPlanflag = false;
  var ECE457NanoCoopPlanrflag = false;
 var ECE457NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE457NanoCoopPlan", []);
  var ECE490NanoCoopPlanflag = false;
  var ECE490NanoCoopPlanrflag = false;
 var ECE490NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE490NanoCoopPlan", []);
  var ENGG404NanoCoopPlanflag = false;
  var ENGG404NanoCoopPlanrflag = false;
 var ENGG404NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ENGG404NanoCoopPlan", []);
  var ProgramTechnicalElectiveNanoCoopPlan1flag = false;
  var ProgramTechnicalElectiveNanoCoopPlan1rflag = false;
 var ProgramTechnicalElectiveNanoCoopPlan1Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ProgramTechnicalElectiveNanoCoopPlan1", []);
  var ProgramTechnicalElectiveNanoCoopPlan2flag = false;
  var ProgramTechnicalElectiveNanoCoopPlan2rflag = false;
 var ProgramTechnicalElectiveNanoCoopPlan2Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ProgramTechnicalElectiveNanoCoopPlan2", []);
  var ECE450NanoCoopPlanflag = false;
  var ECE450NanoCoopPlanrflag = false;
 var ECE450NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE450NanoCoopPlan", []);
  var ECE475NanoCoopPlanflag = false;
  var ECE475NanoCoopPlanrflag = false;
 var ECE475NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE475NanoCoopPlan", []);
  var ECE491NanoCoopPlanflag = false;
  var ECE491NanoCoopPlanrflag = false;
 var ECE491NanoCoopPlanTime = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ECE491NanoCoopPlan", []);
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
  var ProgramTechnicalElectiveNanoCoopPlan3flag = false;
  var ProgramTechnicalElectiveNanoCoopPlan3rflag = false;
 var ProgramTechnicalElectiveNanoCoopPlan3Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ProgramTechnicalElectiveNanoCoopPlan3", []);
  var ProgramTechnicalElectiveNanoCoopPlan4flag = false;
  var ProgramTechnicalElectiveNanoCoopPlan4rflag = false;
 var ProgramTechnicalElectiveNanoCoopPlan4Time = new Date().getTime();
this.NanoCoopPlanClickedMap.set("ProgramTechnicalElectiveNanoCoopPlan4", []);
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
      that.addLine(getLine133());
     that.highlightElement(CHEM103NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM103NanoCoopPlan", "NaturalSciences");
      CHEM103NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine133());
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
      that.addLine(getLine131());
      that.addLine(getLine136());
     that.highlightElement(ENGG130NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("ENGG130NanoCoopPlan", "NaturalSciences");
      ENGG130NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine131());
      that.removeLine(getLine136());
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
      that.addLine(getLine134());
     that.highlightElement(ENGL199NanoCoopPlanelement, "Other");
     that.addToClicked("ENGL199NanoCoopPlan", "Other");
      ENGL199NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine134());
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
      that.addLine(getLine131());
      that.addLine(getLine132());
      that.addLine(getLine135());
      that.addLine(getLine138());
      that.addLine(getLine139());
      that.addLine(getLine152());
     that.highlightElement(MATH100NanoCoopPlanelement, "Math");
     that.addToClicked("MATH100NanoCoopPlan", "Math");
      MATH100NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine131());
      that.removeLine(getLine132());
      that.removeLine(getLine135());
      that.removeLine(getLine138());
      that.removeLine(getLine139());
      that.removeLine(getLine152());
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
      that.addLine(getLine132());
      that.addLine(getLine151());
     that.highlightElement(PHYS130NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS130NanoCoopPlan", "NaturalSciences");
      PHYS130NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine132());
      that.removeLine(getLine151());
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
      that.addLine(getLine133());
     that.highlightElement(CHEM105NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("CHEM105NanoCoopPlan", "NaturalSciences");
      CHEM105NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine133());
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
      that.addLine(getLine148());
     that.highlightElement(ENCMP100NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("ENCMP100NanoCoopPlan", "NaturalSciences");
      ENCMP100NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine148());
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
      that.addLine(getLine134());
     that.highlightElement(ENGG160NanoCoopPlanelement, "EngineeringDesign");
     that.addToClicked("ENGG160NanoCoopPlan", "EngineeringDesign");
      ENGG160NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine134());
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
      that.addLine(getLine135());
      that.addLine(getLine136());
      that.addLine(getLine137());
     that.highlightElement(ENPH131NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("ENPH131NanoCoopPlan", "NaturalSciences");
      ENPH131NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine135());
      that.removeLine(getLine136());
      that.removeLine(getLine137());
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
      that.addLine(getLine137());
      that.addLine(getLine138());
      that.addLine(getLine140());
      that.addLine(getLine143());
      that.addLine(getLine153());
     that.highlightElement(MATH101NanoCoopPlanelement, "Math");
     that.addToClicked("MATH101NanoCoopPlan", "Math");
      MATH101NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine137());
      that.removeLine(getLine138());
      that.removeLine(getLine140());
      that.removeLine(getLine143());
      that.removeLine(getLine153());
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
      that.addLine(getLine139());
      that.addLine(getLine141());
      that.addLine(getLine144());
      that.addLine(getLine160());
     that.highlightElement(MATH102NanoCoopPlanelement, "Math");
     that.addToClicked("MATH102NanoCoopPlan", "Math");
      MATH102NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine139());
      that.removeLine(getLine141());
      that.removeLine(getLine144());
      that.removeLine(getLine160());
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
      that.addLine(getLine140());
      that.addLine(getLine141());
      that.addLine(getLine145());
      that.addLine(getLine149());
     that.highlightElement(ECE202NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE202NanoCoopPlan", "EngineeringSciences");
      ECE202NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine140());
      that.removeLine(getLine141());
      that.removeLine(getLine145());
      that.removeLine(getLine149());
     that.unHighlightElement(ECE202NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE202NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE202NanoCoopPlanelement, category);
}
      ECE202NanoCoopPlanflag=false
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
      that.addLine(getLine147());
     that.highlightElement(ECE210NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE210NanoCoopPlan", "EngineeringSciences");
      ECE210NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine147());
     that.unHighlightElement(ECE210NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE210NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE210NanoCoopPlanelement, category);
}
      ECE210NanoCoopPlanflag=false
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
      that.addLine(getLine154());
     that.highlightElement(ENGG299NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("ENGG299NanoCoopPlan", "EngineeringProfession");
      ENGG299NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine154());
     that.unHighlightElement(ENGG299NanoCoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("ENGG299NanoCoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(ENGG299NanoCoopPlanelement, category);
}
      ENGG299NanoCoopPlanflag=false
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
      that.addLine(getLine142());
      that.addLine(getLine150());
     that.highlightElement(MATH201NanoCoopPlanelement, "Math");
     that.addToClicked("MATH201NanoCoopPlan", "Math");
      MATH201NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine142());
      that.removeLine(getLine150());
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
      that.addLine(getLine142());
      that.addLine(getLine143());
      that.addLine(getLine144());
      that.addLine(getLine161());
      that.addLine(getLine164());
      that.addLine(getLine171());
     that.highlightElement(MATH209NanoCoopPlanelement, "Math");
     that.addToClicked("MATH209NanoCoopPlan", "Math");
      MATH209NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine142());
      that.removeLine(getLine143());
      that.removeLine(getLine144());
      that.removeLine(getLine161());
      that.removeLine(getLine164());
      that.removeLine(getLine171());
     that.unHighlightElement(MATH209NanoCoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH209NanoCoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH209NanoCoopPlanelement, category);
}
      MATH209NanoCoopPlanflag=false
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
      that.addLine(getLine145());
      that.addLine(getLine146());
      that.addLine(getLine155());
      that.addLine(getLine174());
     that.highlightElement(ECE203NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE203NanoCoopPlan", "EngineeringSciences");
      ECE203NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine145());
      that.removeLine(getLine146());
      that.removeLine(getLine155());
      that.removeLine(getLine174());
     that.unHighlightElement(ECE203NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE203NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE203NanoCoopPlanelement, category);
}
      ECE203NanoCoopPlanflag=false
  }
};
$scope.ECE212NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE212NanoCoopPlanTime <= 200) { 
        ECE212NanoCoopPlanTime = currentTime;
        return;
    }
ECE212NanoCoopPlanTime = currentTime;
  var ECE212NanoCoopPlanelement = document.getElementById("ECE212NanoCoopPlan");
 if (!ECE212NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE212NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE212NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE212NanoCoopPlan")[i];
        if (ECE212NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE212NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine147());
      that.addLine(getLine157());
     that.highlightElement(ECE212NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE212NanoCoopPlan", "EngineeringSciences");
      ECE212NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine147());
      that.removeLine(getLine157());
     that.unHighlightElement(ECE212NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE212NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE212NanoCoopPlanelement, category);
}
      ECE212NanoCoopPlanflag=false
  }
};
$scope.ECE220NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE220NanoCoopPlanTime <= 200) { 
        ECE220NanoCoopPlanTime = currentTime;
        return;
    }
ECE220NanoCoopPlanTime = currentTime;
  var ECE220NanoCoopPlanelement = document.getElementById("ECE220NanoCoopPlan");
 if (!ECE220NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE220NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE220NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE220NanoCoopPlan")[i];
        if (ECE220NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE220NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine148());
      that.addLine(getLine156());
     that.highlightElement(ECE220NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE220NanoCoopPlan", "EngineeringSciences");
      ECE220NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine148());
      that.removeLine(getLine156());
     that.unHighlightElement(ECE220NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE220NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE220NanoCoopPlanelement, category);
}
      ECE220NanoCoopPlanflag=false
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
      that.addLine(getLine146());
      that.addLine(getLine149());
      that.addLine(getLine150());
      that.addLine(getLine159());
      that.addLine(getLine169());
      that.addLine(getLine175());
     that.highlightElement(ECE240NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE240NanoCoopPlan", "EngineeringSciences");
      ECE240NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine146());
      that.removeLine(getLine149());
      that.removeLine(getLine150());
      that.removeLine(getLine159());
      that.removeLine(getLine169());
      that.removeLine(getLine175());
     that.unHighlightElement(ECE240NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE240NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE240NanoCoopPlanelement, category);
}
      ECE240NanoCoopPlanflag=false
  }
};
$scope.PHYS230NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - PHYS230NanoCoopPlanTime <= 200) { 
        PHYS230NanoCoopPlanTime = currentTime;
        return;
    }
PHYS230NanoCoopPlanTime = currentTime;
  var PHYS230NanoCoopPlanelement = document.getElementById("PHYS230NanoCoopPlan");
 if (!PHYS230NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("PHYS230NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("PHYS230NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("PHYS230NanoCoopPlan")[i];
        if (PHYS230NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(PHYS230NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine151());
      that.addLine(getLine152());
      that.addLine(getLine153());
      that.addLine(getLine162());
     that.highlightElement(PHYS230NanoCoopPlanelement, "NaturalSciences");
     that.addToClicked("PHYS230NanoCoopPlan", "NaturalSciences");
      PHYS230NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine151());
      that.removeLine(getLine152());
      that.removeLine(getLine153());
      that.removeLine(getLine162());
     that.unHighlightElement(PHYS230NanoCoopPlanelement, "NaturalSciences");
     var category = that.removeFromClicked("PHYS230NanoCoopPlan", "NaturalSciences");
  if (category != "") { 
     that.highlightElement(PHYS230NanoCoopPlanelement, category);
}
      PHYS230NanoCoopPlanflag=false
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
      that.addLine(getLine154());
      that.addLine(getLine165());
     that.highlightElement(WKEXP901NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP901NanoCoopPlan", "EngineeringProfession");
      WKEXP901NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine154());
      that.removeLine(getLine165());
     that.unHighlightElement(WKEXP901NanoCoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP901NanoCoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP901NanoCoopPlanelement, category);
}
      WKEXP901NanoCoopPlanflag=false
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
      that.addLine(getLine155());
      that.addLine(getLine168());
      that.addLine(getLine172());
      that.addLine(getLine177());
      that.addLine(getLine178());
     that.highlightElement(ECE302NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE302NanoCoopPlan", "EngineeringSciences");
      ECE302NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine155());
      that.removeLine(getLine168());
      that.removeLine(getLine172());
      that.removeLine(getLine177());
      that.removeLine(getLine178());
     that.unHighlightElement(ECE302NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE302NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE302NanoCoopPlanelement, category);
}
      ECE302NanoCoopPlanflag=false
  }
};
$scope.ECE312NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE312NanoCoopPlanTime <= 200) { 
        ECE312NanoCoopPlanTime = currentTime;
        return;
    }
ECE312NanoCoopPlanTime = currentTime;
  var ECE312NanoCoopPlanelement = document.getElementById("ECE312NanoCoopPlan");
 if (!ECE312NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE312NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE312NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE312NanoCoopPlan")[i];
        if (ECE312NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE312NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine156());
      that.addLine(getLine157());
      that.addLine(getLine158());
      that.addLine(getLine176());
     that.highlightElement(ECE312NanoCoopPlanelement, "EngineeringDesign");
     that.addToClicked("ECE312NanoCoopPlan", "EngineeringDesign");
      ECE312NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine156());
      that.removeLine(getLine157());
      that.removeLine(getLine158());
      that.removeLine(getLine176());
     that.unHighlightElement(ECE312NanoCoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE312NanoCoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE312NanoCoopPlanelement, category);
}
      ECE312NanoCoopPlanflag=false
  }
};
$scope.ECE340NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE340NanoCoopPlanTime <= 200) { 
        ECE340NanoCoopPlanTime = currentTime;
        return;
    }
ECE340NanoCoopPlanTime = currentTime;
  var ECE340NanoCoopPlanelement = document.getElementById("ECE340NanoCoopPlan");
 if (!ECE340NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE340NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE340NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE340NanoCoopPlan")[i];
        if (ECE340NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE340NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine158());
      that.addLine(getLine159());
     that.highlightElement(ECE340NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE340NanoCoopPlan", "EngineeringSciences");
      ECE340NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine158());
      that.removeLine(getLine159());
     that.unHighlightElement(ECE340NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE340NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE340NanoCoopPlanelement, category);
}
      ECE340NanoCoopPlanflag=false
  }
};
$scope.ECE370NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE370NanoCoopPlanTime <= 200) { 
        ECE370NanoCoopPlanTime = currentTime;
        return;
    }
ECE370NanoCoopPlanTime = currentTime;
  var ECE370NanoCoopPlanelement = document.getElementById("ECE370NanoCoopPlan");
 if (!ECE370NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE370NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE370NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE370NanoCoopPlan")[i];
        if (ECE370NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE370NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine160());
      that.addLine(getLine161());
      that.addLine(getLine162());
      that.addLine(getLine163());
     that.highlightElement(ECE370NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE370NanoCoopPlan", "EngineeringSciences");
      ECE370NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine160());
      that.removeLine(getLine161());
      that.removeLine(getLine162());
      that.removeLine(getLine163());
     that.unHighlightElement(ECE370NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE370NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE370NanoCoopPlanelement, category);
}
      ECE370NanoCoopPlanflag=false
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
      that.addLine(getLine163());
     that.highlightElement(ECE471NanoCoopPlanelement, "course");
     that.addToClicked("ECE471NanoCoopPlan", "course");
      ECE471NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine163());
     that.unHighlightElement(ECE471NanoCoopPlanelement, "course");
     var category = that.removeFromClicked("ECE471NanoCoopPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE471NanoCoopPlanelement, category);
}
      ECE471NanoCoopPlanflag=false
  }
};
$scope.MATH309NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - MATH309NanoCoopPlanTime <= 200) { 
        MATH309NanoCoopPlanTime = currentTime;
        return;
    }
MATH309NanoCoopPlanTime = currentTime;
  var MATH309NanoCoopPlanelement = document.getElementById("MATH309NanoCoopPlan");
 if (!MATH309NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("MATH309NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("MATH309NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("MATH309NanoCoopPlan")[i];
        if (MATH309NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(MATH309NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine164());
      that.addLine(getLine170());
     that.highlightElement(MATH309NanoCoopPlanelement, "Math");
     that.addToClicked("MATH309NanoCoopPlan", "Math");
      MATH309NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine164());
      that.removeLine(getLine170());
     that.unHighlightElement(MATH309NanoCoopPlanelement, "Math");
     var category = that.removeFromClicked("MATH309NanoCoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(MATH309NanoCoopPlanelement, category);
}
      MATH309NanoCoopPlanflag=false
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
      that.addLine(getLine165());
      that.addLine(getLine166());
     that.highlightElement(WKEXP902NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP902NanoCoopPlan", "EngineeringProfession");
      WKEXP902NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine165());
      that.removeLine(getLine166());
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
      that.addLine(getLine166());
      that.addLine(getLine167());
     that.highlightElement(WKEXP903NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP903NanoCoopPlan", "EngineeringProfession");
      WKEXP903NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine166());
      that.removeLine(getLine167());
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
      that.addLine(getLine167());
      that.addLine(getLine173());
     that.highlightElement(WKEXP904NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP904NanoCoopPlan", "EngineeringProfession");
      WKEXP904NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine167());
      that.removeLine(getLine173());
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
      that.addLine(getLine168());
     that.highlightElement(ECE303NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE303NanoCoopPlan", "EngineeringSciences");
      ECE303NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine168());
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
      that.addLine(getLine169());
      that.addLine(getLine170());
     that.highlightElement(ECE341NanoCoopPlanelement, "course");
     that.addToClicked("ECE341NanoCoopPlan", "course");
      ECE341NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine169());
      that.removeLine(getLine170());
     that.unHighlightElement(ECE341NanoCoopPlanelement, "course");
     var category = that.removeFromClicked("ECE341NanoCoopPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE341NanoCoopPlanelement, category);
}
      ECE341NanoCoopPlanflag=false
  }
};
$scope.ECE342NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE342NanoCoopPlanTime <= 200) { 
        ECE342NanoCoopPlanTime = currentTime;
        return;
    }
ECE342NanoCoopPlanTime = currentTime;
  var ECE342NanoCoopPlanelement = document.getElementById("ECE342NanoCoopPlan");
 if (!ECE342NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE342NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE342NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE342NanoCoopPlan")[i];
        if (ECE342NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE342NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine171());
     that.highlightElement(ECE342NanoCoopPlanelement, "Math");
     that.addToClicked("ECE342NanoCoopPlan", "Math");
      ECE342NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine171());
     that.unHighlightElement(ECE342NanoCoopPlanelement, "Math");
     var category = that.removeFromClicked("ECE342NanoCoopPlan", "Math");
  if (category != "") { 
     that.highlightElement(ECE342NanoCoopPlanelement, category);
}
      ECE342NanoCoopPlanflag=false
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
      that.addLine(getLine172());
     that.highlightElement(ECE456NanoCoopPlanelement, "course");
     that.addToClicked("ECE456NanoCoopPlan", "course");
      ECE456NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine172());
     that.unHighlightElement(ECE456NanoCoopPlanelement, "course");
     var category = that.removeFromClicked("ECE456NanoCoopPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE456NanoCoopPlanelement, category);
}
      ECE456NanoCoopPlanflag=false
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
      that.addLine(getLine173());
     that.highlightElement(WKEXP905NanoCoopPlanelement, "EngineeringProfession");
     that.addToClicked("WKEXP905NanoCoopPlan", "EngineeringProfession");
      WKEXP905NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine173());
     that.unHighlightElement(WKEXP905NanoCoopPlanelement, "EngineeringProfession");
     var category = that.removeFromClicked("WKEXP905NanoCoopPlan", "EngineeringProfession");
  if (category != "") { 
     that.highlightElement(WKEXP905NanoCoopPlanelement, category);
}
      WKEXP905NanoCoopPlanflag=false
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
      that.addLine(getLine174());
      that.addLine(getLine175());
     that.highlightElement(ECE360NanoCoopPlanelement, "EngineeringSciences");
     that.addToClicked("ECE360NanoCoopPlan", "EngineeringSciences");
      ECE360NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine174());
      that.removeLine(getLine175());
     that.unHighlightElement(ECE360NanoCoopPlanelement, "EngineeringSciences");
     var category = that.removeFromClicked("ECE360NanoCoopPlan", "EngineeringSciences");
  if (category != "") { 
     that.highlightElement(ECE360NanoCoopPlanelement, category);
}
      ECE360NanoCoopPlanflag=false
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
$scope.ECE490NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE490NanoCoopPlanTime <= 200) { 
        ECE490NanoCoopPlanTime = currentTime;
        return;
    }
ECE490NanoCoopPlanTime = currentTime;
  var ECE490NanoCoopPlanelement = document.getElementById("ECE490NanoCoopPlan");
 if (!ECE490NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE490NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE490NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE490NanoCoopPlan")[i];
        if (ECE490NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE490NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine176());
      that.addLine(getLine179());
     that.highlightElement(ECE490NanoCoopPlanelement, "EngineeringDesign");
     that.addToClicked("ECE490NanoCoopPlan", "EngineeringDesign");
      ECE490NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine176());
      that.removeLine(getLine179());
     that.unHighlightElement(ECE490NanoCoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE490NanoCoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE490NanoCoopPlanelement, category);
}
      ECE490NanoCoopPlanflag=false
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
$scope.ProgramTechnicalElectiveNanoCoopPlan2Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveNanoCoopPlan2Time <= 200) { 
        ProgramTechnicalElectiveNanoCoopPlan2Time = currentTime;
        return;
    }
ProgramTechnicalElectiveNanoCoopPlan2Time = currentTime;
  var ProgramTechnicalElectiveNanoCoopPlan2element = document.getElementById("ProgramTechnicalElectiveNanoCoopPlan2");
 if (!ProgramTechnicalElectiveNanoCoopPlan2flag) {
     if (that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan2").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan2").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan2")[i];
        if (ProgramTechnicalElectiveNanoCoopPlan2element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveNanoCoopPlan2element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveNanoCoopPlan2element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveNanoCoopPlan2", "PROG");
      ProgramTechnicalElectiveNanoCoopPlan2flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveNanoCoopPlan2element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveNanoCoopPlan2", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveNanoCoopPlan2element, category);
}
      ProgramTechnicalElectiveNanoCoopPlan2flag=false
  }
};
$scope.ECE450NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE450NanoCoopPlanTime <= 200) { 
        ECE450NanoCoopPlanTime = currentTime;
        return;
    }
ECE450NanoCoopPlanTime = currentTime;
  var ECE450NanoCoopPlanelement = document.getElementById("ECE450NanoCoopPlan");
 if (!ECE450NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE450NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE450NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE450NanoCoopPlan")[i];
        if (ECE450NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE450NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine177());
     that.highlightElement(ECE450NanoCoopPlanelement, "course");
     that.addToClicked("ECE450NanoCoopPlan", "course");
      ECE450NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine177());
     that.unHighlightElement(ECE450NanoCoopPlanelement, "course");
     var category = that.removeFromClicked("ECE450NanoCoopPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE450NanoCoopPlanelement, category);
}
      ECE450NanoCoopPlanflag=false
  }
};
$scope.ECE475NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE475NanoCoopPlanTime <= 200) { 
        ECE475NanoCoopPlanTime = currentTime;
        return;
    }
ECE475NanoCoopPlanTime = currentTime;
  var ECE475NanoCoopPlanelement = document.getElementById("ECE475NanoCoopPlan");
 if (!ECE475NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE475NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE475NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE475NanoCoopPlan")[i];
        if (ECE475NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE475NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine178());
     that.highlightElement(ECE475NanoCoopPlanelement, "course");
     that.addToClicked("ECE475NanoCoopPlan", "course");
      ECE475NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine178());
     that.unHighlightElement(ECE475NanoCoopPlanelement, "course");
     var category = that.removeFromClicked("ECE475NanoCoopPlan", "course");
  if (category != "") { 
     that.highlightElement(ECE475NanoCoopPlanelement, category);
}
      ECE475NanoCoopPlanflag=false
  }
};
$scope.ECE491NanoCoopPlanListener = function () {
var currentTime = new Date().getTime();
if (currentTime - ECE491NanoCoopPlanTime <= 200) { 
        ECE491NanoCoopPlanTime = currentTime;
        return;
    }
ECE491NanoCoopPlanTime = currentTime;
  var ECE491NanoCoopPlanelement = document.getElementById("ECE491NanoCoopPlan");
 if (!ECE491NanoCoopPlanflag) {
     if (that.NanoCoopPlanClickedMap.get("ECE491NanoCoopPlan").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ECE491NanoCoopPlan").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ECE491NanoCoopPlan")[i];
        if (ECE491NanoCoopPlanelement.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ECE491NanoCoopPlanelement, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
      that.addLine(getLine179());
     that.highlightElement(ECE491NanoCoopPlanelement, "EngineeringDesign");
     that.addToClicked("ECE491NanoCoopPlan", "EngineeringDesign");
      ECE491NanoCoopPlanflag=true
  }
 else {
      that.removeLine(getLine179());
     that.unHighlightElement(ECE491NanoCoopPlanelement, "EngineeringDesign");
     var category = that.removeFromClicked("ECE491NanoCoopPlan", "EngineeringDesign");
  if (category != "") { 
     that.highlightElement(ECE491NanoCoopPlanelement, category);
}
      ECE491NanoCoopPlanflag=false
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
$scope.ProgramTechnicalElectiveNanoCoopPlan3Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveNanoCoopPlan3Time <= 200) { 
        ProgramTechnicalElectiveNanoCoopPlan3Time = currentTime;
        return;
    }
ProgramTechnicalElectiveNanoCoopPlan3Time = currentTime;
  var ProgramTechnicalElectiveNanoCoopPlan3element = document.getElementById("ProgramTechnicalElectiveNanoCoopPlan3");
 if (!ProgramTechnicalElectiveNanoCoopPlan3flag) {
     if (that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan3").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan3").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan3")[i];
        if (ProgramTechnicalElectiveNanoCoopPlan3element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveNanoCoopPlan3element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveNanoCoopPlan3element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveNanoCoopPlan3", "PROG");
      ProgramTechnicalElectiveNanoCoopPlan3flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveNanoCoopPlan3element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveNanoCoopPlan3", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveNanoCoopPlan3element, category);
}
      ProgramTechnicalElectiveNanoCoopPlan3flag=false
  }
};
$scope.ProgramTechnicalElectiveNanoCoopPlan4Listener = function () {
var currentTime = new Date().getTime();
if (currentTime - ProgramTechnicalElectiveNanoCoopPlan4Time <= 200) { 
        ProgramTechnicalElectiveNanoCoopPlan4Time = currentTime;
        return;
    }
ProgramTechnicalElectiveNanoCoopPlan4Time = currentTime;
  var ProgramTechnicalElectiveNanoCoopPlan4element = document.getElementById("ProgramTechnicalElectiveNanoCoopPlan4");
 if (!ProgramTechnicalElectiveNanoCoopPlan4flag) {
     if (that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan4").length > 0) { 
 var trueCounter = 0;
          for (let i = 0; i < that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan4").length; i++) { 
        var cate = that.NanoCoopPlanClickedMap.get("ProgramTechnicalElectiveNanoCoopPlan4")[i];
        if (ProgramTechnicalElectiveNanoCoopPlan4element.classList.contains(cate + "-highlighted")) {
            trueCounter++;
            that.unHighlightElement(ProgramTechnicalElectiveNanoCoopPlan4element, cate);
        }
    }
    if (trueCounter > 0) {
        return;
    }}
     that.highlightElement(ProgramTechnicalElectiveNanoCoopPlan4element, "PROG");
     that.addToClicked("ProgramTechnicalElectiveNanoCoopPlan4", "PROG");
      ProgramTechnicalElectiveNanoCoopPlan4flag=true
  }
 else {
     that.unHighlightElement(ProgramTechnicalElectiveNanoCoopPlan4element, "PROG");
     var category = that.removeFromClicked("ProgramTechnicalElectiveNanoCoopPlan4", "PROG");
  if (category != "") { 
     that.highlightElement(ProgramTechnicalElectiveNanoCoopPlan4element, category);
}
      ProgramTechnicalElectiveNanoCoopPlan4flag=false
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
$scope.ECE212NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE212NanoCoopPlandesc");
 if (!ECE212NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE212NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE212NanoCoopPlanrflag=false
  }
};
$scope.ECE220NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE220NanoCoopPlandesc");
 if (!ECE220NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE220NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE220NanoCoopPlanrflag=false
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
$scope.PHYS230NanoCoopPlanRCListener = function () {
  var element = document.getElementById("PHYS230NanoCoopPlandesc");
 if (!PHYS230NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      PHYS230NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      PHYS230NanoCoopPlanrflag=false
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
$scope.ECE312NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE312NanoCoopPlandesc");
 if (!ECE312NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE312NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE312NanoCoopPlanrflag=false
  }
};
$scope.ECE340NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE340NanoCoopPlandesc");
 if (!ECE340NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE340NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE340NanoCoopPlanrflag=false
  }
};
$scope.ECE370NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE370NanoCoopPlandesc");
 if (!ECE370NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE370NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE370NanoCoopPlanrflag=false
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
$scope.MATH309NanoCoopPlanRCListener = function () {
  var element = document.getElementById("MATH309NanoCoopPlandesc");
 if (!MATH309NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      MATH309NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      MATH309NanoCoopPlanrflag=false
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
$scope.ECE342NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE342NanoCoopPlandesc");
 if (!ECE342NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE342NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE342NanoCoopPlanrflag=false
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
$scope.ECE490NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE490NanoCoopPlandesc");
 if (!ECE490NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE490NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE490NanoCoopPlanrflag=false
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
$scope.ProgramTechnicalElectiveNanoCoopPlan2RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveNanoCoopPlan2desc");
 if (!ProgramTechnicalElectiveNanoCoopPlan2rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveNanoCoopPlan2rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveNanoCoopPlan2rflag=false
  }
};
$scope.ECE450NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE450NanoCoopPlandesc");
 if (!ECE450NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE450NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE450NanoCoopPlanrflag=false
  }
};
$scope.ECE475NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE475NanoCoopPlandesc");
 if (!ECE475NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE475NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE475NanoCoopPlanrflag=false
  }
};
$scope.ECE491NanoCoopPlanRCListener = function () {
  var element = document.getElementById("ECE491NanoCoopPlandesc");
 if (!ECE491NanoCoopPlanrflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ECE491NanoCoopPlanrflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ECE491NanoCoopPlanrflag=false
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
$scope.ProgramTechnicalElectiveNanoCoopPlan3RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveNanoCoopPlan3desc");
 if (!ProgramTechnicalElectiveNanoCoopPlan3rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveNanoCoopPlan3rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveNanoCoopPlan3rflag=false
  }
};
$scope.ProgramTechnicalElectiveNanoCoopPlan4RCListener = function () {
  var element = document.getElementById("ProgramTechnicalElectiveNanoCoopPlan4desc");
 if (!ProgramTechnicalElectiveNanoCoopPlan4rflag) {
       if (element.classList.contains("tooltiptextleft")) {
        element.classList.remove("tooltiptextleft");
        element.classList.add("tooltiptextleft-locked");
    } else {
        element.classList.remove("tooltiptextright");
        element.classList.add("tooltiptextright-locked");
    }
      ProgramTechnicalElectiveNanoCoopPlan4rflag=true
  }
 else {
       if (element.classList.contains("tooltiptextleft-locked")) {
        element.classList.remove("tooltiptextleft-locked");
        element.classList.add("tooltiptextleft");
    } else {
        element.classList.remove("tooltiptextright-locked");
        element.classList.add("tooltiptextright");
    }
      ProgramTechnicalElectiveNanoCoopPlan4rflag=false
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