var tasksInProgressEl = document.querySelector("#tasks-in-progress");
var taskCompleted = document.querySelector("#task-completed");


var taskIdCounter = 0;
var buttonEl = document.querySelector("#save-task"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 
var createTaskEl = function(taskDataObj) {
    var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
    return actionContainerEl;
    };

    var isEdit = formEl.hasAttribute("data-task-id");
    
    var completeEditTask = function(taskName, taskType, taskId) {
      // find the matching task list item
var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

// set new values
taskSelected.querySelector("h3.task-name").textContent = taskName;
taskSelected.querySelector("span.task-type").textContent = taskType;

alert("Task Updated!");
formEl,removeAttribute("date-task-id");
document.querySelector("#save-task").textContent = "Add Task";
    };
    // PUT THIS BELOW `var isEdit = ...` in `taskFormHandler()`

// has data attribute, so get task id and call function to complete edit process
if (isEdit) {
  var taskId = formEl.getAttribute("data-task-id");
  completeEditTask(taskNameInput, taskTypeInput, taskId);
} 
// no data attribute, so create object as normal and pass to createTaskEl function
else {
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  createTaskEl(taskDataObj);
}

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    var taskButtonHandler = function(event) {
      // get target element from event
      var targetEl = event.target;
    
      // edit button was clicked
      if (targetEl.matches(".edit-btn")) {
        var taskId = targetEl.getAttribute("data-task-id", taskId);
        editTask(taskId);
        document.querySelector("#save-task").textContent = "Save Task";
      } 
      // delete button was clicked
      else if (targetEl.matches(".delete-btn")) {
        var taskId = targetEl.getAttribute("data-task-id");
        deleteTask(taskId);
      }
    };
      var taskButtonHandler = function(event) {
        console.log(event.target);
      
        if (event.target.matches(".delete-btn")) {
          // get the element's task id
          var taskId = event.target.getAttribute("data-task-id");
          console.log(taskId);
        }
      };
     var pageContentEl = document.querySelector("#page-content");
    // other logic...
    pageContentEl.addEventListener("click", taskButtonHandler);

    // add task id as a custom attribute 
    listItemEl.setAttribute("data-task-id", taskIdCounter);
    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);

    tasksToDoEl.appendChild(listItemEl);
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    var taskActionsEl = createTaskActions(taskIdCounter);
    console.log(taskActionsEl);
    listItemEl.appendChild(taskInfoEl);
  
    tasksToDoEl.appendChild(listItemEl);
  
    // increase task counter for next unique id
    taskIdCounter++;
    };
    var deleteTask = function(taskId) {
    var editTask = function(taskId) {
      // get task list item element
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    // get content from task name and type
    var taskName = taskSelected.querySelector("h3.task-name").textContent;
    console.log(taskName);

    var taskType = taskSelected.querySelector("span.task-type").textContent;
    console.log(taskType);
    document.querySelector("input[name='task-name']").value = taskName;
    document.querySelector("select[name='task-type']").value = taskType;
    
    // get task list item element
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    };
    // create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);
    var statusChoices = ["To Do", "In Progress", "Completed"];
    actionContainerEl.appendChild(statusSelectEl);
    for (var i = 0; i < statusChoices.length; i++) {
    // create option element
    var statusOptionEl = document.createElement("option");
    statusOptionEl.textContent = statusChoices[i];
    statusOptionEl.setAttribute("value", statusChoices[i]);
    var taskStatusChangeHandler = function(event) {
    console.log(event.target, event.target.getAttribute("data-task-id"));
    };
    var taskStatusChangeHandler = function(event) {
      // get the task item's id
      var taskId = event.target.getAttribute("data-task-id");
    
      // get the currently selected option's value and convert to lowercase
      var statusValue = event.target.value.toLowerCase();
    
      // find the parent task item element based on the id
      var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
      if (statusValue === "to do") {
        tasksToDoEl.appendChild(taskSelected);
      } 
      else if (statusValue === "in progress") {
        tasksInProgressEl.appendChild(taskSelected);
      } 
      else if (statusValue === "completed") {
        tasksCompletedEl.appendChild(taskSelected);
      }
    };
    // append to select
    statusSelectEl.appendChild(statusOptionEl);
    }}
    pageContentEl.addEventListener("change", taskStatusChangeHandler);
    