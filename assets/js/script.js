var taskIdCounter = 0;
var buttonEl = document.querySelector("#save-task"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 
var createTaskEl = function(taskDataObj) {
    var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";
    return actionContainerEl;
    };
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    var taskButtonHandler = function(event) {
        // get target element from event
        var targetEl = event.target;
      
        // edit button was clicked
        if (targetEl.matches(".edit-btn")) {
          var taskId = targetEl.getAttribute("data-task-id");
          editTask(taskId);
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
            console.log("editing task #" + taskId);
          
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

    // append to select
    statusSelectEl.appendChild(statusOptionEl);
    }}